import { Link, useLocation } from '@tanstack/react-router'
// import useFixproContext from '../context/useFixproContext'
import MenuList from './MenuList'
import SinglePageManuList from './SinglePageManuList'

const MenuOne: React.FC = () => {
  // const { setIsSearch, setIsSidebar, setIsMobileManu, cartCount } =
  //   useFixproContext()
  const { pathname } = useLocation()
  const isOnePage = pathname.includes('single-page')

  // const handleSearch = () => {
  //   setIsSearch((pre) => !pre)
  // }
  const handlSidebar = () => {
    // setIsSidebar((pre) => !pre)
  }
  const handlMobileMenu = () => {
    // setIsMobileManu((pre) => !pre)
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
          {isOnePage ? <SinglePageManuList /> : <MenuList />}
        </div>
        <div className="main-menu__right">
          <div className="main-menu__call">
            <div className="main-menu__call-icon">
              <i className="icon-call"></i>
            </div>
            <div className="main-menu__call-content">
              <p className="main-menu__call-sub-title">Call Anytime</p>
              <h5 className="main-menu__call-number">
                <a href="tel:9288006780">+92 ( 8800 ) - 6780</a>
              </h5>
            </div>
          </div>
          <div className="main-menu__search-cart-box">
            {/* <div className="main-menu__search-box" onClick={handleSearch}>
              <a
                href="#"
                className="main-menu__search searcher-toggler-box icon-search-interface-symbol"
                title="main menu"
              ></a>
            </div> */}
            {/* <div className="main-menu__cart-box">
              <Link to="/cart" className="main-menu__cart">
                <span className="far fa-shopping-cart"></span>
                <span className="main-menu__cart-count">0{cartCount}</span>
              </Link>
            </div> */}
          </div>
          <div className="main-menu__nav-sidebar-icon" onClick={handlSidebar}>
            <a className="navSidebar-button" href="#" title="navSidebar">
              <span className="icon-dots-menu-one"></span>
              <span className="icon-dots-menu-two"></span>
              <span className="icon-dots-menu-three"></span>
            </a>
          </div>
          <div className="main-menu__btn-box">
            <Link to="/contact" className="thm-btn">
              Get A Quote<span className="icon-arrow-right"></span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MenuOne
