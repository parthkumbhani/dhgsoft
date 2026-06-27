'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { Quote, ArrowRight } from 'lucide-react';

const CEO_PARAGRAPHS = [
  "Innovation is at the heart of everything we do at DHGsoft. We believe the next generation of industry will be built on intelligent technologies that connect people, data, and operations to unlock new possibilities.",
  "Our commitment is to transform bold ideas into practical solutions that deliver measurable outcomes. By combining Artificial Intelligence, Industrial IoT, Cloud, Data Platforms, and Digital Engineering, we help organizations innovate faster, operate smarter, and grow sustainably.",
  "As technology continues to evolve, we remain focused on pushing boundaries, embracing change, and creating solutions that shape the future of intelligent enterprises. Together with our customers and partners, we are building tomorrow's industries—today.",
];

const STATS = [
  { value: "15+", label: "Years of Innovation" },
  { value: "200+", label: "Enterprise Clients" },
  { value: "40+", label: "Countries Served" },
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
        background: 'linear-gradient(135deg, #0A0F1E 0%, #0D1528 40%, #111827 70%, #0A0F1E 100%)',
        paddingTop: 'clamp(72px, 9vh, 128px)',
        paddingBottom: 'clamp(72px, 9vh, 128px)',
      }}
    >
      {/* ── Ambient Background Glows ── */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: 600,
          height: 600,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(139,0,54,0.12) 0%, rgba(194,24,91,0.05) 40%, transparent 70%)',
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
          background: 'radial-gradient(circle, rgba(59,130,246,0.08) 0%, rgba(99,102,241,0.04) 50%, transparent 70%)',
          filter: 'blur(80px)',
          bottom: '-10%',
          right: '5%',
        }}
      />

      {/* ── Blueprint Dot Grid ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      {/* ── Diagonal accent line top-right ── */}
      <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-white/5 to-transparent pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 relative z-10">

        {/* ── Section Tag ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 flex items-center gap-3"
        >
          <div className="h-px w-10 bg-gradient-to-r from-[#8C123B] to-[#F59E0B]" />
          <span
            className="font-bold uppercase tracking-[0.25em] text-[#C2185B]"
            style={{ fontSize: 11 }}
          >
            Message from our CEO
          </span>
        </motion.div>

        {/* ── Main Split Grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch">

          {/* ━━━━ LEFT — CEO Portrait ━━━━ */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex items-end justify-center lg:justify-start order-2 lg:order-1"
          >
            {/* Outer frame glow */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'radial-gradient(ellipse at 40% 80%, rgba(139,0,54,0.15) 0%, transparent 65%)',
              }}
            />

            {/* Portrait container */}
            <div className="relative w-full max-w-[460px] mx-auto lg:mx-0">

              {/* Decorative corner brackets */}
              <div className="absolute top-4 left-4 w-10 h-10 border-t-2 border-l-2 border-[#8C123B]/60 z-20 rounded-tl-sm" />
              <div className="absolute top-4 right-4 w-10 h-10 border-t-2 border-r-2 border-[#F59E0B]/40 z-20 rounded-tr-sm" />
              <div className="absolute bottom-4 left-4 w-10 h-10 border-b-2 border-l-2 border-[#F59E0B]/40 z-20 rounded-bl-sm" />
              <div className="absolute bottom-4 right-4 w-10 h-10 border-b-2 border-r-2 border-[#8C123B]/60 z-20 rounded-br-sm" />

              {/* Accent gradient bar — bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#8C123B] via-[#C2185B] to-[#F59E0B] z-20 rounded-b" />

              {/* Image */}
              <div
                className="relative overflow-hidden rounded-xl"
                style={{
                  aspectRatio: '4/5',
                  background: 'linear-gradient(160deg, #1a2540 0%, #0d1528 60%, #0a0f1e 100%)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  boxShadow: '0 40px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(139,0,54,0.1)',
                }}
              >
                <Image
                  src="/ceo-placeholder.png"
                  alt="Hitesh Patel — Chief Executive Officer, DHGsoft"
                  fill
                  className="object-cover object-top select-none"
                  priority
                  sizes="(max-width: 1024px) 90vw, 460px"
                />

                {/* Bottom overlay gradient for name card */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: 'linear-gradient(to top, rgba(10,15,30,0.92) 0%, rgba(10,15,30,0.5) 30%, transparent 60%)',
                  }}
                />

                {/* Name Card — pinned inside image bottom */}
                <div className="absolute bottom-6 left-6 right-6 z-10">
                  <div
                    className="flex items-end justify-between p-4 rounded-xl backdrop-blur-md"
                    style={{
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.08)',
                    }}
                  >
                    <div>
                      <div className="h-[2px] w-8 bg-gradient-to-r from-[#8C123B] to-[#F59E0B] rounded-full mb-2" />
                      <p className="text-white font-extrabold tracking-tight" style={{ fontSize: 18, lineHeight: 1.2 }}>
                        Hitesh Patel
                      </p>
                      <p className="text-slate-400 font-medium mt-0.5" style={{ fontSize: 12 }}>
                        Chief Executive Officer
                      </p>
                      <p className="font-bold mt-0.5" style={{ fontSize: 11, color: '#C2185B' }}>
                        DHGsoft
                      </p>
                    </div>
                    {/* Signature-style icon */}
                    <div
                      className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{
                        background: 'linear-gradient(135deg, #8C123B 0%, #C2185B 60%, #F59E0B 100%)',
                        boxShadow: '0 4px 16px rgba(139,0,54,0.35)',
                      }}
                    >
                      <span className="text-white font-black" style={{ fontSize: 16 }}>HP</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ━━━━ RIGHT — Quote & Content ━━━━ */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="flex flex-col justify-center lg:pl-16 xl:pl-20 order-1 lg:order-2 pb-12 lg:pb-0"
          >
            {/* Giant quote icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-6"
            >
              <Quote
                className="fill-current"
                style={{ width: 52, height: 52, color: '#8C123B', opacity: 0.6 }}
              />
            </motion.div>

            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="font-extrabold tracking-tight text-white mb-8 font-headline"
              style={{ fontSize: 'clamp(26px, 3vw, 40px)', lineHeight: 1.15 }}
            >
              Building Tomorrow's{' '}
              <span
                style={{
                  background: 'linear-gradient(90deg, #C2185B 0%, #F59E0B 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Industries — Today
              </span>
            </motion.h2>

            {/* Paragraphs */}
            <div className="space-y-5 mb-10">
              {CEO_PARAGRAPHS.map((para, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.28 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="text-slate-400 leading-relaxed font-sans"
                  style={{ fontSize: 'clamp(14px, 1.1vw, 16px)', lineHeight: 1.8 }}
                >
                  {para}
                </motion.p>
              ))}
            </div>

            {/* Signature divider */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="mb-8 origin-left"
            >
              <div className="h-px bg-gradient-to-r from-[#8C123B] via-[#C2185B]/50 to-transparent max-w-xs" />
            </motion.div>

            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-wrap gap-8 mb-10"
            >
              {STATS.map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <span
                    className="font-black text-white leading-none"
                    style={{
                      fontSize: 'clamp(28px, 2.5vw, 38px)',
                      background: 'linear-gradient(90deg, #ffffff 0%, #cbd5e1 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    {stat.value}
                  </span>
                  <span className="text-slate-500 font-semibold mt-1 uppercase tracking-widest" style={{ fontSize: 10 }}>
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <button
                className="group inline-flex items-center gap-2.5 font-bold text-white rounded-full px-7 py-3 transition-all duration-300 cursor-pointer border-0"
                style={{
                  fontSize: 13,
                  background: 'linear-gradient(90deg, #8C123B 0%, #C2185B 50%, #F59E0B 100%)',
                  backgroundSize: '200% 100%',
                  boxShadow: '0 4px 20px rgba(139,18,59,0.3)',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.backgroundPosition = '100% 0%';
                  (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 8px 32px rgba(139,18,59,0.45)';
                  (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.backgroundPosition = '0% 0%';
                  (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 4px 20px rgba(139,18,59,0.3)';
                  (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0px)';
                }}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <span>Connect with Our Team</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
