'use client';

import React, { useState, useEffect } from 'react';
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
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function ContactModal({ isOpen, onClose, prefill = '' }: ContactModalProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});

  useEffect(() => {
    if (isOpen) {
      setFormData(prev => ({
        ...prev,
        message: prefill || ''
      }));
    }
  }, [isOpen, prefill]);

  const validate = () => {
    const tempErrors: FormErrors = {};
    if (!formData.name.trim()) tempErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      tempErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Email address is invalid';
    }
    if (!formData.message.trim()) tempErrors.message = 'Message is required';
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Failed to submit sales inquiry');
      }

      toast.success('Your inquiry has been sent successfully!');
      setFormData({ name: '', email: '', company: '', message: '' });
      onClose();
    } catch (err) {
      console.error(err);
      toast.error('Error sending inquiry. Please ensure the backend is running.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => { if (!open) onClose(); }}>
      <DialogContent className="card-level-3 p-8 max-w-lg w-full border border-[#e7e8e7] sm:rounded-2xl">
        <DialogHeader>
          <DialogTitle className="font-headline text-headline-lg text-primary">
            Contact Sales
          </DialogTitle>
          <DialogDescription className="text-body-sm text-on-surface-variant">
            Submit your details below and a DHG Soft intelligence architect will reach out to build your digital transformation roadmap.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-label-bold text-on-surface font-semibold mb-1" htmlFor="name">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full input-field ${
                errors.name ? 'border-error' : ''
              }`}
              placeholder="John Doe"
            />
            {errors.name && <p className="text-error text-xs mt-1">{errors.name}</p>}
          </div>

          <div>
            <label className="block text-label-bold text-on-surface font-semibold mb-1" htmlFor="email">
              Work Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full input-field ${
                errors.email ? 'border-error' : ''
              }`}
              placeholder="john@company.com"
            />
            {errors.email && <p className="text-error text-xs mt-1">{errors.email}</p>}
          </div>

          <div>
            <label className="block text-label-bold text-on-surface font-semibold mb-1" htmlFor="company">
              Company Name
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full input-field"
              placeholder="Enterprise Inc."
            />
          </div>

          <div>
            <label className="block text-label-bold text-on-surface font-semibold mb-1" htmlFor="message">
              Message / Requirements *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className={`w-full input-field resize-none ${
                errors.message ? 'border-error' : ''
              }`}
              placeholder="Tell us about your digital infrastructure needs..."
            ></textarea>
            {errors.message && <p className="text-error text-xs mt-1">{errors.message}</p>}
          </div>

          <div className="flex gap-4 pt-4 justify-end">
            <button
              type="button"
              onClick={onClose}
              className="border border-primary text-primary hover:bg-primary/5 px-6 py-2.5 rounded-lg font-label-bold font-bold transition-all"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="brand-gradient text-white px-8 py-2.5 rounded-lg font-label-bold font-bold transition-all shadow-md hover:brightness-110 active:scale-95 flex items-center justify-center gap-2 min-w-[140px]"
            >
              {isSubmitting ? (
                <>
                  <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></span>
                  Sending...
                </>
              ) : (
                'Submit Request'
              )}
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
