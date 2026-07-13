// src/components/careers/CtaBand.tsx
"use client";

import React from "react";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { ArrowRight } from "lucide-react";

interface CtaBandProps {
  title?: string;
  buttonText?: string;
  buttonHref?: string;
}

export default function CtaBand({
  title = "Don't see the right role? We still want to meet you.",
  buttonText = "Submit CV",
  buttonHref = "/careers/submit-cv"
}: CtaBandProps) {
  return (
    <Section variant="white" size="snug" pattern="none" className="relative overflow-hidden border-t border-line bg-slate-50">
      {/* Subtle Contour Grid Texture */}
      <div
        className="absolute inset-0 bg-tech-grid opacity-[0.012] pointer-events-none z-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(15, 23, 42, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(15, 23, 42, 0.05) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      
      <div className="w-full relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8 text-left">
        <div className="max-w-2xl space-y-2">
          <span className="section-eyebrow">
            BUILD THE FUTURE
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-txt-strong tracking-tight leading-tight font-sans">
            {title}
          </h2>
        </div>

        <div className="shrink-0">
          <Link
            href={buttonHref}
            className="bg-gradient-to-r from-brand to-brand-deep hover:-translate-y-[2px] text-white font-bold text-sm px-8 py-4 rounded-xl transition-all duration-300 shadow-md inline-flex items-center gap-2 cursor-pointer text-center"
          >
            <span>{buttonText}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </Section>
  );
}
export { CtaBand };
