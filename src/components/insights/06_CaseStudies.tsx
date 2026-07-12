"use client";

import React from "react";
import { LineChart, ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/Section";

export function CaseStudies() {
  return (
    <Section variant="white" size="default" pattern="v5" className="relative overflow-hidden border-b border-line/10">
      {/* Header */}
      <div className="text-left space-y-4">
        <span className="text-brand text-label-bold uppercase tracking-[0.2em] font-sans block">
          CASE STUDIES
        </span>
        <h2 className="text-txt-strong tracking-tight font-black leading-tight font-sans">
          Case Studies
        </h2>
        <div className="space-y-3">
          <p className="text-body-md text-txt-muted max-w-[720px] leading-relaxed font-sans">
            See how organizations solve complex engineering challenges through intelligent automation, industrial connectivity, digital platforms, and operational intelligence.
          </p>
          <p className="text-body-sm text-txt-muted max-w-[720px] leading-relaxed font-sans">
            Each case study highlights practical solutions, measurable outcomes, and lessons learned from real-world implementations.
          </p>
        </div>
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
            <LineChart className="w-6 h-6 text-[#B4123F]" />
          </div>
          <h3 className="heading-md text-txt-strong mt-6 font-sans font-bold">
            Case studies coming soon
          </h3>
          <p className="text-body-sm text-txt-muted mt-3 max-w-[540px] mx-auto leading-relaxed font-sans">
            We're documenting recent industrial transformation projects across manufacturing, energy, and process industries. Sign up to receive them as they're published.
          </p>
          <a href="#newsletter" className="inline-flex items-center gap-2 mt-8 text-brand font-semibold hover:gap-3 transition-all cursor-pointer font-sans">
            Get notified
            <ArrowRight className="w-4 h-4 text-brand" />
          </a>
        </div>
      </div>
    </Section>
  );
}
