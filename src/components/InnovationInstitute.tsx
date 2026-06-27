"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { 
  BookOpen, 
  Terminal, 
  Users, 
  ArrowUpRight, 
  Sparkles,
  Lock,
  Cpu,
  Database,
  ShieldCheck
} from "lucide-react"

const PILLARS_DATA = [
  {
    title: "Academic Research & Publications",
    desc: "Collaborative white papers and case studies on industrial cyber-safety standards (IEC 62443) and edge ML models.",
    icon: BookOpen,
  },
  {
    title: "Enablement & Virtual Sandboxes",
    desc: "Hands-on virtual code sandboxes, developer sandboxes, and structured bootcamps for edge telemetry systems.",
    icon: Terminal,
  },
  {
    title: "Hyperscaler & OEM Programs",
    desc: "Shared alignment architectures and capability frameworks with leading cloud hyperscalers and automation vendors.",
    icon: Users,
  }
]

interface ConsoleTabContent {
  title: string
  logs: string[]
}

const CONSOLE_TABS: Record<string, ConsoleTabContent> = {
  telemetry: {
    title: "Telemetry Ingestion API",
    logs: [
      "[CONN] Initializing secure socket on AHM_PI_01...",
      "[CONN] Connected via TLS 1.3 // Port 8883",
      "[DATA] Streaming SCADA tags: [VIB_01: 4.2mm/s, TEMP_01: 78.4C]",
      "[DATA] Ingesting packet: Vadodara Plant Edge ➔ Syncing...",
      "[OK] 12 channels replicated to Unified Data Lake successfully."
    ]
  },
  anomaly: {
    title: "ML Anomaly Detection",
    logs: [
      "[ML] Pulling last 24H data from AVEVA PI Lake...",
      "[ML] Feeding neural network weights: anomaly detection active.",
      "[INFO] Precision check: 99.8% model validation accuracy.",
      "[WARN] Subtle pump cavitation pattern identified on Site B.",
      "[OK] Alert dispatched to CXO Command Core dashboard."
    ]
  },
  security: {
    title: "IEC-62443 Compliance Audit",
    logs: [
      "[SEC] Initializing network topology auditor...",
      "[SEC] Scanning edge node certificates against IEC 62443.",
      "[SEC] Verifying micro-segmentation boundaries: NIST SP 800-82.",
      "[SEC] Encryption check: payload transport TLS 1.3 AES-256.",
      "[OK] Audit complete. Zero-trust configuration: 100% compliant."
    ]
  }
}

