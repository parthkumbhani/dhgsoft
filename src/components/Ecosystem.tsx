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
  Check, 
  CheckCircle2, 
  ArrowRight,
  LucideIcon
} from 'lucide-react';
import { Section } from '@/components/ui/Section';

interface CategoryItem {
  num: string;
  name: string;
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
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const activeCategory = PRODUCT_CATEGORIES[activeIdx];

  const premiumTransition = {
    duration: 0.5,
    ease: [0.22, 1, 0.36, 1] as const
  };

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
      className="bg-[#060B16] overflow-hidden border-b border-slate-950 select-none py-10 lg:py-12 min-h-screen flex flex-col justify-center"
    >
      {/* Dark Animated Background Grid & Ambient Glow */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1E293B_1px,transparent_1px),linear-gradient(to_bottom,#1E293B_1px,transparent_1px)] bg-[size:45px_45px] opacity-10 pointer-events-none z-0" />
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] rounded-full bg-[#8C123B] blur-[160px] opacity-15 pointer-events-none z-0" />

      <div className="relative z-10 w-full flex flex-col justify-between max-w-[1440px] mx-auto">
        
        {/* ── Section Header (Compact Viewport Fit) ── */}
        <div className="flex flex-col w-full text-left mb-6">
          <span className="text-[10.5px] font-extrabold text-[#C2185B] uppercase tracking-[0.25em] block mb-1.5 font-sans">
            INDUSTRIAL PRODUCTS &amp; TECHNOLOGY SUPPLY
          </span>
          <h2 className="text-2xl lg:text-4xl font-extrabold tracking-tight text-white mb-2 font-headline">
            Trusted Industrial Technology. Global Partners. Reliable Solutions.
          </h2>
          <p className="text-[13.5px] lg:text-[14.5px] text-slate-300 leading-relaxed font-sans w-full">
            We supply certified industrial automation hardware, software, networking, and electrical technologies from globally recognised manufacturers. Our technology portfolio enables reliable plant operations, seamless system integration, and scalable digital transformation across process and discrete industries.
          </p>
        </div>

        {/* ── Desktop Viewport Showcase Container (Fits inside 1 Desktop Screen) ── */}
        <div className="relative w-full rounded-[26px] border border-slate-800 bg-[#0A0F1D]/85 backdrop-blur-xl p-5 lg:p-6 mb-6 overflow-hidden shadow-2xl">
          
          {/* Burgundy Animated Top Edge Line */}
          <div className="absolute top-0 left-0 right-0 h-[3.5px] overflow-hidden rounded-t-[26px] z-20">
            <motion.div
              className="w-[200%] h-full"
              style={{
                background: 'linear-gradient(90deg, #8C123B 0%, #C2185B 50%, #8C123B 100%)',
              }}
              animate={{ x: ['0%', '-50%'] }}
              transition={{ repeat: Infinity, duration: 10, ease: 'linear' }}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch z-10 relative">
            
            {/* COLUMN 1: 9 CATEGORIES SIDEBAR (3 Columns out of 12) */}
            <div className="lg:col-span-3 flex flex-col gap-1.5 justify-between relative py-0.5">
              {PRODUCT_CATEGORIES.map((cat, idx) => {
                const Icon = cat.icon;
                const isActive = activeIdx === idx;
                const isHovered = hoveredIdx === idx;

                return (
                  <motion.div
                    key={idx}
                    onClick={() => setActiveIdx(idx)}
                    onMouseEnter={() => setHoveredIdx(idx)}
                    onMouseLeave={() => setHoveredIdx(null)}
                    className="w-full relative z-10 cursor-pointer"
                    animate={{
                      x: isActive ? 4 : 0,
                    }}
                    transition={premiumTransition}
                  >
                    <div
                      className={`relative flex items-center justify-between p-2 px-3 rounded-[12px] transition-all duration-300 border ${
                        isActive
                          ? 'border-[#8C123B] bg-gradient-to-r from-[#8C123B]/30 via-[#8C123B]/10 to-slate-900/90 shadow-md shadow-[#8C123B]/25 text-white'
                          : isHovered
                          ? 'border-slate-800 bg-slate-900/70 text-slate-300'
                          : 'border-slate-900/40 bg-slate-900/30 text-slate-400'
                      }`}
                    >
                      {/* Active Indicator Bar */}
                      {isActive && (
                        <motion.div
                          layoutId="darkCatActiveIndicator"
                          className="absolute left-0 top-2 bottom-2 w-[3px] bg-[#8C123B] rounded-r-full shadow-sm shadow-[#8C123B]/60"
                          transition={premiumTransition}
                        />
                      )}

                      <div className="flex items-center gap-2.5 overflow-hidden">
                        <div className={`w-6.5 h-6.5 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                          isActive ? 'bg-[#8C123B] text-white shadow-sm' : 'bg-slate-800/80 text-slate-400'
                        }`}>
                          <Icon className="w-3.5 h-3.5" />
                        </div>
                        <span className={`text-[12px] font-sans font-semibold truncate transition-colors ${
                          isActive ? 'text-white font-bold' : 'text-slate-300'
                        }`}>
                          {cat.name}
                        </span>
                      </div>

                      <span className={`text-[10px] font-extrabold font-sans shrink-0 ml-1.5 ${
                        isActive ? 'text-[#C2185B]' : 'text-slate-600'
                      }`}>
                        {cat.num}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* COLUMN 2: ACTIVE CATEGORY DETAILS & SOLUTIONS (5 Columns out of 12) */}
            <div className="lg:col-span-5 p-5 flex flex-col justify-between relative bg-slate-900/90 backdrop-blur-md rounded-[20px] border border-slate-800 shadow-xl overflow-hidden text-left min-h-[440px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIdx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35 }}
                  className="flex flex-col justify-between h-full"
                >
                  <div>
                    {/* Category Tag */}
                    <span className="text-[9.5px] font-extrabold text-[#C2185B] tracking-widest uppercase block mb-1">
                      CATEGORY {activeCategory.num}
                    </span>
                    <h3 className="text-lg lg:text-xl font-extrabold text-white tracking-tight mb-2 font-headline">
                      {activeCategory.name}
                    </h3>
                    <p className="text-[12.5px] text-slate-300 leading-relaxed mb-4 font-sans">
                      {activeCategory.desc}
                    </p>

                    {/* Solutions Grid */}
                    <div className="mb-4">
                      <h4 className="text-[11.5px] font-bold text-white tracking-wide mb-2 font-sans">
                        {activeCategory.solutionsHeader}
                      </h4>
                      <div className="grid grid-cols-1 gap-1.5">
                        {activeCategory.solutions.map((sol, sIdx) => (
                          <div key={sIdx} className="flex items-center gap-2 p-1.5 px-2.5 rounded-lg bg-slate-950/70 border border-slate-800/80 hover:border-[#8C123B]/60 transition-colors">
                            <Check className="w-3.5 h-3.5 text-[#C2185B] shrink-0" />
                            <span className="text-[12px] font-medium text-slate-200 font-sans">{sol}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* CTA Quote Button */}
                  <div className="pt-2">
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="flex items-center gap-2 text-[11.5px] font-bold text-white px-5 py-2 rounded-full bg-gradient-to-r from-[#8C123B] via-[#C2185B] to-[#F59E0B] shadow-md cursor-pointer w-fit"
                    >
                      <span>Request Quote</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </motion.button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* COLUMN 3: WHY DHGSOFT AUTHORISED PARTNER PANEL (4 Columns out of 12) */}
            <div className="lg:col-span-4 p-5 flex flex-col justify-between relative bg-gradient-to-br from-[#0D1527] to-[#0A0F1D] rounded-[20px] border border-slate-800 shadow-xl text-left min-h-[440px]">
              <div>
                <span className="text-amber-400 text-[10px] font-extrabold tracking-widest uppercase block mb-1">
                  WHY DHGSOFT
                </span>
                <h3 className="text-base lg:text-lg font-extrabold text-white tracking-tight mb-1.5 font-headline">
                  Authorised &amp; Trusted Technology Partner
                </h3>
                <p className="text-[11.5px] text-slate-400 leading-snug mb-4 font-sans">
                  Delivering Reliable Industrial Hardware, Intelligent Automation, and Future-Ready Technology Infrastructure.
                </p>

                {/* 8 Feature Highlights Grid */}
                <div className="grid grid-cols-1 gap-1.5">
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
                    <div key={idx} className="flex items-center gap-2 p-1.5 px-2.5 rounded-lg bg-slate-900/80 border border-slate-800/80 hover:border-[#8C123B]/50 transition-colors">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C2185B] shrink-0" />
                      <span className="text-[11.5px] font-medium text-slate-200 font-sans">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800/80 mt-3">
                <span className="text-[10.5px] text-slate-400 italic block font-sans">
                  Certified Supply Chain &amp; OEM Sourcing Assurance.
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </Section>
  );
}
