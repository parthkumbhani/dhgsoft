"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { ArrowRight } from "lucide-react";

export default function CEOMessage() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const motionPreference = useReducedMotion();
  const shouldReduceMotion = !!motionPreference;

  // Subtle vertical parallax for the portrait silhouette on desktop
  const scrollTransform = useTransform(scrollYProgress, [0, 1], [-20, 20]);
  const yImage = shouldReduceMotion ? 0 : scrollTransform;

  return (
    <Section
      ref={sectionRef}
      id="ceo-message"
      variant="white"
      size="default"
      className="overflow-visible"
    >
      {/* Outer wrapper to contain the card relative positioning inside the site container */}
      <motion.div
        initial={shouldReduceMotion ? {} : { opacity: 0, y: 30, scale: 0.98 }}
        animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full min-h-[520px] lg:min-h-[560px] select-none"
      >
        {/* ━━━━ PANEL BACKGROUND CARD ━━━━ */}
        <div className="absolute inset-0 rounded-3xl overflow-hidden bg-gradient-to-br from-brand via-[#9A0F35] to-brand-deep z-0 shadow-2xl">
          {/* Subtle noise/grain texture overlay (mix-blend-overlay) */}
          <svg
            className="absolute inset-0 w-full h-full opacity-[0.04] pointer-events-none mix-blend-overlay"
            xmlns="http://www.w3.org/2000/svg"
          >
            <filter id="ceoNoiseFilter">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.75"
                numOctaves="3"
                stitchTiles="stitch"
              />
            </filter>
            <rect width="100%" height="100%" filter="url(#ceoNoiseFilter)" />
          </svg>

          {/* Warm Amber Glow behind where the portrait sits */}
          <motion.div
            className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#F5B301]/15 blur-3xl pointer-events-none transform translate-x-12 -translate-y-12"
            animate={
              shouldReduceMotion
                ? {}
                : {
                    opacity: [0.12, 0.18, 0.12],
                    scale: [1, 1.06, 1],
                  }
            }
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Large decorative outlined shape for editorial texture */}
          <svg
            className="absolute -right-20 -top-20 w-[450px] h-[450px] text-white/8 pointer-events-none"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="50"
              cy="50"
              r="48"
              stroke="currentColor"
              strokeWidth="0.2"
              strokeDasharray="3 3"
            />
            <circle cx="50" cy="50" r="41" stroke="currentColor" strokeWidth="0.1" />
          </svg>
        </div>

        {/* ━━━━ CONTENT LAYER & GRID ━━━━ */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 items-stretch min-h-[520px] lg:min-h-[560px]">
          {/* Content (cols 1-7) */}
          <div className="lg:col-span-7 flex flex-col justify-center px-6 py-12 md:px-12 lg:px-16 lg:py-20 text-center lg:text-left items-center lg:items-start space-y-8 relative z-10">
            {/* Eyebrow Pill Chip */}
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-[10px] font-extrabold tracking-[0.2em] uppercase px-3.5 py-1.5 rounded-full"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#F5B301] to-brand-hot" />
              MESSAGE FROM OUR CEO
            </motion.div>

            {/* Pull-Quote with oversized curly quote behind it */}
            <div className="relative w-full">
              <motion.span
                initial={shouldReduceMotion ? { opacity: 0.15 } : { opacity: 0 }}
                animate={isInView ? { opacity: 0.15 } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute -top-24 -left-6 lg:-top-28 lg:-left-12 text-[10rem] lg:text-[12rem] leading-none font-serif text-white select-none pointer-events-none font-black"
                aria-hidden="true"
              >
                “
              </motion.span>

              <motion.h2
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10 text-white font-sans text-2xl sm:text-3xl lg:text-[40px] leading-snug tracking-tight font-light max-w-2xl text-left"
              >
                <span className="text-white/70 font-medium">We&apos;re not just </span>
                <span className="text-white font-extrabold">building technology</span>.
                <br />
                <span className="text-white/70 font-medium">We&apos;re </span>
                <span className="font-black text-[#F5B301]">engineering the future</span>
                <span className="text-white/70 font-medium"> of connected industry.</span>
              </motion.h2>
            </div>

            {/* Signature Block (Desktop side-by-side, Mobile stacked) */}
            <div className="flex flex-col md:flex-row md:items-center gap-6 lg:gap-8 pt-4 w-full">
              {/* Signature Area */}
              <motion.div
                initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col text-left shrink-0"
              >
                <span
                  className="text-4xl md:text-5xl text-white italic select-none"
                  style={{ fontFamily: "'Dancing Script', cursive" }}
                >
                  Hitesh Patel
                </span>
                <span className="text-sm md:text-base text-white/70 italic font-normal mt-1">
                  CHIEF EXECUTIVE OFFICER, DHGSOFT
                </span>
              </motion.div>

              {/* Vertical Divider */}
              <motion.div
                initial={shouldReduceMotion ? { scaleY: 1 } : { scaleY: 0 }}
                animate={isInView ? { scaleY: 1 } : {}}
                transition={{ duration: 0.2, delay: 0.5 }}
                className="hidden md:block h-12 w-px bg-white/20 origin-top shrink-0"
              />

              {/* Supporting Statement */}
              <motion.p
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 0.85, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-white text-sm md:text-base leading-relaxed max-w-md font-light text-left"
              >
                At DHGsoft, we transform bold ideas into intelligent solutions — combining AI,
                Industrial IoT, Cloud, and Data Platforms to help organizations innovate faster
                and grow sustainably.
              </motion.p>
            </div>

            {/* CTA Buttons Row */}
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex items-center gap-4 pt-2 w-full justify-center lg:justify-start"
            >
              <button
                onClick={() =>
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                }
                className="bg-transparent border border-white text-white rounded-full px-6 py-3 hover:bg-white hover:text-brand transition-all duration-300 inline-flex items-center gap-2 font-semibold text-sm cursor-pointer shadow-sm active:scale-95"
              >
                <span>Connect with Our Team</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="https://linkedin.com/in/hitesh-patel-967087a0"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Connect with Hitesh Patel on LinkedIn"
                title="Connect on LinkedIn"
                className="w-11 h-11 rounded-full border border-white/40 text-white hover:bg-white hover:text-[#0A66C2] hover:border-white transition-all flex items-center justify-center shrink-0 active:scale-95"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </motion.div>
          </div>

          {/* Portrait Column (cols 8-12) */}
          {/* On desktop, absolute positioned, overlapping the top card edge */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 32 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="lg:absolute lg:right-6 lg:bottom-0 w-full max-w-[280px] md:max-w-[380px] lg:max-w-none lg:w-[46%] h-[320px] md:h-[420px] lg:h-[112%] z-20 pointer-events-none mt-8 lg:mt-0 flex items-end justify-center overflow-visible"
          >
            <div className="relative w-full h-full lg:transform lg:translate-y-[-4%] select-none">
              {/* Editorial warm light highlight overlay */}
              <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none z-10" />

              <motion.div
                style={{ y: yImage }}
                className="relative w-full h-full flex items-end justify-center"
              >
                <Image
                  src="/CEO_nobg_clean.png"
                  alt="Hitesh Patel — Chief Executive Officer, DHGsoft"
                  fill
                  className="object-contain object-bottom select-none transition-transform duration-700 hover:scale-[1.02] filter drop-shadow-[0_16px_32px_rgba(10,14,26,0.3)]"
                  priority
                  sizes="(max-width: 768px) 280px, (max-width: 1024px) 380px, 500px"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </Section>
  );
}
