// src/components/about/PartnerEcosystem.tsx
"use client";

import React from "react";
import Image from "next/image";
import { aboutImages } from "@/lib/aboutImages";

export default function PartnerEcosystem() {
  return (
    <section className="bg-mist py-16 md:py-20 border-b border-line">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-[120px] space-y-16">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text & 3 Sub-Blocks */}
          <div className="lg:col-span-7 text-left space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-brand font-mono block">
                COLLABORATIONS
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-text-strong tracking-tight leading-tight">
                Partner Ecosystem
              </h2>
              <p className="text-brand font-bold text-base sm:text-lg">
                Innovation happens through collaboration.
              </p>
              <p className="text-text-muted text-sm sm:text-base leading-relaxed">
                DHGsoft works closely with customers, technology providers, universities, research institutions, system integrators, and industry experts to deliver future-ready solutions.
              </p>
            </div>

            {/* 3 Sub-blocks */}
            <div className="space-y-6 border-t border-line pt-6">
              
              <div className="space-y-1">
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-brand font-mono">
                  Technology Partners
                </h4>
                <p className="text-text-muted text-sm leading-relaxed">
                  Industrial Automation Platforms, Industrial Data Platforms, Enterprise Software, Cloud Providers, Cybersecurity Technologies, Artificial Intelligence Platforms
                </p>
              </div>

              <div className="space-y-1 border-t border-line/50 pt-4">
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-brand font-mono">
                  Academic Partnerships
                </h4>
                <p className="text-text-muted text-sm leading-relaxed">
                  Supporting research, innovation, internships, and workforce development through collaboration with universities and engineering institutions.
                </p>
              </div>

              <div className="space-y-1 border-t border-line/50 pt-4">
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-brand font-mono">
                  Strategic Alliances
                </h4>
                <p className="text-text-muted text-sm leading-relaxed">
                  Building long-term partnerships to accelerate innovation and deliver greater customer value.
                </p>
              </div>

            </div>
          </div>

          {/* Right Column: Image */}
          <div className="lg:col-span-5 relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-line shadow-sm">
            <Image
              src={aboutImages.partners.src}
              alt={aboutImages.partners.alt}
              fill
              className="object-cover"
            />
          </div>

        </div>

        {/* Grayscale Partner Logo Strip */}
        <div className="pt-8 border-t border-line">
          <div className="flex flex-wrap items-center justify-between gap-8 md:gap-12 opacity-30 hover:opacity-100 transition-opacity duration-300">
            
            {/* AWS */}
            <div className="h-10 w-24 relative flex items-center justify-center grayscale select-none pointer-events-none">
              <Image
                src="/logos/aws.svg"
                alt="AWS Logo"
                width={80}
                height={32}
                className="object-contain"
              />
            </div>

            {/* Microsoft Azure */}
            <div className="h-10 w-32 relative flex items-center justify-center grayscale select-none pointer-events-none">
              <Image
                src="/logos/microsoft-azure.svg"
                alt="Microsoft Azure Logo"
                width={120}
                height={32}
                className="object-contain"
              />
            </div>

            {/* Schneider Electric */}
            <div className="h-10 w-36 relative flex items-center justify-center grayscale select-none pointer-events-none">
              <Image
                src="/logos/schneider-electric.svg"
                alt="Schneider Electric Logo"
                width={130}
                height={32}
                className="object-contain"
              />
            </div>

            {/* AVEVA */}
            <div className="h-10 w-24 relative flex items-center justify-center grayscale select-none pointer-events-none">
              <Image
                src="/logos/aveva.svg"
                alt="AVEVA Logo"
                width={90}
                height={32}
                className="object-contain"
              />
            </div>

            {/* Phoenix Contact */}
            <div className="h-10 w-32 relative flex items-center justify-center grayscale select-none pointer-events-none">
              <Image
                src="/logos/phoenix-contact.svg"
                alt="Phoenix Contact Logo"
                width={110}
                height={32}
                className="object-contain"
              />
            </div>

            {/* Databricks */}
            <div className="h-10 w-24 relative flex items-center justify-center grayscale select-none pointer-events-none">
              <Image
                src="/logos/databricks.svg"
                alt="Databricks Logo"
                width={90}
                height={32}
                className="object-contain"
              />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
