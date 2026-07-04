// src/components/about/VisionMission.tsx
"use client";

import React from "react";
import Image from "next/image";
import { aboutImages } from "@/lib/aboutImages";

export default function VisionMission() {
  return (
    <section className="bg-white py-16 md:py-20 border-b border-line">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-[120px] space-y-16">
        
        {/* ROW A: Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text Left */}
          <div className="lg:col-span-6 text-left space-y-4">
            <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-brand font-mono block">
              OUR VISION
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-text-strong tracking-tight leading-tight">
              To become a globally trusted leader in Industrial Digital Transformation by enabling connected, intelligent, and sustainable industries.
            </h3>
          </div>
          
          {/* Image Right */}
          <div className="lg:col-span-6 relative w-full aspect-[16/10] sm:aspect-[21/9] lg:aspect-[16/10] rounded-2xl overflow-hidden border border-line shadow-sm">
            <Image
              src={aboutImages.vision.src}
              alt={aboutImages.vision.alt}
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Hairline Divider */}
        <div className="h-[1px] bg-line w-full" />

        {/* ROW B: Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Image Left */}
          <div className="lg:col-span-6 order-2 lg:order-1 relative w-full aspect-[16/10] sm:aspect-[21/9] lg:aspect-[16/10] rounded-2xl overflow-hidden border border-line shadow-sm">
            <Image
              src={aboutImages.mission.src}
              alt={aboutImages.mission.alt}
              fill
              className="object-cover"
            />
          </div>

          {/* Text Right */}
          <div className="lg:col-span-6 order-1 lg:order-2 text-left space-y-4">
            <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-brand font-mono block">
              OUR MISSION
            </span>
            <p className="text-text-muted font-medium text-base sm:text-lg leading-relaxed">
              To empower industries with innovative digital engineering solutions that connect operational technology, enterprise systems, and data intelligence to improve operational excellence and business performance.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
