"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowUp } from "lucide-react"
import { Container } from "@/components/ui/Container"

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" })

  return (
    <footer className="relative overflow-hidden bg-slate-950 text-slate-400 border-t border-slate-900 pt-8 pb-6">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-60 animate-blob" />
      <div className="absolute -bottom-10 left-10 w-80 h-80 bg-tertiary/10 rounded-full blur-3xl opacity-40 animate-blob animation-delay-4000" />
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] bg-[size:24px_24px] opacity-20" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">

          {/* Left: Logo + Socials */}
          <div className="lg:col-span-6 flex flex-col items-start space-y-4">
            <div className="inline-block mt-0 lg:-ml-6 lg:-mt-4">
              <Image
                src="/DHGsoft Logo.svg"
                alt="DHG Soft Logo"
                width={230}
                height={45}
                style={{ height: 'auto' }}
                className="object-contain brightness-0 invert opacity-95"
              />
            </div>

            <div className="flex items-center gap-3 mt-1">
              <a href="https://www.facebook.com/profile.php?id=61590735029358" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-slate-900/50 border border-slate-850 text-slate-400 hover:text-white hover:bg-[#1877F2] hover:border-[#1877F2] transition-all duration-300 flex items-center justify-center">
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.95z"/></svg>
              </a>
              <a href="https://x.com/DHGsoft" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-slate-900/50 border border-slate-850 text-slate-400 hover:text-black hover:bg-white hover:border-white transition-all duration-300 flex items-center justify-center">
                <svg className="h-4.5 w-4.5 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="https://www.linkedin.com/company/dhgsoft/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-slate-900/50 border border-slate-850 text-slate-400 hover:text-white hover:bg-[#0A66C2] hover:border-[#0A66C2] transition-all duration-300 flex items-center justify-center">
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a href="https://www.instagram.com/dhgsoft/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-slate-900/50 border border-slate-850 text-slate-400 hover:text-white hover:bg-gradient-to-tr hover:from-[#f58529] hover:via-[#dd2a7b] hover:to-[#8134af] transition-all duration-300 flex items-center justify-center">
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
            </div>
          </div>

          {/* Right: Link columns */}
          <div className="lg:col-span-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-4">
              <ul className="space-y-3">
                <li>
                  <Link href="/industries" className="text-sm text-slate-300 hover:text-white transition-all hover:translate-x-1 inline-flex items-center gap-1.5 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary scale-0 group-hover:scale-100 transition-all duration-200" />
                    Industries
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-sm text-slate-300 hover:text-white transition-all hover:translate-x-1 inline-flex items-center gap-1.5 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary scale-0 group-hover:scale-100 transition-all duration-200" />
                    Company
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="text-sm text-slate-300 hover:text-white transition-all hover:translate-x-1 inline-flex items-center gap-1.5 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary scale-0 group-hover:scale-100 transition-all duration-200" />
                    Careers
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <ul className="space-y-3">
                <li>
                  <Link href="/about#global" className="text-sm text-slate-300 hover:text-white transition-all hover:translate-x-1 inline-flex items-center gap-1.5 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary scale-0 group-hover:scale-100 transition-all duration-200" />
                    Locations
                  </Link>
                </li>
                <li>
                  <Link href="/investors" className="text-sm text-slate-300 hover:text-white transition-all hover:translate-x-1 inline-flex items-center gap-1.5 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary scale-0 group-hover:scale-100 transition-all duration-200" />
                    Investors
                  </Link>
                </li>
                <li>
                  <Link href="/newsroom" className="text-sm text-slate-300 hover:text-white transition-all hover:translate-x-1 inline-flex items-center gap-1.5 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary scale-0 group-hover:scale-100 transition-all duration-200" />
                    Newsroom
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <ul className="space-y-3">
                <li>
                  <Link href="/about/partners" className="text-sm text-slate-300 hover:text-white transition-all hover:translate-x-1 inline-flex items-center gap-1.5 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary scale-0 group-hover:scale-100 transition-all duration-200" />
                    Partners
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-4 pt-4 relative">
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary via-secondary to-tertiary opacity-45" />
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-[11px] text-slate-500 font-medium">© 2026 DHGsoft - All Rights Reserved.</div>
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[11px]">
              <Link href="/legal/legal-disclaimer" className="text-slate-500 hover:text-white transition-colors font-medium">Legal Disclaimer</Link>
              <span className="text-slate-800">•</span>
              <Link href="/legal/cookie-policy" className="text-slate-500 hover:text-white transition-colors font-medium">Cookie policy</Link>
              <span className="text-slate-800">•</span>
              <Link href="/legal/legal-notices" className="text-slate-500 hover:text-white transition-colors font-medium">Legal notices</Link>
              <span className="text-slate-800">•</span>
              <Link href="/legal/privacy-policy" className="text-slate-500 hover:text-white transition-colors font-medium">Privacy Policy</Link>
              <span className="text-slate-800">•</span>
              <Link href="/legal/terms-and-conditions" className="text-slate-500 hover:text-white transition-colors font-medium">Terms and Conditions</Link>
            </div>
            <button onClick={scrollToTop} className="w-10 h-10 rounded-xl bg-slate-900/50 border border-slate-850 hover:bg-slate-800/40 hover:border-primary/50 text-slate-400 hover:text-primary flex items-center justify-center transition-all shadow shrink-0">
              <ArrowUp className="h-4.5 w-4.5" />
            </button>
          </div>

          <div className="text-[10px] text-slate-600 leading-relaxed text-center md:text-left mt-4">All other trademarks or trade names used in this website are the property of their respective owners.</div>
        </div>
      </Container>
    </footer>
  )
}
