"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Hero() {
  const shouldReduceMotion = !!useReducedMotion();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.15 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="relative w-full h-[95vh] min-h-[640px] flex items-center overflow-hidden bg-white select-none">
      {/* Background Image — natural lighting, Annual Report style */}
      <motion.div
        animate={isClient && !shouldReduceMotion ? { scale: [1.02, 1, 1.02] } : {}}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/images/careers-hero.jpg"
          alt="DHGsoft engineers collaborating in a modern smart automation facility"
          fill
          priority
          quality={95}
          sizes="100vw"
          className="object-cover object-center"
        />
      </motion.div>

      {/* Pure Editorial White Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-transparent z-10" />

      {/* Subtle Contour grid texture */}
      <div
        className="absolute inset-0 bg-tech-grid opacity-[0.015] pointer-events-none z-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(15, 23, 42, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(15, 23, 42, 0.08) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Content — Left Aligned, clean spacing */}
      <div className="relative z-20 mx-auto w-full max-w-site px-gutter md:px-gutter-md">
        <motion.div
          variants={container}
          initial={isClient && shouldReduceMotion ? "visible" : "hidden"}
          animate="visible"
          className="max-w-[700px] flex flex-col items-start"
        >
          {/* Eyebrow badge */}
          <motion.div
            variants={item}
            className="inline-flex items-center gap-2 px-3 py-1 bg-brand/5 border border-brand/10 rounded-full mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse" />
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-brand font-sans">
              Build Your Career
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={item}
            className="heading-hero text-txt-strong text-balance"
          >
            Build the Future of <br />
            <span className="text-gradient-brand font-black">Connected Industries</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={item}
            className="mt-6 text-body-md text-txt-muted max-w-[580px] leading-relaxed font-sans font-medium"
          >
            Join a team that&apos;s transforming industrial enterprises through Automation, AI, Data, Cloud, and Digital Engineering. At DHGsoft, you&apos;ll work on cutting-edge technologies, collaborate with industry experts, and help shape the future of connected industries across the globe.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={item}
            className="mt-8 flex flex-wrap gap-4 items-center"
          >
            <Link
              href="/careers/current-openings"
              className={cn(
                buttonVariants({ variant: "primary", size: "lg" }),
                "h-12 px-8 flex items-center justify-center gap-2 group cursor-pointer text-white font-bold rounded-xl bg-gradient-to-r from-brand to-brand-deep hover:-translate-y-[2px] transition-all duration-300 shadow-md shadow-brand/10"
              )}
            >
              <span>Explore Vacancies</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="border border-line hover:border-brand hover:bg-brand/5 text-txt-strong rounded-xl font-bold h-12 px-8 flex items-center justify-center transition-all duration-300 hover:-translate-y-[2px]"
            >
              Contact Us
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-txt-muted pointer-events-none z-20">
        <span className="text-[9px] font-bold uppercase tracking-widest font-sans">Scroll to Explore</span>
        <div className="w-5 h-8 border-2 border-line rounded-full flex justify-center p-1">
          <motion.div
            animate={{
              y: [0, 6, 0],
              opacity: [1, 0.4, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              ease: "easeInOut",
            }}
            className="w-1 h-1 bg-brand rounded-full"
          />
        </div>
      </div>
    </section>
  );
}
export default Hero;
