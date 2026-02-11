import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/_main/dashboard/')({
  beforeLoad: () => {
    throw redirect({ to: '/dashboard/import' })
  },
})
