import { useState } from 'react'
import slideImg from '/assets/images/resources/main-slider-two-img-1-1.jpg'
import slideImgSmall from '/assets/images/resources/main-slider-two-small-img-1-1.jpg'
import shapeOne from '/assets/images/shapes/main-slider-two-shape-1.png'

import slideImgTwo from '/assets/images/resources/main-slider-two-img-1-2.jpg'
import slideImgSmallTwo from '/assets/images/resources/main-slider-two-small-img-1-2.jpg'

import slideImgThree from '/assets/images/resources/main-slider-two-img-1-3.jpg'
import slideImgSmallThree from '/assets/images/resources/main-slider-two-small-img-1-3.jpg'

import useFixproContext from '@/components/context/useFixproContext'
import SectionWrapper from '@/components/elements/SectionWrapper'

import type { Swiper as SwiperType } from 'swiper'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const MainSliderTwo: React.FC = () => {
  const { handleVideoClick } = useFixproContext()
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const handleVideo = (e: React.MouseEvent<HTMLAnchorElement>) => {
    handleVideoClick(e, 'https://www.youtube.com/watch?v=Get7rqXYrbQ')
  }
  return (
    <SectionWrapper id="home" className="main-slider-two">
      <div className="main-slider-two__carousel  ">
        <Swiper
          modules={[Navigation, Autoplay, Pagination]}
          spaceBetween={0}
          slidesPerView={1}
          pagination={{
            clickable: true,
          }}
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
                      Best Repairs Services
                    </p>
                  </div>
                  <h2 className="main-slider-two__title">
                    Cooling Comfort <span>One Repair</span> <br /> at Time In
                    Your Home
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
                      Best Repairs Services
                    </p>
                  </div>
                  <h2 className="main-slider-two__title">
                    Keeping Your <span>AC Running</span> <br /> With Smoothly
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
                      Best Repairs Services
                    </p>
                  </div>
                  <h2 className="main-slider-two__title">
                    Heating & <span>AC Installation</span> <br />
                    Repair Company <span>Since 2003.</span>
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
        </Swiper>
        <div className="owl-nav">
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
        </div>
      </div>
    </SectionWrapper>
  )
}

export default MainSliderTwo
