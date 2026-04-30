import Banner from '#/features/banner/Banner'
import CommercialServicesMain from '#/features/commercial-services/CommercialServicesMain'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/services/(services)/commercial-services',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <main>
      <Banner
        title="Commercial services"
        subTitle="Services"
        thirdTitle="Commercial services"
      />
      <CommercialServicesMain />
    </main>
  )
}
