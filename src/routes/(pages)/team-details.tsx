import Banner from '#/features/banner/Banner'
import DetailsSecContact from '#/features/team/DetailsSecContact'
import DetailsSecOne from '#/features/team/DetailsSecOne'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(pages)/team-details')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <main>
      <Banner title="Team Details" subTitle="Team Details" />
      <DetailsSecOne />
      <DetailsSecContact />
    </main>
  )
}
