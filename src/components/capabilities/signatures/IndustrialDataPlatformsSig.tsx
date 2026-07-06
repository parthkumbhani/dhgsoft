// src/components/capabilities/signatures/IndustrialDataPlatformsSig.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";

export default function IndustrialDataPlatformsSig() {
  return (
    <div className="w-full max-w-[450px] aspect-[4/3] relative flex items-center justify-center bg-ink-2/30 rounded-2xl border border-slate-800 p-6 overflow-hidden">
      <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />
      
      <svg className="w-full h-full" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Central Platform Hub Node */}
        <motion.rect
          x="160"
          y="110"
          width="80"
          height="80"
          rx="12"
          fill="rgba(180, 18, 63, 0.08)"
          stroke="#B4123F"
          strokeWidth="2"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        />
        <text
          x="200"
          y="155"
          fill="#E11D5C"
          fontSize="14"
          fontWeight="black"
          fontFamily="monospace"
          textAnchor="middle"
        >
          HUB
        </text>

        {/* Input Pipes */}
        <path d="M 40 80 Q 100 80 160 130" stroke="#334155" strokeWidth="2" fill="none" strokeDasharray="4 4" />
        <path d="M 40 150 Q 100 150 160 150" stroke="#334155" strokeWidth="2" fill="none" strokeDasharray="4 4" />
        <path d="M 40 220 Q 100 220 160 170" stroke="#334155" strokeWidth="2" fill="none" strokeDasharray="4 4" />

        {/* Output Pipes */}
        <path d="M 240 130 Q 300 80 360 80" stroke="#334155" strokeWidth="2" fill="none" strokeDasharray="4 4" />
        <path d="M 240 170 Q 300 220 360 220" stroke="#334155" strokeWidth="2" fill="none" strokeDasharray="4 4" />

        {/* Floating Input Data Particles */}
        <motion.circle
          cx="40"
          cy="80"
          r="4"
          fill="#B4123F"
          animate={{
            cx: [40, 70, 100, 130, 160],
            cy: [80, 80, 95, 112, 130],
            opacity: [0, 1, 1, 1, 0]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.circle
          cx="40"
          cy="150"
          r="4"
          fill="#E11D5C"
          animate={{
            cx: [40, 160],
            opacity: [0, 1, 1, 0]
          }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "linear", delay: 0.5 }}
        />
        <motion.circle
          cx="40"
          cy="220"
          r="4"
          fill="#fbc00e"
          animate={{
            cx: [40, 70, 100, 130, 160],
            cy: [220, 220, 205, 188, 170],
            opacity: [0, 1, 1, 1, 0]
          }}
          transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
        />

        {/* Floating Output Data Particles */}
        <motion.circle
          cx="240"
          cy="130"
          r="4"
          fill="#3B82F6"
          animate={{
            cx: [240, 270, 300, 330, 360],
            cy: [130, 112, 95, 80, 80],
            opacity: [0, 1, 1, 1, 0]
          }}
          transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
        />
        <motion.circle
          cx="240"
          cy="170"
          r="4"
          fill="#10B981"
          animate={{
            cx: [240, 270, 300, 330, 360],
            cy: [170, 188, 205, 220, 220],
            opacity: [0, 1, 1, 1, 0]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
        />

        {/* Label endpoints */}
        <text x="35" y="65" fill="#64748B" fontSize="10" fontWeight="bold" fontFamily="monospace">Sensors</text>
        <text x="35" y="135" fill="#64748B" fontSize="10" fontWeight="bold" fontFamily="monospace">PLCs</text>
        <text x="35" y="205" fill="#64748B" fontSize="10" fontWeight="bold" fontFamily="monospace">Historians</text>
        
        <text x="365" y="65" fill="#64748B" fontSize="10" fontWeight="bold" fontFamily="monospace" textAnchor="end">BI Dashboards</text>
        <text x="365" y="205" fill="#64748B" fontSize="10" fontWeight="bold" fontFamily="monospace" textAnchor="end">AI Engines</text>
      </svg>
    </div>
  );
}
