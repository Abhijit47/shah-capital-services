import Banner from '#/features/banner/Banner'
import Contact from '#/features/contact/Contact'
// import ContactTwo from '#/features/home-two/ContactTwo.tsx'
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
        {/* <ContactTwo /> */}
        <Contact />
      </div>
    </main>
  )
}
