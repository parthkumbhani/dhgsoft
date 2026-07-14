// src/app/about/locations/page.tsx
"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MapPin, Globe, Monitor, Clock, Workflow, Mail, Phone, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { locationsImages } from "@/lib/images/locations";
import CTABand from "@/components/CTABand";

const deliveryModels = [
  {
    title: "Onsite Services",
    desc: "Engineers on the ground, at the plant, when it matters.",
    Icon: MapPin
  },
  {
    title: "Offshore Engineering",
    desc: "Specialized engineering delivered efficiently from our centers.",
    Icon: Globe
  },
  {
    title: "Remote Operations",
    desc: "Continuous remote support and monitoring for connected operations.",
    Icon: Monitor
  },
  {
    title: "24×7 Support",
    desc: "Round-the-clock support across time zones.",
    Icon: Clock
  },
  {
    title: "Global Project Delivery",
    desc: "Coordinated delivery across sites, regions, and teams.",
    Icon: Workflow
  }
];

const realOffices = [
  {
    type: "Corporate Office",
    city: "Ahmedabad, India",
    address: "420, HillTown Plaza, Nikol, Ahmedabad - 382350",
    phone: "+91 942 941 942 7",
    email: "hitesh.patel@dhgsoft.com"
  },
  {
    type: "Regional Office",
    city: "Pune, India",
    address: "Mumbai – Pune Road, Dapodi, Pune - 411 012",
    phone: "+91 823 811 891 5",
    email: "ankita.parikh@dhgsoft.com"
  }
];

