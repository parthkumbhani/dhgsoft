// src/components/insights/CaseStudyDetail.tsx
"use client";
import { Section } from "@/components/ui/Section";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronRight, Award, Activity, ShieldAlert, Cpu } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import { CaseStudy } from "@/lib/insights";

interface CaseStudyDetailProps {
  caseStudy: CaseStudy;
  relatedStudies: CaseStudy[];
}

function CountUpMetric({ value }: { value: string }) {
  const [displayValue, setDisplayValue] = useState("");

  useEffect(() => {
    // If it is a placeholder with letters like [XX], render directly to avoid parsing issues
    if (value.includes("[") || value.includes("X")) {
      setDisplayValue(value);
      return;
    }

    const numericMatch = value.match(/[\d.]+/);
    if (!numericMatch) {
      setDisplayValue(value);
      return;
    }

    const targetNum = parseFloat(numericMatch[0]);
    const prefix = value.substring(0, value.indexOf(numericMatch[0]));
    const suffix = value.substring(value.indexOf(numericMatch[0]) + numericMatch[0].length);

    const duration = 1200;
    const startTime = performance.now();
    let animId: number;

    const run = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = progress * (2 - progress); // easeOutQuad
      const current = targetNum * eased;
      const decimals = (numericMatch[0].split(".")[1] || "").length;
      setDisplayValue(`${prefix}${current.toFixed(decimals)}${suffix}`);

      if (progress < 1) {
        animId = requestAnimationFrame(run);
      } else {
        setDisplayValue(value);
      }
    };

    animId = requestAnimationFrame(run);
    return () => cancelAnimationFrame(animId);
  }, [value]);

  return <span>{displayValue}</span>;
}

