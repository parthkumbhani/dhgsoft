// src/app/about/page.tsx
"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, ArrowRight, Quote, ArrowUpRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import { Section } from "@/components/ui/Section";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Verbatim Lists from existing components
const capabilities = [
  { label: "Industrial Automation", desc: "Advanced control systems, DCS, SCADA, and telemetry execution." },
  { label: "OT / IT Integration", desc: "Connecting physical factory floors with enterprise intelligence." },
  { label: "Industrial Data Platforms", desc: "Unified data streaming, historians, and operational databases." },
  { label: "Artificial Intelligence & Analytics", desc: "Predictive maintenance, anomaly detection, and operational optimization." },
  { label: "Industrial Internet of Things (IIoT)", desc: "Secure edge compute gateways and telemetry loops." },
  { label: "Digital Engineering", desc: "Custom software development, simulations, and virtual commissioning." },
  { label: "Enterprise Applications", desc: "Integration of modern ERP, MES, and PLM platforms." },
  { label: "Cloud Infrastructure", desc: "Resilient hybrid and multi-cloud architectures for critical workloads." },
  { label: "Cybersecurity", desc: "Zero-trust OT cybersecurity posture and network defense." },
  { label: "Managed Services", desc: "24/7/365 active operations support and continuous tuning." }
];

const features = [
  { title: "End-to-End Expertise", desc: "One trusted partner from consulting to long-term support." },
  { title: "Industrial Domain Knowledge", desc: "Deep understanding of manufacturing and industrial operations." },
  { title: "Connected Intelligence", desc: "Transforming industrial data into real-time business intelligence." },
  { title: "Technology Agnostic", desc: "Delivering the right solution using leading global technologies." },
  { title: "Customer-Centric Delivery", desc: "Every engagement is aligned with measurable customer outcomes." }
];

const differentiators = [
  {
    title: "End-to-End Digital Partner",
    desc: "Consulting • Engineering • Implementation • Managed Services • Continuous Improvement"
  },
  {
    title: "Industry Expertise",
    desc: "Deep experience across manufacturing, utilities, infrastructure, life sciences, and process industries."
  },
  {
    title: "Technology Excellence",
    desc: "Leveraging leading industrial and enterprise technologies to build scalable digital solutions."
  },
  {
    title: "Global Delivery",
    desc: "Flexible onsite, offshore, and hybrid delivery models supported by experienced engineering teams."
  }
];

const coreValues = [
  { title: "Innovation", desc: "Continuously embracing emerging technologies to solve complex industrial challenges." },
  { title: "Customer Success", desc: "Our customers' success defines our success." },
  { title: "Integrity", desc: "Building trusted relationships through transparency and ethical business practices." },
  { title: "Excellence", desc: "Delivering high-quality engineering and technology solutions with precision." },
  { title: "Collaboration", desc: "Working together with customers, partners, universities, and technology leaders to create lasting value." },
  { title: "Sustainability", desc: "Helping industries operate more efficiently while supporting environmental responsibility." }
];

const deliveryModels = ["Onsite Services", "Offshore Engineering", "Remote Operations", "24×7 Support", "Global Project Delivery"];
const locationTypes = ["Corporate Office", "Regional Offices", "Delivery Centers", "Partner Network"];

const partnerLogos = [
  { src: "/logos/aws.svg", alt: "AWS Logo", width: 80, height: 32 },
  { src: "/logos/microsoft-azure.svg", alt: "Microsoft Azure Logo", width: 120, height: 32 },
  { src: "/logos/schneider-electric.svg", alt: "Schneider Electric Logo", width: 130, height: 32 },
  { src: "/logos/aveva.svg", alt: "AVEVA Logo", width: 90, height: 32 },
  { src: "/logos/phoenix-contact.svg", alt: "Phoenix Contact Logo", width: 110, height: 32 },
  { src: "/logos/databricks.svg", alt: "Databricks Logo", width: 90, height: 32 }
];

