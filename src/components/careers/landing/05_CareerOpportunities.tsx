"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { careerDomains } from "@/lib/careersData";

export function CareerOpportunities() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <Section variant="mist" size="snug" pattern="none" ref={ref} className="relative overflow-hidden border-b border-line">
      {/* Subtle Grid Texture */}
      <div
        className="absolute inset-0 bg-tech-grid opacity-[0.012] pointer-events-none z-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(15, 23, 42, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(15, 23, 42, 0.05) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 w-full">
        {/* Header */}
        <div className="text-left mb-12">
          <span className="section-eyebrow">Opportunities</span>
          <h2 className="heading-section text-txt-strong mt-3 font-sans font-extrabold text-3xl md:text-4xl tracking-tight">
            Career Domains &amp; Pathways
          </h2>
          <p className="section-subtitle text-txt-muted max-w-[620px] mt-4 font-sans font-medium">
            Explore active opportunities across our primary engineering, operational, and commercial disciplines.
          </p>
        </div>

        {/* Premium Editorial Navigation Panels */}
        <div className="border-t border-line divide-y divide-line">
          {careerDomains.map((domain, i) => (
            <motion.div
              key={domain.slug}
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group"
            >
              <Link
                href={`/careers/current-openings?domain=${domain.slug}`}
                className="flex flex-col md:flex-row md:items-center justify-between py-6 hover:px-4 transition-all duration-300 group-hover:bg-white select-none"
              >
                {/* Title & Description Column */}
                <div className="space-y-2 max-w-4xl">
                  <h3 className="text-lg md:text-xl font-bold text-txt-strong font-sans group-hover:text-brand transition-colors">
                    {domain.title}
                  </h3>
                  <p className="text-xs md:text-sm text-txt-muted font-sans font-medium leading-relaxed">
                    {domain.desc}
                  </p>
                </div>

                {/* Arrow Column */}
                <div className="flex items-center gap-2 mt-4 md:mt-0 self-start md:self-center shrink-0">
                  <span className="text-xs font-bold text-brand uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    View Openings
                  </span>
                  <div className="w-8 h-8 rounded-full border border-line flex items-center justify-center group-hover:bg-brand group-hover:border-brand transition-all duration-300">
                    <ArrowRight className="w-4 h-4 text-txt-strong group-hover:text-white transition-colors" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
export default CareerOpportunities;
