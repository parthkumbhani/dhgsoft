"use client"

import React, { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { Section } from "@/components/ui/Section"
import { Container } from "@/components/ui/Container"
import { FAQ_ITEMS } from "@/lib/campusEarlyCareersData"

export default function FAQ() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0) // First expanded by default

  const toggleExpand = (index: number) => {
    if (expandedIndex === index) {
      setExpandedIndex(null)
    } else {
      setExpandedIndex(index)
    }
  }

  return (
    <Section variant="white" className="py-20 border-t border-line">
      <Container className="text-center">
        
        {/* Header */}
        <span className="text-label-bold text-brand uppercase tracking-[0.2em] block mb-3">
          COMMON QUESTIONS
        </span>
        <h2 className="text-text-strong font-headline tracking-tight mb-12">
          Frequently Asked Questions
        </h2>

        {/* Accordion Wrapper */}
        <div className="max-w-[820px] mx-auto text-left space-y-3">
          {FAQ_ITEMS.map((item, idx) => {
            const isExpanded = expandedIndex === idx
            
            return (
              <div
                key={idx}
                className="card bg-white border border-line rounded-2xl overflow-hidden shadow-sm transition-all duration-300"
              >
                {/* Header row (clickable) */}
                <div
                  onClick={() => toggleExpand(idx)}
                  className="flex items-center justify-between p-6 hover:bg-mist transition-colors duration-200 cursor-pointer select-none"
                >
                  <h3 className="text-text-strong font-headline font-bold pr-4">
                    {item.q}
                  </h3>
                  
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-all duration-200 ${
                      isExpanded
                        ? "bg-brand text-white"
                        : "bg-mist text-text-muted hover:bg-brand/10 hover:text-brand"
                    }`}
                  >
                    {isExpanded ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </div>
                </div>

                {/* Content Panel */}
                <div
                  style={{
                    maxHeight: isExpanded ? "250px" : "0px",
                    opacity: isExpanded ? 1 : 0,
                    overflow: "hidden",
                    transition: "max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease"
                  }}
                >
                  <div className="px-6 pb-6 text-body-sm text-text-muted leading-relaxed">
                    {item.a}
                  </div>
                </div>

              </div>
            )
          })}
        </div>

      </Container>
    </Section>
  )
}
