'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Toaster } from 'sonner';
import { 
  ArrowRight, 
  Sparkles, 
  Quote, 
  Compass, 
  Target, 
  ShieldCheck, 
  Heart, 
  Lightbulb, 
  Users, 
  Layers, 
  Globe2, 
  Award,
  BookOpen,
  Milestone
} from 'lucide-react';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactModal from '@/components/ContactModal';

const CORE_VALUES = [
  {
    icon: Lightbulb,
    title: "Innovation",
    desc: "Continuously embracing emerging technologies to solve complex industrial challenges."
  },
  {
    icon: Heart,
    title: "Customer Success",
    desc: "Our customers' success defines our success, guiding every architectural choice."
  },
  {
    icon: ShieldCheck,
    title: "Integrity",
    desc: "Building trusted relationships through transparency, zero-trust security, and ethical business practices."
  },
  {
    icon: Target,
    title: "Excellence",
    desc: "Delivering high-quality engineering and industrial automation technology solutions with absolute precision."
  },
  {
    icon: Users,
    title: "Collaboration",
    desc: "Working together with customers, technology leaders, universities, and partners to create lasting value."
  },
  {
    icon: Compass,
    title: "Sustainability",
    desc: "Helping industries operate more efficiently while supporting environmental responsibility and green computing."
  }
];

const INDUSTRIES_LIST = [
  "Industrial Manufacturing", "Automotive", "Life Sciences", "Semiconductor", 
  "Chemical Manufacturing", "Food & Beverages", "Oil & Gas", "Power & Utilities", 
  "Mining & Metals", "Water & Wastewater Management", "Consumer Packaged Goods", 
  "Data Centres", "EPC", "Agriculture"
];

const WHAT_WE_DO_LIST = [
  { name: "Industrial Automation", desc: "PLC/SCADA architectures and shop-floor hardware systems engineering." },
  { name: "OT / IT Integration", desc: "Bridging physical industrial assets with enterprise applications and cloud pipelines." },
  { name: "Industrial Data Platforms", desc: "Unified, scalable real-time analytics engines for industrial operations data." },
  { name: "Artificial Intelligence & Analytics", desc: "Predictive maintenance, operational intelligence, and yield optimization." },
  { name: "Industrial Internet of Things (IIoT)", desc: "Edge computing, sensor mesh deployments, and telemetry collection." },
  { name: "Digital Engineering", desc: "Custom industrial software design, API orchestration, and digital twins." },
  { name: "Enterprise Applications", desc: "Next-gen ERP, MES, and PLM implementation and modernization." },
  { name: "Cloud Infrastructure", desc: "Highly secure hybrid cloud environments for critical utilities and factories." },
  { name: "Cybersecurity", desc: "Zero-trust OT cybersecurity defense frameworks protecting critical operations." },
  { name: "Managed Services", desc: "24/7/365 global operations monitoring, site reliability, and system support." }
];

