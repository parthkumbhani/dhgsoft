"use client";

import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { toast } from "sonner";

type Props = { title: string };

export function InsightsCta({ title }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    // TODO: Wire to Mailchimp/HubSpot or custom endpoint before publishing
    console.log("Subscribed email:", email);
    toast.success("Successfully subscribed to DHGsoft Insights newsletter!");
    setEmail("");
  };

  return (
    <section ref={ref} className="relative overflow-hidden py-20 md:py-28 select-none">
      {/* Background — rich crimson gradient overlay + corner glows */}
      <div 
        className="absolute inset-0 z-0" 
        style={{ background: 'linear-gradient(135deg, #B4123F 0%, #9E1039 50%, #A10E38 100%)' }} 
      />
      <div 
        className="absolute inset-0 opacity-30 pointer-events-none z-1"
        style={{ 
          background: 'radial-gradient(circle at 20% 20%, rgba(245,179,1,0.25) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(225,29,92,0.25) 0%, transparent 50%)' 
        }}
      />
      
      {/* Subtle Contour grid texture */}
      <div
        className="absolute inset-0 bg-tech-grid opacity-[0.03] pointer-events-none z-1"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.08) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 max-w-site mx-auto px-gutter md:px-gutter-md text-center flex flex-col items-center">
        {/* Eyebrow chip */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-white/15 border border-white/25 backdrop-blur-xs rounded-full mb-8"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse" />
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-white font-sans">
            Stay Connected
          </span>
        </motion.div>

        {/* H2 Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="heading-hero text-white mt-6 max-w-[820px] mx-auto text-center font-extrabold leading-[1.1] tracking-tight font-sans"
        >
          {title}
        </motion.h2>

        {/* Sub-line */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
          transition={{ duration: 0.6, delay: 0.16 }}
          className="text-body-md text-white/85 mt-6 max-w-[620px] mx-auto leading-relaxed font-sans font-medium text-center"
        >
          Explore the latest engineering perspectives, industry developments, and digital transformation knowledge to stay ahead in a rapidly evolving industrial landscape.
        </motion.p>

        {/* Newsletter form */}
        <motion.form 
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
          transition={{ duration: 0.55, delay: 0.24 }}
          onSubmit={handleSubmit}
          className="mt-10 flex flex-col sm:flex-row gap-3 w-full max-w-[520px] mx-auto"
        >
          <input 
            type="email" 
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your work email"
            className="flex-grow px-6 h-12 rounded-xl bg-white/10 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/40 focus:border-white/50 text-sm font-sans"
          />
          <button 
            type="submit"
            className="h-12 px-8 flex items-center justify-center gap-2 rounded-xl bg-white text-brand font-bold hover:shadow-lg hover:-translate-y-[2px] active:scale-[0.98] transition-all duration-300 whitespace-nowrap cursor-pointer text-sm font-sans shadow-sm"
          >
            <span>Subscribe</span>
            <ArrowRight className="w-4.5 h-4.5" />
          </button>
        </motion.form>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.32 }}
          className="text-[9px] font-bold uppercase tracking-[0.25em] text-white/60 mt-12 font-sans"
        >
          Building Value for Tomorrow.
        </motion.p>
      </div>
    </section>
  );
}
export default InsightsCta;
