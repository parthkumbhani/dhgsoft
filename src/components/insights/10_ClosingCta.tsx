"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Section } from "@/components/ui/Section";

export function ClosingCta() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    // Front-end subscription logic
    setSubmitted(true);
  };

  return (
    <Section
      variant="ink"
      size="hero"
      pattern="none"
      id="newsletter"
      className="relative overflow-hidden border-t border-line/10 scroll-mt-20 text-center"
    >
      {/* Base gradient wash overlay */}
      <div 
        className="absolute inset-0 z-0 bg-gradient-to-r from-[#A10E38]/20 via-[#B4123F]/10 to-[#E11D5C]/5 opacity-80 pointer-events-none" 
      />

      {/* Subtle radial glows in opposite corners */}
      <div 
        className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none opacity-[0.06]"
        style={{
          background: 'radial-gradient(circle, #F5B301 0%, transparent 70%)',
          filter: 'blur(100px)',
        }}
      />
      <div 
        className="absolute bottom-0 right-0 w-[450px] h-[450px] rounded-full pointer-events-none opacity-[0.08]"
        style={{
          background: 'radial-gradient(circle, #E11D5C 0%, transparent 70%)',
          filter: 'blur(100px)',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto space-y-6 flex flex-col items-center">
        {/* Eyebrow chip */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-[#F5B301] shrink-0 animate-pulse" />
          <span className="text-[11px] font-extrabold uppercase tracking-widest text-white/90 font-sans">
            STAY CONNECTED
          </span>
        </div>

        {/* H1-scale heading */}
        <h1 className="heading-hero text-white font-extrabold tracking-tight leading-tight max-w-[800px] font-sans">
          Knowledge That Powers Industrial Innovation
        </h1>

        {/* Body text */}
        <p className="text-body-md text-white/85 max-w-[720px] mx-auto leading-relaxed font-sans">
          Technology evolves rapidly, but lasting transformation comes from informed decisions and practical engineering expertise. Through our Insights Hub, DHGsoft shares the knowledge, experience, and innovation that help organizations embrace change, improve operational performance, and build intelligent industrial enterprises prepared for the future.
        </p>

        {/* Newsletter card */}
        <div className="card bg-white/5 border border-white/15 backdrop-blur-md rounded-3xl p-8 md:p-10 max-w-[640px] w-full mx-auto mt-12 text-left relative overflow-hidden shadow-2xl">
          <h3 className="heading-md text-white text-center font-sans font-bold">
            Stay Connected with DHGsoft Insights
          </h3>
          <p className="text-body-sm text-white/75 text-center mt-3 leading-relaxed font-sans">
            Explore the latest engineering perspectives, industry developments, and digital transformation knowledge to stay ahead in a rapidly evolving industrial landscape.
          </p>
          
          {submitted ? (
            <div className="mt-8 flex flex-col items-center justify-center p-4 bg-white/10 rounded-2xl border border-white/10 text-white animate-fade-in space-y-2">
              <CheckCircle2 className="w-8 h-8 text-[#F5B301]" />
              <p className="text-body-sm font-bold font-sans">Thank you for subscribing!</p>
              <p className="text-xs text-white/70 font-sans text-center">
                We will send the latest industrial transformation insights directly to your inbox.
              </p>
            </div>
          ) : (
            /* Email form */
            <form className="mt-8 flex flex-col sm:flex-row gap-3 relative z-10" onSubmit={handleSubmit}>
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your work email"
                className="flex-1 px-5 py-3.5 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-brand/50 focus:border-brand text-body-sm font-sans"
              />
              <button 
                type="submit"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#B4123F] hover:bg-[#A10E38] text-white font-semibold transition-all duration-300 whitespace-nowrap cursor-pointer font-sans active:scale-95 shadow-lg hover:shadow-[#B4123F]/20"
              >
                <span>Subscribe</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}
          
          <p className="text-body-sm text-white/60 text-center mt-6 font-sans">
            <Link href="/insights" className="hover:text-white transition-colors">Browse Insights &rarr;</Link>
          </p>
        </div>
      </div>
    </Section>
  );
}
