// src/app/about/leadership/page.tsx
"use client";

import React, { useState } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import { leadershipImages } from "@/lib/images/leadership";

const executives = [
  {
    initials: "CEO",
    role: "Chief Executive Officer",
    desc: "[Short bio — e.g., leads DHGsoft's vision and growth across industrial digital transformation. Replace with real bio.]"
  },
  {
    initials: "CTO",
    role: "Chief Technology Officer",
    desc: "[Bio placeholder — drives engineering strategy across automation, data, and AI.]"
  },
  {
    initials: "OT",
    role: "Head of OT & Industrial Automation",
    desc: "[Bio placeholder — leads plant-floor engineering and OT/IT integration.]"
  },
  {
    initials: "AI",
    role: "Head of Data & AI",
    desc: "[Bio placeholder — leads industrial data platforms and applied analytics.]"
  },
  {
    initials: "SEC",
    role: "Head of Cybersecurity",
    desc: "[Bio placeholder — leads secure engineering and OT security practice.]"
  },
  {
    initials: "GD",
    role: "Head of Global Delivery",
    desc: "[Bio placeholder — leads onsite, offshore, and hybrid delivery teams.]"
  }
];

export default function LeadershipPage() {
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
              src={leadershipImages.hero.src}
              alt={leadershipImages.hero.alt}
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
                  LEADERSHIP
                </span>
                <h1 className="text-3xl sm:text-4xl lg:text-[50px] font-black text-white tracking-tight leading-[1.1] font-sans">
                  The People Behind the Platform
                </h1>
                <p className="text-slate-300 font-medium text-base sm:text-lg leading-relaxed">
                  DHGsoft is led by engineers and operators who have spent their careers closing the gap between industrial operations and enterprise technology.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Leadership Philosophy */}
        <section className="bg-ink text-white py-12 md:py-16 border-b border-slate-900 overflow-hidden relative">
          <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-[120px] flex flex-col items-start text-left space-y-4">
            <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-brand-hot font-mono block mb-2">
              OUR PHILOSOPHY
            </span>
            <div className="flex flex-col gap-3 font-extrabold text-2xl sm:text-3xl lg:text-[34px] tracking-tight text-white leading-tight font-sans">
              <span className="text-brand-hot">Lead with innovation.</span>
              <span className="text-white/80">Deliver with excellence.</span>
              <span className="text-white/60">Grow through collaboration.</span>
            </div>
          </div>
        </section>

        {/* 3. Executive Leadership Grid */}
        <section className="bg-white py-16 md:py-20 border-b border-line overflow-hidden relative bg-dot-matrix bg-tech-grid">
          <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-[120px] space-y-12">
            <div className="text-left space-y-3">
              <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-brand font-mono block">
                EXECUTIVE LEADERSHIP
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-text-strong tracking-tight leading-tight">
                Meet Our Leadership
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {executives.map((exec, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-line rounded-xl p-6 shadow-sm hover:border-brand/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-start text-left space-y-5"
                >
                  {/* Monogram Avatar Placeholder */}
                  <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-brand/5 border border-line flex items-center justify-center select-none group">
                    <span className="font-mono text-4xl font-black text-brand tracking-wider opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                      {exec.initials}
                    </span>
                    <div className="absolute inset-0 bg-brand/5 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                    <div className="absolute bottom-3 left-3 right-3 text-[10px] text-brand uppercase font-extrabold font-mono tracking-wider text-center bg-white/80 backdrop-blur-sm rounded-md py-1 border border-brand/20">
                      [Placeholder Avatar — Replace with Photo]
                    </div>
                  </div>
                  
                  <div className="space-y-2 flex-grow">
                    <h3 className="font-extrabold text-text-strong text-xl tracking-tight">[Full Name]</h3>
                    <p className="text-brand font-bold text-xs sm:text-sm uppercase tracking-wider">{exec.role}</p>
                    <p className="text-text-muted text-xs sm:text-sm leading-relaxed pt-2">{exec.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-xs text-text-muted italic text-left pt-4">
              Leadership names, photos, and bios are placeholders — replace with verified details.
            </p>
          </div>
        </section>

        {/* 4. What Our Leadership Believes */}
        <section className="bg-mist py-16 md:py-20 border-b border-line overflow-hidden relative bg-dot-matrix">
          <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-[120px] grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-line shadow-sm">
              <Image
                src={leadershipImages.mindset.src}
                alt={leadershipImages.mindset.alt}
                fill
                className="object-cover"
              />
            </div>
            <div className="lg:col-span-6 space-y-6 text-left">
              <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-brand font-mono block">
                LEADERSHIP MINDSET
              </span>
              <p className="text-text-strong font-bold text-xl sm:text-2xl leading-relaxed">
                We lead the way we engineer — with curiosity, discipline, and a bias for outcomes. We hire people who have operated real systems, we give them hard problems, and we measure ourselves by the value we create for the industries we serve.
              </p>
            </div>
          </div>
        </section>

        {/* 5. Join Us CTA */}
        <section className="relative overflow-hidden bg-gradient-to-r from-brand-hot via-brand to-brand-deep py-20 text-center">
          <div className="absolute inset-0 bg-ink/10 pointer-events-none" />
          <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-[120px] relative z-10 space-y-6">
            <span className="text-xs font-extrabold uppercase tracking-[0.3em] text-white/90 font-mono block">
              CAREERS
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-[46px] font-black text-white tracking-tight leading-tight">
              Great engineering starts with great people.
            </h2>
            <div className="pt-4">
              <button
                onClick={() => setIsContactOpen(true)}
                className="bg-white hover:bg-slate-100 text-brand font-extrabold text-sm sm:text-base px-8 py-4 rounded-xl transition-all duration-300 shadow-md active:scale-95 cursor-pointer"
              >
                Explore Careers
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
