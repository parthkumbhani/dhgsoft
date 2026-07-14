// src/components/CTABand.tsx
"use client";

import React from "react";
import Image from "next/image";

interface CTABandProps {
  /** eyebrow label above headline */
  label?: string;
  /** main headline */
  headline?: string;
  /** highlighted part of headline (rendered in brand red) */
  highlightedText?: string;
  /** optional sub-paragraph */
  description?: string;
  /** primary button label */
  primaryLabel?: string;
  /** secondary button label — optional */
  secondaryLabel?: string;
  /** primary button click handler */
  onPrimaryClick?: () => void;
  /** secondary button click handler */
  onSecondaryClick?: () => void;
  /** bg image override — defaults to industrial factory shot */
  bgImage?: string;
  id?: string;
}

export default function CTABand({
  label = "PARTNER WITH DHGSOFT",
  headline = "Building Value",
  highlightedText = "for Tomorrow.",
  description =
    "Whether you are modernizing a single production line, connecting enterprise systems to the cloud, or building a secure data foundation — DHGsoft is your engineering partner from concept to commissioning.",
  primaryLabel = "Start a Conversation →",
  secondaryLabel = "Explore Capabilities",
  onPrimaryClick,
  onSecondaryClick,
  bgImage = "/images/industrial-hero.png",
  id = "cta",
}: CTABandProps) {
  return (
    <section
      id={id}
      className="relative w-full overflow-hidden"
      style={{ minHeight: "280px" }}
    >
      {/* ── Background image (dark industrial) ── */}
      <div className="absolute inset-0 z-0">
        <Image
          src={bgImage}
          alt="Industrial background"
          fill
          className="object-cover object-center"
          priority={false}
          sizes="100vw"
        />
        {/* Dark overlay — mimics the second image */}
        <div className="absolute inset-0 bg-[#0d0d1a]/80" />
        {/* Subtle left brand glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 50% 80% at 0% 60%, rgba(225,0,136,0.18) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-16 sm:py-20">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-5">
          <div className="h-px w-8 bg-[#E10088]" />
          <span className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#E10088]">
            {label}
          </span>
        </div>

        {/* Headline */}
        <h2 className="text-white text-3xl sm:text-4xl lg:text-[52px] font-black tracking-tight leading-[1.1] mb-5 max-w-2xl">
          {headline}
          {highlightedText && (
            <>
              <br />
              <span className="text-[#E10088]">{highlightedText}</span>
            </>
          )}
        </h2>

        {/* Description */}
        {description && (
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-lg mb-8 font-medium">
            {description}
          </p>
        )}

        {/* Buttons */}
        <div className="flex flex-wrap gap-4">
          {primaryLabel && (
            <button
              onClick={onPrimaryClick}
              className="inline-flex items-center gap-2 bg-[#E10088] hover:bg-[#c4006f] text-white font-extrabold text-sm px-7 py-3.5 rounded-full transition-all duration-300 shadow-lg active:scale-95 cursor-pointer"
            >
              {primaryLabel}
            </button>
          )}
          {secondaryLabel && (
            <button
              onClick={onSecondaryClick}
              className="inline-flex items-center gap-2 bg-transparent border border-white/30 hover:border-white/60 text-white font-bold text-sm px-7 py-3.5 rounded-full transition-all duration-300 active:scale-95 cursor-pointer"
            >
              {secondaryLabel}
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
