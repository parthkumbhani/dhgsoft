// src/app/about/why-dhgsoft/page.tsx
"use client";
import { Section } from "@/components/ui/Section";

import React, { useState } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import { whyImages } from "@/lib/images/why";
import {
  Workflow,
  Factory,
  Network,
  Layers,
  Target,
  CheckCircle,
  HelpCircle
} from "lucide-react";

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

export default function WhyDHGsoftPage() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-800 antialiased font-sans selection:bg-[#B4123F] selection:text-white">
      {/* Sticky Header */}
      <Header onContactClick={() => setIsContactOpen(true)} />

      <main className="relative pt-20">

        {/* 1. Hero Band */}
        <Section variant="ink" containerSize="wide" className="relative min-h-[500px] flex items-center overflow-hidden ">
          <div className="absolute inset-0 z-0">
            <Image
              src={whyImages.hero.src}
              alt={whyImages.hero.alt}
              fill
              priority
              className="object-cover object-center opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-transparent" />
          </div>
          <div className="w-full relative z-10 py-16 md:py-20">
            <div className="max-w-3xl text-left flex gap-6">
              <div className="w-[4px] bg-brand rounded-full self-stretch shrink-0" />
              <div className="space-y-4">
                <span className="section-eyebrow">
                  WHY DHGSOFT
                </span>
                <h1 className="text-3xl sm:text-4xl lg:text-[50px] font-black text-white tracking-tight leading-[1.1] font-sans">
                  One Partner. End to End. Built for Industry.
                </h1>
                <p className="section-subtitle on-dark">
                  Choosing a digital transformation partner is a decision about trust, depth, and delivery. Here is why industrial organizations choose DHGsoft.
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* 2. Why Organizations Choose Us */}
        <Section variant="white" containerSize="wide" className="bg-white border-b border-line overflow-hidden relative bg-tech-grid">
          <div className="w-full relative z-10 space-y-12">
            <div className="text-left">
              <span className="section-eyebrow">
                THE ADVANTAGE
              </span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {advantages.map((adv, idx) => {
                const { title, desc, Icon } = adv;
                return (
                  <div
                    key={idx}
                    className="bg-white border border-line rounded-xl p-6 shadow-sm hover:border-brand/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-start text-left space-y-4"
                  >
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-brand/5 text-brand shrink-0">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-extrabold text-text-strong text-lg tracking-tight">{title}</h3>
                      <p className="text-text-muted text-sm leading-relaxed">{desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Section>

        {/* 3. The DHGsoft Difference */}
        <Section variant="ink" containerSize="wide" className=" text-white border-b border-slate-900 overflow-hidden">
          <div className="w-full relative z-10 space-y-12">
            <div className="text-left">
              <span className="section-eyebrow">
                THE DHGSOFT DIFFERENCE
              </span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              {differencePoints.map((pt, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <CheckCircle className="w-6 h-6 text-brand-hot shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <h4 className="font-extrabold text-white text-base sm:text-lg tracking-tight">{pt.title}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{pt.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* 4. How We Deliver */}
        <Section variant="mist" containerSize="wide" className=" border-b border-line overflow-hidden relative bg-dot-matrix">
          <div className="w-full relative z-10 space-y-12">
            <div className="text-left">
              <span className="section-eyebrow">
                HOW WE DELIVER
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full text-left">
              {steps.map((st, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-line rounded-xl p-6 shadow-sm flex flex-col justify-between h-full hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="space-y-3">
                    <span className="font-mono font-black text-3xl text-brand/20 block">{st.num}</span>
                    <h4 className="font-extrabold text-text-strong text-base tracking-tight">{st.title}</h4>
                    <p className="card-description">{st.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* 5. Outcomes We Focus On */}
        <Section variant="brandTint" containerSize="wide" className=" border-b border-line relative bg-tech-grid">
          <div className="w-full relative z-10 space-y-12">
            <div className="text-left">
              <span className="section-eyebrow">
                WHAT YOU CAN EXPECT
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full text-left">
              {outcomes.map((out, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-line rounded-xl p-6 shadow-sm flex flex-col justify-start space-y-3 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-2.5 h-2.5 rounded-full bg-brand" />
                  <h4 className="font-extrabold text-text-strong text-base tracking-tight leading-snug">{out.title}</h4>
                  <p className="card-description">{out.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* 6. Our Commitment */}
        <Section variant="white" containerSize="wide" className="bg-white border-b border-line text-center overflow-hidden">
          <div className="max-w-[1000px] mx-auto px-6">
            <p className="font-extrabold text-xl sm:text-2xl md:text-3xl text-text-strong tracking-tight leading-relaxed">
              Every engagement is measured against outcomes we agree on up front. If it doesn&apos;t move your operation, it doesn&apos;t ship.
            </p>
          </div>
        </Section>

        {/* 7. CTA Band */}
        <Section variant="gradient" containerSize="wide" className="relative overflow-hidden text-center">
          <div className="absolute inset-0 bg-ink/10 pointer-events-none" />
          <div className="w-full relative z-10 space-y-6">
            <span className="section-eyebrow on-dark">
              CONSULTATION
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-[46px] font-black text-white tracking-tight leading-tight">
              See what a true end-to-end partner delivers.
            </h2>
            <div className="pt-4">
              <button
                onClick={() => setIsContactOpen(true)}
                className="bg-white hover:bg-slate-100 text-brand font-extrabold text-sm sm:text-base px-8 py-4 rounded-xl transition-all duration-300 shadow-md active:scale-95 cursor-pointer"
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
