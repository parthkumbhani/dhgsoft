"use client";

import React from "react";
import { Section } from "@/components/ui/Section";

type BenefitsGridProps = {
  eyebrow: string;
  h2: string;
  items: string[];
  pattern?: "none" | "v1" | "v2" | "v3" | "v4" | "v5" | "v6" | "v7" | "v8";
};

export function BenefitsGrid({
  eyebrow,
  h2,
  items,
  pattern = "v4",
}: BenefitsGridProps) {
  return (
    <Section variant="white" size="default" pattern={pattern} className="relative overflow-hidden border-b border-line/10">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center space-y-4">
        <span className="text-brand text-label-bold uppercase tracking-[0.2em] font-sans block">
          {eyebrow}
        </span>
        <h2 className="text-txt-strong tracking-tight font-black leading-tight font-sans">
          {h2}
        </h2>
      </div>

      {/* Chip Grid */}
      <div className="flex flex-wrap gap-3 justify-center mt-10 max-w-[900px] mx-auto">
        {items.map((item, idx) => (
          <div 
            key={idx}
            className="card inline-flex items-center gap-3 bg-white border border-line rounded-full px-5 py-3 hover:border-[#B4123F] transition-colors cursor-default shadow-sm hover:shadow-md hover:-translate-y-[1px]"
          >
            <div className="w-2 h-2 rounded-full bg-[#B4123F]" />
            <span className="text-body-sm text-txt-strong font-semibold font-sans">
              {item}
            </span>
          </div>
        ))}
      </div>
    </Section>
  );
}
