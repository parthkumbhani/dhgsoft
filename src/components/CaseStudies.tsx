'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface KPI {
  value: string;
  label: string;
}

interface CaseStudy {
  id: string;
  name: string;
  title: string;
  description: string;
  image: string;
  kpis: KPI[];
}

const INDUSTRIES_DATA: CaseStudy[] = [
  {
    id: "automotive",
    name: "Automotive",
    title: "Connected Factory Optimization for Global Automotive OEM",
    description: "DHGsoft deployed an integrated Industrial IoT telemetry network across assembly plant floors, bridging PLC datasets with local MES databases. This achieved real-time OEE reporting and enabled predictive machine maintenance schedules.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80",
    kpis: [
      { value: "42%", label: "OEE Improvement" },
      { value: "$3.2M", label: "Annual Savings" },
      { value: "31%", label: "Downtime Reduction" },
      { value: "99.9%", label: "Availability" }
    ]
  },
  {
    id: "manufacturing",
    name: "Manufacturing",
    title: "AI-Powered Quality Assurance for Global Semiconductor Production",
    description: "We embedded deep-learning vision models directly into assembly lines to detect microscopic wafer defects. The system monitors raw silicon substrate events with sub-millisecond classification response times.",
    image: "https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?auto=format&fit=crop&w=1200&q=80",
    kpis: [
      { value: "99.8%", label: "Defect Detection Accuracy" },
      { value: "28%", label: "Scrap Rate Reduction" },
      { value: "15ms", label: "Inspection Latency" },
      { value: "$4.5M", label: "Year-on-Year Savings" }
    ]
  },
  {
    id: "healthcare",
    name: "Healthcare",
    title: "Decentralized Clinical Trial Analytics Platform",
    description: "Constructed a secure, HIPAA-compliant patient telemetry hub that securely aggregates real-time health data from consumer wearables. The platform provides clinical researchers with immediate anomaly detection alerts.",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80",
    kpis: [
      { value: "95%", label: "Patient Retention Rate" },
      { value: "60%", label: "Trial Setup Acceleration" },
      { value: "0", label: "Security Incidents" },
      { value: "4.8/5", label: "Clinician CSAT" }
    ]
  },
  {
    id: "energy",
    name: "Energy",
    title: "Grid Modernization & Predictive Load Dispatching",
    description: "Implemented a hybrid-cloud event-driven platform capable of processing millions of electrical telemetry events per second. The software optimizes green energy load distribution across regional grids.",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=80",
    kpis: [
      { value: "22%", label: "Renewable Integration" },
      { value: "18ms", label: "Network Latency" },
      { value: "99.999%", label: "Grid Reliability" },
      { value: "14%", label: "Peak Demand Savings" }
    ]
  },
  {
    id: "financial",
    name: "Financial Services",
    title: "Real-time High-frequency Fraud Prevention Architecture",
    description: "Created an enterprise banking core layer featuring distributed transaction intelligence and sub-millisecond fraud evaluation. The solution intercepts anomalous movements across digital retail banking networks.",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80",
    kpis: [
      { value: "99.99%", label: "Fraud Interception Rate" },
      { value: "<8ms", label: "Approval Overhead" },
      { value: "$12M", label: "Loss Prevention Annual" },
      { value: "30M", label: "Daily Transactions Secured" }
    ]
  }
];

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

  const activeStudy = INDUSTRIES_DATA[activeIdx];

  return (
    <section id="case-studies" className="py-16 bg-[#FAFBFC] relative overflow-hidden border-b border-slate-100 select-none">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 relative z-10 w-full flex flex-col">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-12">
          <span className="text-xs font-bold text-blue-600 uppercase tracking-[0.25em] mb-4 block text-left">
            PROVEN RESULTS
          </span>
          <h2 className="text-[34px] md:text-[50px] font-extrabold text-slate-900 tracking-tight leading-[1.1] font-headline mb-4 text-left">
            Enterprise Impact Studies
          </h2>
          <p className="text-slate-500 text-[15px] md:text-[16px] leading-relaxed font-sans max-w-2xl text-left">
            Empirical outcomes delivered for leading global enterprises through high-fidelity engineering, scalable system architecture, and machine intelligence.
          </p>
        </div>

        {/* Horizontal Industry Selector */}
        <div className="flex border-b border-slate-200 mb-16 overflow-x-auto no-scrollbar gap-8 md:gap-12 w-full">
          {INDUSTRIES_DATA.map((study, idx) => {
            const isActive = activeIdx === idx;
            return (
              <button
                key={study.id}
                onClick={() => setActiveIdx(idx)}
                className={`pb-4 text-[14px] md:text-[15px] font-semibold tracking-wide transition-all relative cursor-pointer uppercase whitespace-nowrap focus:outline-none ${
                  isActive ? "text-slate-900 font-bold" : "text-slate-400 hover:text-slate-600"
                }`}
              >
                {study.name}
                {isActive && (
                  <motion.div
                    layoutId="activeUnderline"
                    className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-slate-900"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Main Content Area */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIdx}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="w-full flex flex-col text-left"
          >
            {/* 16:9 Visual Panel with subtle zoom in animation on enter */}
            <div className="relative aspect-[16/9] w-full rounded-[28px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.08)] bg-slate-100 border border-slate-200/50 mb-12">
              <motion.img
                initial={{ scale: 1.02 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                src={activeStudy.image}
                alt={activeStudy.title}
                className="w-full h-full object-cover select-none"
              />
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-slate-950/20 mix-blend-multiply pointer-events-none" />
            </div>

            {/* Title & Description with fade-up transition */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            >
              <h3 className="text-2xl md:text-3.5xl font-extrabold text-slate-900 tracking-tight leading-snug mb-4 font-headline text-left">
                {activeStudy.title}
              </h3>
              <p className="text-slate-600 text-[15px] md:text-[16px] leading-relaxed font-sans max-w-4xl mb-12 text-left">
                {activeStudy.description}
              </p>
            </motion.div>

            {/* KPI Metrics Row with fade-up transition */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 border-t border-b border-slate-200/60 py-10 mb-12 w-full"
            >
              {activeStudy.kpis.map((kpi, kIdx) => (
                <div key={kIdx} className="text-left flex flex-col justify-start">
                  <span className="text-[34px] md:text-[46px] font-black text-slate-900 tracking-tight leading-none mb-3">
                    <CountUp value={kpi.value} />
                  </span>
                  <span className="text-[11px] md:text-[12px] font-bold text-slate-500 uppercase tracking-widest leading-normal text-left">
                    {kpi.label}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* Bottom CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="flex justify-start"
            >
              <button className="flex items-center gap-2.5 px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white rounded-full font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none">
                <span>Read Case Study</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>

          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
