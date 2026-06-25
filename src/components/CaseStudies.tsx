"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"

const CASE_STUDIES = [
  {
    title: "Connected Factory Optimization for Global Automotive OEM",
    industry: "Automotive",
    metric: "42% OEE Improvement",
    challenge: "A Tier-1 automotive manufacturer struggled with data silos across its assembly plant floor, preventing real-time production analytics and OEE monitoring.",
    solution: "DHG Soft deployed a unified Industrial Data Platform integrating PLC telemetry with their MES database. Created customized dashboards and edge-level analytics pipelines.",
    impact: "Achieved a 42% increase in Overall Equipment Effectiveness (OEE) and reduced unscheduled downtime by 18% within the first six months of deployment.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "Zero-Trust OT/IT Cybersecurity for European Power Grid",
    industry: "Energy & Utilities",
    metric: "IEC 62443 Certified",
    challenge: "A regional energy distribution grid needed to secure its remote substations and integrate control room access without exposing the network to public internet threats.",
    solution: "Implemented an end-to-end zero-trust access control framework conforming to IEC 62443 security standards, featuring micro-segmentation and multi-factor authentication.",
    impact: "Successfully protected 30+ critical power substation nodes, blocking all unauthorized network attempts and securing telemetry pipelines.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "Predictive Anomaly Detection for Global Chemical Producer",
    industry: "Chemicals",
    metric: "$1.2M Annual Savings",
    challenge: "Frequent, unpredictable sensor failures in critical chemical batch processing led to high product discard rates and expensive repair overheads.",
    solution: "Built a customized machine learning analytics pipeline that process batch telemetry. Deployed predictive models to flag anomalies 4 hours before failure.",
    impact: "Prevented 8 major processing line failures, reduced chemical waste by 24%, and saved the client approximately $1.2M in annual operational costs.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80"
  }
]

