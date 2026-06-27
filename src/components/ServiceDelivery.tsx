'use client';

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import {
  Target,
  Compass,
  Cpu,
  Play,
  Monitor,
  Award,
  ArrowRight,
  TrendingUp,
  Map,
  BarChart3,
  Layout,
  Users,
  GitBranch,
  Settings,
  Plug,
  ShieldCheck,
  Zap,
  Package,
  RefreshCw,
  GraduationCap,
  Share2,
  Lightbulb,
  Check,
  Trophy,
  LucideIcon
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   STAGES DATA — 7 stages with specific industrial visuals & features
   ═══════════════════════════════════════════════════════════════ */

interface FeatureBlock {
  icon: LucideIcon;
  title: string;
  desc: string;
}

interface StageItem {
  num: string;
  name: string;
  icon: LucideIcon;
  desc: string;
  image: string;
  badgeSubtitle: string;
  features: FeatureBlock[];
}

const STAGES_DATA: StageItem[] = [
  {
    num: "01",
    name: "Strategy",
    icon: Target,
    desc: "Define business objectives, transformation roadmaps, governance models, and measurable outcomes.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
    badgeSubtitle: "Assess • Align • Blueprint",
    features: [
      { icon: TrendingUp, title: "Goal Alignment", desc: "Align business vision with measurable digital outcomes." },
      { icon: Map, title: "Roadmap Planning", desc: "Develop scalable implementation strategies." },
      { icon: BarChart3, title: "Governance & KPI", desc: "Track execution using measurable business metrics." }
    ]
  },
  {
    num: "02",
    name: "Design",
    icon: Compass,
    desc: "Create user-centered experiences, solution architectures, operating models, and implementation plans.",
    image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1200&q=80",
    badgeSubtitle: "Model • Architect • Plan",
    features: [
      { icon: Layout, title: "Architecture Design", desc: "Build resilient cloud-native and edge architectures." },
      { icon: Users, title: "Workflow Mapping", desc: "Blueprint operator experience and system workflows." },
      { icon: GitBranch, title: "Data Standards", desc: "Define secure protocols and information schemas." }
    ]
  },
  {
    num: "03",
    name: "Build",
    icon: Cpu,
    desc: "Develop, configure, integrate, and test digital solutions using agile and quality-focused delivery practices.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80",
    badgeSubtitle: "Engineer • Code • Integrate",
    features: [
      { icon: Settings, title: "System Integration", desc: "Assemble factory automation software and core databases." },
      { icon: Plug, title: "API & Middleware", desc: "Establish SCADA, PLC, and enterprise connections." },
      { icon: ShieldCheck, title: "Quality Verification", desc: "Execute factory testing and pipeline validations." }
    ]
  },
  {
    num: "04",
    name: "Deploy",
    icon: Play,
    desc: "Launch solutions efficiently through structured release management, change management, and adoption planning.",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80",
    badgeSubtitle: "Launch • Validate • Adapt",
    features: [
      { icon: Zap, title: "Plant Commissioning", desc: "Supervise deployment, validation, and physical startup." },
      { icon: Package, title: "Release Operations", desc: "Manage deployment version control." },
      { icon: RefreshCw, title: "Change Alignment", desc: "Train operations personnel and handle site transitions." }
    ]
  },
  {
    num: "05",
    name: "Operate",
    icon: Monitor,
    desc: "Maintain, monitor, optimize, and support business-critical systems to ensure reliability and performance.",
    image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=1200&q=80",
    badgeSubtitle: "Monitor • Optimize • Defend",
    features: [
      { icon: Monitor, title: "Dashboard Telemetry", desc: "Monitor SCADA data and performance analytics." },
      { icon: Settings, title: "Predictive Ops", desc: "Apply historical telemetry to forecast maintenance." },
      { icon: ShieldCheck, title: "Cyber Defenses", desc: "Enforce OT network isolation per standard IEC 62443." }
    ]
  },
  {
    num: "06",
    name: "Enable",
    icon: Award,
    desc: "Drive continuous improvement through training, knowledge transfer, capability building, and innovation programs that empower organizations to sustain operational excellence.",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1200&q=80",
    badgeSubtitle: "Empower • Educate • Elevate",
    features: [
      { icon: GraduationCap, title: "Skill Engineering", desc: "Deliver hands-on training to engineering teams." },
      { icon: Share2, title: "Knowledge Assets", desc: "Package runtime protocols and capture system details." },
      { icon: Lightbulb, title: "Innovation Loops", desc: "Drive incremental upgrades and system expansions." }
    ]
  },
  {
    num: "07",
    name: "Business Outcome",
    icon: Trophy,
    desc: "A consistent, scalable approach that transforms strategy into sustainable business value and operational excellence.",
    image: "https://images.unsplash.com/photo-1581091870622-0c3ae06d507b?auto=format&fit=crop&w=1200&q=80",
    badgeSubtitle: "Value • Scale • Sustainability",
    features: [
      { icon: Check, title: "Faster Delivery", desc: "Accelerate time-to-market using pre-built engineering accelerators." },
      { icon: Check, title: "Lower Risk", desc: "Ensure business continuity with rigorous validation protocols." },
      { icon: Check, title: "Operational Excellence", desc: "Maximize asset performance through real-time SCADA telemetry." },
      { icon: Check, title: "Continuous Innovation", desc: "Maintain digital leadership via regular feedback loops." }
    ]
  }
];

export default function ServiceDelivery() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const activeStage = STAGES_DATA[activeIdx];

  const premiumTransition = {
    duration: 0.75,
    ease: [0.22, 1, 0.36, 1] as const
  };

  const buttonText = activeIdx === 6 ? "Explore Success" : "Learn More";

  return (
    <motion.section
      ref={sectionRef}
      id="delivery"
      animate={
        isInView
          ? { opacity: 1, filter: 'blur(0px)', scale: 1 }
          : { opacity: 0, filter: 'blur(8px)', scale: 0.98 }
      }
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }}
      className="relative overflow-hidden border-b border-[#ECECEC]"
      style={{
        background: '#FCFCFD',
        paddingTop: 'clamp(40px, 5vh, 72px)',
        paddingBottom: 'clamp(40px, 5vh, 72px)',
      }}
    >
      {/* Subtle blueprint drawing lines and tiny dots */}
      <div
        className="absolute inset-0 pointer-events-none z-0 opacity-15"
        style={{
          backgroundImage: `
            linear-gradient(rgba(15, 23, 42, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(15, 23, 42, 0.02) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none z-0 opacity-15"
        style={{
          backgroundImage: 'radial-gradient(rgba(15, 23, 42, 0.03) 1px, transparent 1px)',
          backgroundSize: '25px 25px',
        }}
      />

      {/* Subtle Engineering Blueprint Diagonal Lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-[0.03] select-none" xmlns="http://www.w3.org/2000/svg">
        <line x1="0" y1="10%" x2="100%" y2="10%" stroke="#0F172A" strokeWidth="1" strokeDasharray="5,5" />
        <line x1="0" y1="90%" x2="100%" y2="90%" stroke="#0F172A" strokeWidth="1" strokeDasharray="5,5" />
        <path d="M 50 100 L 150 100 M 100 50 L 100 150" stroke="#0F172A" strokeWidth="1" />
      </svg>

      {/* Decorative Technical Labels for Digital Command Center Feel */}
      <div className="absolute top-8 left-8 text-slate-400/40 font-mono text-[9px] pointer-events-none select-none tracking-widest hidden md:block">
        [ DHG_DELIVERY_CONSOLE_V2.0 ]
      </div>
      <div className="absolute top-8 right-8 text-slate-400/40 font-mono text-[9px] pointer-events-none select-none tracking-widest hidden md:block">
        SYS_LIFECYCLE: ACTIVE
      </div>

      {/* Barely visible floating particles */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-[2px] h-[2px] rounded-full bg-[#8C123B]/30"
            style={{
              left: `${15 + i * 14}%`,
              top: `${20 + (i * 12) % 60}%`,
            }}
            animate={{
              y: [0, -45, 0],
              x: [0, 10, 0],
              opacity: [0.1, 0.4, 0.1],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Soft radial glow behind the center image card on desktop */}
      <div
        className="absolute pointer-events-none z-0 hidden lg:block"
        style={{
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(140,18,59,0.03) 0%, rgba(245,158,11,0.005) 60%, transparent 85%)',
          filter: 'blur(75px)',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      />

      {/* Soft moving gradient light behind right active content */}
      <motion.div
        className="absolute pointer-events-none z-0 hidden lg:block"
        style={{
          width: '350px',
          height: '350px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(140,18,59,0.015) 0%, transparent 70%)',
          filter: 'blur(60px)',
          right: '5%',
          top: '40%',
        }}
        animate={{
          y: [-25, 25, -25],
          x: [-15, 15, -15],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="max-w-[1700px] mx-auto px-6 md:px-10 lg:px-16 relative z-10">
        
        {/* ── Section Header ── */}
        <div className="flex flex-col w-full text-left mb-14 lg:mb-18">
          <span
            className="font-bold uppercase block mb-3 font-sans tracking-[0.25em]"
            style={{
              fontSize: 11,
              color: '#8C123B',
            }}
          >
            DELIVERY EXCELLENCE
          </span>
          <h2
            className="font-extrabold tracking-tight text-[#0F172A] mb-4 font-headline"
            style={{
              fontSize: 'clamp(28px, 3.2vw, 46px)',
              lineHeight: 1.1,
            }}
          >
            From Strategy to Sustained Operations
          </h2>
          <p
            className="font-sans text-slate-500 max-w-[700px]"
            style={{
              fontSize: 15.5,
              lineHeight: 1.7,
            }}
          >
            Our delivery model supports organizations across the entire digital transformation lifecycle, ensuring seamless execution from initial vision through long-term operational success.
          </p>
        </div>

        {/* ── Outer Premium Container ── */}
        <motion.div
          key={activeIdx}
          animate={{
            y: [2, 0, 2],
            boxShadow: [
              '0px 20px 50px rgba(10, 12, 18, 0.025)',
              '0px 25px 60px rgba(10, 12, 18, 0.04)',
              '0px 20px 50px rgba(10, 12, 18, 0.025)'
            ]
          }}
          transition={premiumTransition}
          className="relative w-full rounded-[30px] border border-[#ECECEC] bg-white/40 backdrop-blur-md p-6 lg:p-8 mb-16 lg:mb-20 overflow-hidden"
        >
          {/* Subtle animated gradient line strictly on the top edge */}
          <div className="absolute top-0 left-0 right-0 h-[4px] overflow-hidden rounded-t-[30px] z-20">
            <motion.div
              className="w-[200%] h-full"
              style={{
                background: 'linear-gradient(90deg, #8C123B 0%, #C2185B 25%, #F59E0B 50%, #C2185B 75%, #8C123B 100%)',
              }}
              animate={{
                x: ['0%', '-50%'],
              }}
              transition={{
                repeat: Infinity,
                duration: 10,
                ease: 'linear',
              }}
            />
          </div>

          <div className="flex flex-col lg:flex-row gap-8 items-stretch z-10 relative">
            
            {/* COLUMN 1: LEFT DELIVERY NAVIGATION (32% Width on Desktop) */}
            <div className="w-full lg:w-[32%] flex flex-col gap-4 justify-center relative py-4 px-2">
              
              {/* Background timeline line running behind cards (ends exactly at Stage 07 center) */}
              <div className="absolute left-[36px] top-[38px] bottom-[38px] w-[1.5px] bg-[#ECECEC] z-0 pointer-events-none" />

              {/* Filled active timeline line (ends exactly at Stage 07 center when active) */}
              <motion.div
                className="absolute left-[36px] top-[38px] w-[1.5px] bg-gradient-to-b from-[#8C123B] via-[#C2185B] to-[#F59E0B] z-0 pointer-events-none origin-top"
                style={{ height: 'calc(100% - 76px)' }}
                animate={{
                  scaleY: activeIdx / 6
                }}
                transition={premiumTransition}
              />

              {STAGES_DATA.map((stage, idx) => {
                const Icon = stage.icon;
                const isActive = activeIdx === idx;
                const isHovered = hoveredIdx === idx;
                
                return (
                  <motion.div
                    key={idx}
                    onClick={() => setActiveIdx(idx)}
                    onMouseEnter={() => setHoveredIdx(idx)}
                    onMouseLeave={() => setHoveredIdx(null)}
                    className="w-full relative z-10"
                    animate={{
                      x: isActive ? 8 : 0,
                      scale: isActive ? 1.03 : 1.0,
                    }}
                    transition={premiumTransition}
                  >
                    <div
                      className={`relative flex items-center justify-between p-4 pl-12 pr-5 rounded-[18px] cursor-pointer select-none transition-all duration-300 border ${
                        isActive
                          ? 'border-transparent bg-white shadow-md shadow-[#8C123B]/5'
                          : isHovered
                          ? 'border-[#ECECEC] bg-white shadow-sm'
                          : 'border-[#ECECEC] bg-white/70 backdrop-blur-sm shadow-sm'
                      }`}
                    >
                      {/* Animated gradient card border outline */}
                      {isActive && (
                        <motion.div
                          layoutId="activeCardBorder"
                          className="absolute inset-0 rounded-[18px] pointer-events-none z-20"
                          style={{
                            border: '1.5px solid transparent',
                            background: 'linear-gradient(135deg, #8C123B, #F59E0B) border-box',
                            WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
                            WebkitMaskComposite: 'destination-out',
                            maskComposite: 'exclude',
                          }}
                          transition={premiumTransition}
                        />
                      )}

                      {/* Glowing vertical left status indicator bar */}
                      {isActive ? (
                        <motion.div
                          layoutId="activeVerticalIndicator"
                          className="absolute left-[-1.5px] top-3.5 bottom-3.5 w-[3.5px] bg-gradient-to-b from-[#8C123B] to-[#F59E0B] rounded-r-full z-30 shadow-sm shadow-[#8C123B]/30"
                          transition={premiumTransition}
                        />
                      ) : isHovered ? (
                        <motion.div
                          layoutId="hoverVerticalIndicator"
                          className="absolute left-[-1.5px] top-[25%] bottom-[25%] w-[2.5px] bg-gradient-to-b from-[#8C123B]/50 to-[#F59E0B]/50 rounded-r-full z-20"
                          transition={premiumTransition}
                        />
                      ) : null}

                      <div className="flex items-center gap-4 relative z-10">
                        {/* Icon Wrapper (gradient circle on active) */}
                        <div className="relative">
                          {isActive && (
                            <motion.div
                              layoutId={`iconGlow-${idx}`}
                              className="absolute inset-[-6px] rounded-full filter blur-[6px] pointer-events-none z-0"
                              style={{
                                background: 'radial-gradient(circle, rgba(140,18,59,0.35) 0%, rgba(245,158,11,0.1) 60%, transparent 100%)',
                              }}
                              transition={premiumTransition}
                            />
                          )}
                          <motion.div
                            animate={{
                              rotate: isHovered && !isActive ? 6 : 0,
                            }}
                            transition={{ duration: 0.3, ease: 'easeOut' }}
                            className={`w-9 h-9 rounded-full flex items-center justify-center relative z-10 transition-all duration-300 ${
                              isActive
                                ? 'bg-gradient-to-br from-[#8C123B] to-[#F59E0B] text-white shadow-md shadow-[#8C123B]/20 scale-[1.08]'
                                : 'bg-slate-100 text-slate-400'
                            }`}
                          >
                            <Icon className="w-4.5 h-4.5" />
                          </motion.div>
                        </div>
                        
                        <span
                          className={`font-sans transition-colors duration-300 ${
                            isActive ? 'font-bold text-[#0F172A]' : 'font-semibold text-slate-600'
                          }`}
                          style={{ fontSize: 13.5 }}
                        >
                          {stage.name}
                        </span>
                      </div>

                      <span
                        className={`text-[11px] font-bold font-sans transition-colors duration-300 relative z-10 ${
                          isActive ? 'text-[#8C123B] font-extrabold' : 'text-slate-400'
                        }`}
                      >
                        {stage.num}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* COLUMN 2: CENTER HERO IMAGE (38% Width on Desktop) */}
            <div className="w-full lg:w-[38%] relative overflow-hidden min-h-[440px] lg:min-h-auto rounded-[24px] shadow-md border border-[#ECECEC] bg-slate-900 flex-grow z-10">
              
              {/* Premium top border animation traveling once across top edge on transition */}
              <div className="absolute top-0 left-0 right-0 h-[3.5px] overflow-hidden z-20">
                <motion.div
                  key={`border-sweep-${activeIdx}`}
                  className="h-full"
                  style={{
                    width: '200%',
                    background: 'linear-gradient(90deg, #9D174D 0%, #F97316 50%, #9D174D 100%)',
                  }}
                  initial={{ x: '-100%' }}
                  animate={{ x: '0%' }}
                  transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] as const }}
                />
              </div>

              {/* Layered Crossfade Morphing Images */}
              <AnimatePresence mode="popLayout">
                <motion.img
                  key={activeIdx}
                  src={activeStage.image}
                  alt={activeStage.name}
                  initial={{ opacity: 0, scale: 1.03, filter: 'blur(4px)' }}
                  animate={{ opacity: 1, scale: 1.0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, scale: 1.03, filter: 'blur(4px)' }}
                  transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] as const }}
                  className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
                />
              </AnimatePresence>

              {/* Morphing dark overlay layer pulsing to 15% opacity on transition */}
              <motion.div
                key={`dark-pulse-${activeIdx}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.15, 0] }}
                transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] as const }}
                className="absolute inset-0 bg-slate-950 pointer-events-none z-10"
              />

              {/* Static Bottom Dark overlay for text readability */}
              <div
                className="absolute inset-0 pointer-events-none z-10"
                style={{
                  background: 'linear-gradient(to top, rgba(15,23,42,0.8) 0%, rgba(15,23,42,0.15) 50%, transparent 80%)',
                }}
              />

              {/* Bottom-left Badge */}
              <div className="absolute bottom-6 left-6 z-20 flex flex-col gap-1 text-left">
                <span className="bg-[#8C123B]/85 backdrop-blur-sm text-white px-2.5 py-0.5 rounded text-[9.5px] font-extrabold tracking-wider uppercase w-fit shadow">
                  {activeStage.name.toUpperCase()} EXCELLENCE
                </span>
                <span className="text-[9px] text-slate-300 font-medium tracking-wide">
                  {activeStage.badgeSubtitle}
                </span>
              </div>
            </div>

            {/* COLUMN 3: RIGHT PREMIUM GLASS CONTENT PANEL (30% Width on Desktop) */}
            <div className="w-full lg:w-[30%] p-6 lg:p-7 flex flex-col justify-between relative bg-white/82 backdrop-blur-md rounded-[24px] border border-white/50 shadow-md overflow-hidden min-h-[500px] z-10">
              
              <AnimatePresence mode="wait">
                {/* Content Layout Wrapper with lift and blur exit animations */}
                <motion.div
                  key={activeIdx}
                  exit={{ y: -24, opacity: 0, filter: 'blur(4px)' }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
                  className="relative z-10 flex-grow flex flex-col justify-between h-full"
                >
                  
                  {/* Large faded background step number */}
                  <div className="absolute right-[-10px] top-[-5px] pointer-events-none select-none overflow-hidden z-0">
                    <motion.span
                      initial={{ opacity: 0, y: 30, scale: 0.9, filter: 'blur(4px)' }}
                      animate={{ opacity: 0.04, y: 0, scale: 1.0, filter: 'blur(0px)' }}
                      transition={{ delay: 0.05, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
                      className="font-black text-[#8C123B] leading-none block"
                      style={{ fontSize: '140px' }}
                    >
                      {activeStage.num}
                    </motion.span>
                  </div>

                  <div>
                    {/* Stage Label */}
                    <motion.span
                      initial={{ opacity: 0, y: 30, filter: 'blur(4px)' }}
                      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                      transition={{ delay: 0.0, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
                      className="text-[9.5px] font-extrabold text-[#C2185B] tracking-wider uppercase block mb-0.5 text-left"
                    >
                      STAGE {activeStage.num}
                    </motion.span>

                    {/* Heading */}
                    <motion.h3
                      initial={{ opacity: 0, y: 30, filter: 'blur(4px)' }}
                      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                      transition={{ delay: 0.10, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
                      className="text-xl font-extrabold text-[#0F172A] mb-2.5 tracking-tight font-headline text-left"
                    >
                      {activeStage.name}
                    </motion.h3>
                    
                    {/* Description */}
                    <motion.p
                      initial={{ opacity: 0, y: 30, filter: 'blur(4px)' }}
                      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                      transition={{ delay: 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
                      className="text-[12.5px] text-slate-500 leading-relaxed mb-5 font-sans text-left"
                    >
                      {activeStage.desc}
                    </motion.p>

                    {/* Feature / Success Cards (Staggered reveal) */}
                    <div className="flex flex-col gap-3">
                      {activeStage.features.map((feat, fIdx) => {
                        const FeatIcon = feat.icon;
                        return (
                          <motion.div
                            key={fIdx}
                            initial={{ opacity: 0, x: 20, scale: 0.98 }}
                            animate={{ opacity: 1, x: 0, scale: 1.0 }}
                            transition={{
                              delay: 0.20 + fIdx * 0.05,
                              duration: 0.6,
                              ease: [0.22, 1, 0.36, 1] as const
                            }}
                            className="flex items-start gap-3 p-2 rounded-xl border border-slate-100/60 bg-white/40 hover:bg-white/80 hover:scale-[1.01] hover:border-slate-200 shadow-sm transition-all duration-300 group/item text-left"
                          >
                            <div className="text-slate-500 bg-slate-50 group-hover/item:bg-[#8C123B]/5 p-2 rounded-lg transition-colors flex items-center justify-center flex-shrink-0">
                              <FeatIcon className="w-4 h-4 text-[#8C123B]" />
                            </div>
                            <div>
                              <h4 className="text-[12.5px] font-bold text-slate-800 mb-0.5 font-headline">
                                {feat.title}
                              </h4>
                              <p className="text-[11px] text-slate-400 leading-normal font-sans">
                                {feat.desc}
                              </p>
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
                    className="mt-8 relative z-10 text-left"
                  >
                    <motion.button
                      whileHover={{
                        y: -2,
                        boxShadow: '0px 10px 25px rgba(140, 18, 59, 0.22)',
                      }}
                      whileTap={{ scale: 0.98 }}
                      className="group relative overflow-hidden flex items-center gap-2.5 text-[11.5px] font-bold text-white px-7 py-3 rounded-full transition-all duration-300 cursor-pointer w-fit"
                      style={{
                        background: 'linear-gradient(90deg, #8C123B 0%, #C2185B 50%, #F59E0B 100%)',
                        backgroundSize: '200% 100%',
                        backgroundPosition: '0% 0%',
                      }}
                      animate={{
                        backgroundPosition: hoveredIdx !== null ? '100% 0%' : '0% 0%'
                      }}
                      transition={{ duration: 0.45, ease: 'easeInOut' }}
                    >
                      <span className="relative z-10 font-sans tracking-wide">{buttonText}</span>
                      <ArrowRight className="w-3.5 h-3.5 relative z-10 transition-transform duration-300 group-hover:translate-x-[6px]" />
                    </motion.button>
                  </motion.div>

                </motion.div>
              </AnimatePresence>

            </div>

          </div>
        </motion.div>

      </div>
    </motion.section>
  );
}
