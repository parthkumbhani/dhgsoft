"use client";

import React from "react";
import Link from "next/link";
import { BookOpen, Layers, Video, Presentation, ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/Section";

const resourceTypes = [
  { label: "Technical Guides", Icon: BookOpen },
  { label: "Implementation Frameworks", Icon: Layers },
  { label: "Webinars", Icon: Video },
  { label: "Presentations", Icon: Presentation },
];

export function ResourceLibrary() {
  return (
    <Section variant="mist" size="default" pattern="v8" className="relative overflow-hidden border-b border-line/10">
      <div className="max-w-[800px] mx-auto text-center space-y-6 flex flex-col items-center">
        {/* Header */}
        <div className="space-y-4">
          <span className="text-brand text-label-bold uppercase tracking-[0.2em] font-sans block">
            RESOURCE LIBRARY
          </span>
          <h2 className="text-txt-strong tracking-tight font-black leading-tight font-sans">
            Resource Library
          </h2>
          <p className="text-body-md text-txt-muted max-w-[680px] mx-auto leading-relaxed font-sans">
            Explore a growing collection of technical guides, implementation frameworks, engineering documents, webinars, presentations, and educational resources designed to support your digital transformation journey.
          </p>
        </div>

        {/* 4 Resource Chips */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-6 max-w-2xl">
          {resourceTypes.map((item, idx) => {
            const Icon = item.Icon;
            return (
              <div 
                key={idx} 
                className="card inline-flex items-center gap-3 bg-white border border-line rounded-full px-5 py-3 hover:border-brand transition-colors cursor-default shadow-sm hover:shadow-md hover:-translate-y-[1px]"
              >
                <Icon className="w-4 h-4 text-brand shrink-0" />
                <span className="text-body-sm text-txt-strong font-semibold font-sans">
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>

        {/* Footer Link */}
        <div className="pt-8">
          <Link 
            href="#"
            className="inline-flex items-center gap-2 text-brand font-semibold hover:gap-3 transition-all font-sans cursor-pointer group"
          >
            <span>Browse full library</span>
            <ArrowRight className="w-4 h-4 text-brand group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </Section>
  );
}
