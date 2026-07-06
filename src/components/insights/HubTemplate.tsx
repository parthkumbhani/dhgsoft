// src/components/insights/HubTemplate.tsx
"use client";
import { Section } from "@/components/ui/Section";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronRight, BookOpen } from "lucide-react";
import HubSwitcher from "./HubSwitcher";
import FeaturedStory from "./FeaturedStory";
import InsightCard from "./InsightCard";
import CaseStudyCard from "./CaseStudyCard";
import SubscribeBand from "./SubscribeBand";
import { Article, CaseStudy } from "@/lib/insights";

interface HubTemplateProps {
  hub: "ai-automation" | "technology-ecosystem" | "case-studies";
  title: string;
  sub: string;
  featured: any;
  items: (Article | CaseStudy)[];
  filters: string[];
  type: "insights" | "case-studies";
}

export default function HubTemplate({
  hub,
  title,
  sub,
  featured,
  items,
  filters,
  type
}: HubTemplateProps) {
  const [selectedFilter, setSelectedFilter] = useState(filters[0] || "All");

  // In-place client-side filtering logic
  const filteredItems = items.filter((item) => {
    if (selectedFilter === "All" || selectedFilter === "All Industries") return true;
    if (type === "insights") {
      return (item as Article).category === selectedFilter;
    } else {
      const study = item as CaseStudy;
      // Handle industry mapping mappings
      if (selectedFilter === "Manufacturing") {
        return study.industry === "Industrial Manufacturing" || study.industry === "Food & Beverages" || study.industry === "Manufacturing";
      }
      if (selectedFilter === "Energy") {
        return study.industry === "Power & Utilities" || study.industry === "Energy";
      }
      return study.industry === selectedFilter;
    }
  });

  const openContact = () => {
    window.dispatchEvent(new CustomEvent("open-contact-modal"));
  };

  return (
    <div className="relative">
      {/* Sticky Switcher just below Header */}
      <HubSwitcher activeHub={hub} />

      {/* Hero Header Block */}
      <Section variant="ink" containerSize="wide" className="relative overflow-hidden border-b border-slate-900">
        <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] rounded-full bg-brand/10 blur-[120px] pointer-events-none" />
        
        <div className="w-full relative z-10 text-left space-y-6">
          {/* Breadcrumb */}
          <div className="flex items-center gap-1 text-slate-400 text-xs sm:text-sm font-semibold tracking-wide mb-2">
            <Link href="/insights" className="hover:text-white transition-colors">
              Insights
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-brand-hot">{title}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-black text-white tracking-tight leading-[1.05] max-w-4xl">
            {title}
          </h1>
          <p className="text-slate-350 font-medium text-base sm:text-lg leading-relaxed max-w-2xl text-slate-300">
            {sub}
          </p>
        </div>
      </Section>

      {/* Featured Story Block */}
      <Section variant="white" containerSize="wide" className="bg-white border-b border-line relative">
        <div className="w-full relative z-10 space-y-8">
          <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-brand font-mono block">
            FEATURED STORY
          </span>
          <FeaturedStory type={type} hub={hub} story={featured} />
        </div>
      </Section>

      {/* Filter & Card Grid Feed Section */}
      <Section variant="mist" containerSize="wide" className=" border-b border-line relative bg-dot-matrix">
        <div className="w-full relative z-10 space-y-12">
          
          {/* Filter Chips row (client-side, instant) */}
          <div className="flex flex-wrap gap-2.5 justify-start text-left border-b border-slate-200 pb-6">
            {filters.map((filter) => {
              const isActive = selectedFilter === filter;
              return (
                <button
                  key={filter}
                  onClick={() => setSelectedFilter(filter)}
                  className={`px-5 py-2.5 text-xs font-extrabold uppercase tracking-wider rounded-xl transition-all duration-300 shadow-sm cursor-pointer select-none active:scale-95 ${
                    isActive 
                      ? "bg-brand text-white" 
                      : "bg-white text-slate-600 border border-line hover:border-brand/40"
                  }`}
                >
                  {filter}
                </button>
              );
            })}
          </div>

          {/* Dynamic Grid Mapping */}
          {filteredItems.length === 0 ? (
            <div className="bg-white border border-line rounded-2xl py-20 text-center space-y-3">
              <BookOpen className="w-12 h-12 text-slate-300 mx-auto" />
              <h4 className="text-lg font-bold text-text-strong">No items found</h4>
              <p className="text-text-muted text-sm max-w-xs mx-auto">
                Try adjusting your filter selection to find relevant guides or studies.
              </p>
            </div>
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

          {/* Case Studies Anonymity / Metrics Disclaimer */}
          {type === "case-studies" && (
            <div className="pt-8 text-center">
              <span className="text-[11px] font-mono text-slate-400 block max-w-xl mx-auto leading-relaxed select-none">
                * Case studies are illustrative — replace clients and metrics with real, verified, approved details before publishing.
              </span>
            </div>
          )}

        </div>
      </Section>

      {/* Subscribe Strip */}
      <SubscribeBand />

      {/* Lower Banner CTA */}
      <Section variant="gradient" containerSize="wide" className="relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-ink/10 pointer-events-none" />
        <div className="w-full relative z-10 space-y-6">
          <span className="text-xs font-extrabold uppercase tracking-[0.3em] text-white/90 font-mono block">
            {type === "insights" ? "PUT IT TO WORK" : "YOUR STORY NEXT"}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-[46px] font-black text-white tracking-tight leading-tight">
            {type === "insights" 
              ? "Ready to apply these concepts to your operations?" 
              : "Let's create measurable results for your operation."}
          </h2>
          <div className="pt-4">
            <button
              onClick={openContact}
              className="bg-white hover:bg-slate-100 text-brand font-extrabold text-sm sm:text-base px-8 py-4 rounded-xl transition-all duration-300 shadow-md active:scale-95 cursor-pointer"
            >
              {type === "insights" ? "Talk to an Expert" : "Schedule a Consultation"}
            </button>
          </div>
        </div>
      </Section>
    </div>
  );
}
