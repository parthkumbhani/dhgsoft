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
  solutions: { label: string; name: string }[];
  icon: LucideIcon;
}

const PRODUCT_CATEGORIES: CategoryItem[] = [
  {
    num: "01",
    name: "Industrial Automation Systems",
    shortName: "Automation Systems",
    stageTitle: "Industrial Automation Systems",
    desc: "Enterprise-grade automation platforms for process control, machine automation, and real-time operational excellence.",
    image: "/images/home/supply-automation.png",
    badgeSubtitle: "Process Control • Machine Automation • Enterprise Platforms",
    solutions: [
      { label: "AUTOMATION PLATFORM", name: "PLC Systems & Programmable Controllers" },
      { label: "SUPERVISORY CONTROL", name: "SCADA Platforms & Plant Monitoring" },
      { label: "DISTRIBUTED CONTROL", name: "DCS Systems & Integrated Process Nodes" },
      { label: "OPERATOR INTERFACE", name: "HMI User Interfaces & Touch Displays" },
      { label: "CONTROL HARDWARE", name: "Industrial Controllers & Embedded Processing" },
      { label: "FIELD TELEMETRY", name: "Remote I/O Modules & Field Expansion" }
    ],
    icon: Cpu
  },
  {
    num: "02",
    name: "Industrial Networking & Connectivity",
    shortName: "Networking & Connectivity",
    stageTitle: "Industrial Networking & Connectivity",
    desc: "Secure and resilient industrial communication infrastructure connecting plant-floor OT operations with enterprise IT networks.",
    image: "/images/home/supply-networking.png",
    badgeSubtitle: "Plant-Floor Connectivity • Secure Gateways • Resilient Infrastructure",
    solutions: [
      { label: "NETWORK SWITCHES", name: "Managed Ethernet Switches & Redundant Rings" },
      { label: "SECURE ROUTERS", name: "Industrial Routers & Edge Gateways" },
      { label: "CYBER SECURITY", name: "OT Firewalls & Zero Trust Security" },
      { label: "WIRELESS CONNECTIVITY", name: "Industrial Wireless & Private 5G" },
      { label: "BUS CONVERTERS", name: "Fieldbus Converters & Serial Adapters" },
      { label: "OPTICAL NETWORKING", name: "Fiber Optic Transceivers & Converters" }
    ],
    icon: Network
  },
  {
    num: "03",
    name: "Industrial Computing & Edge Platforms",
    shortName: "Computing & Edge",
    stageTitle: "Industrial Computing & Edge Platforms",
    desc: "High-performance mission-critical edge computing hardware designed for rugged industrial environments.",
    image: "/images/home/supply-computing.png",
    badgeSubtitle: "Mission-Critical Hardware • Edge Compute • High Reliability",
    solutions: [
      { label: "INDUSTRIAL COMPUTING", name: "Rugged Industrial PCs (IPC) & DIN Mounts" },
      { label: "EDGE INTELLIGENCE", name: "Edge AI Computing Nodes & Processors" },
      { label: "EMBEDDED SERVERS", name: "DIN-Rail Embedded Servers & Storage" },
      { label: "WORKSTATION HARDWARE", name: "Rackmount Workstations & Processing" },
      { label: "FANLESS HARDWARE", name: "Fanless Box Controllers & Thermal Units" },
      { label: "EDGE GATEWAYS", name: "Multi-Protocol Edge Gateways & Cloud Sync" }
    ],
    icon: Server
  },
  {
    num: "04",
    name: "Drives & Motion Control",
    shortName: "Drives & Motion",
    stageTitle: "Drives & Motion Control",
    desc: "Advanced motion control technologies designed to maximise machine speed, dynamic precision, energy efficiency, and motor protection.",
    image: "/images/home/supply-drives.png",
    badgeSubtitle: "Precision Control • Energy Efficiency • High Performance",
    solutions: [
      { label: "FREQUENCY DRIVES", name: "Variable Frequency Drives (VFD) & Inverters" },
      { label: "SERVO SYSTEMS", name: "Servo Drives & High-Precision Motors" },
      { label: "MOTION CONTROLLERS", name: "Multi-Axis Motion Controllers & Sync" },
      { label: "SOFT STARTERS", name: "Soft Starters & Acceleration Systems" },
      { label: "MOTOR PROTECTION", name: "Intelligent Motor Protection & Relays" },
      { label: "POWER RECOVERY", name: "Regenerative Power Units & Resistors" }
    ],
    icon: Zap
  },
  {
    num: "05",
    name: "Instrumentation & Field Devices",
    shortName: "Instrumentation",
    stageTitle: "Instrumentation & Field Devices",
    desc: "Intelligent field sensors and process instrumentation providing ultra-accurate measurement, monitoring, and telemetry.",
    image: "/images/home/supply-instrumentation.png",
    badgeSubtitle: "Accurate Measurement • Process Intelligence • Smart Monitoring",
    solutions: [
      { label: "PRESSURE SENSORS", name: "Smart Pressure Transmitters & Gauges" },
      { label: "FLOW MEASUREMENT", name: "Electromagnetic Meters & Ultrasonic Flow" },
      { label: "TEMPERATURE TELEMETRY", name: "Temperature Sensors, Thermocouples & RTDs" },
      { label: "LEVEL MONITORING", name: "Radar Level Transmitters & Guided Probes" },
      { label: "PROCESS ANALYTICS", name: "Gas Analyzers & Liquid Quality Analytics" },
      { label: "VALVE ACTUATION", name: "Control Valves & Electric Actuators" }
    ],
    icon: Gauge
  },
  {
    num: "06",
    name: "Industrial IoT & Smart Devices",
    shortName: "Industrial IoT",
    stageTitle: "Industrial IoT & Smart Devices",
    desc: "Connected wireless smart sensors enabling continuous asset telemetry, vibration diagnostics, and predictive maintenance.",
    image: "/images/home/supply-iot.png",
    badgeSubtitle: "Real-Time Telemetry • Predictive Maintenance • Connected Assets",
    solutions: [
      { label: "IIOT SENSORS", name: "Wireless IIoT Sensors & Battery Nodes" },
      { label: "PREDICTIVE MONITORING", name: "Condition Monitoring Nodes & Telemetry" },
      { label: "VIBRATION DIAGNOSTICS", name: "Vibration Sensors & Acoustic Diagnostics" },
      { label: "SMART GATEWAYS", name: "Smart Asset Gateways & Transmission" },
      { label: "ENVIRONMENTAL SENSORS", name: "Environmental Telemetry & Climate Monitors" },
      { label: "DATA LOGGERS", name: "Edge Data Loggers & Onboard Data Caching" }
    ],
    icon: Radio
  },
  {
    num: "07",
    name: "Electrical Power Distribution",
    shortName: "Power Distribution",
    stageTitle: "Electrical Power Distribution",
    desc: "Reliable electrical infrastructure components supporting safe, efficient, and intelligent industrial power management.",
    image: "/images/home/supply-power.png",
    badgeSubtitle: "Safe Distribution • Power Quality • Electrical Protection",
    solutions: [
      { label: "SWITCHGEAR PANELS", name: "Low Voltage Switchgear & Distribution" },
      { label: "MOTOR CONTROL", name: "Motor Control Centers (MCC Assemblies)" },
      { label: "PROTECTION RELAYS", name: "Digital Protection Relays & Feeders" },
      { label: "BUSBAR SYSTEMS", name: "Busbar Trunking Systems & Conductors" },
      { label: "POWER QUALITY", name: "Power Quality Filters & Harmonic Mitigation" },
      { label: "ENERGY METERS", name: "Smart Energy Meters & Sub-Metering Units" }
    ],
    icon: ShieldCheck
  },
  {
    num: "08",
    name: "Industrial Software & Licensing",
    shortName: "Software & Licensing",
    stageTitle: "Industrial Software & Licensing",
    desc: "Enterprise software subscriptions and historian platforms driving industrial digital transformation and analytics.",
    image: "/images/home/supply-software.png",
    badgeSubtitle: "Operations Management • Industrial Analytics • Subscriptions",
    solutions: [
      { label: "SCADA SOFTWARE", name: "SCADA & HMI Software Subscriptions" },
      { label: "HISTORIAN DATABASES", name: "Process Historian Databases & Time-Series" },
      { label: "ANALYTICS ENGINES", name: "Industrial Analytics Engines & OEE Trackers" },
      { label: "MES EXECUTION", name: "MES Batch Execution & Manufacturing" },
      { label: "ENGINEERING SUITES", name: "PLC Engineering Suites & CAD Licenses" },
      { label: "SOFTWARE LICENSING", name: "OEM Software Subscriptions & Enterprise Keys" }
    ],
    icon: FileCode
  },
  {
    num: "09",
    name: "Technology Procurement & Supply Chain",
    shortName: "Procurement & Supply",
    stageTitle: "Technology Procurement & Supply Chain",
    desc: "Delivering genuine industrial technologies through authorised OEM sourcing, global logistics, and engineering warranty.",
    image: "/images/home/supply-procurement.png",
    badgeSubtitle: "Authorised Sourcing • Global Logistics • Lifecycle Support",
    solutions: [
      { label: "AUTHORISED SOURCING", name: "Authorised OEM Sourcing & Genuine Parts" },
      { label: "GLOBAL LOGISTICS", name: "Global Spares Logistics & Customs Freight" },
      { label: "EXPEDITED SUPPLY", name: "Expedited Spares Supply & Emergency Delivery" },
      { label: "WARRANTY SUPPORT", name: "OEM Warranty Support & Replacement" },
      { label: "LIFECYCLE MANAGEMENT", name: "Lifecycle Spares Management & Obsolete Parts" },
      { label: "PROCUREMENT CONSULTING", name: "Procurement Consulting & BOM Optimization" }
    ],
    icon: Truck
  }
];

