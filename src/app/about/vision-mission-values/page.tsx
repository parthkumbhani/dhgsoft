// src/app/about/vision-mission-values/page.tsx
"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Lightbulb, HeartHandshake, ShieldCheck, Award, Users, Leaf, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { vmvImages } from "@/lib/images/vmv";
import CTABand from "@/components/CTABand";

export default function VisionMissionValuesPage() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const coreValues = [
    {
      title: "Innovation",
      desc: "Continuously embracing emerging technologies to solve complex industrial challenges.",
      Icon: Lightbulb
    },
    {
      title: "Customer Success",
      desc: "Our customers' success defines our success. We partner for the long term.",
      Icon: HeartHandshake
    },
    {
      title: "Integrity",
      desc: "Building trusted relationships through transparency and ethical business practices.",
      Icon: ShieldCheck
    },
    {
      title: "Excellence",
      desc: "Delivering high-quality engineering and technology solutions with precision.",
      Icon: Award
    },
    {
      title: "Collaboration",
      desc: "Working together with customers, partners, and technology leaders to create lasting value.",
      Icon: Users
    },
    {
      title: "Sustainability",
      desc: "Helping industries operate more efficiently while supporting environmental responsibility.",
      Icon: Leaf
    }
  ];

  const principles = [
    {
      title: "Process before technology",
      desc: "We understand the operation before we change it."
    },
    {
      title: "Secure by design",
      desc: "Every solution is engineered to protect operations and data."
    },
    {
      title: "Built to scale",
      desc: "What we deploy on one line should standardize across the enterprise."
    },
    {
      title: "Outcomes over output",
      desc: "Success is measured by the business result, not the deliverable."
    }
  ];

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
              src={vmvImages.hero.src}
              alt={vmvImages.hero.alt}
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
                  WHAT GUIDES US
                </span>
              </div>
              <h1 className="text-white text-headline-xl sm:text-[3.25rem] lg:text-[4.5rem] font-black tracking-tight leading-[1.1]">
                Vision, Mission
                <br />
                <span className="text-gradient-brand">& Values</span>
              </h1>
              <p className="text-slate-300 max-w-2xl leading-relaxed text-body-md font-medium">
                The beliefs that shape every engagement, every line of code, and every operation we help transform.
              </p>
            </div>
          </Container>
        </Section>

        {/* ==========================================
            2. OUR VISION (Split layout)
            ========================================== */}
        <Section variant="white" size="default" id="vision">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Left Column: Text */}
              <div className="lg:col-span-7 space-y-6 text-left">
                <div className="flex items-center gap-3">
                  <div className="h-px w-10 bg-brand" />
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                    OUR VISION
                  </span>
                </div>
                <h2 className="text-txt-strong text-2xl sm:text-3xl lg:text-[34px] font-extrabold tracking-tight leading-snug">
                  To become a globally trusted leader in Industrial Digital Transformation by enabling connected, intelligent, and sustainable industries.
                </h2>
                <p className="text-body-md text-txt-muted leading-relaxed font-sans">
                  We see a future where every industrial asset is connected, every decision is informed by real-time intelligence, and every operation runs cleaner and safer than the day before. We are building the engineering foundation that makes that future practical.
                </p>
              </div>

              {/* Right Column: Image */}
              <div className="lg:col-span-5 relative w-full aspect-[16/10] rounded-[24px] overflow-hidden border border-line shadow-md">
                <Image
                  src={vmvImages.vision.src}
                  alt={vmvImages.vision.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>

            </div>
          </Container>
        </Section>

        {/* ==========================================
            3. OUR MISSION (Split layout)
            ========================================== */}
        <Section variant="mist" size="default" id="mission">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Left Column: Image */}
              <div className="lg:col-span-5 relative w-full aspect-[16/10] rounded-[24px] overflow-hidden border border-line shadow-md order-last lg:order-first">
                <Image
                  src={vmvImages.mission.src}
                  alt={vmvImages.mission.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>

              {/* Right Column: Text */}
              <div className="lg:col-span-7 space-y-6 text-left">
                <div className="flex items-center gap-3">
                  <div className="h-px w-10 bg-brand" />
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                    OUR MISSION
                  </span>
                </div>
                <h2 className="text-txt-strong text-2xl sm:text-3xl lg:text-[34px] font-extrabold tracking-tight leading-snug">
                  To empower industries with innovative digital engineering solutions that connect operational technology, enterprise systems, and data intelligence to improve operational excellence.
                </h2>
                <p className="text-body-md text-txt-muted leading-relaxed font-sans">
                  Our mission is deliberately practical. We help organizations connect what was disconnected, standardize what was fragmented, and act on data that was previously trapped — so that operational excellence becomes a repeatable capability, not a one-time project.
                </p>
              </div>

            </div>
          </Container>
        </Section>

        {/* ==========================================
            4. OUR PURPOSE
            ========================================== */}
        <Section variant="ink" size="default" id="purpose" className="text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-ink/10 pointer-events-none" />
          <Container className="relative z-10 space-y-6">
            <span className="text-xs font-extrabold uppercase tracking-widest text-brand-hot">
              OUR PURPOSE
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-white tracking-tight leading-tight">
              Connecting Intelligence to Transform Industry.
            </h2>
          </Container>
        </Section>

        {/* ==========================================
            5. CORE VALUES
            ========================================== */}
        <Section variant="white" size="default" id="values">
          <Container>
            
            <div className="flex flex-col text-left mb-12">
              <div className="flex items-center gap-3 mb-2">
                <div className="h-px w-10 bg-brand" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                  CORE VALUES
                </span>
              </div>
              <h2 className="text-txt-strong font-black tracking-tight leading-tight">
                Our Driving Principles
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {coreValues.map((val, idx) => {
                const IconComp = val.Icon;
                return (
                  <div 
                    key={idx}
                    className="bg-white border border-line rounded-2xl p-6 shadow-sm hover:border-brand/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-start text-left space-y-4"
                  >
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-brand/5 text-brand shrink-0">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h3 className="font-extrabold text-txt-strong text-lg tracking-tight">
                      {val.title}
                    </h3>
                    <p className="text-txt-muted text-sm leading-relaxed">
                      {val.desc}
                    </p>
                  </div>
                );
              })}
            </div>

          </Container>
        </Section>

        {/* ==========================================
            6. HOW WE WORK
            ========================================== */}
        <Section variant="brandTint" size="default" id="principles">
          <Container>
            
            <div className="flex flex-col text-left mb-12">
              <div className="flex items-center gap-3 mb-2">
                <div className="h-px w-10 bg-brand" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                  HOW WE WORK
                </span>
              </div>
              <h2 className="text-txt-strong font-black tracking-tight leading-tight">
                Operating Principles
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
              {principles.map((pr, idx) => (
                <div 
                  key={idx}
                  className="bg-white border border-line rounded-2xl p-6 shadow-xs hover:-translate-y-1 transition-all duration-300 flex flex-col justify-start space-y-3"
                >
                  <span className="text-[10px] font-extrabold text-brand font-mono">
                    PRINCIPLE 0{idx + 1}
                  </span>
                  <h4 className="font-extrabold text-txt-strong text-base tracking-tight leading-snug">
                    {pr.title}
                  </h4>
                  <p className="text-txt-muted text-xs leading-relaxed">
                    {pr.desc}
                  </p>
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
