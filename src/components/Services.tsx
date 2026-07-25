'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Section } from '@/components/ui/Section';

/* ═══════════════════════════════════════════════════════════════
   SERVICES DATA — 8 Capabilities mapped to real industrial assets
   ═══════════════════════════════════════════════════════════════ */

interface ServiceData {
  title: string;
  category: string;
  desc: string;
  image: string;
  overview: string;
  capabilities: string[];
  technologies: string[];
  outcomes: string[];
}

const SERVICES_DATA: ServiceData[] = [
  {
    title: "Engineering & EPC Services",
    category: "Engineering & EPC",
    desc: "Delivering multidisciplinary engineering, procurement, construction support, and commissioning services for greenfield, brownfield, and plant expansion projects.",
    image: "/industries/epc.png",
    overview: "Engineering End-to-End Industrial Infrastructure",
    capabilities: [
      "Basic & Detailed Engineering",
      "Electrical Engineering",
      "Mechanical Engineering",
      "Process Engineering",
      "Instrumentation Engineering",
      "Civil & Structural Coordination",
      "Engineering Design & Documentation",
      "Engineering Procurement Support",
      "EPC Project Management",
      "Site Engineering & Supervision",
      "Testing & Commissioning",
      "Plant Start-up Support",
      "Turnkey Industrial Projects",
      "Plant Expansion & Modernization",
      "As-Built Documentation"
    ],
    technologies: ["FEED Design", "CAD 3D Modeling", "EPC Standards", "Project Governance"],
    outcomes: ["On-time project delivery", "Zero design rework", "100% safety compliance"]
  },
  {
    title: "Industrial Automation & Process Control",
    category: "Automation",
    desc: "Designing, implementing, and supporting automation systems that improve productivity, reliability, and process efficiency.",
    image: "/industries/automotive.png",
    overview: "Intelligent Automation for Modern Industrial Operations",
    capabilities: [
      "PLC Programming",
      "SCADA Development",
      "Distributed Control Systems (DCS)",
      "Human Machine Interface (HMI)",
      "Batch Automation Systems",
      "Process Automation",
      "Alarm Management",
      "Control Logic Development",
      "Plant Automation Migration",
      "Legacy System Modernization",
      "Control System Integration",
      "Industrial Communication Protocols",
      "Remote Monitoring Solutions",
      "Factory Acceptance Testing (FAT)",
      "Site Acceptance Testing (SAT)"
    ],
    technologies: ["PLC / SCADA", "DCS Platforms", "Siemens / Rockwell", "ISA-88 / ISA-95"],
    outcomes: ["35% downtime reduction", "Real-time process control", "High plant availability"]
  },
  {
    title: "Electrical Systems & Panel Manufacturing",
    category: "Electrical & Hardware",
    desc: "Providing complete electrical design, panel manufacturing, power distribution, and industrial control solutions.",
    image: "/industries/power.png",
    overview: "Reliable Electrical Infrastructure for Industrial Operations",
    capabilities: [
      "PLC Control Panels",
      "Motor Control Centres (MCC)",
      "Intelligent MCC (iMCC)",
      "Power Control Centres (PCC)",
      "Variable Frequency Drive (VFD) Panels",
      "APFC Panels",
      "HMI Operator Panels",
      "Control Desks & Consoles",
      "LT Power Distribution Panels",
      "Bus Duct Systems",
      "Cable Engineering",
      "Power Distribution Systems",
      "Panel Testing & Certification",
      "Site Installation & Commissioning"
    ],
    technologies: ["PCC / MCC", "IEC 61439", "VFD Drives", "Power Distribution"],
    outcomes: ["100% FAT compliance", "Optimized power factor", "Enhanced electrical safety"]
  },
  {
    title: "Industry 4.0 & Smart Manufacturing",
    category: "Smart Manufacturing",
    desc: "Helping manufacturers transform into intelligent, connected, and data-driven enterprises through advanced digital technologies.",
    image: "/industries/industrial-manufacturing.png",
    overview: "Accelerating the Connected Factory",
    capabilities: [
      "Smart Factory Solutions",
      "Manufacturing Execution Support",
      "Digital Operations Centre",
      "Real-Time Production Monitoring",
      "Overall Equipment Effectiveness (OEE)",
      "Predictive Maintenance",
      "Asset Performance Management",
      "Manufacturing Intelligence",
      "Energy Management Systems",
      "Digital Twin Integration",
      "AI Operational Dashboards",
      "Production Performance Monitoring",
      "Industrial Reporting",
      "Continuous Improvement Analytics"
    ],
    technologies: ["Industry 4.0", "Digital Twins", "MES Platforms", "OEE Analytics"],
    outcomes: ["18% OEE increase", "Zero-defect manufacturing", "Optimized throughput"]
  },
  {
    title: "Industrial IoT (IIoT) Solutions",
    category: "Industrial IoT",
    desc: "Creating secure, scalable IIoT platforms that enable real-time visibility across plants, equipment, and enterprise systems.",
    image: "/industries/food.png",
    overview: "Connecting Industrial Assets to Enterprise Intelligence",
    capabilities: [
      "Machine Connectivity",
      "PLC Connectivity",
      "Industrial Gateway Deployment",
      "Edge Computing Solutions",
      "Industrial Data Acquisition",
      "Sensor Integration",
      "Smart Device Integration",
      "OPC UA Integration",
      "MQTT Communication",
      "Modbus Integration",
      "Protocol Conversion",
      "Cloud Connectivity",
      "Remote Asset Monitoring",
      "Industrial Data Collection"
    ],
    technologies: ["LoRaWAN", "AWS / Azure IoT", "Edge Gateways", "MQTT / Sparkplug"],
    outcomes: ["99.9% device uptime", "Sub-second telemetry latency", "Automated alert triggers"]
  },
  {
    title: "OT & IT Infrastructure Solutions",
    category: "Network & Security",
    desc: "Designing enterprise-grade industrial communication infrastructure that securely connects operational technology with enterprise IT systems.",
    image: "/industries/water.png",
    overview: "Secure, Resilient & Connected Industrial Networks",
    capabilities: [
      "OT & IT Network Architecture",
      "Industrial Ethernet Networks",
      "Fibre Optic Infrastructure",
      "Industrial LAN/WAN",
      "Industrial Wi-Fi",
      "Secure Remote Access",
      "Industrial VPN",
      "VLAN Segmentation",
      "Industrial DMZ",
      "Firewall Integration",
      "OT Cybersecurity",
      "Server Infrastructure",
      "Data Centre Solutions",
      "Hybrid Cloud Infrastructure",
      "Network Monitoring & Diagnostics",
      "Multi-Plant Connectivity"
    ],
    technologies: ["IEC 62443", "Industrial Ethernet", "OT Firewalls", "Zero Trust"],
    outcomes: ["Zero security breaches", "100% network uptime", "ISA/IEC 62443 compliance"]
  },
  {
    title: "AI, Data Analytics & Industrial Intelligence",
    category: "AI & Intelligence",
    desc: "Empowering organisations with AI-driven insights that improve operational performance, reliability, and executive decision-making.",
    image: "/industries/datacenters.png",
    overview: "Transforming Industrial Data into Business Intelligence",
    capabilities: [
      "Industrial AI Solutions",
      "Predictive Analytics",
      "Machine Learning Models",
      "Executive Dashboards",
      "KPI Management",
      "Industrial Reporting",
      "Production Analytics",
      "Alarm Analytics",
      "Event Analytics",
      "Energy Analytics",
      "Utility Analytics",
      "Asset Performance Intelligence",
      "Digital Operations Dashboard",
      "Operational Intelligence Platform",
      "Decision Support Systems"
    ],
    technologies: ["TensorFlow / PyTorch", "Computer Vision", "Machine Learning", "MLOps Pipelines"],
    outcomes: ["50% scrap rate reduction", "94% anomaly detection accuracy", "12% energy savings"]
  },
  {
    title: "Field Services & Lifecycle Support (24×7)",
    category: "Lifecycle Support",
    desc: "Providing proactive maintenance, remote support, and operational services that ensure continuous industrial performance and reliability.",
    image: "/industries/mining.png",
    overview: "Maximising System Performance Throughout the Asset Lifecycle",
    capabilities: [
      "24×7 Technical Support",
      "Annual Maintenance Contracts (AMC)",
      "Preventive Maintenance",
      "Breakdown Maintenance",
      "Emergency Support",
      "Resident Engineers",
      "Remote Technical Support",
      "Health Assessments",
      "System Audits",
      "Performance Optimisation",
      "Software Upgrades",
      "Hardware Modernisation",
      "Spare Parts Management",
      "System Commissioning Support",
      "Plant Shutdown Support",
      "Lifecycle Asset Management",
      "Service Level Agreement (SLA) Management",
      "Training & Knowledge Transfer"
    ],
    technologies: ["24x7 Field Support", "System Retrofits", "SLA Governance", "On-Site Engineering"],
    outcomes: ["24/7 SLA guarantee", "Immediate incident response", "Extended asset lifespan"]
  }
];

