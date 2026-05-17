import { useEffect, useRef, useState } from 'react'
import MenuOne from '../menu/MenuOne'

function HeaderOne() {
  const [isStick, setIsSticky] = useState<boolean>(false)
  const headerRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsSticky(true)
      } else {
        setIsSticky(false)
      }
    }

    const ob = new IntersectionObserver(
      (observer) => {
        console.log({ observer })
      },
      {
        root: headerRef.current,
        rootMargin: '200px',
        scrollMargin: '10px',
        threshold: 0.5,
      },
    )

    if (headerRef.current) {
      ob.observe(headerRef.current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      ob.unobserve(headerRef.current!)
    }
  }, [setIsSticky])

  return (
    <>
      <header className="main-header" ref={headerRef}>
        <div className="main-menu__top">
          <div className="main-menu__top-inner">
            <ul className="list-unstyled main-menu__contact-list">
              <li>
                <div className="icon">
                  <i className="icon-call"></i>
                </div>
                <div className="text">
                  <p>
                    <a
                      href="tel:+919840999879"
                      target={'_blank'}
                      rel="noopener noreferrer"
                    >
                      +91 9840999879
                    </a>
                  </p>
                </div>
              </li>
              <li>
                <div className="icon">
                  <i className="icon-envelope"></i>
                </div>
                <div className="text">
                  <p>
                    <a
                      href="mailto:shahcapserv@gmail.com"
                      target={'_blank'}
                      rel="noopener noreferrer"
                    >
                      shahcapserv@gmail.com
                    </a>
                  </p>
                </div>
              </li>
              <li>
                <div className="icon">
                  <i className="icon-location"></i>
                </div>
                <div className="text">
                  <p>
                    <a
                      href="https://maps.app.goo.gl/bntg6fuaKdHhdkLZ6"
                      target={'_blank'}
                      rel="noopener noreferrer"
                    >
                      Old no. 477, Mint Street, Kondithope, Chennai, Tamil Nadu,
                      600001, India
                    </a>
                  </p>
                </div>
              </li>
            </ul>
            <p className="main-menu__top-welcome-text">
              Welcome to Our Fixpro Office
            </p>
            <div className="main-menu__top-right">
              {/* <div className="main-menu__top-time">
                <div className="main-menu__top-time-icon">
                  <span className="icon-clock"></span>
                </div>
                <p className="main-menu__top-text">Mon - Fri: 09:00 - 05:00</p>
              </div> */}
              <div className="main-menu__social">
                <a href="#" title="Twitter">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" title="Facebook">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#" title="Pinterest">
                  <i className="fab fa-pinterest-p"></i>
                </a>
                <a href="#" title="Instagram">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <nav className="main-menu">
          {/* <ClientOnly fallback={null}> */}
          <MenuOne />
          {/* </ClientOnly> */}
        </nav>
      </header>
      <div
        className={`stricky-header stricked-menu main-menu ${isStick ? 'stricky-fixed' : ''}`}
      >
        <div className="sticky-header__content">
          {/* <ClientOnly fallback={null}> */}
          <MenuOne />
          {/* </ClientOnly> */}
        </div>
      </div>
    </>
  )
}

export default HeaderOne
