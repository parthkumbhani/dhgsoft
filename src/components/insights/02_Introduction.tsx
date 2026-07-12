"use client";

import React from "react";
import Image from "next/image";
import { Section } from "@/components/ui/Section";

export function Introduction() {
  return (
    <Section variant="white" size="default" pattern="v1" className="relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left column: Content */}
        <div className="lg:col-span-7 space-y-6 text-left">
          <span className="text-brand text-label-bold uppercase tracking-[0.2em] font-sans block">
            INTRODUCTION
          </span>
          <h2 className="text-txt-strong tracking-tight font-black leading-tight font-sans">
            Innovation begins with knowledge.
          </h2>
          <p className="text-body-md text-txt-muted max-w-[600px] leading-relaxed font-sans">
            At DHGsoft, we believe that meaningful industrial transformation is driven by continuous learning, engineering excellence, and practical experience. Our Insights Hub brings together the latest thinking, technical expertise, and real-world implementation knowledge from across the industrial technology landscape.
          </p>
          <p className="text-body-md text-txt-muted max-w-[600px] leading-relaxed font-sans">
            Whether you're exploring Industry 4.0, Industrial AI, IIoT, cloud platforms, cybersecurity, or operational excellence, our insights are designed to help leaders, engineers, and decision-makers navigate an increasingly connected industrial world.
          </p>
        </div>

        {/* Right column: Editorial Visual */}
        <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
          {/* Soft brand-tinted glow behind visual */}
          <div 
            className="absolute -inset-4 rounded-full pointer-events-none opacity-20 filter blur-3xl z-0"
            style={{
              background: 'radial-gradient(circle, #B4123F 0%, transparent 70%)',
            }}
          />

          <div className="relative aspect-[4/5] w-full max-w-[380px] rounded-3xl overflow-hidden shadow-xl ring-1 ring-brand/10 z-10 group">
            <Image
              src="/images/insights/insights-intro.jpg"
              alt="Engineering team analyzing industrial data screens modern"
              fill
              className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
              sizes="(max-width: 1024px) 100vw, 400px"
            />
            
            {/* Dark gradient overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

            {/* Stat overlay card in bottom-left corner */}
            <div className="card absolute bottom-6 left-6 bg-white/95 backdrop-blur-md border border-line rounded-2xl p-4 shadow-lg text-left max-w-[200px] z-20 hover:border-brand/40 transition-colors">
              <span className="text-2xl font-black text-brand block mb-1 font-sans">150+</span>
              <span className="text-[10px] text-txt-muted font-bold tracking-wider uppercase font-sans">
                PUBLISHED INSIGHTS
              </span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
