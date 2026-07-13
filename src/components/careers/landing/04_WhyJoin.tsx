"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Section } from "@/components/ui/Section";

const techChips = [
  "Industry 4.0",
  "Industrial AI",
  "IIoT",
  "Cloud",
  "Digital Engineering",
  "Cybersecurity",
];

export function WhyJoin() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  const fade = (delay = 0) => ({
    initial: { opacity: 0, y: 25 },
    animate: isInView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay },
  });

  return (
    <Section variant="mist" size="snug" pattern="v2" ref={ref} className="relative overflow-hidden border-b border-line">
      {/* Blueprint Grid Overlay */}
      <div
        className="absolute inset-0 bg-tech-grid opacity-[0.015] pointer-events-none z-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(15, 23, 42, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(15, 23, 42, 0.05) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">

        {/* LEFT — Image with glowing frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97, y: 25 }}
          animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
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
                src="/images/careers-innovation-band.jpg"
                alt="DHGsoft engineering team on whiteboard sprint"
                fill
                quality={95}
                sizes="(max-width: 1024px) 40vw, 100vw"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-103"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/15 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </motion.div>

        {/* RIGHT — content with technology chip row */}
        <div className="lg:col-span-7">
          <motion.div {...fade(0.05)} className="text-brand text-label-bold uppercase tracking-[0.2em] font-sans flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-brand-hot animate-pulse" />
            Why Join DHGsoft
          </motion.div>

          <motion.h2 {...fade(0.12)} className="text-txt-strong mt-4 max-w-[580px] font-sans font-extrabold text-3xl md:text-4xl lg:text-5xl leading-[1.1] tracking-tight text-balance">
            Build Your Career.<br />
            Build the Future.<br />
            <span className="text-gradient-brand font-black mt-1">Build Value for Tomorrow.</span>
          </motion.h2>

          <motion.p {...fade(0.2)} className="text-body-md text-txt-muted mt-5 max-w-[560px] font-sans font-medium leading-relaxed">
            At DHGsoft, we believe our people are the foundation of every successful transformation. We create an environment where engineers, innovators, and problem-solvers are empowered to learn, collaborate, and make a lasting impact. From industrial automation and AI to digital engineering and cloud technologies, you&apos;ll work on projects that shape the future of connected industries.
          </motion.p>

          {/* CTA — solid crimson gradient pill */}
          <motion.div {...fade(0.28)} className="mt-8">
            <Link
              href="/careers/life-at-dhgsoft"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-brand to-brand-deep text-white font-bold hover:shadow-md hover:shadow-brand/10 transition-all duration-305 hover:-translate-y-[2px]"
            >
              <span>Learn More</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* Technology chip row */}
          <motion.div {...fade(0.36)} className="mt-10 pt-8 border-t border-line/70">
            <div className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-4 font-sans">
              What you&apos;ll work with
            </div>
            <div className="flex flex-wrap gap-2">
              {techChips.map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-semibold text-brand bg-brand/5 border border-brand/10 rounded-full px-4 py-2 hover:bg-brand hover:text-white hover:border-brand transition-all duration-300 cursor-default shadow-sm select-none"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

      </div>
    </Section>
  );
}
export default WhyJoin;
