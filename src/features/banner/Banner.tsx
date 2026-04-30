import { Link } from '@tanstack/react-router'

type BannerProp = {
  title: string
  subTitle?: string
  subTitleLink?: string
  thirdTitle?: string
}
const Banner: React.FC<BannerProp> = ({
  title,
  subTitle = '',
  subTitleLink = '/services',
  thirdTitle,
}) => {
  return (
    <section className="page-header">
      <div className="page-header__bg"></div>
      <div className="container">
        <div className="page-header__inner">
          <h3>{title}</h3>
          <div className="thm-breadcrumb__inner">
            {/* <ul className="thm-breadcrumb list-unstyled"> */}
            <ul className="thm-breadcrumb list-unstyled">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <span className="icon-angle-right"></span>
              </li>
              {subTitleLink && thirdTitle && subTitle ? (
                <>
                  <li>
                    <Link to={subTitleLink}>{subTitle}</Link>
                  </li>
                  <li>
                    <span className="icon-angle-right"></span>
                  </li>
                  <li>{thirdTitle}</li>
                </>
              ) : (
                <li>
                  <a href={'#'}>{subTitle || title}</a>
                </li>
              )}
            </ul>
            {/* </ul> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner
