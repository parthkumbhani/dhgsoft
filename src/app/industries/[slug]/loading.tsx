import { Section } from "@/components/ui/Section";
import React from "react";

export default function IndustryLoading() {
  return (
    <div className="min-h-screen bg-[#F4F5F7] text-slate-800 antialiased font-sans flex flex-col">
      {/* Skeleton Header space placeholder */}
      <div className="h-20 bg-ink border-b border-slate-900 w-full shrink-0" />

      {/* Hero Skeleton */}
      <Section variant="ink" containerSize="wide" className=" min-h-[640px] flex items-center relative overflow-hidden w-full">
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />
        
        <div className="w-full py-20 relative z-10 text-left space-y-6">
          {/* Breadcrumb line skeleton */}
          <div className="h-4 w-40 bg-slate-800 rounded-md animate-pulse" />
          
          {/* Title H1 skeleton */}
          <div className="h-14 w-80 sm:w-[480px] bg-slate-800 rounded-2xl animate-pulse" />
          
          {/* Subtitle value prop skeleton */}
          <div className="space-y-2">
            <div className="h-4 w-full max-w-2xl bg-slate-800 rounded-md animate-pulse" />
            <div className="h-4 w-5/6 max-w-xl bg-slate-800 rounded-md animate-pulse" />
          </div>
          
          {/* CTAs skeleton */}
          <div className="pt-4 flex gap-4">
            <div className="h-14 w-44 bg-slate-800 rounded-xl animate-pulse" />
            <div className="h-14 w-44 bg-slate-800 rounded-xl animate-pulse" />
          </div>
        </div>
      </Section>

      {/* Switcher Skeleton */}
      <div className="w-full bg-ink/95 border-y border-slate-900 py-3 shrink-0">
        <div className="w-full relative z-10">
          <div className="flex items-center gap-3 overflow-hidden py-1">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="h-8 w-24 bg-slate-800 rounded-full shrink-0 animate-pulse"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Body content skeleton */}
      <div className="relative z-10 w-full py-24 space-y-16 flex-grow">
        {/* The Landscape skeleton */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="h-4.5 w-28 bg-slate-300 rounded animate-pulse" />
            <div className="h-10 w-60 bg-slate-300 rounded-lg animate-pulse" />
            <div className="space-y-2">
              <div className="h-4 w-full bg-slate-300 rounded animate-pulse" />
              <div className="h-4 w-11/12 bg-slate-300 rounded animate-pulse" />
            </div>
          </div>
          <div className="lg:col-span-6">
            <div className="aspect-[16/10] bg-slate-300 rounded-3xl animate-pulse w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
