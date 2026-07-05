// src/app/about/overview/page.tsx
"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import { overviewImages } from "@/lib/images/overview";
import { Network, BrainCircuit, ShieldCheck, Check } from "lucide-react";
import { motion } from "framer-motion";

export default function OverviewPage() {
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
              src={overviewImages.hero.src}
              alt={overviewImages.hero.alt}
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
                  OUR STORY
                </span>
                <h1 className="text-3xl sm:text-4xl lg:text-[50px] font-black text-white tracking-tight leading-[1.1] font-sans">
                  Engineering Clarity from Industrial Complexity
                </h1>
                <p className="text-slate-300 font-medium text-base sm:text-lg leading-relaxed">
                  DHGsoft exists to help industrial organizations turn fragmented operations into connected, intelligent systems. From the plant floor to the cloud, we engineer the digital backbone that makes modern industry faster, safer, and more sustainable.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Who We Are (Split layout) */}
        <section className="bg-mist py-16 md:py-20 border-b border-line overflow-hidden relative bg-dot-matrix">
          <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-[120px] grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6 text-left">
              <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-brand font-mono block">
                WHO WE ARE
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-text-strong tracking-tight leading-tight">
                A digital engineering partner built for industry
              </h2>
              <div className="space-y-4 text-text-muted text-sm sm:text-base leading-relaxed">
                <p>
                  DHGsoft is a global Industrial Digital Transformation company. We bring together deep operational technology expertise, modern software engineering, and applied AI to help manufacturers, utilities, and process industries connect what they build with how they run it.
                </p>
                <p>
                  Our teams work at the intersection of OT and IT — the place where most transformation efforts stall. We close that gap with engineering that respects the realities of the plant floor while unlocking the scale of the enterprise and the cloud.
                </p>
                <p>
                  Whether an organization is modernizing a single line or standardizing operations across dozens of sites, we bring the same discipline: understand the process first, then apply the technology that moves the business.
                </p>
              </div>
            </div>
            <div className="lg:col-span-6 relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-line shadow-sm">
              <Image
                src={overviewImages.whoWeAre.src}
                alt={overviewImages.whoWeAre.alt}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* 3. Our Engineering Focus */}
        <section className="bg-[#B4123F]/5 py-16 md:py-20 border-b border-line relative bg-tech-grid">
          <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-[120px]">
            <div className="text-left mb-12">
              <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-brand font-mono block">
                OUR ENGINEERING FOCUS
              </span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full">
              {/* Card 1 */}
              <div className="bg-white border border-line rounded-xl p-6 shadow-sm flex flex-col justify-start text-left space-y-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-brand/5 text-brand shrink-0">
                  <Network className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-extrabold text-text-strong text-lg tracking-tight">Connected Operations</h3>
                  <p className="text-text-muted text-sm leading-relaxed">
                    Unifying plant-floor assets, historians, and enterprise systems into a single source of operational truth.
                  </p>
                </div>
              </div>
              {/* Card 2 */}
              <div className="bg-white border border-line rounded-xl p-6 shadow-sm flex flex-col justify-start text-left space-y-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-brand/5 text-brand shrink-0">
                  <BrainCircuit className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-extrabold text-text-strong text-lg tracking-tight">Applied Intelligence</h3>
                  <p className="text-text-muted text-sm leading-relaxed">
                    Turning industrial data into predictions, insights, and autonomous action that improve performance every day.
                  </p>
                </div>
              </div>
              {/* Card 3 */}
              <div className="bg-white border border-line rounded-xl p-6 shadow-sm flex flex-col justify-start text-left space-y-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-brand/5 text-brand shrink-0">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-extrabold text-text-strong text-lg tracking-tight">Trusted Delivery</h3>
                  <p className="text-text-muted text-sm leading-relaxed">
                    Secure, standards-based engineering delivered by teams who have run real operations, not just written code.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. By the Numbers */}
        <section className="bg-ink text-white py-16 border-b border-slate-900 overflow-hidden relative">
          <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-[120px] space-y-8">
            <div className="text-left">
              <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-brand-hot font-mono block">
                BY THE NUMBERS
              </span>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 w-full text-left">
              <div className="space-y-1">
                <span className="text-4xl sm:text-5xl font-black text-brand-hot font-mono block">[XX]+</span>
                <span className="text-slate-400 text-xs sm:text-sm font-semibold">Industrial projects delivered</span>
              </div>
              <div className="space-y-1">
                <span className="text-4xl sm:text-5xl font-black text-brand-hot font-mono block">[XX]+</span>
                <span className="text-slate-400 text-xs sm:text-sm font-semibold">Plant & enterprise sites connected</span>
              </div>
              <div className="space-y-1">
                <span className="text-4xl sm:text-5xl font-black text-brand-hot font-mono block">[XX]</span>
                <span className="text-slate-400 text-xs sm:text-sm font-semibold">Industries served</span>
              </div>
              <div className="space-y-1">
                <span className="text-4xl sm:text-5xl font-black text-brand-hot font-mono block">24×7</span>
                <span className="text-slate-400 text-xs sm:text-sm font-semibold">Global engineering support</span>
              </div>
            </div>
            <p className="text-[11px] text-slate-500 italic text-left">
              Figures shown are placeholders — replace with verified numbers.
            </p>
          </div>
        </section>

        {/* 5. Our Journey */}
        <section className="bg-white py-16 md:py-20 border-b border-line relative bg-tech-grid">
          <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-[120px]">
            <div className="text-left mb-12">
              <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-brand font-mono block">
                OUR JOURNEY
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full text-left relative">
              <div className="absolute top-[24px] left-0 right-0 h-[1.5px] bg-line hidden md:block z-0" />
              
              {/* Phase 1 */}
              <div className="space-y-3 relative z-10">
                <div className="w-12 h-12 rounded-full border-2 border-brand bg-white flex items-center justify-center font-bold text-brand font-mono">01</div>
                <h4 className="font-extrabold text-text-strong text-base">Foundation</h4>
                <p className="text-text-muted text-xs sm:text-sm leading-relaxed">
                  DHGsoft was formed by engineers who had lived the gap between operations and IT — and were determined to close it.
                </p>
              </div>
              {/* Phase 2 */}
              <div className="space-y-3 relative z-10">
                <div className="w-12 h-12 rounded-full border-2 border-brand bg-white flex items-center justify-center font-bold text-brand font-mono">02</div>
                <h4 className="font-extrabold text-text-strong text-base">Focus</h4>
                <p className="text-text-muted text-xs sm:text-sm leading-relaxed">
                  We concentrated on the hardest problem in industry: making OT and IT work as one, securely and at scale.
                </p>
              </div>
              {/* Phase 3 */}
              <div className="space-y-3 relative z-10">
                <div className="w-12 h-12 rounded-full border-2 border-brand bg-white flex items-center justify-center font-bold text-brand font-mono">03</div>
                <h4 className="font-extrabold text-text-strong text-base">Expansion</h4>
                <p className="text-text-muted text-xs sm:text-sm leading-relaxed">
                  Our capabilities grew across automation, data platforms, cloud, AI, and cybersecurity — end to end.
                </p>
              </div>
              {/* Phase 4 */}
              <div className="space-y-3 relative z-10">
                <div className="w-12 h-12 rounded-full border-2 border-brand bg-white flex items-center justify-center font-bold text-brand font-mono">04</div>
                <h4 className="font-extrabold text-text-strong text-base">Today</h4>
                <p className="text-text-muted text-xs sm:text-sm leading-relaxed">
                  We partner with organizations worldwide to build connected, intelligent, and sustainable operations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 6. What Drives Us */}
        <section className="bg-mist py-16 md:py-20 border-b border-line overflow-hidden relative bg-dot-matrix">
          <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-[120px] grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-line shadow-sm order-2 lg:order-1">
              <Image
                src={overviewImages.whatDrivesUs.src}
                alt={overviewImages.whatDrivesUs.alt}
                fill
                className="object-cover"
              />
            </div>
            <div className="lg:col-span-6 space-y-6 text-left order-1 lg:order-2">
              <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-brand font-mono block">
                WHAT DRIVES US
              </span>
              <p className="text-text-strong font-bold text-xl sm:text-2xl leading-relaxed">
                We measure our work in outcomes our customers can feel — less downtime, cleaner data, safer sites, and decisions made in real time. Technology is only the means. Operational excellence is the goal.
              </p>
            </div>
          </div>
        </section>

        {/* 7. CTA Band */}
        <section className="relative overflow-hidden bg-gradient-to-r from-brand-hot via-brand to-brand-deep py-20 text-center">
          <div className="absolute inset-0 bg-ink/10 pointer-events-none" />
          <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-[120px] relative z-10 space-y-6">
            <span className="text-xs font-extrabold uppercase tracking-[0.3em] text-white/90 font-mono block">
              GET STARTED
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-[46px] font-black text-white tracking-tight leading-tight">
              Let&apos;s build your connected enterprise.
            </h2>
            <div className="pt-4">
              <button
                onClick={() => setIsContactOpen(true)}
                className="bg-white hover:bg-slate-100 text-brand font-extrabold text-sm sm:text-base px-8 py-4 rounded-xl transition-all duration-300 shadow-md active:scale-95 cursor-pointer"
              >
                Talk to Our Team
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
