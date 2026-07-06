// src/components/insights/FeaturedStory.tsx
"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Award } from "lucide-react";

interface FeaturedStoryProps {
  type: "insights" | "case-studies";
  hub: string;
  story: {
    slug: string;
    title: string;
    excerpt: string;
    image: { src: string; alt: string };
    readTime?: string;
    date?: string;
    resultsPreview?: string;
    industry?: string;
    category?: string;
  };
}

export default function FeaturedStory({ type, hub, story }: FeaturedStoryProps) {
  // Build detail href
  const href = `/insights/${hub}/${story.slug}`;

  return (
    <Link
      href={href}
      prefetch
      className="grid grid-cols-1 lg:grid-cols-12 border border-line rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 text-left group bg-white"
    >
      {/* Featured Image */}
      <div className="lg:col-span-7 relative min-h-[300px] sm:min-h-[400px] bg-slate-50 overflow-hidden">
        <Image
          src={story.image.src}
          alt={story.image.alt}
          fill
          priority
          className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-brand/90 backdrop-blur-md text-white text-[10px] font-extrabold tracking-widest uppercase px-2.5 py-1 rounded-md font-mono shadow-sm">
            {type === "insights" ? (story.category || "FEATURED") : (story.industry || "CASE STUDY")}
          </span>
        </div>
      </div>

      {/* Featured Metadata & Content */}
      <div className="lg:col-span-5 p-8 md:p-12 flex flex-col justify-between h-full bg-slate-50/50">
        <div className="space-y-4">
          {type === "case-studies" && story.resultsPreview && (
            <span className="inline-flex items-center gap-1 bg-emerald-500/10 text-emerald-600 border border-emerald-500/15 text-[10px] font-extrabold tracking-widest uppercase px-3 py-1.5 rounded-lg font-mono">
              <Award className="w-3.5 h-3.5" />
              <span>{story.resultsPreview}</span>
            </span>
          )}
          {type === "insights" && (
            <span className="bg-brand/10 text-brand text-[10px] font-extrabold tracking-widest uppercase px-3 py-1.5 rounded-md font-mono">
              FEATURED ARTICLE
            </span>
          )}
          <h3 className="font-black text-text-strong text-2xl sm:text-3xl tracking-tight leading-tight group-hover:text-brand transition-colors">
            {story.title}
          </h3>
          <p className="text-text-muted text-sm sm:text-base leading-relaxed">
            {story.excerpt}
          </p>
        </div>

        <div className="pt-8 border-t border-slate-200 mt-8 flex items-center justify-between">
          {type === "insights" ? (
            <span className="text-[10px] font-bold text-slate-400 font-mono tracking-wide uppercase">
              {story.readTime || "[X] min read"} &middot; {story.date || "[Month YYYY]"}
            </span>
          ) : (
            <span className="text-[10px] font-bold text-slate-400 font-mono tracking-wide uppercase">
              Illustrative study
            </span>
          )}
          <div className="font-extrabold text-xs text-brand hover:text-brand-hot transition-colors flex items-center gap-1 uppercase tracking-wider">
            <span>{type === "insights" ? "Read Article" : "Read Case Study"}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
          </div>
        </div>
      </div>
    </Link>
  );
}
