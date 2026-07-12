"use client";

import React from "react";
import { Brain, TrendingUp, Eye, Zap, Sparkles, Database } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { FocusAreaCard } from "../shared/FocusAreaCard";

const focusAreasData = [
  {
    title: "Machine Learning",
    body: "Build intelligent models that continuously learn from industrial data to improve operational performance.",
    Icon: Brain,
  },
  {
    title: "Predictive Analytics",
    body: "Identify equipment failures before they occur using real-time monitoring and historical data analysis.",
    Icon: TrendingUp,
  },
  {
    title: "Computer Vision",
    body: "Enhance inspection, quality control, and workplace safety through AI-powered visual intelligence.",
    Icon: Eye,
  },
  {
    title: "Intelligent Automation",
    body: "Automate repetitive industrial processes while improving consistency, accuracy, and operational efficiency.",
    Icon: Zap,
  },
  {
    title: "Generative AI",
    body: "Enable engineering teams with AI-assisted documentation, knowledge management, and decision support.",
    Icon: Sparkles,
  },
  {
    title: "Industrial Data Intelligence",
    body: "Convert operational data into meaningful business insights that drive smarter decisions.",
    Icon: Database,
  },
];

export function FocusAreas() {
  return (
    <Section variant="mist" size="default" pattern="v2" id="focus-areas" className="scroll-mt-20 relative overflow-hidden border-b border-line/10">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center space-y-4">
        <span className="text-brand text-label-bold uppercase tracking-[0.2em] font-sans block">
          FOCUS AREAS
        </span>
        <h2 className="text-txt-strong tracking-tight font-black leading-tight font-sans">
          Six Ways AI Transforms Industrial Operations
        </h2>
        <p className="text-body-md text-txt-muted max-w-[640px] mx-auto leading-relaxed font-sans">
          Six practical areas where AI creates measurable impact across industrial operations.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {focusAreasData.map((item, idx) => (
          <FocusAreaCard
            key={idx}
            title={item.title}
            body={item.body}
            Icon={item.Icon}
          />
        ))}
      </div>
    </Section>
  );
}
