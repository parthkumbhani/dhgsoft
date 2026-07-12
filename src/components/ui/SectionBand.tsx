import React from "react"
import { cn } from "@/lib/utils"

interface SectionBandProps extends React.HTMLAttributes<HTMLElement> {
  variant: "white" | "mist" | "ink" | "brandTint" | "gradient"
  children: React.ReactNode
}

export default function SectionBand({ variant, children, className, ...props }: SectionBandProps) {
  const bgStyles = {
    white: "bg-white text-txt-strong",
    mist: "bg-mist text-txt-strong bg-dot-matrix",
    ink: "bg-ink text-white bg-tech-grid relative overflow-hidden",
    brandTint: "bg-brand-tint text-txt-strong bg-tech-grid",
    gradient: "bg-gradient-to-r from-brand-hot via-brand to-brand-deep text-white relative overflow-hidden",
  }

  return (
    <section className={cn("py-16 md:py-24 border-b border-line relative", bgStyles[variant], className)} {...props}>
      {children}
    </section>
  )
}
