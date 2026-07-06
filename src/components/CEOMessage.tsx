'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView, useScroll, useTransform, useReducedMotion } from 'framer-motion';

export default function CEOMessage() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const shouldReduceMotion = useReducedMotion();
  const scrollTransform = useTransform(scrollYProgress, [0, 1], [-15, 15]);
  const yParallaxImage = shouldReduceMotion ? 0 : scrollTransform;

  // Animation variants
  const leftBoxVariants = shouldReduceMotion ? {
    hidden: { opacity: 1, y: 0 },
    visible: { opacity: 1, y: 0 }
  } : {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } }
  };

  const eyebrowVariants = shouldReduceMotion ? {
    hidden: { opacity: 1, y: 0 },
    visible: { opacity: 1, y: 0 }
  } : {
    hidden: { opacity: 0, y: -8 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } }
  };

  const headlineVariants = shouldReduceMotion ? {
    hidden: { opacity: 1, y: 0, scale: 1 },
    visible: { opacity: 1, y: 0, scale: 1 }
  } : {
    hidden: { opacity: 0, y: -15, scale: 0.98 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } }
  };

  const quoteMarkVariants = shouldReduceMotion ? {
    hidden: { opacity: 0.08 },
    visible: { opacity: 0.08 }
  } : {
    hidden: { opacity: 0 },
    visible: { opacity: 0.08, transition: { duration: 0.8, delay: 1.0, ease: "easeOut" as const } }
  };

  const paragraphVariants = shouldReduceMotion ? {
    hidden: { opacity: 1, y: 0 },
    visible: { opacity: 1, y: 0 }
  } : {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } }
  };

  const dividerVariants = shouldReduceMotion ? {
    hidden: { scaleX: 1 },
    visible: { scaleX: 1 }
  } : {
    hidden: { scaleX: 0 },
    visible: { scaleX: 1, transition: { duration: 0.6, delay: 0.8, ease: "easeOut" as const } }
  };

  const profileRowVariants = shouldReduceMotion ? {
    hidden: { opacity: 1, y: 0 },
    visible: { opacity: 1, y: 0 }
  } : {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.9, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } }
  };


  // Portrait frame variants
  const backGradientVariants = shouldReduceMotion ? {
    hidden: { x: 16, y: 16, opacity: 1 },
    visible: { x: 16, y: 16, opacity: 1 },
    hover: { x: 16, y: 16 }
  } : {
    hidden: { x: 0, y: 0, opacity: 0 },
    visible: { x: 16, y: 16, opacity: 1, transition: { duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
    hover: { x: 24, y: 24, transition: { duration: 0.3, ease: "easeOut" as const } }
  };

  const portraitCardVariants = shouldReduceMotion ? {
    hidden: { opacity: 1, scale: 1, y: 0 },
    visible: { opacity: 1, scale: 1, y: 0 },
    hover: { y: 0 }
  } : {
    hidden: { opacity: 0, scale: 0.96, y: 0 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
    hover: { y: -4, transition: { duration: 0.3, ease: "easeOut" as const } }
  };

  return (
    <section
      ref={sectionRef}
      id="ceo-message"
      className="relative overflow-hidden bg-white py-20 md:py-28 lg:py-32 w-full"
    >
      {/* ━━━━ DECORATIVE BRAND ACCENTS ━━━━ */}
      
      {/* 1. Big soft gradient blob (top-left) */}
      <motion.div
        className="absolute pointer-events-none z-0 rounded-full opacity-15"
        style={{
          width: '560px',
          height: '560px',
          background: 'radial-gradient(circle, var(--color-brand) 0%, var(--color-brand-accent) 100%)',
          filter: 'blur(80px)',
          top: '-10%',
          left: '-10%',
        }}
        animate={shouldReduceMotion ? {} : {
          scale: [1, 1.05, 0.98, 1.05, 1],
          x: [0, 20, -10, 15, 0],
          y: [0, -15, 20, -10, 0],
        }}
        transition={shouldReduceMotion ? {} : {
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* 2. Second soft blob (bottom-right, behind portrait) */}
      <motion.div
        className="absolute pointer-events-none z-0 rounded-full opacity-12"
        style={{
          width: '480px',
          height: '480px',
          background: 'radial-gradient(circle, var(--color-brand-accent) 0%, var(--color-brand-hot) 100%)',
          filter: 'blur(80px)',
          bottom: '-10%',
          right: '-5%',
        }}
        animate={shouldReduceMotion ? {} : {
          scale: [1, 1.08, 0.95, 1.08, 1],
          x: [0, -15, 15, -10, 0],
          y: [0, 20, -15, 10, 0],
        }}
        transition={shouldReduceMotion ? {} : {
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Subtle wash of mist in the lower-right quadrant */}
      <div 
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: 'radial-gradient(circle at bottom right, #F4F5F7 0%, transparent 60%)'
        }}
      />

      {/* 3. Fine dotted grid pattern (mid-left, behind text) */}
      <div 
        className="absolute pointer-events-none z-0 opacity-12 left-6 top-20 w-32 h-32 hidden md:block" 
        aria-hidden="true"
        style={{ color: 'var(--color-line)' }}
      >
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dotPattern" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="3" cy="3" r="1.5" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dotPattern)" />
        </svg>
      </div>

      {/* 4. Thin geometric outline circle (top-right of text column) */}
      <div className="absolute pointer-events-none z-0 opacity-20 right-10 top-16 w-40 h-40 hidden lg:block" aria-hidden="true">
        <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="48" stroke="url(#circleGradient)" strokeWidth="1.2" />
          <defs>
            <linearGradient id="circleGradient" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
              <stop stopColor="var(--color-brand)" />
              <stop offset="1" stopColor="var(--color-brand-accent)" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* ━━━━ MAIN CONTAINER ━━━━ */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center justify-items-center lg:justify-items-stretch">
          
          {/* ━━━━ LEFT ZONE — Text Content Column (columns 1–8) ━━━━ */}
          <motion.div
            variants={leftBoxVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="lg:col-span-8 w-full flex flex-col items-start text-left order-1 bg-white/75 backdrop-blur-md rounded-3xl p-8 md:p-12 lg:p-16 border border-slate-100/50 shadow-[0_8px_32px_rgba(0,0,0,0.02)] relative z-10"
          >
            {/* Eyebrow */}
            <motion.div 
              variants={eyebrowVariants}
              className="inline-flex items-center gap-2 mb-6 border border-brand/20 bg-brand/5 rounded-full px-3 py-1.5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-brand shrink-0" />
              <span className="font-extrabold uppercase tracking-[0.2em] font-sans text-brand text-xs">
                MESSAGE FROM OUR CEO
              </span>
            </motion.div>

            {/* Pull-Quote Headline Container */}
            <div className="relative w-full mb-8">
              {/* 5. Oversized decorative quote glyph */}
              <motion.span
                variants={quoteMarkVariants}
                className="absolute -top-16 -left-10 text-[9rem] font-serif leading-none select-none pointer-events-none text-gradient-brand font-black"
                aria-hidden="true"
              >
                “
              </motion.span>

              <motion.h2
                variants={headlineVariants}
                className="font-bold text-txt-strong font-headline relative z-10 leading-[1.05] tracking-tight lg:whitespace-nowrap lg:text-[clamp(2rem,4.2vw,4rem)] text-[clamp(1.75rem,7vw,2.75rem)]"
              >
                {"“Building Tomorrow's Industries — "}
                <span className="text-gradient-brand">Today</span>
                {"”"}
              </motion.h2>
            </div>

            {/* Body Paragraphs Stagger Container */}
            <motion.div
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.35
                  }
                }
              }}
              className="space-y-5 text-left relative z-10"
            >
              <motion.p
                variants={paragraphVariants}
                className="text-slate-800 text-base md:text-lg leading-relaxed max-w-[60ch]"
              >
                Innovation is at the heart of everything we do at DHGsoft. We believe the next generation of industry will be built on intelligent technologies that connect people, data, and operations to unlock new possibilities.
              </motion.p>
              <motion.p
                variants={paragraphVariants}
                className="text-slate-800 text-base md:text-lg leading-relaxed max-w-[60ch] mt-5"
              >
                Our commitment is to transform bold ideas into practical solutions that deliver measurable outcomes. By combining Artificial Intelligence, Industrial IoT, Cloud, Data Platforms, and Digital Engineering, we help organizations innovate faster, operate smarter, and grow sustainably.
              </motion.p>
              <motion.p
                variants={paragraphVariants}
                className="text-slate-800 text-base md:text-lg leading-relaxed max-w-[60ch] mt-5"
              >
                As technology continues to evolve, we remain focused on pushing boundaries, embracing change, and creating solutions that shape the future of intelligent enterprises. Together with our customers and partners, we are building tomorrow's industries—today.
              </motion.p>
            </motion.div>

            {/* Gradient Divider */}
            <motion.div
              variants={dividerVariants}
              style={{ originX: 0 }}
              className="h-[2px] w-20 bg-gradient-to-r from-brand via-brand-hot to-brand-accent rounded-full mt-10"
            />

            {/* CEO Designation & LinkedIn Row */}
            <motion.div 
              variants={profileRowVariants}
              className="flex flex-col md:flex-row md:items-center justify-between w-full mt-6 gap-4"
            >
              <div>
                <h4 className="text-2xl md:text-3xl font-bold font-headline leading-tight text-gradient-brand">
                  Hitesh Patel
                </h4>
                <p className="text-sm md:text-base font-semibold mt-1 uppercase tracking-[0.15em] text-gradient-brand">
                  CHIEF EXECUTIVE OFFICER, DHGSOFT
                </p>
              </div>

              <a
                href="https://linkedin.com/in/hitesh-patel-967087a0"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Connect with Hitesh Patel on LinkedIn"
                title="Connect on LinkedIn"
                className="flex items-center justify-center w-11 h-11 rounded-full bg-[#0A66C2] hover:bg-[#0958AA] hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200 text-white shrink-0 mt-3 md:mt-0"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </motion.div>


          </motion.div>

          {/* ━━━━ RIGHT ZONE — Layered Portrait Column (columns 9–12) ━━━━ */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="lg:col-span-4 w-full flex items-center justify-center order-2"
          >
            {/* Interactive Portrait frame */}
            <motion.div
              initial="rest"
              whileHover="hover"
              animate="rest"
              className="relative w-[88vw] max-w-[380px] md:max-w-[440px] lg:max-w-[420px] aspect-[4/5] z-10"
            >
              {/* Layer 1 (back / farthest): offset gradient block */}
              <motion.div
                variants={backGradientVariants}
                className="absolute inset-0 bg-gradient-to-br from-brand via-brand-hot to-brand-accent rounded-[24px] shadow-md z-0"
              />

              {/* Layer 2 (portrait card): photo mount */}
              <motion.div
                variants={portraitCardVariants}
                className="absolute inset-0 bg-white p-3 rounded-[24px] shadow-2xl z-10 overflow-hidden flex flex-col justify-between border border-slate-100/50"
              >
                {/* Image Container for parallax scrolling */}
                <div className="relative w-full h-full rounded-[16px] overflow-hidden bg-slate-50">
                  <motion.div
                    style={{ y: yParallaxImage }}
                    className="absolute inset-x-0 top-[-15px] bottom-[-15px] h-[calc(100%+30px)]"
                  >
                    {/* Layer 3: Portrait Image */}
                    <Image
                      src="/CEO_nobg_clean.png"
                      alt="Hitesh Patel — Chief Executive Officer, DHGsoft"
                      fill
                      className="object-cover object-center"
                      priority
                      sizes="(max-width: 768px) 88vw, (max-width: 1024px) 440px, 420px"
                    />
                  </motion.div>

                  {/* Layer 4: L-shaped corner marks */}
                  <div className="absolute top-2.5 left-2.5 w-5 h-5 border-t-2 border-l-2 border-brand pointer-events-none z-20" />
                  <div className="absolute bottom-2.5 right-2.5 w-5 h-5 border-b-2 border-r-2 border-brand pointer-events-none z-20" />

                  {/* Very slight warm color grade overlay */}
                  <div className="absolute inset-0 bg-brand-accent/5 mix-blend-overlay pointer-events-none z-10" />
                </div>

                {/* Layer 5: CEO gradient badge */}
                <div className="absolute -top-2.5 -right-2.5 z-20 bg-gradient-to-r from-brand to-brand-accent text-white text-[10px] font-extrabold uppercase tracking-widest px-3.5 py-1.5 rounded-full shadow-md">
                  CEO
                </div>
              </motion.div>

            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
