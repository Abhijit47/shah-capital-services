import Banner from '#/features/banner/Banner'
import MaintenanceMain from '#/features/maintenance/MaintenanceMain'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/services/(services)/maintenance-service',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <main>
      <Banner
        title="Maintenance Service"
        subTitle="Service"
        thirdTitle="Maintenance Service"
      />
      <MaintenanceMain />
    </main>
  )
}
