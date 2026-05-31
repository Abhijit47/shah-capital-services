import { Link, useLocation } from '@tanstack/react-router'
import { useEffect, useState } from 'react'

function Header() {
  const [isStick, setIsSticky] = useState<boolean>(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsSticky(true)
      } else {
        setIsSticky(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [setIsSticky])

  return (
    <>
      <header className="main-header">
        <nav className="main-menu">
          <Menu />
        </nav>
      </header>
      <div
        className={`stricky-header stricked-menu main-menu ${isStick ? 'stricky-fixed' : ''}`}
      >
        <div className="sticky-header__content">
          <Menu />
        </div>
      </div>
    </>
  )
}

export default Header

function Menu() {
  const [isMobileManu, setIsMobileManu] = useState<boolean>(false)

  const handlMobileMenu = () => {
    setIsMobileManu((pre) => !pre)
  }

  return (
    <div className="main-menu__wrapper">
      <div className="main-menu__wrapper-inner">
        <div className="main-menu__left">
          <div className="main-menu__logo">
            <Link to="/">
              <img
                src={'/logo-landscape-3.png'}
                width={'100%'}
                height={50}
                alt="Logo"
                style={{ height: '75px' }}
              />
            </Link>
          </div>
        </div>
        <div className="main-menu__main-menu-box">
          <a
            href="#"
            onClick={handlMobileMenu}
            className="mobile-nav__toggler"
            title="mobile-menu"
          >
            <i className="fa fa-bars"></i>
          </a>
          <MenuList />
        </div>
        <div className="main-menu__right d-none d-xl-block">
          <div className="main-menu__btn-box">
            <Link to="/contact" className="thm-btn">
              Get A Quote<span className="icon-arrow-right"></span>
            </Link>
          </div>
        </div>
        <MobileNav
          isMobileManu={isMobileManu}
          setIsMobileManu={setIsMobileManu}
        />
      </div>
    </div>
  )
}

function MenuList() {
  const { pathname } = useLocation()
  return (
    <ul className="main-menu__list">
      <li className={pathname === '/' ? 'current' : ''}>
        <Link to="/">Home </Link>
      </li>
      <li className={pathname === '/about' ? 'current' : ''}>
        <Link to="/about">About</Link>
      </li>
      <li className={pathname === '/services' ? 'current' : ''}>
        <Link to="/services">Services</Link>
      </li>
      <li className={pathname === '/knowledge-hub' ? 'current' : ''}>
        <Link to="/knowledge-hub">Knowledge Hub</Link>
      </li>
      <li className={pathname === '/contact' ? 'current' : ''}>
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  )
}

function MobileNav(props: {
  isMobileManu: boolean
  setIsMobileManu: React.Dispatch<React.SetStateAction<boolean>>
}) {
  const { isMobileManu, setIsMobileManu } = props

  // function closeMenu() {
  //   setIsMobileManu(false)
  // }

  return (
    <div className={`mobile-nav__wrapper ${isMobileManu ? 'expanded' : ''}`}>
      <div
        className="mobile-nav__overlay mobile-nav__toggler"
        onClick={() => setIsMobileManu((pre) => !pre)}
      ></div>
      {/* <!-- /.mobile-nav__overlay --> */}
      <div className="mobile-nav__content">
        <span
          className="mobile-nav__close mobile-nav__toggler"
          onClick={() => setIsMobileManu((pre) => !pre)}
        >
          <i className="fa fa-times"></i>
        </span>

        <div className="logo-box justify-content-center">
          <Link
            to="/"
            aria-label="logo image"
            onClick={() => setIsMobileManu((pre) => !pre)}
          >
            <img
              src={'footer-logo.png'}
              width={'100%'}
              height={50}
              alt="Logo"
              style={{ height: '200px', margin: '0 auto' }}
            />
          </Link>
        </div>
        <hr />
        <ul className={'d-flex flex-column list-unstyled'}>
          <li className={'border-bottom border-secondary'}>
            <Link
              to="/"
              className={
                'text-light d-flex justify-content-between align-items-center py-2 px-2'
              }
              onClick={() => setIsMobileManu((pre) => !pre)}
            >
              Home <i className="fa fa-angle-right"></i>
            </Link>
          </li>
          <li className={'border-bottom border-secondary'}>
            <Link
              to="/about"
              className={
                'text-light d-flex justify-content-between align-items-center py-2 px-2'
              }
              onClick={() => setIsMobileManu((pre) => !pre)}
            >
              About <i className="fa fa-angle-right"></i>
            </Link>
          </li>
          <li className={'border-bottom border-secondary'}>
            <Link
              to="/services"
              className={
                'text-light d-flex justify-content-between align-items-center py-2 px-2'
              }
              onClick={() => setIsMobileManu((pre) => !pre)}
            >
              Services <i className="fa fa-angle-right"></i>
            </Link>
          </li>
          <li className={'border-bottom border-secondary'}>
            <Link
              to="/knowledge-hub"
              className={
                'text-light d-flex justify-content-between align-items-center py-2 px-2'
              }
              onClick={() => setIsMobileManu((pre) => !pre)}
            >
              Knowledge Hub <i className="fa fa-angle-right"></i>
            </Link>
          </li>
          <li className={'border-bottom border-secondary'}>
            <Link
              to="/contact"
              className={
                'text-light d-flex justify-content-between align-items-center py-2 px-2'
              }
              onClick={() => setIsMobileManu((pre) => !pre)}
            >
              Contact <i className="fa fa-angle-right"></i>
            </Link>
          </li>
        </ul>
        <ul className="mobile-nav__contact list-unstyled">
          <li>
            <i className="fa fa-envelope"></i>
            <a href="mailto:shahcapserv@gmail.com">shahcapserv@gmail.com</a>
          </li>
          <li>
            <i className="fas fa-phone"></i>
            <a href="tel:+919840999879">+91 9840999879</a>
          </li>
        </ul>
        <div className="mobile-nav__top">
          <div className="mobile-nav__social">
            <a href="#" className="fab fa-twitter" title="Twitter"></a>
            <a href="#" className="fab fa-facebook-square" title="Facebook"></a>
            <a href="#" className="fab fa-pinterest-p" title="Pinterest"></a>
            <a href="#" className="fab fa-instagram" title="Instagram"></a>
          </div>
        </div>
      </div>
    </div>
  )
}
