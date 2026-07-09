// src/components/careers/CvForm.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { UploadCloud, CheckCircle2, ShieldCheck, AlertCircle } from "lucide-react";

export default function CvForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    areaOfInterest: "Engineering",
    portfolioUrl: "",
    message: "",
    consent: false
  });
  
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setCvFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.consent) {
      setStatus("error");
      return;
    }
    
    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
    }, 1500);
  };

  return (
    <div className="bg-white border border-line rounded-3xl p-8 md:p-12 shadow-sm text-left max-w-3xl mx-auto">
      {status === "success" ? (
        <div className="py-12 text-center space-y-6">
          <div className="h-16 w-16 bg-emerald-500/10 border border-emerald-500/20 rounded-full flex items-center justify-center text-emerald-500 mx-auto">
            <CheckCircle2 className="w-8 h-8 animate-bounce" />
          </div>
          <div className="space-y-2">
            <h3 className="text-2xl font-black text-text-strong tracking-tight">Application Received</h3>
            <p className="text-text-muted text-sm max-w-md mx-auto leading-relaxed">
              Thank you for submitting your CV. Our systems architecture team reviews coordinates against openings weekly. We will connect if there is a slot match.
            </p>
          </div>
          <div className="pt-6">
            <button
              onClick={() => {
                setStatus("idle");
                setCvFile(null);
                setFormData({
                  fullName: "",
                  email: "",
                  phone: "",
                  areaOfInterest: "Engineering",
                  portfolioUrl: "",
                  message: "",
                  consent: false
                });
              }}
              className="bg-brand hover:bg-brand-hot px-6 py-3 rounded-xl transition-all cursor-pointer section-eyebrow on-dark"
            >
              Submit Another CV
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Full name */}
            <div className="space-y-2">
              <label htmlFor="fullName" className="text-xs font-bold text-text-strong uppercase tracking-wide">
                Full Name <span className="text-brand">*</span>
              </label>
              <input
                id="fullName"
                type="text"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="Enter your first and last name"
                className="w-full bg-slate-50 border border-slate-200 focus:border-brand-hot rounded-xl px-4 py-3 text-sm text-text-strong placeholder-slate-400 outline-none transition-colors"
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label htmlFor="email" className="text-xs font-bold text-text-strong uppercase tracking-wide">
                Email Address <span className="text-brand">*</span>
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your corporate or personal email"
                className="w-full bg-slate-50 border border-slate-200 focus:border-brand-hot rounded-xl px-4 py-3 text-sm text-text-strong placeholder-slate-400 outline-none transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Phone */}
            <div className="space-y-2">
              <label htmlFor="phone" className="text-xs font-bold text-text-strong uppercase tracking-wide">
                Phone Number <span className="text-slate-400 font-medium">(Optional)</span>
              </label>
              <input
                id="phone"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="+1 (555) 000-0000"
                className="w-full bg-slate-50 border border-slate-200 focus:border-brand-hot rounded-xl px-4 py-3 text-sm text-text-strong placeholder-slate-400 outline-none transition-colors"
              />
            </div>

            {/* Area of interest */}
            <div className="space-y-2">
              <label htmlFor="areaOfInterest" className="text-xs font-bold text-text-strong uppercase tracking-wide">
                Area of Interest <span className="text-brand">*</span>
              </label>
              <select
                id="areaOfInterest"
                name="areaOfInterest"
                value={formData.areaOfInterest}
                onChange={handleInputChange}
                className="w-full bg-slate-50 border border-slate-200 focus:border-brand-hot rounded-xl px-4 py-3 text-sm text-text-strong outline-none transition-colors cursor-pointer"
              >
                <option value="Engineering">Engineering</option>
                <option value="Architecture">Architecture</option>
                <option value="Consulting">Consulting</option>
                <option value="Data & AI">Data & AI</option>
                <option value="Cybersecurity">Cybersecurity</option>
                <option value="Delivery">Delivery</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          {/* LinkedIn url */}
          <div className="space-y-2">
            <label htmlFor="portfolioUrl" className="text-xs font-bold text-text-strong uppercase tracking-wide">
              LinkedIn / Portfolio URL <span className="text-slate-400 font-medium">(Optional)</span>
            </label>
            <input
              id="portfolioUrl"
              type="url"
              name="portfolioUrl"
              value={formData.portfolioUrl}
              onChange={handleInputChange}
              placeholder="https://linkedin.com/in/username"
              className="w-full bg-slate-50 border border-slate-200 focus:border-brand-hot rounded-xl px-4 py-3 text-sm text-text-strong placeholder-slate-400 outline-none transition-colors"
            />
          </div>

          {/* CV Upload */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-text-strong uppercase tracking-wide block">
              Upload CV / Resume <span className="text-brand">*</span>
            </label>
            <div className="relative border-2 border-dashed border-slate-350/60 hover:border-brand/40 bg-slate-50 rounded-2xl p-6 text-center transition-all duration-300">
              <input
                id="cv-file"
                type="file"
                accept=".pdf,.doc,.docx"
                required
                onChange={handleFileChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
              <UploadCloud className="w-8 h-8 text-slate-400 mx-auto mb-2" />
              <span className="text-xs font-bold text-text-strong block">
                {cvFile ? cvFile.name : "Drag & drop or click to upload CV"}
              </span>
              <span className="text-[10px] text-slate-400 block mt-1">
                Supported formats: PDF, DOC, DOCX (Max 5MB)
              </span>
            </div>
          </div>

          {/* Message */}
          <div className="space-y-2">
            <label htmlFor="message" className="text-xs font-bold text-text-strong uppercase tracking-wide">
              Tell us about yourself <span className="text-slate-400 font-medium">(Optional)</span>
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={4}
              placeholder="Tell us about your technical background and what interests you about DHGsoft..."
              className="w-full bg-slate-50 border border-slate-200 focus:border-brand-hot rounded-xl p-4 text-sm text-text-strong placeholder-slate-400 outline-none transition-colors resize-none"
            />
          </div>

          {/* Consent Checkbox */}
          <div className="relative flex items-start gap-3">
            <div className="flex items-center h-5">
              <input
                id="consent"
                name="consent"
                type="checkbox"
                required
                checked={formData.consent}
                onChange={handleInputChange}
                className="h-4.5 w-4.5 rounded border-slate-300 text-brand focus:ring-brand cursor-pointer"
              />
            </div>
            <div className="text-xs leading-relaxed text-text-muted">
              <label htmlFor="consent" className="font-semibold text-text-strong cursor-pointer select-none">
                I consent to DHGsoft processing my data for recruitment purposes. <span className="text-brand">*</span>
              </label>{" "}
              Read our{" "}
              <Link href="/about" className="text-brand hover:underline font-bold">
                Privacy Policy
              </Link>{" "}
              for data handling details.
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-100">
            <div className="flex items-center gap-1.5 text-slate-400 text-[10px] font-mono tracking-wide">
              <ShieldCheck className="w-4 h-4 text-brand-hot" />
              <span>SSL SECURED CV TRANSMISSION</span>
            </div>
            
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full sm:w-auto bg-brand hover:bg-brand-hot disabled:bg-slate-300 text-white font-extrabold text-sm px-8 py-3.5 rounded-xl transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer select-none"
            >
              {status === "loading" ? "Submitting CV..." : "Submit Application"}
            </button>
          </div>

          {/* Disclaimer Comment Note */}
          <div className="mt-4 bg-amber-500/5 border border-amber-500/10 p-4 rounded-xl flex gap-3 text-left">
            <AlertCircle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
            <div className="text-[11px] text-amber-600 leading-relaxed font-mono">
              <strong>Ecosystem Integration Note:</strong> This form is front-end only. Before publishing to staging/production, configure secure API handling loops to connect this form directly to your corporate ATS (Greenhouse, Lever, Workday) and store uploaded CV documents in compliance with GDPR and local privacy mandates.
            </div>
          </div>

        </form>
      )}
    </div>
  );
}
