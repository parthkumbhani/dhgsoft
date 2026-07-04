// src/components/about/Header.tsx
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Search, Menu, X } from "lucide-react";

interface HeaderProps {
  onContactClick: () => void;
}

export default function Header({ onContactClick }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md border-b border-line shadow-sm py-4"
          : "bg-white border-b border-line py-5"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-[120px] flex items-center justify-between">
        
        {/* Logo "dhg Soft" */}
        <Link href="/" className="flex items-center text-xl font-bold tracking-tight">
          <span className="text-brand">dhg</span>
          <span className="text-ink">Soft</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="#capabilities" className="text-sm font-semibold text-text-strong hover:text-brand transition-colors">
            Capabilities
          </Link>
          <Link href="#industries" className="text-sm font-semibold text-text-strong hover:text-brand transition-colors">
            Industries
          </Link>
          <Link href="#insights" className="text-sm font-semibold text-text-strong hover:text-brand transition-colors">
            Insights
          </Link>
          <Link href="/about" className="text-sm font-semibold text-brand transition-colors">
            About
          </Link>
          <Link href="#careers" className="text-sm font-semibold text-text-strong hover:text-brand transition-colors">
            Careers
          </Link>
        </nav>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-4">
          <button className="p-2 text-text-muted hover:text-brand transition-colors" aria-label="Search">
            <Search className="w-5 h-5" />
          </button>
          <button
            onClick={onContactClick}
            className="bg-brand hover:bg-brand-deep text-white font-bold text-sm px-5 py-2.5 rounded-xl transition-all duration-300 shadow-sm active:scale-95"
          >
            Contact Us
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex md:hidden items-center gap-3">
          <button className="p-2 text-text-muted hover:text-brand transition-colors" aria-label="Search">
            <Search className="w-5 h-5" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-text-strong hover:text-brand transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-line shadow-lg px-6 py-6 flex flex-col gap-4">
          <Link
            href="#capabilities"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base font-semibold text-text-strong hover:text-brand transition-colors py-2 border-b border-line"
          >
            Capabilities
          </Link>
          <Link
            href="#industries"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base font-semibold text-text-strong hover:text-brand transition-colors py-2 border-b border-line"
          >
            Industries
          </Link>
          <Link
            href="#insights"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base font-semibold text-text-strong hover:text-brand transition-colors py-2 border-b border-line"
          >
            Insights
          </Link>
          <Link
            href="/about"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base font-semibold text-brand py-2 border-b border-line"
          >
            About
          </Link>
          <Link
            href="#careers"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base font-semibold text-text-strong hover:text-brand transition-colors py-2"
          >
            Careers
          </Link>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onContactClick();
            }}
            className="w-full bg-brand hover:bg-brand-deep text-white font-bold text-center py-3 rounded-xl transition-all duration-300 mt-4 shadow-sm"
          >
            Contact Us
          </button>
        </div>
      )}
    </header>
  );
}
