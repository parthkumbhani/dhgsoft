import React from "react"
import { cn } from "@/lib/utils"

interface EyebrowProps {
  children: React.ReactNode
  className?: string
}

export default function Eyebrow({ children, className }: EyebrowProps) {
  return (
    <span className={cn("text-xs font-extrabold uppercase tracking-[0.25em] text-brand font-mono block", className)}>
      {children}
    </span>
  )
}
