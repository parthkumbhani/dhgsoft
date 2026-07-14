"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type SubPageHeroProps = {
  breadcrumb: string;
  eyebrow: string;
  h1: React.ReactNode;
  subLine: string;
  primaryCta: { text: string; href: string };
  secondaryCta?: { text: string; href: string };
  bgImage?: string;
};

export function SubPageHero({
  breadcrumb,
  eyebrow,
  h1,
  subLine,
  primaryCta,
  secondaryCta,
  bgImage,
}: SubPageHeroProps) {
  return (
    <Section
      variant="ink"
      size="hero"
      pattern="none"
      className="relative min-h-screen flex items-center justify-start text-left overflow-hidden border-b border-line/10 pt-28 pb-16"
    >
      {/* Background Image with Gradient Overlay */}
      {bgImage ? (
        <>
          <div 
            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${bgImage})` }}
          />
          <div className="absolute inset-0 z-0 bg-gradient-to-r from-black via-black/80 to-transparent opacity-95 pointer-events-none" />
        </>
      ) : (
        <>
          {/* Background SVG Grid pattern */}
          <div 
            className="absolute inset-0 z-0 bg-tech-grid opacity-[0.03] pointer-events-none" 
            style={{ 
              backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.15) 1px, transparent 1px)", 
              backgroundSize: "32px 32px" 
            }}
          />
          
          {/* Corner radial glows */}
          <div 
            className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none opacity-15"
            style={{
              background: 'radial-gradient(circle, #B4123F 0%, transparent 70%)',
              filter: 'blur(80px)',
            }}
          />
          <div 
            className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none opacity-10"
            style={{
              background: 'radial-gradient(circle, #E11D5C 0%, transparent 70%)',
              filter: 'blur(80px)',
            }}
          />
        </>
      )}

      <div className="relative z-10 max-w-4xl space-y-6 flex flex-col items-start w-full">
        {/* Breadcrumb */}
        <span className="text-white/60 text-xs font-semibold tracking-wider font-sans uppercase">
          {breadcrumb}
        </span>

        {/* Eyebrow chip */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-[#B4123F] shrink-0" />
          <span className="text-[11px] font-extrabold uppercase tracking-widest text-white/90 font-sans">
            {eyebrow}
          </span>
        </div>

        {/* H1 Title */}
        <h1 className="text-white text-headline-xl font-extrabold tracking-tight leading-tight max-w-[900px] font-sans">
          {h1}
        </h1>

        {/* Sub-line */}
        <p className="text-white/85 max-w-[720px] text-body-md font-medium leading-relaxed font-sans">
          {subLine}
        </p>

        {/* Action buttons */}
        <div className="pt-4 flex flex-wrap items-center gap-4">
          <Link
            href={primaryCta.href}
            className={cn(
              buttonVariants({ variant: "primary", size: "lg" }),
              "h-12 px-8 flex items-center justify-center gap-2 group cursor-pointer text-white font-bold"
            )}
          >
            <span>{primaryCta.text}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
          {secondaryCta && (
            <Link
              href={secondaryCta.href}
              className="border border-white/30 hover:border-white/60 hover:bg-white/10 text-white rounded-full font-bold h-12 px-8 flex items-center justify-center transition-all duration-300 active:scale-95 text-sm sm:text-base cursor-pointer"
            >
              {secondaryCta.text}
            </Link>
          )}
        </div>
      </div>
    </Section>
  );
}
