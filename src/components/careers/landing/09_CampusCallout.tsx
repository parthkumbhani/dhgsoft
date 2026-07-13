"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function CampusCallout() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  const animFade = (delay = 0) => ({
    initial: { opacity: 0, y: 25 },
    animate: isInView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay },
  });

  return (
    <Section variant="white" size="snug" pattern="none" ref={ref} className="relative overflow-hidden border-b border-line">
      {/* Subtle light accent background blur */}
      <div
        className="absolute bottom-10 left-10 w-[300px] h-[300px] rounded-full pointer-events-none opacity-[0.04] filter blur-[70px] z-0"
        style={{
          background: "radial-gradient(circle, #B4123F 0%, transparent 70%)",
        }}
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">

        {/* Left: Content (~55%) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Eyebrow badge */}
          <motion.div {...animFade(0)} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand/5 border border-brand/10 text-brand">
            <Sparkles className="w-3.5 h-3.5 animate-pulse text-brand-hot" />
            <span className="text-[10px] font-extrabold uppercase tracking-widest font-sans">
              Future-Ready
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2 {...animFade(0.1)} className="heading-section text-txt-strong mt-3 font-sans font-extrabold text-3xl md:text-4xl tracking-tight leading-tight text-balance">
            Campus &amp; Early Careers
          </motion.h2>

          {/* Subheading */}
          <motion.p
            {...animFade(0.15)}
            className="text-brand font-bold font-sans uppercase tracking-[0.2em] text-xs"
          >
            Grow into the future
          </motion.p>

          {/* Body Paragraph */}
          <motion.p {...animFade(0.2)} className="text-body-md text-txt-muted max-w-[560px] font-sans font-medium leading-relaxed">
            Kickstart your career with hands-on projects, mentorship, and continuous learning. Join a community where curiosity drives real-world impact.
          </motion.p>

          {/* CTA */}
          <motion.div {...animFade(0.28)}>
            <Link
              href="/careers/campus-early-careers"
              className={cn(
                buttonVariants({ variant: "primary", size: "lg" }),
                "rounded-xl px-8 py-3.5 text-xs uppercase tracking-wider group mt-2 bg-gradient-to-r from-brand to-brand-deep text-white font-bold hover:shadow-md hover:shadow-brand/10 transition-all duration-300 hover:-translate-y-[2px]"
              )}
            >
              <span>Explore Programs</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>

        {/* Right: Photo (~45%) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97, y: 25 }}
          animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5"
        >
          <div className="relative p-[1px] rounded-[32px] bg-gradient-to-br from-line via-transparent to-brand/15 shadow-xl overflow-hidden group">
            {/* Soft contained brand glow */}
            <div
              className="absolute -inset-4 rounded-3xl pointer-events-none opacity-20 filter blur-2xl group-hover:opacity-35 transition-opacity"
              style={{
                background:
                  "linear-gradient(135deg, rgba(180,18,63,0.2) 0%, rgba(225,29,92,0.05) 50%, transparent 100%)",
              }}
              aria-hidden="true"
            />
            <div className="relative rounded-[31px] overflow-hidden aspect-[4/5] bg-slate-100">
              <Image
                src="/images/careers/campus-callout.jpg"
                alt="Diverse engineering students on a modern university campus"
                fill
                quality={95}
                className="object-cover object-center transition-transform duration-700 group-hover:scale-103"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/15 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </motion.div>

      </div>
    </Section>
  );
}
export default CampusCallout;
