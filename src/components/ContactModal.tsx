'use client';

import React, { useState, useEffect, useRef } from 'react';
import { toast } from 'sonner';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';

const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  showToast: (message: string, type?: 'success' | 'error') => void;
  prefill?: string;
}

interface FormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  industry: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
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

export default function ContactModal({ isOpen, onClose, prefill = '' }: ContactModalProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    phone: '',
    industry: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  // Progressive disclosure: expand full form once email has any value
  const [expanded, setExpanded] = useState(false);
  const expandedRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setFormData(prev => ({ ...prev, message: prefill || '' }));
      setExpanded(false);
      setErrors({});
    }
  }, [isOpen, prefill]);

  // Expand when user starts typing an email
  useEffect(() => {
    if (formData.email.length > 0 && !expanded) {
      setExpanded(true);
    }
  }, [formData.email, expanded]);

  const validate = () => {
    const tempErrors: FormErrors = {};
    if (!formData.name.trim()) tempErrors.name = 'Full name is required';
    if (!formData.email.trim()) {
      tempErrors.email = 'Work email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Please enter a valid email address';
    }
    if (formData.phone && !/^[+\d\s\-()]{7,20}$/.test(formData.phone)) {
      tempErrors.phone = 'Please provide a valid phone number';
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      const response = await fetch(`${API_BASE}/api/inquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Failed to submit');

      toast.success('Your inquiry has been sent successfully!');
      setFormData({ name: '', email: '', company: '', phone: '', industry: '', message: '' });
      setExpanded(false);
      onClose();
    } catch (err) {
      console.error(err);
      toast.error('Error sending inquiry. Please ensure the backend is running.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputBase =
    'w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition-all duration-200';
  const labelBase = 'block text-sm font-semibold text-slate-700 mb-1.5';
  const errorBase = 'text-xs text-red-500 mt-1';

  return (
    <Dialog open={isOpen} onOpenChange={(open) => { if (!open) onClose(); }}>
      <DialogContent className="bg-white p-0 max-w-lg w-full border border-slate-200 sm:rounded-2xl shadow-2xl overflow-hidden">
        {/* Gradient header strip */}
        <div className="h-1.5 w-full bg-gradient-to-r from-brand via-brand-hot to-brand-accent" />

        <div className="px-8 pt-6 pb-8">
          <DialogHeader className="mb-6">
            <DialogTitle className="text-2xl font-black text-slate-900 tracking-tight">
              Contact Sales
            </DialogTitle>
            <DialogDescription className="text-sm text-slate-500 mt-1 leading-relaxed">
              A DHGsoft intelligence architect will reach out to build your digital transformation roadmap.
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSubmit} noValidate className="space-y-4">
            {/* ── STEP 1: Always visible — Work Email ── */}
            <div>
              <label className={labelBase} htmlFor="email">
                Work Email <span className="text-brand">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                autoComplete="email"
                className={`${inputBase} ${errors.email ? 'border-red-400 focus:ring-red-200 focus:border-red-400' : ''}`}
                placeholder="you@company.com"
              />
              {errors.email && <p className={errorBase}>{errors.email}</p>}
              {!expanded && (
                <p className="text-xs text-slate-400 mt-2">
                  Start typing your email to reveal the full form.
                </p>
              )}
            </div>

            {/* ── STEP 2: Progressive expansion ── */}
            <div
              ref={expandedRef}
              style={{
                maxHeight: expanded ? '1000px' : '0px',
                opacity: expanded ? 1 : 0,
                overflow: 'hidden',
                transition: 'max-height 0.55s cubic-bezier(0.4,0,0.2,1), opacity 0.4s ease',
              }}
            >
              <div className="space-y-4 pt-1">

                {/* Full Name + Company in a 2-col grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className={labelBase} htmlFor="name">
                      Full Name <span className="text-brand">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      autoComplete="name"
                      className={`${inputBase} ${errors.name ? 'border-red-400 focus:ring-red-200 focus:border-red-400' : ''}`}
                      placeholder="John Doe"
                    />
                    {errors.name && <p className={errorBase}>{errors.name}</p>}
                  </div>
                  <div>
                    <label className={labelBase} htmlFor="company">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      autoComplete="organization"
                      className={inputBase}
                      placeholder="Enterprise Inc."
                    />
                  </div>
                </div>

                {/* Phone + Industry in a 2-col grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className={labelBase} htmlFor="phone">
                      Work Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      autoComplete="tel"
                      className={`${inputBase} ${errors.phone ? 'border-red-400 focus:ring-red-200 focus:border-red-400' : ''}`}
                      placeholder="+91 98765 43210"
                    />
                    {errors.phone && <p className={errorBase}>{errors.phone}</p>}
                  </div>
                  <div>
                    <label className={labelBase} htmlFor="industry">
                      Select an Industry
                    </label>
                    <select
                      id="industry"
                      name="industry"
                      value={formData.industry}
                      onChange={handleChange}
                      className={`${inputBase} appearance-none cursor-pointer`}
                    >
                      <option value="">Select an Industry</option>
                      {INDUSTRIES.map((ind) => (
                        <option key={ind} value={ind}>{ind}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className={labelBase} htmlFor="message">
                    Comments / Questions
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className={`${inputBase} resize-none`}
                    placeholder="Tell us about your digital infrastructure needs..."
                  />
                </div>
              </div>
            </div>

            {/* ── Submit + Cancel ── */}
            <div
              className="flex gap-3 pt-2 justify-end"
              style={{
                transition: 'margin-top 0.3s ease',
              }}
            >
              <button
                type="button"
                onClick={onClose}
                className="border border-slate-300 text-slate-600 hover:bg-slate-50 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-gradient-to-r from-brand via-brand-hot to-brand-accent text-white px-8 py-2.5 rounded-xl text-sm font-bold transition-all shadow-md hover:brightness-110 active:scale-95 flex items-center gap-2 min-w-[150px] justify-center"
              >
                {isSubmitting ? (
                  <>
                    <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full" />
                    Sending...
                  </>
                ) : (
                  'Contact Sales'
                )}
              </button>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
