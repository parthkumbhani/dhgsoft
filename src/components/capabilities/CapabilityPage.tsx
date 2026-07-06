// src/components/capabilities/CapabilityPage.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronRight, Activity, Cpu, ShieldAlert, Award } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import ProcessJourney from "./ProcessJourney";
import { CapabilityData } from "@/lib/capabilities";

// Import signature components
import IndustrialDigitalTransformationSig from "./signatures/IndustrialDigitalTransformationSig";
import OtItIntegrationSig from "./signatures/OtItIntegrationSig";
import IndustrialDataPlatformsSig from "./signatures/IndustrialDataPlatformsSig";
import AiAnalyticsSig from "./signatures/AiAnalyticsSig";
import IiotSig from "./signatures/IiotSig";
import DigitalEngineeringSig from "./signatures/DigitalEngineeringSig";
import EnterpriseApplicationsSig from "./signatures/EnterpriseApplicationsSig";
import CloudInfrastructureSig from "./signatures/CloudInfrastructureSig";
import CybersecuritySig from "./signatures/CybersecuritySig";
import ManagedServicesSig from "./signatures/ManagedServicesSig";

const signatureMap: Record<string, React.ComponentType> = {
  "industrial-digital-transformation": IndustrialDigitalTransformationSig,
  "ot-it-integration": OtItIntegrationSig,
  "industrial-data-platforms": IndustrialDataPlatformsSig,
  "ai-analytics": AiAnalyticsSig,
  "iiot": IiotSig,
  "digital-engineering": DigitalEngineeringSig,
  "enterprise-applications": EnterpriseApplicationsSig,
  "cloud-infrastructure": CloudInfrastructureSig,
  "cybersecurity": CybersecuritySig,
  "managed-services": ManagedServicesSig
};

interface CapabilityPageProps {
  data: CapabilityData;
}

