'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Toaster } from 'sonner';
import { 
  ArrowRight, 
  Quote, 
  Sparkles, 
  Compass, 
  Target, 
  ShieldCheck, 
  Heart, 
  Lightbulb, 
  Users, 
  Globe2, 
  Award,
  BookOpen,
  Milestone,
  CheckCircle2
} from 'lucide-react';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactModal from '@/components/ContactModal';

const STATS = [
  { value: "15+", label: "Years of Engineering Innovation" },
  { value: "200+", label: "Enterprise Projects Completed" },
  { value: "40+", label: "Global Industries Modernized" }
];

const WHAT_WE_DO_LIST = [
  { name: "Industrial Automation", desc: "PLC/SCADA architectures, control panel design, and shop-floor engineering." },
  { name: "OT / IT Integration", desc: "Connecting telemetry, OPC servers, and fieldbus assets with enterprise systems." },
  { name: "Industrial Data Platforms", desc: "Unified data namespace pipelines for enterprise-wide analytics." },
  { name: "Artificial Intelligence & Analytics", desc: "Predictive maintenance algorithms, process optimization, and anomaly detection." },
  { name: "Industrial Internet of Things (IIoT)", desc: "Edge gateways, telemetry ingest networks, and device fleet management." },
  { name: "Digital Engineering", desc: "Custom systems software, API orchestrations, and virtual digital twin simulations." },
  { name: "Enterprise Applications", desc: "Next-gen manufacturing execution systems (MES), ERP, and PLM integrations." },
  { name: "Cloud Infrastructure", desc: "Highly secure hybrid cloud architectures for mission-critical operations." },
  { name: "Cybersecurity", desc: "Zero-trust OT cybersecurity protection defending critical infrastructure assets." },
  { name: "Managed Services", desc: "24/7/365 global technical support, monitoring, and site reliability engineering." }
];

const INDUSTRIES_MAPPING = [
  { name: "Industrial Manufacturing", file: "smart_factory_visual.png", desc: "Smart factory operations & automation." },
  { name: "Automotive", file: "industries/automotive.png", desc: "OEM assembly line optimization." },
  { name: "Life Sciences", file: "industries/lifesciences.png", desc: "Regulatory compliance & batch analytics." },
  { name: "Semiconductor", file: "ceo_bg.png", desc: "Yield optimization & cleanroom systems." },
  { name: "Chemical Manufacturing", file: "energy_visual.png", desc: "Process safety & telemetry integration." },
  { name: "Food & Beverages", file: "industries/food.png", desc: "Traceability & recipe management." },
  { name: "Oil & Gas", file: "industries/mining.png", desc: "Pipeline monitoring & asset security." },
  { name: "Power & Utilities", file: "industries/power.png", desc: "Smart grid management & telemetry." },
  { name: "Mining & Metals", file: "industries/mining.png", desc: "Fleet automation & supply logistics." },
  { name: "Water & Wastewater Management", file: "industries/water.png", desc: "Flow analytics & treatment automation." },
  { name: "Consumer Packaged Goods", file: "industries/food.png", desc: "High-speed packaging line efficiency." },
  { name: "Data Centres", file: "industries/datacenters.png", desc: "Power, cooling & infrastructure control." },
  { name: "EPC", file: "industries/epc.png", desc: "Digital twins & project execution." },
  { name: "Agriculture", file: "industries/power.png", desc: "Precision farming & resource management." }
];

