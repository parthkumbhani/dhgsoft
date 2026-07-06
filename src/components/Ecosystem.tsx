'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Cloud, 
  Cpu, 
  Brain, 
  Database, 
  Shield, 
  Layers, 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight 
} from 'lucide-react';
import { Section } from '@/components/ui/Section';

const ARCHITECTURE_DATA = [
  {
    num: "01",
    name: "Cloud Infrastructure",
    icon: Cloud,
    color: "#3B82F6", // Blue
    title: "Hybrid Cloud Infrastructure",
    description: "Enterprise hybrid-cloud environments scaled for massive OT/IT workloads.",
    detailDesc: "We deploy highly resilient, low-latency hybrid cloud frameworks that securely bridge on-premise industrial networks with hyperscaler compute capacity.",
    tech: ["AWS", "Azure", "Terraform", "Kubernetes"],
    kpi: "SLA Availability: 99.999%",
    outcome: "Zero-downtime migrations of legacy operational data to scalable cloud structures.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80"
  },
  {
    num: "02",
    name: "Enterprise Integration",
    icon: Cpu,
    color: "#8B5CF6", // Violet
    title: "Enterprise Integration Layer",
    description: "Seamless API orchestration and data synchronization across distributed silos.",
    detailDesc: "Connect legacy databases, enterprise resource planning (ERP) platforms, and real-time telemetry systems into a single event-driven architecture.",
    tech: ["FastAPI", "Apache Kafka", "GraphQL", "gRPC"],
    kpi: "Latency: <15ms",
    outcome: "Fully unified operational sync across global sites and remote networks.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80"
  },
  {
    num: "03",
    name: "AI Automation",
    icon: Brain,
    color: "#EC4899", // Pink
    title: "Intelligent AI Automation",
    description: "Self-optimizing pipelines and predictive workflows powered by custom models.",
    detailDesc: "Embed deep learning models directly into production streams to automate decision cycles, predict failures, and streamline manufacturing pipelines.",
    tech: ["PyTorch", "TensorFlow", "OpenAI API", "Kubeflow"],
    kpi: "Efficiency: +42%",
    outcome: "Reduction of manual operational reviews and automated error recovery.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200&q=80"
  },
  {
    num: "04",
    name: "Data Intelligence",
    icon: Database,
    color: "#F59E0B", // Amber
    title: "Data Intelligence Hub",
    description: "High-volume data processing and predictive intelligence modeling.",
    detailDesc: "Ingest and process terabytes of telemetry data using stream-processing clusters, transforming raw events into actionable business assets.",
    tech: ["Apache Spark", "Snowflake", "Databricks", "PostgreSQL"],
    kpi: "Data Volume: 5TB/day",
    outcome: "Real-time interactive dashboard queries with instant intelligence insights.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80"
  },
  {
    num: "05",
    name: "Cybersecurity",
    icon: Shield,
    color: "#EF4444", // Red
    title: "Zero-Trust Cybersecurity Architecture",
    description: "Zero-trust architectures securing critical network connections.",
    detailDesc: "Protect operations at every layer with granular perimeter defenses, encrypted transport tunnels, active threat monitoring, and strict authentication.",
    tech: ["Vault", "OpenVPN", "OAuth2", "Wazuh"],
    kpi: "Incident Rate: 0%",
    outcome: "Complete compliance with industrial cybersecurity standards and secure access.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80"
  },
  {
    num: "06",
    name: "Edge Computing",
    icon: Layers,
    color: "#06B6D4", // Cyan
    title: "Distributed Edge Computing",
    description: "Local compute layers for real-time telemetry processing.",
    detailDesc: "Deploy lightweight compute clusters directly onto local gateway devices to filter noise, run models, and verify telemetry before cloud upload.",
    tech: ["AWS IoT Greengrass", "Docker Edge", "MQTT", "K3s"],
    kpi: "Local Uptime: 100%",
    outcome: "Reduced bandwidth overhead and active offline execution capabilities.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80"
  }
];

