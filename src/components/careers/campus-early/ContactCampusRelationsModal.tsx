'use client';

import { useState, useEffect } from 'react';
import { X, Send, Mail } from 'lucide-react';

interface Props {
  open: boolean;
  onClose: () => void;
}

export function ContactCampusRelationsModal({ open, onClose }: Props) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    role: '',           // student / graduate / faculty / university-admin
    university: '',
    program: '',        // internship / GET / campus-recruitment / research / other
    message: '',
    consent: false,
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (open) {
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  if (!open) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    // TODO: wire to your backend / email service
    await new Promise(r => setTimeout(r, 1000));
    setSubmitting(false);
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    setFormData({
      fullName: '', email: '', phone: '', role: '', 
      university: '', program: '', message: '', consent: false,
    });
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-ink/70 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div 
        className="card relative bg-white rounded-3xl shadow-2xl w-full max-w-[560px] max-h-[90vh] overflow-y-auto"
        onClick={e => e.stopPropagation()}
      >
        
        {/* Close button */}
        <button 
          onClick={handleClose}
          aria-label="Close"
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-mist hover:bg-line flex items-center justify-center transition-colors z-10"
        >
          <X className="w-4 h-4 text-txt-strong" />
        </button>
        
        {submitted ? (
          /* Success state */
          <div className="p-8 md:p-10 text-center">
            <div className="w-14 h-14 rounded-full bg-brand/10 flex items-center justify-center mx-auto">
              <Send className="w-6 h-6 text-brand" />
            </div>
            <h3 className="text-txt-strong mt-6 font-headline">Thank you!</h3>
            <p className="text-body-md text-txt-muted mt-3">
              Your inquiry has been received. Our Campus Relations team will reach out to you within 2 business days.
            </p>
            <button
              onClick={handleClose}
              className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand text-white font-semibold hover:bg-brand-deep transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        ) : (
          /* Form state */
          <>
            {/* Header */}
            <div className="p-6 md:p-8 pb-4 border-b border-line">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-brand/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-brand" />
                </div>
                <div className="text-left">
                  <h3 id="modal-title" className="text-txt-strong font-headline">Contact Campus Relations</h3>
                  <p className="text-body-sm text-txt-muted mt-1">
                    Tell us about yourself and how we can help.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Form fields */}
            <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-4 text-left">
              
              <div>
                <label htmlFor="fullName" className="text-label-bold text-txt-strong">
                  Full Name <span className="text-brand">*</span>
                </label>
                <input
                  id="fullName"
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={e => setFormData({...formData, fullName: e.target.value})}
                  className="mt-2 w-full px-4 py-3 border border-line rounded-xl focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition-colors text-body-sm"
                  placeholder="Your name"
                />
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="text-label-bold text-txt-strong">
                    Email <span className="text-brand">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                    className="mt-2 w-full px-4 py-3 border border-line rounded-xl focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition-colors text-body-sm"
                    placeholder="you@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="text-label-bold text-txt-strong">
                    Phone
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={e => setFormData({...formData, phone: e.target.value})}
                    className="mt-2 w-full px-4 py-3 border border-line rounded-xl focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition-colors text-body-sm"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="role" className="text-label-bold text-txt-strong">
                  I am a <span className="text-brand">*</span>
                </label>
                <select
                  id="role"
                  required
                  value={formData.role}
                  onChange={e => setFormData({...formData, role: e.target.value})}
                  className="mt-2 w-full px-4 py-3 border border-line rounded-xl focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition-colors text-body-sm bg-white"
                >
                  <option value="">Select your role</option>
                  <option value="student">Student</option>
                  <option value="graduate">Recent Graduate</option>
                  <option value="faculty">Faculty Member</option>
                  <option value="university-admin">University Administrator</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="university" className="text-label-bold text-txt-strong">
                  University / Institution
                </label>
                <input
                  id="university"
                  type="text"
                  value={formData.university}
                  onChange={e => setFormData({...formData, university: e.target.value})}
                  className="mt-2 w-full px-4 py-3 border border-line rounded-xl focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition-colors text-body-sm"
                  placeholder="Your university or institution name"
                />
              </div>
              
              <div>
                <label htmlFor="program" className="text-label-bold text-txt-strong">
                  Interested in <span className="text-brand">*</span>
                </label>
                <select
                  id="program"
                  required
                  value={formData.program}
                  onChange={e => setFormData({...formData, program: e.target.value})}
                  className="mt-2 w-full px-4 py-3 border border-line rounded-xl focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition-colors text-body-sm bg-white"
                >
                  <option value="">Select a program</option>
                  <option value="internship">Internship Program</option>
                  <option value="get">Graduate Engineer Trainee (GET)</option>
                  <option value="campus-recruitment">Campus Recruitment</option>
                  <option value="research">Research Collaboration</option>
                  <option value="workshops">Technical Workshops / Guest Lectures</option>
                  <option value="partnership">University Partnership</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="text-label-bold text-txt-strong">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={e => setFormData({...formData, message: e.target.value})}
                  className="mt-2 w-full px-4 py-3 border border-line rounded-xl focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition-colors text-body-sm resize-none"
                  placeholder="Tell us more about how we can help..."
                />
              </div>
              
              {/* Consent */}
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  required
                  checked={formData.consent}
                  onChange={e => setFormData({...formData, consent: e.target.checked})}
                  className="mt-1 w-4 h-4 rounded border-line text-brand focus:ring-brand/30"
                />
                <span className="text-body-sm text-txt-muted">
                  I consent to DHGsoft processing my data for the purpose of responding to my inquiry, in line with the <a href="/legal/privacy-policy" className="text-brand hover:underline">Privacy Policy</a>.
                </span>
              </label>
              
              {/* Submit */}
              <button
                type="submit"
                disabled={submitting}
                className="w-full inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-brand text-white font-semibold hover:bg-brand-deep transition-colors disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
              >
                {submitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
              
            </form>
          </>
        )}
      </div>
    </div>
  );
}
