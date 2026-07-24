"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  ChevronRight, 
  Newspaper, 
  Star, 
  Shield, 
  Handshake, 
  Trophy, 
  Lightbulb, 
  ImageIcon, 
  UserCircle, 
  Palette, 
  Mail, 
  ArrowRight, 
  Calendar, 
  Tag, 
  Search, 
  X, 
  CheckCircle,
  Bookmark,
  Grid,
  List,
  Flame,
  Share2,
  Clock,
  Sparkles,
  Zap,
  Target,
  ShieldCheck,
  Cpu
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import HubSwitcher from "@/components/insights/HubSwitcher";
import { Section } from "@/components/ui/Section";
import { getNews, PressRelease } from "@/lib/data-store";

// Helper to resolve icon by category
function getCategoryIcon(category: string) {
  switch (category) {
    case "Cybersecurity":
      return Shield;
    case "Partnerships":
      return Handshake;
    case "Recognition":
      return Trophy;
    case "Innovation":
      return Lightbulb;
    default:
      return Newspaper;
  }
}

// Helper for category colors
function getCategoryColors(category: string) {
  switch (category) {
    case "Cybersecurity":
      return {
        text: "text-emerald-500",
        bg: "bg-emerald-50",
        border: "border-emerald-100",
        accentLine: "from-emerald-400 to-teal-500",
        glow: "group-hover:shadow-emerald-500/10",
        brandBorder: "via-emerald-400"
      };
    case "Partnerships":
      return {
        text: "text-sky-500",
        bg: "bg-sky-50",
        border: "border-sky-100",
        accentLine: "from-sky-400 to-blue-500",
        glow: "group-hover:shadow-sky-500/10",
        brandBorder: "via-sky-400"
      };
    case "Recognition":
      return {
        text: "text-amber-500",
        bg: "bg-amber-50",
        border: "border-amber-100",
        accentLine: "from-amber-400 to-orange-500",
        glow: "group-hover:shadow-amber-500/10",
        brandBorder: "via-amber-400"
      };
    case "Innovation":
      return {
        text: "text-violet-500",
        bg: "bg-violet-50",
        border: "border-violet-100",
        accentLine: "from-violet-400 to-purple-500",
        glow: "group-hover:shadow-violet-500/10",
        brandBorder: "via-violet-400"
      };
    default:
      return {
        text: "text-brand",
        bg: "bg-brand/5",
        border: "border-brand/10",
        accentLine: "from-brand to-brand-hot",
        glow: "group-hover:shadow-brand/10",
        brandBorder: "via-brand"
      };
  }
}

