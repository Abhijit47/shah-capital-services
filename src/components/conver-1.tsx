import React, { useState } from 'react'

// 1. Exact Regex patterns extracted from Page 7 & 8 of your PDF
const ZOHO_VALIDATION = {
  EMAIL_REG:
    /^[\w]([\w\-.+&'/]*)@([a-zA-Z0-9]([a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,22}$/,
  PHONE_INTE_ALL_REG: /^[+]{0,1}[()0-9-. ]+$/,
  MANDATORY_FIELDS: [
    'SingleLine',
    'PhoneNumber_countrycode',
    'Email',
    'Dropdown3',
  ],
}

export const ZohoServiceForm: React.FC = () => {
  const [formData, setFormData] = useState({
    SingleLine: '',
    PhoneNumber_countrycode: '',
    Email: '',
    Dropdown3: '-Select-',
  })

  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear error when user starts typing
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  // 2. The converted 'zf_ValidateAndSubmit' logic
  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {}

    // Check Mandatory (Replicating zf_CheckMandatory from Page 4)
    ZOHO_VALIDATION.MANDATORY_FIELDS.forEach((field) => {
      const value = (formData as any)[field].trim()
      if (!value || value === '-Select-') {
        newErrors[field] = 'This field is required.'
      }
    })

    // Email Check (Replicating zf_ValidateEmailID from Page 7)
    if (formData.Email && !ZOHO_VALIDATION.EMAIL_REG.test(formData.Email)) {
      newErrors.Email = 'Invalid email format.'
    }

    // Phone Check (Replicating zf_ValidatePhone from Page 8)
    if (
      formData.PhoneNumber_countrycode &&
      !ZOHO_VALIDATION.PHONE_INTE_ALL_REG.test(formData.PhoneNumber_countrycode)
    ) {
      newErrors.PhoneNumber_countrycode = 'Invalid phone number.'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // Run the converted Zoho validation
    if (!validateForm()) {
      e.preventDefault() // Stop submission if validation fails
      console.log('Validation failed', errors)
    }
    // If valid, the form will POST directly to Zoho as configured in your PDF
  }

  return (
    <form
      action="https://zohopublic.in"
      method="POST"
      onSubmit={handleSubmit}
      acceptCharset="UTF-8"
      encType="multipart/form-data"
    >
      {/* Name Input */}
      <div>
        <label>Name *</label>
        <input
          name="SingleLine"
          value={formData.SingleLine}
          onChange={handleInputChange}
        />
        {errors.SingleLine && (
          <span style={{ color: 'red' }}>{errors.SingleLine}</span>
        )}
      </div>

      {/* Mobile Input */}
      <div>
        <label>Mobile *</label>
        <input
          name="PhoneNumber_countrycode"
          value={formData.PhoneNumber_countrycode}
          onChange={handleInputChange}
        />
        {errors.PhoneNumber_countrycode && (
          <span style={{ color: 'red' }}>{errors.PhoneNumber_countrycode}</span>
        )}
      </div>

      {/* Email Input */}
      <div>
        <label>Email *</label>
        <input
          name="Email"
          value={formData.Email}
          onChange={handleInputChange}
        />
        {errors.Email && <span style={{ color: 'red' }}>{errors.Email}</span>}
      </div>

      {/* Service Dropdown */}
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
          {/* ... add other options from Page 3 ... */}
        </select>
        {errors.Dropdown3 && (
          <span style={{ color: 'red' }}>{errors.Dropdown3}</span>
        )}
      </div>

      <button type="submit">Submit</button>
    </form>
  )
}
