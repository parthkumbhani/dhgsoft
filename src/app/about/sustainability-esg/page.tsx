// src/app/about/sustainability-esg/page.tsx
"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Leaf, Users, Scale, Gauge, LineChart, Droplets, Recycle, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { sustainabilityImages } from "@/lib/images/sustainability";
import CTABand from "@/components/CTABand";

const esgPillars = [
  {
    title: "Environmental",
    desc: "Helping organizations improve operational efficiency while reducing energy consumption and environmental impact — through smarter monitoring, optimization, and control.",
    Icon: Leaf
  },
  {
    title: "Social",
    desc: "Investing in people through workforce development, safety, inclusive culture, and collaboration with universities and communities.",
    Icon: Users
  },
  {
    title: "Governance",
    desc: "Operating with transparency, ethical business practices, strong data protection, and accountable decision-making.",
    Icon: Scale
  }
];

const capabilities = [
  {
    title: "Energy & Resource Efficiency",
    desc: "Reduce energy and resource use with real-time monitoring and optimization.",
    Icon: Gauge
  },
  {
    title: "Emissions Visibility & Reporting",
    desc: "Measure, track, and report emissions with connected operational data.",
    Icon: LineChart
  },
  {
    title: "Smart Utilities & Water",
    desc: "Optimize power, water, and utilities across industrial operations.",
    Icon: Droplets
  },
  {
    title: "Waste Reduction",
    desc: "Cut waste and rework through predictive, data-driven operations.",
    Icon: Recycle
  }
];

export default function SustainabilityESGPage() {
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
              src={sustainabilityImages.hero.src}
              alt={sustainabilityImages.hero.alt}
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
                  SUSTAINABILITY & ESG
                </span>
              </div>
              <h1 className="text-white text-headline-xl sm:text-[3.25rem] lg:text-[4.5rem] font-black tracking-tight leading-[1.1]">
                Engineering a More
                <br />
                <span className="text-gradient-brand">Sustainable Industry</span>
              </h1>
              <p className="text-slate-300 max-w-2xl leading-relaxed text-body-md font-medium">
                DHGsoft helps industrial organizations operate more efficiently while reducing their environmental impact — and holds itself to the same standard.
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
                  Sustainability is an outcome of <span className="text-gradient-brand">good engineering</span>
                </h2>
                <p className="text-body-md text-txt-muted leading-relaxed font-sans">
                  We believe efficiency and sustainability go hand in hand. When operations run smarter — with less waste, less energy, and fewer failures — they also run cleaner. Helping industries operate more efficiently while supporting environmental responsibility is core to how we engineer.
                </p>
              </div>

              {/* Right Column: Image */}
              <div className="lg:col-span-5 relative w-full aspect-[4/3] rounded-[24px] overflow-hidden border border-line shadow-md">
                <Image
                  src={sustainabilityImages.commitment.src}
                  alt={sustainabilityImages.commitment.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>

            </div>
          </Container>
        </Section>

        {/* ==========================================
            3. ESG FRAMEWORK
            ========================================== */}
        <Section variant="brandTint" size="default" id="framework">
          <Container>
            
            <div className="flex flex-col text-left mb-12">
              <div className="flex items-center gap-3 mb-2">
                <div className="h-px w-10 bg-brand" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                  OUR ESG FRAMEWORK
                </span>
              </div>
              <h2 className="text-txt-strong font-black tracking-tight leading-tight">
                Three Pillars of Impact
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full">
              {esgPillars.map((pillar, idx) => {
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
            4. SUSTAINABLE OPERATIONS CAPABILITIES
            ========================================== */}
        <Section variant="white" size="default" id="capabilities">
          <Container>
            
            <div className="flex flex-col text-left mb-12">
              <div className="flex items-center gap-3 mb-2">
                <div className="h-px w-10 bg-brand" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                  SUSTAINABLE OPERATIONS
                </span>
              </div>
              <h2 className="text-txt-strong font-black tracking-tight leading-tight">
                Resource & Energy Efficiency
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full text-left">
              {capabilities.map((cap, idx) => {
                const IconComp = cap.Icon;
                return (
                  <div 
                    key={idx}
                    className="bg-white border border-line rounded-2xl p-6 shadow-sm flex flex-col justify-start space-y-3 hover:border-brand/40 hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-brand/5 text-brand shrink-0">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h4 className="font-extrabold text-txt-strong text-base tracking-tight leading-snug">
                      {cap.title}
                    </h4>
                    <p className="text-txt-muted text-xs leading-relaxed">
                      {cap.desc}
                    </p>
                  </div>
                );
              })}
            </div>

          </Container>
        </Section>

        {/* ==========================================
            5. OUR OWN PRACTICES
            ========================================== */}
        <Section variant="mist" size="default" id="practices">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Left Column: Image */}
              <div className="lg:col-span-5 relative w-full aspect-[4/3] rounded-[24px] overflow-hidden border border-line shadow-md order-last lg:order-first">
                <Image
                  src={sustainabilityImages.practices.src}
                  alt={sustainabilityImages.practices.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>

              {/* Right Column: Content */}
              <div className="lg:col-span-7 space-y-6 text-left">
                <div className="flex items-center gap-3">
                  <div className="h-px w-10 bg-brand" />
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                    OUR PRACTICES
                  </span>
                </div>
                <h2 className="text-txt-strong font-black tracking-tight leading-tight">
                  Running a responsible <span className="text-gradient-brand">digital business</span>
                </h2>
                <p className="text-body-md text-txt-muted leading-relaxed font-sans">
                  We hold ourselves to the same standards we help our customers meet. From minimizing our cloud computing footprint to virtualizing development environments and supporting localized remote operation models, we continuously work to lower the impact of our own team and assets.
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
