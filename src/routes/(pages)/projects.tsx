import Banner from '#/features/banner/Banner'
import ProjectSec from '#/features/project/ProjectSec'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(pages)/projects')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <main>
      <Banner title="Projects" subTitle="Projects" />
      <ProjectSec />
    </main>
  )
}
