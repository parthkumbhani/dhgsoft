// src/components/capabilities/CapabilityTemplate.tsx
"use client";
import { Section } from "@/components/ui/Section";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronRight, Activity, Award, CheckCircle, Shield } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import ProcessJourney from "./ProcessJourney";
import CapabilitySwitcher from "./CapabilitySwitcher";
import { CapabilityData, CAPABILITIES_DATA } from "@/lib/capabilities";

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

interface CapabilityTemplateProps {
  data: CapabilityData;
}

export default function CapabilityTemplate({ data }: CapabilityTemplateProps) {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const SignatureComp = signatureMap[data.signatureKey] || (() => null);

  // Map industry display name to route slug helper
  const getIndustrySlug = (name: string) => {
    const slugMap: Record<string, string> = {
      "Industrial Manufacturing": "industrial-manufacturing",
      "Life Sciences": "life-sciences",
      "Automotive": "automotive",
      "Semiconductor": "semiconductor",
      "Food & Beverages": "food-beverages",
      "Chemical Manufacturing": "chemical-manufacturing",
      "Oil & Gas": "oil-gas",
      "Power & Utilities": "power-utilities",
      "Mining & Metals": "mining-metals",
      "Water & Wastewater Management": "water-wastewater",
      "Consumer Packaged Goods": "consumer-packaged-goods",
      "Data Centres": "data-centres",
      "EPC": "epc",
      "Agriculture": "agriculture"
    };
    return slugMap[name] || "industrial-manufacturing";
  };

  // Find related capabilities' full data to retrieve their hero photos
  const getRelatedCardData = (relName: string) => {
    const found = Object.values(CAPABILITIES_DATA).find(
      (c) => c.title.toLowerCase() === relName.toLowerCase() || c.title.includes(relName)
    );
    return found ? { src: found.heroImage.src, alt: found.heroImage.alt } : null;
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 antialiased font-sans selection:bg-[#B4123F] selection:text-white">
      {/* Header */}
      <Header onContactClick={() => setIsContactOpen(true)} />

      <main className="relative pt-20">
        
        {/* Capability Switcher */}
        <CapabilitySwitcher currentSlug={data.slug} />

        {/* 1) Photo Hero with Split Layout */}
        <Section variant="ink" containerSize="wide" className="relative text-white overflow-hidden min-h-[550px] flex items-center border-b border-slate-900 select-none">
          <div className="absolute inset-0 bg-tech-grid opacity-15 pointer-events-none" />
          <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] rounded-full bg-brand/10 blur-[120px] pointer-events-none" />

          <div className="w-full py-16 md:py-20 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Left text area */}
              <div className="lg:col-span-6 space-y-6 text-left">
                {/* Breadcrumbs */}
                <div className="flex items-center gap-1 text-slate-400 text-xs sm:text-sm font-semibold tracking-wide mb-2">
                  <Link href="/capabilities" className="hover:text-white transition-colors">
                    Capabilities
                  </Link>
                  <ChevronRight className="w-3.5 h-3.5" />
                  <span className="text-brand-hot font-bold">{data.title}</span>
                </div>

                <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-brand-hot font-mono block">
                  {data.category}
                </span>
                <h1 className="text-3xl sm:text-4xl lg:text-[48px] font-black text-white tracking-tight leading-[1.1]">
                  {data.title}
                </h1>
                <p className="text-slate-300 font-medium text-base sm:text-lg leading-relaxed max-w-xl">
                  {data.sub}
                </p>
                <div className="pt-4 flex flex-wrap gap-4">
                  <button
                    onClick={() => setIsContactOpen(true)}
                    className="bg-brand hover:bg-brand-hot text-white font-extrabold text-xs sm:text-sm px-6 py-3.5 rounded-xl transition-all duration-300 shadow-md active:scale-95 cursor-pointer uppercase tracking-wider"
                  >
                    Talk to an Expert
                  </button>
                  <Link
                    href="/capabilities"
                    className="border border-slate-700 hover:border-slate-500 text-white font-extrabold text-xs sm:text-sm px-6 py-3.5 rounded-xl transition-all duration-300 active:scale-95 uppercase tracking-wider text-center"
                  >
                    All Capabilities
                  </Link>
                </div>
              </div>

              {/* Right image display */}
              <div className="lg:col-span-6 relative h-[300px] sm:h-[420px] rounded-3xl overflow-hidden shadow-xl border border-slate-800">
                <Image
                  src={data.heroImage.src}
                  alt={data.heroImage.alt}
                  fill
                  className="object-cover opacity-80"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                
                {/* SVG Signature visual inset indicator badge */}
                <div className="absolute bottom-6 right-6 h-16 w-16 bg-slate-950/90 border border-slate-800 rounded-full flex items-center justify-center backdrop-blur-sm shadow-md animate-pulse">
                  <Activity className="w-6 h-6 text-brand-hot" />
                </div>
              </div>

            </div>
          </div>
        </Section>

        {/* 2) Challenge → Solution Section with Split Image row */}
        <Section variant="white" containerSize="wide" className="bg-white border-b border-line relative bg-tech-grid text-left">
          <div className="w-full relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              <div className="lg:col-span-6 space-y-8">
                {/* Challenge Block */}
                <div className="space-y-3">
                  <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#B4123F] font-mono block">
                    THE CHALLENGE
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-text-strong tracking-tight">
                    Trapped Data & Siloed Operations
                  </h3>
                  <p className="text-text-muted text-sm sm:text-base leading-relaxed">
                    {data.challenge}
                  </p>
                </div>

                {/* Solution Block */}
                <div className="space-y-3 pt-6 border-t border-slate-100">
                  <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-emerald-600 font-mono block">
                    OUR SOLUTION
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-text-strong tracking-tight">
                    Secure, Intelligent Operations
                  </h3>
                  <p className="text-text-muted text-sm sm:text-base leading-relaxed">
                    {data.solution}
                  </p>
                </div>
              </div>

              {/* Challenge photo column */}
              <div className="lg:col-span-6 relative h-[300px] sm:h-[400px] rounded-3xl overflow-hidden shadow-md border border-line">
                <Image
                  src={data.challengeImage.src}
                  alt={data.challengeImage.alt}
                  fill
                  className="object-cover"
                />
              </div>

            </div>
          </div>
        </Section>

        {/* 3) What's Included & Grid with Supporting Photo Block */}
        <Section variant="mist" containerSize="wide" className=" border-b border-line relative bg-dot-matrix text-left">
          <div className="w-full relative z-10 space-y-12">
            
            <div className="space-y-3">
              <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-brand font-mono block">
                WHAT&apos;S INCLUDED
              </span>
              <h2 className="text-3xl font-black text-text-strong tracking-tight">
                Key Technical Coordinates
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              {/* Image side block */}
              <div className="lg:col-span-4 relative h-[300px] lg:h-[440px] rounded-2xl overflow-hidden border border-line shadow-sm">
                <Image
                  src={data.featureImage.src}
                  alt={data.featureImage.alt}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Cards block */}
              <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {data.keyCapabilities.map((cap, idx) => (
                  <div
                    key={idx}
                    className="bg-white border border-line rounded-2xl p-6 shadow-sm hover:border-brand/40 hover:-translate-y-1 transition-all duration-300 flex items-start gap-4"
                  >
                    <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-brand/5 text-brand border border-brand/10 shrink-0">
                      <CheckCircle className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-extrabold text-text-strong text-base tracking-tight leading-snug">{cap}</h4>
                      <p className="text-text-muted text-xs leading-relaxed">
                        Custom configured deployment package backed by active systems support SLAs.
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </Section>

        {/* 4) How It Works with Process Timeline */}
        <Section variant="white" containerSize="wide" className="bg-white border-b border-line relative bg-tech-grid text-left">
          <div className="w-full relative z-10 space-y-12">
            <div className="space-y-3">
              <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-brand font-mono block">
                DELIVERY ROADMAP
              </span>
              <h2 className="text-3xl font-black text-text-strong tracking-tight">
                Process Journey
              </h2>
            </div>
            <ProcessJourney steps={data.steps} />
          </div>
        </Section>

        {/* 5) Signature Band (Full Bleed Dark Ink Backdrop) */}
        <Section variant="ink" containerSize="wide" className=" text-white border-b border-slate-900 overflow-hidden relative select-none">
          <div className="absolute inset-0 bg-tech-grid opacity-15 pointer-events-none" />
          
          <div className="w-full relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              <div className="lg:col-span-6 space-y-6 text-left">
                <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-brand-hot font-mono block">
                  SIGNATURE VISUALIZATION
                </span>
                <h3 className="text-2xl sm:text-3xl font-black tracking-tight leading-tight text-white">
                  Engineered Operational Integrity
                </h3>
                <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                  This interactive diagram illustrates the logical pipeline flow, contextualization boundaries, and telemetry feedback loops built into our {data.title} framework.
                </p>
              </div>

              <div className="lg:col-span-6 flex justify-center">
                <div className="scale-110 lg:scale-125">
                  <SignatureComp />
                </div>
              </div>

            </div>
          </div>
        </Section>

        {/* 6) In Action Section (Masonry Grid with Photos) */}
        <Section variant="white" containerSize="wide" className="bg-white border-b border-line relative bg-tech-grid text-left select-none">
          <div className="w-full relative z-10 space-y-12">
            
            <div className="space-y-3">
              <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#B4123F] font-mono block">
                IN ACTION
              </span>
              <h2 className="text-3xl font-black text-text-strong tracking-tight">
                Project Deployments
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {data.inActionImages.map((img, i) => (
                <div key={i} className="bg-slate-50 border border-line rounded-2xl overflow-hidden hover:border-brand/40 transition-all duration-300 shadow-sm flex flex-col justify-between">
                  <div className="relative h-[250px] sm:h-[300px]">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 space-y-2 border-t border-slate-100">
                    <span className="bg-brand/10 text-brand text-[9px] font-extrabold tracking-wider uppercase px-2 py-0.5 rounded font-mono">
                      Deployment {i + 1}
                    </span>
                    <p className="text-text-strong font-bold text-sm tracking-tight">
                      {img.alt}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </Section>

        {/* 7) Business Outcomes (Stats block with count-ups) */}
        <Section variant="ink" containerSize="wide" className=" border-b border-slate-850 text-white text-center relative overflow-hidden select-none">
          <div className="absolute inset-0 bg-tech-grid opacity-10 pointer-events-none" />
          <div className="w-full relative z-10 space-y-12">
            
            <div className="text-left space-y-2">
              <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-brand-hot font-mono block">
                BUSINESS OUTCOMES
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-tight">
                Calculated Operational Gains
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
              {data.outcomes.map((outcome, idx) => (
                <div
                  key={idx}
                  className="bg-slate-850/60 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-brand/40 transition-all duration-300"
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-xl bg-brand/10 border border-brand/20 flex items-center justify-center text-brand-hot">
                        <Award className="w-5 h-5" />
                      </div>
                      <span className="text-2xl font-black text-brand-hot font-mono">
                        [XX]%
                      </span>
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-extrabold text-white text-base tracking-tight leading-snug">
                        {outcome}
                      </h4>
                      <p className="text-slate-400 text-xs leading-relaxed">
                        Verified metric output improvement recorded across pilot deployments.
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </Section>

        {/* 8) Where It Applies (Chips linking to Industries) */}
        <Section variant="mist" containerSize="wide" className=" border-b border-line relative bg-dot-matrix text-left">
          <div className="w-full relative z-10 space-y-8">
            <div className="space-y-2">
              <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-brand font-mono block">
                INDUSTRY VERTICALS
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-text-strong tracking-tight">
                Where It Applies
              </h2>
            </div>

            <div className="flex flex-wrap gap-3">
              {data.industries.map((ind, idx) => (
                <Link
                  key={idx}
                  href={`/industries/${getIndustrySlug(ind)}`}
                  className="bg-white border border-line hover:border-brand/45 rounded-full px-6 py-2 text-xs sm:text-sm font-extrabold text-text-strong shadow-sm transition-all"
                >
                  {ind}
                </Link>
              ))}
            </div>
          </div>
        </Section>

        {/* 9) Why DHGsoft */}
        <Section variant="white" containerSize="wide" className="bg-white border-b border-line relative bg-tech-grid text-left">
          <div className="w-full relative z-10 space-y-12">
            <div className="space-y-2">
              <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-brand font-mono block">
                WHY DHGSOFT
              </span>
              <h2 className="text-3xl font-black text-text-strong tracking-tight">
                Proven Delivery
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="space-y-2">
                <h4 className="font-extrabold text-text-strong text-base sm:text-lg">End-to-End Expertise</h4>
                <p className="text-text-muted text-xs leading-relaxed">
                  From initial operational consulting to ongoing platform engineering support cycles.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-extrabold text-text-strong text-base sm:text-lg">Industrial Domain Knowledge</h4>
                <p className="text-text-muted text-xs leading-relaxed">
                  Engineers with deep plant-floor background who speak both PLC loops and server logs.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-extrabold text-text-strong text-base sm:text-lg">Technology-Agnostic</h4>
                <p className="text-text-muted text-xs leading-relaxed">
                  We match the integrations to your mechanical specifications and software constraints.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-extrabold text-text-strong text-base sm:text-lg">Customer-Centric Delivery</h4>
                <p className="text-text-muted text-xs leading-relaxed">
                  Every solution is supported by clear SLA metrics and regional engineering coordinators.
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* 10) Related Capabilities with Image Links */}
        <Section variant="mist" containerSize="wide" className=" border-b border-line relative bg-dot-matrix text-left select-none">
          <div className="w-full relative z-10 space-y-12">
            <div className="space-y-2">
              <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-brand font-mono block">
                RELATED CAPABILITIES
              </span>
              <h2 className="text-3xl font-black text-text-strong tracking-tight">
                Recommended Services
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {data.related.map((rel, idx) => {
                const imgInfo = getRelatedCardData(rel.name);
                return (
                  <Link
                    key={idx}
                    href={rel.href}
                    className="group bg-white border border-line rounded-2xl overflow-hidden hover:shadow-xl hover:border-brand/40 transition-all duration-300 flex flex-col justify-between"
                  >
                    <div className="relative h-[180px] w-full">
                      {imgInfo ? (
                        <Image
                          src={imgInfo.src}
                          alt={imgInfo.alt}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <div className="absolute inset-0 bg-slate-100" />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    </div>
                    
                    <div className="p-6 flex items-center justify-between border-t border-slate-100">
                      <span className="font-extrabold text-text-strong text-sm group-hover:text-brand transition-colors">
                        {rel.name}
                      </span>
                      <ArrowRight className="w-4 h-4 text-brand group-hover:translate-x-1.5 transition-transform" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </Section>

        {/* 11) Crimson CTA Band */}
        <Section variant="gradient" containerSize="wide" className="relative overflow-hidden text-center select-none">
          <div className="absolute inset-0 bg-ink/10 pointer-events-none" />
          <div className="w-full relative z-10 space-y-6">
            <span className="text-xs font-extrabold uppercase tracking-[0.3em] text-white/90 font-mono block">
              LET&apos;S ENGAGE
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-[44px] font-black text-white tracking-tight leading-tight">
              Ready to put {data.title} to work?
            </h2>
            <div className="pt-4">
              <button
                onClick={() => setIsContactOpen(true)}
                className="bg-white hover:bg-slate-100 text-brand font-extrabold text-xs sm:text-sm px-8 py-4 rounded-xl transition-all duration-300 shadow-md active:scale-95 cursor-pointer uppercase tracking-wider"
              >
                Schedule a Consultation
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
