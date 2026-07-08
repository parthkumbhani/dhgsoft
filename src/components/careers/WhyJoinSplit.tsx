"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { Section } from "@/components/ui/Section";

export default function WhyJoinSplit() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.15 });

  return (
    <Section 
      ref={containerRef}
      variant="white" 
      size="default" 
      containerSize="wide"
      className="bg-white relative overflow-hidden select-none py-16 md:py-24"
    >
      {/* Subtle brand radial glow top right */}
      <div className="absolute right-0 top-0 w-96 h-96 rounded-full bg-brand/3 blur-3xl pointer-events-none" />

      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left: Magazine-mount framed picture */}
        <div className="lg:col-span-6 relative flex items-center justify-center">
          {/* Offset brand gradient background sheet */}
          <div className="absolute inset-0 translate-x-4 translate-y-4 bg-gradient-to-br from-brand via-brand-hot to-brand-accent rounded-3xl opacity-90 shadow-lg" />
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-line bg-slate-100 z-10"
          >
            <Image
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80"
              alt="DHGsoft technical specialists looking forward together during whiteboard sprint planning"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>

        {/* Right: Content block */}
        <div className="lg:col-span-6 text-left space-y-6 lg:pl-4">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
            className="text-xs font-semibold uppercase tracking-[0.2em] text-brand font-mono block"
          >
            Why join DHGsoft?
          </motion.span>

          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-5xl font-bold leading-tight tracking-tight text-txt-strong font-sans"
          >
            Build Your <span className="text-gradient-brand">Career</span>. <br />
            Build the <span className="text-gradient-brand">Future</span>. <br />
            Build <span className="text-gradient-brand">Value</span> for <span className="text-gradient-brand">Tomorrow</span>.
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base md:text-lg leading-relaxed text-txt-muted font-light"
          >
            At DHGsoft, we believe our people are the foundation of every successful transformation. We create an environment where engineers, innovators, and problem-solvers are empowered to learn, collaborate, and make a lasting impact. From industrial automation and AI to digital engineering and cloud technologies, you&apos;ll work on projects that shape the future of connected industries.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="pt-2"
          >
            <Link 
              href="/careers/life-at-dhgsoft"
              className="inline-flex items-center gap-3 text-brand font-bold hover:text-brand-hot group transition-colors"
            >
              <span>Learn more</span>
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-brand to-brand-accent text-white shadow-md group-hover:scale-105 transition-transform">
                <svg className="w-4 h-4 stroke-current fill-none stroke-[2.5]" viewBox="0 0 24 24">
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </span>
            </Link>
          </motion.div>
        </div>

      </div>
    </Section>
  );
}
