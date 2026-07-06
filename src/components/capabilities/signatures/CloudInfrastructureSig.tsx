// src/components/capabilities/signatures/CloudInfrastructureSig.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";

export default function CloudInfrastructureSig() {
  return (
    <div className="w-full max-w-[450px] aspect-[4/3] relative flex items-center justify-center bg-ink-2/30 rounded-2xl border border-slate-800 p-6 overflow-hidden">
      <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />
      
      <svg className="w-full h-full" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Layer 3: Cloud (Top) */}
        <motion.g
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <path d="M 80 80 L 320 80" stroke="#3B82F6" strokeWidth="6" strokeLinecap="round" opacity="0.15" />
          <path d="M 100 80 L 300 80" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" />
          <text x="200" y="65" fill="#60A5FA" fontSize="11" fontWeight="bold" fontFamily="monospace" textAnchor="middle">CLOUD SERVICES (SCALABILITY)</text>
        </motion.g>

        {/* Layer 2: On-Prem (Middle) */}
        <motion.g
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <path d="M 80 150 L 320 150" stroke="#B4123F" strokeWidth="6" strokeLinecap="round" opacity="0.15" />
          <path d="M 100 150 L 300 150" stroke="#B4123F" strokeWidth="2" strokeLinecap="round" />
          <text x="200" y="135" fill="#E11D5C" fontSize="11" fontWeight="bold" fontFamily="monospace" textAnchor="middle">ON-PREM CORE (RELIABILITY)</text>
        </motion.g>

        {/* Layer 1: Edge (Bottom) */}
        <motion.g
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <path d="M 80 220 L 320 220" stroke="#fbc00e" strokeWidth="6" strokeLinecap="round" opacity="0.15" />
          <path d="M 100 220 L 300 220" stroke="#fbc00e" strokeWidth="2" strokeLinecap="round" />
          <text x="200" y="205" fill="#fbc00e" fontSize="11" fontWeight="bold" fontFamily="monospace" textAnchor="middle">EDGE NODES (LATENCY)</text>
        </motion.g>

        {/* Vertical Data Flow Lines */}
        <line x1="140" y1="90" x2="140" y2="210" stroke="#334155" strokeWidth="1.5" strokeDasharray="3 3" />
        <line x1="260" y1="90" x2="260" y2="210" stroke="#334155" strokeWidth="1.5" strokeDasharray="3 3" />

        {/* Floating Data Pulses */}
        <motion.circle
          cx="140"
          cy="210"
          r="3"
          fill="#fbc00e"
          animate={{
            cy: [210, 90],
            opacity: [0, 1, 0]
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
        <motion.circle
          cx="260"
          cy="90"
          r="3"
          fill="#3B82F6"
          animate={{
            cy: [90, 210],
            opacity: [0, 1, 0]
          }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "linear", delay: 0.5 }}
        />
      </svg>
    </div>
  );
}
