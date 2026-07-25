'use client';

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { 
  Cpu, 
  Network, 
  Server, 
  Zap, 
  Gauge, 
  Radio, 
  ShieldCheck, 
  FileCode, 
  Truck, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  LucideIcon
} from 'lucide-react';
import { Section } from '@/components/ui/Section';

interface CategoryItem {
  num: string;
  name: string;
  shortName: string;
  stageTitle: string;
  desc: string;
  image: string;
  badgeSubtitle: string;
  solutionsHeader: string;
  solutions: string[];
  icon: LucideIcon;
}

const PRODUCT_CATEGORIES: CategoryItem[] = [
  {
    num: "01",
    name: "Industrial Automation Systems",
    shortName: "Automation Systems",
    stageTitle: "01. Industrial Automation Systems",
    desc: "Enterprise-grade automation platforms for process control, machine automation, and operational excellence.",
    image: "/images/home/supply-automation.png",
    badgeSubtitle: "Process Control • Machine Automation • Enterprise Platforms",
    solutionsHeader: "Solutions",
    solutions: [
      "PLC Systems",
      "SCADA Platforms",
      "Distributed Control Systems (DCS)",
      "Human Machine Interfaces (HMI)",
      "Industrial Controllers",
      "Remote I/O Systems"
    ],
    icon: Cpu
  },
  {
    num: "02",
    name: "Industrial Networking & Connectivity",
    shortName: "Networking & Connectivity",
    stageTitle: "02. Industrial Networking & Connectivity",
    desc: "Secure and resilient industrial communication infrastructure connecting plant-floor operations with enterprise systems.",
    image: "/images/home/supply-networking.png",
    badgeSubtitle: "Plant-Floor Connectivity • Secure Gateways • Resilient Infrastructure",
    solutionsHeader: "Solutions",
    solutions: [
      "Industrial Ethernet Switches",
      "Industrial Routers",
      "Industrial Gateways",
      "Industrial Firewalls",
      "Industrial Wireless Networks",
      "Protocol Converters"
    ],
    icon: Network
  },
  {
    num: "03",
    name: "Industrial Computing & Edge Platforms",
    shortName: "Computing & Edge",
    stageTitle: "03. Industrial Computing & Edge Platforms",
    desc: "High-performance computing infrastructure designed for industrial environments and mission-critical applications.",
    image: "/images/home/supply-computing.png",
    badgeSubtitle: "Mission-Critical Hardware • Edge Compute • High Reliability",
    solutionsHeader: "Solutions",
    solutions: [
      "Industrial PCs",
      "Edge Computing Devices",
      "Industrial Servers",
      "Data Acquisition Systems",
      "Embedded Controllers",
      "Industrial Workstations"
    ],
    icon: Server
  },
  {
    num: "04",
    name: "Drives & Motion Control",
    shortName: "Drives & Motion",
    stageTitle: "04. Drives & Motion Control",
    desc: "Advanced motion technologies designed to maximise machine performance, efficiency, and precision.",
    image: "/images/home/supply-drives.png",
    badgeSubtitle: "Precision Control • Energy Efficiency • High Performance",
    solutionsHeader: "Solutions",
    solutions: [
      "Variable Frequency Drives (VFD)",
      "Servo Drives",
      "Motion Controllers",
      "Soft Starters",
      "Motor Control Solutions",
      "Drive Automation Systems"
    ],
    icon: Zap
  },
  {
    num: "05",
    name: "Instrumentation & Field Devices",
    shortName: "Instrumentation",
    stageTitle: "05. Instrumentation & Field Devices",
    desc: "Intelligent field instrumentation providing accurate process measurement, monitoring, and control.",
    image: "/images/home/supply-instrumentation.png",
    badgeSubtitle: "Accurate Measurement • Process Intelligence • Smart Monitoring",
    solutionsHeader: "Solutions",
    solutions: [
      "Pressure Instruments",
      "Flow Meters",
      "Temperature Sensors",
      "Level Measurement",
      "Analytical Instruments",
      "Smart Field Devices"
    ],
    icon: Gauge
  },
  {
    num: "06",
    name: "Industrial IoT & Smart Devices",
    shortName: "Industrial IoT",
    stageTitle: "06. Industrial IoT & Smart Devices",
    desc: "Connected industrial technologies enabling real-time monitoring, predictive maintenance, and enterprise-wide visibility.",
    image: "/images/home/supply-iot.png",
    badgeSubtitle: "Real-Time Telemetry • Predictive Maintenance • Connected Assets",
    solutionsHeader: "Solutions",
    solutions: [
      "Industrial IoT Devices",
      "Smart Sensors",
      "Edge Gateways",
      "Wireless Sensors",
      "Remote Monitoring Devices",
      "Industrial Data Loggers"
    ],
    icon: Radio
  },
  {
    num: "07",
    name: "Electrical Power Distribution",
    shortName: "Power Distribution",
    stageTitle: "07. Electrical Power Distribution",
    desc: "Reliable electrical infrastructure supporting safe and efficient industrial power distribution.",
    image: "/images/home/supply-power.png",
    badgeSubtitle: "Safe Distribution • Power Quality • Electrical Protection",
    solutionsHeader: "Solutions",
    solutions: [
      "LV Switchgear",
      "MCC & PCC Components",
      "Power Distribution Equipment",
      "Protection Relays",
      "Busbar Systems",
      "Electrical Accessories"
    ],
    icon: ShieldCheck
  },
  {
    num: "08",
    name: "Industrial Software & Licensing",
    shortName: "Software & Licensing",
    stageTitle: "08. Industrial Software & Licensing",
    desc: "Enterprise software platforms enabling automation, operations management, industrial analytics, and digital transformation.",
    image: "/images/home/supply-software.png",
    badgeSubtitle: "Operations Management • Industrial Analytics • Subscriptions",
    solutionsHeader: "Solutions",
    solutions: [
      "SCADA Software",
      "HMI Software",
      "Historian Platforms",
      "Industrial Analytics Software",
      "Engineering Software",
      "Software Licensing & Subscription Management"
    ],
    icon: FileCode
  },
  {
    num: "09",
    name: "Technology Procurement & Supply Chain",
    shortName: "Procurement & Supply",
    stageTitle: "09. Technology Procurement & Supply Chain",
    desc: "Delivering genuine industrial technologies through authorised sourcing, global procurement, logistics, and lifecycle support.",
    image: "/images/home/supply-procurement.png",
    badgeSubtitle: "Authorised Sourcing • Global Logistics • Lifecycle Support",
    solutionsHeader: "Services",
    solutions: [
      "Technology Consulting",
      "Product Selection",
      "OEM Sourcing",
      "Global Procurement",
      "Supply Chain Management",
      "Warranty & Technical Support"
    ],
    icon: Truck
  }
];

