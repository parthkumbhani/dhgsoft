// src/app/legal/privacy-policy/page.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";

const sections = [
  { id: "information-we-collect", title: "Information We Collect" },
  { id: "how-we-use", title: "How We Use Your Information" },
  { id: "data-sharing", title: "Data Sharing" },
  { id: "data-retention", title: "Data Retention" },
  { id: "your-rights", title: "Your Rights (GDPR / CCPA)" },
  { id: "contact-us", title: "Contact Us" },
];

const gdprRights = [
  { right: "Right of Access", desc: "You have the right to request a copy of the personal data we hold about you." },
  { right: "Right to Rectification", desc: "You have the right to request correction of inaccurate or incomplete personal data." },
  { right: "Right to Erasure", desc: "You may request deletion of your personal data under certain circumstances ('right to be forgotten')." },
  { right: "Right to Restrict Processing", desc: "You may ask us to suspend processing of your data in certain scenarios." },
  { right: "Right to Data Portability", desc: "You have the right to receive your data in a structured, machine-readable format." },
  { right: "Right to Object", desc: "You may object to processing based on legitimate interests or for direct marketing purposes." },
];

export default function PrivacyPolicyPage() {
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
              <span className="text-[#E11D5C]">Privacy Policy</span>
            </nav>

            <span className="text-xs font-extrabold uppercase tracking-[0.3em] text-[#E11D5C] font-mono block">
              Legal
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-black text-white tracking-tight leading-[1.05]">
              Privacy Policy
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
              How DHGsoft collects, uses, and protects your personal data in compliance with GDPR and CCPA.
            </p>
            <div className="flex flex-wrap gap-3">
              <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2">
                <span className="w-2 h-2 rounded-full bg-[#E11D5C] inline-block" />
                <span className="text-xs text-slate-300 font-mono">Last Updated: July 2025</span>
              </div>
              <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2">
                <span className="text-xs text-slate-300 font-mono">GDPR · CCPA Aligned</span>
              </div>
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
                      Privacy enquiries?{" "}
                      <button
                        onClick={() => setIsContactOpen(true)}
                        className="text-[#B4123F] hover:underline font-semibold"
                      >
                        Contact us
                      </button>
                    </p>
                  </div>
                </div>
              </aside>

              {/* ── Content ────────────────────── */}
              <article className="flex-1 space-y-14 min-w-0">

                {/* Intro paragraph */}
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base border-l-4 border-[#B4123F]/30 pl-5 py-2 bg-slate-50 rounded-r-xl">
                  DHGsoft Technologies Pvt. Ltd. ("DHGsoft", "we", "us", or "our") is committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website. [Confirm the legal entity name and jurisdiction with your legal counsel before publishing.]
                </p>

                <div id="information-we-collect" className="scroll-mt-28 space-y-4">
                  <h2 className="text-2xl font-black text-slate-900 tracking-tight border-b border-slate-100 pb-3">
                    1. Information We Collect
                  </h2>
                  <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                    We may collect information about you in a variety of ways. The information we may collect includes:
                  </p>
                  <div className="space-y-4">
                    <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-2">
                      <h3 className="font-bold text-slate-800 text-sm">Personal Data</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">Personally identifiable information, such as your name, email address, telephone number, and job title, that you voluntarily provide to us when you contact us, subscribe to our communications, or request information about our services. [List all specific data points you actually collect.]</p>
                    </div>
                    <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-2">
                      <h3 className="font-bold text-slate-800 text-sm">Derivative Data</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">Information our servers automatically collect when you access the website, such as your IP address, browser type, operating system, referring URLs, access times, and pages viewed. [Confirm what is actually collected by your hosting/analytics infrastructure.]</p>
                    </div>
                    <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-2">
                      <h3 className="font-bold text-slate-800 text-sm">Cookie Data</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">Information collected through cookies and similar tracking technologies, as described in our Cookie Policy. [Link to your Cookie Policy — see <Link href="/legal/cookie-policy" className="text-[#B4123F] hover:underline">Cookie Policy</Link>.]</p>
                    </div>
                  </div>
                </div>

                <div id="how-we-use" className="scroll-mt-28 space-y-4">
                  <h2 className="text-2xl font-black text-slate-900 tracking-tight border-b border-slate-100 pb-3">
                    2. How We Use Your Information
                  </h2>
                  <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                    We use the information we collect or receive for the following purposes:
                  </p>
                  <ul className="space-y-2 text-slate-600 text-sm">
                    {[
                      "To respond to your enquiries and provide requested services.",
                      "To send administrative information, updates, and promotional communications (where permitted).",
                      "To analyse usage trends and improve our website and services.",
                      "To comply with legal obligations and enforce our terms.",
                      "To prevent fraudulent transactions and monitor against theft.",
                      "[Add any other purposes specific to your business operations here.]",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#B4123F] shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                    [Identify the lawful basis for processing under GDPR (e.g. consent, legitimate interests, contract performance) for each purpose listed above, with guidance from your Data Protection Officer or legal counsel.]
                  </p>
                </div>

                <div id="data-sharing" className="scroll-mt-28 space-y-4">
                  <h2 className="text-2xl font-black text-slate-900 tracking-tight border-b border-slate-100 pb-3">
                    3. Data Sharing
                  </h2>
                  <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                    We do not sell, trade, or rent users' personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information regarding visitors and users with our business partners, trusted affiliates, and advertisers.
                  </p>
                  <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                    We may share your information with third-party service providers who assist us in operating our website, conducting our business, or servicing you, provided that those parties agree to keep this information confidential. [List specific third-party processors, e.g. CRM, analytics, email platforms, and ensure Data Processing Agreements are in place.]
                  </p>
                  <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                    We may disclose your information where required to do so by law or in the good-faith belief that such action is necessary to comply with a legal obligation. [For international data transfers, document the transfer mechanisms (SCCs, adequacy decisions) used, as required by GDPR Chapter V.]
                  </p>
                </div>

                <div id="data-retention" className="scroll-mt-28 space-y-4">
                  <h2 className="text-2xl font-black text-slate-900 tracking-tight border-b border-slate-100 pb-3">
                    4. Data Retention
                  </h2>
                  <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                    We retain personal data only for as long as is necessary to fulfil the purposes for which it was collected, including for the purposes of satisfying any legal, regulatory, accounting, or reporting requirements.
                  </p>
                  <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                    To determine the appropriate retention period for personal data, we consider the amount, nature, and sensitivity of the personal data, the potential risk of harm from unauthorised use or disclosure, and applicable legal requirements. [Insert your specific retention schedules for each data category and the criteria used to determine them.]
                  </p>
                </div>

                <div id="your-rights" className="scroll-mt-28 space-y-4">
                  <h2 className="text-2xl font-black text-slate-900 tracking-tight border-b border-slate-100 pb-3">
                    5. Your Rights — GDPR / CCPA
                  </h2>
                  <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                    Depending on your location, you may have certain rights regarding your personal data. Under the GDPR (EU/UK) and CCPA (California), these include:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {gdprRights.map((r) => (
                      <div key={r.right} className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-2">
                        <h3 className="font-bold text-slate-800 text-sm flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-[#B4123F] inline-block shrink-0" />
                          {r.right}
                        </h3>
                        <p className="text-slate-500 text-xs leading-relaxed">{r.desc}</p>
                      </div>
                    ))}
                  </div>
                  <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                    <strong>CCPA — California Residents:</strong> If you are a California resident, you have the right to know what personal information we collect, disclose, and sell; the right to delete personal information; and the right to opt out of the sale of personal information. DHGsoft does not sell personal information. [Confirm this statement is accurate and add any required CCPA-specific disclosures.]
                  </p>
                  <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                    To exercise any of these rights, please contact us using the details in Section 6 below. We will respond within the timeframes required by applicable law. [Insert your Data Subject Access Request (DSAR) process and response timelines.]
                  </p>
                </div>

                <div id="contact-us" className="scroll-mt-28 space-y-4">
                  <h2 className="text-2xl font-black text-slate-900 tracking-tight border-b border-slate-100 pb-3">
                    6. Contact Us
                  </h2>
                  <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                    If you have questions about this Privacy Policy or wish to exercise your data rights, please contact our Data Protection Officer (DPO) or privacy team at:
                  </p>
                  <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-2 text-sm text-slate-600">
                    <p><span className="font-semibold text-slate-800">DHGsoft Technologies Pvt. Ltd.</span></p>
                    <p>[Your registered address — replace with actual address]</p>
                    <p>Email: <span className="text-[#B4123F] font-medium">[privacy@dhgsoft.com — replace with actual email]</span></p>
                    <p>DPO: <span className="text-slate-500">[Name of DPO if applicable — required under GDPR for certain organisations]</span></p>
                  </div>
                  <p className="text-slate-500 text-xs">
                    [Update all contact details above with verified information before publishing. If you process EU personal data, you may be required to appoint an EU Representative under GDPR Article 27.]
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
