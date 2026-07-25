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
import { Container } from '@/components/ui/Container';

interface CategoryItem {
  num: string;
  name: string;
  shortName: string;
  stageTitle: string;
  desc: string;
  image: string;
  badgeSubtitle: string;
  kpiHighlight: string;
  kpiDetail: string;
  solutions: string[];
  icon: LucideIcon;
}

const PRODUCT_CATEGORIES: CategoryItem[] = [
  {
    num: "01",
    name: "Industrial Automation Systems",
    shortName: "Automation Systems",
    stageTitle: "01. Industrial Automation Systems",
    desc: "Enterprise-grade automation platforms for process control, machine automation, and real-time operational excellence.",
    image: "/images/home/supply-automation.png",
    badgeSubtitle: "Process Control • Machine Automation • Enterprise Platforms",
    kpiHighlight: "Plant Efficiency: +42%",
    kpiDetail: "Reduction of manual operational reviews and automated error recovery.",
    solutions: ["PLC SYSTEMS", "SCADA", "DCS", "HMI PLATFORMS", "REMOTE I/O"],
    icon: Cpu
  },
  {
    num: "02",
    name: "Industrial Networking & Connectivity",
    shortName: "Networking & Connectivity",
    stageTitle: "02. Industrial Networking & Connectivity",
    desc: "Secure and resilient industrial communication infrastructure connecting plant-floor OT operations with enterprise IT networks.",
    image: "/images/home/supply-networking.png",
    badgeSubtitle: "Plant-Floor Connectivity • Secure Gateways • Resilient Infrastructure",
    kpiHighlight: "Network Uptime: 99.999%",
    kpiDetail: "Zero-loss data transmission across harsh industrial wireless environments.",
    solutions: ["ETHERNET SWITCHES", "ROUTERS", "GATEWAYS", "FIREWALLS", "WIRELESS OT"],
    icon: Network
  },
  {
    num: "03",
    name: "Industrial Computing & Edge Platforms",
    shortName: "Computing & Edge",
    stageTitle: "03. Industrial Computing & Edge Platforms",
    desc: "High-performance mission-critical edge computing hardware designed for rugged industrial environments.",
    image: "/images/home/supply-computing.png",
    badgeSubtitle: "Mission-Critical Hardware • Edge Compute • High Reliability",
    kpiHighlight: "Latency Reduction: -65%",
    kpiDetail: "Real-time edge analytics eliminating cloud roundtrip delay.",
    solutions: ["INDUSTRIAL PCs", "EDGE DEVICES", "RUGGED SERVERS", "EMBEDDED", "WORKSTATIONS"],
    icon: Server
  },
  {
    num: "04",
    name: "Drives & Motion Control",
    shortName: "Drives & Motion",
    stageTitle: "04. Drives & Motion Control",
    desc: "Advanced motion control technologies designed to maximise machine speed, dynamic precision, energy efficiency, and motor protection.",
    image: "/images/home/supply-drives.png",
    badgeSubtitle: "Precision Control • Energy Efficiency • High Performance",
    kpiHighlight: "Energy Saved: up to 35%",
    kpiDetail: "Optimized VFD motor frequency tuning and harmonic mitigation.",
    solutions: ["VFD DRIVES", "SERVO DRIVES", "MOTION CONTROLLERS", "SOFT STARTERS", "MOTOR CONTROL"],
    icon: Zap
  },
  {
    num: "05",
    name: "Instrumentation & Field Devices",
    shortName: "Instrumentation",
    stageTitle: "05. Instrumentation & Field Devices",
    desc: "Intelligent field sensors and process instrumentation providing ultra-accurate measurement, monitoring, and telemetry.",
    image: "/images/home/supply-instrumentation.png",
    badgeSubtitle: "Accurate Measurement • Process Intelligence • Smart Monitoring",
    kpiHighlight: "Precision Accuracy: ±0.05%",
    kpiDetail: "High-repeatability measurement under extreme thermal conditions.",
    solutions: ["PRESSURE SENSORS", "FLOW METERS", "TEMP SENSORS", "LEVEL METERS", "ANALYTICAL"],
    icon: Gauge
  },
  {
    num: "06",
    name: "Industrial IoT & Smart Devices",
    shortName: "Industrial IoT",
    stageTitle: "06. Industrial IoT & Smart Devices",
    desc: "Connected wireless smart sensors enabling continuous asset telemetry, vibration diagnostics, and predictive maintenance.",
    image: "/images/home/supply-iot.png",
    badgeSubtitle: "Real-Time Telemetry • Predictive Maintenance • Connected Assets",
    kpiHighlight: "Unplanned Downtime: -58%",
    kpiDetail: "Early fault detection before mechanical component failure.",
    solutions: ["IIOT SENSORS", "EDGE GATEWAYS", "WIRELESS VIBRATION", "REMOTE MONITORS", "DATA LOGGERS"],
    icon: Radio
  },
  {
    num: "07",
    name: "Electrical Power Distribution",
    shortName: "Power Distribution",
    stageTitle: "07. Electrical Power Distribution",
    desc: "Reliable electrical infrastructure components supporting safe, efficient, and intelligent industrial power management.",
    image: "/images/home/supply-power.png",
    badgeSubtitle: "Safe Distribution • Power Quality • Electrical Protection",
    kpiHighlight: "Power Reliability: 100%",
    kpiDetail: "Automated busbar protection relays and transient suppression.",
    solutions: ["LV SWITCHGEAR", "MCC & PCC", "PROTECTION RELAYS", "BUSBAR SYSTEMS", "POWER METERS"],
    icon: ShieldCheck
  },
  {
    num: "08",
    name: "Industrial Software & Licensing",
    shortName: "Software & Licensing",
    stageTitle: "08. Industrial Software & Licensing",
    desc: "Enterprise software subscriptions and historian platforms driving industrial digital transformation and analytics.",
    image: "/images/home/supply-software.png",
    badgeSubtitle: "Operations Management • Industrial Analytics • Subscriptions",
    kpiHighlight: "License Compliance: 100%",
    kpiDetail: "Centralized software subscription lifecycle management.",
    solutions: ["SCADA SUITE", "HISTORIAN", "ANALYTICS ENGINE", "ENGINEERING TOOLS", "LICENSING"],
    icon: FileCode
  },
  {
    num: "09",
    name: "Technology Procurement & Supply Chain",
    shortName: "Procurement & Supply",
    stageTitle: "09. Technology Procurement & Supply Chain",
    desc: "Delivering genuine industrial technologies through authorised OEM sourcing, global logistics, and engineering warranty.",
    image: "/images/home/supply-procurement.png",
    badgeSubtitle: "Authorised Sourcing • Global Logistics • Lifecycle Support",
    kpiHighlight: "On-Time Sourcing: 98.4%",
    kpiDetail: "Direct OEM tier-1 allocation for critical industrial spares.",
    solutions: ["OEM SOURCING", "GLOBAL LOGISTICS", "EXPEDITED DELIVERY", "WARRANTY", "CONSULTING"],
    icon: Truck
  }
];