export default function AboutPage() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="bg-white text-slate-900 min-h-screen flex flex-col font-sans antialiased overflow-x-hidden">
      {/* Navigation */}
      <Header onContactClick={() => setIsContactOpen(true)} />

      <main className="flex-grow pt-20">
        
        {/* ━━━━━━━━━━━━━━━━━━━━━━ SECTION 1: HERO & OVERVIEW ━━━━━━━━━━━━━━━━━━━━━━ */}
        <section id="overview" className="relative bg-white py-20 lg:py-28 overflow-hidden border-b border-slate-100">
          <div className="absolute inset-0 pointer-events-none opacity-[0.02] z-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(15, 23, 42, 0.05) 1px, transparent 1px),
                linear-gradient(90deg, rgba(15, 23, 42, 0.05) 1px, transparent 1px)
              `,
              backgroundSize: '24px 24px',
            }}
          />
          <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Left Column: Typography */}
              <div className="lg:col-span-6 flex flex-col items-start text-left">
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200/60 mb-6 shadow-sm">
                  <Sparkles className="w-3.5 h-3.5 text-[#D4145A]" />
                  <span className="font-extrabold uppercase tracking-[0.2em] text-[#D4145A] font-sans text-[10px]">
                    About Us // Overview
                  </span>
                </div>
                
                <h1 className="font-extrabold text-[#0F172A] tracking-tight mb-6 font-headline leading-tight text-[36px] sm:text-[46px] lg:text-[54px]">
                  Engineering the Future of{' '}
                  <span className="bg-gradient-to-r from-[#D4145A] to-[#F15A24] bg-clip-text text-transparent">
                    Connected Industries
                  </span>
                </h1>
                
                <p className="text-slate-500 font-medium text-lg leading-relaxed mb-8">
                  DHGsoft is a global Industrial Digital Transformation company helping organizations connect operations, data, applications, and people to create intelligent, efficient, and sustainable enterprises.
                </p>
              </div>

              {/* Right Column: High-Res Cinematic Image Card */}
              <div className="lg:col-span-6 w-full flex justify-center lg:justify-end">
                <div className="relative w-full max-w-[550px] aspect-[4/3] rounded-[24px] overflow-hidden border border-slate-200/80 shadow-[0_20px_50px_rgba(15,23,42,0.08)] bg-slate-50">
                  <Image
                    src="/about_hero.png"
                    alt="DHGsoft Smart Manufacturing Telemetry"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ━━━━━━━━━━━━━━━━━━━━━━ SECTION 2: COMPANY OVERVIEW ━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="bg-slate-50 py-20 lg:py-24 border-b border-slate-200/60">
          <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              
              {/* Editorial Left Side */}
              <div className="lg:col-span-5 flex flex-col items-start text-left sticky lg:top-28">
                <span className="text-[11px] font-black uppercase tracking-[0.25em] text-[#D4145A] font-sans mb-3">
                  Our Focus
                </span>
                <h2 className="text-3xl font-extrabold text-[#0F172A] tracking-tight mb-6 font-headline leading-tight">
                  Accelerating Industrial Digital Transformation
                </h2>
                <div className="w-12 h-[3px] bg-gradient-to-r from-[#D4145A] to-[#F15A24] mb-8" />
                <p className="text-slate-600 font-medium leading-relaxed mb-6">
                  Founded with a vision to accelerate industrial innovation, DHGsoft delivers end-to-end digital engineering, industrial automation, OT/IT integration, AI, cloud, cybersecurity, and operational intelligence solutions.
                </p>
                <p className="text-slate-500 leading-relaxed">
                  We help manufacturers, utilities, infrastructure providers, and process industries modernize operations by connecting plant-floor assets with enterprise systems and cloud technologies. Our expertise spans the complete digital transformation lifecycle—from consulting and solution architecture to implementation, managed services, and continuous optimization.
                </p>
              </div>

              {/* Editorial Right Side: Detailed Narrative */}
              <div className="lg:col-span-7 flex flex-col gap-8 bg-white p-8 lg:p-12 rounded-[28px] border border-slate-200/60 shadow-sm text-left">
                <h3 className="text-xl font-bold text-[#0F172A]">
                  Delivering Measurable Outcomes
                </h3>
                <p className="text-slate-500 leading-relaxed">
                  Whether enabling a smart factory, implementing industrial data platforms, modernizing enterprise applications, or deploying AI-driven operational intelligence, DHGsoft delivers measurable business outcomes that improve productivity, reliability, safety, and sustainability.
                </p>
                <hr className="border-slate-100" />
                <h4 className="font-extrabold text-[#0F172A] text-sm uppercase tracking-wider mb-2">
                  Key Capabilities We Combine:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {WHAT_WE_DO_LIST.map((item, idx) => (
                    <div key={idx} className="flex gap-3 items-start border-l-2 border-slate-200 pl-4 py-1 hover:border-[#D4145A] transition-colors duration-300">
                      <div>
                        <h5 className="font-bold text-slate-800 text-sm">{item.name}</h5>
                        <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ━━━━━━━━━━━━━━━━━━━━━━ SECTION 3: WHAT WE DO VISUAL BREAK ━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="bg-white py-16 overflow-hidden border-b border-slate-100">
          <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
            <div className="relative w-full h-[320px] sm:h-[420px] rounded-[28px] overflow-hidden shadow-[0_20px_45px_rgba(15,23,42,0.1)] border border-slate-200/60">
              <Image
                src="/about_engineering.png"
                alt="DHGsoft Digital Twins Control Center"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-slate-950/30 z-10" />
              <div className="absolute inset-0 z-20 flex flex-col justify-end p-8 sm:p-12 text-left text-white max-w-2xl">
                <Quote className="w-10 h-10 fill-current text-[#F15A24] opacity-90 mb-4" />
                <h3 className="text-xl sm:text-2xl font-bold leading-relaxed">
                  &ldquo;Connecting operational intelligence on the plant floor with enterprise software pipelines to engineer tomorrow&apos;s digital enterprises.&rdquo;
                </h3>
              </div>
            </div>
          </div>
        </section>

        {/* ━━━━━━━━━━━━━━━━━━━━━━ SECTION 4: VISION, MISSION & CORE VALUES ━━━━━━━━━━━━━━━━━━━━━━ */}
        <section id="vision" className="bg-slate-50 py-20 lg:py-24 border-b border-slate-200/60">
          <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
              
              {/* Left Column: Vision & Mission Blocks */}
              <div className="lg:col-span-5 flex flex-col gap-6 justify-between">
                
                {/* Vision Box */}
                <div className="bg-white p-8 lg:p-10 rounded-[28px] border border-slate-200/60 shadow-sm flex flex-col items-start text-left flex-grow">
                  <div className="flex items-center gap-3 text-[#D4145A] font-bold text-xs uppercase tracking-wider mb-6">
                    <div className="w-8 h-8 rounded-lg bg-[#D4145A]/10 flex items-center justify-center">
                      <Target className="w-4 h-4 text-[#D4145A]" />
                    </div>
                    Our Vision
                  </div>
                  <h3 className="text-lg font-black text-slate-800 uppercase tracking-wider mb-3">Enable Connected Industries</h3>
                  <p className="text-slate-500 leading-relaxed font-medium">
                    To become a globally trusted leader in Industrial Digital Transformation by enabling connected, intelligent, and sustainable industries.
                  </p>
                </div>

                {/* Mission Box */}
                <div className="bg-white p-8 lg:p-10 rounded-[28px] border border-slate-200/60 shadow-sm flex flex-col items-start text-left flex-grow">
                  <div className="flex items-center gap-3 text-[#F15A24] font-bold text-xs uppercase tracking-wider mb-6">
                    <div className="w-8 h-8 rounded-lg bg-[#F15A24]/10 flex items-center justify-center">
                      <Compass className="w-4 h-4 text-[#F15A24]" />
                    </div>
                    Our Mission
                  </div>
                  <h3 className="text-lg font-black text-slate-800 uppercase tracking-wider mb-3">Empower Operational Excellence</h3>
                  <p className="text-slate-500 leading-relaxed font-medium">
                    To empower industries with innovative digital engineering solutions that connect operational technology, enterprise systems, and data intelligence to improve operational excellence and business performance.
                  </p>
                </div>

                {/* Purpose Statement */}
                <div className="bg-gradient-to-r from-slate-900 to-slate-950 p-6 rounded-[20px] text-white flex items-center justify-between border-l-4 border-[#D4145A] text-left">
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">Our Purpose</span>
                    <span className="text-base font-bold text-white tracking-wide">Connecting Intelligence to Transform Industry.</span>
                  </div>
                </div>

              </div>

              {/* Right Column: Core Values Grid */}
              <div className="lg:col-span-7 bg-white p-8 lg:p-12 rounded-[28px] border border-slate-200/60 shadow-sm flex flex-col items-start text-left">
                <span className="text-[11px] font-black uppercase tracking-[0.25em] text-[#D4145A] font-sans mb-3">
                  Philosophy
                </span>
                <h3 className="text-2xl font-extrabold text-[#0F172A] tracking-tight mb-8">Our Core Values</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full">
                  {CORE_VALUES.map((val, idx) => {
                    const Icon = val.icon;
                    return (
                      <div key={idx} className="flex flex-col items-start">
                        <div className="w-9 h-9 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center text-[#D4145A] mb-4 shadow-2xs">
                          <Icon className="w-4.5 h-4.5" />
                        </div>
                        <h4 className="font-extrabold text-slate-800 text-sm mb-2">{val.title}</h4>
                        <p className="text-xs text-slate-500 leading-relaxed">{val.desc}</p>
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ━━━━━━━━━━━━━━━━━━━━━━ SECTION 5: LEADERSHIP ━━━━━━━━━━━━━━━━━━━━━━ */}
        <section id="leadership" className="bg-white py-20 lg:py-24 border-b border-slate-100">
          <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Left Side: Photo Frame Mockup Layout */}
              <div className="lg:col-span-5 flex items-center justify-center relative pt-6 pb-12">
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
                  <svg className="w-[125%] h-[125%] absolute stroke-slate-200/50 fill-none" viewBox="0 0 100 100">
                    <path d="M10,40 Q30,10 70,30 T90,80" strokeWidth="0.3" />
                  </svg>
                </div>
                
                {/* Offset Card Layers */}
                <div className="absolute top-0 right-2 w-[85%] h-[80%] rounded-[28px] z-0 opacity-95 pointer-events-none transform translate-x-2 -translate-y-2"
                  style={{ background: 'linear-gradient(135deg, #D4145A 0%, #B90F4D 100%)' }}
                />
                <div className="absolute bottom-6 left-2 w-[85%] h-[80%] rounded-[28px] z-0 opacity-90 pointer-events-none transform -translate-x-2 translate-y-2"
                  style={{ background: 'linear-gradient(135deg, #F15A24 0%, #D4145A 100%)' }}
                />

                {/* Main Card with CEO */}
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
                      Executive Portrait
                    </span>
                  </div>
                </div>

                {/* Overlap Quote Slogan */}
                <div className="absolute bottom-1 left-[-20px] max-w-[280px] sm:max-w-[310px] bg-[#0A1120] border border-slate-800 rounded-[20px] p-5 shadow-[0_15px_30px_rgba(15,23,42,0.25)] z-30 flex flex-col items-start text-left">
                  <Quote className="w-6 h-6 fill-current text-[#D4145A] opacity-90 mb-2" />
                  <p className="text-[11px] leading-relaxed text-slate-300 font-medium font-sans">
                    Lead with innovation.<br />
                    Deliver with excellence.<br />
                    Grow through collaboration.<br />
                    <span className="font-bold text-[#F15A24] block mt-2 text-[10px] uppercase tracking-wider">Hitesh Patel // CEO</span>
                  </p>
                </div>
              </div>

              {/* Right Side: Philosophy Text & Leadership Description */}
              <div className="lg:col-span-7 flex flex-col items-start text-left">
                <span className="text-[11px] font-black uppercase tracking-[0.25em] text-[#D4145A] font-sans mb-3">
                  Leadership
                </span>
                <h2 className="text-3xl font-extrabold text-[#0F172A] tracking-tight mb-6 font-headline leading-tight">
                  Led by Engineers, Committed to Innovation
                </h2>
                <div className="w-12 h-[3px] bg-gradient-to-r from-[#D4145A] to-[#F15A24] mb-8" />
                
                <p className="text-slate-650 leading-relaxed font-sans font-medium mb-6">
                  DHGsoft is led by experienced professionals passionate about engineering innovation, industrial technology, and digital transformation.
                </p>
                <p className="text-slate-500 leading-relaxed mb-8">
                  Our leadership combines expertise in industrial automation, enterprise technology, cloud computing, AI, operational excellence, and business strategy to deliver long-term value for customers worldwide. We focus on fostering a culture of technical mastery, agile delivery, and cross-functional partnerships.
                </p>
                
                <div className="flex flex-col gap-4 border-t border-slate-100 pt-8 w-full">
                  <h4 className="text-sm font-extrabold text-[#0F172A] uppercase tracking-wider">Verify Executive Presence</h4>
                  <div className="flex items-center gap-3">
                    <a
                      href="https://linkedin.com/in/hitesh-patel-967087a0"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#0A66C2]/10 border border-[#0A66C2]/20 hover:bg-[#0A66C2] hover:border-[#0A66C2] text-[#0A66C2] hover:text-white transition-all duration-300 shadow-sm font-sans font-bold text-xs group"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                      <span>Connect with our CEO Hitesh Patel</span>
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ━━━━━━━━━━━━━━━━━━━━━━ SECTION 6: WHY DHGSOFT ━━━━━━━━━━━━━━━━━━━━━━ */}
        <section id="why-dhgsoft" className="bg-slate-50 py-20 lg:py-24 border-b border-slate-200/60">
          <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-[11px] font-black uppercase tracking-[0.25em] text-[#D4145A] font-sans mb-3 block">
                Connected Intelligence
              </span>
              <h2 className="text-3xl font-extrabold text-[#0F172A] tracking-tight mb-4 font-headline leading-tight">
                What Makes Us Different
              </h2>
              <p className="text-slate-500 leading-relaxed font-medium">
                We believe digital transformation is about connecting every aspect of industrial operations—from machines and people to enterprise applications and intelligent analytics.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              
              <div className="bg-white p-6 rounded-[24px] border border-slate-200/60 shadow-xs flex flex-col justify-between text-left">
                <div>
                  <div className="w-10 h-10 rounded-lg bg-rose-50 flex items-center justify-center text-[#D4145A] mb-6">
                    <Layers className="w-5 h-5" />
                  </div>
                  <h3 className="font-extrabold text-slate-800 text-sm mb-3">End-to-End Digital Partner</h3>
                  <ul className="text-xs text-slate-500 space-y-2 mt-4">
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#D4145A]" /> Consulting</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#D4145A]" /> Engineering</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#D4145A]" /> Implementation</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#D4145A]" /> Managed Services</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#D4145A]" /> Continuous Improvement</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white p-6 rounded-[24px] border border-slate-200/60 shadow-xs flex flex-col justify-between text-left">
                <div>
                  <div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center text-[#F15A24] mb-6">
                    <Compass className="w-5 h-5" />
                  </div>
                  <h3 className="font-extrabold text-slate-800 text-sm mb-3">Industrial Domain Knowledge</h3>
                  <p className="text-xs text-slate-500 leading-relaxed mt-4">
                    Deep operational understanding of process industries, cleanrooms, smart factories, utilities, and high-speed assembly.
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-[24px] border border-slate-200/60 shadow-xs flex flex-col justify-between text-left">
                <div>
                  <div className="w-10 h-10 rounded-lg bg-rose-50 flex items-center justify-center text-[#D4145A] mb-6">
                    <Target className="w-5 h-5" />
                  </div>
                  <h3 className="font-extrabold text-slate-800 text-sm mb-3">Technology Excellence</h3>
                  <p className="text-xs text-slate-500 leading-relaxed mt-4">
                    Leveraging industry-leading architectures to build scalable, technology-agnostic data platforms and secure integrations.
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-[24px] border border-slate-200/60 shadow-xs flex flex-col justify-between text-left">
                <div>
                  <div className="w-10 h-10 rounded-lg bg-[#0A66C2]/5 flex items-center justify-center text-[#0A66C2] mb-6">
                    <Globe2 className="w-5 h-5" />
                  </div>
                  <h3 className="font-extrabold text-slate-800 text-sm mb-3">Global Delivery</h3>
                  <p className="text-xs text-slate-500 leading-relaxed mt-4">
                    Flexible onsite, offshore, and hybrid delivery models supported by experienced engineering teams working 24/7/365.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ━━━━━━━━━━━━━━━━━━━━━━ SECTION 7: PARTNER ECOSYSTEM ━━━━━━━━━━━━━━━━━━━━━━ */}
        <section id="partners" className="bg-white py-20 lg:py-24 border-b border-slate-100">
          <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Left Column: Context */}
              <div className="lg:col-span-5 flex flex-col items-start text-left">
                <span className="text-[11px] font-black uppercase tracking-[0.25em] text-[#D4145A] font-sans mb-3">
                  Ecosystem
                </span>
                <h2 className="text-3xl font-extrabold text-[#0F172A] tracking-tight mb-6 font-headline leading-tight">
                  Partner Ecosystem
                </h2>
                <div className="w-12 h-[3px] bg-gradient-to-r from-[#D4145A] to-[#F15A24] mb-8" />
                <p className="text-slate-650 font-bold leading-relaxed mb-4">
                  Innovation happens through collaboration.
                </p>
                <p className="text-slate-500 leading-relaxed mb-6">
                  DHGsoft works closely with customers, technology providers, universities, research institutions, system integrators, and industry experts to deliver future-ready industrial systems.
                </p>
                
                <div className="flex flex-col gap-4 w-full text-xs font-semibold text-slate-600 mt-4 border-l border-slate-100 pl-6">
                  <div>
                    <span className="text-[#D4145A] font-extrabold uppercase tracking-wide block mb-1">Technology Partners</span>
                    SCADA, hardware, cloud infrastructure, IIoT telemetry, and databases.
                  </div>
                  <div className="mt-2">
                    <span className="text-[#F15A24] font-extrabold uppercase tracking-wide block mb-1">Academic Partnerships</span>
                    Supporting research, internships, and university laboratory engineering.
                  </div>
                </div>
              </div>

              {/* Right Column: Photo & Logos collage */}
              <div className="lg:col-span-7 flex flex-col gap-10">
                {/* Blurred visual backdrop */}
                <div className="relative w-full h-[240px] rounded-[20px] overflow-hidden border border-slate-200/60 shadow-xs">
                  <Image
                    src="/about_collaboration.png"
                    alt="DHGsoft Academic & Technology Collaboration"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-slate-900/10 z-10" />
                </div>
                
                {/* Logo grid */}
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-6 items-center border-t border-slate-100 pt-8">
                  {['aws', 'microsoft-azure', 'schneider-electric', 'aveva', 'phoenix-contact', 'databricks'].map((logo, idx) => (
                    <div key={idx} className="relative h-9 flex items-center justify-center filter grayscale opacity-55 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
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

        {/* ━━━━━━━━━━━━━━━━━━━━━━ SECTION 8: CORPORATE RESPONSIBILITY ━━━━━━━━━━━━━━━━━━━━━━ */}
        <section id="responsibility" className="bg-slate-50 py-20 lg:py-24 border-b border-slate-200/60">
          <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
            <div className="text-left max-w-3xl mb-16">
              <span className="text-[11px] font-black uppercase tracking-[0.25em] text-[#D4145A] font-sans mb-3 block">
                Commitment
              </span>
              <h2 className="text-3xl font-extrabold text-[#0F172A] tracking-tight mb-4 font-headline leading-tight">
                Corporate Responsibility & ESG
              </h2>
              <div className="w-12 h-[3px] bg-gradient-to-r from-[#D4145A] to-[#F15A24]" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              
              <div className="bg-white p-6 rounded-[20px] border border-slate-200/60 text-left flex flex-col justify-between hover:border-[#D4145A] transition-colors duration-300">
                <div>
                  <h3 className="font-extrabold text-slate-800 text-sm mb-3">Sustainability</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Helping organizations improve operational efficiency while reducing energy consumption and environmental impact.
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-[20px] border border-slate-200/60 text-left flex flex-col justify-between hover:border-[#D4145A] transition-colors duration-300">
                <div>
                  <h3 className="font-extrabold text-slate-800 text-sm mb-3">ESG</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Supporting Environmental, Social, and Governance initiatives through digital technologies and intelligent operations.
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-[20px] border border-slate-200/60 text-left flex flex-col justify-between hover:border-[#D4145A] transition-colors duration-300">
                <div>
                  <h3 className="font-extrabold text-slate-800 text-sm mb-3">Ethics & Compliance</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Integrity and ethical business practices guide every customer engagement and vendor partnership.
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-[20px] border border-slate-200/60 text-left flex flex-col justify-between hover:border-[#D4145A] transition-colors duration-300">
                <div>
                  <h3 className="font-extrabold text-slate-800 text-sm mb-3">Information Security</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Protecting customer data through secure engineering practices and internationally accepted security principles.
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-[20px] border border-slate-200/60 text-left flex flex-col justify-between hover:border-[#D4145A] transition-colors duration-300">
                <div>
                  <h3 className="font-extrabold text-slate-800 text-sm mb-3">Quality</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Committed to delivering reliable, scalable, and high-quality engineering solutions verified by standard benchmarks.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ━━━━━━━━━━━━━━━━━━━━━━ SECTION 9: RECOGNITION ━━━━━━━━━━━━━━━━━━━━━━ */}
        <section id="recognition" className="bg-white py-20 lg:py-24 border-b border-slate-100">
          <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              <div className="lg:col-span-5 text-left">
                <span className="text-[11px] font-black uppercase tracking-[0.25em] text-[#D4145A] font-sans mb-3 block">
                  Achievements
                </span>
                <h2 className="text-3xl font-extrabold text-[#0F172A] tracking-tight mb-6 font-headline leading-tight">
                  Recognition & Milestones
                </h2>
                <div className="w-12 h-[3px] bg-gradient-to-r from-[#D4145A] to-[#F15A24] mb-8" />
                <p className="text-slate-650 font-medium leading-relaxed mb-6">
                  DHGsoft measures success by the value created for customers.
                </p>
                <p className="text-slate-500 leading-relaxed mb-6">
                  Our dedication to digital engineering excellence and industrial systems modernization has been recognized globally by clients, technology platforms, and engineering forums.
                </p>
              </div>

              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                <div className="p-6 bg-slate-50 border border-slate-100 rounded-2xl flex gap-4 items-start text-left">
                  <div className="w-10 h-10 rounded-lg bg-[#D4145A]/10 flex items-center justify-center text-[#D4145A] shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-slate-800 text-sm mb-1">Customer Success Stories</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">Recognized for delivering zero-downtime OT migrations and MES deployments.</p>
                  </div>
                </div>

                <div className="p-6 bg-slate-50 border border-slate-100 rounded-2xl flex gap-4 items-start text-left">
                  <div className="w-10 h-10 rounded-lg bg-[#F15A24]/10 flex items-center justify-center text-[#F15A24] shrink-0">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-slate-800 text-sm mb-1">Engineering Certifications</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">Certified engineering teams in cybersecurity, SCADA, and cloud architectures.</p>
                  </div>
                </div>

                <div className="p-6 bg-slate-50 border border-slate-100 rounded-2xl flex gap-4 items-start text-left">
                  <div className="w-10 h-10 rounded-lg bg-[#D4145A]/10 flex items-center justify-center text-[#D4145A] shrink-0">
                    <Milestone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-slate-800 text-sm mb-1">Project Milestones</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">More than 200 successful digital transformation projects executed globally.</p>
                  </div>
                </div>

                <div className="p-6 bg-slate-50 border border-slate-100 rounded-2xl flex gap-4 items-start text-left">
                  <div className="w-10 h-10 rounded-lg bg-[#F15A24]/10 flex items-center justify-center text-[#F15A24] shrink-0">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-slate-800 text-sm mb-1">Industry Recognition</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">Featured as a key innovator in industrial digital twins and IoT implementations.</p>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* ━━━━━━━━━━━━━━━━━━━━━━ SECTION 10: GLOBAL PRESENCE ━━━━━━━━━━━━━━━━━━━━━━ */}
        <section id="global" className="bg-slate-50 py-20 lg:py-24 border-b border-slate-200/60">
          <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              
              {/* Left Column */}
              <div className="lg:col-span-5 flex flex-col items-start text-left lg:sticky lg:top-28">
                <span className="text-[11px] font-black uppercase tracking-[0.25em] text-[#D4145A] font-sans mb-3">
                  Global Reach
                </span>
                <h2 className="text-3xl font-extrabold text-[#0F172A] tracking-tight mb-6 font-headline leading-tight">
                  Global Presence & Delivery
                </h2>
                <div className="w-12 h-[3px] bg-gradient-to-r from-[#D4145A] to-[#F15A24] mb-8" />
                <p className="text-slate-650 leading-relaxed font-sans font-medium mb-6">
                  DHGsoft serves customers through a flexible global delivery model.
                </p>
                <p className="text-slate-500 leading-relaxed mb-6">
                  We continue investing in innovation, talent, strategic alliances, and emerging technologies to shape the future of connected industries and intelligent enterprises.
                </p>
              </div>

              {/* Right Column: Model and Locations */}
              <div className="lg:col-span-7 flex flex-col gap-6">
                
                {/* Delivery Model */}
                <div className="bg-white p-8 rounded-[24px] border border-slate-200/60 shadow-sm text-left">
                  <h3 className="font-extrabold text-[#0F172A] text-sm uppercase tracking-wider mb-6 flex items-center gap-2">
                    <Globe2 className="w-4 h-4 text-[#D4145A]" />
                    Delivery Model
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
                    {['Onsite Services', 'Offshore Engineering', 'Remote Operations', '24×7 Support', 'Global Project Delivery'].map((mod, idx) => (
                      <div key={idx} className="p-3 bg-slate-50 border border-slate-100 rounded-xl text-center">
                        <span className="text-xs font-bold text-slate-700 leading-tight block">{mod}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Locations Grid */}
                <div className="bg-white p-8 rounded-[24px] border border-slate-200/60 shadow-sm text-left">
                  <h3 className="font-extrabold text-[#0F172A] text-sm uppercase tracking-wider mb-6 flex items-center gap-2">
                    <Compass className="w-4 h-4 text-[#F15A24]" />
                    Infrastructure Network
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                    <div>
                      <h4 className="font-bold text-[#D4145A] text-xs uppercase tracking-wide mb-1">Corporate Office</h4>
                      <p className="text-2xs text-slate-500">Global Executive Headquarters</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-[#F15A24] text-xs uppercase tracking-wide mb-1">Regional Offices</h4>
                      <p className="text-2xs text-slate-500">Client Integration & Account Hubs</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-[#D4145A] text-xs uppercase tracking-wide mb-1">Delivery Centers</h4>
                      <p className="text-2xs text-slate-500">Offshore & Engineering Command Hubs</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-[#F15A24] text-xs uppercase tracking-wide mb-1">Partner Network</h4>
                      <p className="text-2xs text-slate-500">Local Support & SCADA System Integrators</p>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* ━━━━━━━━━━━━━━━━━━━━━━ SECTION 11: MINIMAL CTA ━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="bg-white py-20 lg:py-24 border-b border-slate-100">
          <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 text-center">
            <div className="max-w-3xl mx-auto flex flex-col items-center">
              <span className="text-[11px] font-black uppercase tracking-[0.25em] text-[#D4145A] font-sans mb-3">
                Join the Future
              </span>
              <h2 className="text-4xl font-extrabold text-[#0F172A] tracking-tight mb-6 font-headline leading-tight">
                Let&apos;s Build tomorrow&apos;s industries—today.
              </h2>
              <p className="text-slate-500 leading-relaxed font-medium mb-8 max-w-xl">
                Ready to accelerate your digital transformation? Get in touch with our solutions architects to discuss automation, integration, cloud, and industrial analytics.
              </p>
              
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

      {/* Sales Consultation Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        showToast={() => { }}
      />

      <Toaster position="top-right" richColors />
    </div>
  );
}
