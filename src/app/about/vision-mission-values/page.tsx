// src/app/about/vision-mission-values/page.tsx
"use client";
import { Section } from "@/components/ui/Section";

import React, { useState } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import { vmvImages } from "@/lib/images/vmv";
import {
  Lightbulb,
  HeartHandshake,
  ShieldCheck,
  Award,
  Users,
  Leaf,
  Scale
} from "lucide-react";

const coreValues = [
  {
    title: "Innovation",
    desc: "Continuously embracing emerging technologies to solve complex industrial challenges.",
    Icon: Lightbulb
  },
  {
    title: "Customer Success",
    desc: "Our customers' success defines our success.",
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
    desc: "Working together with customers, partners, universities, and technology leaders to create lasting value.",
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

export default function VisionMissionValuesPage() {
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
              src={vmvImages.hero.src}
              alt={vmvImages.hero.alt}
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
                <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-brand-hot font-mono block">
                  WHAT GUIDES US
                </span>
                <h1 className="text-3xl sm:text-4xl lg:text-[50px] font-black text-white tracking-tight leading-[1.1] font-sans">
                  Vision, Mission & Values
                </h1>
                <p className="text-slate-300 font-medium text-base sm:text-lg leading-relaxed">
                  The beliefs that shape every engagement, every line of code, and every operation we help transform.
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* 2. Our Vision */}
        <Section variant="mist" containerSize="wide" className=" border-b border-line overflow-hidden relative bg-dot-matrix">
          <div className="w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6 text-left">
              <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-brand font-mono block">
                OUR VISION
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-text-strong tracking-tight leading-tight">
                To become a globally trusted leader in Industrial Digital Transformation by enabling connected, intelligent, and sustainable industries.
              </h2>
              <p className="text-text-muted text-sm sm:text-base leading-relaxed">
                We see a future where every industrial asset is connected, every decision is informed by real-time intelligence, and every operation runs cleaner and safer than the day before. We are building the engineering foundation that makes that future practical.
              </p>
            </div>
            <div className="lg:col-span-6 relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-line shadow-sm">
              <Image
                src={vmvImages.vision.src}
                alt={vmvImages.vision.alt}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </Section>

        {/* 3. Our Mission */}
        <Section variant="white" containerSize="wide" className="bg-white border-b border-line overflow-hidden relative bg-tech-grid">
          <div className="w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1 relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-line shadow-sm">
              <Image
                src={vmvImages.mission.src}
                alt={vmvImages.mission.alt}
                fill
                className="object-cover"
              />
            </div>
            <div className="lg:col-span-6 order-1 lg:order-2 space-y-6 text-left">
              <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-brand font-mono block">
                OUR MISSION
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-text-strong tracking-tight leading-tight">
                To empower industries with innovative digital engineering solutions that connect operational technology, enterprise systems, and data intelligence to improve operational excellence and business performance.
              </h2>
              <p className="text-text-muted text-sm sm:text-base leading-relaxed">
                Our mission is deliberately practical. We help organizations connect what was disconnected, standardize what was fragmented, and act on data that was previously trapped — so that operational excellence becomes a repeatable capability, not a one-time project.
              </p>
            </div>
          </div>
        </Section>

        {/* 4. Our Purpose */}
        <Section variant="gradient" containerSize="wide" className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 to-transparent opacity-30 pointer-events-none" />
          <div className="w-full relative z-10 text-center space-y-4">
            <span className="text-[10px] md:text-xs font-extrabold uppercase tracking-[0.3em] text-white/80 font-mono block">
              OUR PURPOSE
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-[44px] font-black text-white tracking-tight leading-tight select-none">
              Connecting Intelligence to Transform Industry.
            </h2>
          </div>
        </Section>

        {/* 5. Our Core Values */}
        <Section variant="ink" containerSize="wide" className=" text-white border-b border-slate-900 overflow-hidden">
          <div className="w-full relative z-10">
            <div className="text-left mb-12">
              <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-brand-hot font-mono block mb-2">
                CORE PHILOSOPHY
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Our Core Values
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
              {coreValues.map((val, idx) => {
                const { title, desc, Icon } = val;
                return (
                  <div
                    key={idx}
                    className="bg-ink-2 border border-slate-800 rounded-xl p-6 shadow-sm hover:border-brand-hot hover:-translate-y-1 transition-all duration-300 flex flex-col justify-start text-left space-y-4"
                  >
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-brand/10 text-brand-hot shrink-0">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-extrabold text-white text-lg tracking-tight">{title}</h3>
                      <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Section>

        {/* 6. How We Work */}
        <Section variant="brandTint" containerSize="wide" className=" border-b border-line relative bg-tech-grid">
          <div className="w-full relative z-10">
            <div className="text-left mb-12">
              <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-brand font-mono block">
                HOW WE WORK
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
              {principles.map((pr, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-line rounded-xl p-6 shadow-sm flex flex-col justify-start text-left space-y-3 hover:-translate-y-1 transition-all duration-300"
                >
                  <span className="text-[10px] font-extrabold text-brand font-mono">PRINCIPLE 0{idx + 1}</span>
                  <h4 className="font-extrabold text-text-strong text-base tracking-tight leading-snug">{pr.title}</h4>
                  <p className="text-text-muted text-xs sm:text-sm leading-relaxed">{pr.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* 7. CTA Band */}
        <Section variant="gradient" containerSize="wide" className="relative overflow-hidden text-center">
          <div className="absolute inset-0 bg-ink/10 pointer-events-none" />
          <div className="w-full relative z-10 space-y-6">
            <span className="text-xs font-extrabold uppercase tracking-[0.3em] text-white/90 font-mono block">
              PARTNER WITH US
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-[46px] font-black text-white tracking-tight leading-tight">
              Values in action, on your plant floor.
            </h2>
            <div className="pt-4">
              <button
                onClick={() => setIsContactOpen(true)}
                className="bg-white hover:bg-slate-100 text-brand font-extrabold text-sm sm:text-base px-8 py-4 rounded-xl transition-all duration-300 shadow-md active:scale-95 cursor-pointer"
              >
                Start a Conversation
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
