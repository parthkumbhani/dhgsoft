"use client"

import React, { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import {
  Lightbulb,
  Ruler,
  Cpu,
  Play,
  Activity,
  Award,
  ArrowRight
} from "lucide-react"

const STAGES_DATA = [
  {
    num: "01",
    name: "Strategy",
    title: "Strategy Assessment",
    icon: Lightbulb,
    metric: "98% Alignment",
    progress: 98,
    status: "Optimized",
    color: "bg-blue-500",
    dx: 120, // Desktop coordinates
    dy: 120,
    tx: 80,  // Tablet coordinates
    ty: 270,
    kpi: "Stakeholder Alignment: 100%",
    tech: ["Jira Align", "Miro", "Confluence"],
    capabilities: ["Business Assessment", "Advisory Workshops", "ROI Projections"],
    desc: "Define ambitious digital roadmaps, governance models, and project timelines aligned with core enterprise KPIs and digital capabilities.",
    outcome: "A consistent strategy mapped directly to business objectives and approved for execution.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80"
  },
  {
    num: "02",
    name: "Architecture",
    title: "Architecture & Design",
    icon: Ruler,
    metric: "AI Blueprint",
    progress: 90,
    status: "Verified",
    color: "bg-indigo-500",
    dx: 680,
    dy: 110,
    tx: 140,
    ty: 160,
    kpi: "Design Compliance: 100%",
    tech: ["AWS Systems", "Lucidchart", "Kubernetes"],
    capabilities: ["Cloud Blueprints", "API Integrations", "Security Auditing"],
    desc: "Design scalable cloud-native architectures, API integration layers, and comprehensive data flows to support modern application workloads.",
    outcome: "Audited system blueprints and reference architectures signed off by engineering.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
  },
  {
    num: "03",
    name: "Engineering",
    title: "Engineering & Build",
    icon: Cpu,
    metric: "42 Tasks Active",
    progress: 75,
    status: "Building",
    color: "bg-violet-500",
    dx: 100,
    dy: 300,
    tx: 240,
    ty: 90,
    kpi: "Code Coverage: >92%",
    tech: ["Next.js", "FastAPI", "Docker"],
    capabilities: ["CI/CD Orchestration", "Microservices", "TDD Standards"],
    desc: "Develop enterprise solutions following clean code principles, active test coverage, and automated integration checks in a fast-moving agile workflow.",
    outcome: "Production-ready, highly secure repository build with complete deployment pipelines.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80"
  },
  {
    num: "04",
    name: "Deployment",
    title: "Deployment & Release",
    icon: Play,
    metric: "Auto Deployed",
    progress: 100,
    status: "Complete",
    color: "bg-emerald-500",
    dx: 130,
    dy: 470,
    tx: 360,
    ty: 90,
    kpi: "Downtime during cutover: 0s",
    tech: ["Terraform", "GitHub Actions", "ArgoCD"],
    capabilities: ["Automated Cutover", "Infrastructure-as-code", "Verification Checklists"],
    desc: "Configure infrastructure deployments and perform automated cutovers to live environments with zero user downtime and immediate post-release sanity audits.",
    outcome: "Active production server instances serving users globally across cloud regions.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80"
  },
  {
    num: "05",
    name: "Operations",
    title: "Operations & Support",
    icon: Activity,
    metric: "99.99% Uptime",
    progress: 99,
    status: "Healthy",
    color: "bg-sky-500",
    dx: 670,
    dy: 460,
    tx: 460,
    ty: 160,
    kpi: "SLA Availability: >99.99%",
    tech: ["Datadog", "Prometheus", "PagerDuty"],
    capabilities: ["Telemetry Tracking", "Log Aggregation", "24/7 Remote Ops"],
    desc: "Proactively monitor cloud health, gather system metrics, optimize database structures, and maintain live platform scaling limits.",
    outcome: "Continuous system health status reporting with auto-triggered alerts.",
    image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=1200&q=80"
  },
  {
    num: "06",
    name: "Innovation",
    title: "Continuous Innovation",
    icon: Award,
    metric: "AI Enhanced",
    progress: 85,
    status: "Active",
    color: "bg-amber-500",
    dx: 700,
    dy: 280,
    tx: 520,
    ty: 270,
    kpi: "Process Efficiency: +40%",
    tech: ["TensorFlow", "OpenAI API", "LangChain"],
    capabilities: ["Predictive Analytics", "Feedback Loops", "Automation Enhancements"],
    desc: "Integrate feedback loops, continuous system learning models, and automated business intelligence modules to optimize enterprise software execution.",
    outcome: "Optimized pipelines and direct recommendations for next-generation systems.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200&q=80"
  }
]

const getCurvePath = (x: number, y: number, isTablet: boolean) => {
  const cx = isTablet ? 300 : 400
  const cy = isTablet ? 320 : 300
  
  // Cubic Bezier curve calculation
  const cp1x = x + (cx - x) * 0.5
  const cp1y = y
  const cp2x = cx - (cx - x) * 0.2
  const cp2y = cy
  
  return `M ${x} ${y} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${cx} ${cy}`
}

interface DetailPanelProps {
  activeStage: number;
  className?: string;
}

function DetailPanel({ activeStage, className }: DetailPanelProps) {
  const currentStage = STAGES_DATA[activeStage] || STAGES_DATA[0]
  
  return (
    <div className={`bg-white/85 backdrop-blur-md border border-white/60 shadow-[0_20px_50px_rgba(15,23,42,0.04)] rounded-[24px] p-6 flex flex-col gap-4 overflow-hidden group hover:shadow-[0_25px_60px_-15px_rgba(37,99,235,0.08)] transition-all duration-500 relative ${className}`}>
      <motion.div
        key={activeStage}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="h-full flex flex-col justify-between flex-grow"
      >
        <div>
          {/* Banner Image */}
          <div className="w-full h-[150px] overflow-hidden rounded-xl relative select-none mb-4">
            <img 
              src={currentStage.image} 
              alt={currentStage.title} 
              className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D14]/40 to-transparent" />
          </div>

          {/* Title & Badge */}
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-bold text-[#2563EB] tracking-widest uppercase font-sans">
              STAGE {currentStage.num}
            </span>
            <span className="text-[9px] font-bold bg-[#2563EB]/5 border border-[#2563EB]/15 text-[#2563EB] px-2.5 py-0.5 rounded-full uppercase tracking-wider font-sans">
              {currentStage.name}
            </span>
          </div>

          <h3 className="text-xl font-bold text-[#0F172A] tracking-tight leading-tight mb-2 font-headline">
            {currentStage.title}
          </h3>

          {/* Description */}
          <p className="text-[13px] text-[#64748B] leading-relaxed font-sans mb-4">
            {currentStage.desc}
          </p>

          {/* KPI / Business Outcome Highlight */}
          <div className="bg-[#2563EB]/5 border border-[#2563EB]/10 rounded-[14px] p-3 text-left mb-4">
            <span className="text-[9px] font-bold text-[#2563EB] uppercase tracking-wider block mb-0.5 font-sans">
              Business Outcome & KPI
            </span>
            <p className="text-[12px] text-[#0F172A] font-semibold leading-relaxed font-sans mb-1">
              {currentStage.kpi}
            </p>
            <p className="text-[11.5px] text-[#64748B] leading-relaxed font-sans">
              {currentStage.outcome}
            </p>
          </div>

          {/* Capabilities & Tech Stack Split */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <span className="text-[9px] font-bold text-[#2563EB] uppercase tracking-wider block mb-1.5 font-sans">
                Capabilities
              </span>
              <div className="flex flex-wrap gap-1">
                {currentStage.capabilities.map((cap, idx) => (
                  <span key={idx} className="bg-slate-50 border border-slate-100 text-[10px] font-medium px-2 py-0.5 rounded-md text-slate-600 font-sans">
                    {cap}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <span className="text-[9px] font-bold text-[#2563EB] uppercase tracking-wider block mb-1.5 font-sans">
                Tech Stack
              </span>
              <div className="flex flex-wrap gap-1">
                {currentStage.tech.map((tool, idx) => (
                  <span key={idx} className="bg-blue-50/40 border border-blue-100/30 text-[10px] font-medium px-2 py-0.5 rounded-md text-[#2563EB] font-sans">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Explore CTA */}
        <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-[12px] font-bold text-[#2563EB] cursor-pointer group/btn font-sans w-fit">
          <span>Explore Capability</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
        </div>
      </motion.div>
    </div>
  )
}

export default function ServiceDelivery() {
  const [activeStage, setActiveStage] = useState(0)
  const [hoveredStage, setHoveredStage] = useState<number | null>(null)
  
  const handleStageSelect = (idx: number) => {
    setActiveStage(idx)
  }

  const isAnyHovered = hoveredStage !== null

  return (
    <section id="delivery" className="py-20 bg-[#FAFBFC] border-b border-[rgba(0,0,0,0.06)] relative overflow-hidden flex items-center">
      {/* Subtle engineering grid background */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(15,23,42,0.02)_1.5px,transparent_1.5px)] bg-[size:32px_32px] pointer-events-none" />
      
      {/* Decorative gradient highlights */}
      <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] rounded-full blur-[120px] bg-gradient-to-tr from-blue-500/5 to-transparent pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[500px] h-[500px] rounded-full blur-[120px] bg-gradient-to-bl from-purple-500/5 to-transparent pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10 w-full flex flex-col items-center">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold text-[#2563EB] uppercase tracking-[0.2em] mb-3 block">
            DELIVERY EXCELLENCE
          </span>
          <h2 className="text-[30px] md:text-[38px] font-extrabold text-[#0F172A] tracking-tight leading-tight font-headline">
            From Vision to Sustained Operations
          </h2>
          <p className="text-[#64748B] text-[14.5px] leading-relaxed font-sans mt-2 max-w-xl mx-auto">
            Experience our Enterprise Intelligence Grid—visualizing continuous pipelines managing complex projects.
          </p>
        </div>

        {/* ====================================================== */}
        {/* DESKTOP VIEW: Floating Grid Canvas + Details Panel    */}
        {/* ====================================================== */}
        <div className="hidden lg:flex flex-row items-center justify-between gap-8 w-full h-[600px] mt-4">
          
          {/* Left Side: Dynamic Grid Canvas */}
          <div className="w-[60%] h-full relative shrink-0 select-none">
            
            {/* SVG Connecting Paths */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 800 600">
              {STAGES_DATA.map((stage, idx) => {
                const isHovered = hoveredStage === idx
                const isBlurred = hoveredStage !== null && hoveredStage !== idx
                const path = getCurvePath(stage.dx, stage.dy, false)
                
                return (
                  <g key={idx}>
                    {/* Background path line */}
                    <path
                      d={path}
                      fill="none"
                      stroke={isHovered ? "rgba(37, 99, 235, 0.25)" : "rgba(15, 23, 42, 0.05)"}
                      strokeWidth={isHovered ? 3 : 1.5}
                      className="transition-all duration-500"
                    />
                    
                    {/* Moving data overlay particles */}
                    <motion.path
                      d={path}
                      fill="none"
                      stroke={isHovered ? "#3B82F6" : "rgba(59, 130, 246, 0.45)"}
                      strokeWidth={isHovered ? 2.5 : 1.5}
                      strokeLinecap="round"
                      strokeDasharray="8 24"
                      animate={{
                        strokeDashoffset: [0, -120],
                        opacity: isBlurred ? 0.2 : 0.8
                      }}
                      transition={{
                        strokeDashoffset: {
                          repeat: Infinity,
                          duration: isHovered ? 1.2 : 2.5,
                          ease: "linear"
                        },
                        opacity: { duration: 0.4 }
                      }}
                    />
                  </g>
                )
              })}
            </svg>

            {/* Centered AI Core */}
            <div 
              className="absolute z-20"
              style={{
                left: "400px",
                top: "300px",
                transform: "translate(-50%, -50%)"
              }}
            >
              {/* Pulsing glow aura background */}
              <motion.div
                animate={{
                  scale: isAnyHovered ? 1.2 : 1,
                  opacity: isAnyHovered ? 0.95 : 0.7
                }}
                transition={{ type: "spring", stiffness: 100, damping: 15 }}
                className="absolute inset-[-40px] rounded-full bg-blue-500/10 blur-2xl pointer-events-none z-0"
              />
              
              {/* Rotating inner dashed ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
                className="absolute inset-[-25px] rounded-full border border-dashed border-blue-400/20 z-10 pointer-events-none"
              />
              
              {/* Rotating outer ring with indicator dot */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
                className="absolute inset-[-40px] rounded-full border border-blue-500/10 z-10 pointer-events-none"
              >
                <span className="absolute top-1 left-1/2 w-2 h-2 rounded-full bg-blue-500/40 transform -translate-x-1/2" />
              </motion.div>

              {/* Main Core Container */}
              <div className="w-[155px] h-[155px] rounded-full bg-white/85 backdrop-blur-md border border-white/80 shadow-[0_12px_45px_rgba(15,23,42,0.05)] flex flex-col items-center justify-center text-center p-4 z-20">
                <span className="text-[8px] font-bold text-[#2563EB] tracking-[0.18em] uppercase mb-1">
                  AI CORE
                </span>
                <h4 className="text-[13px] font-extrabold text-[#0F172A] leading-tight font-headline">
                  DELIVERY ENGINE
                </h4>
                <span className="text-[8px] text-[#64748B] font-medium mt-1 font-sans">
                  Enterprise Grid
                </span>
              </div>
            </div>

            {/* Orbiting Modules */}
            {STAGES_DATA.map((stage, idx) => {
              const Icon = stage.icon
              const isHovered = hoveredStage === idx
              const isBlurred = hoveredStage !== null && hoveredStage !== idx
              
              return (
                <motion.div
                  key={idx}
                  onHoverStart={() => {
                    setHoveredStage(idx)
                    setActiveStage(idx)
                  }}
                  onHoverEnd={() => setHoveredStage(null)}
                  onClick={() => handleStageSelect(idx)}
                  animate={{
                    y: isHovered ? -5 : [0, -6, 0] // Gentle floating when not hovered
                  }}
                  transition={{
                    y: {
                      repeat: isHovered ? 0 : Infinity,
                      duration: 3 + idx * 0.4,
                      ease: "easeInOut"
                    }
                  }}
                  className="absolute w-[185px] h-[102px] bg-white/75 backdrop-blur-md border border-white/60 shadow-[0_8px_30px_rgba(15,23,42,0.03)] rounded-[22px] p-3 flex flex-col justify-between cursor-pointer select-none z-10 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  style={{
                    left: `${stage.dx}px`,
                    top: `${stage.dy}px`,
                    transform: isHovered ? "translate(-50%, -50%) scale(1.06)" : "translate(-50%, -50%)",
                    filter: isBlurred ? "blur(1.5px)" : "none",
                    opacity: isBlurred ? 0.45 : 1,
                    zIndex: isHovered ? 30 : 10
                  }}
                >
                  <div className="flex items-center justify-between w-full">
                    {/* Icon container */}
                    <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 text-[#2563EB] flex items-center justify-center group-hover/mod:bg-[#2563EB] group-hover/mod:text-white transition-colors duration-300">
                      <Icon className="w-4.5 h-4.5" />
                    </div>
                    
                    {/* Blinking Live Indicator */}
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                  </div>

                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-extrabold text-slate-800 tracking-tight font-sans">
                        {stage.name}
                      </span>
                      <span className="text-[8.5px] font-semibold text-slate-400 font-sans">
                        {stage.metric.split(" ")[0]}
                      </span>
                    </div>
                    {/* Progress slider */}
                    <div className="w-full bg-slate-100 rounded-full h-1 mt-1 overflow-hidden">
                      <div 
                        className="bg-blue-500 h-1 rounded-full transition-all duration-1000" 
                        style={{ width: `${stage.progress}%` }} 
                      />
                    </div>
                  </div>
                </motion.div>
              )
            })}

          </div>

          {/* Right Side: Command Detail Panel */}
          <DetailPanel activeStage={activeStage} className="w-[40%] h-[550px]" />

        </div>

        {/* ====================================================== */}
        {/* TABLET VIEW: Semi-circular Layout + Details Panel     */}
        {/* ====================================================== */}
        <div className="hidden md:flex lg:hidden flex-col items-center gap-8 w-full mt-4">
          
          {/* Semi-circular Orbit Canvas */}
          <div className="w-[600px] h-[400px] relative shrink-0 mx-auto select-none">
            
            {/* SVG Connecting Paths */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 600 400">
              {STAGES_DATA.map((stage, idx) => {
                const isActive = activeStage === idx
                const path = getCurvePath(stage.tx, stage.ty, true)
                
                return (
                  <g key={idx}>
                    <path
                      d={path}
                      fill="none"
                      stroke={isActive ? "rgba(37, 99, 235, 0.2)" : "rgba(15, 23, 42, 0.04)"}
                      strokeWidth={isActive ? 2.5 : 1.5}
                      className="transition-all duration-300"
                    />
                    <motion.path
                      d={path}
                      fill="none"
                      stroke={isActive ? "#3B82F6" : "rgba(59, 130, 246, 0.4)"}
                      strokeWidth={isActive ? 2 : 1}
                      strokeLinecap="round"
                      strokeDasharray="6 20"
                      animate={{
                        strokeDashoffset: [0, -100]
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: isActive ? 1.5 : 3.5,
                        ease: "linear"
                      }}
                    />
                  </g>
                )
              })}
            </svg>

            {/* Bottom-Centered AI Core */}
            <div 
              className="absolute z-20"
              style={{
                left: "300px",
                top: "320px",
                transform: "translate(-50%, -50%)"
              }}
            >
              {/* Aura */}
              <div className="absolute inset-[-30px] rounded-full bg-blue-500/10 blur-xl pointer-events-none z-0" />
              
              {/* Concentric rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
                className="absolute inset-[-15px] rounded-full border border-dashed border-blue-400/20 z-10 pointer-events-none"
              />

              {/* Core Box */}
              <div className="w-[120px] h-[120px] rounded-full bg-white/85 backdrop-blur-md border border-white/80 shadow-[0_8px_30px_rgba(15,23,42,0.04)] flex flex-col items-center justify-center text-center p-3 z-20">
                <span className="text-[7.5px] font-bold text-[#2563EB] tracking-wider uppercase mb-0.5">
                  AI CORE
                </span>
                <h4 className="text-[11.5px] font-extrabold text-[#0F172A] leading-tight font-headline">
                  ENGINE
                </h4>
              </div>
            </div>

            {/* Surrounding Arch Widgets */}
            {STAGES_DATA.map((stage, idx) => {
              const Icon = stage.icon
              const isActive = activeStage === idx
              
              return (
                <div
                  key={idx}
                  onClick={() => handleStageSelect(idx)}
                  className={`absolute w-[145px] h-[86px] bg-white/75 backdrop-blur-md border rounded-[20px] p-2.5 flex flex-col justify-between cursor-pointer select-none z-10 transition-all duration-300 ${
                    isActive 
                      ? "border-[#2563EB] shadow-md scale-105" 
                      : "border-white/60 shadow-sm"
                  }`}
                  style={{
                    left: `${stage.tx}px`,
                    top: `${stage.ty}px`,
                    transform: "translate(-50%, -50%)"
                  }}
                >
                  <div className="flex items-center justify-between w-full">
                    <div className="w-7 h-7 rounded-lg bg-blue-500/10 border border-blue-500/20 text-[#2563EB] flex items-center justify-center">
                      <Icon className="w-4 h-4" />
                    </div>
                    
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                    </span>
                  </div>

                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold text-slate-800 tracking-tight font-sans">
                        {stage.name}
                      </span>
                      <span className="text-[8px] font-bold text-slate-400 font-sans">
                        {stage.metric.split(" ")[0]}
                      </span>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-0.5 mt-0.5 overflow-hidden">
                      <div className="bg-blue-500 h-0.5 rounded-full" style={{ width: `${stage.progress}%` }} />
                    </div>
                  </div>
                </div>
              )
            })}

          </div>

          {/* Details Card */}
          <DetailPanel activeStage={activeStage} className="w-full max-w-[600px] h-auto min-h-[500px]" />

        </div>

        {/* ====================================================== */}
        {/* MOBILE VIEW: Horizontal Swiper + Details Panel        */}
        {/* ====================================================== */}
        <div className="block md:hidden w-full mt-4">
          
          {/* Horizontal widget scroller */}
          <div className="flex overflow-x-auto pb-4 gap-4 no-scrollbar scroll-smooth w-full px-1">
            {STAGES_DATA.map((stage, idx) => {
              const Icon = stage.icon
              const isActive = activeStage === idx
              
              return (
                <button
                  key={idx}
                  onClick={() => handleStageSelect(idx)}
                  className={`shrink-0 w-[170px] h-[92px] bg-white/75 backdrop-blur-md border rounded-[22px] p-3 flex flex-col justify-between text-left select-none transition-all duration-300 ${
                    isActive 
                      ? "border-[#2563EB] bg-[#2563EB]/5 shadow-md scale-105" 
                      : "border-white/60 shadow-sm"
                  }`}
                >
                  <div className="flex items-center justify-between w-full">
                    <div className="w-7 h-7 rounded-lg bg-blue-500/10 border border-blue-500/20 text-[#2563EB] flex items-center justify-center">
                      <Icon className="w-4 h-4" />
                    </div>
                    
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                    </span>
                  </div>
                  
                  <div>
                    <span className="text-[8px] font-bold text-slate-400 block leading-none mb-0.5">STAGE 0{idx + 1}</span>
                    <span className="text-[12px] font-bold text-slate-900 leading-none">{stage.name}</span>
                  </div>
                </button>
              )
            })}
          </div>

          {/* Details Card */}
          <div className="mt-6 w-full">
            <DetailPanel activeStage={activeStage} className="h-auto min-h-[500px]" />
          </div>

        </div>

      </div>
    </section>
  )
}
