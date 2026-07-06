// src/app/careers/life-at-dhgsoft/page.tsx
"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight, CheckCircle2, ShieldCheck, Heart, Sparkles, Code, Globe, User } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import PhotoMosaic from "@/components/careers/PhotoMosaic";
import CtaBand from "@/components/careers/CtaBand";
import { CULTURE_PILLARS, BENEFITS_LIST, EMPLOYEE_SPOTLIGHTS } from "@/lib/careers";
import { careersImages } from "@/lib/images/careersImages";

export default function LifeAtDhgsoftPage() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-800 antialiased font-sans selection:bg-[#B4123F] selection:text-white">
      {/* Header */}
      <Header onContactClick={() => setIsContactOpen(true)} />

      <main className="relative pt-20">
        
        {/* Hero */}
        <section className="relative min-h-[460px] flex items-center bg-slate-950 text-white py-16 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src={careersImages.lifeHero.src}
              alt={careersImages.lifeHero.alt}
              fill
              className="object-cover opacity-35"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />
            <div className="absolute inset-0 bg-tech-grid opacity-15 pointer-events-none" />
          </div>

          <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-[120px] relative z-10 text-left space-y-6 max-w-4xl">
            {/* Breadcrumbs */}
            <div className="flex items-center gap-1 text-slate-400 text-xs sm:text-sm font-semibold tracking-wide">
              <Link href="/careers" className="hover:text-white transition-colors">
                Careers
              </Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-brand-hot">Life at DHGsoft</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-black text-white tracking-tight leading-[1.05]">
              Life at DHGsoft
            </h1>
            <p className="text-slate-350 font-medium text-base sm:text-lg leading-relaxed max-w-2xl text-slate-300">
              Discover our culture, benefits, and engineering mindset.
            </p>
          </div>
        </section>

        {/* 5 pillars section */}
        <section className="bg-white py-16 md:py-24 border-b border-line relative bg-tech-grid select-none">
          <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-[120px] space-y-12">
            <div className="text-left space-y-3">
              <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#B4123F] font-mono block">
                OUR CULTURE
              </span>
              <h2 className="text-3xl font-black text-text-strong tracking-tight">
                Pillars of Collaboration
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {CULTURE_PILLARS.map((pillar, i) => (
                <div key={i} className="bg-slate-50 border border-line rounded-2xl p-8 space-y-4 text-left hover:border-brand/40 transition-all duration-300">
                  <div className="h-10 w-10 rounded-xl bg-brand/5 border border-brand/10 text-brand flex items-center justify-center font-mono font-extrabold text-sm">
                    0{i + 1}
                  </div>
                  <h3 className="font-extrabold text-text-strong text-lg tracking-tight">{pillar.title}</h3>
                  <p className="text-text-muted text-xs sm:text-sm leading-relaxed">{pillar.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* The Engineering Mindset - split grid */}
        <section className="bg-mist py-16 md:py-24 border-b border-line relative bg-dot-matrix">
          <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-[120px]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              <div className="lg:col-span-6 text-left space-y-6">
                <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#B4123F] font-mono block">
                  Mindset & Drive
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-text-strong tracking-tight leading-tight">
                  The Engineering Mindset
                </h2>
                <p className="text-text-strong font-medium text-base sm:text-lg leading-relaxed">
                  We work the way we engineer: with curiosity, discipline, and a bias for outcomes. We value people who understand both code and operations — and who care about the result, not just the deliverable.
                </p>
              </div>

              <div className="lg:col-span-6 relative h-[300px] sm:h-[400px] rounded-3xl overflow-hidden shadow-md border border-line">
                <Image
                  src={careersImages.lifeMindset.src}
                  alt={careersImages.lifeMindset.alt}
                  fill
                  className="object-cover"
                />
              </div>

            </div>
          </div>
        </section>

        {/* Benefits & Perks */}
        <section className="bg-white py-16 md:py-24 border-b border-line relative bg-tech-grid">
          <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-[120px] space-y-12">
            <div className="text-left space-y-3">
              <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#B4123F] font-mono block">
                BENEFITS & PERKS
              </span>
              <h2 className="text-3xl font-black text-text-strong tracking-tight">
                Supporting Our People
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {BENEFITS_LIST.map((benefit, i) => (
                <div key={i} className="bg-slate-50 border border-line rounded-2xl p-6 text-left space-y-3 hover:border-brand/40 transition-all duration-300">
                  <h4 className="font-extrabold text-text-strong text-base tracking-tight">{benefit.name}</h4>
                  <p className="text-text-muted text-xs leading-relaxed">{benefit.desc}</p>
                </div>
              ))}
            </div>

            <div className="pt-4 text-center">
              <span className="text-[11px] font-mono text-slate-400 block max-w-xl mx-auto leading-relaxed">
                * Muted Note: Tailor these benefits to your actual offering.
              </span>
            </div>
          </div>
        </section>

        {/* Life in Pictures Mosaic component */}
        <PhotoMosaic />

        {/* Diversity & Inclusion Band */}
        <section className="bg-slate-900 border-b border-slate-800 py-16 text-white text-center relative overflow-hidden select-none">
          <div className="absolute inset-0 bg-tech-grid opacity-10 pointer-events-none" />
          <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-[120px] relative z-10 space-y-4 max-w-3xl">
            <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-brand-hot font-mono block">
              DIVERSITY & INCLUSION
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-tight">
              Belonging & Growth
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              We build diverse teams and an inclusive culture where different backgrounds and perspectives make our engineering stronger.
            </p>
          </div>
        </section>

        {/* Employee Spotlights */}
        <section className="bg-mist py-16 md:py-24 border-b border-line relative bg-dot-matrix">
          <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-[120px] space-y-12">
            <div className="text-left space-y-3">
              <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#B4123F] font-mono block">
                EMPLOYEE SPOTLIGHTS
              </span>
              <h2 className="text-3xl font-black text-text-strong tracking-tight">
                Meet the Architects
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {EMPLOYEE_SPOTLIGHTS.map((spot, i) => (
                <div key={i} className="bg-white border border-line rounded-2xl p-8 flex flex-col justify-between shadow-sm text-left hover:border-brand/40 transition-all duration-300">
                  <div className="space-y-6">
                    <p className="text-text-strong font-bold text-base italic leading-relaxed">
                      &ldquo;{spot.quote}&rdquo;
                    </p>
                  </div>
                  
                  <div className="pt-6 border-t border-slate-100 mt-6 flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-brand/10 border border-brand/20 text-brand font-black text-sm flex items-center justify-center font-mono">
                      {spot.initials}
                    </div>
                    <div>
                      <h4 className="font-extrabold text-text-strong text-xs">{spot.name}</h4>
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider font-mono mt-0.5">{spot.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 text-center">
              <span className="text-[11px] font-mono text-slate-400 block max-w-xl mx-auto leading-relaxed">
                * Note: Replace spotlight placeholders with real, consenting employee quotes before staging.
              </span>
            </div>
          </div>
        </section>

        {/* Crimson CTA band */}
        <CtaBand
          title="Like how we work? Come build with us."
          buttonText="View Current Openings"
          buttonHref="/careers/current-openings"
        />

      </main>

      {/* Footer */}
      <Footer />

      {/* Contact Modal */}
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} showToast={(msg, type) => {}} />
    </div>
  );
}
