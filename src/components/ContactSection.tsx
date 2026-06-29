"use client"

import React, { useState } from "react"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { ArrowRight, HelpCircle, Loader2 } from "lucide-react"

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000"

interface FormData {
  firstName: string
  lastName: string
  email: string
  company: string
  jobTitle: string
  country: string
  message: string
  personalDataConsent: boolean
  marketingConsent: boolean
}

interface FormErrors {
  firstName?: string
  lastName?: string
  email?: string
  company?: string
  jobTitle?: string
  country?: string
  message?: string
  personalDataConsent?: string
}

export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    jobTitle: "",
    country: "",
    message: "",
    personalDataConsent: false,
    marketingConsent: false
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState<FormErrors>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked
      setFormData((prev) => ({ ...prev, [name]: checked }))
      if (errors[name as keyof FormErrors]) {
        setErrors((prev) => ({ ...prev, [name]: "" }))
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }))
      if (errors[name as keyof FormErrors]) {
        setErrors((prev) => ({ ...prev, [name]: "" }))
      }
    }
  }

  const validate = () => {
    const tempErrors: FormErrors = {}
    if (!formData.firstName.trim()) tempErrors.firstName = "First name is required"
    if (!formData.lastName.trim()) tempErrors.lastName = "Last name is required"
    if (!formData.email.trim()) {
      tempErrors.email = "Email address is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email address is invalid"
    }
    if (!formData.company.trim()) tempErrors.company = "Company name is required"
    if (!formData.jobTitle.trim()) tempErrors.jobTitle = "Job title is required"
    if (!formData.country) tempErrors.country = "Country selection is required"
    if (!formData.message.trim()) tempErrors.message = "Message requirements are required"
    if (!formData.personalDataConsent) {
      tempErrors.personalDataConsent = "You must accept the data privacy terms"
    }

    setErrors(tempErrors)
    return Object.keys(tempErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!validate()) return

    setIsSubmitting(true)
    try {
      // Pack additional fields in the message to remain backward compatible with the database
      const packedMessage = `Job Title: ${formData.jobTitle.trim()}\nCountry: ${formData.country}\nPersonal Data Consent: Yes\nMarketing Consent: ${formData.marketingConsent ? "Yes" : "No"}\n\nLet us know how we can help you:\n${formData.message.trim()}`

      const payload = {
        name: `${formData.firstName.trim()} ${formData.lastName.trim()}`,
        email: formData.email.trim(),
        company: formData.company.trim(),
        message: packedMessage
      }

      const response = await fetch(`${API_BASE}/api/inquiries`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      })

      if (!response.ok) {
        throw new Error("Failed to submit inquiry")
      }

      toast.success("Your consultation request has been sent successfully!")
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        jobTitle: "",
        country: "",
        message: "",
        personalDataConsent: false,
        marketingConsent: false
      })
    } catch (err) {
      console.error(err)
      toast.error("Error submitting inquiry. Please make sure the backend is active.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-8 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#C30072] via-[#E10088] to-[#F36B2A] opacity-35" />
      <div className="max-w-[1440px] mx-auto px-6">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left Column: Corporate Consultation Info */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <div className="text-xs font-bold text-[#C30072] uppercase tracking-wider mb-3 font-sans">
                Start Today
              </div>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight font-headline">
                It's Time to{" "}
                <span className="bg-gradient-to-r from-[#F36B2A] to-[#FFB800] bg-clip-text text-transparent">
                  Connect
                </span>
                <br />
                <span className="bg-gradient-to-r from-[#C30072] via-[#E10088] to-[#F36B2A] bg-clip-text text-transparent font-headline">
                  Intelligence
                </span>
              </h2>
              <p className="text-slate-700 mt-4 text-sm lg:text-base leading-relaxed font-semibold font-sans">
                Transform Data into Decisions. Connect Operations with Enterprise Intelligence. Accelerate Your Digital Transformation Journey with DHGsoft.
              </p>
            </div>

            {/* Verification notice */}
            <div className="p-4 rounded-xl bg-white border border-slate-200 text-xs text-slate-500 leading-relaxed max-w-md font-sans">
              <HelpCircle className="h-4 w-4 text-[#C30072] inline mr-2 align-text-bottom shrink-0" />
              Your message will route directly to an engineering lead matching your industry vertical. Response turnaround is typically under 1 business day.
            </div>
          </div>

          {/* Right Column: Premium Consultation Form Card */}
          <div className="lg:col-span-6">
            <Card className="p-8 border border-slate-200 bg-white rounded-[20px] shadow-[0_10px_35px_rgba(0,0,0,0.02)] relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#C30072] via-[#E10088] to-[#F36B2A]" />

              <CardHeader className="p-0 mb-6">
                <CardTitle className="text-xl font-bold text-slate-800 font-headline">
                  Enterprise Request Form
                </CardTitle>
              </CardHeader>

              <CardContent className="p-0">
                <form onSubmit={handleSubmit} className="space-y-4 font-sans">
                  {/* First Name & Last Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5" htmlFor="firstName">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className={`w-full px-4 py-2.5 bg-white border rounded-xl text-slate-800 text-sm focus:outline-none focus:border-[#C30072] focus:ring-1 focus:ring-[#C30072]/30 transition-all ${
                          errors.firstName ? "border-red-500" : "border-slate-350"
                        }`}
                        placeholder="John"
                      />
                      {errors.firstName && <p className="text-red-500 text-[10px] mt-1">{errors.firstName}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5" htmlFor="lastName">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className={`w-full px-4 py-2.5 bg-white border rounded-xl text-slate-800 text-sm focus:outline-none focus:border-[#C30072] focus:ring-1 focus:ring-[#C30072]/30 transition-all ${
                          errors.lastName ? "border-red-500" : "border-slate-350"
                        }`}
                        placeholder="Doe"
                      />
                      {errors.lastName && <p className="text-red-500 text-[10px] mt-1">{errors.lastName}</p>}
                    </div>
                  </div>

                  {/* Email & Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5" htmlFor="email">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-2.5 bg-white border rounded-xl text-slate-800 text-sm focus:outline-none focus:border-[#C30072] focus:ring-1 focus:ring-[#C30072]/30 transition-all ${
                          errors.email ? "border-red-500" : "border-slate-350"
                        }`}
                        placeholder="john@company.com"
                      />
                      {errors.email && <p className="text-red-500 text-[10px] mt-1">{errors.email}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5" htmlFor="company">
                        Company *
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className={`w-full px-4 py-2.5 bg-white border rounded-xl text-slate-800 text-sm focus:outline-none focus:border-[#C30072] focus:ring-1 focus:ring-[#C30072]/30 transition-all ${
                          errors.company ? "border-red-500" : "border-slate-350"
                        }`}
                        placeholder="Enterprise Inc."
                      />
                      {errors.company && <p className="text-red-500 text-[10px] mt-1">{errors.company}</p>}
                    </div>
                  </div>

                  {/* Job Title & Country */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5" htmlFor="jobTitle">
                        Job Title *
                      </label>
                      <input
                        type="text"
                        id="jobTitle"
                        name="jobTitle"
                        value={formData.jobTitle}
                        onChange={handleChange}
                        className={`w-full px-4 py-2.5 bg-white border rounded-xl text-slate-800 text-sm focus:outline-none focus:border-[#C30072] focus:ring-1 focus:ring-[#C30072]/30 transition-all ${
                          errors.jobTitle ? "border-red-500" : "border-slate-350"
                        }`}
                        placeholder="Systems Architect"
                      />
                      {errors.jobTitle && <p className="text-red-500 text-[10px] mt-1">{errors.jobTitle}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5" htmlFor="country">
                        Country *
                      </label>
                      <select
                        id="country"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        className={`w-full px-4 py-2.5 bg-white border rounded-xl text-slate-800 text-sm focus:outline-none focus:border-[#C30072] focus:ring-1 focus:ring-[#C30072]/30 transition-all ${
                          errors.country ? "border-red-500" : "border-slate-350"
                        }`}
                      >
                        <option value="">Select Country</option>
                        <option value="United States">United States</option>
                        <option value="Germany">Germany</option>
                        <option value="India">India</option>
                        <option value="United Kingdom">United Kingdom</option>
                        <option value="Canada">Canada</option>
                        <option value="Australia">Australia</option>
                        <option value="Singapore">Singapore</option>
                        <option value="France">France</option>
                        <option value="Japan">Japan</option>
                        <option value="Other">Other</option>
                      </select>
                      {errors.country && <p className="text-red-500 text-[10px] mt-1">{errors.country}</p>}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5" htmlFor="message">
                      Let us know how we can help you *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className={`w-full px-4 py-2.5 bg-white border rounded-xl text-slate-800 text-sm focus:outline-none focus:border-[#C30072] focus:ring-1 focus:ring-[#C30072]/30 transition-all resize-none ${
                        errors.message ? "border-red-500" : "border-slate-350"
                      }`}
                      placeholder="Specify your project requirements or queries..."
                    />
                    {errors.message && <p className="text-red-500 text-[10px] mt-1">{errors.message}</p>}
                  </div>

                  {/* Consents & Checkboxes */}
                  <div className="space-y-3 pt-2">
                    {/* Consent 1 */}
                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        id="personalDataConsent"
                        name="personalDataConsent"
                        checked={formData.personalDataConsent}
                        onChange={handleChange}
                        className="mt-1 h-4 w-4 rounded border-slate-350 text-[#C30072] focus:ring-[#C30072] accent-[#C30072] cursor-pointer shrink-0"
                      />
                      <label htmlFor="personalDataConsent" className="text-xs text-slate-650 leading-snug cursor-pointer select-none">
                        I agree to DHGsoft collecting and processing my personal data to respond to my request and provide related services. <span className="text-[#C30072] font-semibold">*</span>
                      </label>
                    </div>
                    {errors.personalDataConsent && <p className="text-red-500 text-[10px] pl-7">{errors.personalDataConsent}</p>}

                    {/* Consent 2 */}
                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        id="marketingConsent"
                        name="marketingConsent"
                        checked={formData.marketingConsent}
                        onChange={handleChange}
                        className="mt-1 h-4 w-4 rounded border-slate-350 text-[#C30072] focus:ring-[#C30072] accent-[#C30072] cursor-pointer shrink-0"
                      />
                      <label htmlFor="marketingConsent" className="text-xs text-slate-650 leading-snug cursor-pointer select-none">
                        I agree to receive details about services, events and any marketing communication from DHGsoft.
                      </label>
                    </div>
                  </div>

                  {/* Disclosures */}
                  <div className="text-[10px] text-slate-400 space-y-1.5 pt-2">
                    <p>
                      To learn more about how we protect your data, please refer to the{" "}
                      <a href="#privacy" className="text-[#C30072] hover:underline font-semibold">
                        DHGsoft privacy policy
                      </a>
                      .
                    </p>
                    <p>This site is protected by reCAPTCHA.</p>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#C30072] hover:bg-[#C30072]/95 text-white font-bold rounded-xl py-3.5 shadow-md shadow-[#C30072]/15 transition-all flex items-center justify-center gap-2 group cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          Submit
                          <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                        </>
                      )}
                    </Button>
                  </div>

                </form>
              </CardContent>
            </Card>
          </div>

        </div>

      </div>
    </section>
  )
}
