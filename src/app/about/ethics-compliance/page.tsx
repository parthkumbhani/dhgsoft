// src/app/about/ethics-compliance/page.tsx
"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Scale, ShieldCheck, FileCheck, Lock, Eye, Terminal, Activity, Layers, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { ethicsImages } from "@/lib/images/ethics";
import CTABand from "@/components/CTABand";

const compliancePillars = [
  {
    title: "Ethical Business Conduct",
    desc: "Honest, transparent, and accountable in every relationship and decision.",
    Icon: Scale
  },
  {
    title: "Information Security",
    desc: "Protecting customer data through secure engineering practices and internationally accepted security principles.",
    Icon: ShieldCheck
  },
  {
    title: "Regulatory Compliance",
    desc: "Aligning engagements with applicable laws, regulations, and industry standards.",
    Icon: FileCheck
  },
  {
    title: "Data Privacy",
    desc: "Handling customer and operational data responsibly and confidentially.",
    Icon: Lock
  }
];

const standards = [
  { name: "ISO 27001", desc: "Information Security Management Systems" },
  { name: "IEC 62443", desc: "Industrial Automation & Control Cybersecurity" },
  { name: "NIST CSF", desc: "National Institute of Standards Cybersecurity Framework" },
  { name: "GDPR", desc: "General Data Privacy and Protection Compliance" },
  { name: "SOC 2 Type II", desc: "Customer Data Security & Trust Standards" }
];

