// src/components/capabilities/signatures/CybersecuritySig.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";

export default function CybersecuritySig() {
  return (
    <div className="w-full max-w-[450px] aspect-[4/3] relative flex items-center justify-center bg-ink-2/30 rounded-2xl border border-slate-800 p-6 overflow-hidden">
      <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />
      
      <svg className="w-full h-full" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Core Operations Node */}
        <g transform="translate(180, 130)">
          <rect width="40" height="40" rx="8" fill="rgba(180, 18, 63, 0.15)" stroke="#B4123F" strokeWidth="2.5" />
          <text x="20" y="24" fill="white" fontSize="10" fontWeight="bold" fontFamily="monospace" textAnchor="middle">OPS</text>
        </g>

        {/* Inner Ring (OT Security) */}
        <motion.circle
          cx="200"
          cy="150"
          r="45"
          stroke="#E11D5C"
          strokeWidth="2.5"
          strokeDasharray="6 6"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        />
        <text x="200" y="96" fill="#E11D5C" fontSize="8" fontWeight="bold" fontFamily="monospace" textAnchor="middle">OT SEC</text>

        {/* Middle Ring (Network Security) */}
        <motion.circle
          cx="200"
          cy="150"
          r="75"
          stroke="#3B82F6"
          strokeWidth="2"
          strokeDasharray="10 4"
          initial={{ rotate: 360 }}
          animate={{ rotate: 0 }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        />
        <text x="200" y="66" fill="#60A5FA" fontSize="8" fontWeight="bold" fontFamily="monospace" textAnchor="middle">NET WORK</text>

        {/* Outer Ring (Zero-Trust Identity) */}
        <motion.circle
          cx="200"
          cy="150"
          r="105"
          stroke="#fbc00e"
          strokeWidth="1.5"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0 }}
        />
        <text x="200" y="36" fill="#fbc00e" fontSize="8" fontWeight="bold" fontFamily="monospace" textAnchor="middle">ZERO TRUST IDENTITY</text>

        {/* Scan lines pulsing outwards */}
        <motion.circle
          cx="200"
          cy="150"
          r="20"
          fill="none"
          stroke="#E11D5C"
          strokeWidth="1.5"
          animate={{
            r: [20, 115],
            opacity: [0.6, 0]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeOut"
          }}
        />
      </svg>
    </div>
  );
}
