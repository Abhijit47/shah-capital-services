import Banner from '#/features/banner/Banner'
import BlogLeftSidebarMain from '#/features/blog/BlogLeftSidebarMain'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/blogs/blog-left-sidebar')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <main>
      <Banner title="Blog Left Sidebar" />
      <BlogLeftSidebarMain />
    </main>
  )
}
