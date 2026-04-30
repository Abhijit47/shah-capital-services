import Banner from '#/features/banner/Banner'
import TestimonialsSec from '#/features/testimonials/TestimonialsSec'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(pages)/testimonials')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <main>
      <Banner title="Testimonials" subTitle="Testimonials" />
      <TestimonialsSec />
    </main>
  )
}
