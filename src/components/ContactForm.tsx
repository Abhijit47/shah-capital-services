import { useState } from 'react'
import Swal from 'sweetalert2'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!formData.name.trim() || !formData.email.trim()) {
      Swal.fire({
        icon: 'warning',
        title: 'Missing Fields',
        text: 'Please fill in at least your name and email.',
        confirmButtonColor: '#e74c3c',
      })
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      Swal.fire({
        icon: 'warning',
        title: 'Invalid Email',
        text: 'Please enter a valid email address.',
        confirmButtonColor: '#e74c3c',
      })
      return
    }

    try {
      /*
       * ─────────────────────────────────────────────
       *  NOTE: Add your backend / API call here.
       *  Example:
       *
       *  await axios.post('/api/contact', formData);
       *       — or —
       *  await fetch('/api/contact', {
       *      method: 'POST',
       *      headers: { 'Content-Type': 'application/json' },
       *      body: JSON.stringify(formData),
       *  });
       * ─────────────────────────────────────────────
       */

      Swal.fire({
        icon: 'success',
        title: 'Message Sent!',
        text: 'Thank you for reaching out. We will get back to you shortly.',
        confirmButtonColor: '#75d82fff',
      })

      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      })
    } catch {
      Swal.fire({
        icon: 'error',
        title: 'Submission Failed',
        text: 'Something went wrong. Please try again later.',
        confirmButtonColor: '#e74c3c',
      })
    }
  }

  return (
    <form
      className="contact-form-validated contact-page__form"
      onSubmit={handleSubmit}
    >
      <div className="row">
        <div className="col-xl-6 col-lg-6 col-md-6">
          <div className="contact-page__input-box">
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              required
              style={{ backgroundColor: 'var(--swal2-footer-border-color)' }}
            />
          </div>
        </div>
        <div className="col-xl-6 col-lg-6 col-md-6">
          <div className="contact-page__input-box">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{ backgroundColor: 'var(--swal2-footer-border-color)' }}
            />
          </div>
        </div>
        <div className="col-xl-6 col-lg-6 col-md-6">
          <div className="contact-page__input-box">
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              style={{ backgroundColor: 'var(--swal2-footer-border-color)' }}
            />
          </div>
        </div>
        <div className="col-xl-6 col-lg-6 col-md-6">
          <div className="contact-page__input-box">
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              style={{ backgroundColor: 'var(--swal2-footer-border-color)' }}
            />
          </div>
        </div>
        <div className="col-xl-12">
          <div className="contact-page__input-box text-message-box">
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              style={{ backgroundColor: 'var(--swal2-footer-border-color)' }}
            ></textarea>
          </div>
          <div className="contact-page__btn-box">
            <button
              type="submit"
              className="footer-widget__newsletter-btn thm-btn"
            >
              Send A Message
              <span>
                <i className="icon-right-arrow"></i>
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="result"></div>
    </form>
  )
}
