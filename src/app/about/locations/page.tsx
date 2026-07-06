// src/app/about/locations/page.tsx
"use client";
import { Section } from "@/components/ui/Section";

import React, { useState } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import { locationsImages } from "@/lib/images/locations";
import {
  MapPin,
  Globe,
  Monitor,
  Clock,
  Workflow,
  Mail,
  Phone
} from "lucide-react";

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

const officeCards = [
  {
    type: "Corporate Office",
    city: "[City, Country]",
    address: "[Street address]",
    phone: "[Phone]",
    email: "[Email]"
  },
  {
    type: "Regional Office",
    city: "[City, Country]",
    address: "[Street address]"
  },
  {
    type: "Regional Office",
    city: "[City, Country]",
    address: "[Street address]"
  },
  {
    type: "Delivery Center",
    city: "[City, Country]",
    address: "[Street address]"
  }
];

export default function LocationsPage() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-800 antialiased font-sans selection:bg-[#B4123F] selection:text-white">
      {/* Sticky Header */}
      <Header onContactClick={() => setIsContactOpen(true)} />

      <main className="relative pt-20">

        {/* 1. Hero Band */}
        <Section variant="ink" containerSize="wide" className="relative min-h-[500px] flex items-center overflow-hidden ">
          <div className="absolute inset-0 z-0">
            <Image
              src={locationsImages.hero.src}
              alt={locationsImages.hero.alt}
              fill
              priority
              className="object-cover object-center opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-transparent" />
          </div>
          <div className="w-full relative z-10 py-16 md:py-20">
            <div className="max-w-3xl text-left flex gap-6">
              <div className="w-[4px] bg-brand rounded-full self-stretch shrink-0" />
              <div className="space-y-4">
                <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-brand-hot font-mono block">
                  GLOBAL PRESENCE
                </span>
                <h1 className="text-3xl sm:text-4xl lg:text-[50px] font-black text-white tracking-tight leading-[1.1] font-sans">
                  Global Reach, Local Delivery
                </h1>
                <p className="text-slate-300 font-medium text-base sm:text-lg leading-relaxed">
                  DHGsoft serves customers through a flexible global delivery model.
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* 2. Delivery Model */}
        <Section variant="mist" containerSize="wide" className=" border-b border-line overflow-hidden relative bg-dot-matrix">
          <div className="w-full relative z-10 space-y-12">
            <div className="text-left space-y-3">
              <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-brand font-mono block">
                DELIVERY MODEL
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-text-strong tracking-tight leading-tight">
                Flexible, global, always on
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {deliveryModels.map((model, idx) => {
                const { title, desc, Icon } = model;
                return (
                  <div
                    key={idx}
                    className="bg-white border border-line rounded-xl p-5 shadow-sm hover:border-brand/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-start text-left space-y-3"
                  >
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-brand/5 text-brand shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="font-extrabold text-text-strong text-base tracking-tight leading-snug">{title}</h4>
                    <p className="text-text-muted text-xs sm:text-sm leading-relaxed">{desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </Section>

        {/* 3. Our Locations */}
        <Section variant="brandTint" containerSize="wide" className=" border-b border-line relative bg-tech-grid bg-dot-matrix">
          <div className="w-full relative z-10 space-y-12">
            <div className="text-left space-y-4">
              <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-brand font-mono block">
                OUR LOCATIONS
              </span>
              <div className="flex flex-wrap gap-3">
                {["Corporate Office", "Regional Offices", "Delivery Centers", "Partner Network"].map((type, idx) => (
                  <span
                    key={idx}
                    className="bg-white/80 border border-line rounded-full px-4 py-1 text-xs font-semibold text-text-strong"
                  >
                    {type}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {officeCards.map((office, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-line rounded-xl p-6 shadow-sm flex flex-col justify-between text-left space-y-4 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="space-y-2">
                    <span className="text-[10px] font-extrabold text-brand uppercase font-mono tracking-wider">{office.type}</span>
                    <h4 className="font-extrabold text-text-strong text-lg">{office.city}</h4>
                    <p className="text-text-muted text-xs sm:text-sm leading-relaxed">{office.address}</p>
                  </div>

                  {(office.phone || office.email) && (
                    <div className="pt-4 border-t border-line space-y-2 text-xs text-text-muted">
                      {office.phone && (
                        <div className="flex items-center gap-2">
                          <Phone className="w-3.5 h-3.5 text-brand" />
                          <span>{office.phone}</span>
                        </div>
                      )}
                      {office.email && (
                        <div className="flex items-center gap-2">
                          <Mail className="w-3.5 h-3.5 text-brand" />
                          <span>{office.email}</span>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Optional World Map Placeholder Visual */}
            <div className="relative w-full h-[250px] md:h-[400px] rounded-xl border border-line overflow-hidden bg-slate-950 flex items-center justify-center select-none shadow-sm">
              <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] bg-[size:24px_24px] opacity-35" />
              <div className="relative z-10 text-center space-y-3 p-6">
                <span className="text-4xl">🌍</span>
                <h4 className="font-extrabold text-white text-lg">Global Delivery Network Map</h4>
                <p className="text-slate-400 text-xs sm:text-sm max-w-lg leading-relaxed">
                  Interactive location markers loading geographic network hubs.
                </p>
                <p className="text-[10px] text-slate-500 italic max-w-md mx-auto">
                  Add real office addresses and coordinates. For an interactive map, integrate a mapping library and place real markers (no fabricated locations).
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* 4. Global Delivery Centers */}
        <Section variant="white" containerSize="wide" className="bg-white border-b border-line overflow-hidden relative bg-tech-grid">
          <div className="w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6 text-left">
              <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-brand font-mono block">
                DELIVERY CENTERS
              </span>
              <p className="text-text-strong font-bold text-xl sm:text-2xl leading-relaxed">
                Our delivery centers provide follow-the-sun engineering and support — so work continues across time zones and customers get responses when they need them.
              </p>
            </div>
            <div className="lg:col-span-5 relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-line shadow-sm">
              <Image
                src={locationsImages.delivery.src}
                alt={locationsImages.delivery.alt}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </Section>

        {/* 5. Get in Touch CTA Band */}
        <Section variant="gradient" containerSize="wide" className="relative overflow-hidden text-center">
          <div className="absolute inset-0 bg-ink/10 pointer-events-none" />
          <div className="w-full relative z-10 space-y-6">
            <span className="text-xs font-extrabold uppercase tracking-[0.3em] text-white/90 font-mono block">
              CONTACT
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-[46px] font-black text-white tracking-tight leading-tight">
              Find the DHGsoft team near you.
            </h2>
            <div className="space-y-1 text-white/80 text-xs sm:text-sm font-semibold tracking-wide font-mono">
              <p>General enquiries: [email] · [phone]</p>
            </div>
            <div className="pt-4">
              <button
                onClick={() => setIsContactOpen(true)}
                className="bg-white hover:bg-slate-100 text-brand font-extrabold text-sm sm:text-base px-8 py-4 rounded-xl transition-all duration-300 shadow-md active:scale-95 cursor-pointer"
              >
                Contact Us
              </button>
            </div>
          </div>
        </Section>

      </main>

      {/* Footer */}
      <Footer />

      {/* Contact Modal */}
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} showToast={(msg, type) => {}} />
    </div>
  );
}
