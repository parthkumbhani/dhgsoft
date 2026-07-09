// src/components/about/Differentiators.tsx
"use client";
import { Section } from "@/components/ui/Section";

import React from "react";
import Image from "next/image";
import { aboutImages } from "@/lib/aboutImages";

const items = [
  {
    title: "End-to-End Digital Partner",
    desc: "", // chips rendered instead
    chips: ["Consulting", "Engineering", "Implementation", "Managed Services", "Continuous Improvement"],
    img: aboutImages.diffPartner
  },
  {
    title: "Industry Expertise",
    desc: "Deep experience across manufacturing, utilities, infrastructure, life sciences, and process industries.",
    img: aboutImages.diffIndustry
  },
  {
    title: "Technology Excellence",
    desc: "Leveraging leading industrial and enterprise technologies to build scalable digital solutions.",
    img: aboutImages.diffTech
  },
  {
    title: "Global Delivery",
    desc: "Flexible onsite, offshore, and hybrid delivery models supported by experienced engineering teams.",
    img: aboutImages.diffGlobal
  }
];

export default function Differentiators() {
  return (
    <Section variant="white" containerSize="wide" className="bg-mesh-glow-light border-b border-line relative bg-tech-grid">
      <div className="w-full relative z-10">
        
        {/* Header Block */}
        <div className="text-left mb-12">
          <span className="section-eyebrow mb-2">
            WHAT MAKES US DIFFERENT
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-text-strong tracking-tight leading-tight">
            What Makes Us Different
          </h2>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {items.map((item, idx) => {
            const { title, desc, chips, img } = item;
            return (
              <div
                key={idx}
                className="bg-white border border-line rounded-xl overflow-hidden shadow-sm hover:-translate-y-1 transition-all duration-300 flex flex-col justify-start text-left"
              >
                {/* Image on Top */}
                <div className="relative w-full aspect-[16/10] overflow-hidden">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content Below */}
                <div className="p-6 space-y-4 flex-grow flex flex-col justify-between">
                  <div className="space-y-2">
                    <h4 className="font-extrabold text-text-strong text-base sm:text-lg tracking-tight leading-snug">
                      {title}
                    </h4>
                    {desc ? (
                      <p className="card-description">
                        {desc}
                      </p>
                    ) : null}
                  </div>

                  {/* Chips for Card 1 */}
                  {chips ? (
                    <div className="flex flex-wrap gap-2 pt-2">
                      {chips.map((chip, cidx) => (
                        <span
                          key={cidx}
                          className="bg-brand/5 border border-brand/10 px-2.5 py-1 rounded-full section-eyebrow"
                        >
                          {chip}
                        </span>
                      ))}
                    </div>
                  ) : null}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </Section>
  );
}
