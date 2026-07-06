"use client"

import React from "react"
import { motion } from "framer-motion"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { ShieldAlert, Globe2, RefreshCw, Cpu, Award } from "lucide-react"
import { Section } from "@/components/ui/Section"

const DELIVERY_NODES = [
  {
    title: "Zero-Trust Engineering Centers",
    icon: ShieldAlert,
    desc: "Isolated physical environments in Dallas (HQ), Frankfurt, and Bangalore. Edge control models, telemetry pipelines, and SCADA panels are fully simulated, tested, and validated before field commissioning.",
    stats: "3 Secure Labs Global"
  },
  {
    title: "24/7/365 Follow-the-Sun Operations",
    icon: RefreshCw,
    desc: "Distributed support teams rotate dynamically across timezones. Provides continuous health monitoring, threat analysis, and patch orchestration for critical enterprise telemetry networks.",
    stats: "99.99% Systems SLA"
  },
  {
    title: "Hybrid Deployment & Commissioning",
    icon: Cpu,
    desc: "Seamlessly combining on-site physical instrumentation and commissioning of PLC/SCADA gateways with secure, automated cloud CI/CD software pipelines.",
    stats: "Agile Field Delivery"
  },
  {
    title: "Compliance-Locked Engineering",
    icon: Award,
    desc: "Every line of code and network topology undergoes rigorous security checks. Fully audited and mapped to IEC 62443, NIST SP 800-82, and ISO 27001 frameworks.",
    stats: "Audited System Security"
  }
]

export default function DeliveryModel() {
  return (
    <Section variant="white" containerSize="wide" id="delivery-model" className=" bg-[#0b0f19] text-white relative overflow-hidden">
      {/* Dynamic background network visual grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] bg-[size:24px_24px] opacity-20" />
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-3xl opacity-30 pointer-events-none" />
      
      <div className="w-full relative z-10">
        
        {/* Section Header */}
        <div className="w-full relative z-10 text-center max-w-3xl mb-16">
          <div className="text-xs font-bold text-primary uppercase tracking-wider mb-3 flex items-center gap-1.5 justify-center">
            <Globe2 className="h-3.5 w-3.5 text-primary" />
            Global Delivery Model
          </div>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Global Infrastructure Operations & Delivery
          </h2>
          <p className="text-slate-400 mt-4 text-sm lg:text-base leading-relaxed">
            Our globally coordinated delivery framework combines rigorous safety standards with modern DevOps pipelines to build and maintain business-critical infrastructure.
          </p>
        </div>

        {/* 4-Pillar Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {DELIVERY_NODES.map((node, idx) => {
            const Icon = node.icon
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="flex"
              >
                <Card className="bg-slate-900/40 border border-slate-800 hover:border-primary/40 p-8 rounded-xl flex flex-col justify-between w-full backdrop-blur-md transition-all duration-300 hover:-translate-y-1 group">
                  <div className="space-y-6">
                    {/* Icon and Tag */}
                    <div className="flex justify-between items-center">
                      <div className="w-12 h-12 rounded bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                        {node.stats}
                      </span>
                    </div>

                    <CardHeader className="p-0">
                      <CardTitle className="text-base font-extrabold text-white tracking-tight leading-snug">
                        {node.title}
                      </CardTitle>
                    </CardHeader>

                    <CardContent className="p-0 text-xs text-slate-400 leading-relaxed">
                      {node.desc}
                    </CardContent>
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </div>

      </div>
    </Section>
  )
}
