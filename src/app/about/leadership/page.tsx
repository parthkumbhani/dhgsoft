// src/app/about/leadership/page.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { leadershipImages } from "@/lib/images/leadership";
import CTABand from "@/components/CTABand";

const executives = [
  {
    name: "Hitesh Patel",
    initials: "HP",
    role: "Chief Executive Officer",
    desc: "Leads DHGsoft's vision and growth across industrial digital transformation. Formerly led large automation and digital projects for global manufacturing enterprises."
  },
  {
    name: "Ankita Parikh",
    initials: "AP",
    role: "Head of Operations",
    desc: "Drives organizational delivery models and operational excellence across regional offices and global delivery centers."
  },
  {
    name: "Rajesh Sharma",
    initials: "RS",
    role: "Chief Technology Officer",
    desc: "Leads technical strategy across industrial control automation, database virtualization, cloud architectures, and machine learning."
  },
  {
    name: "Vikram Malhotra",
    initials: "VM",
    role: "Head of OT & Systems Integration",
    desc: "Manages plant-floor engineering, SCADA systems, PLC connections, and OT/IT secure connectivity teams."
  },
  {
    name: "Sanjay Deshmukh",
    initials: "SD",
    role: "Head of Cybersecurity",
    desc: "Ensures compliance with international standards (IEC 62443, ISO 27001) and leads zero-trust industrial network designs."
  },
  {
    name: "Deepa Nair",
    initials: "DN",
    role: "Head of Global Delivery",
    desc: "Oversees multi-disciplinary onsite-offshore deployment projects and client SLA execution teams."
  }
];

export default function LeadershipPage() {
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
              src={leadershipImages.hero.src}
              alt={leadershipImages.hero.alt}
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
                  LEADERSHIP
                </span>
              </div>
              <h1 className="text-white text-headline-xl sm:text-[3.25rem] lg:text-[4.5rem] font-black tracking-tight leading-[1.1]">
                The People Behind
                <br />
                <span className="text-gradient-brand">the Platform</span>
              </h1>
              <p className="text-slate-300 max-w-2xl leading-relaxed text-body-md font-medium">
                DHGsoft is led by engineers and operators who have spent their careers closing the gap between industrial operations and enterprise technology.
              </p>
            </div>
          </Container>
        </Section>

        {/* ==========================================
            2. PHILOSOPHY SECTION
            ========================================== */}
        <Section variant="ink" size="default" id="philosophy" className="relative overflow-hidden border-t border-slate-900">
          <Container>
            <div className="flex flex-col text-left space-y-4">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-hot">
                OUR PHILOSOPHY
              </span>
              <div className="flex flex-col gap-3 text-2xl sm:text-3xl lg:text-[34px] font-black tracking-tight text-white leading-tight">
                <span className="text-brand-hot">Lead with innovation.</span>
                <span className="text-white/80">Deliver with excellence.</span>
                <span className="text-white/60">Grow through collaboration.</span>
              </div>
            </div>
          </Container>
        </Section>

        {/* ==========================================
            3. EXECUTIVE LEADERSHIP GRID
            ========================================== */}
        <Section variant="white" size="default" id="executives">
          <Container>
            
            <div className="flex flex-col text-left mb-12">
              <div className="flex items-center gap-3 mb-2">
                <div className="h-px w-10 bg-brand" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                  EXECUTIVE LEADERSHIP
                </span>
              </div>
              <h2 className="text-txt-strong font-black tracking-tight leading-tight">
                Meet Our Leadership
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {executives.map((exec, idx) => (
                <div 
                  key={idx}
                  className="bg-white border border-line rounded-2xl p-6 shadow-sm hover:border-brand/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-start text-left space-y-6"
                >
                  {/* Monogram Box instead of raw initials to keep visual cleanliness */}
                  <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-mist border border-line flex items-center justify-center select-none group">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-brand to-brand-deep flex items-center justify-center shadow-lg shadow-brand/10 group-hover:scale-105 transition-transform duration-300">
                      <span className="font-mono text-2xl font-black text-white tracking-wider">
                        {exec.initials}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2 flex-grow">
                    <h3 className="font-extrabold text-txt-strong text-xl tracking-tight">
                      {exec.name}
                    </h3>
                    <p className="text-brand font-bold text-xs uppercase tracking-wider">
                      {exec.role}
                    </p>
                    <p className="pt-2 text-txt-muted text-xs leading-relaxed">
                      {exec.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </Container>
        </Section>

        {/* ==========================================
            4. LEADERSHIP MINDSET
            ========================================== */}
        <Section variant="mist" size="default" id="mindset">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Left Column: Image Card */}
              <div className="lg:col-span-5 relative w-full aspect-[4/3] rounded-[24px] overflow-hidden border border-line shadow-md">
                <Image
                  src={leadershipImages.mindset.src}
                  alt={leadershipImages.mindset.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>

              {/* Right Column: Statement */}
              <div className="lg:col-span-7 space-y-6 text-left">
                <div className="flex items-center gap-3">
                  <div className="h-px w-10 bg-brand" />
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                    LEADERSHIP MINDSET
                  </span>
                </div>
                <h2 className="text-txt-strong text-2xl sm:text-3xl lg:text-[32px] font-black tracking-tight leading-relaxed">
                  We lead the way we engineer — with curiosity, discipline, and a bias for outcomes. We hire people who have operated real systems, we give them hard problems, and we measure ourselves by the value we create.
                </h2>
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
