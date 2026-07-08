"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { ArrowRight } from "lucide-react";
import { Great_Vibes } from "next/font/google";

const signatureFont = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-signature",
});

export default function CEOMessage() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 });
  const shouldReduceMotion = !!useReducedMotion();

  return (
    <Section
      ref={sectionRef}
      id="ceo-message"
      variant="white"
      size="default"
      className="overflow-visible"
    >
      <motion.div
        initial={shouldReduceMotion ? {} : { opacity: 0, y: 24 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        className={`${signatureFont.variable} relative rounded-3xl shadow-2xl overflow-hidden`}
        /* NOTE: overflow-hidden added to fully contain portrait within the box */
      >
        {/* ── Background — clipped separately so portrait can overflow ── */}
        <div className="absolute inset-0 rounded-3xl overflow-hidden bg-gradient-to-br from-brand via-[#9E1039] to-brand-deep z-0">
          {/* Warm amber glow */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[480px] h-[480px] bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

          {/* Fractal noise texture overlay */}
          <svg
            aria-hidden="true"
            className="absolute inset-0 w-full h-full opacity-[0.04] pointer-events-none mix-blend-overlay"
            xmlns="http://www.w3.org/2000/svg"
          >
            <filter id="ceoGrain">
              <feTurbulence type="fractalNoise" baseFrequency="0.72" numOctaves="3" stitchTiles="stitch" />
            </filter>
            <rect width="100%" height="100%" filter="url(#ceoGrain)" />
          </svg>
        </div>

        {/* ── Content layout — flex for tight side-by-side ── */}
        <div className="relative z-10 flex flex-col lg:flex-row items-stretch">

          {/* ──────────────── LEFT — content zone (58%) ──────────────── */}
          {/* Reduced vertical padding → drives panel to compact height */}
          <div className="lg:w-[58%] px-8 md:px-12 lg:px-14 py-10 md:py-12 lg:py-14 flex flex-col justify-center">

            {/* Decorative opening quote glyph */}
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.05 }}
              aria-hidden="true"
              className="text-[4.5rem] lg:text-[5.5rem] leading-none font-serif text-white/25 select-none -ml-1 mb-1"
            >
              &ldquo;
            </motion.div>

            {/* Pull-quote — 2 lines */}
            <motion.h2
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 14 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-2xl sm:text-3xl lg:text-[2.5rem] leading-[1.18] font-medium text-white/85"
            >
              We&apos;re not just{" "}
              <span className="font-bold text-white">building technology</span>{" "}
              &mdash; we&apos;re
              <br />
              <span className="font-bold text-white">engineering the future</span>{" "}
              of connected industry.
            </motion.h2>

            {/* Signature block */}
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 14 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="mt-8 lg:mt-10 flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-7"
            >
              {/* Name + title */}
              <div className="shrink-0">
                <p className="font-[family-name:var(--font-signature)] text-4xl lg:text-5xl text-white leading-tight">
                  Hitesh Patel
                </p>
                <p className="mt-1.5 text-xs lg:text-sm text-white/65 italic tracking-wide">
                  Chief Executive Officer, DHGsoft
                </p>
              </div>

              {/* Vertical divider (desktop only) */}
              <motion.div
                initial={shouldReduceMotion ? {} : { scaleY: 0 }}
                animate={isInView ? { scaleY: 1 } : {}}
                transition={{ duration: 0.35, delay: 0.3 }}
                aria-hidden="true"
                className="hidden lg:block w-px h-14 bg-white/30 shrink-0 origin-top"
              />

              {/* Supporting statement */}
              <p className="text-sm md:text-[0.9375rem] text-white/80 leading-relaxed max-w-[340px] font-light">
                At DHGsoft, we don&apos;t just build systems &mdash; we build
                intelligence into industries, enabling them to evolve, adapt,
                and lead in a rapidly changing world.
              </p>
            </motion.div>

            {/* CTA row */}
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 14 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.3 }}
              className="mt-8 lg:mt-10 flex items-center gap-4"
            >
              <button
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white text-white text-sm font-semibold hover:bg-white hover:text-brand transition-all duration-300 group cursor-pointer"
              >
                Connect with Our Team
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <a
                href="https://linkedin.com/in/hitesh-patel-967087a0"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Connect with Hitesh Patel on LinkedIn"
                title="Connect on LinkedIn"
                className="inline-flex items-center justify-center w-11 h-11 rounded-full border border-white/50 text-white hover:bg-white hover:text-[#0A66C2] transition-all duration-300"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </motion.div>
          </div>

          {/* ──────────────── RIGHT — portrait zone (42%) ──────────────── */}
          {/*
            CINEMATIC OVERFLOW TRICK:
            - No min-h on this div → panel height driven by LEFT content only
            - Portrait container uses inset-y-[-40px] → extends 40px above AND below panel
            - Image is h-[calc(100%+80px)] → 80px taller than the extended container
            - object-bottom → jacket/arms anchor to bottom overflow area
            - items-end → base of image sits at bottom of container
            Result: head overflows ~40px above panel top, jacket ~40px below panel bottom
          */}
          <div className="hidden lg:block lg:w-[42%] relative">
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, x: 16 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.2, ease: "easeOut" }}
              className="absolute inset-y-0 right-0 w-full flex items-end justify-start pointer-events-none"
            >
              <Image
                src="/ceo.png"
                alt="Hitesh Patel, CEO of DHGsoft"
                width={1200}
                height={1500}
                quality={95}
                priority
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="h-full w-auto max-w-none object-contain object-bottom"
              />
            </motion.div>
          </div>

        </div>
      </motion.div>
    </Section>
  );
}
