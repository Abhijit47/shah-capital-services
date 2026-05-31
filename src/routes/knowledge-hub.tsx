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
// import AllProducts from '#/features/products/AllProducts'
import { classNames, formattedDate } from '#/lib/utls'
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

        {/* <TeamOne /> */}

        {/* <section className="product">
          <div className="container">
            <div className="row">
              <AllProducts />
            </div>
          </div>
        </section> */}

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
                  {/* Your Brightest Choice <br /> in Repairs */}
                  Our Latest Blogs and News Updates
                </TextAnimation>
              </h3>
            </div>
            <div className="row">
              {blogs.map((blog) => (
                <FadeInAdvanced
                  key={blog._meta.path}
                  className="col-xl-4 col-lg-6 col-md-6"
                  variant={blog.animation as AnimationVariant}
                  delay={blog.animationDelay}
                >
                  <div className="blog-one__single">
                    <div className="blog-one__img-box">
                      <div className="blog-one__img">
                        <img
                          // src={'/assets/images/blog/blog-2-1.jpg'}
                          src={blog.image}
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
                        <p>{formattedDate(blog.createdAt)}</p>
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
                          {blog.title.slice(0, 45)}...
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

interface TeamMember {
  id: number
  name: string
  role: string
  image: string
  animationDirection: 'fadeInLeft' | 'fadeInRight'
  animationDelay: number
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Adam Smith',
    role: 'Technician',
    image: '/assets/images/team/team-1-4.jpg',
    animationDirection: 'fadeInLeft',
    animationDelay: 100,
  },
  {
    id: 2,
    name: 'Harbert Spin',
    role: 'Technician',
    image: '/assets/images/team/team-1-4.jpg',
    animationDirection: 'fadeInLeft',
    animationDelay: 300,
  },
  {
    id: 3,
    name: 'Robert Son',
    role: 'Technician',
    image: '/assets/images/team/team-1-4.jpg',
    animationDirection: 'fadeInRight',
    animationDelay: 500,
  },
  {
    id: 4,
    name: 'Alisha Martin',
    role: 'Technician',
    image: '/assets/images/team/team-1-4.jpg',
    animationDirection: 'fadeInRight',
    animationDelay: 700,
  },
]

export function TeamOne() {
  return (
    <SectionWrapper id="team" className="team-one">
      <div className="container">
        <div className="section-title text-center sec-title-animation animation-style1">
          <h6 className="section-title__tagline">
            <span className="section-title__tagline-border"></span>Expert Team
          </h6>
          <h3 className="section-title__title title-animation">
            <TextAnimation animationStyle="style2">
              Meet The Expert Team Member
            </TextAnimation>
          </h3>
        </div>
        <div className="row">
          {teamMembers.map((member) => (
            <FadeInAdvanced
              key={member.id}
              className="col-xl-3 col-lg-6 col-md-6"
              variant={member.animationDirection}
              delay={member.animationDelay}
            >
              <div className="team-one__single">
                <div className="team-one__img-box">
                  <div
                    className={classNames(
                      'team-one__img',
                      'p-2 p-sm-3 p-md-4 p-lg-5',
                    )}
                    style={{ display: 'flex' }}
                  >
                    {/* <img src={member.image} width={278} alt={member.name} /> */}
                    <img
                      src={'/calculators/SIP-icon.png'}
                      width={100}
                      height={100}
                      alt={member.name}
                      style={{
                        height: '100px',
                        width: '100px',
                        margin: '0 auto',
                      }}
                    />
                  </div>
                </div>
                <div className="team-one__content">
                  <div className="team-one__title-box">
                    <h3 className="team-one__title">
                      <a href="/team-details">{member.name}</a>
                    </h3>
                    {/* <div className="team-one__sub-title">{member.role}</div> */}
                  </div>
                  <div className="team-one__share-and-social">
                    <button
                      className="team-one__share"
                      title="Know More"
                      style={{ border: 'none' }}
                    >
                      <span className="fas fa-plus"></span>
                    </button>
                    {/* <div className="team-one__social">
                      <a href="#" title="Facebook">
                        <span className="icon-facebook"></span>
                      </a>
                      <a href="#" title="Instagram">
                        <span className="icon-instagram"></span>
                      </a>
                      <a href="#" title="LinkedIn">
                        <span className="icon-link-in"></span>
                      </a>
                      <a href="#" title="Twitter">
                        <span className="icon-xpa"></span>
                      </a>
                    </div> */}
                  </div>
                </div>
              </div>
            </FadeInAdvanced>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
