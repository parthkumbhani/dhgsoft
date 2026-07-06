// src/components/capabilities/signatures/IiotSig.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";

export default function IiotSig() {
  return (
    <div className="w-full max-w-[450px] aspect-[4/3] relative flex items-center justify-center bg-ink-2/30 rounded-2xl border border-slate-800 p-6 overflow-hidden">
      <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />
      
      <svg className="w-full h-full" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Cloud top-center */}
        <g transform="translate(160, 40)">
          <rect width="80" height="48" rx="8" fill="rgba(59, 130, 246, 0.08)" stroke="#3B82F6" strokeWidth="2" />
          <text x="40" y="28" fill="#60A5FA" fontSize="12" fontWeight="bold" fontFamily="monospace" textAnchor="middle">CLOUD</text>
        </g>

        {/* Edge Center Node */}
        <g transform="translate(160, 140)">
          <rect width="80" height="48" rx="8" fill="rgba(180, 18, 63, 0.08)" stroke="#B4123F" strokeWidth="2" />
          <text x="40" y="28" fill="#E11D5C" fontSize="12" fontWeight="bold" fontFamily="monospace" textAnchor="middle">EDGE</text>
        </g>

        {/* Bottom Sensor Devices */}
        {[
          { x: 80, y: 240, label: "Sensor A" },
          { x: 200, y: 240, label: "Sensor B" },
          { x: 320, y: 240, label: "Sensor C" }
        ].map((sensor, idx) => (
          <g key={idx}>
            <circle cx={sensor.x} cy={sensor.y} r="8" fill="none" stroke="#64748B" strokeWidth="2" />
            <circle cx={sensor.x} cy={sensor.y} r="3" fill="#64748B" />
            <text x={sensor.x} y={sensor.y + 20} fill="#64748B" fontSize="10" fontWeight="bold" fontFamily="monospace" textAnchor="middle">{sensor.label}</text>
            
            {/* Edge connection path lines */}
            <line x1={sensor.x} y1={sensor.y - 8} x2="200" y2="188" stroke="#1E293B" strokeWidth="1.5" strokeDasharray="3 3" />
            
            {/* Animated telemetry pulses */}
            <motion.circle
              cx={sensor.x}
              cy={sensor.y}
              r="2"
              fill="#E11D5C"
              animate={{
                cx: [sensor.x, 200],
                cy: [sensor.y, 188],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: idx * 0.4,
                ease: "easeInOut"
              }}
            />
          </g>
        ))}

        {/* Edge-to-Cloud Connection Line */}
        <line x1="200" y1="140" x2="200" y2="88" stroke="#3B82F6" strokeWidth="2" strokeDasharray="4 4" />
        <motion.circle
          cx="200"
          cy="140"
          r="3"
          fill="#3B82F6"
          animate={{
            cy: [140, 88],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </svg>
    </div>
  );
}
