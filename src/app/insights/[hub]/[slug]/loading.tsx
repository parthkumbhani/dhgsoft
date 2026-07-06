// src/app/insights/[hub]/[slug]/loading.tsx
import React from "react";

export default function DetailLoading() {
  return (
    <div className="relative animate-pulse">
      {/* Scroll Progress Bar placeholder */}
      <div className="fixed top-20 left-0 h-1 bg-slate-200 w-full z-50" />

      {/* Header Block skeleton */}
      <section className="bg-ink py-16 border-b border-slate-900">
        <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-[120px] space-y-6">
          <div className="h-4 w-48 bg-slate-800 rounded" />
          <div className="flex gap-2">
            <div className="h-6 w-20 bg-slate-800 rounded-md" />
            <div className="h-6 w-16 bg-slate-800 rounded-md" />
          </div>
          <div className="h-12 w-3/4 bg-slate-800 rounded" />
          <div className="h-4 w-64 bg-slate-800 rounded" />
        </div>
      </section>

      {/* Hero Photo placeholder */}
      <section className="w-full h-[400px] sm:h-[500px] bg-slate-100 border-b border-line" />

      {/* KPI Strip placeholder */}
      <section className="bg-slate-900 py-10">
        <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-[120px]">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="h-16 bg-slate-800 rounded-xl" />
            <div className="h-16 bg-slate-800 rounded-xl" />
            <div className="h-16 bg-slate-800 rounded-xl" />
          </div>
        </div>
      </section>

      {/* Content Body skeleton */}
      <section className="bg-white py-16 md:py-24 border-b border-line">
        <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-[120px]">
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
      </section>

      {/* Sibling Articles Recommendations skeleton */}
      <section className="bg-mist py-16">
        <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-[120px] space-y-8">
          <div className="h-4 w-36 bg-slate-200 rounded" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="h-[300px] bg-white border border-line rounded-2xl" />
            <div className="h-[300px] bg-white border border-line rounded-2xl" />
            <div className="h-[300px] bg-white border border-line rounded-2xl" />
          </div>
        </div>
      </section>
    </div>
  );
}
