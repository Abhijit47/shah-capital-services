import { Link, useLocation } from '@tanstack/react-router'
import type { MenuItem } from './menuContent'
import {
  blogList,
  homeList,
  pagesList,
  servicesList,
  shopList,
} from './menuContent'

function MenuList() {
  const { pathname } = useLocation()
  const findLocation = (array: MenuItem[]): boolean => {
    return array.some((item) => item.menuLink === pathname)
  }

  return (
    <ul className="main-menu__list">
      <li className={`dropdown ${findLocation(homeList) ? 'current' : ''}`}>
        <Link to="/">Home </Link>
        <ul className="shadow-box">
          {homeList.map((item: MenuItem) => (
            <li
              key={item.id}
              className={pathname === item.menuLink ? 'current' : ''}
            >
              <Link to={item.menuLink}>{item.menuItem}</Link>
            </li>
          ))}
        </ul>
      </li>
      <li className={pathname === '/about' ? 'current' : ''}>
        <Link to="/about">About</Link>
      </li>
      <li className={`dropdown ${findLocation(pagesList) ? 'current' : ''}`}>
        <a href="#">Pages</a>
        <ul className="shadow-box">
          {pagesList.map((item: MenuItem) => (
            <li
              key={item.id}
              className={pathname === item.menuLink ? 'current' : ''}
            >
              <Link to={item.menuLink}>{item.menuItem}</Link>
            </li>
          ))}
        </ul>
      </li>
      <li className={`dropdown ${findLocation(servicesList) ? 'current' : ''}`}>
        <Link to="/services">Services</Link>
        <ul className="shadow-box">
          {servicesList.map((item: MenuItem) => (
            <li
              key={item.id}
              className={pathname === item.menuLink ? 'current' : ''}
            >
              <Link to={item.menuLink}>{item.menuItem}</Link>
            </li>
          ))}
        </ul>
      </li>
      <li className={`dropdown ${findLocation(shopList) ? 'current' : ''}`}>
        <a href="#">Shop</a>
        <ul className="shadow-box">
          {shopList.map((item: MenuItem) => (
            <li
              key={item.id}
              className={pathname === item.menuLink ? 'current' : ''}
            >
              <Link to={item.menuLink}>{item.menuItem}</Link>
            </li>
          ))}
        </ul>
      </li>
      <li className={`dropdown ${findLocation(blogList) ? 'current' : ''}`}>
        <Link to="/blogs">Blog</Link>
        <ul className="shadow-box">
          {blogList.map((item: MenuItem) => (
            <li
              key={item.id}
              className={pathname === item.menuLink ? 'current' : ''}
            >
              <Link to={item.menuLink}>{item.menuItem}</Link>
            </li>
          ))}
        </ul>
      </li>
      <li className={pathname === '/contact' ? 'current' : ''}>
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  )
}

export default MenuList
