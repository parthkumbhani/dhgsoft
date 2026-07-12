// src/app/industries/industrial-manufacturing/page.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  ArrowRight, 
  Cpu, 
  Settings, 
  Activity, 
  Layers, 
  ShieldAlert, 
  Clock, 
  AlertTriangle, 
  Database, 
  Zap, 
  UserCheck,
  TrendingUp,
  FileText,
  HelpCircle,
  Globe2,
  Award,
  Link2,
  Settings2,
  CheckCircle,
  BarChart4,
  Factory,
  Radio,
  Wifi,
  Gauge,
  Bot,
  Network,
  Monitor,
  Tablet,
  Sliders,
  RefreshCw,
  Beaker,
  Wrench,
  Layout,
  Cloud,
  Brain,
  LayoutGrid,
  PieChart,
  BarChart2
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";

export default function ConsumerPackagedGoodsPage() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground antialiased font-sans flex flex-col selection:bg-brand selection:text-white">
      {/* Premium Navigation Header */}
      <Header onContactClick={() => setIsContactOpen(true)} />

      <main className="flex-grow">
        
        {/* ==========================================
            1. HERO SECTION (Cinematic Manufacturing Backdrop)
            ========================================== */}
        <Section variant="ink" size="hero" containerSize="wide" className="relative min-h-screen flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0 pointer-events-none">
            <Image
              src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80"
              alt="Intelligent Smart Factory with automated machinery"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center opacity-95"
            />
            {/* Lighter overlays to make image clear, text remains readable without blocking the photo */}
            <div className="absolute inset-0 bg-slate-950/0" />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/20 via-slate-950/5 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/3 to-transparent" />
            
            {/* Soft glowing ambient brand lights */}
            <div 
              className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full opacity-[0.08]"
              style={{
                background: 'radial-gradient(circle, rgb(180 18 63) 0%, transparent 70%)',
                filter: 'blur(100px)',
              }}
            />
          </div>

          <Container className="relative z-10 w-full text-left">
            <div className="max-w-4xl space-y-6">
              
              {/* Eyebrow tag */}
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 backdrop-blur-md text-[#E10088] mb-8">
                <span className="relative flex w-1.5 h-1.5">
                  <span className="absolute inset-0 rounded-full bg-[#E10088] animate-ping opacity-60" />
                  <span className="relative rounded-full bg-[#E10088] w-1.5 h-1.5" />
                </span>
                <span className="text-[11px] font-extrabold uppercase tracking-widest font-sans">
                  Consumer Packaged Goods
                </span>
              </div>

              {/* H1 Title with Text Shadow */}
              <h1 className="text-white text-headline-xl sm:text-[3.75rem] lg:text-[4.75rem] font-black tracking-tight leading-[1.05]">
                Engineering the
                <br />
                <span className="text-gradient-brand">Intelligent Factory</span> of Tomorrow
              </h1>

              {/* Subheading with Text Shadow */}
              <p className="text-slate-200 max-w-2xl leading-relaxed text-body-md font-semibold">
                Adapt to changing demand with flexible packaging operations, real-time recipe execution, and end-to-end supply chain integration.
              </p>

              {/* CTAs */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => setIsContactOpen(true)}
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-brand text-white font-semibold hover:bg-brand-deep hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand/25 transition-all duration-300 cursor-pointer"
                >
                  Talk to an Expert
                  <ArrowRight className="w-4 h-4" />
                </button>
                
                <button
                  onClick={() => scrollToSection("solutions")}
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-white/20 text-white font-semibold hover:bg-white/10 hover:border-white/40 transition-all duration-300 cursor-pointer"
                >
                  Explore Solutions
                </button>
              </div>

            </div>
          </Container>
        </Section>

        {/* ==========================================
            2. INDUSTRY OVERVIEW SECTION
            ========================================== */}
        <Section variant="white" size="default" id="overview">
          <Container>
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              
              {/* Left Column — Context, Trends & Journey */}
              <div className="lg:col-span-7 space-y-8 text-left">
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="h-px w-10 bg-brand" />
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                      Industry Overview
                    </span>
                  </div>
                  <h2 className="text-txt-strong tracking-tight font-black leading-tight">
                    Accelerating Digital Transformation in <span className="text-gradient-brand">Consumer Packaged Goods</span>
                  </h2>
                  <p className="text-body-md text-txt-muted leading-relaxed">
                    Consumer Packaged Goods (CPG) brands manage high-velocity, high-mix production lines where success depends on packaging OEE, quick SKU changeovers, and packaging material scrap reduction. Connecting shop floors to enterprise planning yields maximum agility.
                  </p>
                </div>

                {/* Current Trends */}
                <div className="space-y-4">
                  <h4 className="text-txt-strong text-sm font-bold uppercase tracking-widest text-foreground/70">
                    Current Trends
                  </h4>
                  <ul className="space-y-3">
                    {[
                      "High-mix SKU packaging automation",
                      "Dynamic MES recipe enforcement",
                      "Packaging line scrap and defect analytics",
                      "Machine learning for product weight fills",
                      "Supply chain warehouse slotting integration"
].map((trend, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-body-sm text-txt-muted">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand mt-2 shrink-0" />
                        <span>{trend}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Journey Card */}
                <div className="card glass-card rounded-2xl p-6 bg-mist border border-line">
                  <h5 className="text-txt-strong font-extrabold mb-2">Batch Mixing to Package Out</h5>
                  <p className="text-body-sm text-txt-muted leading-relaxed">
                    DHGsoft partners with CPG leaders to deploy recipe-driven line setups, monitor packaging machine OEE, and integrate logistics systems for zero-inventory waste.
                  </p>
                </div>

              </div>

              {/* Right Column — Smart Stats Grid & Priorities */}
              <div className="lg:col-span-5 space-y-6">
                
                {/* 2x2 Stats Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="card bg-mist border border-line rounded-2xl p-6 text-left shadow-sm hover:border-brand transition-colors">
                    <span className="text-3xl font-black text-brand block mb-2">$2.5T</span>
                    <span className="text-xs text-txt-muted font-medium leading-snug">Global consumer goods market</span>
                  </div>
                  <div className="card bg-mist border border-line rounded-2xl p-6 text-left shadow-sm hover:border-brand transition-colors">
                    <span className="text-3xl font-black text-brand block mb-2">35%</span>
                    <span className="text-xs text-txt-muted font-medium leading-snug">Faster line changeovers</span>
                  </div>
                  <div className="card bg-mist border border-line rounded-2xl p-6 text-left shadow-sm hover:border-brand transition-colors">
                    <span className="text-3xl font-black text-brand block mb-2">25%</span>
                    <span className="text-xs text-txt-muted font-medium leading-snug">Reduction in packaging scrap</span>
                  </div>
                  <div className="card bg-mist border border-line rounded-2xl p-6 text-left shadow-sm hover:border-brand transition-colors">
                    <span className="text-3xl font-black text-brand block mb-2">30%</span>
                    <span className="text-xs text-txt-muted font-medium leading-snug">Increase in warehouse slotting efficiency</span>
                  </div>
                </div>

                {/* Market Drivers Card */}
                <div className="card bg-white border border-line rounded-2xl p-6 text-left hover:border-brand/40 transition-colors">
                  <h5 className="text-txt-strong font-bold mb-3">Market Drivers</h5>
                  <div className="grid grid-cols-2 gap-3">
                    {["SKU velocity", "Material scrap", "Packaging speed", "Supply integration"].map((driver, i) => (
                      <div key={i} className="flex items-center gap-2 text-body-sm text-txt-muted">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand shrink-0" />
                        <span>{driver}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Priorities Card */}
                <div className="card bg-white border border-line rounded-2xl p-6 text-left hover:border-brand/40 transition-colors">
                  <h5 className="text-txt-strong font-bold mb-3">Key Priorities</h5>
                  <div className="grid grid-cols-2 gap-3">
                    {["OEE optimization", "Recipe enforcement", "Weight consistency", "Flexible tooling"].map((priority, i) => (
                      <div key={i} className="flex items-center gap-2 text-body-sm text-txt-muted">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand shrink-0" />
                        <span>{priority}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

            </div>
          </Container>
        </Section>

        {/* ==========================================
            3. CHALLENGES SECTION (8-Card Responsive Grid)
            ========================================== */}
        <Section variant="mist" size="default">
          <Container>
            
            <div className="text-center mb-16 space-y-4">
              <div className="flex items-center justify-center gap-3">
                <div className="h-px w-10 bg-brand" />
                <span className="text-brand text-label-bold uppercase tracking-[0.2em]">Industry Challenges</span>
                <div className="h-px w-10 bg-brand" />
              </div>
              <h2 className="text-txt-strong font-black tracking-tight leading-tight">
                The Challenges Holding <span className="text-gradient-brand">Consumer Packaged Goods Operations Back</span>
              </h2>
              <p className="text-body-md text-txt-muted max-w-2xl mx-auto leading-relaxed">
                Industrial manufacturers face a complex web of operational, technological, and organizational challenges on their path to digital transformation.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              <div className="card bg-white border border-line rounded-2xl p-6 flex flex-col gap-4 text-left shadow-sm hover:border-brand transition-colors">
                <div className="w-10 h-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center shrink-0">
                  <Settings className="w-5 h-5" />
                </div>
                <h5 className="font-extrabold text-txt-strong leading-tight">SKU Proliferation</h5>
                <p className="text-body-sm text-txt-muted leading-relaxed">
                  Frequent changeovers for different packaging formats.
                </p>
              </div>
              <div className="card bg-white border border-line rounded-2xl p-6 flex flex-col gap-4 text-left shadow-sm hover:border-brand transition-colors">
                <div className="w-10 h-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center shrink-0">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <h5 className="font-extrabold text-txt-strong leading-tight">Packaging Scrap</h5>
                <p className="text-body-sm text-txt-muted leading-relaxed">
                  High material scrap rates during line startup and speed changes.
                </p>
              </div>
              <div className="card bg-white border border-line rounded-2xl p-6 flex flex-col gap-4 text-left shadow-sm hover:border-brand transition-colors">
                <div className="w-10 h-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center shrink-0">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <h5 className="font-extrabold text-txt-strong leading-tight">Labeling Audits</h5>
                <p className="text-body-sm text-txt-muted leading-relaxed">
                  Incorrect allergen labeling causing massive product recall risks.
                </p>
              </div>
              <div className="card bg-white border border-line rounded-2xl p-6 flex flex-col gap-4 text-left shadow-sm hover:border-brand transition-colors">
                <div className="w-10 h-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center shrink-0">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <h5 className="font-extrabold text-txt-strong leading-tight">Weight Variability</h5>
                <p className="text-body-sm text-txt-muted leading-relaxed">
                  Product overfill (giveaway) cutting directly into product margins.
                </p>
              </div>
              <div className="card bg-white border border-line rounded-2xl p-6 flex flex-col gap-4 text-left shadow-sm hover:border-brand transition-colors">
                <div className="w-10 h-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center shrink-0">
                  <Layers className="w-5 h-5" />
                </div>
                <h5 className="font-extrabold text-txt-strong leading-tight">Line Bottlenecks</h5>
                <p className="text-body-sm text-txt-muted leading-relaxed">
                  Unsynchronized packers and palettizers slowing down line OEE.
                </p>
              </div>
              <div className="card bg-white border border-line rounded-2xl p-6 flex flex-col gap-4 text-left shadow-sm hover:border-brand transition-colors">
                <div className="w-10 h-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center shrink-0">
                  <UserCheck className="w-5 h-5" />
                </div>
                <h5 className="font-extrabold text-txt-strong leading-tight">Worker Onboarding</h5>
                <p className="text-body-sm text-txt-muted leading-relaxed">
                  High plant floor turnover leading to training and safety gaps.
                </p>
              </div>
              <div className="card bg-white border border-line rounded-2xl p-6 flex flex-col gap-4 text-left shadow-sm hover:border-brand transition-colors">
                <div className="w-10 h-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <h5 className="font-extrabold text-txt-strong leading-tight">Unplanned Stops</h5>
                <p className="text-body-sm text-txt-muted leading-relaxed">
                  Micro-stops on cartoners and labelers aggregating into hours.
                </p>
              </div>
              <div className="card bg-white border border-line rounded-2xl p-6 flex flex-col gap-4 text-left shadow-sm hover:border-brand transition-colors">
                <div className="w-10 h-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center shrink-0">
                  <Database className="w-5 h-5" />
                </div>
                <h5 className="font-extrabold text-txt-strong leading-tight">Logistics Sync</h5>
                <p className="text-body-sm text-txt-muted leading-relaxed">
                  Disconnected plant warehouse and shipping terminal scheduling.
                </p>
              </div>
            </div>

          </Container>
        </Section>

        {/* ==========================================
            4. TRANSFORMATION PRIORITIES TIMELINE SECTION
            ========================================== */}
        <Section variant="white" size="default">
          <Container>
            
            <div className="text-center mb-16 space-y-4">
              <div className="flex items-center justify-center gap-3">
                <div className="h-px w-10 bg-brand" />
                <span className="text-brand text-label-bold uppercase tracking-[0.2em]">Transformation Journey</span>
                <div className="h-px w-10 bg-brand" />
              </div>
              <h2 className="text-txt-strong font-black tracking-tight leading-tight">
                Digital Transformation <span className="text-gradient-brand">Priorities</span>
              </h2>
            </div>

            {/* Desktop Timeline */}
            <div className="hidden lg:flex items-start gap-0">
              {[
                { step: "01", label: "Automate", desc: "Automate repetitive processes and manual tasks." },
                { step: "02", label: "Connect", desc: "Connect machines, systems, and people." },
                { step: "03", label: "Collect Data", desc: "Capture operational data from every source." },
                { step: "04", label: "Analyze", desc: "Turn raw data into actionable insights." },
                { step: "05", label: "Optimize", desc: "Continuously improve processes and performance." },
                { step: "06", label: "Predict", desc: "Anticipate issues before they impact operations." },
                { step: "07", label: "Transform", desc: "Achieve enterprise-wide digital transformation." }
              ].map((item, idx, arr) => (
                <React.Fragment key={idx}>
                  <div className="flex flex-col items-center text-center flex-1 min-w-0">
                    <div className="w-14 h-14 rounded-full bg-brand/10 border-2 border-brand flex items-center justify-center mb-4 relative z-10 select-none">
                      <span className="text-brand font-black text-sm">{item.step}</span>
                    </div>
                    <h5 className="font-extrabold text-txt-strong mb-2 leading-tight">{item.label}</h5>
                    <p className="text-xs text-txt-muted leading-relaxed px-2">{item.desc}</p>
                  </div>
                  {idx < arr.length - 1 && (
                    <div className="h-0.5 bg-line flex-grow self-start mt-7 shrink-0 min-w-[20px]" />
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Mobile Timeline */}
            <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { step: "01", label: "Automate", desc: "Automate repetitive processes and manual tasks." },
                { step: "02", label: "Connect", desc: "Connect machines, systems, and people." },
                { step: "03", label: "Collect Data", desc: "Capture operational data from every source." },
                { step: "04", label: "Analyze", desc: "Turn raw data into actionable insights." },
                { step: "05", label: "Optimize", desc: "Continuously improve processes and performance." },
                { step: "06", label: "Predict", desc: "Anticipate issues before they impact operations." },
                { step: "07", label: "Transform", desc: "Achieve enterprise-wide digital transformation." }
              ].map((item, idx) => (
                <div key={idx} className="card bg-mist border border-line rounded-xl p-4 flex gap-4 text-left items-start">
                  <div className="w-10 h-10 rounded-full bg-brand/10 border border-brand flex items-center justify-center shrink-0">
                    <span className="text-brand font-black text-xs">{item.step}</span>
                  </div>
                  <div>
                    <h5 className="font-extrabold text-txt-strong leading-tight mb-1">{item.label}</h5>
                    <p className="text-xs text-txt-muted leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </Container>
        </Section>

        {/* ==========================================
            5. SOLUTIONS SECTION
            ========================================== */}
        <Section variant="mist" size="default" id="solutions">
          <Container>
            
            <div className="text-left space-y-4 mb-12">
              <div className="flex items-center gap-3">
                <div className="h-px w-10 bg-brand" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                  DHGsoft Solutions
                </span>
              </div>
              <h2 className="text-txt-strong tracking-tight font-black leading-tight">
                End-to-End <span className="text-gradient-brand">Digital Engineering Solutions</span>
              </h2>
              <p className="text-body-md text-txt-muted max-w-2xl">
                A comprehensive portfolio of capabilities to address every dimension of your industrial digital transformation.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {[
                { title: "Industrial Digital Transformation", desc: "End-to-end transformation strategy and execution tailored to your industrial context." },
                { title: "OT/IT Integration", desc: "Seamless connectivity between operational technology and IT systems." },
                { title: "Industrial Data Platforms", desc: "Unified data infrastructure for collecting, contextualizing, and analyzing industrial operations." },
                { title: "Industrial AI", desc: "Machine learning and AI applications purpose-built for industrial environments." },
                { title: "IIoT", desc: "Industrial Internet of Things connectivity, sensor integration, and edge platforms." },
                { title: "Digital Engineering", desc: "Digital twin, simulation, and virtual commissioning for faster deployment." },
                { title: "Enterprise Applications", desc: "ERP, MES, LIMS, and enterprise system integration for seamless operations." },
                { title: "Cloud", desc: "Industrial cloud platforms, hybrid architectures, and cloud migration services." },
                { title: "Cybersecurity", desc: "OT-centric security posture, firewalls, and network access policies." },
                { title: "Managed Services", desc: "24/7 telemetry monitoring, support, and managed operations for digital systems." }
              ].map((sol, i) => (
                <div key={i} className="card bg-white border border-line rounded-2xl p-5 flex flex-col justify-between text-left shadow-sm hover:border-brand transition-colors group cursor-pointer">
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center shrink-0">
                      <Layers className="w-5 h-5" />
                    </div>
                    <h5 className="font-extrabold text-txt-strong leading-snug group-hover:text-brand transition-colors text-sm">
                      {sol.title}
                    </h5>
                    <p className="text-xs text-txt-muted leading-relaxed">
                      {sol.desc}
                    </p>
                  </div>
                  <div className="pt-6">
                    <button 
                      onClick={() => setIsContactOpen(true)}
                      className="text-xs font-extrabold text-brand uppercase tracking-wider flex items-center gap-1 group/btn hover:text-brand-deep cursor-pointer"
                    >
                      <span>Learn more</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

          </Container>
        </Section>

        {/* ==========================================
            6. USE CASES SECTION (With Images, Tags & Custom Badges)
            ========================================== */}
        <Section variant="white" size="default">
          <Container>
            
            <div className="text-center mb-16 space-y-4">
              <div className="flex items-center justify-center gap-3">
                <div className="h-px w-10 bg-brand" />
                <span className="text-brand text-label-bold uppercase tracking-[0.2em]">Use Cases</span>
                <div className="h-px w-10 bg-brand" />
              </div>
              <h2 className="text-txt-strong font-black tracking-tight leading-tight">
                Industry <span className="text-gradient-brand">Use Cases</span>
              </h2>
              <p className="text-body-md text-txt-muted max-w-xl mx-auto leading-relaxed">
                Proven solutions delivering measurable outcomes for industrial manufacturers worldwide.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                {
                                "tag": "MES",
                                "val": "35% faster SKU switch",
                                "title": "Recipe Line Changeover",
                                "desc": "Digital changeover checklists and recipe parameters pushed to PLCs.",
                                "img": "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?auto=format&fit=crop&w=600&q=80"
                },
                {
                                "tag": "AI",
                                "val": "Giveaway cut by 40%",
                                "title": "Fill Weight Optimization",
                                "desc": "Feedback loop tuning filler nozzles based on checkweigher data.",
                                "img": "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=600&q=80"
                },
                {
                                "tag": "Vision AI",
                                "val": "Zero label defects",
                                "title": "Label Vision Inspection",
                                "desc": "100% automated label matching and placement quality checking.",
                                "img": "https://images.unsplash.com/photo-1565034946487-077786996e27?auto=format&fit=crop&w=600&q=80"
                },
                {
                                "tag": "Analytics",
                                "val": "Micro-stops resolved",
                                "title": "Packaging OEE Analytics",
                                "desc": "Identifying root cause of frequent micro-stops on cartoners.",
                                "img": "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80"
                },
                {
                                "tag": "IIoT",
                                "val": "Scrap reduced",
                                "title": "Scrap Tracking Analytics",
                                "desc": "Sensor-based monitoring of packaging material scrap at start/stop cycles.",
                                "img": "https://images.unsplash.com/photo-1549476464-37392f717541?auto=format&fit=crop&w=600&q=80"
                },
                {
                                "tag": "Twin",
                                "val": "Simulated flow",
                                "title": "Line Flow Digital Twin",
                                "desc": "Simulation models identifying accumulator bottle-necks during speed changes.",
                                "img": "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80"
                },
                {
                                "tag": "Database",
                                "val": "30% faster slotting",
                                "title": "Warehouse Logistics Sync",
                                "desc": "Live pallet tracking synced with shipping bay assignments.",
                                "img": "https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?auto=format&fit=crop&w=600&q=80"
                },
                {
                                "tag": "Predictive",
                                "val": "Zero conveyor stops",
                                "title": "Predictive Motor Health",
                                "desc": "Sensor-based health tracking on high-duty sorters and conveyors.",
                                "img": "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=600&q=80"
                }
].map((item, idx) => (
                <div key={idx} className="card group bg-white border border-line rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 text-left">
                  {/* Card Image */}
                  <div className="relative w-full h-[180px] overflow-hidden">
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 25vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />
                    
                    {/* Tag badge in card */}
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-slate-950/80 text-[10px] font-extrabold uppercase tracking-widest text-brand-hot">
                      {item.tag}
                    </span>
                  </div>

                  {/* Info */}
                  <div className="p-5 flex flex-col gap-2">
                    <span className="text-xs font-black text-brand uppercase tracking-wider">
                      {item.val}
                    </span>
                    <h5 className="font-extrabold text-txt-strong text-base tracking-tight leading-snug group-hover:text-brand transition-colors">
                      {item.title}
                    </h5>
                    <p className="text-xs text-txt-muted leading-relaxed line-clamp-3">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </Container>
        </Section>

        {/* ==========================================
            7. REFERENCE ARCHITECTURE SECTION (8-Layer stack matching screenshot)
            ========================================== */}
        <Section variant="ink" size="default">
          <Container>
            
            <div className="text-center mb-16 space-y-4">
              <div className="flex items-center justify-center gap-3">
                <div className="h-px w-10 bg-brand" />
                <span className="text-xs font-semibold uppercase tracking-[0.4em] text-brand-hot">Technology Ecosystem</span>
                <div className="h-px w-10 bg-brand" />
              </div>
              <h2 className="text-white font-black tracking-tight leading-tight">
                Reference <span className="text-gradient-brand">Architecture</span>
              </h2>
              <p className="text-slate-300 max-w-xl mx-auto leading-relaxed text-body-sm">
                A proven technology stack connecting plant floor to enterprise, built on industry-leading platforms.
              </p>
            </div>

            {/* Custom Embedded CSS for flow animations */}
            <style dangerouslySetInnerHTML={{__html: `
              @keyframes dash {
                to {
                  stroke-dashoffset: -20;
                }
              }
              .animate-flow-left {
                stroke-dasharray: 6, 6;
                animation: dash 1.5s linear infinite;
              }
              .animate-flow-right {
                stroke-dasharray: 6, 6;
                animation: dash 1.2s linear infinite;
              }
              @keyframes pulse-ring {
                0% { transform: scale(0.95); opacity: 0.5; }
                50% { transform: scale(1.1); opacity: 0.8; }
                100% { transform: scale(0.95); opacity: 0.5; }
              }
              .pulse-glow {
                animation: pulse-ring 3s ease-in-out infinite;
              }
              @keyframes move-packet-right {
                0% { left: 0%; opacity: 0; }
                15% { opacity: 1; }
                85% { opacity: 1; }
                100% { left: 100%; opacity: 0; }
              }
              @keyframes move-packet-left {
                0% { right: 0%; opacity: 0; }
                15% { opacity: 1; }
                85% { opacity: 1; }
                100% { right: 100%; opacity: 0; }
              }
              @keyframes move-packet-down {
                0% { top: 0%; opacity: 0; }
                15% { opacity: 1; }
                85% { opacity: 1; }
                100% { top: 100%; opacity: 0; }
              }
              @keyframes move-packet-up {
                0% { bottom: 0%; opacity: 0; }
                15% { opacity: 1; }
                85% { opacity: 1; }
                100% { bottom: 100%; opacity: 0; }
              }
              .animate-packet-right {
                animation: move-packet-right 2.4s cubic-bezier(0.4, 0, 0.2, 1) infinite;
              }
              .animate-packet-left {
                animation: move-packet-left 2.4s cubic-bezier(0.4, 0, 0.2, 1) infinite;
              }
              .animate-packet-down {
                animation: move-packet-down 2.4s cubic-bezier(0.4, 0, 0.2, 1) infinite;
              }
              .animate-packet-up {
                animation: move-packet-up 2.4s cubic-bezier(0.4, 0, 0.2, 1) infinite;
              }
            `}} />
            
            {/* Architecture Diagram Grid */}
            <div className="max-w-7xl mx-auto mb-16 relative">

              {/* 1. DESKTOP VIEW (Pixel-Perfect 1200x650 fluid aspect-ratio mockup) */}
              <div className="hidden lg:block relative w-full aspect-[1200/650] bg-[#070a13] border border-slate-800/60 rounded-3xl p-6 overflow-hidden select-none">

                {/* ═══════════════════════════════════════════════════
                    SVG ARROW FLOW DIAGRAM — z-index 0 (underlay)
                    viewBox: 0 0 1200 650
                    Card coordinate map:
                      Left col right edge        x = 260
                      Plant Floor center-Y       y ≈ 170
                      Control Layer center-Y     y ≈ 480
                      Data Collection: x1=310  x2=420  cy=190
                      Control Data:    x1=310  x2=420  cy=460
                      Edge Gateway:    x1=450  x2=560  cy=160
                      Telemetry:       x1=450  x2=560  top=260 bot=340
                      Protocol Conv:   x1=450  x2=560  cy=460
                      Platform:        x1=590  x2=920
                      Right col left             x = 950
                      Business Intel center-Y    y ≈ 115
                      Enterprise Sys center-Y    y ≈ 335
                      Cloud Platform center-Y    y ≈ 520
                ═══════════════════════════════════════════════════ */}
                <svg viewBox="0 0 1200 650" className="absolute inset-0 w-full h-full pointer-events-none z-0" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <marker id="ah-red"    markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,1 L0,7 L8,4 z" fill="#EF4444"/></marker>
                    <marker id="ah-blue"   markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,1 L0,7 L8,4 z" fill="#3B82F6"/></marker>
                    <marker id="ah-green"  markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,1 L0,7 L8,4 z" fill="#22C55E"/></marker>
                    <marker id="ah-pink"   markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,1 L0,7 L8,4 z" fill="#E11D5C"/></marker>
                    <marker id="ah-pink-r" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,1 L0,7 L8,4 z" fill="#E11D5C"/></marker>
                    <marker id="ah-yellow" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,1 L0,7 L8,4 z" fill="#F5B301"/></marker>
                    <marker id="ah-yel-r"  markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,1 L0,7 L8,4 z" fill="#F5B301"/></marker>
                  </defs>

                  {/* ─────────────────────────────────────────────────────────
                      STATIC DIM PATHS (always visible, show route)
                  ───────────────────────────────────────────────────────── */}

                  {/* RED chain: Plant Floor → Data Collection → Edge Gateway → Platform */}
                  <path d="M260,170 H285 V190 H310"       stroke="#EF4444" strokeWidth="1.5" strokeOpacity="0.25" fill="none" markerEnd="url(#ah-red)"/>
                  <path d="M420,190 H435 V160 H450"       stroke="#EF4444" strokeWidth="1.5" strokeOpacity="0.25" fill="none" markerEnd="url(#ah-red)"/>
                  <path d="M560,160 H590"                 stroke="#EF4444" strokeWidth="1.5" strokeOpacity="0.25" fill="none" markerEnd="url(#ah-red)"/>

                  {/* BLUE chain: Control Layer → Control Data → Protocol Conv → Platform */}
                  <path d="M260,480 H285 V460 H310"       stroke="#3B82F6" strokeWidth="1.5" strokeOpacity="0.25" fill="none" markerEnd="url(#ah-blue)"/>
                  <path d="M420,460 H450"                 stroke="#3B82F6" strokeWidth="1.5" strokeOpacity="0.25" fill="none" markerEnd="url(#ah-blue)"/>
                  <path d="M560,460 H590"                 stroke="#3B82F6" strokeWidth="1.5" strokeOpacity="0.25" fill="none" markerEnd="url(#ah-blue)"/>

                  {/* GREEN: Telemetry verticals */}
                  <path d="M505,260 V160"                 stroke="#22C55E" strokeWidth="1.5" strokeOpacity="0.25" fill="none" markerEnd="url(#ah-green)"/>
                  <path d="M505,340 V460"                 stroke="#22C55E" strokeWidth="1.5" strokeOpacity="0.25" fill="none" markerEnd="url(#ah-green)"/>
                  {/* GREEN: Telemetry right → Platform */}
                  <path d="M560,300 H590"                 stroke="#22C55E" strokeWidth="1.5" strokeOpacity="0.25" fill="none" markerEnd="url(#ah-green)"/>
                  {/* GREEN: Platform → Cloud */}
                  <path d="M920,520 H950"                 stroke="#22C55E" strokeWidth="1.5" strokeOpacity="0.25" fill="none" markerEnd="url(#ah-green)"/>

                  {/* PINK: Platform ↔ Business Intel */}
                  <path d="M920,110 H950"                 stroke="#E11D5C" strokeWidth="1.8" strokeOpacity="0.25" fill="none" markerEnd="url(#ah-pink)"/>
                  <path d="M950,125 H920"                 stroke="#E11D5C" strokeWidth="1.8" strokeOpacity="0.25" fill="none" markerEnd="url(#ah-pink-r)"/>

                  {/* YELLOW: Platform ↔ Enterprise Systems */}
                  <path d="M920,330 H950"                 stroke="#F5B301" strokeWidth="1.8" strokeOpacity="0.25" fill="none" markerEnd="url(#ah-yellow)"/>
                  <path d="M950,345 H920"                 stroke="#F5B301" strokeWidth="1.8" strokeOpacity="0.25" fill="none" markerEnd="url(#ah-yel-r)"/>

                  {/* GREEN DASHED: Control Return bottom */}
                  <path d="M590,570 H150 C133,570 133,555 133,530" stroke="#22C55E" strokeWidth="1.3" strokeOpacity="0.2" strokeDasharray="6 4" fill="none"/>
                  <path d="M590,590 H150 C130,590 130,575 130,550" stroke="#22C55E" strokeWidth="1.3" strokeOpacity="0.15" strokeDasharray="6 4" fill="none"/>

                  {/* ─────────────────────────────────────────────────────────
                      ANIMATED BRIGHT OVERLAY (dashes flow forward along path)
                      Rule: from="0" to="-pathLen" → flows FORWARD (same direction as arrow)
                  ───────────────────────────────────────────────────────── */}

                  {/* RED: Plant Floor → Data Collection  (elbow, len≈85) */}
                  <path d="M260,170 H285 V190 H310"
                    stroke="#EF4444" strokeWidth="2.2" strokeOpacity="0.95" fill="none"
                    strokeDasharray="16 69" markerEnd="url(#ah-red)">
                    <animate attributeName="stroke-dashoffset" from="0" to="-85" dur="1.4s" repeatCount="indefinite"/>
                  </path>

                  {/* RED: Data Collection → Edge Gateway  (elbow, len≈75) */}
                  <path d="M420,190 H435 V160 H450"
                    stroke="#EF4444" strokeWidth="2.2" strokeOpacity="0.95" fill="none"
                    strokeDasharray="14 61" markerEnd="url(#ah-red)">
                    <animate attributeName="stroke-dashoffset" from="0" to="-75" dur="1.2s" repeatCount="indefinite" begin="0.3s"/>
                  </path>

                  {/* RED: Edge Gateway → Platform  (straight, len=30) */}
                  <path d="M560,160 H590"
                    stroke="#EF4444" strokeWidth="2.2" strokeOpacity="0.95" fill="none"
                    strokeDasharray="10 20" markerEnd="url(#ah-red)">
                    <animate attributeName="stroke-dashoffset" from="0" to="-30" dur="0.9s" repeatCount="indefinite" begin="0.6s"/>
                  </path>

                  {/* BLUE: Control Layer → Control Data  (elbow, len≈65) */}
                  <path d="M260,480 H285 V460 H310"
                    stroke="#3B82F6" strokeWidth="2.2" strokeOpacity="0.95" fill="none"
                    strokeDasharray="13 52" markerEnd="url(#ah-blue)">
                    <animate attributeName="stroke-dashoffset" from="0" to="-65" dur="1.3s" repeatCount="indefinite" begin="0.15s"/>
                  </path>

                  {/* BLUE: Control Data → Protocol Conv  (straight, len=30) */}
                  <path d="M420,460 H450"
                    stroke="#3B82F6" strokeWidth="2.2" strokeOpacity="0.95" fill="none"
                    strokeDasharray="10 20" markerEnd="url(#ah-blue)">
                    <animate attributeName="stroke-dashoffset" from="0" to="-30" dur="0.9s" repeatCount="indefinite" begin="0.5s"/>
                  </path>

                  {/* BLUE: Protocol Conv → Platform  (straight, len=30) */}
                  <path d="M560,460 H590"
                    stroke="#3B82F6" strokeWidth="2.2" strokeOpacity="0.95" fill="none"
                    strokeDasharray="10 20" markerEnd="url(#ah-blue)">
                    <animate attributeName="stroke-dashoffset" from="0" to="-30" dur="0.9s" repeatCount="indefinite" begin="0.8s"/>
                  </path>

                  {/* GREEN: Telemetry UP → Edge Gateway  (len=100) */}
                  <path d="M505,260 V160"
                    stroke="#22C55E" strokeWidth="2.2" strokeOpacity="0.95" fill="none"
                    strokeDasharray="16 84" markerEnd="url(#ah-green)">
                    <animate attributeName="stroke-dashoffset" from="0" to="-100" dur="1.3s" repeatCount="indefinite" begin="0s"/>
                  </path>

                  {/* GREEN: Telemetry → Platform center  (len=30) */}
                  <path d="M560,300 H590"
                    stroke="#22C55E" strokeWidth="2.2" strokeOpacity="0.95" fill="none"
                    strokeDasharray="10 20" markerEnd="url(#ah-green)">
                    <animate attributeName="stroke-dashoffset" from="0" to="-30" dur="0.9s" repeatCount="indefinite" begin="0.4s"/>
                  </path>

                  {/* GREEN: Telemetry DOWN → Protocol Conv  (len=100) */}
                  <path d="M505,340 V460"
                    stroke="#22C55E" strokeWidth="2.2" strokeOpacity="0.95" fill="none"
                    strokeDasharray="16 84" markerEnd="url(#ah-green)">
                    <animate attributeName="stroke-dashoffset" from="0" to="-100" dur="1.3s" repeatCount="indefinite" begin="0.2s"/>
                  </path>

                  {/* GREEN: Platform → Cloud Platform  (len=30) */}
                  <path d="M920,520 H950"
                    stroke="#22C55E" strokeWidth="2.2" strokeOpacity="0.95" fill="none"
                    strokeDasharray="10 20" markerEnd="url(#ah-green)">
                    <animate attributeName="stroke-dashoffset" from="0" to="-30" dur="0.9s" repeatCount="indefinite" begin="0.7s"/>
                  </path>

                  {/* PINK →: Platform → Business Intel  (len=30) */}
                  <path d="M920,110 H950"
                    stroke="#E11D5C" strokeWidth="2.4" strokeOpacity="1" fill="none"
                    strokeDasharray="10 20" markerEnd="url(#ah-pink)">
                    <animate attributeName="stroke-dashoffset" from="0" to="-30" dur="1s" repeatCount="indefinite" begin="0s"/>
                  </path>
                  {/* PINK ←: Business Intel → Platform  (len=30, flows right-to-left) */}
                  <path d="M950,125 H920"
                    stroke="#E11D5C" strokeWidth="2.4" strokeOpacity="1" fill="none"
                    strokeDasharray="10 20" markerEnd="url(#ah-pink-r)">
                    <animate attributeName="stroke-dashoffset" from="0" to="-30" dur="1s" repeatCount="indefinite" begin="0.5s"/>
                  </path>

                  {/* YELLOW →: Platform → Enterprise  (len=30) */}
                  <path d="M920,330 H950"
                    stroke="#F5B301" strokeWidth="2.4" strokeOpacity="1" fill="none"
                    strokeDasharray="10 20" markerEnd="url(#ah-yellow)">
                    <animate attributeName="stroke-dashoffset" from="0" to="-30" dur="1s" repeatCount="indefinite" begin="0.2s"/>
                  </path>
                  {/* YELLOW ←: Enterprise → Platform  (len=30, flows right-to-left) */}
                  <path d="M950,345 H920"
                    stroke="#F5B301" strokeWidth="2.4" strokeOpacity="1" fill="none"
                    strokeDasharray="10 20" markerEnd="url(#ah-yel-r)">
                    <animate attributeName="stroke-dashoffset" from="0" to="-30" dur="1s" repeatCount="indefinite" begin="0.7s"/>
                  </path>

                  {/* GREEN DASHED ←: Control Return (flows right-to-left ← = from=0 to=-len) */}
                  <path d="M590,570 H150 C133,570 133,555 133,530"
                    stroke="#22C55E" strokeWidth="1.6" strokeOpacity="0.75" fill="none"
                    strokeDasharray="8 6">
                    <animate attributeName="stroke-dashoffset" from="0" to="-14" dur="0.5s" repeatCount="indefinite"/>
                  </path>

                  {/* GREEN DASHED ←: Control Return / Actuation */}
                  <path d="M950,590 H145 C128,590 128,575 128,548"
                    stroke="#22C55E" strokeWidth="1.6" strokeOpacity="0.55" fill="none"
                    strokeDasharray="8 6">
                    <animate attributeName="stroke-dashoffset" from="0" to="-14" dur="0.5s" repeatCount="indefinite" begin="0.2s"/>
                  </path>

                  {/* ─────────────────────────────────────────────────────────
                      VISIBLE LABELS
                  ───────────────────────────────────────────────────────── */}

                  {/* Insights & KPIs label above pink arrows */}
                  <rect x="912" y="96" width="74" height="16" rx="4" fill="#E11D5C" fillOpacity="0.2" stroke="#E11D5C" strokeWidth="0.8" strokeOpacity="0.6"/>
                  <text x="949" y="108" fill="#ff6b8a" fontSize="8" fontWeight="bold" fontFamily="monospace" textAnchor="middle" letterSpacing="0.5">Insights &amp; KPIs</text>

                  {/* Schedules Sync label above yellow arrows */}
                  <rect x="912" y="316" width="74" height="16" rx="4" fill="#F5B301" fillOpacity="0.15" stroke="#F5B301" strokeWidth="0.8" strokeOpacity="0.6"/>
                  <text x="949" y="328" fill="#ffd166" fontSize="8" fontWeight="bold" fontFamily="monospace" textAnchor="middle" letterSpacing="0.5">Schedules Sync</text>

                  {/* Control Return label */}
                  <rect x="330" y="558" width="82" height="13" rx="3" fill="#0a1a0a" fillOpacity="0.85"/>
                  <text x="371" y="568" fill="#4ade80" fontSize="7.5" fontWeight="bold" fontFamily="monospace" textAnchor="middle" letterSpacing="0.4">Control Return</text>

                  {/* Control Return / Actuation label */}
                  <rect x="400" y="577" width="140" height="13" rx="3" fill="#0a1a0a" fillOpacity="0.85"/>
                  <text x="470" y="587" fill="#4ade80" fontSize="7.5" fontWeight="bold" fontFamily="monospace" textAnchor="middle" letterSpacing="0.4">Control Return / Actuation</text>

                </svg>

                {/* LEFT COLUMN: SOURCES (SHOP FLOOR) */}

                <div className="absolute flex flex-col justify-between py-1" style={{ left: "1.67%", top: "4.62%", width: "20.00%", height: "89.23%" }}>
                  
                  {/* 01 PLANT FLOOR CARD */}
                  <div className="bg-slate-950/60 border border-slate-900 rounded-2xl p-4 flex flex-col gap-3.5 shadow-lg shadow-black/30 z-10 hover:border-brand-hot/30 transition-colors">
                    <h5 className="text-[10px] font-black text-brand-hot uppercase tracking-widest font-mono text-left">01 PLANT FLOOR</h5>
                    <div className="flex flex-col gap-2">
                      {[
                        { name: "Sensors", icon: Radio, dotColor: "bg-red-500" },
                        { name: "Actuators", icon: Settings, dotColor: "bg-red-500" },
                        { name: "Motors", icon: Zap, dotColor: "bg-red-500" },
                        { name: "Robots", icon: Bot, dotColor: "bg-red-500" },
                        { name: "Equipment", icon: Layers, dotColor: "bg-red-500" }
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center gap-3 px-3 py-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300">
                          <span className={`w-1.5 h-1.5 rounded-full ${item.dotColor} shrink-0`} />
                          <item.icon className="w-4 h-4 text-slate-300" />
                          <span className="text-[11px] font-bold text-slate-200">{item.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 02 CONTROL LAYER CARD */}
                  <div className="bg-slate-950/60 border border-slate-900 rounded-2xl p-4 flex flex-col gap-3.5 shadow-lg shadow-black/30 z-10 hover:border-blue-500/30 transition-colors">
                    <h5 className="text-[10px] font-black text-blue-500 uppercase tracking-widest font-mono text-left">02 CONTROL LAYER</h5>
                    <div className="flex flex-col gap-2">
                      {[
                        { name: "PLC", icon: Cpu, dotColor: "bg-blue-500" },
                        { name: "DCS", icon: Network, dotColor: "bg-blue-500" },
                        { name: "SCADA", icon: Monitor, dotColor: "bg-blue-500" },
                        { name: "HMI", icon: Tablet, dotColor: "bg-blue-500" },
                        { name: "Safety Systems", icon: ShieldAlert, dotColor: "bg-blue-500" }
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center gap-3 px-3 py-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300">
                          <span className={`w-1.5 h-1.5 rounded-full ${item.dotColor} shrink-0`} />
                          <item.icon className="w-4 h-4 text-slate-300" />
                          <span className="text-[11px] font-bold text-slate-200">{item.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

                {/* INTERMEDIATE FLOW CONNECTOR BOXES */}
                {/* Data Collection */}
                <div className="absolute flex flex-col items-center justify-center bg-slate-950 border border-slate-900 rounded-xl p-2 shadow-md hover:border-brand-hot/30 transition-colors z-10"
                  style={{ left: "25.83%", top: "24.62%", width: "9.17%", height: "9.23%" }}>
                  <Database className="w-4 h-4 text-red-500/80 mb-1" />
                  <span className="text-[8px] font-bold text-slate-200 uppercase tracking-wider text-center">Data Collection</span>
                </div>

                {/* Control Data */}
                <div className="absolute flex flex-col items-center justify-center bg-slate-950 border border-slate-900 rounded-xl p-2 shadow-md hover:border-blue-500/30 transition-colors z-10"
                  style={{ left: "25.83%", top: "66.15%", width: "9.17%", height: "9.23%" }}>
                  <Sliders className="w-4 h-4 text-blue-500/80 mb-1" />
                  <span className="text-[8px] font-bold text-slate-200 uppercase tracking-wider text-center">Control Data</span>
                </div>

                {/* Edge Gateway */}
                <div className="absolute flex flex-col items-center justify-center bg-slate-950 border border-slate-900 rounded-xl p-2 shadow-md hover:border-brand-hot/30 transition-colors z-10"
                  style={{ left: "37.50%", top: "20.00%", width: "9.17%", height: "9.23%" }}>
                  <Network className="w-4 h-4 text-slate-400 mb-1" />
                  <span className="text-[8px] font-bold text-slate-200 uppercase tracking-wider text-center">Edge Gateway</span>
                </div>

                {/* Telemetry (OPC-UA) */}
                <div className="absolute flex flex-col items-center justify-center bg-[#0d1f14] border border-green-500/30 rounded-xl p-2 shadow-md hover:border-green-400/50 transition-colors z-10"
                  style={{ left: "37.50%", top: "40.00%", width: "9.17%", height: "12.31%" }}>
                  <Cloud className="w-4.5 h-4.5 text-green-400 mb-1 animate-pulse" />
                  <span className="text-[8px] font-extrabold text-green-400 uppercase tracking-widest text-center">Telemetry</span>
                  <span className="text-[7.5px] font-mono text-green-500 font-bold mt-0.5 text-center">(OPC-UA)</span>
                </div>

                {/* Protocol Conversion */}
                <div className="absolute flex flex-col items-center justify-center bg-slate-950 border border-slate-900 rounded-xl p-2 shadow-md hover:border-blue-500/30 transition-colors z-10"
                  style={{ left: "37.50%", top: "66.15%", width: "9.17%", height: "9.23%" }}>
                  <RefreshCw className="w-4 h-4 text-blue-400 mb-1" />
                  <span className="text-[8px] font-bold text-slate-200 uppercase tracking-wider text-center">Protocol</span>
                  <span className="text-[7.5px] text-slate-400 font-bold font-mono text-center mt-0.5">Conversion</span>
                </div>

                {/* CENTER COLUMN: DHGSOFT INTELLIGENT FACTORY PLATFORM */}
                <div className="absolute bg-[#080d1a]/50 border border-slate-900 rounded-3xl p-4 flex flex-col justify-between shadow-2xl shadow-black/40 z-10 hover:border-brand/20 transition-all duration-300"
                  style={{ left: "49.17%", top: "4.62%", width: "27.50%", height: "89.23%" }}>
                  
                  {/* Header */}
                  <div className="flex flex-col items-center">
                    <span className="px-3 py-1 rounded bg-black border border-white/10 text-[8.5px] font-black text-slate-300 uppercase tracking-widest font-mono select-none">
                      DHGSOFT
                    </span>
                    <span className="text-[10px] font-black text-white uppercase tracking-widest mt-2">
                      Intelligent Factory Platform
                    </span>
                  </div>

                  {/* Inner Stack */}
                  <div className="flex flex-col gap-3 my-2">
                    
                    {/* 03 Connectivity */}
                    <div className="bg-[#0b101f] border border-slate-900 rounded-xl p-3 flex flex-col gap-2 hover:border-slate-800 transition-colors">
                      <span className="text-[8px] font-black text-brand-hot uppercase tracking-wider font-mono text-left">03 CONNECTIVITY</span>
                      <div className="grid grid-cols-2 gap-2">
                        {[
                          { name: "OPC-UA Server", icon: Cpu },
                          { name: "MQTT Broker", icon: Wifi },
                          { name: "Industrial Ethernet", icon: Network },
                          { name: "Edge Gateways", icon: Radio }
                        ].map((conn, idx) => (
                          <div key={idx} className="flex items-center gap-1.5 px-2 py-1 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                            <conn.icon className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                            <span className="text-[8.5px] font-bold text-slate-300 truncate">{conn.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Down arrow */}
                    <div className="flex justify-center -my-1 select-none">
                      <svg className="w-3 h-3 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    </div>

                    {/* 04 Data Platform */}
                    <div className="bg-[#0b101f] border border-slate-900 rounded-xl p-3 flex flex-col gap-2 hover:border-slate-800 transition-colors">
                      <span className="text-[8px] font-black text-brand-hot uppercase tracking-wider font-mono text-left">04 DATA PLATFORM</span>
                      <div className="grid grid-cols-3 gap-2">
                        {[
                          { name: "Historian", icon: Database },
                          { name: "Data Lake", icon: Layers },
                          { name: "Streaming", icon: Activity }
                        ].map((item, idx) => (
                          <div key={idx} className="flex flex-col items-center justify-center text-center p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                            <item.icon className="w-4 h-4 text-slate-400 mb-1" />
                            <span className="text-[8px] font-extrabold text-slate-300">{item.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Down arrow */}
                    <div className="flex justify-center -my-1 select-none">
                      <svg className="w-3 h-3 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    </div>

                    {/* 05 AI & Analytics */}
                    <div className="bg-[#0b101f] border border-slate-900 rounded-xl p-3 flex flex-col gap-2 hover:border-slate-800 transition-colors">
                      <span className="text-[8px] font-black text-brand-hot uppercase tracking-wider font-mono text-left">05 AI & ANALYTICS</span>
                      <div className="grid grid-cols-3 gap-2">
                        {[
                          { name: "Machine Learning", icon: Brain },
                          { name: "Predictive Analytics", icon: BarChart4 },
                          { name: "Digital Twin", icon: Factory }
                        ].map((item, idx) => (
                          <div key={idx} className="flex flex-col items-center justify-center text-center p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                            <item.icon className="w-4 h-4 text-slate-400 mb-1" />
                            <span className="text-[8px] font-extrabold text-slate-300">{item.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>

                  {/* Footer tag */}
                  <span className="text-[8.5px] font-extrabold text-slate-500 uppercase tracking-widest text-center font-mono">
                    Human + Machine Orchestration
                  </span>

                </div>

                {/* RIGHT COLUMN: USERS (ENTERPRISE) */}
                <div className="absolute flex flex-col justify-between py-1" style={{ left: "79.17%", top: "4.62%", width: "19.17%", height: "89.23%" }}>
                  
                  {/* 08 BUSINESS INTEL */}
                  <div className="bg-slate-950/60 border border-brand-hot/40 shadow-[0_0_15px_rgba(225,29,92,0.15)] rounded-2xl p-4 flex flex-col gap-3 relative hover:border-brand-hot transition-all duration-300">
                    <div className="flex items-center justify-between">
                      <h5 className="text-[10px] font-black text-brand-hot uppercase tracking-widest font-mono text-left">08 BUSINESS INTEL</h5>
                      <span className="text-[7.5px] font-black bg-brand-hot/15 text-brand-hot px-1.5 py-0.5 rounded font-mono uppercase tracking-wider select-none animate-pulse">
                        Top Level
                      </span>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="grid grid-cols-2 gap-2">
                        <div className="flex items-center gap-2 p-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                          <PieChart className="w-3.5 h-3.5 text-slate-400" />
                          <span className="text-[9px] font-bold text-slate-300">Dashboards</span>
                        </div>
                        <div className="flex items-center gap-2 p-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                          <BarChart2 className="w-3.5 h-3.5 text-slate-400" />
                          <span className="text-[9px] font-bold text-slate-300">KPIs</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 px-3 py-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                        <FileText className="w-4 h-4 text-slate-300" />
                        <span className="text-[10px] font-bold text-slate-200">Reporting</span>
                      </div>
                      <div className="flex items-center gap-3 px-3 py-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                        <UserCheck className="w-4 h-4 text-slate-300" />
                        <span className="text-[10px] font-bold text-slate-200">Executive Analytics</span>
                      </div>
                    </div>
                  </div>

                  {/* 07 ENTERPRISE SYSTEMS */}
                  <div className="bg-slate-950/60 border border-slate-900 rounded-2xl p-4 flex flex-col gap-3 hover:border-slate-800 transition-colors">
                    <h5 className="text-[10px] font-black text-blue-500 uppercase tracking-widest font-mono text-left">07 ENTERPRISE SYSTEMS</h5>
                    <div className="flex flex-col gap-1.5">
                      {[
                        { name: "ERP (SAP)", icon: Database, dotColor: "bg-blue-500" },
                        { name: "MES Integration", icon: Layers, dotColor: "bg-blue-500" },
                        { name: "LIMS", icon: Beaker, dotColor: "bg-blue-500" },
                        { name: "CMMS", icon: Wrench, dotColor: "bg-blue-500" },
                        { name: "Business Apps", icon: LayoutGrid, dotColor: "bg-blue-500" }
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2.5 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300">
                          <span className={`w-1.5 h-1.5 rounded-full ${item.dotColor} shrink-0`} />
                          <item.icon className="w-3.5 h-3.5 text-slate-300" />
                          <span className="text-[10px] font-bold text-slate-200">{item.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 06 CLOUD PLATFORM */}
                  <div className="bg-slate-950/60 border border-slate-900 rounded-2xl p-4 flex flex-col gap-3 hover:border-slate-800 transition-colors">
                    <h5 className="text-[10px] font-black text-green-500 uppercase tracking-widest font-mono text-left">06 CLOUD PLATFORM</h5>
                    <div className="flex flex-col gap-1.5">
                      {[
                        { name: "Azure", icon: Cloud, dotColor: "bg-green-500" },
                        { name: "AWS", icon: Cloud, dotColor: "bg-green-500" },
                        { name: "Industrial IoT Hub", icon: Globe2, dotColor: "bg-green-500" },
                        { name: "Cloud Historian", icon: Database, dotColor: "bg-green-500" }
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2.5 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300">
                          <span className={`w-1.5 h-1.5 rounded-full ${item.dotColor} shrink-0`} />
                          <item.icon className="w-3.5 h-3.5 text-slate-300" />
                          <span className="text-[10px] font-bold text-slate-200">{item.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

              </div>

              {/* 2. MOBILE VIEW (Vertical Flow Stack for clean responsive display) */}
              <div className="lg:hidden flex flex-col gap-8 w-full select-none text-left">
                
                {/* Shop Floor */}
                <div className="flex flex-col gap-4">
                  <span className="text-xs font-black uppercase tracking-[0.2em] text-slate-500 font-mono">Sources (Shop Floor)</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* 01 Plant Floor */}
                    <div className="bg-slate-950/60 border border-slate-900 rounded-2xl p-4 flex flex-col gap-3 shadow-lg shadow-black/30">
                      <h5 className="text-[10px] font-black text-brand-hot uppercase tracking-widest font-mono">01 PLANT FLOOR</h5>
                      <div className="flex flex-col gap-2">
                        {[
                          { name: "Sensors", icon: Radio, dotColor: "bg-red-500" },
                          { name: "Actuators", icon: Settings, dotColor: "bg-red-500" },
                          { name: "Motors", icon: Zap, dotColor: "bg-red-500" },
                          { name: "Robots", icon: Bot, dotColor: "bg-red-500" },
                          { name: "Equipment", icon: Layers, dotColor: "bg-red-500" }
                        ].map((item, idx) => (
                          <div key={idx} className="flex items-center gap-3 px-3 py-2 rounded-xl bg-white/5 border border-white/10">
                            <span className={`w-1.5 h-1.5 rounded-full ${item.dotColor} shrink-0`} />
                            <item.icon className="w-4 h-4 text-slate-300" />
                            <span className="text-[11px] font-bold text-slate-200">{item.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    {/* 02 Control Layer */}
                    <div className="bg-slate-950/60 border border-slate-900 rounded-2xl p-4 flex flex-col gap-3 shadow-lg shadow-black/30">
                      <h5 className="text-[10px] font-black text-blue-500 uppercase tracking-widest font-mono">02 CONTROL LAYER</h5>
                      <div className="flex flex-col gap-2">
                        {[
                          { name: "PLC", icon: Cpu, dotColor: "bg-blue-500" },
                          { name: "DCS", icon: Network, dotColor: "bg-blue-500" },
                          { name: "SCADA", icon: Monitor, dotColor: "bg-blue-500" },
                          { name: "HMI", icon: Tablet, dotColor: "bg-blue-500" },
                          { name: "Safety Systems", icon: ShieldAlert, dotColor: "bg-blue-500" }
                        ].map((item, idx) => (
                          <div key={idx} className="flex items-center gap-3 px-3 py-2 rounded-xl bg-white/5 border border-white/10">
                            <span className={`w-1.5 h-1.5 rounded-full ${item.dotColor} shrink-0`} />
                            <item.icon className="w-4 h-4 text-slate-300" />
                            <span className="text-[11px] font-bold text-slate-200">{item.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mobile Connectors */}
                <div className="flex flex-col gap-3 items-center justify-center py-2 bg-slate-950/40 border border-slate-900/60 rounded-2xl p-4">
                  <span className="text-[9px] font-extrabold uppercase text-slate-500 tracking-widest">Edge Ingestion Hub</span>
                  <div className="grid grid-cols-2 gap-3 w-full max-w-sm mt-2">
                    <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/5 border border-white/10 justify-center">
                      <Database className="w-3.5 h-3.5 text-red-500" />
                      <span className="text-[9px] font-bold text-slate-300">Data Collection</span>
                    </div>
                    <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/5 border border-white/10 justify-center">
                      <Sliders className="w-3.5 h-3.5 text-blue-500" />
                      <span className="text-[9px] font-bold text-slate-300">Control Data</span>
                    </div>
                    <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/5 border border-white/10 justify-center">
                      <Network className="w-3.5 h-3.5 text-slate-400" />
                      <span className="text-[9px] font-bold text-slate-300">Edge Gateway</span>
                    </div>
                    <div className="flex items-center gap-2 p-2.5 rounded-xl bg-green-950/20 border border-green-500/30 justify-center">
                      <Cloud className="w-3.5 h-3.5 text-green-400" />
                      <span className="text-[9px] font-bold text-green-400">Telemetry</span>
                    </div>
                  </div>
                </div>

                {/* Platform */}
                <div className="bg-[#080d1a]/50 border border-slate-900 rounded-3xl p-4 flex flex-col gap-6 shadow-2xl shadow-black/40">
                  <div className="flex flex-col items-center">
                    <span className="px-3 py-1 rounded bg-black border border-white/10 text-[9px] font-black text-slate-300 uppercase tracking-widest font-mono">
                      DHGSOFT
                    </span>
                    <span className="text-[11px] font-black text-white uppercase tracking-widest mt-2">
                      Intelligent Factory Platform
                    </span>
                  </div>
                  <div className="flex flex-col gap-4">
                    {/* 03 Connectivity */}
                    <div className="bg-[#0b101f] border border-slate-900 rounded-xl p-4 flex flex-col gap-3">
                      <span className="text-[8px] font-black text-brand-hot uppercase tracking-wider font-mono">03 CONNECTIVITY</span>
                      <div className="grid grid-cols-2 gap-2">
                        {[
                          { name: "OPC-UA Server", icon: Cpu },
                          { name: "MQTT Broker", icon: Wifi },
                          { name: "Industrial Ethernet", icon: Network },
                          { name: "Edge Gateways", icon: Radio }
                        ].map((conn, idx) => (
                          <div key={idx} className="flex items-center gap-2 p-2 rounded-lg bg-white/5 border border-white/10">
                            <conn.icon className="w-3.5 h-3.5 text-slate-400" />
                            <span className="text-[9px] font-bold text-slate-300">{conn.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    {/* 04 Data Platform */}
                    <div className="bg-[#0b101f] border border-slate-900 rounded-xl p-4 flex flex-col gap-3">
                      <span className="text-[8px] font-black text-brand-hot uppercase tracking-wider font-mono">04 DATA PLATFORM</span>
                      <div className="grid grid-cols-3 gap-2">
                        {[
                          { name: "Historian", icon: Database },
                          { name: "Data Lake", icon: Layers },
                          { name: "Streaming", icon: Activity }
                        ].map((item, idx) => (
                          <div key={idx} className="flex flex-col items-center justify-center text-center p-2 rounded-lg bg-white/5 border border-white/10">
                            <item.icon className="w-4 h-4 text-slate-400 mb-1" />
                            <span className="text-[9px] font-bold text-slate-300">{item.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    {/* 05 AI & Analytics */}
                    <div className="bg-[#0b101f] border border-slate-900 rounded-xl p-4 flex flex-col gap-3">
                      <span className="text-[8px] font-black text-brand-hot uppercase tracking-wider font-mono">05 AI & ANALYTICS</span>
                      <div className="grid grid-cols-3 gap-2">
                        {[
                          { name: "Machine Learning", icon: Brain },
                          { name: "Predictive Analytics", icon: BarChart4 },
                          { name: "Digital Twin", icon: Factory }
                        ].map((item, idx) => (
                          <div key={idx} className="flex flex-col items-center justify-center text-center p-2 rounded-lg bg-white/5 border border-white/10">
                            <item.icon className="w-4 h-4 text-slate-400 mb-1" />
                            <span className="text-[9px] font-bold text-slate-300">{item.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <span className="text-[8.5px] font-extrabold text-slate-500 uppercase tracking-widest text-center font-mono">
                    Human + Machine Orchestration
                  </span>
                </div>

                {/* Users Stack */}
                <div className="flex flex-col gap-4">
                  <span className="text-xs font-black uppercase tracking-[0.2em] text-slate-500 font-mono">Users (Enterprise)</span>
                  <div className="flex flex-col gap-4">
                    {/* 08 Business Intel */}
                    <div className="bg-slate-950/60 border border-brand-hot/40 shadow-[0_0_15px_rgba(225,29,92,0.15)] rounded-2xl p-4 flex flex-col gap-3 relative">
                      <div className="flex items-center justify-between">
                        <h5 className="text-[10px] font-black text-brand-hot uppercase tracking-widest font-mono">08 BUSINESS INTEL</h5>
                        <span className="text-[7.5px] font-black bg-brand-hot/15 text-brand-hot px-1.5 py-0.5 rounded font-mono uppercase tracking-wider">Top Level</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="flex items-center gap-2 p-2 rounded-xl bg-white/5 border border-white/10">
                          <PieChart className="w-3.5 h-3.5 text-slate-400" />
                          <span className="text-[9px] font-bold text-slate-300">Dashboards</span>
                        </div>
                        <div className="flex items-center gap-2 p-2 rounded-xl bg-white/5 border border-white/10">
                          <BarChart2 className="w-3.5 h-3.5 text-slate-400" />
                          <span className="text-[9px] font-bold text-slate-300">KPIs</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 px-3 py-2 rounded-xl bg-white/5 border border-white/10">
                        <FileText className="w-4 h-4 text-slate-300" />
                        <span className="text-[10px] font-bold text-slate-200">Reporting</span>
                      </div>
                      <div className="flex items-center gap-3 px-3 py-2 rounded-xl bg-white/5 border border-white/10">
                        <UserCheck className="w-4 h-4 text-slate-300" />
                        <span className="text-[10px] font-bold text-slate-200">Executive Analytics</span>
                      </div>
                    </div>
                    {/* 07 Enterprise Systems */}
                    <div className="bg-slate-950/60 border border-slate-900 rounded-2xl p-4 flex flex-col gap-3">
                      <h5 className="text-[10px] font-black text-blue-500 uppercase tracking-widest font-mono">07 ENTERPRISE SYSTEMS</h5>
                      <div className="flex flex-col gap-2">
                        {[
                          { name: "ERP (SAP)", icon: Database, dotColor: "bg-blue-500" },
                          { name: "MES Integration", icon: Layers, dotColor: "bg-blue-500" },
                          { name: "LIMS", icon: Beaker, dotColor: "bg-blue-500" },
                          { name: "CMMS", icon: Wrench, dotColor: "bg-blue-500" },
                          { name: "Business Apps", icon: LayoutGrid, dotColor: "bg-blue-500" }
                        ].map((item, idx) => (
                          <div key={idx} className="flex items-center gap-2.5 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10">
                            <span className={`w-1.5 h-1.5 rounded-full ${item.dotColor} shrink-0`} />
                            <item.icon className="w-3.5 h-3.5 text-slate-300" />
                            <span className="text-[10px] font-bold text-slate-200">{item.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    {/* 06 Cloud Platform */}
                    <div className="bg-slate-950/60 border border-slate-900 rounded-2xl p-4 flex flex-col gap-3">
                      <h5 className="text-[10px] font-black text-green-500 uppercase tracking-widest font-mono">06 CLOUD PLATFORM</h5>
                      <div className="flex flex-col gap-2">
                        {[
                          { name: "Azure", icon: Cloud, dotColor: "bg-green-500" },
                          { name: "AWS", icon: Cloud, dotColor: "bg-green-500" },
                          { name: "Industrial IoT Hub", icon: Globe2, dotColor: "bg-green-500" },
                          { name: "Cloud Historian", icon: Database, dotColor: "bg-green-500" }
                        ].map((item, idx) => (
                          <div key={idx} className="flex items-center gap-2.5 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10">
                            <span className={`w-1.5 h-1.5 rounded-full ${item.dotColor} shrink-0`} />
                            <item.icon className="w-3.5 h-3.5 text-slate-300" />
                            <span className="text-[10px] font-bold text-slate-200">{item.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

              </div>

            </div>

            {/* Sub technology partners row */}
            <p className="text-center text-xs font-semibold uppercase tracking-[0.4em] text-slate-500 mb-8 pt-4">
              Technology Partners
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 max-w-6xl mx-auto">
              {["AVEVA", "Schneider Electric", "Microsoft", "AWS", "SAP", "Oracle", "Cisco", "Phoenix Contact"].map((partner, pIdx) => (
                <div key={pIdx} className="bg-slate-900/60 border border-slate-800 rounded-xl px-3 py-4 flex flex-col items-center justify-center text-center select-none hover:border-brand/25 transition-colors">
                  <span className="text-xs font-bold text-slate-300">{partner}</span>
                </div>
              ))}
            </div>

          </Container>
        </Section>

        {/* ==========================================
            8. MEASURABLE BUSINESS IMPACT SECTION
            ========================================== */}
        <Section variant="white" size="default">
          <Container>
            
            <div className="text-center mb-16 space-y-4">
              <div className="flex items-center justify-center gap-3">
                <div className="h-px w-10 bg-brand" />
                <span className="text-brand text-label-bold uppercase tracking-[0.2em]">Business Outcomes</span>
                <div className="h-px w-10 bg-brand" />
              </div>
              <h2 className="text-txt-strong font-black tracking-tight leading-tight">
                Measurable <span className="text-gradient-brand">Business Impact</span>
              </h2>
              <p className="text-body-md text-txt-muted max-w-xl mx-auto leading-relaxed">
                DHGsoft solutions deliver quantifiable results across every dimension of your Consumer Packaged Goods operations.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                    { title: "Line OEE", val: "30% OEE improvement", desc: "Smoother flow and fewer cartoner micro-stops.", icon: TrendingUp },
                    { title: "Changeover Agility", val: "35% faster SKU switch", desc: "Recipe-driven adjustments directly to lines.", icon: Clock },
                    { title: "Material Efficiency", val: "25% scrap reduction", desc: "Reduced wrapper and film scrap during runs.", icon: Cpu },
                    { title: "Recall Mitigation", val: "Zero label defects", desc: "100% vision-inspected allergen labeling compliance.", icon: Award },
                    { title: "Giveaway Prevention", val: "Optimized giveaway", desc: "Reduced product overfill margins using checkweigher integration.", icon: Zap },
                    { title: "Warehouse Throughput", val: "30% faster shipping", desc: "Connected pallet flow from line to dock doors.", icon: Database },
                    { title: "Conveyor Availability", val: "Predictive uptime", desc: "Maintenance during planned down periods.", icon: ShieldAlert },
                    { title: "Quality Compliance", val: "Easy audits", desc: "Digital batch logs meeting strict packaging standard audits.", icon: Settings }
              ].map((imp, idx) => {
                const IconComponent = imp.icon;
                return (
                  <div key={idx} className="card bg-mist border border-line rounded-2xl p-6 text-left shadow-sm hover:border-brand/40 transition-colors flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start gap-2 mb-6">
                        <div className="w-10 h-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center shrink-0">
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <span className="text-xs font-extrabold text-brand bg-brand/5 px-2.5 py-1 rounded-md font-mono select-none">
                          {imp.val}
                        </span>
                      </div>
                      <h5 className="font-extrabold text-txt-strong mb-2 leading-tight text-base">
                        {imp.title}
                      </h5>
                      <p className="text-xs text-txt-muted leading-relaxed">
                        {imp.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </Container>
        </Section>

        {/* ==========================================
            9. WHY DHGSOFT SECTION
            ========================================== */}
        <Section variant="mist" size="default">
          <Container>
            
            <div className="text-left space-y-4 mb-16 max-w-4xl">
              <div className="flex items-center gap-3">
                <div className="h-px w-10 bg-brand" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">Why DHGsoft</span>
              </div>
              <h2 className="text-txt-strong tracking-tight font-black leading-tight">
                The Partner Built for <span className="text-gradient-brand">Industrial Transformation</span>
              </h2>
              <p className="text-body-md text-txt-muted leading-relaxed">
                DHGsoft combines deep industrial domain expertise with technology excellence to deliver digital transformation that creates lasting competitive advantage for Consumer Packaged Goods organizations worldwide.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
              {[
                { tag: "10+ Years", title: "Industry Expertise", desc: "Deep domain expertise across industrial manufacturing, energy, oil & gas, and process industries.", icon: Factory },
                { tag: "Certified Partner", title: "Technology Partnerships", desc: "Certified partnerships with AVEVA, Schneider Electric, Microsoft, and AWS for best-in-class delivery.", icon: Link2 },
                { tag: "Full Lifecycle", title: "End-to-End Delivery", desc: "From strategy and design through implementation, integration, and ongoing managed support.", icon: Settings2 },
                { tag: "15+ Countries", title: "Global Support", desc: "24/7 support capability with delivery teams across North America, Europe, and Asia Pacific.", icon: Globe2 },
                { tag: "200+ Projects", title: "Customer Success", desc: "Proven track record with 200+ successful digital transformation projects and measurable ROI.", icon: Award }
              ].map((card, idx) => {
                const IconComponent = card.icon;
                return (
                  <div key={idx} className="card bg-white border border-line rounded-2xl p-6 text-left shadow-sm hover:border-brand/40 transition-colors flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-extrabold text-brand uppercase tracking-wider block mb-4 font-mono">
                        {card.tag}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center shrink-0 mb-4">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <h5 className="font-extrabold text-txt-strong mb-2 leading-tight text-sm">
                        {card.title}
                      </h5>
                      <p className="text-xs text-txt-muted leading-relaxed">
                        {card.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </Container>
        </Section>

        {/* ==========================================
            10. RELATED CAPABILITIES SECTION (Pills row)
            ========================================== */}
        <section className="py-16 bg-white border-y border-line text-left">
          <Container>
            <div className="flex flex-col md:flex-row md:items-center gap-6 justify-start">
              
              <span className="text-xs font-black uppercase tracking-[0.25em] text-txt-strong shrink-0">
                Related Capabilities
              </span>

              <div className="flex flex-wrap gap-2">
                {[
                  "Industrial AI",
                  "Cloud Solutions",
                  "OT Automation",
                  "OT Cybersecurity",
                  "Managed Services",
                  "IIoT Platforms",
                  "Digital Twin",
                  "MES Integration"
                ].map((cap, idx) => (
                  <span key={idx} className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-mist border border-line text-txt-muted hover:border-brand/20 transition-colors select-none">
                    {cap}
                  </span>
                ))}
              </div>

            </div>
          </Container>
        </section>

        {/* ==========================================
            11. FINAL CTA BAND
            ========================================== */}
        <Section variant="ink" size="default" className="relative overflow-hidden text-center bg-slate-950">
          <div className="absolute inset-0 bg-slate-900/40 pointer-events-none" />
          <div className="w-full relative z-10 space-y-6">
            <span className="text-xs font-extrabold uppercase tracking-[0.3em] text-brand-hot font-mono block">
              GET STARTED
            </span>
            
            <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-black">
              Ready to Transform Your <span className="text-gradient-brand">Consumer Packaged Goods Operations?</span>
            </h2>
            
            <p className="text-slate-300 max-w-2xl mx-auto leading-relaxed text-body-sm">
              Let&apos;s discuss how DHGsoft can accelerate your digital transformation journey with proven industrial solutions and deep domain expertise.
            </p>

            <div className="pt-6 flex flex-wrap gap-4 justify-center">
              <button
                onClick={() => setIsContactOpen(true)}
                className="px-8 py-4 rounded-xl bg-brand hover:bg-brand-deep text-white font-extrabold text-sm sm:text-base transition-all duration-300 shadow-md active:scale-95 cursor-pointer"
              >
                Talk to an Expert
              </button>
              
              <button
                onClick={() => setIsContactOpen(true)}
                className="px-8 py-4 rounded-xl border border-white/20 hover:bg-white/10 text-white font-extrabold text-sm sm:text-base transition-all duration-300 cursor-pointer"
              >
                Schedule Consultation
              </button>
            </div>
          </div>
        </Section>

      </main>

      {/* Footer */}
      <Footer />

      {/* Sales Modal */}
      <ContactModal 
        isOpen={isContactOpen} 
        onClose={() => setIsContactOpen(false)} 
        showToast={() => {}} 
      />
    </div>
  );
}
