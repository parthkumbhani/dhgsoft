// src/components/industries/IndustryPage.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  ArrowRight, 
  ChevronRight, 
  Activity, 
  Award, 
  Factory, 
  FlaskConical, 
  Car, 
  Cpu, 
  UtensilsCrossed, 
  TestTubes, 
  Fuel, 
  Zap, 
  Mountain, 
  Droplets, 
  PackageOpen, 
  ServerCog, 
  HardHat, 
  Sprout 
} from "lucide-react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import DigitalOverlay from "./DigitalOverlay";
import ConnectedOperations from "./ConnectedOperations";
import { IndustryData } from "@/lib/industries";

import { Button } from "@/components/ui/button";
import Eyebrow from "@/components/ui/Eyebrow";
import { Card } from "@/components/ui/card";
import Chip from "@/components/ui/Chip";
import SectionBand from "@/components/ui/SectionBand";

const iconMap: Record<string, React.ComponentType<any>> = {
  Factory,
  FlaskConical,
  Car,
  Cpu,
  UtensilsCrossed,
  TestTubes,
  Fuel,
  Zap,
  Mountain,
  Droplets,
  PackageOpen,
  ServerCog,
  HardHat,
  Sprout
};

interface IndustryPageProps {
  data: IndustryData;
}

export default function IndustryPage({ data }: IndustryPageProps) {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const IndustryIcon = iconMap[data.iconName] || Factory;

  return (
    <div className="min-h-screen bg-white text-txt-strong antialiased font-sans selection:bg-brand selection:text-white">
      {/* 1) Sticky Header */}
      <Header onContactClick={() => setIsContactOpen(true)} />

      <main className="relative pt-20">
        
        {/* 2) Hero Section with Real Photo & Digital Intelligence Overlay */}
        <section className="relative bg-ink overflow-hidden min-h-[580px] flex items-center border-b border-line/10">
          {/* Background Photo */}
          <div className="absolute inset-0 z-0">
            <Image
              src={data.image.src}
              alt={data.image.alt}
              fill
              className="object-cover opacity-35"
              priority
            />
            {/* Gradient overlays to ensure text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-transparent pointer-events-none z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/20 pointer-events-none z-10" />
          </div>

          {/* Interactive Digital Intelligence Overlay */}
          <DigitalOverlay nodes={data.hudNodes} />
          
          <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-[120px] w-full py-16 md:py-20 relative z-30">
            {/* Breadcrumb */}
            <div className="flex items-center gap-1 text-txt-muted text-xs sm:text-sm font-semibold tracking-wide mb-6">
              <Link href="/industries" className="hover:text-white transition-colors">
                Industries
              </Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-brand-hot">{data.title}</span>
            </div>

            <div className="max-w-3xl space-y-6 text-left">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center h-10 w-10 rounded-xl bg-brand/20 text-brand-hot border border-brand/30">
                  <IndustryIcon className="w-5.5 h-5.5" />
                </div>
                <Eyebrow className="text-brand-hot inline-block mb-0">
                  {data.category}
                </Eyebrow>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-[50px] font-black text-white tracking-tight leading-[1.1]">
                {data.title}
              </h1>
              <p className="text-white/80 font-medium text-base sm:text-lg leading-relaxed max-w-2xl">
                {data.sub}
              </p>
              <div className="pt-4 flex flex-wrap gap-4">
                <Button
                  onClick={() => setIsContactOpen(true)}
                  variant="primary"
                  size="lg"
                >
                  Talk to an Expert
                </Button>
                <Link href="/industries">
                  <Button
                    variant="secondary"
                    size="lg"
                    className="border-white/20 text-white hover:bg-white/10 hover:text-white"
                  >
                    Explore Industries
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 3) The Landscape Overview */}
        <SectionBand variant="mist">
          <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-[120px]">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <Eyebrow>THE LANDSCAPE</Eyebrow>
              <p className="text-txt-strong font-bold text-xl sm:text-2xl sm:leading-relaxed">
                &ldquo;{data.landscape}&rdquo;
              </p>
            </div>
          </div>
        </SectionBand>

        {/* 4) Industry Challenges */}
        <SectionBand variant="white" className="bg-tech-grid">
          <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-[120px] space-y-12">
            <div className="text-left">
              <Eyebrow>INDUSTRY CHALLENGES</Eyebrow>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {data.challenges.map((challenge, idx) => (
                <Card
                  key={idx}
                  hoverEffect={true}
                  className="p-8 text-left flex items-start gap-5 group"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-brand/5 text-brand border border-brand/10 shrink-0">
                    <span className="font-mono text-sm font-extrabold">0{idx + 1}</span>
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-extrabold text-txt-strong text-lg tracking-tight leading-snug">
                      {challenge}
                    </h4>
                    <p className="text-txt-muted text-sm leading-relaxed">
                      Critical bottleneck impacting production yield, operational costs, and lifecycle security targets.
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </SectionBand>

        {/* 5) How DHGsoft Helps */}
        <SectionBand variant="mist">
          <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-[120px] space-y-12">
            <div className="text-left">
              <Eyebrow>HOW WE HELP</Eyebrow>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {data.howWeHelp.map((sol, idx) => (
                <Card
                  key={idx}
                  hoverEffect={true}
                  className="p-8 text-left flex items-start gap-5 group"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-brand-hot/5 text-brand-hot border border-brand-hot/10 shrink-0">
                    <span className="font-mono text-sm font-extrabold">0{idx + 1}</span>
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-extrabold text-txt-strong text-lg tracking-tight leading-snug">
                      {sol}
                    </h4>
                    <p className="text-txt-muted text-sm leading-relaxed">
                      Tailored architectural configuration, platform implementation, and full system deployment backed by SLA coverage.
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </SectionBand>

        {/* 6) Connected Industry Diagram */}
        <ConnectedOperations
          industryName={data.title}
          assets={data.connectedAssets}
          caption={`Logical schema of DHGsoft's data acquisition, processing, and visualization pathways linking field assets to business layers in ${data.title}.`}
        />

        {/* 7) Key Use Cases */}
        <SectionBand variant="white" className="bg-tech-grid">
          <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-[120px] space-y-8">
            <div className="text-left">
              <Eyebrow>KEY USE CASES</Eyebrow>
            </div>

            <div className="flex flex-wrap gap-3 text-left">
              {data.useCases.map((uc, idx) => (
                <Chip key={idx} as="span">
                  {uc}
                </Chip>
              ))}
            </div>
          </div>
        </SectionBand>

        {/* 8) Business Outcomes */}
        <SectionBand variant="mist">
          <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-[120px] space-y-12">
            <div className="text-left">
              <Eyebrow>TARGET BUSINESS OUTCOMES</Eyebrow>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
              {data.outcomes.map((outcome, idx) => (
                <Card
                  key={idx}
                  hoverEffect={true}
                  className="p-6 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="w-10 h-10 rounded-lg bg-brand/5 text-brand flex items-center justify-center border border-brand/10">
                      <Award className="w-5 h-5 text-brand" />
                    </div>
                    <h4 className="font-extrabold text-txt-strong text-lg tracking-tight leading-snug">
                      {outcome}
                    </h4>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </SectionBand>

        {/* 9) Relevant Capabilities */}
        <SectionBand variant="white" className="bg-tech-grid">
          <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-[120px] space-y-12">
            <div className="text-left">
              <Eyebrow>RELEVANT CAPABILITIES</Eyebrow>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
              {data.relevantCapabilities.map((cap, idx) => (
                <Link key={idx} href={cap.href} className="block h-full">
                  <Card className="p-6 cursor-pointer flex flex-col justify-between h-full group" hoverEffect={true}>
                    <div className="space-y-4">
                      <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-brand/5 text-brand shrink-0">
                        <Activity className="w-5 h-5" />
                      </div>
                      <h4 className="font-extrabold text-txt-strong text-base tracking-tight leading-snug group-hover:text-brand transition-colors">
                        {cap.name}
                      </h4>
                    </div>

                    <div className="pt-6 flex items-center gap-1.5 text-brand font-bold text-xs tracking-wide uppercase">
                      <span>Capabilities Page</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </SectionBand>

        {/* 10) Why DHGsoft */}
        <SectionBand variant="mist">
          <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-[120px] space-y-12">
            <div className="text-left">
              <Eyebrow>WHY DHGSOFT</Eyebrow>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
              <Card hoverEffect={false} className="p-6 space-y-2">
                <h4 className="font-extrabold text-txt-strong text-base sm:text-lg">Industrial Domain Knowledge</h4>
                <p className="text-txt-muted text-xs sm:text-sm leading-relaxed">
                  Deeply specialized systems engineers who understand plant floor hardware, PLC networks, and SCADA infrastructure.
                </p>
              </Card>
              <Card hoverEffect={false} className="p-6 space-y-2">
                <h4 className="font-extrabold text-txt-strong text-base sm:text-lg">End-to-End Expertise</h4>
                <p className="text-txt-muted text-xs sm:text-sm leading-relaxed">
                  From consulting and digital twin blueprint design to secure network execution, integration, and managed support.
                </p>
              </Card>
              <Card hoverEffect={false} className="p-6 space-y-2">
                <h4 className="font-extrabold text-txt-strong text-base sm:text-lg">Connected Intelligence</h4>
                <p className="text-txt-muted text-xs sm:text-sm leading-relaxed">
                  Advanced edge analytics, clean dashboards, and machine intelligence connecting the shop floor to enterprise IT systems.
                </p>
              </Card>
              <Card hoverEffect={false} className="p-6 space-y-2">
                <h4 className="font-extrabold text-txt-strong text-base sm:text-lg">Customer-Centric Delivery</h4>
                <p className="text-txt-muted text-xs sm:text-sm leading-relaxed">
                  We support the automated configurations we build with transparent SLAs, change validation, and round-the-clock monitoring.
                </p>
              </Card>
            </div>
          </div>
        </SectionBand>

        {/* 11) Related Industries */}
        <SectionBand variant="white" className="bg-tech-grid">
          <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-[120px] space-y-12">
            <div className="text-left">
              <Eyebrow>RELATED INDUSTRIES</Eyebrow>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {data.related.map((rel, idx) => (
                <Link key={idx} href={rel.href} className="block">
                  <Card className="p-6 cursor-pointer flex items-center justify-between group" hoverEffect={true}>
                    <span className="font-extrabold text-txt-strong tracking-tight">{rel.name}</span>
                    <ArrowRight className="w-5 h-5 text-brand group-hover:translate-x-1.5 transition-transform" />
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </SectionBand>

        {/* 12) CTA Band */}
        <SectionBand variant="gradient" className="text-center py-20">
          <div className="absolute inset-0 bg-ink/10 pointer-events-none" />
          <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-[120px] relative z-10 space-y-6">
            <span className="text-xs font-extrabold uppercase tracking-[0.3em] text-white/90 font-mono block animate-pulse">
              LET&apos;S BUILD
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-[46px] font-black text-white tracking-tight leading-tight">
              Ready to transform your {data.title.replace("Management", "").replace("(CPG)", "").trim()} operations?
            </h2>
            <div className="pt-4">
              <Button
                onClick={() => setIsContactOpen(true)}
                variant="onDark"
                size="lg"
              >
                Schedule a Consultation
              </Button>
            </div>
          </div>
        </SectionBand>

      </main>

      {/* Footer */}
      <Footer />

      {/* Contact Modal */}
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} showToast={(msg, type) => {}} />
    </div>
  );
}
