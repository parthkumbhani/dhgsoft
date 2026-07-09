// src/components/about/CompanyOverview.tsx
"use client";
import { Section } from "@/components/ui/Section";

import React from "react";
import Image from "next/image";
import { aboutImages } from "@/lib/aboutImages";
import { motion } from "framer-motion";

export default function CompanyOverview() {
  return (
    <Section variant="mist" containerSize="wide" className=" border-b border-line overflow-hidden relative bg-dot-matrix">
      <div className="w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: 4 paragraphs */}
        <div className="lg:col-span-6 space-y-6 text-left">
          <span className="section-eyebrow">
            COMPANY OVERVIEW
          </span>
          <div className="space-y-5 section-subtitle">
            <p>
              Founded with a vision to accelerate industrial innovation, DHGsoft delivers end-to-end digital engineering, industrial automation, OT/IT integration, AI, cloud, cybersecurity, and operational intelligence solutions.
            </p>
            <p>
              We help manufacturers, utilities, infrastructure providers, and process industries modernize operations by connecting plant-floor assets with enterprise systems and cloud technologies.
            </p>
            <p>
              Our expertise spans the complete digital transformation lifecycle—from consulting and solution architecture to implementation, managed services, and continuous optimization.
            </p>
            <p className="font-bold text-text-strong">
              Whether enabling a smart factory, implementing industrial data platforms, modernizing enterprise applications, or deploying AI-driven operational intelligence, DHGsoft delivers measurable business outcomes that improve productivity, reliability, safety, and sustainability.
            </p>
          </div>
        </div>

        {/* Right Column: Large rounded image frame */}
        <div className="lg:col-span-6 relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] rounded-2xl overflow-hidden shadow-md border border-line">
          <Image
            src={aboutImages.overview.src}
            alt={aboutImages.overview.alt}
            fill
            className="object-cover transition-transform duration-700 ease-out hover:scale-102"
          />
        </div>

      </div>
    </Section>
  );
}