export default function LocationsPage() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground antialiased font-sans flex flex-col selection:bg-brand selection:text-white">
      {/* Sticky Header */}
      <Header onContactClick={() => setIsContactOpen(true)} />

      <main className="relative pt-20">
        
        {/* ==========================================
            1. HERO SECTION
            ========================================== */}
        <Section variant="ink" size="hero" containerSize="wide" className="relative min-h-screen flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0 pointer-events-none">
            <Image
              src={locationsImages.hero.src}
              alt={locationsImages.hero.alt}
              fill
              priority
              className="object-cover opacity-35"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />
          </div>
          <Container className="relative z-10 w-full text-left">
            <div className="max-w-3xl space-y-6">
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 backdrop-blur-md text-[#E10088] mb-4">
                <span className="relative flex w-1.5 h-1.5">
                  <span className="absolute inset-0 rounded-full bg-[#E10088] animate-ping opacity-60" />
                  <span className="relative rounded-full bg-[#E10088] w-1.5 h-1.5" />
                </span>
                <span className="text-[11px] font-extrabold uppercase tracking-widest font-sans">
                  GLOBAL PRESENCE
                </span>
              </div>
              <h1 className="text-white text-headline-xl sm:text-[3.25rem] lg:text-[4.5rem] font-black tracking-tight leading-[1.1]">
                Global Reach,
                <br />
                <span className="text-gradient-brand">Local Delivery</span>
              </h1>
              <p className="text-slate-300 max-w-2xl leading-relaxed text-body-md font-medium">
                DHGsoft serves customers through a flexible global delivery model.
              </p>
            </div>
          </Container>
        </Section>

        {/* ==========================================
            2. DELIVERY MODEL
            ========================================== */}
        <Section variant="white" size="default" id="delivery-model">
          <Container>
            
            <div className="flex flex-col text-left mb-12">
              <div className="flex items-center gap-3 mb-2">
                <div className="h-px w-10 bg-brand" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                  DELIVERY MODEL
                </span>
              </div>
              <h2 className="text-txt-strong font-black tracking-tight leading-tight">
                Flexible, global, always on
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {deliveryModels.map((model, idx) => {
                const IconComp = model.Icon;
                return (
                  <div 
                    key={idx}
                    className="bg-white border border-line rounded-2xl p-5 shadow-sm hover:border-brand/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-start text-left space-y-3"
                  >
                    <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-brand/5 text-brand shrink-0">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h4 className="font-extrabold text-txt-strong text-base tracking-tight leading-snug">
                      {model.title}
                    </h4>
                    <p className="text-txt-muted text-xs leading-relaxed">
                      {model.desc}
                    </p>
                  </div>
                );
              })}
            </div>

          </Container>
        </Section>

        {/* ==========================================
            3. OUR LOCATIONS
            ========================================== */}
        <Section variant="brandTint" size="default" id="locations-list">
          <Container>
            
            <div className="flex flex-col text-left mb-12">
              <div className="flex items-center gap-3 mb-2">
                <div className="h-px w-10 bg-brand" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                  OUR LOCATIONS
                </span>
              </div>
              <h2 className="text-txt-strong font-black tracking-tight leading-tight">
                Active Office Hubs
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
              {realOffices.map((office, idx) => (
                <div 
                  key={idx}
                  className="bg-white border border-line rounded-2xl p-6 shadow-sm flex flex-col justify-between text-left space-y-4 hover:border-brand/40 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="space-y-3">
                    <span className="text-[10px] font-extrabold tracking-wider text-brand uppercase">
                      {office.type}
                    </span>
                    <h4 className="font-extrabold text-txt-strong text-lg tracking-tight">
                      {office.city}
                    </h4>
                    <p className="text-txt-muted text-xs leading-relaxed">
                      {office.address}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-line space-y-2 text-xs font-mono">
                    <div className="flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 text-brand" />
                      <a href={`tel:${office.phone.replace(/\s+/g, "")}`} className="text-brand font-bold hover:text-brand-deep">
                        {office.phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-3.5 h-3.5 text-brand" />
                      <a href={`mailto:${office.email}`} className="text-brand hover:text-brand-deep">
                        {office.email}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* World Map Visual */}
            <div className="mt-12 relative w-full h-[250px] md:h-[400px] rounded-2xl border border-line overflow-hidden bg-slate-950 flex items-center justify-center select-none shadow-sm">
              <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] bg-[size:24px_24px] opacity-35" />
              <div className="relative z-10 text-center space-y-3 p-6">
                <span className="text-4xl">🌍</span>
                <h4 className="font-extrabold text-white text-lg">Global Delivery Network</h4>
                <p className="text-slate-400 text-xs sm:text-sm max-w-lg leading-relaxed">
                  Interactive location markers loading geographic network hubs.
                </p>
              </div>
            </div>

          </Container>
        </Section>

        {/* ==========================================
            4. GLOBAL DELIVERY CENTERS
            ========================================== */}
        <Section variant="white" size="default" id="delivery-centers">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Left Column: Content */}
              <div className="lg:col-span-7 space-y-6 text-left">
                <div className="flex items-center gap-3">
                  <div className="h-px w-10 bg-brand" />
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                    DELIVERY CENTERS
                  </span>
                </div>
                <h2 className="text-txt-strong font-black tracking-tight leading-tight">
                  Follow-the-sun operational support
                </h2>
                <p className="text-body-md text-txt-muted leading-relaxed font-sans">
                  Our delivery centers provide follow-the-sun engineering and support — so work continues across time zones and customers get responses when they need them.
                </p>
              </div>

              {/* Right Column: Image */}
              <div className="lg:col-span-5 relative w-full aspect-[4/3] rounded-[24px] overflow-hidden border border-line shadow-md">
                <Image
                  src={locationsImages.delivery.src}
                  alt={locationsImages.delivery.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>

            </div>
          </Container>
        </Section>

        {/* CTA BAND */}
        <CTABand
          label="PARTNER WITH DHGSOFT"
          headline="Building Value"
          highlightedText="for Tomorrow."
          description="Whether you are modernizing a single production line, connecting enterprise systems to the cloud, or building a secure data foundation — DHGsoft is your engineering partner from concept to commissioning."
          primaryLabel="Start a Conversation →"
          secondaryLabel="Explore Capabilities"
          onPrimaryClick={() => setIsContactOpen(true)}
        />

      </main>

      {/* Footer */}
      <Footer />

      {/* Contact Modal */}
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} showToast={() => {}} />
    </div>
  );
}
