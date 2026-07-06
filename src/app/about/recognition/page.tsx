// src/app/about/recognition/page.tsx
"use client";
import { Section } from "@/components/ui/Section";

import React, { useState } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import { recognitionImages } from "@/lib/images/recognition";
import {
  Star,
  Trophy,
  Medal,
  BadgeCheck,
  Rocket,
  Flag
} from "lucide-react";

const highlightCards = [
  {
    title: "Customer Success Stories",
    desc: "Real results delivered for the industries we serve.",
    Icon: Star
  },
  {
    title: "Awards",
    desc: "Recognition for our engineering and impact.",
    Icon: Trophy
  },
  {
    title: "Industry Recognition",
    desc: "Acknowledgement from the industrial and technology community.",
    Icon: Medal
  },
  {
    title: "Certifications",
    desc: "Standards and credentials that reflect our commitment to quality.",
    Icon: BadgeCheck
  },
  {
    title: "Technology Achievements",
    desc: "Milestones in the platforms and solutions we build.",
    Icon: Rocket
  },
  {
    title: "Project Milestones",
    desc: "Significant deliveries and long-term partnerships.",
    Icon: Flag
  }
];

export default function RecognitionPage() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-800 antialiased font-sans selection:bg-[#B4123F] selection:text-white">
      {/* Sticky Header */}
      <Header onContactClick={() => setIsContactOpen(true)} />

      <main className="relative pt-20">

        {/* 1. Hero Band */}
        <Section variant="ink" containerSize="wide" className="relative min-h-[500px] flex items-center overflow-hidden ">
          <div className="absolute inset-0 z-0">
            <Image
              src={recognitionImages.hero.src}
              alt={recognitionImages.hero.alt}
              fill
              priority
              className="object-cover object-center opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-transparent" />
          </div>
          <div className="w-full relative z-10 py-16 md:py-20">
            <div className="max-w-3xl text-left flex gap-6">
              <div className="w-[4px] bg-brand rounded-full self-stretch shrink-0" />
              <div className="space-y-4">
                <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-brand-hot font-mono block">
                  RECOGNITION
                </span>
                <h1 className="text-3xl sm:text-4xl lg:text-[50px] font-black text-white tracking-tight leading-[1.1] font-sans">
                  Measured by the Value We Create
                </h1>
                <p className="text-slate-300 font-medium text-base sm:text-lg leading-relaxed">
                  DHGsoft measures success by the value created for customers.
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* 2. Our Success Intro */}
        <Section variant="mist" containerSize="wide" className=" border-b border-line text-left overflow-hidden relative bg-dot-matrix">
          <div className="w-full relative z-10 space-y-4">
            <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-brand font-mono block">
              OUR SUCCESS
            </span>
            <p className="text-text-strong font-bold text-xl sm:text-2xl leading-relaxed max-w-4xl">
              Recognition follows outcomes. DHGsoft measures success by the value created for customers — and we&apos;re proud of the results we help our partners achieve.
            </p>
            <p className="text-brand font-extrabold text-sm sm:text-base uppercase tracking-wider">
              This section highlights:
            </p>
          </div>
        </Section>

        {/* 3. What We Highlight Stack Cards */}
        <Section variant="white" containerSize="wide" className="bg-white border-b border-line relative bg-tech-grid">
          <div className="w-full relative z-10 space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {highlightCards.map((card, idx) => {
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
            
            <p className="text-xs text-text-muted italic text-left pt-4">
              Populate each category with real, verifiable items.
            </p>
          </div>
        </Section>

        {/* 4. Customer Success Stories */}
        <Section variant="brandTint" containerSize="wide" className=" border-b border-line relative bg-tech-grid">
          <div className="w-full relative z-10 space-y-12">
            <div className="text-left">
              <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-brand font-mono block">
                CASE STUDIES
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="bg-white border border-line rounded-xl overflow-hidden shadow-sm flex flex-col hover:-translate-y-1 transition-all duration-300">
                <div className="relative w-full h-[200px] border-b border-line">
                  <Image
                    src={recognitionImages.caseManufacturing.src}
                    alt={recognitionImages.caseManufacturing.alt}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 text-left space-y-4 flex-grow flex flex-col justify-between">
                  <div className="space-y-2">
                    <span className="text-[10px] font-extrabold text-brand uppercase font-mono tracking-wider">[Industry]</span>
                    <h4 className="font-extrabold text-text-strong text-lg">[Challenge placeholder]</h4>
                    <p className="text-text-muted text-xs sm:text-sm leading-relaxed">[Solution placeholder]</p>
                  </div>
                  <div className="pt-4 border-t border-line mt-auto flex items-center justify-between">
                    <span className="text-brand font-bold text-base">[XX]% [outcome placeholder]</span>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white border border-line rounded-xl overflow-hidden shadow-sm flex flex-col hover:-translate-y-1 transition-all duration-300">
                <div className="relative w-full h-[200px] border-b border-line">
                  <Image
                    src={recognitionImages.caseEnergy.src}
                    alt={recognitionImages.caseEnergy.alt}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 text-left space-y-4 flex-grow flex flex-col justify-between">
                  <div className="space-y-2">
                    <span className="text-[10px] font-extrabold text-brand uppercase font-mono tracking-wider">[Industry]</span>
                    <h4 className="font-extrabold text-text-strong text-lg">[Challenge placeholder]</h4>
                    <p className="text-text-muted text-xs sm:text-sm leading-relaxed">[Solution placeholder]</p>
                  </div>
                  <div className="pt-4 border-t border-line mt-auto flex items-center justify-between">
                    <span className="text-brand font-bold text-base">[XX]% [outcome placeholder]</span>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-white border border-line rounded-xl overflow-hidden shadow-sm flex flex-col hover:-translate-y-1 transition-all duration-300">
                <div className="relative w-full h-[200px] border-b border-line">
                  <Image
                    src={recognitionImages.caseLogistics.src}
                    alt={recognitionImages.caseLogistics.alt}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 text-left space-y-4 flex-grow flex flex-col justify-between">
                  <div className="space-y-2">
                    <span className="text-[10px] font-extrabold text-brand uppercase font-mono tracking-wider">[Industry]</span>
                    <h4 className="font-extrabold text-text-strong text-lg">[Challenge placeholder]</h4>
                    <p className="text-text-muted text-xs sm:text-sm leading-relaxed">[Solution placeholder]</p>
                  </div>
                  <div className="pt-4 border-t border-line mt-auto flex items-center justify-between">
                    <span className="text-brand font-bold text-base">[XX]% [outcome placeholder]</span>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-xs text-text-muted italic text-left pt-4">
              Replace with real projects and measurable outcomes.
            </p>
          </div>
        </Section>

        {/* 5. Awards & Recognition Placeholder Badges */}
        <Section variant="white" containerSize="wide" className="bg-white border-b border-line relative bg-tech-grid bg-dot-matrix">
          <div className="w-full relative z-10 space-y-8">
            <div className="text-left space-y-3">
              <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-brand font-mono block">
                AWARDS & RECOGNITION
              </span>
            </div>

            {/* Badges Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {["[Award 1]", "[Award 2]", "[Award 3]", "[Recognition]"].map((badge, idx) => (
                <div
                  key={idx}
                  className="bg-mist border border-line rounded-lg py-5 px-6 text-center select-none"
                >
                  <span className="font-mono text-sm font-bold text-text-strong tracking-wide block">{badge}</span>
                  <span className="text-[10px] text-text-muted mt-1 block">[Placeholder Award]</span>
                </div>
              ))}
            </div>

            {/* Prominent Legal Safety Warning */}
            <div className="p-4 border-l-4 border-amber-500 bg-amber-500/5 rounded-r-lg max-w-4xl text-left">
              <p className="text-xs sm:text-sm text-amber-700 leading-relaxed font-medium">
                <strong>Important Compliance Note:</strong> List only awards, certifications, and recognitions your organization has actually received. Do not fabricate any award or achievement.
              </p>
            </div>
          </div>
        </Section>

        {/* 6. CTA Band */}
        <Section variant="gradient" containerSize="wide" className="relative overflow-hidden text-center">
          <div className="absolute inset-0 bg-ink/10 pointer-events-none" />
          <div className="w-full relative z-10 space-y-6">
            <span className="text-xs font-extrabold uppercase tracking-[0.3em] text-white/90 font-mono block">
              WORK WITH US
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-[46px] font-black text-white tracking-tight leading-tight">
              Let&apos;s create your success story.
            </h2>
            <div className="pt-4">
              <button
                onClick={() => setIsContactOpen(true)}
                className="bg-white hover:bg-slate-100 text-brand font-extrabold text-sm sm:text-base px-8 py-4 rounded-xl transition-all duration-300 shadow-md active:scale-95 cursor-pointer"
              >
                Start a Project
              </button>
            </div>
          </div>
        </Section>

      </main>

      {/* Footer */}
      <Footer />

      {/* Contact Modal */}
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} showToast={(msg, type) => {}} />
    </div>
  );
}
