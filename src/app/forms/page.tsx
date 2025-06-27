'use client'

import { useState } from 'react'
import Link from 'next/link'
import Captcha from '@/components/Captcha'

interface FormErrors {
  email?: string
  password?: string
  confirmPassword?: string
  phone?: string
  birthDate?: string
  terms?: string
  captcha?: string
}

export default function FormsPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    phone: '',
    birthDate: '',
    gender: '',
    country: '',
    newsletter: false,
    terms: false
  })
  
  const [errors, setErrors] = useState<FormErrors>({})
  const [captchaVerified, setCaptchaVerified] = useState(false)
  const [captchaType, setCaptchaType] = useState<'math' | 'image' | 'text'>('math')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const validatePassword = (password: string) => {
    return password.length >= 8
  }

  const validatePhone = (phone: string) => {
    const phoneRegex = /^\+?[\d\s\-\(\)]{10,}$/
    return phoneRegex.test(phone)
  }

  const validateForm = () => {
    const newErrors: FormErrors = {}

    if (!formData.email) {
      newErrors.email = 'Email is required'
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!formData.password) {
      newErrors.password = 'Password is required'
    } else if (!validatePassword(formData.password)) {
      newErrors.password = 'Password must be at least 8 characters long'
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password'
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match'
    }

    if (formData.phone && !validatePhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number'
    }

    if (formData.birthDate) {
      const birthYear = new Date(formData.birthDate).getFullYear()
      const currentYear = new Date().getFullYear()
      if (currentYear - birthYear < 13) {
        newErrors.birthDate = 'You must be at least 13 years old'
      }
    }

    if (!formData.terms) {
      newErrors.terms = 'You must accept the terms and conditions'
    }

    if (!captchaVerified) {
      newErrors.captcha = 'Please complete the captcha verification'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
    }, 2000)
  }

  const handleInputChange = (field: string, value: any) => {
    setFormData({ ...formData, [field]: value })
    
    // Clear error when user starts typing
    if (errors[field as keyof FormErrors]) {
      setErrors({ ...errors, [field]: undefined })
    }
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-8 text-center">
          <div className="text-green-500 text-6xl mb-4">✓</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Success!</h2>
          <p className="text-gray-600 mb-6">Your registration has been completed successfully.</p>
          <Link href="/" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
            Back to Home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-2xl mx-auto px-4">
        <div className="text-center mb-8">
          <Link href="/" className="text-blue-600 hover:underline">
            ← Back to Home
          </Link>
          <h1 className="text-3xl font-bold text-gray-900 mt-4">
            Complex Form Testing
          </h1>
          <p className="text-gray-600 mt-2">
            Test various form validation and interaction scenarios
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Basic Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange('firstName', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  data-testid="first-name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  value={formData.lastName}
                  onChange={(e) => handleInputChange('lastName', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  data-testid="last-name"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address *
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 ${
                  errors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'
                }`}
                data-testid="email"
                required
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600" data-testid="email-error">
                  {errors.email}
                </p>
              )}
            </div>

            {/* Password */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Password *
                </label>
                <input
                  type="password"
                  value={formData.password}
                  onChange={(e) => handleInputChange('password', e.target.value)}
                  className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 ${
                    errors.password ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'
                  }`}
                  data-testid="password"
                  required
                />
                {errors.password && (
                  <p className="mt-1 text-sm text-red-600">{errors.password}</p>
                )}
                <p className="mt-1 text-xs text-gray-500">
                  Must be at least 8 characters long
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Confirm Password *
                </label>
                <input
                  type="password"
                  value={formData.confirmPassword}
                  onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                  className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 ${
                    errors.confirmPassword ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'
                  }`}
                  data-testid="confirm-password"
                  required
                />
                {errors.confirmPassword && (
                  <p className="mt-1 text-sm text-red-600">{errors.confirmPassword}</p>
                )}
              </div>
            </div>

            {/* Phone and Birth Date */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  placeholder="+1 (555) 123-4567"
                  className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 ${
                    errors.phone ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'
                  }`}
                  data-testid="phone"
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Birth Date
                </label>
                <input
                  type="date"
                  value={formData.birthDate}
                  onChange={(e) => handleInputChange('birthDate', e.target.value)}
                  className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 ${
                    errors.birthDate ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'
                  }`}
                  data-testid="birth-date"
                />
                {errors.birthDate && (
                  <p className="mt-1 text-sm text-red-600">{errors.birthDate}</p>
                )}
              </div>
            </div>

            {/* Gender and Country */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Gender
                </label>
                <select
                  value={formData.gender}
                  onChange={(e) => handleInputChange('gender', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  data-testid="gender"
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                  <option value="prefer-not-to-say">Prefer not to say</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Country
                </label>
                <select
                  value={formData.country}
                  onChange={(e) => handleInputChange('country', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  data-testid="country"
                >
                  <option value="">Select Country</option>
                  <option value="us">United States</option>
                  <option value="ca">Canada</option>
                  <option value="uk">United Kingdom</option>
                  <option value="de">Germany</option>
                  <option value="fr">France</option>
                  <option value="jp">Japan</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            {/* CAPTCHA Section */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Verification *
              </label>
              <div className="mb-3">
                <div className="flex space-x-4 text-sm">
                  <button
                    type="button"
                    onClick={() => setCaptchaType('math')}
                    className={`px-3 py-1 rounded ${
                      captchaType === 'math' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    Math
                  </button>
                  <button
                    type="button"
                    onClick={() => setCaptchaType('text')}
                    className={`px-3 py-1 rounded ${
                      captchaType === 'text' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    Text
                  </button>
                  <button
                    type="button"
                    onClick={() => setCaptchaType('image')}
                    className={`px-3 py-1 rounded ${
                      captchaType === 'image' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    Image
                  </button>
                </div>
              </div>
              <Captcha
                type={captchaType}
                onVerify={(verified) => {
                  setCaptchaVerified(verified)
                  if (verified && errors.captcha) {
                    setErrors({ ...errors, captcha: undefined })
                  }
                }}
              />
              {errors.captcha && (
                <p className="mt-1 text-sm text-red-600">{errors.captcha}</p>
              )}
            </div>

            {/* Checkboxes */}
            <div className="space-y-3">
              <label className="flex items-start space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.newsletter}
                  onChange={(e) => handleInputChange('newsletter', e.target.checked)}
                  className="mt-1 w-4 h-4 text-blue-600 rounded"
                  data-testid="newsletter-checkbox"
                />
                <span className="text-sm text-gray-700">
                  Subscribe to our newsletter for updates and promotions
                </span>
              </label>

              <label className="flex items-start space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.terms}
                  onChange={(e) => handleInputChange('terms', e.target.checked)}
                  className={`mt-1 w-4 h-4 rounded ${
                    errors.terms ? 'text-red-600' : 'text-blue-600'
                  }`}
                  data-testid="terms-checkbox"
                  required
                />
                <span className="text-sm text-gray-700">
                  I agree to the <a href="#" className="text-blue-600 hover:underline">Terms of Service</a> and{' '}
                  <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a> *
                </span>
              </label>
              {errors.terms && (
                <p className="ml-7 text-sm text-red-600">{errors.terms}</p>
              )}
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                data-testid="submit-button"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Processing...
                  </span>
                ) : (
                  'Create Account'
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}