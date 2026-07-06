// src/components/capabilities/signatures/IndustrialDigitalTransformationSig.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";

export default function IndustrialDigitalTransformationSig() {
  const steps = ["Connected", "Visible", "Predictive", "Autonomous"];
  
  return (
    <div className="w-full max-w-[450px] aspect-[4/3] relative flex items-center justify-center bg-ink-2/30 rounded-2xl border border-slate-800 p-6 overflow-hidden">
      {/* Subtle background tech grid */}
      <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />
      
      <svg className="w-full h-full" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Connection line path */}
        <motion.path
          d="M 50 240 L 130 180 L 210 120 L 290 60"
          stroke="url(#gradient-line)"
          strokeWidth="4"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />

        {/* Milestone Nodes */}
        {[
          { x: 50, y: 240, label: "Connected" },
          { x: 130, y: 180, label: "Visible" },
          { x: 210, y: 120, label: "Predictive" },
          { x: 290, y: 60, label: "Autonomous" }
        ].map((node, idx) => (
          <g key={idx}>
            {/* Glowing outer ring */}
            <motion.circle
              cx={node.x}
              cy={node.y}
              r="12"
              fill="rgba(225, 29, 92, 0.15)"
              stroke="#E11D5C"
              strokeWidth="1.5"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.3 + 0.5, duration: 0.5 }}
            />
            {/* Inner core */}
            <motion.circle
              cx={node.x}
              cy={node.y}
              r="6"
              fill="#B4123F"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.3 + 0.7, duration: 0.3 }}
            />
            {/* Label */}
            <motion.text
              x={node.x + 18}
              y={node.y + 5}
              fill="#94A3B8"
              fontSize="12"
              fontWeight="bold"
              fontFamily="monospace"
              initial={{ opacity: 0, x: node.x + 8 }}
              whileInView={{ opacity: 1, x: node.x + 18 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.3 + 0.9, duration: 0.4 }}
            >
              {node.label}
            </motion.text>
          </g>
        ))}

        <defs>
          <linearGradient id="gradient-line" x1="50" y1="240" x2="290" y2="60" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#B4123F" />
            <stop offset="50%" stopColor="#E11D5C" />
            <stop offset="100%" stopColor="#fbc00e" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
