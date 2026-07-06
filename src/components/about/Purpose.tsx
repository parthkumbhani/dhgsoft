// src/components/about/Purpose.tsx
"use client";
import { Section } from "@/components/ui/Section";

import React from "react";

export default function Purpose() {
  return (
    <Section variant="gradient" containerSize="wide" className="relative overflow-hidden">
      {/* Visual background details */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 to-transparent opacity-30 pointer-events-none" />
      
      <div className="w-full relative z-10 text-center space-y-4">
        <span className="text-[10px] md:text-xs font-extrabold uppercase tracking-[0.3em] text-white/80 font-mono block">
          OUR PURPOSE
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-[44px] font-black text-white tracking-tight leading-tight select-none">
          Connecting Intelligence to Transform Industry.
        </h2>
      </div>
    </Section>
  );
}
