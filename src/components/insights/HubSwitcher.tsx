// src/components/insights/HubSwitcher.tsx
"use client";

import React from "react";
import Link from "next/link";

interface HubSwitcherProps {
  activeHub?: "ai-automation" | "technology-ecosystem" | "case-studies" | "newsroom";
}

const hubs = [
  { id: "ai-automation", name: "AI & Automation", href: "/insights/ai-automation" },
  { id: "technology-ecosystem", name: "Technology Ecosystem", href: "/insights/technology-ecosystem" },
  { id: "case-studies", name: "Case Studies", href: "/insights/case-studies" },
] as const;

export default function HubSwitcher({ activeHub }: HubSwitcherProps) {
  return (
    <div className="sticky top-20 z-30 w-full bg-white border-b border-line py-4 shadow-sm backdrop-blur-md bg-white/90">
      <div className="max-w-site-wide mx-auto px-gutter md:px-gutter-md">
        <div className="flex items-center gap-3 overflow-x-auto no-scrollbar scroll-smooth">
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-text-muted font-mono mr-2 shrink-0 select-none">
            Hubs:
          </span>
          {hubs.map((hub) => {
            const isActive = activeHub === hub.id;
            return (
              <Link
                key={hub.id}
                href={hub.href}
                prefetch
                className={`px-4 py-2 text-xs font-extrabold uppercase tracking-wider rounded-full border transition-all duration-300 shrink-0 active:scale-95 ${
                  isActive
                    ? "bg-brand text-white border-brand shadow-sm"
                    : "bg-white text-slate-500 border-line hover:border-brand/40 hover:text-text-strong"
                }`}
              >
                {hub.name}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
