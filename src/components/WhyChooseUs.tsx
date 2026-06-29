"use client"

import React, { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Award, Globe2, Briefcase, Calendar, ArrowRight } from "lucide-react"

const METRICS_DATA = [
  {
    value: 15,
    suffix: "+",
    label: "Years of Engineering Excellence",
    subtext: "Since 2011, delivering enterprise-grade core systems engineering and software solutions.",
    icon: Calendar,
  },
  {
    value: 450,
    suffix: "+",
    label: "Production Deployments",
    subtext: "Complex projects successfully commissioned across manufacturing, cloud, and energy grids.",
    icon: Briefcase,
  },
  {
    value: 30,
    suffix: "+",
    label: "Global Regions Served",
    subtext: "Providing round-the-clock support and systems deployment on an international scale.",
    icon: Globe2,
  },
  {
    value: 250,
    suffix: "+",
    label: "Certified Systems Specialists",
    subtext: "Elite engineers holding certifications in IEC 62443, Azure IoT, MES, PLM, and SCADA systems.",
    icon: Award,
  }
]

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          const duration = 1800
          const startTime = performance.now()

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime
            const progress = Math.min(elapsed / duration, 1)
            // Ease-out cubic for smooth deceleration
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(Math.floor(eased * target))

            if (progress < 1) {
              requestAnimationFrame(animate)
            }
          }

          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.3 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [target])

  return (
    <div ref={ref} className="text-5xl lg:text-6xl xl:text-7xl font-black text-slate-900 tracking-tighter font-headline leading-none">
      {count}
      <span className="text-primary">{suffix}</span>
    </div>
  )
}

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-8 bg-white border-t border-slate-200/60 relative overflow-hidden">
      {/* Background — clean, no radial grid to differentiate from other sections */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50/30 to-white pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-widest px-3 py-1 rounded-full bg-primary/5 border border-primary/10 mb-4 font-sans">
            🚀 Execution & Reliability
          </div>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight font-headline">
            Why Partner With DHG Soft?
          </h2>
          <div className="h-[3px] w-16 bg-gradient-to-r from-primary via-secondary to-[#fbc00e] mx-auto mt-4 rounded-full" />
          <p className="text-slate-600 mt-5 text-sm lg:text-base leading-relaxed font-sans max-w-2xl mx-auto">
            We bridge systems engineering discipline, strict cybersecurity frameworks, and custom software agility to support business-critical enterprise assets.
          </p>
        </div>

        {/* Stats Row — Large counters with vertical dividers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-0 mb-16"
        >
          {METRICS_DATA.map((item, idx) => {
            const Icon = item.icon
            return (
              <div
                key={idx}
                className={`group relative flex flex-col items-center text-center px-6 lg:px-8 py-8 transition-all duration-300 ${
                  idx < METRICS_DATA.length - 1
                    ? "lg:border-r border-slate-200/80"
                    : ""
                } ${
                  idx < 2 ? "border-b lg:border-b-0 border-slate-200/80" : ""
                }`}
              >
                {/* Icon - small and subtle above the counter */}
                <div className="w-10 h-10 rounded-full bg-primary/5 border border-primary/10 flex items-center justify-center text-primary mb-5 transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:border-primary group-hover:shadow-[0_0_20px_rgba(124,4,56,0.2)]">
                  <Icon className="h-4.5 w-4.5" />
                </div>

                {/* Big animated counter */}
                <AnimatedCounter target={item.value} suffix={item.suffix} />

                {/* Label */}
                <h4 className="text-xs font-extrabold text-slate-800 uppercase tracking-wider mt-4 font-headline">
                  {item.label}
                </h4>

                {/* Subtext */}
                <p className="text-[11px] text-slate-500 leading-relaxed mt-2 font-sans font-medium max-w-[220px]">
                  {item.subtext}
                </p>

                {/* Hover accent line at bottom */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[3px] w-0 bg-gradient-to-r from-primary to-secondary rounded-full group-hover:w-16 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
              </div>
            )
          })}
        </motion.div>

        {/* Trust Statement Strip — Full width, no box */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative rounded-[24px] overflow-hidden"
        >
          {/* Dark background with gradient */}
          <div className="bg-slate-950 px-8 md:px-12 py-10 md:py-12 relative">
            {/* Subtle grid texture */}
            <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] bg-[size:24px_24px] opacity-25 pointer-events-none" />
            
            {/* Brand gradient left accent */}
            <div className="absolute top-0 left-0 w-[4px] h-full bg-gradient-to-b from-primary via-secondary to-[#fbc00e]" />

            {/* Ambient glow */}
            <div className="absolute -top-20 -right-20 w-[250px] h-[250px] bg-primary/10 rounded-full blur-[80px] pointer-events-none" />

            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="flex-grow">
                <span className="text-[9px] font-extrabold text-[#fbc00e] uppercase tracking-[0.2em] font-mono block mb-2">
                  Enterprise Commitment
                </span>
                <h3 className="text-lg md:text-xl font-bold text-white font-headline leading-snug max-w-2xl">
                  Trusted by global manufacturers, energy providers, and infrastructure operators to deliver mission-critical systems with zero-downtime integration.
                </h3>
                <p className="text-xs text-slate-400 mt-3 leading-relaxed font-sans max-w-xl">
                  Our teams hold certifications across IEC 62443, ISA-95, Azure IoT, and NIST frameworks — ensuring every deployment meets the highest security and compliance standards.
                </p>
              </div>

              <button className="shrink-0 inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-white px-7 py-3.5 rounded-xl font-bold text-sm hover:-translate-y-[2px] active:scale-[0.98] transition-all duration-300 shadow-lg shadow-primary/20 cursor-pointer group">
                Talk to Experts
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