export default function Ecosystem() {
  const [activeIdx, setActiveIdx] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const activeCategory = PRODUCT_CATEGORIES[activeIdx];

  return (
    <section
      ref={sectionRef}
      id="technology-ecosystem"
      style={{ backgroundColor: '#0A0E1A' }}
      className="w-full text-white relative overflow-hidden border-b border-slate-900 select-none py-6 lg:py-8 min-h-screen flex flex-col justify-between"
    >
      <Container size="wide" className="relative z-10 w-full flex flex-col justify-between h-full flex-grow gap-4">
        
        {/* ── 1. SECTION HEADER ── */}
        <div className="text-left max-w-3xl">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="w-2 h-2 rounded-full bg-[#C2185B] animate-pulse" />
            <span className="text-[11px] font-extrabold text-[#C2185B] uppercase tracking-[0.25em] font-sans">
              INDUSTRIAL PRODUCTS &amp; TECHNOLOGY SUPPLY
            </span>
          </div>
          <h2 className="text-2xl lg:text-3xl font-extrabold tracking-tight text-white font-headline mb-1.5">
            Trusted Industrial Technology. Global Partners. Reliable Solutions.
          </h2>
          <p className="text-[13px] text-slate-300 leading-relaxed font-sans max-w-2xl">
            Unified digital layers built to connect telemetry devices, enterprise systems, and cloud intelligence seamlessly under a secure operational framework.
          </p>
        </div>

        {/* ── 2. DESKTOP MAIN STAGE GRID (EXACT H-[370PX], ULTRA-PREMIUM POLISH) ── */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-6 my-auto items-stretch h-[370px]">
          
          {/* LEFT VISUAL HERO CARD (7 Columns out of 12) */}
          <div className="lg:col-span-7 flex flex-col justify-between h-[370px]">
            
            <div 
              className="relative rounded-[24px] overflow-hidden border border-slate-800 shadow-2xl h-[340px] flex items-end p-6 lg:p-7 text-left group"
              style={{ backgroundColor: '#060A14' }}
            >
              {/* Top Accent Gradient Line */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#8C123B] via-[#C2185B] to-amber-400 z-30" />

              {/* Image Background */}
              <div className="absolute inset-0 w-full h-full overflow-hidden" style={{ backgroundColor: '#060A14' }}>
                <AnimatePresence mode="popLayout">
                  <motion.img
                    key={activeIdx}
                    src={activeCategory.image}
                    alt={activeCategory.name}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1.0 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                    className="w-full h-full object-cover select-none pointer-events-none opacity-85 group-hover:scale-1.04 transition-transform duration-700"
                  />
                </AnimatePresence>

                {/* Dark Vignette Overlay */}
                <div
                  className="absolute inset-0 pointer-events-none z-10"
                  style={{
                    background: 'linear-gradient(to top, rgba(10,14,26,0.98) 0%, rgba(10,14,26,0.55) 55%, rgba(10,14,26,0.2) 100%)',
                  }}
                />
              </div>

              {/* Content Inside Visual Card */}
              <div className="relative z-20 w-full flex flex-col justify-between h-full">
                
                {/* Top Badge Tag */}
                <div className="flex items-center justify-between w-full">
                  <span className="text-[9.5px] font-extrabold text-white bg-gradient-to-r from-[#8C123B] to-[#C2185B] uppercase tracking-[0.2em] font-sans px-3 py-0.5 rounded-md shadow-md border border-white/10">
                    CATEGORY {activeCategory.num} OF 09
                  </span>
                </div>

                {/* Bottom Content Area */}
                <div className="mt-auto">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeIdx}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.2 }}
                    >
                      <h3 className="text-2xl font-extrabold text-white tracking-tight mb-1 font-headline">
                        {activeCategory.name}
                      </h3>

                      <p className="text-[12px] text-slate-200 leading-relaxed mb-3 max-w-xl font-sans">
                        {activeCategory.desc}
                      </p>

                      {/* Glassmorphism Floating KPI Box */}
                      <div 
                        style={{ backgroundColor: 'rgba(11, 17, 32, 0.92)' }}
                        className="p-2.5 px-3.5 rounded-xl border border-slate-800/90 mb-3 max-w-md text-left shadow-xl backdrop-blur-md"
                      >
                        <div className="flex items-center gap-1.5 mb-0.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#C2185B] animate-pulse" />
                          <span className="text-[8.5px] font-extrabold text-amber-400 uppercase tracking-widest block font-sans">
                            BUSINESS OUTCOME &amp; KPI
                          </span>
                        </div>
                        <div className="text-[12.5px] font-extrabold text-white font-headline">
                          {activeCategory.kpiHighlight}
                        </div>
                        <div className="text-[11px] text-slate-300 font-sans mt-0.5">
                          {activeCategory.kpiDetail}
                        </div>
                      </div>

                      {/* Tech Pill Badges */}
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {activeCategory.solutions.map((sol, idx) => (
                          <span
                            key={idx}
                            style={{ backgroundColor: '#0B1120' }}
                            className="border border-slate-700/80 text-slate-200 text-[8.5px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider font-sans hover:border-[#8C123B]/60 transition-colors"
                          >
                            {sol}
                          </span>
                        ))}
                      </div>

                      {/* Action CTA Button */}
                      <button className="flex items-center gap-2 text-[11px] font-extrabold text-white px-5 py-2 rounded-full bg-gradient-to-r from-[#8C123B] via-[#C2185B] to-[#F59E0B] shadow-md hover:scale-[1.02] transition-all cursor-pointer font-sans">
                        <span>REQUEST PRODUCT QUOTE</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </motion.div>
                  </AnimatePresence>
                </div>

              </div>

            </div>

            {/* Bottom Progress Bar Line */}
            <div className="flex items-center gap-3 px-1 text-[10.5px] font-bold text-slate-500 font-sans mt-1">
              <span>{activeCategory.num}</span>
              <div className="h-[2px] flex-grow bg-slate-800 rounded-full relative overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-[#8C123B] to-[#C2185B] transition-all duration-300 rounded-full"
                  style={{ width: `${((activeIdx + 1) / PRODUCT_CATEGORIES.length) * 100}%` }}
                />
              </div>
              <span>09</span>
            </div>

          </div>

          {/* RIGHT CATEGORY SELECTOR RAIL (5 Columns out of 12 - ACCENT GLOWS, 0 OVERLAP) ── */}
          <div className="lg:col-span-5 flex flex-col justify-between h-[370px]">
            {PRODUCT_CATEGORIES.map((cat, idx) => {
              const isActive = activeIdx === idx;
              const Icon = cat.icon;

              return (
                <button
                  key={idx}
                  onMouseEnter={() => setActiveIdx(idx)}
                  onClick={() => setActiveIdx(idx)}
                  style={{
                    backgroundColor: isActive ? '#111827' : 'rgba(11, 17, 32, 0.5)',
                    borderColor: isActive ? '#8C123B' : 'rgba(30, 41, 59, 0.6)'
                  }}
                  className={`w-full flex items-center gap-2.5 p-1.5 px-3 rounded-[12px] cursor-pointer select-none transition-all duration-200 text-left border relative overflow-hidden ${
                    isActive
                      ? "shadow-lg shadow-[#8C123B]/25 scale-[1.01]"
                      : "hover:bg-slate-900 text-slate-400"
                  }`}
                >
                  {/* Left Active Glow Pill */}
                  {isActive && (
                    <div className="w-1 h-4 rounded-full bg-[#C2185B] shadow-[0_0_8px_#C2185B] shrink-0" />
                  )}

                  {/* Circular Icon Badge */}
                  <div 
                    className={`w-6 h-6 rounded-full flex items-center justify-center transition-all duration-200 shrink-0 ${
                      isActive 
                        ? "bg-[#8C123B] text-white shadow-[0_0_10px_rgba(140,18,59,0.6)]" 
                        : "bg-slate-800 text-slate-400"
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  
                  {/* Category Info */}
                  <div className="flex-grow min-w-0 flex items-center justify-between gap-2">
                    <span className={`text-[12px] font-extrabold tracking-tight font-headline truncate ${
                      isActive ? "text-white" : "text-slate-200"
                    }`}>
                      {cat.name}
                    </span>
                    <span className={`text-[9.5px] font-extrabold font-sans shrink-0 ${
                      isActive ? "text-amber-400" : "text-slate-400"
                    }`}>
                      {cat.num}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

        </div>

        {/* ── TABLET & MOBILE RESPONSIVE VIEWS ── */}
        <div className="block lg:hidden w-full">
          <div className="flex overflow-x-auto gap-4 no-scrollbar scroll-smooth w-full px-1 py-2 snap-x snap-mandatory">
            {PRODUCT_CATEGORIES.map((cat, idx) => (
              <div 
                key={idx} 
                className="w-[85vw] shrink-0 snap-center bg-[#0B1120] border border-slate-800 rounded-[24px] overflow-hidden flex flex-col h-[380px] text-left"
              >
                <div className="w-full h-[160px] overflow-hidden relative">
                  <img src={cat.image} alt={cat.name} className="w-full h-full object-cover opacity-80" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="text-[9px] font-bold text-[#C2185B] uppercase tracking-wider bg-black/60 px-2.5 py-1 rounded-md">
                      CATEGORY {cat.num}
                    </span>
                  </div>
                </div>

                <div className="p-5 flex flex-col justify-between flex-grow">
                  <div>
                    <h4 className="text-lg font-bold text-white tracking-tight mb-1.5 font-headline">
                      {cat.name}
                    </h4>
                    <p className="text-[12px] text-slate-400 leading-relaxed font-sans mb-3 line-clamp-3">
                      {cat.desc}
                    </p>
                  </div>

                  <button className="flex items-center gap-1.5 text-[11px] font-bold text-white px-4 py-2 rounded-full bg-[#8C123B] cursor-pointer font-sans w-fit">
                    <span>Request Quote</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── 3. POLISHED WHY DHGSOFT BOTTOM BANNER ── */}
        <div 
          style={{ backgroundColor: '#0B1120', borderColor: 'rgba(30, 41, 59, 0.8)' }}
          className="w-full rounded-2xl p-2.5 px-4 border text-white shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-3 text-left mt-2"
        >
          <div className="flex items-center gap-2 shrink-0">
            <div className="w-5 h-5 rounded-lg bg-[#8C123B] text-white flex items-center justify-center shadow-md">
              <Sparkles className="w-3 h-3" />
            </div>
            <div>
              <span className="text-[8.5px] font-extrabold text-amber-400 uppercase tracking-widest block font-sans">
                WHY DHGSOFT
              </span>
              <h4 className="text-[12px] font-bold text-white font-headline">
                Authorised &amp; Trusted Technology Partner
              </h4>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] font-medium text-slate-300">
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#C2185B]" /> Genuine Products</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#C2185B]" /> Global Sourcing</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#C2185B]" /> Expert Selection</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#C2185B]" /> Engineering Support</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#C2185B]" /> Warranty Support</span>
          </div>
        </div>

      </Container>
    </section>
  );
}
