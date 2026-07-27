'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  FileText, 
  Cpu, 
  Factory, 
  Wifi, 
  FlaskConical, 
  CheckCircle2, 
  ArrowRight,
  ArrowUpRight,
  LucideIcon
} from 'lucide-react';
import { Container } from '@/components/ui/Container';

interface KnowledgeItem {
  id: string;
  title: string;
  desc: string;
  image: string;
  icon: LucideIcon;
  bullets: string[];
  link: string;
}

const KNOWLEDGE_ITEMS: KnowledgeItem[] = [
  {
    id: "research",
    title: "Research & Industry Insights",
    desc: "Market research, industry trends, benchmark studies, and executive perspectives shaping the future of industrial enterprises.",
    image: "/images/insights/insights-featured.jpg",
    icon: BookOpen,
    bullets: [
      "Industry Research Reports",
      "Market Trends & Insights",
      "Executive Perspectives",
      "Digital Transformation Studies"
    ],
    link: "/insights"
  },
  {
    id: "whitepapers",
    title: "Whitepapers & Publications",
    desc: "Access in-depth technical documents, implementation guides, engineering standards, and best practices developed by our specialists.",
    image: "/images/insights/insights-whitepapers.jpg",
    icon: FileText,
    bullets: [
      "Technical Whitepapers",
      "Engineering Guidelines",
      "Best Practices",
      "Implementation Frameworks"
    ],
    link: "/insights"
  },
  {
    id: "ai",
    title: "AI & Industrial Intelligence",
    desc: "Discover how Artificial Intelligence, Machine Learning, and Operational Intelligence are transforming industrial operations and business decision-making.",
    image: "/images/insights/ai-automation-overview.jpg",
    icon: Cpu,
    bullets: [
      "Industrial AI",
      "Predictive Analytics",
      "Digital Intelligence",
      "AI-Powered Operations"
    ],
    link: "/insights"
  },
  {
    id: "industry4",
    title: "Industry 4.0 & Smart Manufacturing",
    desc: "Learn how connected factories, automation, robotics, digital twins, and real-time manufacturing intelligence are driving operational excellence.",
    image: "/smart_factory_visual.png",
    icon: Factory,
    bullets: [
      "Smart Factory",
      "Manufacturing Intelligence",
      "Digital Twin",
      "Operational Excellence"
    ],
    link: "/insights"
  },
  {
    id: "iiot",
    title: "Industrial IoT & Connected Assets",
    desc: "Explore secure industrial connectivity, edge computing, Industrial IoT architectures, and real-time asset monitoring.",
    image: "/images/insights/tech-ecosystem-overview.jpg",
    icon: Wifi,
    bullets: [
      "IIoT Architecture",
      "Edge Computing",
      "Connected Assets",
      "Remote Operations"
    ],
    link: "/insights"
  },
  {
    id: "labs",
    title: "Innovation Labs & Case Studies",
    desc: "Explore real-world implementations, proof-of-concepts, innovation projects, and customer success stories demonstrating measurable business value.",
    image: "/images/insights/case-studies-overview.jpg",
    icon: FlaskConical,
    bullets: [
      "Innovation Labs",
      "Proof of Concepts",
      "Case Studies",
      "Success Stories"
    ],
    link: "/insights"
  }
];

const WHY_VISIT_REASONS = [
  "Access industry-leading research & insights",
  "Explore proven engineering architectures",
  "Learn from successful transformation projects",
  "Discover practical smart factory solutions"
];

