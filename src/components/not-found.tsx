import Banner from '#/features/banner/Banner'
import { Link } from '@tanstack/react-router'
import errorPageImg from '/assets/images/resources/error-page-img1.png'

export default function NotFound() {
  return (
    <div className="page-wrapper">
      <Banner title="404 Error" subTitle="404 Error" />
      <section className="error-page">
        <div className="container">
          <div className="error-page__inner text-center">
            <div className="error-page__img float-bob-y">
              <img
                src={errorPageImg}
                width={903}
                height={524}
                alt="404 error illustration"
              />
            </div>

            <div className="error-page__content">
              <h2>Oops! Page Not Found!</h2>
              <p>
                The page you are looking for does not exist. It might have been
                moved or deleted.
              </p>
              <div className="btn-box">
                <Link to="/" className="thm-btn">
                  Back To Home <span className="icon-arrow-right"></span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
