import Banner from '#/features/banner/Banner'
import { createFileRoute, Link } from '@tanstack/react-router'
import type { ChangeEvent, SubmitEvent } from 'react'
import { useState } from 'react'

export const Route = createFileRoute('/(auth)/login')({
  component: RouteComponent,
})

function RouteComponent() {
  const [rememberMe, setRememberMe] = useState<boolean>(false)
  const handleLogin = (e: SubmitEvent<HTMLFormElement>): void => {
    e.preventDefault()
    const form = e.target
    form.reset()
  }
  const handleRememberMeChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setRememberMe(e.target.checked)
  }

  return (
    <main>
      <Banner title="Login" subTitle="Login" />
      <section className="login-one">
        <div className="container">
          <div className="login-one__form">
            <div className="inner-title text-center">
              <h2>Login Here</h2>
            </div>
            <form onSubmit={handleLogin}>
              <div className="row">
                <div className="col-xl-12">
                  <div className="form-group">
                    <div className="input-box">
                      <input
                        type="email"
                        name="form_email"
                        id="formEmail1"
                        placeholder="Email..."
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="col-xl-12">
                  <div className="form-group">
                    <div className="input-box">
                      <input
                        type="password"
                        name="form_password"
                        id="formEmail2"
                        placeholder="Password..."
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="col-xl-12">
                  <div className="form-group">
                    <button
                      className="thm-btn"
                      type="submit"
                      data-loading-text="Please wait..."
                    >
                      Login Here
                      <span>
                        <i className="icon-arrow-right"></i>
                      </span>
                    </button>
                  </div>
                </div>
                <div className="remember-forget">
                  <div className="checked-box1">
                    <input
                      className="form-check-input mt-1"
                      type="checkbox"
                      id="rememberMe"
                      checked={rememberMe}
                      onChange={handleRememberMeChange}
                      aria-label="Remember me checkbox"
                    />
                    <label htmlFor="rememberMe">Remember me</label>
                  </div>
                  <div className="forget">
                    <a href="#">Forget password?</a>
                  </div>
                </div>

                <div className="create-account text-center">
                  <p>
                    Not registered yet?{' '}
                    <Link to={'/sign-up'}>Create an Account</Link>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}
