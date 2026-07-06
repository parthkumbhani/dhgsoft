// src/components/careers/StatStrip.tsx
"use client";

import React from "react";
import { Users, Workflow, Globe, Settings } from "lucide-react";

export default function StatStrip() {
  const stats = [
    {
      value: "[XX]+",
      label: "Digital Engineers",
      icon: Users,
      desc: "Architects & developers worldwide"
    },
    {
      value: "[XX]+",
      label: "Active Projects",
      icon: Workflow,
      desc: "Critical industry integrations"
    },
    {
      value: "[XX]",
      label: "Countries Reached",
      icon: Globe,
      desc: "Global office & client networks"
    },
    {
      value: "[XX]+",
      label: "Technologies",
      icon: Settings,
      desc: "SCADA, cloud & AI integrations"
    }
  ];

  return (
    <section className="bg-slate-900 border-y border-slate-800 py-12 text-white relative overflow-hidden select-none">
      <div className="absolute inset-0 bg-tech-grid opacity-10 pointer-events-none" />
      
      <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-[120px] relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div 
                key={idx} 
                className={`space-y-2 text-left p-4 hover:bg-slate-850/40 rounded-xl transition-all duration-300 ${
                  idx < stats.length - 1 ? "lg:border-r lg:border-slate-800/80" : ""
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-brand/10 border border-brand/20 flex items-center justify-center text-brand-hot">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-3xl sm:text-4xl font-black text-brand-hot font-mono tracking-tight">
                    {stat.value}
                  </span>
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs font-bold text-slate-200 tracking-wider uppercase font-mono">
                    {stat.label}
                  </h4>
                  <p className="text-[11px] text-slate-400 font-medium">
                    {stat.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
