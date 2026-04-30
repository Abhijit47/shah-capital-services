import Banner from '#/features/banner/Banner'
import FaqSec from '#/features/faq/FaqSec'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(pages)/faqs')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <main>
      <Banner title="Our Faq" subTitle="Faq" />
      <FaqSec />
    </main>
  )
}
