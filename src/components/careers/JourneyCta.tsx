"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { ArrowRight, Briefcase, MapPin, Users } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useSafeReducedMotion } from "@/hooks/useSafeReducedMotion";

const highlights = [
  { icon: Briefcase, value: "6+", label: "Career Domains" },
  { icon: Users, value: "150+", label: "Engineers" },
  { icon: MapPin, value: "10+", label: "Global Locations" },
];

export default function JourneyCta() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });
  const shouldReduceMotion = useSafeReducedMotion();

  return (
    <Section
      ref={containerRef}
      variant="white"
      size="default"
      containerSize="wide"
      className="relative overflow-visible py-16 md:py-24"
    >
      <motion.div
        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 24 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
        transition={{ duration: 0.65, ease: "easeOut" }}
        className="relative w-full rounded-[2rem] p-[1px] bg-gradient-to-br from-brand via-brand-hot to-[#fbc00e] shadow-[0_24px_80px_rgba(180,18,63,0.18)]"
      >
        <div className="relative w-full overflow-hidden rounded-[calc(2rem-1px)] bg-[#0c1020] px-8 py-10 md:px-12 md:py-14 lg:px-16 lg:py-16">
          {/* Ambient glow orbs */}
          <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-brand/20 blur-[100px]" />
          <div className="pointer-events-none absolute -bottom-20 -right-16 h-64 w-64 rounded-full bg-brand-hot/15 blur-[90px]" />
          <div className="pointer-events-none absolute right-1/3 top-0 h-48 w-48 rounded-full bg-[#fbc00e]/10 blur-[80px]" />

          {/* Tech grid overlay */}
          <div className="pointer-events-none absolute inset-0 bg-tech-grid opacity-[0.07]" />

          {/* Decorative arrow motif */}
          <div className="pointer-events-none absolute right-6 top-1/2 hidden -translate-y-1/2 select-none text-[12rem] font-black leading-none text-white/[0.02] lg:block">
            →
          </div>

          <div className="relative z-10 grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
            {/* Left: copy + stats */}
            <div className="space-y-7 text-left lg:col-span-7">
              <motion.div
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 12 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 rounded-full border border-brand/25 bg-brand/10 px-3.5 py-1.5 backdrop-blur-sm"
              >
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-hot" />
                <span className="section-eyebrow text-brand-hot">Now Hiring Across Roles</span>
              </motion.div>

              <motion.div
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.06 }}
                className="space-y-4"
              >
                <h2 className="text-3xl font-bold leading-[1.08] tracking-tight text-white md:text-4xl lg:text-[2.75rem]">
                  Your Journey to Build{" "}
                  <span className="text-gradient-brand">Value Starts Here.</span>
                </h2>
                <p className="max-w-xl text-base leading-relaxed text-slate-300 md:text-lg">
                  Join a team where engineering excellence meets real-world impact — from industrial automation to cloud platforms and AI-driven systems.
                </p>
              </motion.div>

              <motion.div
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 14 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.12 }}
                className="flex flex-wrap gap-3"
              >
                {highlights.map(({ icon: Icon, value, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 backdrop-blur-sm"
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand/30 to-brand-hot/20 text-brand-hot">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-lg font-bold leading-none text-white">{value}</p>
                      <p className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                        {label}
                      </p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right: CTA panel */}
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.16 }}
              className="lg:col-span-5"
            >
              <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-6 md:p-8 backdrop-blur-md">
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-hot/60 to-transparent" />

                <div className="space-y-5">
                  <div className="space-y-2">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-hot">
                      Ready to Apply?
                    </p>
                    <p className="text-sm leading-relaxed text-slate-300">
                      Browse open roles across engineering, architecture, and consulting — or send us your CV for future opportunities.
                    </p>
                  </div>

                  <div className="flex flex-col gap-3">
                    <Link
                      href="/careers/current-openings"
                      className={cn(
                        buttonVariants({ variant: "primary", size: "lg" }),
                        "group h-12 w-full justify-center gap-2 rounded-xl bg-gradient-to-r from-brand to-brand-deep text-sm font-bold uppercase tracking-wider shadow-lg shadow-brand/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-brand/35"
                      )}
                    >
                      <span>Explore Vacancies</span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>

                    <Link
                      href="/careers/submit-cv"
                      className="flex h-12 w-full items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] text-sm font-bold text-white transition-all duration-300 hover:border-brand/40 hover:bg-brand/10"
                    >
                      Submit Your CV
                    </Link>
                  </div>

                  <p className="text-center text-[10px] font-bold uppercase tracking-[0.22em] text-slate-500">
                    Building Value for Tomorrow
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
