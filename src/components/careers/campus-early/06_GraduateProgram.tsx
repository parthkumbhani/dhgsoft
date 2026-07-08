"use client"

import React, { useState } from "react"
import { CheckCircle2 } from "lucide-react"
import { Section } from "@/components/ui/Section"
import { Container } from "@/components/ui/Container"
import { PROGRAM_TRACKS } from "@/lib/campusEarlyCareersData"

const PROGRAM_INCLUDES_ITEMS = [
  "Technical Bootcamp",
  "Engineering Mentorship",
  "Customer Projects",
  "Cross-functional Learning",
  "Leadership Development",
  "Performance Reviews"
]

export default function GraduateProgram() {
  const [activeTab, setActiveTab] = useState(PROGRAM_TRACKS[0].id)
  const currentContent = PROGRAM_TRACKS.find(t => t.id === activeTab) || PROGRAM_TRACKS[0]

  return (
    <Section variant="mist" className="py-20">
      <Container>
        
        {/* Header */}
        <div className="text-left mb-12 space-y-3">
          <span className="text-label-bold text-brand uppercase tracking-[0.2em] block">
            GRADUATE PROGRAMS
          </span>
          <h2 className="text-text-strong font-headline tracking-tight leading-none">
            Graduate Engineer Trainee (GET)
          </h2>
          <p className="text-body-md text-text-muted max-w-[720px] leading-relaxed pt-2">
            Our Graduate Engineer Trainee Program prepares fresh graduates for successful careers through structured learning, technical mentoring, and project-based experience.
          </p>
        </div>

        {/* 2-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Program Includes (col-span-4) */}
          <div className="lg:col-span-4">
            <div className="card bg-white border border-line rounded-2xl p-8 shadow-sm">
              <span className="text-label-bold text-brand uppercase tracking-[0.2em] block mb-6 font-mono">
                PROGRAM INCLUDES
              </span>
              <ul className="space-y-4">
                {PROGRAM_INCLUDES_ITEMS.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                    <span className="text-body-sm text-text-strong font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="h-px bg-line my-6" />
              
              <p className="text-body-sm text-text-muted leading-relaxed">
                Duration: 12–18 months structured program with quarterly performance reviews.
              </p>
            </div>
          </div>

          {/* Right Column: Dynamic Tabs (col-span-8) */}
          <div className="lg:col-span-8">
            
            {/* Tabs button row */}
            <div className="flex flex-wrap gap-2 mb-6">
              {PROGRAM_TRACKS.map((track) => {
                const isActive = track.id === activeTab
                return (
                  <button
                    key={track.id}
                    onClick={() => setActiveTab(track.id)}
                    className={`cursor-pointer px-5 py-2.5 text-xs font-bold uppercase tracking-wider font-mono rounded-full transition-all duration-200 border ${
                      isActive
                        ? "bg-brand text-white border-brand shadow-sm shadow-brand/10"
                        : "bg-white text-text-muted border-line hover:border-brand hover:text-brand"
                    }`}
                  >
                    {track.title}
                  </button>
                )
              })}
            </div>

            {/* Tab Detail Panel */}
            <div className="card bg-white border border-line rounded-2xl p-8 shadow-sm transition-all duration-300 text-left">
              <h3 className="heading-md text-text-strong font-headline mb-3">
                {currentContent.title}
              </h3>
              <p className="text-body-sm text-text-muted leading-relaxed mb-8">
                {currentContent.desc}
              </p>

              {/* Skills section */}
              <div className="border-t border-line pt-6">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono block mb-4">
                  CORE SKILLS & TECHNOLOGIES
                </span>
                <div className="flex flex-wrap gap-2.5">
                  {currentContent.chips.map((chip, idx) => (
                    <span
                      key={idx}
                      className="bg-mist border border-line text-text-strong text-xs font-semibold rounded-full px-5 py-2.5"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>

        </div>

      </Container>
    </Section>
  )
}
