'use client';

import React, { useState } from 'react';
import { Toaster } from 'sonner';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Industries from '@/components/Industries';
import Services from '@/components/Services';
import ServiceDelivery from '@/components/ServiceDelivery';
import Ecosystem from '@/components/Ecosystem';
import CaseStudies from '@/components/CaseStudies';
import dynamic from 'next/dynamic';
const TechEcosystem = dynamic(() => import('@/components/TechEcosystem'), { ssr: false });
import InnovationInstitute from '@/components/InnovationInstitute';
import WhyChooseUs from '@/components/WhyChooseUs';
import Careers from '@/components/Careers';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import ContactModal from '@/components/ContactModal';

export default function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="bg-background text-foreground min-h-screen flex flex-col font-sans antialiased">
      {/* Premium Sticky Navigation Menu */}
      <Header onContactClick={() => setIsContactOpen(true)} />

      {/* Main Sections wrapped inside centered layout */}
      <main className="flex-grow">
        {/* 1. Hero Banner */}
        <Hero
          onContactClick={() => setIsContactOpen(true)}
          onExploreServices={() => {
            const el = document.getElementById('services');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 2. Industries We Serve */}
        <Industries />

        {/* 3. Solutions Portfolio */}
        <Services />

        {/* 4. Service Delivery Portfolio */}
        <ServiceDelivery />

        {/* 5. Technology Ecosystem */}
        <Ecosystem />

        {/* 6. Partners Ecosystem */}
        <TechEcosystem onContactClick={() => setIsContactOpen(true)} />

        {/* 7. DHG Innovation Institute */}
        <InnovationInstitute />

        {/* 9. Why DHGsoft */}
        <WhyChooseUs onContactClick={() => setIsContactOpen(true)} />

        {/* 9.5. Careers / Join Us */}
        <Careers />

        {/* 10. Contact / CTA */}
        <ContactSection />
      </main>

      {/* Corporate Footer */}
      <Footer />

      {/* Overlay Modal for Sales Consultation */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        showToast={() => { }}
      />

      {/* Sonner Global Toast System */}
      <Toaster position="top-right" richColors />
    </div>
  );
}
