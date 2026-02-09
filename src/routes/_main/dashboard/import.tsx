import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_main/dashboard/import')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_main/dashboard/import"!</div>
}
