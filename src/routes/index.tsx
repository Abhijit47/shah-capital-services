import HowWeWork from '#/components/HowWeWork.tsx'
// import AboutOne from '#/features/home-one/AboutOne'
// import BlogOne from '#/features/home-one/BlogOne'
// import BrandOne from '#/features/home-one/BrandOne'
import CounterOne from '#/features/home-one/CounterOne'
// import FeatureOne from '#/features/home-one/FeatureOne'
// import MainSlider from '#/features/home-one/MainSlider'
// import ServiceOne from '#/features/home-one/ServiceOne'
// import TestimonialOne from '#/features/home-one/TestimonialOne'
// import VideoOne from '#/features/home-one/VideoOne'
// import WhyChooseOne from '#/features/home-one/WhyChooceOne'
// import TestimonialsThree from '#/features/home-three/TestimonialsThree.tsx'
import { createFileRoute, Link } from '@tanstack/react-router'

import { Fragment, useState } from 'react'
// import slideImg from '/assets/images/resources/main-slider-two-img-1-1.jpg'
// import slideImgSmall from '/assets/images/resources/main-slider-two-small-img-1-1.jpg'
// import shapeOne from '/assets/images/shapes/main-slider-two-shape-1.png'

// import slideImgTwo from '/assets/images/resources/main-slider-two-img-1-2.jpg'
// import slideImgSmallTwo from '/assets/images/resources/main-slider-two-small-img-1-2.jpg'

// import slideImgThree from '/assets/images/resources/main-slider-two-img-1-3.jpg'
// import slideImgSmallThree from '/assets/images/resources/main-slider-two-small-img-1-3.jpg'

import useFixproContext from '@/components/context/useFixproContext'
import SectionWrapper from '@/components/elements/SectionWrapper'

import MarqueeSlider from '#/components/elements/MarqueeSlider'
import type { Swiper as SwiperType } from 'swiper'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { servicesData } from './services'

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
        <MainSliderTwo />
        {/* <MainSlider /> */}
        <CounterOne />
        <HowWeWork />
        {/* <TestimonialOne /> */}
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

const isDev = import.meta.env.DEV

