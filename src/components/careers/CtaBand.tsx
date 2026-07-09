// src/components/careers/CtaBand.tsx
"use client";
import { Section } from "@/components/ui/Section";

import React from "react";
import Link from "next/link";

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
    <Section variant="gradient" containerSize="wide" className="relative overflow-hidden text-center select-none">
      <div className="absolute inset-0 bg-ink/10 pointer-events-none" />
      <div className="w-full relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8 text-left">
        
        <div className="max-w-2xl space-y-2">
          <span className="section-eyebrow on-dark">
            BUILD THE FUTURE
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-tight">
            {title}
          </h2>
        </div>

        <div className="shrink-0">
          <Link
            href={buttonHref}
            className="bg-white hover:bg-slate-100 text-brand font-extrabold text-sm sm:text-base px-8 py-4 rounded-xl transition-all duration-300 shadow-md inline-block active:scale-95 cursor-pointer text-center"
          >
            {buttonText}
          </Link>
        </div>

      </div>
    </Section>
  );
}
