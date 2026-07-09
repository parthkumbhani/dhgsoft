// src/components/about/Industries.tsx
"use client";
import { Section } from "@/components/ui/Section";

import React from "react";
import Image from "next/image";
import { aboutImages } from "@/lib/aboutImages";

const sectors = [
  { name: "Industrial Manufacturing", img: aboutImages.industries.manufacturing },
  { name: "Automotive", img: aboutImages.industries.automotive },
  { name: "Life Sciences", img: aboutImages.industries.lifeSciences },
  { name: "Semiconductor", img: aboutImages.industries.semiconductor },
  { name: "Chemical Manufacturing", img: aboutImages.industries.chemical },
  { name: "Food & Beverages", img: aboutImages.industries.foodBeverages },
  { name: "Oil & Gas", img: aboutImages.industries.oilGas },
  { name: "Power & Utilities", img: aboutImages.industries.powerUtilities },
  { name: "Mining & Metals", img: aboutImages.industries.miningMetals },
  { name: "Water & Wastewater Management", img: aboutImages.industries.waterWastewater },
  { name: "Consumer Packaged Goods", img: aboutImages.industries.cpg },
  { name: "Data Centres", img: aboutImages.industries.dataCentres },
  { name: "EPC", img: aboutImages.industries.epc },
  { name: "Agriculture", img: aboutImages.industries.agriculture },
];

export default function Industries() {
  return (
    <Section variant="white" containerSize="wide" id="industries" className="bg-mesh-glow-light border-b border-line relative bg-tech-grid">
      <div className="w-full relative z-10">
        
        {/* Header Block */}
        <div className="text-left mb-12 max-w-2xl">
          <span className="section-eyebrow mb-2">
            TARGET SECTORS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-text-strong tracking-tight leading-tight mb-4">
            Industries We Serve
          </h2>
          <p className="text-text-muted font-medium text-sm sm:text-base leading-relaxed">
            DHGsoft supports organizations across diverse industries including:
          </p>
        </div>

        {/* 14-Card Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {sectors.map((sector, idx) => {
            const numStr = String(idx + 1).padStart(2, "0");
            return (
              <div
                key={idx}
                className="relative aspect-[4/3] rounded-xl overflow-hidden border border-line shadow-sm group hover:-translate-y-1 transition-all duration-300"
              >
                {/* 100% Opacity Real Photo */}
                <Image
                  src={sector.img.src}
                  alt={sector.img.alt}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                
                {/* Bottom gradient overlay to make text pop */}
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />
                
                {/* Sector Text Card details */}
                <div className="absolute bottom-0 left-0 w-full p-5 text-left flex flex-col justify-end">
                  <span className="mb-1 section-eyebrow on-dark">
                    SECTOR {numStr}
                  </span>
                  <h4 className="text-base font-extrabold text-white leading-tight">
                    {sector.name}
                  </h4>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </Section>
  );
}
