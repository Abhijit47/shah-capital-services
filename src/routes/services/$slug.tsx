import { createFileRoute } from '@tanstack/react-router'
import { allServices } from 'content-collections'

export const Route = createFileRoute('/services/$slug')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      Hello "/services/$slug"!
      <h2>All Services:</h2>
      <ul>
        {allServices.map((service) => (
          <li key={service.slug}>
            {service.title} - {service.summary}
          </li>
        ))}
      </ul>
    </div>
  )
}
