'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { 
  Car, 
  Factory, 
  Zap, 
  Activity, 
  TrendingUp, 
  Clock, 
  ShieldCheck, 
  ArrowRight,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

interface KPI {
  value: string;
  label: string;
  iconKey: string;
  textCol: string;
  bg: string;
}

interface CaseStudy {
  id: string;
  name: string;
  iconKey: string;
  title: string;
  description: string;
  image: string;
  kpis: KPI[];
}

const INDUSTRIES_DATA: CaseStudy[] = [
  {
    id: "automotive",
    name: "Automotive",
    iconKey: "automotive",
    title: "Connected Factory Transformation",
    description: "We implemented an AIoT-powered smart manufacturing solution that unified operations, connected machines, and delivered real-time insights across the plant.",
    image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1200&q=80",
    kpis: [
      { value: "42%", label: "Increase in Operational Efficiency", iconKey: "trending", textCol: "text-blue-600", bg: "bg-blue-50" },
      { value: "31%", label: "Reduction in Production Downtime", iconKey: "clock", textCol: "text-green-600", bg: "bg-green-50" },
      { value: "99.9%", label: "System Availability Achieved", iconKey: "shield", textCol: "text-purple-600", bg: "bg-purple-50" }
    ]
  },
  {
    id: "manufacturing",
    name: "Manufacturing",
    iconKey: "manufacturing",
    title: "AI-Powered Quality Assurance for Global Semiconductor Production",
    description: "We embedded deep-learning vision models directly into assembly lines to detect microscopic wafer defects. The system monitors raw silicon substrate events with sub-millisecond classification response times.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80",
    kpis: [
      { value: "99.8%", label: "Defect Detection Accuracy", iconKey: "shield", textCol: "text-blue-600", bg: "bg-blue-50" },
      { value: "28%", label: "Scrap Rate Reduction", iconKey: "trending", textCol: "text-green-600", bg: "bg-green-50" },
      { value: "15ms", label: "Inspection Latency Enabled", iconKey: "clock", textCol: "text-purple-600", bg: "bg-purple-50" }
    ]
  },
  {
    id: "energy",
    name: "Energy",
    iconKey: "energy",
    title: "Grid Modernization & Predictive Load Dispatching",
    description: "Implemented a hybrid-cloud event-driven platform capable of processing millions of electrical telemetry events per second. The software optimizes green energy load distribution across regional grids.",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=80",
    kpis: [
      { value: "22%", label: "Renewable Integration Increase", iconKey: "trending", textCol: "text-blue-600", bg: "bg-blue-50" },
      { value: "18ms", label: "Network Load Dispatch Latency", iconKey: "clock", textCol: "text-green-600", bg: "bg-green-50" },
      { value: "99.999%", label: "Grid Service Reliability Achieved", iconKey: "shield", textCol: "text-purple-600", bg: "bg-purple-50" }
    ]
  },
  {
    id: "healthcare",
    name: "Healthcare",
    iconKey: "healthcare",
    title: "Decentralized Clinical Trial Analytics Platform",
    description: "Constructed a secure, HIPAA-compliant patient telemetry hub that securely aggregates real-time health data from consumer wearables. The platform provides clinical researchers with immediate anomaly detection alerts.",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80",
    kpis: [
      { value: "95%", label: "Patient Wearable Retention Rate", iconKey: "shield", textCol: "text-blue-600", bg: "bg-blue-50" },
      { value: "60%", label: "Trial Setup Acceleration", iconKey: "trending", textCol: "text-green-600", bg: "bg-green-50" },
      { value: "4.8/5", label: "Clinician CSAT Score Achieved", iconKey: "clock", textCol: "text-purple-600", bg: "bg-purple-50" }
    ]
  }
];

const TAB_ICONS: Record<string, React.ComponentType<any>> = {
  automotive: Car,
  manufacturing: Factory,
  energy: Zap,
  healthcare: Activity,
};

const KPI_ICONS: Record<string, React.ComponentType<any>> = {
  trending: TrendingUp,
  clock: Clock,
  shield: ShieldCheck,
};

