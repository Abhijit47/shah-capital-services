import Banner from '#/features/banner/Banner'
import PricingOne from '#/features/home-one/PricingOne'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(pages)/pricing')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <main>
      <Banner title="Pricing" subTitle="Pricing" />
      <PricingOne secClass="pricing-page" />
    </main>
  )
}