// Special Section: 10 Navigation Panels for About Subpages
const explorePanels = [
  {
    title: "Overview",
    desc: "Our history, engineering focus, and corporate stats.",
    href: "/about/overview",
    img: "/about_engineering.png",
    gridClass: "md:col-span-8 h-[360px]",
    label: "Background"
  },
  {
    title: "Vision, Mission & Values",
    desc: "OT/IT bridge philosophy and core values.",
    href: "/about/vision-mission-values",
    img: "/about_values.png",
    gridClass: "md:col-span-4 h-[360px]",
    label: "Philosophy"
  },
  {
    title: "Leadership Team",
    desc: "Meet our systems architects and executives.",
    href: "/about/leadership",
    img: "/about_collaboration.png",
    gridClass: "md:col-span-4 h-[480px] md:row-span-2",
    label: "Leadership"
  },
  {
    title: "Why DHGsoft",
    desc: "Zero-downtime integration & client SLAs.",
    href: "/about/why-dhgsoft",
    img: "/about_hero_cinematic.png",
    gridClass: "md:col-span-4 h-[224px]",
    label: "Advantage"
  },
  {
    title: "Partners Ecosystem",
    desc: "Collaborating with global solutions vendors.",
    href: "/about/partners",
    img: "/smart_factory_visual.png",
    gridClass: "md:col-span-4 h-[224px]",
    label: "Collaboration"
  },
  {
    title: "Technology Partners",
    desc: "Cloud, hardware, and SCADA alliances.",
    href: "/about/technology-partners",
    img: "/about_hero.png",
    gridClass: "md:col-span-8 h-[224px]",
    label: "Alliances"
  },
  {
    title: "Sustainability & ESG",
    desc: "Clean operations and green computing.",
    href: "/about/sustainability-esg",
    img: "/energy_visual.png",
    gridClass: "md:col-span-4 h-[480px] md:row-span-2",
    label: "Responsibility"
  },
  {
    title: "Ethics & Compliance",
    desc: "Zero-trust standards & regulatory compliance.",
    href: "/about/ethics-compliance",
    img: "/office_blur.png",
    gridClass: "md:col-span-4 h-[224px]",
    label: "Governance"
  },
  {
    title: "Recognition",
    desc: "Industry awards and engineering certs.",
    href: "/about/recognition",
    img: "/about_collaboration.png",
    gridClass: "md:col-span-4 h-[224px]",
    label: "Achievements"
  },
  {
    title: "Locations",
    desc: "Global offices, command centers, and hubs.",
    href: "/about/locations",
    img: "/about_global.png",
    gridClass: "md:col-span-8 h-[224px]",
    label: "Footprint"
  }
];

