// src/app/industries/page.tsx
"use client";
import { Section } from "@/components/ui/Section";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Activity, Cpu, Layers, Server, Factory, HardHat } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import { INDUSTRIES_MAP } from "@/lib/industries";

export default function ExploreIndustriesPage() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const industries = Object.values(INDUSTRIES_MAP);

  return (
    <div className="min-h-screen bg-white text-slate-800 antialiased font-sans selection:bg-[#B4123F] selection:text-white">
      {/* Header */}
      <Header onContactClick={() => setIsContactOpen(true)} />

      <main className="relative pt-20">
        
        {/* Hero Section with Grid/Gradient Pattern */}
        <Section variant="ink" containerSize="wide" className="relative overflow-hidden border-b border-slate-900">
          <div className="absolute inset-0 bg-tech-grid opacity-25 pointer-events-none" />
          <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-brand/10 blur-[130px] pointer-events-none" />
          
          <div className="w-full relative z-10 text-left space-y-6">
            <span className="text-xs font-extrabold uppercase tracking-[0.3em] text-brand-hot font-mono block">
              INDUSTRIES
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-black text-white tracking-tight leading-[1.05] max-w-4xl">
              Industries We Serve
            </h1>
            <p className="text-slate-300 font-medium text-base sm:text-lg leading-relaxed max-w-2xl">
              Delivering custom software architectures, OT/IT bridges, and secure platforms for critical global sectors.
            </p>
          </div>
        </Section>

        {/* 14 Industry Cards Grid */}
        <Section variant="mist" containerSize="wide" className=" relative bg-dot-matrix">
          <div className="w-full relative z-10 space-y-12">
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((ind) => (
                <Link
                  key={ind.slug}
                  href={`/industries/${ind.slug}`}
                  className="group flex flex-col bg-white border border-line rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-brand/40 hover:-translate-y-1.5 transition-all duration-300 text-left"
                >
                  {/* Card Image */}
                  <div className="relative w-full h-[220px] overflow-hidden">
                    <Image
                      src={ind.image.src}
                      alt={ind.image.alt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 pointer-events-none" />
                    <div className="absolute bottom-4 left-4 flex items-center gap-2">
                      <span className="bg-brand/90 backdrop-blur-md text-white text-[10px] font-extrabold tracking-widest uppercase px-2.5 py-1 rounded-md font-mono">
                        {ind.category}
                      </span>
                    </div>
                  </div>

                  {/* Card Info */}
                  <div className="p-6 flex-grow flex flex-col justify-between">
                    <div className="space-y-3">
                      <h4 className="font-extrabold text-text-strong text-xl tracking-tight leading-snug group-hover:text-brand transition-colors">
                        {ind.title}
                      </h4>
                      <p className="text-text-muted text-sm leading-relaxed line-clamp-3">
                        {ind.sub}
                      </p>
                    </div>

                    <div className="pt-6 flex items-center justify-between mt-auto">
                      <span className="font-extrabold text-xs tracking-wider uppercase text-brand group-hover:text-brand-hot transition-colors flex items-center gap-1">
                        <span>Explore Industry</span>
                        <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

          </div>
        </Section>

        {/* CTA Band */}
        <Section variant="gradient" containerSize="wide" className="relative overflow-hidden text-center">
          <div className="absolute inset-0 bg-ink/10 pointer-events-none" />
          <div className="w-full relative z-10 space-y-6">
            <span className="text-xs font-extrabold uppercase tracking-[0.3em] text-white/90 font-mono block">
              LET&apos;S BUILD
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-[46px] font-black text-white tracking-tight leading-tight">
              Find your industry. Build what&apos;s next.
            </h2>
            <div className="pt-4">
              <button
                onClick={() => setIsContactOpen(true)}
                className="bg-white hover:bg-slate-100 text-brand font-extrabold text-sm sm:text-base px-8 py-4 rounded-xl transition-all duration-300 shadow-md active:scale-95 cursor-pointer"
              >
                Talk to an Expert
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
