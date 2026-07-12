"use client";

import React from "react";
import { FileText, ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/Section";

export function FeaturedInsights() {
  return (
    <Section variant="mist" size="default" pattern="v3" className="relative overflow-hidden">
      {/* Header */}
      <div className="text-left space-y-4">
        <span className="text-brand text-label-bold uppercase tracking-[0.2em] font-sans block">
          FEATURED INSIGHTS
        </span>
        <h2 className="text-txt-strong tracking-tight font-black leading-tight font-sans">
          Featured Insights
        </h2>
        <p className="text-body-md text-txt-muted max-w-[720px] leading-relaxed font-sans">
          Explore our latest thinking on the technologies, strategies, and engineering practices shaping the future of industry.
        </p>
      </div>

      {/* Coming-soon placeholder card */}
      <div className="card mt-12 bg-white border border-line rounded-3xl p-10 md:p-14 text-center relative overflow-hidden">
        {/* Soft brand glow behind */}
        <div 
          className="absolute -top-20 -right-20 w-[300px] h-[300px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(180,18,63,0.10) 0%, transparent 70%)', filter: 'blur(60px)' }}
        />
        
        <div className="relative z-10 flex flex-col items-center">
          <div className="inline-flex w-14 h-14 rounded-full bg-[#B4123F]/10 items-center justify-center shrink-0">
            <FileText className="w-6 h-6 text-[#B4123F]" />
          </div>
          <h3 className="heading-md text-txt-strong mt-6 font-sans font-bold">
            Editorial content in progress
          </h3>
          <p className="text-body-sm text-txt-muted mt-3 max-w-[540px] mx-auto leading-relaxed font-sans">
            We're preparing in-depth articles on Industry 4.0, Industrial AI, OT/IT integration, and connected operations. Subscribe to be first to read.
          </p>
          <a href="#newsletter" className="inline-flex items-center gap-2 mt-8 text-brand font-semibold hover:gap-3 transition-all cursor-pointer font-sans">
            Notify me when live
            <ArrowRight className="w-4 h-4 text-brand" />
          </a>
        </div>
      </div>
    </Section>
  );
}
