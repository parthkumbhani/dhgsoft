// src/app/legal/terms-and-conditions/page.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";

const sections = [
  { id: "acceptance-of-terms", title: "Acceptance of Terms" },
  { id: "use-of-website", title: "Use of Website" },
  { id: "intellectual-property", title: "Intellectual Property" },
  { id: "disclaimer-of-warranties", title: "Disclaimer of Warranties" },
  { id: "limitation-of-liability", title: "Limitation of Liability" },
  { id: "governing-law", title: "Governing Law" },
  { id: "changes-to-terms", title: "Changes to Terms" },
];

export default function TermsAndConditionsPage() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-800 antialiased font-sans selection:bg-[#B4123F] selection:text-white">
      <Header onContactClick={() => setIsContactOpen(true)} />

      <main className="relative pt-20">

        {/* ── Hero ─────────────────────────────────────────────── */}
        <section className="relative min-h-[320px] flex items-center bg-slate-950 text-white py-16 overflow-hidden">
          <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />
          <div className="absolute inset-0 bg-mesh-glow-dark pointer-events-none" />
          <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-[120px] relative z-10 space-y-5">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-xs text-slate-400 font-mono uppercase tracking-widest">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="opacity-40">/</span>
              <span className="text-slate-300">Legal</span>
              <span className="opacity-40">/</span>
              <span className="text-[#E11D5C]">Terms and Conditions</span>
            </nav>

            <span className="text-xs font-extrabold uppercase tracking-[0.3em] text-[#E11D5C] font-mono block">
              Legal
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-black text-white tracking-tight leading-[1.05]">
              Terms and Conditions
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
              Please read these terms carefully before accessing or using any part of the DHGsoft website.
            </p>
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2">
              <span className="w-2 h-2 rounded-full bg-[#E11D5C] inline-block" />
              <span className="text-xs text-slate-300 font-mono">Last Updated: July 2025</span>
            </div>
          </div>
        </section>

        {/* ── Body: TOC + Content ──────────────────────────────── */}
        <section className="bg-white py-16 md:py-24">
          <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-[120px]">

            {/* Placeholder Notice */}
            <div className="mb-10 flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-xl p-4">
              <span className="text-amber-500 text-lg mt-0.5">⚠</span>
              <p className="text-amber-800 text-sm leading-relaxed">
                <strong>Note:</strong> Replace this placeholder text with your actual legal content reviewed by a qualified legal professional before publishing.
              </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-12">

              {/* ── Sticky TOC Sidebar ─────────── */}
              <aside className="lg:w-64 shrink-0">
                <div className="lg:sticky lg:top-28 space-y-2">
                  <p className="text-xs font-extrabold uppercase tracking-[0.25em] text-[#B4123F] font-mono mb-4">
                    On This Page
                  </p>
                  <nav className="space-y-1">
                    {sections.map((s) => (
                      <a
                        key={s.id}
                        href={`#${s.id}`}
                        className="block text-sm text-slate-500 hover:text-[#B4123F] hover:pl-3 border-l-2 border-transparent hover:border-[#B4123F] pl-3 py-1.5 transition-all duration-200 font-medium"
                      >
                        {s.title}
                      </a>
                    ))}
                  </nav>
                  <div className="pt-6 mt-6 border-t border-slate-100">
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Questions about our terms?{" "}
                      <button
                        onClick={() => setIsContactOpen(true)}
                        className="text-[#B4123F] hover:underline font-semibold"
                      >
                        Contact us
                      </button>
                    </p>
                  </div>

                  {/* Related legal links */}
                  <div className="pt-4 space-y-1">
                    <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-slate-400 font-mono mb-3">
                      Related Policies
                    </p>
                    {[
                      { label: "Privacy Policy", href: "/legal/privacy-policy" },
                      { label: "Cookie Policy", href: "/legal/cookie-policy" },
                      { label: "Legal Notices", href: "/legal/legal-notices" },
                      { label: "Legal Disclaimer", href: "/legal/legal-disclaimer" },
                    ].map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="block text-xs text-slate-400 hover:text-[#B4123F] py-1 transition-colors"
                      >
                        → {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </aside>

              {/* ── Content ────────────────────── */}
              <article className="flex-1 space-y-14 min-w-0">

                {/* Intro */}
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base border-l-4 border-[#B4123F]/30 pl-5 py-2 bg-slate-50 rounded-r-xl">
                  These Terms and Conditions ("Terms") govern your access to and use of the DHGsoft Technologies Pvt. Ltd. website located at <span className="text-[#B4123F] font-medium">[www.dhgsoft.com — replace with actual URL]</span>. By accessing this website, you agree to be bound by these Terms. If you do not agree to all the Terms, please do not use this website.
                </p>

                <div id="acceptance-of-terms" className="scroll-mt-28 space-y-4">
                  <h2 className="text-2xl font-black text-slate-900 tracking-tight border-b border-slate-100 pb-3">
                    1. Acceptance of Terms
                  </h2>
                  <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                    By accessing and using this website, you accept and agree to be bound by and comply with these Terms and our Privacy Policy. If you do not agree to these Terms, you are not authorised to access or use this website.
                  </p>
                  <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                    These Terms apply to all visitors, users, and others who access or use the website. [Specify any age restrictions, e.g. "You must be at least 18 years of age to use this website," as may be required by applicable law.]
                  </p>
                </div>

                <div id="use-of-website" className="scroll-mt-28 space-y-4">
                  <h2 className="text-2xl font-black text-slate-900 tracking-tight border-b border-slate-100 pb-3">
                    2. Use of Website
                  </h2>
                  <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                    You agree to use this website only for lawful purposes and in a manner that does not infringe the rights of, or restrict or inhibit the use and enjoyment of, this website by any third party. This includes conduct that is unlawful, or which may harass or cause distress or inconvenience to any person.
                  </p>
                  <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                    Without limitation, you agree not to:
                  </p>
                  <ul className="space-y-2 text-slate-600 text-sm">
                    {[
                      "Use the website in any way that violates applicable local, national, or international laws or regulations.",
                      "Transmit any unsolicited or unauthorised advertising or promotional material.",
                      "Attempt to gain unauthorised access to any part of the website or its related systems or networks.",
                      "Engage in any conduct that restricts or inhibits anyone's use or enjoyment of the website.",
                      "Use any automated means to access the website without our express written permission.",
                      "[Add specific prohibited uses relevant to your services and industry.]",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#B4123F] shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div id="intellectual-property" className="scroll-mt-28 space-y-4">
                  <h2 className="text-2xl font-black text-slate-900 tracking-tight border-b border-slate-100 pb-3">
                    3. Intellectual Property
                  </h2>
                  <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                    The website and its original content, features, and functionality are and will remain the exclusive property of DHGsoft Technologies Pvt. Ltd. and its licensors. The website is protected by copyright, trademark, and other applicable intellectual property laws.
                  </p>
                  <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                    Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of DHGsoft Technologies Pvt. Ltd. For full details on trademarks and copyright, please see our <Link href="/legal/legal-notices" className="text-[#B4123F] hover:underline font-medium">Legal Notices</Link>.
                  </p>
                </div>

                <div id="disclaimer-of-warranties" className="scroll-mt-28 space-y-4">
                  <h2 className="text-2xl font-black text-slate-900 tracking-tight border-b border-slate-100 pb-3">
                    4. Disclaimer of Warranties
                  </h2>
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
                    <p className="text-slate-700 text-sm leading-relaxed font-medium uppercase tracking-wide text-xs mb-2 text-slate-500">Important</p>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      This website is provided on an "AS IS" and "AS AVAILABLE" basis without any representations or warranties, express or implied. DHGsoft Technologies Pvt. Ltd. makes no representations or warranties in relation to this website or the information and materials provided on this website.
                    </p>
                  </div>
                  <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                    DHGsoft does not warrant that the website will be uninterrupted, error-free, free of viruses or other harmful components, or that defects will be corrected. [Review the scope of this disclaimer with your legal counsel to ensure it is enforceable under your governing law and does not inadvertently waive statutory consumer rights.]
                  </p>
                </div>

                <div id="limitation-of-liability" className="scroll-mt-28 space-y-4">
                  <h2 className="text-2xl font-black text-slate-900 tracking-tight border-b border-slate-100 pb-3">
                    5. Limitation of Liability
                  </h2>
                  <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                    To the fullest extent permitted by applicable law, DHGsoft Technologies Pvt. Ltd. shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, use, goodwill, or other intangible losses, arising out of or in connection with your use of, or inability to use, the website.
                  </p>
                  <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                    In no event shall DHGsoft's total cumulative liability to you for all damages, losses, and causes of action exceed [insert monetary cap — e.g., the amount paid by you, if any, for accessing the website in the twelve months preceding the claim]. [Work with legal counsel to determine an appropriate and enforceable liability cap for your business.]
                  </p>
                </div>

                <div id="governing-law" className="scroll-mt-28 space-y-4">
                  <h2 className="text-2xl font-black text-slate-900 tracking-tight border-b border-slate-100 pb-3">
                    6. Governing Law
                  </h2>
                  <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                    These Terms shall be governed by and construed in accordance with the laws of [insert applicable jurisdiction — e.g., the laws of India / England and Wales], without regard to its conflict of law provisions.
                  </p>
                  <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                    Any disputes arising under or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts of [insert city and jurisdiction]. [Confirm the choice of law and jurisdiction clause with your legal counsel, particularly if you operate internationally or have customers in multiple countries.]
                  </p>
                </div>

                <div id="changes-to-terms" className="scroll-mt-28 space-y-4">
                  <h2 className="text-2xl font-black text-slate-900 tracking-tight border-b border-slate-100 pb-3">
                    7. Changes to Terms
                  </h2>
                  <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                    We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will provide notice of material changes by updating the "Last Updated" date at the top of this page. Your continued use of the website after any changes constitutes your acceptance of the revised Terms.
                  </p>
                  <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                    If you do not agree to the revised Terms, you must stop using the website. [Consider adding additional notification methods for material changes (e.g., email notice, banner), and confirm whether advance notice is required under your applicable law.]
                  </p>
                  <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                    For questions or concerns about these Terms, please{" "}
                    <button
                      onClick={() => setIsContactOpen(true)}
                      className="text-[#B4123F] hover:underline font-semibold"
                    >
                      contact us
                    </button>
                    .
                  </p>
                </div>

                {/* Footer notice */}
                <div className="pt-8 border-t border-slate-100">
                  <p className="text-xs text-[#B4123F] font-semibold leading-relaxed">
                    ⚖ This is placeholder legal content. Consult a qualified legal professional before publishing.
                  </p>
                </div>

              </article>
            </div>
          </div>
        </section>

      </main>

      <Footer />
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} showToast={(msg, type) => {}} />
    </div>
  );
}
