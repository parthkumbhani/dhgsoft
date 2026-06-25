"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, ArrowRight, ChevronDown, Check, Globe, Shield, Terminal, Settings2, Cpu, Factory, Database, Network, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

const SERVICES_MENU = [
  {
    title: "Digital Transformation",
    icon: Factory,
    items: [
      { name: "Industrial Digital Transformation", desc: "Enterprise-wide OT/IT modernization." },
      { name: "OT / IT Integration", desc: "Bridge shop-floor and top-floor systems." },
      { name: "Industrial Data Platforms", desc: "Unified analytics pipeline for industrial IoT." }
    ]
  },
  {
    title: "AI & Intelligence",
    icon: Cpu,
    items: [
      { name: "Artificial Intelligence & Analytics", desc: "Predictive maintenance & yield optimization." },
      { name: "Industrial Internet of Things (IIoT)", desc: "Edge computing and device telemetry." }
    ]
  },
  {
    title: "Digital Engineering",
    icon: Settings2,
    items: [
      { name: "Digital Engineering Services", desc: "Custom industrial software & integrations." },
      { name: "Enterprise Applications", desc: "Next-gen ERP, MES, and PLM implementation." }
    ]
  },
  {
    title: "Cloud & Infrastructure",
    icon: Database,
    items: [
      { name: "Cloud & Infrastructure", desc: "Hybrid cloud solutions for critical ops." },
      { name: "Cybersecurity", desc: "Zero-trust OT cybersecurity defense systems." },
      { name: "Managed Services", desc: "24/7/365 global operations management." }
    ]
  }
]

const INDUSTRIES = [
  { name: "Industrial Manufacturing", desc: "Smart factory operations & automation." },
  { name: "Life Sciences", desc: "Regulatory compliance & batch analytics." },
  { name: "Automotive", desc: "OEM assembly line optimization." },
  { name: "Semiconductor", desc: "Yield optimization & cleanroom systems." },
  { name: "Food & Beverages", desc: "Traceability & recipe management." },
  { name: "Chemical Manufacturing", desc: "Process safety & telemetry integration." },
  { name: "Oil & Gas", desc: "Pipeline monitoring & asset security." },
  { name: "Power & Utilities", desc: "Smart grid management & telemetry." },
  { name: "Mining & Metals", desc: "Fleet automation & supply logistics." },
  { name: "Water & Wastewater Management", desc: "Flow analytics & treatment automation." },
  { name: "Consumer Packaged Goods (CPG)", desc: "High-speed packaging line efficiency." },
  { name: "Data Centres", desc: "Power, cooling & infrastructure control." },
  { name: "Engineering, Procurement & Construction (EPC)", desc: "Digital twins & project execution." },
  { name: "Agriculture", desc: "Precision farming & resource management." }
]

const ABOUT_MENU = [
  { name: "Overview", desc: "Our history, engineering focus, and corporate stats." },
  { name: "Vision, Mission & Values", desc: "OT/IT bridge philosophy and core values." },
  { name: "Leadership Team", desc: "Meet our systems architects and executives." },
  { name: "Customer Centricity", desc: "Zero-downtime integration & client SLAs." },
  { name: "Partners Ecosystem", desc: "Collaborating with global solutions vendors." },
  { name: "Technology Partners", desc: "Cloud, hardware, and SCADA alliances." },
  { name: "Sustainability & ESG", desc: "Clean operations and green computing." },
  { name: "Ethics & Compliance", desc: "Zero-trust standards & regulatory compliance." },
  { name: "Recognition", desc: "Industry awards and engineering certs." },
  { name: "Locations", desc: "Global offices, command centers, and hubs." }
]

const CAREERS_MENU = [
  { name: "Life at DHGsoft", desc: "Discover our culture, benefits, and engineering mindset." },
  { name: "Current Openings", desc: "Explore active engineering, architecture, and consulting roles." },
  { name: "Internship Program", desc: "Start your journey with real-world OT/IT projects." },
  { name: "Campus Connect", desc: "Opportunities for recent graduates & university partners." },
  { name: "Learning & Development", desc: "Continuous training, certifications, and leadership growth." }
]

