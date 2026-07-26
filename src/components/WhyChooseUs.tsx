'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  Factory, 
  Layers, 
  Sparkles, 
  Target, 
  Globe2, 
  ShieldCheck, 
  Clock, 
  Zap,
  LucideIcon
} from 'lucide-react';
import { Container } from '@/components/ui/Container';

interface Differentiator {
  title: string;
  description: string;
  icon: LucideIcon;
}

const DIFFERENTIATORS: Differentiator[] = [
  {
    title: 'Industrial Domain Expertise',
    description: 'Extensive experience in industrial automation, process control, OT/IT integration, and digital transformation across multiple industries.',
    icon: Factory,
  },
  {
    title: 'End-to-End Solutions',
    description: 'A single technology partner for consulting, engineering, implementation, system integration, managed services, and long-term support.',
    icon: Layers,
  },
  {
    title: 'Digital Innovation',
    description: 'Leveraging AI, IIoT, Industrial Data Platforms, cloud technologies, and advanced analytics to enable smarter industrial operations.',
    icon: Sparkles,
  },
  {
    title: 'Customer-Centric Delivery',
    description: 'Every solution is tailored to your operational goals, ensuring measurable improvements in productivity, quality, reliability, and sustainability.',
    icon: Target,
  },
  {
    title: 'Global Delivery Capability',
    description: 'Supporting customers with scalable delivery models, remote engineering, and on-site services for projects across India and international markets.',
    icon: Globe2,
  },
  {
    title: 'Trusted Engineering Team',
    description: 'Experienced automation, software, cloud, and data engineering professionals delivering projects with quality, safety, and reliability.',
    icon: ShieldCheck,
  },
  {
    title: '24×7 Lifecycle Support',
    description: 'Comprehensive support services including monitoring, maintenance, troubleshooting, upgrades, and performance optimization throughout the asset lifecycle.',
    icon: Clock,
  },
  {
    title: 'Future-Ready Technologies',
    description: 'Designing scalable architectures that support Industry 4.0, Industrial AI, smart manufacturing, and digital enterprise initiatives.',
    icon: Zap,
  },
];

interface MetricItem {
  value: number;
  suffix: string;
  label: string;
  isStringValue?: string;
}

const METRICS_DATA: MetricItem[] = [
  {
    value: 100,
    suffix: "+",
    label: "Successful Projects Delivered",
  },
  {
    value: 25,
    suffix: "+",
    label: "Industrial Technologies & Platforms",
  },
  {
    value: 10,
    suffix: "+",
    label: "Industry Verticals Served",
  },
  {
    value: 24,
    suffix: "/7",
    label: "Global Technical Support",
    isStringValue: "24×7",
  },
  {
    value: 99.9,
    suffix: "%",
    label: "Solution Availability Target",
  },
  {
    value: 100,
    suffix: "%",
    label: "Customer-Focused Delivery",
  },
];

function AnimatedCounter({ target, suffix, isStringValue }: { target: number; suffix: string; isStringValue?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          if (isStringValue) return;

          const duration = 1800;
          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            
            if (target % 1 !== 0) {
              setCount(parseFloat((eased * target).toFixed(1)));
            } else {
              setCount(Math.floor(eased * target));
            }

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [target, isStringValue]);

  return (
    <div ref={ref} className="text-2xl lg:text-3xl font-black text-white tracking-tight font-headline leading-none">
      {isStringValue ? (
        <span>{isStringValue}</span>
      ) : (
        <>
          <span>{count}</span>
          <span className="text-[#C2185B]">{suffix}</span>
        </>
      )}
    </div>
  );
}

interface WhyChooseUsProps {
  onContactClick?: () => void;
}