export default function Ecosystem() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const containerRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const transitionTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  const activeIdxRef = useRef(0);
  const isAnimatingRef = useRef(false);

  // Sync state to refs for interval closure safety
  useEffect(() => {
    activeIdxRef.current = activeIdx;
  }, [activeIdx]);

  useEffect(() => {
    isAnimatingRef.current = isAnimating;
  }, [isAnimating]);

  // Single transition controller
  const goToStage = (targetIdx: number, direction: 'Next' | 'Prev' | 'Direct') => {
    if (isAnimatingRef.current) return;
    setIsAnimating(true);

    const currentStageNum = activeIdx + 1;
    const targetStageNum = targetIdx + 1;

    console.log(`Current Stage: 0${currentStageNum}`);
    console.log(`Direction: ${direction}`);

    if (direction === 'Next') {
      const rawTarget = currentStageNum + 1;
      console.log(`Target: 0${rawTarget > 6 ? 7 : rawTarget}`);
      if (rawTarget > 6) {
        console.log(`If target > 6\ntarget = 1`);
      }
    } else if (direction === 'Prev') {
      const rawTarget = currentStageNum - 1;
      console.log(`Target: 0${rawTarget < 1 ? 0 : rawTarget}`);
      if (rawTarget < 1) {
        console.log(`If target < 1\ntarget = 6`);
      }
    } else {
      console.log(`Target: 0${targetStageNum}`);
    }

    setActiveIdx(targetIdx);

    if (transitionTimeoutRef.current) {
      clearTimeout(transitionTimeoutRef.current);
    }

    transitionTimeoutRef.current = setTimeout(() => {
      setIsAnimating(false);
    }, 700);
  };

  const handleNext = () => {
    if (isAnimatingRef.current) return;
    const nextIdx = (activeIdxRef.current + 1) % 6;
    goToStage(nextIdx, 'Next');
  };

  const handlePrev = () => {
    if (isAnimatingRef.current) return;
    const prevIdx = (activeIdxRef.current - 1 + 6) % 6;
    goToStage(prevIdx, 'Prev');
  };

  // Unified timer / auto rotation loop
  useEffect(() => {
    if (isHovered) {
      return;
    }
    
    const interval = setInterval(() => {
      if (!isAnimatingRef.current) {
        const nextIdx = (activeIdxRef.current + 1) % 6;
        goToStage(nextIdx, 'Next');
      }
    }, 7000);

    return () => {
      clearInterval(interval);
    };
  }, [isHovered]);

  // Cleanup timeouts on unmount
  useEffect(() => {
    return () => {
      if (transitionTimeoutRef.current) {
        clearTimeout(transitionTimeoutRef.current);
      }
    };
  }, []);

  // Keyboard navigation listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isAnimating) return;
      if (e.key === "ArrowRight") {
        handleNext();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIdx, isAnimating]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 to 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5; // -0.5 to 0.5
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
    setIsHovered(false);
  };

  const currentStage = ARCHITECTURE_DATA[activeIdx] || ARCHITECTURE_DATA[0];

  return (
    <Section 
      id="technology-ecosystem" 
      variant="ink"
      containerSize="wide"
      className="bg-[#060B16] overflow-hidden border-b border-slate-950 select-none"
    >
      {/* Subtle animated background grid */}
      <motion.div 
        animate={{
          opacity: [0.08, 0.14, 0.08]
        }}
        transition={{
          repeat: Infinity,
          duration: 8,
          ease: "easeInOut"
        }}
        className="absolute inset-0 bg-[linear-gradient(to_right,#111827_1px,transparent_1px),linear-gradient(to_bottom,#111827_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-0"
      />

      {/* Parallax Background Glowing Blob */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <motion.div
          animate={{
            backgroundColor: currentStage.color,
            scale: isHovered ? 1.15 : 1,
            x: mousePos.x * -45, // Inverse parallax
            y: mousePos.y * -45
          }}
          transition={{ type: "tween", ease: "easeOut", duration: 0.8 }}
          className="absolute top-1/4 left-1/3 w-[450px] h-[450px] rounded-full blur-[140px] opacity-15 pointer-events-none"
        />
      </div>

      <div className="relative z-10 w-full flex flex-col">
        
        {/* Editorial Section Header */}
        <div className="text-left max-w-3xl mb-16">
          <span className="text-xs font-bold text-blue-500 uppercase tracking-[0.25em] mb-4 block">
            OPERATIONAL ARCHITECTURE
          </span>
          <h2 className="text-[34px] md:text-[50px] font-extrabold text-white tracking-tight leading-[1.1] font-headline mb-4">
            Technology Infrastructure Ecosystem
          </h2>
          <p className="text-slate-400 text-[15px] md:text-[16px] leading-relaxed font-sans max-w-2xl">
            Unified digital layers built to connect telemetry devices, enterprise systems, and cloud intelligence seamlessly under a secure, resilient operational framework.
          </p>
        </div>

        {/* ====================================================== */}
        {/* DESKTOP VIEW: Cinematic Showcase Left, Nav List Right */}
        {/* ====================================================== */}
        <div className="hidden lg:flex flex-row items-center justify-between gap-12 w-full min-h-[550px]">
          
          {/* Left Side: Cinematic 16:9 Panel */}
          <div className="w-[68%] flex flex-col items-start">
            <div 
              ref={containerRef}
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={handleMouseLeave}
              className="w-full h-[430px] rounded-[28px] overflow-hidden group shadow-[0_30px_70px_rgba(0,0,0,0.6)] bg-[#0A0F1E] border border-white/5 flex items-end relative"
            >
              {/* Image Crossfade Container */}
              <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeIdx}
                    src={currentStage.image}
                    alt={currentStage.title}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ 
                      opacity: 0.75, 
                      scale: 1.03,
                      x: mousePos.x * 22,
                      y: mousePos.y * 22
                    }}
                    exit={{ opacity: 0 }}
                    transition={{ 
                      opacity: { duration: 0.6 },
                      x: { type: "tween", ease: "easeOut", duration: 0.4 },
                      y: { type: "tween", ease: "easeOut", duration: 0.4 }
                    }}
                    className="w-full h-full object-cover select-none absolute inset-0"
                  />
                </AnimatePresence>
              </div>

              {/* Dynamic Particle Field */}
              <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
                {[...Array(12)].map((_, i) => (
                  <motion.span
                    key={i}
                    animate={{
                      y: [0, -120],
                      opacity: [0, 0.6, 0]
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 5 + (i % 4) * 2,
                      ease: "linear",
                      delay: i * 0.4
                    }}
                    className="absolute w-1 h-1 rounded-full bg-white/20 pointer-events-none"
                    style={{
                      left: `${(i * 8) % 95 + 2}%`,
                      bottom: "-10px"
                    }}
                  />
                ))}
              </div>

              {/* Cinematic Vignette Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent z-10 pointer-events-none" />

              {/* Left and Right Nav Chevrons (Appear on Hover) */}
              <div className="absolute inset-y-0 left-4 flex items-center z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrev();
                  }}
                  className="w-10 h-10 rounded-full bg-black/60 border border-white/10 text-white flex items-center justify-center hover:bg-black/85 hover:scale-105 transition-all"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
              </div>

              <div className="absolute inset-y-0 right-4 flex items-center z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNext();
                  }}
                  className="w-10 h-10 rounded-full bg-black/60 border border-white/10 text-white flex items-center justify-center hover:bg-black/85 hover:scale-105 transition-all"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Overlay Content (Bottom Left) */}
              <div className="absolute bottom-0 left-0 p-10 z-20 max-w-xl text-left">
                <motion.div
                  key={activeIdx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                  <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest block mb-2">
                    CAPABILITY {currentStage.num}
                  </span>
                  
                  <h3 className="text-3xl font-extrabold text-white tracking-tight leading-none mb-3 font-headline">
                    {currentStage.title}
                  </h3>
                  
                  <p className="text-[14px] text-slate-300 leading-relaxed mb-6 font-sans">
                    {currentStage.detailDesc}
                  </p>

                  <div className="bg-white/5 border border-white/10 rounded-xl p-4 mb-6">
                    <span className="text-[9px] font-bold text-blue-400 uppercase tracking-wider block mb-1">
                      Business Outcome & KPI
                    </span>
                    <p className="text-[12px] text-white font-bold leading-normal mb-0.5">
                      {currentStage.kpi}
                    </p>
                    <p className="text-[11.5px] text-slate-400 leading-relaxed font-sans">
                      {currentStage.outcome}
                    </p>
                  </div>
                  
                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {currentStage.tech.map((t, idx) => (
                      <span key={idx} className="bg-white/10 border border-white/10 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider font-sans">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-1.5 text-[11px] font-bold text-white uppercase tracking-wider cursor-pointer group/cta font-sans">
                    <span>Explore Capability</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/cta:translate-x-1" />
                  </div>
                </motion.div>
              </div>

            </div>

            {/* Premium Progress Indicators */}
            <div className="flex items-center gap-4 mt-6 select-none pl-4">
              <span className="text-[12px] font-bold text-slate-500 font-sans tracking-widest">
                0{activeIdx + 1}
              </span>
              <div className="w-[140px] h-[2px] bg-slate-800 rounded-full overflow-hidden relative">
                <div 
                  className="bg-white h-full transition-all duration-700 ease-out" 
                  style={{ width: `${((activeIdx + 1) / 6) * 100}%` }} 
                />
              </div>
              <span className="text-[12px] font-bold text-slate-700 font-sans tracking-widest">
                06
              </span>
            </div>

          </div>

          {/* Right Side: Capability Navigation List */}
          <div className="w-[28%] flex flex-col gap-3.5">
            {ARCHITECTURE_DATA.map((stage, idx) => {
              const isActive = activeIdx === idx;
              const Icon = stage.icon;
              
              return (
                <div
                  key={idx}
                  onMouseEnter={() => {
                    if (!isAnimating && activeIdx !== idx) {
                      goToStage(idx, 'Direct');
                    }
                  }}
                  onClick={() => {
                    if (!isAnimating && activeIdx !== idx) {
                      goToStage(idx, 'Direct');
                    }
                  }}
                  className={`flex items-center gap-4 p-4 rounded-[22px] cursor-pointer select-none transition-all duration-500 border ${
                    isActive
                      ? "bg-white/[0.04] border-white/10 shadow-lg scale-[1.03]"
                      : "border-transparent hover:bg-white/[0.02]"
                  }`}
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-300 ${
                    isActive ? "bg-blue-500 text-white" : "bg-white/5 text-slate-500"
                  }`}>
                    <Icon className="w-4.5 h-4.5" />
                  </div>
                  
                  <div className="text-left flex-grow">
                    <span className="text-[9px] font-bold text-slate-500 block tracking-wider uppercase font-sans">
                      {stage.num}
                    </span>
                    <h4 className={`text-[14px] font-extrabold tracking-tight font-headline transition-colors ${
                      isActive ? "text-white" : "text-slate-400 hover:text-slate-200"
                    }`}>
                      {stage.name}
                    </h4>
                    {isActive && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="text-[11px] text-slate-400 leading-normal mt-1 max-w-[220px] font-sans"
                      >
                        {stage.description}
                      </motion.p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* ====================================================== */}
        {/* TABLET VIEW: Navigation on Top, Image below           */}
        {/* ====================================================== */}
        <div className="hidden md:flex lg:hidden flex-col items-center w-full gap-8">
          
          {/* Horizontal Navigation List */}
          <div className="grid grid-cols-3 md:grid-cols-6 gap-2 w-full">
            {ARCHITECTURE_DATA.map((stage, idx) => {
              const isActive = activeIdx === idx;
              const Icon = stage.icon;
              
              return (
                <div
                  key={idx}
                  onClick={() => {
                    if (!isAnimating && activeIdx !== idx) {
                      goToStage(idx, 'Direct');
                    }
                  }}
                  className={`flex flex-col items-center justify-center p-3 rounded-2xl cursor-pointer select-none transition-all duration-300 border ${
                    isActive
                      ? "bg-white/[0.04] border-white/10 shadow-md"
                      : "border-transparent bg-white/[0.01]"
                  }`}
                >
                  <Icon className={`w-5 h-5 mb-1 ${isActive ? "text-blue-500" : "text-slate-500"}`} />
                  <span className={`text-[11px] font-bold font-sans ${isActive ? "text-white" : "text-slate-400"}`}>
                    {stage.name.split(" ")[0]}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Visual Panel */}
          <div className="w-full max-w-3xl h-[380px] rounded-[24px] overflow-hidden shadow-lg border border-white/5 flex items-end relative">
            <div className="absolute inset-0 w-full h-full overflow-hidden">
              <img 
                src={currentStage.image} 
                alt={currentStage.title} 
                className="w-full h-full object-cover opacity-75"
              />
            </div>
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent z-10 pointer-events-none" />

            <div className="absolute bottom-0 left-0 p-8 z-20 text-left">
              <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest block mb-1">
                STAGE {currentStage.num}
              </span>
              <h3 className="text-2xl font-extrabold text-white tracking-tight mb-2 font-headline">
                {currentStage.title}
              </h3>
              <p className="text-[13px] text-slate-300 leading-relaxed mb-4 max-w-xl font-sans">
                {currentStage.detailDesc}
              </p>
              <div className="flex flex-wrap gap-1">
                {currentStage.tech.map((t, idx) => (
                  <span key={idx} className="bg-white/10 border border-white/10 text-white text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* ====================================================== */}
        {/* MOBILE VIEW: Horizontal Touch-Swipe Capabilities Row  */}
        {/* ====================================================== */}
        <div className="block md:hidden w-full overflow-hidden">
          
          <div className="flex overflow-x-auto gap-4 no-scrollbar scroll-smooth w-full px-1 py-2 snap-x snap-mandatory">
            {ARCHITECTURE_DATA.map((stage, idx) => (
              <div 
                key={idx} 
                className="w-[85vw] shrink-0 snap-center bg-slate-900 border border-white/5 rounded-[24px] overflow-hidden flex flex-col h-[390px]"
              >
                {/* Image */}
                <div className="w-full h-[160px] overflow-hidden relative">
                  <img 
                    src={stage.image} 
                    alt={stage.title} 
                    className="w-full h-full object-cover opacity-80" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="text-[9px] font-bold text-blue-400 uppercase tracking-wider">
                      STAGE {stage.num}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col justify-between flex-grow text-left">
                  <div>
                    <h3 className="text-lg font-bold text-white tracking-tight mb-1.5 font-headline">
                      {stage.title}
                    </h3>
                    <p className="text-[12px] text-slate-400 leading-relaxed font-sans mb-3 line-clamp-3">
                      {stage.detailDesc}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {stage.tech.map((t, tidx) => (
                        <span key={tidx} className="bg-white/5 border border-white/5 text-slate-300 text-[8px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider font-sans">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 text-[11px] font-bold text-blue-400 cursor-pointer font-sans mt-3">
                    <span>Explore Capability</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </Section>
  );
}
