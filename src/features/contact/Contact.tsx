import ContactForm from '#/components/ContactForm.tsx'
import FadeInAdvanced from '@/components/elements/FadeInAdvanced'

const Contact: React.FC = () => {
  return (
    <>
      <section className="contact-info">
        <div className="container">
          <div className="row">
            <FadeInAdvanced
              className="col-xl-4 col-lg-4"
              variant="fadeInLeft"
              delay={100}
            >
              <div className="contact-info__single">
                <div className="contact-info__icon">
                  <span className="icon-call"></span>
                </div>
                <p>Contact Us</p>
                <h3>
                  <a
                    href="tel:+919840999879"
                    target={'_blank'}
                    rel="noopener noreferrer"
                  >
                    +91 9840999879
                  </a>
                </h3>
              </div>
            </FadeInAdvanced>
            <FadeInAdvanced
              className="col-xl-4 col-lg-4"
              variant="fadeInUp"
              delay={200}
            >
              <div className="contact-info__single">
                <div className="contact-info__icon">
                  <span className="icon-envelope"></span>
                </div>
                <p>Mail Us</p>
                <h3>
                  <a
                    href="mailto:shahcapserv@gmail.com"
                    target={'_blank'}
                    rel="noopener noreferrer"
                  >
                    shahcapserv@gmail.com
                  </a>
                </h3>
              </div>
            </FadeInAdvanced>
            <FadeInAdvanced
              className="col-xl-4 col-lg-4"
              variant="fadeInRight"
              delay={300}
            >
              <div className="contact-info__single">
                <div className="contact-info__icon">
                  <span className="icon-location"></span>
                </div>
                <p>Our Location</p>
                <h3>
                  <a
                    title="Our Location"
                    href="https://maps.app.goo.gl/bntg6fuaKdHhdkLZ6"
                    target={'_blank'}
                    rel="noopener noreferrer"
                  >
                    Old no. 477, Mint Street, Kondithope, Chennai, Tamil Nadu,
                    600001, India
                  </a>
                </h3>
              </div>
            </FadeInAdvanced>
          </div>
        </div>
      </section>
      <section className="contact-page">
        <div className="container">
          <div className="contact-page__inner">
            <div className="row">
              <div className="col-xl-6">
                <div className="contact-page__left">
                  {/* <iframe
                    title="our location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4562.753041141002!2d-118.80123790098536!3d34.152323469614075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e82469c2162619%3A0xba03efb7998eef6d!2sCostco+Wholesale!5e0!3m2!1sbn!2sbd!4v1562518641290!5m2!1sbn!2sbd"
                    className="google-map__one"
                  ></iframe> */}

                  <iframe
                    title="our location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3880.9067737855!2d80.27506457940162!3d13.101293579107441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526f5ee4a4f2c3%3A0x994e07b8efb5b1da!2s477%2C%20Mint%20St%2C%20Kondithope%2C%20George%20Town%2C%20Chennai%2C%20Tamil%20Nadu%20600001!5e1!3m2!1sen!2sin!4v1778999956161!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="google-map__one"
                  ></iframe>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="contact-page__right">
                  <h3 className="contact-page__form-title">Get A Free Quote</h3>
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
