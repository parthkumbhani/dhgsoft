// src/components/insights/SubscribeBand.tsx
"use client";

import React, { useState } from "react";
import SectionBand from "@/components/ui/SectionBand";
import { Button } from "@/components/ui/button";

export default function SubscribeBand() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "loading">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 1000);
  };

  return (
    <SectionBand variant="ink" className="py-12 select-none">
      {/* Mesh lines */}
      <div className="absolute inset-0 bg-tech-grid opacity-10 pointer-events-none" />
      <div className="max-w-site-wide mx-auto px-gutter md:px-gutter-md relative z-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 text-left">
          
          <div className="max-w-xl space-y-2">
            <h4 className="text-xl sm:text-2xl font-extrabold tracking-tight text-white">
              Get industrial insights in your inbox.
            </h4>
            <p className="text-white/60 text-sm leading-relaxed">
              Thought-leadership on OT/IT convergence, industrial machine learning, and secure edge networks. No spam, unsubscribe anytime.
            </p>
          </div>

          <div className="w-full md:w-auto shrink-0 min-w-[320px] sm:min-w-[400px]">
            {status === "success" ? (
              <div className="bg-emerald-500/10 border border-emerald-500/20 px-6 py-4 rounded-xl text-center">
                <span className="text-emerald-400 font-extrabold text-sm tracking-wide block uppercase font-mono">
                  ✓ Subscription Confirmed
                </span>
                <span className="text-xs text-white/80 mt-1 block">
                  You are now subscribed to DHGsoft Insights.
                </span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your corporate email"
                  required
                  disabled={status === "loading"}
                  className="bg-ink-2/60 border border-line/10 focus:border-brand rounded-xl px-4 py-3 text-sm text-white w-full placeholder-white/40 outline-none transition-colors"
                />
                <Button
                  type="submit"
                  disabled={status === "loading"}
                  variant="primary"
                  className="shrink-0"
                >
                  {status === "loading" ? "Subscribing..." : "Subscribe"}
                </Button>
              </form>
            )}
          </div>

        </div>
      </div>
    </SectionBand>
  );
}
