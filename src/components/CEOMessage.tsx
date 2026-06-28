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

const STATS = [
  { value: "15+", label: "Years of Innovation" },
  { value: "200+", label: "Enterprise Clients" },
  { value: "40+", label: "Countries Served" },
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
          background: 'radial-gradient(circle, rgba(197,22,92,0.04) 0%, rgba(245,138,0,0.01) 60%, transparent 70%)',
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
          background: 'radial-gradient(circle, rgba(59,130,246,0.03) 0%, rgba(99,102,241,0.005) 50%, transparent 70%)',
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
            linear-gradient(rgba(15, 23, 42, 0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(15, 23, 42, 0.06) 1px, transparent 1px)
          `,
          backgroundSize: '32px 32px',
        }}
      />

      {/* Technical crosshairs decorations */}
      <div className="absolute top-12 left-12 w-8 h-8 border-t border-l border-slate-300/40 pointer-events-none z-0" />
      <div className="absolute top-12 right-12 w-8 h-8 border-t border-r border-slate-300/40 pointer-events-none z-0" />
      <div className="absolute bottom-12 left-12 w-8 h-8 border-b border-l border-slate-300/40 pointer-events-none z-0" />
      <div className="absolute bottom-12 right-12 w-8 h-8 border-b border-r border-slate-300/40 pointer-events-none z-0" />

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
                  className="text-slate-600 leading-relaxed font-sans font-medium"
                  style={{ fontSize: 'clamp(14px, 1.05vw, 15.5px)', lineHeight: 1.8 }}
                >
                  {para}
                </p>
              ))}
            </div>

            {/* CEO Designation Frosted Card & Stats in a clean integrated block */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full items-stretch border-t border-slate-200/80 pt-8 mt-4">
              
              {/* Designation info */}
              <div className="flex flex-col justify-between p-5 rounded-2xl bg-[#F8FAFC] border border-slate-200/60 shadow-sm relative group hover:border-[#C5165C]/30 transition-all duration-300">
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#C5165C] to-[#FF8A00] rounded-t-2xl opacity-80" />
                
                <div>
                  <h4 className="text-[17px] font-extrabold text-slate-900 font-headline leading-tight">
                    Hitesh Patel
                  </h4>
                  <p className="text-[11px] text-slate-500 font-extrabold mt-1 uppercase tracking-wider">
                    Chief Executive Officer
                  </p>
                  <p className="text-[10px] font-extrabold mt-0.5" style={{ color: '#C5165C' }}>
                    DHGsoft
                  </p>
                </div>
                
                <div className="flex items-center justify-between mt-6">
                  <span className="text-[10px] font-bold text-slate-400 font-sans uppercase">Verify Identity</span>
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center font-black text-white text-xs shadow-md"
                    style={{
                      background: 'linear-gradient(135deg, #C5165C 0%, #E8364F 60%, #FF8A00 100%)',
                    }}
                  >
                    HP
                  </div>
                </div>
              </div>

              {/* Stats readout */}
              <div className="flex flex-col justify-center gap-4 pl-2">
                {STATS.map((stat, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <span
                      className="font-black text-3xl leading-none tracking-tight min-w-[70px]"
                      style={{
                        background: 'linear-gradient(90deg, #C5165C 0%, #FF8A00 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                      }}
                    >
                      {stat.value}
                    </span>
                    <div className="flex flex-col">
                      <span className="text-[10px] font-bold text-slate-700 uppercase tracking-widest font-sans">
                        {stat.label}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

            </div>

            {/* Action Row */}
            <div className="mt-8 pt-4 w-full">
              <button
                className="group inline-flex items-center gap-2.5 font-bold text-white rounded-xl px-8 py-4 transition-all duration-300 cursor-pointer border-0"
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

          {/* ━━━━ RIGHT — CEO Portrait with layered graphics (5 cols on desktop) ━━━━ */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex items-center justify-center order-1 lg:order-2 w-full relative"
          >
            {/* Background halo rings & decorative geometry */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[110%] aspect-square rounded-full border border-slate-200/40 absolute animate-spin-slow z-0" />
              <div className="w-[95%] aspect-square rounded-full border border-dashed border-slate-200/50 absolute z-0" />
              <div className="w-[80%] aspect-square rounded-full bg-gradient-to-tr from-[#C5165C]/5 to-transparent absolute z-0 blur-2xl" />
            </div>

            {/* Portrait frame with soft shadow */}
            <div className="relative w-full max-w-[430px] aspect-square flex items-center justify-center z-10">
              
              {/* Friend's background graphic */}
              <div className="absolute inset-0 z-0 select-none pointer-events-none">
                <Image
                  src="/ceo_bg.png"
                  alt="Corporate Background Graphic"
                  fill
                  className="object-contain opacity-90"
                  priority
                />
              </div>

              {/* CEO Circular Frame with high contrast white bezel & elevation shadow */}
              <div className="relative w-[81.5%] aspect-square rounded-full overflow-hidden z-10 shadow-[0_30px_60px_-15px_rgba(15,23,42,0.18)] border-4 border-white">
                <Image
                  src="/CEO.png"
                  alt="Hitesh Patel — Chief Executive Officer, DHGsoft"
                  fill
                  className="object-cover object-top select-none scale-[0.86] translate-y-[6%]"
                  style={{ filter: 'drop-shadow(0 14px 28px rgba(15, 23, 42, 0.12))' }}
                  priority
                  sizes="(max-width: 1024px) 90vw, 400px"
                />
              </div>

              {/* Faint technical measurement label overlays */}
              <div className="absolute bottom-2 right-2 px-2.5 py-1 rounded bg-white/80 border border-slate-200/60 backdrop-blur-sm z-20 text-[9px] font-mono font-bold text-slate-500 uppercase tracking-widest pointer-events-none shadow-sm">
                SEC_OT_IT // V1.0
              </div>
              <div className="absolute top-2 left-2 px-2.5 py-1 rounded bg-white/80 border border-slate-200/60 backdrop-blur-sm z-20 text-[9px] font-mono font-bold text-slate-500 uppercase tracking-widest pointer-events-none shadow-sm">
                R&D_ENV // HP_01
              </div>

            </div>
          </motion.div>

        </div>
      </div>
      
      {/* Slow spinning animation keyframe */}
      <style>{`
        @keyframes spinSlow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spinSlow 30s linear infinite;
        }
      `}</style>
    </section>
  );
}
