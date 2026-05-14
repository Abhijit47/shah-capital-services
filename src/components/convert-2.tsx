import type { ChangeEvent, SubmitEvent } from 'react'
import { useState } from 'react'

// 1. TypeScript interfaces matching Zoho parameters exactly
interface FormData {
  SingleLine: string
  PhoneNumber_countrycode: string
  Email: string
  Dropdown3: string
  zf_referrer_name: string
  zf_redirect_url: string
  zc_gad: string
}

interface FormErrors {
  SingleLine: boolean
  PhoneNumber_countrycode: boolean
  Email: boolean
  Dropdown3: boolean
}

export const ZohoValidatedForm: React.FC = () => {
  // State tracking for field text values
  const [formData, setFormData] = useState<FormData>({
    SingleLine: '',
    PhoneNumber_countrycode: '',
    Email: '',
    Dropdown3: '-Select-',
    zf_referrer_name: '',
    zf_redirect_url: '',
    zc_gad: '',
  })

  // State tracking for field errors (simulating Zoho's zf_ShowErrorMsg)
  const [errors, setErrors] = useState<FormErrors>({
    SingleLine: false,
    PhoneNumber_countrycode: false,
    Email: false,
    Dropdown3: false,
  })

  // Zoho's Email configuration pattern (Exact RegEx from Page 7 of your PDF)
  const emailExp =
    /^[\w]([\w\-.+&'/]*)@([a-zA-Z0-9]([a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,22}$/

  // Zoho's Phone field constraint parameter (Exact RegEx from Page 8 of your PDF)
  const phoneExp = /^[+]{0,1}[()0-9-. ]+$/

  // Handles text modifications and clears active error states
  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: false })) // Reset validation visual cue
  }

  // Central submission handler mimicking zf_ValidateAndSubmit()
  const handleFormSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    // Mimics javascript:document.charset="UTF-8"
    if (document.characterSet) {
      document.charset = 'UTF-8'
    }

    // Temporary validation object tracking
    const trackingErrors = {
      SingleLine: false,
      PhoneNumber_countrycode: false,
      Email: false,
      Dropdown3: false,
    }

    let isValid = true

    // --- REPLICATING: zf_CheckMandatory() ---
    // Validate Name (SingleLine)
    if (formData.SingleLine.replace(/^\s+|\s+$/g, '').length === 0) {
      // Exact whitespace trim rule from Page 4
      trackingErrors.SingleLine = true
      isValid = false
    }

    // Validate Phone Content Presence
    if (
      formData.PhoneNumber_countrycode.replace(/^\s+|\s+$/g, '').length === 0
    ) {
      trackingErrors.PhoneNumber_countrycode = true
      isValid = false
    }

    // Validate Email Presence
    if (formData.Email.replace(/^\s+|\s+$/g, '').length === 0) {
      trackingErrors.Email = true
      isValid = false
    }

    // Validate Selection Selection Check (Page 4: matching '-Select-')
    if (formData.Dropdown3 === '-Select-') {
      trackingErrors.Dropdown3 = true
      isValid = false
    }

    // --- REPLICATING: zf_ValidCheck() Custom Field Validations ---
    // If presence passes, validate structural format constraints
    if (!trackingErrors.Email && formData.Email !== '') {
      const emailVal = formData.Email.replace(/^\s+|\s+$/g, '')
      if (!emailExp.test(emailVal)) {
        // Exact condition check from Page 7
        trackingErrors.Email = true
        isValid = false
      }
    }

    if (
      !trackingErrors.PhoneNumber_countrycode &&
      formData.PhoneNumber_countrycode !== ''
    ) {
      const phoneVal = formData.PhoneNumber_countrycode.replace(
        /^\s+|\s+$/g,
        '',
      )
      if (!phoneExp.test(phoneVal)) {
        // Exact context parser condition from Page 8 (phoneFormat === 1)
        trackingErrors.PhoneNumber_countrycode = true
        isValid = false
      }
    }

    // Process execution constraints
    if (!isValid) {
      e.preventDefault() // Stop native post transmission
      setErrors(trackingErrors) // Trigger conditional error templates
      return false
    }

    return true // Form posts successfully straight to Zoho servers
  }

  return (
    <form
      action="zohopublic.in"
      name="form"
      method="POST"
      onSubmit={handleFormSubmit}
      acceptCharset="UTF-8"
      encType="multipart/form-data"
      id="form"
    >
      {/* Hidden configuration variables tracking */}
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

      {/* Name Input */}
      <div>
        <label>
          Name <em>*</em>
        </label>
        <input
          type="text"
          name="SingleLine"
          maxLength={255}
          value={formData.SingleLine}
          onChange={handleInputChange}
        />
        {/* Replicates "SingleLine_error" from page 1/2 */}
        {errors.SingleLine && (
          <p style={{ color: 'red', fontSize: '12px' }}>Invalid value</p>
        )}
      </div>

      {/* Mobile Input */}
      <div>
        <label>
          Mobile <em>*</em>
        </label>
        <input
          type="text"
          name="PhoneNumber_countrycode"
          maxLength={20}
          value={formData.PhoneNumber_countrycode}
          onChange={handleInputChange}
        />
        {/* Replicates "PhoneNumber_error" from page 2 */}
        {errors.PhoneNumber_countrycode && (
          <p style={{ color: 'red', fontSize: '12px' }}>Invalid value</p>
        )}
      </div>

      {/* Email Input */}
      <div>
        <label>
          Email <em>*</em>
        </label>
        <input
          type="text"
          name="Email"
          maxLength={255}
          value={formData.Email}
          onChange={handleInputChange}
        />
        {/* Replicates "Email_error" from page 3 */}
        {errors.Email && (
          <p style={{ color: 'red', fontSize: '12px' }}>Invalid value</p>
        )}
      </div>

      {/* Dropdown Input */}
      <div>
        <label>
          Service Interest <em>*</em>
        </label>
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
        {/* Replicates "Dropdown3_error" from page 3 */}
        {errors.Dropdown3 && (
          <p style={{ color: 'red', fontSize: '12px' }}>Invalid value</p>
        )}
      </div>

      <button type="submit" style={{ marginTop: '10px' }}>
        Submit
      </button>
    </form>
  )
}
