import Banner from '#/features/banner/Banner'
import ShortCircuitMain from '#/features/short-circuit-repair/ShortCircuitMain'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/services/(services)/short-circuit-repair',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <main>
      <Banner
        title="Short circuit repair"
        subTitle="Services"
        thirdTitle="Short circuit repair"
      />
      <ShortCircuitMain />
    </main>
  )
}
