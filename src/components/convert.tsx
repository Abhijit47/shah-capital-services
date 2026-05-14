import type { ChangeEvent, SubmitEvent } from 'react'
import { useState } from 'react'

// Type safety definitions for form state
interface FormData {
  SingleLine: string // Client Name
  PhoneNumber_countrycode: string // Mobile Number
  Email: string // Email Address
  Dropdown3: string // Service Selection
  zf_referrer_name: string
  zf_redirect_url: string
  zc_gad: string
}

export const ZohoServiceForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    SingleLine: '',
    PhoneNumber_countrycode: '',
    Email: '',
    Dropdown3: '-Select-',
    zf_referrer_name: '',
    zf_redirect_url: '',
    zc_gad: '',
  })

  const [error, setError] = useState<string | null>(null)

  // Sync typing inputs with state
  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  // Basic validation logic replicating Zoho's requirements
  const handleFormSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    setError(null)

    // 1. Replicate document.charset="UTF-8" safely if needed by the browser
    // document.characterSet ? (document.charset = 'UTF-8') : null

    // 2. Client-Side Mandatory Validation Check (Replicating zf_CheckMandatory)
    if (
      !formData.SingleLine.trim() ||
      !formData.PhoneNumber_countrycode.trim() ||
      !formData.Email.trim() ||
      formData.Dropdown3 === '-Select-'
    ) {
      e.preventDefault() // 🛑 Stops submission if fields are missing/empty
      alert('Please fill in all mandatory fields.')
      return false
    }

    // 3. Client-Side Email Formatting Check (Replicating zf_ValidateEmailID)
    const emailRegex =
      /^[\w]([\w\-.+&'/]*)@([a-zA-Z0-9]([a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,22}$/
    if (!emailRegex.test(formData.Email)) {
      e.preventDefault() // 🛑 Stops submission if email is formatted incorrectly
      alert('Please enter a valid email address.')
      return false
    }

    // If everything passes, the function finishes executing.
    // The form automatically proceeds to execute the native POST action directly to Zoho's servers.

    // // Front-end mandatory field verification
    // if (
    //   !formData.SingleLine ||
    //   !formData.PhoneNumber_countrycode ||
    //   formData.Email === '' ||
    //   formData.Dropdown3 === '-Select-'
    // ) {
    //   e.preventDefault()
    //   setError('Please fill in all mandatory fields marked with *.')
    //   return
    // }

    // Form will proceed via natural POST submission straight to Zoho's server
  }

  return (
    <div className="form-container">
      {error && (
        <div style={{ color: 'red', marginBottom: '10px' }}>{error}</div>
      )}

      {/* Critical: action, method, and acceptCharset match your Zoho configuration exactly */}
      <form
        // action="https://zohopublic.in"
        name="form"
        method="POST"
        acceptCharset="UTF-8"
        encType="multipart/form-data"
        onSubmit={handleFormSubmit}
        action="https://forms.zohopublic.in/shahcapserv/form/ServiceInterestForm1/formperma/GrkJuXH1-UmbYtfdKwHDr8tbvWmc4V8ryZ413nPgrQk/htmlRecords/submit"
        // name="form"
        // method="POST"
        // onSubmit='javascript:document.charset="UTF-8"; return zf_ValidateAndSubmit();'
        accept-charset="UTF-8"
        // enctype="multipart/form-data"
        id="form"
      >
        {/* Hidden Tracking Configurations */}
        <input
          type="hidden"
          name="zf_referrer_name"
          value={formData.zf_referrer_name}
        />
        <input
          type="hidden"
          name="zf_redirect_url"
          value={formData.zf_redirect_url}
        />
        <input type="hidden" name="zc_gad" value={formData.zc_gad} />

        {/* Name Field */}
        <div>
          <label>Name *</label>
          <input
            type="text"
            name="SingleLine"
            maxLength={255}
            value={formData.SingleLine}
            onChange={handleInputChange}
          />
        </div>

        {/* Mobile Field */}
        <div>
          <label>Mobile *</label>
          <input
            type="text"
            name="PhoneNumber_countrycode"
            maxLength={20}
            value={formData.PhoneNumber_countrycode}
            onChange={handleInputChange}
          />
        </div>

        {/* Email Field */}
        <div>
          <label>Email *</label>
          <input
            type="text"
            name="Email"
            maxLength={255}
            value={formData.Email}
            onChange={handleInputChange}
          />
        </div>

        {/* Service Selection Dropdown */}
        <div>
          <label>Service Interest *</label>
          <select
            name="Dropdown3"
            value={formData.Dropdown3}
            onChange={handleInputChange}
          >
            <option value="-Select-">-Select-</option>
            <option value="Mutual Funds">Mutual Funds</option>
            <option value="Fixed Deposit">Fixed Deposit</option>
            <option value="Health Insurance">Health Insurance</option>
            <option value="Stocks and Securities">Stocks and Securities</option>
            <option value="Life Insurance">Life Insurance</option>
            <option value="Vehicle Insurance">Vehicle Insurance</option>
            <option value="Travel Insurance">Travel Insurance</option>
            <option value="Miscellaneous Insurance">
              Miscellaneous Insurance
            </option>
          </select>
        </div>

        {/* Submission Execution */}
        <button type="submit" style={{ marginTop: '15px' }}>
          Submit
        </button>
      </form>
    </div>
  )
}