interface HeaderProps {
  onContactClick: () => void
}

export default function Header({ onContactClick }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeValue, setActiveValue] = useState("")
  const [viewportShift, setViewportShift] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Viewport safety boundary-check adjustment
  useEffect(() => {
    const adjustViewport = () => {
      const viewport = document.querySelector('[data-slot="navigation-menu-viewport"]') as HTMLElement
      const trigger = document.querySelector('[data-slot="navigation-menu-trigger"][data-state="open"]') as HTMLElement
      
      if (!viewport || !trigger || !activeValue) {
        setViewportShift(0)
        return
      }

      const VIEWPORT_WIDTHS: Record<string, number> = {
        capabilities: 950,
        industries: 950,
        insights: 600,
        about: 750,
        careers: 650,
      }

      const viewportWidth = VIEWPORT_WIDTHS[activeValue] || 400
      const triggerRect = trigger.getBoundingClientRect()
      const triggerCenter = triggerRect.left + triggerRect.width / 2
      
      const expectedLeftOnScreen = triggerCenter - viewportWidth / 2
      const expectedRightOnScreen = triggerCenter + viewportWidth / 2
      const screenWidth = window.innerWidth
      
      let shift = 0
      if (expectedLeftOnScreen < 16) {
        shift = 16 - expectedLeftOnScreen
      } else if (expectedRightOnScreen > screenWidth - 16) {
        shift = (screenWidth - 16) - expectedRightOnScreen
      }

      const offsetParent = viewport.offsetParent as HTMLElement || document.body
      const parentRect = offsetParent.getBoundingClientRect()
      
      const finalTranslateX = (expectedLeftOnScreen + shift) - parentRect.left
      
      viewport.style.transform = `translateX(${finalTranslateX}px)`
      setViewportShift(shift)
    }

    // Run on animation frame to let Radix render the active state first
    let rId = requestAnimationFrame(adjustViewport)
    
    window.addEventListener("resize", adjustViewport)
    window.addEventListener("scroll", adjustViewport)

    const timer = setTimeout(() => {
      adjustViewport()
    }, 100)

    return () => {
      cancelAnimationFrame(rId)
      window.removeEventListener("resize", adjustViewport)
      window.removeEventListener("scroll", adjustViewport)
      clearTimeout(timer)
    }
  }, [activeValue])

  const arrowStyle = { left: `calc(50% - ${viewportShift}px)` }

  return (
    <header
      className={`fixed z-50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        scrolled
          ? "top-4 left-1/2 -translate-x-1/2 w-[92%] md:w-[82%] lg:w-[72%] max-w-6xl h-14 bg-white/90 border border-slate-200/40 shadow-[0_12px_40px_rgba(15,23,42,0.12)] rounded-full backdrop-blur-md"
          : "top-0 left-0 w-full h-20 bg-white border-b border-slate-200/50"
      }`}
    >
      <div
        className={`w-full h-full flex items-center justify-between transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          scrolled ? "px-6 md:px-8" : "px-6 lg:px-16"
        }`}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/DHG soft logo.png"
            alt="DHG Soft"
            width={scrolled ? 115 : 135}
            height={scrolled ? 37 : 43}
            className="object-contain transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          <NavigationMenu onValueChange={setActiveValue} className="!static">
            <NavigationMenuList className="gap-2">
              
              {/* Capabilities Mega Menu */}
              <NavigationMenuItem value="capabilities" className="relative">
                <NavigationMenuTrigger className="relative text-sm font-semibold text-slate-700 hover:text-primary focus:text-primary data-[state=open]:text-primary px-4 py-2 transition-colors after:absolute after:bottom-0 after:left-4 after:right-4 after:h-[2px] after:bg-gradient-to-r after:from-primary after:via-secondary after:to-tertiary after:transform after:scale-x-0 hover:after:scale-x-100 data-[state=open]:after:scale-x-100 data-[active]:after:scale-x-100 after:transition-transform after:duration-300">
                  Capabilities
                </NavigationMenuTrigger>
                <NavigationMenuContent className="p-6 !w-[950px] max-h-[520px] overflow-y-auto z-50">
                  {/* Dynamic Pointer Arrow */}
                  <div style={arrowStyle} className="absolute -top-[6px] w-3 h-3 bg-white border-t border-l border-slate-200 rotate-45 z-50 transition-all duration-300" />
                  
                  <div className="grid grid-cols-4 gap-6 relative z-10">
                    {SERVICES_MENU.map((col, idx) => {
                      const Icon = col.icon
                      return (
                        <div key={idx} className="flex flex-col gap-4 border-r last:border-0 border-slate-100 pr-4 last:pr-0">
                          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary">
                            <div className="flex items-center justify-center h-8 w-8 rounded-lg bg-gradient-to-br from-primary/10 to-tertiary/5 text-primary">
                              <Icon className="h-4 w-4" />
                            </div>
                            {col.title}
                          </div>
                          <ul className="flex flex-col gap-2">
                            {col.items.map((item, i) => (
                              <li key={i}>
                                <NavigationMenuLink asChild>
                                  <Link
                                    href="#services"
                                    className="group block select-none rounded-md p-2 leading-none no-underline outline-none transition-all hover:bg-primary/5"
                                  >
                                    <div className="text-sm font-semibold text-slate-800 group-hover:text-primary transition-colors">
                                      {item.name}
                                    </div>
                                    <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                                      {item.desc}
                                    </p>
                                  </Link>
                                </NavigationMenuLink>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )
                    })}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Industries Mega Menu */}
              <NavigationMenuItem value="industries" className="relative">
                <NavigationMenuTrigger className="relative text-sm font-semibold text-slate-700 hover:text-primary focus:text-primary data-[state=open]:text-primary px-4 py-2 transition-colors after:absolute after:bottom-0 after:left-4 after:right-4 after:h-[2px] after:bg-gradient-to-r after:from-primary after:via-secondary after:to-tertiary after:transform after:scale-x-0 hover:after:scale-x-100 data-[state=open]:after:scale-x-100 data-[active]:after:scale-x-100 after:transition-transform after:duration-300">
                  Industries
                </NavigationMenuTrigger>
                <NavigationMenuContent className="p-6 !w-[950px] z-50">
                  {/* Dynamic Pointer Arrow */}
                  <div style={arrowStyle} className="absolute -top-[6px] w-3 h-3 bg-white border-t border-l border-slate-200 rotate-45 z-50 transition-all duration-300" />
                  
                  <div className="grid grid-cols-4 gap-6 relative z-10">
                    <div className="col-span-1 bg-gradient-to-b from-slate-900 to-slate-950 rounded-md p-6 text-white flex flex-col justify-between border-l-4 border-primary">
                      <div>
                        <h4 className="text-lg font-bold text-white tracking-tight">Industrial Verticals</h4>
                        <p className="text-xs text-slate-400 mt-3 leading-relaxed">
                          Delivering custom software architectures, OT/IT bridges, and secure platforms for critical global sectors.
                        </p>
                      </div>
                      <Link href="#industries" className="text-xs font-bold text-primary hover:text-secondary flex items-center gap-1.5 group transition-colors">
                        Explore Industries
                        <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                    <div className="col-span-3 grid grid-cols-3 gap-4">
                      {INDUSTRIES.map((ind, i) => (
                        <NavigationMenuLink asChild key={i}>
                          <Link
                            href="#industries"
                            className="group block select-none rounded-md p-2 leading-none no-underline outline-none transition-all hover:bg-primary/5"
                          >
                            <div className="text-sm font-semibold text-slate-800 group-hover:text-primary transition-colors">
                              {ind.name}
                            </div>
                            <p className="text-xs text-slate-500 mt-1 line-clamp-1">
                              {ind.desc}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Insights Mega Menu */}
              <NavigationMenuItem value="insights" className="relative">
                <NavigationMenuTrigger className="relative text-sm font-semibold text-slate-700 hover:text-primary focus:text-primary data-[state=open]:text-primary px-4 py-2 transition-colors after:absolute after:bottom-0 after:left-4 after:right-4 after:h-[2px] after:bg-gradient-to-r after:from-primary after:via-secondary after:to-tertiary after:transform after:scale-x-0 hover:after:scale-x-100 data-[state=open]:after:scale-x-100 data-[active]:after:scale-x-100 after:transition-transform after:duration-300">
                  Insights
                </NavigationMenuTrigger>
                <NavigationMenuContent className="p-6 !w-[600px] z-50">
                  {/* Dynamic Pointer Arrow */}
                  <div style={arrowStyle} className="absolute -top-[6px] w-3 h-3 bg-white border-t border-l border-slate-200 rotate-45 z-50 transition-all duration-300" />
                  
                  <div className="grid grid-cols-2 gap-6 relative z-10">
                    <div className="flex flex-col gap-2">
                      <div className="text-xs font-bold uppercase tracking-wider text-primary mb-1">Knowledge Hub</div>
                      <Link href="#ai-transformation" className="text-sm font-semibold text-slate-800 hover:text-primary py-1 block transition-colors">
                        AI & Automation
                      </Link>
                      <Link href="#ecosystem" className="text-sm font-semibold text-slate-800 hover:text-primary py-1 block transition-colors">
                        Technology Ecosystem
                      </Link>
                      <Link href="#case-studies" className="text-sm font-semibold text-slate-800 hover:text-primary py-1 block transition-colors">
                        Enterprise Case Studies
                      </Link>
                    </div>
                    <div className="border-l border-slate-100 pl-6 flex flex-col justify-between">
                      <div className="text-xs text-slate-500 leading-relaxed">
                        Read how Fortune 500 manufacturing, energy, and automotive companies optimize production infrastructure and deploy secure cloud edge architectures.
                      </div>
                      <Link href="#case-studies" className="text-xs font-bold text-primary hover:text-secondary flex items-center gap-1.5 group mt-4 transition-colors">
                        Read Case Studies
                        <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* About Mega Menu */}
              <NavigationMenuItem value="about" className="relative">
                <NavigationMenuTrigger className="relative text-sm font-semibold text-slate-700 hover:text-primary focus:text-primary data-[state=open]:text-primary px-4 py-2 transition-colors after:absolute after:bottom-0 after:left-4 after:right-4 after:h-[2px] after:bg-gradient-to-r after:from-primary after:via-secondary after:to-tertiary after:transform after:scale-x-0 hover:after:scale-x-100 data-[state=open]:after:scale-x-100 data-[active]:after:scale-x-100 after:transition-transform after:duration-300">
                  About
                </NavigationMenuTrigger>
                <NavigationMenuContent className="p-6 !w-[750px] z-50">
                  {/* Dynamic Pointer Arrow */}
                  <div style={arrowStyle} className="absolute -top-[6px] w-3 h-3 bg-white border-t border-l border-slate-200 rotate-45 z-50 transition-all duration-300" />
                  
                  <div className="grid grid-cols-3 gap-6 relative z-10">
                    <div className="col-span-1 bg-gradient-to-b from-slate-900 to-slate-950 rounded-md p-6 text-white flex flex-col justify-between border-l-4 border-primary">
                      <div>
                        <h4 className="text-lg font-bold text-white tracking-tight">About Us</h4>
                        <p className="text-xs text-slate-400 mt-3 leading-relaxed">
                          Building premium digital engineering solutions and driving AI transformation for global enterprises since 2012.
                        </p>
                      </div>
                      <Link href="#why-us" className="text-xs font-bold text-primary hover:text-secondary flex items-center gap-1.5 group transition-colors">
                        Discover Our Story
                        <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                    <div className="col-span-2 grid grid-cols-2 gap-4">
                      {ABOUT_MENU.map((item, i) => (
                        <NavigationMenuLink asChild key={i}>
                          <Link
                            href="#why-us"
                            className="group block select-none rounded-md p-2 leading-none no-underline outline-none transition-all hover:bg-primary/5"
                          >
                            <div className="text-sm font-semibold text-slate-800 group-hover:text-primary transition-colors">
                              {item.name}
                            </div>
                            <p className="text-xs text-slate-500 mt-1 line-clamp-1">
                              {item.desc}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Careers Dropdown */}
              <NavigationMenuItem value="careers" className="relative">
                <NavigationMenuTrigger className="relative text-sm font-semibold text-slate-700 hover:text-primary focus:text-primary data-[state=open]:text-primary px-4 py-2 transition-colors after:absolute after:bottom-0 after:left-4 after:right-4 after:h-[2px] after:bg-gradient-to-r after:from-primary after:via-secondary after:to-tertiary after:transform after:scale-x-0 hover:after:scale-x-100 data-[state=open]:after:scale-x-100 data-[active]:after:scale-x-100 after:transition-transform after:duration-300">
                  Careers
                </NavigationMenuTrigger>
                <NavigationMenuContent className="p-6 !w-[650px] z-50">
                  {/* Dynamic Pointer Arrow */}
                  <div style={arrowStyle} className="absolute -top-[6px] w-3 h-3 bg-white border-t border-l border-slate-200 rotate-45 z-50 transition-all duration-300" />
                  
                  <div className="grid grid-cols-3 gap-6 relative z-10">
                    <div className="col-span-1 bg-gradient-to-b from-slate-900 to-slate-950 rounded-md p-5 text-white flex flex-col justify-between border-l-4 border-primary">
                      <div>
                        <h4 className="text-md font-bold text-white tracking-tight">Careers</h4>
                        <p className="text-2xs text-slate-400 mt-2 leading-relaxed">
                          Join our team of elite digital engineers, cloud architects, and digital twins experts.
                        </p>
                      </div>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="w-full mt-4 border-primary text-primary hover:bg-primary hover:text-white transition-colors text-xs py-1 h-8"
                        onClick={onContactClick}
                      >
                        Submit CV
                      </Button>
                    </div>
                    <div className="col-span-2 flex flex-col gap-1.5">
                      {CAREERS_MENU.map((item, i) => (
                        <NavigationMenuLink asChild key={i}>
                          <Link
                            href="#contact"
                            className="group block select-none rounded-md p-2 leading-none no-underline outline-none transition-all hover:bg-primary/5"
                          >
                            <div className="text-sm font-semibold text-slate-800 group-hover:text-primary transition-colors">
                              {item.name}
                            </div>
                            <p className="text-xs text-slate-500 mt-1 line-clamp-1">
                              {item.desc}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

            </NavigationMenuList>
          </NavigationMenu>

          {/* Search Icon and Contact Us CTA */}
          <div className={`flex items-center transition-all duration-500 ${scrolled ? "gap-2.5" : "gap-4"}`}>
            <Button
              variant="ghost"
              size="icon"
              className={`text-slate-600 hover:text-primary transition-colors rounded-full ${
                scrolled ? "h-8 w-8" : "h-10 w-10"
              }`}
            >
              <Search className={`transition-all duration-500 ${scrolled ? "h-4 w-4" : "h-5 w-5"}`} />
            </Button>
            <Button 
              onClick={onContactClick} 
              className={`font-bold transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                scrolled
                  ? "rounded-full bg-gradient-to-r from-primary to-secondary hover:from-primary hover:to-secondary text-white py-2 px-4.5 text-xs h-9 cursor-pointer"
                  : "rounded-[14px] bg-gradient-to-r from-primary to-secondary hover:from-primary hover:to-secondary hover:-translate-y-[2px] active:scale-[0.98] text-white py-3.5 px-6 text-sm h-auto shadow-sm hover:shadow-md hover:shadow-primary/20 cursor-pointer"
              }`}
            >
              Contact Us
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Trigger */}
        <div className={`lg:hidden flex items-center transition-all duration-500 ${scrolled ? "gap-1.5" : "gap-3"}`}>
          <Button
            variant="ghost"
            size="icon"
            className={`text-slate-600 hover:text-primary transition-colors rounded-full ${
              scrolled ? "h-8 w-8" : "h-10 w-10"
            }`}
          >
            <Search className={`transition-all duration-500 ${scrolled ? "h-4 w-4" : "h-5 w-5"}`} />
          </Button>
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-slate-800">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] overflow-y-auto bg-white border-l">
              <SheetHeader className="text-left border-b pb-4">
                <SheetTitle>
                  <Image
                    src="/DHG soft logo.png"
                    alt="DHG Soft"
                    width={110}
                    height={35}
                    className="object-contain"
                  />
                </SheetTitle>
              </SheetHeader>

              {/* Mobile Navigation Menu Accordion */}
              <div className="py-4">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="capabilities" className="border-b-0">
                    <AccordionTrigger className="text-sm font-bold text-slate-800 hover:no-underline hover:text-primary transition-colors">
                      Capabilities
                    </AccordionTrigger>
                    <AccordionContent className="bg-slate-50 p-3 rounded-md flex flex-col gap-2">
                      {SERVICES_MENU.map((col, index) => (
                        <div key={index} className="mb-2 last:mb-0">
                          <div className="text-xs font-bold text-primary uppercase mb-1">{col.title}</div>
                          {col.items.map((item, i) => (
                            <Link
                              key={i}
                              href="#services"
                              onClick={() => setMobileOpen(false)}
                              className="block py-1.5 text-xs text-slate-700 hover:text-primary font-medium transition-colors"
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="industries" className="border-b-0">
                    <AccordionTrigger className="text-sm font-bold text-slate-800 hover:no-underline hover:text-primary transition-colors">
                      Industries
                    </AccordionTrigger>
                    <AccordionContent className="bg-slate-50 p-3 rounded-md flex flex-col gap-1.5">
                      {INDUSTRIES.map((ind, i) => (
                        <Link
                          key={i}
                          href="#industries"
                          onClick={() => setMobileOpen(false)}
                          className="block py-1.5 text-xs text-slate-700 hover:text-primary font-medium transition-colors"
                        >
                          {ind.name}
                        </Link>
                      ))}
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="insights" className="border-b-0">
                    <AccordionTrigger className="text-sm font-bold text-slate-800 hover:no-underline hover:text-primary transition-colors">
                      Insights
                    </AccordionTrigger>
                    <AccordionContent className="bg-slate-50 p-3 rounded-md flex flex-col gap-2">
                      <Link href="#ai-transformation" onClick={() => setMobileOpen(false)} className="text-xs text-slate-700 font-medium block py-1 hover:text-primary transition-colors">
                        AI & Automation
                      </Link>
                      <Link href="#ecosystem" onClick={() => setMobileOpen(false)} className="text-xs text-slate-700 font-medium block py-1 hover:text-primary transition-colors">
                        Technology Ecosystem
                      </Link>
                      <Link href="#case-studies" onClick={() => setMobileOpen(false)} className="text-xs text-slate-700 font-medium block py-1 hover:text-primary transition-colors">
                        Enterprise Case Studies
                      </Link>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="about" className="border-b-0">
                    <AccordionTrigger className="text-sm font-bold text-slate-800 hover:no-underline hover:text-primary transition-colors">
                      About
                    </AccordionTrigger>
                    <AccordionContent className="bg-slate-50 p-3 rounded-md flex flex-col gap-1.5">
                      {ABOUT_MENU.map((item, i) => (
                        <Link
                          key={i}
                          href="#why-us"
                          onClick={() => setMobileOpen(false)}
                          className="block py-1.5 text-xs text-slate-700 hover:text-primary font-medium transition-colors"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="careers" className="border-b-0">
                    <AccordionTrigger className="text-sm font-bold text-slate-800 hover:no-underline hover:text-primary transition-colors">
                      Careers
                    </AccordionTrigger>
                    <AccordionContent className="bg-slate-50 p-3 rounded-md flex flex-col gap-1.5">
                      {CAREERS_MENU.map((item, i) => (
                        <Link
                          key={i}
                          href="#contact"
                          onClick={() => setMobileOpen(false)}
                          className="block py-1.5 text-xs text-slate-700 hover:text-primary font-medium transition-colors"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <div className="mt-8 flex flex-col gap-4">
                  <Button
                    onClick={() => {
                      setMobileOpen(false)
                      onContactClick()
                    }}
                    className="w-full text-white font-bold rounded-[14px] bg-gradient-to-r from-primary to-secondary hover:from-primary hover:to-secondary py-3 h-auto"
                  >
                    Contact Us
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