export default function InnovationInstitute() {
  return (
    <section
      id="innovation-institute"
      style={{ backgroundColor: '#0A0E1A' }}
      className="w-full text-white relative overflow-hidden border-b border-slate-900 select-none pt-16 md:pt-20 pb-14 md:pb-16 h-auto"
    >
      {/* Signature 2-3 Color Theme Lighting Flares (Dark Navy + Deep Crimson + Magenta ONLY - ZERO YELLOW) */}
      <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-[#8C123B]/18 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[550px] h-[550px] bg-[#C2185B]/14 rounded-full blur-[160px] pointer-events-none" />

      <Container size="wide" className="relative z-10 w-full flex flex-col gap-8">
        
        {/* ── 1. CLEAN ENTERPRISE HEADER (WITH COMPLETE FLOATING NAVBAR CLEARANCE: PT-28 / PT-32) ── */}
        <div className="text-left w-full max-w-none">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#C2185B] animate-pulse" />
            <span className="text-[11px] font-extrabold text-[#C2185B] uppercase tracking-[0.25em] font-sans">
              DHGSOFT INNOVATION INSTITUTE
            </span>
          </div>

          <h2 className="text-2xl md:text-3xl lg:text-[32px] font-extrabold tracking-tight text-white font-headline leading-tight mb-2">
            Advancing Industrial Innovation Through Research, Engineering &amp; Intelligence
          </h2>

          <p className="text-[13.5px] lg:text-[14.5px] text-slate-300 leading-relaxed font-sans max-w-5xl font-normal">
            The DHGsoft Innovation Institute is our centre for industrial research, technology innovation, and engineering excellence. We create practical insights, reference architectures, technology frameworks, and industry research that help organisations accelerate digital transformation.
          </p>
        </div>

        {/* ── 2. REAL TOPIC-SPECIFIC CARD BACKGROUND IMAGE GRID SHOWCASE (CLEAR & BRIGHT IMAGES) ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch w-full">
          {KNOWLEDGE_ITEMS.map((item, idx) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.25, delay: idx * 0.04 }}
                style={{ 
                  background: 'linear-gradient(135deg, rgba(140, 18, 59, 0.35) 0%, rgba(11, 17, 32, 0.96) 100%)'
                }}
                className="rounded-[22px] p-6 lg:p-7 flex flex-col justify-between shadow-2xl border border-slate-800/90 hover:border-[#C2185B] hover:shadow-[0_0_35px_rgba(194,24,91,0.40)] hover:-translate-y-1 transition-all duration-300 text-left backdrop-blur-md relative overflow-hidden group min-h-[270px]"
              >
                {/* Real Topic-Specific Full Card Background Image (Increased Opacity for High Clarity) */}
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover opacity-60 group-hover:scale-105 group-hover:opacity-75 transition-all duration-500 pointer-events-none"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                {/* Soft Dark Gradient Overlay Layer for Maximum Image Clarity & Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-[#0B1120]/60 to-[#0B1120]/30 z-10" />

                {/* Top Crimson Accent Ribbon Line */}
                <div className="absolute top-0 left-0 right-0 h-[3.5px] bg-gradient-to-r from-[#8C123B] via-[#C2185B] to-[#8C123B] opacity-80 group-hover:opacity-100 transition-opacity z-30" />

                {/* Card Content Body (Z-Index 20 Above Background Image) */}
                <div className="relative z-20 flex flex-col justify-between h-full space-y-4">
                  
                  {/* Card Header: Icon & Category Tag */}
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-9 h-9 rounded-xl bg-[#8C123B] text-white flex items-center justify-center shrink-0 shadow-lg border border-[#C2185B]/60 group-hover:scale-105 transition-transform">
                        <Icon className="w-4.5 h-4.5 text-white" />
                      </div>

                      <span className="text-[10px] font-extrabold text-white bg-[#8C123B]/85 border border-[#C2185B]/70 uppercase tracking-widest font-sans px-3.5 py-1 rounded-full shadow-md backdrop-blur-md">
                        KNOWLEDGE HUB
                      </span>
                    </div>

                    {/* Title (Full Text, High Contrast with Drop Shadow) */}
                    <h3 className="text-lg lg:text-[18.5px] font-extrabold text-white tracking-tight font-headline mb-1.5 leading-snug drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                      {item.title}
                    </h3>

                    {/* Description (High Contrast with Drop Shadow) */}
                    <p className="text-[12.5px] text-slate-100 leading-relaxed font-sans mb-3 font-medium drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]">
                      {item.desc}
                    </p>

                    {/* Bullet Tags Grid */}
                    <div className="grid grid-cols-2 gap-2 border-t border-slate-700/80 pt-3 mb-4">
                      {item.bullets.map((bullet, bIdx) => (
                        <div key={bIdx} className="flex items-center gap-1.5 text-[11px] font-semibold text-white font-sans drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#C2185B] shrink-0" />
                          <span>{bullet}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Button — circular icon */}
                  <div className="flex justify-end">
                    <Link href={item.link}>
                      <div
                        className="flex items-center justify-center rounded-full hover:scale-110 transition-all duration-200 cursor-pointer shadow-[0_4px_16px_rgba(194,24,91,0.45)]"
                        style={{
                          width: 48,
                          height: 48,
                          background: 'linear-gradient(135deg, #8C123B 0%, #C2185B 100%)',
                        }}
                      >
                        <ArrowUpRight className="text-white" style={{ width: 20, height: 20 }} />
                      </div>
                    </Link>
                  </div>

                </div>

              </motion.div>
            );
          })}
        </div>

        {/* ── 3. ENTERPRISE BOTTOM SHOWCASE STRIP ("WHY VISIT THE DHGSOFT INNOVATION INSTITUTE?") ── */}
        <div 
          style={{
            background: 'linear-gradient(135deg, rgba(11, 17, 32, 0.96) 0%, rgba(140, 18, 59, 0.40) 100%)'
          }}
          className="rounded-[20px] p-4 px-6 border border-[#8C123B]/60 shadow-2xl backdrop-blur-md text-left flex flex-col md:flex-row items-center justify-between gap-4 mt-2"
        >
          <div className="flex items-center gap-5 min-w-0">
            <span className="text-[11px] font-extrabold text-[#C2185B] uppercase tracking-[0.2em] font-sans shrink-0 hidden md:inline-block">
              WHY VISIT:
            </span>
            <div className="flex flex-wrap items-center gap-4 text-[12px] font-semibold text-slate-200 font-sans">
              {WHY_VISIT_REASONS.map((reason, idx) => (
                <div key={idx} className="flex items-center gap-2 shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-[#C2185B] shrink-0" />
                  <span>{reason}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="shrink-0 text-right w-full md:w-auto">
            <Link href="/innovation-institute" className="inline-block w-full md:w-auto">
              <button className="w-full md:w-auto flex items-center justify-center gap-2 text-[11.5px] font-extrabold text-white px-6 py-2.5 rounded-full bg-gradient-to-r from-[#8C123B] to-[#C2185B] hover:from-[#C2185B] hover:to-[#8C123B] shadow-[0_0_20px_rgba(194,24,91,0.5)] hover:scale-[1.02] transition-all duration-300 cursor-pointer font-sans tracking-wide uppercase">
                <span>EXPLORE INNOVATION INSTITUTE</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </button>
            </Link>
          </div>
        </div>

      </Container>
    </section>
  );
}
