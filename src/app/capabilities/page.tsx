// src/app/capabilities/page.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Cpu, Network, Database, BrainCircuit, Radio, DraftingCompass, AppWindow, Cloud, ShieldCheck, Settings } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";

const categories = [
  {
    name: "Digital Transformation",
    desc: "Unifying operations, machinery, and business architectures.",
    items: [
      {
        name: "Industrial Digital Transformation",
        desc: "Modernize your entire operation into a connected digital ecosystem.",
        href: "/capabilities/industrial-digital-transformation",
        Icon: Cpu
      },
      {
        name: "OT / IT Integration",
        desc: "Connect plant floor operational technology securely to enterprise IT.",
        href: "/capabilities/ot-it-integration",
        Icon: Network
      },
      {
        name: "Industrial Data Platforms",
        desc: "Collect and unify high-speed operational data ready for analytics.",
        href: "/capabilities/industrial-data-platforms",
        Icon: Database
      }
    ]
  },
  {
    name: "AI & Intelligence",
    desc: "Deploying predictive algorithms and edge telemetry systems.",
    items: [
      {
        name: "Artificial Intelligence & Analytics",
        desc: "Turn industrial data into predictions and process yield optimization.",
        href: "/capabilities/ai-analytics",
        Icon: BrainCircuit
      },
      {
        name: "Industrial Internet of Things (IIoT)",
        desc: "Connect and monitor machine assets at scale with edge computing.",
        href: "/capabilities/iiot",
        Icon: Radio
      }
    ]
  },
  {
    name: "Digital Engineering",
    desc: "Custom software and synchronized execution layers.",
    items: [
      {
        name: "Digital Engineering Services",
        desc: "Custom software, applications, and APIs for industrial operations.",
        href: "/capabilities/digital-engineering",
        Icon: DraftingCompass
      },
      {
        name: "Enterprise Applications",
        desc: "Integrate ERP, MES, and PLM for order-to-output trace visibility.",
        href: "/capabilities/enterprise-applications",
        Icon: AppWindow
      }
    ]
  },
  {
    name: "Cloud & Infrastructure",
    desc: "Scale infrastructure securely across hybrid networks.",
    items: [
      {
        name: "Cloud & Infrastructure",
        desc: "Hybrid cloud and compute setups for mission-critical industrial uptime.",
        href: "/capabilities/cloud-infrastructure",
        Icon: Cloud
      },
      {
        name: "Cybersecurity",
        desc: "OT/IT zero-trust segmentation and continuous threat protection.",
        href: "/capabilities/cybersecurity",
        Icon: ShieldCheck
      },
      {
        name: "Managed Services",
        desc: "Round-the-clock monitoring and continuous system optimization.",
        href: "/capabilities/managed-services",
        Icon: Settings
      }
    ]
  }
];

export default function CapabilitiesLandingPage() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-800 antialiased font-sans selection:bg-[#B4123F] selection:text-white">
      {/* Header */}
      <Header onContactClick={() => setIsContactOpen(true)} />

      <main className="relative pt-20">

        {/* Hero Section */}
        <section className="relative bg-ink overflow-hidden min-h-[400px] flex items-center border-b border-slate-900">
          <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />
          <div className="absolute top-1/3 left-1/3 w-[300px] h-[300px] rounded-full bg-brand/10 blur-[100px] pointer-events-none" />
          
          <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-[120px] w-full py-16 md:py-20 relative z-10 text-left">
            <div className="max-w-3xl space-y-4">
              <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-brand-hot font-mono block">
                CAPABILITIES
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-black text-white tracking-tight leading-[1.1]">
                What We Do
              </h1>
              <p className="text-slate-300 font-medium text-base sm:text-lg sm:leading-relaxed max-w-2xl">
                End-to-end digital engineering for connected, intelligent industry — from the plant floor to the cloud.
              </p>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="bg-mist py-16 md:py-20 relative bg-dot-matrix">
          <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-[120px] space-y-16">
            
            {categories.map((category, idx) => (
              <div key={idx} className="space-y-6">
                {/* Category Header */}
                <div className="text-left space-y-2 border-b border-line pb-4">
                  <h2 className="text-2xl font-black text-text-strong tracking-tight">{category.name}</h2>
                  <p className="text-text-muted text-sm sm:text-base font-semibold">{category.desc}</p>
                </div>

                {/* Grid of capabilities */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.items.map((item, itemIdx) => {
                    const { name, desc, href, Icon } = item;
                    return (
                      <Link
                        key={itemIdx}
                        href={href}
                        className="bg-white border border-line rounded-xl p-6 shadow-sm hover:border-brand/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between text-left group"
                      >
                        <div className="space-y-4">
                          <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-brand/5 text-brand shrink-0">
                            <Icon className="w-6 h-6" />
                          </div>
                          <div className="space-y-2">
                            <h3 className="font-extrabold text-text-strong text-lg tracking-tight group-hover:text-brand transition-colors">
                              {name}
                            </h3>
                            <p className="text-text-muted text-sm leading-relaxed">{desc}</p>
                          </div>
                        </div>

                        <div className="pt-6 mt-auto flex items-center justify-start gap-1.5 text-brand font-bold text-sm tracking-wide">
                          <span>Learn More</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}

          </div>
        </section>

        {/* CTA Band */}
        <section className="relative overflow-hidden bg-gradient-to-r from-brand-hot via-brand to-brand-deep py-20 text-center">
          <div className="absolute inset-0 bg-ink/10 pointer-events-none" />
          <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-[120px] relative z-10 space-y-6">
            <span className="text-xs font-extrabold uppercase tracking-[0.3em] text-white/90 font-mono block">
              LET&apos;S TALK
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-[46px] font-black text-white tracking-tight leading-tight">
              Ready to modernize your operations?
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
        </section>

      </main>

      {/* Footer */}
      <Footer />

      {/* Contact Modal */}
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} showToast={(msg, type) => {}} />
    </div>
  );
}
