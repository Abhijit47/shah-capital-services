import { Link, useLocation } from '@tanstack/react-router'
import useFixproContext from '../context/useFixproContext'
import MenuList from './MenuList'
import SinglePageManuList from './SinglePageManuList'
import logo from '/assets/images/resources/logo-2.png'

const MenuTwo: React.FC = () => {
  const { setIsSearch, setIsSidebar, setIsMobileManu, cartCount } =
    useFixproContext()
  const currentPath = useLocation().pathname
  const isOnePage = currentPath.includes('single-page')
  const handleSearch = () => {
    setIsSearch((pre) => !pre)
  }
  const handlSidebar = () => {
    setIsSidebar((pre) => !pre)
  }
  const handlMobileMenu = () => {
    setIsMobileManu((pre) => !pre)
  }
  return (
    <div className="main-menu-two__wrapper">
      <div className="main-menu-two__wrapper-inner">
        <div className="main-menu-two__left">
          <div className="main-menu-two__logo">
            <Link to="/">
              <img src={logo} width={138} height={40} alt="Logo" />
            </Link>
          </div>
        </div>
        <div className="main-menu-two__main-menu-box">
          <a
            href="#"
            onClick={handlMobileMenu}
            className="mobile-nav__toggler"
            title="mobile-menu"
          >
            <i className="fa fa-bars"></i>
          </a>
          {isOnePage ? <SinglePageManuList /> : <MenuList />}
        </div>
        <div className="main-menu-two__right">
          <div className="main-menu-two__call">
            <div className="main-menu-two__call-icon">
              <i className="icon-call"></i>
            </div>
            <div className="main-menu-two__call-content">
              <p className="main-menu-two__call-sub-title">Call Anytime</p>
              <h5 className="main-menu-two__call-number">
                <a href="tel:9288006780">+92 ( 8800 ) - 6780</a>
              </h5>
            </div>
          </div>
          <div className="main-menu-two__search-cart-box">
            <div className="main-menu-two__search-cart-box">
              <div className="main-menu-two__search-box" onClick={handleSearch}>
                <a
                  href="#"
                  className="main-menu-two__search searcher-toggler-box icon-search-interface-symbol"
                  title="main menu"
                ></a>
              </div>
              <div className="main-menu-two__cart-box">
                <a href="/cart" className="main-menu-two__cart">
                  <span className="far fa-shopping-cart"></span>
                  <span className="main-menu-two__cart-count">
                    0{cartCount}
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div
            className="main-menu-two__nav-sidebar-icon"
            onClick={handlSidebar}
          >
            <a className="navSidebar-button" href="#" title="navSidebar">
              <span className="icon-dots-menu-one"></span>
              <span className="icon-dots-menu-two"></span>
              <span className="icon-dots-menu-three"></span>
            </a>
          </div>
          <div className="main-menu-two__btn-box">
            <a href="/contact" className="thm-btn">
              Get A Quote<span className="icon-arrow-right"></span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MenuTwo
