import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/terms-and-condition')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/terms-and-condition"!</div>
}
