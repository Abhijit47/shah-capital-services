import AboutOne from '#/features/home-one/AboutOne'
import BlogOne from '#/features/home-one/BlogOne'
import BrandOne from '#/features/home-one/BrandOne'
import CounterOne from '#/features/home-one/CounterOne'
import FeatureOne from '#/features/home-one/FeatureOne'
import MainSlider from '#/features/home-one/MainSlider'
import PricingOne from '#/features/home-one/PricingOne'
import ProjectOne from '#/features/home-one/ProjectOne'
import ServiceOne from '#/features/home-one/ServiceOne'
import TeamOne from '#/features/home-one/TeamOne'
import TestimonialOne from '#/features/home-one/TestimonialOne'
import VideoOne from '#/features/home-one/VideoOne'
import WhyChooseOne from '#/features/home-one/WhyChooceOne'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      {
        title: 'Fixpro - Electronics & Gadgets Repair Services NextJs Template',
      },
      {
        name: 'description',
        content:
          'Fixpro – Modern Next Js template for gadgets, mobile, AC & computer repair services. Clean, responsive & fully documented',
      },
    ],
  }),
  component: App,
})

function App() {
  return (
    <main>
      <div className="page-wrapper">
        <MainSlider />
        <FeatureOne />
        <AboutOne />
        <ServiceOne />
        <WhyChooseOne />
        <CounterOne />
        <ProjectOne />
        <VideoOne />
        <TeamOne />
        <BrandOne />
        <PricingOne />
        <TestimonialOne />
        <BlogOne />
      </div>
    </main>
  )
}
