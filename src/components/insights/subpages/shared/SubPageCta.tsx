"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type SubPageCtaProps = {
  heading: string;
  subLine: string;
  primaryCta: { text: string; href: string; onClick?: (e: React.MouseEvent) => void };
  secondaryCta?: { text: string; href: string };
};

export function SubPageCta({
  heading,
  subLine,
  primaryCta,
  secondaryCta,
}: SubPageCtaProps) {
  return (
    <Section
      variant="ink"
      size="hero"
      pattern="none"
      className="relative overflow-hidden text-center border-t border-line/10"
    >
      {/* Base gradient wash overlay */}
      <div 
        className="absolute inset-0 z-0 bg-gradient-to-r from-[#A10E38]/20 via-[#B4123F]/10 to-[#E11D5C]/5 opacity-80 pointer-events-none" 
      />

      {/* Corner radial glows */}
      <div 
        className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none opacity-[0.06]"
        style={{
          background: 'radial-gradient(circle, #F5B301 0%, transparent 70%)',
          filter: 'blur(100px)',
        }}
      />
      <div 
        className="absolute bottom-0 right-0 w-[450px] h-[450px] rounded-full pointer-events-none opacity-[0.08]"
        style={{
          background: 'radial-gradient(circle, #E11D5C 0%, transparent 70%)',
          filter: 'blur(100px)',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto space-y-6 flex flex-col items-center">
        {/* Heading */}
        <h2 className="heading-hero text-white font-extrabold tracking-tight leading-tight max-w-[800px] font-sans">
          {heading}
        </h2>

        {/* Sub-line */}
        <p className="text-body-md text-white/85 max-w-[640px] mx-auto leading-relaxed font-sans">
          {subLine}
        </p>

        {/* Action buttons */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <Link
            href={primaryCta.href}
            onClick={primaryCta.onClick}
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
