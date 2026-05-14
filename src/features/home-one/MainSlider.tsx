import { servicesData } from '#/routes/services/index.tsx'
import useFixproContext from '@/components/context/useFixproContext'
import SectionWrapper from '@/components/elements/SectionWrapper'
import { Link } from '@tanstack/react-router'
import { Fragment } from 'react/jsx-runtime'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import shape from '/assets/images/shapes/main-slider-shape-1.png'
import shapeTwo from '/assets/images/shapes/main-slider-shape-2.png'

// import { useState } from 'react'
// import type { Swiper as SwiperType } from 'swiper'
// import { Autoplay, Navigation } from 'swiper/modules'
// import { Swiper, SwiperSlide } from 'swiper/react'

const MainSlider: React.FC = () => {
  const { handleVideoClick } = useFixproContext()
  // const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null)
  // const [activeIndex, setActiveIndex] = useState(0)

  return (
    <SectionWrapper id="home" className="main-slider">
      <div className={`item active`}>
        {/* SHAPES */}
        <div className="main-slider__shape-bg"></div>
        <div className="main-slider__shape-1 float-bob-x">
          <img
            src={shape}
            style={{ width: 'auto', height: 'auto' }}
            alt="shapeImage"
          />
        </div>
        <div className="main-slider__shape-2 float-bob-y">
          <img
            src={shapeTwo}
            style={{ width: 'auto', height: 'auto' }}
            alt="shapeImage"
          />
        </div>

        {/* BACKGROUND */}
        {/* <div className="main-slider__bg-box">
          <div className="main-slider__bg one"></div>
        </div> */}

        <div className={'row px-4'}>
          <div className="container col-12">
            <div className="main-slider__content">
              <div className="main-slider__sub-title-box justify-content-center">
                <div className="main-slider__sub-title-shape"></div>
                <p className="main-slider__sub-title">
                  Find the Best support you need today.
                </p>
              </div>
              <h2 className="main-slider__title text-center">
                Your <span>financial</span> life <br /> <span>managed.</span>
              </h2>
              <p className="main-slider__text text-center">
                We help companies develop powerful corporate social
                responsibility, grantmaking, <br /> and employee engagement
                strategies. Dicta sunt explicabo. Nemo
              </p>
              <div className="main-slider__btn-box">
                <div className="main-slider__btn">
                  <Link to="/about" className="thm-btn">
                    Discover More <span className="icon-arrow-right"></span>
                  </Link>
                </div>
                <div className="main-slider__video-link">
                  <a
                    title="watch video"
                    href="#"
                    onClick={(e) =>
                      handleVideoClick(
                        e,
                        'https://www.youtube.com/watch?v=Get7rqXYrbQ',
                      )
                    }
                    className="video-popup"
                  >
                    <div className="main-slider__video-icon">
                      <span className="fa fa-play"></span>
                      <i className="ripple"></i>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className={'col-12'}>
            <FeatureCarousel />
          </div>
        </div>
      </div>

      {/* <div className="main-slider__carousel  ">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
          }}
          loop={true}
          speed={1000}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          onSwiper={setSwiperInstance}
        >
          <SwiperSlide>
            <div className={`item ${activeIndex === 0 ? 'active' : ''}`}>
              <div className="main-slider__shape-bg"></div>
              <div className="main-slider__shape-1 float-bob-x">
                <img
                  src={shape}
                  style={{ width: 'auto', height: 'auto' }}
                  alt="shapeImage"
                />
              </div>
              <div className="main-slider__shape-2 float-bob-y">
                <img
                  src={shapeTwo}
                  style={{ width: 'auto', height: 'auto' }}
                  alt="shapeImage"
                />
              </div>
              <div className="main-slider__bg-box">
                <div className="main-slider__bg one"></div>
              </div>
              <div className="container">
                <div className="main-slider__content">
                  <div className="main-slider__sub-title-box">
                    <div className="main-slider__sub-title-shape"></div>
                    <p className="main-slider__sub-title">
                      Find the Best support you need today.
                    </p>
                  </div>
                  <h2 className="main-slider__title">
                    Professional <span>repairs</span> for <br />{' '}
                    <span>computers & mobiles</span>
                  </h2>
                  <p className="main-slider__text">
                    We help companies develop powerful corporate social
                    responsibility, grantmaking, <br /> and employee engagement
                    strategies. Dicta sunt explicabo. Nemo
                  </p>
                  <div className="main-slider__btn-box">
                    <div className="main-slider__btn">
                      <a href="/about" className="thm-btn">
                        Discover More <span className="icon-arrow-right"></span>
                      </a>
                    </div>
                    <div className="main-slider__video-link">
                      <a
                        title="watch video"
                        href="#"
                        onClick={(e) =>
                          handleVideoClick(
                            e,
                            'https://www.youtube.com/watch?v=Get7rqXYrbQ',
                          )
                        }
                        className="video-popup"
                      >
                        <div className="main-slider__video-icon">
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
              <div className="main-slider__shape-bg"></div>
              <div className="main-slider__shape-1 float-bob-x">
                <img
                  src={shape}
                  style={{ width: 'auto', height: 'auto' }}
                  alt="shapeImage"
                />
              </div>
              <div className="main-slider__shape-2 float-bob-y">
                <img
                  src={shapeTwo}
                  style={{ width: 'auto', height: 'auto' }}
                  alt="shapeImage"
                />
              </div>
              <div className="main-slider__bg-box">
                <div className="main-slider__bg two"></div>
              </div>
              <div className="container">
                <div className="main-slider__content">
                  <div className="main-slider__sub-title-box">
                    <div className="main-slider__sub-title-shape"></div>
                    <p className="main-slider__sub-title">
                      Fixpro is the best service provider.
                    </p>
                  </div>
                  <h2 className="main-slider__title">
                    Bright Solutions <br /> for <span>Dark Problems</span>
                  </h2>
                  <p className="main-slider__text">
                    We help companies develop powerful corporate social
                    responsibility, grantmaking, <br /> and employee engagement
                    strategies. Dicta sunt explicabo. Nemo
                  </p>
                  <div className="main-slider__btn-box">
                    <div className="main-slider__btn">
                      <a href="/about" className="thm-btn">
                        Discover More <span className="icon-arrow-right"></span>
                      </a>
                    </div>
                    <div className="main-slider__video-link">
                      <a
                        title="Watch Video"
                        href="#"
                        onClick={(e) =>
                          handleVideoClick(
                            e,
                            'https://www.youtube.com/watch?v=Get7rqXYrbQ',
                          )
                        }
                        className="video-popup"
                      >
                        <div className="main-slider__video-icon">
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
              <div className="main-slider__shape-bg"></div>
              <div className="main-slider__shape-1 float-bob-x">
                <img
                  src={shape}
                  style={{ width: 'auto', height: 'auto' }}
                  alt="shapeImage"
                />
              </div>
              <div className="main-slider__shape-2 float-bob-y">
                <img
                  src={shapeTwo}
                  style={{ width: 'auto', height: 'auto' }}
                  alt="shapeImage"
                />
              </div>
              <div className="main-slider__bg-box">
                <div className="main-slider__bg three"></div>
              </div>
              <div className="container">
                <div className="main-slider__content">
                  <div className="main-slider__sub-title-box">
                    <div className="main-slider__sub-title-shape"></div>
                    <p className="main-slider__sub-title">
                      Find the Best support you need today.
                    </p>
                  </div>
                  <h2 className="main-slider__title">
                    Current Solutions for <br /> Your
                    <span>Modern Problems</span>
                  </h2>
                  <p className="main-slider__text">
                    We help companies develop powerful corporate social
                    responsibility, grantmaking, <br /> and employee engagement
                    strategies. Dicta sunt explicabo. Nemo
                  </p>
                  <div className="main-slider__btn-box">
                    <div className="main-slider__btn">
                      <a href="/about" className="thm-btn">
                        Discover More <span className="icon-arrow-right"></span>
                      </a>
                    </div>
                    <div className="main-slider__video-link">
                      <a
                        title="video"
                        href="#"
                        onClick={(e) =>
                          handleVideoClick(
                            e,
                            'https://www.youtube.com/watch?v=Get7rqXYrbQ',
                          )
                        }
                        className="video-popup"
                      >
                        <div className="main-slider__video-icon">
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
        </Swiper>

        <div className="owl-nav">
          <button
            title="Go to previous slide"
            onClick={() => swiperInstance?.slidePrev()}
            type="button"
            // role="presentation"
            className="owl-prev"
          >
            <span className="icon-arrow-right"></span>
          </button>
          <button
            title="Go to next slide"
            onClick={() => swiperInstance?.slideNext()}
            type="button"
            // role="presentation"
            className="owl-next"
          >
            <span className="icon-arrow-right"></span>
          </button>
        </div>
      </div> */}
    </SectionWrapper>
  )
}

