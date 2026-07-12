"use client";

import React from "react";
import { FileText, ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/Section";

export function Whitepapers() {
  return (
    <Section variant="mist" size="default" pattern="v7" className="relative overflow-hidden border-b border-line/10">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center space-y-4">
        <span className="text-brand text-label-bold uppercase tracking-[0.2em] font-sans block">
          WHITEPAPERS
        </span>
        <h2 className="text-txt-strong tracking-tight font-black leading-tight font-sans">
          Whitepapers
        </h2>
      </div>

      {/* Content card */}
      <div className="card mt-10 bg-white border border-line rounded-3xl p-8 md:p-12 relative overflow-hidden text-left shadow-sm">
        {/* Soft brand glow behind */}
        <div 
          className="absolute -top-20 -right-20 w-[300px] h-[300px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(180,18,63,0.08) 0%, transparent 70%)', filter: 'blur(60px)' }}
        />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
          <div className="md:col-span-8 space-y-4">
            <p className="text-body-md text-txt-strong leading-relaxed font-sans font-medium">
              Access in-depth technical resources covering industrial architecture, digital transformation strategies, emerging technologies, cybersecurity frameworks, and engineering best practices.
            </p>
            <p className="text-body-sm text-txt-muted leading-relaxed font-sans">
              Designed for engineering leaders, digital transformation teams, and operational decision-makers.
            </p>
            <a href="#newsletter" className="inline-flex items-center gap-2 mt-6 text-brand font-semibold hover:gap-3 transition-all cursor-pointer font-sans">
              Request access
              <ArrowRight className="w-4 h-4 text-brand" />
            </a>
          </div>
          
          <div className="md:col-span-4 flex justify-center md:justify-end">
            <div className="w-24 h-24 rounded-full bg-[#B4123F]/10 flex items-center justify-center shrink-0">
              <FileText className="w-10 h-10 text-[#B4123F]" />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
