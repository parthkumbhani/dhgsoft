'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Sparkles, Quote } from 'lucide-react';

const CEO_PARAGRAPHS = [
  "Innovation is at the heart of everything we do at DHGsoft. We believe the next generation of industry will be built on intelligent technologies that connect people, data, and operations to unlock new possibilities.",
  "Our commitment is to transform bold ideas into practical solutions that deliver measurable outcomes. By combining Artificial Intelligence, Industrial IoT, Cloud, Data Platforms, and Digital Engineering, we help organizations innovate faster, operate smarter, and grow sustainably.",
  "As technology continues to evolve, we remain focused on pushing boundaries, embracing change, and creating solutions that shape the future of intelligent enterprises. Together with our customers and partners, we are building tomorrow's industries—today.",
];

export default function CEOMessage() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <section
      ref={sectionRef}
      id="ceo-message"
      className="relative overflow-hidden border-b border-slate-200/80 bg-white"
      style={{
        paddingTop: 'clamp(80px, 10vh, 130px)',
        paddingBottom: 'clamp(80px, 10vh, 130px)',
      }}
    >
      {/* ── Soft Ambient Glows (Premium Light Palette) ── */}
      <div
        className="absolute pointer-events-none z-0"
        style={{
          width: 700,
          height: 700,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(197,22,92,0.035) 0%, rgba(255,138,0,0.01) 60%, transparent 70%)',
          filter: 'blur(120px)',
          top: '-10%',
          left: '-5%',
        }}
      />
      <div
        className="absolute pointer-events-none z-0"
        style={{
          width: 600,
          height: 600,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(59,130,246,0.02) 0%, rgba(99,102,241,0.005) 50%, transparent 70%)',
          filter: 'blur(100px)',
          bottom: '-10%',
          right: '5%',
        }}
      />

      {/* ── Blueprint Grid & Technology Lines ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03] z-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(15, 23, 42, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(15, 23, 42, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '32px 32px',
        }}
      />

      {/* Technical crosshairs decorations */}
      <div className="absolute top-12 left-12 w-8 h-8 border-t border-l border-slate-350/40 pointer-events-none z-0" />
      <div className="absolute top-12 right-12 w-8 h-8 border-t border-r border-slate-350/40 pointer-events-none z-0" />
      <div className="absolute bottom-12 left-12 w-8 h-8 border-b border-l border-slate-350/40 pointer-events-none z-0" />
      <div className="absolute bottom-12 right-12 w-8 h-8 border-b border-r border-slate-350/40 pointer-events-none z-0" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 relative z-10">
        
        {/* ── Main Grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* ━━━━ LEFT — Text Content Column (7 cols on desktop) ━━━━ */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start text-left order-2 lg:order-1"
          >
            {/* Section Tag */}
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200/80 mb-6 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#C5165C]" />
              <span
                className="font-extrabold uppercase tracking-[0.2em] font-sans"
                style={{
                  fontSize: 10,
                  background: 'linear-gradient(90deg, #C5165C, #FF8A00)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Message from our CEO
              </span>
            </div>

            {/* Giant quote icon background */}
            <div className="relative w-full">
              <Quote
                className="absolute -top-10 -left-6 fill-current text-slate-100 opacity-60 z-0 pointer-events-none"
                style={{ width: 100, height: 100 }}
              />
              
              <h2
                className="font-extrabold text-slate-900 tracking-tight mb-6 font-headline relative z-10 leading-tight"
                style={{ fontSize: 'clamp(28px, 3.2vw, 44px)' }}
              >
                Building Tomorrow&apos;s
                <br />
                Industries —{' '}
                <span
                  style={{
                    background: 'linear-gradient(90deg, #C5165C 0%, #E8364F 40%, #FF8A00 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Today
                </span>
              </h2>
            </div>

            {/* Paragraphs */}
            <div className="space-y-5 text-left mb-8 relative z-10">
              {CEO_PARAGRAPHS.map((para, i) => (
                <p
                  key={i}
                  className="text-slate-650 leading-relaxed font-sans font-medium"
                  style={{ fontSize: 'clamp(14px, 1.05vw, 15.5px)', lineHeight: 1.8 }}
                >
                  {para}
                </p>
              ))}
            </div>

            {/* ── CEO Designation Full-Width Badge ── */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-5 rounded-2xl bg-[#F8FAFC] border border-slate-200/60 shadow-sm w-full mb-8 mt-4 relative group hover:border-[#C5165C]/30 transition-all duration-300">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#C5165C] to-[#FF8A00] rounded-t-2xl opacity-80" />
              <div>
                <h4 className="text-[17px] font-extrabold text-slate-900 font-headline leading-tight">
                  Hitesh Patel
                </h4>
                <p className="text-[11px] text-slate-500 font-extrabold mt-1.5 uppercase tracking-wider">
                  Chief Executive Officer, DHGsoft
                </p>
              </div>
              
              {/* Premium LinkedIn Brand Button */}
              <a
                href="https://linkedin.com/in/hitesh-patel-967087a0"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-[#0A66C2]/10 border border-[#0A66C2]/20 hover:bg-[#0A66C2] hover:border-[#0A66C2] text-[#0A66C2] hover:text-white transition-all duration-300 shadow-sm mt-4 sm:mt-0 font-sans font-bold text-xs group"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                <span>Connect on LinkedIn</span>
              </a>
            </div>

            {/* Action Row */}
            <div className="w-full">
              <button
                className="group inline-flex items-center gap-2.5 font-bold text-white rounded-xl px-8 py-3.5 transition-all duration-300 cursor-pointer border-0"
                style={{
                  fontSize: 13,
                  background: 'linear-gradient(90deg, #C5165C 0%, #E8364F 50%, #FF8A00 100%)',
                  backgroundSize: '200% 100%',
                  boxShadow: '0 4px 20px rgba(197, 22, 92, 0.15)',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.backgroundPosition = '100% 0%';
                  (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 8px 32px rgba(197, 22, 92, 0.35)';
                  (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.backgroundPosition = '0% 0%';
                  (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 4px 20px rgba(197, 22, 92, 0.15)';
                  (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0px)';
                }}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <span className="font-sans tracking-wide">Connect with Our Team</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>

          </motion.div>

          {/* ━━━━ RIGHT — Designer Rectangular Portrait Column (5 cols on desktop) ━━━━ */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex items-center justify-center order-1 lg:order-2 w-full relative group"
          >
            {/* Tech line decorations around the card (Graphic Designer layout) */}
            <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-[#C5165C]/40 rounded-tl-lg pointer-events-none z-0" />
            <div className="absolute -top-3 -right-3 w-6 h-6 border-t-2 border-r-2 border-[#C5165C]/40 rounded-tr-lg pointer-events-none z-0" />
            <div className="absolute -bottom-3 -left-3 w-6 h-6 border-b-2 border-l-2 border-[#FF8A00]/40 rounded-bl-lg pointer-events-none z-0" />
            <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-[#FF8A00]/40 rounded-br-lg pointer-events-none z-0" />

            {/* Glowing background halo */}
            <div className="absolute -inset-1 rounded-[36px] bg-gradient-to-r from-[#C5165C] to-[#FF8A00] opacity-[0.06] blur-xl group-hover:opacity-[0.12] transition-opacity duration-500 z-0 pointer-events-none" />

            {/* Main Portrait Card */}
            <div className="relative w-full max-w-[420px] aspect-[3/4] rounded-[32px] overflow-hidden border border-slate-200/80 shadow-[0_20px_50px_rgba(15,23,42,0.06)] bg-gradient-to-b from-white via-[#F8FAFC] to-[#F1F5F9] z-10 p-1">
              
              {/* Inner double border white frame */}
              <div className="absolute inset-1 rounded-[28px] border-2 border-white/85 z-20 pointer-events-none" />
              
              {/* Elegant ambient light effects */}
              <div 
                className="absolute inset-0 pointer-events-none z-0 opacity-60"
                style={{
                  background: 'radial-gradient(circle at 50% 75%, rgba(197, 22, 92, 0.06) 0%, rgba(59, 130, 246, 0.03) 65%, transparent 100%)'
                }}
              />
              
              {/* Graphic grid backdrop */}
              <div 
                className="absolute inset-0 opacity-[0.015] pointer-events-none z-0"
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(15, 23, 42, 0.05) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(15, 23, 42, 0.05) 1px, transparent 1px)
                  `,
                  backgroundSize: '16px 16px',
                }}
              />

              {/* CEO Transparent Cutout Portrait with silhouette drop-shadow */}
              <div className="relative w-full h-full flex items-end justify-center z-10">
                <Image
                  src="/CEO_nobg_clean.png"
                  alt="Hitesh Patel — Chief Executive Officer, DHGsoft"
                  fill
                  className="object-contain object-bottom select-none transition-transform duration-700 group-hover:scale-[1.03] filter drop-shadow-[0_12px_24px_rgba(15,23,42,0.12)]"
                  priority
                  sizes="(max-width: 1024px) 90vw, 420px"
                />
              </div>

              {/* Premium Floating Badge */}
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/85 backdrop-blur-md border border-slate-200/60 shadow-sm z-30 flex items-center gap-1.5 pointer-events-none">
                <div className="w-1.5 h-1.5 rounded-full bg-[#C5165C]" />
                <span className="text-[9px] font-bold text-slate-650 uppercase tracking-widest font-sans">
                  Executive Profile
                </span>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