export default function CaseStudies() {
  const [activeIdx, setActiveIdx] = useState(0)
  const activeStudy = CASE_STUDIES[activeIdx]

  return (
    <section id="case-studies" className="py-24 bg-white relative overflow-hidden">
      {/* Background — intentionally different from other sections: subtle diagonal lines */}
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#f8fafc_25%,transparent_25%,transparent_50%,#f8fafc_50%,#f8fafc_75%,transparent_75%,transparent)] bg-[size:60px_60px] opacity-30 pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-2xl">
            <div className="text-xs font-bold text-primary uppercase tracking-wider mb-3 font-sans">
              Proven Results
            </div>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight font-headline">
              Enterprise Impact Studies
            </h2>
            <p className="text-slate-600 mt-4 text-sm lg:text-base leading-relaxed font-sans">
              Read how our digital engineering teams support global enterprises in solving complex OT/IT issues and maximizing efficiency.
            </p>
          </div>
        </div>

        {/* Asymmetric Featured Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">

          {/* Left: Featured Case Study — large image card */}
          <motion.div
            key={activeIdx}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 relative group cursor-pointer overflow-hidden rounded-[24px] min-h-[480px] lg:min-h-[540px] flex flex-col justify-end"
          >
            {/* Background image */}
            <div className="absolute inset-0 w-full h-full overflow-hidden">
              <img
                src={activeStudy.image}
                alt={activeStudy.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-950/10" />

            {/* Top badges */}
            <div className="absolute top-6 left-6 z-10 flex items-center gap-3">
              <Badge variant="outline" className="bg-white/10 backdrop-blur-md border-white/25 text-white font-semibold text-[10px]">
                {activeStudy.industry}
              </Badge>
              <span className="text-[10px] font-bold text-[#fbc00e] bg-[#fbc00e]/10 backdrop-blur-md border border-[#fbc00e]/25 px-2.5 py-1 rounded uppercase tracking-wider">
                {activeStudy.metric}
              </span>
            </div>

            {/* Bottom content */}
            <div className="relative z-10 p-8 lg:p-10">
              <h3 className="text-xl lg:text-2xl font-bold text-white tracking-tight font-headline leading-snug mb-4 max-w-lg">
                {activeStudy.title}
              </h3>

              {/* Challenge / Solution / Impact in compact layout */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                <div className="border-l-2 border-white/20 pl-3">
                  <h5 className="text-[9px] font-bold text-white/50 uppercase tracking-wider font-sans mb-1">Challenge</h5>
                  <p className="text-[11px] text-slate-300 leading-relaxed font-sans line-clamp-3">{activeStudy.challenge}</p>
                </div>
                <div className="border-l-2 border-white/20 pl-3">
                  <h5 className="text-[9px] font-bold text-white/50 uppercase tracking-wider font-sans mb-1">Solution</h5>
                  <p className="text-[11px] text-slate-300 leading-relaxed font-sans line-clamp-3">{activeStudy.solution}</p>
                </div>
                <div className="border-l-2 border-[#fbc00e]/40 pl-3">
                  <h5 className="text-[9px] font-bold text-[#fbc00e] uppercase tracking-wider font-sans mb-1">Impact</h5>
                  <p className="text-[11px] text-white leading-relaxed font-sans line-clamp-3 font-medium">{activeStudy.impact}</p>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-6 flex items-center gap-2 text-white/70 group-hover:text-[#fbc00e] transition-colors cursor-pointer">
                <span className="text-xs font-bold uppercase tracking-wider font-sans">
                  Request Technical Brief
                </span>
                <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </motion.div>

          {/* Right: Case study selector cards — stacked */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {CASE_STUDIES.map((study, idx) => {
              const isActive = idx === activeIdx
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  onClick={() => setActiveIdx(idx)}
                  className={`relative cursor-pointer rounded-[20px] p-6 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group/card ${
                    isActive
                      ? "bg-slate-950 text-white shadow-[0_15px_35px_rgba(15,23,42,0.25)]"
                      : "bg-slate-50 border border-slate-200/80 text-slate-800 hover:bg-slate-100 hover:border-slate-300"
                  }`}
                >
                  {/* Active indicator line */}
                  <div className={`absolute top-0 left-0 w-full h-[3px] rounded-t-[20px] bg-gradient-to-r from-primary via-secondary to-[#fbc00e] transition-opacity duration-300 ${
                    isActive ? "opacity-100" : "opacity-0"
                  }`} />

                  {/* Card header */}
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <Badge variant="outline" className={`shrink-0 font-semibold text-[10px] ${
                      isActive 
                        ? "border-white/20 text-white/60" 
                        : "border-slate-250 text-slate-500"
                    }`}>
                      {study.industry}
                    </Badge>
                    <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded shrink-0 transition-colors ${
                      isActive
                        ? "text-[#fbc00e] bg-[#fbc00e]/10"
                        : "text-primary bg-primary/5"
                    }`}>
                      {study.metric}
                    </span>
                  </div>

                  {/* Title */}
                  <h4 className={`text-sm font-bold leading-snug font-headline transition-colors ${
                    isActive ? "text-white" : "text-slate-800 group-hover/card:text-primary"
                  }`}>
                    {study.title}
                  </h4>

                  {/* Brief description — only on non-active */}
                  <p className={`text-[11px] leading-relaxed font-sans mt-2 line-clamp-2 transition-colors ${
                    isActive ? "text-slate-400" : "text-slate-500"
                  }`}>
                    {study.challenge}
                  </p>

                  {/* Active state arrow indicator */}
                  <div className={`mt-3 pt-3 border-t flex items-center justify-between transition-all ${
                    isActive
                      ? "border-white/10 text-[#fbc00e]"
                      : "border-slate-200/60 text-slate-400 group-hover/card:text-primary"
                  }`}>
                    <span className="text-[9px] font-bold uppercase tracking-wider font-sans">
                      {isActive ? "Currently Viewing" : "View Case Study"}
                    </span>
                    <ArrowRight className={`h-3.5 w-3.5 transition-transform ${
                      isActive ? "translate-x-0" : "group-hover/card:translate-x-1"
                    }`} />
                  </div>
                </motion.div>
              )
            })}
          </div>

        </div>

      </div>
    </section>
  )
}
