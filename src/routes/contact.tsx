import Banner from '#/features/banner/Banner'
import Contact from '#/features/contact/Contact'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/contact')({
  head: () => ({
    meta: [
      {
        title: 'Contact | Shah Capital Services',
      },
    ],
  }),
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <main>
      <div className="page-wrapper">
        <Banner title="Contact" subTitle="Contact Us" />
        <Contact />
      </div>
    </main>
  )
}
