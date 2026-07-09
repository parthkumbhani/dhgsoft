// src/components/about/Hero.tsx
"use client";
import { Section } from "@/components/ui/Section";

import React from "react";
import Image from "next/image";
import { aboutImages } from "@/lib/aboutImages";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <Section variant="ink" containerSize="wide" className="relative min-h-[550px] md:min-h-[650px] flex items-center overflow-hidden ">
      {/* Background Image with Dark Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={aboutImages.hero.src}
          alt={aboutImages.hero.alt}
          fill
          priority
          className="object-cover object-center opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-transparent" />
      </div>

      <div className="w-full relative z-10 py-16 md:py-24">
        <div className="max-w-3xl text-left flex gap-6">
          {/* Crimson Vertical Accent Line */}
          <div className="w-[4px] md:w-[6px] bg-brand rounded-full self-stretch shrink-0" />
          
          <div className="space-y-6">
            <motion.span
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="section-eyebrow"
            >
              ABOUT DHGSOFT
            </motion.span>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-[60px] font-black text-white tracking-tight leading-[1.08] font-sans"
            >
              Engineering the Future of Connected Industries
            </motion.h1>
 
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="section-subtitle on-dark max-w-2xl"
            >
              DHGsoft is a global Industrial Digital Transformation company helping organizations connect operations, data, applications, and people to create intelligent, efficient, and sustainable enterprises.
            </motion.p>
          </div>
        </div>
      </div>
    </Section>
  );
}
