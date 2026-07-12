"use client";

import React from "react";
import { Section } from "@/components/ui/Section";

export function LookingAhead() {
  return (
    <Section variant="mist" size="compact" pattern="v8" className="relative overflow-hidden border-b border-line/10">
      <div className="max-w-[800px] mx-auto text-center space-y-6 flex flex-col items-center">
        <span className="text-brand text-label-bold uppercase tracking-[0.2em] font-sans block">
          LOOKING AHEAD
        </span>
        <h2 className="text-txt-strong tracking-tight font-black leading-tight font-sans">
          Every project strengthens our mission.
        </h2>
        <p className="text-body-md text-txt-muted max-w-[720px] mx-auto leading-relaxed font-sans font-medium">
          Every project strengthens our experience and reinforces our mission to build intelligent, connected, and resilient industrial enterprises.
        </p>
      </div>
    </Section>
  );
}
