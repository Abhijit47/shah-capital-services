import Banner from '#/features/banner/Banner'
import BlogRightSidebarMain from '#/features/blog/BlogRightSidebarMain'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/blogs/blog-right-sidebar')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <main>
      <Banner title="Blog Right Sidebar" />
      <BlogRightSidebarMain />
    </main>
  )
}
