"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function FinalCta() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="relative w-full py-20 md:py-28 overflow-hidden bg-slate-50 border-t border-line">
      {/* Real Team Background Photo — natural lighting, high quality */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/about_hero_cinematic.png"
          alt="DHGsoft digital engineering and smart automation project team"
          fill
          className="object-cover object-center opacity-85"
          sizes="100vw"
        />
        {/* Pure white overlay/gradient to make it a light editorial banner */}
        <div className="absolute inset-0 bg-white/95" />
      </div>

      {/* Subtle Contour Grid Texture */}
      <div
        className="absolute inset-0 bg-tech-grid opacity-[0.012] pointer-events-none z-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(15, 23, 42, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(15, 23, 42, 0.05) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Content */}
      <div className="relative z-20 mx-auto w-full max-w-site px-gutter md:px-gutter-md flex flex-col items-center text-center">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 bg-brand/5 border border-brand/10 rounded-full mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse" />
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-brand font-sans">
            Now Hiring Across Roles
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="heading-hero text-txt-strong text-center leading-[1.1] tracking-tight font-sans font-extrabold max-w-3xl"
        >
          Your Journey to <span className="text-gradient-brand">Build Value</span> Starts Here.
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.16 }}
          className="section-subtitle text-txt-muted max-w-[620px] mx-auto mt-6 font-sans font-semibold"
        >
          Whether you&apos;re an experienced engineer or just starting your career, DHGsoft is where you&apos;ll grow, contribute, and shape the future of connected industries.
        </motion.p>

        {/* Action buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.24 }}
          className="flex flex-wrap items-center justify-center gap-4 mt-8"
        >
          <Link
            href="/careers/current-openings"
            className={cn(
              buttonVariants({ variant: "primary", size: "lg" }),
              "h-12 px-8 flex items-center justify-center gap-2 group cursor-pointer text-white font-bold rounded-xl bg-gradient-to-r from-brand to-brand-deep hover:-translate-y-[2px] transition-all duration-300 shadow-md shadow-brand/10"
            )}
          >
            <span>Explore Vacancies</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="/contact"
            className="border border-line hover:border-brand hover:bg-brand/5 text-txt-strong rounded-xl font-bold h-12 px-8 flex items-center justify-center transition-all duration-300 hover:-translate-y-[2px]"
          >
            Contact Us
          </Link>
        </motion.div>

        {/* Footer Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.32 }}
          className="text-[9px] font-bold uppercase tracking-[0.25em] text-txt-muted mt-12 font-sans"
        >
          Building Value for Tomorrow.
        </motion.p>
      </div>
    </section>
  );
}
export default FinalCta;
