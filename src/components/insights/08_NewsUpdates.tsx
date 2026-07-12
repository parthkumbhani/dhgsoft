"use client";

import React from "react";
import { Megaphone, ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/Section";

export function NewsUpdates() {
  return (
    <Section variant="white" size="default" pattern="v6" className="relative overflow-hidden border-b border-line/10">
      {/* Header */}
      <div className="text-left space-y-4">
        <span className="text-brand text-label-bold uppercase tracking-[0.2em] font-sans block">
          NEWS & UPDATES
        </span>
        <h2 className="text-txt-strong tracking-tight font-black leading-tight font-sans">
          News & Updates
        </h2>
        <p className="text-body-md text-txt-muted max-w-[720px] leading-relaxed font-sans">
          Stay informed about DHGsoft's latest announcements, partnerships, technology initiatives, engineering achievements, product innovations, and company developments.
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
            <Megaphone className="w-6 h-6 text-[#B4123F]" />
          </div>
          <h3 className="heading-md text-txt-strong mt-6 font-sans font-bold">
            Newsroom launching soon
          </h3>
          <p className="text-body-sm text-txt-muted mt-3 max-w-[540px] mx-auto leading-relaxed font-sans">
            Company milestones, partnership announcements, and technology launches will appear here. Follow us on LinkedIn for real-time updates.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <a 
              href="https://www.linkedin.com" 
              target="_blank" 
              rel="noreferrer" 
              className="inline-flex items-center justify-center h-10 px-6 rounded-full bg-[#0A66C2] hover:bg-[#08529d] text-white font-semibold text-xs tracking-wider transition-colors cursor-pointer font-sans"
            >
              Follow on LinkedIn
            </a>
            <a href="#newsletter" className="inline-flex items-center gap-2 text-brand font-semibold hover:gap-3 transition-all cursor-pointer font-sans text-xs">
              Get notified
              <ArrowRight className="w-4 h-4 text-brand" />
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
