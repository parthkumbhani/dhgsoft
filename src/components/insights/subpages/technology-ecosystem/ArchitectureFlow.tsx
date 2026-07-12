"use client";

import React from "react";
import { ArrowDown, Layers, CheckCircle2 } from "lucide-react";
import { Section } from "@/components/ui/Section";

const layers = [
  { 
    id: "06", 
    name: "Cloud & Security Layer", 
    description: "Azure, AWS, Hybrid Cloud, Cybersecurity, Identity Management",
    tags: ["Azure", "AWS", "Zero-Trust", "Cybersecurity", "IAM"]
  },
  { 
    id: "05", 
    name: "Enterprise Layer", 
    description: "ERP, MES, CMMS, LIMS, Business Applications",
    tags: ["ERP", "MES", "CMMS", "LIMS", "API Gateways"]
  },
  { 
    id: "04", 
    name: "Intelligence Layer", 
    description: "Artificial Intelligence, Machine Learning, Predictive Analytics, Digital Twins",
    tags: ["ML Models", "Predictive", "Digital Twins", "Anomaly Detection"]
  },
  { 
    id: "03", 
    name: "Data Layer", 
    description: "Industrial Historians, Data Lakes, Streaming Platforms",
    tags: ["Historians", "SQL/NoSQL", "Data Lakes", "Kafka", "Data Warehouse"]
  },
  { 
    id: "02", 
    name: "Connectivity Layer", 
    description: "OPC-UA, MQTT, Modbus, Industrial Ethernet, Edge Gateways",
    tags: ["OPC-UA", "MQTT", "Modbus", "Ethernet/IP", "Gateways"]
  },
  { 
    id: "01", 
    name: "Operational Layer", 
    description: "Machines, PLCs, DCS, Sensors, Robots, Industrial Equipment",
    tags: ["PLCs", "SCADA", "DCS", "Sensors", "Robotics", "HMIs"]
  },
];

export function ArchitectureFlow() {
  return (
    <Section variant="mist" size="default" pattern="v5" className="relative overflow-hidden border-b border-line/10">
      
      {/* Centered Header */}
      <div className="max-w-4xl mx-auto text-center space-y-4">
        <span className="text-brand text-label-bold uppercase tracking-[0.2em] font-sans block">
          ECOSYSTEM ARCHITECTURE
        </span>
        <h2 className="text-txt-strong tracking-tight font-black leading-tight font-sans">
          DHGsoft connects every layer of industrial operations.
        </h2>
        <p className="text-body-sm text-txt-muted max-w-2xl mx-auto leading-relaxed font-sans font-medium">
          From field instruments on the shop floor to enterprise applications in the cloud, we design and integrate unified operational stacks.
        </p>
      </div>

      {/* Unified Centered Stack */}
      <div className="max-w-3xl mx-auto mt-12 relative z-10 space-y-4">
        {layers.map((layer, idx) => (
          <div key={layer.id} className="relative">
            <div className="card group bg-white border border-line rounded-2xl p-6 md:p-8 hover:border-[#B4123F]/50 hover:shadow-md transition-all duration-300 relative text-left">
              {/* Accent line on left */}
              <div className="absolute top-0 bottom-0 left-0 w-[4px] bg-gradient-to-b from-[#B4123F] to-[#E11D5C] rounded-l-2xl opacity-70 group-hover:opacity-100 transition-opacity" />

              <div className="flex items-start gap-4">
                {/* Number pill */}
                <div className="w-10 h-10 rounded-xl bg-[#B4123F]/10 flex items-center justify-center font-bold text-label-bold font-sans text-[#B4123F] group-hover:bg-[#B4123F] group-hover:text-white transition-all duration-300 shrink-0">
                  {layer.id}
                </div>

                <div className="flex-1 space-y-3">
                  {/* Layer Name */}
                  <div className="text-[#B4123F] text-label-bold uppercase tracking-[0.15em] font-sans font-bold group-hover:translate-x-0.5 transition-transform duration-300">
                    {layer.name}
                  </div>
                  {/* Description */}
                  <p className="text-body-sm text-txt-muted font-sans font-medium leading-relaxed">
                    {layer.description}
                  </p>
                  {/* Badges/Tags list */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {layer.tags.map((tag, tIdx) => (
                      <span 
                        key={tIdx}
                        className="text-[10px] font-bold text-txt-strong bg-mist/60 border border-line/55 px-2.5 py-1 rounded-md font-sans uppercase tracking-wide group-hover:border-[#B4123F]/20 group-hover:bg-[#B4123F]/5 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Connected Arrow */}
            {idx < layers.length - 1 && (
              <div className="flex justify-center my-2 relative z-20">
                <div className="w-8 h-8 rounded-full bg-white border border-line flex items-center justify-center shadow-sm">
                  <ArrowDown className="w-3.5 h-3.5 text-[#B4123F] animate-pulse" />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Sub-floor capability list */}
      <div className="max-w-3xl mx-auto mt-12 bg-white border border-line rounded-2xl p-6 relative overflow-hidden shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4 text-left">
        <div className="flex items-center gap-3">
          <Layers className="w-5 h-5 text-[#B4123F]" />
          <span className="text-label-bold text-txt-strong uppercase font-sans font-bold">Data Flow Architecture Features</span>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex items-center gap-2 text-body-xs text-txt-muted font-sans font-semibold">
            <CheckCircle2 className="w-4 h-4 text-[#B4123F] shrink-0" />
            <span>Standardized Protocols (OPC-UA, MQTT)</span>
          </div>
          <div className="flex items-center gap-2 text-body-xs text-txt-muted font-sans font-semibold">
            <CheckCircle2 className="w-4 h-4 text-[#B4123F] shrink-0" />
            <span>Zero-Trust Security</span>
          </div>
          <div className="flex items-center gap-2 text-body-xs text-txt-muted font-sans font-semibold">
            <CheckCircle2 className="w-4 h-4 text-[#B4123F] shrink-0" />
            <span>Bi-Directional Streaming</span>
          </div>
        </div>
      </div>

    </Section>
  );
}
