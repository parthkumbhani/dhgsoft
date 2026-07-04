// src/components/about/Purpose.tsx
"use client";

import React from "react";

export default function Purpose() {
  return (
    <section className="relative bg-gradient-to-r from-brand-hot via-brand to-brand-deep py-12 md:py-16 overflow-hidden">
      {/* Visual background details */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 to-transparent opacity-30 pointer-events-none" />
      
      <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-[120px] relative z-10 text-center space-y-4">
        <span className="text-[10px] md:text-xs font-extrabold uppercase tracking-[0.3em] text-white/80 font-mono block">
          OUR PURPOSE
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-[44px] font-black text-white tracking-tight leading-tight select-none">
          Connecting Intelligence to Transform Industry.
        </h2>
      </div>
    </section>
  );
}
