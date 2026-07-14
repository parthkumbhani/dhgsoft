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
            1. HERO SECTION (Cinematic Cover)
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
                  <div className="text-white font-extrabold text-sm sm:text-base mt-1">Ahmedabad · Pune</div>
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

        {/* ==========================================
            2. WHO WE ARE SECTION
            ========================================== */}
        <Section variant="white" size="default" id="overview">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              
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
                    background: 'linear-gradient(135deg, rgba(180,18,63,0.1) 0%, rgba(225,29,92,0.05) 50%, transparent 100%)',
                    filter: 'blur(20px)',
                  }}
                />
                <div className="relative rounded-[24px] border border-line bg-mist p-8 shadow-sm flex flex-col justify-start text-left space-y-6">
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

        {/* ==========================================
            3. WHY WE EXIST (PURPOSE SECTION)
            ========================================== */}
        <Section variant="ink" size="default" className="relative overflow-hidden">
          {/* Decorative glows */}
          <div 
            className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full pointer-events-none"
            style={{ 
              background: 'radial-gradient(circle, rgba(225,29,92,0.12) 0%, transparent 70%)', 
              filter: 'blur(80px)' 
            }} 
          />
          <div 
            className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full pointer-events-none"
            style={{ 
              background: 'radial-gradient(circle, rgba(180,18,63,0.1) 0%, transparent 70%)', 
              filter: 'blur(90px)' 
            }} 
          />

          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column — Cinematic Purpose Image Card */}
              <div className="lg:col-span-5 relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/5] rounded-[24px] overflow-hidden border border-white/10 shadow-2xl">
                <Image
                  src="/images/about/about-purpose.jpg"
                  alt="Connected operations control dashboard and industrial systems monitoring"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                
                {/* Visual Label */}
                <div className="absolute bottom-6 left-6 text-left">
                  <span className="bg-brand/85 backdrop-blur-sm text-white px-2.5 py-0.5 rounded text-[9.5px] font-extrabold tracking-wider uppercase">
                    Core Focus
                  </span>
                  <p className="text-[10px] text-slate-300 font-medium tracking-wide mt-1">
                    Continuous Plant Intelligence
                  </p>
                </div>
              </div>

              {/* Right Column — Large Quotes Panel */}
              <div className="lg:col-span-7 text-left space-y-6 lg:pl-6 relative">
                <div className="flex items-center gap-3">
                  <div className="h-px w-10 bg-brand-hot" />
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-hot">
                    Our Purpose
                  </span>
                </div>
                
                <h3 className="text-white text-3xl sm:text-4xl lg:text-[40px] font-black tracking-tight leading-tight">
                  Connecting intelligence to transform operational performance.
                </h3>
                
                <blockquote className="text-slate-300 text-body-md italic leading-relaxed border-l-2 border-brand-hot pl-4">
                  "To transform industries through engineering intelligence, connected technology, and continuous innovation — building value for tomorrow, today."
                </blockquote>
                
                <div className="pt-4 flex items-center gap-3">
                  <Briefcase className="w-5 h-5 text-brand-hot" />
                  <span className="text-xs uppercase font-extrabold tracking-wider text-slate-400">
                    DHGsoft Delivery Commitment
                  </span>
                </div>
              </div>

            </div>
          </Container>
        </Section>

        {/* ==========================================
            4. VISION & MISSION SECTION
            ========================================== */}
        <Section variant="white" size="default" id="vision-mission">
          <Container>
            
            {/* Vision statement */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start text-left mb-16">
              <div className="lg:col-span-4">
                <div className="flex items-center gap-3">
                  <div className="h-px w-10 bg-brand" />
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                    Our Vision
                  </span>
                </div>
              </div>
              <div className="lg:col-span-8">
                <h2 className="text-txt-strong text-2xl sm:text-3xl lg:text-[34px] font-extrabold tracking-tight leading-snug">
                  To become a <span className="text-gradient-brand">globally trusted industrial technology partner</span> enabling intelligent, connected, and sustainable manufacturing ecosystems.
                </h2>
              </div>
            </div>

            <div className="w-full h-px bg-line/60 my-12" />

            {/* Mission statement & list */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start text-left">
              <div className="lg:col-span-4 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-px w-10 bg-brand" />
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                    Our Mission
                  </span>
                </div>
                <h3 className="text-txt-strong text-xl font-bold">
                  Five commitments that define how we deliver value.
                </h3>
              </div>
              
              <div className="lg:col-span-8 space-y-3">
                {missionItems.map((item, idx) => (
                  <div 
                    key={idx}
                    className="flex items-center gap-4 bg-mist border border-line rounded-2xl p-5 hover:border-brand hover:shadow-sm hover:-translate-y-0.5 transition-all duration-300 group cursor-default"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white border border-line flex items-center justify-center font-mono text-[#8C123B] font-extrabold shrink-0 group-hover:bg-[#8C123B] group-hover:text-white transition-colors duration-300">
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

        {/* ==========================================
            5. CORE VALUES SECTION
            ========================================== */}
        <Section variant="brandTint" size="default" id="values">
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
                    className="bg-white border border-line rounded-2xl p-6 shadow-sm hover:border-brand/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between text-left space-y-4"
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

        {/* ==========================================
            6. STRATEGIC OBJECTIVES SECTION
            ========================================== */}
        <Section variant="white" size="default" id="objectives">
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

              {/* Right Column: Timeline Checklist */}
              <div className="lg:col-span-8 relative pl-4 sm:pl-8">
                {/* Vertical timeline path */}
                <div className="absolute left-[30px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-brand via-brand-hot to-[#ECECEC] z-0 pointer-events-none" />

                <div className="space-y-8 relative">
                  {strategicObjectives.map((obj, idx) => (
                    <div key={idx} className="flex items-start gap-6 relative">
                      
                      {/* Circle dot on the line */}
                      <div className="relative flex-shrink-0 z-10">
                        <div className="w-12 h-12 rounded-full bg-white border-2 border-brand flex items-center justify-center shadow-xs">
                          <span className="text-brand font-mono text-sm font-extrabold">
                            {String(idx + 1).padStart(2, "0")}
                          </span>
                        </div>
                      </div>

                      {/* Content Card */}
                      <div className="flex-1 bg-white border border-line rounded-2xl p-6 shadow-xs hover:border-brand hover:shadow-sm transition-all duration-300">
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

        {/* ==========================================
            7. PARTNER MARQUEE & LOCATIONS SECTION
            ========================================== */}
        <Section variant="mist" size="default" id="partners">
          <Container>
            
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
              <div className="flex items-center justify-center gap-3">
                <div className="h-px w-6 bg-brand" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                  OEM & Technology Partners
                </span>
                <div className="h-px w-6 bg-brand" />
              </div>
              <h2 className="text-txt-strong font-black tracking-tight leading-tight">
                Certified, Trusted, Connected
              </h2>
              <p className="text-txt-muted text-sm leading-relaxed">
                We maintain active technical relationships and certifications with the world's leading industrial hardware and software vendors.
              </p>
            </div>

            {/* Loop Marquee */}
            <div className="relative overflow-hidden py-4 select-none mb-20">
              <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-mist to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-mist to-transparent z-10 pointer-events-none" />

              <div className="flex gap-4 animate-marquee whitespace-nowrap">
                {[...partners, ...partners].map((partner, idx) => (
                  <div 
                    key={idx}
                    className="flex-shrink-0 w-44 h-20 bg-white border border-line rounded-2xl flex items-center justify-center px-4 hover:border-brand/40 hover:shadow-xs transition-all duration-300"
                  >
                    <span className="text-txt-strong text-xs font-bold text-center tracking-tight truncate">
                      {partner}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Office Locations */}
            <div className="pt-12 border-t border-line/70">
              <h4 className="text-brand text-xs font-extrabold uppercase tracking-[0.25em] text-center mb-8">
                Where We Operate
              </h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[800px] mx-auto text-left">
                {locations.map((loc, idx) => (
                  <div 
                    key={idx}
                    className="bg-white border border-line rounded-2xl p-6 hover:border-brand transition-colors duration-300 shadow-xs flex items-start gap-4"
                  >
                    <div className="w-10 h-10 rounded-full bg-brand/5 flex items-center justify-center flex-shrink-0 text-brand">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h5 className="text-txt-strong font-extrabold text-base tracking-tight">
                        {loc.city}
                      </h5>
                      <p className="text-xs text-txt-muted mt-2 leading-relaxed">
                        {loc.address}
                      </p>
                      
                      <div className="flex flex-col sm:flex-row sm:items-center gap-x-3 gap-y-1 mt-4 pt-4 border-t border-line/60 font-mono text-xs">
                        <a 
                          href={`tel:${loc.phone.replace(/\s+/g, "")}`}
                          className="text-brand font-bold hover:text-brand-deep transition-colors"
                        >
                          {loc.phone}
                        </a>
                        <span className="hidden sm:inline text-line">|</span>
                        <a 
                          href={`mailto:${loc.email}`}
                          className="text-brand hover:text-brand-deep transition-colors truncate"
                        >
                          {loc.email}
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </Container>
        </Section>

        {/* ==========================================
            8. SIGNATURE CLOSING CTA
            ========================================== */}
        <Section variant="ink" size="hero" className="relative overflow-hidden flex items-center py-24 text-left">
          <div className="absolute inset-0 z-0 pointer-events-none">
            <Image
              src="/images/about/about-closing.jpg"
              alt="DHGsoft industrial engineering and automation validation"
              fill
              className="object-cover opacity-35"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-950/80 to-slate-950" />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-deep/20 via-transparent to-transparent" />
          </div>

          <Container className="relative z-10 w-full">
            <div className="max-w-3xl space-y-6">
              
              <div className="flex items-center gap-3">
                <div className="h-px w-10 bg-brand-hot" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-hot">
                  Partner with DHGsoft
                </span>
              </div>

              <h3 className="text-white text-4xl sm:text-[3.25rem] lg:text-[4.25rem] font-black tracking-tight leading-[1.1]">
                Building Value
                <br />
                <span className="text-gradient-brand">for Tomorrow.</span>
              </h3>

              <p className="text-slate-300 max-w-xl leading-relaxed text-body-md font-medium">
                Whether you are modernizing a single production line, connecting enterprise systems to the cloud, or building a secure data foundation — DHGsoft is your engineering partner from concept to commissioning.
              </p>

              <div className="pt-4 flex flex-wrap gap-4 items-center">
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