export default function EthicsCompliancePage() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground antialiased font-sans flex flex-col selection:bg-brand selection:text-white">
      {/* Sticky Header */}
      <Header onContactClick={() => setIsContactOpen(true)} />

      <main className="relative pt-20">
        
        {/* ==========================================
            1. HERO SECTION
            ========================================== */}
        <Section variant="ink" size="hero" containerSize="wide" className="relative min-h-[60vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0 pointer-events-none">
            <Image
              src={ethicsImages.hero.src}
              alt={ethicsImages.hero.alt}
              fill
              priority
              className="object-cover opacity-35"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent" />
          </div>
          <Container className="relative z-10 w-full text-left">
            <div className="max-w-3xl space-y-6">
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 backdrop-blur-md text-[#E10088] mb-4">
                <span className="relative flex w-1.5 h-1.5">
                  <span className="absolute inset-0 rounded-full bg-[#E10088] animate-ping opacity-60" />
                  <span className="relative rounded-full bg-[#E10088] w-1.5 h-1.5" />
                </span>
                <span className="text-[11px] font-extrabold uppercase tracking-widest font-sans">
                  ETHICS & COMPLIANCE
                </span>
              </div>
              <h1 className="text-white text-headline-xl sm:text-[3.25rem] lg:text-[4.5rem] font-black tracking-tight leading-[1.1]">
                Built on Integrity
                <br />
                <span className="text-gradient-brand">and Trust</span>
              </h1>
              <p className="text-slate-300 max-w-2xl leading-relaxed text-body-md font-medium">
                Integrity and ethical business practices guide every DHGsoft engagement — backed by secure, standards-based engineering that protects our customers' operations and data.
              </p>
            </div>
          </Container>
        </Section>

        {/* ==========================================
            2. OUR COMMITMENT
            ========================================== */}
        <Section variant="white" size="default" id="commitment">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Left Column: Text */}
              <div className="lg:col-span-7 space-y-6 text-left">
                <div className="flex items-center gap-3">
                  <div className="h-px w-10 bg-brand" />
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                    OUR COMMITMENT
                  </span>
                </div>
                <h2 className="text-txt-strong font-black tracking-tight leading-tight">
                  Integrity in <span className="text-gradient-brand">every engagement</span>
                </h2>
                <p className="text-body-md text-txt-muted leading-relaxed font-sans">
                  Integrity and ethical business practices guide every customer engagement. We build trusted relationships through transparency, accountability, and doing what is right — even when no one is watching.
                </p>
              </div>

              {/* Right Column: Image */}
              <div className="lg:col-span-5 relative w-full aspect-[4/3] rounded-[24px] overflow-hidden border border-line shadow-md">
                <Image
                  src={ethicsImages.commitment.src}
                  alt={ethicsImages.commitment.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>

            </div>
          </Container>
        </Section>

        {/* ==========================================
            3. HOW WE OPERATE (PILLARS)
            ========================================== */}
        <Section variant="brandTint" size="default" id="operate">
          <Container>
            
            <div className="flex flex-col text-left mb-12">
              <div className="flex items-center gap-3 mb-2">
                <div className="h-px w-10 bg-brand" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                  HOW WE OPERATE
                </span>
              </div>
              <h2 className="text-txt-strong font-black tracking-tight leading-tight">
                Our Compliance Principles
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
              {compliancePillars.map((pillar, idx) => {
                const IconComp = pillar.Icon;
                return (
                  <div 
                    key={idx}
                    className="bg-white border border-line rounded-2xl p-6 shadow-sm hover:border-brand/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-start text-left space-y-4"
                  >
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-brand/5 text-brand shrink-0">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h3 className="font-extrabold text-txt-strong text-lg tracking-tight">
                      {pillar.title}
                    </h3>
                    <p className="text-txt-muted text-sm leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                );
              })}
            </div>

          </Container>
        </Section>

        {/* ==========================================
            4. SECURE BY DESIGN (DARK)
            ========================================== */}
        <Section variant="ink" size="default" id="security" className="relative overflow-hidden">
          <Container>
            
            <div className="flex flex-col text-left mb-12">
              <div className="flex items-center gap-3 mb-2">
                <div className="h-px w-10 bg-brand-hot" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-hot">
                  SECURE BY DESIGN
                </span>
              </div>
              <h2 className="text-white font-black tracking-tight leading-tight">
                Zero-trust industrial safety
              </h2>
              <p className="text-slate-300 max-w-3xl text-sm sm:text-base leading-relaxed mt-4">
                Security is engineered in, not added on. We apply zero-trust principles across OT and IT environments and follow internationally accepted security standards to protect operations, data, and people.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
              
              <div className="space-y-3 bg-slate-900/40 border border-slate-800 p-6 rounded-2xl">
                <div className="flex items-center gap-2.5 text-brand-hot">
                  <Eye className="w-4 h-4" />
                  <h4 className="font-extrabold text-white text-base">Zero-trust access</h4>
                </div>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Authentication and authorization strictly verified for every system node.
                </p>
              </div>

              <div className="space-y-3 bg-slate-900/40 border border-slate-800 p-6 rounded-2xl">
                <div className="flex items-center gap-2.5 text-brand-hot">
                  <Layers className="w-4 h-4" />
                  <h4 className="font-extrabold text-white text-base">OT/IT segmentation</h4>
                </div>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Strict logical isolation layers between enterprise data and industrial networks.
                </p>
              </div>

              <div className="space-y-3 bg-slate-900/40 border border-slate-800 p-6 rounded-2xl">
                <div className="flex items-center gap-2.5 text-brand-hot">
                  <Terminal className="w-4 h-4" />
                  <h4 className="font-extrabold text-white text-base">Secure development</h4>
                </div>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Code reviews, static analysis, and secure practices in every build pipeline.
                </p>
              </div>

              <div className="space-y-3 bg-slate-900/40 border border-slate-800 p-6 rounded-2xl">
                <div className="flex items-center gap-2.5 text-brand-hot">
                  <Activity className="w-4 h-4" />
                  <h4 className="font-extrabold text-white text-base">Continuous monitoring</h4>
                </div>
                <p className="text-slate-400 text-xs leading-relaxed">
                  24/7 logging, telemetry diagnostics, and incident response operations.
                </p>
              </div>

            </div>

          </Container>
        </Section>

        {/* ==========================================
            5. STANDARDS & FRAMEWORKS
            ========================================== */}
        <Section variant="white" size="default" id="standards">
          <Container>
            
            <div className="flex flex-col text-left mb-12">
              <div className="flex items-center gap-3 mb-2">
                <div className="h-px w-10 bg-brand" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                  STANDARDS & FRAMEWORKS
                </span>
              </div>
              <h2 className="text-txt-strong font-black tracking-tight leading-tight">
                Framework alignment
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-left">
              {standards.map((cert, idx) => (
                <div 
                  key={idx}
                  className="bg-white border border-line rounded-2xl p-5 hover:border-brand transition-colors duration-300 shadow-xs"
                >
                  <span className="font-mono text-sm font-black text-brand tracking-wide block">
                    {cert.name}
                  </span>
                  <span className="text-[11px] text-txt-muted mt-1.5 block leading-normal font-sans">
                    {cert.desc}
                  </span>
                </div>
              ))}
            </div>

          </Container>
        </Section>

        {/* CTA BAND */}
        <CTABand
          label="PARTNER WITH DHGSOFT"
          headline="Building Value"
          highlightedText="for Tomorrow."
          description="Whether you are modernizing a single production line, connecting enterprise systems to the cloud, or building a secure data foundation — DHGsoft is your engineering partner from concept to commissioning."
          primaryLabel="Start a Conversation →"
          secondaryLabel="Explore Capabilities"
          onPrimaryClick={() => setIsContactOpen(true)}
        />

      </main>

      {/* Footer */}
      <Footer />

      {/* Contact Modal */}
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} showToast={() => {}} />
    </div>
  );
}
