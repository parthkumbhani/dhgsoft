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
    iconBg: 'linear-gradient(135deg, #8C123B 0%, #C2185B 100%)',
    iconColor: '#FFFFFF',
    image:
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Our Culture',
    description:
      'We build trust, drive innovation, and deliver excellence together.',
    icon: Lightbulb,
    iconBg: 'linear-gradient(135deg, #8C123B 0%, #C2185B 100%)',
    iconColor: '#FFFFFF',
    image:
      'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Life at DHGsoft',
    description:
      'A supportive workplace where ideas thrive and careers grow.',
    icon: Users,
    iconBg: 'linear-gradient(135deg, #8C123B 0%, #C2185B 100%)',
    iconColor: '#FFFFFF',
    image:
      'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Diversity & Inclusion',
    description:
      'We celebrate diversity and create an inclusive environment for all.',
    icon: Heart,
    iconBg: 'linear-gradient(135deg, #8C123B 0%, #C2185B 100%)',
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
              'linear-gradient(90deg, transparent 0%, #8C123B 30%, #C2185B 70%, transparent 100%)',
            opacity: 0.25,
          }}
        />
      </div>

      {/* ── Main Content ── */}
      <div className="relative z-10 w-full">
        {/* Header Row */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-12 lg:mb-16">
          {/* Left: Label + Heading + Subtitle */}
          <motion.div variants={fadeUp} className="max-w-none w-full flex-grow">
            {/* JOIN US label */}
            <div className="flex items-center gap-2 mb-3">
              <div
                className="h-[2.5px] w-6 rounded-full bg-gradient-to-r from-[#8C123B] to-[#C2185B]"
              />
              <span
                className="text-[11.5px] font-extrabold tracking-[0.25em] uppercase font-sans text-[#8C123B]"
              >
                Join Us
              </span>
            </div>

            {/* Heading in Single Line */}
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-slate-900 leading-tight tracking-tight mb-2 font-headline whitespace-nowrap">
              Engineering Tomorrow,{' '}
              <span className="bg-gradient-to-r from-[#8C123B] to-[#C2185B] bg-clip-text text-transparent inline-block">
                Together.
              </span>
            </h2>

            {/* Subtitle in Single Line */}
            <p className="text-[15px] lg:text-[16px] text-slate-600 leading-relaxed font-sans max-w-5xl whitespace-normal sm:whitespace-nowrap">
              At DHGsoft, we foster a culture where people with a can-do attitude can be a part of our growing team and build meaningful impact across the globe.
            </p>
          </motion.div>

          {/* Right: CTA Button */}
          <motion.div variants={fadeUp} className="flex-shrink-0 lg:mt-0">
            <motion.button
              whileHover={{
                y: -2,
                boxShadow: '0px 10px 28px rgba(140, 18, 59, 0.22)',
              }}
              whileTap={{ scale: 0.97 }}
              className="group flex items-center gap-2.5 text-[13.5px] font-extrabold px-8 py-4 rounded-full border-2 border-slate-200 bg-white hover:border-[#8C123B]/40 transition-all duration-300 cursor-pointer shadow-sm"
            >
              <span className="font-sans tracking-wide uppercase text-[#8C123B] group-hover:text-[#C2185B] transition-colors">
                Explore Careers
              </span>
              <ArrowRight className="w-4 h-4 text-[#8C123B] transition-transform duration-300 group-hover:translate-x-1" />
            </motion.button>
          </motion.div>
        </div>

        {/* ── Cards Grid (INCREASED BOX SIZES ALONG WITH LARGER IMAGES) ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {CAREER_CARDS.map((card, idx) => {
            const CardIcon = card.icon;
            return (
              <motion.div
                key={idx}
                custom={idx}
                variants={cardVariant}
                whileHover={{
                  y: -10,
                  boxShadow:
                    '0 30px 65px rgba(15, 23, 42, 0.12), 0 12px 30px rgba(15, 23, 42, 0.08)',
                }}
                className="group relative bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-md hover:border-slate-200/90 transition-all duration-500 cursor-pointer flex flex-col justify-between"
              >
                {/* INCREASED LARGE IMAGE CONTAINER (H-80 / H-[350PX]) */}
                <div className="relative h-80 lg:h-[350px] overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>

                {/* Icon badge - positioned overlapping image/content boundary */}
                <div
                  className="absolute top-[296px] lg:top-[326px] left-6 z-20 w-13 h-13 rounded-xl flex items-center justify-center shadow-xl ring-4 ring-white transition-transform duration-300 group-hover:scale-110"
                  style={{ background: card.iconBg }}
                >
                  <CardIcon
                    className="w-6 h-6 text-white"
                  />
                </div>

                {/* INCREASED CONTENT BOX PADDING & TEXT SIZES */}
                <div className="px-7 pt-10 pb-7 flex flex-col justify-between flex-grow">
                  <div>
                    <h4 className="text-[19px] font-extrabold text-slate-900 mb-2.5 tracking-tight font-headline">
                      {card.title}
                    </h4>
                    <p className="text-[14px] text-slate-600 leading-relaxed mb-6 font-sans font-normal">
                      {card.description}
                    </p>
                  </div>

                  {/* Arrow link */}
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-[#8C123B] flex items-center justify-center transition-colors">
                      <ArrowRight className="w-4 h-4 text-[#8C123B] group-hover:text-white transition-all duration-300 group-hover:translate-x-0.5" />
                    </div>
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
