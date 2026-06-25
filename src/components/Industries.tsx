"use client"

import React from "react"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

const INDUSTRIES_DATA = [
  {
    name: "Manufacturing",
    desc: "Smart factories, process optimization, predictive maintenance, and operational excellence for discrete and process industries.",
    image: "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=1200&q=80",
    metric: "+35% Productivity",
    gridClass: "col-span-12 lg:col-span-8 h-[400px]"
  },
  {
    name: "Energy",
    desc: "Grid modernization, renewable integration, energy management, and asset lifecycle optimization.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    metric: "99.99% Reliability",
    gridClass: "col-span-12 lg:col-span-4 lg:row-span-2 h-[400px] lg:h-[832px]"
  },
  {
    name: "Utilities",
    desc: "Secure telemetry, infrastructure monitoring, and resilient operations for water and utility networks.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
    metric: "AI Powered",
    gridClass: "col-span-12 md:col-span-6 lg:col-span-4 h-[400px]"
  },
  {
    name: "Oil & Gas",
    desc: "Connected operations across upstream, midstream, and downstream assets with real-time visibility.",
    image: "https://images.unsplash.com/photo-1542060748-10c28b629f6f?auto=format&fit=crop&w=1200&q=80",
    metric: "Zero Downtime",
    gridClass: "col-span-12 md:col-span-6 lg:col-span-4 h-[400px]"
  },
  {
    name: "Healthcare",
    desc: "AI medical diagnostics, clinical workflow automation, and secure predictive patient care platforms.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
    metric: "Real-time Intelligence",
    gridClass: "col-span-12 lg:col-span-8 h-[400px]"
  },
  {
    name: "Smart Cities",
    desc: "Centralized urban infrastructure monitoring, intelligent traffic flow systems, and connected municipal planning nodes.",
    image: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1200&q=80",
    metric: "Edge AI Ready",
    gridClass: "col-span-12 md:col-span-6 lg:col-span-4 h-[400px]"
  },
  {
    name: "Financial Services",
    desc: "Futuristic fintech systems, low-latency secure transaction ledgers, and automated compliance tracking models.",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=1200&q=80",
    metric: "Enterprise Grade",
    gridClass: "col-span-12 md:col-span-6 lg:col-span-6 h-[400px]"
  },
  {
    name: "Transportation",
    desc: "Autonomous logistics fleet coordination, supply chain tracking, and intelligent warehouse automation.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
    metric: "24/7 Monitoring",
    gridClass: "col-span-12 lg:col-span-6 h-[400px]"
  }
]

export default function Industries() {
  return (
    <section id="industries" className="py-32 bg-[#FAFBFC] border-b border-[rgba(0,0,0,0.06)] relative overflow-hidden">
      {/* Subtle dotted engineering grid background */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(0,0,0,0.03)_1.5px,transparent_1.5px)] bg-[size:32px_32px] pointer-events-none" />
      
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-7xl mb-20 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="max-w-4xl text-left">
            <span className="text-xs font-bold text-[#2563EB] uppercase tracking-[0.15em] mb-4 block">
              DOMAIN EXPERTISE
            </span>
            <h2 className="text-[40px] md:text-[64px] font-extrabold text-[#111827] tracking-tight leading-[1.08] font-headline">
              Tailored AI Systems for Global Industries
            </h2>
          </div>
          <div className="max-w-xl text-left lg:pb-2">
            <p className="text-[#5B6473] text-[16px] md:text-[18px] leading-relaxed font-sans">
              We engineer intelligent digital platforms that solve complex operational challenges across critical industries with enterprise-grade security, scalability, and automation.
            </p>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-12 gap-8">
          {INDUSTRIES_DATA.map((ind, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative overflow-hidden rounded-[22px] border border-[rgba(0,0,0,0.06)] bg-[#111827] shadow-[0_8px_30px_rgb(0,0,0,0.01)] ${ind.gridClass} cursor-pointer`}
              whileHover={{
                y: -8,
                scale: 1.04,
                boxShadow: "0 30px 60px -15px rgba(37,99,235,0.12)"
              }}
            >
              {/* Image Container for zoom and slow movement */}
              <div className="absolute inset-0 select-none overflow-hidden rounded-[22px]">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
                  style={{ backgroundImage: `url(${ind.image})` }}
                />
              </div>

              {/* Dark Premium Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D14] via-[#0A0D14]/45 to-transparent opacity-85 group-hover:opacity-65 transition-opacity duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]" />

              {/* Soft Glass Reflection highlighting */}
              <div className="absolute inset-0 rounded-[22px] border border-white/10 group-hover:border-white/20 transition-colors duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/10 opacity-30 pointer-events-none" />

              {/* Floating Glass Badge */}
              <div className="absolute top-6 left-6 z-20">
                <span className="backdrop-blur-md bg-white/5 border border-white/10 text-white/90 px-3.5 py-1.5 rounded-full text-[10px] md:text-[11px] font-semibold tracking-wider uppercase shadow-[0_4px_12px_rgba(0,0,0,0.15)]">
                  {ind.metric}
                </span>
              </div>

              {/* Content Panel (Bottom Aligned) */}
              <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end z-10">
                <div>
                  <h3 className="text-[24px] md:text-[32px] font-bold text-white tracking-tight leading-snug font-headline">
                    {ind.name}
                  </h3>
                  
                  {/* Two lines description */}
                  <p className="text-[14px] md:text-[18px] text-white/75 mt-2 line-clamp-2 leading-relaxed font-sans max-w-2xl">
                    {ind.desc}
                  </p>

                  {/* Explore Link with Slide-right Arrow */}
                  <div className="flex items-center gap-1.5 text-xs md:text-sm font-semibold text-white/80 group-hover:text-white mt-4 transition-colors">
                    <span>Explore</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
