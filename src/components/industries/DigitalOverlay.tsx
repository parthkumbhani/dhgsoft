// src/components/industries/DigitalOverlay.tsx
"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export interface HUDNode {
  id: string;
  x: number; // percentage
  y: number; // percentage
  label: string;
  value?: string;
  pulseSpeed?: number;
}

interface DigitalOverlayProps {
  nodes?: HUDNode[];
}

export default function DigitalOverlay({ nodes = [] }: DigitalOverlayProps) {
  const [ticks, setTicks] = useState<Record<string, number>>({});

  useEffect(() => {
    const interval = setInterval(() => {
      setTicks((prev) => {
        const next = { ...prev };
        nodes.forEach((n) => {
          if (n.value && n.value.includes("RPM")) {
            const base = parseInt(n.value) || 1200;
            next[n.id] = base + Math.floor(Math.random() * 20 - 10);
          } else if (n.value && n.value.includes("Hz")) {
            const base = parseFloat(n.value) || 50;
            next[n.id] = parseFloat((base + Math.random() * 0.2 - 0.1).toFixed(2));
          } else if (n.value && n.value.includes("°C")) {
            const base = parseFloat(n.value) || 68;
            next[n.id] = parseFloat((base + Math.random() * 0.4 - 0.2).toFixed(1));
          } else if (n.value && n.value.includes("m³/h")) {
            const base = parseFloat(n.value) || 120;
            next[n.id] = parseFloat((base + Math.random() * 1.5 - 0.75).toFixed(1));
          } else if (n.value && n.value.includes("%")) {
            const base = parseFloat(n.value) || 98.4;
            next[n.id] = parseFloat(Math.min(100, Math.max(90, base + Math.random() * 0.2 - 0.1)).toFixed(1));
          }
        });
        return next;
      });
    }, 1500);

    return () => clearInterval(interval);
  }, [nodes]);

  if (!nodes || nodes.length === 0) return null;

  return (
    <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden">
      {/* HUD connections layer */}
      <svg className="absolute inset-0 w-full h-full opacity-30">
        <defs>
          <linearGradient id="hud-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E11D5C" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#B4123F" stopOpacity="0.2" />
          </linearGradient>
        </defs>

        {/* Connect successive nodes with lines */}
        {nodes.map((node, idx) => {
          if (idx === 0) return null;
          const prev = nodes[idx - 1];
          return (
            <motion.line
              key={`line-${idx}`}
              x1={`${prev.x}%`}
              y1={`${prev.y}%`}
              x2={`${node.x}%`}
              y2={`${node.y}%`}
              stroke="url(#hud-grad)"
              strokeWidth="1.5"
              strokeDasharray="6,4"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          );
        })}
      </svg>

      {/* Interactive Node Anchors and Values */}
      {nodes.map((node) => {
        const displayVal = ticks[node.id] !== undefined 
          ? `${ticks[node.id]}${node.value?.replace(/[0-9.]/g, "")}` 
          : node.value;

        return (
          <div
            key={node.id}
            className="absolute flex items-center gap-3 -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${node.x}%`, top: `${node.y}%` }}
          >
            {/* Glowing Ring */}
            <div className="relative flex items-center justify-center h-4 w-4">
              <motion.div
                className="absolute inset-0 rounded-full bg-brand-hot opacity-70"
                animate={{ scale: [1, 2.2, 1] }}
                transition={{
                  repeat: Infinity,
                  duration: node.pulseSpeed || 2,
                  ease: "easeInOut",
                }}
              />
              <div className="h-2.5 w-2.5 rounded-full bg-white border-2 border-brand relative z-10" />
            </div>

            {/* Readout Data Overlay Panel */}
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-ink/80 backdrop-blur-md border border-brand/30 px-3 py-1.5 rounded-lg text-left shadow-lg"
            >
              <span className="text-[10px] font-extrabold text-slate-400 tracking-wider block uppercase font-mono">
                {node.label}
              </span>
              {node.value && (
                <span className="text-xs font-black text-brand-hot font-mono">
                  {displayVal}
                </span>
              )}
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}
