"use client";

import React from "react";
import { Section } from "@/components/ui/Section";

export function WhyDHGsoft() {
  return (
    <Section variant="white" size="default" pattern="v6" className="relative overflow-hidden border-b border-line/10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Narrative */}
        <div className="lg:col-span-7 space-y-6 text-left">
          <span className="text-brand text-label-bold uppercase tracking-[0.2em] font-sans block">
            WHY DHGSOFT
          </span>
          <h2 className="text-txt-strong tracking-tight font-black leading-tight font-sans">
            More than technology implementations.
          </h2>
          <div className="space-y-4">
            <p className="text-body-md text-txt-muted leading-relaxed font-sans font-medium">
              Our case studies represent more than successful technology implementations.
            </p>
            <p className="text-body-md text-txt-muted leading-relaxed font-sans">
              They demonstrate long-term partnerships, engineering excellence, and a commitment to helping organizations achieve sustainable digital transformation through connected intelligence and practical innovation.
            </p>
          </div>
        </div>

        {/* Right Column: Pull-quote */}
        <div className="lg:col-span-5 relative">
          <div className="card bg-mist border border-line rounded-3xl p-8 relative overflow-hidden text-left shadow-sm">
            <div className="absolute -top-4 -left-2 text-[6rem] leading-none text-[#B4123F]/15 font-serif pointer-events-none">
              &ldquo;
            </div>
            <div className="relative z-10 space-y-6">
              <p className="text-body-md italic text-txt-strong font-sans font-medium leading-relaxed">
                As industries continue to evolve, DHGsoft remains focused on delivering future-ready engineering solutions that empower organizations to adapt, innovate, and grow with confidence.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-[2px] bg-[#B4123F] rounded-full shrink-0" />
                <div className="text-label-bold text-[#B4123F] uppercase tracking-[0.2em] font-sans font-bold">
                  DHGsoft Engineering Leadership
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
