"use client";

import React from "react";
import { Cog, Network, Building2, Cloud, Database, Brain, ShieldCheck } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { FocusAreaCard } from "../shared/FocusAreaCard";

const coreTechData = [
  {
    title: "Industrial Automation",
    body: "PLC, SCADA, DCS, HMI",
    Icon: Cog,
  },
  {
    title: "Industrial IoT",
    body: "Sensors, Edge Devices, OPC-UA, MQTT",
    Icon: Network,
  },
  {
    title: "Enterprise Systems",
    body: "ERP, MES, LIMS, CMMS",
    Icon: Building2,
  },
  {
    title: "Cloud Platforms",
    body: "Azure, AWS, Hybrid Cloud",
    Icon: Cloud,
  },
  {
    title: "Industrial Data Platforms",
    body: "Historians, Data Lakes, Streaming Analytics",
    Icon: Database,
  },
  {
    title: "Artificial Intelligence",
    body: "Machine Learning, Predictive Analytics, Digital Twins",
    Icon: Brain,
  },
  {
    title: "Cybersecurity",
    body: "OT Security, Network Segmentation, Zero Trust",
    Icon: ShieldCheck,
  },
];

export function CoreTechnologies() {
  return (
    <Section variant="white" size="default" pattern="v2" id="core-domains" className="scroll-mt-20 relative overflow-hidden border-b border-line/10">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center space-y-4">
        <span className="text-brand text-label-bold uppercase tracking-[0.2em] font-sans block">
          CORE TECHNOLOGY DOMAINS
        </span>
        <h2 className="text-txt-strong tracking-tight font-black leading-tight font-sans">
          Core Technology Domains
        </h2>
      </div>

      {/* 7-Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
        {coreTechData.map((item, idx) => (
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
