// src/components/insights/CaseStudyDetail.tsx
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronRight, Award, Activity, ShieldAlert, Cpu } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import { CaseStudy } from "@/lib/insights";

import { Button } from "@/components/ui/button";
import Eyebrow from "@/components/ui/Eyebrow";
import { Card } from "@/components/ui/card";
import SectionBand from "@/components/ui/SectionBand";

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

interface CaseStudyDetailProps {
  caseStudy: CaseStudy;
  relatedStudies: CaseStudy[];
}

export default function CaseStudyDetail({ caseStudy, relatedStudies }: CaseStudyDetailProps) {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-txt-strong antialiased font-sans selection:bg-brand selection:text-white">
      {/* 1) Sticky Header */}
      <Header onContactClick={() => setIsContactOpen(true)} />

      <main className="relative pt-20">
        
        {/* 2) Header Block */}
        <section className="bg-ink text-white py-16 border-b border-line/10 relative overflow-hidden">
          <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />
          <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] rounded-full bg-brand/10 blur-[120px] pointer-events-none" />

          <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-[120px] relative z-10 space-y-6 text-left">
            {/* Breadcrumb */}
            <div className="flex items-center gap-1 text-txt-muted text-xs sm:text-sm font-semibold tracking-wide mb-2">
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
              <span className="bg-white/10 text-white/80 border border-white/10 text-[10px] font-extrabold tracking-widest uppercase px-3 py-1 rounded-md font-mono">
                Case Study
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-black tracking-tight leading-[1.1] max-w-4xl text-white">
              {caseStudy.title}
            </h1>
            
            <p className="text-white/60 text-xs font-semibold font-mono tracking-wider uppercase">
              CLIENT: {caseStudy.client}
            </p>
          </div>
        </section>

        {/* Hero Photo Section */}
        <section className="relative w-full h-[400px] sm:h-[500px] border-b border-line">
          <Image
            src={caseStudy.image.src}
            alt={caseStudy.image.alt}
            fill
            className="object-cover"
            priority
          />
        </section>

        {/* 3) Results Strip */}
        <SectionBand variant="ink" className="py-10 select-none">
          <div className="absolute inset-0 bg-tech-grid opacity-10 pointer-events-none" />
          <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-[120px]">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center sm:text-left">
              {caseStudy.kpis.map((kpi, idx) => (
                <div 
                  key={idx} 
                  className={`space-y-2 ${idx < caseStudy.kpis.length - 1 ? "sm:border-r sm:border-line/10" : ""}`}
                >
                  <div className="flex items-center justify-center sm:justify-start gap-2.5">
                    <div className="h-8 w-8 rounded-lg bg-brand-hot/10 flex items-center justify-center border border-brand-hot/20 text-brand-hot">
                      <Award className="w-4 h-4" />
                    </div>
                    <span className="text-3xl sm:text-4xl font-black text-brand-hot tracking-tight font-mono">
                      <CountUpMetric value={kpi.value} />
                    </span>
                  </div>
                  <span className="text-xs font-bold tracking-wider text-white/60 uppercase block font-mono">
                    {kpi.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </SectionBand>

        {/* Core Case Study Body */}
        <SectionBand variant="white" className="bg-tech-grid text-left">
          <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-[120px]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
              
              {/* Left Column: Challenge & Solution */}
              <div className="lg:col-span-8 space-y-12 text-left">
                {/* Challenge */}
                <div className="space-y-4">
                  <Eyebrow>THE CHALLENGE</Eyebrow>
                  <div className="space-y-4 text-txt-strong font-medium text-base sm:text-lg leading-relaxed">
                    {caseStudy.challenge.map((para, idx) => (
                      <p key={idx}>{para}</p>
                    ))}
                  </div>
                </div>

                {/* Solution */}
                <div className="space-y-6">
                  <Eyebrow className="text-brand">THE SOLUTION</Eyebrow>
                  <div className="space-y-4 text-txt-strong font-medium text-base sm:text-lg leading-relaxed">
                    {caseStudy.solution.map((para, idx) => (
                      <p key={idx}>{para}</p>
                    ))}
                  </div>
                </div>

                {/* Results Section */}
                <div className="space-y-6">
                  <Eyebrow>THE RESULTS</Eyebrow>
                  <div className="space-y-4 text-txt-strong font-medium text-base sm:text-lg leading-relaxed">
                    {caseStudy.results.map((para, idx) => (
                      <p key={idx}>{para}</p>
                    ))}
                  </div>
                </div>

                {/* Client Quote Pull Block */}
                <div className="border-l-4 border-brand-hot bg-mist p-8 rounded-r-2xl space-y-3">
                  <p className="text-txt-strong font-bold text-lg italic leading-relaxed">
                    &ldquo;{caseStudy.quote.text}&rdquo;
                  </p>
                  <p className="text-txt-muted text-xs font-mono font-bold uppercase tracking-wider">
                    — {caseStudy.quote.author}
                  </p>
                </div>
              </div>

              {/* Right Column: Process & Capabilities Used */}
              <div className="lg:col-span-4 space-y-10 text-left">
                {/* How It Worked process */}
                <Card hoverEffect={false} className="bg-mist p-6 space-y-6">
                  <Eyebrow className="border-b border-line pb-3 mb-0">
                    DELIVERY PROCESS
                  </Eyebrow>
                  <div className="relative border-l border-line pl-5 space-y-6">
                    <div className="relative">
                      <div className="absolute -left-[26px] top-1 h-3.5 w-3.5 rounded-full bg-brand-hot border border-white" />
                      <h5 className="font-extrabold text-sm text-txt-strong uppercase tracking-wide">01 / Assess</h5>
                      <p className="text-xs text-txt-muted mt-1 leading-relaxed">Operational data audit, telemetry loop mapping, and pipeline gap analysis.</p>
                    </div>
                    <div className="relative">
                      <div className="absolute -left-[26px] top-1 h-3.5 w-3.5 rounded-full bg-brand border border-white" />
                      <h5 className="font-extrabold text-sm text-txt-strong uppercase tracking-wide">02 / Implement</h5>
                      <p className="text-xs text-txt-muted mt-1 leading-relaxed">Deploy secure edge gateways, sensor arrays, and telemetry data models.</p>
                    </div>
                    <div className="relative">
                      <div className="absolute -left-[26px] top-1 h-3.5 w-3.5 rounded-full bg-brand border border-white" />
                      <h5 className="font-extrabold text-sm text-txt-strong uppercase tracking-wide">03 / Integrate</h5>
                      <p className="text-xs text-txt-muted mt-1 leading-relaxed">Link industrial SCADA/OT layers dynamically to enterprise IT structures.</p>
                    </div>
                    <div className="relative">
                      <div className="absolute -left-[26px] top-1 h-3.5 w-3.5 rounded-full bg-ink border border-white" />
                      <h5 className="font-extrabold text-sm text-txt-strong uppercase tracking-wide">04 / Optimize</h5>
                      <p className="text-xs text-txt-muted mt-1 leading-relaxed">Launch machine learning analytics, custom OEE graphs, and dashboard indicators.</p>
                    </div>
                  </div>
                </Card>

                {/* Capabilities Applied */}
                <div className="space-y-4">
                  <Eyebrow>CAPABILITIES USED</Eyebrow>
                  <div className="flex flex-col gap-2.5">
                    {caseStudy.capabilitiesApplied.map((cap, idx) => (
                      <Link key={idx} href={cap.href} className="group">
                        <Card className="p-4 flex items-center justify-between text-left" hoverEffect={true}>
                          <span className="font-extrabold text-txt-strong text-xs tracking-tight group-hover:text-brand transition-colors">
                            {cap.name}
                          </span>
                          <ArrowRight className="w-4 h-4 text-brand group-hover:translate-x-1 transition-transform" />
                        </Card>
                      </Link>
                    ))}
                  </div>
                </div>

              </div>

            </div>

            {/* Illustrative Disclaimer Note */}
            <div className="pt-16 border-t border-line mt-16 text-center">
              <span className="text-[11px] font-mono text-txt-muted block max-w-xl mx-auto leading-relaxed">
                * Case studies are illustrative — replace clients and metrics with real, verified, approved details before publishing.
              </span>
            </div>
          </div>
        </SectionBand>

        {/* 4) Sibling Case Studies links */}
        <SectionBand variant="mist">
          <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-[120px] space-y-12">
            <div className="text-left">
              <Eyebrow>RELATED CASE STUDIES</Eyebrow>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedStudies.slice(0, 3).map((study) => (
                <Link
                  key={study.slug}
                  href={`/insights/case-studies/${study.slug}`}
                  className="group"
                >
                  <Card className="p-6 flex items-center justify-between text-left" hoverEffect={true}>
                    <div className="space-y-1">
                      <span className="text-[9px] font-bold text-txt-muted font-mono tracking-wide uppercase">{study.industry}</span>
                      <h5 className="font-extrabold text-txt-strong tracking-tight line-clamp-1">{study.title}</h5>
                    </div>
                    <ArrowRight className="w-5 h-5 text-brand shrink-0 group-hover:translate-x-1.5 transition-transform" />
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </SectionBand>

        {/* CTA Band */}
        <SectionBand variant="gradient" className="text-center py-20">
          <div className="absolute inset-0 bg-ink/10 pointer-events-none" />
          <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-[120px] relative z-10 space-y-6">
            <span className="text-xs font-extrabold uppercase tracking-[0.3em] text-white/90 font-mono block">
              READY FOR IMPACT?
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-[46px] font-black text-white tracking-tight leading-tight">
              Ready for results like these?
            </h2>
            <div className="pt-4">
              <Button
                onClick={() => setIsContactOpen(true)}
                variant="onDark"
                size="lg"
              >
                Schedule a Consultation
              </Button>
            </div>
          </div>
        </SectionBand>

      </main>

      {/* Footer */}
      <Footer />

      {/* Contact Modal */}
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} showToast={(msg, type) => {}} />
    </div>
  );
}
