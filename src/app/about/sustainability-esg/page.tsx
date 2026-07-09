// src/app/about/sustainability-esg/page.tsx
"use client";
import { Section } from "@/components/ui/Section";

import React, { useState } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import { sustainabilityImages } from "@/lib/images/sustainability";
import {
  Leaf,
  Users,
  Scale,
  Gauge,
  LineChart,
  Droplets,
  Recycle
} from "lucide-react";

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
    <div className="min-h-screen bg-white text-slate-800 antialiased font-sans selection:bg-[#B4123F] selection:text-white">
      {/* Sticky Header */}
      <Header onContactClick={() => setIsContactOpen(true)} />

      <main className="relative pt-20">

        {/* 1. Hero Band */}
        <Section variant="ink" containerSize="wide" className="relative min-h-[500px] flex items-center overflow-hidden ">
          <div className="absolute inset-0 z-0">
            <Image
              src={sustainabilityImages.hero.src}
              alt={sustainabilityImages.hero.alt}
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
                  SUSTAINABILITY & ESG
                </span>
                <h1 className="text-3xl sm:text-4xl lg:text-[50px] font-black text-white tracking-tight leading-[1.1] font-sans">
                  Engineering a More Sustainable Industry
                </h1>
                <p className="section-subtitle on-dark">
                  DHGsoft helps industrial organizations operate more efficiently while reducing their environmental impact — and holds itself to the same standard.
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* 2. Our Commitment */}
        <Section variant="mist" containerSize="wide" className=" border-b border-line overflow-hidden relative bg-dot-matrix">
          <div className="w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6 text-left">
              <span className="section-eyebrow">
                OUR COMMITMENT
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-text-strong tracking-tight leading-tight">
                Sustainability is an outcome of good engineering
              </h2>
              <p className="section-subtitle">
                We believe efficiency and sustainability go hand in hand. When operations run smarter — with less waste, less energy, and fewer failures — they also run cleaner. Helping industries operate more efficiently while supporting environmental responsibility is core to how we engineer.
              </p>
            </div>
            <div className="lg:col-span-5 relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-line shadow-sm">
              <Image
                src={sustainabilityImages.commitment.src}
                alt={sustainabilityImages.commitment.alt}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </Section>

        {/* 3. Our ESG Framework */}
        <Section variant="brandTint" containerSize="wide" className=" border-b border-line relative bg-tech-grid">
          <div className="w-full relative z-10 space-y-12">
            <div className="text-left">
              <span className="section-eyebrow">
                OUR ESG FRAMEWORK
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full">
              {esgPillars.map((pillar, idx) => {
                const { title, desc, Icon } = pillar;
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

        {/* 4. Sustainable Operations Capabilities */}
        <Section variant="white" containerSize="wide" className="bg-white border-b border-line relative bg-tech-grid">
          <div className="w-full relative z-10 space-y-12">
            <div className="text-left">
              <span className="section-eyebrow">
                SUSTAINABLE OPERATIONS
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full text-left">
              {capabilities.map((cap, idx) => {
                const { title, desc, Icon } = cap;
                return (
                  <div
                    key={idx}
                    className="bg-white border border-line rounded-xl p-6 shadow-sm flex flex-col justify-start space-y-3 hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-brand/5 text-brand shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="font-extrabold text-text-strong text-base tracking-tight leading-snug">{title}</h4>
                    <p className="card-description">{desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </Section>

        {/* 5. Our Own Practices */}
        <Section variant="mist" containerSize="wide" className=" border-b border-line overflow-hidden relative bg-dot-matrix">
          <div className="w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 order-2 lg:order-1 relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-line shadow-sm">
              <Image
                src={sustainabilityImages.practices.src}
                alt={sustainabilityImages.practices.alt}
                fill
                className="object-cover"
              />
            </div>
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-6 text-left">
              <span className="section-eyebrow">
                OUR PRACTICES
              </span>
              <p className="text-text-strong font-bold text-xl sm:text-2xl leading-relaxed">
                We hold ourselves to the same standards we help our customers meet — running our operations responsibly and continuously improving our own environmental footprint.
              </p>
              <p className="text-xs text-text-muted italic pt-2">
                Add specific, verifiable sustainability commitments and targets here.
              </p>
            </div>
          </div>
        </Section>

        {/* 6. CTA Band */}
        <Section variant="gradient" containerSize="wide" className="relative overflow-hidden text-center">
          <div className="absolute inset-0 bg-ink/10 pointer-events-none" />
          <div className="w-full relative z-10 space-y-6">
            <span className="section-eyebrow on-dark">
              LET&apos;S TALK
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-[46px] font-black text-white tracking-tight leading-tight">
              Build cleaner, more efficient operations.
            </h2>
            <div className="pt-4">
              <button
                onClick={() => setIsContactOpen(true)}
                className="bg-white hover:bg-slate-100 text-brand font-extrabold text-sm sm:text-base px-8 py-4 rounded-xl transition-all duration-300 shadow-md active:scale-95 cursor-pointer"
              >
                Talk Sustainability
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
