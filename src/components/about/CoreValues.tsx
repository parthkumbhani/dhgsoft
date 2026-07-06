// src/components/about/CoreValues.tsx
"use client";
import { Section } from "@/components/ui/Section";

import React from "react";
import {
  Lightbulb,
  Award,
  Shield,
  CheckCircle2,
  Users,
  Leaf
} from "lucide-react";

const values = [
  {
    title: "Innovation",
    desc: "Continuously embracing emerging technologies to solve complex industrial challenges.",
    Icon: Lightbulb
  },
  {
    title: "Customer Success",
    desc: "Our customers' success defines our success.",
    Icon: Award
  },
  {
    title: "Integrity",
    desc: "Building trusted relationships through transparency and ethical business practices.",
    Icon: Shield
  },
  {
    title: "Excellence",
    desc: "Delivering high-quality engineering and technology solutions with precision.",
    Icon: CheckCircle2
  },
  {
    title: "Collaboration",
    desc: "Working together with customers, partners, universities, and technology leaders to create lasting value.",
    Icon: Users
  },
  {
    title: "Sustainability",
    desc: "Helping industries operate more efficiently while supporting environmental responsibility.",
    Icon: Leaf
  }
];

export default function CoreValues() {
  return (
    <Section variant="ink" containerSize="wide" className=" text-white border-b border-slate-900 overflow-hidden">
      <div className="w-full relative z-10">
        
        {/* Header Block */}
        <div className="text-left mb-12">
          <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-brand-hot font-mono block mb-2">
            CORE PHILOSOPHY
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Our Core Values
          </h2>
        </div>

        {/* 6-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {values.map((val, idx) => {
            const { title, desc, Icon } = val;
            return (
              <div
                key={idx}
                className="bg-ink-2 border border-slate-800 rounded-xl p-6 shadow-sm hover:border-brand-hot hover:-translate-y-1 transition-all duration-300 flex flex-col justify-start text-left space-y-4"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-brand/10 text-brand-hot shrink-0">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-extrabold text-white text-lg tracking-tight">
                    {title}
                  </h3>
                  <p className="text-slate-455 text-sm leading-relaxed">
                    {desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </Section>
  );
}
