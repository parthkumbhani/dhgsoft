// src/components/industries/IndustryTemplate.tsx
"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, ArrowUpRight, ArrowRight, ShieldCheck, Zap } from "lucide-react";
import { motion, useInView } from "framer-motion";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import DigitalOverlay from "./DigitalOverlay";
import ConnectedOperations from "./ConnectedOperations";
import Gallery from "./Gallery";
import IndustrySwitcher from "./IndustrySwitcher";
import { IndustryData, INDUSTRIES_MAP } from "@/lib/industries";

// Static mapping for capability names to premium Unsplash images
const capabilityImageMap: Record<string, string> = {
  "Industrial Digital Transformation": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80",
  "Industrial Internet of Things (IIoT)": "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80",
  "Artificial Intelligence & Analytics": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
  "Enterprise Applications": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80",
  "OT / IT Integration": "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80",
  "Industrial Data Platforms": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80",
  "Cybersecurity": "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=600&q=80",
  "Cloud & Infrastructure": "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80",
  "Managed Services": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80",
  "Digital Engineering Services": "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=600&q=80"
};

const defaultCapImage = "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80";

// Micro count-up component to handle [XX]% replacements
interface CountUpProps {
  text: string;
}

function CountUp({ text }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [current, setCurrent] = useState(0);

  // Parse target number: defaults to a typical realistic metric if [XX]% is found
  // For downtime -> 35%, OEE -> 28%, validation -> 40%, cost -> 18%, yield -> 15%
  let target = 35;
  if (text.toLowerCase().includes("oee")) target = 28;
  else if (text.toLowerCase().includes("downtime")) target = 45;
  else if (text.toLowerCase().includes("quality")) target = 18;
  else if (text.toLowerCase().includes("validation")) target = 40;
  else if (text.toLowerCase().includes("cost")) target = 22;
  else if (text.toLowerCase().includes("throughput")) target = 32;
  else if (text.toLowerCase().includes("scrap")) target = 15;
  else if (text.toLowerCase().includes("speed")) target = 25;

  // If text already has a number like "100% GxP", use that instead of counting placeholder
  const match = text.match(/(\d+)%/);
  if (match) {
    target = parseInt(match[1]);
  }

  useEffect(() => {
    if (!isInView) return;
    
    let start = 0;
    const duration = 2000; // 2 seconds
    const startTime = performance.now();

    function animate(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Ease out quad
      const easeProgress = progress * (2 - progress);
      const val = Math.floor(easeProgress * target);
      
      setCurrent(val);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    }

    requestAnimationFrame(animate);
  }, [isInView, target]);

  // Re-assemble outcome text with animated count-up
  const renderText = () => {
    if (text.includes("[XX]%")) {
      return text.replace("[XX]%", `${current}%`);
    }
    if (text.includes("100%")) {
      return text.replace("100%", `${current}%`);
    }
    return text;
  };

  return (
    <span ref={ref} className="transition-all duration-300">
      {renderText()}
    </span>
  );
}

interface IndustryTemplateProps {
  data: IndustryData;
}

