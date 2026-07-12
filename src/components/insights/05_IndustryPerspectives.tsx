"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { buttonVariants } from "@/components/ui/button";
import { industries } from "@/lib/insightsData";
import { cn } from "@/lib/utils";

export function IndustryPerspectives() {
  return (
    <Section variant="mist" size="default" pattern="v4" className="relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Content */}
        <div className="lg:col-span-7 space-y-6 text-left">
          <span className="text-brand text-label-bold uppercase tracking-[0.2em] font-sans block">
            INDUSTRY PERSPECTIVES
          </span>
          <h2 className="text-txt-strong tracking-tight font-black leading-tight font-sans">
            Every industry faces unique operational challenges.
          </h2>
          <p className="text-body-md text-txt-muted max-w-[560px] leading-relaxed font-sans">
            Our engineering experts share insights tailored to manufacturing, automotive, life sciences, semiconductor, food & beverage, chemical processing, utilities, oil & gas, mining, water management, and infrastructure sectors.
          </p>
          <div className="pt-4">
            <Link
              href="/industries"
              className={cn(
                buttonVariants({ variant: "primary", size: "lg" }),
                "h-12 px-8 inline-flex items-center gap-2 group cursor-pointer text-white font-bold"
              )}
            >
              <span>Browse by Industry</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Right Column: Industry Chips Cloud */}
        <div className="lg:col-span-5 text-left">
          <div className="flex flex-wrap gap-2.5">
            {industries.map((ind) => (
              <Link 
                key={ind.slug}
                href={`/industries/${ind.slug}`}
                className="text-body-sm text-txt-strong bg-white border border-line rounded-full px-4 py-2 hover:border-[#B4123F] hover:text-[#B4123F] hover:bg-[#B4123F]/5 transition-colors font-semibold font-sans block cursor-pointer shadow-sm"
              >
                {ind.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
