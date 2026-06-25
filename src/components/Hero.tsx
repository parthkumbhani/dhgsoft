"use client"

import React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  Cpu,
  Globe2,
  ShieldCheck,
  Database,
  Radio,
  Server,
  Activity
} from "lucide-react"

interface HeroProps {
  onContactClick: () => void
  onExploreServices: () => void
}

export default function Hero({ onContactClick, onExploreServices }: HeroProps) {
  // Stagger variants for content animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
    }
  };

  return (
    <section className="relative min-h-[95vh] lg:min-h-screen flex items-center overflow-hidden bg-white pt-28 pb-20 lg:pt-36 lg:pb-28">
      {/* Cinematic Background Video and Overlays */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <video
          src="/heropagevideo.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-100 scale-100"
        />
        {/* Soft, light vignettes for text contrast without blocking video details */}
        <div className="absolute inset-0 bg-slate-950/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/45 via-slate-950/15 to-transparent z-1" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent z-1" />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-16 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Text & CTA Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Tag Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 backdrop-blur-md text-[#E10088] mb-8"
            >
              <Cpu className="h-4 w-4 text-[#E10088]" />
              <span className="text-[11px] font-extrabold uppercase tracking-widest font-sans">
                It's Time to Connect Intelligence
              </span>
            </motion.div>

            {/* Main Premium Heading */}
            <motion.h1
              variants={itemVariants}
              className="text-headline-xl text-white tracking-tight font-extrabold leading-tight text-balance"
            >
              Transforming Industrial Enterprises Through{" "}
              <span className="bg-gradient-to-r from-[#C30072] via-[#E10088] to-[#fbc00e] bg-clip-text text-transparent">
                AI, Data & Digital Engineering
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="mt-6 text-body-md text-slate-300 max-w-2xl leading-relaxed font-sans font-medium"
            >
              We integrate operational plant floors with enterprise software—creating secure telemetry streams from machinery to cloud systems to power AI-driven business intelligence.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="mt-10 flex flex-wrap gap-4 items-center"
            >
              <Button
                onClick={onContactClick}
                size="lg"
                className="font-bold rounded-xl bg-gradient-to-r from-primary to-secondary hover:from-primary hover:to-secondary hover:-translate-y-[2px] active:scale-[0.98] text-white px-8 py-4 h-auto shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all duration-300 border-0 flex items-center gap-2 group cursor-pointer"
              >
                Talk to Experts
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              {/* <Button
                onClick={onExploreServices}
                variant="outline"
                size="lg"
                className="font-bold border-white/20 text-white hover:bg-white/10 hover:border-white/40 rounded-xl px-8 py-4 h-auto backdrop-blur-sm transition-all duration-300 hover:-translate-y-[2px] cursor-pointer"
              >
                Explore Services
              </Button> */}
            </motion.div>

            {/* Metrics */}
            <motion.div
              variants={itemVariants}
              className="mt-14 grid grid-cols-3 gap-8 pt-8 border-t border-white/10 w-full max-w-xl"
            >
              <div>
                <div className="text-2xl lg:text-3xl font-black text-white tracking-tight">100%</div>
                <div className="text-[10px] font-extrabold text-slate-400 uppercase mt-1.5 tracking-wider">OT/IT Compliance</div>
              </div>
              <div>
                <div className="text-2xl lg:text-3xl font-black text-white tracking-tight">40%+</div>
                <div className="text-[10px] font-extrabold text-slate-400 uppercase mt-1.5 tracking-wider">OEE Improvement</div>
              </div>
              <div>
                <div className="text-2xl lg:text-3xl font-black text-white tracking-tight">Zero</div>
                <div className="text-[10px] font-extrabold text-slate-400 uppercase mt-1.5 tracking-wider">Data Silos</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Premium Glassmorphic Telemetry Card Overlay */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end w-full relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
              className="w-full max-w-[480px] rounded-[32px] p-[1.5px] bg-gradient-to-br from-white/10 via-transparent to-white/5 shadow-2xl relative overflow-hidden group"
            >
            </motion.div>
          </div>

        </div>
      </div>

      {/* Floating Scroll Indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-450 hover:text-white cursor-pointer z-10 transition-colors"
        onClick={onExploreServices}
      >
        <span className="text-[9px] font-bold uppercase tracking-widest font-sans">Scroll to Explore</span>
        <div className="w-5 h-8 border-2 border-slate-500 rounded-full flex justify-center p-1">
          <motion.div
            animate={{
              y: [0, 8, 0],
              opacity: [1, 0.4, 1]
            }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              ease: "easeInOut"
            }}
            className="w-1.5 h-1.5 bg-slate-350 rounded-full"
          />
        </div>
      </div>
    </section>
  )
}
