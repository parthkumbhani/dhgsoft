// src/app/about/technology-partners/page.tsx
"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Cloud, Cpu, Database, AppWindow, ShieldCheck, BrainCircuit, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { techpartnersImages } from "@/lib/images/techpartners";
import CTABand from "@/components/CTABand";

const stackCards = [
  {
    title: "Cloud Platforms",
    desc: "Scalable, secure cloud foundations for industrial data, applications, and AI.",
    Icon: Cloud
  },
  {
    title: "Industrial Automation Platforms",
    desc: "PLC, SCADA, and control systems integrated with modern digital layers.",
    Icon: Cpu
  },
  {
    title: "Industrial Data Platforms",
    desc: "Historians, unified namespaces, and data platforms that create a single source of operational truth.",
    Icon: Database
  },
  {
    title: "Enterprise Software",
    desc: "ERP, MES, EAM, and enterprise systems connected to plant-floor reality.",
    Icon: AppWindow
  },
  {
    title: "Cybersecurity Technologies",
    desc: "OT and IT security tools that protect operations end to end.",
    Icon: ShieldCheck
  },
  {
    title: "Artificial Intelligence Platforms",
    desc: "AI and analytics platforms that turn industrial data into action.",
    Icon: BrainCircuit
  }
];

export default function TechnologyPartnersPage() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground antialiased font-sans flex flex-col selection:bg-brand selection:text-white">
      {/* Sticky Header */}
      <Header onContactClick={() => setIsContactOpen(true)} />

      <main className="relative pt-20">
        
        {/* ==========================================
            1. HERO SECTION
            ========================================== */}
        <Section variant="ink" size="hero" containerSize="wide" className="relative min-h-screen flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0 pointer-events-none">
            <Image
              src={techpartnersImages.hero.src}
              alt={techpartnersImages.hero.alt}
              fill
              priority
              className="object-cover opacity-35"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />
          </div>
          <Container className="relative z-10 w-full text-left">
            <div className="max-w-3xl space-y-6">
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 backdrop-blur-md text-[#E10088] mb-4">
                <span className="relative flex w-1.5 h-1.5">
                  <span className="absolute inset-0 rounded-full bg-[#E10088] animate-ping opacity-60" />
                  <span className="relative rounded-full bg-[#E10088] w-1.5 h-1.5" />
                </span>
                <span className="text-[11px] font-extrabold uppercase tracking-widest font-sans">
                  TECHNOLOGY PARTNERS
                </span>
              </div>
              <h1 className="text-white text-headline-xl sm:text-[3.25rem] lg:text-[4.5rem] font-black tracking-tight leading-[1.1]">
                Powered by the World's
                <br />
                <span className="text-gradient-brand">Leading Platforms</span>
              </h1>
              <p className="text-slate-300 max-w-2xl leading-relaxed text-body-md font-medium">
                DHGsoft integrates best-in-class industrial and enterprise technologies into solutions that perform on the plant floor and scale across the enterprise.
              </p>
            </div>
          </Container>
        </Section>

        {/* ==========================================
            2. OUR APPROACH
            ========================================== */}
        <Section variant="white" size="default" id="approach">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Left Column: Text */}
              <div className="lg:col-span-7 space-y-6 text-left">
                <div className="flex items-center gap-3">
                  <div className="h-px w-10 bg-brand" />
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                    OUR APPROACH
                  </span>
                </div>
                <h2 className="text-txt-strong font-black tracking-tight leading-tight">
                  Technology-agnostic <span className="text-gradient-brand">by design</span>
                </h2>
                <p className="text-body-md text-txt-muted leading-relaxed font-sans">
                  We are technology-agnostic. We select and integrate the platforms that best fit each operation and business goal — not a single vendor's catalog. Our value is in the engineering that makes these technologies work together: securely, reliably, and at industrial scale.
                </p>
              </div>

              {/* Right Column: Image */}
              <div className="lg:col-span-5 relative w-full aspect-[4/3] rounded-[24px] overflow-hidden border border-line shadow-md">
                <Image
                  src={techpartnersImages.approach.src}
                  alt={techpartnersImages.approach.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>

            </div>
          </Container>
        </Section>

        {/* ==========================================
            3. FEATURED PARTNERS LOGOS
            ========================================== */}
        <Section variant="brandTint" size="default" id="featured-partners">
          <Container>
            
            <div className="flex flex-col text-left mb-12">
              <div className="flex items-center gap-3 mb-2">
                <div className="h-px w-10 bg-brand" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                  FEATURED PARTNERS
                </span>
              </div>
              <h2 className="text-txt-strong font-black tracking-tight leading-tight">
                Vendor Platform Ecosystem
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 pt-4">
              {[
                { name: "AWS", logo: "/logos/aws.svg" },
                { name: "Microsoft Azure", logo: "/logos/microsoft-azure.svg" },
                { name: "Schneider Electric", logo: "/logos/schneider-electric.svg" },
                { name: "AVEVA", logo: "/logos/aveva.svg" },
                { name: "Phoenix Contact", logo: "/logos/phoenix-contact.svg" },
                { name: "Databricks", logo: "/logos/databricks.svg" }
              ].map((p, idx) => (
                <div 
                  key={idx}
                  className="bg-white border border-line rounded-2xl p-6 shadow-xs flex items-center justify-center min-h-[90px] hover:border-brand/40 transition-colors duration-300 group"
                >
                  <div className="relative w-full h-8 opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                    <Image
                      src={p.logo}
                      alt={`${p.name} Logo`}
                      fill
                      className="object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                </div>
              ))}
            </div>

          </Container>
        </Section>

        {/* ==========================================
            4. THE STACK
            ========================================== */}
        <Section variant="white" size="default" id="stack">
          <Container>
            
            <div className="flex flex-col text-left mb-12">
              <div className="flex items-center gap-3 mb-2">
                <div className="h-px w-10 bg-brand" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                  THE STACK
                </span>
              </div>
              <h2 className="text-txt-strong font-black tracking-tight leading-tight">
                Supported Technologies
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {stackCards.map((card, idx) => {
                const IconComp = card.Icon;
                return (
                  <div 
                    key={idx}
                    className="bg-white border border-line rounded-2xl p-6 shadow-sm hover:border-brand/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-start text-left space-y-4"
                  >
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-brand/5 text-brand shrink-0">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h3 className="font-extrabold text-txt-strong text-lg tracking-tight">
                      {card.title}
                    </h3>
                    <p className="text-txt-muted text-sm leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                );
              })}
            </div>

          </Container>
        </Section>

        {/* ==========================================
            5. INTEGRATION EXPERTISE
            ========================================== */}
        <Section variant="ink" size="default" id="expertise" className="relative overflow-hidden">
          <Container>
            
            <div className="flex flex-col text-left mb-12">
              <div className="flex items-center gap-3 mb-2">
                <div className="h-px w-10 bg-brand-hot" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-hot">
                  INTEGRATION EXPERTISE
                </span>
              </div>
              <h2 className="text-white font-black tracking-tight leading-tight">
                Why Partners Work With Us
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
              <div className="space-y-3 bg-slate-900/40 border border-slate-800 p-6 rounded-2xl">
                <h4 className="font-extrabold text-white text-base sm:text-lg">Vendor-neutral selection</h4>
                <p className="text-slate-400 text-xs leading-relaxed">
                  The right platform for the problem, backed by real integration experience.
                </p>
              </div>
              <div className="space-y-3 bg-slate-900/40 border border-slate-800 p-6 rounded-2xl">
                <h4 className="font-extrabold text-white text-base sm:text-lg">Secure interoperability</h4>
                <p className="text-slate-400 text-xs leading-relaxed">
                  OT and IT systems connected without compromising security.
                </p>
              </div>
              <div className="space-y-3 bg-slate-900/40 border border-slate-800 p-6 rounded-2xl">
                <h4 className="font-extrabold text-white text-base sm:text-lg">Built to scale</h4>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Solutions designed to standardize across lines, sites, and regions.
                </p>
              </div>
              <div className="space-y-3 bg-slate-900/40 border border-slate-800 p-6 rounded-2xl">
                <h4 className="font-extrabold text-white text-base sm:text-lg">Lifecycle support</h4>
                <p className="text-slate-400 text-xs leading-relaxed">
                  We support the technology we deploy, long after go-live.
                </p>
              </div>
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
