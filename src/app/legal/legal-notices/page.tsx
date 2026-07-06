// src/app/legal/legal-notices/page.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";

const sections = [
  { id: "intellectual-property", title: "Intellectual Property" },
  { id: "trademarks", title: "Trademarks" },
  { id: "copyright-notice", title: "Copyright Notice" },
  { id: "dmca", title: "DMCA" },
  { id: "governing-law", title: "Governing Law" },
];

export default function LegalNoticesPage() {
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
              <span className="text-[#E11D5C]">Legal Notices</span>
            </nav>

            <span className="text-xs font-extrabold uppercase tracking-[0.3em] text-[#E11D5C] font-mono block">
              Legal
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-black text-white tracking-tight leading-[1.05]">
              Legal Notices
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
              Information on intellectual property, trademarks, copyright, and governing law applicable to DHGsoft.
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
                      IP or legal enquiries?{" "}
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

                <div id="intellectual-property" className="scroll-mt-28 space-y-4">
                  <h2 className="text-2xl font-black text-slate-900 tracking-tight border-b border-slate-100 pb-3">
                    1. Intellectual Property
                  </h2>
                  <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                    All content on this website, including but not limited to text, graphics, logos, icons, images, audio clips, digital downloads, data compilations, and software, is the property of DHGsoft Technologies Pvt. Ltd. or its content suppliers, and is protected by applicable intellectual property laws.
                  </p>
                  <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                    The compilation of all content on this website is the exclusive property of DHGsoft Technologies Pvt. Ltd. and protected by applicable laws. Unauthorised use, reproduction, or distribution of any content from this website is strictly prohibited. [Review with legal counsel to specify applicable laws for your jurisdictions.]
                  </p>
                </div>

                <div id="trademarks" className="scroll-mt-28 space-y-4">
                  <h2 className="text-2xl font-black text-slate-900 tracking-tight border-b border-slate-100 pb-3">
                    2. Trademarks
                  </h2>

                  {/* Featured trademark callout */}
                  <div className="bg-slate-950 text-white rounded-2xl px-6 py-5 flex items-center gap-4 border border-white/5">
                    <div className="h-10 w-10 bg-[#B4123F]/20 border border-[#B4123F]/30 rounded-xl flex items-center justify-center shrink-0">
                      <span className="text-[#E11D5C] font-black text-sm">®</span>
                    </div>
                    <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                      <strong className="text-white">DHGsoft®</strong> is a registered trademark of{" "}
                      <strong className="text-white">DHGsoft Technologies Pvt. Ltd.</strong>
                    </p>
                  </div>

                  <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                    All trademarks, service marks, trade names, and logos displayed on this website are the registered or unregistered trademarks of DHGsoft Technologies Pvt. Ltd. or their respective owners. Nothing on this website should be construed as granting, by implication, estoppel, or otherwise, any license or right to use any trademark without the express written permission of DHGsoft or the applicable third-party trademark owner.
                  </p>
                  <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                    [List all additional registered and unregistered marks specific to your product portfolio. Confirm trademark registration status with your IP counsel.]
                  </p>
                </div>

                <div id="copyright-notice" className="scroll-mt-28 space-y-4">
                  <h2 className="text-2xl font-black text-slate-900 tracking-tight border-b border-slate-100 pb-3">
                    3. Copyright Notice
                  </h2>
                  <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5">
                    <p className="text-slate-700 font-mono text-sm">
                      © {new Date().getFullYear()} DHGsoft Technologies Pvt. Ltd. All rights reserved.
                    </p>
                  </div>
                  <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                    No part of this website may be reproduced, distributed, transmitted, displayed, published, or broadcast without prior written consent from DHGsoft Technologies Pvt. Ltd., except as expressly permitted by copyright law. [Specify any permissive licences granted for documentation or open-source components, as applicable.]
                  </p>
                  <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                    Requests for permission to reproduce any content should be directed to the legal contact below. [Add the verified legal contact email address before publishing.]
                  </p>
                </div>

                <div id="dmca" className="scroll-mt-28 space-y-4">
                  <h2 className="text-2xl font-black text-slate-900 tracking-tight border-b border-slate-100 pb-3">
                    4. DMCA — Digital Millennium Copyright Act
                  </h2>
                  <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                    DHGsoft respects the intellectual property rights of others. If you believe that any content on this website infringes your copyright, please submit a written notification of claimed infringement to our designated agent, including:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-slate-600 text-sm pl-2">
                    <li>A physical or electronic signature of the copyright owner or authorised agent.</li>
                    <li>Identification of the copyrighted work claimed to be infringed.</li>
                    <li>Identification of the material that is claimed to be infringing and its location on the website.</li>
                    <li>Your contact information (address, telephone number, and email).</li>
                    <li>A good faith belief statement that the use is not authorised by the copyright owner.</li>
                    <li>A statement that the information in the notification is accurate, under penalty of perjury.</li>
                  </ul>
                  <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                    [Insert the name, address, and contact email of your DMCA designated agent. This is a legal requirement for DMCA safe harbour protection — consult your legal counsel.]
                  </p>
                </div>

                <div id="governing-law" className="scroll-mt-28 space-y-4">
                  <h2 className="text-2xl font-black text-slate-900 tracking-tight border-b border-slate-100 pb-3">
                    5. Governing Law
                  </h2>
                  <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                    These Legal Notices and any disputes arising out of or related to this website and its content shall be governed by and construed in accordance with the laws of [insert applicable jurisdiction — e.g., the laws of India], without regard to its conflict of law provisions.
                  </p>
                  <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                    Any legal action or proceeding arising under these Legal Notices shall be brought exclusively in the courts of [insert city and jurisdiction], and you irrevocably consent to the personal jurisdiction and venue therein. [Confirm choice of law and venue with your legal counsel, particularly if you operate across multiple jurisdictions.]
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
