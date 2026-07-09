'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Globe, Calendar, FileUp, ClipboardList, MessageSquare, 
  CheckCircle2, Briefcase, Users, Star, ChevronRight 
} from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';

const steps = [
  { id: '01', label: 'Connect with DHGsoft', Icon: Globe },
  { id: '02', label: 'Campus Events',        Icon: Calendar },
  { id: '03', label: 'Apply',                Icon: FileUp },
  { id: '04', label: 'Assessment',           Icon: ClipboardList },
  { id: '05', label: 'Interview',            Icon: MessageSquare },
  { id: '06', label: 'Selection',            Icon: CheckCircle2 },
  { id: '07', label: 'Internship / GET',     Icon: Briefcase },
  { id: '08', label: 'Mentorship',           Icon: Users },
  { id: '09', label: 'Career at DHGsoft',    Icon: Star },
];

export default function CampusJourney() {
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { once: true, amount: 0.3 });

  return (
    <Section variant="white" size="default" className="relative overflow-hidden py-20 border-t border-line">
      
      {/* =========== ATTRACTIVE SMOOTH BACKGROUND GRAPHICS =========== */}
      
      {/* Large soft brand blob — top left */}
      <div 
        className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full opacity-[0.08] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgb(180 18 63) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />
      
      {/* Second soft brand blob — bottom right */}
      <div 
        className="absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full opacity-[0.06] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgb(225 29 92) 0%, transparent 70%)',
          filter: 'blur(70px)',
        }}
      />
      
      {/* Flowing SVG curves — subtle decorative lines */}
      <svg 
        className="absolute inset-0 w-full h-full pointer-events-none" 
        preserveAspectRatio="none"
        viewBox="0 0 1440 800"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="curve-grad-1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgb(180 18 63)" stopOpacity="0" />
            <stop offset="50%" stopColor="rgb(180 18 63)" stopOpacity="0.15" />
            <stop offset="100%" stopColor="rgb(180 18 63)" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="curve-grad-2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgb(225 29 92)" stopOpacity="0" />
            <stop offset="50%" stopColor="rgb(225 29 92)" stopOpacity="0.1" />
            <stop offset="100%" stopColor="rgb(225 29 92)" stopOpacity="0" />
          </linearGradient>
        </defs>
        
        {/* Curve 1 — flowing across top */}
        <path 
          d="M -100,180 Q 360,80 720,180 T 1540,180" 
          fill="none" 
          stroke="url(#curve-grad-1)" 
          strokeWidth="2"
        />
        
        {/* Curve 2 — flowing across middle-bottom */}
        <path 
          d="M -100,620 Q 360,540 720,620 T 1540,620" 
          fill="none" 
          stroke="url(#curve-grad-2)" 
          strokeWidth="2"
        />
        
        {/* Curve 3 — very subtle in the middle */}
        <path 
          d="M -100,420 Q 480,360 960,420 T 1540,420" 
          fill="none" 
          stroke="url(#curve-grad-1)" 
          strokeWidth="1.5"
        />
      </svg>
      
      {/* =========== CONTENT =========== */}
      
      <Container className="relative z-10">
        {/* Header — centered */}
        <div className="relative text-center">
          <div className="text-brand text-label-bold uppercase tracking-[0.2em]">
            Your Path
          </div>
          <h2 className="text-text-strong font-headline mt-4">Campus Journey</h2>
          <p className="text-body-md text-text-muted mt-6 max-w-[640px] mx-auto leading-relaxed">
            From your first campus interaction to a full-time career — here's how the journey unfolds.
          </p>
        </div>

        {/* Timeline */}
        <div ref={containerRef} className="relative mt-20">
          
          {/* Track — light gray line background */}
          <div className="hidden lg:block absolute top-8 left-[5.5%] right-[5.5%] h-[3px] bg-line rounded-full" />
          
          {/* Animated fill line — draws left to right on scroll */}
          <motion.div
            className="hidden lg:block absolute top-8 left-[5.5%] h-[3px] rounded-full origin-left"
            style={{ 
              width: '89%',
              background: 'linear-gradient(to right, rgb(180 18 63), rgb(225 29 92), rgb(180 18 63))',
            }}
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1] }}
          />

          {/* Nodes + Chevrons row */}
          <div className="flex gap-2 lg:gap-0 overflow-x-auto lg:overflow-visible lg:justify-between pb-4 lg:pb-0 relative scrollbar-thin scrollbar-thumb-brand/20 scrollbar-track-mist">
            {steps.map((step, i) => {
              const isLast = i === steps.length - 1;
              const nodeDelay = 0.15 + (i * 0.22);
              
              return (
                <div key={step.id} className="flex items-start gap-1 lg:gap-2 flex-shrink-0">
                  
                  {/* Node */}
                  <motion.div
                    className="group flex flex-col items-center min-w-[110px]"
                    initial={{ opacity: 0, y: 12, scale: 0.9 }}
                    animate={inView 
                      ? { opacity: 1, y: 0, scale: 1 } 
                      : { opacity: 0, y: 12, scale: 0.9 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: nodeDelay, 
                      ease: 'easeOut',
                    }}
                  >
                    <div className={`
                      relative z-10 w-16 h-16 rounded-full flex items-center justify-center 
                      transition-all duration-300
                      ${isLast 
                        ? 'bg-brand text-white shadow-[0_10px_30px_-6px_rgba(180,18,63,0.5)] border border-brand' 
                        : 'bg-white border-2 border-brand text-brand group-hover:shadow-lg group-hover:shadow-brand/20 group-hover:-translate-y-0.5'
                      }
                    `}>
                      <step.Icon className="w-6 h-6" strokeWidth={2} />
                    </div>
                    <div className={`
                      text-label-bold uppercase tracking-[0.15em] mt-4 font-mono text-[10px]
                      ${isLast ? 'text-brand' : 'text-text-muted'}
                    `}>
                      {step.id}
                    </div>
                    <div className="text-body-sm font-semibold text-text-strong text-center mt-2 max-w-[110px] leading-tight font-headline">
                      {step.label}
                    </div>
                  </motion.div>
                  
                  {/* Chevron between nodes — desktop only, not after last node */}
                  {!isLast && (
                    <motion.div
                      className="hidden lg:flex items-center justify-center pt-6 -ml-1 lg:-mx-1"
                      initial={{ opacity: 0, x: -5 }}
                      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -5 }}
                      transition={{ duration: 0.4, delay: nodeDelay + 0.15 }}
                    >
                      <div className="flex items-center">
                        <ChevronRight 
                          className="w-5 h-5 text-brand -mr-3" 
                          strokeWidth={3}
                        />
                        <ChevronRight 
                          className="w-5 h-5 text-brand/50" 
                          strokeWidth={3}
                        />
                      </div>
                    </motion.div>
                  )}
                  
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}
