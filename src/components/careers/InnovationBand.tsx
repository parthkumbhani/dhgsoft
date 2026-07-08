"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useInView, useReducedMotion, useScroll, useTransform } from "framer-motion";

export default function InnovationBand() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.15 });
  const shouldReduceMotion = !!useReducedMotion();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Scroll parallax hook setup
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  // Transform scale and y vertical offsets for parallax effect
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  // Staggered child variants
  const quoteContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const quoteItemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" as const },
    },
  };

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-slate-950"
    >
      {/* Background Image: Candid professional team collaboration with scroll parallax */}
      <motion.div
        style={isClient && shouldReduceMotion ? {} : { y }}
        className="absolute inset-0 z-0 w-full h-[120%] -top-[10%] origin-center"
      >
        <Image
          src="/images/careers-innovation-band.jpg"
          alt="DHGsoft digital engineering team collaborating on project specifications"
          fill
          className="object-cover w-full h-full scale-105"
          priority
        />
      </motion.div>

      {/* Vignette radial overlay for centering focus, plus linear overlay for contrast */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(15,23,42,0.3)_0%,#020617_90%)] z-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-transparent to-slate-950/80 z-10" />

      {/* Grid line overlay to maintain consistent visual brand language */}
      <div className="absolute inset-0 bg-tech-grid opacity-15 pointer-events-none z-15" />

      {/* Centered content overlay with staggered animations */}
      <motion.div 
        variants={quoteContainerVariants}
        initial={isClient && shouldReduceMotion ? "visible" : "hidden"}
        animate={isInView ? "visible" : "hidden"}
        className="relative z-20 w-full max-w-5xl px-6 md:px-12 text-center flex flex-col items-center justify-center"
      >
        {/* Stylized, bold quotation mark icon badge */}
        <motion.div
          variants={quoteItemVariants}
          className="flex justify-center mb-8"
        >
          <div className="w-16 h-16 rounded-full bg-brand/10 border border-brand/30 flex items-center justify-center text-brand shadow-lg shadow-brand/15 backdrop-blur-sm select-none">
            <span className="text-5xl font-serif leading-none mt-4 font-black">&ldquo;</span>
          </div>
        </motion.div>

        {/* Large scaled statement with brand highlights and tightened leading */}
        <motion.p
          variants={quoteItemVariants}
          style={{ fontSize: "clamp(1.5rem, 3.8vw, 3rem)" }}
          className="text-slate-100 font-sans font-light leading-[1.3] text-balance tracking-tight pl-0 z-20 max-w-[920px] mx-auto relative"
        >
          A place where <span className="font-extrabold text-white underline decoration-brand decoration-[3px] underline-offset-[6px]">innovation</span> meets opportunity &mdash;{" "}
          <span className="font-extrabold text-white underline decoration-brand decoration-[3px] underline-offset-[6px]">empowering</span> passionate professionals to build
          meaningful careers while creating <span className="font-extrabold text-white underline decoration-brand decoration-[3px] underline-offset-[6px]">value for tomorrow.</span>
        </motion.p>

        {/* Muted attribution line */}
        <motion.div
          variants={quoteItemVariants}
          className="pt-8"
        >
          <span className="text-brand-hot font-mono text-xs tracking-[0.25em] uppercase font-bold bg-brand/5 border border-brand-hot/25 px-4 py-1.5 rounded-full backdrop-blur-xs select-none">
            DHGsoft Operational Philosophy
          </span>
        </motion.div>
      </motion.div>
    </div>
  );
}
