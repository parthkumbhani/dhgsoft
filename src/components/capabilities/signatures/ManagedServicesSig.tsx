// src/components/capabilities/signatures/ManagedServicesSig.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ManagedServicesSig() {
  return (
    <div className="w-full max-w-[450px] aspect-[4/3] relative flex items-center justify-center bg-ink-2/30 rounded-2xl border border-slate-800 p-6 overflow-hidden">
      <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />
      
      <svg className="w-full h-full" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Central Globe Outline */}
        <circle cx="200" cy="150" r="70" stroke="#334155" strokeWidth="2.5" />
        
        {/* Latitudes & Longitudes */}
        <path d="M 130 150 L 270 150" stroke="#334155" strokeWidth="1.5" />
        <path d="M 200 80 L 200 220" stroke="#334155" strokeWidth="1.5" />
        <ellipse cx="200" cy="150" rx="40" ry="70" stroke="#334155" strokeWidth="1.5" />
        <ellipse cx="200" cy="150" rx="70" ry="30" stroke="#334155" strokeWidth="1.5" />

        {/* Encircling 24h Time Ring */}
        <motion.circle
          cx="200"
          cy="150"
          r="100"
          stroke="url(#gradient-ring)"
          strokeWidth="3.5"
          strokeLinecap="round"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />

        {/* Pulsing Support Hubs around the globe */}
        {[
          { x: 160, y: 110, name: "US West" },
          { x: 250, y: 130, name: "EU Central" },
          { x: 190, y: 190, name: "APAC East" }
        ].map((hub, idx) => (
          <g key={idx}>
            <circle cx={hub.x} cy={hub.y} r="5" fill="#E11D5C" />
            <motion.circle
              cx={hub.x}
              cy={hub.y}
              r="12"
              stroke="#E11D5C"
              strokeWidth="1.5"
              fill="none"
              animate={{
                scale: [1, 1.6, 1],
                opacity: [0.8, 0, 0.8]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: idx * 0.6,
                ease: "easeInOut"
              }}
            />
            <text x={hub.x + 8} y={hub.y + 3} fill="#94A3B8" fontSize="8" fontWeight="bold" fontFamily="monospace">{hub.name}</text>
          </g>
        ))}

        <text x="200" y="275" fill="#E11D5C" fontSize="11" fontWeight="extrabold" fontFamily="monospace" textAnchor="middle" letterSpacing="0.15em">24/7/365 MONITORING</text>

        <defs>
          <linearGradient id="gradient-ring" x1="100" y1="150" x2="300" y2="150" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#B4123F" />
            <stop offset="50%" stopColor="#E11D5C" />
            <stop offset="100%" stopColor="#3B82F6" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
