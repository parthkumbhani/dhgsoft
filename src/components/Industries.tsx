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
    industry: "Industrial Manufacturing",
    desc: "Accelerate manufacturing excellence by connecting production systems, industrial data, and enterprise operations to improve visibility, efficiency, and operational performance.",
    image: "/industries/industrial_manufacturing.png",
    objectPosition: "center 30%",
    overview: "Engineering the Intelligent Factory",
    services: [
      "Smart Factory & Industry 4.0",
      "Manufacturing Execution (MES)",
      "Industrial AI & Analytics",
      "OT/IT Integration",
      "Industrial Data Platforms",
      "Predictive Maintenance"
    ],
    technologies: ["OPC UA", "MQTT", "MES", "Digital Twin", "AI/ML"],
    outcomes: [
      "Connected Manufacturing Operations",
      "Increased Asset Utilization",
      "Improved Production Visibility",
      "Data-Driven Decision Making"
    ],
    slug: "industrial-manufacturing"
  },
  {
    industry: "Life Sciences",
    desc: "Modernize pharmaceutical and life sciences operations with compliant, intelligent, and data-driven manufacturing solutions that enhance quality and operational excellence.",
    image: "/industries/life_sciences.png",
    objectPosition: "center 35%",
    overview: "Connected Digital Manufacturing for Regulated Industries",
    services: [
      "Manufacturing Intelligence",
      "Batch & Process Monitoring",
      "MES & LIMS Integration",
      "Industrial Data Platforms",
      "AI & Advanced Analytics",
      "Digital Compliance Solutions"
    ],
    technologies: ["GxP", "FDA 21 CFR", "MES", "LIMS", "Batch Control"],
    outcomes: [
      "Enhanced Product Quality",
      "Digital Batch Traceability",
      "Improved Regulatory Compliance",
      "Real-Time Manufacturing Insights"
    ],
    slug: "life-sciences"
  },
  {
    industry: "Automotive",
    desc: "Transform automotive manufacturing through intelligent automation, connected production systems, and operational analytics.",
    image: "/industries/automotive_industry.png",
    objectPosition: "center 45%",
    overview: "Driving the Connected Factory",
    services: [
      "Smart Assembly Lines",
      "Robotics Integration",
      "Production Analytics",
      "Quality Management",
      "OT/IT Integration",
      "Industrial AI"
    ],
    technologies: ["ROS", "OPC UA", "Robotics", "OEE", "Edge AI"],
    outcomes: [
      "Connected Production",
      "Improved Product Quality",
      "Enhanced Manufacturing Agility",
      "Greater Operational Efficiency"
    ],
    slug: "automotive"
  },
  {
    industry: "Semiconductor",
    desc: "Enable high-performance semiconductor manufacturing through advanced automation, equipment connectivity, and real-time production intelligence.",
    image: "/industries/semiconductor.png",
    objectPosition: "center 45%",
    overview: "Precision Manufacturing Powered by Digital Intelligence",
    services: [
      "Equipment Connectivity",
      "Yield Analytics",
      "Factory Automation",
      "Industrial Data Platforms",
      "Predictive Analytics",
      "Operational Intelligence"
    ],
    technologies: ["SECS/GEM", "SPC", "Yield AI", "Fab Auto"],
    outcomes: [
      "Higher Manufacturing Visibility",
      "Improved Equipment Performance",
      "Enhanced Yield Optimization",
      "Faster Operational Decisions"
    ],
    slug: "semiconductor"
  },
  {
    industry: "Food & Beverages",
    desc: "Digitize food production with connected operations, quality monitoring, and end-to-end traceability.",
    image: "/industries/food_beverages_industry.png",
    objectPosition: "center 40%",
    overview: "Smart Manufacturing from Production to Packaging",
    services: [
      "Production Monitoring",
      "Recipe & Batch Management",
      "Quality Analytics",
      "Energy Monitoring",
      "Supply Chain Integration",
      "Industrial IoT"
    ],
    technologies: ["ISA-88", "HACCP", "IoT Sensors", "Track & Trace"],
    outcomes: [
      "Improved Product Quality",
      "End-to-End Traceability",
      "Optimized Production",
      "Greater Operational Visibility"
    ],
    slug: "food-beverages"
  },
  {
    industry: "Chemical Manufacturing",
    desc: "Modernize chemical manufacturing with integrated process automation, industrial analytics, and connected asset management.",
    image: "/industries/chemical_manufacturing.png",
    objectPosition: "center 35%",
    overview: "Safe, Intelligent and Sustainable Operations",
    services: [
      "Process Optimization",
      "Asset Performance Management",
      "Industrial AI",
      "Process Historian",
      "OT Cybersecurity",
      "Energy Analytics"
    ],
    technologies: ["SCADA", "Process Safety", "Historian", "Cybersecurity"],
    outcomes: [
      "Safer Operations",
      "Improved Process Efficiency",
      "Better Asset Reliability",
      "Sustainable Manufacturing"
    ],
    slug: "chemical-manufacturing"
  },
  {
    industry: "Oil & Gas",
    desc: "Digitally connect upstream, midstream, and downstream operations through intelligent automation and industrial data platforms.",
    image: "/industries/oil_gas_industry.png",
    objectPosition: "center 40%",
    overview: "Connected Energy Operations",
    services: [
      "Pipeline Monitoring",
      "Asset Performance Management",
      "SCADA Integration",
      "Industrial Data Platforms",
      "Predictive Analytics",
      "Remote Operations"
    ],
    technologies: ["SCADA", "IoT", "Telemetry", "APM", "Digital Twin"],
    outcomes: [
      "Operational Visibility",
      "Enhanced Asset Performance",
      "Improved Operational Safety",
      "Intelligent Energy Management"
    ],
    slug: "oil-gas"
  },
  {
    industry: "Power & Utilities",
    desc: "Support modern energy operations through connected assets, operational intelligence, and digital grid management.",
    image: "/industries/power_utilities.png",
    objectPosition: "center 30%",
    overview: "Building Intelligent Energy Infrastructure",
    services: [
      "Grid Monitoring",
      "Energy Analytics",
      "Renewable Integration",
      "Asset Health Monitoring",
      "Industrial AI",
      "OT/IT Integration"
    ],
    technologies: ["IEC 61850", "DNP3", "Smart Grid", "DER"],
    outcomes: [
      "Reliable Energy Operations",
      "Better Asset Visibility",
      "Improved Grid Performance",
      "Data-Driven Energy Decisions"
    ],
    slug: "power-utilities"
  },
  {
    industry: "Mining & Metals",
    desc: "Optimize mining and metal operations through automation, industrial analytics, and connected operational intelligence.",
    image: "/industries/mining_metals.png",
    objectPosition: "center 40%",
    overview: "Digital Transformation for Heavy Industries",
    services: [
      "Fleet Monitoring",
      "Asset Performance",
      "Production Analytics",
      "Industrial IoT",
      "Process Optimization",
      "Predictive Maintenance"
    ],
    technologies: ["IoT Edge", "APM", "OEE", "Fleet Telemetry"],
    outcomes: [
      "Connected Mining Operations",
      "Increased Equipment Availability",
      "Better Operational Performance",
      "Improved Resource Utilization"
    ],
    slug: "mining-metals"
  },
  {
    industry: "Water & Wastewater Management",
    desc: "Enable intelligent water management through connected assets, real-time monitoring, and operational analytics.",
    image: "/industries/water_wastewater.png",
    objectPosition: "center 40%",
    overview: "Smart Water Infrastructure",
    services: [
      "SCADA Solutions",
      "Pump Station Monitoring",
      "Water Quality Analytics",
      "Industrial Data Platforms",
      "Remote Monitoring",
      "Predictive Maintenance"
    ],
    technologies: ["SCADA", "Pump Control", "Telemetry", "GIS"],
    outcomes: [
      "Improved Network Visibility",
      "Optimized Water Operations",
      "Better Resource Management",
      "Reliable Infrastructure Performance"
    ],
    slug: "water-wastewater"
  },
  {
    industry: "Consumer Packaged Goods (CPG)",
    desc: "Digitize production and packaging operations to improve manufacturing efficiency, product quality, and supply chain visibility.",
    image: "/industries/consumer_packaged_goods.png",
    objectPosition: "center 45%",
    overview: "Connected Manufacturing and Supply Chain Intelligence",
    services: [
      "Production Monitoring",
      "Packaging Line Automation",
      "Warehouse Integration",
      "Manufacturing Analytics",
      "Industrial AI",
      "Enterprise Integration"
    ],
    technologies: ["OEE", "Packaging Automation", "ERP Integration", "IIoT"],
    outcomes: [
      "Connected Operations",
      "Improved Manufacturing Performance",
      "Enhanced Supply Chain Visibility",
      "Better Customer Responsiveness"
    ],
    slug: "consumer-packaged-goods"
  },
  {
    industry: "Data Centres",
    desc: "Improve the reliability, efficiency, and sustainability of data centre operations through intelligent monitoring and digital infrastructure management.",
    image: "/industries/data_centres.png",
    objectPosition: "center 45%",
    overview: "Intelligent Infrastructure for Mission-Critical Operations",
    services: [
      "Infrastructure Monitoring",
      "Energy Management",
      "Cooling Optimization",
      "Industrial IoT",
      "AI Analytics",
      "Operational Dashboards"
    ],
    technologies: ["DCIM", "HVAC", "Modbus", "AI Cooling"],
    outcomes: [
      "Improved Infrastructure Availability",
      "Optimized Energy Efficiency",
      "Real-Time Operational Visibility",
      "Sustainable Data Centre Operations"
    ],
    slug: "data-centres"
  },
  {
    industry: "Engineering, Procurement & Construction (EPC)",
    desc: "Transform engineering and construction projects through integrated digital engineering, project information management, and intelligent commissioning.",
    image: "/industries/epc.png",
    objectPosition: "center 35%",
    overview: "Connected Digital Project Delivery",
    services: [
      "Digital Engineering",
      "BIM Integration",
      "Project Information Management",
      "Document Control",
      "Construction Digitalization",
      "Commissioning Management"
    ],
    technologies: ["BIM", "P6", "Digital Twin", "Commissioning"],
    outcomes: [
      "Connected Project Execution",
      "Improved Team Collaboration",
      "Digital Asset Handover",
      "Greater Project Visibility"
    ],
    slug: "epc"
  },
  {
    industry: "Agriculture",
    desc: "Modernize agricultural operations with IoT, automation, and data-driven insights that improve productivity and resource efficiency.",
    image: "/industries/agriculture_industry.png",
    objectPosition: "center 40%",
    overview: "Smart Agriculture Through Connected Intelligence",
    services: [
      "Smart Irrigation",
      "Farm Automation",
      "IoT Sensors",
      "Remote Monitoring",
      "Data Analytics",
      "Sustainability Solutions"
    ],
    technologies: ["Smart Irrigation", "IoT", "GIS", "Data Analytics"],
    outcomes: [
      "Increased Farm Productivity",
      "Optimized Resource Utilization",
      "Better Crop Visibility",
      "Sustainable Agricultural Operations"
    ],
    slug: "agriculture"
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
        opacity: (d >= 0 && d < visibleCount) ? 1 : 0,
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
        duration: 0.75,
        ease: [0.16, 1, 0.3, 1] // premium smooth easeOutQuart
      }}
      style={{
        width: w_c,
        height: 570,
        borderRadius: 28,
        border: '1px solid rgba(15, 23, 42, 0.06)',
        pointerEvents: (d >= 0 && d < visibleCount) ? 'auto' : 'none',
      }}
    >
      <div className="w-full h-full block relative text-left select-none">
        {/* Top Brand Accent Border */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[4px] z-40"
        style={{
          borderRadius: '28px 28px 0 0',
          background: 'linear-gradient(90deg, #8C123B, #C2185B, #8C123B)',
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
          {/* Brand theme color grading overlay (Multiply) */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            animate={{
              background: isHovered
                ? 'linear-gradient(135deg, rgba(139, 0, 54, 0.15) 0%, rgba(242, 140, 40, 0.05) 100%)'
                : 'linear-gradient(135deg, rgba(139, 0, 54, 0.28) 0%, rgba(242, 140, 40, 0.15) 100%)',
            }}
            transition={{ duration: 0.4 }}
            style={{
              mixBlendMode: 'multiply',
            }}
          />
          {/* Subtle color highlight layer (Color) */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            animate={{
              opacity: isHovered ? 0.15 : 0.22,
            }}
            transition={{ duration: 0.4 }}
            style={{
              background: 'linear-gradient(135deg, #8B0036 0%, #F28C28 100%)',
              mixBlendMode: 'color',
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
            <h5 className="font-bold tracking-tight font-headline text-[#111827]" style={{ fontSize: 22, lineHeight: 1.25, marginBottom: 10 }}>{data.industry}</h5>
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
                background: 'linear-gradient(135deg, #B4123F 0%, #A10E38 100%)',
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
                background: 'linear-gradient(to bottom, rgba(180,18,63,0.12), rgba(161,14,56,0.08), transparent)',
                transformOrigin: 'top',
              }}
            />
          </>
        )}

        {/* Expanded Panel Content */}
        <div className="relative z-10 flex flex-col h-full p-7 justify-between">
          <div>
            <h5 className="font-bold tracking-tight font-headline text-[#111827]" style={{ fontSize: 22, lineHeight: 1.25, marginBottom: 10 }}>{data.industry}</h5>

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
      </div>

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
      setActiveIndex((prev) => (prev + 1) % INDUSTRIES_DATA.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const handlePrev = () => {
    setIsPaused(true);
    setActiveIndex((prev) => (prev - 1 + INDUSTRIES_DATA.length) % INDUSTRIES_DATA.length);
  };

  const handleNext = () => {
    setIsPaused(true);
    setActiveIndex((prev) => (prev + 1) % INDUSTRIES_DATA.length);
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
            Transforming Industries Through Connected Intelligence
          </h2>
          <p
            className="font-sans max-w-3xl text-[#64748B]"
            style={{
              fontSize: 16,
              lineHeight: 1.7,
            }}
          >
           Every industry has unique operational challenges and opportunities. DHGsoft combines deep industrial expertise with digital engineering, AI, automation, and industrial data platforms to deliver solutions that improve operational excellence, accelerate innovation, and create measurable business value.
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
              const half = Math.floor(INDUSTRIES_DATA.length / 2);
              if (d < -half) d += INDUSTRIES_DATA.length;
              if (d > half) d -= INDUSTRIES_DATA.length;

              const isVisible = d >= -2 && d <= visibleCount + 1;
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
