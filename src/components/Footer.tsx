"use client"

import React, { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowUp } from "lucide-react"
import { Container } from "@/components/ui/Container"

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" })
  const [showAddress, setShowAddress] = useState(false)
  const [activeRegion, setActiveRegion] = useState<'asia' | 'americas'>('asia')

  return (
    <footer className="relative overflow-hidden bg-slate-950 text-slate-400 border-t border-slate-900 pt-8 pb-6">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-60 animate-blob" />
      <div className="absolute -bottom-10 left-10 w-80 h-80 bg-tertiary/10 rounded-full blur-3xl opacity-40 animate-blob animation-delay-4000" />
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] bg-[size:24px_24px] opacity-20" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">

          {/* Left: Logo + Socials */}
          <div className="lg:col-span-6 flex flex-col items-start space-y-4">
            <div className="inline-block lg:-ml-10 lg:-mt-20 mt-0 cursor-default">
              <Image
                src="/DHGsoft Logo.svg"
                alt="DHG Soft Logo"
                width={230}
                height={45}
                style={{ height: 'auto' }}
                className="object-contain brightness-0 invert opacity-95"
              />
            </div>

            <div className="flex items-center gap-3 mt-1 pointer-events-none opacity-50 cursor-not-allowed">
              <div className="w-10 h-10 rounded-xl bg-slate-900/50 border border-slate-850 text-slate-500 flex items-center justify-center">
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.95z"/></svg>
              </div>
              <div className="w-10 h-10 rounded-xl bg-slate-900/50 border border-slate-850 text-slate-500 flex items-center justify-center">
                <svg className="h-4.5 w-4.5 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </div>
              <div className="w-10 h-10 rounded-xl bg-slate-900/50 border border-slate-850 text-slate-400 flex items-center justify-center">
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </div>
              <div className="w-10 h-10 rounded-xl bg-slate-900/50 border border-slate-850 text-slate-500 flex items-center justify-center">
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </div>
              <div className="w-10 h-10 rounded-xl bg-slate-900/50 border border-slate-850 text-slate-500 flex items-center justify-center">
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.163a3.003 3.003 0 00-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.517 0-9.388.508a3.003 3.003 0 00-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 002.11 2.11c1.871.508 9.388.508 9.388.508s7.517 0 9.388-.508a3.003 3.003 0 002.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </div>
            </div>
          </div>

          {/* Right: Location Button */}
          <div className="lg:col-span-6 flex items-center justify-end">

            {/* Location clickable label */}
            <button
              onClick={() => setShowAddress(true)}
              className="group flex items-center gap-2.5 cursor-pointer"
            >
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#8C123B]/20 border border-[#8C123B]/50 flex items-center justify-center group-hover:bg-[#8C123B] transition-all duration-300">
                <svg className="w-4 h-4 text-[#C2185B] group-hover:text-white transition-colors" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </span>
              <span className="text-sm font-semibold text-slate-300 group-hover:text-white transition-colors">Location</span>
            </button>

            {/* Regional Location Popup Modal */}
            {showAddress && (
              <div
                className="fixed inset-0 z-50 flex items-center justify-center p-4"
                style={{ backgroundColor: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(8px)' }}
              >
                <div
                  className="relative rounded-2xl p-7 sm:p-8 max-w-lg w-full shadow-2xl border border-[#8C123B]/60 overflow-hidden"
                  style={{ backgroundColor: '#0A0C12' }}
                >

                  {/* Close button */}
                  <button
                    onClick={() => setShowAddress(false)}
                    className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-800/80 hover:bg-[#8C123B] text-slate-400 hover:text-white flex items-center justify-center transition-all text-lg font-bold z-10"
                  >
                    ×
                  </button>

                  <p className="text-[11px] font-extrabold text-[#C2185B] uppercase tracking-[0.28em] mb-4 font-sans relative z-10">Global Locations</p>

                  {/* Region Selection Pills */}
                  <div className="flex items-center gap-2 mb-6 relative z-10 border-b border-slate-800/80 pb-4">
                    <button
                      onClick={() => setActiveRegion('americas')}
                      className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
                        activeRegion === 'americas'
                          ? 'bg-[#8C123B] text-white border border-[#C2185B]'
                          : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
                      }`}
                    >
                      Americas
                    </button>
                    <button
                      onClick={() => setActiveRegion('asia')}
                      className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
                        activeRegion === 'asia'
                          ? 'bg-[#8C123B] text-white border border-[#C2185B]'
                          : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
                      }`}
                    >
                      Asia Pacific
                    </button>
                  </div>

                  {/* Tab Content */}
                  <div className="space-y-4 relative z-10">
                    {activeRegion === 'asia' ? (
                      /* Asia Pacific Location Card */
                      <div className="bg-slate-900/40 border border-slate-800/90 rounded-xl p-5 space-y-3">
                        <div className="flex items-start gap-3">
                          <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-[#8C123B]/25 border border-[#8C123B]/50 flex items-center justify-center mt-0.5">
                            <svg className="w-4.5 h-4.5 text-[#C2185B]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                          </span>
                          <div>
                            <p className="text-sm font-extrabold text-white">Ahmedabad, Gujarat</p>
                            <p className="text-[10.5px] text-slate-500 font-semibold uppercase tracking-wider mb-2">Asia Pacific Headquarters</p>
                            
                            <p className="text-slate-200 font-semibold text-sm leading-relaxed mb-3">
                              Ahmedabad, Gujarat, India
                            </p>

                            <div className="space-y-1.5 text-xs text-slate-300 font-medium border-t border-slate-800/80 pt-3">
                              <p className="flex items-center gap-2">
                                <span className="text-slate-500 font-semibold">Phone:</span>
                                <a href="tel:+919429419427" className="text-white font-bold hover:text-[#C2185B] transition-colors">+91 94294 19427</a>
                              </p>
                              <p className="flex items-center gap-2">
                                <span className="text-slate-500 font-semibold">Email:</span>
                                <a href="mailto:solutions@dhgsoft.com" className="text-white font-bold hover:text-[#C2185B] transition-colors">solutions@dhgsoft.com</a>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      /* Americas Location Card */
                      <div className="bg-slate-900/40 border border-slate-800/90 rounded-xl p-5 space-y-3">
                        <div className="flex items-start gap-3">
                          <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-[#8C123B]/25 border border-[#8C123B]/50 flex items-center justify-center mt-0.5">
                            <svg className="w-4.5 h-4.5 text-[#C2185B]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                          </span>
                          <div>
                            <p className="text-sm font-extrabold text-white">California, USA</p>
                            <p className="text-[10.5px] text-slate-500 font-semibold uppercase tracking-wider mb-2">Americas Regional Office</p>
                            
                            <p className="text-slate-200 font-semibold text-sm leading-relaxed mb-3">
                              San Jose, California, USA
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-4 pt-4 relative">
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary via-secondary to-tertiary opacity-45" />
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-[11px] text-slate-500 font-medium">© 2026 DHGsoft - All Rights Reserved.</div>
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[11px]">
              <span className="text-slate-500 hover:text-white transition-colors font-medium cursor-pointer">Legal Disclaimer</span>
              <span className="text-slate-800">•</span>
              <span className="text-slate-500 hover:text-white transition-colors font-medium cursor-pointer">Cookie policy</span>
              <span className="text-slate-800">•</span>
              <span className="text-slate-500 hover:text-white transition-colors font-medium cursor-pointer">Legal notices</span>
              <span className="text-slate-800">•</span>
              <span className="text-slate-500 hover:text-white transition-colors font-medium cursor-pointer">Privacy Policy</span>
              <span className="text-slate-800">•</span>
              <span className="text-slate-500 hover:text-white transition-colors font-medium cursor-pointer">Terms and Conditions</span>
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
