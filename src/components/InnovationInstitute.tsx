"use client"

import React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { 
  Cpu, 
  Network, 
  Cloud, 
  Settings, 
  ArrowRight, 
  Users, 
  Lightbulb, 
  Rocket, 
  TrendingUp, 
  Compass 
} from "lucide-react"

const INNOVATION_CARDS = [
  {
    title: "Artificial Intelligence",
    desc: "Intelligent algorithms and machine learning models that drive smarter decisions.",
    icon: Cpu,
    colorClass: "border-l-indigo-600",
    iconBg: "bg-indigo-50 text-indigo-600",
    arrowColor: "text-indigo-600"
  },
  {
    title: "Industrial IoT",
    desc: "Connecting machines, systems, and people to unlock real-time insights and efficiency.",
    icon: Network,
    colorClass: "border-l-emerald-500",
    iconBg: "bg-emerald-50 text-emerald-500",
    arrowColor: "text-emerald-500"
  },
  {
    title: "Cloud & Data Platforms",
    desc: "Scalable cloud solutions and modern data platforms that power growth and innovation.",
    icon: Cloud,
    colorClass: "border-l-blue-500",
    iconBg: "bg-blue-50 text-blue-500",
    arrowColor: "text-blue-500"
  },
  {
    title: "Digital Engineering",
    desc: "End-to-end engineering solutions that transform ideas into high-performing systems.",
    icon: Settings,
    colorClass: "border-l-orange-500",
    iconBg: "bg-orange-50 text-orange-500",
    arrowColor: "text-orange-500"
  }
]

const STATS_DATA = [
  {
    value: "50+",
    label: "Innovation Experts",
    icon: Users,
    iconBg: "bg-blue-50 text-blue-600"
  },
  {
    value: "100+",
    label: "Research Projects",
    icon: Lightbulb,
    iconBg: "bg-emerald-50 text-emerald-600"
  },
  {
    value: "25+",
    label: "Patents & IPs",
    icon: Rocket,
    iconBg: "bg-purple-50 text-purple-600"
  },
  {
    value: "30+",
    label: "Industrial Deployments",
    icon: TrendingUp,
    iconBg: "bg-orange-50 text-orange-600"
  }
]

