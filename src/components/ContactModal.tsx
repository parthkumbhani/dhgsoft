'use client';

import React, { useState, useEffect } from 'react';
import { toast } from 'sonner';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { ArrowRight, Loader2 } from 'lucide-react';

const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  showToast?: (message: string, type?: 'success' | 'error') => void;
  prefill?: string;
}

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  industry: string;
  company: string;
  jobTitle: string;
  country: string;
  message: string;
  personalDataConsent: boolean;
  marketingConsent: boolean;
}

const INDUSTRIES = [
  'Industrial Manufacturing',
  'Life Sciences',
  'Automotive',
  'Semiconductor',
  'Food & Beverages',
  'Chemical Manufacturing',
  'Oil & Gas',
  'Power & Utilities',
  'Mining & Metals',
  'Water & Wastewater',
  'Consumer Packaged Goods',
  'Data Centres',
  'EPC',
  'Agriculture',
  'Other',
];

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  company?: string;
  jobTitle?: string;
  country?: string;
  message?: string;
  personalDataConsent?: string;
}

export default function ContactModal({ isOpen, onClose, prefill = '' }: ContactModalProps) {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    industry: '',
    company: '',
    jobTitle: '',
    country: '',
    message: '',
    personalDataConsent: false,
    marketingConsent: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        industry: '',
        company: '',
        jobTitle: '',
        country: '',
        message: prefill || '',
        personalDataConsent: false,
        marketingConsent: false,
      });
      setExpanded(false);
      setErrors({});
    }
  }, [isOpen, prefill]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
      if (errors[name as keyof FormErrors]) {
        setErrors(prev => ({ ...prev, [name]: '' }));
      }
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
      if (errors[name as keyof FormErrors]) {
        setErrors(prev => ({ ...prev, [name]: '' }));
      }
      if (name === 'email' && value.length > 0) {
        setExpanded(true);
      }
    }
  };

  const validate = () => {
    const tempErrors: FormErrors = {};
    if (!formData.firstName.trim()) tempErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) tempErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) {
      tempErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Email address is invalid';
    }
    if (!formData.company.trim()) tempErrors.company = 'Company name is required';
    if (!formData.jobTitle.trim()) tempErrors.jobTitle = 'Job title is required';
    if (!formData.country) tempErrors.country = 'Country selection is required';
    if (!formData.message.trim()) tempErrors.message = 'Message requirements are required';
    if (!formData.personalDataConsent) {
      tempErrors.personalDataConsent = 'You must accept the data privacy terms';
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      // Pack additional fields in the message to remain backward compatible with the database
      const packedMessage = `Phone: ${formData.phone}\nIndustry: ${formData.industry}\nJob Title: ${formData.jobTitle.trim()}\nCountry: ${formData.country}\nPersonal Data Consent: Yes\nMarketing Consent: ${formData.marketingConsent ? 'Yes' : 'No'}\n\nLet us know how we can help you:\n${formData.message.trim()}`;

      const payload = {
        name: `${formData.firstName.trim()} ${formData.lastName.trim()}`,
        email: formData.email.trim(),
        company: formData.company.trim(),
        message: packedMessage,
      };

      const response = await fetch(`${API_BASE}/api/inquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error('Failed to submit inquiry');

      toast.success('Your consultation request has been sent successfully!');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        industry: '',
        company: '',
        jobTitle: '',
        country: '',
        message: '',
        personalDataConsent: false,
        marketingConsent: false,
      });
      setExpanded(false);
      onClose();
    } catch (err) {
      console.error(err);
      toast.error('Error submitting inquiry. Please make sure the backend is active.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => { if (!open) onClose(); }}>
      <DialogContent className="bg-white p-0 max-w-xl w-full border border-slate-200 sm:rounded-[20px] shadow-2xl overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#C30072] via-[#E10088] to-[#F36B2A]" />

        <div className="px-8 pt-6 pb-8 max-h-[90vh] overflow-y-auto">
          <DialogHeader className="mb-6">
            <DialogTitle className="text-xl font-bold text-slate-800 font-headline">
              Enterprise Request Form
            </DialogTitle>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-4 font-sans">
            {/* Email Address */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5" htmlFor="modal-email">
                Email Address *
              </label>
              <input
                type="email"
                id="modal-email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-2.5 bg-white border rounded-xl text-slate-800 text-sm focus:outline-none focus:border-[#C30072] focus:ring-1 focus:ring-[#C30072]/30 transition-all ${
                  errors.email ? 'border-red-500' : 'border-slate-200'
                }`}
                placeholder="john@company.com"
              />
              {errors.email && <p className="text-red-500 text-[10px] mt-1">{errors.email}</p>}
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5" htmlFor="modal-phone">
                Work Phone Number *
              </label>
              <input
                type="tel"
                id="modal-phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`w-full px-4 py-2.5 bg-white border rounded-xl text-slate-800 text-sm focus:outline-none focus:border-[#C30072] focus:ring-1 focus:ring-[#C30072]/30 transition-all ${
                  errors.phone ? 'border-red-500' : 'border-slate-200'
                }`}
                placeholder="+91 98765 43210"
              />
              {errors.phone && <p className="text-red-500 text-[10px] mt-1">{errors.phone}</p>}
            </div>

            {/* Select Industry */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5" htmlFor="modal-industry">
                Select an Industry *
              </label>
              <div className="relative">
                <select
                  id="modal-industry"
                  name="industry"
                  value={formData.industry}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-slate-800 text-sm focus:outline-none focus:border-[#C30072] focus:ring-1 focus:ring-[#C30072]/30 transition-all appearance-none cursor-pointer"
                >
                  <option value="">Select an Industry</option>
                  {INDUSTRIES.map((ind) => (
                    <option key={ind} value={ind}>{ind}</option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-slate-500">
                  ▼
                </div>
              </div>
            </div>

            {!expanded && (
              <p className="text-[11px] text-slate-400">
                Enter your email above to reveal the full form.
              </p>
            )}

            {/* STEP 2: Progressive expansion on email input */}
            <div
              style={{
                maxHeight: expanded ? '1400px' : '0px',
                opacity: expanded ? 1 : 0,
                overflow: 'hidden',
                transition: 'max-height 0.65s cubic-bezier(0.4,0,0.2,1), opacity 0.5s ease',
              }}
            >
              <div className="space-y-4 pt-2">
                {/* First Name & Last Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5" htmlFor="modal-firstName">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="modal-firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className={`w-full px-4 py-2.5 bg-white border rounded-xl text-slate-800 text-sm focus:outline-none focus:border-[#C30072] focus:ring-1 focus:ring-[#C30072]/30 transition-all ${
                        errors.firstName ? 'border-red-500' : 'border-slate-200'
                      }`}
                      placeholder="John"
                    />
                    {errors.firstName && <p className="text-red-500 text-[10px] mt-1">{errors.firstName}</p>}
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5" htmlFor="modal-lastName">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="modal-lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className={`w-full px-4 py-2.5 bg-white border rounded-xl text-slate-800 text-sm focus:outline-none focus:border-[#C30072] focus:ring-1 focus:ring-[#C30072]/30 transition-all ${
                        errors.lastName ? 'border-red-500' : 'border-slate-200'
                      }`}
                      placeholder="Doe"
                    />
                    {errors.lastName && <p className="text-red-500 text-[10px] mt-1">{errors.lastName}</p>}
                  </div>
                </div>

                {/* Company & Job Title */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5" htmlFor="modal-company">
                      Company *
                    </label>
                    <input
                      type="text"
                      id="modal-company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className={`w-full px-4 py-2.5 bg-white border rounded-xl text-slate-800 text-sm focus:outline-none focus:border-[#C30072] focus:ring-1 focus:ring-[#C30072]/30 transition-all ${
                        errors.company ? 'border-red-500' : 'border-slate-200'
                      }`}
                      placeholder="Enterprise Inc."
                    />
                    {errors.company && <p className="text-red-500 text-[10px] mt-1">{errors.company}</p>}
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5" htmlFor="modal-jobTitle">
                      Job Title *
                    </label>
                    <input
                      type="text"
                      id="modal-jobTitle"
                      name="jobTitle"
                      value={formData.jobTitle}
                      onChange={handleChange}
                      className={`w-full px-4 py-2.5 bg-white border rounded-xl text-slate-800 text-sm focus:outline-none focus:border-[#C30072] focus:ring-1 focus:ring-[#C30072]/30 transition-all ${
                        errors.jobTitle ? 'border-red-500' : 'border-slate-200'
                      }`}
                      placeholder="Systems Architect"
                    />
                    {errors.jobTitle && <p className="text-red-500 text-[10px] mt-1">{errors.jobTitle}</p>}
                  </div>
                </div>

                {/* Country */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5" htmlFor="modal-country">
                    Country *
                  </label>
                  <div className="relative">
                    <select
                      id="modal-country"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      className={`w-full px-4 py-2.5 bg-white border rounded-xl text-slate-800 text-sm focus:outline-none focus:border-[#C30072] focus:ring-1 focus:ring-[#C30072]/30 transition-all appearance-none cursor-pointer ${
                        errors.country ? 'border-red-500' : 'border-slate-200'
                      }`}
                    >
                      <option value="">Select Country</option>
                      <option value="India">India</option>
                      <option value="United States">United States</option>
                      <option value="Germany">Germany</option>
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="Canada">Canada</option>
                      <option value="Australia">Australia</option>
                      <option value="Singapore">Singapore</option>
                      <option value="France">France</option>
                      <option value="Japan">Japan</option>
                      <option value="Other">Other</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-slate-500">
                      ▼
                    </div>
                  </div>
                  {errors.country && <p className="text-red-500 text-[10px] mt-1">{errors.country}</p>}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5" htmlFor="modal-message">
                    Let us know how we can help you *
                  </label>
                  <textarea
                    id="modal-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className={`w-full px-4 py-2.5 bg-white border rounded-xl text-slate-800 text-sm focus:outline-none focus:border-[#C30072] focus:ring-1 focus:ring-[#C30072]/30 transition-all resize-none ${
                      errors.message ? 'border-red-500' : 'border-slate-200'
                    }`}
                    placeholder="Specify your project requirements or queries..."
                  />
                  {errors.message && <p className="text-red-500 text-[10px] mt-1">{errors.message}</p>}
                </div>

                {/* Consents */}
                <div className="space-y-3 pt-1">
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="modal-personalDataConsent"
                      name="personalDataConsent"
                      checked={formData.personalDataConsent}
                      onChange={handleChange}
                      className="mt-1 h-4 w-4 rounded border-slate-200 text-[#C30072] focus:ring-[#C30072] accent-[#C30072] cursor-pointer shrink-0"
                    />
                    <label htmlFor="modal-personalDataConsent" className="text-xs text-slate-600 leading-snug cursor-pointer select-none">
                      I agree to DHGsoft collecting and processing my personal data to respond to my request and provide related services. <span className="text-[#C30072] font-semibold">*</span>
                    </label>
                  </div>
                  {errors.personalDataConsent && <p className="text-red-500 text-[10px] pl-7">{errors.personalDataConsent}</p>}
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="modal-marketingConsent"
                      name="marketingConsent"
                      checked={formData.marketingConsent}
                      onChange={handleChange}
                      className="mt-1 h-4 w-4 rounded border-slate-200 text-[#C30072] focus:ring-[#C30072] accent-[#C30072] cursor-pointer shrink-0"
                    />
                    <label htmlFor="modal-marketingConsent" className="text-xs text-slate-600 leading-snug cursor-pointer select-none">
                      I agree to receive details about services, events and any marketing communication from DHGsoft.
                    </label>
                  </div>
                </div>

                {/* Disclosures */}
                <div className="text-[10px] text-slate-400 space-y-1 pt-1">
                  <p>To learn more about how we protect your data, please refer to the{' '}
                    <a href="#privacy" className="text-[#C30072] hover:underline font-semibold">DHGsoft privacy policy</a>.
                  </p>
                  <p>This site is protected by reCAPTCHA.</p>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
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
              </button>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