export default function Ecosystem() {
  const [activeIdx, setActiveIdx] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const activeCategory = PRODUCT_CATEGORIES[activeIdx];

  const handleRequestClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => {
        const emailInput = document.getElementById('email') as HTMLInputElement;
        if (emailInput) {
          emailInput.focus();
        }
      }, 500);
    }
  };

  return (
    <section
      ref={sectionRef}
      id="technology-ecosystem"
      style={{ backgroundColor: '#0A0E1A' }}
      className="w-full text-white relative overflow-hidden border-b border-slate-900 select-none pt-16 md:pt-20 pb-8 md:pb-10 min-h-screen flex flex-col justify-between"
    >
      <Container size="wide" className="relative z-10 w-full flex flex-col justify-between h-full flex-grow gap-6">
        
        {/* ── 1. SINGLE-LINE EDGE-TO-EDGE HEADER ── */}
        <div className="text-left w-full max-w-none mb-2">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="w-2 h-2 rounded-full bg-[#C2185B] animate-pulse" />
            <span className="text-[11px] font-extrabold text-[#C2185B] uppercase tracking-[0.25em] font-sans">
              INDUSTRIAL PRODUCTS &amp; TECHNOLOGY SUPPLY
            </span>
          </div>
          
          {/* Title stretched across 1 SINGLE LINE on desktop */}
          <h2 className="text-2xl md:text-3xl lg:text-[32px] font-extrabold tracking-tight text-white font-headline leading-tight mb-2 w-full max-w-none whitespace-nowrap lg:whitespace-normal">
            Trusted Industrial Technology. Global Partners. Reliable Solutions.
          </h2>
          
          {/* Description stretched full width below */}
          <p className="text-[13.5px] lg:text-[14px] text-slate-300 leading-relaxed font-sans w-full max-w-5xl">
            Unified digital layers built to connect telemetry devices, enterprise systems, and cloud intelligence seamlessly under a secure operational framework.
          </p>
        </div>

        {/* ── 2. DESKTOP MAIN STAGE GRID (EXPANDED TO H-[570PX] TO GUARANTEE CTA BUTTON IS 100% VISIBLE AT BOTTOM) ── */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-6 my-auto items-stretch h-[570px]">
          
          {/* LEFT VISUAL HERO CARD (8 COLS, FULL H-[545PX]) */}
          <div className="lg:col-span-8 flex flex-col justify-between h-[570px]">
            
            <div 
              className="relative rounded-[24px] overflow-hidden border border-[#8C123B]/20 shadow-2xl h-[545px] flex flex-col justify-between p-7 lg:p-8 text-left group"
              style={{ backgroundColor: '#0A0E1A' }}
            >
              {/* Top Accent Gradient Line */}
              <div className="absolute top-0 left-0 right-0 h-[3.5px] bg-gradient-to-r from-[#8C123B] via-[#C2185B] to-[#8C123B] z-30" />

              {/* 🖼️ DIRECT HTML <img> ELEMENT FOR 100% RELIABLE BROWSER RENDERING ACROSS ALL 9 CATEGORIES */}
              <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
                <img
                  key={activeIdx}
                  src={activeCategory.image}
                  alt={activeCategory.name}
                  className="w-full h-full object-cover object-center opacity-95 transition-opacity duration-300 select-none pointer-events-none"
                />

                {/* Subtle Bottom Gradient Overlay for Clean Text Contrast */}
                <div 
                  className="absolute inset-0 pointer-events-none z-10"
                  style={{
                    background: 'linear-gradient(to top, rgba(10, 14, 26, 0.97) 0%, rgba(10, 14, 26, 0.6) 55%, rgba(10, 14, 26, 0.15) 100%)'
                  }}
                />
              </div>

              {/* Content Inside Visual Card */}
              <div className="relative z-20 w-full flex flex-col justify-between h-full">
                
                {/* Top Badge Tag */}
                <div className="flex items-center justify-between w-full mb-2">
                  <span className="text-[10px] font-extrabold text-white bg-gradient-to-r from-[#8C123B] to-[#C2185B] uppercase tracking-[0.2em] font-sans px-3.5 py-1 rounded-md shadow-md border border-white/10">
                    FEATURED INDUSTRIAL CATEGORY
                  </span>
                </div>

                {/* Main Content Area */}
                <div className="flex flex-col justify-between flex-grow">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeIdx}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.2 }}
                      className="flex flex-col justify-between h-full"
                    >
                      {/* Header & Subtitle */}
                      <div>
                        <h3 className="text-2xl lg:text-[30px] font-extrabold text-white tracking-tight mb-1.5 font-headline drop-shadow-md leading-tight">
                          {activeCategory.name}
                        </h3>

                        <p className="text-[13px] text-slate-100 leading-relaxed mb-3 max-w-2xl font-sans drop-shadow-sm">
                          {activeCategory.desc}
                        </p>
                      </div>

                      {/* ── 🌟 BRAND THEME RECTANGULAR SOLUTION CARDS (COMPACT FIT) ── */}
                      <div className="grid grid-cols-2 gap-3 mb-4 max-w-2xl">
                        {activeCategory.solutions.map((sol, idx) => (
                          <div
                            key={idx}
                            style={{ 
                              background: 'linear-gradient(135deg, rgba(140, 18, 59, 0.40) 0%, rgba(11, 17, 32, 0.95) 100%)'
                            }}
                            className="rounded-xl p-3 px-3.5 flex items-start gap-2.5 shadow-xl border border-[#8C123B]/60 hover:border-[#C2185B] hover:shadow-[0_0_22px_rgba(194,24,91,0.40)] hover:-translate-y-0.5 transition-all duration-300 text-left backdrop-blur-md group/sol min-h-[68px] relative overflow-hidden"
                          >
                            {/* Glowing Left Crimson Brand Accent Line */}
                            <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-[#C2185B] via-[#8C123B] to-[#C2185B] opacity-80 group-hover/sol:opacity-100 transition-opacity" />

                            {/* Top-Left Signature Crimson Badge Icon */}
                            <div className="w-6.5 h-6.5 rounded-lg bg-[#8C123B] text-white flex items-center justify-center shrink-0 shadow-md border border-[#C2185B]/60 group-hover/sol:scale-110 group-hover/sol:bg-[#C2185B] transition-all mt-0.5">
                              <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                            </div>

                            {/* Stacked Text Content */}
                            <div className="min-w-0 flex-grow">
                              <span className="text-[8px] font-extrabold text-[#C2185B] uppercase tracking-widest block font-sans mb-0.5 group-hover/sol:text-pink-300 transition-colors">
                                {sol.label}
                              </span>
                              <h5 className="text-[12px] font-extrabold text-white font-headline leading-snug">
                                {sol.name}
                              </h5>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* 🔘 100% VISIBLE BOTTOM CTA BUTTON ("REQUEST →" WITH SMOOTH SCROLL TO CONTACT FORM) */}
                      <div className="pt-1">
                        <button 
                          onClick={handleRequestClick}
                          className="flex items-center gap-3 text-[12.5px] font-extrabold text-white px-7 py-2.5 rounded-full bg-gradient-to-r from-[#8C123B] via-[#C2185B] to-[#8C123B] hover:from-[#C2185B] hover:to-[#8C123B] shadow-[0_0_22px_rgba(194,24,91,0.5)] hover:shadow-[0_0_32px_rgba(194,24,91,0.65)] hover:scale-[1.03] transition-all duration-300 cursor-pointer font-sans tracking-wider uppercase"
                        >
                          <span>REQUEST</span>
                          <div className="w-5.5 h-5.5 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                            <ArrowRight className="w-3.5 h-3.5 text-white" />
                          </div>
                        </button>
                      </div>

                    </motion.div>
                  </AnimatePresence>
                </div>

              </div>

            </div>

            {/* Bottom Progress Bar Line */}
            <div className="flex items-center gap-3 px-1 text-[11px] font-bold text-slate-500 font-sans mt-2">
              <div className="h-[2px] flex-grow bg-slate-800 rounded-full relative overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-[#8C123B] to-[#C2185B] transition-all duration-300 rounded-full"
                  style={{ width: `${((activeIdx + 1) / PRODUCT_CATEGORIES.length) * 100}%` }}
                />
              </div>
            </div>

          </div>

          {/* RIGHT CATEGORY SELECTOR RAIL (NARROW 4 COLS - COMPACT, H-[570PX]) ── */}
          <div className="lg:col-span-4 flex flex-col justify-between h-[570px] gap-2">
            {PRODUCT_CATEGORIES.map((cat, idx) => {
              const isActive = activeIdx === idx;
              const Icon = cat.icon;

              return (
                <button
                  key={idx}
                  onMouseEnter={() => setActiveIdx(idx)}
                  onClick={() => setActiveIdx(idx)}
                  style={{
                    backgroundColor: isActive ? '#111827' : 'rgba(11, 17, 32, 0.55)',
                    borderColor: isActive ? '#8C123B' : 'rgba(30, 41, 59, 0.6)'
                  }}
                  className={`w-full flex items-center gap-3 p-3.5 px-4 rounded-[14px] cursor-pointer select-none transition-all duration-200 text-left border relative overflow-hidden ${
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
                    className={`w-7 h-7 rounded-full flex items-center justify-center transition-all duration-200 shrink-0 ${
                      isActive 
                        ? "bg-[#8C123B] text-white shadow-[0_0_10px_rgba(140,18,59,0.6)]" 
                        : "bg-slate-800 text-slate-400"
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  
                  {/* Category Info */}
                  <div className="flex-grow min-w-0 flex items-center justify-between">
                    <span className={`text-[13px] font-extrabold tracking-tight font-headline truncate ${
                      isActive ? "text-white" : "text-slate-200"
                    }`}>
                      {cat.name}
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

                  <button 
                    onClick={handleRequestClick}
                    className="flex items-center gap-1.5 text-[11px] font-bold text-white px-4 py-2 rounded-full bg-[#8C123B] cursor-pointer font-sans w-fit"
                  >
                    <span>REQUEST</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </Container>
    </section>
  );
}