export default function IndustryTemplate({ data }: IndustryTemplateProps) {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const allIndustries = Object.values(INDUSTRIES_MAP);

  // Look up actual sibling industry objects to retrieve their hero photos as card thumbnails
  const relatedIndustriesWithImages = data.related.map((rel) => {
    // Find industry by path matching (extract slug from href)
    const slug = rel.href.split("/").pop() || "";
    const siblingData = INDUSTRIES_MAP[slug];
    return {
      name: rel.name,
      href: rel.href,
      image: siblingData?.image || { src: defaultCapImage, alt: rel.name }
    };
  });

  return (
    <div className="min-h-screen bg-[#F4F5F7] text-slate-800 antialiased font-sans selection:bg-[#B4123F] selection:text-white">
      {/* Sticky Header */}
      <Header onContactClick={() => setIsContactOpen(true)} />

      <main className="relative pt-20">
        
        {/* 1) Cinematic Photo Hero */}
        <section className="relative bg-ink overflow-hidden min-h-[640px] flex items-center border-b border-slate-900">
          <div className="absolute inset-0 z-0">
            <Image
              src={data.image.src}
              alt={data.image.alt}
              fill
              className="object-cover opacity-25"
              priority
            />
            {/* Deep premium gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-transparent pointer-events-none z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/30 pointer-events-none z-10" />
          </div>

          {/* Interactive Digital Intelligence Overlay */}
          <DigitalOverlay nodes={data.hudNodes} />
          
          <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-[120px] w-full py-20 relative z-30">
            {/* Breadcrumbs */}
            <div className="flex items-center gap-1.5 text-slate-400 text-xs font-semibold tracking-wide mb-6">
              <Link href="/industries" className="hover:text-white transition-colors">
                Industries
              </Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-brand-hot">{data.title}</span>
            </div>

            <div className="max-w-3xl space-y-6 text-left">
              <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-brand-hot font-mono block">
                {data.category.toUpperCase()}
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-black text-white tracking-tight leading-[1.05]">
                {data.title}
              </h1>
              <p className="text-slate-300 font-medium text-base sm:text-lg leading-relaxed max-w-2xl">
                {data.sub}
              </p>
              <div className="pt-4 flex flex-wrap gap-4">
                <button
                  onClick={() => setIsContactOpen(true)}
                  className="bg-[#B4123F] hover:bg-[#E11D5C] text-white font-extrabold text-sm sm:text-base px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-brand/20 active:scale-95 cursor-pointer"
                >
                  Talk to an Expert
                </button>
                <Link
                  href="/industries"
                  className="border border-slate-700 hover:border-slate-500 text-white font-extrabold text-sm sm:text-base px-8 py-4 rounded-xl transition-all duration-300 active:scale-95 flex items-center justify-center"
                >
                  Explore Industries
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Sticky Industry Switcher directly below Hero */}
        <IndustrySwitcher industries={allIndustries} activeSlug={data.slug} />

        {/* 2) The Landscape - Split Section */}
        <section className="bg-white py-24 border-b border-line relative overflow-hidden">
          <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-[120px]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Text Side */}
              <div className="lg:col-span-6 space-y-6 text-left">
                <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-brand font-mono block">
                  THE LANDSCAPE
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-text-strong tracking-tight leading-tight">
                  Navigating Structural Shift
                </h2>
                <p className="text-text-strong font-medium text-xl sm:text-2xl leading-relaxed italic border-l-4 border-brand pl-6">
                  &ldquo;{data.landscape}&rdquo;
                </p>
              </div>

              {/* Image Side */}
              <div className="lg:col-span-6">
                <div className="relative aspect-[16/10] rounded-3xl overflow-hidden shadow-xl border border-line group">
                  <Image
                    src={data.overviewImage.src}
                    alt={data.overviewImage.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 3) Challenges → How We Help - Unified Visual Block */}
        <section className="bg-[#F4F5F7] py-24 border-b border-line relative overflow-hidden">
          <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-[120px] space-y-12">
            <div className="text-left max-w-xl space-y-2">
              <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-brand font-mono block">
                OPERATIONAL DIAGNOSTIC
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-text-strong tracking-tight leading-tight">
                Aligning Challenges to Solutions
              </h2>
            </div>

            {/* Split layout: 2-column metrics beside vertical image */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              
              {/* Challenges and solutions columns */}
              <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                
                {/* Column 1: Industry Challenges */}
                <div className="space-y-6">
                  <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                    <span className="h-2 w-2 rounded-full bg-brand" />
                    <h3 className="font-extrabold text-xs tracking-wider uppercase text-text-strong font-mono">
                      Critical Bottlenecks
                    </h3>
                  </div>
                  
                  <div className="space-y-4">
                    {data.challenges.map((challenge, idx) => (
                      <div 
                        key={idx} 
                        className="bg-white border border-line rounded-2xl p-5 shadow-sm flex items-start gap-4 hover:border-brand/30 transition-colors text-left"
                      >
                        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-brand/5 text-brand shrink-0 text-xs font-extrabold font-mono border border-brand/10">
                          0{idx + 1}
                        </div>
                        <p className="font-extrabold text-text-strong text-sm sm:text-base leading-snug pt-1">
                          {challenge}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Column 2: How We Help */}
                <div className="space-y-6">
                  <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                    <span className="h-2 w-2 rounded-full bg-emerald-500" />
                    <h3 className="font-extrabold text-xs tracking-wider uppercase text-text-strong font-mono">
                      Architected Solution
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {data.howWeHelp.map((sol, idx) => (
                      <div 
                        key={idx} 
                        className="bg-white border border-line rounded-2xl p-5 shadow-sm flex items-start gap-4 hover:border-emerald-500/30 transition-colors text-left"
                      >
                        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-emerald-500/5 text-emerald-600 shrink-0 text-xs font-extrabold font-mono border border-emerald-500/10">
                          0{idx + 1}
                        </div>
                        <p className="font-extrabold text-text-strong text-sm sm:text-base leading-snug pt-1">
                          {sol}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Column 3: Support Image */}
              <div className="lg:col-span-4">
                <div className="relative w-full h-full min-h-[320px] rounded-3xl overflow-hidden shadow-xl border border-line group">
                  <Image
                    src={data.supportImage.src}
                    alt={data.supportImage.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 4) In Focus - Image Mosaic Gallery */}
        <Gallery images={data.gallery} />

        {/* 5) Connected Operations - Animated SVG Diagram */}
        <ConnectedOperations
          industryName={data.title}
          assets={data.connectedAssets}
          caption={`Logical architecture maps telemetry from physical field equipment to compliant enterprise data layers in ${data.title}.`}
        />

        {/* 6) Business Outcomes - Airy Stat/Outcome cards with count-up animation */}
        <section className="bg-white py-24 border-b border-line relative overflow-hidden">
          <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-[120px] space-y-12">
            <div className="text-left max-w-xl space-y-4">
              <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-brand font-mono block">
                BUSINESS OUTCOMES
              </span>
              <h3 className="text-3xl sm:text-4xl font-black text-text-strong tracking-tight leading-tight">
                Quantifiable Operational Impact
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
              {data.outcomes.map((outcome, idx) => (
                <div
                  key={idx}
                  className="bg-[#F4F5F7] border border-line rounded-2xl p-8 flex flex-col justify-between hover:border-brand/40 transition-all duration-300 group hover:-translate-y-1 shadow-sm"
                >
                  <div className="space-y-6">
                    <div className="w-10 h-10 rounded-xl bg-brand/5 text-brand flex items-center justify-center border border-brand/10 group-hover:scale-110 transition-transform duration-300">
                      <Zap className="w-5 h-5 text-brand" />
                    </div>
                    <h4 className="font-extrabold text-text-strong text-xl tracking-tight leading-snug">
                      <CountUp text={outcome} />
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7) Relevant Capabilities + Related Industries */}
        <section className="bg-[#F4F5F7] py-24 border-b border-line relative overflow-hidden">
          <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-[120px] space-y-16">
            
            {/* Capabilities Row */}
            <div className="space-y-8">
              <div className="text-left">
                <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-brand font-mono block">
                  RELEVANT CAPABILITIES
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-text-strong tracking-tight mt-2">
                  Engineered Platforms & Systems
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                {data.relevantCapabilities.slice(0, 3).map((cap, idx) => {
                  const capImg = capabilityImageMap[cap.name] || defaultCapImage;
                  return (
                    <Link
                      key={idx}
                      href={cap.href}
                      className="bg-white border border-line rounded-3xl overflow-hidden shadow-sm hover:shadow-lg hover:border-brand/40 hover:-translate-y-1.5 transition-all duration-300 flex flex-col group"
                    >
                      <div className="relative w-full h-[180px] overflow-hidden">
                        <Image
                          src={capImg}
                          alt={cap.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                      </div>
                      
                      <div className="p-6 flex-grow flex flex-col justify-between">
                        <h4 className="font-extrabold text-text-strong text-lg tracking-tight leading-snug group-hover:text-brand transition-colors">
                          {cap.name}
                        </h4>
                        <div className="pt-6 flex items-center gap-1.5 text-brand font-extrabold text-xs tracking-wider uppercase">
                          <span>Capabilities</span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Related Industries Row */}
            <div className="space-y-8 pt-8 border-t border-slate-200">
              <div className="text-left">
                <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-brand font-mono block">
                  RELATED INDUSTRIES
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-text-strong tracking-tight mt-2">
                  Cross-Domain Synergies
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                {relatedIndustriesWithImages.slice(0, 3).map((rel, idx) => (
                  <Link
                    key={idx}
                    href={rel.href}
                    className="bg-white border border-line rounded-3xl overflow-hidden shadow-sm hover:shadow-lg hover:border-brand/40 hover:-translate-y-1.5 transition-all duration-300 flex flex-col group"
                  >
                    <div className="relative w-full h-[180px] overflow-hidden">
                      <Image
                        src={rel.image.src}
                        alt={rel.image.alt}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                    </div>

                    <div className="p-6 flex-grow flex flex-col justify-between">
                      <h4 className="font-extrabold text-text-strong text-lg tracking-tight leading-snug group-hover:text-brand transition-colors">
                        {rel.name}
                      </h4>
                      <div className="pt-6 flex items-center gap-1.5 text-brand font-extrabold text-xs tracking-wider uppercase">
                        <span>Explore vertical</span>
                        <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* 8) CTA Band (Crimson Gradient) */}
        <section className="relative overflow-hidden bg-gradient-to-r from-[#E11D5C] via-[#B4123F] to-[#A10E38] py-24 text-center">
          <div className="absolute inset-0 bg-ink/10 pointer-events-none" />
          <div className="absolute inset-0 bg-tech-grid opacity-15 pointer-events-none" />
          <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-[120px] relative z-10 space-y-6">
            <span className="text-xs font-extrabold uppercase tracking-[0.3em] text-white/95 font-mono block">
              TRANSFORM OPERATIONS
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-[46px] font-black text-white tracking-tight leading-tight">
              Ready to transform your {data.title.replace("Management", "").replace("(CPG)", "").trim()} operations?
            </h2>
            <div className="pt-6">
              <button
                onClick={() => setIsContactOpen(true)}
                className="bg-white hover:bg-slate-100 text-brand font-extrabold text-sm sm:text-base px-8 py-4 rounded-xl transition-all duration-300 shadow-md active:scale-95 cursor-pointer hover:shadow-lg"
              >
                Schedule a Consultation
              </button>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <Footer />

      {/* Contact Modal */}
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} showToast={(msg, type) => {}} />
    </div>
  );
}
