// src/components/insights/CaseStudyCard.tsx
"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Award } from "lucide-react";
import { CaseStudy } from "@/lib/insights";

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
}

export default function CaseStudyCard({ caseStudy }: CaseStudyCardProps) {
  return (
    <Link
      href={`/insights/case-studies/${caseStudy.slug}`}
      className="group flex flex-col bg-white border border-line rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-brand/40 hover:-translate-y-1.5 transition-all duration-300 text-left h-full"
    >
      {/* Photo cover */}
      <div className="relative w-full h-[200px] overflow-hidden bg-slate-50">
        <Image
          src={caseStudy.image.src}
          alt={caseStudy.image.alt}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-brand/90 backdrop-blur-md text-white text-[10px] font-extrabold tracking-widest uppercase px-2.5 py-1 rounded-md font-mono shadow-sm">
            {caseStudy.industry}
          </span>
        </div>
      </div>

      {/* Info contents */}
      <div className="p-6 flex-grow flex flex-col justify-between">
        <div className="space-y-3">
          {/* Headline */}
          <h3 className="font-extrabold text-text-strong text-lg tracking-tight leading-snug group-hover:text-brand transition-colors line-clamp-2">
            {caseStudy.title}
          </h3>
          <p className="text-text-muted text-sm leading-relaxed line-clamp-2">
            {caseStudy.excerpt}
          </p>

          {/* Outcome chip display */}
          <div className="pt-2">
            <span className="inline-flex items-center gap-1.5 bg-emerald-500/5 text-emerald-600 border border-emerald-500/15 text-[11px] font-extrabold tracking-wide uppercase px-3 py-1.5 rounded-lg font-mono">
              <Award className="w-3.5 h-3.5" />
              <span>{caseStudy.resultsPreview}</span>
            </span>
          </div>
        </div>

        {/* Read action link */}
        <div className="pt-6 border-t border-slate-100 mt-6 flex items-center justify-between text-brand group-hover:text-brand-hot transition-colors font-extrabold text-xs tracking-wider uppercase">
          <span>Read Case Study</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
        </div>
      </div>
    </Link>
  );
}
