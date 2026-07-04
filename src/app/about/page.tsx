'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Toaster } from 'sonner';
import { 
  ArrowRight, 
  CheckCircle2, 
  Award, 
  BookOpen, 
  Milestone, 
  Lightbulb, 
  Quote 
} from 'lucide-react';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactModal from '@/components/ContactModal';

// ━━━━━━━━━━━━━━━━━━━━━━ CONSTANTS & METADATA ━━━━━━━━━━━━━━━━━━━━━━

const WHAT_WE_DO_LIST = [
  { name: 'Industrial Digital Engineering', desc: 'Connecting OT assets with IT enterprise systems for seamless data pipelines.' },
  { name: 'Industrial Automation & Control', desc: 'Designing robust PLC, SCADA, DCS architectures for complex plants.' },
  { name: 'OT/IT Integration', desc: 'Bridging shop-floor data with cloud databases and enterprise ERP networks.' },
  { name: 'Industrial AI & Analytics', desc: 'Deploying machine learning models for predictive maintenance and optimization.' },
  { name: 'Cloud & Infrastructure', desc: 'Migrating industrial telemetry to secure Microsoft Azure & AWS clusters.' },
  { name: 'Cybersecurity & Compliance', desc: 'Securing critical infrastructure using IEC 62443 and NIST standards.' },
  { name: 'Managed Services & Support', desc: '24/7 remote monitoring, incident response, and continuous optimization.' }
];

const INDUSTRIES_MAPPING = [
  { name: 'Manufacturing', desc: 'Smart factory networks, ISA-95 systems, and overall equipment effectiveness.', file: 'smart_factory_visual.png' },
  { name: 'Power & Utilities', desc: 'Substation automation, grid monitoring, and renewable energy telemetry.', file: 'power_utility.png' },
  { name: 'Water & Wastewater', desc: 'Scada networks, chemical treatment, and distribution telemetry.', file: 'water_wastewater.png' },
  { name: 'Food & Beverages', desc: 'Batch control, recipe management, and manufacturing traceability.', file: 'food_beverages.png' },
  { name: 'Life Sciences', desc: 'GAMP 5 validation, batch records, and pharmaceutical compliance.', file: 'life_sciences.png' },
  { name: 'Automotive', desc: 'Robotic assembly, shop floor analytics, and parts traceability.', file: 'automotive.png' },
  { name: 'Mining & Metals', desc: 'Asset health monitoring, dispatch control, and material handling systems.', file: 'mining_metals.png' },
  { name: 'EPC & Construction', desc: 'Digital twin setups, commissioning, and system loop validation.', file: 'epc_construction.png' },
  { name: 'Infrastructure', desc: 'Building automation, telemetry command loops, and HVAC controls.' },
  { name: 'Chemicals', desc: 'Process hazard analysis, reactor control, and safety instrumented systems.' },
  { name: 'Oil & Gas', desc: 'Pipeline telemetry, wellhead automation, and terminal control systems.' },
  { name: 'Pulp & Paper', desc: 'Quality control systems, waste minimization, and DCS optimization.' }
];

