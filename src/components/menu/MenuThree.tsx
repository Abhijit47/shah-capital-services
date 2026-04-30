import { Link, useLocation } from '@tanstack/react-router'
import useFixproContext from '../context/useFixproContext'
import MenuList from './MenuList'
import SinglePageManuList from './SinglePageManuList'
import logo from '/assets/images/resources/logo-1.png'

const MenuThree: React.FC = () => {
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
    <div className="main-menu-three__wrapper">
      <div className="container">
        <div className="main-menu-three__wrapper-inner">
          <div className="main-menu-three__left">
            <div className="main-menu-three__logo">
              <Link to="/">
                <img src={logo} width={138} height={40} alt="Logo" />
              </Link>
            </div>
          </div>
          <div className="main-menu-two__main-menu-box">
            <a
              href="#"
              className="mobile-nav__toggler"
              onClick={handlMobileMenu}
              title="mobile-menu"
            >
              <i className="fa fa-bars"></i>
            </a>
            {isOnePage ? <SinglePageManuList /> : <MenuList />}
          </div>
          <div className="main-menu-three__right">
            <div className="main-menu-three__btn-box">
              <a href="/contact" className="thm-btn">
                Get A Quote<span className="icon-arrow-right"></span>
              </a>
            </div>
            <div className="main-menu-three__search-box" onClick={handleSearch}>
              <span className="main-menu-three__search searcher-toggler-box icon-search-interface-symbol"></span>
            </div>
            <div className="main-menu-three__cart">
              <a href="/cart" className="main-menu__cart">
                <span className="far fa-shopping-cart"></span>
                <span className="main-menu__cart-count">0{cartCount}</span>
              </a>
            </div>
            <div
              className="main-menu-three__nav-sidebar-icon"
              onClick={handlSidebar}
            >
              <a className="navSidebar-button" href="#" title="navSidebar">
                <span className="icon-dots-menu-three-one"></span>
                <span className="icon-dots-menu-three-two"></span>
                <span className="icon-dots-menu-three-three"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MenuThree
