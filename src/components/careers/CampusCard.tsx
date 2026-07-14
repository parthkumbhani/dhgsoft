"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function CampusCard() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.15 });

  return (
    <Section 
      ref={containerRef}
      variant="white" 
      size="default" 
      containerSize="wide"
      className="bg-white relative overflow-hidden select-none pb-20 md:pb-28"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
        transition={{ duration: 0.65, ease: "easeOut" }}
        className="w-full border border-line bg-white rounded-3xl p-8 md:p-12 lg:p-16 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 hover:shadow-2xl hover:border-brand/20 transition-all duration-500 relative overflow-hidden"
      >
        {/* Subtle dot matrix grid glow inside corner */}
        <div className="absolute right-0 bottom-0 w-24 h-24 bg-dot-matrix opacity-10 pointer-events-none" />

        {/* Left Side: Content info & badge details */}
        <div className="w-full md:w-[55%] text-left space-y-6">
          <div className="flex flex-col gap-4">
            <span className="inline-flex max-w-fit items-center bg-brand/10 px-3.5 py-1.5 rounded-full section-eyebrow">
              Future-Ready
            </span>
            
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-txt-strong tracking-tight leading-[1.1]">
              Campus & <br />
              Early Careers
            </h2>
          </div>

          <div className="flex items-center gap-2 text-sm md:text-base font-semibold text-slate-550">
            <span className="w-2.5 h-2.5 rounded-full bg-brand animate-pulse" />
            <span className="text-txt-muted font-mono">Grow into the future</span>
          </div>

          <p className="max-w-[520px] section-subtitle">
            Kickstart your career with hands-on projects, mentorship, and continuous learning. Join a community where curiosity drives real-world impact.
          </p>

          <div className="pt-2">
            <Link
              href="/careers/campus-early-careers"
              className={cn(
                buttonVariants({ variant: "default", size: "lg" }),
                "rounded-full px-7 py-3.5 text-xs uppercase tracking-wider group bg-slate-900 text-white hover:bg-brand cursor-pointer"
              )}
            >
              <span>Explore Programs</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Right Side: Photo with offset outline border sheet (magazine-mount style) */}
        <div className="w-full md:w-[45%] relative flex items-center justify-center">
          {/* Offset shadow layout */}
          <div className="absolute inset-0 translate-x-3.5 translate-y-3.5 bg-gradient-to-br from-brand via-brand-hot to-brand-deep rounded-3xl opacity-90 shadow-md" />
          
          <div className="w-full relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-line bg-slate-100 z-10">
            <Image
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80"
              alt="Diverse tech students group collaborating on early career growth campus paths"
              fill
              className="object-cover"
            />
          </div>
        </div>

      </motion.div>
    </Section>
  );
}
