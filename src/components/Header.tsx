"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Menu, ArrowRight, ChevronDown, Check, Globe, Shield, Terminal, Settings2, Cpu, Factory, Database, Network, Search } from "lucide-react"
import { Container } from "@/components/ui/Container"
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
      { name: "Industrial Digital Transformation", desc: "Enterprise-wide OT/IT modernization.", href: "/capabilities/industrial-digital-transformation" },
      { name: "Industrial Automation", desc: "Intelligent automation and process reliability.", href: "/capabilities/industrial-automation" },
      { name: "OT / IT Integration", desc: "Bridge shop-floor and top-floor systems.", href: "/capabilities/ot-it-integration" },
      { name: "Industrial Data Platforms", desc: "Unified analytics pipeline for industrial IoT.", href: "/capabilities/industrial-data-platforms" }
    ]
  },
  {
    title: "AI & Intelligence",
    icon: Cpu,
    items: [
      { name: "Artificial Intelligence & Analytics", desc: "Predictive maintenance & yield optimization.", href: "/capabilities/ai-analytics" },
      { name: "Industrial Internet of Things (IIoT)", desc: "Edge computing and device telemetry.", href: "/capabilities/iiot" }
    ]
  },
  {
    title: "Digital Engineering",
    icon: Settings2,
    items: [
      { name: "Digital Engineering", desc: "Custom industrial software & integrations.", href: "/capabilities/digital-engineering" },
      { name: "Enterprise Applications", desc: "Next-gen ERP, MES, and PLM implementation.", href: "/capabilities/enterprise-applications" }
    ]
  },
  {
    title: "Cloud & Infrastructure",
    icon: Database,
    items: [
      { name: "Cloud Infrastructure", desc: "Hybrid cloud solutions for critical ops.", href: "/capabilities/cloud-infrastructure" },
      { name: "Cybersecurity", desc: "Zero-trust OT cybersecurity defense systems.", href: "/capabilities/cybersecurity" },
      { name: "Managed Services", desc: "24/7/365 global operations management.", href: "/capabilities/managed-services" }
    ]
  }
]

const INDUSTRIES = [
  { name: "Industrial Manufacturing", desc: "Smart factory operations & automation.", href: "/industries/industrial-manufacturing" },
  { name: "Life Sciences", desc: "Regulatory compliance & batch analytics.", href: "/industries/life-sciences" },
  { name: "Automotive", desc: "OEM assembly line optimization.", href: "/industries/automotive" },
  { name: "Semiconductor", desc: "Yield optimization & cleanroom systems.", href: "/industries/semiconductor" },
  { name: "Food & Beverages", desc: "Traceability & recipe management.", href: "/industries/food-beverages" },
  { name: "Chemical Manufacturing", desc: "Process safety & telemetry integration.", href: "/industries/chemical-manufacturing" },
  { name: "Oil & Gas", desc: "Pipeline monitoring & asset security.", href: "/industries/oil-gas" },
  { name: "Power & Utilities", desc: "Smart grid management & telemetry.", href: "/industries/power-utilities" },
  { name: "Mining & Metals", desc: "Fleet automation & supply logistics.", href: "/industries/mining-metals" },
  { name: "Water & Wastewater Management", desc: "Flow analytics & treatment automation.", href: "/industries/water-wastewater" },
  { name: "Consumer Packaged Goods (CPG)", desc: "High-speed packaging line efficiency.", href: "/industries/consumer-packaged-goods" },
  { name: "Data Centres", desc: "Power, cooling & infrastructure control.", href: "/industries/data-centres" },
  { name: "Engineering, Procurement & Construction (EPC)", desc: "Digital twins & project execution.", href: "/industries/epc" },
  { name: "Agriculture", desc: "Precision farming & resource management.", href: "/industries/agriculture" }
]

const ABOUT_MENU = [
  { name: "Overview", desc: "Our history, engineering focus, and corporate stats.", href: "/about/overview" },
  { name: "Vision, Mission & Values", desc: "OT/IT bridge philosophy and core values.", href: "/about/vision-mission-values" },
  { name: "Leadership Team", desc: "Meet our systems architects and executives.", href: "/about/leadership" },
  { name: "Why DHGsoft", desc: "Zero-downtime integration & client SLAs.", href: "/about/why-dhgsoft" },
  { name: "Partners Ecosystem", desc: "Collaborating with global solutions vendors.", href: "/about/partners" },
  { name: "Technology Partners", desc: "Cloud, hardware, and SCADA alliances.", href: "/about/technology-partners" },
  { name: "Sustainability & ESG", desc: "Clean operations and green computing.", href: "/about/sustainability-esg" },
  { name: "Ethics & Compliance", desc: "Zero-trust standards & regulatory compliance.", href: "/about/ethics-compliance" },
  { name: "Recognition", desc: "Industry awards and engineering certs.", href: "/about/recognition" },
  { name: "Locations", desc: "Global offices, command centers, and hubs.", href: "/about/locations" }
]

