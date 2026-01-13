import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_main/dashboard/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <h1>Hello</h1>
    </>
  )
}
