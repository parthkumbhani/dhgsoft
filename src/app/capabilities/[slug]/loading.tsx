import { Section } from "@/components/ui/Section";
// src/app/capabilities/[slug]/loading.tsx
import React from "react";

export default function Loading() {
  return (
    <div className="min-h-screen bg-white text-slate-800 antialiased font-sans select-none animate-pulse">
      {/* Fake Header Placeholder */}
      <div className="h-20 bg-slate-950 border-b border-slate-900 w-full" />

      {/* Fake Sticky Switcher Placeholder */}
      <div className="h-14 bg-slate-900 border-b border-slate-850 w-full" />

      <main className="space-y-16 py-12">
        {/* Hero Section Skeleton */}
        <Section variant="ink" containerSize="wide" className=" min-h-[460px] flex items-center">
          <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-12">
            <div className="lg:col-span-7 space-y-6">
              <div className="h-4 bg-slate-800 rounded-md w-1/4" />
              <div className="h-12 bg-slate-800 rounded-md w-3/4" />
              <div className="h-24 bg-slate-800 rounded-md w-full" />
              <div className="h-12 bg-slate-800 rounded-md w-1/3" />
            </div>
            <div className="lg:col-span-5 h-[300px] bg-slate-800 rounded-3xl" />
          </div>
        </Section>

        {/* Section Grid Skeleton */}
        <Section variant="white" containerSize="wide" className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-[120px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="h-[250px] bg-slate-200 rounded-2xl" />
            <div className="h-[250px] bg-slate-200 rounded-2xl" />
          </div>
        </Section>
      </main>
    </div>
  );
}
