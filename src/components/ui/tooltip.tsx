"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

const TooltipProvider = ({ children }: { children: React.ReactNode }) => <>{children}</>

interface TooltipProps {
  children: React.ReactNode
  delayDuration?: number
}

const Tooltip = ({ children, delayDuration = 100 }: TooltipProps) => {
  const [open, setOpen] = React.useState(false)
  const timerRef = React.useRef<NodeJS.Timeout | null>(null)

  const handleMouseEnter = () => {
    timerRef.current = setTimeout(() => {
      setOpen(true)
    }, delayDuration)
  }

  const handleMouseLeave = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current)
    }
    setOpen(false)
  }

  return (
    <div
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          // Pass open prop to subcomponents
          return React.cloneElement(child as React.ReactElement<any>, { open })
        }
        return child
      })}
    </div>
  )
}

interface TooltipTriggerProps extends React.HTMLAttributes<HTMLDivElement> {
  open?: boolean
}

const TooltipTrigger = React.forwardRef<HTMLDivElement, TooltipTriggerProps>(
  ({ className, open, ...props }, ref) => (
    <div ref={ref} className={cn("inline-block cursor-help", className)} {...props} />
  )
)
TooltipTrigger.displayName = "TooltipTrigger"

interface TooltipContentProps extends React.HTMLAttributes<HTMLDivElement> {
  open?: boolean
  side?: "top" | "bottom" | "left" | "right"
}

const TooltipContent = React.forwardRef<HTMLDivElement, TooltipContentProps>(
  ({ className, open, side = "top", ...props }, ref) => {
    if (!open) return null

    const sideClasses = {
      top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
      bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
      left: "right-full top-1/2 -translate-y-1/2 mr-2",
      right: "left-full top-1/2 -translate-y-1/2 ml-2",
    }[side]

    return (
      <div
        ref={ref}
        role="tooltip"
        className={cn(
          "absolute z-50 overflow-hidden rounded-md bg-secondary px-3 py-1.5 text-xs text-secondary-foreground shadow-md animate-fade-in whitespace-nowrap",
          sideClasses,
          className
        )}
        {...props}
      />
    )
  }
)
TooltipContent.displayName = "TooltipContent"

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider }
