"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useSafeReducedMotion } from "@/hooks/useSafeReducedMotion";
import { Section } from "@/components/ui/Section";
import { ArrowRight } from "lucide-react";

export default function CEOMessage() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 });
  const shouldReduceMotion = useSafeReducedMotion();

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
        className="relative rounded-3xl shadow-2xl"
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
          <div className="lg:w-[64%] px-6 md:px-10 lg:pl-12 lg:pr-8 py-6 md:py-8 lg:py-8 flex flex-col justify-center">

            {/* Pull-quote — 3 lines with hanging double quotes */}
            <div className="relative pl-10 lg:pl-14">
              <div className="absolute left-0 top-[-2px] lg:top-[-6px]">
                <svg
                  className="w-8 h-8 lg:w-11 lg:h-11 text-white/30 select-none pointer-events-none"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <motion.p
                role="heading"
                aria-level={2}
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 14 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="text-white font-normal"
                style={{
                  fontSize: 'clamp(1.75rem, 3.2vw, 2.25rem)',
                  lineHeight: 1.2,
                  letterSpacing: '0'
                }}
              >
                We&apos;re not just <span className="font-extrabold">connecting systems</span>.
                <br />
                we&apos;re building <span className="font-extrabold">connected intelligence</span>
                <br />
                for the <span className="font-extrabold">industries of tomorrow</span>.
              </motion.p>
            </div>

            {/* Signature block */}
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 14 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="mt-5 lg:mt-6 flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-7"
            >
              {/* Name + title */}
              <div className="shrink-0">
                <p className="font-signature text-4xl lg:text-5xl text-white leading-tight">
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
              <p className="text-sm md:text-[0.9375rem] text-white/80 leading-relaxed max-w-[520px] font-light">
                Digital transformation is no longer about implementing technology—it's about connecting operations, data, and intelligence to create measurable business value. At DHGsoft, we engineer end-to-end industrial digital solutions that help organizations innovate with confidence, operate more intelligently, and build value for tomorrow.
              </p>
            </motion.div>
 
            {/* CTA row */}
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 14 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.3 }}
              className="mt-5 lg:mt-6 flex items-center gap-4"
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
          <div className="hidden lg:block lg:w-[36%] relative">
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, x: 16 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.2, ease: "easeOut" }}
              className="absolute top-[-95px] bottom-0 right-0 w-full flex items-end justify-center pointer-events-none"
            >
              <Image
                src="/ceo_image.png"
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
