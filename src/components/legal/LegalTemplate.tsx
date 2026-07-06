'use client';
import { Section } from "@/components/ui/Section";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, useScroll, useSpring } from 'framer-motion';
import { ArrowRight, ArrowUp, AlertTriangle, ChevronRight, FileText } from 'lucide-react';
import { LegalPage, LEGAL_PAGES } from '@/lib/legal';
import TableOfContents from './TableOfContents';

interface LegalTemplateProps {
  page: LegalPage;
}

export default function LegalTemplate({ page }: LegalTemplateProps) {
  const { title, lastUpdated, intro, sections } = page;
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Scroll progress logic
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const relatedPages = LEGAL_PAGES.filter((p) => p.slug !== page.slug);

  // Helper to highlight bracketed placeholders in text
  const renderBodyText = (text: string) => {
    const parts = text.split(/(\[[^\]]+\])/g);
    return parts.map((part, i) => {
      if (part.startsWith('[') && part.endsWith(']')) {
        return (
          <span
            key={i}
            className="inline-block px-2 py-0.5 mx-0.5 rounded text-[13px] font-semibold bg-amber-100 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 border border-amber-300 dark:border-amber-900 cursor-help transition-colors select-all"
            title="Placeholder: Requires customization by legal counsel before publishing."
          >
            {part}
          </span>
        );
      }
      return part;
    });
  };

  return (
    <div className="relative min-h-screen bg-mist/30 dark:bg-slate-950/10 pb-20">
      {/* Top Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-brand-hot origin-left z-50"
        style={{ scaleX }}
      />

      {/* Header Band */}
      <header className="relative bg-white dark:bg-slate-900 border-b border-line py-12 lg:py-16 overflow-hidden">
        {/* Subtle grid accent */}
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] bg-[size:16px_16px] opacity-40" />
        
        <div className="w-full relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-1.5 text-xs text-text-muted mb-4 font-medium">
            <Link href="/" className="hover:text-brand transition-colors">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-text-muted">Legal</span>
            <ChevronRight className="h-3 w-3" />
            <span className="text-text-strong font-semibold">{title}</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <h1 className="text-3xl lg:text-4xl font-bold tracking-tight text-text-strong font-headline">
              {title}
            </h1>
            
            {/* Last Updated Badge */}
            <div className="inline-flex items-center self-start gap-1.5 px-3 py-1 bg-brand/5 dark:bg-brand/10 border border-brand/20 text-brand rounded-full text-xs font-semibold">
              <FileText className="h-3.5 w-3.5" />
              <span>Last updated: {lastUpdated}</span>
            </div>
          </div>

          <p className="text-base text-text-muted max-w-[85ch] leading-relaxed font-normal">
            {intro}
          </p>
        </div>
      </header>

      {/* Two-Column Body Layout */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Table of Contents Column (Left) */}
          <aside className="lg:col-span-3">
            <TableOfContents sections={sections} />
          </aside>

          {/* Policy Content Column (Right) */}
          <article className="lg:col-span-9 space-y-8 lg:pl-4">
            
            {/* Legal Template Warning Banner */}
            <div className="p-4 bg-amber-50/70 dark:bg-amber-950/10 border border-amber-250 dark:border-amber-900/60 rounded-xl text-amber-800 dark:text-amber-300 text-xs flex items-start gap-3 shadow-sm">
              <AlertTriangle className="h-5 w-5 shrink-0 text-amber-600 dark:text-amber-550 mt-0.5" />
              <div>
                <p className="font-bold text-amber-900 dark:text-amber-200 mb-1">⚠️ IMPORTANT — Legal Review Required</p>
                <p className="leading-relaxed">
                  This document is an original template and does not constitute formal legal advice. Before publishing, DHGsoft must have a qualified lawyer review and adapt every page to its actual legal entity, jurisdiction, data processing practices, and governing law, replacing all highlighted placeholders with verified data.
                </p>
              </div>
            </div>

            {/* Document Sections */}
            <div className="space-y-12 bg-white dark:bg-slate-900 p-6 lg:p-10 border border-line rounded-2xl shadow-sm">
              {sections.map((section) => (
                <Section variant="white" containerSize="default" key={section.id} id={section.id} className="scroll-mt-28 space-y-4 group">
                  <h2 className="text-xl font-bold text-text-strong font-headline tracking-tight flex items-center gap-3 border-l-2 border-brand pl-3">
                    {section.heading}
                  </h2>
                  <p className="text-[15px] leading-relaxed text-text-muted pl-4 max-w-[72ch] text-justify whitespace-pre-line">
                    {renderBodyText(section.body)}
                  </p>
                </Section>
              ))}
            </div>

            {/* Related Policies Block */}
            <div className="mt-16 pt-12 border-t border-line">
              <h3 className="text-[10px] font-bold text-brand uppercase tracking-[0.2em] mb-6">
                Related policies
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {relatedPages.map((relatedPage) => (
                  <Link
                    key={relatedPage.slug}
                    href={`/legal/${relatedPage.slug}`}
                    className="group p-5 bg-white dark:bg-slate-900 border border-line hover:border-brand/50 rounded-xl transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-md active:scale-[0.98]"
                  >
                    <div>
                      <h4 className="font-bold text-text-strong group-hover:text-brand transition-colors text-[13px] mb-2 font-headline line-clamp-1">
                        {relatedPage.title}
                      </h4>
                      <p className="text-[11px] text-text-muted line-clamp-2 leading-relaxed">
                        {relatedPage.intro}
                      </p>
                    </div>
                    <span className="text-[11px] font-semibold text-brand inline-flex items-center gap-1 mt-4">
                      View policy
                      <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>

          </article>
        </div>
      </main>

      {/* Floating Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-11 h-11 rounded-full bg-white dark:bg-slate-900 border border-line shadow-lg hover:shadow-xl hover:border-brand/40 text-text-muted hover:text-brand flex items-center justify-center transition-all duration-300 active:scale-95 group focus:outline-none focus:ring-2 focus:ring-brand/20"
          aria-label="Back to top"
        >
          <ArrowUp className="h-5 w-5 transition-transform group-hover:-translate-y-0.5" />
        </button>
      )}
    </div>
  );
}