const MainSliderTwo: React.FC = () => {
  const { handleVideoClick } = useFixproContext()
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const handleVideo = (e: React.MouseEvent<HTMLAnchorElement>) => {
    handleVideoClick(e, 'https://www.youtube.com/watch?v=Get7rqXYrbQ')
  }
  return (
    <SectionWrapper id="home" className="main-slider-two">
      <div
        className="main-slider-two__carousel position-relative"
        // style={{ height: '100dvh' }}
      >
        <Swiper
          modules={[Navigation, Autoplay, Pagination]}
          spaceBetween={0}
          slidesPerView={1}
          pagination={{
            clickable: true,
          }}
          autoplay={
            isDev
              ? undefined
              : {
                  delay: 6000,
                  disableOnInteraction: false,
                }
          }
          loop={true}
          speed={1000}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          onSwiper={setSwiperInstance}
        >
          {Array.from({ length: 5 }).map((_, idx) => {
            return (
              <SwiperSlide key={crypto.randomUUID()}>
                <div className={`item ${activeIndex === idx ? 'active' : ''}`}>
                  <div className="main-slider-two__bg one"></div>
                  <div className="main-slider-two__overly"></div>
                  {/* <div className="main-slider-two__shape-1">
                    <img
                      src={shapeOne}
                      style={{ width: 'auto', height: 'auto' }}
                      alt="image"
                      className="float-bob-x"
                    />
                  </div> */}
                  {/* <div className="main-slider-two__img">
                    <img
                      src={
                        '/assets/images/resources/main-slider-two-img-1-1.jpg'
                      }
                      style={{ width: 'auto', height: 'auto' }}
                      alt="image"
                    />
                  </div>
                  <div className="main-slider-two__small-img">
                    <img
                      src={
                        '/assets/images/resources/main-slider-two-small-img-1-1.jpg'
                      }
                      style={{ width: 'auto', height: 'auto' }}
                      alt="image"
                    />
                  </div> */}
                  <div
                    className="container d-flex justify-content-center"
                    style={{ paddingBottom: '80px' }}
                  >
                    <div className="main-slider-two__content d-flex flex-column justify-content-center align-content-center">
                      <div className="main-slider-two__sub-title-box d-flex justify-content-center">
                        <div className="main-slider-two__sub-title-shape"></div>
                        <p className="main-slider-two__sub-title">
                          Best Finance Services
                        </p>
                      </div>
                      <h2 className="main-slider-two__title text-center">
                        Because You <span>HAVE</span> <br /> better things to do
                      </h2>
                      <p className="main-slider-two__text text-center">
                        We have been operating for over a decade, providing
                        top-notch services We have been <br /> operating for
                        over a decade and delivering exceptional results to our
                        valued clients.
                      </p>
                      <div className="main-slider-two__btn-box justify-content-center">
                        <div className="main-slider-two__btn">
                          <a href="/about" className="thm-btn">
                            Discover More{' '}
                            <span className="icon-arrow-right"></span>
                          </a>
                        </div>
                        <div className="main-slider-two__video-link">
                          <a
                            href="#"
                            onClick={handleVideo}
                            className="video-popup"
                            title="video"
                          >
                            <div className="main-slider-two__video-icon">
                              <span className="fa fa-play"></span>
                              <i className="ripple"></i>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            )
          })}
          {/* <SwiperSlide>
            <div className={`item ${activeIndex === 0 ? 'active' : ''}`}>
              <div className="main-slider-two__bg one"></div>
              <div className="main-slider-two__overly"></div>
              <div className="main-slider-two__shape-1">
                <img
                  src={shapeOne}
                  style={{ width: 'auto', height: 'auto' }}
                  alt="image"
                  className="float-bob-x"
                />
              </div>
              <div className="main-slider-two__img">
                <img
                  src={slideImg}
                  style={{ width: 'auto', height: 'auto' }}
                  alt="image"
                />
              </div>
              <div className="main-slider-two__small-img">
                <img
                  src={slideImgSmall}
                  style={{ width: 'auto', height: 'auto' }}
                  alt="image"
                />
              </div>
              <div className="container">
                <div className="main-slider-two__content">
                  <div className="main-slider-two__sub-title-box">
                    <div className="main-slider-two__sub-title-shape"></div>
                    <p className="main-slider-two__sub-title">
                      Best Finance Services
                    </p>
                  </div>
                  <h2 className="main-slider-two__title">
                    Because <span>You</span> <br /> Better Things To Do!
                  </h2>
                  <p className="main-slider-two__text">
                    We have been operating for over a decade, providing
                    top-notch services We have been <br /> operating for over a
                    decade and delivering exceptional results to our valued
                    clients.
                  </p>
                  <div className="main-slider-two__btn-box">
                    <div className="main-slider-two__btn">
                      <a href="/about" className="thm-btn">
                        Discover More <span className="icon-arrow-right"></span>
                      </a>
                    </div>
                    <div className="main-slider-two__video-link">
                      <a
                        href="#"
                        onClick={handleVideo}
                        className="video-popup"
                        title="video"
                      >
                        <div className="main-slider-two__video-icon">
                          <span className="fa fa-play"></span>
                          <i className="ripple"></i>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={`item ${activeIndex === 1 ? 'active' : ''}`}>
              <div className="main-slider-two__bg two"></div>
              <div className="main-slider-two__overly"></div>
              <div className="main-slider-two__shape-1">
                <img
                  src={shapeOne}
                  style={{ width: 'auto', height: 'auto' }}
                  alt="image"
                  className="float-bob-x"
                />
              </div>
              <div className="main-slider-two__img">
                <img
                  src={slideImgTwo}
                  style={{ width: 'auto', height: 'auto' }}
                  alt="image"
                />
              </div>
              <div className="main-slider-two__small-img">
                <img
                  src={slideImgSmallTwo}
                  style={{ width: 'auto', height: 'auto' }}
                  alt="image"
                />
              </div>
              <div className="container">
                <div className="main-slider-two__content">
                  <div className="main-slider-two__sub-title-box">
                    <div className="main-slider-two__sub-title-shape"></div>
                    <p className="main-slider-two__sub-title">
                      Best Finance Services
                    </p>
                  </div>
                  <h2 className="main-slider-two__title">
                    Because <span>You</span> <br /> Better Things To Do!
                  </h2>
                  <p className="main-slider-two__text">
                    We have been operating for over a decade, providing
                    top-notch services We have been <br /> operating for over a
                    decade and delivering exceptional results to our valued
                    clients.
                  </p>
                  <div className="main-slider-two__btn-box">
                    <div className="main-slider-two__btn">
                      <a href="/about" className="thm-btn">
                        Discover More <span className="icon-arrow-right"></span>
                      </a>
                    </div>
                    <div className="main-slider-two__video-link">
                      <a
                        href="#"
                        onClick={handleVideo}
                        className="video-popup"
                        title="video"
                      >
                        <div className="main-slider-two__video-icon">
                          <span className="fa fa-play"></span>
                          <i className="ripple"></i>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={`item ${activeIndex === 2 ? 'active' : ''}`}>
              <div className="main-slider-two__bg three"></div>
              <div className="main-slider-two__overly"></div>
              <div className="main-slider-two__shape-1">
                <img
                  src={shapeOne}
                  style={{ width: 'auto', height: 'auto' }}
                  alt="image"
                  className="float-bob-x"
                />
              </div>
              <div className="main-slider-two__img">
                <img
                  src={slideImgThree}
                  style={{ width: 'auto', height: 'auto' }}
                  alt="image"
                />
              </div>
              <div className="main-slider-two__small-img">
                <img
                  src={slideImgSmallThree}
                  style={{ width: 'auto', height: 'auto' }}
                  alt="image"
                />
              </div>
              <div className="container">
                <div className="main-slider-two__content">
                  <div className="main-slider-two__sub-title-box">
                    <div className="main-slider-two__sub-title-shape"></div>
                    <p className="main-slider-two__sub-title">
                      Best Finance Services
                    </p>
                  </div>
                  <h2 className="main-slider-two__title">
                    Because <span>You</span> <br /> Better Things To Do!
                  </h2>
                  <p className="main-slider-two__text">
                    We have been operating for over a decade, providing
                    top-notch services We have been <br /> operating for over a
                    decade and delivering exceptional results to our valued
                    clients.
                  </p>
                  <div className="main-slider-two__btn-box">
                    <div className="main-slider-two__btn">
                      <a href="/about" className="thm-btn">
                        Discover More <span className="icon-arrow-right"></span>
                      </a>
                    </div>
                    <div className="main-slider-two__video-link">
                      <a
                        href="#"
                        onClick={handleVideo}
                        className="video-popup"
                        title="video"
                      >
                        <div className="main-slider-two__video-icon">
                          <span className="fa fa-play"></span>
                          <i className="ripple"></i>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide> */}
        </Swiper>
        {/* <div className="owl-nav">
          <button
            title="prev"
            onClick={() => swiperInstance?.slidePrev()}
            type="button"
            // role="presentation"
            className="owl-prev"
          >
            <span className="icon-arrow-right"></span>
          </button>
          <button
            title="next"
            onClick={() => swiperInstance?.slideNext()}
            type="button"
            // role="presentation"
            className="owl-next"
          >
            <span className="icon-arrow-right"></span>
          </button>
        </div> */}

        <div
          className={'position-absolute bottom-0 start-0 mb-2'}
          style={{ height: 'fit-content', width: '100%', zIndex: 4 }}
        >
          <MarqueeSlider mode="1" className="sliding-text__list">
            {servicesData.map((service) => (
              <div key={service.id}>
                <div className="items">
                  <div
                    className="services-one__single"
                    style={{
                      // aspectRatio: 1,
                      width: '240px',
                      height: '220px',
                      marginRight: '10px',
                    }}
                  >
                    <div className="services-one__icon">
                      <span>{service.icon}</span>
                      {/* <span className={service.iconClass}></span> */}
                    </div>
                    <h3 className="services-one__title fs-5">
                      <Link to={service.path}>
                        {service.title.split('\n').map((line, i, arr) => (
                          <Fragment key={i}>
                            {line}
                            {i < arr.length - 1 && <br />}
                          </Fragment>
                        ))}
                      </Link>
                    </h3>
                    {/* <p className="services-one__single-text">{service.text}</p> */}
                    <Link to={service.path} className="services-one__read-more">
                      Learn More<span className="icon-arrow-right"></span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </MarqueeSlider>
        </div>
      </div>
    </SectionWrapper>
  )
}
