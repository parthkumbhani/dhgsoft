// src/app/industries/page.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  ArrowRight, 
  Cpu, 
  Globe2, 
  Settings, 
  Award, 
  Factory, 
  Zap, 
  Flame, 
  FlaskConical, 
  UtensilsCrossed, 
  HardHat, 
  Droplet 
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";

export default function ExploreIndustriesPage() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const scrollToSolutions = () => {
    const el = document.getElementById("solutions-grid");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground antialiased font-sans flex flex-col">
      {/* Premium Sticky Navigation Menu */}
      <Header onContactClick={() => setIsContactOpen(true)} />

      <main className="flex-grow">
        
        {/* ==========================================
            1. HERO SECTION (Cinematic Dark Industrial Backdrop)
            ========================================== */}
        <Section variant="ink" size="hero" containerSize="wide" className="relative min-h-[90vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0 pointer-events-none">
            <Image
              src="/images/industrial-hero.png"
              alt="DHGsoft industrial manufacturing telemetry background"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center opacity-85 scale-100"
            />
            {/* Dark premium gradient and ambient overlays */}
            <div className="absolute inset-0 bg-slate-950/20" />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
            
            {/* Soft glowing ambient shapes */}
            <div 
              className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full opacity-[0.08]"
              style={{
                background: 'radial-gradient(circle, rgb(180 18 63) 0%, transparent 70%)',
                filter: 'blur(70px)',
              }}
            />
          </div>

          <Container className="relative z-10 w-full">
            <div className="max-w-4xl text-left space-y-6">
              
              {/* Eyebrow badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand/8 border border-brand/20 backdrop-blur-md">
                <span className="relative flex w-1.5 h-1.5">
                  <span className="absolute inset-0 rounded-full bg-brand animate-ping opacity-60" />
                  <span className="relative rounded-full bg-brand w-1.5 h-1.5" />
                </span>
                <span className="text-label-bold text-brand uppercase tracking-[0.2em]">
                  Digital Transformation Leader
                </span>
              </div>

              {/* Title */}
              <h1 className="text-white">
                Transforming the Future of
                <br />
                Industry Through{' '}
                <span className="text-gradient-brand">Connected Intelligence</span>
              </h1>

              {/* Subtitle / Description */}
              <p className="text-slate-300 max-w-2xl leading-relaxed text-body-md font-medium">
                DHGsoft delivers end-to-end industrial digital transformation — connecting machines, people, processes, and enterprise systems through AI-powered automation, industrial data platforms, and smart engineering.
              </p>

              {/* CTA Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => setIsContactOpen(true)}
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-brand text-white font-semibold hover:bg-brand-deep hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand/25 transition-all duration-300 cursor-pointer"
                >
                  Talk to an Expert
                  <ArrowRight className="w-4 h-4" />
                </button>
                
                <button
                  onClick={scrollToSolutions}
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-white/20 text-white font-semibold hover:bg-white/10 hover:border-white/40 transition-all duration-300 cursor-pointer"
                >
                  Explore Solutions
                </button>
              </div>

            </div>
          </Container>

          {/* Floating mouse indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400 select-none z-10">
            <div className="w-5 h-8 border-2 border-slate-600 rounded-full flex justify-center p-1">
              <span className="w-1 h-2 rounded-full bg-brand animate-bounce" />
            </div>
          </div>
        </Section>

        {/* ==========================================
            2. STATS STRIP SECTION (Horizontal Glass Panel)
            ========================================== */}
        <section className="relative py-12 border-y border-line bg-mist overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-brand/5 via-brand-hot/5 to-brand/5 pointer-events-none" />
          <Container>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              
              <div className="flex flex-col items-center text-center">
                <span className="text-4xl lg:text-5xl font-black text-brand mb-2">200+</span>
                <span className="text-label-bold text-txt-muted uppercase tracking-[0.1em]">Projects Delivered</span>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <span className="text-4xl lg:text-5xl font-black text-brand mb-2">50+</span>
                <span className="text-label-bold text-txt-muted uppercase tracking-[0.1em]">Global Clients</span>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <span className="text-4xl lg:text-5xl font-black text-brand mb-2">15+</span>
                <span className="text-label-bold text-txt-muted uppercase tracking-[0.1em]">Countries</span>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <span className="text-4xl lg:text-5xl font-black text-brand mb-2">10+</span>
                <span className="text-label-bold text-txt-muted uppercase tracking-[0.1em]">Years Experience</span>
              </div>

            </div>
          </Container>
        </section>

        {/* ==========================================
            3. INDUSTRIES WE SERVE SECTION (Asymmetric Masonry Grid)
            ========================================== */}
        <Section variant="white" size="default" id="solutions-grid">
          <Container>
            
            {/* Header info */}
            <div className="text-left mb-16 space-y-4">
              <div className="text-brand text-label-bold uppercase tracking-[0.2em]">
                Industries We Serve
              </div>
              <h2 className="text-txt-strong">
                Vertical Expertise Across{' '}
                <span className="text-gradient-brand">Industrial Sectors</span>
              </h2>
              <p className="text-body-md text-txt-muted max-w-2xl leading-relaxed">
                Deep domain knowledge combined with cutting-edge technology to deliver transformation at every level of your industrial operation.
              </p>
            </div>

            {/* Asymmetric grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 auto-rows-[250px]">
              
              {/* 1. Industrial Manufacturing (Large - Spans 2x2) */}
              <Link 
                href="/industries/industrial-manufacturing"
                className="group relative overflow-hidden rounded-3xl flex flex-col justify-end p-6 lg:col-span-2 lg:row-span-2 shadow-md hover:shadow-2xl transition-all duration-500 border border-line hover:border-brand/40"
              >
                <div className="absolute inset-0 z-0">
                  <Image
                    src="/images/manufacturing-card.png"
                    alt="Smart Factory robotic assembly line floor"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Visual gradient overlay for readibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-85" />
                  <div className="absolute inset-0 bg-brand/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                
                <div className="relative z-10 space-y-2">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-brand-hot">
                    Smart Factory & Industry 4.0
                  </span>
                  <h4 className="text-white font-black text-2xl tracking-tight">
                    Industrial Manufacturing
                  </h4>
                </div>
                <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-y-2 group-hover:translate-y-0">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </Link>

              {/* 2. Energy & Utilities */}
              <Link 
                href="/industries/power-utilities"
                className="group relative overflow-hidden rounded-3xl flex flex-col justify-end p-5 shadow-sm hover:shadow-2xl transition-all duration-500 border border-line hover:border-brand/40"
              >
                <div className="absolute inset-0 z-0">
                  <Image
                    src="/industries/power.png"
                    alt="Wind turbines and grid modernization lines at dusk"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/45 to-transparent opacity-85" />
                  <div className="absolute inset-0 bg-brand/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                
                <div className="relative z-10 space-y-1.5">
                  <span className="text-[9px] font-extrabold uppercase tracking-widest text-brand-hot">
                    Grid Modernization & Smart Energy
                  </span>
                  <h4 className="text-white font-bold leading-tight">
                    Energy & Utilities
                  </h4>
                </div>
              </Link>

              {/* 3. Oil & Gas */}
              <Link 
                href="/industries/oil-gas"
                className="group relative overflow-hidden rounded-3xl flex flex-col justify-end p-5 shadow-sm hover:shadow-2xl transition-all duration-500 border border-line hover:border-brand/40"
              >
                <div className="absolute inset-0 z-0">
                  <Image
                    src="/images/oil-gas-card.png"
                    alt="Offshore oil platform industrial rig at night"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/45 to-transparent opacity-85" />
                  <div className="absolute inset-0 bg-brand/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                
                <div className="relative z-10 space-y-1.5">
                  <span className="text-[9px] font-extrabold uppercase tracking-widest text-brand-hot">
                    Upstream & Downstream Intelligence
                  </span>
                  <h4 className="text-white font-bold leading-tight">
                    Oil & Gas
                  </h4>
                </div>
              </Link>

              {/* 4. Pharmaceuticals */}
              <Link 
                href="/industries/life-sciences"
                className="group relative overflow-hidden rounded-3xl flex flex-col justify-end p-5 shadow-sm hover:shadow-2xl transition-all duration-500 border border-line hover:border-brand/40"
              >
                <div className="absolute inset-0 z-0">
                  <Image
                    src="/industries/lifesciences.png"
                    alt="GMP pharmaceutical cleanroom and bioreactor equipment"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/45 to-transparent opacity-85" />
                  <div className="absolute inset-0 bg-brand/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                
                <div className="relative z-10 space-y-1.5">
                  <span className="text-[9px] font-extrabold uppercase tracking-widest text-brand-hot">
                    GxP Compliance & Manufacturing
                  </span>
                  <h4 className="text-white font-bold leading-tight">
                    Pharmaceuticals
                  </h4>
                </div>
              </Link>

              {/* 5. Food & Beverage */}
              <Link 
                href="/industries/food-beverages"
                className="group relative overflow-hidden rounded-3xl flex flex-col justify-end p-5 shadow-sm hover:shadow-2xl transition-all duration-500 border border-line hover:border-brand/40"
              >
                <div className="absolute inset-0 z-0">
                  <Image
                    src="/industries/food.png"
                    alt="High-speed beverage bottling line conveyor"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/45 to-transparent opacity-85" />
                  <div className="absolute inset-0 bg-brand/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                
                <div className="relative z-10 space-y-1.5">
                  <span className="text-[9px] font-extrabold uppercase tracking-widest text-brand-hot">
                    Quality & Traceability Solutions
                  </span>
                  <h4 className="text-white font-bold leading-tight">
                    Food & Beverage
                  </h4>
                </div>
              </Link>

              {/* 6. Mining */}
              <Link 
                href="/industries/mining-metals"
                className="group relative overflow-hidden rounded-3xl flex flex-col justify-end p-5 shadow-sm hover:shadow-2xl transition-all duration-500 border border-line hover:border-brand/40"
              >
                <div className="absolute inset-0 z-0">
                  <Image
                    src="/industries/mining.png"
                    alt="Open-pit mining operation trucks at dawn"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/45 to-transparent opacity-85" />
                  <div className="absolute inset-0 bg-brand/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                
                <div className="relative z-10 space-y-1.5">
                  <span className="text-[9px] font-extrabold uppercase tracking-widest text-brand-hot">
                    Connected Mine Operations
                  </span>
                  <h4 className="text-white font-bold leading-tight">
                    Mining
                  </h4>
                </div>
              </Link>

              {/* 7. Water Treatment (Large - Spans 3 columns on desktop) */}
              <Link 
                href="/industries/water-wastewater"
                className="group relative overflow-hidden rounded-3xl flex flex-col justify-end p-6 lg:col-span-3 shadow-md hover:shadow-2xl transition-all duration-500 border border-line hover:border-brand/40"
              >
                <div className="absolute inset-0 z-0">
                  <Image
                    src="/industries/water.png"
                    alt="Water treatment plant blue aeration tanks at night"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-85" />
                  <div className="absolute inset-0 bg-brand/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                
                <div className="relative z-10 space-y-2">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-brand-hot">
                    Smart Water Management
                  </span>
                  <h4 className="text-white font-black text-2xl tracking-tight">
                    Water Treatment
                  </h4>
                </div>
                <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-y-2 group-hover:translate-y-0">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </Link>

            </div>

          </Container>
        </Section>

        {/* ==========================================
            4. WHY DHGSOFT SECTION (Premium 5-Card Grid Layout)
            ========================================== */}
        <Section variant="mist" size="default" className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand/5 to-transparent pointer-events-none" />
          <Container>
            
            {/* Header info */}
            <div className="text-center mb-16 space-y-4">
              <div className="flex items-center justify-center gap-3">
                <div className="h-px w-10 bg-brand" />
                <span className="text-brand text-label-bold uppercase tracking-[0.2em]">Why DHGsoft</span>
                <div className="h-px w-10 bg-brand" />
              </div>
              <h2 className="text-txt-strong">
                Your Trusted{' '}
                <span className="text-gradient-brand">Transformation Partner</span>
              </h2>
              <p className="text-body-md text-txt-muted max-w-2xl mx-auto leading-relaxed">
                We combine deep industry knowledge with cutting-edge technology to deliver digital transformation that creates lasting competitive advantage.
              </p>
            </div>

            {/* 5 Cards row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
              
              {/* Card 1 */}
              <div className="card glass-card rounded-2xl p-6 flex flex-col gap-4 border border-line hover:border-brand/30 transition-colors text-left">
                <div className="w-11 h-11 rounded-xl bg-brand/10 text-brand flex items-center justify-center shrink-0">
                  <Factory className="w-5 h-5" />
                </div>
                <h4 className="text-txt-strong font-extrabold tracking-tight">Industry Expertise</h4>
                <p className="text-body-sm text-txt-muted leading-relaxed">
                  10+ years of industrial digital transformation experience across manufacturing, energy, and process industries.
                </p>
              </div>

              {/* Card 2 */}
              <div className="card glass-card rounded-2xl p-6 flex flex-col gap-4 border border-line hover:border-brand/30 transition-colors text-left">
                <div className="w-11 h-11 rounded-xl bg-brand/10 text-brand flex items-center justify-center shrink-0">
                  <Cpu className="w-5 h-5" />
                </div>
                <h4 className="text-txt-strong font-extrabold tracking-tight">Technology Partnerships</h4>
                <p className="text-body-sm text-txt-muted leading-relaxed">
                  Certified partnerships with AVEVA, Schneider Electric, Microsoft, and AWS for best-in-class solutions.
                </p>
              </div>

              {/* Card 3 */}
              <div className="card glass-card rounded-2xl p-6 flex flex-col gap-4 border border-line hover:border-brand/30 transition-colors text-left">
                <div className="w-11 h-11 rounded-xl bg-brand/10 text-brand flex items-center justify-center shrink-0">
                  <Settings className="w-5 h-5" />
                </div>
                <h4 className="text-txt-strong font-extrabold tracking-tight">End-to-End Delivery</h4>
                <p className="text-body-sm text-txt-muted leading-relaxed">
                  From strategy and design to implementation, integration, and 24/7 managed support.
                </p>
              </div>

              {/* Card 4 */}
              <div className="card glass-card rounded-2xl p-6 flex flex-col gap-4 border border-line hover:border-brand/30 transition-colors text-left">
                <div className="w-11 h-11 rounded-xl bg-brand/10 text-brand flex items-center justify-center shrink-0">
                  <Globe2 className="w-5 h-5" />
                </div>
                <h4 className="text-txt-strong font-extrabold tracking-tight">Global Support</h4>
                <p className="text-body-sm text-txt-muted leading-relaxed">
                  Round-the-clock support and delivery capability across 15+ countries worldwide.
                </p>
              </div>

              {/* Card 5 */}
              <div className="card glass-card rounded-2xl p-6 flex flex-col gap-4 border border-line hover:border-brand/30 transition-colors text-left">
                <div className="w-11 h-11 rounded-xl bg-brand/10 text-brand flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <h4 className="text-txt-strong font-extrabold tracking-tight">Customer Success</h4>
                <p className="text-body-sm text-txt-muted leading-relaxed">
                  200+ successful digital transformation projects with measurable ROI and operational impact.
                </p>
              </div>

            </div>

          </Container>
        </Section>

        {/* ==========================================
            5. TECHNOLOGY PARTNERS SECTION (Grid of 8 Badges)
            ========================================== */}
        <section className="py-16 bg-white border-y border-line">
          <Container>
            <p className="text-center text-xs font-semibold uppercase tracking-[0.4em] text-txt-muted mb-10">
              Technology Partners
            </p>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
              
              <div className="bg-mist border border-line rounded-xl px-3 py-4 flex flex-col items-center justify-center text-center gap-1 select-none hover:border-brand/20 transition-colors">
                <span className="text-sm font-bold text-txt-strong">AVEVA</span>
                <span className="text-[10px] text-txt-muted font-medium">Industrial Software</span>
              </div>
              
              <div className="bg-mist border border-line rounded-xl px-3 py-4 flex flex-col items-center justify-center text-center gap-1 select-none hover:border-brand/20 transition-colors">
                <span className="text-sm font-bold text-txt-strong">Schneider Electric</span>
                <span className="text-[10px] text-txt-muted font-medium">Energy Management</span>
              </div>
              
              <div className="bg-mist border border-line rounded-xl px-3 py-4 flex flex-col items-center justify-center text-center gap-1 select-none hover:border-brand/20 transition-colors">
                <span className="text-sm font-bold text-txt-strong">Microsoft</span>
                <span className="text-[10px] text-txt-muted font-medium">Cloud &amp; AI</span>
              </div>
              
              <div className="bg-mist border border-line rounded-xl px-3 py-4 flex flex-col items-center justify-center text-center gap-1 select-none hover:border-brand/20 transition-colors">
                <span className="text-sm font-bold text-txt-strong">AWS</span>
                <span className="text-[10px] text-txt-muted font-medium">Cloud Infrastructure</span>
              </div>
              
              <div className="bg-mist border border-line rounded-xl px-3 py-4 flex flex-col items-center justify-center text-center gap-1 select-none hover:border-brand/20 transition-colors">
                <span className="text-sm font-bold text-txt-strong">SAP</span>
                <span className="text-[10px] text-txt-muted font-medium">Enterprise Apps</span>
              </div>
              
              <div className="bg-mist border border-line rounded-xl px-3 py-4 flex flex-col items-center justify-center text-center gap-1 select-none hover:border-brand/20 transition-colors">
                <span className="text-sm font-bold text-txt-strong">Oracle</span>
                <span className="text-[10px] text-txt-muted font-medium">Database &amp; ERP</span>
              </div>
              
              <div className="bg-mist border border-line rounded-xl px-3 py-4 flex flex-col items-center justify-center text-center gap-1 select-none hover:border-brand/20 transition-colors">
                <span className="text-sm font-bold text-txt-strong">Cisco</span>
                <span className="text-[10px] text-txt-muted font-medium">Industrial Network</span>
              </div>
              
              <div className="bg-mist border border-line rounded-xl px-3 py-4 flex flex-col items-center justify-center text-center gap-1 select-none hover:border-brand/20 transition-colors">
                <span className="text-sm font-bold text-txt-strong">Phoenix Contact</span>
                <span className="text-[10px] text-txt-muted font-medium">Connectivity</span>
              </div>

            </div>
          </Container>
        </section>

        {/* ==========================================
            6. CTA SECTION (Final Band)
            ========================================== */}
        <Section variant="gradient" containerSize="wide" className="relative overflow-hidden text-center">
          <div className="absolute inset-0 bg-slate-950/20 pointer-events-none" />
          <div className="w-full relative z-10 space-y-6">
            <span className="text-xs font-extrabold uppercase tracking-[0.3em] text-white/90 font-mono block">
              LET&apos;S ENGAGE
            </span>
            
            <h2 className="text-white">
              Ready to <span className="text-white underline decoration-brand decoration-4 underline-offset-8">Transform Your Industry?</span>
            </h2>
            
            <p className="text-white/80 max-w-xl mx-auto leading-relaxed text-body-md">
              Let&apos;s discuss how DHGsoft can accelerate your digital transformation journey with proven solutions and deep industry expertise.
            </p>

            <div className="pt-6 flex flex-wrap gap-4 justify-center">
              <button
                onClick={() => setIsContactOpen(true)}
                className="px-8 py-4 rounded-xl bg-white hover:bg-slate-100 text-brand font-extrabold text-sm sm:text-base transition-all duration-300 shadow-md active:scale-95 cursor-pointer"
              >
                Talk to an Expert
              </button>
              
              <button
                onClick={scrollToSolutions}
                className="px-8 py-4 rounded-xl border border-white/30 hover:bg-white/10 text-white font-extrabold text-sm sm:text-base transition-all duration-300 cursor-pointer"
              >
                Explore Solutions
              </button>
            </div>
          </div>
        </Section>

      </main>

      {/* Footer */}
      <Footer />

      {/* Sales Consultation Contact Modal */}
      <ContactModal 
        isOpen={isContactOpen} 
        onClose={() => setIsContactOpen(false)} 
        showToast={() => {}} 
      />
    </div>
  );
}
