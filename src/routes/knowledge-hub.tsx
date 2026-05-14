import { createFileRoute, Link, useLocation } from '@tanstack/react-router'
// import Lightbox from 'yet-another-react-lightbox'

import type { AnimationVariant } from '#/components/elements/FadeInAdvanced.tsx'
import FadeInAdvanced from '#/components/elements/FadeInAdvanced.tsx'
import TextAnimation from '#/components/elements/TextAnimation.tsx'
import Banner from '#/features/banner/Banner.tsx'

import blogShape1 from '/assets/images/shapes/blog-one-shape-1.png'
import blogShape2 from '/assets/images/shapes/blog-one-shape-2.png'

import SectionWrapper from '@/components/elements/SectionWrapper'
// import { blogOnePosts } from '@/contents/blog/blogData'
import Calculators from '#/components/calc/Calculators.tsx'
import { allPosts } from 'content-collections'

export const Route = createFileRoute('/knowledge-hub')({
  loader: () => {
    const blogs = allPosts.sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
    )
    const newBlogs = blogs.map((blog, index) => ({
      ...blog,
      animation: index % 2 === 0 ? 'fadeInLeft' : 'fadeInRight',
      animationDelay: (index + 1) * 100,
    }))
    return newBlogs
  },
  head: () => ({
    meta: [
      {
        title: 'Knowledge Hub | Shah Capital Services',
      },
    ],
  }),
  component: RouteComponent,
})

function RouteComponent() {
  const blogs = Route.useLoaderData()

  const { pathname } = useLocation()

  const bannerTitle = pathname.split('/')
  const title = bannerTitle[bannerTitle.length - 1]
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')

  return (
    <main>
      <div className="page-wrapper">
        <Banner title={title} subTitle={title} />

        <Calculators />

        <SectionWrapper id="blog" className="blog-one">
          <div className="blog-one__shape-1 float-bob-x">
            <img src={blogShape1} width={600} height={600} alt="shape 1" />
          </div>
          <div className="blog-one__shape-2 rotate-me">
            <img src={blogShape2} width={300} height={300} alt="shape 2" />
          </div>
          <div className="container">
            <div className="section-title text-center sec-title-animation animation-style1">
              <h6 className="section-title__tagline">
                <span className="section-title__tagline-border"></span>blog &
                News
              </h6>
              <h3 className="section-title__title title-animation">
                <TextAnimation>
                  Your Brightest Choice <br /> in Repairs
                </TextAnimation>
              </h3>
            </div>
            <div className="row">
              {blogs.map((blog) => (
                <FadeInAdvanced
                  key={blog._meta.path}
                  className="col-xl-4 col-lg-4"
                  variant={blog.animation as AnimationVariant}
                  delay={blog.animationDelay}
                >
                  <div className="blog-one__single">
                    <div className="blog-one__img-box">
                      <div className="blog-one__img">
                        <img
                          src={'/assets/images/blog/blog-2-1.jpg'}
                          width={410}
                          height={240}
                          alt={blog.title}
                        />
                        <div className="blog-one__plus">
                          <Link
                            to="/blogs/$slug"
                            params={{ slug: blog.slug }}
                            title="Learn More"
                          >
                            <i className="fa fa-plus"></i>
                          </Link>
                        </div>
                      </div>
                      <div className="blog-one__date">
                        <p>
                          {12} <br /> {'nov'}
                        </p>
                      </div>
                    </div>
                    <div className="blog-one__content">
                      <ul className="blog-one__meta list-unstyled">
                        <li>
                          <p>
                            <span className="icon-user"></span>
                            {blog.author}
                          </p>
                        </li>
                        {/* <li>
                          <p>
                            <span className="icon-speech-bubbles"></span>
                            {post.comments}
                          </p>
                        </li> */}
                      </ul>
                      <h3 className="blog-one__title">
                        <Link to="/blogs/$slug" params={{ slug: blog.slug }}>
                          {blog.title}
                        </Link>
                      </h3>
                      <div className="blog-one__read-more">
                        <Link to="/blogs/$slug" params={{ slug: blog.slug }}>
                          Learn More <span className="icon-arrow-right"></span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </FadeInAdvanced>
              ))}
            </div>
          </div>
        </SectionWrapper>
      </div>
    </main>
  )
}
