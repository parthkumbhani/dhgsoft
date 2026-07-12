"use client";

import React from "react";

type FocusAreaCardProps = {
  title: string;
  body: string;
  Icon: React.ComponentType<{ className?: string }>;
};

export function FocusAreaCard({ title, body, Icon }: FocusAreaCardProps) {
  return (
    <div className="card group relative bg-white border border-line rounded-2xl p-6 hover:border-[#B4123F]/60 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-left flex flex-col justify-between overflow-hidden">
      {/* Top hover indicator line */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#B4123F] to-[#E11D5C] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

      {/* Background soft glow on hover */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#B4123F]/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      <div className="relative z-10 flex flex-col items-start">
        {/* Icon wrapper */}
        <div className="w-11 h-11 rounded-xl bg-[#B4123F]/10 flex items-center justify-center mb-5 group-hover:bg-[#B4123F] group-hover:shadow-md group-hover:shadow-[#B4123F]/20 transition-all duration-300 shrink-0">
          <Icon className="w-5 h-5 text-[#B4123F] group-hover:text-white transition-colors duration-300" />
        </div>

        {/* Title */}
        <h3 className="text-txt-strong font-extrabold font-sans text-lg tracking-tight group-hover:text-[#B4123F] transition-colors duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="text-body-sm text-txt-muted mt-3 leading-relaxed font-sans font-medium">
          {body}
        </p>
      </div>

      {/* Decorative footer line */}
      <div className="relative z-10 mt-6 pt-4 border-t border-line/50 flex items-center justify-between w-full">
        <span className="text-[10px] font-extrabold text-txt-muted/60 uppercase tracking-widest font-mono">
          DHGsoft Capability
        </span>
        <span className="text-[#B4123F] text-sm font-bold opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
          &rarr;
        </span>
      </div>
    </div>
  );
}
