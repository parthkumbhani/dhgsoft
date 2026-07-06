// src/components/capabilities/ProcessJourney.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";

interface Step {
  num: string;
  title: string;
  desc: string;
}

interface ProcessJourneyProps {
  steps: Step[];
}

export default function ProcessJourney({ steps }: ProcessJourneyProps) {
  return (
    <div className="relative w-full py-8 text-left">
      {/* Desktop Horizontal Process Line */}
      <div className="hidden md:block relative w-full mb-12">
        {/* Baseline Background Line */}
        <div className="absolute top-[28px] left-[6%] right-[6%] h-[2px] bg-slate-800/40 z-0" />
        
        {/* Animated Drawing Path Line */}
        <motion.div
          className="absolute top-[28px] left-[6%] right-[6%] h-[2px] bg-gradient-to-r from-brand via-brand-hot to-[#fbc00e] z-0"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          style={{ transformOrigin: "left" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />

        <div className="grid grid-cols-4 gap-8 relative z-10">
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col items-start space-y-4">
              {/* Step Circle Node */}
              <motion.div
                className="w-14 h-14 rounded-full border-2 border-brand bg-ink flex items-center justify-center font-bold text-white font-mono shadow-md"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.25, duration: 0.5 }}
              >
                {step.num}
              </motion.div>
              <div className="space-y-2">
                <h4 className="font-extrabold text-text-strong text-lg tracking-tight">{step.title}</h4>
                <p className="text-text-muted text-sm leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Vertical Process Line */}
      <div className="block md:hidden relative pl-8 space-y-12">
        {/* Baseline Line */}
        <div className="absolute left-[20px] top-4 bottom-4 w-[2px] bg-slate-800/40 z-0" />
        
        {/* Animated Drawing Vertical Path Line */}
        <motion.div
          className="absolute left-[20px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-brand via-brand-hot to-[#fbc00e] z-0"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          style={{ transformOrigin: "top" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />

        {steps.map((step, idx) => (
          <div key={idx} className="relative flex flex-col gap-2">
            {/* Step Circle Node */}
            <motion.div
              className="absolute left-[-28px] top-0 w-8 h-8 rounded-full border-2 border-brand bg-ink flex items-center justify-center font-bold text-white font-mono text-xs z-10 shadow-sm"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.4 }}
            >
              {step.num}
            </motion.div>
            <div className="pl-4 space-y-1">
              <h4 className="font-extrabold text-text-strong text-base tracking-tight">{step.title}</h4>
              <p className="text-text-muted text-xs leading-relaxed">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
