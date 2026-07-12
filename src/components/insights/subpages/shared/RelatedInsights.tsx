"use client";

import React from "react";
import Link from "next/link";
import { Section } from "@/components/ui/Section";

type RelatedCard = {
  eyebrow: string;
  title: string;
  body: string;
  link: string;
};

type RelatedInsightsProps = {
  cards: RelatedCard[];
  pattern?: "none" | "v1" | "v2" | "v3" | "v4" | "v5" | "v6" | "v7" | "v8";
};

export function RelatedInsights({
  cards,
  pattern = "v8",
}: RelatedInsightsProps) {
  return (
    <Section variant="mist" size="default" pattern={pattern} className="relative overflow-hidden border-b border-line/10">
      {/* Header */}
      <div className="text-left space-y-4">
        <span className="text-brand text-label-bold uppercase tracking-[0.2em] font-sans block">
          RELATED INSIGHTS
        </span>
        <h2 className="text-txt-strong tracking-tight font-black leading-tight font-sans">
          Explore More
        </h2>
        <p className="text-body-md text-txt-muted max-w-[720px] leading-relaxed font-sans">
          Continue exploring how connected technologies transform industrial operations.
        </p>
      </div>

      {/* 3 Link Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {cards.map((card, idx) => (
          <Link 
            key={idx}
            href={card.link} 
            className="card group bg-white border border-line rounded-2xl p-6 hover:border-[#B4123F] hover:shadow-md transition-all text-left flex flex-col justify-between block cursor-pointer"
          >
            <div>
              <div className="text-[#B4123F] text-label-bold uppercase tracking-[0.15em] font-sans">
                {card.eyebrow}
              </div>
              <h3 className="text-txt-strong mt-3 group-hover:text-[#B4123F] transition-colors font-extrabold font-sans">
                {card.title}
              </h3>
              <p className="text-body-sm text-txt-muted mt-2 leading-relaxed font-sans">
                {card.body}
              </p>
            </div>
            <div className="inline-flex items-center gap-1 mt-6 text-[#B4123F] text-body-sm font-semibold group-hover:gap-2 transition-all font-sans">
              <span>Read more</span>
              <span>&rarr;</span>
            </div>
          </Link>
        ))}
      </div>
    </Section>
  );
}
