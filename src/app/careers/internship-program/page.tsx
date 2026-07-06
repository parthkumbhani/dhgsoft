// src/app/careers/internship-program/page.tsx
"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight, CheckCircle2, ShieldCheck, Heart, Sparkles, Layers, BookOpen, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import CtaBand from "@/components/careers/CtaBand";
import { INTERN_STEPS, INTERN_TESTIMONIALS } from "@/lib/careers";
import { careersImages } from "@/lib/images/careersImages";

export default function InternshipProgramPage() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const highlights = [
    { title: "Real Projects", desc: "No fetching coffee. Write live PLC adapters and telemetry loops from day one." },
    { title: "1:1 Mentorship", desc: "Get paired directly with a senior Principal Systems Architect for daily reviews." },
    { title: "Hands-on Learning", desc: "Gain access to DHGsoft internal sandboxes, engineering academies, and libraries." },
    { title: "Networking", desc: "Connect with university cohorts and global industrial operations leaders." },
    { title: "Path to Full-Time", desc: "Top-performing interns receive direct full-time associate engineer offers." }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800 antialiased font-sans selection:bg-[#B4123F] selection:text-white">
      {/* Header */}
      <Header onContactClick={() => setIsContactOpen(true)} />

      <main className="relative pt-20">
        
        {/* Hero */}
        <section className="relative min-h-[460px] flex items-center bg-slate-950 text-white py-16 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src={careersImages.internHero.src}
              alt={careersImages.internHero.alt}
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
              <span className="text-brand-hot">Internship Program</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-black text-white tracking-tight leading-[1.05]">
              Internship Program
            </h1>
            <p className="text-slate-350 font-medium text-base sm:text-lg leading-relaxed max-w-2xl text-slate-300">
              Start your journey with real-world OT/IT projects.
            </p>
          </div>
        </section>

        {/* What You'll Do - Split Section */}
        <section className="bg-white py-16 md:py-24 border-b border-line relative bg-tech-grid">
          <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-[120px]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              <div className="lg:col-span-6 text-left space-y-6">
                <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#B4123F] font-mono block">
                  OWNERSHIP FROM DAY 1
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-text-strong tracking-tight leading-tight">
                  What You&apos;ll Do
                </h2>
                <p className="text-text-strong font-medium text-base sm:text-lg leading-relaxed">
                  Our interns don&apos;t fetch coffee — they work on real OT/IT projects alongside experienced engineers, with mentorship and ownership from day one.
                </p>
              </div>

              <div className="lg:col-span-6 relative h-[300px] sm:h-[400px] rounded-3xl overflow-hidden shadow-md border border-line">
                <Image
                  src={careersImages.internActivity.src}
                  alt={careersImages.internActivity.alt}
                  fill
                  className="object-cover"
                />
              </div>

            </div>
          </div>
        </section>

        {/* Program Highlights */}
        <section className="bg-mist py-16 md:py-24 border-b border-line relative bg-dot-matrix select-none">
          <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-[120px] space-y-12">
            <div className="text-left space-y-3">
              <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#B4123F] font-mono block">
                HIGHLIGHTS
              </span>
              <h2 className="text-3xl font-black text-text-strong tracking-tight">
                Why Intern at DHGsoft?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {highlights.map((item, i) => (
                <div key={i} className="bg-white border border-line rounded-2xl p-8 space-y-4 text-left hover:border-brand/40 transition-all duration-300">
                  <div className="h-10 w-10 bg-brand/5 border border-brand/10 text-brand rounded-xl flex items-center justify-center font-mono font-extrabold text-sm">
                    0{i + 1}
                  </div>
                  <h3 className="font-extrabold text-text-strong text-lg tracking-tight">{item.title}</h3>
                  <p className="text-text-muted text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who We're Looking For */}
        <section className="bg-white py-16 md:py-24 border-b border-line relative bg-tech-grid text-left">
          <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-[120px] max-w-4xl space-y-6">
            <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#B4123F] font-mono block">
              REQUIREMENTS
            </span>
            <h2 className="text-3xl font-black text-text-strong tracking-tight">
              Who We&apos;re Looking For
            </h2>
            <p className="text-text-strong font-medium text-base sm:text-lg leading-relaxed">
              Students and recent graduates in engineering, computer science, and related fields who are curious, driven, and eager to work on industrial technology.
            </p>
          </div>
        </section>

        {/* Program Structure Timeline */}
        <section className="bg-mist py-16 md:py-24 border-b border-line relative bg-dot-matrix">
          <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-[120px] space-y-12">
            <div className="text-left space-y-3">
              <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#B4123F] font-mono block">
                TIMELINE
              </span>
              <h2 className="text-3xl font-black text-text-strong tracking-tight">
                Program Structure
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-4 gap-8 text-left">
              {INTERN_STEPS.map((step, idx) => (
                <div key={idx} className="relative bg-white border border-line rounded-2xl p-6 space-y-4 hover:border-brand/40 transition-all duration-300">
                  <div className="h-10 w-10 rounded-full bg-brand-hot/10 border border-brand-hot/20 flex items-center justify-center text-brand-hot font-bold font-mono text-sm">
                    {idx + 1}
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-extrabold text-text-strong text-base tracking-tight">{step.phase}</h4>
                    <p className="text-text-muted text-xs leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Intern Experiences Testimonial cards */}
        <section className="bg-white py-16 md:py-24 border-b border-line relative bg-tech-grid">
          <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-[120px] space-y-12">
            <div className="text-left space-y-3">
              <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#B4123F] font-mono block">
                INTERN EXPERIENCES
              </span>
              <h2 className="text-3xl font-black text-text-strong tracking-tight">
                Cohort Feedback
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {INTERN_TESTIMONIALS.map((test, i) => (
                <div key={i} className="bg-slate-50 border border-line rounded-2xl p-8 flex flex-col justify-between text-left hover:border-brand/40 transition-all duration-300">
                  <p className="text-text-strong font-bold text-base italic leading-relaxed">
                    &ldquo;{test.quote}&rdquo;
                  </p>
                  
                  <div className="pt-6 border-t border-slate-200 mt-6 flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-brand/10 border border-brand/20 text-brand font-black text-sm flex items-center justify-center font-mono">
                      {test.initials}
                    </div>
                    <div>
                      <h4 className="font-extrabold text-text-strong text-xs">{test.name}</h4>
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider font-mono mt-0.5">{test.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 text-center">
              <span className="text-[11px] font-mono text-slate-400 block max-w-xl mx-auto leading-relaxed">
                * Note: Replace spotlight placeholders with real, consenting intern testimonials before publishing.
              </span>
            </div>
          </div>
        </section>

        {/* Crimson CTA band */}
        <CtaBand
          title="Start your journey with DHGsoft."
          buttonText="Apply / Submit CV"
          buttonHref="/careers/submit-cv"
        />

      </main>

      {/* Equal Opportunity Statement */}
      <div className="bg-slate-950 py-6 text-center border-t border-slate-900 select-none">
        <span className="text-[10px] text-slate-500 font-mono">
          [Add your equal-opportunity employer statement here.]
        </span>
      </div>

      {/* Footer */}
      <Footer />

      {/* Contact Modal */}
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} showToast={(msg, type) => {}} />
    </div>
  );
}
