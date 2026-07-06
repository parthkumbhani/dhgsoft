import { Section } from "@/components/ui/Section";
// src/app/insights/[hub]/[slug]/loading.tsx
import React from "react";

export default function DetailLoading() {
  return (
    <div className="relative animate-pulse">
      {/* Scroll Progress Bar placeholder */}
      <div className="fixed top-20 left-0 h-1 bg-slate-200 w-full z-50" />

      {/* Header Block skeleton */}
      <Section variant="ink" containerSize="wide" className=" border-b border-slate-900">
        <div className="w-full relative z-10 space-y-6">
          <div className="h-4 w-48 bg-slate-800 rounded" />
          <div className="flex gap-2">
            <div className="h-6 w-20 bg-slate-800 rounded-md" />
            <div className="h-6 w-16 bg-slate-800 rounded-md" />
          </div>
          <div className="h-12 w-3/4 bg-slate-800 rounded" />
          <div className="h-4 w-64 bg-slate-800 rounded" />
        </div>
      </Section>

      {/* Hero Photo placeholder */}
      <Section variant="white" containerSize="wide" className="w-full h-[400px] sm:h-[500px] bg-slate-100 border-b border-line" />

      {/* KPI Strip placeholder */}
      <Section variant="ink" containerSize="wide" className=" ">
        <div className="w-full relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="h-16 bg-slate-800 rounded-xl" />
            <div className="h-16 bg-slate-800 rounded-xl" />
            <div className="h-16 bg-slate-800 rounded-xl" />
          </div>
        </div>
      </Section>

      {/* Content Body skeleton */}
      <Section variant="white" containerSize="wide" className="bg-white border-b border-line">
        <div className="w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Left column text block */}
            <div className="lg:col-span-8 space-y-8">
              <div className="h-8 w-40 bg-slate-200 rounded" />
              <div className="space-y-4">
                <div className="h-4 w-full bg-slate-200 rounded" />
                <div className="h-4 w-full bg-slate-200 rounded" />
                <div className="h-4 w-5/6 bg-slate-200 rounded" />
              </div>
              <div className="h-8 w-48 bg-slate-200 rounded mt-12" />
              <div className="space-y-4">
                <div className="h-4 w-full bg-slate-200 rounded" />
                <div className="h-4 w-full bg-slate-200 rounded" />
                <div className="h-4 w-4/5 bg-slate-200 rounded" />
              </div>
            </div>

            {/* Right column sidebar */}
            <div className="lg:col-span-4 space-y-8">
              <div className="h-[250px] bg-slate-50 border border-line rounded-2xl p-6" />
              <div className="space-y-4">
                <div className="h-12 bg-slate-100 rounded-xl" />
                <div className="h-12 bg-slate-100 rounded-xl" />
              </div>
            </div>

          </div>
        </div>
      </Section>

      {/* Sibling Articles Recommendations skeleton */}
      <Section variant="mist" containerSize="wide" className=" ">
        <div className="w-full relative z-10 space-y-8">
          <div className="h-4 w-36 bg-slate-200 rounded" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="h-[300px] bg-white border border-line rounded-2xl" />
            <div className="h-[300px] bg-white border border-line rounded-2xl" />
            <div className="h-[300px] bg-white border border-line rounded-2xl" />
          </div>
        </div>
      </Section>
    </div>
  );
}
