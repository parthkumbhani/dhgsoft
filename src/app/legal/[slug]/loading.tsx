import React from 'react';

export default function LegalLoading() {
  return (
    <div className="min-h-screen bg-slate-50/50 dark:bg-slate-900/10 pb-20">
      {/* Header Band Skeleton */}
      <div className="bg-white dark:bg-slate-900 border-b border-line py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-6 space-y-4">
          {/* Breadcrumb Skeleton */}
          <div className="flex items-center gap-2 animate-pulse">
            <div className="h-3 w-12 bg-slate-200 dark:bg-slate-800 rounded" />
            <div className="h-3 w-3 bg-slate-200 dark:bg-slate-800 rounded-full" />
            <div className="h-3 w-12 bg-slate-200 dark:bg-slate-800 rounded" />
            <div className="h-3 w-3 bg-slate-200 dark:bg-slate-800 rounded-full" />
            <div className="h-3 w-24 bg-slate-200 dark:bg-slate-800 rounded" />
          </div>

          {/* Title & Badge Row Skeleton */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="h-9 w-64 bg-slate-250 dark:bg-slate-800 rounded animate-pulse" />
            <div className="h-6 w-36 bg-slate-200 dark:bg-slate-800 rounded-full animate-pulse" />
          </div>

          {/* Intro Paragraph Skeleton */}
          <div className="space-y-2 max-w-[85ch] animate-pulse">
            <div className="h-4 w-full bg-slate-200 dark:bg-slate-800 rounded" />
            <div className="h-4 w-5/6 bg-slate-200 dark:bg-slate-800 rounded" />
          </div>
        </div>
      </div>

      {/* Two-Column Body Layout Skeleton */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column TOC Skeleton */}
          <aside className="lg:col-span-3 space-y-4 animate-pulse">
            <div className="h-3 w-20 bg-slate-200 dark:bg-slate-800 rounded" />
            <div className="space-y-3 pl-4 border-l border-line">
              <div className="h-4 w-32 bg-slate-200 dark:bg-slate-800 rounded" />
              <div className="h-4 w-28 bg-slate-200 dark:bg-slate-800 rounded" />
              <div className="h-4 w-36 bg-slate-200 dark:bg-slate-800 rounded" />
              <div className="h-4 w-24 bg-slate-200 dark:bg-slate-800 rounded" />
              <div className="h-4 w-32 bg-slate-200 dark:bg-slate-800 rounded" />
            </div>
          </aside>

          {/* Right Column Content Skeleton */}
          <article className="lg:col-span-9 space-y-8 lg:pl-4">
            {/* Warning Banner Skeleton */}
            <div className="h-16 w-full bg-amber-50/50 dark:bg-amber-950/5 border border-amber-100 dark:border-amber-900/30 rounded-xl animate-pulse" />

            {/* Document Content Skeleton */}
            <div className="space-y-12 bg-white dark:bg-slate-900 p-6 lg:p-10 border border-line rounded-2xl shadow-sm animate-pulse">
              {[1, 2, 3].map((n) => (
                <div key={n} className="space-y-4">
                  <div className="h-6 w-48 bg-slate-250 dark:bg-slate-800 rounded border-l-2 border-brand/20 pl-3" />
                  <div className="space-y-2 pl-4">
                    <div className="h-4 w-full bg-slate-200 dark:bg-slate-800 rounded" />
                    <div className="h-4 w-11/12 bg-slate-200 dark:bg-slate-800 rounded" />
                    <div className="h-4 w-5/6 bg-slate-200 dark:bg-slate-800 rounded" />
                  </div>
                </div>
              ))}
            </div>
          </article>
        </div>
      </main>
    </div>
  );
}
