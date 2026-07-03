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
  Quote, 
  Building2, 
  Globe, 
  Users, 
  BarChart3 
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
        {/* Simple, spacious, human-designed editorial hero banner */}
        <section className="bg-[#F8FAFC] py-20 lg:py-28 flex items-center relative overflow-hidden border-b border-slate-100">
          <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-24 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left side content */}
            <div className="lg:col-span-6 text-left space-y-6">
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#D4145A] font-mono">
                Global Industrial Innovation
              </span>
              <motion.h1 
                className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-[#0F172A] tracking-tight leading-[1.1]"
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

            {/* Right side cinematic portrait image block */}
            <div className="lg:col-span-6 relative group">
              <div className="absolute -top-6 -left-6 -bottom-6 -right-6 border border-slate-200/60 rounded-[28px] pointer-events-none z-0 hidden lg:block" />
              <div className="relative w-full aspect-[4/3] rounded-[24px] overflow-hidden border border-slate-200 shadow-[0_15px_40px_rgba(15,23,42,0.06)] bg-white z-10">
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
        </section>

        {/* ━━━━━━━━━━━━━━━━━━━━━━ SECTION 2: COMPANY OVERVIEW ━━━━━━━━━━━━━━━━━━━━━━ */}
        {/* Editorial spread: Flat white bg, large landscape image, side-by-side storytelling layout */}
        <section id="company-overview" className="bg-white py-24 md:py-32 relative border-b border-slate-100">
          <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-24 relative z-10 flex flex-col gap-16">
            
            {/* Centered Eyebrow & Bold Heading */}
            <div className="text-left max-w-2xl">
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#D4145A] font-mono mb-3 block">
                ABOUT DHGSOFT
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#0F172A] tracking-tight leading-[1.12]">
                Engineering Intelligence. Industrial Excellence.
              </h2>
            </div>

            {/* Cinematic Wide Photograph */}
            <div className="relative w-full aspect-[21/9] rounded-[24px] overflow-hidden border border-slate-200 shadow-[0_12px_30px_rgba(15,23,42,0.05)] bg-slate-50 group">
              <Image
                src="/smart_factory_visual.png"
                alt="DHGsoft Smart Manufacturing Operations"
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-102"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/15 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Asymmetrical Text Spread */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
              
              {/* Bold Statement (Left) */}
              <div className="lg:col-span-5 text-left border-l-2 border-[#D4145A] pl-8">
                <p className="text-slate-800 font-bold text-lg sm:text-xl leading-relaxed">
                  Founded with a vision to accelerate industrial innovation, DHGsoft delivers end-to-end digital engineering, industrial automation, OT/IT integration, AI, cloud, cybersecurity, and operational intelligence solutions.
                </p>
              </div>

              {/* Two reading columns (Right) */}
              <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8 text-left text-slate-500 font-medium text-sm sm:text-base leading-relaxed">
                <p>
                  We help manufacturers, utilities, infrastructure providers, and process industries modernize operations by connecting plant-floor assets with enterprise systems and cloud technologies.
                </p>
                <p>
                  Our expertise spans the complete digital transformation lifecycle—from consulting and solution architecture to implementation, managed services, and continuous optimization.
                </p>
              </div>

            </div>

            {/* Centered closing statement quote block */}
            <div className="w-full text-left pt-10 border-t border-slate-100 mt-4">
              <p className="text-slate-500 text-xs sm:text-sm font-normal max-w-4xl italic leading-relaxed">
                &ldquo;Whether enabling a smart factory, implementing industrial data platforms, modernizing enterprise applications, or deploying AI-driven operational intelligence, DHGsoft delivers measurable business outcomes that improve productivity, reliability, safety, and sustainability.&rdquo;
              </p>
            </div>

          </div>
        </section>

        {/* ━━━━━━━━━━━━━━━━━━━━━━ SECTION 3: WHAT WE DO ━━━━━━━━━━━━━━━━━━━━━━ */}
        {/* Asymmetric layout: Tall portrait block next to capabilities list */}
        <section className="bg-white py-24 md:py-32 border-b border-slate-100">
          <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-24">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
              
              {/* Left Column: Portrait photograph */}
              <div className="lg:col-span-5 relative group">
                <div className="absolute -bottom-6 -right-6 w-full h-full border border-slate-100 rounded-[28px] pointer-events-none z-0" />
                <div className="relative w-full aspect-[3/4] rounded-[24px] overflow-hidden shadow-[0_20px_50px_rgba(15,23,42,0.06)] bg-slate-50 z-10">
                  <Image
                    src="/about_engineering.png"
                    alt="DHGsoft digital telemetry systems command"
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-102"
                  />
                  <div className="absolute inset-0 bg-slate-950/25 z-20" />
                  <div className="absolute inset-0 z-30 flex flex-col justify-end p-8 text-left text-white">
                    <Quote className="w-8 h-8 fill-current text-[#F15A24] opacity-90 mb-4" />
                    <p className="text-base sm:text-lg font-bold leading-relaxed max-w-xs font-sans">
                      We design, build, integrate, and manage intelligent industrial ecosystems.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: Capabilities Stack */}
              <div className="lg:col-span-7 text-left space-y-10 lg:pl-6">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#D4145A] font-mono mb-3 block">
                    Services Capabilities
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight leading-tight">
                    What We Do
                  </h2>
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
        {/* Photographic Grid layout showing key segments */}
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
              <p className="text-slate-500 text-sm leading-relaxed">
                DHGsoft supports organizations across diverse industries including the following major industrial vectors:
              </p>
            </div>

            {/* Asymmetrical Image Mosaic */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {INDUSTRIES_MAPPING.slice(0, 8).map((ind, idx) => (
                <div 
                  key={idx} 
                  className={`relative rounded-[24px] overflow-hidden border border-slate-200 shadow-xs flex flex-col justify-end p-6 bg-slate-900 group hover:border-[#D4145A] transition-all duration-500 ${
                    idx === 0 || idx === 7 ? 'col-span-2 aspect-[2/1] md:aspect-auto md:row-span-2' : 'aspect-square'
                  }`}
                >
                  <Image
                    src={`/${ind.file}`}
                    alt={ind.name}
                    fill
                    className="object-cover opacity-40 group-hover:scale-102 group-hover:opacity-50 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent pointer-events-none" />
                  <div className="relative z-10 text-left">
                    <span className="text-[8px] font-bold uppercase tracking-widest text-[#F15A24] font-mono mb-1 block">Sector 0{idx + 1}</span>
                    <h3 className="text-white font-extrabold text-sm sm:text-base leading-tight">{ind.name}</h3>
                    <p className="text-[10px] text-slate-300 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-350 line-clamp-1">{ind.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Minor sectors inline text */}
            <div className="mt-12 pt-8 border-t border-slate-200/80 flex flex-wrap gap-x-8 gap-y-3 justify-start text-left">
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
        {/* Dynamic Corporate Mandate spread on pure white canvas */}
        <section className="bg-white py-24 md:py-32 border-b border-slate-100">
          <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
              
              {/* Left Column: Purpose */}
              <div className="lg:col-span-5 text-left border-l-2 border-[#D4145A] pl-8">
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#D4145A] font-mono mb-3 block">
                  Our Purpose
                </span>
                <h3 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-[#0F172A] tracking-tight leading-tight">
                  Connecting Intelligence to Transform Industry.
                </h3>
              </div>

              {/* Right Column: Vision & Mission */}
              <div className="lg:col-span-7 text-left space-y-10 lg:pl-6">
                {/* Vision block */}
                <div className="space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-400 font-mono block">Our Vision</span>
                  <h4 className="text-xl sm:text-2xl font-extrabold text-[#0F172A] leading-snug">
                    To become a globally trusted leader in Industrial Digital Transformation by enabling connected, intelligent, and sustainable industries.
                  </h4>
                </div>

                {/* Mission block */}
                <div className="space-y-2 border-t border-slate-100 pt-6">
                  <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-400 font-mono block">Our Mission</span>
                  <p className="text-slate-655 font-medium text-sm sm:text-base leading-relaxed">
                    To empower industries with innovative digital engineering solutions that connect operational technology, enterprise systems, and data intelligence to improve operational excellence and business performance.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ━━━━━━━━━━━━━━━━━━━━━━ SECTION 6: CORE VALUES ━━━━━━━━━━━━━━━━━━━━━━ */}
        {/* Simple layout: Core values text block next to a tall wind farm visual */}
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

              {/* Right Column: Values Image */}
              <div className="lg:col-span-5 relative group">
                <div className="absolute -top-6 -right-6 w-full h-full border border-slate-200 rounded-[28px] pointer-events-none z-0" />
                <div className="relative w-full aspect-[3/4] rounded-[24px] overflow-hidden shadow-[0_20px_50px_rgba(15,23,42,0.06)] bg-slate-50 z-10">
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
        </section>

        {/* ━━━━━━━━━━━━━━━━━━━━━━ SECTION 7: LEADERSHIP ━━━━━━━━━━━━━━━━━━━━━━ */}
        {/* GQ/Forbes magazine style profile block with dual slate borders */}
        <section id="leadership" className="bg-white py-24 md:py-32 border-b border-slate-100">
          <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
              
              {/* Left Column: Portrait */}
              <div className="lg:col-span-5 flex items-center justify-center relative pt-6 pb-6">
                <div className="absolute top-0 right-4 w-[85%] h-[90%] rounded-[24px] border border-slate-200/60 z-0 pointer-events-none transform translate-x-3 -translate-y-3" />
                <div className="absolute bottom-4 left-4 w-[85%] h-[90%] rounded-[24px] border border-slate-200/60 z-0 pointer-events-none transform -translate-x-3 translate-y-3" />

                <div className="relative w-full max-w-[370px] aspect-[3/4] rounded-[24px] overflow-hidden border border-slate-200 shadow-[0_20px_50px_rgba(15,23,42,0.06)] bg-[#F8FAFC] z-10 p-1">
                  <div className="absolute inset-0 z-0">
                    <Image
                      src="/office_blur.png"
                      alt="Corporate Office Backdrop"
                      fill
                      className="object-cover opacity-10"
                    />
                  </div>
                  <div className="relative w-full h-full flex items-end justify-center z-10">
                    <Image
                      src="/CEO_nobg_clean.png"
                      alt="Hitesh Patel — CEO, DHGsoft"
                      fill
                      className="object-contain object-bottom select-none filter drop-shadow-[0_8px_16px_rgba(15,23,42,0.1)]"
                      priority
                    />
                  </div>
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-slate-900/5 backdrop-blur-md border border-slate-200/30 z-20 flex items-center gap-1.5 pointer-events-none">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#D4145A]" />
                    <span className="text-[8px] font-bold text-slate-800 uppercase tracking-widest font-sans">
                      Executive Profile
                    </span>
                  </div>
                </div>

                <div className="absolute bottom-[-10px] left-[-10px] max-w-[270px] bg-slate-900 border border-slate-850 rounded-[18px] p-5 shadow-[0_15px_35px_rgba(15,23,42,0.15)] z-30 flex flex-col items-start text-left">
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
                  <p className="font-bold text-slate-800 text-base sm:text-lg">
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
                    className="inline-flex items-center gap-2 font-bold text-xs uppercase tracking-wider text-slate-700 hover:text-[#D4145A] border-b border-slate-200 hover:border-[#D4145A] pb-1 transition-all duration-300"
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
                <p className="text-slate-655 font-medium text-base sm:text-lg leading-relaxed">
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
                <p className="text-slate-705 font-bold leading-relaxed mb-4">
                  Innovation happens through collaboration.
                </p>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  DHGsoft works closely with customers, technology providers, universities, research institutions, system integrators, and industry experts to deliver future-ready solutions.
                </p>

                <div className="space-y-6 border-t border-slate-100 pt-6">
                  <div className="space-y-1">
                    <h4 className="font-extrabold text-slate-800 text-xs uppercase tracking-wider">Technology Partners</h4>
                    <p className="text-xs text-slate-500 leading-relaxed font-medium">
                      Industrial Automation Platforms, Industrial Data Platforms, Enterprise Software, Cloud Providers, Cybersecurity Technologies, Artificial Intelligence Platforms
                    </p>
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-extrabold text-slate-800 text-xs uppercase tracking-wider">Academic Partnerships</h4>
                    <p className="text-xs text-slate-500 leading-relaxed font-medium">
                      Supporting research, innovation, internships, and workforce development through collaboration with universities and engineering institutions.
                    </p>
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-extrabold text-slate-800 text-xs uppercase tracking-wider">Strategic Alliances</h4>
                    <p className="text-xs text-slate-500 leading-relaxed font-medium">
                      Building long-term partnerships to accelerate innovation and deliver greater customer value.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: Visual and Partner Logos */}
              <div className="lg:col-span-7 flex flex-col gap-8">
                <div className="relative w-full h-[280px] rounded-[24px] overflow-hidden border border-slate-200 shadow-xs bg-slate-50 group">
                  <Image
                    src="/about_collaboration.png"
                    alt="DHGsoft Technical Collaboration Session"
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-102"
                  />
                  <div className="absolute inset-0 bg-slate-950/15 pointer-events-none" />
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
        {/* Environmental sustainability next to detail blocks */}
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

                <div className="relative w-full aspect-[4/3] rounded-[24px] overflow-hidden border border-slate-200 shadow-[0_15px_40px_rgba(15,23,42,0.04)] bg-slate-50 group">
                  <Image
                    src="/about_values.png"
                    alt="Corporate sustainability wind turbines visual"
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-102"
                  />
                  <div className="absolute inset-0 bg-slate-950/15 pointer-events-none" />
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
        {/* High-end Achievements showcase: 6 grid cards with thin borders */}
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
                    <h4 className="font-extrabold text-slate-800 text-sm mb-1">Customer Success Stories</h4>
                    <p className="text-xs text-slate-500 leading-relaxed font-medium">Operational optimization and process efficiency validation metrics.</p>
                  </div>
                </div>

                <div className="p-6 bg-slate-50 border border-slate-200/50 rounded-2xl flex gap-4 items-start shadow-xs hover:border-[#D4145A] transition-colors duration-300">
                  <div className="w-9 h-9 rounded-lg bg-rose-50 flex items-center justify-center text-[#D4145A] shrink-0">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-slate-800 text-sm mb-1">Awards</h4>
                    <p className="text-xs text-slate-500 leading-relaxed font-medium">Engineering awards recognizing robust digital systems architectures.</p>
                  </div>
                </div>

                <div className="p-6 bg-slate-50 border border-slate-200/50 rounded-2xl flex gap-4 items-start shadow-xs hover:border-[#D4145A] transition-colors duration-300">
                  <div className="w-9 h-9 rounded-lg bg-rose-50 flex items-center justify-center text-[#D4145A] shrink-0">
                    <Milestone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-slate-800 text-sm mb-1">Industry Recognition</h4>
                    <p className="text-xs text-slate-500 leading-relaxed font-medium">Acknowledged as a technology leader in industrial integration telemetry.</p>
                  </div>
                </div>

                <div className="p-6 bg-slate-50 border border-slate-200/50 rounded-2xl flex gap-4 items-start shadow-xs hover:border-[#D4145A] transition-colors duration-300">
                  <div className="w-9 h-9 rounded-lg bg-rose-50 flex items-center justify-center text-[#D4145A] shrink-0">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-slate-800 text-sm mb-1">Certifications</h4>
                    <p className="text-xs text-slate-500 leading-relaxed font-medium">Internationally recognized engineering standards and security certifications.</p>
                  </div>
                </div>

                <div className="p-6 bg-slate-50 border border-slate-200/50 rounded-2xl flex gap-4 items-start shadow-xs hover:border-[#D4145A] transition-colors duration-300">
                  <div className="w-9 h-9 rounded-lg bg-rose-50 flex items-center justify-center text-[#D4145A] shrink-0">
                    <Lightbulb className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-slate-800 text-sm mb-1">Technology Achievements</h4>
                    <p className="text-xs text-slate-500 leading-relaxed font-medium">Proprietary namespace pipelines and customized IIoT edge models.</p>
                  </div>
                </div>

                <div className="p-6 bg-slate-50 border border-slate-200/50 rounded-2xl flex gap-4 items-start shadow-xs hover:border-[#D4145A] transition-colors duration-300">
                  <div className="w-9 h-9 rounded-lg bg-rose-50 flex items-center justify-center text-[#D4145A] shrink-0">
                    <Milestone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-slate-800 text-sm mb-1">Project Milestones</h4>
                    <p className="text-xs text-slate-500 leading-relaxed font-medium">Successful commissioning of multi-site automation networks.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ━━━━━━━━━━━━━━━━━━━━━━ SECTION 12: GLOBAL PRESENCE ━━━━━━━━━━━━━━━━━━━━━━ */}
        {/* Sticky Delivery locations column next to global Map hub */}
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
                
                <div className="space-y-6 border-t border-slate-100 pt-6 text-slate-650 leading-relaxed font-sans font-medium text-sm sm:text-base">
                  <p>
                    Onsite Services, Offshore Engineering, Remote Operations, 24&times;7 Support, Global Project Delivery
                  </p>
                  <p>
                    Locations: Corporate Office, Regional Offices, Delivery Centers, Partner Network
                  </p>
                  <p className="text-slate-505 text-xs sm:text-sm font-normal pt-4 border-t border-slate-200/60">
                    Looking Ahead: DHGsoft continues investing in innovation, talent, strategic partnerships, and emerging technologies to shape the future of connected industries and intelligent enterprises.
                  </p>
                </div>
              </div>

              {/* Right Column: Global Map */}
              <div className="lg:col-span-7 flex flex-col gap-6 group">
                <div className="relative w-full aspect-[4/3] rounded-[28px] overflow-hidden border border-slate-200 shadow-xs bg-slate-50">
                  <Image
                    src="/about_global.png"
                    alt="DHGsoft global delivery command hubs connectivity"
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-102"
                  />
                  <div className="absolute inset-0 bg-slate-950/15 pointer-events-none" />
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
