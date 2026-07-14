"use client";

import React, { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useSafeReducedMotion } from "@/hooks/useSafeReducedMotion";
import { Section } from "@/components/ui/Section";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  initials: string;
  avatarBg: string;
  dept: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "Joining DHGsoft has provided me with opportunities to work on challenging industrial automation and digital transformation projects. The collaborative culture, continuous learning, and exposure to new technologies have helped me strengthen my technical expertise and grow professionally.",
    name: "Devendra Brahmbhatt",
    role: "System Engineer",
    initials: "DB",
    avatarBg: "from-brand/20 via-brand-hot/20 to-brand-hot/25",
    dept: "System Eng"
  },
  {
    quote: "The culture here is deeply focused on engineering solutions that make a real difference. I get to design edge connectivity systems that bridge raw machinery with modern cloud platforms. The scale of work and team support are truly outstanding.",
    name: "Sophia Martinez",
    role: "Lead IoT Architect",
    initials: "SM",
    avatarBg: "from-blue-600/20 via-indigo-600/20 to-purple-600/20",
    dept: "IoT Arch"
  },
  {
    quote: "Every day at DHGsoft presents a unique opportunity to build cloud infrastructure for global enterprises. The collaborative environment, access to training, and technical challenges keep me inspired and continuously growing.",
    name: "Hitesh Patel",
    role: "Senior Cloud Architect",
    initials: "HP",
    avatarBg: "from-emerald-600/20 via-teal-600/20 to-cyan-600/20",
    dept: "Cloud Eng"
  }
];

export default function TestimonialBand() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.15 });
  const shouldReduceMotion = useSafeReducedMotion();

  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const current = testimonials[activeIndex];

  return (
    <Section 
      ref={containerRef}
      variant="white" 
      size="default" 
      containerSize="wide"
      className="relative overflow-visible py-16 md:py-24"
    >
      <motion.div 
        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
        transition={{ duration: 0.65, ease: "easeOut" }}
        className="w-full bg-[#0c1020] border border-white/10 rounded-[2rem] p-8 md:p-12 lg:p-16 text-white shadow-[0_30px_70px_rgba(0,0,0,0.5)] relative overflow-hidden"
      >
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-tech-grid opacity-[0.08] pointer-events-none" />

        {/* Large stylised quotation mark in background */}
        <div className="absolute right-8 top-12 text-[18rem] font-serif text-white/[0.02] select-none pointer-events-none leading-none">
          &rdquo;
        </div>

        {/* Section Header Row (2-column layout) */}
        <div className="w-full border-b border-white/10 pb-6 mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4 relative z-10">
          <div className="text-left space-y-2">
            <span className="section-eyebrow">
              Employee testimonials
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Hear from our people
            </h2>
          </div>
          
          {/* Arrow Controls (Desktop) */}
          <div className="flex items-center gap-4">
            <p className="hidden md:block max-w-xs card-description on-dark">
              Explore why people joined DHGsoft—and what keeps them here.
            </p>
            <div className="flex items-center gap-2">
              <button 
                onClick={handlePrev}
                className="w-10 h-10 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/40 flex items-center justify-center transition-all duration-200 active:scale-95 cursor-pointer"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5 text-white" />
              </button>
              <button 
                onClick={handleNext}
                className="w-10 h-10 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/40 flex items-center justify-center transition-all duration-200 active:scale-95 cursor-pointer"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* Testimonial Active Display with slide-fade transition */}
        <div className="relative min-h-[380px] sm:min-h-[300px] lg:min-h-[260px] flex items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full relative z-10"
            >
              {/* Quote Block (Left) */}
              <div className="order-2 lg:order-1 lg:col-span-8 text-left space-y-6 relative pl-0 lg:pl-6">
                
                {/* Accent quote mark & vertical line divider */}
                <div className="flex items-start gap-4">
                  <div className="shrink-0 text-brand-hot mt-1">
                    <Quote className="w-8 h-8 fill-brand-hot/20" />
                  </div>
                  <blockquote className="text-lg md:text-xl lg:text-2xl leading-relaxed font-serif italic text-white/90">
                    {current.quote}
                  </blockquote>
                </div>

                <div className="flex items-center gap-4 pt-2">
                  <div className="w-8 h-[2px] bg-brand-hot rounded-full" />
                  <div>
                    <p className="font-bold text-lg md:text-xl text-white">{current.name}</p>
                    <p className="text-xs md:text-sm text-slate-400 font-mono mt-0.5">{current.role}</p>
                  </div>
                </div>

              </div>

              {/* Portrait Monogram Display (Right) */}
              <div className="order-1 lg:order-2 lg:col-span-4 flex flex-col items-center justify-center">
                <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-full p-[3px] bg-gradient-to-tr from-brand to-brand-hot shadow-[0_0_30px_rgba(180,18,63,0.25)]">
                  {/* Inner background circle */}
                  <div className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center relative overflow-hidden">
                    
                    {/* Inner monogram gradient */}
                    <div className={`absolute inset-2 rounded-full bg-gradient-to-br ${current.avatarBg} flex items-center justify-center border border-white/5`}>
                      <span className="text-4xl md:text-5xl font-black text-white font-mono select-none tracking-tighter">
                        {current.initials}
                      </span>
                    </div>

                  </div>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel Dots Indicators */}
        <div className="flex items-center justify-center gap-2 mt-8 relative z-10">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                index === activeIndex 
                  ? "bg-brand-hot w-8" 
                  : "bg-white/20 hover:bg-white/40"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

      </motion.div>
    </Section>
  );
}
