'use client';

import React, { useState, useEffect } from 'react';

const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

interface Service {
  id: number;
  title: string;
  description: string;
  image_url: string;
  grid_span: number;
  category?: string;
}

const DEFAULT_SERVICES: Service[] = [
  {
    id: 1,
    title: "Cloud Transformation",
    description: "Migrate complex legacy systems to high-performance, resilient cloud architectures without downtime.",
    image_url: "https://lh3.googleusercontent.com/aida-public/AB6AXuD2mJyqYuHlU7WuO-p_QBMTrdpqrfvkGZvT4QVcQl0Uiqc0JbsUk0-cjkeapMIE55d65YhnWCxQWdcV1WSALdLCDBzx79c6q0ZspbGjP2BdZyvXeBu1mCd7Lt1XjA0-vOrgXtzzItxLERhqoh0p2wCai5GXK4UJaq9-TpoHTqv35YK3S59ZpKgec7SWTkNbblesZx7DyiKl0NH8omrOC6ht7cMnd_P8D_c1nMIG1hMVZxZfaTyTxQ1mB2YotW5LYOdoA1cEx-K8XUQ",
    grid_span: 8,
    category: "Cloud"
  },
  {
    id: 2,
    title: "Data Analytics",
    description: "Turning raw numbers into tactical assets through advanced modeling.",
    image_url: "https://lh3.googleusercontent.com/aida-public/AB6AXuAkTPzT3ZVeg5Mswz5kkE9fXreUB3GmbRgzOEw-j6suFrM0KteSbnBWQqtimwGs3EjS23LnVkcZw0k2mG5zPxgQ88cwJDfrz4xwvFgivjuK5WAepy2gEbZmNVQLJhf1Nu62p-VzVGlLdGqFwvclPfGkdzvUHJVwUGwH_7wiJfADgy7seVR0faImMbWUiRz4q7H-3ump1fQMIn4-2HhRxw9b3QPR8VtXO8mFZWo4xrVudiaPsx7AbsLbBegbkiOxfqopI3naG5OcL7I",
    grid_span: 4,
    category: "Data"
  },
  {
    id: 3,
    title: "Digital Strategy",
    description: "Holistic consulting for the next decade of digital evolution.",
    image_url: "https://lh3.googleusercontent.com/aida-public/AB6AXuDqZzwMcuiwVaTV9566SYhRPhH8tlwZdaYs37FTwknzPo46JYDhw4cqsj1YaCzStS5KmdRaCLqFSrfdv0fYyM6UyEsBBupQO6XPEZVrcRU5ka_2YkrLdytOzPOdMF414tP0CbpXY7fmKJAdug6U27yNFXawIaEfaTv4nPUZMX_rCUiTO6U0dq-KnN7Y6Y5ga7GCbkn3j7leF_FNJGTqf9r3_YvMGvZGhwT1OfCFdQTEPeJhBmkvu2t9TPltzMqePRDk2YoyQQ1QQAM",
    grid_span: 4,
    category: "Strategy"
  },
  {
    id: 4,
    title: "Unified Connectivity",
    description: "Bridging silos with integrated APIs and cross-platform sync capabilities.",
    image_url: "https://lh3.googleusercontent.com/aida-public/AB6AXuCJtZewUFOSYtNpx2oeozhBKKkaoDKkuHMBZt3UFHzTNZdTSuKMFttgcdkeG7V8FHvyLIjsuNCysotSfRpDlY4hbXDoUTohs1Nk63n2q8uk7j2xLjC8f4K8fHJFj2Ienbd8Pr0r8v284h2mX32CT-hjVLTMmr18pWIjC7ZrtEsgKsWCZICF7X8_RPrqb40bg4v1E4I4OmvwKrguGYU2hZ1lH2eAKxThGxXlqsro7g9U5Rr46H8tfLHt8zltKb94Go7me6IuUUAhsTM",
    grid_span: 8,
    category: "Connectivity"
  }
];

import { ArrowRight } from "lucide-react";

export default function Ecosystem() {
  const [services, setServices] = useState<Service[]>(DEFAULT_SERVICES);
  const [, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_BASE}/api/services`)
      .then(res => {
        if (!res.ok) throw new Error('API Response not ok');
        return res.json();
      })
      .then((data: Service[]) => {
        if (data && data.length > 0) {
          setServices(data);
        }
        setLoading(false);
      })
      .catch(err => {
        console.warn('API error fetching services, using local fallback:', err);
        setLoading(false);
      });
  }, []);

  return (
    <section id="technology-ecosystem" className="py-24 bg-slate-950 text-white relative overflow-hidden border-b border-slate-900">
      {/* Background grids */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] bg-[size:32px_32px] opacity-20 pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="text-xs font-bold text-primary uppercase tracking-wider mb-3 font-sans">
              Operational Architecture
            </div>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight font-headline">
              Technology Infrastructure Ecosystem
            </h2>
            <p className="text-slate-400 mt-4 text-sm lg:text-base leading-relaxed font-sans">
              Unified digital layers built to connect telemetry devices, enterprise platforms, and cloud intelligence seamlessly.
            </p>
          </div>
          <a className="text-xs font-bold text-[#fbc00e] hover:text-[#e0a800] flex items-center gap-1.5 transition-colors group shrink-0 animate-pulse font-sans" href="#services">
            Explore Capabilities
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* 12-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[450px]">
          {services.map((service) => {
            const colSpanClass = service.grid_span === 8 
              ? 'md:col-span-8' 
              : 'md:col-span-4';

            return (
              <div 
                key={service.id}
                className={`${colSpanClass} group relative cursor-pointer overflow-hidden rounded-[24px] border border-slate-900 shadow-lg h-[250px] md:h-auto hover:border-primary/50 transition-all duration-500 hover:-translate-y-1`}
              >
                {/* Background Image */}
                <img 
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
                  alt={service.title}
                  src={service.image_url} 
                />
                
                {/* Dark Vignette Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
                


                {/* Category Tag */}
                {service.category && (
                  <div className="absolute top-6 left-6 z-10">
                    <span className="inline-flex items-center px-3 py-1 bg-white/10 backdrop-blur-md text-[#fbc00e] font-bold text-[10px] uppercase tracking-wider rounded border border-white/25 font-sans">
                      {service.category}
                    </span>
                  </div>
                )}

                {/* Text overlay */}
                <div className="absolute bottom-0 left-0 p-8 text-white z-10">
                  <h3 className="text-lg lg:text-xl font-extrabold mb-2 tracking-tight font-headline group-hover:text-[#fbc00e] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-300 mt-2 max-w-md leading-relaxed opacity-90 font-sans">{service.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
