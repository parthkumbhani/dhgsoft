// src/components/capabilities/signatures/EnterpriseApplicationsSig.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";

export default function EnterpriseApplicationsSig() {
  const nodes = [
    { x: 200, y: 70, label: "PLM" },
    { x: 100, y: 160, label: "ERP" },
    { x: 300, y: 160, label: "MES" },
    { x: 200, y: 230, label: "PLANT" }
  ];

  return (
    <div className="w-full max-w-[450px] aspect-[4/3] relative flex items-center justify-center bg-ink-2/30 rounded-2xl border border-slate-800 p-6 overflow-hidden">
      <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />
      
      <svg className="w-full h-full" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Constellation line connections */}
        <motion.line
          x1="200" y1="70" x2="100" y2="160"
          stroke="#334155" strokeWidth="2" strokeDasharray="4 4"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0 }}
        />
        <motion.line
          x1="200" y1="70" x2="300" y2="160"
          stroke="#334155" strokeWidth="2" strokeDasharray="4 4"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 1.0 }}
        />
        <motion.line
          x1="100" y1="160" x2="300" y2="160"
          stroke="#B4123F" strokeWidth="2"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 1.2 }}
        />
        <motion.line
          x1="100" y1="160" x2="200" y2="230"
          stroke="#E11D5C" strokeWidth="2"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 1.0 }}
        />
        <motion.line
          x1="300" y1="160" x2="200" y2="230"
          stroke="#E11D5C" strokeWidth="2"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 1.0 }}
        />

        {/* Nodes */}
        {nodes.map((node, idx) => (
          <g key={idx}>
            <motion.circle
              cx={node.x}
              cy={node.y}
              r="22"
              fill="#0A0E1A"
              stroke={idx === 3 ? "#fbc00e" : "#B4123F"}
              strokeWidth="2.5"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.25, type: "spring", stiffness: 100 }}
            />
            <text
              x={node.x}
              y={node.y + 4}
              fill="white"
              fontSize="10"
              fontWeight="black"
              fontFamily="monospace"
              textAnchor="middle"
            >
              {node.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
