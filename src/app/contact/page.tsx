// src/app/contact/page.tsx
"use client";

import React, { useState } from "react";
import { toast } from "sonner";
import { 
  ArrowRight, 
  Mail, 
  MapPin, 
  Phone, 
  Clock, 
  UserCheck, 
  FileSearch 
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

const INDUSTRIES = [
  "Industrial Manufacturing",
  "Life Sciences",
  "Automotive",
  "Semiconductor",
  "Food & Beverages",
  "Chemical Manufacturing",
  "Oil & Gas",
  "Power & Utilities",
  "Mining & Metals",
  "Water & Wastewater",
  "Consumer Packaged Goods",
  "Data Centres",
  "EPC",
  "Agriculture",
  "Other",
];

interface FormState {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  jobTitle: string;
  industry: string;
  message: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormState>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    jobTitle: "",
    industry: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});

  const validate = () => {
    const tempErrors: FormErrors = {};
    if (!formData.firstName.trim()) tempErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) tempErrors.lastName = "Last name is required";
    if (!formData.email.trim()) {
      tempErrors.email = "Work email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Please enter a valid email address";
    }
    if (formData.phone && !/^[+\d\s\-()]{7,20}$/.test(formData.phone)) {
      tempErrors.phone = "Please provide a valid phone number";
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Prepare payload (concatenating first/last name for backend API compatibility)
    const payload = {
      name: `${formData.firstName} ${formData.lastName}`.trim(),
      email: formData.email,
      company: formData.company,
      phone: formData.phone,
      industry: formData.industry,
      message: formData.jobTitle 
        ? `[Job Title: ${formData.jobTitle}] ${formData.message}` 
        : formData.message,
    };

    try {
      const response = await fetch(`${API_BASE}/api/inquiries`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error("Failed to submit");

      toast.success("Your inquiry has been sent successfully!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        jobTitle: "",
        industry: "",
        message: "",
      });
      setErrors({});
    } catch (err) {
      console.error(err);
      toast.error("Error sending inquiry. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl border border-line bg-mist text-txt-strong text-sm placeholder:text-txt-muted/65 focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand transition-all duration-200";
  const labelClass = "block text-sm font-semibold text-txt-strong mb-1.5 text-left";
  const errorClass = "text-xs text-red-500 mt-1 text-left";

  return (
    <div className="min-h-screen bg-background text-foreground antialiased font-sans flex flex-col">
      {/* Header */}
      <Header onContactClick={() => {}} />

      <main className="flex-grow pt-24 lg:pt-28 pb-16">
        
        {/* ==========================================
            1. HERO TITLE BANNER
            ========================================== */}
        <Section variant="ink" className="relative py-16 overflow-hidden">
          <div className="absolute inset-0 bg-tech-grid opacity-15 pointer-events-none" />
          <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] rounded-full bg-brand/10 blur-[130px] pointer-events-none" />
          
          <Container className="relative z-10 text-left space-y-4">
            <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-brand-hot block">
              Contact DHGsoft
            </span>
            <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1]">
              Start Your <span className="text-gradient-brand">Transformation Journey</span>
            </h1>
            <p className="text-slate-300 max-w-3xl leading-relaxed text-body-md font-medium">
              Connect with our industrial digital transformation experts. We&apos;ll help you define a roadmap tailored to your industry, challenges, and business objectives.
            </p>
          </Container>
        </Section>

        {/* ==========================================
            2. GET IN TOUCH & WHY CONTACT GRID
            ========================================== */}
        <Section variant="white" size="default">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              
              {/* LEFT — Value Prop Sidebar & Offices */}
              <div className="lg:col-span-5 space-y-12 text-left">
                
                {/* Why Contact Us */}
                <div className="space-y-6">
                  <h2 className="text-txt-strong text-2xl font-black tracking-tight">
                    Why Contact DHGsoft
                  </h2>
                  <p className="text-body-sm text-txt-muted leading-relaxed">
                    We make it easy to get started on your digital transformation journey with expert guidance from day one.
                  </p>
                  
                  <div className="space-y-6 pt-4">
                    {/* Fast Response */}
                    <div className="flex gap-4 items-start">
                      <div className="w-10 h-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center shrink-0">
                        <Clock className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-extrabold text-txt-strong">Fast Response</h4>
                        <p className="text-body-sm text-txt-muted mt-1 leading-relaxed">
                          We respond to all inquiries within 24 business hours to discuss your project needs.
                        </p>
                      </div>
                    </div>

                    {/* Dedicated Expert */}
                    <div className="flex gap-4 items-start">
                      <div className="w-10 h-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center shrink-0">
                        <UserCheck className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-extrabold text-txt-strong">Dedicated Expert</h4>
                        <p className="text-body-sm text-txt-muted mt-1 leading-relaxed">
                          You&apos;ll be matched with an industry specialist who understands your specific operational context.
                        </p>
                      </div>
                    </div>

                    {/* Free Assessment */}
                    <div className="flex gap-4 items-start">
                      <div className="w-10 h-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center shrink-0">
                        <FileSearch className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-extrabold text-txt-strong">Free Assessment</h4>
                        <p className="text-body-sm text-txt-muted mt-1 leading-relaxed">
                          Every engagement starts with a complimentary digital maturity assessment at no cost to you.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="h-px bg-line" />

                {/* Global Offices */}
                <div className="space-y-6">
                  <h3 className="text-txt-strong text-xl font-bold tracking-tight">
                    Global Offices
                  </h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-4 lg:grid-cols-1">
                    
                    {/* Office 1 */}
                    <div className="space-y-1">
                      <h4 className="font-extrabold text-txt-strong">San Jose</h4>
                      <p className="text-xs text-txt-muted font-medium uppercase tracking-wider text-brand">USA Headquarters</p>
                      <p className="text-body-sm text-txt-muted leading-relaxed">
                        Silicon Valley Innovation Center
                        <br />
                        San Jose, CA
                      </p>
                    </div>

                    {/* Office 2 */}
                    <div className="space-y-1">
                      <h4 className="font-extrabold text-txt-strong">London</h4>
                      <p className="text-xs text-txt-muted font-medium uppercase tracking-wider text-brand">Europe Office</p>
                      <p className="text-body-sm text-txt-muted leading-relaxed">
                        Tech City Hub, Old Street
                        <br />
                        London, UK
                      </p>
                    </div>

                    {/* Office 3 */}
                    <div className="space-y-1">
                      <h4 className="font-extrabold text-txt-strong">Singapore</h4>
                      <p className="text-xs text-txt-muted font-medium uppercase tracking-wider text-brand">APAC Office</p>
                      <p className="text-body-sm text-txt-muted leading-relaxed">
                        Marina Bay Financial District
                        <br />
                        Singapore
                      </p>
                    </div>

                  </div>
                </div>

              </div>

              {/* RIGHT — Contact Form Card */}
              <div className="lg:col-span-7">
                <div className="card glass-card rounded-3xl p-6 sm:p-10 border border-line bg-white shadow-xl">
                  
                  <h3 className="text-txt-strong text-2xl font-black tracking-tight text-left mb-6">
                    Talk to an Expert
                  </h3>

                  <form onSubmit={handleSubmit} noValidate className="space-y-5">
                    
                    {/* First & Last Name row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className={labelClass} htmlFor="firstName">
                          First Name <span className="text-brand">*</span>
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          autoComplete="given-name"
                          className={`${inputClass} ${errors.firstName ? "border-red-400 focus:ring-red-100" : ""}`}
                          placeholder="Jane"
                        />
                        {errors.firstName && <p className={errorClass}>{errors.firstName}</p>}
                      </div>
                      <div>
                        <label className={labelClass} htmlFor="lastName">
                          Last Name <span className="text-brand">*</span>
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          autoComplete="family-name"
                          className={`${inputClass} ${errors.lastName ? "border-red-400 focus:ring-red-100" : ""}`}
                          placeholder="Doe"
                        />
                        {errors.lastName && <p className={errorClass}>{errors.lastName}</p>}
                      </div>
                    </div>

                    {/* Email & Phone Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className={labelClass} htmlFor="email">
                          Work Email <span className="text-brand">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          autoComplete="email"
                          className={`${inputClass} ${errors.email ? "border-red-400 focus:ring-red-100" : ""}`}
                          placeholder="jane.doe@company.com"
                        />
                        {errors.email && <p className={errorClass}>{errors.email}</p>}
                      </div>
                      <div>
                        <label className={labelClass} htmlFor="phone">
                          Work Phone
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          autoComplete="tel"
                          className={`${inputClass} ${errors.phone ? "border-red-400 focus:ring-red-100" : ""}`}
                          placeholder="+1 (555) 019-2834"
                        />
                        {errors.phone && <p className={errorClass}>{errors.phone}</p>}
                      </div>
                    </div>

                    {/* Company & Job Title Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className={labelClass} htmlFor="company">
                          Company Name
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          autoComplete="organization"
                          className={inputClass}
                          placeholder="Enterprise Automation Inc."
                        />
                      </div>
                      <div>
                        <label className={labelClass} htmlFor="jobTitle">
                          Job Title
                        </label>
                        <input
                          type="text"
                          id="jobTitle"
                          name="jobTitle"
                          value={formData.jobTitle}
                          onChange={handleChange}
                          className={inputClass}
                          placeholder="VP of Operations"
                        />
                      </div>
                    </div>

                    {/* Industry Dropdown */}
                    <div>
                      <label className={labelClass} htmlFor="industry">
                        Industry Sector
                      </label>
                      <select
                        id="industry"
                        name="industry"
                        value={formData.industry}
                        onChange={handleChange}
                        className={`${inputClass} appearance-none cursor-pointer`}
                      >
                        <option value="">Select your industry...</option>
                        {INDUSTRIES.map((ind) => (
                          <option key={ind} value={ind}>{ind}</option>
                        ))}
                      </select>
                    </div>

                    {/* Message Box */}
                    <div>
                      <label className={labelClass} htmlFor="message">
                        Message / Project Details
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className={`${inputClass} resize-none`}
                        placeholder="Tell us about your digital engineering challenges, SCADA upgrades, or OT/IT integration goals..."
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-brand text-white font-bold py-4 rounded-xl shadow-md hover:bg-brand-deep active:scale-98 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                      >
                        {isSubmitting ? (
                          <>
                            <span className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full" />
                            Sending inquiry...
                          </>
                        ) : (
                          <>
                            Submit Form
                            <ArrowRight className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </div>

                  </form>

                </div>
              </div>

            </div>
          </Container>
        </Section>

      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
