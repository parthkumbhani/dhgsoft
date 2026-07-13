"use client";

import React, { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { testimonials } from "@/lib/careersData";

// TODO: Collect 2 additional employee testimonials and replace [PLACEHOLDER] entries before publishing.
// Do NOT invent testimonial quotes, names, or roles.

export function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });
  const [active, setActive] = useState(0);

  const prev = () => setActive((a) => (a === 0 ? testimonials.length - 1 : a - 1));
  const next = () => setActive((a) => (a === testimonials.length - 1 ? 0 : a + 1));
  const current = testimonials[active];

  return (
    <Section variant="mist" size="snug" pattern="v6" ref={ref} className="relative overflow-hidden border-b border-line">
      {/* Blueprint Grid Texture */}
      <div
        className="absolute inset-0 bg-tech-grid opacity-[0.015] pointer-events-none z-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(15, 23, 42, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(15, 23, 42, 0.05) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 w-full">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="section-eyebrow tracking-[0.25em]">EMPLOYEE TESTIMONIALS</span>
          <h2 className="heading-section text-txt-strong mt-3 font-sans tracking-tight">Hear from Our People</h2>
          <p className="section-subtitle text-txt-muted max-w-[720px] mx-auto mt-4 font-sans font-medium">
            Explore why people joined DHGsoft — and what keeps them here.
          </p>
        </div>

        {/* Desktop: 3-column grid | Mobile: slider */}
        <div className="hidden lg:grid grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} t={t} inView={isInView} delay={i * 0.1} />
          ))}
        </div>

        {/* Mobile slider */}
        <div className="lg:hidden relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <TestimonialCard t={current} inView={isInView} delay={0} />
            </motion.div>
          </AnimatePresence>

          {/* Arrows & navigation dots */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-line bg-white flex items-center justify-center hover:border-brand hover:text-brand transition-colors cursor-pointer text-txt-strong"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            {/* Dots */}
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === active ? "w-8 h-2.5 bg-brand" : "w-2.5 h-2.5 bg-line hover:bg-txt-muted"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-line bg-white flex items-center justify-center hover:border-brand hover:text-brand transition-colors cursor-pointer text-txt-strong"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
}

function TestimonialCard({
  t,
  inView,
  delay,
}: {
  t: (typeof testimonials)[number];
  inView: boolean;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay }}
      className="card bg-white border border-line rounded-3xl p-8 relative overflow-hidden flex flex-col h-full hover:shadow-md hover:border-brand transition-all duration-300 group"
    >
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-brand/10 group-hover:bg-brand transition-colors duration-300" />

      {/* Quote Icon */}
      <div className="shrink-0 text-brand-hot/20 group-hover:text-brand transition-colors duration-300 mb-5">
        <Quote className="w-8 h-8 fill-brand-hot/5" />
      </div>

      <p className="text-body-sm italic text-txt-strong relative z-10 leading-relaxed flex-1 font-sans font-medium">
        {t.quote}
      </p>

      <div className="flex items-center gap-4 mt-8 pt-6 border-t border-line relative z-10">
        <div className="w-12 h-12 rounded-full p-[1px] bg-gradient-to-tr from-brand to-brand-deep shadow-sm flex-shrink-0">
          <div className="w-full h-full rounded-full bg-slate-50 flex items-center justify-center font-bold text-sm text-brand font-mono">
            {t.initials}
          </div>
        </div>
        <div>
          <div className="text-body-sm font-semibold text-txt-strong font-sans">{t.name}</div>
          <div className="text-xs text-txt-muted font-sans mt-0.5">{t.role}</div>
        </div>
      </div>
    </motion.div>
  );
}
export default Testimonials;
