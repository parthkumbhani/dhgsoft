// src/app/about/overview/page.tsx
"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Network, BrainCircuit, ShieldCheck, Check, MapPin, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { overviewImages } from "@/lib/images/overview";
import CTABand from "@/components/CTABand";

export default function OverviewPage() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const focusAreas = [
    {
      title: "Connected Operations",
      desc: "Unifying plant-floor assets, historians, and enterprise systems into a single source of operational truth.",
      Icon: Network
    },
    {
      title: "Applied Intelligence",
      desc: "Turning industrial data into predictions, insights, and autonomous action that improve performance every day.",
      Icon: BrainCircuit
    },
    {
      title: "Trusted Delivery",
      desc: "Secure, standards-based engineering delivered by teams who have run real operations, not just written code.",
      Icon: ShieldCheck
    }
  ];

  const journeySteps = [
    {
      num: "01",
      title: "Foundation",
      desc: "DHGsoft was formed by engineers who had lived the gap between operations and IT — and were determined to close it."
    },
    {
      num: "02",
      title: "Focus",
      desc: "We concentrated on the hardest problem in industry: making OT and IT work as one, securely and at scale."
    },
    {
      num: "03",
      title: "Expansion",
      desc: "Our capabilities grew across automation, data platforms, cloud, AI, and cybersecurity — end to end."
    },
    {
      num: "04",
      title: "Today",
      desc: "We partner with organizations worldwide to build connected, intelligent, and sustainable operations."
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground antialiased font-sans flex flex-col selection:bg-brand selection:text-white">
      {/* Sticky Header */}
      <Header onContactClick={() => setIsContactOpen(true)} />

      <main className="flex-grow">
        
        {/* ==========================================
            1. HERO SECTION
            ========================================== */}
        <Section variant="ink" size="hero" containerSize="wide" className="relative min-h-screen flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0 pointer-events-none">
            <Image
              src={overviewImages.hero.src}
              alt={overviewImages.hero.alt}
              fill
              priority
              className="object-cover opacity-35"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />
          </div>
          <Container className="relative z-10 w-full text-left">
            <div className="max-w-4xl space-y-6">
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 backdrop-blur-md text-[#E10088] mb-4">
                <span className="relative flex w-1.5 h-1.5">
                  <span className="absolute inset-0 rounded-full bg-[#E10088] animate-ping opacity-60" />
                  <span className="relative rounded-full bg-[#E10088] w-1.5 h-1.5" />
                </span>
                <span className="text-[11px] font-extrabold uppercase tracking-widest font-sans">
                  OUR STORY
                </span>
              </div>
              <h1 className="text-white text-headline-xl sm:text-[3.25rem] lg:text-[4.5rem] font-black tracking-tight leading-[1.1]">
                Engineering Clarity from
                <br />
                <span className="text-gradient-brand">Industrial Complexity</span>
              </h1>
              <p className="text-slate-300 max-w-2xl leading-relaxed text-body-md font-medium">
                DHGsoft exists to help industrial organizations turn fragmented operations into connected, intelligent systems. We engineer the digital backbone that makes modern industry faster, safer, and more sustainable.
              </p>
            </div>
          </Container>
        </Section>

        {/* ==========================================
            2. WHO WE ARE (Split layout)
            ========================================== */}
        <Section variant="white" size="default" id="who-we-are">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Left Column: Text Content */}
              <div className="lg:col-span-7 space-y-6 text-left">
                <div className="flex items-center gap-3">
                  <div className="h-px w-10 bg-brand" />
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                    WHO WE ARE
                  </span>
                </div>
                <h2 className="text-txt-strong font-black tracking-tight leading-tight">
                  A digital engineering partner <span className="text-gradient-brand">built for industry</span>
                </h2>
                <p className="text-body-md text-txt-muted leading-relaxed font-sans">
                  DHGsoft is a global Industrial Digital Transformation company. We bring together deep operational technology expertise, modern software engineering, and applied AI to help manufacturers, utilities, and process industries connect what they build with how they run it.
                </p>
                <p className="text-body-md text-txt-muted leading-relaxed font-sans">
                  Our teams work at the intersection of OT and IT — the place where most transformation efforts stall. We close that gap with engineering that respects the realities of the plant floor while unlocking the scale of the enterprise and the cloud.
                </p>
                <p className="text-body-md text-txt-muted leading-relaxed font-sans">
                  Whether an organization is modernizing a single line or standardizing operations across dozens of sites, we bring the same discipline: understand the process first, then apply the technology that moves the business.
                </p>
              </div>

              {/* Right Column: Image Card */}
              <div className="lg:col-span-5 relative w-full aspect-[4/3] rounded-[24px] overflow-hidden border border-line shadow-lg">
                <Image
                  src={overviewImages.whoWeAre.src}
                  alt={overviewImages.whoWeAre.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>

            </div>
          </Container>
        </Section>

        {/* ==========================================
            3. OUR ENGINEERING FOCUS
            ========================================== */}
        <Section variant="brandTint" size="default" id="focus">
          <Container>
            
            <div className="flex flex-col text-left mb-12">
              <div className="flex items-center gap-3 mb-2">
                <div className="h-px w-10 bg-brand" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                  OUR FOCUS
                </span>
              </div>
              <h2 className="text-txt-strong font-black tracking-tight leading-tight">
                Our Engineering Core
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {focusAreas.map((area, idx) => {
                const IconComp = area.Icon;
                return (
                  <div 
                    key={idx}
                    className="bg-white border border-line rounded-2xl p-6 shadow-sm hover:border-brand/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-start text-left space-y-4"
                  >
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-brand/5 text-brand shrink-0">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h3 className="font-extrabold text-txt-strong text-lg tracking-tight">
                      {area.title}
                    </h3>
                    <p className="text-txt-muted text-sm leading-relaxed">
                      {area.desc}
                    </p>
                  </div>
                );
              })}
            </div>

          </Container>
        </Section>

        {/* ==========================================
            4. BY THE NUMBERS
            ========================================== */}
        <Section variant="ink" size="default" id="stats">
          <Container>
            
            <div className="flex flex-col text-left mb-12">
              <div className="flex items-center gap-3 mb-2">
                <div className="h-px w-10 bg-brand-hot" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-hot">
                  BY THE NUMBERS
                </span>
              </div>
              <h2 className="text-white font-black tracking-tight leading-tight">
                Scale and Execution Capacity
              </h2>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-left">
              <div>
                <span className="text-4xl sm:text-5xl font-black text-brand-hot block">450+</span>
                <span className="text-slate-400 text-xs sm:text-sm font-semibold mt-2 block">Industrial projects delivered</span>
              </div>
              <div>
                <span className="text-4xl sm:text-5xl font-black text-brand-hot block">120+</span>
                <span className="text-slate-400 text-xs sm:text-sm font-semibold mt-2 block">Plant & enterprise sites connected</span>
              </div>
              <div>
                <span className="text-4xl sm:text-5xl font-black text-brand-hot block">14+</span>
                <span className="text-slate-400 text-xs sm:text-sm font-semibold mt-2 block">Industries served</span>
              </div>
              <div>
                <span className="text-4xl sm:text-5xl font-black text-brand-hot block">24×7</span>
                <span className="text-slate-400 text-xs sm:text-sm font-semibold mt-2 block">Global engineering support</span>
              </div>
            </div>

          </Container>
        </Section>

        {/* ==========================================
            5. OUR JOURNEY
            ========================================== */}
        <Section variant="white" size="default" id="journey">
          <Container>
            
            <div className="flex flex-col text-left mb-12">
              <div className="flex items-center gap-3 mb-2">
                <div className="h-px w-10 bg-brand" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                  OUR JOURNEY
                </span>
              </div>
              <h2 className="text-txt-strong font-black tracking-tight leading-tight">
                Milestones of Growth
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
              {journeySteps.map((step, idx) => (
                <div 
                  key={idx}
                  className="bg-white border border-line rounded-2xl p-6 shadow-xs hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <span className="font-mono text-3xl font-black text-[#8C123B]/20 block">
                      {step.num}
                    </span>
                    <h4 className="text-txt-strong font-extrabold text-base tracking-tight">
                      {step.title}
                    </h4>
                    <p className="text-txt-muted text-xs leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </Container>
        </Section>

        {/* ==========================================
            6. WHAT DRIVES US
            ========================================== */}
        <Section variant="mist" size="default" id="drivers">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Left Column: Image Card */}
              <div className="lg:col-span-5 relative w-full aspect-[4/3] rounded-[24px] overflow-hidden border border-line shadow-md order-last lg:order-first">
                <Image
                  src={overviewImages.whatDrivesUs.src}
                  alt={overviewImages.whatDrivesUs.alt}
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
                    WHAT DRIVES US
                  </span>
                </div>
                <h2 className="text-txt-strong text-2xl sm:text-3xl lg:text-[32px] font-black tracking-tight leading-relaxed">
                  We measure our work in outcomes our customers can feel — less downtime, cleaner data, safer sites, and decisions made in real time. Technology is only the means. <span className="text-gradient-brand">Operational excellence is the goal.</span>
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
