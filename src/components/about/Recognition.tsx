// src/components/about/Recognition.tsx
"use client";

import React from "react";
import {
  Quote,
  Award,
  Trophy,
  CheckCircle2,
  Cpu,
  Milestone
} from "lucide-react";

const items = [
  { label: "Customer Success Stories", Icon: Quote },
  { label: "Awards", Icon: Award },
  { label: "Industry Recognition", Icon: Trophy },
  { label: "Certifications", Icon: CheckCircle2 },
  { label: "Technology Achievements", Icon: Cpu },
  { label: "Project Milestones", Icon: Milestone },
];

export default function Recognition() {
  return (
    <section className="bg-mist py-16 md:py-20 border-b border-line">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-[120px] grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Text */}
        <div className="lg:col-span-5 text-left space-y-4">
          <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-brand font-mono block">
            RECOGNITION
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-text-strong tracking-tight leading-tight">
            DHGsoft measures success by the value created for customers.
          </h2>
          <p className="text-text-muted font-bold text-sm sm:text-base">
            This section highlights:
          </p>
        </div>

        {/* Right Column: 6-Item Grid of Icon Chips */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
          {items.map((item, idx) => {
            const { label, Icon } = item;
            return (
              <div
                key={idx}
                className="flex items-center gap-4 bg-white border border-line p-4 rounded-xl hover:border-brand hover:-translate-y-[-2px] transition-all duration-300 group"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-brand/5 text-brand group-hover:bg-brand/10 transition-all">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-sm font-semibold tracking-tight text-text-strong group-hover:text-brand transition-colors text-left">
                  {label}
                </span>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