export default function InnovationInstitute() {
  const [activeConsoleTab, setActiveConsoleTab] = useState<"telemetry" | "anomaly" | "security">("telemetry")
  const [displayedLogs, setDisplayedLogs] = useState<string[]>([])
  const [logIndex, setLogIndex] = useState(0)

  // Loop to simulate typing logs in real-time
  useEffect(() => {
    setDisplayedLogs([])
    setLogIndex(0)
  }, [activeConsoleTab])

  useEffect(() => {
    const currentTabLogs = CONSOLE_TABS[activeConsoleTab].logs
    if (logIndex < currentTabLogs.length) {
      const timer = setTimeout(() => {
        setDisplayedLogs(prev => [...prev, currentTabLogs[logIndex]])
        setLogIndex(prev => prev + 1)
      }, 600)
      return () => clearTimeout(timer)
    }
  }, [logIndex, activeConsoleTab])

  return (
    <section id="innovation-institute" className="py-14 bg-[#0b0f19] text-white relative border-y border-slate-900 overflow-hidden">
      {/* Background radial matrix grids */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] bg-[size:32px_32px] opacity-15 pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Sandbox Console Interactive Panel */}
          <div className="lg:col-span-6 flex justify-center w-full relative">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full max-w-[550px] bg-slate-950 border border-slate-900 rounded-[28px] p-5 shadow-2xl flex flex-col justify-between overflow-hidden select-none min-h-[420px]"
            >
              {/* Header */}
              <div className="flex items-center justify-between border-b border-slate-900 pb-3.5 mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#C30072] animate-pulse" />
                  <span className="text-[9px] font-mono font-bold text-slate-500 uppercase tracking-widest pl-1">
                    VIRTUAL_SANDBOX // R&D_ENV
                  </span>
                </div>
                <span className="text-[8px] font-mono text-[#fbc00e] bg-[#fbc00e]/5 border border-[#fbc00e]/15 px-2 py-0.5 rounded font-bold uppercase">
                  ACTIVE PIPELINE
                </span>
              </div>

              {/* Console Tabs */}
              <div className="grid grid-cols-3 gap-1.5 p-1 bg-slate-900/60 rounded-xl border border-slate-900/80 mb-4">
                {(["telemetry", "anomaly", "security"] as const).map((tabId) => {
                  const isActive = activeConsoleTab === tabId
                  return (
                    <button
                      key={tabId}
                      onClick={() => setActiveConsoleTab(tabId)}
                      className={`py-2 px-2.5 rounded-lg text-center font-mono text-[9px] font-bold uppercase transition-all ${
                        isActive 
                          ? "bg-slate-950 text-[#fbc00e] border border-slate-800 shadow" 
                          : "text-slate-500 hover:text-slate-355"
                      }`}
                    >
                      {tabId}
                    </button>
                  )
                })}
              </div>

              {/* Shell output area */}
              <div className="bg-slate-950/90 border border-slate-900 rounded-xl p-4 flex-grow flex flex-col justify-between font-mono text-[10px] min-h-[220px] text-left">
                <div className="space-y-2.5">
                  <div className="flex justify-between items-center text-slate-600 text-[8px] border-b border-slate-900/60 pb-1.5">
                    <span>CONSOLE STATE // STREAMING</span>
                    <span>TAPPED: Vadodara Edge</span>
                  </div>
                  
                  <div className="space-y-2 text-slate-300">
                    <AnimatePresence>
                      {displayedLogs.map((log, i) => {
                        const isOk = log.startsWith("[OK]")
                        const isWarn = log.startsWith("[WARN]")
                        const isSec = log.startsWith("[SEC]")
                        return (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -5 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.2 }}
                            className={`leading-relaxed ${
                              isOk 
                                ? "text-emerald-400 font-bold" 
                                : isWarn 
                                  ? "text-[#fbc00e] font-bold" 
                                  : isSec 
                                    ? "text-[#C30072]" 
                                    : "text-slate-400"
                            }`}
                          >
                            {log}
                          </motion.div>
                        )
                      })}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Simulated telemetry parameters */}
                <div className="flex justify-between items-center border-t border-slate-900/80 pt-3 mt-4 text-[8px] text-slate-500">
                  <span className="flex items-center gap-1"><Lock className="w-3 h-3 text-[#C30072]" /> AES-256 Payload</span>
                  <span className="flex items-center gap-1"><Cpu className="w-3 h-3 text-blue-500" /> R&D Hub: Online</span>
                </div>
              </div>

            </motion.div>
          </div>

          {/* Right Column - Title and Pillars */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#C30072] uppercase tracking-widest px-3 py-1 rounded-full bg-[#C30072]/10 border border-[#C30072]/15 mb-4 font-sans">
              <Sparkles className="h-3.5 w-3.5 text-[#C30072]" />
              DHG Innovation Institute
            </div>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-white tracking-tight font-headline">
              Advancing Heavy Operations Through Collaborative R&D
            </h2>
            <div className="h-[3px] w-16 bg-gradient-to-r from-[#C30072] via-[#E10088] to-[#F36B2A] mt-4 mb-8 rounded-full" />
            
            {/* Pillars stack */}
            <div className="space-y-4 w-full">
              {PILLARS_DATA.map((pillar, idx) => {
                const Icon = pillar.icon
                return (
                  <div 
                    key={idx}
                    className="flex items-start gap-4 p-4 rounded-2xl bg-slate-950/40 border border-slate-900 hover:border-slate-800 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 text-slate-500 flex items-center justify-center shrink-0 transition-colors group-hover:bg-[#C30072]/10 group-hover:border-[#C30072]/20 group-hover:text-[#fbc00e]">
                      <Icon className="h-4.5 w-4.5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-extrabold text-white uppercase tracking-wide font-headline">
                        {pillar.title}
                      </h4>
                      <p className="text-[11px] text-slate-400 leading-relaxed font-sans font-medium mt-1">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Action button */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-10"
            >
              <Link href="/innovation-institute" className="inline-block">
                <Button className="font-bold rounded-xl bg-gradient-to-r from-primary to-secondary hover:from-primary hover:to-secondary hover:-translate-y-[2px] active:scale-[0.98] text-white px-8 py-4 h-auto shadow-lg shadow-primary/20 transition-all duration-300 border-0 flex items-center gap-2 cursor-pointer">
                  Access R&D Portal
                  <ArrowUpRight className="h-4.5 w-4.5" />
                </Button>
              </Link>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
