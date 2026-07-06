// src/components/capabilities/signatures/DigitalEngineeringSig.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";

export default function DigitalEngineeringSig() {
  return (
    <div className="w-full max-w-[450px] aspect-[4/3] relative flex items-center justify-center bg-ink-2/30 rounded-2xl border border-slate-800 p-6 overflow-hidden">
      <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />
      
      <svg className="w-full h-full" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Base Layer */}
        <motion.rect
          x="60"
          y="200"
          width="280"
          height="40"
          rx="6"
          fill="rgba(30, 41, 59, 0.5)"
          stroke="#334155"
          strokeWidth="2"
          initial={{ y: 260, opacity: 0 }}
          whileInView={{ y: 200, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        />
        <text x="200" y="225" fill="#64748B" fontSize="11" fontWeight="bold" fontFamily="monospace" textAnchor="middle">INFRASTRUCTURE LAYER</text>

        {/* Middleware Blocks */}
        <motion.rect
          x="80"
          y="130"
          width="110"
          height="50"
          rx="6"
          fill="rgba(180, 18, 63, 0.08)"
          stroke="#B4123F"
          strokeWidth="2"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 80, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
        />
        <text x="135" y="160" fill="#E11D5C" fontSize="10" fontWeight="bold" fontFamily="monospace" textAnchor="middle">APIs & OT</text>

        <motion.rect
          x="210"
          y="130"
          width="110"
          height="50"
          rx="6"
          fill="rgba(59, 130, 246, 0.08)"
          stroke="#3B82F6"
          strokeWidth="2"
          initial={{ x: 400, opacity: 0 }}
          whileInView={{ x: 210, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
        />
        <text x="265" y="160" fill="#60A5FA" fontSize="10" fontWeight="bold" fontFamily="monospace" textAnchor="middle">DATA PLUGINS</text>

        {/* Top App Capstone Layer */}
        <motion.rect
          x="100"
          y="60"
          width="200"
          height="50"
          rx="6"
          fill="rgba(225, 29, 92, 0.12)"
          stroke="#E11D5C"
          strokeWidth="2"
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 60, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.0, duration: 0.8 }}
        />
        <text x="200" y="90" fill="#E11D5C" fontSize="11" fontWeight="bold" fontFamily="monospace" textAnchor="middle">CUSTOM APPS & BI</text>
      </svg>
    </div>
  );
}