function CountUp({ value, duration = 1000 }: { value: string; duration?: number }) {
  const [displayValue, setDisplayValue] = useState('');

  useEffect(() => {
    const numericMatch = value.match(/[\d.]+/);
    if (!numericMatch) {
      setDisplayValue(value);
      return;
    }

    const targetNum = parseFloat(numericMatch[0]);
    const prefix = value.substring(0, value.indexOf(numericMatch[0]));
    const suffix = value.substring(value.indexOf(numericMatch[0]) + numericMatch[0].length);

    const startTime = performance.now();

    let animationFrameId: number;

    const updateNumber = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      const easedProgress = progress * (2 - progress); // easeOutQuad
      const current = targetNum * easedProgress;

      const decimalPlaces = (numericMatch[0].split('.')[1] || '').length;
      const formatted = current.toFixed(decimalPlaces);

      setDisplayValue(`${prefix}${formatted}${suffix}`);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(updateNumber);
      } else {
        setDisplayValue(value);
      }
    };

    animationFrameId = requestAnimationFrame(updateNumber);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [value, duration]);

  return <span>{displayValue}</span>;
}

export default function CaseStudies() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const activeStudy = INDUSTRIES_DATA[activeIdx];

  const handlePrev = () => {
    setActiveIdx((prev) => (prev === 0 ? INDUSTRIES_DATA.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIdx((prev) => (prev === INDUSTRIES_DATA.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="case-studies" className="py-8 bg-[#FAFBFC] relative overflow-hidden border-b border-slate-100 select-none">
      
      {/* Background Soft Grids/Accents */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.015] z-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(15, 23, 42, 0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(15, 23, 42, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16 relative z-10 w-full flex flex-col">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
            <span className="text-[11px] font-extrabold text-blue-600 uppercase tracking-[0.25em] font-sans">
              PROVEN RESULTS
            </span>
          </div>
          <h2 className="text-[32px] md:text-[40px] font-extrabold text-slate-900 tracking-tight leading-tight font-headline mb-3 text-center">
            Enterprise Impact Stories
          </h2>
          <p className="text-slate-500 text-[14px] md:text-[15px] leading-relaxed font-sans max-w-lg mx-auto text-center">
            Real outcomes from real implementations.<br />
            Driving measurable impact across industries.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex justify-center mb-10 w-full">
          <div className="flex items-center border-b border-slate-200/80 overflow-x-auto no-scrollbar w-full max-w-3xl justify-center">
            {INDUSTRIES_DATA.map((study, idx) => {
              const isActive = activeIdx === idx;
              const IconComponent = TAB_ICONS[study.iconKey];
              
              return (
                <React.Fragment key={study.id}>
                  {/* Tab Item */}
                  <button
                    onClick={() => setActiveIdx(idx)}
                    className={`flex items-center gap-2 pb-4 px-4 text-[12px] md:text-[13px] font-extrabold tracking-wider transition-all relative cursor-pointer uppercase whitespace-nowrap focus:outline-none ${
                      isActive ? "text-blue-600 font-bold" : "text-slate-455 hover:text-slate-700"
                    }`}
                  >
                    {IconComponent && <IconComponent className={`w-4 h-4 ${isActive ? 'text-blue-600' : 'text-slate-400'}`} />}
                    <span>{study.name}</span>
                    {isActive && (
                      <motion.div
                        layoutId="activeTabUnderline"
                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-blue-600"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </button>

                  {/* Vertical Divider between Tabs */}
                  {idx < INDUSTRIES_DATA.length - 1 && (
                    <div className="w-[1px] h-4 bg-slate-200 self-center mx-2 mb-4" />
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>

        {/* Main Content Area: Slider Card */}
        <div className="w-full max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIdx}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col md:flex-row w-full rounded-[24px] border border-slate-200/80 bg-white overflow-hidden shadow-[0_20px_50px_rgba(15,23,42,0.06)] min-h-[420px]"
            >
              {/* Left Side: Image Container */}
              <div 
                className="w-full md:w-[42%] aspect-[16/10] md:aspect-auto md:min-h-[420px] relative overflow-hidden bg-slate-50"
                style={{
                  clipPath: isMobile ? 'none' : 'polygon(0 0, 100% 0, 82% 100%, 0 100%)'
                }}
              >
                <img
                  src={activeStudy.image}
                  alt={activeStudy.title}
                  className="w-full h-full object-cover select-none"
                />
                
                {/* Slanted blue divider line (SVG layered over top, only on desktop) */}
                {!isMobile && (
                  <svg 
                    className="absolute inset-0 w-full h-full pointer-events-none z-20" 
                    viewBox="0 0 100 100" 
                    preserveAspectRatio="none"
                  >
                    <line x1="100" y1="0" x2="82" y2="100" stroke="#2563EB" strokeWidth="1.5" />
                  </svg>
                )}

                {/* White Dot Grid on top-left of the image */}
                <div className="absolute top-6 left-6 opacity-30 z-20">
                  <svg width="28" height="50" viewBox="0 0 28 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="4" cy="4" r="1.5" fill="white" />
                    <circle cx="4" cy="14" r="1.5" fill="white" />
                    <circle cx="4" cy="24" r="1.5" fill="white" />
                    <circle cx="4" cy="34" r="1.5" fill="white" />
                    <circle cx="4" cy="44" r="1.5" fill="white" />
                    <circle cx="14" cy="4" r="1.5" fill="white" />
                    <circle cx="14" cy="14" r="1.5" fill="white" />
                    <circle cx="14" cy="24" r="1.5" fill="white" />
                    <circle cx="14" cy="34" r="1.5" fill="white" />
                    <circle cx="14" cy="44" r="1.5" fill="white" />
                    <circle cx="24" cy="4" r="1.5" fill="white" />
                    <circle cx="24" cy="14" r="1.5" fill="white" />
                    <circle cx="24" cy="24" r="1.5" fill="white" />
                    <circle cx="24" cy="34" r="1.5" fill="white" />
                    <circle cx="24" cy="44" r="1.5" fill="white" />
                  </svg>
                </div>

                <div className="absolute inset-0 bg-slate-950/10 mix-blend-multiply pointer-events-none z-10" />
              </div>

              {/* Right Side: Content Container */}
              <div className="w-full md:w-[58%] p-6 md:p-10 lg:p-12 flex flex-col justify-between text-left">
                
                {/* Header info */}
                <div>
                  <span className="text-[10px] font-extrabold text-blue-600 uppercase tracking-widest block mb-2 font-sans">
                    Featured Case Study
                  </span>
                  <h3 className="text-xl md:text-2xl lg:text-[26px] font-extrabold text-slate-900 tracking-tight leading-snug mb-3 font-headline">
                    {activeStudy.title}
                  </h3>
                  <p className="text-slate-500 text-[13.5px] md:text-[14.5px] leading-relaxed font-sans mb-6 max-w-2xl">
                    {activeStudy.description}
                  </p>
                </div>

                {/* Metrics list (3 items) */}
                <div className="grid grid-cols-3 gap-2 sm:gap-4 border-t border-slate-100 pt-6 pb-4 mb-4 w-full">
                  {activeStudy.kpis.map((kpi, kIdx) => {
                    const KpiIcon = KPI_ICONS[kpi.iconKey];
                    return (
                      <div 
                        key={kIdx} 
                        className={`flex flex-col items-start pr-1 sm:pr-2 ${
                          kIdx < activeStudy.kpis.length - 1 ? 'border-r border-slate-100' : ''
                        }`}
                      >
                        <div className="flex items-center gap-1.5 mb-1.5">
                          {KpiIcon && (
                            <div className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full ${kpi.bg} flex items-center justify-center ${kpi.textCol}`}>
                              <KpiIcon className="w-3.5 h-3.5" />
                            </div>
                          )}
                          <span className={`text-lg sm:text-2xl font-black ${kpi.textCol} tracking-tight leading-none`}>
                            <CountUp value={kpi.value} />
                          </span>
                        </div>
                        <span className="text-[9px] sm:text-[10.5px] text-slate-500 font-semibold leading-tight text-left">
                          {kpi.label}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* Bottom Row: Link and Slider Controls */}
                <div className="flex items-center justify-between mt-4">
                  {/* Link to Full Study */}
                  <Link
                    href={`/insights/case-studies/${
                      activeStudy.id === "automotive" ? "automotive-oem-downtime" :
                      activeStudy.id === "manufacturing" ? "semiconductor-fab-yield" :
                      activeStudy.id === "energy" ? "energy-utility-grid" :
                      "food-beverages-traceability"
                    }`}
                    className="inline-flex items-center gap-1.5 text-[11px] font-extrabold text-blue-600 uppercase tracking-wider hover:text-blue-700 transition-colors py-1.5 relative group border-b-2 border-blue-600/70 hover:border-blue-600 cursor-pointer"
                  >
                    <span>View Full Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>

                  {/* Navigation Arrows & Index */}
                  <div className="flex items-center gap-3">
                    {/* Left Button */}
                    <button
                      onClick={handlePrev}
                      className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 hover:border-slate-300 transition-all active:scale-95 cursor-pointer"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>

                    {/* Page Index */}
                    <span className="text-xs font-medium text-slate-400 font-sans tracking-wide">
                      <strong className="text-slate-800 font-bold">0{activeIdx + 1}</strong> / 0{INDUSTRIES_DATA.length}
                    </span>

                    {/* Right Button */}
                    <button
                      onClick={handleNext}
                      className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 hover:border-slate-300 transition-all active:scale-95 cursor-pointer"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
