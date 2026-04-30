import Banner from '#/features/banner/Banner'
import ServicesSec from '#/features/services/ServicesSec'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/services/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <main>
      <Banner title="Services" subTitle="Services" />
      <ServicesSec />
    </main>
  )
}
