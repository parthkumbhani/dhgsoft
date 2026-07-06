// src/app/legal/cookie-policy/page.tsx
"use client";
import { Section } from "@/components/ui/Section";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";

const sections = [
  { id: "what-are-cookies", title: "What Are Cookies" },
  { id: "how-we-use-cookies", title: "How We Use Cookies" },
  { id: "types-of-cookies", title: "Types of Cookies" },
  { id: "managing-cookies", title: "Managing Cookies" },
  { id: "contact-us", title: "Contact Us" },
];

const cookieTypes = [
  {
    type: "Essential Cookies",
    color: "bg-slate-100 border-slate-200",
    badge: "bg-slate-200 text-slate-700",
    description:
      "These cookies are strictly necessary for the website to function and cannot be disabled. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in, or filling in forms.",
    examples: "Session management, security tokens, load balancing.",
  },
  {
    type: "Analytics Cookies",
    color: "bg-blue-50 border-blue-100",
    badge: "bg-blue-100 text-blue-700",
    description:
      "These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us understand which pages are the most and least popular and see how visitors move around the site. All information these cookies collect is aggregated and anonymous.",
    examples: "Google Analytics, page-view counts, session duration.",
  },
  {
    type: "Marketing Cookies",
    color: "bg-rose-50 border-rose-100",
    badge: "bg-rose-100 text-rose-700",
    description:
      "These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant adverts on other sites. They do not store directly personal information, but are based on uniquely identifying your browser and internet device.",
    examples: "LinkedIn Insight Tag, retargeting pixels, ad frequency capping.",
  },
];

export default function CookiePolicyPage() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-800 antialiased font-sans selection:bg-[#B4123F] selection:text-white">
      <Header onContactClick={() => setIsContactOpen(true)} />

      <main className="relative pt-20">

        {/* ── Hero ─────────────────────────────────────────────── */}
        <Section variant="ink" containerSize="wide" className="relative min-h-[320px] flex items-center text-white overflow-hidden">
          <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />
          <div className="absolute inset-0 bg-mesh-glow-dark pointer-events-none" />
          <div className="w-full relative z-10 space-y-5">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-xs text-slate-400 font-mono uppercase tracking-widest">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="opacity-40">/</span>
              <span className="text-slate-300">Legal</span>
              <span className="opacity-40">/</span>
              <span className="text-[#E11D5C]">Cookie Policy</span>
            </nav>

            <span className="text-xs font-extrabold uppercase tracking-[0.3em] text-[#E11D5C] font-mono block">
              Legal
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-black text-white tracking-tight leading-[1.05]">
              Cookie Policy
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
              Understand how DHGsoft uses cookies and similar tracking technologies on our website.
            </p>
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2">
              <span className="w-2 h-2 rounded-full bg-[#E11D5C] inline-block" />
              <span className="text-xs text-slate-300 font-mono">Last Updated: July 2025</span>
            </div>
          </div>
        </Section>

        {/* ── Body: TOC + Content ──────────────────────────────── */}
        <Section variant="white" containerSize="wide" className="bg-white ">
          <div className="w-full relative z-10">

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
                      Questions about cookies?{" "}
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

                <div id="what-are-cookies" className="scroll-mt-28 space-y-4">
                  <h2 className="text-2xl font-black text-slate-900 tracking-tight border-b border-slate-100 pb-3">
                    1. What Are Cookies
                  </h2>
                  <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                    Cookies are small text files that are placed on your computer or mobile device by a website when you visit it. They are widely used to make websites work, or work more efficiently, as well as to provide information to the owners of the site.
                  </p>
                  <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                    Cookies allow a website to recognise your device and remember key information about your visit, such as your preferred language, your location, or the items in your shopping cart. [Replace this description with technically accurate language reflecting your actual cookie implementation.]
                  </p>
                </div>

                <div id="how-we-use-cookies" className="scroll-mt-28 space-y-4">
                  <h2 className="text-2xl font-black text-slate-900 tracking-tight border-b border-slate-100 pb-3">
                    2. How We Use Cookies
                  </h2>
                  <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                    DHGsoft uses cookies to improve your browsing experience, analyse how our website is used, personalise content, and to help us understand and improve the services we offer. We may also use cookies to remember your preferences and settings so you don't have to re-enter them each time you visit.
                  </p>
                  <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                    Where required by applicable law, we obtain your consent before placing non-essential cookies on your device. [Confirm your consent management mechanism with a legal professional, particularly for GDPR/PECR compliance.]
                  </p>
                </div>

                <div id="types-of-cookies" className="scroll-mt-28 space-y-4">
                  <h2 className="text-2xl font-black text-slate-900 tracking-tight border-b border-slate-100 pb-3">
                    3. Types of Cookies
                  </h2>
                  <p className="text-slate-600 leading-relaxed text-sm sm:text-base mb-6">
                    We use the following categories of cookies on our website:
                  </p>
                  <div className="space-y-4">
                    {cookieTypes.map((ct) => (
                      <div key={ct.type} className={`rounded-2xl border p-6 space-y-3 ${ct.color}`}>
                        <div className="flex items-center gap-3">
                          <span className={`text-xs font-extrabold uppercase tracking-wider px-3 py-1 rounded-full ${ct.badge}`}>
                            {ct.type}
                          </span>
                        </div>
                        <p className="text-slate-600 text-sm leading-relaxed">{ct.description}</p>
                        <p className="text-slate-500 text-xs">
                          <span className="font-semibold">Examples:</span> {ct.examples}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div id="managing-cookies" className="scroll-mt-28 space-y-4">
                  <h2 className="text-2xl font-black text-slate-900 tracking-tight border-b border-slate-100 pb-3">
                    4. Managing Cookies
                  </h2>
                  <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                    You can control and manage cookies in several ways. Most web browsers allow you to manage your cookie preferences through the browser settings. You can set your browser to refuse cookies, delete cookies, or to alert you when cookies are being sent. Please note that if you disable cookies, some parts of our website may not function properly.
                  </p>
                  <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                    For more information on how to manage cookies in your specific browser, please refer to your browser's help documentation. [Add a link to your cookie consent management platform if applicable, e.g., OneTrust, CookieYes.]
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-slate-600 text-sm pl-2">
                    <li>Google Chrome: Settings → Privacy and Security → Cookies</li>
                    <li>Mozilla Firefox: Options → Privacy &amp; Security → Cookies</li>
                    <li>Safari: Preferences → Privacy → Cookies</li>
                    <li>Microsoft Edge: Settings → Privacy, Search, and Services</li>
                  </ul>
                </div>

                <div id="contact-us" className="scroll-mt-28 space-y-4">
                  <h2 className="text-2xl font-black text-slate-900 tracking-tight border-b border-slate-100 pb-3">
                    5. Contact Us
                  </h2>
                  <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                    If you have any questions about our use of cookies or this Cookie Policy, please contact us at:
                  </p>
                  <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-2 text-sm text-slate-600">
                    <p><span className="font-semibold text-slate-800">DHGsoft Technologies Pvt. Ltd.</span></p>
                    <p>[Your registered address — replace with actual address]</p>
                    <p>Email: <span className="text-[#B4123F] font-medium">[legal@dhgsoft.com — replace with actual email]</span></p>
                  </div>
                  <p className="text-slate-500 text-xs">
                    [Update the contact details above with verified information before publishing.]
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
        </Section>

      </main>

      <Footer />
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} showToast={(msg, type) => {}} />
    </div>
  );
}
