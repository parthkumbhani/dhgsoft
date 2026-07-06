'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { Section } from '@/components/ui/Section';

/* ═══════════════════════════════════════════════════════════════
   INDUSTRY DATA — 8 sectors in required order
   ═══════════════════════════════════════════════════════════════ */

interface IndustryCardData {
  industry: string;
  desc: string;
  image: string;
  objectPosition: string;
  overview: string;
  services: string[];
  technologies: string[];
  outcomes: string[];
  slug: string;
}

const INDUSTRIES_DATA: IndustryCardData[] = [
  {
    industry: "Mining & Metals",
    desc: "Build intelligent mining operations with predictive maintenance, process optimization, digital safety monitoring, and real-time production analytics.",
    image: "/industries/mining.png",
    objectPosition: "center 40%",
    overview: "End-to-end digital transformation for mining and metals operations — from pit-to-port optimization to autonomous fleet management.",
    services: ["Predictive Equipment Maintenance", "Autonomous Fleet Management", "AI Ore Grade Optimization", "Digital Mine Safety Systems"],
    technologies: ["IoT Edge Sensors", "SCADA", "AI/ML Pipelines", "Digital Twin"],
    outcomes: ["30% downtime reduction", "15% yield improvement", "Zero-harm safety targets"],
    slug: "mining-metals"
  },
  {
    industry: "Power Utility",
    desc: "Modernize power generation, transmission, substations, and smart grid infrastructure with secure digital automation.",
    image: "/industries/power.png",
    objectPosition: "center 30%",
    overview: "Secure digital automation for power generation, transmission, and distribution infrastructure with real-time grid intelligence.",
    services: ["Smart Grid Platforms", "Substation Automation", "Load Forecasting Systems", "Renewable Integration"],
    technologies: ["IEC 61850", "DNP3", "ADMS", "AMI Metering"],
    outcomes: ["99.9% grid reliability", "20% outage reduction", "Real-time asset visibility"],
    slug: "power-utilities"
  },
  {
    industry: "Life Sciences",
    desc: "Accelerate pharmaceutical manufacturing, laboratory automation, quality compliance, and digital healthcare innovation.",
    image: "/industries/lifesciences.png",
    objectPosition: "center 35%",
    overview: "GMP-compliant digital solutions for pharmaceutical manufacturing, laboratory automation, and regulatory compliance.",
    services: ["Electronic Batch Records", "Laboratory Info Systems", "Serialization & Track-Trace", "Process Analytical Tech"],
    technologies: ["GAMP 5", "21 CFR Part 11", "MES", "LIMS"],
    outcomes: ["40% faster batch release", "100% compliance record", "Full lifecycle traceability"],
    slug: "life-sciences"
  },
  {
    industry: "Food & Beverages",
    desc: "Optimize production lines, quality assurance, packaging automation, traceability, and operational efficiency.",
    image: "/industries/food.png",
    objectPosition: "center 40%",
    overview: "Smart manufacturing solutions for food safety, production optimization, and end-to-end supply chain traceability.",
    services: ["OEE Optimization Platforms", "Recipe & Batch Control", "Quality Inspection Systems", "Packaging Automation"],
    technologies: ["ISA-88", "ISA-95", "ERP Integration", "Vision AI"],
    outcomes: ["25% OEE increase", "Zero safety incidents", "Full product traceability"],
    slug: "food-beverages"
  },
  {
    industry: "Automotive",
    desc: "Enable smart manufacturing, connected production systems, robotics, and Industry 4.0 transformation.",
    image: "/industries/automotive.png",
    objectPosition: "center 45%",
    overview: "Industry 4.0 transformation for automotive OEMs and Tier-1 suppliers with connected factory intelligence.",
    services: ["Digital Factory Platforms", "Robotic Cell Integration", "Predictive Quality Analytics", "Connected Supply Chain"],
    technologies: ["OPC UA", "CAN Bus", "ROS", "MQTT Edge"],
    outcomes: ["35% faster cycle times", "50% defect reduction", "Real-time production views"],
    slug: "automotive"
  },
  {
    industry: "Data Centers",
    desc: "Deliver resilient digital infrastructure with intelligent monitoring, energy optimization, and mission-critical operations.",
    image: "/industries/datacenters.png",
    objectPosition: "center 45%",
    overview: "Mission-critical infrastructure management for hyperscale and enterprise data center operations.",
    services: ["DCIM Platform Integration", "Energy & Cooling Tuning", "Capacity Planning Systems", "Power Monitoring & Backup"],
    technologies: ["SNMP", "BACnet", "Modbus", "IPMI"],
    outcomes: ["40% energy savings", "99.999% uptime SLA", "Predictive capacity management"],
    slug: "data-centres"
  },
  {
    industry: "Water & Wastewater",
    desc: "Improve water treatment, distribution, monitoring, and sustainable utility operations through intelligent automation.",
    image: "/industries/water.png",
    objectPosition: "center 40%",
    overview: "Intelligent water management systems for treatment optimization, distribution monitoring, and regulatory compliance.",
    services: ["Treatment Process Control", "Leak Detection & NRW Control", "Water Quality Monitoring", "Distribution Network Intel"],
    technologies: ["PLC/RTU", "GIS Mapping", "Telemetry", "SCADA"],
    outcomes: ["30% NRW reduction", "Full compliance safety", "Real-time quality alerts"],
    slug: "water-wastewater"
  },
  {
    industry: "EPC",
    desc: "Digitize engineering, procurement, project execution, and asset lifecycle management for large-scale infrastructure.",
    image: "/industries/epc.png",
    objectPosition: "center 35%",
    overview: "Digital project execution platforms for engineering, procurement, and construction of large-scale industrial infrastructure.",
    services: ["Digital Twin Engineering", "BIM-Integrated Workflows", "Automated Document Control", "Commissioning Systems"],
    technologies: ["Primavera P6", "Aveva E3D", "SAP PM", "Intergraph"],
    outcomes: ["20% faster project delivery", "15% cost reduction", "Zero-rework commissioning"],
    slug: "epc"
  }
];

