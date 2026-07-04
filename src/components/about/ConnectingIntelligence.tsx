// src/components/about/ConnectingIntelligence.tsx
"use client";

import React from "react";
import Image from "next/image";
import { aboutImages } from "@/lib/aboutImages";

export default function ConnectingIntelligence() {
  return (
    <section className="bg-mist py-16 md:py-20 border-b border-line relative bg-dot-matrix">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-[120px] grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Text */}
        <div className="lg:col-span-6 text-left space-y-4">
          <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-brand font-mono block">
            WHY DHGSOFT
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-text-strong tracking-tight leading-tight">
            Connecting Intelligence
          </h3>
          <p className="text-text-muted font-medium text-base sm:text-lg leading-relaxed max-w-xl">
            We believe digital transformation is about connecting every aspect of industrial operations—from machines and people to enterprise applications and intelligent analytics.
          </p>
        </div>

        {/* Right Column: Image */}
        <div className="lg:col-span-6 relative w-full aspect-[16/10] sm:aspect-[21/9] lg:aspect-[16/10] rounded-2xl overflow-hidden border border-line shadow-sm">
          <Image
            src={aboutImages.connectingIntel.src}
            alt={aboutImages.connectingIntel.alt}
            fill
            className="object-cover"
          />
        </div>

      </div>
    </section>
  );
}
