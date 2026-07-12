"use client";

import React from "react";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { categories } from "@/lib/insightsData";

export function CategoryGrid() {
  return (
    <Section variant="white" size="default" pattern="v2" id="categories" className="scroll-mt-20 relative overflow-hidden">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center space-y-4">
        <span className="text-brand text-label-bold uppercase tracking-[0.2em] font-sans block">
          CATEGORIES
        </span>
        <h2 className="text-txt-strong tracking-tight font-black leading-tight font-sans">
          Explore by Topic
        </h2>
        <p className="text-body-md text-txt-muted max-w-[640px] mx-auto text-center leading-relaxed font-sans">
          Every industry insight is grounded in a specific area of technical or operational expertise. Explore the categories that map to your priorities.
        </p>
      </div>

      {/* 8-Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
        {categories.map((cat, idx) => {
          const Icon = cat.Icon;
          return (
            <div 
              key={idx} 
              className="card group bg-white border border-line rounded-2xl p-6 hover:border-brand hover:shadow-md hover:-translate-y-0.5 transition-all text-left flex flex-col justify-between"
            >
              <div>
                <div className="w-11 h-11 rounded-full bg-[#B4123F]/10 flex items-center justify-center mb-5 group-hover:bg-[#B4123F] group-hover:text-white transition-colors shrink-0">
                  <Icon className="w-5 h-5 text-[#B4123F] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-txt-strong font-extrabold font-sans">
                  {cat.title}
                </h3>
                <p className="text-body-sm text-txt-muted mt-3 leading-relaxed font-sans">
                  {cat.body}
                </p>
              </div>
              <div className="pt-5">
                {/* Points to /insights/categories/[slug] -> use # for now with a comment */}
                <Link 
                  href="#"
                  className="inline-flex items-center gap-1 text-brand text-body-sm font-semibold group-hover:gap-2 transition-all font-sans"
                >
                  <span>Read insights</span>
                  <span>&rarr;</span>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
