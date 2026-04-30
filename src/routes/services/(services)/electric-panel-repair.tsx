import Banner from '#/features/banner/Banner'
import ElectricPanelMain from '#/features/electric-panel-repair/ElectricPanelMain'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/services/(services)/electric-panel-repair',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <main>
      <Banner
        title="Electric Panel Repair"
        subTitle="Services"
        thirdTitle="Electric Panel Repair"
      />
      <ElectricPanelMain />
    </main>
  )
}
