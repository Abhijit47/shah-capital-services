import Banner from '#/features/banner/Banner'
import InstallingCilingFanMain from '#/features/installing-ceiling-fan/InstallingCilingFanMain'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/services/(services)/installing-ceiling-fan',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <main>
      <Banner
        title="Installing a ceiling fan"
        subTitle="Servics"
        thirdTitle="Installing a ceiling fan"
      />
      <InstallingCilingFanMain />
    </main>
  )
}
