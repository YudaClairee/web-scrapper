import z from 'zod'

export const importSchema = z.object({
  url: z.url(),
})

export const bulkImportSchema = z.object({
  url: z.url(),
  search: z.string(),
})

export const scrapeSchema = z.object({
  author: z.string().nullable(),
  publishedDate: z.string().nullable()
})
