// src/components/about/CorporateResponsibility.tsx
"use client";

import React from "react";
import Image from "next/image";
import { aboutImages } from "@/lib/aboutImages";
import {
  Leaf,
  Globe,
  Scale,
  ShieldCheck,
  CheckCircle
} from "lucide-react";

const items = [
  {
    title: "Sustainability",
    desc: "Helping organizations improve operational efficiency while reducing energy consumption and environmental impact.",
    Icon: Leaf
  },
  {
    title: "ESG",
    desc: "Supporting Environmental, Social, and Governance initiatives through digital technologies and intelligent operations.",
    Icon: Globe
  },
  {
    title: "Ethics & Compliance",
    desc: "Integrity and ethical business practices guide every customer engagement.",
    Icon: Scale
  },
  {
    title: "Information Security",
    desc: "Protecting customer data through secure engineering practices and internationally accepted security principles.",
    Icon: ShieldCheck
  },
  {
    title: "Quality",
    desc: "Committed to delivering reliable, scalable, and high-quality engineering solutions.",
    Icon: CheckCircle
  }
];

export default function CorporateResponsibility() {
  return (
    <section className="bg-white border-b border-line overflow-hidden">
      
      {/* Full-bleed Image Header Band with Overlay */}
      <div className="relative w-full h-[250px] md:h-[320px] flex items-center justify-center">
        <Image
          src={aboutImages.responsibility.src}
          alt={aboutImages.responsibility.alt}
          fill
          className="object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-ink/75" />
        
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-16 lg:px-[120px] w-full text-left">
          <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-brand-hot font-mono block mb-2">
            CORPORATE RESPONSIBILITY
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Corporate Responsibility
          </h2>
        </div>
      </div>

      {/* 5-Card Icon Grid Content */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-[120px] py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 w-full">
          {items.map((item, idx) => {
            const { title, desc, Icon } = item;
            return (
              <div
                key={idx}
                className="bg-mist border border-line rounded-xl p-6 shadow-sm hover:border-brand hover:-translate-y-1 transition-all duration-300 flex flex-col justify-start text-left space-y-4"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-brand/5 text-brand shrink-0">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-extrabold text-text-strong text-base sm:text-lg tracking-tight leading-snug">
                    {title}
                  </h3>
                  <p className="text-text-muted text-xs sm:text-sm leading-relaxed">
                    {desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </section>
  );
}
