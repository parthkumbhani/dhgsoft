"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <Section
      variant="ink"
      size="hero"
      pattern="none"
      className="relative min-h-[600px] flex items-center justify-center text-center overflow-hidden border-b border-line/10"
    >
      {/* Background SVG Grid pattern at 3-4% white opacity for texture */}
      <div 
        className="absolute inset-0 z-0 bg-tech-grid opacity-[0.03] pointer-events-none" 
        style={{ backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.15) 1px, transparent 1px)", backgroundSize: "32px 32px" }}
      />
      
      {/* Subtle radial glows in the corners */}
      <div 
        className="absolute top-0 right-0 w-[450px] h-[450px] rounded-full pointer-events-none opacity-15"
        style={{
          background: 'radial-gradient(circle, #B4123F 0%, transparent 70%)',
          filter: 'blur(90px)',
        }}
      />
      <div 
        className="absolute bottom-0 left-0 w-[450px] h-[450px] rounded-full pointer-events-none opacity-10"
        style={{
          background: 'radial-gradient(circle, #E11D5C 0%, transparent 70%)',
          filter: 'blur(90px)',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto space-y-6 flex flex-col items-center">
        {/* Eyebrow chip */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-[#B4123F] shrink-0" />
          <span className="text-[11px] font-extrabold uppercase tracking-widest text-white/90 font-sans">
            INSIGHTS HUB
          </span>
        </div>

        {/* H1 Title with Crimson Gradient Emphasis */}
        <h1 className="text-white text-headline-xl font-extrabold tracking-tight leading-tight text-balance text-center max-w-[900px] font-sans">
          Engineering Insights That Drive <span className="text-gradient-brand">Industrial Transformation</span>
        </h1>

        {/* Subheading */}
        <p className="text-white/85 max-w-[720px] mx-auto text-center text-body-md font-medium leading-relaxed font-sans">
          Explore expert perspectives, technical knowledge, industry trends, customer success stories, and digital engineering insights that help organizations accelerate industrial transformation and build connected, intelligent enterprises.
        </p>

        {/* Two CTAs */}
        <div className="pt-6 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="#categories"
            className={cn(
              buttonVariants({ variant: "primary", size: "lg" }),
              "h-12 px-8 flex items-center justify-center gap-2 group cursor-pointer text-white font-bold"
            )}
          >
            <span>Browse Insights</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
          <Link
            href="#newsletter"
            className="border border-white/30 hover:border-white/60 hover:bg-white/10 text-white rounded-full font-bold h-12 px-8 flex items-center justify-center transition-all duration-300 active:scale-95 text-sm sm:text-base"
          >
            Subscribe to Newsletter
          </Link>
        </div>
      </div>
    </Section>
  );
}