const CAREERS_MENU = [
  { name: "Life at DHGsoft", desc: "Discover our culture, benefits, and engineering mindset.", href: "/careers/life-at-dhgsoft" },
  { name: "Current Openings", desc: "Explore active engineering, architecture, and consulting roles.", href: "/careers/current-openings" },
  { name: "Campus & Early Careers", desc: "Internships, graduate roles, and university partnerships.", href: "/careers/campus-early-careers" },
  
]

interface HeaderProps {
  onContactClick: () => void
}

export default function Header({ onContactClick }: HeaderProps) {
  const router = useRouter()
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
      <Container
        className={`h-full flex items-center justify-between transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          scrolled ? "!max-w-none !px-6 md:!px-8" : ""
        }`}
      >
        {/* Logo */}
        <div onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-3 cursor-pointer">
          <Image
            src="/DHGsoft Logo.svg"
            alt="DHGsoft"
            width={scrolled ? 170 : 230}
            height={scrolled ? 33 : 45}
            style={{ height: 'auto' }}
            className="object-contain transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
            priority
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          <NavigationMenu onValueChange={setActiveValue} className="!static">
            <NavigationMenuList className="gap-2">
              
              {/* Capabilities Mega Menu */}
              <NavigationMenuItem value="capabilities" className="relative">
                <NavigationMenuTrigger 
                  onClick={(e) => { e.preventDefault(); onContactClick(); }}
                  className="relative cursor-pointer text-sm font-semibold text-slate-700 hover:text-primary focus:text-primary data-[state=open]:text-primary px-4 py-2 transition-colors after:absolute after:bottom-0 after:left-4 after:right-4 after:h-[2px] after:bg-gradient-to-r after:from-primary after:via-secondary after:to-tertiary after:transform after:scale-x-0 hover:after:scale-x-100 data-[state=open]:after:scale-x-100 data-[active]:after:scale-x-100 after:transition-transform after:duration-300"
                >
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
                                  <div
                                    onClick={(e) => { e.preventDefault(); onContactClick(); }}
                                    className="group block select-none rounded-md p-2 leading-none no-underline outline-none transition-all hover:bg-primary/5 cursor-pointer"
                                  >
                                    <div className="text-sm font-semibold text-slate-800 group-hover:text-primary transition-colors">
                                      {item.name}
                                    </div>
                                    <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                                      {item.desc}
                                    </p>
                                  </div>
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
                <NavigationMenuTrigger 
                  onClick={(e) => { e.preventDefault(); onContactClick(); }}
                  className="relative cursor-pointer text-sm font-semibold text-slate-700 hover:text-primary focus:text-primary data-[state=open]:text-primary px-4 py-2 transition-colors after:absolute after:bottom-0 after:left-4 after:right-4 after:h-[2px] after:bg-gradient-to-r after:from-primary after:via-secondary after:to-tertiary after:transform after:scale-x-0 hover:after:scale-x-100 data-[state=open]:after:scale-x-100 data-[active]:after:scale-x-100 after:transition-transform after:duration-300"
                >
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
                      <div onClick={(e) => { e.preventDefault(); onContactClick(); }} className="text-xs font-bold text-primary hover:text-secondary flex items-center gap-1.5 group transition-colors cursor-pointer">
                        Explore Industries
                        <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                    <div className="col-span-3 grid grid-cols-3 gap-4">
                      {INDUSTRIES.map((ind, i) => (
                        <NavigationMenuLink asChild key={i}>
                          <div
                            onClick={(e) => { e.preventDefault(); onContactClick(); }}
                            className="group block select-none rounded-md p-2 leading-none no-underline outline-none transition-all hover:bg-primary/5 cursor-pointer"
                          >
                            <div className="text-sm font-semibold text-slate-800 group-hover:text-primary transition-colors">
                              {ind.name}
                            </div>
                            <p className="text-xs text-slate-500 mt-1 line-clamp-1">
                              {ind.desc}
                            </p>
                          </div>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Insights Mega Menu */}
              <NavigationMenuItem value="insights" className="relative">
                <NavigationMenuTrigger 
                  onClick={(e) => { e.preventDefault(); onContactClick(); }}
                  className="relative cursor-pointer text-sm font-semibold text-slate-700 hover:text-primary focus:text-primary data-[state=open]:text-primary px-4 py-2 transition-colors after:absolute after:bottom-0 after:left-4 after:right-4 after:h-[2px] after:bg-gradient-to-r after:from-primary after:via-secondary after:to-tertiary after:transform after:scale-x-0 hover:after:scale-x-100 data-[state=open]:after:scale-x-100 data-[active]:after:scale-x-100 after:transition-transform after:duration-300"
                >
                  Insights
                </NavigationMenuTrigger>
                <NavigationMenuContent className="p-6 !w-[600px] z-50">
                  {/* Dynamic Pointer Arrow */}
                  <div style={arrowStyle} className="absolute -top-[6px] w-3 h-3 bg-white border-t border-l border-slate-200 rotate-45 z-50 transition-all duration-300" />
                  
                  <div className="grid grid-cols-2 gap-6 relative z-10">
                    <div className="flex flex-col gap-2">
                      <div className="text-xs font-bold uppercase tracking-wider text-primary mb-1">Knowledge Hub</div>
                      <div onClick={(e) => { e.preventDefault(); onContactClick(); }} className="text-sm font-semibold text-primary hover:text-secondary py-1 block transition-colors cursor-pointer">
                        All Insights
                      </div>
                      <div onClick={(e) => { e.preventDefault(); onContactClick(); }} className="text-sm font-semibold text-slate-800 hover:text-primary py-1 block transition-colors cursor-pointer">
                        AI & Automation
                      </div>
                      <div onClick={(e) => { e.preventDefault(); onContactClick(); }} className="text-sm font-semibold text-slate-800 hover:text-primary py-1 block transition-colors cursor-pointer">
                        Technology Ecosystem
                      </div>
                      <div onClick={(e) => { e.preventDefault(); onContactClick(); }} className="text-sm font-semibold text-slate-800 hover:text-primary py-1 block transition-colors cursor-pointer">
                        Enterprise Case Studies
                      </div>
                      <div onClick={(e) => { e.preventDefault(); onContactClick(); }} className="text-sm font-semibold text-slate-800 hover:text-primary py-1 block transition-colors cursor-pointer">
                        News &amp; Press
                      </div>
                    </div>
                    <div className="border-l border-slate-100 pl-6 flex flex-col justify-between">
                      <div className="text-xs text-slate-500 leading-relaxed">
                        Read how Fortune 500 manufacturing, energy, and automotive companies optimize production infrastructure and deploy secure cloud edge architectures.
                      </div>
                      <div onClick={(e) => { e.preventDefault(); onContactClick(); }} className="text-xs font-bold text-primary hover:text-secondary flex items-center gap-1.5 group mt-4 transition-colors cursor-pointer">
                        Read Case Studies
                        <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* About Mega Menu */}
              <NavigationMenuItem value="about" className="relative">
                <NavigationMenuTrigger 
                  onClick={(e) => { e.preventDefault(); onContactClick(); }}
                  className="relative cursor-pointer text-sm font-semibold text-slate-700 hover:text-primary focus:text-primary data-[state=open]:text-primary px-4 py-2 transition-colors after:absolute after:bottom-0 after:left-4 after:right-4 after:h-[2px] after:bg-gradient-to-r after:from-primary after:via-secondary after:to-tertiary after:transform after:scale-x-0 hover:after:scale-x-100 data-[state=open]:after:scale-x-100 data-[active]:after:scale-x-100 after:transition-transform after:duration-300"
                >
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
                      <div onClick={(e) => { e.preventDefault(); onContactClick(); }} className="text-xs font-bold text-primary hover:text-secondary flex items-center gap-1.5 group transition-colors cursor-pointer">
                        Discover Our Story
                        <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                    <div className="col-span-2 grid grid-cols-2 gap-4">
                      {ABOUT_MENU.map((item, i) => (
                        <NavigationMenuLink asChild key={i}>
                          <div
                            onClick={(e) => { e.preventDefault(); onContactClick(); }}
                            className="group block select-none rounded-md p-2 leading-none no-underline outline-none transition-all hover:bg-primary/5 cursor-pointer"
                          >
                            <div className="text-sm font-semibold text-slate-800 group-hover:text-primary transition-colors">
                              {item.name}
                            </div>
                            <p className="text-xs text-slate-500 mt-1 line-clamp-1">
                              {item.desc}
                            </p>
                          </div>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Careers Dropdown */}
              <NavigationMenuItem value="careers" className="relative">
                <NavigationMenuTrigger 
                  onClick={(e) => { e.preventDefault(); onContactClick(); }}
                  className="relative cursor-pointer text-sm font-semibold text-slate-700 hover:text-primary focus:text-primary data-[state=open]:text-primary px-4 py-2 transition-colors after:absolute after:bottom-0 after:left-4 after:right-4 after:h-[2px] after:bg-gradient-to-r after:from-primary after:via-secondary after:to-tertiary after:transform after:scale-x-0 hover:after:scale-x-100 data-[state=open]:after:scale-x-100 data-[active]:after:scale-x-100 after:transition-transform after:duration-300"
                >
                  Careers
                </NavigationMenuTrigger>
                <NavigationMenuContent className="p-6 !w-[650px] z-50">
                  {/* Dynamic Pointer Arrow */}
                  <div style={arrowStyle} className="absolute -top-[6px] w-3 h-3 bg-white border-t border-l border-slate-200 rotate-45 z-50 transition-all duration-300" />
                  
                  <div className="grid grid-cols-3 gap-6 relative z-10">
                    <div className="col-span-1 bg-gradient-to-b from-slate-900 to-slate-950 rounded-md p-5 text-white flex flex-col justify-between border-l-4 border-primary">
                      <div>
                        <div onClick={(e) => { e.preventDefault(); onContactClick(); }} className="group/title block cursor-pointer">
                          <h4 className="text-md font-bold text-white tracking-tight group-hover/title:text-primary transition-colors flex items-center gap-1.5">
                            Careers
                            <ArrowRight className="h-3.5 w-3.5 opacity-0 -translate-x-1 group-hover/title:opacity-100 group-hover/title:translate-x-0 transition-all" />
                          </h4>
                        </div>
                        <p className="text-2xs text-slate-400 mt-2 leading-relaxed">
                          Join our team of elite digital engineers, cloud architects, and digital twins experts.
                        </p>
                      </div>
                      <div
                        onClick={(e) => { e.preventDefault(); onContactClick(); }}
                        className="w-full mt-4 border border-primary text-primary hover:bg-primary hover:text-white transition-colors text-xs py-1.5 h-8 block rounded-md text-center font-semibold cursor-pointer"
                      >
                        Submit CV
                      </div>
                    </div>
                    <div className="col-span-2 flex flex-col gap-1.5">
                      <NavigationMenuLink asChild>
                        <div
                          onClick={(e) => { e.preventDefault(); onContactClick(); }}
                          className="group block select-none rounded-md p-2 leading-none no-underline outline-none transition-all hover:bg-primary/5 cursor-pointer"
                        >
                          <div className="text-sm font-semibold text-primary group-hover:text-primary-hover transition-colors">
                            Careers Overview
                          </div>
                          <p className="text-xs text-slate-500 mt-1 line-clamp-1">
                            Explore our culture, values, and open opportunities.
                          </p>
                        </div>
                      </NavigationMenuLink>
                      {CAREERS_MENU.map((item, i) => (
                        <NavigationMenuLink asChild key={i}>
                          <div
                            onClick={(e) => { e.preventDefault(); onContactClick(); }}
                            className="group block select-none rounded-md p-2 leading-none no-underline outline-none transition-all hover:bg-primary/5 cursor-pointer"
                          >
                            <div className="text-sm font-semibold text-slate-800 group-hover:text-primary transition-colors">
                              {item.name}
                            </div>
                            <p className="text-xs text-slate-500 mt-1 line-clamp-1">
                              {item.desc}
                            </p>
                          </div>
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
              onClick={(e) => { e.preventDefault(); onContactClick(); }}
              className={`text-slate-600 hover:text-primary transition-colors rounded-full ${
                scrolled ? "h-8 w-8" : "h-10 w-10"
              }`}
            >
              <Search className={`transition-all duration-500 ${scrolled ? "h-4 w-4" : "h-5 w-5"}`} />
            </Button>
            <Button 
              onClick={(e) => { e.preventDefault(); onContactClick(); }}
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
                    src="/DHGsoft Logo.svg"
                    alt="DHGsoft"
                    width={230}
                    height={45}
                    style={{ height: 'auto' }}
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
                      <div
                        onClick={() => { setMobileOpen(false); onContactClick(); }}
                        className="block py-1.5 text-xs text-[#B4123F] font-bold border-b border-slate-200 transition-colors cursor-pointer"
                      >
                        Explore All Capabilities
                      </div>
                      {SERVICES_MENU.map((col, index) => (
                        <div key={index} className="mb-2 last:mb-0">
                          <div className="text-xs font-bold text-primary uppercase mb-1">{col.title}</div>
                          {col.items.map((item, i) => (
                            <div
                              key={i}
                              onClick={() => { setMobileOpen(false); onContactClick(); }}
                              className="block py-1.5 text-xs text-slate-700 hover:text-primary font-medium transition-colors cursor-pointer"
                            >
                              {item.name}
                            </div>
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
                      <div
                        onClick={() => { setMobileOpen(false); onContactClick(); }}
                        className="block py-1.5 text-xs text-[#B4123F] font-bold border-b border-slate-200 transition-colors cursor-pointer"
                      >
                        Explore All Industries
                      </div>
                      {INDUSTRIES.map((ind, i) => (
                        <div
                          key={i}
                          onClick={() => { setMobileOpen(false); onContactClick(); }}
                          className="block py-1.5 text-xs text-slate-700 hover:text-primary font-medium transition-colors cursor-pointer"
                        >
                          {ind.name}
                        </div>
                      ))}
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="insights" className="border-b-0">
                    <AccordionTrigger className="text-sm font-bold text-slate-800 hover:no-underline hover:text-primary transition-colors">
                      Insights
                    </AccordionTrigger>
                    <AccordionContent className="bg-slate-50 p-3 rounded-md flex flex-col gap-2">
                      <div onClick={() => { setMobileOpen(false); onContactClick(); }} className="text-xs text-[#B4123F] font-bold block py-1 hover:text-primary transition-colors cursor-pointer">
                        Explore All Insights
                      </div>
                      <div onClick={() => { setMobileOpen(false); onContactClick(); }} className="text-xs text-slate-700 font-medium block py-1 hover:text-primary transition-colors cursor-pointer">
                        AI & Automation
                      </div>
                      <div onClick={() => { setMobileOpen(false); onContactClick(); }} className="text-xs text-slate-700 font-medium block py-1 hover:text-primary transition-colors cursor-pointer">
                        Technology Ecosystem
                      </div>
                      <div onClick={() => { setMobileOpen(false); onContactClick(); }} className="text-xs text-slate-700 font-medium block py-1 hover:text-primary transition-colors cursor-pointer">
                        Enterprise Case Studies
                      </div>
                      <div onClick={() => { setMobileOpen(false); onContactClick(); }} className="text-xs text-slate-700 font-medium block py-1 hover:text-primary transition-colors cursor-pointer">
                        News &amp; Press
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="about" className="border-b-0">
                    <AccordionTrigger className="text-sm font-bold text-slate-800 hover:no-underline hover:text-primary transition-colors">
                      About
                    </AccordionTrigger>
                    <AccordionContent className="bg-slate-50 p-3 rounded-md flex flex-col gap-1.5">
                      {ABOUT_MENU.map((item, i) => (
                        <div
                          key={i}
                          onClick={() => { setMobileOpen(false); onContactClick(); }}
                          className="block py-1.5 text-xs text-slate-700 hover:text-primary font-medium transition-colors cursor-pointer"
                        >
                          {item.name}
                        </div>
                      ))}
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="careers" className="border-b-0">
                    <AccordionTrigger className="text-sm font-bold text-slate-800 hover:no-underline hover:text-primary transition-colors">
                      Careers
                    </AccordionTrigger>
                    <AccordionContent className="bg-slate-50 p-3 rounded-md flex flex-col gap-1.5">
                      <div
                        onClick={() => { setMobileOpen(false); onContactClick(); }}
                        className="block py-1.5 text-xs text-[#B4123F] font-bold border-b border-slate-200 transition-colors cursor-pointer"
                      >
                        Explore Careers
                      </div>
                      {CAREERS_MENU.map((item, i) => (
                        <div
                          key={i}
                          onClick={() => { setMobileOpen(false); onContactClick(); }}
                          className="block py-1.5 text-xs text-slate-700 hover:text-primary font-medium transition-colors cursor-pointer"
                        >
                          {item.name}
                        </div>
                      ))}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <div className="mt-8 flex flex-col gap-4">
                  <div onClick={() => { setMobileOpen(false); onContactClick(); }} className="w-full cursor-pointer">
                    <Button
                      className="w-full text-white font-bold rounded-[14px] bg-gradient-to-r from-primary to-secondary hover:from-primary hover:to-secondary py-3 h-auto"
                    >
                      Contact Us
                    </Button>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </Container>
    </header>
  )
}
