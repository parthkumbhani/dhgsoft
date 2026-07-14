// src/app/about/partners/page.tsx
"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Puzzle, Cloud, ShieldCheck, Network, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { partnersImages } from "@/lib/images/partners";
import CTABand from "@/components/CTABand";

const categories = [
  {
    title: "Solution Partners",
    desc: "Best-in-class platforms we implement and integrate into industrial operations.",
    Icon: Puzzle
  },
  {
    title: "Cloud & Data Partners",
    desc: "Scalable cloud and data ecosystems that power industrial intelligence.",
    Icon: Cloud
  },
  {
    title: "Cybersecurity Partners",
    desc: "Trusted security technologies that protect OT and IT environments.",
    Icon: ShieldCheck
  },
  {
    title: "System Integrators",
    desc: "Collaborators who help us deliver at scale across sites and regions.",
    Icon: Network
  }
];

export default function PartnersPage() {
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
              src={partnersImages.hero.src}
              alt={partnersImages.hero.alt}
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
                  PARTNER ECOSYSTEM
                </span>
              </div>
              <h1 className="text-white text-headline-xl sm:text-[3.25rem] lg:text-[4.5rem] font-black tracking-tight leading-[1.1]">
                Better Together — Our
                <br />
                <span className="text-gradient-brand">Partner Ecosystem</span>
              </h1>
              <p className="text-slate-300 max-w-2xl leading-relaxed text-body-md font-medium">
                Industrial transformation is a team effort. We collaborate with the world's leading technology providers, integrators, and institutions to deliver future-ready solutions.
              </p>
            </div>
          </Container>
        </Section>

        {/* ==========================================
            2. WHY WE PARTNER (COLLABORATION)
            ========================================== */}
        <Section variant="white" size="default" id="collaboration">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Left Column: Text */}
              <div className="lg:col-span-7 space-y-6 text-left">
                <div className="flex items-center gap-3">
                  <div className="h-px w-10 bg-brand" />
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                    COLLABORATION
                  </span>
                </div>
                <h2 className="text-txt-strong font-black tracking-tight leading-tight">
                  Innovation happens through <span className="text-gradient-brand">collaboration</span>
                </h2>
                <p className="text-body-md text-txt-muted leading-relaxed font-sans">
                  DHGsoft works closely with customers, technology providers, universities, research institutions, system integrators, and industry experts to deliver future-ready solutions. The right ecosystem lets us bring proven technology to every problem — and integrate it into operations that already work.
                </p>
              </div>

              {/* Right Column: Image */}
              <div className="lg:col-span-5 relative w-full aspect-[4/3] rounded-[24px] overflow-hidden border border-line shadow-md">
                <Image
                  src={partnersImages.whyPartner.src}
                  alt={partnersImages.whyPartner.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>

            </div>
          </Container>
        </Section>

        {/* ==========================================
            3. TECHNOLOGY PARTNERS LOGOS
            ========================================== */}
        <Section variant="brandTint" size="default" id="technology-partners">
          <Container>
            
            <div className="flex flex-col text-left mb-12">
              <div className="flex items-center gap-3 mb-2">
                <div className="h-px w-10 bg-brand" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                  TECHNOLOGY PARTNERS
                </span>
              </div>
              <h2 className="text-txt-strong font-black tracking-tight leading-tight">
                Global Platform Alliances
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
            4. HOW WE PARTNER (CATEGORIES)
            ========================================== */}
        <Section variant="white" size="default" id="how-we-partner">
          <Container>
            
            <div className="flex flex-col text-left mb-12">
              <div className="flex items-center gap-3 mb-2">
                <div className="h-px w-10 bg-brand" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                  HOW WE PARTNER
                </span>
              </div>
              <h2 className="text-txt-strong font-black tracking-tight leading-tight">
                Cooperation Categories
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories.map((cat, idx) => {
                const IconComp = cat.Icon;
                return (
                  <div 
                    key={idx}
                    className="bg-white border border-line rounded-2xl p-6 shadow-sm hover:border-brand/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-start text-left space-y-4"
                  >
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-brand/5 text-brand shrink-0">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h3 className="font-extrabold text-txt-strong text-lg tracking-tight">
                      {cat.title}
                    </h3>
                    <p className="text-txt-muted text-sm leading-relaxed">
                      {cat.desc}
                    </p>
                  </div>
                );
              })}
            </div>

          </Container>
        </Section>

        {/* ==========================================
            5. ACADEMIC PARTNERSHIPS
            ========================================== */}
        <Section variant="mist" size="default" id="academic">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Left Column: Image Card */}
              <div className="lg:col-span-5 relative w-full aspect-[4/3] rounded-[24px] overflow-hidden border border-line shadow-md order-last lg:order-first">
                <Image
                  src={partnersImages.academic.src}
                  alt={partnersImages.academic.alt}
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
                    ACADEMIC PARTNERSHIPS
                  </span>
                </div>
                <h2 className="text-txt-strong font-black tracking-tight leading-tight">
                  Nurturing talent & <span className="text-gradient-brand">applied research</span>
                </h2>
                <p className="text-body-md text-txt-muted leading-relaxed font-sans">
                  Supporting research, innovation, internships, and workforce development through collaboration with universities and engineering institutions. Together we develop the talent and ideas that keep industrial technology moving forward.
                </p>
              </div>

            </div>
          </Container>
        </Section>

        {/* ==========================================
            6. STRATEGIC ALLIANCES
            ========================================== */}
        <Section variant="ink" size="default" id="alliances" className="relative overflow-hidden">
          <Container>
            <div className="w-full relative z-10 space-y-3 text-left">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-hot">
                STRATEGIC ALLIANCES
              </span>
              <p className="text-white font-extrabold text-xl sm:text-2xl leading-relaxed">
                Building long-term partnerships to accelerate innovation and deliver greater customer value.
              </p>
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
