"use client"

import React from "react"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

const SERVICES_DATA = [
  {
    title: "Industrial Digital Transformation",
    category: "Smart Manufacturing",
    desc: "Modernize factories with AI-powered automation, predictive maintenance, digital twins, and intelligent manufacturing systems.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80",
    gridClass: "col-span-12 lg:col-span-8",
    layoutType: "horizontal"
  },
  {
    title: "OT / IT Integration",
    category: "Automation",
    desc: "Connect operational technology with enterprise platforms for real-time visibility, secure communication, and seamless industrial operations.",
    image: "https://images.unsplash.com/photo-1590274853856-f22d5ee3d228?auto=format&fit=crop&w=1200&q=80",
    gridClass: "col-span-12 lg:col-span-4",
    layoutType: "vertical"
  },
  {
    title: "Industrial Data Platforms",
    category: "Data Platforms",
    desc: "Build centralized data ecosystems that transform industrial telemetry into actionable business intelligence.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    gridClass: "col-span-12 lg:col-span-8",
    layoutType: "horizontal"
  },
  {
    title: "Artificial Intelligence & Analytics",
    category: "AI Systems",
    desc: "Deploy enterprise AI models that optimize production, forecasting, anomaly detection, and decision intelligence.",
    image: "https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&w=1200&q=80",
    gridClass: "col-span-12 lg:col-span-4",
    layoutType: "vertical"
  },
  {
    title: "Industrial IoT",
    category: "Industrial IoT",
    desc: "Connect machines, sensors, and edge devices into one secure intelligent ecosystem.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    gridClass: "col-span-12 lg:col-span-4",
    layoutType: "vertical"
  },
  {
    title: "Cloud Infrastructure",
    category: "Enterprise Cloud",
    desc: "Scalable cloud-native platforms built for mission-critical industrial workloads.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    gridClass: "col-span-12 lg:col-span-8",
    layoutType: "horizontal"
  },
  {
    title: "Cybersecurity",
    category: "Cyber Defense",
    desc: "Zero Trust architectures protecting industrial assets, networks, cloud, and enterprise operations.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80",
    gridClass: "col-span-12 lg:col-span-6",
    layoutType: "horizontal"
  },
  {
    title: "Managed Services",
    category: "Digital Operations",
    desc: "Continuous monitoring, optimization, governance, and enterprise operational excellence.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    gridClass: "col-span-12 lg:col-span-6",
    layoutType: "horizontal"
  }
]

export default function Services() {
  return (
    <section id="services" className="py-[120px] bg-[#F8FAFC] border-y border-[rgba(0,0,0,0.06)] relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Editorial Section Header */}
        <div className="max-w-7xl mb-24 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="max-w-4xl text-left">
            <span className="text-xs font-bold text-[#1E40AF] uppercase tracking-[0.15em] mb-4 block">
              DOMAIN ARCHITECTURE & CAPABILITIES
            </span>
            <h2 className="text-[40px] md:text-[64px] font-extrabold text-[#0F172A] tracking-tight leading-[1.08] font-headline">
              Comprehensive Digital Engineering &<br className="hidden md:inline" /> Operational Solutions
            </h2>
          </div>
          <div className="max-w-xl text-left lg:pb-2">
            <p className="text-[#475569] text-[16px] md:text-[18px] leading-relaxed font-sans">
              From industrial automation to enterprise intelligence, we engineer scalable digital platforms that connect data, AI, cloud, and operations into one intelligent ecosystem.
            </p>
          </div>
        </div>

        {/* Editorial Masonry Bento Grid */}
        <div className="grid grid-cols-12 gap-8">
          {SERVICES_DATA.map((srv, idx) => {
            const isHorizontal = srv.layoutType === "horizontal"

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className={`group relative overflow-hidden rounded-[22px] bg-white shadow-[0_20px_50px_rgba(15,23,42,0.04)] hover:shadow-[0_30px_60px_-15px_rgba(15,23,42,0.12)] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${srv.gridClass} cursor-pointer flex flex-col ${
                  isHorizontal ? "lg:flex-row lg:h-[420px]" : "lg:h-[420px]"
                } h-auto`}
                whileHover={{ y: -8 }}
              >
                {/* Image Section (~45% of card) */}
                <div
                  className={`relative overflow-hidden select-none ${
                    isHorizontal 
                      ? "w-full lg:w-[45%] h-[240px] lg:h-full rounded-t-[22px] lg:rounded-tr-none lg:rounded-l-[22px]" 
                      : "w-full h-[200px] lg:h-[45%] rounded-t-[22px]"
                  }`}
                >
                  <motion.div
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${srv.image})` }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  />
                  {/* Category Pill over image on mobile, or in text block on desktop */}
                  <div className="absolute top-4 left-4 z-20 block lg:hidden">
                    <span className="backdrop-blur-md bg-[#0F172A]/70 text-white border border-white/10 px-3 py-1 rounded-full text-[10px] font-semibold tracking-wider uppercase">
                      {srv.category}
                    </span>
                  </div>
                </div>

                {/* Text Content Section (~55% of card) */}
                <div
                  className={`flex flex-col justify-between p-[36px] flex-grow ${
                    isHorizontal ? "w-full lg:w-[55%]" : "w-full lg:h-[55%]"
                  }`}
                >
                  <div>
                    {/* Category Pill for Desktop */}
                    <span className="hidden lg:block text-[11px] font-bold text-[#1E40AF] tracking-[0.15em] uppercase mb-4">
                      {srv.category}
                    </span>

                    {/* Title */}
                    <h3 className="text-[24px] md:text-[34px] font-bold text-[#0F172A] tracking-tight leading-tight mb-3 group-hover:text-[#1E40AF] transition-colors duration-500 font-headline">
                      {srv.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[15px] md:text-[18px] text-[#475569] leading-relaxed font-sans line-clamp-3">
                      {srv.desc}
                    </p>
                  </div>

                  {/* Read More Action */}
                  <div className="text-[14px] md:text-[16px] font-semibold text-[#1E40AF] mt-6 flex items-center gap-1.5 transition-colors">
                    <span>Read More</span>
                    <ArrowRight className="h-4.5 w-4.5 transition-transform duration-300 group-hover:translate-x-1.5" />
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
