"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { capabilities } from "@/lib/capabilitiesData";

export function CoreCapabilities() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.05 });

  const cardVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: i * 0.05, ease: "easeOut" }
    })
  };

  return (
    <Section variant="mist" size="default" pattern="v2" ref={ref} id="capabilities" className="relative overflow-hidden border-b border-line">
      <div className="w-full relative z-10">
        {/* Header */}
        <div className="text-center mb-12 max-w-2xl mx-auto space-y-4">
          <span className="section-eyebrow text-center">Our Core Capabilities</span>
          <h2 className="heading-section text-txt-strong text-center text-balance">
            Ten Capabilities. One Connected Ecosystem.
          </h2>
          <p className="section-subtitle text-txt-muted text-center max-w-[620px] mx-auto font-sans font-medium leading-relaxed">
            From automation and IIoT to AI and managed services — every capability is engineered to work as part of a unified digital transformation platform.
          </p>
        </div>

        {/* 10-card Grid (4 + 4 + 2 balanced layout) */}
        <div className="mt-12 flex flex-col gap-6">
          
          {/* Row 1 & 2: First 8 cards (4-column layout) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.slice(0, 8).map((cap, idx) => {
              const Icon = cap.Icon;
              return (
                <motion.div
                  key={cap.slug}
                  custom={idx}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  variants={cardVariants}
                  className="h-full"
                >
                  <Link
                    href={`/capabilities/${cap.slug}`}
                    className="card group bg-white border border-line rounded-[24px] p-6 hover:border-brand/40 hover:shadow-md hover:-translate-y-1 transition-all duration-300 h-full flex flex-col justify-between"
                  >
                    <div>
                      {/* Card Header: number + icon */}
                      <div className="flex items-start justify-between mb-6">
                        <div className="text-brand/25 leading-none font-bold text-3xl font-sans tracking-tight">
                          {cap.number}
                        </div>
                        <div className="w-10 h-10 rounded-full bg-brand/5 border border-brand/10 flex items-center justify-center group-hover:bg-brand group-hover:border-brand transition-colors duration-300">
                          <Icon className="w-5 h-5 text-brand group-hover:text-white transition-colors duration-300" />
                        </div>
                      </div>

                      <h3 className="card-title text-txt-strong">{cap.title}</h3>
                      <p className="card-description text-txt-muted mt-3 leading-relaxed font-sans">
                        {cap.body}
                      </p>
                    </div>

                    <div>
                      {/* Focus areas mini chips */}
                      <div className="flex flex-wrap gap-1.5 mt-6 pt-4 border-t border-line/70">
                        {cap.focusAreas.slice(0, 3).map((area) => (
                          <span
                            key={area}
                            className="text-[10px] font-bold text-txt-muted bg-mist border border-line rounded-full px-2.5 py-1 font-sans"
                          >
                            {area}
                          </span>
                        ))}
                        {cap.focusAreas.length > 3 && (
                          <span className="text-[10px] font-extrabold text-brand bg-brand/5 border border-brand/10 rounded-full px-2.5 py-1 font-sans">
                            +{cap.focusAreas.length - 3} more
                          </span>
                        )}
                      </div>

                      {/* Read more link */}
                      <div className="inline-flex items-center gap-1.5 mt-6 text-brand text-xs font-extrabold uppercase tracking-wider group-hover:gap-2.5 transition-all duration-300 font-sans">
                        <span>Explore</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* Row 3: Last 2 cards centered (4-column layout layout spacing helper) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="hidden lg:block lg:col-span-1" aria-hidden="true" />
            
            {capabilities.slice(8, 10).map((cap, idx) => {
              const Icon = cap.Icon;
              return (
                <motion.div
                  key={cap.slug}
                  custom={idx + 8}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  variants={cardVariants}
                  className="h-full"
                >
                  <Link
                    href={`/capabilities/${cap.slug}`}
                    className="card group bg-white border border-line rounded-[24px] p-6 hover:border-brand/40 hover:shadow-md hover:-translate-y-1 transition-all duration-300 h-full flex flex-col justify-between"
                  >
                    <div>
                      {/* Card Header: number + icon */}
                      <div className="flex items-start justify-between mb-6">
                        <div className="text-brand/25 leading-none font-bold text-3xl font-sans tracking-tight">
                          {cap.number}
                        </div>
                        <div className="w-10 h-10 rounded-full bg-brand/5 border border-brand/10 flex items-center justify-center group-hover:bg-brand group-hover:border-brand transition-colors duration-300">
                          <Icon className="w-5 h-5 text-brand group-hover:text-white transition-colors duration-300" />
                        </div>
                      </div>

                      <h3 className="card-title text-txt-strong">{cap.title}</h3>
                      <p className="card-description text-txt-muted mt-3 leading-relaxed font-sans">
                        {cap.body}
                      </p>
                    </div>

                    <div>
                      {/* Focus areas mini chips */}
                      <div className="flex flex-wrap gap-1.5 mt-6 pt-4 border-t border-line/70">
                        {cap.focusAreas.slice(0, 3).map((area) => (
                          <span
                            key={area}
                            className="text-[10px] font-bold text-txt-muted bg-mist border border-line rounded-full px-2.5 py-1 font-sans"
                          >
                            {area}
                          </span>
                        ))}
                        {cap.focusAreas.length > 3 && (
                          <span className="text-[10px] font-extrabold text-brand bg-brand/5 border border-brand/10 rounded-full px-2.5 py-1 font-sans">
                            +{cap.focusAreas.length - 3} more
                          </span>
                        )}
                      </div>

                      {/* Read more link */}
                      <div className="inline-flex items-center gap-1.5 mt-6 text-brand text-xs font-extrabold uppercase tracking-wider group-hover:gap-2.5 transition-all duration-300 font-sans">
                        <span>Explore</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}

            <div className="hidden lg:block lg:col-span-1" aria-hidden="true" />
          </div>

        </div>
      </div>
    </Section>
  );
}
export default CoreCapabilities;
