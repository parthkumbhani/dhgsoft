'use client';

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Section } from '@/components/ui/Section';
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

interface StageItem {
  num: string;
  name: string;
  stageTitle: string;
  icon: LucideIcon;
  desc: string;
  image: string;
  badgeSubtitle: string;
  capabilitiesHeader: string;
  capabilities: string[];
  businessOutcome?: string;
}

const STAGES_DATA: StageItem[] = [
  {
    num: "01",
    name: "Strategy",
    stageTitle: "01. STRATEGY",
    icon: Target,
    desc: "Define a clear digital transformation vision aligned with business objectives, operational priorities, and long-term growth.",
    image: "/images/home/service-strategy-themed.png",
    badgeSubtitle: "Assess • Align • Transform",
    capabilitiesHeader: "Key Capabilities",
    capabilities: [
      "Business & Digital Strategy",
      "Digital Maturity Assessment",
      "Enterprise Architecture",
      "Technology Roadmap",
      "Governance Framework",
      "Business Case & ROI Analysis"
    ],
    businessOutcome: "A well-defined transformation roadmap with measurable objectives and executive alignment."
  },
  {
    num: "02",
    name: "Design",
    stageTitle: "02. DESIGN",
    icon: Compass,
    desc: "Design secure, scalable, and future-ready digital solutions that integrate seamlessly across OT and IT environments.",
    image: "/images/home/service-design-themed.png",
    badgeSubtitle: "Architect • Standardize • Optimize",
    capabilitiesHeader: "Key Capabilities",
    capabilities: [
      "Solution Architecture",
      "Process Engineering",
      "System Design",
      "UX/UI Design",
      "Infrastructure Planning",
      "Cybersecurity by Design"
    ],
    businessOutcome: "A validated solution architecture ready for successful implementation."
  },
  {
    num: "03",
    name: "Build",
    stageTitle: "03. BUILD",
    icon: Cpu,
    desc: "Develop and integrate enterprise-grade digital solutions using industry-leading platforms and engineering standards.",
    image: "/images/home/service-build-themed.png",
    badgeSubtitle: "Develop • Configure • Integrate",
    capabilitiesHeader: "Key Capabilities",
    capabilities: [
      "AI and Software Development",
      "Industrial Automation",
      "SCADA & HMI Engineering",
      "IIoT Integration",
      "API & Enterprise Integration",
      "Data Platform Development"
    ],
    businessOutcome: "Reliable, scalable, and fully integrated digital solutions."
  },
  {
    num: "04",
    name: "Deploy",
    stageTitle: "04. DEPLOY",
    icon: Play,
    desc: "Execute deployment with minimal operational disruption through structured testing, migration, commissioning, and user readiness.",
    image: "/images/home/service-deploy-themed.png",
    badgeSubtitle: "Validate • Commission • Go Live",
    capabilitiesHeader: "Key Capabilities",
    capabilities: [
      "Factory Acceptance Testing (FAT)",
      "Site Acceptance Testing (SAT)",
      "Data Migration",
      "System Commissioning",
      "Production Rollout",
      "Performance Validation"
    ],
    businessOutcome: "Successful go-live with predictable performance and reduced implementation risk."
  },
  {
    num: "05",
    name: "Operate",
    stageTitle: "05. OPERATE",
    icon: Monitor,
    desc: "Ensure business continuity through proactive monitoring, managed services, preventive maintenance, and continuous system optimization.",
    image: "/images/home/service-operate-themed.png",
    badgeSubtitle: "Monitor • Support • Maintain",
    capabilitiesHeader: "Key Capabilities",
    capabilities: [
      "24×7 Managed Services",
      "Application Support",
      "Infrastructure Management",
      "Preventive Maintenance",
      "Incident & Problem Management",
      "Performance Monitoring"
    ],
    businessOutcome: "High system availability, operational stability, and reduced downtime."
  },
  {
    num: "06",
    name: "Enable",
    stageTitle: "06. ENABLE",
    icon: Award,
    desc: "Drive user adoption and organizational capability through structured training, knowledge transfer, and continuous improvement programs.",
    image: "/images/home/service-enable-themed.png",
    badgeSubtitle: "Train • Adopt • Improve",
    capabilitiesHeader: "Key Capabilities",
    capabilities: [
      "User Training",
      "Change Management",
      "Documentation",
      "Knowledge Transfer",
      "Centre of Excellence",
      "Continuous Improvement"
    ],
    businessOutcome: "Empowered teams with higher adoption rates and sustainable operational excellence."
  },
  {
    num: "07",
    name: "Business Outcomes",
    stageTitle: "07. BUSINESS OUTCOMES",
    icon: Trophy,
    desc: "Every engagement is focused on delivering tangible business value through measurable operational and financial improvements.",
    image: "/images/home/service-outcome-themed.png",
    badgeSubtitle: "Measure • Optimize • Grow",
    capabilitiesHeader: "Expected Outcomes",
    capabilities: [
      "Increased Operational Efficiency",
      "Reduced Downtime",
      "Improved Asset Reliability",
      "Higher Productivity",
      "Enhanced Data Visibility",
      "Faster Decision-Making",
      "Lower Total Cost of Ownership (TCO)",
      "Sustainable Digital Transformation"
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

  const buttonText = activeIdx === 6 ? "Explore Outcomes" : "Learn More";

  return (
    <Section
      ref={sectionRef}
      id="delivery"
      variant="white"
      containerSize="wide"
      animate={
        isInView
          ? { opacity: 1, filter: 'blur(0px)', scale: 1 }
          : { opacity: 0, filter: 'blur(8px)', scale: 0.98 }
      }
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }}
      className="overflow-hidden border-b border-[#ECECEC]"
      style={{
        background: '#FCFCFD',
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

      <div className="relative z-10 w-full">
        
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
            From Strategy to Sustainable Business Outcomes
          </h2>
          <p
            className="font-sans text-slate-600 max-w-[850px]"
            style={{
              fontSize: 15.5,
              lineHeight: 1.7,
            }}
          >
            Our proven delivery framework guides organizations through every stage of digital transformation—from strategic planning and solution design to implementation, optimization, and continuous innovation. We combine domain expertise, engineering excellence, and industry best practices to deliver measurable business value while minimizing project risk.
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
          className="relative w-full rounded-[30px] border border-[#ECECEC] bg-white/40 backdrop-blur-md p-6 lg:p-8 mb-12 overflow-hidden"
        >
          {/* Subtle animated gradient line strictly on the top edge */}
          <div className="absolute top-0 left-0 right-0 h-[4px] overflow-hidden rounded-t-[30px] z-20">
            <motion.div
              className="w-[200%] h-full"
              style={{
                background: 'linear-gradient(90deg, #8C123B 0%, #A01440 25%, #C2185B 50%, #A01440 75%, #8C123B 100%)',
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
            
            {/* COLUMN 1: LEFT DELIVERY NAVIGATION (30% Width on Desktop) */}
            <div className="w-full lg:w-[30%] flex flex-col gap-3 justify-center relative py-2 px-1">
              
              {/* Background timeline line running behind cards */}
              <div className="absolute left-[34px] top-[34px] bottom-[34px] w-[1.5px] bg-[#ECECEC] z-0 pointer-events-none" />

              {/* Filled active timeline line */}
              <motion.div
                className="absolute left-[34px] top-[34px] w-[1.5px] bg-gradient-to-b from-[#8C123B] via-[#C2185B] to-[#8C123B] z-0 pointer-events-none origin-top"
                style={{ height: 'calc(100% - 68px)' }}
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
                      x: isActive ? 6 : 0,
                      scale: isActive ? 1.02 : 1.0,
                    }}
                    transition={premiumTransition}
                  >
                    <div
                      className={`relative flex items-center justify-between p-3.5 pl-11 pr-4 rounded-[16px] cursor-pointer select-none transition-all duration-300 border ${
                        isActive
                          ? 'border-[#8C123B] bg-white shadow-md shadow-[#8C123B]/10'
                          : isHovered
                          ? 'border-[#ECECEC] bg-white shadow-sm'
                          : 'border-[#ECECEC] bg-white/70 backdrop-blur-sm shadow-sm'
                      }`}
                    >
                      {/* Glowing vertical left status indicator bar */}
                      {isActive ? (
                        <motion.div
                          layoutId="activeVerticalIndicator"
                          className="absolute left-[-1.5px] top-3 bottom-3 w-[3.5px] bg-[#8C123B] rounded-r-full z-30 shadow-sm shadow-[#8C123B]/40"
                          transition={premiumTransition}
                        />
                      ) : isHovered ? (
                        <motion.div
                          layoutId="hoverVerticalIndicator"
                          className="absolute left-[-1.5px] top-[25%] bottom-[25%] w-[2.5px] bg-[#8C123B]/40 rounded-r-full z-20"
                          transition={premiumTransition}
                        />
                      ) : null}

                      <div className="flex items-center gap-3.5 relative z-10">
                        <div className="relative">
                          {isActive && (
                            <motion.div
                              layoutId={`iconGlow-${idx}`}
                              className="absolute inset-[-5px] rounded-full filter blur-[5px] pointer-events-none z-0"
                              style={{
                                background: 'radial-gradient(circle, rgba(140,18,59,0.45) 0%, transparent 100%)',
                              }}
                              transition={premiumTransition}
                            />
                          )}
                          <motion.div
                            animate={{
                              rotate: isHovered && !isActive ? 6 : 0,
                            }}
                            transition={{ duration: 0.3, ease: 'easeOut' }}
                            className={`w-8.5 h-8.5 rounded-full flex items-center justify-center relative z-10 transition-all duration-300 ${
                              isActive
                                ? 'bg-[#8C123B] text-white shadow-md shadow-[#8C123B]/30 scale-[1.08]'
                                : 'bg-slate-100 text-slate-400'
                            }`}
                          >
                            <Icon className="w-4 h-4" />
                          </motion.div>
                        </div>
                        
                        <span
                          className={`font-sans transition-colors duration-300 ${
                            isActive ? 'font-bold text-[#0F172A]' : 'font-semibold text-slate-600'
                          }`}
                          style={{ fontSize: 13 }}
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

            {/* COLUMN 2: CENTER HERO IMAGE (38% Width on Desktop) - FULL IMAGE DISPLAY GUARANTEED */}
            <div className="w-full lg:w-[38%] relative overflow-hidden min-h-[460px] rounded-[24px] shadow-md border border-[#ECECEC] bg-[#0A0C14] flex flex-col justify-between z-10">
              
              {/* Premium top border animation traveling once across top edge on transition */}
              <div className="absolute top-0 left-0 right-0 h-[3.5px] overflow-hidden z-20">
                <motion.div
                  key={`border-sweep-${activeIdx}`}
                  className="h-full"
                  style={{
                    width: '200%',
                    background: 'linear-gradient(90deg, #8C123B 0%, #C2185B 50%, #8C123B 100%)',
                  }}
                  initial={{ x: '-100%' }}
                  animate={{ x: '0%' }}
                  transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] as const }}
                />
              </div>

              {/* Layered Crossfade Morphing Images - Display Full Image Cleanly Without Cropping */}
              <div className="relative w-full h-full min-h-[440px] flex items-center justify-center p-3 bg-[#0A0C14]">
                <AnimatePresence mode="popLayout">
                  <motion.img
                    key={activeIdx}
                    src={activeStage.image}
                    alt={activeStage.stageTitle}
                    initial={{ opacity: 0, scale: 0.96, filter: 'blur(4px)' }}
                    animate={{ opacity: 1, scale: 1.0, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, scale: 0.96, filter: 'blur(4px)' }}
                    transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] as const }}
                    className="w-full h-full object-contain max-h-[460px] rounded-[18px] select-none"
                  />
                </AnimatePresence>
              </div>

              {/* Bottom Badge Bar */}
              <div className="relative z-20 p-4 bg-gradient-to-t from-[#0A0C14] via-[#0A0C14]/90 to-transparent flex flex-col gap-1 text-left">
                <div className="flex items-center gap-2">
                  <span className="bg-[#8C123B] text-white px-3 py-1 rounded-md text-[10px] font-extrabold tracking-wider uppercase shadow">
                    {activeStage.stageTitle}
                  </span>
                </div>
                <span className="text-[11px] text-amber-400 font-bold tracking-wide mt-1">
                  {activeStage.badgeSubtitle}
                </span>
              </div>
            </div>

            {/* COLUMN 3: RIGHT PREMIUM GLASS CONTENT PANEL (32% Width on Desktop) */}
            <div className="w-full lg:w-[32%] p-6 flex flex-col justify-between relative bg-white/85 backdrop-blur-md rounded-[24px] border border-white/60 shadow-md overflow-hidden min-h-[500px] z-10">
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIdx}
                  exit={{ y: -20, opacity: 0, filter: 'blur(4px)' }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] as const }}
                  className="relative z-10 flex-grow flex flex-col justify-between h-full"
                >
                  <div>
                    {/* Stage Label */}
                    <span className="text-[10px] font-extrabold text-[#8C123B] tracking-widest uppercase block mb-1 text-left">
                      {activeStage.stageTitle}
                    </span>

                    {/* Description */}
                    <p className="text-[13px] text-slate-600 leading-relaxed mb-4 font-sans text-left">
                      {activeStage.desc}
                    </p>

                    {/* Key Capabilities / Expected Outcomes Grid */}
                    <div className="mb-4 text-left">
                      <h4 className="text-[11px] font-extrabold text-slate-800 tracking-wider uppercase mb-2">
                        {activeStage.capabilitiesHeader}
                      </h4>
                      <div className="grid grid-cols-1 gap-1.5 max-h-[190px] overflow-y-auto pr-1 custom-scrollbar">
                        {activeStage.capabilities.map((cap, cIdx) => (
                          <div key={cIdx} className="flex items-center gap-2 p-1.5 rounded-lg bg-slate-50 border border-slate-100 hover:bg-slate-100/80 transition-colors">
                            <Check className="w-3.5 h-3.5 text-[#8C123B] shrink-0" />
                            <span className="text-[12px] font-medium text-slate-700">{cap}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Business Outcome Highlight Box (Shown for Stages 1-6) */}
                    {activeStage.businessOutcome && (
                      <div className="p-3.5 rounded-xl bg-gradient-to-br from-[#8C123B]/8 to-amber-500/8 border border-[#8C123B]/20 text-left mb-4">
                        <span className="text-[9.5px] font-extrabold text-[#8C123B] tracking-wider uppercase block mb-1">
                          BUSINESS OUTCOME
                        </span>
                        <p className="text-[12px] font-semibold text-slate-800 leading-snug">
                          "{activeStage.businessOutcome}"
                        </p>
                      </div>
                    )}
                  </div>

                  {/* CTA Button */}
                  <div className="pt-2 text-left">
                    <motion.button
                      whileHover={{
                        y: -2,
                        boxShadow: '0px 10px 25px rgba(140, 18, 59, 0.22)',
                      }}
                      whileTap={{ scale: 0.98 }}
                      className="group relative overflow-hidden flex items-center gap-2.5 text-[11.5px] font-bold text-white px-6 py-2.5 rounded-full transition-all duration-300 cursor-pointer w-fit"
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
                  </div>

                </motion.div>
              </AnimatePresence>

            </div>

          </div>
        </motion.div>

        {/* ── Our Commitment Banner ── */}
        <div className="w-full rounded-[22px] p-6 lg:p-8 bg-gradient-to-r from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg text-left">
          <div className="max-w-[850px]">
            <span className="text-amber-400 text-[11px] font-extrabold tracking-widest uppercase block mb-1">
              OUR COMMITMENT
            </span>
            <p className="text-[14px] lg:text-[15px] text-slate-200 leading-relaxed font-sans">
              From strategy through operations, DHGsoft delivers integrated digital transformation solutions that create measurable business outcomes, accelerate innovation, and establish long-term operational excellence.
            </p>
          </div>
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="px-6 py-3 rounded-full bg-gradient-to-r from-[#8C123B] to-[#F59E0B] text-white font-bold text-[12px] tracking-wide shrink-0 shadow-md cursor-pointer"
          >
            Start Transformation
          </motion.button>
        </div>

      </div>
    </Section>
  );
}
