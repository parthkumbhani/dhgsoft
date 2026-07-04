// src/components/about/Leadership.tsx
"use client";

import React from "react";
import Image from "next/image";
import { aboutImages } from "@/lib/aboutImages";
import { Quote } from "lucide-react";

export default function Leadership() {
  return (
    <section id="leadership" className="bg-white py-16 md:py-20 border-b border-line overflow-hidden relative bg-dot-matrix bg-tech-grid">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-[120px] space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Stacked Executive Profile Card */}
          <div className="lg:col-span-5 flex items-center justify-center relative pt-6 pb-6 w-full">
            <div className="absolute top-0 right-4 w-[85%] h-[90%] rounded-[24px] border border-line z-0 pointer-events-none transform translate-x-3 -translate-y-3" />
            <div className="absolute bottom-4 left-4 w-[85%] h-[90%] rounded-[24px] border border-line z-0 pointer-events-none transform -translate-x-3 translate-y-3" />

            <div className="relative w-full max-w-[370px] aspect-[3/4] rounded-[24px] overflow-hidden border border-line shadow-md bg-mist z-10 p-1">
              <div className="relative w-full h-full rounded-[20px] overflow-hidden">
                <Image
                  src={aboutImages.leaderPortrait.src}
                  alt={aboutImages.leaderPortrait.alt}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-white border border-line z-20 flex items-center gap-1.5 pointer-events-none shadow-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-brand" />
                <span className="text-[10px] font-extrabold text-text-strong uppercase tracking-widest font-mono">
                  Executive Profile
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Text & Paragraphs */}
          <div className="lg:col-span-7 text-left space-y-8 lg:pl-6">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-brand font-mono mb-2 block">
                LEADERSHIP
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-text-strong tracking-tight leading-tight">
                Leadership Team
              </h2>
            </div>

            <div className="space-y-4 text-text-muted text-sm sm:text-base leading-relaxed">
              <p>
                DHGsoft is led by experienced professionals passionate about engineering innovation, industrial technology, and digital transformation.
              </p>
              <p>
                Our leadership combines expertise in industrial automation, enterprise technology, cloud computing, AI, operational excellence, and business strategy to deliver long-term value for customers worldwide.
              </p>
              <p className="italic text-xs text-text-muted/80">
                (Individual leadership profiles can be added here.)
              </p>
            </div>

            {/* Leadership Philosophy stacked items */}
            <div className="p-5 rounded-2xl border border-line bg-mist/50 space-y-3 max-w-md">
              <div className="flex items-center gap-2 text-brand">
                <Quote className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-wider font-mono text-text-strong">
                  Leadership Philosophy
                </span>
              </div>
              <div className="space-y-1.5 text-xs sm:text-sm font-semibold text-text-strong font-mono">
                <div className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-brand" />
                  <span>Lead with innovation.</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-brand" />
                  <span>Deliver with excellence.</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-brand" />
                  <span>Grow through collaboration.</span>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Secondary leadership team image band below */}
        <div className="relative w-full aspect-[21/9] sm:aspect-[32/10] rounded-2xl overflow-hidden border border-line shadow-sm">
          <Image
            src={aboutImages.leaderTeam.src}
            alt={aboutImages.leaderTeam.alt}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-ink/10" />
        </div>
      </div>
    </section>
  );
}
