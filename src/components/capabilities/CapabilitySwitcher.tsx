// src/components/capabilities/CapabilitySwitcher.tsx
"use client";

import React from "react";
import Link from "next/link";
import { CAPABILITIES_DATA } from "@/lib/capabilities";

interface CapabilitySwitcherProps {
  currentSlug: string;
}

export default function CapabilitySwitcher({ currentSlug }: CapabilitySwitcherProps) {
  const items = Object.values(CAPABILITIES_DATA);

  return (
    <div className="sticky top-20 z-40 w-full bg-slate-950/90 border-b border-slate-900 backdrop-blur-md overflow-x-auto select-none scrollbar-none">
      <div className="max-w-site-wide mx-auto px-gutter md:px-gutter-md py-3.5 flex items-center gap-3 whitespace-nowrap">
        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mr-2 font-mono">
          Jump to:
        </span>
        {items.map((item) => {
          const isActive = item.slug === currentSlug;
          return (
            <Link
              key={item.slug}
              href={`/capabilities/${item.slug}`}
              prefetch
              className={`text-xs font-bold px-4 py-2 rounded-xl transition-all duration-300 ${
                isActive
                  ? "bg-brand text-white font-extrabold shadow-sm hover:bg-brand-hot"
                  : "bg-slate-900/60 text-slate-400 border border-slate-850 hover:text-white hover:bg-slate-850"
              }`}
            >
              {item.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
