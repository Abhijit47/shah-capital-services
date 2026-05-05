import { createFileRoute, useLocation } from '@tanstack/react-router'
import { useState } from 'react'
import Lightbox from 'yet-another-react-lightbox'

import project1 from '/assets/images/project/project-1-1.jpg'
import project2 from '/assets/images/project/project-1-2.jpg'
import project3 from '/assets/images/project/project-1-3.jpg'
import project4 from '/assets/images/project/project-1-4.jpg'
import project5 from '/assets/images/project/project-1-5.jpg'
import project6 from '/assets/images/project/project-1-6.jpg'
import project7 from '/assets/images/project/project-1-7.jpg'

import FadeInAdvanced from '#/components/elements/FadeInAdvanced.tsx'
import Banner from '#/features/banner/Banner.tsx'
import BlogOne from '#/features/home-one/BlogOne.tsx'

export const Route = createFileRoute('/knowledge-hub')({
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

        <BlogOne />
      </div>
    </main>
  )
}

interface Project {
  id: number
  image: string
  subTitle: string
  title: string
  animationDirection: 'fadeInLeft' | 'fadeInRight'
  animationDelay: number
}

const projects: Project[] = [
  {
    id: 1,
    image: project1,
    subTitle: 'Express Electric',
    title: 'Charging Issues',
    animationDirection: 'fadeInLeft',
    animationDelay: 100,
  },
  {
    id: 2,
    image: project2,
    subTitle: 'Computer Repair',
    title: 'Hardware Update',
    animationDirection: 'fadeInLeft',
    animationDelay: 200,
  },
  {
    id: 3,
    image: project3,
    subTitle: 'Express Electric',
    title: 'Charging Issues',
    animationDirection: 'fadeInRight',
    animationDelay: 300,
  },
  {
    id: 4,
    image: project4,
    subTitle: 'Recovery',
    title: 'Hardware & Software',
    animationDirection: 'fadeInRight',
    animationDelay: 400,
  },
  {
    id: 5,
    image: project5,
    subTitle: 'Mac Repair',
    title: 'Apple iPhone Repair',
    animationDirection: 'fadeInLeft',
    animationDelay: 500,
  },
  {
    id: 6,
    image: project6,
    subTitle: 'Camera Repair',
    title: 'Microphone Faults',
    animationDirection: 'fadeInLeft',
    animationDelay: 600,
  },
  {
    id: 7,
    image: project7,
    subTitle: 'Express Electric',
    title: 'Battery Replacement',
    animationDirection: 'fadeInRight',
    animationDelay: 700,
  },
  {
    id: 8,
    image: project2,
    subTitle: 'Computer Repair',
    title: 'Hardware Update',
    animationDirection: 'fadeInRight',
    animationDelay: 800,
  },
]

function Calculators() {
  const [openLightBox, setOpenLightBox] = useState<boolean>(false)
  const [index, setIndex] = useState<number>(0)
  const images: string[] = projects.map((project) => project.image)
  return (
    <section className="project-page pb-0">
      <div className="container">
        <div className="row">
          {projects.map((project, idx) => (
            <FadeInAdvanced
              key={project.id}
              className={`col-xl-3 col-lg-6 col-md-6`}
              variant={project.animationDirection}
              delay={project.animationDelay}
            >
              <div className="project-one__single">
                <div className="project-one__img-box">
                  <div className="project-one__img">
                    <img
                      src={project.image}
                      width={300}
                      height={333}
                      alt={`${project.subTitle} - ${project.title}`}
                    />
                    <div
                      className="project-one__arrow"
                      onClick={() => {
                        setIndex(idx)
                        setOpenLightBox(true)
                      }}
                    >
                      <a
                        href={'#'}
                        className="img-popup"
                        aria-label={`View full image of ${project.title}`}
                      >
                        <span className="icon-arrow-right"></span>
                      </a>
                    </div>
                  </div>
                  <div className="project-one__content">
                    <p className="project-one__sub-title">{project.subTitle}</p>
                    <h3 className="project-one__title">
                      <a href="/project-details">{project.title}</a>
                    </h3>
                  </div>
                </div>
              </div>
            </FadeInAdvanced>
          ))}
        </div>
      </div>
      <Lightbox
        open={openLightBox}
        close={() => setOpenLightBox(false)}
        index={index}
        slides={images.map((src) => ({ src }))}
      />
    </section>
  )
}
