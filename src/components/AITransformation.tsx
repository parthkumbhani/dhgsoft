"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { Shield, Brain, Cpu, Zap, Activity, ArrowRight, Server, Database } from "lucide-react"
import { Button } from "@/components/ui/button"

const WORKFLOW_STEPS = [
  {
    title: "1. OT Telemetry Ingestion",
    icon: Server,
    desc: "OPC-UA and MQTT edge nodes stream plant-floor sensor metrics securely through a unidirectional gateway."
  },
  {
    title: "2. Stream Parsing & Context",
    icon: Database,
    desc: "Ingested sensor data is parsed, filtered, and stamped with asset hierarchies, structural references, and time stamps."
  },
  {
    title: "3. ML Predictive Modeling",
    icon: Brain,
    desc: "Predictive neural networks score asset degradation risks and flag operating anomalies 4 hours before failures occur."
  },
  {
    title: "4. Autonomous Loop Automation",
    icon: Zap,
    desc: "Validated predictions publish back down to SCADA panels for automated load shifts and sync to ERP maintenance queues."
  }
]

const INTEL_CATEGORIES = [
  {
    title: "Artificial Intelligence",
    icon: Brain,
    desc: "Deploy edge-level deep learning and machine learning models for visual quality control and real-time yield tuning."
  },
  {
    title: "Operational Analytics",
    icon: Activity,
    desc: "Unify historical telemetry data into high-performance analytical warehouses to identify bottlenecks."
  },
  {
    title: "Closed-Loop Automation",
    icon: Zap,
    desc: "Trigger automatic SCADA overrides and maintenance work orders directly from real-time asset analytics."
  },
  {
    title: "Industrial Cyber-Safety",
    icon: Shield,
    desc: "Enforce NIST and IEC 62443 zero-trust protocols across all edge sensors and cloud database connections."
  }
]

export default function AITransformation() {
  const [activeStep, setActiveStep] = useState(0)

  return (
    <section id="ai-transformation" className="py-24 bg-[#0b0f19] text-white relative overflow-hidden">
      {/* Background grids */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl opacity-50" />

      <div className="max-w-[1440px] mx-auto px-6 relative z-10">
        
        {/* Section Title */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-bold text-primary uppercase tracking-wider mb-3">
            Digital Engineering Edge
          </div>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            AI-Driven Industrial Intelligence & Automation
          </h2>
          <p className="text-slate-400 mt-4 text-sm lg:text-base leading-relaxed">
            Bridging mechanical operations with cloud machine learning. We construct secure pipeline structures that process gigabytes of machine telemetry and output predictive decisions.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Explanations of core segments */}
          <div className="lg:col-span-6 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {INTEL_CATEGORIES.map((cat, i) => {
                const Icon = cat.icon
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.05 }}
                    className="p-6 rounded-lg bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm flex flex-col gap-4"
                  >
                    <div className="w-10 h-10 rounded bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h4 className="text-base font-bold text-white tracking-tight">
                      {cat.title}
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {cat.desc}
                    </p>
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* Right Column: Dynamic Process Flow diagram */}
          <div className="lg:col-span-6">
            <div className="p-8 rounded-xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-md">
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-6 flex items-center gap-2">
                <Cpu className="h-4 w-4 text-primary" />
                Closed-Loop Telemetry Workflow
              </h4>

              {/* Interactive pipeline step list */}
              <div className="space-y-4">
                {WORKFLOW_STEPS.map((step, idx) => {
                  const Icon = step.icon
                  const isActive = activeStep === idx
                  return (
                    <div
                      key={idx}
                      onClick={() => setActiveStep(idx)}
                      className={`group p-4 rounded-lg border transition-all duration-300 cursor-pointer flex gap-4 items-start ${
                        isActive
                          ? "bg-slate-900 border-primary shadow-md"
                          : "bg-slate-950/40 border-slate-850 hover:bg-slate-900/40 hover:border-slate-800"
                      }`}
                    >
                      <div className={`w-8 h-8 rounded shrink-0 flex items-center justify-center border transition-colors ${
                        isActive
                          ? "bg-primary border-primary text-white"
                          : "bg-slate-900 border-slate-800 text-slate-400 group-hover:text-white"
                      }`}>
                        <Icon className="h-4 w-4" />
                      </div>
                      <div>
                        <h5 className={`text-sm font-bold transition-colors ${
                          isActive ? "text-primary" : "text-slate-200 group-hover:text-white"
                        }`}>
                          {step.title}
                        </h5>
                        <p className={`text-xs mt-1.5 leading-relaxed transition-colors ${
                          isActive ? "text-slate-300" : "text-slate-400"
                        } ${isActive ? "" : "line-clamp-1"}`}>
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Display visual indicator flow connection representation at the bottom */}
              <div className="mt-8 pt-6 border-t border-slate-800 flex items-center justify-between">
                <div className="flex gap-2">
                  {[0, 1, 2, 3].map((dot) => (
                    <span
                      key={dot}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        activeStep === dot ? "w-6 bg-primary" : "w-1.5 bg-slate-700"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-[10px] font-mono text-slate-500 uppercase">
                  Telemetry Process: Verified
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
