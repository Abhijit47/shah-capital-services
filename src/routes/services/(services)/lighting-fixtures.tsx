import Banner from '#/features/banner/Banner'
import LightingFixturesMain from '#/features/lighting-fixtures/LightingFixturesMain'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/services/(services)/lighting-fixtures')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <main>
      <Banner
        title="Lighting & Fixtures"
        subTitle="Services"
        thirdTitle="Lighting & Fixtures"
      />
      <LightingFixturesMain />
    </main>
  )
}
