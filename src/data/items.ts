import { prisma } from '@/db'
import { firecrawl } from '@/lib/firecrawl'
import { importSchema, scrapeSchema } from '@/schemas/import'
import { createServerFn } from '@tanstack/react-start'
import z from 'zod'
import { authMiddleware } from '@/middleware/auth'

export const scrapeUrlFn = createServerFn({ method: 'POST' }).middleware([authMiddleware])
  .inputValidator(importSchema)
  .handler(async ({ data, context }) => {
    const item = await prisma.savedItem.create({
      data: {
        url: data.url,
        userId: context.session.userId, // TODO: get from session
        status: 'PROCESSING'
      }
    })
    
    try {
      const result = await firecrawl.scrape(data.url, {
      formats: ['markdown', {type: 'json', prompt: 'please extract the author of the page and also the published date (doesnt matter if the article get updated, just put the published date that appear on the website.)'}],
      onlyMainContent: true,
    })

    const jsonData = result.json as z.infer<typeof scrapeSchema>

    console.log(jsonData)
    let publishedAt = null

    if(jsonData.publishedDate) {
      const parsed = new Date(jsonData.publishedDate)

      if(!isNaN(parsed.getTime())) {
        publishedAt = parsed
      }
    }

    const updateItem = await prisma.savedItem.update({
      where: {
        id: item.id
      },
      data: {
        title: result.metadata?.title || null,
        content: result.markdown || null,
        ogImage: result.metadata?.ogImage || null,
        author: jsonData.author || null,
        publishedAt: publishedAt,
        status: "COMPLETED"
      },
    })
    return updateItem
    } catch {
      const failedItem = await prisma.savedItem.update({
        where: {
          id: item.id
        },
        data: {
          status: 'FAILED'
        }
      })
      return failedItem
    }
    
  })
