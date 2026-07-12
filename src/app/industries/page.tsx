// src/app/industries/page.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import { INDUSTRIES_MAP } from "@/lib/industries";

import { Button } from "@/components/ui/button";
import Eyebrow from "@/components/ui/Eyebrow";
import { Card } from "@/components/ui/card";
import SectionBand from "@/components/ui/SectionBand";

export default function ExploreIndustriesPage() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const industries = Object.values(INDUSTRIES_MAP);

  return (
    <div className="min-h-screen bg-white text-txt-strong antialiased font-sans selection:bg-brand selection:text-white">
      {/* Header */}
      <Header onContactClick={() => setIsContactOpen(true)} />

      <main className="relative pt-20">
        
        {/* Hero Section with Grid/Gradient Pattern */}
        <section className="relative bg-ink overflow-hidden py-20 border-b border-line/10">
          <div className="absolute inset-0 bg-tech-grid opacity-25 pointer-events-none" />
          <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-brand/10 blur-[130px] pointer-events-none" />
          
          <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-[120px] relative z-10 text-left space-y-6">
            <span className="text-xs font-extrabold uppercase tracking-[0.3em] text-brand-hot font-mono block">
              INDUSTRIES
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-black text-white tracking-tight leading-[1.05] max-w-4xl">
              Industries We Serve
            </h1>
            <p className="text-white/80 font-medium text-base sm:text-lg leading-relaxed max-w-2xl">
              Delivering custom software architectures, OT/IT bridges, and secure platforms for critical global sectors.
            </p>
          </div>
        </section>

        {/* 14 Industry Cards Grid */}
        <SectionBand variant="mist">
          <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-[120px] space-y-12">
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((ind) => (
                <Link
                  key={ind.slug}
                  href={`/industries/${ind.slug}`}
                  className="group block"
                >
                  <Card
                    hoverEffect={true}
                    className="overflow-hidden flex flex-col justify-between text-left h-full min-h-[420px] p-0 border border-line"
                  >
                    {/* Card Image */}
                    <div className="relative w-full h-[220px] overflow-hidden bg-mist">
                      <Image
                        src={ind.image.src}
                        alt={ind.image.alt}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent opacity-60 pointer-events-none" />
                      <div className="absolute bottom-4 left-4 flex items-center gap-2">
                        <span className="bg-brand/90 backdrop-blur-md text-white text-[10px] font-extrabold tracking-widest uppercase px-2.5 py-1 rounded-md font-mono">
                          {ind.category}
                        </span>
                      </div>
                    </div>

                    {/* Card Info */}
                    <div className="p-6 flex-grow flex flex-col justify-between">
                      <div className="space-y-3">
                        <h3 className="font-extrabold text-txt-strong text-xl tracking-tight leading-snug group-hover:text-brand transition-colors">
                          {ind.title}
                        </h3>
                        <p className="text-txt-muted text-sm leading-relaxed line-clamp-3">
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
                  </Card>
                </Link>
              ))}
            </div>

          </div>
        </SectionBand>

        {/* CTA Band */}
        <SectionBand variant="gradient" className="text-center py-20">
          <div className="absolute inset-0 bg-ink/10 pointer-events-none" />
          <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-[120px] relative z-10 space-y-6">
            <span className="text-xs font-extrabold uppercase tracking-[0.3em] text-white/90 font-mono block">
              LET&apos;S BUILD
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-[46px] font-black text-white tracking-tight leading-tight">
              Find your industry. Build what&apos;s next.
            </h2>
            <div className="pt-4">
              <Button
                onClick={() => setIsContactOpen(true)}
                variant="onDark"
                size="lg"
              >
                Talk to an Expert
              </Button>
            </div>
          </div>
        </SectionBand>

      </main>

      {/* Footer */}
      <Footer />

      {/* Contact Modal */}
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} showToast={(msg, type) => {}} />
    </div>
  );
}