export default function AboutPage() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="bg-white text-slate-900 min-h-screen flex flex-col font-sans antialiased overflow-x-hidden">
      {/* Premium Sticky Navigation */}
      <Header onContactClick={() => setIsContactOpen(true)} />

      <main className="flex-grow">
        
        {/* ━━━━━━━━━━━━━━━━━━━━━━ SECTION 1: HERO OVERVIEW ━━━━━━━━━━━━━━━━━━━━━━ */}
        {/* Composition: Massive Editorial Typography & Background Peaking Banners */}
        <section id="overview" className="relative bg-white pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden border-b border-slate-100">
          <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(15, 23, 42, 0.05) 1px, transparent 1px),
                linear-gradient(90deg, rgba(15, 23, 42, 0.05) 1px, transparent 1px)
              `,
              backgroundSize: '28px 28px',
            }}
          />
          <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 relative z-10">
            
            {/* Tag badge */}
            <div className="flex items-center gap-2 mb-8">
              <Sparkles className="w-3.5 h-3.5 text-[#D4145A]" />
              <span className="font-extrabold uppercase tracking-[0.25em] text-[#D4145A] font-mono text-[10px]">
                Corporate Profile
              </span>
            </div>

            {/* Asymmetric Split Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              
              {/* Left text: Title and Subtitle */}
              <div className="lg:col-span-7 text-left">
                <h1 className="font-extrabold text-[#0F172A] tracking-tight leading-[1.08] mb-8 font-headline text-[42px] sm:text-[56px] lg:text-[68px]">
                  Engineering the Future of{' '}
                  <span className="bg-gradient-to-r from-[#D4145A] to-[#F15A24] bg-clip-text text-transparent">
                    Connected Industries
                  </span>
                </h1>
                
                <p className="text-slate-500 font-medium text-lg sm:text-xl leading-relaxed max-w-2xl">
                  DHGsoft is a global Industrial Digital Transformation company helping organizations connect operations, data, applications, and people to create intelligent, efficient, and sustainable enterprises.
                </p>
              </div>

              {/* Right stats column: Floating statistics */}
              <div className="lg:col-span-5 flex flex-col gap-6 lg:pl-10 lg:pt-8 w-full">
                <div className="border-t-2 border-slate-900 pt-6">
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block mb-4">Operational Benchmarks</span>
                  <div className="flex flex-col gap-6">
                    {STATS.map((stat, idx) => (
                      <div key={idx} className="flex items-center gap-6 text-left">
                        <span className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#D4145A] to-[#F15A24] leading-none min-w-[80px]">
                          {stat.value}
                        </span>
                        <span className="text-xs font-bold text-slate-700 uppercase tracking-widest leading-snug">{stat.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>

            {/* Panoramic Hero Picture with double outline brackets */}
            <div className="relative w-full aspect-[21/9] rounded-[32px] overflow-hidden border border-slate-200/80 shadow-[0_25px_60px_-15px_rgba(15,23,42,0.12)] mt-16 md:mt-24 z-10 bg-slate-50">
              <Image
                src="/about_hero.png"
                alt="DHGsoft Smart Assembly Plant Telemetry"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/15 via-transparent to-transparent pointer-events-none" />
            </div>

          </div>
        </section>

        {/* ━━━━━━━━━━━━━━━━━━━━━━ SECTION 2: COMPANY OVERVIEW ━━━━━━━━━━━━━━━━━━━━━━ */}
        {/* Composition: Magazine Article, Offset content layout */}
        <section className="bg-slate-50 py-24 md:py-32 border-b border-slate-200/60 relative overflow-hidden">
          <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              
              {/* Left Column: Headline details */}
              <div className="lg:col-span-4 text-left">
                <span className="text-[11px] font-black uppercase tracking-[0.25em] text-[#D4145A] font-mono mb-4 block">
                  Company Overview
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight leading-tight mb-8">
                  Accelerating enterprise digital manufacturing and industrial connectivity.
                </h2>
                <div className="w-16 h-[2px] bg-[#D4145A]" />
              </div>

              {/* Right Column: Paragraph narrative */}
              <div className="lg:col-span-8 text-left space-y-6 text-slate-650 leading-relaxed font-sans font-medium text-base sm:text-lg">
                <p>
                  Founded with a vision to accelerate industrial innovation, DHGsoft delivers end-to-end digital engineering, industrial automation, OT/IT integration, AI, cloud, cybersecurity, and operational intelligence solutions.
                </p>
                <p>
                  We help manufacturers, utilities, infrastructure providers, and process industries modernize operations by connecting plant-floor assets with enterprise systems and cloud technologies.
                </p>
                <p>
                  Our expertise spans the complete digital transformation lifecycle—from consulting and solution architecture to implementation, managed services, and continuous optimization.
                </p>
                <p className="text-slate-500 text-sm sm:text-base font-normal pt-4 border-t border-slate-200">
                  Whether enabling a smart factory, implementing industrial data platforms, modernizing enterprise applications, or deploying AI-driven operational intelligence, DHGsoft delivers measurable business outcomes that improve productivity, reliability, safety, and sustainability.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* ━━━━━━━━━━━━━━━━━━━━━━ SECTION 3: WHAT WE DO ━━━━━━━━━━━━━━━━━━━━━━ */}
        {/* Composition: Photography-driven asymmetric list with deep text highlights */}
        <section className="bg-white py-24 md:py-32 border-b border-slate-100">
          <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-stretch">
              
              {/* Left Column: What We Do grid */}
              <div className="lg:col-span-7 text-left flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-black uppercase tracking-[0.25em] text-[#D4145A] font-mono mb-4 block">
                    Capabilities Portfolio
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight leading-tight mb-12">
                    What We Do
                  </h2>
                  <p className="text-slate-500 text-sm mb-12 max-w-xl">
                    We design, build, integrate, and manage intelligent industrial ecosystems by combining leading technologies:
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-6">
                  {WHAT_WE_DO_LIST.map((item, idx) => (
                    <div key={idx} className="flex gap-4 border-t border-slate-100 pt-4 text-left">
                      <span className="text-xs font-bold text-[#D4145A] font-mono">0{idx + 1}</span>
                      <div>
                        <h4 className="font-extrabold text-[#0F172A] text-sm">{item.name}</h4>
                        <p className="text-xs text-slate-500 mt-1 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Dynamic vertical crop photography */}
              <div className="lg:col-span-5 flex items-center justify-center lg:justify-end">
                <div className="relative w-full max-w-[420px] aspect-[3/4] rounded-[28px] overflow-hidden border border-slate-200/80 shadow-[0_20px_50px_rgba(15,23,42,0.1)] bg-slate-50">
                  <Image
                    src="/about_engineering.png"
                    alt="Control center integration interface"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-slate-950/20 pointer-events-none" />
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* ━━━━━━━━━━━━━━━━━━━━━━ SECTION 4: INDUSTRIES ━━━━━━━━━━━━━━━━━━━━━━ */}
        {/* Composition: Editorial Image Mosaic Grid (asymmetric blocks) */}
        <section className="bg-slate-50 py-24 md:py-32 border-b border-slate-200/60">
          <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
            
            {/* Header info */}
            <div className="text-left mb-16">
              <span className="text-[11px] font-black uppercase tracking-[0.25em] text-[#D4145A] font-mono mb-4 block">
                Target Verticals
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight leading-tight max-w-xl">
                Industries We Serve
              </h2>
              <p className="text-slate-500 text-sm mt-3 max-w-md">
                DHGsoft supports organizations across diverse sectors requiring critical OT/IT engineering excellence:
              </p>
            </div>

            {/* Editorial Mosaic Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {INDUSTRIES_MAPPING.slice(0, 8).map((ind, idx) => (
                <div 
                  key={idx} 
                  className={`relative rounded-[24px] overflow-hidden border border-slate-250/60 shadow-xs flex flex-col justify-end p-6 bg-slate-900 group hover:border-[#D4145A] transition-all duration-500 ${
                    idx === 0 || idx === 7 ? 'col-span-2 aspect-[2/1] md:aspect-auto md:row-span-2' : 'aspect-square'
                  }`}
                >
                  <Image
                    src={`/${ind.file}`}
                    alt={ind.name}
                    fill
                    className="object-cover opacity-35 group-hover:scale-103 group-hover:opacity-50 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent pointer-events-none" />
                  <div className="relative z-10 text-left">
                    <span className="text-[8px] font-extrabold uppercase tracking-widest text-[#F15A24] font-mono mb-1 block">Sector 0{idx + 1}</span>
                    <h3 className="text-white font-extrabold text-sm sm:text-base leading-tight">{ind.name}</h3>
                    <p className="text-[10px] text-slate-400 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-1">{ind.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom inline list for other sectors */}
            <div className="mt-8 pt-8 border-t border-slate-200/80 flex flex-wrap gap-x-8 gap-y-3 justify-start text-left">
              {INDUSTRIES_MAPPING.slice(8).map((ind, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D4145A]" />
                  <span className="text-xs font-bold text-slate-700 uppercase tracking-widest">{ind.name}</span>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ━━━━━━━━━━━━━━━━━━━━━━ SECTION 5: VISION & MISSION ━━━━━━━━━━━━━━━━━━━━━━ */}
        {/* Composition: Magazine layout with wide-format photographic backdrop */}
        <section id="vision" className="bg-white py-24 md:py-32 border-b border-slate-100">
          <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-stretch">
              
              {/* Left Column: Core Statements */}
              <div className="lg:col-span-6 flex flex-col justify-between text-left">
                <div>
                  <span className="text-[11px] font-black uppercase tracking-[0.25em] text-[#D4145A] font-mono mb-4 block">
                    Strategic Direction
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight leading-tight mb-12">
                    Vision, Mission & Values
                  </h2>
                </div>

                {/* Our Vision */}
                <div className="border-t border-slate-200 pt-8 pb-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Target className="w-5 h-5 text-[#D4145A]" />
                    <h3 className="font-extrabold text-[#0F172A] text-sm uppercase tracking-wider">Our Vision</h3>
                  </div>
                  <p className="text-slate-600 font-medium text-base sm:text-lg leading-relaxed">
                    To become a globally trusted leader in Industrial Digital Transformation by enabling connected, intelligent, and sustainable industries.
                  </p>
                </div>

                {/* Our Mission */}
                <div className="border-t border-slate-200 pt-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Compass className="w-5 h-5 text-[#F15A24]" />
                    <h3 className="font-extrabold text-[#0F172A] text-sm uppercase tracking-wider">Our Mission</h3>
                  </div>
                  <p className="text-slate-600 font-medium text-base sm:text-lg leading-relaxed">
                    To empower industries with innovative digital engineering solutions that connect operational technology, enterprise systems, and data intelligence to improve operational excellence and business performance.
                  </p>
                </div>

              </div>

              {/* Right Column: Purpose and Values collage */}
              <div className="lg:col-span-6 flex flex-col justify-between bg-slate-50 p-8 lg:p-12 rounded-[28px] border border-slate-200/60 shadow-sm text-left">
                <div>
                  <div className="border-b border-slate-200 pb-6 mb-8">
                    <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest block mb-1">Our Purpose Statement</span>
                    <h3 className="text-xl font-bold bg-gradient-to-r from-[#D4145A] to-[#F15A24] bg-clip-text text-transparent">
                      Connecting Intelligence to Transform Industry.
                    </h3>
                  </div>

                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block mb-6">Our Core Values</span>
                  
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-extrabold text-slate-800 text-sm mb-1.5 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#D4145A]" /> Innovation
                        </h4>
                        <p className="text-xs text-slate-500 leading-relaxed">Continuously embracing emerging technologies to solve complex industrial challenges.</p>
                      </div>
                      <div>
                        <h4 className="font-extrabold text-slate-800 text-sm mb-1.5 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#D4145A]" /> Customer Success
                        </h4>
                        <p className="text-xs text-slate-500 leading-relaxed">Our customers&apos; success defines our success.</p>
                      </div>
                      <div>
                        <h4 className="font-extrabold text-slate-800 text-sm mb-1.5 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#D4145A]" /> Integrity
                        </h4>
                        <p className="text-xs text-slate-500 leading-relaxed">Building trusted relationships through transparency and ethical business practices.</p>
                      </div>
                      <div>
                        <h4 className="font-extrabold text-slate-800 text-sm mb-1.5 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#D4145A]" /> Excellence
                        </h4>
                        <p className="text-xs text-slate-500 leading-relaxed">Delivering high-quality engineering and technology solutions with precision.</p>
                      </div>
                      <div>
                        <h4 className="font-extrabold text-slate-800 text-sm mb-1.5 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#D4145A]" /> Collaboration
                        </h4>
                        <p className="text-xs text-slate-500 leading-relaxed">Working together with partners, universities, and technology leaders.</p>
                      </div>
                      <div>
                        <h4 className="font-extrabold text-slate-800 text-sm mb-1.5 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#D4145A]" /> Sustainability
                        </h4>
                        <p className="text-xs text-slate-500 leading-relaxed">Helping industries operate more efficiently while supporting environmental responsibility.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ━━━━━━━━━━━━━━━━━━━━━━ SECTION 6: LEADERSHIP ━━━━━━━━━━━━━━━━━━━━━━ */}
        {/* Composition: Premium magazine feature layout */}
        <section id="leadership" className="bg-slate-50 py-24 md:py-32 border-b border-slate-200/60">
          <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              
              {/* Left Column: GQ/Forbes magazine style photo frame */}
              <div className="lg:col-span-5 flex items-center justify-center relative pt-6 pb-12">
                
                {/* Background Peak banners */}
                <div className="absolute top-0 right-2 w-[85%] h-[80%] rounded-[28px] z-0 opacity-95 pointer-events-none transform translate-x-2 -translate-y-2"
                  style={{ background: 'linear-gradient(135deg, #D4145A 0%, #B90F4D 100%)' }}
                />
                <div className="absolute bottom-6 left-2 w-[85%] h-[80%] rounded-[28px] z-0 opacity-90 pointer-events-none transform -translate-x-2 translate-y-2"
                  style={{ background: 'linear-gradient(135deg, #F15A24 0%, #D4145A 100%)' }}
                />

                <div className="relative w-full max-w-[390px] aspect-[3/4] rounded-[28px] overflow-hidden border border-slate-200/80 shadow-[0_25px_60px_-15px_rgba(15,23,42,0.15)] bg-white z-10 p-1">
                  <div className="absolute inset-1 rounded-[24px] border-2 border-white/90 z-20 pointer-events-none" />
                  <div className="absolute inset-0 z-0">
                    <Image
                      src="/office_blur.png"
                      alt="Corporate Backdrop"
                      fill
                      className="object-cover opacity-95"
                    />
                  </div>
                  <div className="relative w-full h-full flex items-end justify-center z-10">
                    <Image
                      src="/CEO_nobg_clean.png"
                      alt="Hitesh Patel — CEO, DHGsoft"
                      fill
                      className="object-contain object-bottom select-none filter drop-shadow-[0_12px_24px_rgba(15,23,42,0.18)]"
                      priority
                    />
                  </div>
                  <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-[#0A1120]/80 backdrop-blur-md border border-white/10 z-20 flex items-center gap-1.5 shadow-md pointer-events-none">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#F15A24]" />
                    <span className="text-[9px] font-bold text-white uppercase tracking-widest font-sans">
                      Executive profile
                    </span>
                  </div>
                </div>

                {/* Overlapping Quote Box */}
                <div className="absolute bottom-1 left-[-20px] max-w-[280px] sm:max-w-[310px] bg-[#0A1120] border border-slate-850 rounded-[20px] p-5 shadow-[0_15px_30px_rgba(15,23,42,0.25)] z-30 flex flex-col items-start text-left">
                  <Quote className="w-6 h-6 fill-current text-[#D4145A] opacity-90 mb-2" />
                  <p className="text-[11px] leading-relaxed text-slate-300 font-medium font-sans">
                    Lead with innovation.<br />
                    Deliver with excellence.<br />
                    Grow through collaboration.<br />
                    <span className="font-bold text-[#F15A24] block mt-2 text-[10px] uppercase tracking-wider">Hitesh Patel // CEO</span>
                  </p>
                </div>

              </div>

              {/* Right Column: Leadership Narrative */}
              <div className="lg:col-span-7 text-left">
                <span className="text-[11px] font-black uppercase tracking-[0.25em] text-[#D4145A] font-mono mb-4 block">
                  Leadership
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight leading-tight mb-8">
                  Leadership Team
                </h2>
                
                <div className="space-y-6 text-slate-650 leading-relaxed font-sans font-medium text-base sm:text-lg mb-8">
                  <p>
                    DHGsoft is led by experienced professionals passionate about engineering innovation, industrial technology, and digital transformation.
                  </p>
                  <p>
                    Our leadership combines expertise in industrial automation, enterprise technology, cloud computing, AI, operational excellence, and business strategy to deliver long-term value for customers worldwide.
                  </p>
                  <p className="text-slate-400 text-sm font-normal pt-4 border-t border-slate-200">
                    (Individual leadership profiles can be added here.)
                  </p>
                </div>

                {/* Leadership Philosophy Box */}
                <div className="bg-white p-6 rounded-[20px] border border-slate-200/80 shadow-xs text-left w-full">
                  <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest block mb-3">Leadership Philosophy</span>
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-12">
                    <div>
                      <span className="text-xs font-extrabold text-slate-700 block uppercase tracking-wider">Lead</span>
                      <span className="text-sm font-medium text-[#D4145A] mt-0.5 block">with innovation.</span>
                    </div>
                    <div>
                      <span className="text-xs font-extrabold text-slate-700 block uppercase tracking-wider">Deliver</span>
                      <span className="text-sm font-medium text-[#D4145A] mt-0.5 block">with excellence.</span>
                    </div>
                    <div>
                      <span className="text-xs font-extrabold text-slate-700 block uppercase tracking-wider">Grow</span>
                      <span className="text-sm font-medium text-[#D4145A] mt-0.5 block">through collaboration.</span>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* ━━━━━━━━━━━━━━━━━━━━━━ SECTION 7: WHY DHGSOFT ━━━━━━━━━━━━━━━━━━━━━━ */}
        {/* Composition: Storytelling experience with column separation lines */}
        <section id="why-dhgsoft" className="bg-white py-24 md:py-32 border-b border-slate-100">
          <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-16">
              <div className="lg:col-span-5 text-left">
                <span className="text-[11px] font-black uppercase tracking-[0.25em] text-[#D4145A] font-mono mb-4 block">
                  Why DHGsoft
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight leading-tight">
                  Connecting Intelligence
                </h2>
              </div>
              <div className="lg:col-span-7 text-left">
                <p className="text-slate-650 font-medium text-lg leading-relaxed">
                  We believe digital transformation is about connecting every aspect of industrial operations—from machines and people to enterprise applications and intelligent analytics.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 border-t border-slate-200/80 pt-12">
              
              <div className="text-left pr-4 border-r border-slate-200/80 last:border-0">
                <span className="text-xs font-extrabold text-slate-400 font-mono block mb-4">01 // INTEGRATION</span>
                <h3 className="font-extrabold text-slate-800 text-sm mb-3">End-to-End Digital Partner</h3>
                <ul className="text-xs text-slate-500 space-y-1.5 mt-4">
                  <li>Consulting</li>
                  <li>Engineering</li>
                  <li>Implementation</li>
                  <li>Managed Services</li>
                  <li>Continuous Improvement</li>
                </ul>
              </div>

              <div className="text-left pr-4 border-r border-slate-200/80 last:border-0">
                <span className="text-xs font-extrabold text-slate-400 font-mono block mb-4">02 // VERTICALS</span>
                <h3 className="font-extrabold text-slate-800 text-sm mb-3">Industry Expertise</h3>
                <p className="text-xs text-slate-500 leading-relaxed mt-4">
                  Deep experience across manufacturing, utilities, infrastructure, life sciences, and process industries.
                </p>
              </div>

              <div className="text-left pr-4 border-r border-slate-200/80 last:border-0">
                <span className="text-xs font-extrabold text-slate-400 font-mono block mb-4">03 // ARCHITECTURES</span>
                <h3 className="font-extrabold text-slate-800 text-sm mb-3">Technology Excellence</h3>
                <p className="text-xs text-slate-500 leading-relaxed mt-4">
                  Leveraging leading industrial and enterprise technologies to build scalable digital solutions.
                </p>
              </div>

              <div className="text-left">
                <span className="text-xs font-extrabold text-slate-400 font-mono block mb-4">04 // RELIABILITY</span>
                <h3 className="font-extrabold text-slate-800 text-sm mb-3">Global Delivery</h3>
                <p className="text-xs text-slate-500 leading-relaxed mt-4">
                  Flexible onsite, offshore, and hybrid delivery models supported by experienced engineering teams.
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* ━━━━━━━━━━━━━━━━━━━━━━ SECTION 8: PARTNER ECOSYSTEM ━━━━━━━━━━━━━━━━━━━━━━ */}
        {/* Composition: Large collaboration photography & partners logo grid */}
        <section id="partners" className="bg-slate-50 py-24 md:py-32 border-b border-slate-200/60">
          <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              
              {/* Left Column: Context & List */}
              <div className="lg:col-span-5 text-left">
                <span className="text-[11px] font-black uppercase tracking-[0.25em] text-[#D4145A] font-mono mb-4 block">
                  Collaborations
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight leading-tight mb-8">
                  Partner Ecosystem
                </h2>
                <p className="text-slate-650 font-bold leading-relaxed mb-6">
                  Innovation happens through collaboration.
                </p>
                <p className="text-slate-500 leading-relaxed mb-8">
                  DHGsoft works closely with customers, technology providers, universities, research institutions, system integrators, and industry experts to deliver future-ready solutions.
                </p>

                <div className="space-y-4 border-t border-slate-200 pt-8">
                  <div>
                    <h4 className="font-extrabold text-slate-800 text-xs uppercase tracking-wider mb-1">Technology Partners</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Industrial Automation Platforms, Industrial Data Platforms, Enterprise Software, Cloud Providers, Cybersecurity Technologies, Artificial Intelligence Platforms
                    </p>
                  </div>
                  <div>
                    <h4 className="font-extrabold text-slate-800 text-xs uppercase tracking-wider mb-1">Academic Partnerships</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Supporting research, innovation, internships, and workforce development through collaboration with universities and engineering institutions.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-extrabold text-slate-800 text-xs uppercase tracking-wider mb-1">Strategic Alliances</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Building long-term partnerships to accelerate innovation and deliver greater customer value.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: Visual and Partner Logos */}
              <div className="lg:col-span-7 flex flex-col gap-10">
                <div className="relative w-full h-[280px] rounded-[24px] overflow-hidden border border-slate-250/60 shadow-xs bg-slate-100">
                  <Image
                    src="/about_collaboration.png"
                    alt="DHGsoft Technical Collaboration Session"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-slate-950/15 pointer-events-none" />
                </div>
                
                {/* Logo grid */}
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-6 items-center border-t border-slate-200 pt-8">
                  {['aws', 'microsoft-azure', 'schneider-electric', 'aveva', 'phoenix-contact', 'databricks'].map((logo, idx) => (
                    <div key={idx} className="relative h-8 flex items-center justify-center filter grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
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

        {/* ━━━━━━━━━━━━━━━━━━━━━━ SECTION 9: CORPORATE RESPONSIBILITY ━━━━━━━━━━━━━━━━━━━━━━ */}
        {/* Composition: Environmental Photography with offset block grids */}
        <section id="responsibility" className="bg-white py-24 md:py-32 border-b border-slate-100">
          <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              
              {/* Left Column: Narrative details */}
              <div className="lg:col-span-5 text-left flex flex-col gap-8">
                <div>
                  <span className="text-[11px] font-black uppercase tracking-[0.25em] text-[#D4145A] font-mono mb-4 block">
                    Commitment
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight leading-tight">
                    Corporate Responsibility
                  </h2>
                </div>

                <div className="relative w-full aspect-[4/3] rounded-[24px] overflow-hidden border border-slate-200/80 shadow-[0_15px_40px_rgba(15,23,42,0.06)] bg-slate-50">
                  <Image
                    src="/about_values.png"
                    alt="Corporate sustainability wind turbines visual"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-slate-950/15 pointer-events-none" />
                </div>
              </div>

              {/* Right Column: Dynamic structured grid */}
              <div className="lg:col-span-7 space-y-6 text-left">
                
                <div className="border-b border-slate-100 pb-6">
                  <h3 className="font-extrabold text-slate-800 text-sm uppercase tracking-wider mb-2">Sustainability</h3>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                    Helping organizations improve operational efficiency while reducing energy consumption and environmental impact.
                  </p>
                </div>

                <div className="border-b border-slate-100 pb-6">
                  <h3 className="font-extrabold text-slate-800 text-sm uppercase tracking-wider mb-2">ESG</h3>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                    Supporting Environmental, Social, and Governance initiatives through digital technologies and intelligent operations.
                  </p>
                </div>

                <div className="border-b border-slate-100 pb-6">
                  <h3 className="font-extrabold text-slate-800 text-sm uppercase tracking-wider mb-2">Ethics & Compliance</h3>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                    Integrity and ethical business practices guide every customer engagement.
                  </p>
                </div>

                <div className="border-b border-slate-100 pb-6">
                  <h3 className="font-extrabold text-slate-800 text-sm uppercase tracking-wider mb-2">Information Security</h3>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                    Protecting customer data through secure engineering practices and internationally accepted security principles.
                  </p>
                </div>

                <div>
                  <h3 className="font-extrabold text-slate-800 text-sm uppercase tracking-wider mb-2">Quality</h3>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                    Committed to delivering reliable, scalable, and high-quality engineering solutions.
                  </p>
                </div>

              </div>

            </div>

          </div>
        </section>

        {/* ━━━━━━━━━━━━━━━━━━━━━━ SECTION 10: RECOGNITION ━━━━━━━━━━━━━━━━━━━━━━ */}
        {/* Composition: Elegant Awards Milestones Showcase */}
        <section id="recognition" className="bg-slate-50 py-24 md:py-32 border-b border-slate-200/60">
          <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              
              <div className="lg:col-span-4 text-left">
                <span className="text-[11px] font-black uppercase tracking-[0.25em] text-[#D4145A] font-mono mb-4 block">
                  Performance
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight leading-tight mb-6">
                  Recognition
                </h2>
                <p className="text-slate-500 text-sm leading-relaxed">
                  DHGsoft measures success by the value created for customers. This section highlights:
                </p>
              </div>

              <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
                
                <div className="p-6 bg-white border border-slate-200/60 rounded-2xl flex gap-4 items-start shadow-xs hover:border-[#D4145A] transition-colors duration-300">
                  <div className="w-9 h-9 rounded-lg bg-rose-50 flex items-center justify-center text-[#D4145A] shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-slate-800 text-sm mb-1">Customer Success Stories</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">Operational optimization and process efficiency validation metrics.</p>
                  </div>
                </div>

                <div className="p-6 bg-white border border-slate-200/60 rounded-2xl flex gap-4 items-start shadow-xs hover:border-[#D4145A] transition-colors duration-300">
                  <div className="w-9 h-9 rounded-lg bg-rose-50 flex items-center justify-center text-[#D4145A] shrink-0">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-slate-800 text-sm mb-1">Awards</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">Engineering awards recognizing robust digital systems architectures.</p>
                  </div>
                </div>

                <div className="p-6 bg-white border border-slate-200/60 rounded-2xl flex gap-4 items-start shadow-xs hover:border-[#D4145A] transition-colors duration-300">
                  <div className="w-9 h-9 rounded-lg bg-rose-50 flex items-center justify-center text-[#D4145A] shrink-0">
                    <Milestone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-slate-800 text-sm mb-1">Industry Recognition</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">Acknowledged as a technology leader in industrial integration telemetry.</p>
                  </div>
                </div>

                <div className="p-6 bg-white border border-slate-200/60 rounded-2xl flex gap-4 items-start shadow-xs hover:border-[#D4145A] transition-colors duration-300">
                  <div className="w-9 h-9 rounded-lg bg-rose-50 flex items-center justify-center text-[#D4145A] shrink-0">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-slate-800 text-sm mb-1">Certifications</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">Internationally recognized engineering standards and security certifications.</p>
                  </div>
                </div>

                <div className="p-6 bg-white border border-slate-200/60 rounded-2xl flex gap-4 items-start shadow-xs hover:border-[#D4145A] transition-colors duration-300">
                  <div className="w-9 h-9 rounded-lg bg-rose-50 flex items-center justify-center text-[#D4145A] shrink-0">
                    <Lightbulb className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-slate-800 text-sm mb-1">Technology Achievements</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">Proprietary namespace pipelines and customized IIoT edge models.</p>
                  </div>
                </div>

                <div className="p-6 bg-white border border-slate-200/60 rounded-2xl flex gap-4 items-start shadow-xs hover:border-[#D4145A] transition-colors duration-300">
                  <div className="w-9 h-9 rounded-lg bg-rose-50 flex items-center justify-center text-[#D4145A] shrink-0">
                    <Milestone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-slate-800 text-sm mb-1">Project Milestones</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">Successful commissioning of multi-site automation networks.</p>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </section>

        {/* ━━━━━━━━━━━━━━━━━━━━━━ SECTION 11: GLOBAL PRESENCE ━━━━━━━━━━━━━━━━━━━━━━ */}
        {/* Composition: Connectivity Graphics with dual layout details */}
        <section id="global" className="bg-white py-24 md:py-32 border-b border-slate-100 relative">
          <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 relative z-10">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              
              {/* Left Column: Context */}
              <div className="lg:col-span-5 text-left lg:sticky lg:top-28">
                <span className="text-[11px] font-black uppercase tracking-[0.25em] text-[#D4145A] font-mono mb-4 block">
                  Global Presence
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight leading-tight mb-8">
                  DHGsoft serves customers through a flexible global delivery model.
                </h2>
                
                <div className="space-y-6 border-t border-slate-100 pt-8 text-slate-650 leading-relaxed font-sans font-medium text-base">
                  <p>
                    Onsite Services, Offshore Engineering, Remote Operations, 24×7 Support, Global Project Delivery
                  </p>
                  <p>
                    Locations: Corporate Office, Regional Offices, Delivery Centers, Partner Network
                  </p>
                  <p className="text-slate-500 text-sm font-normal pt-4 border-t border-slate-200">
                    Looking Ahead: DHGsoft continues investing in innovation, talent, strategic partnerships, and emerging technologies to shape the future of connected industries and intelligent enterprises.
                  </p>
                </div>
              </div>

              {/* Right Column: Global Presence Connectivity Backdrop */}
              <div className="lg:col-span-7 flex flex-col gap-6">
                <div className="relative w-full aspect-[4/3] rounded-[28px] overflow-hidden border border-slate-200/80 shadow-[0_20px_50px_rgba(15,23,42,0.06)] bg-slate-50">
                  <Image
                    src="/about_global.png"
                    alt="DHGsoft global delivery command hubs connectivity"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-slate-950/15 pointer-events-none" />
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* ━━━━━━━━━━━━━━━━━━━━━━ SECTION 12: MINIMAL OUTCOME CTA ━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="bg-slate-50 py-24 md:py-32">
          <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 text-center">
            <div className="max-w-2xl mx-auto flex flex-col items-center">
              <span className="text-[11px] font-black uppercase tracking-[0.25em] text-[#D4145A] font-mono mb-4">
                Consultation
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight mb-8">
                Build tomorrow&apos;s industries—today.
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
