// src/app/about/page.tsx
"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowRight, 
  MapPin, 
  Lightbulb, 
  HeartHandshake, 
  ShieldCheck, 
  Award, 
  Users, 
  Leaf, 
  Network, 
  Activity, 
  Target, 
  Check, 
  Briefcase 
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { missionItems, values, strategicObjectives, partners, locations } from "@/lib/aboutData";

// Maps values to Lucide icons dynamically
const valueIcons = [Lightbulb, ShieldCheck, HeartHandshake, Award, ShieldCheck, Users];

export default function AboutPage() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const expertiseItems = [
    "Industrial Automation & Digitalization",
    "AI-Based Operational Intelligence",
    "Smart Manufacturing & Industry 4.0",
    "Electrical & Instrumentation Engineering",
    "Industrial Networking & IIoT",
    "EPC & Project Execution",
    "End-to-End Plant Integration",
    "Industrial Product Supply & Services",
  ];

  return (
    <div className="min-h-screen bg-background text-foreground antialiased font-sans flex flex-col selection:bg-brand selection:text-white">
      {/* Premium Header */}
      <Header onContactClick={() => setIsContactOpen(true)} />

      <main className="flex-grow">
        
        {/* ==========================================
            1. HERO SECTION (Cinematic Cover - min-h-screen)
            ========================================== */}
        <Section variant="ink" size="hero" containerSize="wide" className="relative min-h-screen flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0 pointer-events-none">
            <Image
              src="/images/about/about-cover.jpg"
              alt="DHGsoft digital engineering and industrial transformation team"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-transparent" />
            
            {/* Ambient glows */}
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
              
              {/* Eyebrow chip */}
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 backdrop-blur-md text-[#E10088] mb-4">
                <span className="relative flex w-1.5 h-1.5">
                  <span className="absolute inset-0 rounded-full bg-[#E10088] animate-ping opacity-60" />
                  <span className="relative rounded-full bg-[#E10088] w-1.5 h-1.5" />
                </span>
                <span className="text-[11px] font-extrabold uppercase tracking-widest font-sans">
                  ABOUT DHGSOFT
                </span>
              </div>

              {/* Title */}
              <h1 className="text-white text-headline-xl sm:text-[3.5rem] lg:text-[4.5rem] font-black tracking-tight leading-[1.05]">
                Engineering
                <br />
                <span className="text-gradient-brand">Intelligent Operations</span>
              </h1>

              {/* Subtitle */}
              <p className="text-slate-300 max-w-2xl leading-relaxed text-body-md font-medium">
                DHGsoft bridges the divide between physical operations and digital technology. From the plant floor to the cloud, we engineer the digital backbone that powers modern industrial enterprises.
              </p>

              {/* Stats Bar */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10 border-t border-white/10 max-w-3xl">
                <div>
                  <div className="text-xs uppercase tracking-wider text-slate-400 font-bold">HQ Office</div>
                  <div className="text-white font-extrabold text-sm sm:text-base mt-1">Ahmedabad</div>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-slate-400 font-bold">Focus</div>
                  <div className="text-white font-extrabold text-sm sm:text-base mt-1">Industrial Digitalization</div>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-slate-400 font-bold">Commitment</div>
                  <div className="text-white font-extrabold text-sm sm:text-base mt-1">Lifecycle Execution</div>
                </div>
              </div>

            </div>
          </Container>
        </Section>
        <div className="w-full h-px bg-line/60" />

        {/* ==========================================
            2. WHO WE ARE SECTION (min-h-[85vh] / min-h-[90vh])
            ========================================== */}
        <Section variant="white" size="default" className="relative overflow-hidden" id="overview">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Left Side: Content */}
              <div className="lg:col-span-7 space-y-6 text-left">
                <div className="flex items-center gap-3">
                  <div className="h-px w-10 bg-brand" />
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                    Who We Are
                  </span>
                </div>
                <h2 className="text-txt-strong font-black tracking-tight leading-tight">
                  A technology-driven partner built for <span className="text-gradient-brand">industrial innovation</span>
                </h2>
                <p className="text-body-md text-txt-muted leading-relaxed font-sans">
                  DHGsoft is a global Industrial Digital Transformation company. We bring together deep operational technology (OT) expertise, modern software engineering, and applied artificial intelligence to help manufacturers, process industries, and utilities run smarter, safer, and more efficiently.
                </p>
                <p className="text-body-md text-txt-muted leading-relaxed font-sans">
                  We operate at the critical intersection of physical assets and digital platforms — where most transformation initiatives stall. Our engineering teams close this gap with solutions that respect plant-floor safety and reliability parameters while harnessing the scale of enterprise systems and the cloud.
                </p>
              </div>

              {/* Right Side: Expertise Badges Card */}
              <div className="lg:col-span-5 relative">
                <div 
                  className="absolute -inset-4 rounded-3xl pointer-events-none"
                  style={{
                    background: 'linear-gradient(135deg, rgba(180,18,63,0.08) 0%, rgba(225,29,92,0.04) 50%, transparent 100%)',
                    filter: 'blur(20px)',
                  }}
                />
                <div className="relative rounded-[24px] border border-line bg-mist/60 backdrop-blur-md p-8 shadow-sm flex flex-col justify-start text-left space-y-6">
                  <h4 className="text-txt-strong text-sm font-bold uppercase tracking-widest text-foreground/75 border-b border-line pb-4">
                    Our Industrial Expertise
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {expertiseItems.map((item, idx) => (
                      <span 
                        key={idx}
                        className="text-xs font-semibold text-txt-strong bg-white border border-line rounded-full px-4 py-2 hover:border-brand hover:text-brand transition-colors cursor-default"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </Container>
        </Section>
        <div className="w-full h-px bg-line/60" />

        {/* ==========================================
            3. WHY WE EXIST (PURPOSE SECTION - Widescreen Giant Card Layout)
            ========================================== */}
        <Section variant="ink" className="min-h-[85vh] md:min-h-[90vh] flex items-center relative overflow-hidden">
          <Container>
            
            {/* The Giant Showcase Card Redesign */}
            <div className="w-full rounded-[32px] overflow-hidden border border-white/10 bg-white/[0.02] backdrop-blur-md shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-0 relative group">
              {/* Internal neon glows */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-brand-hot/10 rounded-full blur-[100px] pointer-events-none z-0" />
              <div className="absolute bottom-0 left-1/3 w-60 h-60 bg-brand/5 rounded-full blur-[100px] pointer-events-none z-0" />
              
              {/* Left Side: Cinematic Image filling the column */}
              <div className="lg:col-span-5 relative min-h-[320px] lg:min-h-[520px]">
                <Image
                  src="/images/about/about-purpose.jpg"
                  alt="Connected operations control dashboard and industrial systems monitoring"
                  fill
                  className="object-cover transition-transform duration-75 group-hover:scale-[1.02]"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-transparent via-slate-950/20 to-slate-950/80 lg:to-transparent pointer-events-none" />
                
                {/* Visual Label */}
                <div className="absolute bottom-6 left-6 text-left z-10">
                  <span className="bg-brand/85 backdrop-blur-sm text-white px-2.5 py-0.5 rounded text-[9.5px] font-extrabold tracking-wider uppercase">
                    Core Focus
                  </span>
                  <p className="text-[10px] text-slate-200 font-medium tracking-wide mt-1">
                    Continuous Plant Intelligence
                  </p>
                </div>
              </div>

              {/* Right Side: Text & Quotes Panel (Padded) */}
              <div className="lg:col-span-7 p-8 sm:p-12 lg:p-16 flex flex-col justify-between text-left relative z-10 space-y-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="h-px w-10 bg-brand-hot" />
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-hot">
                      Our Purpose
                    </span>
                  </div>
                  
                  <h3 className="text-white text-2xl sm:text-3xl lg:text-[36px] font-black tracking-tight leading-tight">
                    Connecting intelligence to transform operational performance.
                  </h3>
                  
                  <blockquote className="text-slate-300 text-sm sm:text-base italic leading-relaxed border-l-2 border-brand-hot pl-4 mt-6">
                    "To transform industries through engineering intelligence, connected technology, and continuous innovation — building value for tomorrow, today."
                  </blockquote>
                </div>
                
                {/* Purely decorative SVG schematic connector pattern to resolve blank space */}
                <div className="relative h-12 w-full opacity-35 py-1">
                  <svg className="w-full h-full stroke-white/20" fill="none" preserveAspectRatio="none" viewBox="0 0 500 40">
                    <path d="M 0,20 L 100,20 L 125,5 L 300,5 L 325,35 L 420,35 L 435,20 L 500,20" strokeWidth="1.2" />
                    <circle cx="100" cy="20" r="3" className="fill-brand-hot animate-pulse" />
                    <circle cx="125" cy="5" r="2" className="fill-white/40" />
                    <circle cx="300" cy="5" r="2" className="fill-white/40" />
                    <circle cx="325" cy="35" r="2" className="fill-white/40" />
                    <circle cx="420" cy="35" r="3" className="fill-brand-hot animate-pulse" />
                  </svg>
                </div>

                <div className="flex items-center gap-3">
                  <Briefcase className="w-4 h-4 text-brand-hot" />
                  <span className="text-[10px] uppercase font-extrabold tracking-wider text-slate-400">
                    DHGsoft Delivery Commitment
                  </span>
                </div>
              </div>

            </div>
            
          </Container>
        </Section>
        <div className="w-full h-px bg-line/60" />

        {/* ==========================================
            4A. OUR VISION SECTION (Compact Split & Vertically Centered Left Side)
            ========================================== */}
        <Section variant="white" size="compact" className="relative overflow-hidden pt-16 md:pt-24" id="vision">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-left">
              <div className="lg:col-span-5 space-y-4 self-start lg:pt-1">
                <div className="flex items-center gap-3">
                  <div className="h-px w-10 bg-brand" />
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                    Our Vision
                  </span>
                </div>
                <h3 className="text-txt-strong mt-2 lg:mt-10 tracking-tight font-extrabold leading-[1.1] text-3xl md:text-4xl" style={{ fontSize: 'clamp(2rem, 1.5rem + 1vw, 2.5rem)' }}>
                  Intelligent & Sustainable Industrial Ecosystems
                </h3>
              </div>
              <div className="lg:col-span-7 self-center">
                <div className="p-8 rounded-3xl bg-mist/60 border border-line backdrop-blur-md relative overflow-hidden group hover:border-brand/30 transition-all duration-300 shadow-sm">
                  <p className="text-txt-strong text-lg sm:text-xl lg:text-[22px] font-bold leading-relaxed">
                    "To become a <span className="text-gradient-brand">globally trusted industrial technology partner</span> enabling intelligent, connected, and sustainable manufacturing ecosystems."
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </Section>
        <div className="w-full h-px bg-line/60" />

        {/* ==========================================
            4B. OUR MISSION SECTION (min-h-[85vh] / min-h-[90vh])
            ========================================== */}
        <Section variant="mist" className="min-h-[85vh] md:min-h-[90vh] flex items-center" id="mission">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-left">
              <div className="lg:col-span-4 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-px w-10 bg-brand" />
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                    Our Mission
                  </span>
                </div>
                <h3 className="text-txt-strong mt-2 tracking-tight font-extrabold leading-[1.1] text-2xl md:text-3xl lg:text-4xl" style={{ fontSize: 'clamp(1.75rem, 1.4vw, 2.25rem)' }}>
                  Five commitments that define how we deliver value.
                </h3>
              </div>
              
              <div className="lg:col-span-8 space-y-3">
                {missionItems.map((item, idx) => (
                  <div 
                    key={idx}
                    className="flex items-center gap-4 bg-white border border-line rounded-2xl p-5 hover:border-brand hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group cursor-default"
                  >
                    <div className="w-10 h-10 rounded-xl bg-mist border border-line flex items-center justify-center font-mono text-[#8C123B] font-extrabold shrink-0 group-hover:bg-[#8C123B] group-hover:text-white transition-colors duration-300">
                      {String(idx + 1).padStart(2, "0")}
                    </div>
                    <span className="text-txt-strong font-semibold text-sm sm:text-base flex-grow">
                      {item}
                    </span>
                    <ArrowRight className="w-4 h-4 text-brand opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </Section>
        <div className="w-full h-px bg-line/60" />

        {/* ==========================================
            5. CORE VALUES SECTION (min-h-[85vh] / min-h-[90vh])
            ========================================== */}
        <Section variant="brandTint" className="min-h-[85vh] md:min-h-[90vh] flex items-center relative overflow-hidden" id="values">
          <Container>
            
            <div className="flex flex-col text-left mb-12">
              <div className="flex items-center gap-3 mb-2">
                <div className="h-px w-10 bg-brand" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                  Core Philosophy
                </span>
              </div>
              <h2 className="text-txt-strong font-black tracking-tight leading-tight">
                Our Core Values
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((val, idx) => {
                const IconComp = valueIcons[idx] || ShieldCheck;
                return (
                  <div 
                    key={idx}
                    className="bg-white border border-line rounded-2xl p-6 shadow-sm hover:border-brand/40 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 flex flex-col justify-between text-left space-y-4"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-brand/5 text-brand shrink-0">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <h4 className="font-extrabold text-txt-strong text-lg tracking-tight">
                        {val.name} <span className="text-brand/50 text-xs italic font-medium">({val.italic})</span>
                      </h4>
                      <p className="text-txt-muted text-sm leading-relaxed">
                        {val.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </Container>
        </Section>
        <div className="w-full h-px bg-line/60" />

        {/* ==========================================
            6. STRATEGIC FOCUS SECTION (Sticky Scroll Effect + Number Centered, Line Removed)
            ========================================== */}
        <Section variant="white" size="default" id="objectives" className="relative overflow-hidden">
          <Container>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start text-left">
              
              {/* Left Column: Sticky Title */}
              <div className="lg:col-span-4 lg:sticky lg:top-24 mb-10 lg:mb-0 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-px w-10 bg-brand" />
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                    Strategic Focus
                  </span>
                </div>
                <h2 className="text-txt-strong font-black tracking-tight leading-tight">
                  Building Value for Tomorrow
                </h2>
                <p className="text-txt-muted text-sm leading-relaxed font-sans">
                  Our long-term commitments to customers, technology platforms, and the industrial ecosystems we serve.
                </p>
              </div>

              {/* Right Column: Timeline Checklist (No Vertical Line) */}
              <div className="lg:col-span-8 relative pl-4 sm:pl-8">
                <div className="space-y-6 relative">
                  {strategicObjectives.map((obj, idx) => (
                    <div key={idx} className="flex items-center gap-6 relative">
                      
                      {/* Circle dot (No vertical line passes behind it) */}
                      <div className="relative flex-shrink-0 z-10">
                        <div className="w-12 h-12 rounded-full bg-white border-2 border-brand flex items-center justify-center shadow-xs">
                          <span className="text-brand font-mono text-sm font-extrabold">
                            {String(idx + 1).padStart(2, "0")}
                          </span>
                        </div>
                      </div>

                      {/* Content Card */}
                      <div className="flex-1 bg-white border border-line rounded-2xl p-5 shadow-xs hover:border-brand hover:shadow-md transition-all duration-300">
                        <h4 className="text-txt-strong font-extrabold text-base tracking-tight leading-snug">
                          {obj.title}
                        </h4>
                        <p className="text-xs text-txt-muted mt-2 leading-relaxed">
                          {obj.body}
                        </p>
                      </div>

                    </div>
                  ))}
                </div>
              </div>

            </div>

          </Container>
        </Section>
        <div className="w-full h-px bg-line/60" />

        {/* ==========================================
            7. PARTNERS & LOCATIONS SECTION (Symmetrical Dual Card Layout - Combined)
            ========================================== */}
        <Section variant="mist" size="compact" className="relative overflow-hidden" id="partners">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mx-auto text-left">
              
              {/* Left Column: Partners Card */}
              <div className="lg:col-span-6 bg-white border border-line rounded-3xl p-8 flex flex-col justify-between shadow-sm">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="h-px w-8 bg-brand" />
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                      Ecosystem Partners
                    </span>
                  </div>
                  <h3 className="text-txt-strong font-black text-2xl tracking-tight leading-tight">
                    Certified, Trusted, Connected
                  </h3>
                  <p className="text-txt-muted text-xs leading-relaxed">
                    We maintain active technical relationships and certifications with the world's leading industrial hardware and software vendors.
                  </p>
                </div>

                {/* Partners Grid */}
                <div className="grid grid-cols-2 gap-2.5 pt-8">
                  {partners.slice(0, 6).map((partner, idx) => (
                    <div 
                      key={idx}
                      className="bg-mist/50 border border-line/60 rounded-xl py-3 px-4 flex items-center justify-center shadow-xs"
                    >
                      <span className="text-txt-strong text-xs font-bold text-center tracking-tight truncate">
                        {partner}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Office Location Card */}
              <div className="lg:col-span-6 bg-white border border-line rounded-3xl p-8 flex flex-col justify-between shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-brand/5 rounded-full blur-2xl pointer-events-none" />
                
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="h-px w-8 bg-brand" />
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                      Where We Operate
                    </span>
                  </div>
                  <h3 className="text-txt-strong font-black text-2xl tracking-tight leading-tight">
                    Our Headquarters
                  </h3>
                  <p className="text-txt-muted text-xs leading-relaxed">
                    We serve industrial clients globally from our engineering and support headquarters in Ahmedabad, India.
                  </p>
                </div>

                {/* Address & Contact Details */}
                <div className="pt-8 space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-brand/5 flex items-center justify-center text-brand flex-shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h5 className="text-txt-strong font-bold text-sm tracking-tight font-sans">Ahmedabad, India</h5>
                      <p className="text-xs text-txt-muted mt-1 leading-relaxed font-sans">
                        420, HillTown Plaza, Nikol, Ahmedabad - 382350
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 pt-3 border-t border-line/60 font-mono text-[11px]">
                    <a 
                      href="tel:+919429419427"
                      className="text-brand font-bold hover:text-brand-deep transition-colors"
                    >
                      +91 942 941 942 7
                    </a>
                    <span className="text-line">|</span>
                    <a 
                      href="mailto:hitesh.patel@dhgsoft.com"
                      className="text-brand hover:text-brand-deep transition-colors truncate"
                    >
                      hitesh.patel@dhgsoft.com
                    </a>
                  </div>

                  <a 
                    href="https://maps.google.com/?q=420,+HillTown+Plaza,+Nikol,+Ahmedabad+-+382350"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand/5 hover:bg-brand text-brand hover:text-white text-xs font-bold transition-all duration-300 w-full justify-center border border-brand/10 font-sans mt-2"
                  >
                    <span>View on Google Maps</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

            </div>
          </Container>
        </Section>
        <div className="w-full h-px bg-line/60" />

        {/* ==========================================
            8. SIGNATURE CLOSING CTA (min-h-screen)
            ========================================== */}
        <Section variant="ink" className="relative overflow-hidden text-center py-20 md:py-28" id="cta">
          {/* Symmetrical background image and vignetted gradient overlays */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <Image
              src="/images/about/about-closing.jpg"
              alt="DHGsoft industrial engineering and automation validation"
              fill
              className="object-cover opacity-50"
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

          <Container className="relative z-10 w-full flex flex-col items-center">
            <div className="max-w-3xl space-y-6 flex flex-col items-center">
              
              <div className="flex items-center gap-3">
                <div className="h-px w-8 bg-brand-hot" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-hot">
                  Partner with DHGsoft
                </span>
                <div className="h-px w-8 bg-brand-hot" />
              </div>

              <h3 className="text-white text-4xl sm:text-[3.5rem] lg:text-[4.2rem] font-black tracking-tight leading-[1.05] max-w-2xl">
                Building Value
                <br />
                <span className="text-gradient-brand">for Tomorrow.</span>
              </h3>

              <p className="text-slate-300 max-w-xl leading-relaxed text-body-md font-medium text-center">
                Whether you are modernizing a single production line, connecting enterprise systems to the cloud, or building a secure data foundation — DHGsoft is your engineering partner from concept to commissioning.
              </p>

              <div className="pt-4 flex flex-wrap gap-4 items-center justify-center w-full">
                <button
                  onClick={() => setIsContactOpen(true)}
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-brand text-white font-semibold hover:bg-brand-deep hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand/25 transition-all duration-300 cursor-pointer"
                >
                  Start a Conversation
                  <ArrowRight className="w-4 h-4" />
                </button>
                <Link
                  href="/capabilities"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-white/20 text-white font-semibold hover:bg-white/10 hover:border-white/40 transition-all duration-300"
                >
                  Explore Capabilities
                </Link>
              </div>

            </div>
          </Container>
        </Section>

      </main>

      {/* Shared Footer */}
      <Footer />

      {/* Contact Overlay Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        showToast={() => {}}
      />
    </div>
  );
}
