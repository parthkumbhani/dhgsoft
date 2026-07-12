"use client";

import React from "react";
import Image from "next/image";
import { Section } from "@/components/ui/Section";

type SubPageOverviewProps = {
  eyebrow: string;
  h2: string;
  bodyParagraphs: string[];
  image: { src: string; alt: string };
  pattern?: "none" | "v1" | "v2" | "v3" | "v4" | "v5" | "v6" | "v7" | "v8";
};

export function SubPageOverview({
  eyebrow,
  h2,
  bodyParagraphs,
  image,
  pattern = "v1",
}: SubPageOverviewProps) {
  return (
    <Section variant="white" size="default" pattern={pattern} className="relative overflow-hidden border-b border-line/10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Content */}
        <div className="lg:col-span-7 space-y-6 text-left">
          <span className="text-brand text-label-bold uppercase tracking-[0.2em] font-sans block">
            {eyebrow}
          </span>
          <h2 className="text-txt-strong tracking-tight font-black leading-tight font-sans">
            {h2}
          </h2>
          <div className="space-y-4">
            {bodyParagraphs.map((para, idx) => (
              <p key={idx} className="text-body-md text-txt-muted max-w-[560px] leading-relaxed font-sans">
                {para}
              </p>
            ))}
          </div>
        </div>

        {/* Right Column: Editorial Visual */}
        <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
          {/* Soft brand glow behind visual */}
          <div 
            className="absolute -inset-4 rounded-full pointer-events-none opacity-20 filter blur-3xl z-0"
            style={{
              background: 'radial-gradient(circle, #B4123F 0%, transparent 70%)',
            }}
          />

          <div className="relative aspect-[4/5] w-full max-w-[380px] rounded-3xl overflow-hidden shadow-xl ring-1 ring-brand/10 z-10 group">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
              sizes="(max-width: 1024px) 100vw, 400px"
            />
            {/* Dark gradient overlay for visual depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>
      </div>
    </Section>
  );
}
