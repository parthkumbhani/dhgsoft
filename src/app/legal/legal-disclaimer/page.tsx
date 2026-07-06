// src/app/legal/legal-disclaimer/page.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";

const sections = [
  { id: "general-disclaimer", title: "General Disclaimer" },
  { id: "no-professional-advice", title: "No Professional Advice" },
  { id: "limitation-of-liability", title: "Limitation of Liability" },
  { id: "external-links", title: "External Links" },
  { id: "changes-to-disclaimer", title: "Changes to Disclaimer" },
];

export default function LegalDisclaimerPage() {
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
              <span className="text-[#E11D5C]">Legal Disclaimer</span>
            </nav>

            <span className="text-xs font-extrabold uppercase tracking-[0.3em] text-[#E11D5C] font-mono block">
              Legal
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-black text-white tracking-tight leading-[1.05]">
              Legal Disclaimer
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
              Important information about the limitations of the content published on this website.
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
                      Questions about this disclaimer?{" "}
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

                <div id="general-disclaimer" className="scroll-mt-28 space-y-4">
                  <h2 className="text-2xl font-black text-slate-900 tracking-tight border-b border-slate-100 pb-3">
                    1. General Disclaimer
                  </h2>
                  <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                    The information provided on this website is for general informational purposes only. DHGsoft Technologies Pvt. Ltd. makes no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information, products, services, or related graphics contained on the website for any purpose.
                  </p>
                  <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                    Any reliance you place on such information is therefore strictly at your own risk. [Replace this paragraph with your jurisdiction-specific disclaimer language as advised by your legal counsel.]
                  </p>
                </div>

                <div id="no-professional-advice" className="scroll-mt-28 space-y-4">
                  <h2 className="text-2xl font-black text-slate-900 tracking-tight border-b border-slate-100 pb-3">
                    2. No Professional Advice
                  </h2>
                  <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                    The content on this website does not constitute professional advice of any kind, including but not limited to legal, financial, technical, or engineering advice. Always seek the advice of qualified professionals with any questions you may have regarding a specific situation or matter.
                  </p>
                  <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                    DHGsoft expressly disclaims all liability for any action taken or not taken based on the information published on this website. [Consult a legal professional to tailor this section to your specific business context.]
                  </p>
                </div>

                <div id="limitation-of-liability" className="scroll-mt-28 space-y-4">
                  <h2 className="text-2xl font-black text-slate-900 tracking-tight border-b border-slate-100 pb-3">
                    3. Limitation of Liability
                  </h2>
                  <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                    In no event shall DHGsoft Technologies Pvt. Ltd., its directors, employees, partners, agents, suppliers, or affiliates be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of (or inability to access or use) the website.
                  </p>
                  <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                    [Insert maximum liability cap language as advised by your legal professional, appropriate to your jurisdiction and applicable law.]
                  </p>
                </div>

                <div id="external-links" className="scroll-mt-28 space-y-4">
                  <h2 className="text-2xl font-black text-slate-900 tracking-tight border-b border-slate-100 pb-3">
                    4. External Links
                  </h2>
                  <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                    This website may contain links to third-party websites or resources. These links are provided solely for your convenience and information. DHGsoft has no control over the content of those sites or resources, and accepts no responsibility for them or for any loss or damage that may arise from your use of them.
                  </p>
                  <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                    Inclusion of any linked website does not imply endorsement, approval, or control by DHGsoft of that site. [Verify that this language aligns with your link disclosure obligations in your operating jurisdictions.]
                  </p>
                </div>

                <div id="changes-to-disclaimer" className="scroll-mt-28 space-y-4">
                  <h2 className="text-2xl font-black text-slate-900 tracking-tight border-b border-slate-100 pb-3">
                    5. Changes to Disclaimer
                  </h2>
                  <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                    DHGsoft reserves the right to modify this disclaimer at any time. Changes will be effective immediately upon posting to the website. Your continued use of the website after any changes constitutes your acceptance of the updated disclaimer. We encourage you to periodically review this page for the latest information.
                  </p>
                  <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                    [Add your preferred notification method for material changes, e.g., email notification or banner, as advised by your legal team.]
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
