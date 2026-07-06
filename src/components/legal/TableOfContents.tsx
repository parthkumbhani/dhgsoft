'use client';

import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu } from 'lucide-react';
import { LegalSection } from '@/lib/legal';

interface TableOfContentsProps {
  sections: LegalSection[];
}

export default function TableOfContents({ sections }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((entry) => entry.isIntersecting);
        if (visibleEntries.length > 0) {
          const sorted = visibleEntries.sort(
            (a, b) => a.boundingClientRect.top - b.boundingClientRect.top
          );
          setActiveId(sorted[0].target.id);
        }
      },
      {
        rootMargin: '-80px 0px -60% 0px',
        threshold: 0,
      }
    );

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach((section) => {
        const el = document.getElementById(section.id);
        if (el) observer.unobserve(el);
      });
    };
  }, [sections]);

  const handleClick = (id: string) => {
    setActiveId(id);
    setIsOpen(false);
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -100; // Offset for sticky header
      const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const activeSection = sections.find((s) => s.id === activeId) || sections[0];

  return (
    <nav className="w-full">
      {/* Mobile Dropdown */}
      <div className="lg:hidden relative w-full mb-6">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between px-4 py-3 bg-white dark:bg-slate-900 border border-line rounded-lg shadow-sm text-sm font-medium text-text-strong transition-all focus:outline-none focus:ring-2 focus:ring-brand/20"
        >
          <span className="flex items-center gap-2">
            <Menu className="h-4 w-4 text-text-muted" />
            {activeSection?.heading || 'Table of Contents'}
          </span>
          <ChevronDown className={`h-4 w-4 text-text-muted transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
        </button>

        {isOpen && (
          <div className="absolute top-full left-0 right-0 z-40 mt-1 bg-white dark:bg-slate-900 border border-line rounded-lg shadow-lg overflow-hidden max-h-[300px] overflow-y-auto">
            <div className="py-1">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => handleClick(section.id)}
                  className={`w-full text-left px-4 py-2 text-sm transition-colors ${
                    activeId === section.id
                      ? 'bg-brand/5 text-brand font-medium border-l-2 border-brand'
                      : 'text-text-muted hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-text-strong'
                  }`}
                >
                  {section.heading}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Desktop Sidebar TOC */}
      <div className="hidden lg:block sticky top-28 space-y-2 max-h-[calc(100vh-160px)] overflow-y-auto pr-4 scrollbar-none">
        <p className="text-[10px] font-bold text-text-muted uppercase tracking-[0.2em] mb-4">
          On this page
        </p>
        <ul className="space-y-1 border-l border-line">
          {sections.map((section) => (
            <li key={section.id}>
              <button
                onClick={() => handleClick(section.id)}
                className={`w-full text-left pl-4 py-1.5 text-[13px] leading-relaxed transition-all relative border-l -ml-[1px] ${
                  activeId === section.id
                    ? 'text-brand font-medium border-brand'
                    : 'text-text-muted hover:text-text-strong border-transparent hover:border-text-muted'
                }`}
              >
                {section.heading}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
