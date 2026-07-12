"use client";

import React from "react";
import Link from "next/link";
import { 
  Factory, Car, Cpu, FlaskConical, Soup, Activity, 
  Droplets, Zap, Waves, Hammer, Box, Server, Construction, Wheat 
} from "lucide-react";
import { Section } from "@/components/ui/Section";

const industriesList = [
  { name: "Industrial Manufacturing", slug: "industrial-manufacturing", Icon: Factory },
  { name: "Automotive", slug: "automotive", Icon: Car },
  { name: "Semiconductor", slug: "semiconductor", Icon: Cpu },
  { name: "Chemical Manufacturing", slug: "chemical-manufacturing", Icon: FlaskConical },
  { name: "Food & Beverages", slug: "food-beverages", Icon: Soup },
  { name: "Life Sciences", slug: "life-sciences", Icon: Activity },
  { name: "Oil & Gas", slug: "oil-gas", Icon: Droplets },
  { name: "Power & Utilities", slug: "power-utilities", Icon: Zap },
  { name: "Water & Wastewater Management", slug: "water-wastewater", Icon: Waves },
  { name: "Mining & Metals", slug: "mining-metals", Icon: Hammer },
  { name: "Consumer Packaged Goods (CPG)", slug: "consumer-packaged-goods", Icon: Box },
  { name: "Data Centres", slug: "data-centres", Icon: Server },
  { name: "Engineering, Procurement & Construction (EPC)", slug: "epc", Icon: Construction },
  { name: "Agriculture", slug: "agriculture", Icon: Wheat },
];

type IndustriesProps = {
  eyebrow?: string;
  h2?: string;
  subLine?: string;
};

export function Industries({
  eyebrow = "INDUSTRIES SUPPORTED",
  h2 = "Our ecosystem solutions are designed for:",
  subLine = "From heavy industry to critical infrastructure, our ecosystem approach adapts to each sector's unique operational reality.",
}: IndustriesProps) {
  return (
    <Section variant="mist" size="default" pattern="v7" className="relative overflow-hidden border-b border-line/10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start text-left">
        {/* Left Column: Heading */}
        <div className="lg:col-span-4 space-y-4">
          <span className="text-brand text-label-bold uppercase tracking-[0.2em] font-sans block">
            {eyebrow}
          </span>
          <h2 className="text-txt-strong tracking-tight font-black leading-tight font-sans">
            {h2}
          </h2>
          <p className="text-body-sm text-txt-muted leading-relaxed font-sans font-medium">
            {subLine}
          </p>
        </div>

        {/* Right Column: Interactive Tiles Grid */}
        <div className="lg:col-span-8 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {industriesList.map((ind, idx) => {
              const IconComponent = ind.Icon;
              return (
                <Link
                  key={idx}
                  href={`/industries/${ind.slug}`}
                  className="card group bg-white border border-line rounded-xl p-4 hover:border-[#B4123F]/50 hover:shadow-md transition-all duration-300 flex items-center gap-3 block cursor-pointer"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#B4123F]/10 flex items-center justify-center text-[#B4123F] group-hover:bg-[#B4123F] group-hover:text-white transition-all duration-300 shrink-0">
                    <IconComponent className="w-4 h-4" />
                  </div>
                  <span className="text-xs text-txt-strong font-extrabold font-sans group-hover:text-[#B4123F] transition-colors leading-tight">
                    {ind.name}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
}
