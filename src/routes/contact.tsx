import Banner from '#/features/banner/Banner'
import Contact from '#/features/contact/Contact'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/contact')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <main>
      <Banner title="Contact" subTitle="Contact Us" />
      <Contact />
    </main>
  )
}
