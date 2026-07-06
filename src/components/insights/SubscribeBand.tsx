// src/components/insights/SubscribeBand.tsx
"use client";

import React, { useState } from "react";

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
    <section className="bg-slate-900 text-white py-12 border-y border-slate-800 relative overflow-hidden select-none">
      {/* Mesh lines */}
      <div className="absolute inset-0 bg-tech-grid opacity-10 pointer-events-none" />
      <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-[120px] relative z-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 text-left">
          
          <div className="max-w-xl space-y-2">
            <h4 className="text-xl sm:text-2xl font-extrabold tracking-tight text-white">
              Get industrial insights in your inbox.
            </h4>
            <p className="text-slate-400 text-sm leading-relaxed">
              Thought-leadership on OT/IT convergence, industrial machine learning, and secure edge networks. No spam, unsubscribe anytime.
            </p>
          </div>

          <div className="w-full md:w-auto shrink-0 min-w-[320px] sm:min-w-[400px]">
            {status === "success" ? (
              <div className="bg-emerald-500/10 border border-emerald-500/20 px-6 py-4 rounded-xl text-center">
                <span className="text-emerald-400 font-extrabold text-sm tracking-wide block uppercase font-mono">
                  ✓ Subscription Confirmed
                </span>
                <span className="text-xs text-slate-300 mt-1 block">
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
                  className="bg-slate-950/60 border border-slate-700/60 focus:border-brand-hot rounded-xl px-4 py-3 text-sm text-white w-full placeholder-slate-500 outline-none transition-colors"
                />
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="bg-brand hover:bg-brand-hot disabled:bg-slate-800 text-white font-extrabold text-sm px-6 py-3 rounded-xl transition-all duration-300 shrink-0 select-none cursor-pointer"
                >
                  {status === "loading" ? "Subscribing..." : "Subscribe"}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