export default function NewsroomPage() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [news, setNews] = useState<PressRelease[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeArticle, setActiveArticle] = useState<PressRelease | null>(null);
  const [viewMode, setViewMode] = useState<"grid" | "timeline">("grid");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Load news releases dynamically on mount
  useEffect(() => {
    setNews(getNews());
    const handleNewsUpdate = () => {
      setNews(getNews());
    };
    window.addEventListener("dhg_news_updated", handleNewsUpdate);
    return () => {
      window.removeEventListener("dhg_news_updated", handleNewsUpdate);
    };
  }, []);

  const categories = ["All", "Cybersecurity", "Partnerships", "Recognition", "Innovation", "General"];

  // Filter & search implementation
  const filteredNews = news.filter((pr) => {
    const matchesCategory = selectedCategory === "All" || pr.category === selectedCategory;
    const matchesSearch = pr.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          pr.blurb.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          (pr.content && pr.content.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredArticle = news.find((pr) => pr.isFeatured) || news[0];

  const handleShare = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(`${window.location.origin}/newsroom?id=${id}`);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    }
  };

  // Motion variants matching Home page
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 antialiased font-sans flex flex-col selection:bg-brand selection:text-white">
      <Header onContactClick={() => setIsContactOpen(true)} />

      <main className="flex-grow pt-20">
        {/* Sticky Switcher bar removed */}

        {/* ============ 1. BREAKING NEWS SCROLLING TICKER ============ */}
        <div className="bg-slate-950 text-white py-3 px-4 border-b border-white/5 relative z-25 overflow-hidden select-none">
          <div className="max-w-site mx-auto flex items-center gap-4 text-xs">
            <div className="flex items-center gap-1.5 shrink-0 px-2.5 py-1 rounded bg-[#B4123F] text-white font-mono font-bold uppercase tracking-wider animate-pulse">
              <Flame className="w-3.5 h-3.5 fill-current" />
              <span>Live Ticker</span>
            </div>
            
            <div className="w-full overflow-hidden relative">
              <div className="flex gap-16 animate-marquee whitespace-nowrap font-mono text-slate-350">
                {news.map((item, idx) => (
                  <span 
                    key={idx} 
                    onClick={() => setActiveArticle(item)}
                    className="hover:text-brand-hot transition-colors cursor-pointer flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-hot" />
                    <span>{item.title}</span>
                    <span className="text-[10px] text-slate-655">({item.date})</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <Section size="hero" containerSize="wide" className="min-h-[90vh] lg:min-h-screen flex items-center overflow-hidden bg-slate-950 relative border-b border-white/5">
          {/* Work-Related Background Image - High Clarity */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <Image
              src="/images/about/news-hero-new.png"
              alt="DHGsoft industrial engineering background"
              fill
              priority
              sizes="100vw"
              className="object-cover opacity-90 scale-100"
            />
            {/* Minimal subtle vignette for text readability */}
            <div className="absolute inset-0 bg-slate-950/20" />
          </div>

          {/* Abstract Cybernetic Telemetry Background */}
          <div className="absolute inset-0 bg-tech-grid opacity-15 pointer-events-none z-1" />
          <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-[#B4123F]/12 blur-[130px] pointer-events-none z-1" />
          <div className="absolute bottom-0 left-1/3 w-[450px] h-[450px] rounded-full bg-[#fbc00e]/4 blur-[110px] pointer-events-none z-1" />

          {/* Floating CAD Orbits & Crosshair Markings */}
          <div className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center overflow-visible opacity-5">
            <svg className="w-[1200px] h-[600px] overflow-visible" viewBox="0 0 1200 600" xmlns="http://www.w3.org/2000/svg">
              <circle cx="600" cy="300" r="450" fill="none" stroke="#E11D5C" strokeWidth="0.8" strokeDasharray="3,12" />
              <circle cx="600" cy="300" r="300" fill="none" stroke="#64748B" strokeWidth="0.6" strokeDasharray="1,6" />
              <line x1="600" y1="20" x2="600" y2="580" stroke="#94A3B8" strokeWidth="0.4" strokeDasharray="4,8" />
              <line x1="20" y1="300" x2="1180" y2="300" stroke="#94A3B8" strokeWidth="0.4" strokeDasharray="4,8" />
              <g stroke="#94A3B8" strokeWidth="0.5" fill="none">
                <path d="M 150 100 L 170 100 M 160 90 L 160 110" />
                <path d="M 1030 100 L 1050 100 M 1040 90 L 1040 110" />
              </g>
              <g fill="#94A3B8" fontSize="8" fontFamily="monospace" opacity="0.6">
                <text x="180" y="103">GRID_SYS_N: 48.0</text>
                <text x="1000" y="503">SCALE: 1:1</text>
              </g>
            </svg>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10 w-full">
            
            {/* Left Column: Title, Subtitle, Actions */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="lg:col-span-7 flex flex-col items-start text-left"
            >
              {/* Tag Badge */}
              <motion.div
                variants={itemVariants}
                className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-[#E10088] mb-8"
              >
                <Cpu className="h-4 w-4 text-[#E10088]" />
                <span className="text-[11px] font-extrabold uppercase tracking-widest font-sans">
                  Official Communications Desk
                </span>
              </motion.div>

              {/* Main Premium Heading */}
              <motion.h1
                variants={itemVariants}
                className="text-headline-xl text-white tracking-tight font-extrabold leading-tight text-balance"
              >
                Real-Time Corporate Updates &amp;{" "}
                <span className="block sm:inline bg-gradient-to-r from-[#C30072] via-[#E10088] to-[#fbc00e] bg-clip-text text-transparent font-black">
                  Press Releases
                </span>
              </motion.h1>

              {/* Description */}
              <motion.p
                variants={itemVariants}
                className="mt-6 text-body-md text-slate-350 max-w-2xl leading-relaxed font-sans font-medium"
              >
                Explore verified technical milestones, strategic alliance agreements, and compliance declarations from DHGsoft global operations.
              </motion.p>

              {/* CTAs */}
              <motion.div
                variants={itemVariants}
                className="mt-10 flex flex-wrap gap-4 items-center"
              >
                <a
                  href="#feed"
                  className="font-bold rounded-xl bg-gradient-to-r from-primary to-secondary hover:from-primary hover:to-secondary hover:-translate-y-[2px] active:scale-[0.98] text-white px-8 py-4 h-auto shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all duration-300 border-0 flex items-center gap-2 group cursor-pointer"
                >
                  Explore Announcements
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <button
                  onClick={() => setIsContactOpen(true)}
                  className="font-bold border border-white/25 text-white hover:bg-white/10 hover:border-white/40 rounded-xl px-8 py-4 h-auto backdrop-blur-sm transition-all duration-300 hover:-translate-y-[2px] cursor-pointer"
                >
                  Contact Relations
                </button>
              </motion.div>
            </motion.div>

            {/* Right Column: Premium Telemetry Card (Featured release teaser) */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end w-full relative">
              {featuredArticle && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
                  onClick={() => setActiveArticle(featuredArticle)}
                  className="w-full max-w-[440px] rounded-[32px] p-[1.5px] bg-gradient-to-br from-white/15 via-transparent to-white/5 shadow-2xl relative overflow-hidden group cursor-pointer text-left"
                >
                  {/* Glassmorphic content layout */}
                  <div className="bg-slate-950/65 backdrop-blur-xl rounded-[30px] p-6 space-y-6">
                    <div className="flex items-center justify-between border-b border-white/10 pb-4">
                      <div className="flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-brand-hot" />
                        <span className="text-[10px] font-mono font-bold text-white uppercase tracking-wider">Featured release</span>
                      </div>
                      <span className="text-slate-450 text-[10px] font-mono font-semibold">{featuredArticle.date}</span>
                    </div>

                    <div className="space-y-3">
                      <h4 className="text-white font-extrabold text-lg leading-snug group-hover:text-brand-hot transition-colors duration-300">
                        {featuredArticle.title}
                      </h4>
                      <p className="text-slate-400 text-xs leading-relaxed line-clamp-3">
                        {featuredArticle.blurb}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-white/10 flex items-center justify-between text-brand-hot font-bold text-xs uppercase tracking-wider">
                      <span>Read Release</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

          </div>
        </Section>
        <div className="w-full h-px bg-line/60" />

        {/* ============ 3. MAIN WORKSPACE: 2-COLUMN DASHBOARD LAYOUT (High Density, Zero Blank Space) ============ */}
        <section id="feed" className="relative overflow-hidden bg-mesh-glow-light bg-tech-grid py-16 border-b border-line">
          {/* Background Watermark Typography */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 text-[140px] font-black text-slate-100/50 select-none pointer-events-none z-0 font-mono tracking-tighter hidden xl:block">
            NEWS DESK
          </div>

          <div className="max-w-site mx-auto px-gutter md:px-gutter-md w-full relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              
              {/* LEFT COLUMN: Main News Feed & Filters (lg:col-span-8) */}
              <div className="lg:col-span-8 flex flex-col justify-start space-y-6">
                
                {/* Search & Layout Control Toolbar */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white border border-line p-4 rounded-2xl shadow-xs">
                  
                  {/* Category switcher tabs */}
                  <div className="flex flex-wrap gap-1.5">
                    {categories.map((cat) => {
                      const isActive = selectedCategory === cat;
                      return (
                        <button
                          key={cat}
                          onClick={() => setSelectedCategory(cat)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                            isActive 
                              ? "bg-slate-900 text-white shadow-xs" 
                              : "text-slate-500 hover:text-brand bg-slate-50 hover:bg-slate-100"
                          }`}
                        >
                          {cat}
                        </button>
                      );
                    })}
                  </div>

                  {/* Actions Toolbar */}
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search articles..."
                        className="bg-slate-50 border border-line focus:border-slate-800 rounded-lg pl-8 pr-3 py-1.5 text-xs outline-none w-40 focus:w-48 transition-all"
                      />
                      <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400 w-3.5 h-3.5" />
                    </div>

                    <div className="flex border border-line p-0.5 rounded-lg bg-slate-50 shrink-0">
                      <button
                        onClick={() => setViewMode("grid")}
                        className={`p-1 rounded transition-all cursor-pointer ${viewMode === "grid" ? "bg-white text-slate-800 shadow-xs" : "text-slate-400 hover:text-slate-600"}`}
                      >
                        <Grid className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => setViewMode("timeline")}
                        className={`p-1 rounded transition-all cursor-pointer ${viewMode === "timeline" ? "bg-white text-slate-800 shadow-xs" : "text-slate-400 hover:text-slate-600"}`}
                      >
                        <List className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                </div>

                {/* News Feed Output */}
                {filteredNews.length === 0 ? (
                  <div className="bg-white border border-line rounded-[24px] py-16 text-center space-y-3">
                    <Newspaper className="w-10 h-10 text-slate-300 mx-auto" />
                    <h4 className="text-sm font-bold text-slate-800">No Announcements Found</h4>
                    <p className="text-xs text-slate-500 max-w-xs mx-auto">Try adjusting your filters or search keywords.</p>
                  </div>
                ) : (
                  viewMode === "grid" ? (
                    // Grid Layout
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {filteredNews.map((pr) => {
                        const Icon = getCategoryIcon(pr.category);
                        const colors = getCategoryColors(pr.category);
                        return (
                          <div
                            key={pr.id}
                            onClick={() => setActiveArticle(pr)}
                            className="bg-white border border-line rounded-2xl p-5 hover:border-brand hover:shadow-lg transition-all duration-300 group cursor-pointer flex flex-col justify-between"
                          >
                            <div className="space-y-3 text-left">
                              <div className="flex items-center justify-between">
                                <span className={`text-[9px] font-bold uppercase tracking-wider font-mono ${colors.text}`}>
                                  {pr.category}
                                </span>
                                <span className="text-[9px] text-slate-400 font-mono font-semibold">{pr.date}</span>
                              </div>
                              <h4 className="text-sm font-extrabold text-slate-900 group-hover:text-brand transition-colors leading-snug">
                                {pr.title}
                              </h4>
                              <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                                {pr.blurb}
                              </p>
                            </div>
                            <div className="pt-3 border-t border-line/60 mt-4 flex items-center justify-between">
                              <span className={`text-[10px] font-bold uppercase ${colors.text} flex items-center gap-1`}>
                                Read Release <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                              </span>
                              <button 
                                onClick={(e) => handleShare(e, pr.id)}
                                className="text-[10px] font-mono font-bold text-slate-450 hover:text-slate-700 bg-slate-50 hover:bg-slate-100 px-2 py-0.5 rounded transition-colors"
                              >
                                {copiedId === pr.id ? "Copied" : "Share"}
                              </button>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    // Timeline Layout
                    <div className="relative border-l border-slate-200 ml-3 space-y-6 text-left py-2">
                      {filteredNews.map((pr) => {
                        const Icon = getCategoryIcon(pr.category);
                        const colors = getCategoryColors(pr.category);
                        return (
                          <div 
                            key={pr.id} 
                            onClick={() => setActiveArticle(pr)}
                            className="relative pl-6 group cursor-pointer"
                          >
                            <div className={`absolute -left-[13px] top-1.5 w-6 h-6 rounded-full ${colors.bg} ${colors.text} border-2 border-slate-50 flex items-center justify-center shadow-sm`}>
                              <Icon className="w-3 h-3" />
                            </div>
                            <div className="bg-white border border-line rounded-xl p-4 shadow-xs hover:border-brand transition-colors">
                              <div className="flex items-center justify-between mb-1 flex-wrap">
                                <span className="text-[10px] text-slate-400 font-mono font-semibold flex items-center gap-1">
                                  <Calendar className="w-3 h-3" /> {pr.date}
                                </span>
                                <span className={`text-[9px] font-bold uppercase tracking-wider ${colors.text} font-mono`}>
                                  {pr.category}
                                </span>
                              </div>
                              <h4 className="text-xs font-bold text-slate-900 group-hover:text-brand transition-colors">
                                {pr.title}
                              </h4>
                              <p className="text-[11px] text-slate-500 leading-relaxed mt-1">{pr.blurb}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )
                )}

              </div>

              {/* RIGHT COLUMN: Sticky Information Sidebar (lg:col-span-4) */}
              <div className="lg:col-span-4 flex flex-col gap-6 lg:h-fit lg:sticky lg:top-24 text-left">
                
                {/* 1. Compact Featured Card */}
                {featuredArticle && (
                  <div 
                    onClick={() => setActiveArticle(featuredArticle)}
                    className="bg-slate-950 text-white rounded-[24px] p-5 border border-slate-800 hover:border-brand-hot/30 transition-all cursor-pointer group shadow-md"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <span className="bg-[#B4123F] text-white text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md font-mono flex items-center gap-1">
                        <Star className="w-3 h-3 fill-current" /> Featured
                      </span>
                      <span className="text-slate-500 text-[10px] font-mono font-semibold">{featuredArticle.date}</span>
                    </div>
                    <h4 className="text-sm font-extrabold leading-snug group-hover:text-brand-hot transition-colors">
                      {featuredArticle.title}
                    </h4>
                    <p className="text-xs text-slate-400 mt-2 leading-relaxed line-clamp-3">
                      {featuredArticle.blurb}
                    </p>
                    <div className="pt-3 border-t border-white/10 mt-4 flex items-center justify-between text-brand-hot text-[10px] font-bold uppercase tracking-wider">
                      <span>Read Release</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                )}

                {/* 2. Download Center (Media Kit) */}
                <div className="bg-white border border-line rounded-[24px] p-5 shadow-md space-y-4">
                  <span className="text-xs font-mono font-bold text-brand uppercase tracking-wider block border-b border-line pb-2">
                    Media Download Center
                  </span>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between bg-slate-50 border border-line p-3 rounded-xl hover:border-brand/40 transition-colors cursor-pointer group">
                      <div className="flex items-center gap-2.5">
                        <Palette className="w-4 h-4 text-brand shrink-0" />
                        <div className="text-xs">
                          <span className="font-extrabold text-slate-800 block">Brand Assets</span>
                          <span className="text-[10px] text-slate-500 block">Logos &amp; Stylebooks</span>
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
                    </div>

                    <div className="flex items-center justify-between bg-slate-50 border border-line p-3 rounded-xl hover:border-brand/40 transition-colors cursor-pointer group">
                      <div className="flex items-center gap-2.5">
                        <UserCircle className="w-4 h-4 text-sky-500 shrink-0" />
                        <div className="text-xs">
                          <span className="font-extrabold text-slate-800 block">Executive Bios</span>
                          <span className="text-[10px] text-slate-500 block">Leadership Profile Kit</span>
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
                    </div>

                    <div className="flex items-center justify-between bg-slate-50 border border-line p-3 rounded-xl hover:border-brand/40 transition-colors cursor-pointer group">
                      <div className="flex items-center gap-2.5">
                        <ImageIcon className="w-4 h-4 text-emerald-500 shrink-0" />
                        <div className="text-xs">
                          <span className="font-extrabold text-slate-800 block">Photos Library</span>
                          <span className="text-[10px] text-slate-500 block">HQ Control Labs</span>
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </div>

                {/* 3. Media Relations Contact card */}
                <div className="bg-slate-950 text-white rounded-[24px] p-5 border border-slate-800 space-y-4 shadow-lg text-left">
                  <div className="flex items-center gap-2.5">
                    <Mail className="w-5 h-5 text-brand-hot shrink-0" />
                    <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                      Media Inquiry desk
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    For press requests, C-suite interviews, or event schedules, reach out directly:
                  </p>
                  <div className="pt-2">
                    <a
                      href="mailto:media@dhgsoft.com"
                      className="w-full justify-center inline-flex items-center gap-2 bg-[#B4123F] hover:bg-[#E11D5C] text-white font-semibold py-2 rounded-xl transition-colors text-xs cursor-pointer shadow-md"
                    >
                      media@dhgsoft.com
                    </a>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </section>
        <div className="w-full h-px bg-line/60" />

        {/* ============ 4. COMMITMENT STANDARDS ROW (Clean Light Theme) ============ */}
        <section className="relative overflow-hidden bg-mesh-glow-light bg-dot-matrix py-12 border-b border-line">
          <div className="max-w-site mx-auto px-gutter md:px-gutter-md w-full relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
              <div className="bg-white border border-line rounded-2xl p-4 flex items-center gap-3 shadow-xs hover:border-brand/40 transition-colors">
                <CheckCircle className="w-5 h-5 text-brand shrink-0" />
                <span className="text-xs font-bold text-slate-800">ISO-95 Compliance Declarations</span>
              </div>
              <div className="bg-white border border-line rounded-2xl p-4 flex items-center gap-3 shadow-xs hover:border-brand/40 transition-colors">
                <CheckCircle className="w-5 h-5 text-brand shrink-0" />
                <span className="text-xs font-bold text-slate-800">Audited Technology Certifications</span>
              </div>
              <div className="bg-white border border-line rounded-2xl p-4 flex items-center gap-3 shadow-xs hover:border-brand/40 transition-colors">
                <CheckCircle className="w-5 h-5 text-brand shrink-0" />
                <span className="text-xs font-bold text-slate-800">Direct Public Communications Desk</span>
              </div>
            </div>
          </div>
        </section>
        <div className="w-full h-px bg-line/60" />

        {/* ============ 5. CLOSING STATEMENT BANNER (Compact & Focused) ============ */}
        <section className="relative bg-mesh-glow-dark bg-tech-grid text-white overflow-hidden py-16 md:py-20 text-center">
          <div className="relative z-10 max-w-site mx-auto px-gutter md:px-gutter-md w-full">
            <div className="max-w-2xl mx-auto space-y-5">
              <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-brand-hot block">
                Stay Connected
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight leading-tight">
                Engineering Value Globally
              </h2>
              <p className="text-slate-355 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto font-medium">
                Subscribe to our communications channels or schedule a digital infrastructure diagnostic session.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
                <button
                  onClick={() => setIsContactOpen(true)}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-brand font-semibold hover:shadow-lg transition-all cursor-pointer text-xs uppercase tracking-wider"
                >
                  Contact Relations <ArrowRight className="w-4 h-4" />
                </button>
                <Link href="/" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/20 text-white font-semibold hover:bg-white/10 transition-colors text-xs uppercase tracking-wider">
                  Back to Home
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* ============ 6. ARTICLE DETAILS POPUP DRAWER (Slide-Over Animation) ============ */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-end bg-slate-950/60 backdrop-blur-sm transition-all duration-350 animate-fade-in">
          {/* Close trigger overlay background */}
          <div className="absolute inset-0 cursor-default" onClick={() => setActiveArticle(null)} />
          
          {/* Reading Slide Drawer panel */}
          <div className="relative w-full max-w-2xl h-full bg-white shadow-2xl flex flex-col justify-between overflow-hidden z-10 border-l border-line text-left transition-all duration-500 animate-slide-left">
            
            {/* Header row */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-line bg-slate-50">
              <div className="flex items-center gap-2 text-brand font-mono text-[10px] font-extrabold uppercase tracking-wider">
                <Bookmark className="w-3.5 h-3.5" />
                <span>{activeArticle.category} Release</span>
              </div>
              
              <button 
                onClick={() => setActiveArticle(null)}
                className="w-8 h-8 rounded-full hover:bg-slate-200 flex items-center justify-center text-slate-500 hover:text-slate-800 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Article Content scroll area */}
            <div className="flex-grow overflow-y-auto px-8 py-8 space-y-6 scrollbar-thin">
              <div className="flex items-center gap-2 text-slate-400 text-xs font-mono">
                <Calendar className="w-3.5 h-3.5" />
                <span>Published in {activeArticle.date}</span>
                <span>&middot;</span>
                <span>Official Release</span>
              </div>

              <h1 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight leading-tight">
                {activeArticle.title}
              </h1>

              {/* Callout box summary */}
              <div className="bg-slate-50 border-l-4 border-[#B4123F] p-4 rounded-r-xl">
                <p className="text-xs sm:text-sm text-slate-655 leading-relaxed font-semibold">
                  {activeArticle.blurb}
                </p>
              </div>

              {/* Story Description paragraphs */}
              <div className="space-y-4 text-sm text-slate-700 leading-relaxed font-normal">
                {activeArticle.content ? (
                  activeArticle.content.split("\n\n").map((para, idx) => (
                    <p key={idx}>{para}</p>
                  ))
                ) : (
                  <p>DHGsoft has formally announced this press release detailing our operational excellence milestones. Check back for further details regarding client agreements, technical standards certifications, and regional deployment timelines.</p>
                )}
                
                <p>For more detailed technical guidelines or questions, reach out to our communications center at media@dhgsoft.com.</p>
              </div>

              {/* Compliance & Validation checklist */}
              <div className="pt-6 border-t border-line mt-8 space-y-3">
                <h5 className="text-xs font-bold text-slate-800 uppercase tracking-wide">Standard Compliance & Validation</h5>
                <div className="flex items-center gap-2.5 text-xs text-slate-600">
                  <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Authorized by Corporate Communications Dept</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-600">
                  <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Validated by System Engineering Board</span>
                </div>
              </div>
            </div>

            {/* Action footer */}
            <div className="px-6 py-4 border-t border-line bg-slate-50 flex items-center justify-end gap-3">
              <button 
                onClick={() => {
                  setActiveArticle(null);
                  setIsContactOpen(true);
                }}
                className="bg-brand hover:bg-brand-hot text-white font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-xl transition-all shadow-xs cursor-pointer"
              >
                Inquire About This News
              </button>
              <button 
                onClick={() => setActiveArticle(null)}
                className="border border-line hover:bg-slate-200 text-slate-700 font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-xl transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        showToast={() => {}}
      />
    </div>
  );
}
