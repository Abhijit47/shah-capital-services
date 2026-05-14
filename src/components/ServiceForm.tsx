// import Customselect from './elements/CustomSelect'

// import Customselect from './elements/CustomSelect'

export default function ServiceForm() {
  // const selectOptions = [
  //   { id: 1, value: '-Select-', label: '-Select-' },
  //   { id: 2, value: 'Mutual Funds', label: 'Mutual Funds' },
  //   { id: 3, value: 'Fixed Deposit', label: 'Fixed Deposit' },
  //   { id: 4, value: 'Health Insurance', label: 'Health Insurance' },
  //   { id: 5, value: 'Stocks and Securities', label: 'Stocks and Securities' },
  //   { id: 6, value: 'Life Insurance', label: 'Life Insurance' },
  //   { id: 7, value: 'Vehicle Insurance', label: 'Vehicle Insurance' },
  //   { id: 8, value: 'Travel Insurance', label: 'Travel Insurance' },
  //   {
  //     id: 9,
  //     value: 'Miscellaneous Insurance',
  //     label: 'Miscellaneous Insurance',
  //   },
  // ]

  return (
    <div className="checkout-page">
      <div className="container">
        <div className="row">
          <div className="col-xl-8 col-lg-6">
            <div className="billing_details">
              <div className="billing_title">
                <p>
                  Returning Customer? <a href="#">Click here to Login</a>
                </p>
                <h2>Billing details</h2>
              </div>
              <form
                className="billing_details_form"
                // onSubmit={handleBillingDetails}
                action="https://forms.zohopublic.in/shahcapserv/form/ServiceInterestForm1/formperma/GrkJuXH1-UmbYtfdKwHDr8tbvWmc4V8ryZ413nPgrQk/htmlRecords/submit"
                name="form"
                method="POST"
                onSubmit='javascript:document.charset="UTF-8"; return zf_ValidateAndSubmit();'
                accept-charset="UTF-8"
                enctype="multipart/form-data"
                id="form"
              >
                <div className="row">
                  <div className="col-12">
                    <div className="billing_input_box">
                      <input
                        type="text"
                        name="SingleLine"
                        checktype="c1"
                        value=""
                        maxLength={255}
                        fieldType="1"
                        placeholder="Full name"
                        required={true}
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-xl-6">
                    <div className="billing_input_box">
                      <input
                        type="tel"
                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                        placeholder="Phone"
                        compname="PhoneNumber"
                        name="PhoneNumber_countrycode"
                        maxlength="20"
                        checktype="c7"
                        value=""
                        phoneFormat="1"
                        isCountryCodeEnabled="false"
                        fieldType="11"
                        id="international_PhoneNumber_countrycode"
                        valType="number"
                        phoneFormatType="1"
                        required={true}
                      />
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div className="billing_input_box">
                      <input
                        type="email"
                        placeholder="Email address"
                        name="Email"
                        checktype="c5"
                        value=""
                        maxlength="255"
                        fieldType="9"
                        required={true}
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-xl-12">
                    <div className="billing_input_box">
                      <div className="select-box">
                        <select
                          className="billing_input_box"
                          name="Dropdown3"
                          checktype="c1"
                          required={true}
                        >
                          <option disabled={true} value="-Select-">
                            -Select-
                          </option>
                          <option value="Mutual Funds">Mutual Funds</option>
                          <option value="Fixed Deposit">Fixed Deposit</option>
                          <option value="Health Insurance">
                            Health Insurance
                          </option>
                          <option value="Stocks and Securities">
                            Stocks and Securities
                          </option>
                          <option value="Life Insurance">Life Insurance</option>
                          <option value="Vehicle Insurance">
                            Vehicle Insurance
                          </option>
                          <option value="Travel Insurance">
                            Travel Insurance
                          </option>
                          <option value="Miscellaneous Insurance">
                            Miscellaneous Insurance
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-xl-12">
                    <div className="billing_details_form-btns">
                      <div className="billing_details_form-btn-1">
                        <button type="button" className="thm-btn">
                          Continue Shopping{' '}
                          <span>
                            <i className="icon-arrow-right"></i>
                          </span>
                        </button>
                      </div>
                      <div className="billing_details_form-btn-2">
                        <button type="submit" className="thm-btn">
                          Return To Cart{' '}
                          <span>
                            <i className="icon-arrow-right"></i>
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* <div className="col-xl-4 col-lg-6">
            <div className="sidebar-order-summary">
              <div className="title-box">
                <h3>Your Order</h3>
              </div>

              <ul className="sidebar-order-summary__list list-unstyled">
                <li>
                  <div className="left-text">
                    <p>Smartphone Screen Repair</p>
                  </div>

                  <div className="right-text">
                    <p>$88.00</p>
                  </div>
                </li>

                <li>
                  <div className="left-text">
                    <p>
                      Laptop Battery <br /> Replacement X 02
                    </p>
                  </div>

                  <div className="right-text">
                    <p>$188.00</p>
                  </div>
                </li>

                <li>
                  <div className="left-text">
                    <p>Sub total</p>
                  </div>

                  <div className="right-text">
                    <p>$288.00</p>
                  </div>
                </li>

                <li>
                  <div className="left-text">
                    <p>Shipping</p>
                  </div>

                  <div className="right-text">
                    <ul>
                      <li>
                        <input type="radio" id="flat" name="rating" readOnly />
                        <label htmlFor="flat">
                          <i></i>
                          Flat Rate: $9.00
                        </label>
                      </li>

                      <li>
                        <input type="radio" id="free" name="rating" readOnly />
                        <label htmlFor="free">
                          <i></i>
                          Free Shipping
                        </label>
                      </li>

                      <li>
                        <input type="radio" id="local" name="rating" readOnly />
                        <label htmlFor="local">
                          <i></i>
                          Local Pickup
                        </label>
                      </li>
                    </ul>
                  </div>
                </li>

                <li>
                  <div className="left-text">
                    <p>Total</p>
                  </div>

                  <div className="right-text">
                    <p>$388.00</p>
                  </div>
                </li>
              </ul>

              <div className="sidebar-order-summary__Payment">
                <div className="title-box">
                  <h3>Payment Method</h3>
                </div>

                <div className="checkout__payment">
                  <div
                    className={`checkout__payment__item ${isCheckPay === 1 ? 'checkout__payment__item--active' : ''}`}
                  >
                    <h3
                      onClick={() => setCheckPay(1)}
                      className="checkout__payment__title"
                    >
                      Direct bank transfer
                    </h3>
                    <div
                      className="checkout__payment__content"
                      style={{
                        display: isCheckPay === 1 ? 'block' : 'none',
                      }}
                    >
                      A Direct Bank Transfer is a method of sending money from
                      one bank account to another without using cash, checks, or
                      third-party payment services.
                    </div>
                  </div>
                  <div
                    className={`checkout__payment__item ${isCheckPay === 2 ? 'checkout__payment__item--active' : ''}`}
                  >
                    <h3
                      onClick={() => setCheckPay(2)}
                      className="checkout__payment__title"
                    >
                      Paypal payment
                    </h3>
                    <div
                      className="checkout__payment__content"
                      style={{
                        display: isCheckPay === 2 ? 'block' : 'none',
                      }}
                    >
                      PayPal is an online payment system that allows users to
                      send and receive money securely. It supports personal and
                      business transactions, including shopping, invoicing, and
                      international transfers.
                    </div>
                  </div>
                  <div
                    className={`checkout__payment__item ${isCheckPay === 3 ? 'checkout__payment__item--active' : ''}`}
                  >
                    <h3
                      onClick={() => setCheckPay(3)}
                      className="checkout__payment__title"
                    >
                      Cheque Payment
                    </h3>
                    <div
                      className="checkout__payment__content"
                      style={{
                        display: isCheckPay === 3 ? 'block' : 'none',
                      }}
                    >
                      A cheque payment is a written, dated, and signed document
                      that instructs a bank to pay a specific amount of money
                      from the {`issuer's`} account to the payee.
                    </div>
                  </div>
                </div>
              </div>

              <div className="sidebar-order-summary__bottom">
                <p className="text1">
                  your personal data will be used to process your order your
                  support experience throughout this website and for other
                  purposes described in our <a href="#">privacy policy</a>
                </p>

                <div className="sidebar-order-summary__checked">
                  <input
                    type="checkbox"
                    name="skipper1"
                    id="skipper2"
                    readOnly
                  />
                  <label htmlFor="skipper2">
                    <span></span>I have read and agree to the website{' '}
                    <a href="#">terms and conditions</a>
                  </label>
                </div>

                <div className="sidebar-order-summary__btn">
                  <Link to="/checkout" className="thm-btn">
                    Place your order{' '}
                    <span>
                      <i className="icon-arrow-right"></i>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      <script type="text/javascript">
        var dateAndMonthRegexFormateArray =
        zf_SetDateAndMonthRegexBasedOnDateFormate('dd-MMM-yyyy') var
        zf_DateRegex = new RegExp(dateAndMonthRegexFormateArray[0]) var
        zf_MonthYearRegex = new RegExp(dateAndMonthRegexFormateArray[1]) var
        zf_MandArray = [ 'SingleLine', 'PhoneNumber_countrycode', 'Email',
        'Dropdown3', ] var zf_FieldArray = [ 'SingleLine',
        'PhoneNumber_countrycode', 'Email', 'Dropdown3', ] var
        isSalesIQIntegrationEnabled = false var salesIQFieldsArray = []
      </script>
    </div>
  )
}
