'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Section } from '@/components/ui/Section';
import {
  ArrowRight,
  Briefcase,
  Lightbulb,
  Users,
  Heart,
  LucideIcon,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CAREERS DATA
   ═══════════════════════════════════════════════════════════════ */

interface CareerCard {
  title: string;
  description: string;
  icon: LucideIcon;
  iconBg: string;
  iconColor: string;
  image: string;
}

const CAREER_CARDS: CareerCard[] = [
  {
    title: 'Job Opportunities',
    description: 'Explore exciting roles and build the career you envision.',
    icon: Briefcase,
    iconBg: 'linear-gradient(135deg, #E8364F 0%, #F0506A 100%)',
    iconColor: '#FFFFFF',
    image:
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Our Culture',
    description:
      'We build trust, drive innovation, and deliver excellence together.',
    icon: Lightbulb,
    iconBg: 'linear-gradient(135deg, #3B82F6 0%, #60A5FA 100%)',
    iconColor: '#FFFFFF',
    image:
      'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Life at DHGsoft',
    description:
      'A supportive workplace where ideas thrive and careers grow.',
    icon: Users,
    iconBg: 'linear-gradient(135deg, #F97316 0%, #FB923C 100%)',
    iconColor: '#FFFFFF',
    image:
      'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Diversity & Inclusion',
    description:
      'We celebrate diversity and create an inclusive environment for all.',
    icon: Heart,
    iconBg: 'linear-gradient(135deg, #8B5CF6 0%, #A78BFA 100%)',
    iconColor: '#FFFFFF',
    image:
      'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=800&q=80',
  },
];

/* ═══════════════════════════════════════════════════════════════
   ANIMATION VARIANTS
   ═══════════════════════════════════════════════════════════════ */

const sectionVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
      delay: 0.15 + i * 0.1,
    },
  }),
};