export default MainSlider

/*
Mutual Funds, Stocks & Securities, NRI - GIFT City,  Fixed Deposits, Life Insurance, Health Insurance, Travel Insurance, Misc.Insurance
*/

// const serviceItems = [
//   {
//     id: 1,
//     iconClass: 'icon-mobile-phone',
//     title: 'Mutual Funds',
//     to: '/commercial-services',
//     text: 'There are many variations available majority of word have in some form suffered.',
//   },
//   {
//     id: 2,
//     iconClass: 'icon-chirger',
//     title: 'Stocks & Securities',
//     to: '/installing-ceiling-fan',
//     text: 'There are many variations available majority of word have in some form suffered.',
//   },
//   {
//     id: 3,
//     iconClass: 'icon-lamp',
//     title: 'NRI - GIFT City',
//     to: '/lighting-fixtures',
//     text: 'There are many variations available majority of word have in some form suffered.',
//   },
//   {
//     id: 4,
//     iconClass: 'icon-air-conditioning',
//     title: 'Fixed Deposits',
//     to: '/maintenance-service',
//     text: 'There are many variations available majority of word have in some form suffered.',
//   },
//   {
//     id: 5,
//     iconClass: 'icon-laptop',
//     title: 'Life Insurance',
//     to: '/commercial-services',
//     text: 'There are many variations available majority of word have in some form suffered.',
//   },
//   {
//     id: 6,
//     iconClass: 'icon-laptop',
//     title: 'Health Insurance',
//     to: '/commercial-services',
//     text: 'There are many variations available majority of word have in some form suffered.',
//   },
//   {
//     id: 7,
//     iconClass: 'icon-laptop',
//     title: 'Travel Insurance',
//     to: '/commercial-services',
//     text: 'There are many variations available majority of word have in some form suffered.',
//   },
//   {
//     id: 8,
//     iconClass: 'icon-laptop',
//     title: 'Misc.Insurance',
//     to: '/commercial-services',
//     text: 'There are many variations available majority of word have in some form suffered.',
//   },
// ]

