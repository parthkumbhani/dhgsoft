// src/app/about/why-dhgsoft/page.tsx
"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Workflow, Factory, Network, Layers, Target, CheckCircle, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { whyImages } from "@/lib/images/why";
import CTABand from "@/components/CTABand";

export default function WhyDHGsoftPage() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const advantages = [
    {
      title: "End-to-End Expertise",
      desc: "One trusted partner from consulting to long-term support. We stay with you from the first assessment through implementation, managed services, and continuous improvement — so accountability never falls between vendors.",
      Icon: Workflow
    },
    {
      title: "Industrial Domain Knowledge",
      desc: "Deep understanding of manufacturing and industrial operations. Our teams have run real plants and know that uptime, safety, and process integrity come first.",
      Icon: Factory
    },
    {
      title: "Connected Intelligence",
      desc: "Transforming industrial data into real-time business intelligence. We turn scattered signals from machines and systems into decisions you can act on immediately.",
      Icon: Network
    },
    {
      title: "Technology Agnostic",
      desc: "Delivering the right solution using leading global technologies. We choose what fits your operation and goals — not a single vendor's catalog.",
      Icon: Layers
    },
    {
      title: "Customer-Centric Delivery",
      desc: "Every engagement is aligned with measurable customer outcomes. We agree on the result up front and hold ourselves to it.",
      Icon: Target
    }
  ];

  const differencePoints = [
    {
      title: "We speak both languages",
      desc: "Fluent in OT and IT — we bridge the divide where most projects stall."
    },
    {
      title: "We minimize disruption",
      desc: "Integration engineered for low-risk, near zero-downtime cutover."
    },
    {
      title: "We stay after go-live",
      desc: "Managed services and continuous optimization keep systems performing."
    },
    {
      title: "We stay neutral",
      desc: "The right technology for the problem, backed by strong partner relationships."
    }
  ];

  const steps = [
    {
      num: "01",
      title: "Consult",
      desc: "Understand the operation, the constraints, and the outcome that matters."
    },
    {
      num: "02",
      title: "Architect",
      desc: "Design a secure, scalable solution across OT, IT, data, and cloud."
    },
    {
      num: "03",
      title: "Implement",
      desc: "Build, integrate, and commission with minimal disruption to operations."
    },
    {
      num: "04",
      title: "Optimize",
      desc: "Support, monitor, and continuously improve after go-live."
    }
  ];

  const outcomes = [
    {
      title: "Less unplanned downtime",
      desc: "Predictive insight and reliable integration keep operations running."
    },
    {
      title: "Faster time to insight",
      desc: "Clean, connected data turns questions into answers in real time."
    },
    {
      title: "Stronger security posture",
      desc: "Secure-by-design engineering protects operations and data."
    },
    {
      title: "Lower operational cost",
      desc: "Efficiency and automation reduce waste across the operation."
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
              src={whyImages.hero.src}
              alt={whyImages.hero.alt}
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
                  WHY DHGSOFT
                </span>
              </div>
              <h1 className="text-white text-headline-xl sm:text-[3.25rem] lg:text-[4.5rem] font-black tracking-tight leading-[1.1]">
                One Partner. End to End.
                <br />
                <span className="text-gradient-brand">Built for Industry.</span>
              </h1>
              <p className="text-slate-300 max-w-2xl leading-relaxed text-body-md font-medium">
                Choosing a digital transformation partner is a decision about trust, depth, and delivery. Here is why industrial organizations choose DHGsoft.
              </p>
            </div>
          </Container>
        </Section>

        {/* ==========================================
            2. ADVANTAGES SECTION
            ========================================== */}
        <Section variant="white" size="default" id="advantages">
          <Container>
            
            <div className="flex flex-col text-left mb-12">
              <div className="flex items-center gap-3 mb-2">
                <div className="h-px w-10 bg-brand" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                  THE ADVANTAGE
                </span>
              </div>
              <h2 className="text-txt-strong font-black tracking-tight leading-tight">
                Our Core Competency
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {advantages.map((adv, idx) => {
                const IconComp = adv.Icon;
                return (
                  <div 
                    key={idx}
                    className="bg-white border border-line rounded-2xl p-6 shadow-sm hover:border-brand/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-start text-left space-y-4"
                  >
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-brand/5 text-brand shrink-0">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h3 className="font-extrabold text-txt-strong text-lg tracking-tight">
                      {adv.title}
                    </h3>
                    <p className="text-txt-muted text-sm leading-relaxed">
                      {adv.desc}
                    </p>
                  </div>
                );
              })}
            </div>

          </Container>
        </Section>

        {/* ==========================================
            3. THE DIFFERENCE SECTION
            ========================================== */}
        <Section variant="ink" size="default" id="difference" className="relative overflow-hidden">
          <div 
            className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full opacity-[0.06]"
            style={{
              background: 'radial-gradient(circle, rgb(180 18 63) 0%, transparent 70%)',
              filter: 'blur(100px)',
            }}
          />
          <Container>
            
            <div className="flex flex-col text-left mb-12">
              <div className="flex items-center gap-3 mb-2">
                <div className="h-px w-10 bg-brand-hot" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-hot">
                  THE DHGSOFT DIFFERENCE
                </span>
              </div>
              <h2 className="text-white font-black tracking-tight leading-tight">
                Why We Stand Out
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              {differencePoints.map((pt, idx) => (
                <div key={idx} className="flex gap-4 items-start bg-slate-900/40 border border-slate-800 p-6 rounded-2xl">
                  <CheckCircle className="w-5 h-5 text-brand-hot shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <h4 className="font-extrabold text-white text-base sm:text-lg tracking-tight">
                      {pt.title}
                    </h4>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {pt.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </Container>
        </Section>

        {/* ==========================================
            4. HOW WE DELIVER
            ========================================== */}
        <Section variant="white" size="default" id="deliver">
          <Container>
            
            <div className="flex flex-col text-left mb-12">
              <div className="flex items-center gap-3 mb-2">
                <div className="h-px w-10 bg-brand" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                  HOW WE DELIVER
                </span>
              </div>
              <h2 className="text-txt-strong font-black tracking-tight leading-tight">
                Lifecycle Execution Framework
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
              {steps.map((st, idx) => (
                <div 
                  key={idx}
                  className="bg-white border border-line rounded-2xl p-6 shadow-xs hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <span className="font-mono text-3xl font-black text-[#8C123B]/20 block">
                      {st.num}
                    </span>
                    <h4 className="font-extrabold text-txt-strong text-base tracking-tight">
                      {st.title}
                    </h4>
                    <p className="text-txt-muted text-xs leading-relaxed">
                      {st.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </Container>
        </Section>

        {/* ==========================================
            5. OUTCOMES SECTION
            ========================================== */}
        <Section variant="brandTint" size="default" id="outcomes">
          <Container>
            
            <div className="flex flex-col text-left mb-12">
              <div className="flex items-center gap-3 mb-2">
                <div className="h-px w-10 bg-brand" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                  WHAT YOU CAN EXPECT
                </span>
              </div>
              <h2 className="text-txt-strong font-black tracking-tight leading-tight">
                Measurable Value
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
              {outcomes.map((out, idx) => (
                <div 
                  key={idx}
                  className="bg-white border border-line rounded-2xl p-6 shadow-xs hover:-translate-y-1 transition-all duration-300 flex flex-col justify-start space-y-4"
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-brand shrink-0 block" />
                  <div className="space-y-2">
                    <h4 className="font-extrabold text-txt-strong text-base tracking-tight leading-snug">
                      {out.title}
                    </h4>
                    <p className="text-txt-muted text-xs leading-relaxed">
                      {out.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </Container>
        </Section>

        {/* ==========================================
            6. COMMITMENT STATEMENT
            ========================================== */}
        <Section variant="white" size="default" id="commitment" className="text-center border-b border-line">
          <Container>
            <div className="max-w-4xl mx-auto">
              <p className="font-extrabold text-xl sm:text-2xl md:text-3xl text-txt-strong tracking-tight leading-relaxed">
                "Every engagement is measured against outcomes we agree on up front. If it doesn't move your operation, it doesn't ship."
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
