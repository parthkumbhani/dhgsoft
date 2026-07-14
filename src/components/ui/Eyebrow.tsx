import React from "react"
import { cn } from "@/lib/utils"

interface EyebrowProps {
  children: React.ReactNode
  className?: string
}

export default function Eyebrow({ children, className }: EyebrowProps) {
  return (
    <span className={cn("section-eyebrow", className)}>
      {children}
    </span>
  )
}
