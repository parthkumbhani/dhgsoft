// src/components/insights/InsightCard.tsx
"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Article } from "@/lib/insights";
import { Card } from "@/components/ui/card";

interface InsightCardProps {
  article: Article;
}

export default function InsightCard({ article }: InsightCardProps) {
  return (
    <Card hoverEffect={true} className="group overflow-hidden flex flex-col h-full text-left p-0 border border-line">
      {/* Article Image */}
      <div className="relative w-full h-[200px] overflow-hidden bg-mist">
        <Image
          src={article.image.src}
          alt={article.image.alt}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-brand/90 backdrop-blur-md text-white text-[10px] font-extrabold tracking-widest uppercase px-2.5 py-1 rounded-md font-mono shadow-sm">
            {article.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex-grow flex flex-col justify-between">
        <div className="space-y-3">
          <h3 className="font-extrabold text-txt-strong text-lg tracking-tight leading-snug group-hover:text-brand transition-colors line-clamp-2">
            {article.title}
          </h3>
          <p className="text-txt-muted text-sm leading-relaxed line-clamp-3">
            {article.excerpt}
          </p>
        </div>

        {/* Bottom Metadata */}
        <div className="pt-6 border-t border-line mt-6 flex items-center justify-between">
          <span className="text-[10px] font-bold text-txt-muted font-mono tracking-wide uppercase">
            {article.readTime} &middot; {article.date}
          </span>
          <span className="font-extrabold text-xs text-brand group-hover:text-brand-hot transition-colors flex items-center gap-1">
            <span>Read Article</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </span>
        </div>
      </div>
    </Card>
  );
}
