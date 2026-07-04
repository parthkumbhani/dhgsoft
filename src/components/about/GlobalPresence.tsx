// src/components/about/GlobalPresence.tsx
"use client";

import React from "react";
import Image from "next/image";
import { aboutImages } from "@/lib/aboutImages";
import { Check } from "lucide-react";

const deliveryModelItems = [
  "Onsite Services",
  "Offshore Engineering",
  "Remote Operations",
  "24×7 Support",
  "Global Project Delivery"
];

const locationsItems = [
  "Corporate Office",
  "Regional Offices",
  "Delivery Centers",
  "Partner Network"
];

export default function GlobalPresence() {
  return (
    <section className="bg-white py-16 md:py-20 border-b border-line overflow-hidden relative bg-tech-grid bg-dot-matrix">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-[120px] grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Heading & Lists */}
        <div className="lg:col-span-6 text-left space-y-8">
          <div className="space-y-3">
            <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-brand font-mono block">
              GLOBAL PRESENCE
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-text-strong tracking-tight leading-tight">
              DHGsoft serves customers through a flexible global delivery model.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 border-t border-line pt-6">
            {/* Delivery Model */}
            <div className="space-y-4">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-brand font-mono">
                Delivery Model
              </h4>
              <ul className="space-y-2">
                {deliveryModelItems.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2.5 text-text-muted text-sm font-semibold">
                    <Check className="w-4.5 h-4.5 text-brand shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Locations */}
            <div className="space-y-4">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-brand font-mono">
                Locations
              </h4>
              <ul className="space-y-2">
                {locationsItems.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2.5 text-text-muted text-sm font-semibold">
                    <Check className="w-4.5 h-4.5 text-brand shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Right Column: World Map Image */}
        <div className="lg:col-span-6 relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-line shadow-sm">
          <Image
            src={aboutImages.globalPresence.src}
            alt={aboutImages.globalPresence.alt}
            fill
            className="object-cover"
          />
        </div>

      </div>
    </section>
  );
}
