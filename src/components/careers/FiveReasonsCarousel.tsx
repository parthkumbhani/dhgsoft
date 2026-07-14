"use client";

import React, { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, AlertTriangle } from "lucide-react";
import { whyJoinReasons } from "@/lib/careersData";
import { Section } from "@/components/ui/Section";
import { motion, useInView } from "framer-motion";

export default function FiveReasonsCarousel() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });
  const [scrollProgress, setScrollProgress] = useState(0);

  const updateScrollProgress = () => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const maxScroll = container.scrollWidth - container.clientWidth;
    if (maxScroll <= 0) {
      setScrollProgress(0);
    } else {
      setScrollProgress((container.scrollLeft / maxScroll) * 100);
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", updateScrollProgress);
      window.addEventListener("resize", updateScrollProgress);
      // initial update
      setTimeout(updateScrollProgress, 100);
    }
    return () => {
      if (container) {
        container.removeEventListener("scroll", updateScrollProgress);
      }
      window.removeEventListener("resize", updateScrollProgress);
    };
  }, []);

  const handleScroll = (direction: "left" | "right") => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const scrollAmount = container.clientWidth * 0.75;
    container.scrollTo({
      left: container.scrollLeft + (direction === "left" ? -scrollAmount : scrollAmount),
      behavior: "smooth"
    });
  };

  return (
    <Section 
      ref={containerRef}
      variant="white" 
      size="default" 
      containerSize="wide" 
      className="bg-white relative overflow-hidden select-none border-b border-slate-100"
    >
      {/* Decorative dots in the background */}
      <div className="absolute left-4 top-1/3 w-24 h-24 bg-dot-matrix opacity-25 pointer-events-none" />
      <div className="absolute right-4 bottom-1/3 w-24 h-24 bg-dot-matrix opacity-25 pointer-events-none" />

      {/* Section Header */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 items-end mb-12">
        <div className="lg:col-span-7 text-left space-y-3">
          <span className="section-eyebrow">
            Why join DHGsoft?
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-[2.5rem] font-bold leading-tight text-slate-900 tracking-tight">
            5 reasons to build your <br />
            <span className="bg-gradient-to-r from-brand via-brand-hot to-[#F5B301] bg-clip-text text-transparent">
              career at DHGsoft
            </span>
          </h2>
        </div>
        <div className="lg:col-span-5 text-left lg:text-right">
          <p className="text-slate-650 text-sm md:text-base leading-relaxed text-slate-500 max-w-[420px] lg:ml-auto">
            Build your career with innovation, collaboration, and continuous learning while creating intelligent solutions that shape the future of connected industries.
          </p>
        </div>
      </div>

      {/* Scrolling Row */}
      <div className="relative">
        <div 
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-6 -mx-4 px-4 sm:mx-0 sm:px-0"
          style={{ scrollbarWidth: "none" }}
        >
          {whyJoinReasons.map((reason: any, index: number) => (
            <motion.div
              key={reason.id}
              initial={ { opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex-shrink-0 w-[290px] sm:w-[320px] snap-start bg-slate-50/50 border border-slate-100 rounded-2xl p-6 text-left relative flex flex-col justify-between group hover:shadow-lg hover:border-brand/20 transition-all duration-300 min-h-[220px]"
            >
              {/* Crimson Accent Top Bar */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-brand rounded-t-2xl opacity-80 group-hover:opacity-100 transition-opacity" />

              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <span className="text-xs font-mono font-bold text-slate-400">0{index + 1}</span>
                  {reason.isPlaceholder && (
                    <div className="flex items-center gap-1 bg-amber-500/10 text-amber-600 text-[10px] font-extrabold px-2 py-0.5 rounded-full border border-amber-500/20">
                      <AlertTriangle className="w-3 h-3" />
                      <span>CEO Confirmation Pending</span>
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <h4 className="text-lg font-bold text-slate-900 group-hover:text-brand transition-colors relative inline-block">
                    {reason.title}
                    {/* Subtle underline decoration */}
                    <span className="absolute bottom-[-4px] left-0 w-8 h-0.5 bg-gradient-to-r from-brand to-[#F5B301]" />
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed pt-1">
                    {reason.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Controls & Progress Indicators */}
      <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
        
        {/* Progress Bar */}
        <div className="flex-grow max-w-xs bg-slate-100 h-1 rounded-full overflow-hidden">
          <div 
            className="bg-brand hover:bg-brand-deep h-full transition-all duration-150"
            style={{ width: `${Math.max(10, scrollProgress)}%` }}
          />
        </div>

        {/* Carousel buttons */}
        <div className="flex items-center gap-3">
          <button 
            onClick={() => handleScroll("left")}
            className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-brand hover:text-white hover:border-brand transition-all active:scale-95 cursor-pointer"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button 
            onClick={() => handleScroll("right")}
            className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-brand hover:text-white hover:border-brand transition-all active:scale-95 cursor-pointer"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </Section>
  );
}
