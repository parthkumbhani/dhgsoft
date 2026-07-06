// src/components/industries/IndustryPage.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  ArrowRight, 
  ChevronRight, 
  Activity, 
  Award, 
  Factory, 
  FlaskConical, 
  Car, 
  Cpu, 
  UtensilsCrossed, 
  TestTubes, 
  Fuel, 
  Zap, 
  Mountain, 
  Droplets, 
  PackageOpen, 
  ServerCog, 
  HardHat, 
  Sprout 
} from "lucide-react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import DigitalOverlay from "./DigitalOverlay";
import ConnectedOperations from "./ConnectedOperations";
import { IndustryData } from "@/lib/industries";

const iconMap: Record<string, React.ComponentType<any>> = {
  Factory,
  FlaskConical,
  Car,
  Cpu,
  UtensilsCrossed,
  TestTubes,
  Fuel,
  Zap,
  Mountain,
  Droplets,
  PackageOpen,
  ServerCog,
  HardHat,
  Sprout
};

interface IndustryPageProps {
  data: IndustryData;
}

export default function IndustryPage({ data }: IndustryPageProps) {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const IndustryIcon = iconMap[data.iconName] || Factory;

  return (
    <div className="min-h-screen bg-white text-slate-800 antialiased font-sans selection:bg-[#B4123F] selection:text-white">
      {/* 1) Sticky Header */}
      <Header onContactClick={() => setIsContactOpen(true)} />

      <main className="relative pt-20">
        
        {/* 2) Hero Section with Real Photo & Digital Intelligence Overlay */}
        <section className="relative bg-ink overflow-hidden min-h-[580px] flex items-center border-b border-slate-900">
          {/* Background Photo */}
          <div className="absolute inset-0 z-0">
            <Image
              src={data.image.src}
              alt={data.image.alt}
              fill
              className="object-cover opacity-35"
              priority
            />
            {/* Gradient overlays to ensure text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-transparent pointer-events-none z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/20 pointer-events-none z-10" />
          </div>

          {/* Interactive Digital Intelligence Overlay */}
          <DigitalOverlay nodes={data.hudNodes} />
          
          <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-[120px] w-full py-16 md:py-20 relative z-30">
            {/* Breadcrumb */}
            <div className="flex items-center gap-1 text-slate-400 text-xs sm:text-sm font-semibold tracking-wide mb-6">
              <Link href="/industries" className="hover:text-white transition-colors">
                Industries
              </Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-brand-hot">{data.title}</span>
            </div>

            <div className="max-w-3xl space-y-6 text-left">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center h-10 w-10 rounded-xl bg-brand/20 text-brand-hot border border-brand/30">
                  <IndustryIcon className="w-5.5 h-5.5" />
                </div>
                <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-brand-hot font-mono">
                  {data.category}
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-[50px] font-black text-white tracking-tight leading-[1.1]">
                {data.title}
              </h1>
              <p className="text-slate-200 font-medium text-base sm:text-lg leading-relaxed max-w-2xl">
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
                  href="/industries"
                  className="border border-slate-700 hover:border-slate-500 text-white font-extrabold text-sm sm:text-base px-8 py-4 rounded-xl transition-all duration-300 active:scale-95"
                >
                  Explore Industries
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 3) The Landscape Overview */}
        <section className="bg-mist py-16 md:py-20 border-b border-line relative bg-dot-matrix">
          <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-[120px]">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-brand font-mono block">
                THE LANDSCAPE
              </span>
              <p className="text-text-strong font-bold text-xl sm:text-2xl sm:leading-relaxed">
                &ldquo;{data.landscape}&rdquo;
              </p>
            </div>
          </div>
        </section>

        {/* 4) Industry Challenges */}
        <section className="bg-white py-16 md:py-20 border-b border-line relative bg-tech-grid">
          <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-[120px] space-y-12">
            <div className="text-left">
              <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-brand font-mono block">
                INDUSTRY CHALLENGES
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {data.challenges.map((challenge, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-line rounded-2xl p-8 text-left space-y-4 shadow-sm hover:border-brand/30 transition-all duration-300 flex items-start gap-5 group"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-red-500/5 text-red-600 border border-red-500/10 shrink-0">
                    <span className="font-mono text-sm font-extrabold">0{idx + 1}</span>
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-extrabold text-text-strong text-lg tracking-tight leading-snug">
                      {challenge}
                    </h4>
                    <p className="text-text-muted text-sm leading-relaxed">
                      Critical bottleneck impacting production yield, operational costs, and lifecycle security targets.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5) How DHGsoft Helps */}
        <section className="bg-mist py-16 md:py-20 border-b border-line relative bg-dot-matrix">
          <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-[120px] space-y-12">
            <div className="text-left">
              <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-emerald-600 font-mono block">
                HOW WE HELP
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {data.howWeHelp.map((sol, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-line rounded-2xl p-8 text-left space-y-4 shadow-sm hover:border-brand/30 transition-all duration-300 flex items-start gap-5 group"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-emerald-500/5 text-emerald-600 border border-emerald-500/10 shrink-0">
                    <span className="font-mono text-sm font-extrabold">0{idx + 1}</span>
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-extrabold text-text-strong text-lg tracking-tight leading-snug">
                      {sol}
                    </h4>
                    <p className="text-text-muted text-sm leading-relaxed">
                      Tailored architectural configuration, platform implementation, and full system deployment backed by SLA coverage.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6) Connected Industry Diagram */}
        <ConnectedOperations
          industryName={data.title}
          assets={data.connectedAssets}
          caption={`Logical schema of DHGsoft's data acquisition, processing, and visualization pathways linking field assets to business layers in ${data.title}.`}
        />

        {/* 7) Key Use Cases */}
        <section className="bg-white py-16 md:py-20 border-b border-line relative bg-tech-grid">
          <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-[120px] space-y-8">
            <div className="text-left">
              <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-brand font-mono block">
                KEY USE CASES
              </span>
            </div>

            <div className="flex flex-wrap gap-3 text-left">
              {data.useCases.map((uc, idx) => (
                <span
                  key={idx}
                  className="bg-mist border border-line rounded-xl px-6 py-3.5 text-sm font-bold text-text-strong shadow-sm hover:border-brand/40 transition-colors cursor-default"
                >
                  {uc}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* 8) Business Outcomes */}
        <section className="bg-mist py-16 md:py-20 border-b border-line relative bg-dot-matrix">
          <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-[120px] space-y-12">
            <div className="text-left">
              <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-brand font-mono block">
                TARGET BUSINESS OUTCOMES
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
              {data.outcomes.map((outcome, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-line rounded-xl p-6 shadow-sm flex flex-col justify-between hover:border-brand/40 transition-all duration-300"
                >
                  <div className="space-y-4">
                    <div className="w-10 h-10 rounded-lg bg-brand/5 text-brand flex items-center justify-center border border-brand/10">
                      <Award className="w-5 h-5 text-brand" />
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

        {/* 9) Relevant Capabilities */}
        <section className="bg-white py-16 md:py-20 border-b border-line relative bg-tech-grid">
          <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-[120px] space-y-12">
            <div className="text-left">
              <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-brand font-mono block">
                RELEVANT CAPABILITIES
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
              {data.relevantCapabilities.map((cap, idx) => (
                <Link
                  key={idx}
                  href={cap.href}
                  className="bg-white border border-line rounded-xl p-6 shadow-sm hover:border-brand/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-brand/5 text-brand shrink-0">
                      <Activity className="w-5 h-5" />
                    </div>
                    <h4 className="font-extrabold text-text-strong text-base tracking-tight leading-snug group-hover:text-brand transition-colors">
                      {cap.name}
                    </h4>
                  </div>

                  <div className="pt-6 flex items-center gap-1.5 text-brand font-bold text-xs tracking-wide uppercase">
                    <span>Capabilities Page</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* 10) Why DHGsoft */}
        <section className="bg-mist py-16 md:py-20 border-b border-line relative bg-dot-matrix">
          <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-[120px] space-y-12">
            <div className="text-left">
              <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-brand font-mono block">
                WHY DHGSOFT
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
              <div className="bg-white p-6 rounded-xl border border-line space-y-2">
                <h4 className="font-extrabold text-text-strong text-base sm:text-lg">Industrial Domain Knowledge</h4>
                <p className="text-text-muted text-xs sm:text-sm leading-relaxed">
                  Deeply specialized systems engineers who understand plant floor hardware, PLC networks, and SCADA infrastructure.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-line space-y-2">
                <h4 className="font-extrabold text-text-strong text-base sm:text-lg">End-to-End Expertise</h4>
                <p className="text-text-muted text-xs sm:text-sm leading-relaxed">
                  From consulting and digital twin blueprint design to secure network execution, integration, and managed support.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-line space-y-2">
                <h4 className="font-extrabold text-text-strong text-base sm:text-lg">Connected Intelligence</h4>
                <p className="text-text-muted text-xs sm:text-sm leading-relaxed">
                  Advanced edge analytics, clean dashboards, and machine intelligence connecting the shop floor to enterprise IT systems.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-line space-y-2">
                <h4 className="font-extrabold text-text-strong text-base sm:text-lg">Customer-Centric Delivery</h4>
                <p className="text-text-muted text-xs sm:text-sm leading-relaxed">
                  We support the automated configurations we build with transparent SLAs, change validation, and round-the-clock monitoring.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 11) Related Industries */}
        <section className="bg-white py-16 md:py-20 border-b border-line relative bg-tech-grid">
          <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-[120px] space-y-12">
            <div className="text-left">
              <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-brand font-mono block">
                RELATED INDUSTRIES
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {data.related.map((rel, idx) => (
                <Link
                  key={idx}
                  href={rel.href}
                  className="bg-mist border border-line rounded-xl p-6 shadow-sm flex items-center justify-between group hover:border-brand/40 hover:-translate-y-0.5 transition-all duration-300"
                >
                  <span className="font-extrabold text-text-strong tracking-tight">{rel.name}</span>
                  <ArrowRight className="w-5 h-5 text-brand group-hover:translate-x-1.5 transition-transform" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* 12) CTA Band */}
        <section className="relative overflow-hidden bg-gradient-to-r from-brand-hot via-brand to-brand-deep py-20 text-center">
          <div className="absolute inset-0 bg-ink/10 pointer-events-none" />
          <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-[120px] relative z-10 space-y-6">
            <span className="text-xs font-extrabold uppercase tracking-[0.3em] text-white/90 font-mono block">
              LET&apos;S BUILD
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-[46px] font-black text-white tracking-tight leading-tight">
              Ready to transform your {data.title.replace("Management", "").replace("(CPG)", "").trim()} operations?
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
