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
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 });

  return (
    <section
      ref={sectionRef}
      id="ceo-message"
      className="relative overflow-hidden border-b border-[#ECECEC]"
      style={{
        background: 'linear-gradient(135deg, #FCFCFD 0%, #F8FAFC 40%, #FFFFFF 70%, #FCFCFD 100%)',
        paddingTop: 'clamp(64px, 8vh, 110px)',
        paddingBottom: 'clamp(64px, 8vh, 110px)',
      }}
    >
      {/* ── Ambient Background Glows (Light-themed, soft and elegant) ── */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: 600,
          height: 600,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(197,22,92,0.03) 0%, rgba(255,138,0,0.01) 50%, transparent 70%)',
          filter: 'blur(100px)',
          top: '-10%',
          left: '-5%',
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          width: 500,
          height: 500,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(59,130,246,0.02) 0%, rgba(99,102,241,0.005) 50%, transparent 70%)',
          filter: 'blur(80px)',
          bottom: '-10%',
          right: '5%',
        }}
      />

      {/* ── Technical Grid Overlay ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(15, 23, 42, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(15, 23, 42, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '24px 24px',
        }}
      />

      {/* ── Subtle diagonal lines top-left ── */}
      <div className="absolute top-0 left-0 pointer-events-none opacity-[0.04]">
        <svg width="300" height="300" viewBox="0 0 300 300">
          <line x1="0" y1="100" x2="200" y2="0" stroke="#CBD5E1" strokeWidth="0.5" />
          <line x1="0" y1="200" x2="300" y2="0" stroke="#CBD5E1" strokeWidth="0.5" />
          <line x1="0" y1="300" x2="300" y2="100" stroke="#CBD5E1" strokeWidth="0.5" />
        </svg>
      </div>

      {/* ── Bottom-right hex shapes ── */}
      <div className="absolute bottom-8 right-8 pointer-events-none opacity-[0.02]">
        <svg width="200" height="180" viewBox="0 0 200 180">
          <path d="M40 30 L70 15 L100 30 L100 60 L70 75 L40 60Z" fill="none" stroke="#94A3B8" strokeWidth="0.8" />
          <path d="M100 30 L130 15 L160 30 L160 60 L130 75 L100 60Z" fill="none" stroke="#94A3B8" strokeWidth="0.8" />
          <path d="M70 75 L100 60 L130 75 L130 105 L100 120 L70 105Z" fill="none" stroke="#94A3B8" strokeWidth="0.8" />
        </svg>
      </div>

      {/* ── Top-right dot grid ── */}
      <div className="absolute top-6 right-16 pointer-events-none opacity-[0.05]">
        <svg width="180" height="180" viewBox="0 0 180 180">
          {Array.from({ length: 81 }).map((_, i) => (
            <circle
              key={i}
              cx={(i % 9) * 20 + 10}
              cy={Math.floor(i / 9) * 20 + 10}
              r="1.5"
              fill="#94A3B8"
            />
          ))}
        </svg>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 relative z-10">

        {/* ── Main Split Grid: Text Left, Image Right ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ━━━━ LEFT — Text Content ━━━━ */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="order-2 lg:order-1 text-left"
          >
            {/* Section Tag */}
            <div className="flex items-center gap-2.5 mb-5 justify-start">
              <Sparkles className="w-4 h-4 text-[#C5165C]" />
              <span
                className="font-extrabold uppercase tracking-[0.2em]"
                style={{
                  fontSize: 11,
                  background: 'linear-gradient(90deg, #C5165C, #FF8A00)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Message from our CEO
              </span>
            </div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="font-extrabold text-slate-900 tracking-tight mb-4 font-headline text-left"
              style={{ fontSize: 'clamp(28px, 3.2vw, 44px)', lineHeight: 1.12 }}
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
            </motion.h2>

            {/* Gradient underline */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="origin-left mb-8 text-left"
            >
              <div className="h-[3px] w-14 rounded-full bg-gradient-to-r from-[#C5165C] to-[#FF8A00]" />
            </motion.div>

            {/* Paragraphs */}
            <div className="space-y-5 mb-8 text-left">
              {CEO_PARAGRAPHS.map((para, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="text-slate-650 leading-relaxed font-sans font-medium"
                  style={{ fontSize: 'clamp(13.5px, 1.05vw, 15.5px)', lineHeight: 1.85 }}
                >
                  {para}
                </motion.p>
              ))}
            </div>

            {/* CEO Designation & Frosted Signature Bar */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="flex items-center justify-between p-4 rounded-2xl bg-white/70 border border-slate-200/50 shadow-sm max-w-sm mb-8 text-left"
            >
              <div>
                <h4 className="text-base font-extrabold text-slate-900 font-headline leading-snug">
                  Hitesh Patel
                </h4>
                <p className="text-xs text-slate-500 font-bold mt-0.5 uppercase tracking-wider">
                  Chief Executive Officer
                </p>
                <p className="text-[11px] font-extrabold mt-0.5" style={{ color: '#C5165C' }}>
                  DHGsoft
                </p>
              </div>
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                style={{
                  background: 'linear-gradient(135deg, #C5165C 0%, #E8364F 60%, #FF8A00 100%)',
                  boxShadow: '0 4px 14px rgba(197, 22, 92, 0.25)',
                }}
              >
                <span className="text-white font-black text-xs">HP</span>
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-left"
            >
              <button
                className="group inline-flex items-center gap-2.5 font-bold text-white rounded-full px-8 py-3.5 transition-all duration-300 cursor-pointer border-0"
                style={{
                  fontSize: 13,
                  background: 'linear-gradient(90deg, #C5165C 0%, #E8364F 50%, #FF8A00 100%)',
                  backgroundSize: '200% 100%',
                  boxShadow: '0 4px 20px rgba(197, 22, 92, 0.2)',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.backgroundPosition = '100% 0%';
                  (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 8px 32px rgba(197, 22, 92, 0.35)';
                  (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.backgroundPosition = '0% 0%';
                  (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 4px 20px rgba(197, 22, 92, 0.2)';
                  (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0px)';
                }}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <span className="font-sans tracking-wide">Connect with Our Team</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </motion.div>
          </motion.div>

          {/* ━━━━ RIGHT — CEO Portrait with Circular Background Pane ━━━━ */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="relative flex items-center justify-center order-1 lg:order-2 w-full translate-y-[-10px] lg:translate-y-[-20px]"
          >
            {/* Main Outer Container: holds both background and overlay image */}
            <div className="relative w-full max-w-[480px] aspect-square flex items-center justify-center">
              
              {/* The Professional Background Image */}
              <div className="absolute inset-0 z-0 select-none pointer-events-none">
                <Image
                  src="/ceo_bg.png"
                  alt="Background Graphics"
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              {/* CEO Image: Masked inside a circle matching the circle in the background graphics */}
              <div className="relative w-[82.5%] aspect-square rounded-full overflow-hidden z-10 shadow-lg border-2 border-white/60">
                <Image
                  src="/CEO.png"
                  alt="Hitesh Patel — Chief Executive Officer, DHGsoft"
                  fill
                  className="object-cover object-top select-none scale-[0.86] translate-y-[6%]"
                  priority
                  sizes="(max-width: 1024px) 90vw, 400px"
                />
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