export default function WhyChooseUs({ onContactClick }: WhyChooseUsProps) {
  return (
    <section
      id="why-us"
      style={{ backgroundColor: '#FAFBFC' }}
      className="w-full text-slate-900 relative overflow-hidden border-t border-slate-200/80 select-none pt-8 pb-12 lg:pt-10 lg:pb-14 h-auto"
    >
      {/* Ambient Decorative Lighting Background */}
      <div className="absolute top-0 right-1/3 w-[600px] h-[600px] bg-[#8C123B]/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[550px] h-[550px] bg-[#C2185B]/5 rounded-full blur-[150px] pointer-events-none" />

      <Container size="wide" className="relative z-10 w-full space-y-9 lg:space-y-10">
        
        {/* ── 1. SINGLE LINE HEADLINE & FULL WIDTH NARRATIVE ── */}
        <div className="text-left w-full max-w-none">
          <div className="flex items-center gap-2 mb-2">
            <div className="h-[2.5px] w-6 rounded-full bg-gradient-to-r from-[#8C123B] to-[#C2185B]" />
            <span className="text-[11.5px] font-extrabold text-[#8C123B] uppercase tracking-[0.25em] font-sans">
              Why DHGsoft
            </span>
          </div>

          {/* Headline in Single Line */}
          <h2 className="text-2xl md:text-3xl lg:text-[36px] font-extrabold text-slate-900 tracking-tight font-headline leading-tight mb-2 whitespace-nowrap">
            Engineering Excellence.{' '}
            <span className="text-[#8C123B]">Measurable Business Outcomes.</span>
          </h2>

          {/* Narrative in Full Width */}
          <p className="text-[14.5px] lg:text-[15.5px] text-slate-600 leading-relaxed font-sans max-w-none w-full font-normal">
            At DHGsoft, we combine deep industrial engineering expertise with advanced digital technologies to help organizations modernize operations, improve reliability, and accelerate business performance. From plant-floor automation to enterprise intelligence, we deliver solutions that create lasting value.
          </p>
        </div>

        {/* ── 2. 8 ULTRA-ATTRACTIVE LIGHT GLASS CARDS (4 COLS X 2 ROWS) ── */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[12px] font-extrabold text-[#8C123B] uppercase tracking-widest font-sans">
              Key Differentiators
            </span>
            <div className="h-[1px] flex-grow bg-slate-200/80" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {DIFFERENTIATORS.map((diff, idx) => {
              const Icon = diff.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.04 }}
                  className="group bg-gradient-to-br from-white via-slate-50/40 to-white rounded-[22px] p-5 border border-slate-200/90 shadow-[0_4px_20px_rgba(15,23,42,0.04)] hover:shadow-[0_20px_40px_rgba(140,18,59,0.12)] hover:border-[#C2185B]/60 hover:-translate-y-1.5 transition-all duration-300 text-left flex flex-col justify-between relative overflow-hidden"
                >
                  {/* Top Crimson Accent Ribbon Line */}
                  <div className="absolute top-0 left-0 right-0 h-[3.5px] bg-gradient-to-r from-[#8C123B] via-[#C2185B] to-[#8C123B] opacity-0 group-hover:opacity-100 transition-opacity z-20" />

                  <div>
                    {/* Gradient Icon Badge */}
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#8C123B] to-[#C2185B] text-white flex items-center justify-center mb-4 shadow-md shadow-[#8C123B]/25 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5 text-white" />
                    </div>

                    {/* Title */}
                    <h4 className="text-[16px] font-extrabold text-slate-900 mb-1.5 tracking-tight font-headline group-hover:text-[#8C123B] transition-colors leading-snug">
                      {diff.title}
                    </h4>

                    {/* Description (Verbatim Full Text) */}
                    <p className="text-[13px] text-slate-600 leading-relaxed font-sans font-normal">
                      {diff.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ── 3. BY THE NUMBERS (COMPACT ULTRA-SLEEK OBSIDIAN METRICS CARD) ── */}
        <div 
          style={{ background: 'linear-gradient(135deg, #0B1120 0%, #151C2E 100%)' }}
          className="rounded-[20px] p-4 px-6 lg:p-5 lg:px-8 text-white shadow-xl border border-[#8C123B]/50 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#8C123B]/20 rounded-full blur-[120px] pointer-events-none" />

          <div className="relative z-10 space-y-2.5">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#C2185B] animate-pulse" />
              <span className="text-[10px] font-extrabold text-[#C2185B] uppercase tracking-[0.25em] font-sans">
                BY THE NUMBERS
              </span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-800/90 pt-1">
              {METRICS_DATA.map((metric, idx) => (
                <div key={idx} className={`pt-2 sm:pt-0 ${idx > 0 ? 'sm:pl-4' : ''} flex flex-col justify-between`}>
                  <div>
                    <AnimatedCounter target={metric.value} suffix={metric.suffix} isStringValue={metric.isStringValue} />
                  </div>
                  <p className="text-[11.5px] text-slate-300 font-semibold font-sans mt-1 leading-snug">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </Container>
    </section>
  );
}
