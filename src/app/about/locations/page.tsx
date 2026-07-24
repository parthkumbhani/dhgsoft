"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CheckCircle, Clock, Cpu, Globe, Network, Users, Target, Zap, ShieldCheck, MapPin } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactModal from '@/components/ContactModal';

export default function AboutLocationsPage() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  // Grouped industries for structured display
  const industryGroups = [
    {
      category: "Process Industries",
      items: ["Oil & Gas", "Chemical Manufacturing", "Water & Wastewater", "Power & Utilities", "Mining & Metals"]
    },
    {
      category: "Discrete & Hybrid",
      items: ["Industrial Manufacturing", "Automotive", "Semiconductor", "Consumer Packaged Goods", "Food & Beverage"]
    },
    {
      category: "Specialized Infrastructure",
      items: ["Life Sciences", "Data Centres", "EPC", "Agriculture"]
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground antialiased font-sans flex flex-col selection:bg-brand selection:text-white">
      <Header onContactClick={() => setIsContactOpen(true)} />

      <main className="flex-grow">
        {/* ============ 1. PREMIUM HERO (Full-bleed Background Image & Desktop Height) ============ */}
        <section className="relative min-h-screen flex items-center pt-24 pb-16 text-left overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image 
              src="/images/about/locations-hero.jpg" 
              alt="Global Presence banner" 
              fill 
              priority 
              className="object-cover" 
              sizes="100vw" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/65 to-ink/30" />
            <div className="absolute inset-0 bg-gradient-to-r from-ink/40 via-transparent to-transparent" />
          </div>

          <div className="relative z-10 w-full max-w-site mx-auto px-gutter md:px-gutter-md">
            <nav className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/80 text-xs mb-7">
              <Link href="/about" className="hover:text-brand-hot transition-colors">About</Link>
              <span className="opacity-50">/</span>
              <span className="text-white font-medium">Global Presence</span>
            </nav>
            
            <div className="text-brand-hot text-[11px] font-extrabold uppercase tracking-widest font-mono">Global Presence</div>
            
            <h1 className="text-white mt-4 max-w-[900px] font-extrabold tracking-tight leading-[1.05] text-headline-xl">
              Delivering Engineering Excellence Across Global Industries
            </h1>
            
            <p className="text-slate-300 text-body-md mt-6 max-w-[760px] leading-relaxed font-medium">
              Industrial digital transformation knows no borders. DHGsoft supports organizations through a blended global delivery model that combines onsite local collaboration with secure international delivery centers.
            </p>

            {/* Floating Hero Accent Badges */}
            <div className="flex flex-wrap gap-3 mt-8">
              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-semibold">
                <CheckCircle className="w-4 h-4 text-brand-hot" />
                <span>Global Delivery Model</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-semibold">
                <CheckCircle className="w-4 h-4 text-brand-hot" />
                <span>Ahmedabad & Pune Tech Hubs</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-semibold">
                <CheckCircle className="w-4 h-4 text-brand-hot" />
                <span>24/7 Systems Support</span>
              </div>
            </div>
          </div>
        </section>
        <div className="w-full h-px bg-line/60" />

        {/* ============ 2. OVERVIEW (Global Delivery Foundation Grid - High Density & Zero Blank Space) ============ */}
        <section className="relative overflow-hidden bg-mesh-glow-light bg-dot-matrix py-16 md:py-24 border-b border-line">
          {/* Background Watermark Typography */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 text-[150px] font-black text-slate-100/70 select-none pointer-events-none z-0 font-mono tracking-tighter hidden lg:block">
            PRESENCE
          </div>

          <div className="max-w-site mx-auto px-gutter md:px-gutter-md w-full relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
              
              {/* Left Column: Text, Metrics & 4-Card Grid (lg:col-span-7) */}
              <div className="lg:col-span-7 text-left flex flex-col justify-between space-y-6">
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-brand/15 text-brand flex items-center justify-center shrink-0 shadow-sm">
                      <Globe className="w-5 h-5" />
                    </div>
                    <span className="text-brand text-xs font-bold uppercase tracking-widest font-mono">Overview & Model</span>
                  </div>
                  
                  <h3 className="text-txt-strong tracking-tight font-extrabold leading-[1.1] text-3xl md:text-4xl lg:text-5xl" style={{ fontSize: 'clamp(2rem, 1.6rem + 1vw, 2.5rem)' }}>
                    Delivering engineering expertise wherever operations exist.
                  </h3>
                  
                  <p className="text-body-sm text-txt-muted leading-relaxed">
                    DHGsoft combines onsite collaboration with secure offshore delivery capabilities, remote diagnostics, and 24/7 operational support. This flexible delivery model allows manufacturing companies to scale projects quickly while accessing specialized industrial engineering expertise.
                  </p>
                </div>

                {/* 3 High-Impact Key Metric Chips */}
                <div className="flex flex-wrap gap-2.5 pt-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-line shadow-xs text-xs font-bold text-slate-800">
                    <Zap className="w-3.5 h-3.5 text-brand" />
                    <span>24/7 Hybrid Delivery</span>
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-line shadow-xs text-xs font-bold text-slate-800">
                    <CheckCircle className="w-3.5 h-3.5 text-brand" />
                    <span>100% Secure Remote Access</span>
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-line shadow-xs text-xs font-bold text-slate-800">
                    <Target className="w-3.5 h-3.5 text-brand-hot" />
                    <span>Onsite/Offshore Blended Teams</span>
                  </div>
                </div>

                {/* 4-Card Delivery Grid with Takeaway Pills */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-4 border-t border-line/80">
                  <div className="bg-white/90 border border-line rounded-xl p-4 shadow-sm hover:border-brand/40 transition-all flex flex-col justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-brand/10 text-brand flex items-center justify-center shrink-0">
                        <Users className="w-4 h-4" />
                      </div>
                      <span className="text-txt-strong font-bold text-xs">Onsite Engineering</span>
                    </div>
                    <span className="text-[11px] text-txt-muted mt-2 block">Working directly at your facilities for commissioning and testing.</span>
                    <div className="mt-3 pt-2 border-t border-line/60 flex flex-wrap gap-1">
                      <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-semibold">FAT/SAT Commissioning</span>
                      <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-semibold">Local Teams</span>
                    </div>
                  </div>

                  <div className="bg-white/90 border border-line rounded-xl p-4 shadow-sm hover:border-brand/40 transition-all flex flex-col justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-brand/10 text-brand flex items-center justify-center shrink-0">
                        <Cpu className="w-4 h-4" />
                      </div>
                      <span className="text-txt-strong font-bold text-xs">Offshore Engineering</span>
                    </div>
                    <span className="text-[11px] text-txt-muted mt-2 block">Dedicated design center resources to accelerate delivery and scale.</span>
                    <div className="mt-3 pt-2 border-t border-line/60 flex flex-wrap gap-1">
                      <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-semibold">PLC/SCADA Templates</span>
                      <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-semibold">MES Pipelines</span>
                    </div>
                  </div>

                  <div className="bg-white/90 border border-line rounded-xl p-4 shadow-sm hover:border-brand/40 transition-all flex flex-col justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-brand/10 text-brand flex items-center justify-center shrink-0">
                        <Network className="w-4 h-4" />
                      </div>
                      <span className="text-txt-strong font-bold text-xs">Secure Remote Ops</span>
                    </div>
                    <span className="text-[11px] text-txt-muted mt-2 block">Safe remote PLC program modifications and troubleshooting access.</span>
                    <div className="mt-3 pt-2 border-t border-line/60 flex flex-wrap gap-1">
                      <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-semibold">Zero-Trust VPN</span>
                      <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-semibold">Encrypted Access</span>
                    </div>
                  </div>

                  <div className="bg-white/90 border border-line rounded-xl p-4 shadow-sm hover:border-brand/40 transition-all flex flex-col justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-brand/10 text-brand flex items-center justify-center shrink-0">
                        <Clock className="w-4 h-4" />
                      </div>
                      <span className="text-txt-strong font-bold text-xs">24/7 Managed Services</span>
                    </div>
                    <span className="text-[11px] text-txt-muted mt-2 block">Ongoing operational monitoring, telemetry diagnostics, and SLAs.</span>
                    <div className="mt-3 pt-2 border-t border-line/60 flex flex-wrap gap-1">
                      <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-semibold">24/7 Diagnostics</span>
                      <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-semibold">SLA Monitoring</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Right Column: Stacked Interactive Showcase Frame (lg:col-span-5) */}
              <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
                
                {/* Photo Card with Floating Badges */}
                <div className="relative rounded-[24px] overflow-hidden border border-line shadow-lg aspect-[16/11] w-full group">
                  <Image src="/images/about/locations-delivery.jpg" alt="Locations overview photography" fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(min-width:1024px) 35vw, 100vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
                  
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md border border-line px-3 py-1 rounded-lg text-[10px] font-bold text-brand shadow-xs">
                    Blended Model
                  </div>
                  <div className="absolute bottom-3 right-3 bg-slate-900/90 text-white backdrop-blur-md border border-slate-700 px-3 py-1 rounded-lg text-[10px] font-bold shadow-xs">
                    Secure Support
                  </div>
                </div>

                {/* Glassmorphic Value Impact Card (Fills bottom space) */}
                <div className="bg-white border border-line rounded-[24px] p-5 shadow-md space-y-3 text-left">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-brand uppercase tracking-wider">Why Leaders Trust Our Delivery Model</span>
                    <span className="px-2 py-0.5 rounded-md bg-brand/10 text-brand text-[10px] font-bold font-mono">ISO & ISA Standards</span>
                  </div>

                  <div className="space-y-2 pt-1 text-xs text-txt-strong">
                    <div className="flex items-center gap-2.5">
                      <CheckCircle className="w-4 h-4 text-brand shrink-0" />
                      <span>Dedicated Engineering Operations Centers</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <CheckCircle className="w-4 h-4 text-brand shrink-0" />
                      <span>Strict Data Isolation & VPN Access Infrastructure</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <CheckCircle className="w-4 h-4 text-brand shrink-0" />
                      <span>Flexible Resource Scaling to Match Plant Demands</span>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </section>
        <div className="w-full h-px bg-line/60" />

        {/* ============ 3. DELIVERY CENTERS (2-Column Split Feature Grid - Zero Blank Space) ============ */}
        <section className="relative overflow-hidden bg-mesh-glow-light bg-tech-grid py-16 md:py-24 border-b border-line">
          {/* Background Watermark Typography */}
          <div className="absolute left-0 bottom-6 text-[130px] font-black text-slate-200/50 select-none pointer-events-none z-0 font-mono tracking-tighter hidden lg:block">
            DELIVERY
          </div>

          <div className="max-w-site mx-auto px-gutter md:px-gutter-md w-full relative z-10">
            
            {/* Centered Header */}
            <div className="text-center max-w-[720px] mx-auto mb-12">
              <span className="text-brand text-xs font-bold uppercase tracking-widest block font-mono">Offices & Labs</span>
              <h3 className="text-txt-strong mt-2 tracking-tight font-extrabold text-3xl md:text-4xl">Our Technical Delivery Centers</h3>
              <p className="text-body-sm text-txt-muted mt-2 leading-relaxed">Equipped with advanced control laboratory environments, hardware testbeds, and dedicated engineering pools.</p>
              <div className="w-12 h-1 bg-brand rounded-full mt-4 mx-auto" />
            </div>

            {/* 2-Column Split Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              
              {/* Left Column: Office Photo Card with Glassmorphic Strategic Focus (lg:col-span-5) */}
              <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
                <div className="relative rounded-[24px] overflow-hidden border border-line shadow-lg aspect-[16/11] w-full group">
                  <Image src="/images/about/locations-offices.jpg" alt="Locations offices banner" fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(min-width:1024px) 35vw, 100vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
                  
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md border border-line px-3 py-1 rounded-lg text-[10px] font-bold text-brand shadow-xs">
                    Engineering Centers
                  </div>
                  <div className="absolute bottom-3 right-3 bg-slate-900/90 text-white backdrop-blur-md border border-slate-700 px-3 py-1 rounded-lg text-[10px] font-bold shadow-xs">
                    Scalable Operations
                  </div>
                </div>

                {/* Glassmorphic Delivery Focus Card */}
                <div className="bg-white border border-line rounded-[24px] p-5 shadow-md space-y-3 text-left">
                  <span className="text-xs font-mono font-bold text-brand uppercase tracking-wider block">Blended SLA Governance</span>
                  <p className="text-xs text-txt-muted leading-relaxed">
                    By operating secure delivery lines from Ahmedabad and Pune, DHGsoft accelerates plant PLC program modifications, MES integrations, and telemetry diagnostic routines.
                  </p>
                </div>
              </div>

              {/* Right Column: Ahmedabad & Pune Delivery Hubs (lg:col-span-7) */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Ahmedabad Hub */}
                <div className="group bg-white border border-line rounded-2xl p-6 shadow-xs hover:border-brand hover:shadow-xl transition-all duration-300 text-left flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-[3px] bg-brand scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center shrink-0 mb-4 shadow-xs">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <h4 className="text-txt-strong font-bold text-lg leading-snug">Ahmedabad Office</h4>
                    <p className="text-xs text-txt-muted mt-2 leading-relaxed">Core engineering delivery headquarters. Specializes in PLC logic, SCADA templates development, HMI layout designs, and functional safety verification.</p>
                  </div>

                  <div className="pt-4 border-t border-line/80 mt-5 flex flex-wrap gap-1">
                    <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-semibold">PLC & SCADA Lab</span>
                    <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-semibold">HMI Engineering</span>
                  </div>
                </div>

                {/* Pune Hub */}
                <div className="group bg-white border border-line rounded-2xl p-6 shadow-xs hover:border-brand hover:shadow-xl transition-all duration-300 text-left flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-[3px] bg-brand scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center shrink-0 mb-4 shadow-xs">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <h4 className="text-txt-strong font-bold text-lg leading-snug">Pune Office</h4>
                    <p className="text-xs text-txt-muted mt-2 leading-relaxed">Enterprise software and system integration delivery hub. Specializes in MES pipeline connectivity, database analytics, and industrial cloud architectures.</p>
                  </div>

                  <div className="pt-4 border-t border-line/80 mt-5 flex flex-wrap gap-1">
                    <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-semibold">MES & Cloud Hub</span>
                    <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-semibold">Data Lakehouses</span>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </section>
        <div className="w-full h-px bg-line/60" />

        {/* ============ 4. INDUSTRIES WE SUPPORT (High-Density Grouped Showcase - Zero Blank Space) ============ */}
        <section className="relative overflow-hidden bg-mesh-glow-light bg-tech-grid py-16 md:py-24 border-b border-line">
          {/* Background Watermark Typography */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 text-[150px] font-black text-slate-100/70 select-none pointer-events-none z-0 font-mono tracking-tighter hidden lg:block">
            INDUSTRIES
          </div>

          <div className="max-w-site mx-auto px-gutter md:px-gutter-md w-full relative z-10">
            
            {/* Centered Header */}
            <div className="text-center max-w-[720px] mx-auto mb-12">
              <span className="text-brand text-xs font-bold uppercase tracking-widest block font-mono">Domain Expertise</span>
              <h3 className="text-txt-strong mt-2 tracking-tight font-extrabold text-3xl md:text-4xl">Industries We Support Globally</h3>
              <p className="text-body-sm text-txt-muted mt-2 leading-relaxed">We deliver specialized OT engineering and IT integration standards tailored to distinct vertical domains.</p>
              <div className="w-12 h-1 bg-brand rounded-full mt-4 mx-auto" />
            </div>

            {/* 3-Column Grouped Industries Showcase */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1100px] mx-auto">
              {industryGroups.map((group, gIdx) => (
                <div key={gIdx} className="bg-white border border-line rounded-2xl p-5 shadow-xs flex flex-col justify-between hover:border-brand/40 transition-all">
                  <div className="space-y-4">
                    <span className="text-xs font-mono font-bold text-brand uppercase tracking-wider block border-b border-line pb-2">
                      {group.category}
                    </span>
                    <div className="flex flex-col gap-2">
                      {group.items.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2.5 text-xs text-txt-strong font-medium">
                          <div className="w-1.5 h-1.5 rounded-full bg-brand-hot shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="pt-4 mt-6 border-t border-line/60">
                    <span className="text-[10px] text-txt-muted font-semibold block uppercase">Compliance standard</span>
                    <span className="text-[11px] text-slate-800 font-bold block mt-0.5">ISA-95 compliant delivery</span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>
        <div className="w-full h-px bg-line/60" />

        {/* ============ 5. OUR COMMITMENT (Clean Executive Light Theme) ============ */}
        <section className="relative overflow-hidden bg-mesh-glow-light bg-dot-matrix py-16 md:py-24 border-b border-line">
          {/* Background Watermark Typography */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[180px] font-black text-slate-200/60 select-none pointer-events-none z-0 font-mono tracking-tighter hidden lg:block">
            COMMITMENT
          </div>

          <div className="max-w-site mx-auto px-gutter md:px-gutter-md w-full relative z-10">
            <div className="max-w-[960px] mx-auto text-center space-y-8">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand/10 border border-brand/20 text-brand text-xs font-mono font-bold uppercase tracking-widest">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Our Corporate Commitment</span>
              </div>

              <h3 className="text-txt-strong tracking-tight font-extrabold leading-snug text-3xl md:text-4xl lg:text-5xl" style={{ fontSize: 'clamp(2rem, 1.5rem + 1.2vw, 2.75rem)' }}>
                Digital transformation succeeds through absolute collaboration.
              </h3>

              <p className="text-txt-muted text-body-sm leading-relaxed max-w-[800px] mx-auto font-medium">
                DHGsoft works closely with clients, hardware vendors, and technology developers to deliver secure, interoperable systems that meet modern engineering guidelines.
              </p>

              {/* 3 Guarantee Badges (White Glassmorphic Cards) */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 text-left">
                <div className="bg-white border border-line rounded-2xl p-4 flex items-center gap-3 shadow-xs hover:border-brand/40 transition-all">
                  <CheckCircle className="w-5 h-5 text-brand shrink-0" />
                  <span className="text-xs font-bold text-slate-800">Blended Delivery SLA Models</span>
                </div>
                <div className="bg-white border border-line rounded-2xl p-4 flex items-center gap-3 shadow-xs hover:border-brand/40 transition-all">
                  <CheckCircle className="w-5 h-5 text-brand shrink-0" />
                  <span className="text-xs font-bold text-slate-800">24/7 Critical System Support</span>
                </div>
                <div className="bg-white border border-line rounded-2xl p-4 flex items-center gap-3 shadow-xs hover:border-brand/40 transition-all">
                  <CheckCircle className="w-5 h-5 text-brand shrink-0" />
                  <span className="text-xs font-bold text-slate-800">Continuous Technical Training</span>
                </div>
              </div>

            </div>
          </div>
        </section>
        <div className="w-full h-px bg-line/60" />

        {/* ============ 6. CLOSING STATEMENT (Cinematic Glow & Dual CTA Buttons) ============ */}
        <section className="relative overflow-hidden text-center min-h-[85vh] md:min-h-[90vh] flex items-center py-20 md:py-28 bg-mesh-glow-dark text-white" id="closing">
          <div className="absolute inset-0 z-0 pointer-events-none">
            <Image
              src="/images/about/locations-offices.jpg"
              alt="DHGsoft global delivery locations closing"
              fill
              className="object-cover opacity-40"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
            <div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] rounded-full opacity-[0.20]"
              style={{
                background: 'radial-gradient(circle, rgb(180 18 63) 0%, transparent 70%)',
                filter: 'blur(100px)',
              }}
            />
          </div>
          <div className="relative z-10 max-w-site mx-auto px-gutter md:px-gutter-md w-full">
            <div className="max-w-[840px] mx-auto space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-hot/15 border border-brand-hot/30 text-brand-hot text-xs font-mono font-bold uppercase tracking-widest mx-auto">
                <span>Closing Statement</span>
              </div>

              <h2 className="text-white mt-4 font-black tracking-tight leading-tight text-headline-xl">
                Engineering Beyond Borders
              </h2>

              <p className="text-slate-300 text-body-md leading-relaxed max-w-[720px] mx-auto font-medium">
                Wherever your facilities operate, DHGsoft remains committed to delivering trusted OT/IT systems integration capabilities, connected engineering data loops, and reliable technical telemetry.
              </p>

              {/* Feature Pill Tags */}
              <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
                <span className="px-3 py-1 rounded-full bg-white/10 text-white text-xs font-medium border border-white/10">Global Delivery</span>
                <span className="px-3 py-1 rounded-full bg-white/10 text-white text-xs font-medium border border-white/10">Secure Telemetry</span>
                <span className="px-3 py-1 rounded-full bg-white/10 text-white text-xs font-medium border border-white/10">Blended SLA Support</span>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-4 pt-6">
                <button
                  onClick={() => setIsContactOpen(true)}
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-brand font-semibold hover:-translate-y-0.5 hover:shadow-xl transition-all cursor-pointer text-base"
                >
                  Start a Conversation <ArrowRight className="w-4 h-4" />
                </button>
                <Link href="/about" className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/30 text-white font-semibold hover:bg-white/10 transition-colors text-base">
                  Back to About Overview
                </Link>
              </div>

            </div>
          </div>
        </section>
      </main>

      <Footer />

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        showToast={() => {}}
      />
    </div>
  );
}
