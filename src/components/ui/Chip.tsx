import React from "react"
import { cn } from "@/lib/utils"

interface ChipProps extends React.HTMLAttributes<HTMLButtonElement | HTMLSpanElement> {
  active?: boolean
  as?: "button" | "span"
  children: React.ReactNode
}

export default function Chip({ active, as = "span", children, className, ...props }: ChipProps) {
  const baseStyle = "inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-xs font-extrabold uppercase tracking-wider transition-all duration-200 border cursor-pointer select-none active:scale-95"
  const activeStyle = active 
    ? "bg-brand text-white border-brand" 
    : "bg-mist text-txt-strong border-line hover:border-brand/45"
  
  if (as === "button") {
    return (
      <button className={cn(baseStyle, activeStyle, className)} {...(props as any)}>
        {children}
      </button>
    )
  }
  return (
    <span className={cn(baseStyle, activeStyle, className)} {...props}>
      {children}
    </span>
  )
}
