import Banner from '#/features/banner/Banner'
import BlogStandartMain from '#/features/blog/BlogStandartMain'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/blogs/blog-standard')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <main>
      <Banner title="Blog & News" />
      <BlogStandartMain />
    </main>
  )
}
