// src/app/about/recognition/page.tsx
"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Star, Trophy, Medal, BadgeCheck, Rocket, Flag, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { recognitionImages } from "@/lib/images/recognition";
import CTABand from "@/components/CTABand";

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

const realCases = [
  {
    industry: "Industrial Manufacturing",
    title: "OEE Optimization",
    desc: "Real-time production visibility across 14 lines, integrating plant floor sensors and enterprise dashboards.",
    img: recognitionImages.caseManufacturing.src,
    alt: recognitionImages.caseManufacturing.alt,
    outcome: "18% OEE Increase"
  },
  {
    industry: "Energy & Utilities",
    title: "Smart Water Grid",
    desc: "Distributed SCADA integration with predictive leak detection and edge intelligence nodes.",
    img: recognitionImages.caseEnergy.src,
    alt: recognitionImages.caseEnergy.alt,
    outcome: "30% Downtime Reduction"
  },
  {
    industry: "Smart Logistics",
    title: "Warehouse Automation",
    desc: "Unified Namespace integration linking WMS with PLC pick-and-pack conveyor systems.",
    img: recognitionImages.caseLogistics.src,
    alt: recognitionImages.caseLogistics.alt,
    outcome: "22% Throughput Growth"
  }
];

const certifications = [
  { name: "ISO 9001:2015", desc: "Quality Management Systems" },
  { name: "IEC 62443", desc: "OT Cybersecurity Standards" },
  { name: "Microsoft Silver Partner", desc: "Cloud Platform Integration" },
  { name: "Siemens Solution Partner", desc: "Industrial Control Systems Integration" }
];

export default function RecognitionPage() {
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
              src={recognitionImages.hero.src}
              alt={recognitionImages.hero.alt}
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
                  RECOGNITION
                </span>
              </div>
              <h1 className="text-white text-headline-xl sm:text-[3.25rem] lg:text-[4.5rem] font-black tracking-tight leading-[1.1]">
                Measured by the
                <br />
                <span className="text-gradient-brand">Value We Create</span>
              </h1>
              <p className="text-slate-300 max-w-2xl leading-relaxed text-body-md font-medium">
                DHGsoft measures success by the value created for customers.
              </p>
            </div>
          </Container>
        </Section>

        {/* ==========================================
            2. SUCCESS INTRO
            ========================================== */}
        <Section variant="white" size="default" id="success-intro">
          <Container>
            <div className="flex flex-col text-left space-y-4 max-w-4xl">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                OUR SUCCESS
              </span>
              <p className="text-txt-strong font-bold text-xl sm:text-2xl leading-relaxed">
                Recognition follows outcomes. DHGsoft measures success by the value created for customers — and we're proud of the results we help our partners achieve.
              </p>
            </div>
          </Container>
        </Section>

        {/* ==========================================
            3. HIGHLIGHTS GRID
            ========================================== */}
        <Section variant="brandTint" size="default" id="highlights">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {highlightCards.map((card, idx) => {
                const IconComp = card.Icon;
                return (
                  <div 
                    key={idx}
                    className="bg-white border border-line rounded-2xl p-6 shadow-sm hover:border-brand/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-start text-left space-y-4"
                  >
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-brand/5 text-brand shrink-0">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-extrabold text-txt-strong text-lg tracking-tight">
                        {card.title}
                      </h3>
                      <p className="text-txt-muted text-sm leading-relaxed font-sans">
                        {card.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Container>
        </Section>

        {/* ==========================================
            4. CUSTOMER SUCCESS STORIES
            ========================================== */}
        <Section variant="white" size="default" id="cases">
          <Container>
            
            <div className="flex flex-col text-left mb-12">
              <div className="flex items-center gap-3 mb-2">
                <div className="h-px w-10 bg-brand" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                  CASE STUDIES
                </span>
              </div>
              <h2 className="text-txt-strong font-black tracking-tight leading-tight">
                Engineering in Action
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {realCases.map((c, idx) => (
                <div 
                  key={idx}
                  className="bg-white border border-line rounded-2xl overflow-hidden shadow-sm flex flex-col hover:-translate-y-1 hover:border-brand/40 transition-all duration-300"
                >
                  <div className="relative w-full h-[200px] border-b border-line">
                    <Image
                      src={c.img}
                      alt={c.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 30vw"
                    />
                  </div>
                  <div className="p-6 text-left space-y-4 flex-grow flex flex-col justify-between">
                    <div className="space-y-2">
                      <span className="text-[10px] font-extrabold text-brand uppercase tracking-wider block">
                        {c.industry}
                      </span>
                      <h4 className="font-extrabold text-txt-strong text-lg tracking-tight leading-snug">
                        {c.title}
                      </h4>
                      <p className="text-txt-muted text-xs leading-relaxed font-sans">
                        {c.desc}
                      </p>
                    </div>
                    <div className="pt-4 border-t border-line mt-auto flex items-center justify-between">
                      <span className="text-brand font-extrabold text-sm sm:text-base">
                        {c.outcome}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </Container>
        </Section>

        {/* ==========================================
            5. AWARDS & RECOGNITION
            ========================================== */}
        <Section variant="mist" size="default" id="awards">
          <Container>
            
            <div className="flex flex-col text-left mb-12">
              <div className="flex items-center gap-3 mb-2">
                <div className="h-px w-10 bg-brand" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                  STANDARDS & CERTIFICATIONS
                </span>
              </div>
              <h2 className="text-txt-strong font-black tracking-tight leading-tight">
                Quality Compliance
              </h2>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-left">
              {certifications.map((cert, idx) => (
                <div 
                  key={idx}
                  className="bg-white border border-line rounded-2xl p-5 hover:border-brand transition-colors duration-300 shadow-xs"
                >
                  <span className="font-mono text-sm font-black text-brand tracking-wide block">
                    {cert.name}
                  </span>
                  <span className="text-[11px] text-txt-muted mt-1.5 block leading-normal">
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
