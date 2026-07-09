// src/components/about/WhatWeDo.tsx
"use client";
import { Section } from "@/components/ui/Section";

import React from "react";
import Image from "next/image";
import { aboutImages } from "@/lib/aboutImages";
import {
  Cpu,
  Network,
  Database,
  BrainCircuit,
  Radio,
  Compass,
  AppWindow,
  Cloud,
  ShieldCheck,
  Settings
} from "lucide-react";

const capabilities = [
  { label: "Industrial Automation", Icon: Cpu },
  { label: "OT / IT Integration", Icon: Network },
  { label: "Industrial Data Platforms", Icon: Database },
  { label: "Artificial Intelligence & Analytics", Icon: BrainCircuit },
  { label: "Industrial Internet of Things (IIoT)", Icon: Radio },
  { label: "Digital Engineering", Icon: Compass },
  { label: "Enterprise Applications", Icon: AppWindow },
  { label: "Cloud Infrastructure", Icon: Cloud },
  { label: "Cybersecurity", Icon: ShieldCheck },
  { label: "Managed Services", Icon: Settings },
];

export default function WhatWeDo() {
  return (
    <Section variant="ink" containerSize="wide" className=" text-white border-b border-slate-900 overflow-hidden relative">
      <div className="w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
        
        {/* Left Column (Left third on desktop): Image */}
        <div className="lg:col-span-4 relative min-h-[300px] lg:min-h-full rounded-2xl overflow-hidden border border-slate-800 shadow-md">
          <Image
            src={aboutImages.whatWeDo.src}
            alt={aboutImages.whatWeDo.alt}
            fill
            className="object-cover"
          />
        </div>

        {/* Right Column (Right two-thirds on desktop): Info & Grid */}
        <div className="lg:col-span-8 flex flex-col justify-center space-y-6 text-left">
          <div>
            <span className="section-eyebrow mb-2">
              WHAT WE DO
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-4">
              We design, build, integrate, and manage intelligent industrial ecosystems by combining:
            </h2>
          </div>

          {/* 10-Item Capability Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {capabilities.map((item, idx) => {
              const { label, Icon } = item;
              return (
                <div
                  key={idx}
                  className="flex items-center gap-4 bg-ink-2 border border-slate-800/80 p-4 rounded-xl hover:border-brand-hot hover:translate-y-[-2px] transition-all duration-300 group"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-brand/10 text-brand-hot group-hover:bg-brand/20 transition-all">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-semibold tracking-tight text-slate-200 group-hover:text-white transition-colors">
                    {label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </Section>
  );
}
