// src/components/about/WhyDHGsoft.tsx
"use client";

import React from "react";
import {
  Layers,
  Factory,
  Network,
  Workflow,
  Users
} from "lucide-react";

const features = [
  {
    title: "End-to-End Expertise",
    desc: "One trusted partner from consulting to long-term support.",
    Icon: Layers
  },
  {
    title: "Industrial Domain Knowledge",
    desc: "Deep understanding of manufacturing and industrial operations.",
    Icon: Factory
  },
  {
    title: "Connected Intelligence",
    desc: "Transforming industrial data into real-time business intelligence.",
    Icon: Network
  },
  {
    title: "Technology Agnostic",
    desc: "Delivering the right solution using leading global technologies.",
    Icon: Workflow
  },
  {
    title: "Customer-Centric Delivery",
    desc: "Every engagement is aligned with measurable customer outcomes.",
    Icon: Users
  }
];

export default function WhyDHGsoft() {
  return (
    <section className="bg-[#B4123F]/5 py-16 md:py-20 border-b border-line">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-[120px]">
        
        {/* Header Block */}
        <div className="text-left mb-12">
          <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-brand font-mono block">
            WHY DHGSOFT
          </span>
        </div>

        {/* 5-Card Auto-Fit Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 w-full">
          {features.map((feature, idx) => {
            const { title, desc, Icon } = feature;
            return (
              <div
                key={idx}
                className="bg-white border border-line rounded-xl p-6 shadow-sm hover:-translate-y-1 transition-all duration-300 flex flex-col justify-start text-left space-y-4"
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
