import SlidingText from '#/components/elements/SlidingText'
import Banner from '#/features/banner/Banner'
import AboutOne from '#/features/home-one/AboutOne'
import BlogOne from '#/features/home-one/BlogOne'
import BrandOne from '#/features/home-one/BrandOne'
import ServiceOne from '#/features/home-one/ServiceOne'
import TeamOne from '#/features/home-one/TeamOne'
import TestimonialOne from '#/features/home-one/TestimonialOne'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: About,
})

function About() {
  return (
    <main className="page-wrapper">
      <Banner title="About" subTitle="About" />
      <AboutOne secClass="about-page" />
      <ServiceOne />
      {/* <ClientOnly fallback={<div>Loading...</div>}> */}
      <SlidingText secClass="sliding-text-two" />
      {/* </ClientOnly> */}
      <TeamOne />
      <BrandOne />
      <TestimonialOne />
      <BlogOne />
    </main>
  )
}