export default function InnovationInstitute() {
  return (
    <section id="innovation-institute" className="py-10 lg:py-12 bg-white text-slate-900 relative overflow-hidden">
      {/* Top right ambient background blur and dot pattern */}
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-gradient-to-br from-blue-300/20 to-purple-300/20 blur-3xl pointer-events-none" />
      
      {/* 3x6 Dot Grid Pattern */}
      <div className="absolute top-12 right-[8%] hidden lg:grid grid-cols-3 gap-3.5 opacity-30 pointer-events-none">
        {[...Array(18)].map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 rounded-full bg-blue-500" />
        ))}
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-left mb-12 lg:mb-16">
          <div className="flex items-center gap-3 text-[11px] font-bold text-blue-600 uppercase tracking-[0.2em] font-sans">
            <span>DHG Innovation Institute</span>
            <div className="h-[1px] w-12 bg-blue-200" />
          </div>
          <h2 className="text-3xl lg:text-[42px] font-extrabold text-slate-950 leading-[1.15] tracking-tight mt-3 mb-4 font-headline">
            Engineering Innovation.<br />Powering the <span className="text-blue-600">Future.</span>
          </h2>
          <p className="text-slate-600 text-sm max-w-[560px] leading-relaxed font-sans font-medium">
            At DHG Innovation Institute, we research, build, and deploy next-generation 
            technologies that solve real industrial challenges and create measurable impact.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column - Image Card with custom sloped SVG clipping mask and stroke */}
          <div className="lg:col-span-7 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-full overflow-visible"
            >
              {/* Responsive Sloped SVG Card */}
              <svg 
                viewBox="0 0 700 500" 
                className="w-full h-auto overflow-visible select-none drop-shadow-[0_10px_30px_rgba(148,163,184,0.12)]"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <clipPath id="institute-img-clip">
                    <path d="M 32,0 L 668,0 A 32,32 0 0 1 700,32 L 700,300 Q 700,325 680,340 L 540,480 Q 520,500 490,500 L 32,500 A 32,32 0 0 1 0,468 L 0,32 A 32,32 0 0 1 32,0 Z" />
                  </clipPath>
                </defs>
                
                {/* Fallback Background block for clean rendering */}
                <path d="M 32,0 L 668,0 A 32,32 0 0 1 700,32 L 700,300 Q 700,325 680,340 L 540,480 Q 520,500 490,500 L 32,500 A 32,32 0 0 1 0,468 L 0,32 A 32,32 0 0 1 32,0 Z" fill="#F8FAFC" />
                
                {/* Image clipped to the sloped path */}
                <image
                  href="/smart_factory_visual.png"
                  width="700"
                  height="500"
                  clipPath="url(#institute-img-clip)"
                  preserveAspectRatio="xMidYMid slice"
                />

                {/* Accent blue outline that runs along the bottom-right slope */}
                <path 
                  d="M 710,240 L 710,300 Q 710,325 690,345 L 545,490 Q 525,510 495,510 L 315,510" 
                  fill="none" 
                  stroke="#3b82f6" 
                  strokeWidth="2.5" 
                  strokeLinecap="round"
                  className="opacity-75"
                />
              </svg>

              {/* Bottom-left overlay badge */}
              <div className="absolute bottom-6 left-6 right-6 md:right-auto bg-[#080E1E] text-white p-5 rounded-2xl shadow-2xl flex items-center gap-4 border border-blue-950/20 max-w-full md:max-w-[340px] z-20">
                <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
                  <Compass className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <h5 className="text-sm font-bold tracking-wide">Research. Engineer. Deploy.</h5>
                  <p className="text-[11px] text-slate-400 mt-0.5 font-medium">Solutions built for the real world.</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Stacked List Cards */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {INNOVATION_CARDS.map((card, idx) => {
              const Icon = card.icon
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`flex items-center justify-between p-5 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 border-l-[4px] ${card.colorClass} group cursor-pointer`}
                >
                  <div className="flex items-center">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${card.iconBg}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex-grow pl-4 text-left">
                      <h4 className="text-slate-950 font-bold text-sm tracking-tight">{card.title}</h4>
                      <p className="text-slate-500 text-[11px] leading-relaxed mt-0.5 font-medium">{card.desc}</p>
                    </div>
                  </div>
                  <div className={`shrink-0 pl-2 transition-transform duration-300 group-hover:translate-x-1 ${card.arrowColor}`}>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </motion.div>
              )
            })}

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-2 text-left"
            >
              <Link href="/innovation-institute" className="inline-block">
                <Button className="rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold text-xs px-6 py-4 h-auto shadow-md shadow-blue-500/10 transition-all duration-300 flex items-center gap-2 border-0 cursor-pointer">
                  Explore Our Innovation
                  <ArrowRight className="w-3.5 h-3.5" />
                </Button>
              </Link>
            </motion.div>
          </div>

        </div>

        {/* Bottom Statistics Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 lg:mt-24 bg-white border border-slate-100 rounded-3xl p-6 lg:p-8 shadow-lg shadow-slate-100/50"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-4 lg:gap-0 lg:divide-x lg:divide-slate-150">
            {STATS_DATA.map((stat, idx) => {
              const StatIcon = stat.icon
              return (
                <div key={idx} className="flex items-center gap-4 pl-0 lg:pl-8 first:pl-0">
                  <div className={`w-11 h-11 rounded-full flex items-center justify-center shrink-0 ${stat.iconBg}`}>
                    <StatIcon className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <div className="text-2xl lg:text-3xl font-extrabold text-slate-950 tracking-tight leading-none">
                      {stat.value}
                    </div>
                    <div className="text-[11px] font-semibold text-slate-500 mt-1 uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </motion.div>

      </div>
    </section>
  )
}
