"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { ChevronDown } from "lucide-react"

const AccordionContext = React.createContext<{
  value?: string
  onValueChange?: (val: string) => void
}>({})

interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  defaultValue?: string
  value?: string
  onValueChange?: (value: string) => void
  type?: "single" | "multiple"
  collapsible?: boolean
}

const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(
  ({ defaultValue, value, onValueChange, className, type, collapsible, ...props }, ref) => {
    const [activeValue, setActiveValue] = React.useState(value || defaultValue)

    React.useEffect(() => {
      if (value !== undefined) setActiveValue(value)
    }, [value])

    const handleValueChange = React.useCallback(
      (val: string) => {
        const newVal = activeValue === val ? "" : val
        setActiveValue(newVal)
        onValueChange?.(newVal)
      },
      [activeValue, onValueChange]
    )

    return (
      <AccordionContext.Provider value={{ value: activeValue, onValueChange: handleValueChange }}>
        <div ref={ref} className={cn("w-full", className)} {...props} />
      </AccordionContext.Provider>
    )
  }
)
Accordion.displayName = "Accordion"

const AccordionItemContext = React.createContext<{ value?: string }>({})

interface AccordionItemProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string
}

const AccordionItem = React.forwardRef<HTMLDivElement, AccordionItemProps>(
  ({ className, value, ...props }, ref) => (
    <AccordionItemContext.Provider value={{ value }}>
      <div ref={ref} className={cn("border-b border-border", className)} {...props} />
    </AccordionItemContext.Provider>
  )
)
AccordionItem.displayName = "AccordionItem"

interface AccordionTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const AccordionTrigger = React.forwardRef<HTMLButtonElement, AccordionTriggerProps>(
  ({ className, children, ...props }, ref) => {
    const { value: activeValue, onValueChange } = React.useContext(AccordionContext)
    const { value } = React.useContext(AccordionItemContext)
    const isOpen = activeValue === value

    return (
      <div className="flex">
        <button
          ref={ref}
          type="button"
          aria-expanded={isOpen}
          className={cn(
            "flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline text-left",
            className
          )}
          onClick={() => value && onValueChange?.(value)}
          {...props}
        >
          {children}
          <ChevronDown
            className={cn(
              "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200",
              isOpen && "rotate-180"
            )}
          />
        </button>
      </div>
    )
  }
)
AccordionTrigger.displayName = "AccordionTrigger"

interface AccordionContentProps extends React.HTMLAttributes<HTMLDivElement> {}

const AccordionContent = React.forwardRef<HTMLDivElement, AccordionContentProps>(
  ({ className, children, ...props }, ref) => {
    const { value: activeValue } = React.useContext(AccordionContext)
    const { value } = React.useContext(AccordionItemContext)
    const isOpen = activeValue === value

    if (!isOpen) return null

    return (
      <div
        ref={ref}
        className={cn(
          "overflow-hidden text-sm transition-all animate-fade-in",
          className
        )}
        {...props}
      >
        <div className="pb-4 pt-0">{children}</div>
      </div>
    )
  }
)
AccordionContent.displayName = "AccordionContent"

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