/* ═══════════════════════════════════════════════════════════════
   COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function Careers() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 });

  return (
    <Section
      ref={sectionRef}
      id="careers"
      variant="mist"
      containerSize="wide"
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={sectionVariants}
      className="overflow-hidden border-t border-slate-200/60 min-h-[85vh] lg:min-h-screen flex flex-col justify-center py-16 lg:py-24"
      style={{ background: '#FAFBFC' }}
    >
      {/* ── Subtle decorative background ── */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Top-right decorative dots */}
        <svg
          className="absolute top-8 right-12 opacity-[0.06]"
          width="200"
          height="200"
          viewBox="0 0 200 200"
        >
          {Array.from({ length: 100 }).map((_, i) => (
            <circle
              key={i}
              cx={(i % 10) * 20 + 10}
              cy={Math.floor(i / 10) * 20 + 10}
              r="1.5"
              fill="#94A3B8"
            />
          ))}
        </svg>

        {/* Bottom-left hex pattern */}
        <svg
          className="absolute bottom-4 left-8 opacity-[0.04]"
          width="180"
          height="160"
          viewBox="0 0 180 160"
        >
          <path
            d="M30 20 L60 5 L90 20 L90 50 L60 65 L30 50Z"
            fill="none"
            stroke="#CBD5E1"
            strokeWidth="0.8"
          />
          <path
            d="M90 20 L120 5 L150 20 L150 50 L120 65 L90 50Z"
            fill="none"
            stroke="#CBD5E1"
            strokeWidth="0.8"
          />
          <path
            d="M60 65 L90 50 L120 65 L120 95 L90 110 L60 95Z"
            fill="none"
            stroke="#CBD5E1"
            strokeWidth="0.8"
          />
        </svg>

        {/* Top gradient line accent */}
        <div
          className="absolute top-0 left-0 right-0 h-[2px]"
          style={{
            background:
              'linear-gradient(90deg, transparent 0%, #C5165C 30%, #FF8A00 70%, transparent 100%)',
            opacity: 0.15,
          }}
        />
      </div>

      {/* ── Main Content ── */}
      <div className="relative z-10 w-full">
        {/* Header Row */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-12 lg:mb-16">
          {/* Left: Label + Heading + Subtitle */}
          <motion.div variants={fadeUp} className="max-w-xl">
            {/* JOIN US label */}
            <div className="flex items-center gap-2 mb-4">
              <div
                className="h-[2px] w-6"
                style={{
                  background:
                    'linear-gradient(90deg, #C5165C, #FF8A00)',
                }}
              />
              <span
                className="text-[11px] font-extrabold tracking-[0.2em] uppercase"
                style={{
                  background:
                    'linear-gradient(90deg, #C5165C, #FF8A00)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Join Us
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-slate-900 leading-[1.15] tracking-tight mb-5 font-headline">
              Engineering Tomorrow,
              <br />
              <span
                style={{
                  background:
                    'linear-gradient(90deg, #C5165C 0%, #E8364F 40%, #FF8A00 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Together.
              </span>
            </h2>

            {/* Subtitle */}
            <p className="text-[15px] text-slate-500 leading-relaxed font-sans">
              At DHGsoft, we foster a culture where people with a can-do
              attitude can be a part of our growing team and build meaningful
              impact across the globe.
            </p>
          </motion.div>

          {/* Right: CTA Button */}
          <motion.div variants={fadeUp} className="flex-shrink-0 lg:mt-6">
            <motion.button
              whileHover={{
                y: -2,
                boxShadow: '0px 8px 24px rgba(197, 22, 92, 0.18)',
              }}
              whileTap={{ scale: 0.97 }}
              className="group flex items-center gap-2.5 text-[13px] font-bold px-7 py-3.5 rounded-full border-2 border-slate-200 bg-white hover:border-[#C5165C]/30 transition-all duration-300 cursor-pointer"
            >
              <span
                className="font-sans tracking-wide"
                style={{
                  background:
                    'linear-gradient(90deg, #C5165C, #FF8A00)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Explore Careers
              </span>
              <ArrowRight className="w-4 h-4 text-[#C5165C] transition-transform duration-300 group-hover:translate-x-1" />
            </motion.button>
          </motion.div>
        </div>

        {/* ── Cards Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CAREER_CARDS.map((card, idx) => {
            const CardIcon = card.icon;
            return (
              <motion.div
                key={idx}
                custom={idx}
                variants={cardVariant}
                whileHover={{
                  y: -8,
                  boxShadow:
                    '0 25px 55px rgba(15, 23, 42, 0.10), 0 10px 25px rgba(15, 23, 42, 0.05)',
                }}
                className="group relative bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:border-slate-200/80 transition-all duration-500 cursor-pointer flex flex-col justify-between"
              >
                {/* Large Image */}
                <div className="relative h-64 lg:h-72 overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
                </div>

                {/* Icon badge - positioned overlapping image/content boundary */}
                <div
                  className="absolute top-[232px] lg:top-[264px] left-6 z-20 w-12 h-12 rounded-xl flex items-center justify-center shadow-lg ring-4 ring-white transition-transform duration-300 group-hover:scale-110"
                  style={{ background: card.iconBg }}
                >
                  <CardIcon
                    className="w-5.5 h-5.5"
                    style={{ color: '#FFFFFF' }}
                  />
                </div>

                {/* Content */}
                <div className="px-6 pt-9 pb-6 flex flex-col justify-between flex-grow">
                  <div>
                    <h4 className="text-[17px] font-bold text-slate-800 mb-2.5 tracking-tight font-headline">
                      {card.title}
                    </h4>
                    <p className="text-[13.5px] text-slate-500 leading-relaxed mb-5 font-sans">
                      {card.description}
                    </p>
                  </div>

                  {/* Arrow link */}
                  <div className="flex items-center">
                    <ArrowRight className="w-4.5 h-4.5 text-[#C5165C] transition-transform duration-300 group-hover:translate-x-2" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
