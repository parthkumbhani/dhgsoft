// src/components/insights/HubPage.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronRight, BookOpen } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import SubscribeBand from "./SubscribeBand";
import InsightCard from "./InsightCard";
import CaseStudyCard from "./CaseStudyCard";
import { Article, CaseStudy } from "@/lib/insights";

import { Button } from "@/components/ui/button";
import Eyebrow from "@/components/ui/Eyebrow";
import { Card } from "@/components/ui/card";
import Chip from "@/components/ui/Chip";
import SectionBand from "@/components/ui/SectionBand";

interface HubPageProps {
  title: string;
  sub: string;
  eyebrow: string;
  featured: {
    title: string;
    excerpt: string;
    image: { src: string; alt: string };
    readTime?: string;
    date?: string;
    slug: string;
    resultsPreview?: string;
    industry?: string;
  };
  items: (Article | CaseStudy)[];
  filters: string[];
  type: "insights" | "case-studies";
}

export default function HubPage({
  title,
  sub,
  eyebrow,
  featured,
  items,
  filters,
  type
}: HubPageProps) {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState(filters[0] || "All");

  const filteredItems = items.filter((item) => {
    if (selectedFilter === "All" || selectedFilter === "All Industries") return true;
    if (type === "insights") {
      return (item as Article).category === selectedFilter;
    } else {
      const study = item as CaseStudy;
      if (selectedFilter === "Manufacturing") {
        return study.industry === "Industrial Manufacturing" || study.industry === "Food & Beverages" || study.industry === "Manufacturing";
      }
      if (selectedFilter === "Energy") {
        return study.industry === "Power & Utilities" || study.industry === "Energy";
      }
      return study.industry === selectedFilter;
    }
  });

  const featuredHref = type === "insights"
    ? `#` // Static articles do not need detail templates, we can let them open modal or anchor
    : `/insights/case-studies/${featured.slug}`;

  return (
    <div className="min-h-screen bg-white text-txt-strong antialiased font-sans selection:bg-brand selection:text-white">
      {/* Sticky Header */}
      <Header onContactClick={() => setIsContactOpen(true)} />

      <main className="relative pt-20">
        
        {/* Hero Section */}
        <section className="relative bg-ink overflow-hidden py-16 border-b border-line/10">
          <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />
          <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] rounded-full bg-brand/10 blur-[120px] pointer-events-none" />
          
          <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-[120px] relative z-10 text-left space-y-6">
            {/* Breadcrumb */}
            <div className="flex items-center gap-1 text-txt-muted text-xs sm:text-sm font-semibold tracking-wide mb-2">
              <Link href="/insights" className="hover:text-white transition-colors">
                Insights
              </Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-brand-hot">{eyebrow}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-black text-white tracking-tight leading-[1.05] max-w-4xl">
              {title}
            </h1>
            <p className="text-white/80 font-medium text-base sm:text-lg leading-relaxed max-w-2xl">
              {sub}
            </p>
          </div>
        </section>

        {/* Featured Card Block */}
        <SectionBand variant="white" className="bg-tech-grid">
          <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-[120px] space-y-12">
            <div className="text-left">
              <Eyebrow>FEATURED STORY</Eyebrow>
            </div>

            {/* Large Featured Element */}
            {type === "insights" ? (
              <Card hoverEffect={true} className="grid grid-cols-1 lg:grid-cols-12 overflow-hidden text-left p-0 border border-line">
                <div className="lg:col-span-7 relative min-h-[300px] sm:min-h-[400px] bg-mist">
                  <Image
                    src={featured.image.src}
                    alt={featured.image.alt}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="lg:col-span-5 p-8 md:p-12 flex flex-col justify-between h-full bg-mist/30">
                  <div className="space-y-4">
                    <span className="bg-brand/10 text-brand text-[10px] font-extrabold tracking-widest uppercase px-3 py-1.5 rounded-md font-mono">
                      FEATURED ARTICLE
                    </span>
                    <h3 className="font-black text-txt-strong text-2xl sm:text-3xl tracking-tight leading-tight">
                      {featured.title}
                    </h3>
                    <p className="text-txt-muted text-sm sm:text-base leading-relaxed">
                      {featured.excerpt}
                    </p>
                  </div>
                  <div className="pt-8 border-t border-line mt-8 flex items-center justify-between">
                    <span className="text-[10px] font-bold text-txt-muted font-mono tracking-wide uppercase">
                      {featured.readTime} &middot; {featured.date}
                    </span>
                    <Button
                      onClick={() => setIsContactOpen(true)}
                      variant="ghost"
                      size="sm"
                      className="text-brand hover:text-brand-hot uppercase font-extrabold text-xs tracking-wider"
                    >
                      <span>Read Article</span>
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ) : (
              <Link href={featuredHref} className="group">
                <Card hoverEffect={true} className="grid grid-cols-1 lg:grid-cols-12 overflow-hidden text-left p-0 border border-line">
                  <div className="lg:col-span-7 relative min-h-[300px] sm:min-h-[400px] bg-mist">
                    <Image
                      src={featured.image.src}
                      alt={featured.image.alt}
                      fill
                      className="object-cover group-hover:scale-[1.01] transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-brand/90 backdrop-blur-md text-white text-[10px] font-extrabold tracking-widest uppercase px-2.5 py-1 rounded-md font-mono">
                        {featured.industry}
                      </span>
                    </div>
                  </div>
                  <div className="lg:col-span-5 p-8 md:p-12 flex flex-col justify-between h-full bg-mist/30">
                    <div className="space-y-4">
                      <span className="bg-brand-hot/10 text-brand-hot border border-brand-hot/15 text-[10px] font-extrabold tracking-widest uppercase px-3 py-1.5 rounded-lg font-mono">
                        ✓ {featured.resultsPreview}
                      </span>
                      <h3 className="font-black text-txt-strong text-2xl sm:text-3xl tracking-tight leading-tight group-hover:text-brand transition-colors">
                        {featured.title}
                      </h3>
                      <p className="text-txt-muted text-sm sm:text-base leading-relaxed">
                        {featured.excerpt}
                      </p>
                    </div>
                    <div className="pt-8 border-t border-line mt-8 flex items-center justify-between text-brand group-hover:text-brand-hot transition-colors font-extrabold text-xs tracking-wider uppercase">
                      <span>Read Case Study</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                    </div>
                  </div>
                </Card>
              </Link>
            )}
          </div>
        </SectionBand>

        {/* Filters and Grid List Feed */}
        <SectionBand variant="mist">
          <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-[120px] space-y-12">
            
            {/* Filter Tabs Navigation */}
            <div className="flex flex-wrap gap-2.5 justify-start text-left border-b border-line pb-6">
              {filters.map((filter) => {
                const isActive = selectedFilter === filter;
                return (
                  <Chip
                    key={filter}
                    as="button"
                    active={isActive}
                    onClick={() => setSelectedFilter(filter)}
                  >
                    {filter}
                  </Chip>
                );
              })}
            </div>

            {/* Dynamic grid mapping */}
            {filteredItems.length === 0 ? (
              <Card hoverEffect={false} className="py-20 text-center space-y-3">
                <BookOpen className="w-12 h-12 text-txt-muted mx-auto" />
                <h4 className="text-lg font-bold text-txt-strong">No Articles Found</h4>
                <p className="text-txt-muted text-sm max-w-xs mx-auto">
                  Try adjusting your filter selection to find relevant guides or study logs.
                </p>
              </Card>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredItems.map((item) => {
                  if (type === "insights") {
                    return <InsightCard key={item.slug} article={item as Article} />;
                  } else {
                    return <CaseStudyCard key={item.slug} caseStudy={item as CaseStudy} />;
                  }
                })}
              </div>
            )}

            {/* Disclaimer for Case Studies */}
            {type === "case-studies" && (
              <div className="pt-8 text-center">
                <span className="text-[11px] font-mono text-txt-muted block max-w-xl mx-auto leading-relaxed">
                  * Case studies are illustrative — replace clients and metrics with real, verified, approved details before publishing.
                </span>
              </div>
            )}

          </div>
        </SectionBand>

        {/* Newsletter Strip */}
        <SubscribeBand />

        {/* Lower Banner CTA */}
        <SectionBand variant="gradient" className="text-center py-20">
          <div className="absolute inset-0 bg-ink/10 pointer-events-none" />
          <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-[120px] relative z-10 space-y-6">
            <span className="text-xs font-extrabold uppercase tracking-[0.3em] text-white/90 font-mono block">
              {type === "insights" ? "PUT IT TO WORK" : "YOUR STORY NEXT"}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-[46px] font-black text-white tracking-tight leading-tight">
              {type === "insights" 
                ? "Ready to apply these concepts to your operations?" 
                : "Let's create measurable results for your operation."}
            </h2>
            <div className="pt-4">
              <Button
                onClick={() => setIsContactOpen(true)}
                variant="onDark"
                size="lg"
              >
                {type === "insights" ? "Talk to an Expert" : "Schedule a Consultation"}
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
