'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Mail } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { ContactCampusRelationsModal } from './ContactCampusRelationsModal';

export default function FinalCta() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Section 
        variant="white" 
        size="hero" 
        className="relative overflow-hidden"
      >
        {/* Custom rich crimson gradient background */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(135deg, #B4123F 0%, #9E1039 50%, #A10E38 100%)',
          }}
        />
        
        {/* Subtle noise / decorative overlay */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            background: 'radial-gradient(circle at 20% 20%, rgba(245,179,1,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(225,29,92,0.3) 0%, transparent 50%)',
          }}
        />
        
        {/* Content — z-10 above the backgrounds */}
        <Container>
          <div className="relative z-10 text-center py-8">
            
            {/* APPLICATIONS OPEN badge — now clearly visible on crimson bg */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 border border-white/25 backdrop-blur-sm">
              <span className="relative flex w-2 h-2">
                <span className="absolute inset-0 rounded-full bg-brand-accent animate-ping opacity-75" />
                <span className="relative rounded-full bg-brand-accent w-2 h-2" />
              </span>
              <span className="text-label-bold uppercase tracking-[0.2em] text-white">
                Applications Open
              </span>
            </div>
            
            {/* H1 with gradient on "Professional Journey?" */}
            <h1 className="heading-hero text-white mt-8">
              Ready to Start Your
              <br />
              <span className="text-gradient-brand">
                Professional Journey?
              </span>
            </h1>
            
            <p className="text-body-md text-white/85 max-w-[640px] mx-auto mt-6">
              Build practical skills, work on innovative technologies, and become part of a team that's transforming industries through digital engineering and intelligent solutions.
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-4 mt-10">
              <Link 
                href="/careers/submit-cv"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-brand font-semibold hover:bg-white/95 hover:-translate-y-0.5 transition-all duration-300"
              >
                Apply Now
                <ArrowRight className="w-4 h-4" />
              </Link>
              
              {/* Contact Campus Relations — opens modal */}
              <button 
                onClick={() => setModalOpen(true)}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/50 text-white font-semibold hover:bg-white/10 hover:border-white transition-all duration-300 cursor-pointer"
              >
                <Mail className="w-4 h-4" />
                Contact Campus Relations
              </button>
            </div>
            
            <div className="text-label-bold uppercase tracking-[0.2em] text-white/60 mt-10">
              From Campus to Career — Building the Next Generation of Industry Leaders.
            </div>
            
          </div>
        </Container>
      </Section>

      <ContactCampusRelationsModal 
        open={modalOpen} 
        onClose={() => setModalOpen(false)} 
      />
    </>
  );
}
