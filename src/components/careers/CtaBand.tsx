// src/components/careers/CtaBand.tsx
"use client";

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
    <section className="relative overflow-hidden bg-gradient-to-r from-brand-hot via-brand to-brand-deep py-16 text-center select-none">
      <div className="absolute inset-0 bg-ink/10 pointer-events-none" />
      <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-[120px] relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8 text-left">
        
        <div className="max-w-2xl space-y-2">
          <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-white/80 font-mono block">
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
    </section>
  );
}
