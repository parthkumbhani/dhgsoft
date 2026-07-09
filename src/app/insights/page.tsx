// src/app/insights/page.tsx
"use client";
import { Section } from "@/components/ui/Section";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronRight, Cpu, Layers, BookOpen } from "lucide-react";
import SubscribeBand from "@/components/insights/SubscribeBand";
import { ARTICLES_DATA, CASE_STUDIES_DATA } from "@/lib/insights";

export default function InsightsLandingPage() {
  // Select 3 latest / representative items for the "latest insights" row
  const latestArticles = [
    ARTICLES_DATA.find((a) => a.slug === "reactive-to-autonomous-maintenance"),
    ARTICLES_DATA.find((a) => a.slug === "modern-industrial-tech-stack"),
  ].filter(Boolean) as typeof ARTICLES_DATA;

  const latestCaseStudy = CASE_STUDIES_DATA.find((c) => c.slug === "automotive-oem-downtime");

  const openContact = () => {
    window.dispatchEvent(new CustomEvent("open-contact-modal"));
  };

  return (
    <div className="relative">
      {/* Hero Section */}
      <Section variant="ink" containerSize="wide" className="relative overflow-hidden border-b border-slate-900">
        <div className="absolute inset-0 bg-tech-grid opacity-25 pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-brand/10 blur-[130px] pointer-events-none" />
        
        <div className="w-full relative z-10 text-left space-y-6">
          <div className="flex items-center gap-1 text-slate-400 text-xs sm:text-sm font-semibold tracking-wide mb-2">
            <Link href="/" className="hover:text-white transition-colors">
              DHGsoft
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-brand-hot">Insights</span>
          </div>

          <span className="text-xs font-extrabold uppercase tracking-[0.3em] text-brand-hot font-mono block">
            KNOWLEDGE HUB
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-black text-white tracking-tight leading-[1.05] max-w-4xl">
            DHGsoft Insights
          </h1>
          <p className="text-slate-350 font-medium text-base sm:text-lg leading-relaxed max-w-2xl text-slate-300">
            Explore deep technical perspectives, standards guides, and real-world impact logs on industrial digitalization.
          </p>
        </div>
      </Section>

      {/* Directory Hub Cards (Image-rich, visual and inviting) */}
      <Section variant="white" containerSize="wide" className="bg-white relative">
        <div className="w-full relative z-10 space-y-12">
          <div className="text-left space-y-2">
            <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-brand font-mono block">
              EXPLORE PERSPECTIVES
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-text-strong tracking-tight">
              Knowledge Hubs
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Hub 1: AI & Automation */}
            <Link
              href="/insights/ai-automation"
              prefetch
              className="group flex flex-col bg-white border border-line rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-brand/40 hover:-translate-y-1.5 transition-all duration-300 text-left"
            >
              <div className="relative w-full h-[220px] overflow-hidden bg-slate-100">
                <Image
                  src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=800&q=80"
                  alt="Autonomous systems robot concept in laboratory"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 flex items-center justify-center w-10 h-10 rounded-xl bg-ink/80 backdrop-blur-md text-brand-hot border border-white/10 shadow-md">
                  <Cpu className="w-5 h-5" />
                </div>
              </div>
              <div className="p-8 flex-grow flex flex-col justify-between">
                <div className="space-y-3">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-brand font-mono">
                    AI & AUTOMATION
                  </span>
                  <h4 className="font-extrabold text-text-strong text-xl tracking-tight leading-snug group-hover:text-brand transition-colors">
                    Industrial intelligence
                  </h4>
                  <p className="text-text-muted text-sm leading-relaxed">
                    Deep learning, predictive maintenance models, and machine vision setups optimizing modern plant operations.
                  </p>
                </div>
                <div className="pt-8 border-t border-slate-100 mt-8 flex items-center justify-between text-brand font-extrabold text-xs tracking-wider uppercase">
                  <span>Enter Hub</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </div>
              </div>
            </Link>

            {/* Hub 2: Technology Ecosystem */}
            <Link
              href="/insights/technology-ecosystem"
              prefetch
              className="group flex flex-col bg-white border border-line rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-brand/40 hover:-translate-y-1.5 transition-all duration-300 text-left"
            >
              <div className="relative w-full h-[220px] overflow-hidden bg-slate-100">
                <Image
                  src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&q=80"
                  alt="Modern technical architecture overlay network concept"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 flex items-center justify-center w-10 h-10 rounded-xl bg-ink/80 backdrop-blur-md text-brand-hot border border-white/10 shadow-md">
                  <Layers className="w-5 h-5" />
                </div>
              </div>
              <div className="p-8 flex-grow flex flex-col justify-between">
                <div className="space-y-3">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-brand font-mono">
                    TECHNOLOGY ECOSYSTEM
                  </span>
                  <h4 className="font-extrabold text-text-strong text-xl tracking-tight leading-snug group-hover:text-brand transition-colors">
                    Connected architecture
                  </h4>
                  <p className="text-text-muted text-sm leading-relaxed">
                    Unified Namespace architectures, OT/IT networking, industrial data platform criteria, and edge configurations.
                  </p>
                </div>
                <div className="pt-8 border-t border-slate-100 mt-8 flex items-center justify-between text-brand font-extrabold text-xs tracking-wider uppercase">
                  <span>Enter Hub</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </div>
              </div>
            </Link>

            {/* Hub 3: Case Studies */}
            <Link
              href="/insights/case-studies"
              prefetch
              className="group flex flex-col bg-white border border-line rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-brand/40 hover:-translate-y-1.5 transition-all duration-300 text-left"
            >
              <div className="relative w-full h-[220px] overflow-hidden bg-slate-100">
                <Image
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80"
                  alt="Business team in workshop discussing case studies results"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 flex items-center justify-center w-10 h-10 rounded-xl bg-ink/80 backdrop-blur-md text-brand-hot border border-white/10 shadow-md">
                  <BookOpen className="w-5 h-5" />
                </div>
              </div>
              <div className="p-8 flex-grow flex flex-col justify-between">
                <div className="space-y-3">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-brand font-mono">
                    ENTERPRISE CASE STUDIES
                  </span>
                  <h4 className="font-extrabold text-text-strong text-xl tracking-tight leading-snug group-hover:text-brand transition-colors">
                    Transformation in action
                  </h4>
                  <p className="text-text-muted text-sm leading-relaxed">
                    Anonymized execution logs mapping actual yield gains, downtime reduction, and SCADA stability metrics.
                  </p>
                </div>
                <div className="pt-8 border-t border-slate-100 mt-8 flex items-center justify-between text-brand font-extrabold text-xs tracking-wider uppercase">
                  <span>Read Case Studies</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </div>
              </div>
            </Link>

          </div>
        </div>
      </Section>

      {/* Latest Insights Section */}
      <Section variant="mist" containerSize="wide" className=" border-y border-line relative bg-dot-matrix">
        <div className="w-full relative z-10 space-y-12">
          <div className="text-left space-y-2">
            <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-brand font-mono block">
              REAL-TIME INSIGHTS
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-text-strong tracking-tight">
              Featured Stories
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Featured Article 1 */}
            {latestArticles[0] && (
              <Link
                href={`/insights/ai-automation/${latestArticles[0].slug}`}
                prefetch
                className="group flex flex-col bg-white border border-line rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-brand/40 hover:-translate-y-1 transition-all duration-300 text-left h-full"
              >
                <div className="relative w-full h-[180px] overflow-hidden bg-slate-100">
                  <Image
                    src={latestArticles[0].image.src}
                    alt={latestArticles[0].image.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-brand/90 backdrop-blur-md text-white text-[10px] font-extrabold tracking-widest uppercase px-2.5 py-1 rounded-md font-mono shadow-sm">
                      {latestArticles[0].category}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div className="space-y-2">
                    <h4 className="font-extrabold text-text-strong text-lg tracking-tight leading-snug group-hover:text-brand transition-colors line-clamp-2">
                      {latestArticles[0].title}
                    </h4>
                    <p className="text-text-muted text-sm leading-relaxed line-clamp-3">
                      {latestArticles[0].excerpt}
                    </p>
                  </div>
                  <div className="pt-6 border-t border-slate-150 mt-6 flex items-center justify-between text-brand font-extrabold text-xs tracking-wider uppercase">
                    <span>Read Article</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            )}

            {/* Featured Article 2 */}
            {latestArticles[1] && (
              <Link
                href={`/insights/technology-ecosystem/${latestArticles[1].slug}`}
                prefetch
                className="group flex flex-col bg-white border border-line rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-brand/40 hover:-translate-y-1 transition-all duration-300 text-left h-full"
              >
                <div className="relative w-full h-[180px] overflow-hidden bg-slate-100">
                  <Image
                    src={latestArticles[1].image.src}
                    alt={latestArticles[1].image.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-brand/90 backdrop-blur-md text-white text-[10px] font-extrabold tracking-widest uppercase px-2.5 py-1 rounded-md font-mono shadow-sm">
                      {latestArticles[1].category}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div className="space-y-2">
                    <h4 className="font-extrabold text-text-strong text-lg tracking-tight leading-snug group-hover:text-brand transition-colors line-clamp-2">
                      {latestArticles[1].title}
                    </h4>
                    <p className="text-text-muted text-sm leading-relaxed line-clamp-3">
                      {latestArticles[1].excerpt}
                    </p>
                  </div>
                  <div className="pt-6 border-t border-slate-150 mt-6 flex items-center justify-between text-brand font-extrabold text-xs tracking-wider uppercase">
                    <span>Read Article</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            )}

            {/* Featured Case Study */}
            {latestCaseStudy && (
              <Link
                href={`/insights/case-studies/${latestCaseStudy.slug}`}
                prefetch
                className="group flex flex-col bg-white border border-line rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-brand/40 hover:-translate-y-1 transition-all duration-300 text-left h-full"
              >
                <div className="relative w-full h-[180px] overflow-hidden bg-slate-100">
                  <Image
                    src={latestCaseStudy.image.src}
                    alt={latestCaseStudy.image.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-brand-hot/90 backdrop-blur-md text-white text-[10px] font-extrabold tracking-widest uppercase px-2.5 py-1 rounded-md font-mono shadow-sm">
                      {latestCaseStudy.industry}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div className="space-y-2">
                    <h4 className="font-extrabold text-text-strong text-lg tracking-tight leading-snug group-hover:text-brand transition-colors line-clamp-2">
                      {latestCaseStudy.title}
                    </h4>
                    <p className="text-text-muted text-sm leading-relaxed line-clamp-3">
                      {latestCaseStudy.excerpt}
                    </p>
                  </div>
                  <div className="pt-6 border-t border-slate-150 mt-6 flex items-center justify-between text-brand font-extrabold text-xs tracking-wider uppercase">
                    <span>Read Case Study</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            )}
          </div>
        </div>
      </Section>

      {/* Subscribe Strip */}
      <SubscribeBand />

      {/* Crimson bottom CTA */}
      <Section variant="gradient" containerSize="wide" className="relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-ink/10 pointer-events-none" />
        <div className="w-full relative z-10 space-y-6">
          <span className="text-xs font-extrabold uppercase tracking-[0.3em] text-white/90 font-mono block">
            LET&apos;S BUILD
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-[46px] font-black text-white tracking-tight leading-tight">
            Designing your digital transformation story?
          </h2>
          <div className="pt-4">
            <button
              onClick={openContact}
              className="bg-white hover:bg-slate-100 text-brand font-extrabold text-sm sm:text-base px-8 py-4 rounded-xl transition-all duration-300 shadow-md active:scale-95 cursor-pointer"
            >
              Talk to an Expert
            </button>
          </div>
        </div>
      </Section>
    </div>
  );
}
