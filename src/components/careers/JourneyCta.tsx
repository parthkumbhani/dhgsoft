"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function JourneyCta() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  return (
    <Section 
      ref={containerRef}
      variant="mist" 
      size="default" 
      containerSize="wide"
      className="relative overflow-hidden select-none bg-mist border-y border-line py-20 md:py-24"
    >
      {/* Premium Floating Decorative Ribbon Elements */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none select-none" xmlns="http://www.w3.org/2000/svg">
        {/* Ribbon Shape 1 */}
        <motion.path
          d="M 200 -20 Q 230 40, 210 100 T 260 180"
          fill="none"
          stroke="url(#ribbonGrad1)"
          strokeWidth="6"
          strokeLinecap="round"
          opacity="0.15"
          initial={{ pathLength: 0, rotate: 10 }}
          animate={isInView ? { pathLength: 1, rotate: 15 } : {}}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        {/* Ribbon Shape 2 */}
        <motion.path
          d="M 850 300 Q 880 220, 920 200 T 900 100"
          fill="none"
          stroke="url(#ribbonGrad2)"
          strokeWidth="8"
          strokeLinecap="round"
          opacity="0.12"
          initial={{ pathLength: 0, rotate: -10 }}
          animate={isInView ? { pathLength: 1, rotate: -5 } : {}}
          transition={{ duration: 1.8, ease: "easeOut" }}
        />
        {/* Ribbon Shape 3 */}
        <motion.path
          d="M 50 180 Q 80 150, 120 180 T 150 120"
          fill="none"
          stroke="url(#ribbonGrad1)"
          strokeWidth="5"
          strokeLinecap="round"
          opacity="0.1"
          initial={{ pathLength: 0 }}
          animate={isInView ? { pathLength: 1 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />

        <defs>
          <linearGradient id="ribbonGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#B4123F" />
            <stop offset="100%" stopColor="#F5B301" />
          </linearGradient>
          <linearGradient id="ribbonGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E94560" />
            <stop offset="100%" stopColor="#B4123F" />
          </linearGradient>
        </defs>
      </svg>

      <div className="w-full relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8 py-4">
        
        {/* Left Heading */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-left space-y-2"
        >
          <h2 className="text-4xl md:text-5xl lg:text-[3rem] font-bold leading-tight text-txt-strong tracking-tight">
            Your Journey to Build <br />
            <span className="text-gradient-brand">Value Starts Here.</span>
          </h2>
        </motion.div>

        {/* Right CTA button */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="shrink-0 flex items-center"
        >
          <Link
            href="/careers/current-openings"
            className={cn(
              buttonVariants({ variant: "primary", size: "lg" }),
              "rounded-full px-8 py-4 uppercase tracking-wider text-xs font-bold"
            )}
          >
            <span>Explore Vacancies</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

      </div>
    </Section>
  );
}
