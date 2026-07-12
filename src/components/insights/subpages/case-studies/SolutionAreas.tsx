"use client";

import React from "react";
import { Cog, GitMerge, Network, Brain, Building2, Cloud, ShieldCheck, HeartHandshake } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { FocusAreaCard } from "../shared/FocusAreaCard";

const solutionAreasData = [
  {
    title: "Industrial Automation",
    body: "Modernizing production systems through intelligent automation and advanced control technologies.",
    Icon: Cog,
  },
  {
    title: "OT / IT Integration",
    body: "Connecting plant-floor operations with enterprise systems to enable seamless information flow.",
    Icon: GitMerge,
  },
  {
    title: "Industrial IoT",
    body: "Connecting assets, sensors, and edge devices for continuous monitoring and intelligent operations.",
    Icon: Network,
  },
  {
    title: "AI & Analytics",
    body: "Applying predictive analytics, machine learning, and operational intelligence to improve decision-making.",
    Icon: Brain,
  },
  {
    title: "Enterprise Applications",
    body: "Integrating ERP, MES, CMMS, LIMS, and enterprise software into unified digital environments.",
    Icon: Building2,
  },
  {
    title: "Cloud Infrastructure",
    body: "Designing secure cloud and hybrid platforms that improve scalability and collaboration.",
    Icon: Cloud,
  },
  {
    title: "Cybersecurity",
    body: "Strengthening industrial security through modern cybersecurity strategies and secure system architectures.",
    Icon: ShieldCheck,
  },
  {
    title: "Managed Services",
    body: "Providing 24/7 global operations management, SCADA support, and system maintenance.",
    Icon: HeartHandshake,
  },
];

export function SolutionAreas() {
  return (
    <Section variant="white" size="default" pattern="v2" id="solution-areas" className="scroll-mt-20 relative overflow-hidden border-b border-line/10">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center space-y-4">
        <span className="text-brand text-label-bold uppercase tracking-[0.2em] font-sans block">
          SOLUTION AREAS
        </span>
        <h2 className="text-txt-strong tracking-tight font-black leading-tight font-sans">
          Our case studies cover projects across:
        </h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
        {solutionAreasData.map((item, idx) => (
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
