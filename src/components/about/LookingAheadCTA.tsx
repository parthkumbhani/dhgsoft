// src/components/about/LookingAheadCTA.tsx
"use client";

import React from "react";
import Image from "next/image";
import { aboutImages } from "@/lib/aboutImages";

interface LookingAheadCTAProps {
  onContactClick: () => void;
}

export default function LookingAheadCTA({ onContactClick }: LookingAheadCTAProps) {
  return (
    <div className="relative">
      
      {/* 1. Looking Ahead Section */}
      <section className="bg-mist py-16 md:py-20 border-b border-line overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-[120px] grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Heading */}
          <div className="lg:col-span-5 text-left">
            <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-brand font-mono block mb-2">
              FORWARD PERSPECTIVE
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-text-strong tracking-tight leading-tight">
              Looking Ahead
            </h2>
          </div>

          {/* Right: Verbatim copy */}
          <div className="lg:col-span-7 text-left">
            <p className="text-text-muted font-medium text-base sm:text-lg leading-relaxed">
              DHGsoft continues investing in innovation, talent, strategic partnerships, and emerging technologies to shape the future of connected industries and intelligent enterprises.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Full-bleed Crimson Gradient CTA Band */}
      <section className="relative overflow-hidden bg-gradient-to-r from-brand-hot via-brand to-brand-deep py-20 text-center">
        {/* Background visual asset image */}
        <div className="absolute inset-0 z-0 opacity-10 mix-blend-overlay">
          <Image
            src={aboutImages.cta.src}
            alt={aboutImages.cta.alt}
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-ink/30 pointer-events-none" />

        <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-[120px] relative z-10 space-y-6">
          <span className="text-xs font-extrabold uppercase tracking-[0.3em] text-white/95 font-mono block">
            CONSULTATION
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-[50px] font-black text-white tracking-tight leading-tight">
            Build tomorrow&apos;s industries—today.
          </h2>
          <div className="pt-4">
            <button
              onClick={onContactClick}
              className="bg-white hover:bg-slate-100 text-brand font-extrabold text-sm sm:text-base px-8 py-4 rounded-xl transition-all duration-300 shadow-md active:scale-95 cursor-pointer"
            >
              Schedule a Consultation
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
