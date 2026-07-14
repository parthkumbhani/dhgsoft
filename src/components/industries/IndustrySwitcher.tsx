// src/components/industries/IndustrySwitcher.tsx
"use client";

import React, { useRef, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { IndustryData } from "@/lib/industries";

interface IndustrySwitcherProps {
  industries: IndustryData[];
  activeSlug: string;
}

export default function IndustrySwitcher({ industries, activeSlug }: IndustrySwitcherProps) {
  const activeRef = useRef<HTMLAnchorElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to active element in switcher
  useEffect(() => {
    if (activeRef.current && containerRef.current) {
      const container = containerRef.current;
      const element = activeRef.current;
      
      const containerWidth = container.offsetWidth;
      const elementOffset = element.offsetLeft;
      const elementWidth = element.offsetWidth;
      
      const scrollPosition = elementOffset - containerWidth / 2 + elementWidth / 2;
      container.scrollTo({
        left: scrollPosition,
        behavior: "smooth"
      });
    }
  }, [activeSlug]);

  return (
    <div className="w-full bg-ink/95 border-y border-slate-900 sticky top-20 z-40 backdrop-blur-md">
      <div className="max-w-site-wide mx-auto px-gutter md:px-gutter-md">
        <div 
          ref={containerRef}
          className="flex items-center gap-2 overflow-x-auto py-3 no-scrollbar scroll-smooth"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {industries.map((ind) => {
            const isActive = ind.slug === activeSlug;
            return (
              <Link
                key={ind.slug}
                href={`/industries/${ind.slug}`}
                prefetch={true}
                ref={isActive ? activeRef : null}
                className={`relative px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all duration-300 ${
                  isActive 
                    ? "text-white" 
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {/* Active background pill */}
                {isActive && (
                  <motion.span
                    layoutId="active-industry-pill"
                    className="absolute inset-0 bg-[#B4123F] rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {ind.title}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