export default function CapabilityPage({ data }: CapabilityPageProps) {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const SignatureComp = signatureMap[data.signatureKey] || (() => null);

  return (
    <div className="min-h-screen bg-white text-slate-800 antialiased font-sans selection:bg-[#B4123F] selection:text-white">
      {/* 1) Sticky Header */}
      <Header onContactClick={() => setIsContactOpen(true)} />

      <main className="relative pt-20">
        
        {/* 2) Hero Section with Grid/Gradient Pattern & Signature SVG */}
        <section className="relative bg-ink overflow-hidden min-h-[550px] flex items-center border-b border-slate-900">
          {/* Subtle grid pattern overlay */}
          <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />
          <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] rounded-full bg-brand/10 blur-[120px] pointer-events-none" />
          
          <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-[120px] w-full py-16 md:py-20 relative z-10">
            {/* Breadcrumb */}
            <div className="flex items-center gap-1 text-slate-400 text-xs sm:text-sm font-semibold tracking-wide mb-6">
              <Link href="/capabilities" className="hover:text-white transition-colors">
                Capabilities
              </Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-brand-hot">{data.title}</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Column Content */}
              <div className="lg:col-span-7 space-y-6 text-left">
                <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-brand-hot font-mono block">
                  {data.category}
                </span>
                <h1 className="text-3xl sm:text-4xl lg:text-[50px] font-black text-white tracking-tight leading-[1.1]">
                  {data.title}
                </h1>
                <p className="text-slate-300 font-medium text-base sm:text-lg leading-relaxed max-w-2xl">
                  {data.sub}
                </p>
                <div className="pt-4 flex flex-wrap gap-4">
                  <button
                    onClick={() => setIsContactOpen(true)}
                    className="bg-brand hover:bg-brand-hot text-white font-extrabold text-sm sm:text-base px-8 py-4 rounded-xl transition-all duration-300 shadow-md active:scale-95 cursor-pointer"
                  >
                    Talk to an Expert
                  </button>
                  <Link
                    href="/capabilities"
                    className="border border-slate-700 hover:border-slate-500 text-white font-extrabold text-sm sm:text-base px-8 py-4 rounded-xl transition-all duration-300 active:scale-95"
                  >
                    Explore Capabilities
                  </Link>
                </div>
              </div>

              {/* Right Column: Signature Visual */}
              <div className="lg:col-span-5 flex justify-center lg:justify-end">
                <SignatureComp />
              </div>
            </div>
          </div>
        </section>

        {/* 3) Challenge → Solution section */}
        <section className="bg-mist py-16 md:py-20 border-b border-line relative bg-dot-matrix">
          <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-[120px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative">
              {/* Challenge column */}
              <div className="bg-white border border-line rounded-2xl p-8 text-left space-y-4 shadow-sm relative">
                <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#B4123F] font-mono block">
                  THE CHALLENGE
                </span>
                <p className="text-text-strong font-bold text-lg sm:text-xl leading-relaxed">
                  {data.challenge}
                </p>
              </div>

              {/* Solution column */}
              <div className="bg-white border border-line rounded-2xl p-8 text-left space-y-4 shadow-sm relative">
                <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-emerald-600 font-mono block">
                  OUR SOLUTION
                </span>
                <p className="text-text-strong font-bold text-lg sm:text-xl leading-relaxed">
                  {data.solution}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4) What's Included */}
        <section className="bg-white py-16 md:py-20 border-b border-line relative bg-tech-grid">
          <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-[120px] space-y-12">
            <div className="text-left">
              <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-brand font-mono block">
                WHAT&apos;S INCLUDED
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.keyCapabilities.map((cap, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-line rounded-xl p-6 shadow-sm hover:border-brand/40 hover:-translate-y-1 transition-all duration-300 flex items-start gap-4 text-left"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-brand/5 text-brand shrink-0">
                    <Activity className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-text-strong text-base tracking-tight leading-snug">{cap}</h4>
                    <p className="text-text-muted text-xs sm:text-sm mt-1 leading-relaxed">
                      Custom configured deployment standard backed by system support SLA framework.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5) How It Works Process Section */}
        <section className="bg-mist py-16 md:py-20 border-b border-line relative bg-dot-matrix">
          <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-[120px] space-y-12">
            <div className="text-left">
              <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-brand font-mono block">
                HOW IT WORKS
              </span>
            </div>
            <ProcessJourney steps={data.steps} />
          </div>
        </section>

        {/* 6) Large scale signature display section */}
        <section className="bg-ink text-white py-20 border-b border-slate-900 overflow-hidden relative">
          <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />
          <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-[120px] grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6 text-left">
              <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-brand-hot font-mono block">
                SIGNATURE VISUALIZATION
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight leading-tight text-white">
                Engineered Operational Integrity
              </h3>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                This diagram illustrates the logical pipeline, sequence layers, and feedback systems built into our {data.title} delivery structure.
              </p>
            </div>
            <div className="lg:col-span-6 flex justify-center">
              <div className="scale-110 lg:scale-125">
                <SignatureComp />
              </div>
            </div>
          </div>
        </section>

        {/* 7) Business Outcomes */}
        <section className="bg-white py-16 md:py-20 border-b border-line relative bg-tech-grid">
          <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-[120px] space-y-12">
            <div className="text-left">
              <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-brand font-mono block">
                BUSINESS OUTCOMES
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
              {data.outcomes.map((outcome, idx) => (
                <div
                  key={idx}
                  className="bg-mist border border-line rounded-xl p-6 shadow-sm flex flex-col justify-between hover:border-brand/40 transition-all duration-300"
                >
                  <div className="space-y-4">
                    <div className="w-10 h-10 rounded-lg bg-brand/5 text-brand flex items-center justify-center">
                      <Award className="w-5 h-5" />
                    </div>
                    <h4 className="font-extrabold text-text-strong text-lg tracking-tight leading-snug">
                      {outcome}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8) Where It Applies (Industries) */}
        <section className="bg-mist py-16 md:py-20 border-b border-line relative bg-dot-matrix">
          <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-[120px] space-y-8">
            <div className="text-left">
              <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-brand font-mono block">
                INDUSTRY APPLICATIONS
              </span>
            </div>

            <div className="flex flex-wrap gap-3">
              {data.industries.map((ind, idx) => (
                <span
                  key={idx}
                  className="bg-white border border-line rounded-full px-6 py-2 text-sm font-bold text-text-strong shadow-sm hover:border-brand/40 transition-colors"
                >
                  {ind}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* 9) Why DHGsoft */}
        <section className="bg-white py-16 md:py-20 border-b border-line relative bg-tech-grid">
          <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-[120px] space-y-12">
            <div className="text-left">
              <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-brand font-mono block">
                WHY DHGSOFT
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
              <div className="space-y-2">
                <h4 className="font-extrabold text-text-strong text-base sm:text-lg">End-to-End Expertise</h4>
                <p className="text-text-muted text-xs sm:text-sm leading-relaxed">
                  From consulting and architecture to execution and managed services.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-extrabold text-text-strong text-base sm:text-lg">Industrial Domain Knowledge</h4>
                <p className="text-text-muted text-xs sm:text-sm leading-relaxed">
                  Engineers who understand machinery, PLC cycles, and plant environments.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-extrabold text-text-strong text-base sm:text-lg">Technology-Agnostic</h4>
                <p className="text-text-muted text-xs sm:text-sm leading-relaxed">
                  We integrate the platforms that best fit your operational realities.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-extrabold text-text-strong text-base sm:text-lg">Customer-Centric Delivery</h4>
                <p className="text-text-muted text-xs sm:text-sm leading-relaxed">
                  We support the systems we build with transparent SLAs and round-the-clock teams.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 10) Related Capabilities */}
        <section className="bg-mist py-16 md:py-20 border-b border-line relative bg-dot-matrix">
          <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-[120px] space-y-12">
            <div className="text-left">
              <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-brand font-mono block">
                RELATED CAPABILITIES
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {data.related.map((rel, idx) => (
                <Link
                  key={idx}
                  href={rel.href}
                  className="bg-white border border-line rounded-xl p-6 shadow-sm flex items-center justify-between group hover:border-brand/40 transition-all duration-300"
                >
                  <span className="font-extrabold text-text-strong tracking-tight">{rel.name}</span>
                  <ArrowRight className="w-5 h-5 text-brand group-hover:translate-x-1.5 transition-transform" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* 11) CTA Band */}
        <section className="relative overflow-hidden bg-gradient-to-r from-brand-hot via-brand to-brand-deep py-20 text-center">
          <div className="absolute inset-0 bg-ink/10 pointer-events-none" />
          <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-[120px] relative z-10 space-y-6">
            <span className="text-xs font-extrabold uppercase tracking-[0.3em] text-white/90 font-mono block">
              LET&apos;S BUILD
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-[46px] font-black text-white tracking-tight leading-tight">
              Ready to put {data.title} to work?
            </h2>
            <div className="pt-4">
              <button
                onClick={() => setIsContactOpen(true)}
                className="bg-white hover:bg-slate-100 text-brand font-extrabold text-sm sm:text-base px-8 py-4 rounded-xl transition-all duration-300 shadow-md active:scale-95 cursor-pointer"
              >
                Schedule a Consultation
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
