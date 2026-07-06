'use client';

import React, { useState } from 'react';
import { Toaster } from 'sonner';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactModal from '@/components/ContactModal';

interface LegalLayoutProps {
  children: React.ReactNode;
}

export default function LegalLayout({ children }: LegalLayoutProps) {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="bg-background text-foreground min-h-screen flex flex-col font-sans antialiased">
      {/* Premium Sticky Navigation Menu */}
      <Header onContactClick={() => setIsContactOpen(true)} />

      {/* Main Content Area */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Corporate Footer */}
      <Footer />

      {/* Overlay Modal for Sales Consultation */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        showToast={() => {}}
      />

      {/* Sonner Toast Notification System */}
      <Toaster position="top-right" richColors />
    </div>
  );
}
