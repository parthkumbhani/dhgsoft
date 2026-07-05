// src/app/about/technology-partners/page.tsx
"use client";

import React, { useState } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import { techpartnersImages } from "@/lib/images/techpartners";
import {
  Cloud,
  Cpu,
  Database,
  AppWindow,
  ShieldCheck,
  BrainCircuit,
  Settings
} from "lucide-react";

const stackCards = [
  {
    title: "Cloud Platforms",
    desc: "Scalable, secure cloud foundations for industrial data, applications, and AI.",
    Icon: Cloud
  },
  {
    title: "Industrial Automation Platforms",
    desc: "PLC, SCADA, and control systems integrated with modern digital layers.",
    Icon: Cpu
  },
  {
    title: "Industrial Data Platforms",
    desc: "Historians, unified namespaces, and data platforms that create a single source of operational truth.",
    Icon: Database
  },
  {
    title: "Enterprise Software",
    desc: "ERP, MES, EAM, and enterprise systems connected to plant-floor reality.",
    Icon: AppWindow
  },
  {
    title: "Cybersecurity Technologies",
    desc: "OT and IT security tools that protect operations end to end.",
    Icon: ShieldCheck
  },
  {
    title: "Artificial Intelligence Platforms",
    desc: "AI and analytics platforms that turn industrial data into action.",
    Icon: BrainCircuit
  }
];

export default function TechnologyPartnersPage() {
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
              src={techpartnersImages.hero.src}
              alt={techpartnersImages.hero.alt}
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
                  TECHNOLOGY PARTNERS
                </span>
                <h1 className="text-3xl sm:text-4xl lg:text-[50px] font-black text-white tracking-tight leading-[1.1] font-sans">
                  Powered by the World&apos;s Leading Platforms
                </h1>
                <p className="text-slate-300 font-medium text-base sm:text-lg leading-relaxed">
                  DHGsoft integrates best-in-class industrial and enterprise technologies into solutions that perform on the plant floor and scale across the enterprise.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Our Approach */}
        <section className="bg-mist py-16 md:py-20 border-b border-line overflow-hidden relative bg-dot-matrix">
          <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-[120px] grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6 text-left">
              <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-brand font-mono block">
                OUR APPROACH
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-text-strong tracking-tight leading-tight">
                Technology-agnostic by design
              </h2>
              <p className="text-text-muted text-sm sm:text-base leading-relaxed">
                We are technology-agnostic. We select and integrate the platforms that best fit each operation and business goal — not a single vendor&apos;s catalog. Our value is in the engineering that makes these technologies work together: securely, reliably, and at industrial scale.
              </p>
            </div>
            <div className="lg:col-span-5 relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-line shadow-sm">
              <Image
                src={techpartnersImages.approach.src}
                alt={techpartnersImages.approach.alt}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* 3. Featured Partners Logo Strip */}
        <section className="bg-[#B4123F]/5 py-16 md:py-20 border-b border-line relative bg-tech-grid">
          <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-[120px] space-y-8">
            <div className="text-left space-y-3">
              <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-brand font-mono block">
                FEATURED PARTNERS
              </span>
              <p className="text-text-muted text-sm sm:text-base leading-relaxed">
                We build on trusted platforms from leading technology providers.
              </p>
            </div>

            {/* Grayscale Partner Logo Strip */}
            <div className="pt-8 border-t border-line">
              <div className="flex flex-wrap items-center justify-between gap-8 md:gap-12">
                
                {/* AWS */}
                <div className="h-10 w-24 relative flex items-center justify-center opacity-40 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer">
                  <Image
                    src="/logos/aws.svg"
                    alt="AWS Logo"
                    width={80}
                    height={32}
                    className="object-contain"
                  />
                </div>

                {/* Microsoft Azure */}
                <div className="h-10 w-32 relative flex items-center justify-center opacity-40 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer">
                  <Image
                    src="/logos/microsoft-azure.svg"
                    alt="Microsoft Azure Logo"
                    width={120}
                    height={32}
                    className="object-contain"
                  />
                </div>

                {/* Schneider Electric */}
                <div className="h-10 w-36 relative flex items-center justify-center opacity-40 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer">
                  <Image
                    src="/logos/schneider-electric.svg"
                    alt="Schneider Electric Logo"
                    width={130}
                    height={32}
                    className="object-contain"
                  />
                </div>

                {/* AVEVA */}
                <div className="h-10 w-24 relative flex items-center justify-center opacity-40 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer">
                  <Image
                    src="/logos/aveva.svg"
                    alt="AVEVA Logo"
                    width={90}
                    height={32}
                    className="object-contain"
                  />
                </div>

                {/* Phoenix Contact */}
                <div className="h-10 w-32 relative flex items-center justify-center opacity-40 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer">
                  <Image
                    src="/logos/phoenix-contact.svg"
                    alt="Phoenix Contact Logo"
                    width={110}
                    height={32}
                    className="object-contain"
                  />
                </div>

                {/* Databricks */}
                <div className="h-10 w-24 relative flex items-center justify-center opacity-40 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer">
                  <Image
                    src="/logos/databricks.svg"
                    alt="Databricks Logo"
                    width={90}
                    height={32}
                    className="object-contain"
                  />
                </div>

              </div>
            </div>

            <p className="text-xs text-text-muted italic text-left pt-4">
              Add or update partner logos to reflect current alliances. Display only partnerships you actually hold.
            </p>
          </div>
        </section>

        {/* 4. What We Work With Stack Cards */}
        <section className="bg-white py-16 md:py-20 border-b border-line relative bg-tech-grid">
          <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-[120px] space-y-12">
            <div className="text-left">
              <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-brand font-mono block">
                THE STACK
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {stackCards.map((card, idx) => {
                const { title, desc, Icon } = card;
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

        {/* 5. Integration Expertise */}
        <section className="bg-ink text-white py-16 md:py-20 border-b border-slate-900 overflow-hidden relative">
          <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-[120px] space-y-12">
            <div className="text-left">
              <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-brand-hot font-mono block">
                INTEGRATION EXPERTISE
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
              <div className="space-y-2">
                <h4 className="font-extrabold text-white text-base sm:text-lg">Vendor-neutral selection</h4>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  The right platform for the problem, backed by real integration experience.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-extrabold text-white text-base sm:text-lg">Secure interoperability</h4>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  OT and IT systems connected without compromising security.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-extrabold text-white text-base sm:text-lg">Built to scale</h4>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  Solutions designed to standardize across lines, sites, and regions.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-extrabold text-white text-base sm:text-lg">Lifecycle support</h4>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  We support the technology we deploy, long after go-live.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 6. CTA Band */}
        <section className="relative overflow-hidden bg-gradient-to-r from-brand-hot via-brand to-brand-deep py-20 text-center">
          <div className="absolute inset-0 bg-ink/10 pointer-events-none" />
          <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-[120px] relative z-10 space-y-6">
            <span className="text-xs font-extrabold uppercase tracking-[0.3em] text-white/90 font-mono block">
              PARTNER WITH US
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-[46px] font-black text-white tracking-tight leading-tight">
              Bring your platform to industrial operations.
            </h2>
            <div className="pt-4">
              <button
                onClick={() => setIsContactOpen(true)}
                className="bg-white hover:bg-slate-100 text-brand font-extrabold text-sm sm:text-base px-8 py-4 rounded-xl transition-all duration-300 shadow-md active:scale-95 cursor-pointer"
              >
                Become a Partner
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
