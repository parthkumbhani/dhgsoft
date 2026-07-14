"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { buttonVariants } from "@/components/ui/button";
import { industries } from "@/lib/capabilitiesData";
import { cn } from "@/lib/utils";

export function IndustriesSupported() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  const fade = (delay = 0) => ({
    initial: { opacity: 0, y: 25 },
    animate: isInView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay },
  });

  return (
    <Section variant="white" size="default" pattern="v7" ref={ref} className="relative overflow-hidden border-b border-line">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
        
        {/* Left Column — Content */}
        <div className="lg:col-span-5 space-y-6 text-left">
          <motion.span {...fade(0)} className="section-eyebrow">
            Industries We Support
          </motion.span>

          <motion.h2
            {...fade(0.1)}
            className="heading-section text-txt-strong text-balance"
          >
            Built for Every Industrial Sector.
          </motion.h2>

          <motion.p
            {...fade(0.18)}
            className="text-body-md text-txt-muted max-w-[420px] font-sans font-medium leading-relaxed"
          >
            Our capabilities are designed to support organizations across the industrial economy — from high-precision manufacturing to critical infrastructure.
          </motion.p>

          <motion.div {...fade(0.26)} className="pt-4">
            <Link
              href="/industries"
              className={cn(
                buttonVariants({ variant: "primary", size: "lg" }),
                "h-12 px-8 flex items-center justify-center gap-2 group cursor-pointer text-white font-bold rounded-xl bg-gradient-to-r from-brand to-brand-deep hover:-translate-y-[2px] transition-all duration-300 shadow-md shadow-brand/10"
              )}
            >
              <span>Browse All Industries</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>

        {/* Right Column — Chips Grid */}
        <div className="lg:col-span-7">
          <div className="flex flex-wrap gap-2.5 justify-start">
            {industries.map((ind, idx) => (
              <motion.div
                key={ind.slug}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.03, ease: "easeOut" }}
              >
                <Link
                  href={`/industries/${ind.slug}`}
                  className="text-xs md:text-sm font-semibold text-txt-strong bg-mist border border-line rounded-full px-4 py-2 hover:border-brand/40 hover:text-brand hover:bg-brand/5 transition-all duration-200 select-none block font-sans"
                >
                  {ind.name}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </Section>
  );
}
export default IndustriesSupported;