export default function AboutPage() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-800 antialiased font-sans selection:bg-[#B4123F] selection:text-white">
      {/* Navigation Header */}
      <Header onContactClick={() => setIsContactOpen(true)} />

      <main className="relative pt-20">
        
        {/* =========================================================================
            SECTION 01: Hero (Large full-width cinematic image)
           ========================================================================= */}
        <Section variant="ink" size="hero" pattern="none" className="relative min-h-[550px] md:min-h-[650px] flex items-center overflow-hidden">
          {/* Background image & deep editorial gradient */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/about_hero.png"
              alt="DHGsoft connected smart factory telemetry framework"
              fill
              priority
              className="object-cover object-center opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />
            <div className="absolute inset-0 bg-tech-grid opacity-[0.015] pointer-events-none" />
          </div>

          <div className="w-full relative z-10 py-16 md:py-24">
            <div className="max-w-4xl text-left space-y-6">
              {/* Breadcrumbs */}
              <div className="flex items-center gap-1 text-slate-400 text-xs sm:text-sm font-semibold tracking-wide">
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
                <ChevronRight className="w-3.5 h-3.5" />
                <span className="text-brand-hot">About Us</span>
              </div>

              <span className="section-eyebrow">ABOUT DHGSOFT</span>
              
              <h1 className="heading-hero text-white">
                Engineering the Future of Connected Industries
              </h1>
 
              <p className="text-body-md text-slate-300 max-w-2xl font-sans font-medium leading-relaxed">
                DHGsoft is a global Industrial Digital Transformation company helping organizations connect operations, data, applications, and people to create intelligent, efficient, and sustainable enterprises.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <button
                  onClick={() => setIsContactOpen(true)}
                  className={cn(
                    buttonVariants({ variant: "primary", size: "lg" }),
                    "h-12 px-8 flex items-center justify-center gap-2 group cursor-pointer text-white font-bold rounded-xl bg-gradient-to-r from-brand to-brand-deep hover:-translate-y-[2px] transition-all duration-300 shadow-md shadow-brand/10"
                  )}
                >
                  <span>Schedule a Consultation</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
                <a
                  href="#overview"
                  className="border border-white/20 hover:border-white hover:bg-white/5 text-white rounded-xl font-bold h-12 px-8 flex items-center justify-center transition-all duration-300 hover:-translate-y-[2px]"
                >
                  Explore Our Story
                </a>
              </div>
            </div>
          </div>
        </Section>


        {/* =========================================================================
            SECTION 02: Company Overview (Editorial split layout)
           ========================================================================= */}
        <Section id="overview" variant="white" size="snug" pattern="none" className="border-b border-line relative">
          {/* Subtle blueprint grid texture (opacity < 2%) */}
          <div
            className="absolute inset-0 bg-tech-grid opacity-[0.01] pointer-events-none z-0"
            style={{
              backgroundImage:
                "linear-gradient(rgba(15, 23, 42, 0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(15, 23, 42, 0.04) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />

          <div className="w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left: Content */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <span className="section-eyebrow">COMPANY OVERVIEW</span>
              
              <div className="space-y-5 text-body-sm text-txt-muted font-sans font-medium leading-relaxed">
                <p>
                  Founded with a vision to accelerate industrial innovation, DHGsoft delivers end-to-end digital engineering, industrial automation, OT/IT integration, AI, cloud, cybersecurity, and operational intelligence solutions.
                </p>
                <p>
                  We help manufacturers, utilities, infrastructure providers, and process industries modernize operations by connecting plant-floor assets with enterprise systems and cloud technologies.
                </p>
                <p>
                  Our expertise spans the complete digital transformation lifecycle—from consulting and solution architecture to implementation, managed services, and continuous optimization.
                </p>
                <p className="font-extrabold text-txt-strong text-body-md border-l-2 border-brand pl-4 mt-8">
                  Whether enabling a smart factory, implementing industrial data platforms, modernizing enterprise applications, or deploying AI-driven operational intelligence, DHGsoft delivers measurable business outcomes that improve productivity, reliability, safety, and sustainability.
                </p>
              </div>
            </div>

            {/* Right: Rounded Image */}
            <div className="lg:col-span-6 relative aspect-[4/3] rounded-[24px] overflow-hidden shadow-sm border border-line bg-slate-50">
              <Image
                src="/about_engineering.png"
                alt="DHGsoft engineers verifying automation and digital twin telemetry parameters"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
            </div>
          </div>
        </Section>


        {/* =========================================================================
            SECTION 03: What We Do (Image collage of capabilities)
           ========================================================================= */}
        <Section variant="mist" size="snug" pattern="none" className="border-b border-line relative">
          <div className="w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left third: Info & image collage */}
            <div className="lg:col-span-5 text-left space-y-8 sticky top-28">
              <div className="space-y-4">
                <span className="section-eyebrow">WHAT WE DO</span>
                <h2 className="text-3xl font-extrabold text-txt-strong tracking-tight font-sans leading-tight">
                  Integrating operational loops with software ecosystems.
                </h2>
                <p className="text-body-sm text-txt-muted font-sans font-medium leading-relaxed">
                  We design, build, integrate, and manage intelligent industrial ecosystems by combining core capabilities across modern technologies.
                </p>
              </div>

              {/* Overlapping collage frame */}
              <div className="relative aspect-[16/10] rounded-[20px] overflow-hidden border border-line shadow-sm bg-slate-100 hidden md:block">
                <Image
                  src="/smart_factory_visual.png"
                  alt="Industrial control systems operations dashboard and robotics assembly line"
                  fill
                  className="object-cover"
                  sizes="35vw"
                />
              </div>
            </div>

            {/* Right: Capabilities clean table layout (no generic bootstrap cards) */}
            <div className="lg:col-span-7 border-t border-line divide-y divide-line">
              {capabilities.map((cap, i) => (
                <div key={cap.label} className="py-5 select-none">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 items-start">
                    <div className="md:col-span-2 text-brand font-mono font-extrabold text-xs">
                      0{i + 1}
                    </div>
                    <div className="md:col-span-10 space-y-1">
                      <h4 className="font-extrabold text-txt-strong text-base tracking-tight font-sans">
                        {cap.label}
                      </h4>
                      <p className="text-xs text-txt-muted font-sans font-semibold leading-relaxed">
                        {cap.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </Section>


        {/* =========================================================================
            SECTION 04: Why DHGsoft / Differentiators (Magazine layout)
           ========================================================================= */}
        <Section variant="white" size="snug" pattern="none" className="border-b border-line relative">
          <div className="w-full relative z-10 space-y-16">
            
            {/* Header */}
            <div className="text-left max-w-2xl">
              <span className="section-eyebrow">WHY DHGSOFT</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-txt-strong tracking-tight mt-3 font-sans leading-tight">
                Our Distinctive Approach to Industrial Engineering
              </h2>
            </div>

            {/* Magazine Spread: Differentiators with overlapping crops */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              {/* Left Column: Overlapping imagery and Differentiators */}
              <div className="lg:col-span-7 space-y-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {differentiators.map((diff, idx) => (
                    <div key={diff.title} className="space-y-3 text-left">
                      <div className="h-[1px] bg-brand w-8 mb-4" />
                      <h4 className="text-md font-extrabold text-txt-strong font-sans tracking-tight">
                        {diff.title}
                      </h4>
                      <p className="text-xs text-txt-muted font-sans font-semibold leading-relaxed">
                        {diff.desc}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Overlapping offset image row */}
                <div className="grid grid-cols-2 gap-6 pt-4">
                  <div className="relative aspect-[4/3] rounded-[18px] overflow-hidden border border-line shadow-xs transform rotate-[-1deg]">
                    <Image
                      src="/about_global.png"
                      alt="Global operations command sync center"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative aspect-[4/3] rounded-[18px] overflow-hidden border border-line shadow-xs transform translate-y-4 rotate-[1deg]">
                    <Image
                      src="/about_collaboration.png"
                      alt="Consulting group at whiteboard sync session"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Right Column: Narrative with quote callout */}
              <div className="lg:col-span-5 space-y-8 bg-slate-50 border border-line p-8 rounded-[24px] text-left">
                <span className="text-[10px] font-bold text-brand uppercase tracking-wider font-mono">Core Advantages</span>
                
                <h3 className="text-xl font-extrabold text-txt-strong font-sans tracking-tight leading-snug">
                  Transforming raw machine telemetry into real-time operational value.
                </h3>
                
                <p className="text-xs md:text-sm text-txt-muted font-sans font-semibold leading-relaxed">
                  We bridge the gap between plant floor controls and enterprise cloud systems. Through deep domain experience, agnostic architecture planning, and outcomes-driven delivery models, we guarantee zero-downtime pipeline alignment for complex operations.
                </p>

                {/* Alternating feature rows */}
                <div className="space-y-4 pt-6 border-t border-line">
                  {features.map((feat) => (
                    <div key={feat.title} className="flex gap-4 items-start select-none">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand shrink-0 mt-2" />
                      <div>
                        <h5 className="text-xs font-extrabold text-txt-strong font-sans">{feat.title}</h5>
                        <p className="text-[11px] text-txt-muted font-sans font-semibold mt-0.5">{feat.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </Section>


        {/* =========================================================================
            SECTION 05: Vision, Mission & Purpose (Large panoramic image)
           ========================================================================= */}
        <Section variant="ink" size="hero" pattern="none" className="relative overflow-hidden text-center border-b border-line">
          {/* Panoramic background image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/about_hero_cinematic.png"
              alt="Panoramic automation and digital twin visualization panel"
              fill
              className="object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/90 to-slate-950" />
            <div className="absolute inset-0 bg-tech-grid opacity-[0.015] pointer-events-none" />
          </div>

          <div className="relative z-10 w-full max-w-4xl mx-auto space-y-16 py-12">
            {/* Purpose callout */}
            <div className="space-y-3">
              <span className="section-eyebrow on-dark">OUR PURPOSE</span>
              <h2 className="text-3xl sm:text-4xl md:text-[50px] font-black text-white tracking-tight leading-tight font-sans">
                Connecting Intelligence to Transform Industry.
              </h2>
            </div>

            {/* Vision & Mission Split */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left pt-6 border-t border-white/10">
              <div className="space-y-3">
                <span className="section-eyebrow on-dark">OUR VISION</span>
                <p className="text-sm md:text-base text-slate-300 font-sans font-medium leading-relaxed">
                  To become a globally trusted leader in Industrial Digital Transformation by enabling connected, intelligent, and sustainable industries.
                </p>
              </div>

              <div className="space-y-3">
                <span className="section-eyebrow on-dark">OUR MISSION</span>
                <p className="text-sm md:text-base text-slate-300 font-sans font-medium leading-relaxed">
                  To empower industries with innovative digital engineering solutions that connect operational technology, enterprise systems, and data intelligence to improve operational excellence and business performance.
                </p>
              </div>
            </div>

            {/* Core Values Minimalist List (No colorful icons) */}
            <div className="pt-12 border-t border-white/10">
              <div className="text-left mb-8">
                <span className="section-eyebrow on-dark">CORE VALUES</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
                {coreValues.map((val) => (
                  <div key={val.title} className="p-5 border border-white/10 rounded-xl bg-white/5 select-none hover:border-brand/40 transition-colors">
                    <h4 className="text-sm font-extrabold text-white font-sans tracking-tight">
                      {val.title}
                    </h4>
                    <p className="text-[11px] text-slate-400 font-sans font-semibold leading-relaxed mt-2">
                      {val.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </Section>


        {/* =========================================================================
            SECTION 07: Editorial Quotes / Leadership & Recognition
           ========================================================================= */}
        <Section variant="white" size="snug" pattern="none" className="border-b border-line relative">
          <div className="w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left: CEO Profile (clean offset borders, natural light portrait) */}
            <div className="lg:col-span-5 relative w-full aspect-[3/4] max-w-[360px] mx-auto rounded-[24px] overflow-hidden border border-line bg-slate-50 p-1 group">
              <div className="relative w-full h-full rounded-[20px] overflow-hidden bg-slate-100">
                <Image
                  src="/CEO_nobg_clean.png"
                  alt="Hitesh Patel, Chief Executive Officer at DHGsoft"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 35vw"
                />
              </div>
              <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-white border border-line z-20 flex items-center gap-1.5 pointer-events-none shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-brand" />
                <span className="text-[8px] font-bold uppercase tracking-widest text-txt-strong font-mono">Executive Profile</span>
              </div>
            </div>

            {/* Right: Text and Quote Philosophy */}
            <div className="lg:col-span-7 text-left space-y-6">
              <span className="section-eyebrow">LEADERSHIP</span>
              <h2 className="text-3xl font-extrabold text-txt-strong font-sans tracking-tight leading-tight">
                DHGsoft Leadership Team
              </h2>
              
              <div className="space-y-4 text-body-sm text-txt-muted font-sans font-medium leading-relaxed">
                <p>
                  DHGsoft is led by experienced professionals passionate about engineering innovation, industrial technology, and digital transformation.
                </p>
                <p>
                  Our leadership combines expertise in industrial automation, enterprise technology, cloud computing, AI, operational excellence, and business strategy to deliver long-term value for customers worldwide.
                </p>
              </div>

              {/* Leadership Philosophy stacked items */}
              <div className="p-6 rounded-[20px] border border-line bg-slate-50 max-w-md space-y-4">
                <div className="flex items-center gap-2 text-brand">
                  <Quote className="w-4 h-4" />
                  <span className="text-[10px] font-bold uppercase tracking-wider font-mono text-txt-strong">
                    Leadership Philosophy
                  </span>
                </div>
                <div className="space-y-2 text-xs sm:text-sm font-extrabold text-txt-strong font-mono">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand" />
                    <span>Lead with innovation.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand" />
                    <span>Deliver with excellence.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand" />
                    <span>Grow through collaboration.</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </Section>


        {/* =========================================================================
            SECTION 08: Global Presence & Partner Ecosystem
           ========================================================================= */}
        <Section variant="mist" size="snug" pattern="none" className="border-b border-line relative">
          <div className="w-full relative z-10 space-y-16">
            
            {/* Global delivery model row */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              <div className="lg:col-span-6 text-left space-y-6">
                <span className="section-eyebrow">GLOBAL PRESENCE</span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-txt-strong tracking-tight font-sans">
                  DHGsoft serves customers through a flexible global delivery model.
                </h2>
                
                <div className="grid grid-cols-2 gap-8 pt-4 border-t border-line">
                  {/* Delivery Models */}
                  <div className="space-y-3">
                    <h5 className="text-[10px] font-extrabold text-brand uppercase tracking-wider font-mono">Delivery Model</h5>
                    <ul className="space-y-1.5">
                      {deliveryModels.map((item) => (
                        <li key={item} className="text-xs text-txt-muted font-sans font-semibold">{item}</li>
                      ))}
                    </ul>
                  </div>
                  {/* Location Types */}
                  <div className="space-y-3">
                    <h5 className="text-[10px] font-extrabold text-brand uppercase tracking-wider font-mono">Locations</h5>
                    <ul className="space-y-1.5">
                      {locationTypes.map((item) => (
                        <li key={item} className="text-xs text-txt-muted font-sans font-semibold">{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Map/Global Image */}
              <div className="lg:col-span-6 relative aspect-[16/10] rounded-[24px] overflow-hidden border border-line shadow-sm bg-slate-50">
                <Image
                  src="/about_global.png"
                  alt="DHGsoft global network operations map"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Partner Ecosystem details */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start pt-12 border-t border-line">
              <div className="lg:col-span-7 text-left space-y-6">
                <span className="section-eyebrow">COLLABORATIONS</span>
                <h3 className="text-2xl font-extrabold text-txt-strong font-sans tracking-tight">
                  Partner Ecosystem
                </h3>
                <p className="text-brand font-extrabold text-sm md:text-base font-sans">
                  Innovation happens through collaboration.
                </p>
                <p className="text-body-sm text-txt-muted font-sans font-medium leading-relaxed">
                  DHGsoft works closely with customers, technology providers, universities, research institutions, system integrators, and industry experts to deliver future-ready solutions.
                </p>

                {/* Grayscale partner logos */}
                <div className="pt-6 border-t border-line flex flex-wrap items-center gap-6 md:gap-8 opacity-40">
                  {partnerLogos.map((logo) => (
                    <div key={logo.alt} className="relative h-8 w-24 flex items-center justify-center grayscale">
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        width={logo.width}
                        height={logo.height}
                        className="object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5 relative aspect-[4/3] rounded-[24px] overflow-hidden border border-line shadow-sm bg-slate-50">
                <Image
                  src="/about_collaboration.png"
                  alt="DHGsoft strategic partnership alliances meeting"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

          </div>
        </Section>


        {/* =========================================================================
            SECTION 06: Special Section - Explore DHGsoft (Special Section / Navigation gallery)
           ========================================================================= */}
        <Section variant="white" size="snug" pattern="none" className="border-b border-line relative">
          <div className="w-full relative z-10 space-y-12">
            {/* Section Header */}
            <div className="text-left max-w-xl">
              <span className="section-eyebrow">EXPLORE DHGSOFT</span>
              <h2 className="heading-section text-txt-strong mt-3 font-sans font-extrabold text-3xl tracking-tight leading-tight">
                About Sections
              </h2>
            </div>

            {/* Navigation Grid of Panels — Asymmetrical Masonry-style Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 relative">
              {explorePanels.map((panel, idx) => (
                <Link
                  key={panel.title}
                  href={panel.href}
                  className={cn(
                    "group relative rounded-[24px] overflow-hidden border border-line shadow-xs bg-slate-950 flex flex-col justify-end p-6 select-none transition-all duration-500 hover:-translate-y-1.5 hover:shadow-md hover:border-brand/40",
                    panel.gridClass
                  )}
                >
                  {/* Photo Background with Zoom Hover */}
                  <Image
                    src={panel.img}
                    alt={panel.title}
                    fill
                    className="object-cover opacity-45 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03] group-hover:opacity-60"
                    sizes="(max-width: 1024px) 100vw, 45vw"
                  />
                  {/* Bottom Vignette Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent z-10" />

                  {/* Title, Category Label & Short Subtitle */}
                  <div className="relative z-20 space-y-2 text-left">
                    <span className="text-[9px] font-bold text-brand uppercase tracking-wider font-mono px-2 py-0.5 rounded bg-white/10 backdrop-blur-xs border border-white/5 inline-block">
                      {panel.label}
                    </span>
                    
                    <div className="flex items-center gap-1.5 text-white">
                      <h4 className="font-extrabold text-white text-base md:text-lg tracking-tight font-sans group-hover:text-brand transition-colors">
                        {panel.title}
                      </h4>
                      <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-1.5 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-white" />
                    </div>
                    
                    <p className="text-2xs md:text-xs text-slate-300 font-sans font-medium line-clamp-2 leading-relaxed">
                      {panel.desc}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </Section>


        {/* =========================================================================
            SECTION 08: Closing CTA (Large closing banner)
           ========================================================================= */}
        <section className="relative w-full py-20 md:py-28 overflow-hidden bg-slate-50 border-t border-line">
          {/* Real Team Background Photo */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/office_blur.png"
              alt="DHGsoft digital engineering and smart automation design office workspace"
              fill
              className="object-cover object-center opacity-85"
              sizes="100vw"
            />
            {/* Pure white overlay for light editorial theme */}
            <div className="absolute inset-0 bg-white/95" />
          </div>

          <div
            className="absolute inset-0 bg-tech-grid opacity-[0.012] pointer-events-none z-10"
            style={{
              backgroundImage:
                "linear-gradient(rgba(15, 23, 42, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(15, 23, 42, 0.05) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />

          <div className="relative z-20 mx-auto w-full max-w-site px-gutter md:px-gutter-md flex flex-col items-center text-center">
            <span className="section-eyebrow">FORWARD PERSPECTIVE</span>

            <h2 className="heading-hero text-txt-strong text-center leading-[1.1] tracking-tight font-sans font-extrabold max-w-3xl mt-6">
              Build tomorrow&apos;s industries—today.
            </h2>

            <p className="section-subtitle text-txt-muted max-w-[620px] mx-auto mt-6 font-sans font-semibold">
              DHGsoft continues investing in innovation, talent, strategic partnerships, and emerging technologies to shape the future of connected industries and intelligent enterprises.
            </p>

            <div className="pt-8">
              <button
                onClick={() => setIsContactOpen(true)}
                className="bg-gradient-to-r from-brand to-brand-deep hover:-translate-y-[2px] text-white font-bold text-sm px-8 py-4 rounded-xl transition-all duration-300 shadow-md cursor-pointer inline-flex items-center gap-2"
              >
                <span>Schedule a Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>

      </main>

      {/* Shared Footer */}
      <Footer />

      {/* Contact Interaction Overlay */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        showToast={() => {}}
      />
    </div>
  );
}
export { AboutPage };