export default function CaseStudyDetail({ caseStudy, relatedStudies }: CaseStudyDetailProps) {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-800 antialiased font-sans selection:bg-[#B4123F] selection:text-white">
      {/* 1) Sticky Header */}
      <Header onContactClick={() => setIsContactOpen(true)} />

      <main className="relative pt-20">
        
        {/* 2) Header Block */}
        <Section variant="ink" containerSize="wide" className=" text-white border-b border-slate-900 relative overflow-hidden">
          <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />
          <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] rounded-full bg-brand/10 blur-[120px] pointer-events-none" />

          <div className="w-full relative z-10 space-y-6 text-left">
            {/* Breadcrumb */}
            <div className="flex items-center gap-1 text-slate-400 text-xs sm:text-sm font-semibold tracking-wide mb-2">
              <Link href="/insights" className="hover:text-white transition-colors">
                Insights
              </Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <Link href="/insights/case-studies" className="hover:text-white transition-colors">
                Case Studies
              </Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-brand-hot">Detail</span>
            </div>

            <div className="flex flex-wrap gap-2.5">
              <span className="bg-brand-hot/20 text-brand-hot border border-brand-hot/30 text-[10px] font-extrabold tracking-widest uppercase px-3 py-1 rounded-md font-mono">
                {caseStudy.industry}
              </span>
              <span className="bg-white/10 text-slate-300 border border-white/10 text-[10px] font-extrabold tracking-widest uppercase px-3 py-1 rounded-md font-mono">
                Case Study
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-black tracking-tight leading-[1.1] max-w-4xl">
              {caseStudy.title}
            </h1>
            
            <p className="text-slate-350 text-xs font-semibold font-mono tracking-wider text-slate-400 uppercase">
              CLIENT: {caseStudy.client}
            </p>
          </div>
        </Section>

        {/* Hero Photo Section */}
        <Section variant="white" containerSize="wide" className="relative w-full h-[400px] sm:h-[500px] border-b border-line">
          <Image
            src={caseStudy.image.src}
            alt={caseStudy.image.alt}
            fill
            className="object-cover"
            priority
          />
        </Section>

        {/* 3) Results Strip */}
        <Section variant="ink" containerSize="wide" className=" border-b border-slate-800 text-white select-none relative overflow-hidden">
          <div className="absolute inset-0 bg-tech-grid opacity-10 pointer-events-none" />
          <div className="w-full relative z-10">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center sm:text-left">
              {caseStudy.kpis.map((kpi, idx) => (
                <div 
                  key={idx} 
                  className={`space-y-2 ${idx < caseStudy.kpis.length - 1 ? "sm:border-r sm:border-slate-850" : ""}`}
                >
                  <div className="flex items-center justify-center sm:justify-start gap-2.5">
                    <div className="h-8 w-8 rounded-lg bg-brand-hot/10 flex items-center justify-center border border-brand-hot/20 text-brand-hot">
                      <Award className="w-4 h-4" />
                    </div>
                    <span className="text-3xl sm:text-4xl font-black text-brand-hot tracking-tight font-mono">
                      <CountUpMetric value={kpi.value} />
                    </span>
                  </div>
                  <span className="text-xs text-slate-450 font-bold tracking-wider text-slate-400 uppercase block font-mono">
                    {kpi.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* Core Case Study Body */}
        <Section variant="white" containerSize="wide" className="bg-white border-b border-line relative bg-tech-grid">
          <div className="w-full relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
              
              {/* Left Column: Challenge & Solution */}
              <div className="lg:col-span-8 space-y-12 text-left">
                {/* Challenge */}
                <div className="space-y-4">
                  <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#B4123F] font-mono block">
                    THE CHALLENGE
                  </span>
                  <div className="space-y-4 text-text-strong font-medium text-base sm:text-lg leading-relaxed">
                    {caseStudy.challenge.map((para, idx) => (
                      <p key={idx}>{para}</p>
                    ))}
                  </div>
                </div>

                {/* Solution */}
                <div className="space-y-6">
                  <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-emerald-600 font-mono block">
                    THE SOLUTION
                  </span>
                  <div className="space-y-4 text-text-strong font-medium text-base sm:text-lg leading-relaxed">
                    {caseStudy.solution.map((para, idx) => (
                      <p key={idx}>{para}</p>
                    ))}
                  </div>
                </div>

                {/* Results Section */}
                <div className="space-y-6">
                  <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-brand font-mono block">
                    THE RESULTS
                  </span>
                  <div className="space-y-4 text-text-strong font-medium text-base sm:text-lg leading-relaxed">
                    {caseStudy.results.map((para, idx) => (
                      <p key={idx}>{para}</p>
                    ))}
                  </div>
                </div>

                {/* Client Quote Pull Block */}
                <div className="border-l-4 border-brand-hot bg-mist p-8 rounded-r-2xl space-y-3">
                  <p className="text-text-strong font-bold text-lg italic leading-relaxed">
                    &ldquo;{caseStudy.quote.text}&rdquo;
                  </p>
                  <p className="text-text-muted text-xs font-mono font-bold uppercase tracking-wider">
                    — {caseStudy.quote.author}
                  </p>
                </div>
              </div>

              {/* Right Column: Process & Capabilities Used */}
              <div className="lg:col-span-4 space-y-10 text-left">
                {/* How It Worked process */}
                <div className="bg-mist border border-line rounded-2xl p-6 space-y-6">
                  <span className="text-[10px] font-bold text-brand uppercase tracking-widest block font-mono border-b border-slate-200 pb-3">
                    DELIVERY PROCESS
                  </span>
                  <div className="relative border-l border-slate-300 pl-5 space-y-6">
                    <div className="relative">
                      <div className="absolute -left-[26px] top-1 h-3.5 w-3.5 rounded-full bg-brand-hot border border-white" />
                      <h5 className="font-extrabold text-sm text-text-strong uppercase tracking-wide">01 / Assess</h5>
                      <p className="text-xs text-text-muted mt-1 leading-relaxed">Operational data audit, telemetry loop mapping, and pipeline gap analysis.</p>
                    </div>
                    <div className="relative">
                      <div className="absolute -left-[26px] top-1 h-3.5 w-3.5 rounded-full bg-brand border border-white" />
                      <h5 className="font-extrabold text-sm text-text-strong uppercase tracking-wide">02 / Implement</h5>
                      <p className="text-xs text-text-muted mt-1 leading-relaxed">Deploy secure edge gateways, sensor arrays, and telemetry data models.</p>
                    </div>
                    <div className="relative">
                      <div className="absolute -left-[26px] top-1 h-3.5 w-3.5 rounded-full bg-brand border border-white" />
                      <h5 className="font-extrabold text-sm text-text-strong uppercase tracking-wide">03 / Integrate</h5>
                      <p className="text-xs text-text-muted mt-1 leading-relaxed">Link industrial SCADA/OT layers dynamically to enterprise IT structures.</p>
                    </div>
                    <div className="relative">
                      <div className="absolute -left-[26px] top-1 h-3.5 w-3.5 rounded-full bg-slate-900 border border-white" />
                      <h5 className="font-extrabold text-sm text-text-strong uppercase tracking-wide">04 / Optimize</h5>
                      <p className="text-xs text-text-muted mt-1 leading-relaxed">Launch machine learning analytics, custom OEE graphs, and dashboard indicators.</p>
                    </div>
                  </div>
                </div>

                {/* Capabilities Applied */}
                <div className="space-y-4">
                  <span className="text-[10px] font-bold text-brand uppercase tracking-widest block font-mono">
                    CAPABILITIES USED
                  </span>
                  <div className="flex flex-col gap-2.5">
                    {caseStudy.capabilitiesApplied.map((cap, idx) => (
                      <Link
                        key={idx}
                        href={cap.href}
                        className="bg-white border border-line rounded-xl p-4 shadow-sm hover:border-brand/40 flex items-center justify-between group transition-all duration-300"
                      >
                        <span className="font-extrabold text-text-strong text-xs tracking-tight group-hover:text-brand transition-colors">
                          {cap.name}
                        </span>
                        <ArrowRight className="w-4 h-4 text-brand group-hover:translate-x-1 transition-transform" />
                      </Link>
                    ))}
                  </div>
                </div>

              </div>

            </div>

            {/* Illustrative Disclaimer Note */}
            <div className="pt-16 border-t border-slate-100 mt-16 text-center">
              <span className="text-[11px] font-mono text-slate-400 block max-w-xl mx-auto leading-relaxed">
                * Case studies are illustrative — replace clients and metrics with real, verified, approved details before publishing.
              </span>
            </div>
          </div>
        </Section>

        {/* 4) Sibling Case Studies links */}
        <Section variant="mist" containerSize="wide" className=" border-b border-line relative bg-dot-matrix">
          <div className="w-full relative z-10 space-y-12">
            <div className="text-left">
              <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-brand font-mono block">
                RELATED CASE STUDIES
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedStudies.slice(0, 3).map((study) => (
                <Link
                  key={study.slug}
                  href={`/insights/case-studies/${study.slug}`}
                  className="bg-white border border-line rounded-xl p-6 shadow-sm flex items-center justify-between group hover:border-brand/40 hover:-translate-y-0.5 transition-all duration-300 text-left"
                >
                  <div className="space-y-1">
                    <span className="text-[9px] font-bold text-slate-400 font-mono tracking-wide uppercase">{study.industry}</span>
                    <h5 className="font-extrabold text-text-strong tracking-tight line-clamp-1">{study.title}</h5>
                  </div>
                  <ArrowRight className="w-5 h-5 text-brand shrink-0 group-hover:translate-x-1.5 transition-transform" />
                </Link>
              ))}
            </div>
          </div>
        </Section>

        {/* CTA Band */}
        <Section variant="gradient" containerSize="wide" className="relative overflow-hidden text-center">
          <div className="absolute inset-0 bg-ink/10 pointer-events-none" />
          <div className="w-full relative z-10 space-y-6">
            <span className="text-xs font-extrabold uppercase tracking-[0.3em] text-white/90 font-mono block">
              READY FOR IMPACT?
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-[46px] font-black text-white tracking-tight leading-tight">
              Ready for results like these?
            </h2>
            <div className="pt-4">
              <button
                onClick={() => setIsContactOpen(true)}
                className="bg-white hover:bg-slate-100 text-brand font-extrabold text-sm sm:text-base px-8 py-4 rounded-xl transition-all duration-300 shadow-md active:scale-95 cursor-pointer"
              >
                Schedule a Consultation
              </button>
            </div>
          </div>
        </Section>

      </main>

      {/* Footer */}
      <Footer />

      {/* Contact Modal */}
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} showToast={(msg, type) => {}} />
    </div>
  );
}