/* ═══════════════════════════════════════════════════════════════
   INDUSTRY CARD COMPONENT (DOUBLE INTERACTION STATE)
   ═══════════════════════════════════════════════════════════════ */

interface IndustryCardProps {
  data: IndustryCardData;
  isActive: boolean;
  isHovered: boolean;
  onHoverStart: () => void;
  onHoverEnd: () => void;
  w_c: number;
  gap: number;
  d: number;
  visibleCount: number;
}

function IndustryCard({
  data,
  isActive,
  isHovered,
  onHoverStart,
  onHoverEnd,
  w_c,
  gap,
  d,
  visibleCount
}: IndustryCardProps) {
  return (
    <motion.div
      onMouseEnter={onHoverStart}
      onMouseLeave={onHoverEnd}
      className="absolute select-none flex flex-col bg-white overflow-hidden cursor-pointer"
      animate={{
        x: d * (w_c + gap),
        opacity: (d >= -1 && d <= visibleCount) ? 1 : 0,
        scale: isActive ? 1.03 : 1.0,
        y: isHovered ? -10 : 0,
        boxShadow: isHovered
          ? '0 25px 50px -12px rgba(139,0,54,0.15), 0 4px 12px rgba(0,0,0,0.03)'
          : isActive
            ? '0 20px 35px -8px rgba(139,0,54,0.1), 0 2px 8px rgba(0,0,0,0.02)'
            : '0 8px 24px -6px rgba(15,23,42,0.04), 0 2px 4px rgba(0,0,0,0.01)',
        zIndex: isHovered ? 40 : isActive ? 30 : 10,
      }}
      transition={{
        duration: 0.45,
        ease: [0.22, 1, 0.36, 1]
      }}
      style={{
        width: w_c,
        height: 570,
        borderRadius: 28,
        border: '1px solid rgba(15, 23, 42, 0.06)',
        pointerEvents: (d >= 0 && d < visibleCount) ? 'auto' : 'none',
      }}
    >
      <Link href={`/industries/${data.slug}`} className="w-full h-full block relative text-left select-none">
        {/* Top Brand Accent Border */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[4px] z-40"
        style={{
          borderRadius: '28px 28px 0 0',
          background: 'linear-gradient(90deg, #8B0036, #C2185B, #F28C28)',
        }}
        animate={{
          opacity: isHovered || isActive ? 1.0 : 0.7,
        }}
      />

      {/* ══════════════════════════════════
          DEFAULT STATE — Image + Info
         ══════════════════════════════════ */}
      <motion.div
        className="absolute inset-0 flex flex-col z-10"
        animate={{
          opacity: isHovered ? 0 : 1,
          y: isHovered ? -12 : 0,
        }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        style={{ pointerEvents: isHovered ? 'none' : 'auto' }}
      >
        {/* Image — Height 320px */}
        <div className="relative w-full overflow-hidden" style={{ height: 320, borderRadius: '28px 28px 0 0' }}>
          <motion.img
            src={data.image}
            alt={data.industry}
            style={{ objectPosition: data.objectPosition }}
            className="w-full h-full object-cover select-none pointer-events-none"
            animate={{
              scale: isHovered ? 1.10 : 1.05
            }}
            transition={{
              duration: 3,
              ease: [0.22, 1, 0.36, 1]
            }}
          />
          {/* Soft bottom image gradient overlay */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'linear-gradient(to top, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.05) 30%, transparent 60%)',
            }}
          />
        </div>

        {/* Content Area — Height 250px */}
        <div className="flex flex-col justify-between p-7 flex-grow" style={{ height: 250 }}>
          <div>
            <h3
              className="font-bold tracking-tight font-headline text-[#111827]"
              style={{ fontSize: 22, lineHeight: 1.25, marginBottom: 10 }}
            >
              {data.industry}
            </h3>
            <p
              className="font-sans line-clamp-3 text-[#64748B]"
              style={{ fontSize: 16, lineHeight: 1.6 }}
            >
              {data.desc}
            </p>
          </div>

          {/* CTA Row */}
          <div className="flex items-center justify-between mt-auto pt-4">
            <span className="font-bold text-[#8B0036] font-sans" style={{ fontSize: 15 }}>
              Explore Industry
            </span>

            <div
              className="flex items-center justify-center rounded-full"
              style={{
                width: 48,
                height: 48,
                background: 'linear-gradient(135deg, #8B0036 0%, #F28C28 100%)',
                boxShadow: '0 2px 8px rgba(139,0,54,0.1)',
              }}
            >
              <ArrowUpRight className="text-white" style={{ width: 20, height: 20 }} />
            </div>
          </div>
        </div>
      </motion.div>

      {/* ══════════════════════════════════
          EXPANDED STATE — Info Panel
         ══════════════════════════════════ */}
      <motion.div
        className="absolute inset-0 flex flex-col z-20"
        animate={{
          opacity: isHovered ? 1 : 0,
          y: isHovered ? 0 : 16,
        }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        style={{
          pointerEvents: isHovered ? 'auto' : 'none',
          borderRadius: 28,
          background: 'linear-gradient(160deg, rgba(255,255,255,0.97) 0%, rgba(255,248,251,0.95) 40%, rgba(255,245,239,0.96) 100%)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
        }}
      >
        {/* Blueprint grid texture */}
        <div
          className="absolute inset-0 pointer-events-none z-0"
          style={{
            borderRadius: 28,
            backgroundImage: `
              linear-gradient(rgba(139,0,54,0.025) 1px, transparent 1px),
              linear-gradient(90deg, rgba(139,0,54,0.025) 1px, transparent 1px)
            `,
            backgroundSize: '32px 32px',
          }}
        />

        {/* Animated Blueprint Nodes */}
        {isHovered && (
          <>
            <motion.div
              className="absolute rounded-full z-0"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 0.5, scale: 1 }}
              transition={{ delay: 0.15, duration: 0.5, ease: 'easeOut' }}
              style={{
                width: 6, height: 6, top: '18%', right: '12%',
                background: '#C2185B',
                boxShadow: '0 0 12px rgba(194,24,91,0.4)',
              }}
            />
            <motion.div
              className="absolute rounded-full z-0"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 0.4, scale: 1 }}
              transition={{ delay: 0.25, duration: 0.5, ease: 'easeOut' }}
              style={{
                width: 5, height: 5, top: '45%', right: '8%',
                background: '#F28C28',
                boxShadow: '0 0 10px rgba(242,140,40,0.35)',
              }}
            />
            <motion.div
              className="absolute rounded-full z-0"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 0.35, scale: 1 }}
              transition={{ delay: 0.35, duration: 0.5, ease: 'easeOut' }}
              style={{
                width: 4, height: 4, bottom: '22%', left: '10%',
                background: '#8B0036',
                boxShadow: '0 0 8px rgba(139,0,54,0.3)',
              }}
            />
            {/* Connection line */}
            <motion.div
              className="absolute z-0 pointer-events-none"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              style={{
                top: '18%', right: '12%',
                width: 80, height: 1,
                background: 'linear-gradient(to left, rgba(194,24,91,0.15), transparent)',
                transformOrigin: 'right',
              }}
            />
            <motion.div
              className="absolute z-0 pointer-events-none"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ delay: 0.3, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              style={{
                top: '18%', right: 'calc(12% + 3px)',
                width: 1, height: 100,
                background: 'linear-gradient(to bottom, rgba(194,24,91,0.12), rgba(242,140,40,0.08), transparent)',
                transformOrigin: 'top',
              }}
            />
          </>
        )}

        {/* Expanded Panel Content */}
        <div className="relative z-10 flex flex-col h-full p-7 justify-between">
          <div>
            <h3
              className="font-bold tracking-tight font-headline text-[#111827]"
              style={{ fontSize: 22, lineHeight: 1.25, marginBottom: 8 }}
            >
              {data.industry}
            </h3>

            <p
              className="font-sans text-[#64748B]"
              style={{ fontSize: 13, lineHeight: 1.5, marginBottom: 14 }}
            >
              {data.overview}
            </p>

            {/* Engineering Capabilities */}
            <div className="mb-4">
              <span className="text-[10px] font-bold text-[#8B0036] uppercase tracking-wider block mb-1.5 font-sans">
                Engineering Capabilities
              </span>
              <div className="flex flex-col gap-1.5">
                {data.services.map((service, sIdx) => (
                  <div key={sIdx} className="flex items-start gap-2">
                    <div
                      className="mt-1.5 flex-shrink-0 rounded-full"
                      style={{
                        width: 5, height: 5,
                        background: 'linear-gradient(135deg, #8B0036, #F28C28)',
                      }}
                    />
                    <span style={{ fontSize: 12.5, color: '#334155', lineHeight: 1.4, fontWeight: 500 }}>
                      {service}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Business Outcomes */}
            <div className="mb-4">
              <span className="text-[10px] font-bold text-[#8B0036] uppercase tracking-wider block mb-1.5 font-sans">
                Target Outcomes
              </span>
              <div className="flex flex-wrap gap-1.5">
                {data.outcomes.map((outcome, oIdx) => (
                  <span
                    key={oIdx}
                    className="rounded-md font-semibold text-[#111827] bg-emerald-500/5 border border-emerald-500/15"
                    style={{ fontSize: 11, padding: '3px 8px' }}
                  >
                    ✓ {outcome}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div>
            {/* Technologies */}
            <div className="flex flex-wrap gap-1.5 mb-5">
              {data.technologies.map((tech, tIdx) => (
                <span
                  key={tIdx}
                  className="rounded-full font-medium"
                  style={{
                    fontSize: 10,
                    padding: '3px 10px',
                    color: '#8B0036',
                    background: 'rgba(139,0,54,0.06)',
                    border: '1px solid rgba(139,0,54,0.08)',
                    letterSpacing: '0.02em',
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* CTA Row */}
            <div className="flex items-center justify-between pt-2">
              <div className="relative group/cta cursor-pointer">
                <span
                  className="font-semibold text-[#8B0036]"
                  style={{ fontSize: 14, letterSpacing: '0.01em' }}
                >
                  Explore Industry
                </span>
                {/* Animated underline */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={isHovered ? { scaleX: 1 } : { scaleX: 0 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  style={{
                    height: 1.5,
                    background: 'linear-gradient(to right, #8B0036, #F28C28)',
                    transformOrigin: 'left',
                    marginTop: 2,
                    borderRadius: 1,
                  }}
                />
              </div>

              {/* Arrow button (stays in expanded) */}
              <motion.div
                animate={{
                  rotate: isHovered ? 45 : 0,
                  y: isHovered ? -4 : 0,
                  boxShadow: isHovered
                    ? '0 6px 20px rgba(139,0,54,0.35), 0 0 15px rgba(242,140,40,0.15)'
                    : '0 2px 8px rgba(139,0,54,0.1)',
                }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="flex items-center justify-center rounded-full"
                style={{
                  width: 48,
                  height: 48,
                  background: 'linear-gradient(135deg, #8B0036 0%, #C2185B 50%, #F28C28 100%)',
                }}
              >
                <ArrowUpRight className="text-white" style={{ width: 20, height: 20 }} />
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
      </Link>

      {/* Gradient keyframe animation */}
      <style>{`
        @keyframes gradientFlow {
          0% { background-position: 0% 50%; }
          100% { background-position: 300% 50%; }
        }
      `}</style>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   MAIN SECTION
   ═══════════════════════════════════════════════════════════════ */

export default function Industries() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [containerWidth, setContainerWidth] = useState(1200);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Resize listener
  useEffect(() => {
    if (!containerRef.current) return;
    const handleResize = () => {
      setContainerWidth(containerRef.current?.getBoundingClientRect().width || 1200);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Responsive logic
  let visibleCount = 4;
  if (containerWidth < 768) {
    visibleCount = 1;
  } else if (containerWidth < 1200) {
    visibleCount = 2;
  }

  const gap = 24;
  const w_c = (containerWidth - (visibleCount - 1) * gap) / visibleCount;

  // Auto-play timer
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 8);
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const handlePrev = () => {
    setIsPaused(true);
    setActiveIndex((prev) => (prev - 1 + 8) % 8);
  };

  const handleNext = () => {
    setIsPaused(true);
    setActiveIndex((prev) => (prev + 1) % 8);
  };

  return (
    <Section
      id="industries"
      containerSize="wide"
      className="overflow-hidden border-b border-[rgba(0,0,0,0.06)]"
      style={{
        background: 'radial-gradient(ellipse 90% 70% at 50% 0%, #ffffff 0%, #fff8fb 35%, #fff5ef 65%, #f8f8ff 100%)',
      }}
    >
      {/* Animated ambient light glow */}
      <motion.div
        className="absolute pointer-events-none z-0"
        style={{
          width: 700,
          height: 500,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(139,0,54,0.035) 0%, rgba(242,140,40,0.015) 50%, transparent 70%)',
          filter: 'blur(100px)',
          top: '10%',
        }}
        animate={{ x: ['-20%', '120%', '-20%'] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
      />

      <div className="relative z-10 w-full">

        {/* ── Section Header ── */}
        <div className="flex flex-col w-full text-left mb-12 md:mb-16">
          <span
            className="font-semibold uppercase block mb-4"
            style={{
              fontSize: 11,
              color: '#8B0036',
              letterSpacing: '0.3em',
            }}
          >
            DOMAIN EXPERTISE
          </span>
          <h2
            className="font-extrabold tracking-tight font-headline mb-4"
            style={{
              fontSize: 42,
              color: '#111827',
              lineHeight: 1.08,
            }}
          >
            Tailored Solutions for Global Industries
          </h2>
          <p
            className="font-sans max-w-3xl text-[#64748B]"
            style={{
              fontSize: 16,
              lineHeight: 1.7,
            }}
          >
            We engineer intelligent digital platforms that solve complex operational challenges across critical industries with enterprise-grade security, scalability, and automation.
          </p>
        </div>

        {/* ── Carousel Slider Container ── */}
        <div className="relative w-full flex items-center">

          {/* Left Arrow Button */}
          {visibleCount > 1 && (
            <motion.button
              onClick={handlePrev}
              whileHover={{ scale: 1.1 }}
              className="absolute left-[-24px] lg:left-[-36px] z-50 w-[60px] h-[60px] rounded-full flex items-center justify-center border border-black/5 shadow-md backdrop-blur-md bg-white/40 text-[#8B0036] cursor-pointer"
              style={{ top: '50%', y: '-50%' }}
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-7 h-7" />
            </motion.button>
          )}

          {/* Carousel Track Viewport */}
          <div
            ref={containerRef}
            className="w-full relative overflow-hidden flex items-center"
            style={{ height: 600 }}
          >
            {INDUSTRIES_DATA.map((item, idx) => {
              // Calculate index circular distance
              let d = idx - activeIndex;
              if (d < -2) d += 8;
              if (d > 5) d -= 8;

              const isVisible = d >= -1 && d <= visibleCount;
              if (!isVisible) return null;

              return (
                <IndustryCard
                  key={idx}
                  data={item}
                  isActive={d === 0}
                  isHovered={hoveredIdx === idx}
                  onHoverStart={() => {
                    setHoveredIdx(idx);
                    setIsPaused(true);
                  }}
                  onHoverEnd={() => {
                    setHoveredIdx(null);
                    setIsPaused(false);
                  }}
                  w_c={w_c}
                  gap={gap}
                  d={d}
                  visibleCount={visibleCount}
                />
              );
            })}
          </div>

          {/* Right Arrow Button */}
          {visibleCount > 1 && (
            <motion.button
              onClick={handleNext}
              whileHover={{ scale: 1.1 }}
              className="absolute right-[-24px] lg:right-[-36px] z-50 w-[60px] h-[60px] rounded-full flex items-center justify-center border border-black/5 shadow-md backdrop-blur-md bg-white/40 text-[#8B0036] cursor-pointer"
              style={{ top: '50%', y: '-50%' }}
              aria-label="Next slide"
            >
              <ChevronRight className="w-7 h-7" />
            </motion.button>
          )}

        </div>
      </div>
    </Section>
  );
}