export default function Ecosystem() {
  const [activeIdx, setActiveIdx] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const activeCategory = PRODUCT_CATEGORIES[activeIdx];

  return (
    <Section
      ref={sectionRef}
      id="technology-ecosystem"
      variant="ink"
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
      className="bg-[#060B16] overflow-hidden border-b border-slate-950 select-none py-14 lg:py-20"
    >
      {/* Background Animated Technical Grid & Ambient Glow */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1E293B_1px,transparent_1px),linear-gradient(to_bottom,#1E293B_1px,transparent_1px)] bg-[size:50px_50px] opacity-10 pointer-events-none z-0" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-[#8C123B] blur-[180px] opacity-15 pointer-events-none z-0" />

      <div className="relative z-10 w-full flex flex-col max-w-[1440px] mx-auto">
        
        {/* ── Section Header ── */}
        <div className="flex flex-col w-full text-left mb-8 lg:mb-10">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-[#C2185B] animate-pulse" />
            <span className="text-[11px] font-extrabold text-[#C2185B] uppercase tracking-[0.25em] block font-sans">
              INDUSTRIAL PRODUCTS &amp; TECHNOLOGY SUPPLY
            </span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-extrabold tracking-tight text-white mb-3 font-headline">
            Trusted Industrial Technology. Global Partners. Reliable Solutions.
          </h2>
          <p className="text-[14.5px] lg:text-[15.5px] text-slate-300 leading-relaxed font-sans w-full">
            We supply certified industrial automation hardware, software, networking, and electrical technologies from globally recognised manufacturers. Our technology portfolio enables reliable plant operations, seamless system integration, and scalable digital transformation across process and discrete industries.
          </p>
        </div>

        {/* ── HORIZONTAL CATEGORY PILL SELECTOR TABS ── */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-3 mb-8 w-full border-b border-slate-800/80">
          {PRODUCT_CATEGORIES.map((cat, idx) => {
            const Icon = cat.icon;
            const isActive = activeIdx === idx;

            return (
              <button
                key={idx}
                onClick={() => setActiveIdx(idx)}
                className={`flex items-center gap-2.5 px-4 py-2.5 rounded-full shrink-0 text-[12.5px] font-sans font-bold transition-all duration-300 cursor-pointer border ${
                  isActive
                    ? 'bg-gradient-to-r from-[#8C123B] to-[#C2185B] text-white border-transparent shadow-lg shadow-[#8C123B]/30 scale-[1.03]'
                    : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800/80'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                <span>{cat.shortName}</span>
                <span className={`text-[10px] font-extrabold px-1.5 py-0.5 rounded-full ${
                  isActive ? 'bg-white/20 text-white' : 'bg-slate-800 text-slate-500'
                }`}>
                  {cat.num}
                </span>
              </button>
            );
          })}
        </div>

        {/* ── BENTO BOX CATEGORY SHOWCASE ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-10 items-stretch">
          
          {/* LEFT BENTO CARD: CATEGORY VISUAL & OVERVIEW (5 Columns out of 12) */}
          <div className="lg:col-span-5 relative rounded-[28px] border border-slate-800 bg-[#0A0F1D] overflow-hidden min-h-[460px] flex flex-col justify-between p-8 text-left shadow-2xl group">
            
            {/* Morphing Image Background */}
            <div className="absolute inset-0 w-full h-full overflow-hidden bg-[#0A0F1D]">
              <AnimatePresence mode="popLayout">
                <motion.img
                  key={activeIdx}
                  src={activeCategory.image}
                  alt={activeCategory.stageTitle}
                  initial={{ opacity: 0, scale: 1.06, filter: 'blur(6px)' }}
                  animate={{ opacity: 1, scale: 1.0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, scale: 1.06, filter: 'blur(6px)' }}
                  transition={{ duration: 0.6 }}
                  className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
                />
              </AnimatePresence>
              
              {/* Deep Gradient Vignette */}
              <div
                className="absolute inset-0 pointer-events-none z-10"
                style={{
                  background: 'linear-gradient(to top, rgba(6,11,22,0.95) 0%, rgba(6,11,22,0.45) 50%, rgba(6,11,22,0.85) 100%)',
                }}
              />
            </div>

            {/* Top Badge Info */}
            <div className="relative z-20 flex items-center justify-between">
              <span className="bg-[#8C123B] text-white px-3.5 py-1 rounded-md text-[10.5px] font-extrabold tracking-wider uppercase shadow-md">
                CATEGORY {activeCategory.num} OF 09
              </span>
              <div className="w-10 h-10 rounded-full bg-slate-900/80 border border-slate-700 text-white flex items-center justify-center shadow-md">
                {React.createElement(activeCategory.icon, { className: "w-5 h-5 text-[#C2185B]" })}
              </div>
            </div>

            {/* Bottom Content Area */}
            <div className="relative z-20 mt-auto">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIdx}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35 }}
                >
                  <h3 className="text-2xl lg:text-3xl font-extrabold text-white tracking-tight mb-3 font-headline">
                    {activeCategory.name}
                  </h3>
                  <p className="text-[13.5px] text-slate-300 leading-relaxed mb-6 font-sans">
                    {activeCategory.desc}
                  </p>
                  
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="flex items-center gap-2.5 text-[12px] font-bold text-white px-6 py-3 rounded-full bg-gradient-to-r from-[#8C123B] via-[#C2185B] to-[#F59E0B] shadow-lg cursor-pointer w-fit"
                  >
                    <span>Request Technology Quote</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>

          {/* RIGHT BENTO CARD: SOLUTIONS GRID (7 Columns out of 12) */}
          <div className="lg:col-span-7 rounded-[28px] border border-slate-800 bg-slate-900/80 backdrop-blur-xl p-8 flex flex-col justify-between text-left shadow-2xl relative overflow-hidden">
            
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#8C123B] via-[#C2185B] to-[#F59E0B]" />

            <div>
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span className="text-[11px] font-extrabold text-amber-400 uppercase tracking-wider block font-sans">
                  CERTIFIED INDUSTRIAL PORTFOLIO
                </span>
              </div>

              <h4 className="text-xl font-extrabold text-white tracking-tight mb-6 font-headline">
                {activeCategory.solutionsHeader} Included in {activeCategory.name}
              </h4>

              {/* 6 Solutions Grid in 2 Columns */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIdx}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-3.5 mb-6"
                >
                  {activeCategory.solutions.map((item, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ scale: 1.02, borderColor: 'rgba(140, 18, 59, 0.6)' }}
                      className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 transition-all duration-300 group/sol shadow-sm"
                    >
                      <div className="w-7 h-7 rounded-lg bg-[#8C123B]/20 text-[#C2185B] flex items-center justify-center shrink-0 group-hover/sol:bg-[#8C123B] group-hover/sol:text-white transition-colors">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <span className="text-[13px] font-semibold text-slate-200 font-sans group-hover/sol:text-white transition-colors">
                        {item}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Subtitle Banner */}
            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 text-slate-400 text-[12px] font-medium font-sans">
              <span className="text-white font-bold">Key Capability: </span>
              {activeCategory.badgeSubtitle}
            </div>

          </div>

        </div>

        {/* ── WHY DHGSOFT FEATURE GRID (BOTTOM BANNER) ── */}
        <div className="w-full rounded-[28px] p-8 bg-gradient-to-r from-[#0D1527] via-[#111827] to-[#0D1527] border border-slate-800 text-white shadow-2xl flex flex-col gap-6 text-left relative overflow-hidden">
          
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-slate-800/80 pb-5">
            <div>
              <span className="text-amber-400 text-[11px] font-extrabold tracking-widest uppercase block mb-1">
                WHY DHGSOFT
              </span>
              <h3 className="text-2xl lg:text-3xl font-extrabold text-white tracking-tight font-headline">
                Authorised &amp; Trusted Technology Partner
              </h3>
            </div>
            <span className="text-[13px] lg:text-[14px] font-medium text-slate-300 leading-relaxed max-w-xl">
              Delivering Reliable Industrial Hardware, Intelligent Automation, and Future-Ready Technology Infrastructure.
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Genuine Industrial Products",
              "Global Technology Partners",
              "Expert Product Selection",
              "End-to-End Procurement",
              "Integrated Engineering Support",
              "Installation & Commissioning",
              "Lifecycle Maintenance Services",
              "Complete Warranty Assistance"
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-[#8C123B]/60 transition-colors">
                <CheckCircle2 className="w-4 h-4 text-[#C2185B] shrink-0" />
                <span className="text-[12.5px] font-semibold text-slate-200 font-sans">{item}</span>
              </div>
            ))}
          </div>

        </div>

      </div>
    </Section>
  );
}