/* ═══════════════════════════════════════════════════════════════
   CAPABILITY CARD COMPONENT (DARK GLASSMORPHISM)
   ═══════════════════════════════════════════════════════════════ */

function ServiceCard({ data, isExpanded, onCardHover, onCardLeave }: {
  data: ServiceData;
  isExpanded: boolean;
  onCardHover: () => void;
  onCardLeave: () => void;
}) {
  return (
    <div
      className="relative group cursor-pointer"
      onMouseEnter={onCardHover}
      onMouseLeave={onCardLeave}
      style={{ height: 480 }}
    >
      {/* Soft brand glows spreading beneath card on hover */}
      <motion.div
        className="absolute -inset-3 rounded-[32px] pointer-events-none z-0"
        animate={{
          opacity: isExpanded ? 0.75 : 0,
          scale: isExpanded ? 1.02 : 0.95,
        }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        style={{
          background: 'radial-gradient(ellipse at center, rgba(138,18,58,0.22) 0%, rgba(245,130,32,0.08) 50%, transparent 75%)',
          filter: 'blur(20px)',
        }}
      />

      {/* Card Shell */}
      <motion.div
        className="relative w-full h-full overflow-hidden z-10"
        animate={{
          boxShadow: isExpanded
            ? '0 25px 50px -12px rgba(10,12,18,0.8), 0 0 30px rgba(138,18,58,0.18), 0 0 15px rgba(245,130,32,0.1)'
            : '0 8px 32px rgba(10,12,18,0.6), 0 1px 2px rgba(255,255,255,0.02)',
          y: isExpanded ? -10 : 0,
        }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        style={{
          borderRadius: 28,
          border: '1px solid rgba(255, 255, 255, 0.08)',
          background: 'rgba(20, 24, 34, 0.72)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
        }}
      >
        {/* ── Animated Top Gradient Border ── */}
        <div
          className="absolute top-0 left-0 right-0 h-[4px] z-40"
          style={{
            borderRadius: '28px 28px 0 0',
            background: 'linear-gradient(90deg, #8B0036, #C2185B, #F28C28, #F5B731, #8B0036)',
            backgroundSize: '300% 100%',
            animation: 'gradientFlow 6s linear infinite',
          }}
        />

        {/* ══════════════════════════════════
            DEFAULT STATE — Image + Info
           ══════════════════════════════════ */}
        <motion.div
          className="absolute inset-0 flex flex-col"
          animate={{
            opacity: isExpanded ? 0 : 1,
            y: isExpanded ? -12 : 0,
          }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          style={{ pointerEvents: isExpanded ? 'none' : 'auto' }}
        >
          {/* Image — 70% */}
          <div className="relative w-full overflow-hidden" style={{ height: '66%', borderRadius: '28px 28px 0 0' }}>
            <motion.img
              src={data.image}
              alt={data.title}
              className="w-full h-full object-cover select-none pointer-events-none"
              animate={{ scale: isExpanded ? 1.05 : 1.0 }}
              transition={{ duration: 3, ease: [0.22, 1, 0.36, 1] }}
            />
            {/* Bottom dark gradient overlay */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'linear-gradient(to top, rgba(10,12,18,0.85) 0%, rgba(10,12,18,0.2) 40%, transparent 70%)',
              }}
            />
          </div>

          {/* Content — 34% */}
          <div className="flex-grow flex flex-col justify-between px-6 pt-4 pb-6">
            <div>
              <h5
                className="font-bold tracking-tight font-headline text-white"
                style={{ fontSize: 18, lineHeight: 1.25, marginBottom: 8 }}
              >
                {data.title}
              </h5>
              <p
                className="font-sans line-clamp-2 text-[#C7CEDD]"
                style={{ fontSize: 13, lineHeight: 1.6 }}
              >
                {data.desc}
              </p>
            </div>

            {/* Arrow Button — bottom right */}
            <div className="flex justify-end mt-2">
              <div
                className="flex items-center justify-center rounded-full"
                style={{
                  width: 44,
                  height: 44,
                  background: 'linear-gradient(135deg, #B4123F 0%, #A10E38 100%)',
                }}
              >
                <ArrowUpRight className="text-white" style={{ width: 18, height: 18 }} />
              </div>
            </div>
          </div>
        </motion.div>

        {/* ══════════════════════════════════
            EXPANDED STATE — Info Panel
           ══════════════════════════════════ */}
        <motion.div
          className="absolute inset-0 flex flex-col"
          animate={{
            opacity: isExpanded ? 1 : 0,
            y: isExpanded ? 0 : 16,
          }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          style={{
            pointerEvents: isExpanded ? 'auto' : 'none',
            borderRadius: 28,
            background: 'linear-gradient(160deg, rgba(20,24,34,0.96) 0%, rgba(15,20,30,0.97) 50%, rgba(10,12,18,0.98) 100%)',
          }}
        >
          {/* Blueprint grid texture */}
          <div
            className="absolute inset-0 pointer-events-none z-0"
            style={{
              borderRadius: 28,
              backgroundImage: `
                linear-gradient(rgba(245,130,32,0.015) 1px, transparent 1px),
                linear-gradient(90deg, rgba(245,130,32,0.015) 1px, transparent 1px)
              `,
              backgroundSize: '32px 32px',
            }}
          />

          {/* Animated Blueprint Nodes */}
          {isExpanded && (
            <>
              <motion.div
                className="absolute rounded-full z-0"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 0.5, scale: 1 }}
                transition={{ delay: 0.15, duration: 0.5, ease: 'easeOut' }}
                style={{
                  width: 6, height: 6, top: '18%', right: '12%',
                  background: '#C2185B',
                  boxShadow: '0 0 12px rgba(194,24,91,0.5)',
                }}
              />
              <motion.div
                className="absolute rounded-full z-0"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 0.4, scale: 1 }}
                transition={{ delay: 0.25, duration: 0.5, ease: 'easeOut' }}
                style={{
                  width: 5, height: 5, top: '45%', right: '8%',
                  background: '#F58220',
                  boxShadow: '0 0 10px rgba(245,130,32,0.4)',
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
                  boxShadow: '0 0 8px rgba(138,18,58,0.4)',
                }}
              />
              {/* Connection lines */}
              <motion.div
                className="absolute z-0 pointer-events-none"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  top: '18%', right: '12%',
                  width: 80, height: 1,
                  background: 'linear-gradient(to left, rgba(194,24,91,0.2), transparent)',
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
                  background: 'linear-gradient(to bottom, rgba(180,18,63,0.15), rgba(161,14,56,0.1), transparent)',
                  transformOrigin: 'top',
                }}
              />
            </>
          )}

          {/* Content */}
          <div className="relative z-10 flex flex-col h-full p-6 justify-between">
            <div>
              {/* Header */}
              <motion.h4
                initial={{ opacity: 0, y: 8 }}
                animate={isExpanded ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
                transition={{ duration: 0.35, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
                className="font-bold tracking-tight font-headline text-white"
                style={{ fontSize: 19, lineHeight: 1.25, marginBottom: 8 }}
              >
                {data.title}
              </motion.h4>

              <motion.p
                initial={{ opacity: 0, y: 6 }}
                animate={isExpanded ? { opacity: 1, y: 0 } : { opacity: 0, y: 6 }}
                transition={{ duration: 0.35, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="font-sans text-[#C7CEDD]"
                style={{ fontSize: 12.5, lineHeight: 1.6, marginBottom: 16 }}
              >
                {data.overview}
              </motion.p>

              {/* Service Points */}
              <div className="flex flex-col gap-2.5 mb-4 max-h-[220px] overflow-y-auto pr-1 text-left custom-scrollbar">
                {data.capabilities.map((service, sIdx) => (
                  <motion.div
                    key={sIdx}
                    initial={{ opacity: 0, x: -8 }}
                    animate={isExpanded ? { opacity: 1, x: 0 } : { opacity: 0, x: -8 }}
                    transition={{ duration: 0.3, delay: 0.12 + sIdx * 0.06, ease: [0.22, 1, 0.36, 1] }}
                    className="flex items-start gap-2.5"
                  >
                    <div
                      className="mt-1.5 flex-shrink-0 rounded-full"
                      style={{
                        width: 5, height: 5,
                        background: 'linear-gradient(135deg, #F28C28, #8B0036)',
                        boxShadow: '0 0 6px rgba(242,140,40,0.5)',
                      }}
                    />
                    <span style={{ fontSize: 12.5, color: '#C7CEDD', lineHeight: 1.4, fontWeight: 500 }}>
                      {service}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              {/* CTA Row */}
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={isExpanded ? { opacity: 1, y: 0 } : { opacity: 0, y: 6 }}
                transition={{ duration: 0.35, delay: 0.38, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-center justify-between pt-2 border-t border-white/5"
              >
                <div className="relative group/cta cursor-pointer">
                  <span
                    className="font-semibold text-white"
                    style={{ fontSize: 14, letterSpacing: '0.01em' }}
                  >
                    Explore Capabilities
                  </span>
                  {/* Animated underline */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={isExpanded ? { scaleX: 1 } : { scaleX: 0 }}
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

                {/* Arrow button inside gradient circle with soft outer glow */}
                <motion.div
                  animate={{
                    rotate: isExpanded ? 45 : 0,
                    boxShadow: isExpanded
                      ? '0 0 20px rgba(139,0,54,0.45), 0 0 10px rgba(242,140,40,0.2)'
                      : '0 2px 8px rgba(10,12,18,0.4)',
                  }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className="flex items-center justify-center rounded-full"
                  style={{
                    width: 44,
                    height: 44,
                    background: 'linear-gradient(135deg, #B4123F 0%, #A10E38 100%)',
                  }}
                >
                  <ArrowUpRight className="text-white" style={{ width: 18, height: 18 }} />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Gradient keyframe animation */}
      <style>{`
        @keyframes gradientFlow {
          0% { background-position: 0% 50%; }
          100% { background-position: 300% 50%; }
        }
      `}</style>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   MAIN SECTION
   ═══════════════════════════════════════════════════════════════ */

export default function Services() {
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null);
  const [particles, setParticles] = useState<number[]>([]);

  // Avoid hydration mismatch for random particle positions
  useEffect(() => {
    setParticles(Array.from({ length: 15 }, (_, i) => i));
  }, []);

  return (
    <Section
      id="services"
      variant="ink"
      containerSize="wide"
      className="overflow-hidden select-none border-y border-white/5"
      style={{
        background: '#0A0C12',
      }}
    >
      {/* Luxury Layered Dark Background Glows */}
      <div
        className="absolute pointer-events-none z-0"
        style={{
          width: 800,
          height: 800,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(138,18,58,0.065) 0%, rgba(21,27,45,0.2) 50%, transparent 70%)',
          filter: 'blur(100px)',
          top: '-15%',
          left: '5%',
        }}
      />
      <div
        className="absolute pointer-events-none z-0"
        style={{
          width: 700,
          height: 700,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(225,29,92,0.035) 0%, rgba(17,21,33,0.3) 55%, transparent 75%)',
          filter: 'blur(90px)',
          bottom: '-10%',
          right: '10%',
        }}
      />
      <div
        className="absolute pointer-events-none z-0"
        style={{
          width: 900,
          height: 900,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(90,45,130,0.03) 0%, transparent 75%)',
          filter: 'blur(120px)',
          top: '30%',
          left: '25%',
        }}
      />

      {/* Subtle background engineering blueprint grid */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.007) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.007) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
          opacity: 0.65,
        }}
      />

      {/* Premium Vignette */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: 'radial-gradient(circle at center, transparent 30%, rgba(10,12,18,0.75) 100%)',
        }}
      />

      {/* Slow floating GPU accelerated particles */}
      {particles.map((idx) => {
        // Seeded random numbers to keep them consistent on render
        const randX = (idx * 7) % 100;
        const randY = (idx * 13) % 100;
        const size = (idx % 3) + 1.5;
        const duration = 12 + (idx % 6);
        const delay = idx * 0.4;

        return (
          <motion.div
            key={idx}
            className="absolute rounded-full bg-white/10 pointer-events-none z-0"
            style={{
              width: size,
              height: size,
              left: `${randX}%`,
              top: `${randY}%`,
            }}
            animate={{
              y: [0, -90],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: duration,
              repeat: Infinity,
              ease: 'linear',
              delay: delay,
            }}
          />
        );
      })}

      {/* Moving Ambient Glow Blob */}
      <motion.div
        className="absolute pointer-events-none z-0"
        style={{
          width: 500,
          height: 500,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(138,18,58,0.04) 0%, rgba(245,130,32,0.01) 60%, transparent 80%)',
          filter: 'blur(80px)',
          top: '20%',
        }}
        animate={{ x: ['-20%', '120%', '-20%'] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
      />

      <div className="relative z-10 w-full">

        {/* ── Section Header ── */}
        <div className="flex flex-col w-full text-left mb-12 md:mb-16">
          <span
            className="font-semibold uppercase block mb-4"
            style={{
              fontSize: 11,
              color: '#F28C28',
              letterSpacing: '0.3em',
            }}
          >
            DOMAIN ARCHITECTURE & CAPABILITIES
          </span>
          <h2
            className="font-extrabold tracking-tight font-headline text-white mb-4"
            style={{
              fontSize: 'clamp(28px, 3.4vw, 50px)',
              lineHeight: 1.08,
            }}
          >
            Comprehensive Digital Engineering & Operational Solutions
          </h2>
          <p
            className="font-sans max-w-3xl text-[#C7CEDD]"
            style={{
              fontSize: 'clamp(14px, 1.1vw, 17px)',
              lineHeight: 1.7,
            }}
          >
            From industrial automation to enterprise intelligence, we engineer scalable digital platforms that connect data, AI, cloud, and operations into one intelligent ecosystem.
          </p>
        </div>

        {/* ── 2×4 Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-7">
          {SERVICES_DATA.map((item, idx) => (
            <ServiceCard
              key={idx}
              data={item}
              isExpanded={expandedIdx === idx}
              onCardHover={() => setExpandedIdx(idx)}
              onCardLeave={() => setExpandedIdx(null)}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
