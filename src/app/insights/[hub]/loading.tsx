import { Section } from "@/components/ui/Section";
// src/app/insights/[hub]/loading.tsx
import React from "react";

export default function HubLoading() {
  return (
    <div className="relative animate-pulse">
      {/* Sticky Switcher skeleton */}
      <div className="sticky top-20 z-30 w-full bg-white border-b border-line py-5">
        <div className="w-full relative z-10">
          <div className="flex items-center gap-3">
            <div className="h-3 w-8 bg-slate-200 rounded shrink-0" />
            <div className="h-8 w-28 bg-slate-200 rounded-full shrink-0" />
            <div className="h-8 w-36 bg-slate-200 rounded-full shrink-0" />
            <div className="h-8 w-24 bg-slate-200 rounded-full shrink-0" />
          </div>
        </div>
      </div>

      {/* Hero Header block skeleton */}
      <Section variant="ink" containerSize="wide" className=" border-b border-slate-900">
        <div className="w-full relative z-10 space-y-6">
          <div className="h-4 w-40 bg-slate-800 rounded" />
          <div className="h-10 w-96 bg-slate-800 rounded" />
          <div className="h-6 w-[500px] bg-slate-800 rounded" />
        </div>
      </Section>

      {/* Featured Story skeleton */}
      <Section variant="white" containerSize="wide" className="bg-white border-b border-line">
        <div className="w-full relative z-10 space-y-8">
          <div className="h-4 w-28 bg-slate-200 rounded" />
          <div className="grid grid-cols-1 lg:grid-cols-12 border border-line rounded-3xl overflow-hidden h-[400px]">
            <div className="lg:col-span-7 bg-slate-100 h-full" />
            <div className="lg:col-span-5 p-8 md:p-12 flex flex-col justify-between bg-slate-50/50">
              <div className="space-y-4">
                <div className="h-6 w-32 bg-slate-200 rounded" />
                <div className="h-8 w-64 bg-slate-200 rounded" />
                <div className="space-y-2">
                  <div className="h-4 w-full bg-slate-200 rounded" />
                  <div className="h-4 w-5/6 bg-slate-200 rounded" />
                </div>
              </div>
              <div className="h-8 w-full bg-slate-200 rounded mt-8" />
            </div>
          </div>
        </div>
      </Section>

      {/* Filters and Card Grid skeleton */}
      <Section variant="mist" containerSize="wide" className=" border-b border-line">
        <div className="w-full relative z-10 space-y-12">
          {/* Filter row skeleton */}
          <div className="flex flex-wrap gap-2.5 pb-6 border-b border-slate-200">
            <div className="h-9 w-16 bg-slate-250 rounded-xl" style={{ backgroundColor: "#e2e8f0" }} />
            <div className="h-9 w-28 bg-slate-200 rounded-xl" />
            <div className="h-9 w-24 bg-slate-200 rounded-xl" />
            <div className="h-9 w-32 bg-slate-200 rounded-xl" />
          </div>

          {/* Grid skeleton */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex flex-col bg-white border border-line rounded-2xl overflow-hidden h-[420px]">
                <div className="w-full h-[200px] bg-slate-100" />
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="h-5 w-5/6 bg-slate-200 rounded" />
                    <div className="h-4 w-full bg-slate-200 rounded" />
                    <div className="h-4 w-2/3 bg-slate-200 rounded" />
                  </div>
                  <div className="h-8 w-full bg-slate-100 rounded mt-6" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}
