// src/components/capabilities/signatures/OtItIntegrationSig.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Cpu, Cloud, Settings, Network } from "lucide-react";

export default function OtItIntegrationSig() {
  return (
    <div className="w-full max-w-[450px] aspect-[4/3] relative flex items-center justify-center bg-ink-2/30 rounded-2xl border border-slate-800 p-6 overflow-hidden">
      <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />
      
      <div className="w-full flex items-center justify-between gap-4 z-10 px-4">
        {/* OT Side (Plant Floor) */}
        <div className="flex flex-col items-center gap-2">
          <div className="w-14 h-14 rounded-2xl bg-brand/10 border border-brand/40 flex items-center justify-center text-brand">
            <Cpu className="w-7 h-7" />
          </div>
          <span className="font-mono text-[10px] text-slate-400 font-bold uppercase tracking-wider">Plant Floor (OT)</span>
        </div>

        {/* Central Bridge and Data Packets */}
        <div className="flex-grow h-14 relative flex items-center justify-center">
          {/* Bridge baseline path */}
          <div className="absolute left-0 right-0 h-[2px] bg-slate-800" />
          <motion.div
            className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-brand via-brand-hot to-blue-500"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
          />

          {/* Connected Network Core Icon */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-brand-hot z-20">
            <Network className="w-3.5 h-3.5" />
          </div>

          {/* Left-to-Right Packet */}
          <motion.div
            className="w-2.5 h-2.5 rounded-full bg-brand-hot absolute left-0"
            animate={{
              x: ["0%", "360%"]
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "linear"
            }}
          />

          {/* Right-to-Left Packet */}
          <motion.div
            className="w-2 h-2 rounded-full bg-blue-400 absolute right-0"
            animate={{
              x: ["0%", "-360%"]
            }}
            transition={{
              duration: 2.8,
              repeat: Infinity,
              ease: "linear",
              delay: 0.8
            }}
          />
        </div>

        {/* IT Side (Enterprise Cloud) */}
        <div className="flex flex-col items-center gap-2">
          <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/40 flex items-center justify-center text-blue-400">
            <Cloud className="w-7 h-7" />
          </div>
          <span className="font-mono text-[10px] text-slate-400 font-bold uppercase tracking-wider">Enterprise (IT)</span>
        </div>
      </div>
    </div>
  );
}