export default function AboutPage() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-800 antialiased font-sans selection:bg-[#D4145A] selection:text-white">
      {/* Navigation */}
      <Header onContactClick={() => setIsContactOpen(true)} />

      <main className="relative z-10">

        {/* ━━━━━━━━━━━━━━━━━━━━━━ SECTION 1: HERO ━━━━━━━━━━━━━━━━━━━━━━ */}
        {/* Simple, bright, human-designed editorial hero banner with clear images */}
        <section className="bg-[#F8FAFC] py-20 lg:py-28 flex items-center relative overflow-hidden border-b border-slate-100">
          <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-24 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left side content */}
            <div className="lg:col-span-6 text-left space-y-6">
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#D4145A] font-mono">
                Global Industrial Innovation
              </span>
              <motion.h1 
                className="text-4xl sm:text-5xl lg:text-[52px] font-extrabold text-[#0F172A] tracking-tight leading-[1.1]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Engineering the Future of Connected Industries
              </motion.h1>
              <motion.p 
                className="text-slate-500 font-medium text-base sm:text-lg leading-relaxed max-w-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
              >
                DHGsoft is a global Industrial Digital Transformation company helping organizations connect operations, data, applications, and people to create intelligent, efficient, and sustainable enterprises.
              </motion.p>
              
              <motion.div 
                className="flex flex-wrap items-center gap-4 pt-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <button
                  className="group inline-flex items-center gap-2.5 font-bold text-white rounded-xl px-7 py-3.5 transition-all duration-300 cursor-pointer border-0 shadow-md hover:shadow-lg active:scale-95"
                  style={{
                    fontSize: 13,
                    background: 'linear-gradient(90deg, #D4145A 0%, #F15A24 100%)',
                  }}
                  onClick={() => {
                    const el = document.getElementById('company-overview');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <span className="tracking-wide">Explore Our Story</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
                <button
                  className="inline-flex items-center gap-2.5 font-bold text-slate-800 rounded-xl px-7 py-3.5 transition-all duration-300 cursor-pointer border border-slate-200 bg-white hover:bg-slate-50 shadow-xs"
                  style={{ fontSize: 13 }}
                  onClick={() => setIsContactOpen(true)}
                >
                  <span className="tracking-wide">Contact Our Experts</span>
                </button>
              </motion.div>
            </div>

            {/* Right side cinematic portrait image block (No dark overlays, clear framed look) */}
            <div className="lg:col-span-6 relative group">
              <div className="absolute -top-4 -left-4 -bottom-4 -right-4 border border-slate-200/60 rounded-[24px] pointer-events-none z-0 hidden lg:block" />
              <div className="relative w-full aspect-[4/3] rounded-[20px] overflow-hidden border border-slate-200 p-1 bg-white shadow-[0_15px_35px_rgba(15,23,42,0.05)] z-10">
                <div className="relative w-full h-full rounded-[16px] overflow-hidden">
                  <Image
                    src="/about_hero.png"
                    alt="Industrial systems operations command"
                    fill
                    priority
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-102"
                  />
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ━━━━━━━━━━━━━━━━━━━━━━ SECTION 2: COMPANY OVERVIEW ━━━━━━━━━━━━━━━━━━━━━━ */}
        {/* Editorial Filmstrip spread layout with subtle engineering contour/grid background */}
        <section id="company-overview" className="bg-white py-16 relative border-b border-slate-100 overflow-hidden flex flex-col justify-start">
          
          {/* Subtle Background System (Contour Top-Left, Grid Bottom-Right at 2% opacity) */}
          <div className="absolute top-0 left-0 w-[450px] h-[450px] opacity-[0.02] pointer-events-none z-0 select-none">
            <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
              <path d="M-10,25 C15,15 35,55 75,35 C105,25 115,65 145,45" stroke="url(#brand-grad-bg)" strokeWidth="0.4" />
              <path d="M-10,45 C25,25 45,75 85,55 C115,35 125,85 155,65" stroke="url(#brand-grad-bg)" strokeWidth="0.4" />
              <path d="M-10,65 C35,35 55,95 95,75 C125,45 135,105 165,85" stroke="url(#brand-grad-bg)" strokeWidth="0.4" />
              <defs>
                <linearGradient id="brand-grad-bg" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#D4145A" />
                  <stop offset="100%" stopColor="#F15A24" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="absolute bottom-0 right-0 w-[450px] h-[450px] opacity-[0.02] pointer-events-none z-0 select-none">
            <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
              <path d="M 0 10 L 100 10 M 0 20 L 100 20 M 0 30 L 100 30 M 0 40 L 100 40 M 0 50 L 100 50 M 0 60 L 100 60 M 0 70 L 100 70 M 0 80 L 100 80 M 0 90 L 100 90" stroke="url(#brand-grad-bg)" strokeWidth="0.25" />
              <path d="M 10 0 L 10 100 M 20 0 L 20 100 M 30 0 L 30 100 M 40 0 L 40 100 M 50 0 L 50 100 M 60 0 L 60 100 M 70 0 L 70 100 M 80 0 L 80 100 M 90 0 L 90 100" stroke="url(#brand-grad-bg)" strokeWidth="0.25" />
            </svg>
          </div>

          <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-[120px] w-full relative z-10 flex flex-col justify-start">
            
            {/* 1. Editorial Label & 2. Main Heading (with Vertical Gradient accent line) */}
            <div className="flex gap-6 items-start text-left mb-6">
              <div className="w-[2px] h-14 bg-gradient-to-b from-[#D4145A] to-[#F15A24] rounded-full shrink-0" />
              <div className="space-y-3">
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#D4145A] font-mono block">
                  ABOUT DHGSOFT
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-extrabold text-[#0F172A] tracking-tight leading-[1.15] max-w-[520px]">
                  Engineering Intelligence. Industrial Excellence.
                </h2>
              </div>
            </div>

            {/* 3. Short Intro (max 4 lines) */}
            <div className="text-left mb-8">
              <p className="text-slate-500 font-medium text-sm sm:text-base leading-[1.8] max-w-[620px]">
                Founded with a vision to accelerate industrial innovation, DHGsoft delivers end-to-end digital engineering, industrial automation, OT/IT integration, AI, cloud, cybersecurity, and operational intelligence solutions.
              </p>
            </div>

            {/* 4. Visual Story (3-image filmstrip) */}
            <div className="grid grid-cols-12 gap-6 w-full h-[150px] mb-8">
              {/* Image One: Landscape */}
              <div className="col-span-5 relative overflow-hidden rounded-[24px] border border-slate-200/80 p-0.5 bg-white shadow-xs group">
                <div className="relative w-full h-full rounded-[22px] overflow-hidden">
                  <Image
                    src="/smart_factory_visual.png"
                    alt="Modern Industrial Manufacturing"
                    fill
                    className="object-cover transition-transform duration-600 ease-out group-hover:scale-[1.02]"
                  />
                </div>
              </div>
              {/* Image Two: Portrait */}
              <div className="col-span-2 relative overflow-hidden rounded-[24px] border border-slate-200/80 p-0.5 bg-white shadow-xs group">
                <div className="relative w-full h-full rounded-[22px] overflow-hidden">
                  <Image
                    src="/about_collaboration.png"
                    alt="Engineering Team Discussion"
                    fill
                    className="object-cover transition-transform duration-600 ease-out group-hover:scale-[1.02]"
                  />
                </div>
              </div>
              {/* Image Three: Landscape */}
              <div className="col-span-5 relative overflow-hidden rounded-[24px] border border-slate-200/80 p-0.5 bg-white shadow-xs group">
                <div className="relative w-full h-full rounded-[22px] overflow-hidden">
                  <Image
                    src="/about_hero.png"
                    alt="Industrial Control Room Operations"
                    fill
                    className="object-cover transition-transform duration-600 ease-out group-hover:scale-[1.02]"
                  />
                </div>
              </div>
            </div>

            {/* 5. Editorial Story Blocks: Horizontal 3-column layout with vertical border dividers */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full text-left">
              {/* Block One */}
              <div className="space-y-3 pr-6 border-r border-[#E8EDF2]/40">
                <h4 className="text-[#0F172A] font-extrabold text-sm leading-snug">
                  Connecting plant-floor assets with enterprise systems and cloud.
                </h4>
                <p className="text-[#64748B] text-[13px] leading-[1.7] font-medium">
                  We help manufacturers, utilities, and process industries <span className="font-bold text-slate-800">modernize operations</span> by establishing secure, real-time connectivity between operational environments and enterprise cloud networks.
                </p>
              </div>
              
              {/* Block Two */}
              <div className="space-y-3 pr-6 md:px-6 md:border-r border-[#E8EDF2]/40">
                <h4 className="text-[#0F172A] font-extrabold text-sm leading-snug">
                  Comprehensive transformation expertise across the digital lifecycle.
                </h4>
                <p className="text-[#64748B] text-[13px] leading-[1.7] font-medium">
                  Our expertise covers the entire lifecycle—from <span className="font-bold text-slate-800">consulting and solution architecture</span> to implementation, systems commissioning, managed services, and continuous optimization.
                </p>
              </div>

              {/* Block Three */}
              <div className="space-y-3 md:pl-6">
                <h4 className="text-[#0F172A] font-extrabold text-sm leading-snug">
                  AI-driven operational intelligence and digital twins validation.
                </h4>
                <p className="text-[#64748B] text-[13px] leading-[1.7] font-medium">
                  Whether enabling a smart factory, implementing industrial data platforms, or modernizing software architectures, DHGsoft delivers <span className="font-bold text-slate-800">measurable business outcomes</span> that improve safety, productivity, and sustainability.
                </p>
              </div>
            </div>

            {/* 6. Signature Statement: Bottom-left with thin vertical gradient line */}
            <div className="flex gap-4 items-stretch text-left max-w-[480px] mt-8 z-10">
              <div className="w-[2px] bg-gradient-to-b from-[#D4145A] to-[#F15A24] shrink-0" />
              <p className="text-lg sm:text-xl font-extrabold text-[#0F172A] tracking-tight leading-tight uppercase font-sans">
                Connecting Intelligence<br />
                to Transform Industry.
              </p>
            </div>

          </div>
        </section>

        {/* ━━━━━━━━━━━━━━━━━━━━━━ SECTION 3: WHAT WE DO ━━━━━━━━━━━━━━━━━━━━━━ */}
        {/* Asymmetric layout: Tall portrait block (no text overlay, fully clear photo) next to capabilities list */}
        <section className="bg-white py-24 md:py-32 border-b border-slate-100">
          <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-24">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
              
              {/* Left Column: Portrait photograph (No overlay text, fully clear) */}
              <div className="lg:col-span-5 relative group">
                <div className="absolute -bottom-6 -right-6 w-full h-full border border-slate-100 rounded-[28px] pointer-events-none z-0" />
                <div className="relative w-full aspect-[3/4] rounded-[24px] overflow-hidden border border-slate-200 p-1 bg-white shadow-[0_20px_50px_rgba(15,23,42,0.05)] z-10">
                  <div className="relative w-full h-full rounded-[20px] overflow-hidden">
                    <Image
                      src="/about_engineering.png"
                      alt="DHGsoft digital telemetry systems command"
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-102"
                    />
                  </div>
                </div>
              </div>

              {/* Right Column: Capabilities Stack & Highlighted Quote */}
              <div className="lg:col-span-7 text-left space-y-10 lg:pl-6">
                <div className="space-y-4">
                  <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#D4145A] font-mono block">
                    Services Capabilities
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight leading-tight">
                    What We Do
                  </h2>
                  <div className="flex gap-3 items-start border-l-2 border-[#F15A24] pl-4 py-1">
                    <Quote className="w-5 h-5 fill-current text-[#F15A24] opacity-80 shrink-0 mt-0.5" />
                    <p className="text-sm sm:text-base font-bold text-slate-700 leading-relaxed font-sans">
                      We design, build, integrate, and manage intelligent industrial ecosystems.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                  {WHAT_WE_DO_LIST.map((item, idx) => (
                    <div key={idx} className="flex gap-4 border-t border-slate-100 pt-4 text-left group hover:border-[#D4145A] transition-all duration-300">
                      <span className="text-[10px] font-bold text-[#D4145A] font-mono mt-0.5">0{idx + 1}</span>
                      <div>
                        <h4 className="font-extrabold text-[#0F172A] text-sm sm:text-[15px] group-hover:text-[#D4145A] transition-colors">{item.name}</h4>
                        <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* ━━━━━━━━━━━━━━━━━━━━━━ SECTION 4: INDUSTRIES ━━━━━━━━━━━━━━━━━━━━━━ */}
        {/* Clean Editorial Card Grid: Clear photos on top (100% opacity), text placed below */}
        <section className="bg-[#F8FAFC] py-24 md:py-32 border-b border-slate-200/60">
          <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-24">
            
            {/* Header */}
            <div className="text-left mb-16 max-w-xl">
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#D4145A] font-mono mb-3 block">
                Target Sectors
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight leading-tight mb-4">
                Industries We Serve
              </h2>
              <p className="text-slate-500 text-sm leading-relaxed font-medium">
                DHGsoft supports organizations across diverse industries including the following major industrial vectors:
              </p>
            </div>

            {/* Clear Card Grid (no overlays, 100% image clarity, text below images) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {INDUSTRIES_MAPPING.slice(0, 8).map((ind, idx) => (
                <div 
                  key={idx} 
                  className="bg-white rounded-[20px] overflow-hidden border border-slate-200 p-1.5 shadow-[0_5px_15px_rgba(15,23,42,0.02)] group hover:border-[#D4145A] transition-all duration-350 flex flex-col"
                >
                  {/* Image container: full color, bright, clear */}
                  <div className="relative w-full aspect-[4/3] rounded-[14px] overflow-hidden">
                    <Image
                      src={`/${ind.file}`}
                      alt={ind.name}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-102"
                    />
                  </div>
                  
                  {/* Text details below: clean, readable */}
                  <div className="p-4 text-left flex-grow flex flex-col justify-between">
                    <div>
                      <span className="text-[8px] font-bold uppercase tracking-widest text-[#F15A24] font-mono block mb-1">Sector 0{idx + 1}</span>
                      <h3 className="text-[#0F172A] font-extrabold text-sm sm:text-base leading-tight mb-1">{ind.name}</h3>
                      <p className="text-[11px] text-slate-500 leading-relaxed font-medium line-clamp-2">{ind.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Minor sectors inline text */}
            <div className="mt-12 pt-8 border-t border-slate-200/85 flex flex-wrap gap-x-8 gap-y-3 justify-start text-left">
              {INDUSTRIES_MAPPING.slice(8).map((ind, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#D4145A]" />
                  <span className="text-[10px] font-bold text-slate-700 uppercase tracking-widest font-mono">{ind.name}</span>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ━━━━━━━━━━━━━━━━━━━━━━ SECTION 5: VISION & MISSION ━━━━━━━━━━━━━━━━━━━━━━ */}
        {/* Dynamic Corporate Mandate spread: Left text panels | Right clear wind farm photo */}
        <section className="bg-white py-24 md:py-32 border-b border-slate-100">
          <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
              
              {/* Left Column: Purpose & Mission text */}
              <div className="lg:col-span-7 text-left space-y-10">
                <div className="border-l-2 border-[#D4145A] pl-6 space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#D4145A] font-mono block">
                    Our Purpose
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight leading-tight">
                    Connecting Intelligence to Transform Industry.
                  </h3>
                </div>

                {/* Vision block */}
                <div className="space-y-2 border-t border-slate-100 pt-6">
                  <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-400 font-mono block">Our Vision</span>
                  <h4 className="text-xl sm:text-2xl font-extrabold text-[#0F172A] leading-snug">
                    To become a globally trusted leader in Industrial Digital Transformation by enabling connected, intelligent, and sustainable industries.
                  </h4>
                </div>

                {/* Mission block */}
                <div className="space-y-2 border-t border-slate-100 pt-6">
                  <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-400 font-mono block">Our Mission</span>
                  <p className="text-slate-500 font-medium text-sm sm:text-base leading-relaxed">
                    To empower industries with innovative digital engineering solutions that connect operational technology, enterprise systems, and data intelligence to improve operational excellence and business performance.
                  </p>
                </div>
              </div>

              {/* Right Column: Cinematic values wind farm visual (Fully clear) */}
              <div className="lg:col-span-5 relative group">
                <div className="absolute -top-4 -left-4 -bottom-4 -right-4 border border-slate-200/60 rounded-[24px] pointer-events-none z-0 hidden lg:block" />
                <div className="relative w-full aspect-[4/5] rounded-[20px] overflow-hidden border border-slate-200 p-1 bg-white shadow-[0_15px_35px_rgba(15,23,42,0.05)] z-10">
                  <div className="relative w-full h-full rounded-[16px] overflow-hidden">
                    <Image
                      src="/about_values.png"
                      alt="Corporate Vision Wind Turbines at sunset"
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-102"
                    />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ━━━━━━━━━━━━━━━━━━━━━━ SECTION 6: CORE VALUES ━━━━━━━━━━━━━━━━━━━━━━ */}
        {/* Simple layout: Core values text block next to another portrait visual */}
        <section className="bg-[#F8FAFC] py-24 md:py-32 border-b border-slate-200/60">
          <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-stretch">
              
              {/* Left Column: Values list */}
              <div className="lg:col-span-7 text-left space-y-10 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#D4145A] font-mono mb-3 block">
                    Core Philosophy
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight leading-tight">
                    Our Core Values
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="space-y-1.5">
                    <h4 className="font-extrabold text-slate-800 text-sm flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D4145A]" /> Innovation
                    </h4>
                    <p className="text-xs text-slate-500 leading-relaxed font-medium">Continuously embracing emerging technologies to solve complex industrial challenges.</p>
                  </div>
                  <div className="space-y-1.5">
                    <h4 className="font-extrabold text-slate-800 text-sm flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D4145A]" /> Customer Success
                    </h4>
                    <p className="text-xs text-slate-500 leading-relaxed font-medium">Our customers&apos; success defines our success.</p>
                  </div>
                  <div className="space-y-1.5">
                    <h4 className="font-extrabold text-slate-800 text-sm flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D4145A]" /> Integrity
                    </h4>
                    <p className="text-xs text-slate-500 leading-relaxed font-medium">Building trusted relationships through transparency and ethical business practices.</p>
                  </div>
                  <div className="space-y-1.5">
                    <h4 className="font-extrabold text-slate-800 text-sm flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D4145A]" /> Excellence
                    </h4>
                    <p className="text-xs text-slate-500 leading-relaxed font-medium">Delivering high-quality engineering and technology solutions with precision.</p>
                  </div>
                  <div className="space-y-1.5">
                    <h4 className="font-extrabold text-slate-800 text-sm flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D4145A]" /> Collaboration
                    </h4>
                    <p className="text-xs text-slate-500 leading-relaxed font-medium">Working together with customers, partners, and technology leaders to create lasting value.</p>
                  </div>
                  <div className="space-y-1.5">
                    <h4 className="font-extrabold text-slate-800 text-sm flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D4145A]" /> Sustainability
                    </h4>
                    <p className="text-xs text-slate-500 leading-relaxed font-medium">Helping industries operate more efficiently while supporting environmental responsibility.</p>
                  </div>
                </div>
              </div>

              {/* Right Column: Values Image (Fully clear wind turbines visual) */}
              <div className="lg:col-span-5 relative group">
                <div className="absolute -bottom-6 -right-6 w-full h-full border border-slate-200 rounded-[28px] pointer-events-none z-0" />
                <div className="relative w-full aspect-[3/4] rounded-[24px] overflow-hidden border border-slate-200 p-1 bg-white shadow-[0_20px_50px_rgba(15,23,42,0.05)] z-10">
                  <div className="relative w-full h-full rounded-[20px] overflow-hidden">
                    <Image
                      src="/about_values.png"
                      alt="DHGsoft core values wind farm"
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-102"
                    />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ━━━━━━━━━━━━━━━━━━━━━━ SECTION 7: LEADERSHIP ━━━━━━━━━━━━━━━━━━━━━━ */}
        {/* GQ/Forbes magazine style profile block with clear CEO isolated photo */}
        <section id="leadership" className="bg-white py-24 md:py-32 border-b border-slate-100">
          <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
              
              {/* Left Column: Portrait */}
              <div className="lg:col-span-5 flex items-center justify-center relative pt-6 pb-6">
                <div className="absolute top-0 right-4 w-[85%] h-[90%] rounded-[24px] border border-slate-200/60 z-0 pointer-events-none transform translate-x-3 -translate-y-3" />
                <div className="absolute bottom-4 left-4 w-[85%] h-[90%] rounded-[24px] border border-slate-200/60 z-0 pointer-events-none transform -translate-x-3 translate-y-3" />

                {/* Clear CEO portrait frame (no dark blur backdrop overlays, fully clear) */}
                <div className="relative w-full max-w-[370px] aspect-[3/4] rounded-[24px] overflow-hidden border border-slate-200 shadow-[0_20px_50px_rgba(15,23,42,0.05)] bg-[#F8FAFC] z-10 p-1">
                  <div className="relative w-full h-full flex items-end justify-center z-10">
                    <Image
                      src="/CEO_nobg_clean.png"
                      alt="Hitesh Patel — CEO, DHGsoft"
                      fill
                      className="object-contain object-bottom select-none filter drop-shadow-[0_8px_16px_rgba(15,23,42,0.08)]"
                      priority
                    />
                  </div>
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white border border-slate-200 z-20 flex items-center gap-1.5 pointer-events-none shadow-xs">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#D4145A]" />
                    <span className="text-[8px] font-bold text-slate-800 uppercase tracking-widest font-sans">
                      Executive Profile
                    </span>
                  </div>
                </div>

                <div className="absolute bottom-[-10px] left-[-10px] max-w-[270px] bg-slate-900 border border-slate-800 rounded-[18px] p-5 shadow-[0_15px_35px_rgba(15,23,42,0.12)] z-30 flex flex-col items-start text-left">
                  <Quote className="w-5 h-5 fill-current text-[#F15A24] opacity-90 mb-2" />
                  <p className="text-[11px] leading-relaxed text-slate-300 font-medium font-sans">
                    Lead with innovation.<br />
                    Deliver with excellence.<br />
                    Grow through collaboration.<br />
                    <span className="font-bold text-[#F15A24] block mt-2 text-[9px] uppercase tracking-wider">Hitesh Patel // CEO</span>
                  </p>
                </div>
              </div>

              {/* Right Column: Narrative details */}
              <div className="lg:col-span-7 text-left space-y-8 lg:pl-6">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#D4145A] font-mono mb-3 block">
                    Leadership
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight leading-tight">
                    Executive Leadership
                  </h2>
                </div>

                <div className="space-y-4 text-slate-500 font-medium text-sm sm:text-base leading-relaxed">
                  <p className="font-bold text-slate-850 text-base sm:text-lg">
                    Hitesh Patel is the CEO of DHGsoft, leading the company’s strategic vision and operations.
                  </p>
                  <p>
                    With over a decade of leadership in Industrial Automation and Digital Engineering, he is passionate about driving digital innovation, developing engineering talent, building long-term alliances, and shaping connected industries.
                  </p>
                  <p className="text-xs text-slate-400">
                    Prior to founding DHGsoft, Hitesh held leadership roles at global technology companies, bringing deep industrial automation systems engineering and enterprise architecture experience.
                  </p>
                </div>

                <div className="pt-4 flex gap-4">
                  <a 
                    href="https://linkedin.com/in/hitesh-patel-967087a0" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-2 font-bold text-xs uppercase tracking-wider text-slate-700 hover:text-[#D4145A] border-b border-slate-200 hover:border-[#D4145A] pb-1 transition-all duration-350"
                  >
                    <span>Connect on LinkedIn</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ━━━━━━━━━━━━━━━━━━━━━━ SECTION 8: WHY DHGSOFT ━━━━━━━━━━━━━━━━━━━━━━ */}
        {/* Simple layout: Four columns split with thin vertical borders */}
        <section id="why-us" className="bg-[#F8FAFC] py-24 md:py-32 border-b border-slate-200/60">
          <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-24">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start mb-12">
              <div className="lg:col-span-5 text-left">
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#D4145A] font-mono mb-3 block">
                  Why DHGsoft
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight leading-tight">
                  Connecting Operations, Data & People
                </h2>
              </div>
              <div className="lg:col-span-7 text-left">
                <p className="text-slate-600 font-medium text-base sm:text-lg leading-relaxed">
                  We believe digital transformation is about connecting every aspect of industrial operations—from machines and people to enterprise applications and intelligent analytics.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 border-t border-slate-200 pt-10">
              <div className="text-left pr-4 md:border-r md:border-slate-200 last:border-0">
                <span className="text-[9px] font-bold text-slate-400 font-mono block mb-3">01 // INTEGRATION</span>
                <h3 className="font-extrabold text-slate-800 text-sm mb-2">End-to-End Digital Partner</h3>
                <ul className="text-xs text-slate-500 space-y-1.5 mt-3 font-medium">
                  <li>Consulting</li>
                  <li>Engineering</li>
                  <li>Implementation</li>
                  <li>Managed Services</li>
                  <li>Continuous Improvement</li>
                </ul>
              </div>

              <div className="text-left pr-4 md:border-r md:border-slate-200 last:border-0">
                <span className="text-[9px] font-bold text-slate-400 font-mono block mb-3">02 // VERTICALS</span>
                <h3 className="font-extrabold text-slate-800 text-sm mb-2">Industry Expertise</h3>
                <p className="text-xs text-slate-500 leading-relaxed mt-3 font-medium">
                  Deep experience across manufacturing, utilities, infrastructure, life sciences, and process industries.
                </p>
              </div>

              <div className="text-left pr-4 md:border-r md:border-slate-200 last:border-0">
                <span className="text-[9px] font-bold text-slate-400 font-mono block mb-3">03 // ARCHITECTURES</span>
                <h3 className="font-extrabold text-slate-800 text-sm mb-2">Technology Excellence</h3>
                <p className="text-xs text-slate-500 leading-relaxed mt-3 font-medium">
                  Leveraging leading industrial and enterprise technologies to build scalable digital solutions.
                </p>
              </div>

              <div className="text-left">
                <span className="text-[9px] font-bold text-slate-400 font-mono block mb-3">04 // RELIABILITY</span>
                <h3 className="font-extrabold text-slate-800 text-sm mb-2">Global Delivery</h3>
                <p className="text-xs text-slate-500 leading-relaxed mt-3 font-medium">
                  Flexible onsite, offshore, and hybrid delivery models supported by experienced engineering teams.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* ━━━━━━━━━━━━━━━━━━━━━━ SECTION 9: PARTNER ECOSYSTEM ━━━━━━━━━━━━━━━━━━━━━━ */}
        {/* White background: Collaborations info next to partner logos grid */}
        <section id="partners" className="bg-white py-24 md:py-32 border-b border-slate-100">
          <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
              
              {/* Left Column: Details */}
              <div className="lg:col-span-5 text-left">
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#D4145A] font-mono mb-3 block">
                  Collaborations
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight leading-tight mb-6">
                  Partner Ecosystem
                </h2>
                <p className="text-slate-700 font-bold leading-relaxed mb-4">
                  Innovation happens through collaboration.
                </p>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  DHGsoft works closely with customers, technology providers, universities, research institutions, system integrators, and industry experts to deliver future-ready solutions.
                </p>

                <div className="space-y-6 border-t border-slate-100 pt-6">
                  <div className="space-y-1">
                    <h4 className="font-extrabold text-slate-800 text-xs uppercase tracking-wider font-mono">Technology Partners</h4>
                    <p className="text-xs text-slate-500 leading-relaxed font-medium">
                      Industrial Automation Platforms, Industrial Data Platforms, Enterprise Software, Cloud Providers, Cybersecurity Technologies, Artificial Intelligence Platforms
                    </p>
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-extrabold text-slate-800 text-xs uppercase tracking-wider font-mono">Academic Partnerships</h4>
                    <p className="text-xs text-slate-500 leading-relaxed font-medium">
                      Supporting research, innovation, internships, and workforce development through collaboration with universities and engineering institutions.
                    </p>
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-extrabold text-slate-800 text-xs uppercase tracking-wider font-mono">Strategic Alliances</h4>
                    <p className="text-xs text-slate-500 leading-relaxed font-medium">
                      Building long-term partnerships to accelerate innovation and deliver greater customer value.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: Visual and Partner Logos (Clear photo on top) */}
              <div className="lg:col-span-7 flex flex-col gap-8">
                <div className="relative w-full h-[280px] rounded-[24px] overflow-hidden border border-slate-200 p-1 bg-white shadow-[0_15px_35px_rgba(15,23,42,0.04)] group">
                  <div className="relative w-full h-full rounded-[20px] overflow-hidden">
                    <Image
                      src="/about_collaboration.png"
                      alt="DHGsoft Technical Collaboration Session"
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-102"
                    />
                  </div>
                </div>
                
                {/* Logo grid */}
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-6 items-center border-t border-slate-100 pt-6">
                  {['aws', 'microsoft-azure', 'schneider-electric', 'aveva', 'phoenix-contact', 'databricks'].map((logo, idx) => (
                    <div key={idx} className="relative h-7 flex items-center justify-center filter grayscale opacity-45 hover:grayscale-0 hover:opacity-100 transition-all duration-350">
                      <Image
                        src={`/logos/${logo}.svg`}
                        alt={`${logo} logo`}
                        fill
                        className="object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ━━━━━━━━━━━━━━━━━━━━━━ SECTION 10: CORPORATE RESPONSIBILITY ━━━━━━━━━━━━━━━━━━━━━━ */}
        {/* Environmental sustainability next to detail blocks (Clear visual frame) */}
        <section id="responsibility" className="bg-[#F8FAFC] py-24 md:py-32 border-b border-slate-200/60">
          <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
              
              {/* Left Column: Photo */}
              <div className="lg:col-span-5 text-left flex flex-col gap-6">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#D4145A] font-mono mb-3 block">
                    Commitment
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight leading-tight">
                    Corporate Responsibility
                  </h2>
                </div>

                <div className="relative w-full aspect-[4/3] rounded-[24px] overflow-hidden border border-slate-200 p-1 bg-white shadow-[0_15px_35px_rgba(15,23,42,0.04)] group">
                  <div className="relative w-full h-full rounded-[20px] overflow-hidden">
                    <Image
                      src="/about_values.png"
                      alt="Corporate sustainability wind turbines visual"
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-102"
                    />
                  </div>
                </div>
              </div>

              {/* Right Column: ESG items */}
              <div className="lg:col-span-7 space-y-6 lg:pl-6 text-left">
                <div className="border-b border-slate-200/60 pb-5">
                  <h3 className="font-extrabold text-slate-800 text-sm uppercase tracking-wider mb-2 font-mono">Sustainability</h3>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-medium">
                    Helping organizations improve operational efficiency while reducing energy consumption and environmental impact.
                  </p>
                </div>

                <div className="border-b border-slate-200/60 pb-5">
                  <h3 className="font-extrabold text-slate-800 text-sm uppercase tracking-wider mb-2 font-mono">ESG</h3>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-medium">
                    Supporting Environmental, Social, and Governance initiatives through digital technologies and intelligent operations.
                  </p>
                </div>

                <div className="border-b border-slate-200/60 pb-5">
                  <h3 className="font-extrabold text-slate-800 text-sm uppercase tracking-wider mb-2 font-mono">Ethics & Compliance</h3>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-medium">
                    Integrity and ethical business practices guide every customer engagement.
                  </p>
                </div>

                <div className="border-b border-slate-200/60 pb-5">
                  <h3 className="font-extrabold text-slate-800 text-sm uppercase tracking-wider mb-2 font-mono">Information Security</h3>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-medium">
                    Protecting customer data through secure engineering practices and internationally accepted security principles.
                  </p>
                </div>

                <div>
                  <h3 className="font-extrabold text-slate-800 text-sm uppercase tracking-wider mb-2 font-mono">Quality</h3>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-medium">
                    Committed to delivering reliable, scalable, and high-quality engineering solutions.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ━━━━━━━━━━━━━━━━━━━━━━ SECTION 11: RECOGNITION ━━━━━━━━━━━━━━━━━━━━━━ */}
        {/* Achievements showcase: 6 grid cards with thin borders */}
        <section id="recognition" className="bg-white py-24 md:py-32 border-b border-slate-100">
          <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
              
              {/* Left Column */}
              <div className="lg:col-span-4 text-left">
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#D4145A] font-mono mb-3 block">
                  Recognition
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight leading-tight mb-6">
                  DHGsoft measures success by the value created for customers.
                </h2>
                <p className="text-slate-500 text-sm leading-relaxed">
                  This section highlights our primary focus vectors and certified standards:
                </p>
              </div>

              {/* Right Column Grid */}
              <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
                <div className="p-6 bg-slate-50 border border-slate-200/50 rounded-2xl flex gap-4 items-start shadow-xs hover:border-[#D4145A] transition-colors duration-300">
                  <div className="w-9 h-9 rounded-lg bg-rose-50 flex items-center justify-center text-[#D4145A] shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-slate-800 text-sm mb-1 font-mono">Customer Success</h4>
                    <p className="text-xs text-slate-500 leading-relaxed font-medium">Operational optimization and process efficiency validation metrics.</p>
                  </div>
                </div>

                <div className="p-6 bg-slate-50 border border-slate-200/50 rounded-2xl flex gap-4 items-start shadow-xs hover:border-[#D4145A] transition-colors duration-300">
                  <div className="w-9 h-9 rounded-lg bg-rose-50 flex items-center justify-center text-[#D4145A] shrink-0">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-slate-800 text-sm mb-1 font-mono">Awards</h4>
                    <p className="text-xs text-slate-500 leading-relaxed font-medium">Engineering awards recognizing robust digital systems architectures.</p>
                  </div>
                </div>

                <div className="p-6 bg-slate-50 border border-slate-200/50 rounded-2xl flex gap-4 items-start shadow-xs hover:border-[#D4145A] transition-colors duration-300">
                  <div className="w-9 h-9 rounded-lg bg-rose-50 flex items-center justify-center text-[#D4145A] shrink-0">
                    <Milestone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-slate-800 text-sm mb-1 font-mono">Industry Recognition</h4>
                    <p className="text-xs text-slate-500 leading-relaxed font-medium">Acknowledged as a technology leader in industrial integration telemetry.</p>
                  </div>
                </div>

                <div className="p-6 bg-slate-50 border border-slate-200/50 rounded-2xl flex gap-4 items-start shadow-xs hover:border-[#D4145A] transition-colors duration-300">
                  <div className="w-9 h-9 rounded-lg bg-rose-50 flex items-center justify-center text-[#D4145A] shrink-0">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-slate-800 text-sm mb-1 font-mono">Certifications</h4>
                    <p className="text-xs text-slate-500 leading-relaxed font-medium">Internationally recognized engineering standards and security certifications.</p>
                  </div>
                </div>

                <div className="p-6 bg-slate-50 border border-slate-200/50 rounded-2xl flex gap-4 items-start shadow-xs hover:border-[#D4145A] transition-colors duration-300">
                  <div className="w-9 h-9 rounded-lg bg-rose-50 flex items-center justify-center text-[#D4145A] shrink-0">
                    <Lightbulb className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-slate-800 text-sm mb-1 font-mono">Technology Achievements</h4>
                    <p className="text-xs text-slate-500 leading-relaxed font-medium">Proprietary namespace pipelines and customized IIoT edge models.</p>
                  </div>
                </div>

                <div className="p-6 bg-slate-50 border border-slate-200/50 rounded-2xl flex gap-4 items-start shadow-xs hover:border-[#D4145A] transition-colors duration-300">
                  <div className="w-9 h-9 rounded-lg bg-rose-50 flex items-center justify-center text-[#D4145A] shrink-0">
                    <Milestone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-slate-800 text-sm mb-1 font-mono">Project Milestones</h4>
                    <p className="text-xs text-slate-500 leading-relaxed font-medium">Successful commissioning of multi-site automation networks.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ━━━━━━━━━━━━━━━━━━━━━━ SECTION 12: GLOBAL PRESENCE ━━━━━━━━━━━━━━━━━━━━━━ */}
        {/* Sticky Delivery locations column next to global Map hub (Clear photographic map frame) */}
        <section id="global" className="bg-[#F8FAFC] py-24 md:py-32 border-b border-slate-200/60 relative">
          <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-24 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
              
              {/* Left Column */}
              <div className="lg:col-span-5 text-left lg:sticky lg:top-28">
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#D4145A] font-mono mb-3 block">
                  Global Presence
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight leading-tight mb-6">
                  DHGsoft serves customers through a flexible global delivery model.
                </h2>
                
                <div className="space-y-6 border-t border-slate-100 pt-6 text-slate-655 leading-relaxed font-sans font-medium text-sm sm:text-base">
                  <p>
                    Onsite Services, Offshore Engineering, Remote Operations, 24&times;7 Support, Global Project Delivery
                  </p>
                  <p>
                    Locations: Corporate Office, Regional Offices, Delivery Centers, Partner Network
                  </p>
                  <p className="text-slate-500 text-xs sm:text-sm font-normal pt-4 border-t border-slate-200/60">
                    Looking Ahead: DHGsoft continues investing in innovation, talent, strategic partnerships, and emerging technologies to shape the future of connected industries and intelligent enterprises.
                  </p>
                </div>
              </div>

              {/* Right Column: Global Map (fully clear) */}
              <div className="lg:col-span-7 flex flex-col gap-6 group">
                <div className="relative w-full aspect-[4/3] rounded-[24px] overflow-hidden border border-slate-200 p-1 bg-white shadow-[0_15px_35px_rgba(15,23,42,0.04)]">
                  <div className="relative w-full h-full rounded-[20px] overflow-hidden">
                    <Image
                      src="/about_global.png"
                      alt="DHGsoft global delivery command hubs connectivity"
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-102"
                    />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ━━━━━━━━━━━━━━━━━━━━━━ SECTION 13: MINIMAL CTA ━━━━━━━━━━━━━━━━━━━━━━ */}
        {/* Simple centered banner with gradient button */}
        <section className="bg-white py-20 md:py-24">
          <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-24 text-center">
            <div className="max-w-2xl mx-auto flex flex-col items-center">
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#D4145A] font-mono mb-3">
                Consultation
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight mb-8">
                Build tomorrow&apos;s industries&mdash;today.
              </h2>
              
              <button
                className="group inline-flex items-center gap-2.5 font-bold text-white rounded-xl px-8 py-3.5 transition-all duration-300 cursor-pointer border-0"
                style={{
                  fontSize: 13,
                  background: 'linear-gradient(90deg, #D4145A 0%, #F15A24 100%)',
                  backgroundSize: '200% 100%',
                  boxShadow: '0 4px 20px rgba(212, 20, 90, 0.15)',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.backgroundPosition = '100% 0%';
                  (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 8px 32px rgba(212, 20, 90, 0.35)';
                  (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.backgroundPosition = '0% 0%';
                  (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 4px 20px rgba(212, 20, 90, 0.15)';
                  (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0px)';
                }}
                onClick={() => setIsContactOpen(true)}
              >
                <span className="font-sans tracking-wide">Schedule a Consultation</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <Footer />

      {/* Sales consultation overlay */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        showToast={() => { }}
      />

      <Toaster position="top-right" richColors />
    </div>
  );
}
