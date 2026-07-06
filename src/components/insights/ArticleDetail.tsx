// src/components/insights/ArticleDetail.tsx
"use client";
import { Section } from "@/components/ui/Section";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, ArrowRight, BookOpen } from "lucide-react";
import { Article } from "@/lib/insights";
import InsightCard from "./InsightCard";

interface ArticleDetailProps {
  article: Article;
  relatedArticles: Article[];
}

export default function ArticleDetail({ article, relatedArticles }: ArticleDetailProps) {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openContact = () => {
    window.dispatchEvent(new CustomEvent("open-contact-modal"));
  };

  const hubName = article.hub === "ai-automation" ? "AI & Automation" : "Technology Ecosystem";
  const hubHref = `/insights/${article.hub}`;

  // Default professional paragraph content if not provided
  const articleBody = article.body || [
    "As industrial organizations accelerate their digital transformation journeys, the ability to extract value from plant-floor data has become a critical competitive differentiator. Realizing this potential, however, requires a deep understanding of the underlying technologies—from secure edge networks to advanced machine learning models.",
    "This article explores the core concepts, implementation methodologies, and best practices essential for modernizing operations in this domain. We examine how leading enterprises are overcoming legacy technical debt, bridging the OT/IT divide, and building resilient systems that support real-time optimization.",
    "DHGsoft's engineering teams work at the intersection of operational technology and enterprise software, helping clients deploy scale-ready solutions that turn raw signals into actionable business intelligence. We provide end-to-end support—from initial architecture design to ongoing model optimization—ensuring that your digitalization efforts deliver measurable returns."
  ];

  return (
    <div className="relative">
      {/* Scroll Progress Bar */}
      <div 
        className="fixed top-20 left-0 h-1 bg-brand-hot z-50 transition-all duration-100" 
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Header Block */}
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
            <Link href={hubHref} className="hover:text-white transition-colors">
              {hubName}
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-brand-hot">Detail</span>
          </div>

          <div className="flex flex-wrap gap-2.5">
            <span className="bg-brand-hot/20 text-brand-hot border border-brand-hot/30 text-[10px] font-extrabold tracking-widest uppercase px-3 py-1 rounded-md font-mono">
              {article.category}
            </span>
            <span className="bg-white/10 text-slate-300 border border-white/10 text-[10px] font-extrabold tracking-widest uppercase px-3 py-1 rounded-md font-mono">
              Article
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-black tracking-tight leading-[1.1] max-w-4xl">
            {article.title}
          </h1>
          
          <p className="text-xs font-semibold font-mono tracking-wider text-slate-400 uppercase">
            BY DHGsoft Insights &middot; {article.date} &middot; {article.readTime}
          </p>
        </div>
      </Section>

      {/* Hero Photo Section */}
      <Section variant="white" containerSize="wide" className="relative w-full h-[400px] sm:h-[500px] border-b border-line">
        <Image
          src={article.image.src}
          alt={article.image.alt}
          fill
          className="object-cover"
          priority
        />
      </Section>

      {/* Article Content Body */}
      <Section variant="white" containerSize="wide" className="bg-white border-b border-line relative">
        <div className="w-full relative z-10">
          <div className="max-w-[70ch] mx-auto text-left space-y-8">
            
            {/* Excerpt */}
            <p className="text-xl font-bold text-text-strong leading-relaxed border-l-4 border-brand pl-6 italic">
              {article.excerpt}
            </p>

            {/* Paragraph 1 */}
            <p className="text-text-strong font-medium text-base sm:text-lg leading-relaxed">
              {articleBody[0]}
            </p>

            {/* Paragraph 2 */}
            {articleBody[1] && (
              <p className="text-text-strong font-medium text-base sm:text-lg leading-relaxed">
                {articleBody[1]}
              </p>
            )}

            {/* Pull Quote */}
            <div className="border-y border-line py-8 my-10 text-center space-y-3">
              <span className="text-[10px] font-extrabold tracking-widest text-brand uppercase font-mono">
                EDITORIAL FOCUS
              </span>
              <p className="text-text-strong font-black text-xl sm:text-2xl tracking-tight max-w-2xl mx-auto leading-snug">
                &ldquo;The goal of industrial intelligence is not simply to collect more data, but to collapse the distance between telemetry signals and business action.&rdquo;
              </p>
              <p className="text-text-muted text-xs font-mono font-bold uppercase tracking-wider">
                — DHGsoft Architecture Principle
              </p>
            </div>

            {/* Paragraph 3 */}
            {articleBody[2] && (
              <p className="text-text-strong font-medium text-base sm:text-lg leading-relaxed">
                {articleBody[2]}
              </p>
            )}

            {/* Remaining Paragraphs */}
            {articleBody.slice(3).map((para, idx) => (
              <p key={idx} className="text-text-strong font-medium text-base sm:text-lg leading-relaxed">
                {para}
              </p>
            ))}

          </div>
        </div>
      </Section>

      {/* Sibling Articles Recommendations */}
      <Section variant="mist" containerSize="wide" className=" border-b border-line relative bg-dot-matrix">
        <div className="w-full relative z-10 space-y-12">
          <div className="text-left">
            <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-brand font-mono block">
              RELATED INSIGHTS
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedArticles.slice(0, 3).map((art) => (
              <InsightCard key={art.slug} article={art} />
            ))}
            {relatedArticles.length === 0 && (
              <div className="col-span-3 text-center text-slate-400 font-medium py-10">
                No related articles found.
              </div>
            )}
          </div>
        </div>
      </Section>

      {/* Bottom CTA Band */}
      <Section variant="gradient" containerSize="wide" className="relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-ink/10 pointer-events-none" />
        <div className="w-full relative z-10 space-y-6">
          <span className="text-xs font-extrabold uppercase tracking-[0.3em] text-white/90 font-mono block">
            PUT IT TO WORK
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-[46px] font-black text-white tracking-tight leading-tight">
            Ready to apply these concepts to your operations?
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
