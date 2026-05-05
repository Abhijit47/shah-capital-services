import HowWeWork from '#/components/HowWeWork.tsx'
// import AboutOne from '#/features/home-one/AboutOne'
// import BlogOne from '#/features/home-one/BlogOne'
// import BrandOne from '#/features/home-one/BrandOne'
import CounterOne from '#/features/home-one/CounterOne'
// import FeatureOne from '#/features/home-one/FeatureOne'
import MainSlider from '#/features/home-one/MainSlider'
// import ServiceOne from '#/features/home-one/ServiceOne'
import TestimonialOne from '#/features/home-one/TestimonialOne'
// import VideoOne from '#/features/home-one/VideoOne'
// import WhyChooseOne from '#/features/home-one/WhyChooceOne'
// import TestimonialsThree from '#/features/home-three/TestimonialsThree.tsx'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      {
        title: 'Home | Shah Capital Services',
      },
      {
        name: 'description',
        content:
          'Your Trusted Partner in Financial Growth and Wealth Management',
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
        <CounterOne />
        <HowWeWork />
        <TestimonialOne />
        {/* <TestimonialsThree /> */}
        {/* <FeatureOne /> */}
        {/* <AboutOne /> */}
        {/* <ServiceOne /> */}
        {/* <WhyChooseOne /> */}
        {/* <ProjectOne /> */}
        {/* <VideoOne /> */}
        {/* <TeamOne /> */}
        {/* <BrandOne /> */}
        {/* <PricingOne /> */}
        {/* <BlogOne /> */}
      </div>
    </main>
  )
}
