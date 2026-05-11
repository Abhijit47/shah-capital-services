import { MDXContent } from '@content-collections/mdx/react'
import { createFileRoute, Link, notFound } from '@tanstack/react-router'
import { allPosts } from 'content-collections'

import Banner from '#/features/banner/Banner.tsx'
// import BlogDetailsMain from '#/features/blog/BlogDetailsMain.tsx'
// import BlogSidebar from '#/features/blog/BlogSidebar.tsx'
import FadeInAdvanced from '#/components/elements/FadeInAdvanced.tsx'
import { formattedDate } from '#/lib/utls.ts'
import BlogDetailsImg1 from '/assets/images/blog/blog-details-img-1.jpg'

export const Route = createFileRoute('/blogs/$slug')({
  beforeLoad: ({ params }) => {
    const blog = allPosts.find((post) => post.slug === params.slug)
    if (!blog) {
      throw notFound()
    }
    return blog
  },
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <main>
      <Banner title="Blog Details" />
      <BlogDetails />
    </main>
  )
}

function BlogDetails() {
  const blog = Route.useRouteContext()
  return (
    <section className="blog-details">
      <div className="container">
        <div className="row">
          <div className="col-xl-8 col-lg-7">
            <article id="article">
              <div className="blog-details__left">
                <div className="blog-details__img">
                  <img
                    src={BlogDetailsImg1}
                    width={850}
                    height={509}
                    alt="Image"
                  />
                  <div className="blog-details__date">
                    <p>{formattedDate(blog.createdAt)}</p>
                  </div>
                </div>
                <div className="blog-details__content">
                  <div className="blog-details__user-and-meta">
                    <div className="blog-details__user">
                      <p>
                        <span className="fa fa-user"></span>By {blog.author}
                      </p>
                    </div>
                    <ul className="blog-details__meta list-unstyled">
                      <li>
                        <a href="#">
                          <span className="fas fa-clock"></span>
                          {blog.readTime} Min Read
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div id="blog-markdown" className={'mt-3'}>
                    <MDXContent code={blog.mdx} />
                  </div>

                  <div className="blog-details__tag-and-share">
                    <div className="blog-details__tag">
                      <h3 className="blog-details__tag-title">Tags :</h3>

                      <div
                        className={
                          'd-flex flex-wrap align-items-center justify-content-center gap-2'
                        }
                      >
                        {blog.categories.map((category) => (
                          <span
                            className={'badge bg-secondary text-white'}
                            key={category}
                          >
                            {category}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="blog-details__share-box">
                      <h3 className="blog-details__share-title">Share :</h3>
                      <div className="blog-details__share">
                        <a href="#" title="Facebook">
                          <span className="icon-facebook"></span>
                        </a>
                        <a href="#" title="Twitter">
                          <span className="icon-xpa"></span>
                        </a>
                        <a href="#" title="Linkedin">
                          <span className="icon-link-in"></span>
                        </a>
                        <a href="#" title="Instagram">
                          <span className="icon-instagram"></span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
          {/* Start Sidebar*/}
          <BlogSidebar wrapper="col-xl-4 col-lg-5" inner="sidebar" />
          {/* End Sidebar*/}
        </div>
      </div>
    </section>
  )
}

interface BlogSidebar {
  wrapper: string
  inner: string
}
const BlogSidebar: React.FC<BlogSidebar> = ({ wrapper, inner }) => {
  const recentBlogs = allPosts
    .sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
    )
    .slice(0, 3)

  const tags = Array.from(
    new Set(allPosts.flatMap((post) => post.categories)),
  ).slice(0, 10)

  return (
    <div className={wrapper}>
      <div className={inner}>
        {/* Start Sidebar Single*/}
        <FadeInAdvanced
          variant={'fadeInUp'}
          delay={100}
          className="sidebar__single sidebar__post"
        >
          <h3 className="sidebar__title">Recent Post</h3>
          <div className="sidebar__post-box">
            {recentBlogs.map((blog) => (
              <div className="sidebar__post-single" key={blog._meta.path}>
                <div className="sidebar-post__img">
                  <img
                    src={'/assets/images/blog/blog-details-img-1.jpg'}
                    width={350}
                    height={140}
                    alt="Image"
                  />
                </div>
                <div className="sidebar__post-content-box">
                  <h3>
                    <Link to="/blogs/$slug" params={{ slug: blog.slug }}>
                      {blog.title}
                    </Link>
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </FadeInAdvanced>
        {/* End Sidebar Single*/}

        {/* Start Sidebar Single*/}
        <FadeInAdvanced
          variant={'fadeInUp'}
          delay={100}
          className="sidebar__single sidebar__tags"
        >
          <h3 className="sidebar__title">Tags Cloud</h3>
          <ul className="sidebar__tags-list clearfix list-unstyled">
            {tags.map((tag) => (
              <li key={tag}>
                <Link to=".">{tag}</Link>
              </li>
            ))}
          </ul>
        </FadeInAdvanced>
        {/* End Sidebar Single*/}
      </div>
    </div>
  )
}
