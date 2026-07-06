// src/components/industries/ConnectedOperations.tsx
"use client";
import { Section } from "@/components/ui/Section";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Activity, Database, Share2, Layers, Cpu, Server } from "lucide-react";

interface ConnectedOperationsProps {
  industryName: string;
  assets: string[];
  caption: string;
}

export default function ConnectedOperations({ industryName, assets, caption }: ConnectedOperationsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const pathLength = useTransform(scrollYProgress, [0.1, 0.5], [0, 1]);
  const opacityVal = useTransform(scrollYProgress, [0.0, 0.2], [0.3, 1]);

  // Coordinates for assets arranged radially on a 800x400 canvas
  // Central Hub: (400, 200)
  // Radial coordinates (6 assets max)
  const hubX = 400;
  const hubY = 200;

  const nodeOffsets = [
    { x: 120, y: 80, icon: Cpu },
    { x: 680, y: 80, icon: Database },
    { x: 100, y: 200, icon: Activity },
    { x: 700, y: 200, icon: Share2 },
    { x: 150, y: 320, icon: Layers },
    { x: 650, y: 320, icon: Server }
  ];

  return (
    <Section variant="ink" containerSize="wide" ref={containerRef} className=" text-white border-b border-slate-900 overflow-hidden relative">
      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />
      <div className="absolute -top-1/4 -left-1/4 w-[500px] h-[500px] rounded-full bg-brand/5 blur-[150px] pointer-events-none" />
      <div className="absolute -bottom-1/4 -right-1/4 w-[500px] h-[500px] rounded-full bg-brand-hot/5 blur-[150px] pointer-events-none" />

      <div className="w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Description Block */}
          <div className="lg:col-span-4 space-y-6 text-left">
            <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-brand-hot font-mono block">
              CONNECTED INTELLIGENCE
            </span>
            <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight">
              Connected {industryName} Operations
            </h3>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              {caption}
            </p>
            <div className="pt-4 flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-[#E11D5C] animate-ping" />
              <span className="text-xs font-mono font-bold tracking-widest uppercase text-slate-300">
                ACTIVE DATA FLOW PIPELINE
              </span>
            </div>
          </div>

          {/* SVG Connection Graphic Block */}
          <motion.div 
            style={{ opacity: opacityVal }}
            className="lg:col-span-8 flex justify-center w-full"
          >
            <div className="relative w-full max-w-[800px] aspect-[2/1] bg-slate-950/40 border border-slate-800/80 rounded-3xl p-6 backdrop-blur-sm overflow-hidden">
              <svg 
                viewBox="0 0 800 400" 
                className="w-full h-full"
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Grid Lines Overlay */}
                <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255, 255, 255, 0.03)" strokeWidth="1" />
                </pattern>
                <rect width="800" height="400" fill="url(#grid-pattern)" />

                {/* Connection lines layer */}
                {assets.slice(0, 6).map((asset, idx) => {
                  const node = nodeOffsets[idx];
                  return (
                    <g key={`pipeline-${idx}`}>
                      {/* Base Background Pipeline path */}
                      <path
                        d={`M ${hubX} ${hubY} L ${node.x} ${node.y}`}
                        stroke="rgba(180, 18, 63, 0.15)"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      {/* Animated Drawing Path */}
                      <motion.path
                        d={`M ${hubX} ${hubY} L ${node.x} ${node.y}`}
                        stroke="url(#svg-gradient)"
                        strokeWidth="2"
                        strokeLinecap="round"
                        style={{ pathLength }}
                      />
                      {/* Travelling Data Pulse Dot */}
                      <motion.circle
                        r="3.5"
                        fill="#E11D5C"
                        filter="url(#glow-filter)"
                        animate={{
                          cx: [hubX, node.x],
                          cy: [hubY, node.y]
                        }}
                        transition={{
                          repeat: Infinity,
                          duration: 3 + idx * 0.5,
                          ease: "linear"
                        }}
                      />
                    </g>
                  );
                })}

                {/* Definitions */}
                <defs>
                  <linearGradient id="svg-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#B4123F" />
                    <stop offset="100%" stopColor="#E11D5C" />
                  </linearGradient>
                  
                  <filter id="glow-filter" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>

                {/* Central Data Engine Hub */}
                <g>
                  {/* Outer Pulsing Aura */}
                  <motion.circle
                    cx={hubX}
                    cy={hubY}
                    r="34"
                    fill="rgba(180, 18, 63, 0.1)"
                    stroke="rgba(225, 29, 92, 0.25)"
                    strokeWidth="1.5"
                    animate={{ scale: [1, 1.25, 1] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                  />
                  {/* Central Node Core */}
                  <circle
                    cx={hubX}
                    cy={hubY}
                    r="25"
                    fill="#0A0E1A"
                    stroke="#B4123F"
                    strokeWidth="3.5"
                  />
                  <g transform={`translate(${hubX - 10}, ${hubY - 10})`}>
                    <path
                      d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                      stroke="#E11D5C"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </g>

                {/* Radial Asset Nodes */}
                {assets.slice(0, 6).map((asset, idx) => {
                  const node = nodeOffsets[idx];
                  const Icon = node.icon;
                  return (
                    <g key={`asset-${idx}`}>
                      {/* Node Circle */}
                      <circle
                        cx={node.x}
                        cy={node.y}
                        r="20"
                        fill="#0A0E1A"
                        stroke="#B4123F"
                        strokeWidth="2"
                      />
                      {/* Icon */}
                      <g transform={`translate(${node.x - 9}, ${node.y - 9})`} className="text-brand-hot">
                        <Icon className="w-4.5 h-4.5 stroke-[#E11D5C]" strokeWidth={2} />
                      </g>
                      
                      {/* Label Text Overlay */}
                      <text
                        x={node.x}
                        y={node.y > hubY ? node.y + 35 : node.y - 28}
                        textAnchor="middle"
                        fill="#94A3B8"
                        fontSize="10"
                        fontWeight="bold"
                        fontFamily="monospace"
                        letterSpacing="1"
                      >
                        {asset.toUpperCase()}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>
          </motion.div>

        </div>
      </div>
    </Section>
  );
}
