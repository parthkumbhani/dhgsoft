// src/app/insights/page.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronRight, Cpu, Layers, BookOpen } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import SubscribeBand from "@/components/insights/SubscribeBand";

export default function InsightsLandingPage() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-800 antialiased font-sans selection:bg-[#B4123F] selection:text-white">
      {/* Header */}
      <Header onContactClick={() => setIsContactOpen(true)} />

      <main className="relative pt-20">
        
        {/* Hero */}
        <section className="relative bg-ink overflow-hidden py-20 border-b border-slate-900">
          <div className="absolute inset-0 bg-tech-grid opacity-25 pointer-events-none" />
          <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-brand/10 blur-[130px] pointer-events-none" />
          
          <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-[120px] relative z-10 text-left space-y-6">
            <span className="text-xs font-extrabold uppercase tracking-[0.3em] text-brand-hot font-mono block">
              KNOWLEDGE HUB
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-black text-white tracking-tight leading-[1.05] max-w-4xl">
              DHGsoft Insights
            </h1>
            <p className="text-slate-300 font-medium text-base sm:text-lg leading-relaxed max-w-2xl">
              Explore deep technical perspectives, standards guides, and real-world impact logs on industrial digitalization.
            </p>
          </div>
        </section>

        {/* Directory Hub Cards */}
        <section className="bg-mist py-16 md:py-24 relative bg-dot-matrix">
          <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-[120px] space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Hub 1: AI & Automation */}
              <Link
                href="/insights/ai-automation"
                className="group flex flex-col justify-between bg-white border border-line rounded-2xl p-8 shadow-sm hover:shadow-xl hover:border-brand/40 hover:-translate-y-1.5 transition-all duration-300 text-left"
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-brand/5 text-brand border border-brand/10">
                    <Cpu className="w-6 h-6" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-extrabold text-text-strong text-xl tracking-tight leading-snug group-hover:text-brand transition-colors">
                      AI & Automation
                    </h3>
                    <p className="text-text-muted text-sm leading-relaxed">
                      Deep learning, predictive maintenance models, and machine vision setups optimizing modern plant operations.
                    </p>
                  </div>
                </div>
                <div className="pt-8 border-t border-slate-100 mt-8 flex items-center justify-between text-brand font-extrabold text-xs tracking-wider uppercase">
                  <span>Enter Hub</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </div>
              </Link>

              {/* Hub 2: Technology Ecosystem */}
              <Link
                href="/insights/technology-ecosystem"
                className="group flex flex-col justify-between bg-white border border-line rounded-2xl p-8 shadow-sm hover:shadow-xl hover:border-brand/40 hover:-translate-y-1.5 transition-all duration-300 text-left"
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-brand/5 text-brand border border-brand/10">
                    <Layers className="w-6 h-6" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-extrabold text-text-strong text-xl tracking-tight leading-snug group-hover:text-brand transition-colors">
                      Technology Ecosystem
                    </h3>
                    <p className="text-text-muted text-sm leading-relaxed">
                      Unified Namespace architectures, OT/IT networking, industrial data platform criteria, and edge configurations.
                    </p>
                  </div>
                </div>
                <div className="pt-8 border-t border-slate-100 mt-8 flex items-center justify-between text-brand font-extrabold text-xs tracking-wider uppercase">
                  <span>Enter Hub</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </div>
              </Link>

              {/* Hub 3: Case Studies */}
              <Link
                href="/insights/case-studies"
                className="group flex flex-col justify-between bg-white border border-line rounded-2xl p-8 shadow-sm hover:shadow-xl hover:border-brand/40 hover:-translate-y-1.5 transition-all duration-300 text-left"
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-brand/5 text-brand border border-brand/10">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-extrabold text-text-strong text-xl tracking-tight leading-snug group-hover:text-brand transition-colors">
                      Enterprise Case Studies
                    </h3>
                    <p className="text-text-muted text-sm leading-relaxed">
                      Anonymized execution logs mapping actual yield gains, downtime reduction, and SCADA stability metrics.
                    </p>
                  </div>
                </div>
                <div className="pt-8 border-t border-slate-100 mt-8 flex items-center justify-between text-brand font-extrabold text-xs tracking-wider uppercase">
                  <span>View Studies</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </div>
              </Link>

            </div>
          </div>
        </section>

        {/* Subscribe Strip */}
        <SubscribeBand />

        {/* Bottom Banner */}
        <section className="relative overflow-hidden bg-gradient-to-r from-brand-hot via-brand to-brand-deep py-20 text-center">
          <div className="absolute inset-0 bg-ink/10 pointer-events-none" />
          <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-[120px] relative z-10 space-y-6">
            <span className="text-xs font-extrabold uppercase tracking-[0.3em] text-white/90 font-mono block">
              LET&apos;S BUILD
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-[46px] font-black text-white tracking-tight leading-tight">
              Designing your digital transformation story?
            </h2>
            <div className="pt-4">
              <button
                onClick={() => setIsContactOpen(true)}
                className="bg-white hover:bg-slate-100 text-brand font-extrabold text-sm sm:text-base px-8 py-4 rounded-xl transition-all duration-300 shadow-md active:scale-95 cursor-pointer"
              >
                Talk to an Expert
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