const isDev = import.meta.env.DEV

function FeatureCarousel() {
  return (
    <div
    // className="services-one__right"
    >
      <div
      // className="services-one__carousel  "
      >
        <Swiper
          slidesPerView={3.1}
          spaceBetween={30}
          loop={true}
          autoplay={
            isDev
              ? undefined
              : {
                  delay: 4000,
                  disableOnInteraction: false,
                }
          }
          speed={1000}
          modules={[Autoplay]}
          breakpoints={{
            0: { slidesPerView: 1.1, spaceBetween: 10 },
            768: { slidesPerView: 1.8, spaceBetween: 20 },
            992: { slidesPerView: 2.3, spaceBetween: 20 },
            1200: { slidesPerView: 3.1, spaceBetween: 20 },
          }}
        >
          {servicesData.map((service) => (
            <SwiperSlide key={service.id}>
              <div className="item">
                <div className="services-one__single">
                  <div className="services-one__icon">
                    <span className={service.iconClass}></span>
                  </div>
                  <h3 className="services-one__title">
                    <Link to={'/services'}>
                      {service.title.split('\n').map((line, i, arr) => (
                        <Fragment key={i}>
                          {line}
                          {i < arr.length - 1 && <br />}
                        </Fragment>
                      ))}
                    </Link>
                  </h3>
                  <p className="services-one__single-text">{service.text}</p>
                  <Link to={'/services'} className="services-one__read-more">
                    Learn More<span className="icon-arrow-right"></span>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}
