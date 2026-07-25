"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { 
  Newspaper, 
  Briefcase, 
  Handshake, 
  Plus, 
  Edit2, 
  Trash2, 
  Lock, 
  Unlock, 
  ArrowLeft, 
  Save, 
  RefreshCw, 
  CheckCircle2, 
  X,
  Star,
  FileText
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  getNews, saveNews, PressRelease,
  getJobs, saveJobs, JobPosition,
  getPartners, savePartners, EcosystemPartner 
} from "@/lib/data-store";

export default function AdminDashboardPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  // Tab State
  const [activeTab, setActiveTab] = useState<"news" | "careers" | "partners">("news");

  // Data States
  const [news, setNews] = useState<PressRelease[]>([]);
  const [jobs, setJobs] = useState<JobPosition[]>([]);
  const [partners, setPartners] = useState<EcosystemPartner[]>([]);

  // Action / Form States
  const [editingNews, setEditingNews] = useState<PressRelease | null>(null);
  const [editingJob, setEditingJob] = useState<JobPosition | null>(null);
  const [editingPartner, setEditingPartner] = useState<EcosystemPartner | null>(null);

  // Success Notification banner
  const [toastMessage, setToastMessage] = useState("");

  useEffect(() => {
    if (isAuthenticated) {
      setNews(getNews());
      setJobs(getJobs());
      setPartners(getPartners());
    }
  }, [isAuthenticated]);

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(""), 3000);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "admin123" || password === "admin") {
      setIsAuthenticated(true);
      setLoginError("");
    } else {
      setLoginError("Incorrect administrative password. Use 'admin123'.");
    }
  };

  // ==================== NEWS CRUD ACTIONS ====================
  const handleSaveNews = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingNews) return;

    let updatedNews = [...news];
    if (news.some(item => item.id === editingNews.id)) {
      // Edit existing
      updatedNews = news.map(item => item.id === editingNews.id ? editingNews : item);
    } else {
      // Add new
      updatedNews.push(editingNews);
    }

    // Handle single featured article logic
    if (editingNews.isFeatured) {
      updatedNews = updatedNews.map(item => item.id === editingNews.id ? item : { ...item, isFeatured: false });
    }

    setNews(updatedNews);
    saveNews(updatedNews);
    setEditingNews(null);
    triggerToast("Press release announcements saved successfully!");
    
    // Broadcast live event to listeners
    window.dispatchEvent(new CustomEvent("dhg_news_updated"));
  };

  const handleDeleteNews = (id: string) => {
    if (confirm("Are you sure you want to delete this press release?")) {
      const updated = news.filter(item => item.id !== id);
      setNews(updated);
      saveNews(updated);
      triggerToast("Press release removed.");
      window.dispatchEvent(new CustomEvent("dhg_news_updated"));
    }
  };

  const startAddNews = () => {
    setEditingNews({
      id: "news-" + Date.now(),
      title: "",
      date: new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" }),
      category: "General",
      blurb: "",
      content: "",
      isFeatured: false
    });
  };

  // ==================== CAREERS CRUD ACTIONS ====================
  const handleSaveJob = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingJob) return;

    let updatedJobs = [...jobs];
    if (jobs.some(item => item.id === editingJob.id)) {
      updatedJobs = jobs.map(item => item.id === editingJob.id ? editingJob : item);
    } else {
      updatedJobs.push(editingJob);
    }

    setJobs(updatedJobs);
    saveJobs(updatedJobs);
    setEditingJob(null);
    triggerToast("Job posting successfully updated!");
    window.dispatchEvent(new CustomEvent("dhg_jobs_updated"));
  };

  const handleDeleteJob = (id: string) => {
    if (confirm("Are you sure you want to delete this job positioning?")) {
      const updated = jobs.filter(item => item.id !== id);
      setJobs(updated);
      saveJobs(updated);
      triggerToast("Job opening removed.");
      window.dispatchEvent(new CustomEvent("dhg_jobs_updated"));
    }
  };

  const startAddJob = () => {
    setEditingJob({
      id: "job-" + Date.now(),
      title: "",
      department: "Engineering",
      location: "Ahmedabad, India",
      type: "Full-time",
      blurb: "",
      description: "",
      requirements: ""
    });
  };

  // ==================== PARTNERS CRUD ACTIONS ====================
  const handleSavePartner = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingPartner) return;

    let updatedPartners = [...partners];
    if (partners.some(item => item.id === editingPartner.id)) {
      updatedPartners = partners.map(item => item.id === editingPartner.id ? editingPartner : item);
    } else {
      updatedPartners.push(editingPartner);
    }

    setPartners(updatedPartners);
    savePartners(updatedPartners);
    setEditingPartner(null);
    triggerToast("Ecosystem partner settings updated!");
    window.dispatchEvent(new CustomEvent("dhg_partners_updated"));
  };

  const handleDeletePartner = (id: string) => {
    if (confirm("Are you sure you want to delete this ecosystem partner?")) {
      const updated = partners.filter(item => item.id !== id);
      setPartners(updated);
      savePartners(updated);
      triggerToast("Partner removed.");
      window.dispatchEvent(new CustomEvent("dhg_partners_updated"));
    }
  };

  const startAddPartner = () => {
    setEditingPartner({
      id: "partner-" + Date.now(),
      name: "",
      category: "Automation",
      logoUrl: "",
      capabilityTitle: "",
      description: "",
      websiteUrl: ""
    });
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 antialiased font-sans flex flex-col selection:bg-brand selection:text-white">
      <Header onContactClick={() => {}} />

      <main className="flex-grow pt-24 pb-16 relative">
        <div className="absolute inset-0 bg-tech-grid opacity-10 pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-brand/5 blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-site mx-auto px-gutter md:px-gutter-md">
          
          {/* ============ TOAST NOTIFICATION BANNER ============ */}
          {toastMessage && (
            <div className="fixed top-24 right-6 z-50 bg-emerald-600 text-white px-5 py-3.5 rounded-xl shadow-2xl flex items-center gap-3 animate-fade-in font-semibold text-sm">
              <CheckCircle2 className="w-5 h-5 text-white" />
              <span>{toastMessage}</span>
            </div>
          )}

          {/* ============ 1. LOGIN BLOCK ============ */}
          {!isAuthenticated ? (
            <div className="max-w-md mx-auto py-20 text-center">
              <div className="bg-slate-950/80 border border-slate-800 rounded-3xl p-8 shadow-2xl backdrop-blur-md space-y-6 text-left">
                <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
                  <div className="w-10 h-10 rounded-xl bg-brand/15 text-brand flex items-center justify-center">
                    <Lock className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-lg font-black text-white">Administrative Portal</h2>
                    <span className="text-slate-500 text-xs font-semibold">DHGsoft Web CMS Console</span>
                  </div>
                </div>

                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-xs font-mono font-bold text-slate-400 uppercase">
                      Admin Password
                    </label>
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter 'admin123' to log in..."
                      className="w-full bg-slate-900 border border-slate-800 focus:border-brand rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 outline-none transition-all shadow-inner"
                      required
                    />
                  </div>

                  {loginError && (
                    <p className="text-red-400 text-xs font-semibold">{loginError}</p>
                  )}

                  <button
                    type="submit"
                    className="w-full bg-brand hover:bg-brand-hot text-white font-extrabold text-xs uppercase tracking-wider py-3.5 rounded-xl transition-all shadow-md active:scale-98 cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Unlock className="w-4 h-4" />
                    <span>Authorize Access</span>
                  </button>
                </form>

                <div className="pt-2 border-t border-slate-800/80">
                  <span className="text-[10px] text-slate-600 font-mono italic block text-center">
                    Demo Mode: Use password "admin123" or "admin"
                  </span>
                </div>
              </div>
            </div>
          ) : (
            
            // ============ 2. AUTHORIZED ADMIN PANEL CONSOLE ============
            <div className="space-y-8 text-left">
              
              {/* Header row */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 border border-brand/20 text-brand text-[10px] font-mono font-bold uppercase tracking-wider mb-2">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>System Session Authorized</span>
                  </div>
                  <h1 className="text-3xl font-black text-white tracking-tight">
                    DHGsoft Control Desk
                  </h1>
                </div>

                <div className="flex items-center gap-3">
                  <Link
                    href="/newsroom"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-all text-xs font-semibold"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>View Newsroom</span>
                  </Link>
                  <button
                    onClick={() => setIsAuthenticated(false)}
                    className="px-4 py-2 rounded-xl border border-slate-850 hover:bg-red-950/20 hover:border-red-900 text-slate-400 hover:text-red-400 text-xs font-semibold transition-all cursor-pointer"
                  >
                    Logout
                  </button>
                </div>
              </div>

              {/* Tab Navigation row */}
              <div className="flex border-b border-slate-800">
                <button
                  onClick={() => { setActiveTab("news"); setEditingNews(null); }}
                  className={`flex items-center gap-2 px-6 py-3 text-sm font-extrabold uppercase tracking-wider border-b-2 transition-all ${
                    activeTab === "news" 
                      ? "border-brand text-brand bg-brand/5" 
                      : "border-transparent text-slate-400 hover:text-white"
                  }`}
                >
                  <Newspaper className="w-4 h-4" />
                  <span>News Releases ({news.length})</span>
                </button>
                <button
                  onClick={() => { setActiveTab("careers"); setEditingJob(null); }}
                  className={`flex items-center gap-2 px-6 py-3 text-sm font-extrabold uppercase tracking-wider border-b-2 transition-all ${
                    activeTab === "careers" 
                      ? "border-brand text-brand bg-brand/5" 
                      : "border-transparent text-slate-400 hover:text-white"
                  }`}
                >
                  <Briefcase className="w-4 h-4" />
                  <span>Job Openings ({jobs.length})</span>
                </button>
                <button
                  onClick={() => { setActiveTab("partners"); setEditingPartner(null); }}
                  className={`flex items-center gap-2 px-6 py-3 text-sm font-extrabold uppercase tracking-wider border-b-2 transition-all ${
                    activeTab === "partners" 
                      ? "border-brand text-brand bg-brand/5" 
                      : "border-transparent text-slate-400 hover:text-white"
                  }`}
                >
                  <Handshake className="w-4 h-4" />
                  <span>Partners ({partners.length})</span>
                </button>
              </div>

              {/* ============ TAB CONTENT DESKS ============ */}
              
              {/* TAB 1: NEWS DESK */}
              {activeTab === "news" && (
                <div className="space-y-6">
                  {/* Action row */}
                  {!editingNews && (
                    <div className="flex items-center justify-between bg-slate-950/40 p-4 border border-slate-800 rounded-2xl">
                      <p className="text-xs text-slate-400 font-medium">Manage corporate announcements, press releases, and articles.</p>
                      <button
                        onClick={startAddNews}
                        className="inline-flex items-center gap-1.5 bg-brand hover:bg-brand-hot text-white px-4 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all"
                      >
                        <Plus className="w-4 h-4" />
                        <span>Add Announcement</span>
                      </button>
                    </div>
                  )}

                  {/* Edit Form */}
                  {editingNews ? (
                    <form onSubmit={handleSaveNews} className="bg-slate-950 border border-slate-800 rounded-3xl p-6 space-y-6 max-w-2xl">
                      <div className="flex items-center justify-between border-b border-slate-850 pb-3">
                        <h3 className="text-md font-bold text-white">
                          {news.some(item => item.id === editingNews.id) ? "Edit Announcement" : "Create New Announcement"}
                        </h3>
                        <button type="button" onClick={() => setEditingNews(null)} className="text-slate-500 hover:text-white">
                          <X className="w-5 h-5" />
                        </button>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2 col-span-1">
                          <label className="text-[10px] font-mono font-bold text-slate-400 uppercase">Category</label>
                          <select
                            value={editingNews.category}
                            onChange={(e) => setEditingNews({ ...editingNews, category: e.target.value as any })}
                            className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2.5 text-xs text-white outline-none"
                          >
                            <option value="Cybersecurity">Cybersecurity</option>
                            <option value="Partnerships">Partnerships</option>
                            <option value="Recognition">Recognition</option>
                            <option value="Innovation">Innovation</option>
                            <option value="General">General</option>
                          </select>
                        </div>

                        <div className="space-y-2 col-span-1">
                          <label className="text-[10px] font-mono font-bold text-slate-400 uppercase">Date Stamp</label>
                          <input
                            type="text"
                            value={editingNews.date}
                            onChange={(e) => setEditingNews({ ...editingNews, date: e.target.value })}
                            placeholder="e.g. June 2025"
                            className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2.5 text-xs text-white outline-none"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] font-mono font-bold text-slate-400 uppercase">Article Title</label>
                        <input
                          type="text"
                          value={editingNews.title}
                          onChange={(e) => setEditingNews({ ...editingNews, title: e.target.value })}
                          placeholder="Headline text..."
                          className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2.5 text-xs text-white outline-none"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] font-mono font-bold text-slate-400 uppercase">Short Blurb (Excerpt)</label>
                        <textarea
                          value={editingNews.blurb}
                          onChange={(e) => setEditingNews({ ...editingNews, blurb: e.target.value })}
                          placeholder="A quick summary for feed display..."
                          rows={3}
                          className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2.5 text-xs text-white outline-none resize-none"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] font-mono font-bold text-slate-400 uppercase">Full Content</label>
                        <textarea
                          value={editingNews.content || ""}
                          onChange={(e) => setEditingNews({ ...editingNews, content: e.target.value })}
                          placeholder="Detailed paragraphs (use double linebreaks for separate paragraphs)..."
                          rows={8}
                          className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2.5 text-xs text-white outline-none"
                        />
                      </div>

                      <div className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          id="isFeatured"
                          checked={editingNews.isFeatured || false}
                          onChange={(e) => setEditingNews({ ...editingNews, isFeatured: e.target.checked })}
                          className="w-4 h-4 bg-slate-900 border border-slate-800 rounded outline-none accent-brand"
                        />
                        <label htmlFor="isFeatured" className="text-xs font-semibold text-slate-300 cursor-pointer select-none">
                          Feature this article at the top of the Newsroom
                        </label>
                      </div>

                      <div className="pt-4 border-t border-slate-850 flex items-center justify-end gap-3">
                        <button
                          type="submit"
                          className="inline-flex items-center gap-1.5 bg-brand hover:bg-brand-hot text-white px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all"
                        >
                          <Save className="w-4 h-4" />
                          <span>Save Announcement</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => setEditingNews(null)}
                          className="px-5 py-2.5 border border-slate-800 hover:bg-slate-900 rounded-xl text-xs font-bold uppercase tracking-wider text-slate-400"
                        >
                          Cancel
                        </button>
                      </div>
                    </form>
                  ) : (
                    // Feed list
                    <div className="bg-slate-950/40 border border-slate-800 rounded-3xl overflow-hidden divide-y divide-slate-850">
                      {news.map((item) => (
                        <div key={item.id} className="flex items-center justify-between p-5 hover:bg-slate-950/60 transition-colors">
                          <div className="space-y-1 max-w-xl">
                            <div className="flex items-center gap-2">
                              <span className="px-2 py-0.5 bg-slate-800 text-slate-400 text-[9px] font-mono font-bold rounded">
                                {item.category}
                              </span>
                              <span className="text-[10px] text-slate-600 font-semibold">{item.date}</span>
                              {item.isFeatured && (
                                <span className="inline-flex items-center gap-0.5 text-brand text-[9px] font-mono font-bold">
                                  <Star className="w-3 h-3 fill-current" />
                                  <span>Featured</span>
                                </span>
                              )}
                            </div>
                            <h4 className="text-sm font-bold text-white">{item.title}</h4>
                            <p className="text-xs text-slate-500 line-clamp-1">{item.blurb}</p>
                          </div>

                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => setEditingNews(item)}
                              className="w-9 h-9 rounded-xl border border-slate-800 bg-slate-900 hover:bg-slate-850 flex items-center justify-center text-slate-400 hover:text-white transition-colors cursor-pointer"
                              title="Edit"
                            >
                              <Edit2 className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => handleDeleteNews(item.id)}
                              className="w-9 h-9 rounded-xl border border-slate-800 bg-slate-900 hover:bg-red-950/20 hover:border-red-900 flex items-center justify-center text-slate-400 hover:text-red-400 transition-colors cursor-pointer"
                              title="Delete"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* TAB 2: CAREERS DESK */}
              {activeTab === "careers" && (
                <div className="space-y-6">
                  {/* Action row */}
                  {!editingJob && (
                    <div className="flex items-center justify-between bg-slate-950/40 p-4 border border-slate-800 rounded-2xl">
                      <p className="text-xs text-slate-400 font-medium">Manage current job openings, placement requirements, and location profiles.</p>
                      <button
                        onClick={startAddJob}
                        className="inline-flex items-center gap-1.5 bg-brand hover:bg-brand-hot text-white px-4 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all"
                      >
                        <Plus className="w-4 h-4" />
                        <span>Add Position</span>
                      </button>
                    </div>
                  )}

                  {/* Edit Form */}
                  {editingJob ? (
                    <form onSubmit={handleSaveJob} className="bg-slate-950 border border-slate-800 rounded-3xl p-6 space-y-6 max-w-2xl">
                      <div className="flex items-center justify-between border-b border-slate-850 pb-3">
                        <h3 className="text-md font-bold text-white">
                          {jobs.some(item => item.id === editingJob.id) ? "Edit Position" : "Create New Job Opening"}
                        </h3>
                        <button type="button" onClick={() => setEditingJob(null)} className="text-slate-500 hover:text-white">
                          <X className="w-5 h-5" />
                        </button>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2 col-span-1">
                          <label className="text-[10px] font-mono font-bold text-slate-400 uppercase">Department</label>
                          <select
                            value={editingJob.department}
                            onChange={(e) => setEditingJob({ ...editingJob, department: e.target.value as any })}
                            className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2.5 text-xs text-white outline-none"
                          >
                            <option value="Engineering">Engineering</option>
                            <option value="Architecture">Architecture</option>
                            <option value="Consulting">Consulting</option>
                            <option value="Data & AI">Data & AI</option>
                            <option value="Cybersecurity">Cybersecurity</option>
                            <option value="Delivery">Delivery</option>
                          </select>
                        </div>

                        <div className="space-y-2 col-span-1">
                          <label className="text-[10px] font-mono font-bold text-slate-400 uppercase">Location</label>
                          <input
                            type="text"
                            value={editingJob.location}
                            onChange={(e) => setEditingJob({ ...editingJob, location: e.target.value })}
                            placeholder="e.g. Ahmedabad, India"
                            className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2.5 text-xs text-white outline-none"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2 col-span-1">
                          <label className="text-[10px] font-mono font-bold text-slate-400 uppercase">Employment Type</label>
                          <input
                            type="text"
                            value={editingJob.type}
                            onChange={(e) => setEditingJob({ ...editingJob, type: e.target.value })}
                            placeholder="e.g. Full-time, Hybrid"
                            className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2.5 text-xs text-white outline-none"
                            required
                          />
                        </div>

                        <div className="space-y-2 col-span-1">
                          <label className="text-[10px] font-mono font-bold text-slate-400 uppercase">Role Title</label>
                          <input
                            type="text"
                            value={editingJob.title}
                            onChange={(e) => setEditingJob({ ...editingJob, title: e.target.value })}
                            placeholder="e.g. Senior SCADA Dev"
                            className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2.5 text-xs text-white outline-none"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] font-mono font-bold text-slate-400 uppercase">Brief Blurb</label>
                        <textarea
                          value={editingJob.blurb}
                          onChange={(e) => setEditingJob({ ...editingJob, blurb: e.target.value })}
                          placeholder="A quick summary for feed display..."
                          rows={2}
                          className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2.5 text-xs text-white outline-none resize-none"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] font-mono font-bold text-slate-400 uppercase">Requirements</label>
                        <input
                          type="text"
                          value={editingJob.requirements || ""}
                          onChange={(e) => setEditingJob({ ...editingJob, requirements: e.target.value })}
                          placeholder="Core credentials needed..."
                          className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2.5 text-xs text-white outline-none"
                        />
                      </div>

                      <div className="pt-4 border-t border-slate-850 flex items-center justify-end gap-3">
                        <button
                          type="submit"
                          className="inline-flex items-center gap-1.5 bg-brand hover:bg-brand-hot text-white px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all"
                        >
                          <Save className="w-4 h-4" />
                          <span>Save Position</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => setEditingJob(null)}
                          className="px-5 py-2.5 border border-slate-800 hover:bg-slate-900 rounded-xl text-xs font-bold uppercase tracking-wider text-slate-400"
                        >
                          Cancel
                        </button>
                      </div>
                    </form>
                  ) : (
                    // Jobs list
                    <div className="bg-slate-950/40 border border-slate-800 rounded-3xl overflow-hidden divide-y divide-slate-850">
                      {jobs.map((item) => (
                        <div key={item.id} className="flex items-center justify-between p-5 hover:bg-slate-950/60 transition-colors">
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <span className="px-2 py-0.5 bg-slate-850 text-slate-400 text-[9px] font-mono font-bold rounded">
                                {item.department}
                              </span>
                              <span className="text-[10px] text-slate-500 font-semibold">{item.location}</span>
                            </div>
                            <h4 className="text-sm font-bold text-white">{item.title}</h4>
                            <p className="text-xs text-slate-500">{item.blurb}</p>
                          </div>

                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => setEditingJob(item)}
                              className="w-9 h-9 rounded-xl border border-slate-800 bg-slate-900 hover:bg-slate-850 flex items-center justify-center text-slate-400 hover:text-white transition-colors cursor-pointer"
                            >
                              <Edit2 className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => handleDeleteJob(item.id)}
                              className="w-9 h-9 rounded-xl border border-slate-800 bg-slate-900 hover:bg-red-950/20 hover:border-red-900 flex items-center justify-center text-slate-400 hover:text-red-400 transition-colors cursor-pointer"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* TAB 3: PARTNERS DESK */}
              {activeTab === "partners" && (
                <div className="space-y-6">
                  {/* Action row */}
                  {!editingPartner && (
                    <div className="flex items-center justify-between bg-slate-950/40 p-4 border border-slate-800 rounded-2xl">
                      <p className="text-xs text-slate-400 font-medium">Configure strategic alliances and hardware/software integration ecosystem partners.</p>
                      <button
                        onClick={startAddPartner}
                        className="inline-flex items-center gap-1.5 bg-brand hover:bg-brand-hot text-white px-4 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all"
                      >
                        <Plus className="w-4 h-4" />
                        <span>Add Partner</span>
                      </button>
                    </div>
                  )}

                  {/* Edit Form */}
                  {editingPartner ? (
                    <form onSubmit={handleSavePartner} className="bg-slate-950 border border-slate-800 rounded-3xl p-6 space-y-6 max-w-2xl">
                      <div className="flex items-center justify-between border-b border-slate-850 pb-3">
                        <h3 className="text-md font-bold text-white">
                          {partners.some(item => item.id === editingPartner.id) ? "Edit Partner" : "Register Ecosystem Partner"}
                        </h3>
                        <button type="button" onClick={() => setEditingPartner(null)} className="text-slate-500 hover:text-white">
                          <X className="w-5 h-5" />
                        </button>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2 col-span-1">
                          <label className="text-[10px] font-mono font-bold text-slate-400 uppercase">Category</label>
                          <select
                            value={editingPartner.category}
                            onChange={(e) => setEditingPartner({ ...editingPartner, category: e.target.value as any })}
                            className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2.5 text-xs text-white outline-none"
                          >
                            <option value="Automation">Automation</option>
                            <option value="Cloud">Cloud</option>
                            <option value="Network & Safety">Network & Safety</option>
                            <option value="Hardware">Hardware</option>
                          </select>
                        </div>

                        <div className="space-y-2 col-span-1">
                          <label className="text-[10px] font-mono font-bold text-slate-400 uppercase">Partner Name</label>
                          <input
                            type="text"
                            value={editingPartner.name}
                            onChange={(e) => setEditingPartner({ ...editingPartner, name: e.target.value })}
                            placeholder="e.g. Siemens"
                            className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2.5 text-xs text-white outline-none"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] font-mono font-bold text-slate-400 uppercase">Description</label>
                        <textarea
                          value={editingPartner.description}
                          onChange={(e) => setEditingPartner({ ...editingPartner, description: e.target.value })}
                          placeholder="How this alliance supports our engineering objectives..."
                          rows={3}
                          className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2.5 text-xs text-white outline-none resize-none"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] font-mono font-bold text-slate-400 uppercase">Capability / Domain Title</label>
                        <input
                          type="text"
                          value={editingPartner.capabilityTitle || ""}
                          onChange={(e) => setEditingPartner({ ...editingPartner, capabilityTitle: e.target.value })}
                          placeholder="e.g. Industrial Automation"
                          className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2.5 text-xs text-white outline-none"
                        />
                      </div>

                      {/* Logo File Upload Component */}
                      <div className="space-y-2">
                        <label className="text-[10px] font-mono font-bold text-slate-400 uppercase block">Upload Logo Image File</label>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) {
                              const reader = new FileReader();
                              reader.onloadend = () => {
                                setEditingPartner({
                                  ...editingPartner,
                                  logoUrl: reader.result as string
                                });
                              };
                              reader.readAsDataURL(file);
                            }
                          }}
                          className="block w-full text-xs text-slate-400
                            file:mr-4 file:py-2 file:px-4
                            file:rounded-xl file:border-0
                            file:text-xs file:font-semibold
                            file:bg-brand/10 file:text-brand
                            hover:file:bg-brand/20 cursor-pointer"
                        />
                        {editingPartner.logoUrl && (
                          <div className="mt-2 bg-slate-900/60 border border-slate-800/80 rounded-xl p-3 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <img
                                src={editingPartner.logoUrl}
                                alt="Logo Preview"
                                className="h-10 w-auto object-contain max-h-10 bg-white/5 rounded-md p-1"
                              />
                              <span className="text-[10px] text-slate-500 font-mono truncate max-w-[220px]">
                                {editingPartner.logoUrl.startsWith("data:") ? "Base64 Image Uploaded" : editingPartner.logoUrl}
                              </span>
                            </div>
                            <button
                              type="button"
                              onClick={() => setEditingPartner({ ...editingPartner, logoUrl: "" })}
                              className="text-xs text-red-400 hover:text-red-300 font-bold px-2 py-1 hover:bg-red-500/10 rounded-md transition-colors"
                            >
                              Clear
                            </button>
                          </div>
                        )}
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] font-mono font-bold text-slate-400 uppercase">Website URL</label>
                        <input
                          type="text"
                          value={editingPartner.websiteUrl || ""}
                          onChange={(e) => setEditingPartner({ ...editingPartner, websiteUrl: e.target.value })}
                          placeholder="https://example.com"
                          className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2.5 text-xs text-white outline-none"
                        />
                      </div>

                      <div className="pt-4 border-t border-slate-850 flex items-center justify-end gap-3">
                        <button
                          type="submit"
                          className="inline-flex items-center gap-1.5 bg-brand hover:bg-brand-hot text-white px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all"
                        >
                          <Save className="w-4 h-4" />
                          <span>Save Partner</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => setEditingPartner(null)}
                          className="px-5 py-2.5 border border-slate-800 hover:bg-slate-900 rounded-xl text-xs font-bold uppercase tracking-wider text-slate-400"
                        >
                          Cancel
                        </button>
                      </div>
                    </form>
                  ) : (
                    // Partners list
                    <div className="bg-slate-950/40 border border-slate-800 rounded-3xl overflow-hidden divide-y divide-slate-800">
                      {partners.map((item) => (
                        <div key={item.id} className="flex items-center gap-4 p-4 hover:bg-white/[0.02] transition-colors">
                          {/* Logo thumbnail */}
                          <div className="w-14 h-14 shrink-0 rounded-xl border border-slate-800 bg-slate-900 flex items-center justify-center overflow-hidden">
                            {item.logoUrl ? (
                              <img
                                src={item.logoUrl}
                                alt={item.name}
                                className="w-10 h-10 object-contain"
                              />
                            ) : (
                              <div className="w-8 h-8 rounded-full bg-brand/20 flex items-center justify-center">
                                <span className="text-brand font-black text-xs">{item.name.charAt(0)}</span>
                              </div>
                            )}
                          </div>

                          {/* Info */}
                          <div className="flex-1 min-w-0 space-y-0.5">
                            <div className="flex items-center gap-2 flex-wrap">
                              <span className="px-2 py-0.5 bg-brand/10 text-brand text-[9px] font-mono font-bold rounded-md">
                                {item.category}
                              </span>
                              {item.capabilityTitle && (
                                <span className="text-[10px] text-slate-500 font-mono">{item.capabilityTitle}</span>
                              )}
                            </div>
                            <h4 className="text-sm font-bold text-white truncate">{item.name}</h4>
                            <p className="text-[11px] text-slate-500 truncate">{item.description}</p>
                            {item.websiteUrl && (
                              <a href={item.websiteUrl} target="_blank" rel="noopener noreferrer"
                                className="text-[10px] text-brand/60 hover:text-brand font-mono truncate block max-w-xs transition-colors">
                                {item.websiteUrl}
                              </a>
                            )}
                          </div>

                          {/* Actions */}
                          <div className="flex items-center gap-2 shrink-0">
                            <button
                              onClick={() => setEditingPartner(item)}
                              className="w-9 h-9 rounded-xl border border-slate-800 bg-slate-900 hover:bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white transition-colors cursor-pointer"
                            >
                              <Edit2 className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => handleDeletePartner(item.id)}
                              className="w-9 h-9 rounded-xl border border-slate-800 bg-slate-900 hover:bg-red-950/20 hover:border-red-900 flex items-center justify-center text-slate-400 hover:text-red-400 transition-colors cursor-pointer"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

            </div>
          )}

        </div>
      </main>

      <Footer />
    </div>
  );
}
