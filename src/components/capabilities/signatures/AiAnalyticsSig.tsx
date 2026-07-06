// src/components/capabilities/signatures/AiAnalyticsSig.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";

export default function AiAnalyticsSig() {
  return (
    <div className="w-full max-w-[450px] aspect-[4/3] relative flex items-center justify-center bg-ink-2/30 rounded-2xl border border-slate-800 p-6 overflow-hidden">
      <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />
      
      <svg className="w-full h-full" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Anomaly Chart Visual */}
        <g transform="translate(40, 40)">
          {/* Grid lines */}
          <line x1="0" y1="60" x2="320" y2="60" stroke="#1E293B" strokeWidth="1" />
          <line x1="0" y1="120" x2="320" y2="120" stroke="#1E293B" strokeWidth="1" />
          <line x1="0" y1="180" x2="320" y2="180" stroke="#1E293B" strokeWidth="1" />
          
          {/* Main Chart Line */}
          <motion.path
            d="M 0 120 L 40 100 L 80 140 L 120 70 L 160 160 L 200 40 L 240 190 L 280 100 L 320 120"
            stroke="#475569"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2 }}
          />

          {/* Anomaly Segment in Crimson */}
          <motion.path
            d="M 160 160 L 200 40 L 240 190"
            stroke="#E11D5C"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1, duration: 1 }}
          />

          {/* Glowing Anomaly Warning Node */}
          <motion.circle
            cx="200"
            cy="40"
            r="8"
            fill="rgba(225, 29, 92, 0.2)"
            stroke="#E11D5C"
            strokeWidth="2"
            animate={{ scale: [1, 1.4, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
          <text x="200" y="24" fill="#E11D5C" fontSize="10" fontWeight="bold" fontFamily="monospace" textAnchor="middle">ANOMALY DETECTED</text>
        </g>

        {/* Circular flow indicators */}
        <circle cx="200" cy="150" r="100" stroke="#1E293B" strokeWidth="1" strokeDasharray="6 6" />

        {/* Floating Node points */}
        {[
          { angle: 0, text: "Data" },
          { angle: 90, text: "Model" },
          { angle: 180, text: "Predict" },
          { angle: 270, text: "Act" }
        ].map((node, i) => {
          const rad = (node.angle * Math.PI) / 180;
          const x = 200 + 100 * Math.cos(rad);
          const y = 150 + 100 * Math.sin(rad);
          return (
            <g key={i}>
              <circle cx={x} cy={y} r="6" fill="#B4123F" />
              <text
                x={x}
                y={y + 20}
                fill="#94A3B8"
                fontSize="11"
                fontWeight="bold"
                fontFamily="monospace"
                textAnchor="middle"
              >
                {node.text}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
