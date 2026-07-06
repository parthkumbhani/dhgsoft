// src/app/insights/layout.tsx
"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import { Toaster } from "sonner";

interface InsightsLayoutProps {
  children: React.ReactNode;
}

export default function InsightsLayout({ children }: InsightsLayoutProps) {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    const handleOpenContact = () => setIsContactOpen(true);
    window.addEventListener("open-contact-modal", handleOpenContact);
    return () => {
      window.removeEventListener("open-contact-modal", handleOpenContact);
    };
  }, []);

  return (
    <div className="bg-white text-slate-800 min-h-screen flex flex-col font-sans antialiased selection:bg-[#B4123F] selection:text-white">
      {/* Sticky Header */}
      <Header onContactClick={() => setIsContactOpen(true)} />

      {/* Main Content Area with Route Transition */}
      <main className="flex-grow pt-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={pathname}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <Footer />

      {/* Contact modal overlay */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        showToast={(msg, type) => {}}
      />

      {/* Toast notifications */}
      <Toaster position="top-right" richColors />
    </div>
  );
}
