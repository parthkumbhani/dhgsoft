// src/app/careers/learning-development/page.tsx
"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, ArrowRight, BookOpen, ShieldCheck, Heart, Sparkles, Award, Star, Compass } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import CtaBand from "@/components/careers/CtaBand";
import { careersImages } from "@/lib/images/careersImages";

export default function LearningDevelopmentPage() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const pathways = [
    {
      title: "Technical Mastery",
      desc: "Deepen skills across automation, data, cloud, AI, and security.",
      icon: Award
    },
    {
      title: "Industrial Domain",
      desc: "Learn the operations behind the technology. Master plant-floor logistics, pressure hydraulics, and cleanroom regulations.",
      icon: Star
    },
    {
      title: "Leadership Growth",
      desc: "Grow from engineer to leader. Manage multi-disciplinary delivery teams, architect solutions, or direct regional operations.",
      icon: Compass
    }
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
              src={careersImages.ldHero.src}
              alt={careersImages.ldHero.alt}
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
              <span className="text-brand-hot">Learning &amp; Development</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-black text-white tracking-tight leading-[1.05]">
              Learning &amp; Development
            </h1>
            <p className="text-slate-350 font-medium text-base sm:text-lg leading-relaxed max-w-2xl text-slate-300">
              Continuous training, certifications, and leadership growth.
            </p>
          </div>
        </section>

        {/* L&D Philosophy split grid */}
        <section className="bg-white py-16 md:py-24 border-b border-line relative bg-tech-grid">
          <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-[120px]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              <div className="lg:col-span-6 text-left space-y-6">
                <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#B4123F] font-mono block">
                  GROWTH & CURIOSITY
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-text-strong tracking-tight leading-tight">
                  Our L&amp;D Philosophy
                </h2>
                <p className="text-text-strong font-medium text-base sm:text-lg leading-relaxed">
                  We believe great engineers never stop learning. We invest in continuous growth — technical, domain, and leadership — so our people keep getting better at solving hard problems.
                </p>
              </div>

              <div className="lg:col-span-6 relative h-[300px] sm:h-[400px] rounded-3xl overflow-hidden shadow-md border border-line">
                <Image
                  src={careersImages.ldPhilosophy.src}
                  alt={careersImages.ldPhilosophy.alt}
                  fill
                  className="object-cover"
                />
              </div>

            </div>
          </div>
        </section>

        {/* Learning Pathways */}
        <section className="bg-mist py-16 md:py-24 border-b border-line relative bg-dot-matrix select-none">
          <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-[120px] space-y-12">
            <div className="text-left space-y-3">
              <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#B4123F] font-mono block">
                PATHWAYS
              </span>
              <h2 className="text-3xl font-black text-text-strong tracking-tight">
                Our Learning Pathways
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pathways.map((path, i) => {
                const Icon = path.icon;
                return (
                  <div key={i} className="bg-white border border-line rounded-2xl p-8 space-y-4 text-left hover:border-brand/40 transition-all duration-300">
                    <div className="h-10 w-10 bg-brand/5 border border-brand/10 text-brand rounded-xl flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-extrabold text-text-strong text-lg tracking-tight">{path.title}</h3>
                    <p className="text-text-muted text-xs sm:text-sm leading-relaxed">{path.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Certifications and Mentorship sections */}
        <section className="bg-white py-16 md:py-24 border-b border-line relative bg-tech-grid text-left">
          <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-[120px] grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Certs */}
            <div className="space-y-4">
              <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#B4123F] font-mono block">
                CREDENTIALS
              </span>
              <h3 className="text-2xl font-black text-text-strong tracking-tight">Certifications Support</h3>
              <p className="text-text-muted text-sm sm:text-base leading-relaxed">
                We support relevant industry certifications across cloud, automation, data, and security. Keep your technical edge sharp with sponsored training and registration coordinate budgets [PLACEHOLDER].
              </p>
            </div>

            {/* Mentorship */}
            <div className="space-y-4">
              <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-emerald-600 font-mono block">
                GUIDANCE
              </span>
              <h3 className="text-2xl font-black text-text-strong tracking-tight">Mentorship &amp; Coaching</h3>
              <p className="text-text-muted text-sm sm:text-base leading-relaxed">
                Every engineer has access to mentors and coaches who help them grow. From architectural review councils to monthly career direction logs, you are never charting your path alone.
              </p>
            </div>
          </div>
        </section>

        {/* A Culture of Learning band */}
        <section className="bg-slate-900 border-b border-slate-800 py-16 text-white text-center relative overflow-hidden select-none">
          <div className="absolute inset-0 bg-tech-grid opacity-10 pointer-events-none" />
          <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-[120px] relative z-10 space-y-4 max-w-3xl">
            <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-brand-hot font-mono block">
              OUR DNA
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-tight">
              A Culture of Learning
            </h2>
            <p className="text-slate-350 text-sm sm:text-base leading-relaxed text-slate-300">
              Learning isn&apos;t a program — it&apos;s how we work.
            </p>
          </div>
        </section>

        {/* Crimson CTA band */}
        <CtaBand
          title="Grow your career with DHGsoft."
          buttonText="View Openings"
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
