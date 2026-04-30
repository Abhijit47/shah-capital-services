import Banner from '#/features/banner/Banner'
import BlogDetailsMain from '#/features/blog/BlogDetailsMain'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/blogs/blog-details')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <main>
      <Banner title="Blog Details" />
      <BlogDetailsMain />
    </main>
  )
}
