// src/app/about/ethics-compliance/page.tsx
"use client";

import React, { useState } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import { ethicsImages } from "@/lib/images/ethics";
import {
  Scale,
  ShieldCheck,
  FileCheck,
  Lock,
  Eye,
  Terminal,
  Activity,
  Layers
} from "lucide-react";

const compliancePillars = [
  {
    title: "Ethical Business Conduct",
    desc: "Honest, transparent, and accountable in every relationship and decision.",
    Icon: Scale
  },
  {
    title: "Information Security",
    desc: "Protecting customer data through secure engineering practices and internationally accepted security principles.",
    Icon: ShieldCheck
  },
  {
    title: "Regulatory Compliance",
    desc: "Aligning engagements with applicable laws, regulations, and industry standards.",
    Icon: FileCheck
  },
  {
    title: "Data Privacy",
    desc: "Handling customer and operational data responsibly and confidentially.",
    Icon: Lock
  }
];

export default function EthicsCompliancePage() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-800 antialiased font-sans selection:bg-[#B4123F] selection:text-white">
      {/* Sticky Header */}
      <Header onContactClick={() => setIsContactOpen(true)} />

      <main className="relative pt-20">

        {/* 1. Hero Band */}
        <section className="relative min-h-[500px] flex items-center overflow-hidden bg-ink">
          <div className="absolute inset-0 z-0">
            <Image
              src={ethicsImages.hero.src}
              alt={ethicsImages.hero.alt}
              fill
              priority
              className="object-cover object-center opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-transparent" />
          </div>
          <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-[120px] w-full relative z-10 py-16 md:py-20">
            <div className="max-w-3xl text-left flex gap-6">
              <div className="w-[4px] bg-brand rounded-full self-stretch shrink-0" />
              <div className="space-y-4">
                <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-brand-hot font-mono block">
                  ETHICS & COMPLIANCE
                </span>
                <h1 className="text-3xl sm:text-4xl lg:text-[50px] font-black text-white tracking-tight leading-[1.1] font-sans">
                  Built on Integrity and Trust
                </h1>
                <p className="text-slate-300 font-medium text-base sm:text-lg leading-relaxed">
                  Integrity and ethical business practices guide every DHGsoft engagement — backed by secure, standards-based engineering that protects our customers&apos; operations and data.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Our Commitment */}
        <section className="bg-mist py-16 md:py-20 border-b border-line overflow-hidden relative bg-dot-matrix">
          <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-[120px] grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6 text-left">
              <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-brand font-mono block">
                OUR COMMITMENT
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-text-strong tracking-tight leading-tight">
                Integrity in every engagement
              </h2>
              <p className="text-text-muted text-sm sm:text-base leading-relaxed">
                Integrity and ethical business practices guide every customer engagement. We build trusted relationships through transparency, accountability, and doing what is right — even when no one is watching.
              </p>
            </div>
            <div className="lg:col-span-5 relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-line shadow-sm">
              <Image
                src={ethicsImages.commitment.src}
                alt={ethicsImages.commitment.alt}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* 3. How We Operate */}
        <section className="bg-[#B4123F]/5 py-16 md:py-20 border-b border-line relative bg-tech-grid">
          <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-[120px] space-y-12">
            <div className="text-left">
              <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-brand font-mono block">
                HOW WE OPERATE
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
              {compliancePillars.map((pillar, idx) => {
                const { title, desc, Icon } = pillar;
                return (
                  <div
                    key={idx}
                    className="bg-white border border-line rounded-xl p-6 shadow-sm hover:border-brand/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-start text-left space-y-4"
                  >
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-brand/5 text-brand shrink-0">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-extrabold text-text-strong text-lg tracking-tight">{title}</h3>
                      <p className="text-text-muted text-sm leading-relaxed">{desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 4. Secure by Design Feature Band */}
        <section className="bg-ink text-white py-16 md:py-20 border-b border-slate-900 overflow-hidden relative">
          <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-[120px] space-y-12">
            <div className="text-left space-y-4">
              <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-brand-hot font-mono block">
                SECURE BY DESIGN
              </span>
              <h2 className="text-3xl font-extrabold tracking-tight leading-tight">
                A zero-trust approach to industrial security
              </h2>
              <p className="text-slate-300 max-w-3xl text-sm sm:text-base leading-relaxed">
                Security is engineered in, not added on. We apply zero-trust principles across OT and IT environments and follow internationally accepted security standards to protect operations, data, and people.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-brand-hot">
                  <Eye className="w-5 h-5" />
                  <h4 className="font-extrabold text-white text-base">Zero-trust access</h4>
                </div>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  Authentication and authorization strictly verified for every system node.
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-brand-hot">
                  <Layers className="w-5 h-5" />
                  <h4 className="font-extrabold text-white text-base">OT/IT segmentation</h4>
                </div>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  Strict logical isolation layers between enterprise data and industrial networks.
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-brand-hot">
                  <Terminal className="w-5 h-5" />
                  <h4 className="font-extrabold text-white text-base">Secure development</h4>
                </div>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  Code reviews, static analysis, and secure practices in every build pipeline.
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-brand-hot">
                  <Activity className="w-5 h-5" />
                  <h4 className="font-extrabold text-white text-base">Continuous monitoring</h4>
                </div>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  24/7 logging, telemetry diagnostics, and incident response operations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Standards & Frameworks Placeholder Badges */}
        <section className="bg-white py-16 md:py-20 border-b border-line relative bg-tech-grid">
          <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-[120px] space-y-8">
            <div className="text-left space-y-3">
              <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-brand font-mono block">
                STANDARDS & FRAMEWORKS
              </span>
              <p className="text-text-muted text-sm sm:text-base leading-relaxed max-w-3xl">
                We align our practices with internationally recognized security and quality standards.
              </p>
            </div>

            {/* Badges Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {["[ISO 27001]", "[IEC 62443]", "[SOC 2]", "[GDPR-ready]", "[NIST CSF]"].map((badge, idx) => (
                <div
                  key={idx}
                  className="bg-mist border border-line rounded-lg py-4 px-6 text-center select-none"
                >
                  <span className="font-mono text-sm font-bold text-text-strong tracking-wide block">{badge}</span>
                  <span className="text-[10px] text-text-muted mt-1 block">[Placeholder Badge]</span>
                </div>
              ))}
            </div>

            {/* Prominent Legal Safety Warning */}
            <div className="p-4 border-l-4 border-amber-500 bg-amber-500/5 rounded-r-lg max-w-4xl text-left">
              <p className="text-xs sm:text-sm text-amber-700 leading-relaxed font-medium">
                <strong>Important Compliance Note:</strong> Display only the certifications and standards your organization actually holds or genuinely aligns with. Do not claim certifications you have not achieved.
              </p>
            </div>
          </div>
        </section>

        {/* 6. CTA Band */}
        <section className="relative overflow-hidden bg-gradient-to-r from-brand-hot via-brand to-brand-deep py-20 text-center">
          <div className="absolute inset-0 bg-ink/10 pointer-events-none" />
          <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-[120px] relative z-10 space-y-6">
            <span className="text-xs font-extrabold uppercase tracking-[0.3em] text-white/90 font-mono block">
              CONTACT US
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-[46px] font-black text-white tracking-tight leading-tight">
              Engineering you can trust.
            </h2>
            <div className="pt-4">
              <button
                onClick={() => setIsContactOpen(true)}
                className="bg-white hover:bg-slate-100 text-brand font-extrabold text-sm sm:text-base px-8 py-4 rounded-xl transition-all duration-300 shadow-md active:scale-95 cursor-pointer"
              >
                Get in Touch
              </button>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <Footer />

      {/* Contact Modal */}
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} showToast={(msg, type) => {}} />
    </div>
  );
}
