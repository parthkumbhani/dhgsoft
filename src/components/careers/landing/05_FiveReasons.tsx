"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { fiveReasons } from "@/lib/careersData";
import type { Reason } from "@/lib/careersData";

// ─── ReasonCard ──────────────────────────────────────────────────────────────
function ReasonCard({ number, title, body, Icon }: Reason) {
  return (
    <div className="card group bg-white border border-line rounded-2xl p-7 hover:border-brand hover:shadow-md hover:-translate-y-1 transition-all duration-300 h-full flex flex-col relative overflow-hidden">
      {/* Subtle indicator dot matrix overlay */}
      <div className="absolute right-0 bottom-0 w-16 h-16 bg-dot-matrix opacity-[0.02] pointer-events-none group-hover:opacity-[0.05] transition-opacity" />

      {/* Inner glowing top border */}
      <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-brand/10 group-hover:bg-brand transition-colors duration-300" />

      {/* Number + icon header */}
      <div className="flex items-center justify-between mb-6 relative z-10">
        <span className="text-brand text-label-bold uppercase tracking-[0.2em] font-sans font-extrabold">
          {number}
        </span>
        <div className="w-11 h-11 rounded-full bg-brand/5 flex items-center justify-center border border-brand/10 group-hover:bg-brand group-hover:border-brand group-hover:shadow-md group-hover:shadow-brand/10 transition-all duration-300">
          <Icon className="w-5 h-5 text-brand group-hover:text-white transition-colors duration-300" />
        </div>
      </div>

      <h3 className="card-title text-txt-strong font-sans font-bold text-lg mb-3 tracking-tight group-hover:text-brand transition-colors">
        {title}
      </h3>
      <p className="text-body-sm text-txt-muted leading-relaxed flex-1 font-sans font-medium">
        {body}
      </p>

      {/* Micro-telemetry details for industrial flavor */}
      <div className="mt-5 pt-4 border-t border-line/60 flex items-center justify-between text-[9px] font-mono text-slate-400 select-none opacity-60 group-hover:opacity-100 transition-opacity">
        <span>SYS_REF: {number}_CONNECT</span>
        <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse" />
      </div>
    </div>
  );
}

// ─── FiveReasons ─────────────────────────────────────────────────────────────
export function FiveReasons() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <Section variant="white" size="snug" pattern="v5" ref={ref} className="relative overflow-hidden border-b border-line">
      {/* Centered header */}
      <div className="text-center mb-12 relative z-10">
        <span className="section-eyebrow tracking-[0.25em]">WHY JOIN DHGSOFT</span>
        <h2 className="heading-section text-txt-strong mt-3 font-sans font-extrabold text-3xl md:text-4xl tracking-tight">
          5 Reasons to Build Your Career at DHGsoft
        </h2>
        <p className="section-subtitle text-txt-muted max-w-[720px] mx-auto mt-4 font-sans font-medium leading-relaxed">
          Build your career with innovation, collaboration, and continuous learning while creating intelligent solutions that shape the future of connected industries.
        </p>
      </div>

      {/* ── Two-row layout: top 3, bottom 2 centered ── */}
      <div className="flex flex-col gap-4 relative z-10">

        {/* Row 1 — 3 cards, equal width */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {fiveReasons.slice(0, 3).map((reason, i) => (
            <motion.div
              key={reason.number}
              initial={{ opacity: 0, y: 22 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="h-full"
            >
              <ReasonCard {...reason} />
            </motion.div>
          ))}
        </div>

        {/* Row 2 — 2 cards centered via a 6-col grid with empty outer slots */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
          {/* Left spacer (lg only) */}
          <div className="hidden lg:block lg:col-span-1" aria-hidden="true" />

          {fiveReasons.slice(3, 5).map((reason, i) => (
            <motion.div
              key={reason.number}
              initial={{ opacity: 0, y: 22 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: (i + 3) * 0.08 }}
              className="lg:col-span-2 h-full"
            >
              <ReasonCard {...reason} />
            </motion.div>
          ))}

          {/* Right spacer (lg only) */}
          <div className="hidden lg:block lg:col-span-1" aria-hidden="true" />
        </div>

      </div>
    </Section>
  );
}
export default FiveReasons;
