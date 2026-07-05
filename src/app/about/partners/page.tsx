// src/app/about/partners/page.tsx
"use client";

import React, { useState } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import { partnersImages } from "@/lib/images/partners";
import {
  Puzzle,
  Cloud,
  ShieldCheck,
  Network
} from "lucide-react";

const categories = [
  {
    title: "Solution Partners",
    desc: "Best-in-class platforms we implement and integrate into industrial operations.",
    Icon: Puzzle
  },
  {
    title: "Cloud & Data Partners",
    desc: "Scalable cloud and data ecosystems that power industrial intelligence.",
    Icon: Cloud
  },
  {
    title: "Cybersecurity Partners",
    desc: "Trusted security technologies that protect OT and IT environments.",
    Icon: ShieldCheck
  },
  {
    title: "System Integrators",
    desc: "Collaborators who help us deliver at scale across sites and regions.",
    Icon: Network
  }
];

export default function PartnersPage() {
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
              src={partnersImages.hero.src}
              alt={partnersImages.hero.alt}
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
                  PARTNER ECOSYSTEM
                </span>
                <h1 className="text-3xl sm:text-4xl lg:text-[50px] font-black text-white tracking-tight leading-[1.1] font-sans">
                  Better Together — Our Partner Ecosystem
                </h1>
                <p className="text-slate-300 font-medium text-base sm:text-lg leading-relaxed">
                  Industrial transformation is a team effort. We collaborate with the world&apos;s leading technology providers, integrators, and institutions to deliver future-ready solutions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Why We Partner */}
        <section className="bg-mist py-16 md:py-20 border-b border-line overflow-hidden relative bg-dot-matrix">
          <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-[120px] grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6 text-left">
              <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-brand font-mono block">
                COLLABORATION
              </span>
              <p className="text-brand font-bold text-lg sm:text-xl">
                Innovation happens through collaboration.
              </p>
              <p className="text-text-muted text-sm sm:text-base leading-relaxed">
                DHGsoft works closely with customers, technology providers, universities, research institutions, system integrators, and industry experts to deliver future-ready solutions. The right ecosystem lets us bring proven technology to every problem — and integrate it into operations that already work.
              </p>
            </div>
            <div className="lg:col-span-5 relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-line shadow-sm">
              <Image
                src={partnersImages.whyPartner.src}
                alt={partnersImages.whyPartner.alt}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* 3. Technology Partners */}
        <section className="bg-[#B4123F]/5 py-16 md:py-20 border-b border-line relative bg-tech-grid">
          <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-[120px] space-y-8">
            <div className="text-left space-y-3">
              <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-brand font-mono block">
                TECHNOLOGY PARTNERS
              </span>
              <p className="text-text-muted text-sm sm:text-base leading-relaxed max-w-3xl">
                Industrial Automation Platforms, Industrial Data Platforms, Enterprise Software, Cloud Providers, Cybersecurity Technologies, Artificial Intelligence Platforms.
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
          </div>
        </section>

        {/* 4. Partnership Categories */}
        <section className="bg-white py-16 md:py-20 border-b border-line relative bg-tech-grid">
          <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-[120px] space-y-12">
            <div className="text-left">
              <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-brand font-mono block">
                HOW WE PARTNER
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories.map((cat, idx) => {
                const { title, desc, Icon } = cat;
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

        {/* 5. Academic Partnerships */}
        <section className="bg-white py-16 md:py-20 border-b border-line overflow-hidden relative bg-tech-grid">
          <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-[120px] grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 order-2 lg:order-1 relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-line shadow-sm">
              <Image
                src={partnersImages.academic.src}
                alt={partnersImages.academic.alt}
                fill
                className="object-cover"
              />
            </div>
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-6 text-left">
              <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-brand font-mono block">
                ACADEMIC PARTNERSHIPS
              </span>
              <p className="text-text-muted text-sm sm:text-base leading-relaxed">
                Supporting research, innovation, internships, and workforce development through collaboration with universities and engineering institutions. Together we develop the talent and ideas that keep industrial technology moving forward.
              </p>
            </div>
          </div>
        </section>

        {/* 6. Strategic Alliances */}
        <section className="bg-ink text-white py-12 md:py-16 border-b border-slate-900 overflow-hidden relative">
          <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-[120px] space-y-3 text-left">
            <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-brand-hot font-mono block">
              STRATEGIC ALLIANCES
            </span>
            <p className="text-white font-extrabold text-xl sm:text-2xl leading-relaxed">
              Building long-term partnerships to accelerate innovation and deliver greater customer value.
            </p>
          </div>
        </section>

        {/* 7. Become a Partner CTA */}
        <section className="relative overflow-hidden bg-gradient-to-r from-brand-hot via-brand to-brand-deep py-20 text-center">
          <div className="absolute inset-0 bg-ink/10 pointer-events-none" />
          <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-[120px] relative z-10 space-y-6">
            <span className="text-xs font-extrabold uppercase tracking-[0.3em] text-white/90 font-mono block">
              JOIN OUR ECOSYSTEM
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-[46px] font-black text-white tracking-tight leading-tight">
              Let&apos;s build the future of connected industry — together.
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
