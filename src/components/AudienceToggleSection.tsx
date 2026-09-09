"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Check,
  ArrowRight,
  X,
  Clock,
  Sparkles,
  ShieldCheck,
  Activity,
  PhoneCall,
  MessageSquare,
  MapPin,
  Calendar,
  Layers,
  FileText,
  CheckCircle2,
} from "lucide-react";

type AudienceTrack = "boutique" | "enterprise";

export interface SystemItem {
  id: string;
  category: string;
  title: string;
  description: string;
  badge: string;
  highlight: string;
  specs: string[];
  demoType:
    | "payroll"
    | "voice"
    | "sms"
    | "scheduler"
    | "dispatch"
    | "document"
    | "kpi"
    | "medical";
}

interface TrackContent {
  tag: string;
  headline: string;
  subheadline: string;
  stats: { label: string; value: string; desc: string }[];
  systems: SystemItem[];
  approaches: {
    title: string;
    subtitle: string;
    description: string;
    forWho: string;
    features: string[];
    isPopular?: boolean;
  }[];
  ctaText: string;
  ctaSub: string;
}

const TRACK_DATA: Record<AudienceTrack, TrackContent> = {
  boutique: {
    tag: "FOR LOCAL BUSINESSES, CLINICS & CONTRACTORS",
    headline: "Stop Losing Revenue to Repetitive Manual Work",
    subheadline:
      "Custom software built for how your business actually runs. Replace lost phone calls, manual spreadsheets, and weekend admin work in 2–4 weeks.",
    stats: [
      {
        value: "90 Sec",
        label: "Avg SMS Response",
        desc: "Instant missed call follow-up before leads call a competitor",
      },
      {
        value: "18+ Hrs",
        label: "Saved Every Week",
        desc: "Eliminates paper timecards, manual re-pricing, and booking chaos",
      },
      {
        value: "25+",
        label: "Systems Shipped",
        desc: "Battle-tested across contractors, gyms, clinics, and retail",
      },
    ],
    systems: [
      {
        id: "SYS-01",
        category: "VOICE AI",
        title: "After-Hours Voice Receptionist",
        description:
          "Picks up every call while you're on a job or after hours. Understands your pricing, answers questions naturally, and books directly on your calendar.",
        badge: "3x Faster Response",
        highlight: "Never lose an emergency estimate again",
        specs: ["24/7 Call Intake", "Calendar Sync", "Custom Pricing Logic"],
        demoType: "voice",
      },
      {
        id: "SYS-02",
        category: "TEXT & FOLLOW-UP",
        title: "Missed Call Text Back",
        description:
          "The instant a call is missed, the caller gets a personalized text. Captures the lead immediately while they're still looking for help.",
        badge: "92% Recovery Rate",
        highlight: "Most customers reply in under 90 seconds",
        specs: ["< 8s Auto SMS", "Prequalification Flow", "CRM Pipeline Sync"],
        demoType: "sms",
      },
      {
        id: "SYS-03",
        category: "SCHEDULING",
        title: "Route-Aware Field Job Scheduler",
        description:
          "Automatically groups jobs by geographic zones and drive time rather than just availability, saving hours of gas and windshield time.",
        badge: "22% Less Drive Time",
        highlight: "Eliminates double bookings across crews",
        specs: ["Cluster Route AI", "Zone Optimization", "Zero Double Booking"],
        demoType: "scheduler",
      },
      {
        id: "SYS-04",
        category: "OPERATIONS",
        title: "Digital Timecards & Payroll Sync",
        description:
          "Replaced paper timecards for seasonal crews. Staff clock in via SMS or simple web link; payroll calculations generate automatically.",
        badge: "18 hrs saved/season",
        highlight: "Zero paper forms to transcribe on Mondays",
        specs: ["Geofence GPS Clock-In", "Plaid Bank Ledger", "One-Click Payroll"],
        demoType: "payroll",
      },
    ],
    approaches: [
      {
        title: "Done With You (DWY)",
        subtitle: "Collaborative Build",
        description:
          "We build your core automation, train you to manage it easily, and provide 30 days of direct support. You own everything.",
        forWho: "Owners who want complete control without learning code",
        features: [
          "Workflow audit & blueprint",
          "First 2 custom automations built",
          "Live 1-on-1 team training",
          "30 days direct support with builder",
        ],
        isPopular: true,
      },
      {
        title: "Done For You (DFY)",
        subtitle: "Hands-Off Managed Studio",
        description:
          "We build, host, and maintain your systems. You get your hours back and never have to open the hood.",
        forWho: "Busy business owners whose time is too valuable for software upkeep",
        features: [
          "Full custom build & integration",
          "Continuous uptime monitoring",
          "Unlimited minor adjustments",
          "Direct phone & text line to Bryce",
        ],
      },
    ],
    ctaText: "Book a Free 30-Min Coffee Chat",
    ctaSub: "We map where your hours are leaking and show what we'd automate first.",
  },
  enterprise: {
    tag: "FOR MID-TO-LARGE TEAMS & HIGH CONCURRENCY",
    headline: "Mission-Critical AI Agents & Scalable Infrastructure",
    subheadline:
      "Bridge complex ERPs, legacy CRMs, and compliance-heavy workflows with custom deterministic multi-agent architectures. Zero rigid vendor lock-in.",
    stats: [
      {
        value: "99.9%",
        label: "Uptime & SLA",
        desc: "Dedicated monitoring & named lead engineer",
      },
      {
        value: "0 Retyping",
        label: "Document Extraction",
        desc: "Automated OCR & parsing across complex PDFs/Invoices",
      },
      {
        value: "SOC2/HIPAA",
        label: "Compliant Pipelines",
        desc: "Air-gapped sensitive data handling & audit logs",
      },
    ],
    systems: [
      {
        id: "ENT-01",
        category: "MULTI-AGENT ORCHESTRATION",
        title: "Omnichannel Autonomous Dispatch",
        description:
          "High-concurrency voice and text agent fleet that triages, qualifies, and routes tickets directly into your internal ERP or custom database.",
        badge: "Real-time Sync",
        highlight: "Multi-system routing without human bottlenecks",
        specs: ["100+ Concurrency", "ERP/CRM Two-Way Bridge", "SLA Guardrails"],
        demoType: "dispatch",
      },
      {
        id: "ENT-02",
        category: "INTELLIGENT DOCUMENT PIPELINES",
        title: "Automated Document Intake & Extraction",
        description:
          "Extracts 50+ structured fields from invoices, medical records, and contracts overnight with automated validation and compliance seals.",
        badge: "100% Audit-Ready",
        highlight: "Eliminates weeks of manual data entry",
        specs: ["99.8% OCR Accuracy", "50+ Field Schema", "HIPAA/SOC2 Compliant"],
        demoType: "document",
      },
      {
        id: "ENT-03",
        category: "DATA & ANALYTICS",
        title: "Real-Time Executive KPI Lakehouse",
        description:
          "Consolidates disparate data silos across branches, displaying live revenue attribution, pipeline health, and margin anomalies.",
        badge: "Full-Funnel View",
        highlight: "Single source of truth for leadership",
        specs: ["Zero-Latency Sync", "Margin Leak Alerts", "Multi-Branch Lakehouse"],
        demoType: "kpi",
      },
      {
        id: "ENT-04",
        category: "VOICE AI AT SCALE",
        title: "Bilingual Medical & Dental Intake",
        description:
          "HIPAA-conscious voice intake agent with real-time Spanish/English switching, insurance verification, and calendar lock.",
        badge: "0 Hold Time",
        highlight: "Handles 100+ concurrent calls seamlessly",
        specs: ["Real-Time EN/ES Switch", "Insurance Eligibility", "EHR/EMR Integration"],
        demoType: "medical",
      },
    ],
    approaches: [
      {
        title: "Managed Studio (DFY)",
        subtitle: "Dedicated Engineering Fleet",
        description:
          "We design, build, deploy, and continuously monitor your custom AI infrastructure. You get direct access to the builder with guaranteed SLAs.",
        forWho: "Enterprises needing turnkey speed without headcount overhead",
        features: [
          "Bespoke multi-agent system design",
          "Dedicated named lead engineer",
          "24/7 uptime & latency monitoring",
          "Continuous updates & model tuning",
        ],
        isPopular: true,
      },
      {
        title: "Collaborative Architecture (DWY)",
        subtitle: "Co-Development & Enablement",
        description:
          "We build the core infrastructure alongside your internal tech team, providing documentation, blueprints, and transfer of ownership.",
        forWho: "Organizations with in-house developers wanting accelerated delivery",
        features: [
          "Full codebase & architecture handover",
          "Security & compliance audit review",
          "Internal team training & workshops",
          "60 days dedicated co-pilot support",
        ],
      },
    ],
    ctaText: "Schedule an Enterprise Architecture Review",
    ctaSub: "Direct technical consultation with our engineering lead — no sales decks.",
  },
};

export default function AudienceToggleSection() {
  const [activeTrack, setActiveTrack] = useState<AudienceTrack>("boutique");
  const [selectedSystem, setSelectedSystem] = useState<SystemItem | null>(null);

  const content = TRACK_DATA[activeTrack];

  return (
    <section className="relative w-full bg-[#FAF8F5] text-black py-20 sm:py-28 px-5 sm:px-8 md:px-10 border-t border-black/10">
      <div className="max-w-7xl mx-auto">
        {/* =========================================================================
            1. TOP TOGGLE PILL BAR
            ========================================================================= */}
        <div className="flex flex-col items-center justify-center text-center mb-12 sm:mb-16 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/5 border border-black/10 text-[12px] sm:text-[13px] font-mono uppercase tracking-widest text-black/70">
            <span>Tailored Solutions</span>
            <span>·</span>
            <span>Select Your Track</span>
          </div>

          <h2
            className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-black max-w-3xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Software Built For{" "}
            <span className="relative inline-block mx-1 px-3.5 py-0.5 rounded-xl bg-[#65B5F5] text-black -rotate-1 font-extrabold shadow-sm border border-black/10">
              Your Scale
            </span>
          </h2>

          {/* Interactive Segmented Pill Switch */}
          <div className="relative inline-flex p-1.5 rounded-full bg-black/5 border border-black/15 shadow-inner">
            {/* Boutique Button */}
            <button
              type="button"
              onClick={() => setActiveTrack("boutique")}
              className={`relative z-10 px-6 sm:px-8 py-3 rounded-full text-[14px] sm:text-[16px] font-medium transition-colors duration-200 cursor-pointer ${
                activeTrack === "boutique"
                  ? "text-white"
                  : "text-black/70 hover:text-black"
              }`}
            >
              {activeTrack === "boutique" && (
                <motion.div
                  layoutId="activeTrackIndicator"
                  className="absolute inset-0 rounded-full bg-black shadow-md"
                  transition={{ type: "spring", stiffness: 450, damping: 35 }}
                />
              )}
              <span className="relative z-10 tracking-tight font-semibold">
                Boutique & Small Business
              </span>
            </button>

            {/* Enterprise Button */}
            <button
              type="button"
              onClick={() => setActiveTrack("enterprise")}
              className={`relative z-10 px-6 sm:px-8 py-3 rounded-full text-[14px] sm:text-[16px] transition-colors duration-200 cursor-pointer ${
                activeTrack === "enterprise"
                  ? "text-white"
                  : "text-black/70 hover:text-black"
              }`}
            >
              {activeTrack === "enterprise" && (
                <motion.div
                  layoutId="activeTrackIndicator"
                  className="absolute inset-0 rounded-full bg-black shadow-md"
                  transition={{ type: "spring", stiffness: 450, damping: 35 }}
                />
              )}
              <span className="relative z-10 tracking-tight font-semibold">
                Enterprise & Multi-Branch
              </span>
            </button>
          </div>
        </div>

        {/* =========================================================================
            2. DYNAMIC TRACK CONTENT (ANIMATED SWITCH)
            ========================================================================= */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTrack}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="space-y-16 sm:space-y-20"
          >
            {/* Track Header Banner (Glassmorphic 3D Card) */}
            <div className="bg-white/75 backdrop-blur-2xl border border-white/80 rounded-3xl p-8 sm:p-12 shadow-[0_15px_40px_rgba(0,0,0,0.04)] ring-1 ring-black/[0.05] relative overflow-hidden transition-all duration-300">
              <div className="absolute -top-12 -right-12 w-96 h-96 bg-[#65B5F5]/15 rounded-full blur-3xl pointer-events-none" />
              <div className="relative z-10 max-w-3xl space-y-4">
                <span className="inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-wider text-black/70 uppercase">
                  <span className="w-2 h-2 rounded-full bg-[#65B5F5]" />
                  {content.tag}
                </span>
                <h3
                  className="text-2xl sm:text-4xl font-bold tracking-tight text-black"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {content.headline}
                </h3>
                <p className="text-base sm:text-lg text-black/75 leading-relaxed">
                  {content.subheadline}
                </p>
              </div>

              {/* Quick Metrics Bar */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 pt-8 border-t border-black/10">
                {content.stats.map((stat, i) => (
                  <div key={i} className="space-y-1">
                    <div
                      className="text-3xl sm:text-4xl font-extrabold text-black tracking-tight"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {stat.value}
                    </div>
                    <div className="text-sm font-semibold text-black uppercase tracking-wide">
                      {stat.label}
                    </div>
                    <div className="text-xs text-black/65 font-normal">
                      {stat.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* =========================================================================
                SYSTEMS WE DEPLOY FOR YOU (REDESIGNED LIGHT & DARK COMBINATION GRID)
                ========================================================================= */}
            <div className="space-y-8">
              {/* Section Header */}
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div className="space-y-1">
                  <span className="text-xs font-mono uppercase tracking-widest text-black/60 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#65B5F5]" />
                    Pre-Built & Tailored Architectures
                  </span>
                  <h4
                    className="text-2xl sm:text-4xl font-bold text-black tracking-tight"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    Systems We Deploy For You
                  </h4>
                </div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/5 border border-black/10 text-xs sm:text-sm font-mono text-black/80 shadow-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  {activeTrack === "enterprise"
                    ? "Custom Sizing & API Integration"
                    : "Ready in 2 to 4 weeks"}
                </div>
              </div>

              {/* 2x2 High-Impact Duo-Tone Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {content.systems.map((sys) => (
                  <div
                    key={sys.id}
                    className="relative bg-[#0D1117] text-white border border-white/10 rounded-3xl p-7 sm:p-9 flex flex-col justify-between shadow-[0_12px_36px_rgba(0,0,0,0.14)] hover:shadow-[0_24px_50px_rgba(101,181,245,0.18)] hover:border-[#65B5F5]/60 hover:-translate-y-1.5 transition-all duration-300 group overflow-hidden"
                  >
                    {/* Top-right ambient brand glow */}
                    <div className="absolute -top-16 -right-16 w-44 h-44 bg-[#65B5F5]/12 rounded-full blur-2xl group-hover:bg-[#65B5F5]/25 transition-all duration-300 pointer-events-none" />
                    <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none" />

                    <div className="relative z-10 space-y-5">
                      {/* Top Meta Bar */}
                      <div className="flex justify-between items-start gap-2">
                        <div className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#65B5F5] shadow-[0_0_8px_#65B5F5]" />
                          <span className="text-[11px] font-mono tracking-wider text-[#65B5F5] uppercase font-semibold">
                            {sys.category} · {sys.id}
                          </span>
                        </div>
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-[12px] font-mono font-bold bg-[#65B5F5]/15 text-[#65B5F5] border border-[#65B5F5]/30 shadow-sm">
                          {sys.badge}
                        </span>
                      </div>

                      {/* System Headline */}
                      <h5
                        className="text-2xl sm:text-[26px] font-bold text-white group-hover:text-[#65B5F5] transition-colors duration-200 tracking-tight leading-snug"
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        {sys.title}
                      </h5>

                      {/* System Description */}
                      <p className="text-sm sm:text-[15px] text-zinc-300 leading-relaxed font-normal">
                        {sys.description}
                      </p>

                      {/* Micro Spec Pills (Light & Dark Subtle Badges) */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {sys.specs.map((spec) => (
                          <span
                            key={spec}
                            className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-white/5 border border-white/10 text-zinc-300 group-hover:border-white/20 transition-colors"
                          >
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Footer Row with Verified Outcome and Interactive Demo trigger */}
                    <div className="relative z-10 mt-7 pt-5 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                      <span className="text-emerald-400 font-medium font-mono flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{sys.highlight}</span>
                      </span>

                      <button
                        type="button"
                        onClick={() => setSelectedSystem(sys)}
                        className="inline-flex items-center justify-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-full bg-white/10 hover:bg-[#65B5F5] text-white hover:text-black border border-white/15 hover:border-[#65B5F5] transition-all duration-200 cursor-pointer group/btn shadow-xs"
                      >
                        <span>Interactive Demo</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Delivery Models (DWY & DFY Tiers) */}
            <div className="space-y-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-black/60 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#65B5F5]" />
                  How We Work Together
                </span>
                <h4
                  className="text-2xl sm:text-3xl font-bold text-black"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Delivery Models
                </h4>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {content.approaches.map((app, idx) => (
                  <div
                    key={idx}
                    className={`rounded-3xl p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 ${
                      app.isPopular
                        ? "bg-[#0D1117] backdrop-blur-xl text-white border border-white/15 shadow-[0_20px_45px_rgba(0,0,0,0.15)]"
                        : "bg-white/80 backdrop-blur-xl text-black border border-white/90 shadow-[0_10px_30px_rgba(0,0,0,0.03)] ring-1 ring-black/[0.05] hover:bg-white hover:shadow-[0_25px_50px_rgba(0,0,0,0.08)]"
                    }`}
                  >
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span
                          className={`text-xs font-mono uppercase tracking-wider ${
                            app.isPopular ? "text-[#65B5F5]" : "text-black/60"
                          }`}
                        >
                          {app.subtitle}
                        </span>
                        {app.isPopular && (
                          <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-[#65B5F5] text-black font-bold">
                            RECOMMENDED
                          </span>
                        )}
                      </div>

                      <h5
                        className="text-2xl sm:text-3xl font-bold tracking-tight"
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        {app.title}
                      </h5>

                      <p
                        className={`text-sm sm:text-base leading-relaxed ${
                          app.isPopular ? "text-white/80" : "text-black/70"
                        }`}
                      >
                        {app.description}
                      </p>

                      <div
                        className={`text-xs font-mono py-2 px-3 rounded-lg ${
                          app.isPopular
                            ? "bg-white/10 text-white/90"
                            : "bg-black/5 text-black/75"
                        }`}
                      >
                        FOR: {app.forWho}
                      </div>

                      <ul className="space-y-2.5 pt-4">
                        {app.features.map((feat, fIdx) => (
                          <li
                            key={fIdx}
                            className="flex items-center gap-2.5 text-sm"
                          >
                            <span
                              className={`text-xs ${
                                app.isPopular
                                  ? "text-[#65B5F5]"
                                  : "text-black"
                              }`}
                            >
                              ✓
                            </span>
                            <span
                              className={
                                app.isPopular
                                  ? "text-white/90"
                                  : "text-black/80"
                              }
                            >
                              {feat}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-8 pt-6 border-t border-white/10">
                      <a
                        href="#contact"
                        className={`inline-flex items-center justify-center w-full py-3.5 px-6 rounded-full font-medium text-sm transition-all duration-200 cursor-pointer ${
                          app.isPopular
                            ? "bg-[#65B5F5] text-black hover:bg-white hover:text-black font-semibold shadow-sm"
                            : "bg-black text-white hover:bg-black/80 shadow-sm"
                        }`}
                      >
                        {content.ctaText}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Callout */}
            <div className="text-center pt-6 space-y-2">
              <p className="text-xs sm:text-sm font-mono text-black/60">
                {content.ctaSub}
              </p>
              <div className="text-sm font-medium text-black">
                Or call directly:{" "}
                <a
                  href="tel:5084987168"
                  className="underline underline-offset-4 text-black hover:text-[#65B5F5] font-semibold"
                >
                  (508) 498-7168
                </a>{" "}
                — Bryce Meizen, Founder
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* =========================================================================
          INTERACTIVE SYSTEM LIVE DEMO MODAL (WITH TIMECARD/PAYROLL WIDGET)
          ========================================================================= */}
      <AnimatePresence>
        {selectedSystem && (
          <SystemDemoModal
            system={selectedSystem}
            onClose={() => setSelectedSystem(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

// -----------------------------------------------------------------------------
// Interactive System Live Demo Modal Component
// -----------------------------------------------------------------------------
function SystemDemoModal({
  system,
  onClose,
}: {
  system: SystemItem;
  onClose: () => void;
}) {
  // ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="relative bg-[#0B1019] text-white border border-white/15 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-8 space-y-6 ring-1 ring-white/10"
      >
        {/* Modal Header */}
        <div className="flex items-start justify-between gap-4 pb-4 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-[#65B5F5] shadow-[0_0_8px_#65B5F5]" />
              <span className="text-[11px] font-mono tracking-wider text-[#65B5F5] uppercase font-bold">
                {system.category} · {system.id}
              </span>
              <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-[#65B5F5]/15 text-[#65B5F5] border border-[#65B5F5]/30">
                {system.badge}
              </span>
            </div>
            <h3
              className="text-2xl sm:text-3xl font-bold tracking-tight text-white"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {system.title}
            </h3>
            <p className="text-xs sm:text-sm text-zinc-300 mt-1">
              {system.description}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white/80 hover:text-white transition-colors cursor-pointer shrink-0"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Dynamic Demo Visualizer */}
        <div className="py-2">
          {system.demoType === "payroll" ? (
            <PayrollTimecardWidget />
          ) : system.demoType === "voice" ? (
            <VoiceReceptionistWidget />
          ) : system.demoType === "sms" ? (
            <MissedCallSmsWidget />
          ) : system.demoType === "scheduler" ? (
            <RouteSchedulerWidget />
          ) : (
            <EnterprisePipelineWidget system={system} />
          )}
        </div>

        {/* Modal Footer CTA */}
        <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="text-xs font-mono text-zinc-400">
            ✓ Verified Jidoka Architecture · Ready to deploy
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-full text-xs font-semibold text-zinc-300 hover:text-white transition-colors"
            >
              Close
            </button>
            <a
              href="#contact"
              onClick={onClose}
              className="px-5 py-2.5 rounded-full text-xs font-bold bg-[#65B5F5] text-black hover:bg-white hover:text-black transition-all duration-200 shadow-sm inline-flex items-center gap-1.5"
            >
              <span>Deploy This System</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

// -----------------------------------------------------------------------------
// Interactive Widget 1: Digital Timecards & Payroll Sync (From Client Screenshot)
// -----------------------------------------------------------------------------
function PayrollTimecardWidget() {
  const [seconds, setSeconds] = useState(25);
  const [approved, setApproved] = useState(false);

  // Live ticking timer simulation
  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => (prev >= 59 ? 0 : prev + 1));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-[#09111C] border border-[#1C2C3E] rounded-2xl p-5 sm:p-6 space-y-4 shadow-inner">
      {/* 1. Timetrack Clock Bar */}
      <div className="bg-[#0D1826] border border-[#1F334A] rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <div className="text-[10px] font-mono tracking-wider text-zinc-400 uppercase">
            TIMETRACK · ON THE CLOCK
          </div>
          <div className="text-3xl sm:text-4xl font-mono font-black text-white tracking-wider">
            03:42:{seconds < 10 ? `0${seconds}` : seconds}
          </div>
          <div className="text-xs text-zinc-400 font-mono mt-0.5">
            Maria R. · Job #118 · Elm St. re-roof
          </div>
        </div>
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono self-start sm:self-center">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>On site · 42 m from geofence</span>
        </div>
      </div>

      {/* 2. Middle Live Board & Ledger Feed Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Left: Live Board */}
        <div className="bg-[#0D1826] border border-[#1F334A] rounded-xl p-4 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400">
              LIVE BOARD
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/10 text-zinc-300">
              6 clocked in
            </span>
          </div>

          <div className="space-y-2">
            {/* Crew Member 1 */}
            <div className="flex items-center justify-between p-2 rounded-lg bg-white/5 border border-white/5">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-teal-500/20 text-teal-300 font-mono text-xs flex items-center justify-center font-bold">
                  MR
                </div>
                <div>
                  <div className="text-xs font-bold text-white leading-none">
                    Maria R.
                  </div>
                  <div className="text-[10px] text-zinc-400">Elm St. re-roof</div>
                </div>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                On site
              </span>
            </div>

            {/* Crew Member 2 */}
            <div className="flex items-center justify-between p-2 rounded-lg bg-white/5 border border-white/5">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-amber-500/20 text-amber-300 font-mono text-xs flex items-center justify-center font-bold">
                  DK
                </div>
                <div>
                  <div className="text-xs font-bold text-white leading-none">
                    Dev K.
                  </div>
                  <div className="text-[10px] text-zinc-400">→ Job #121</div>
                </div>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/15 text-amber-400 border border-amber-500/30">
                Travel
              </span>
            </div>

            {/* Crew Member 3 */}
            <div className="flex items-center justify-between p-2 rounded-lg bg-white/5 border border-white/5">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-slate-500/20 text-slate-300 font-mono text-xs flex items-center justify-center font-bold">
                  JT
                </div>
                <div>
                  <div className="text-xs font-bold text-white leading-none">
                    Jess T.
                  </div>
                  <div className="text-[10px] text-zinc-400">Shop · loading</div>
                </div>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-500/15 text-zinc-400 border border-zinc-500/30">
                Shop
              </span>
            </div>
          </div>
        </div>

        {/* Right: Ledger Bank Feed (Clean White Card as in Client Screenshot!) */}
        <div className="bg-white text-black rounded-xl p-4 space-y-3 shadow-md flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-mono uppercase tracking-wider text-black/60 font-bold">
              LEDGER · BANK FEED
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-700 font-semibold border border-emerald-500/30">
              Plaid · connected
            </span>
          </div>

          <div className="space-y-2 text-xs">
            {/* Transaction 1 */}
            <div className="flex items-center justify-between pb-1.5 border-b border-black/5">
              <div>
                <div className="font-bold text-black text-[11px]">
                  Home Depot #2214
                </div>
                <div className="text-[10px] text-black/50">
                  Materials · Job #118
                </div>
              </div>
              <span className="font-mono font-bold text-rose-600">
                -$412.80
              </span>
            </div>

            {/* Transaction 2 */}
            <div className="flex items-center justify-between pb-1.5 border-b border-black/5">
              <div>
                <div className="font-bold text-black text-[11px]">
                  Invoice #1047 paid
                </div>
                <div className="text-[10px] text-black/50">
                  Accounts receivable
                </div>
              </div>
              <span className="font-mono font-bold text-emerald-600">
                +$3,250.00
              </span>
            </div>

            {/* Transaction 3 */}
            <div className="flex items-center justify-between">
              <div>
                <div className="font-bold text-black text-[11px]">Shell Fuel</div>
                <div className="text-[10px] text-black/50">Vehicle · Truck 2</div>
              </div>
              <span className="font-mono font-bold text-rose-600">-$96.14</span>
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-2 border-t border-black/10 flex items-center justify-between gap-2">
            <span className="text-[10px] text-black/60 font-medium">
              {approved ? "All approved ✓" : "3 categorized · awaiting OK"}
            </span>
            <button
              type="button"
              onClick={() => setApproved(!approved)}
              className={`px-3 py-1 rounded-full text-[11px] font-bold font-mono transition-colors cursor-pointer ${
                approved
                  ? "bg-emerald-600 text-white"
                  : "bg-teal-700 hover:bg-teal-800 text-white"
              }`}
            >
              {approved ? "Approved ✓" : "Approve all"}
            </button>
          </div>
        </div>
      </div>

      {/* 3. Bottom Payroll-Ready Summary Bar */}
      <div className="bg-[#0D1826] border border-[#1F334A] rounded-xl p-3 grid grid-cols-3 gap-2 text-center">
        <div>
          <div className="text-[10px] font-mono uppercase text-zinc-400">
            PAYROLL-READY
          </div>
          <div className="text-base sm:text-xl font-mono font-extrabold text-white">
            312.5 h
          </div>
        </div>
        <div>
          <div className="text-[10px] font-mono uppercase text-zinc-400">
            OVERTIME
          </div>
          <div className="text-base sm:text-xl font-mono font-extrabold text-white">
            14.0 h
          </div>
        </div>
        <div>
          <div className="text-[10px] font-mono uppercase text-zinc-400">
            LABOR / JOB
          </div>
          <div className="text-base sm:text-xl font-mono font-extrabold text-[#65B5F5]">
            $18.4k
          </div>
        </div>
      </div>
    </div>
  );
}

// -----------------------------------------------------------------------------
// Interactive Widget 2: After-Hours Voice Receptionist Simulator
// -----------------------------------------------------------------------------
function VoiceReceptionistWidget() {
  const [playing, setPlaying] = useState(true);

  return (
    <div className="bg-[#09111C] border border-[#1C2C3E] rounded-2xl p-5 sm:p-6 space-y-4">
      <div className="flex items-center justify-between pb-3 border-b border-white/10">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span className="text-xs font-mono text-emerald-400 font-bold">
            LIVE CALL STREAM · 0 HOLD TIME
          </span>
        </div>
        <button
          type="button"
          onClick={() => setPlaying(!playing)}
          className="text-[11px] font-mono px-3 py-1 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
        >
          {playing ? "Pause Audio" : "Play Simulator"}
        </button>
      </div>

      {/* Voice Waveform Graphic */}
      <div className="h-14 bg-black/40 rounded-xl flex items-center justify-center gap-1 px-4 overflow-hidden">
        {[40, 65, 80, 50, 90, 100, 75, 45, 85, 95, 60, 30, 70, 90, 55, 40, 80, 60].map(
          (h, i) => (
            <div
              key={i}
              className="w-1.5 bg-[#65B5F5] rounded-full transition-all duration-300"
              style={{
                height: playing ? `${Math.max(15, (h * (i % 2 === 0 ? 1 : 0.7)))}%` : "15%",
                opacity: playing ? 0.9 : 0.3,
              }}
            />
          )
        )}
      </div>

      {/* Conversation Script */}
      <div className="space-y-2.5 text-xs">
        <div className="p-3 rounded-xl bg-white/5 border border-white/5 space-y-1">
          <span className="text-[10px] font-mono text-zinc-400 uppercase">
            CALLER (9:42 PM)
          </span>
          <p className="text-zinc-200">
            &ldquo;Hi, our walk-in cooler just started buzzing and temp is up to 52°. Can someone come out tonight?&rdquo;
          </p>
        </div>

        <div className="p-3 rounded-xl bg-[#65B5F5]/10 border border-[#65B5F5]/25 space-y-1">
          <span className="text-[10px] font-mono text-[#65B5F5] uppercase font-bold">
            JIDOKA VOICE AGENT (0.4s RESPONSE)
          </span>
          <p className="text-white">
            &ldquo;I understand this is urgent for food safety. I can dispatch on-call technician Dave to your Worcester location at 10:15 PM tonight. Flat dispatch is $185. Should I lock that in?&rdquo;
          </p>
        </div>

        <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-between text-[11px] text-emerald-400 font-mono">
          <span>✓ Slot reserved & dispatched to Dave&apos;s phone</span>
          <span>Google Cal Sync</span>
        </div>
      </div>
    </div>
  );
}

// -----------------------------------------------------------------------------
// Interactive Widget 3: Missed Call Text Back Simulator
// -----------------------------------------------------------------------------
function MissedCallSmsWidget() {
  return (
    <div className="bg-[#09111C] border border-[#1C2C3E] rounded-2xl p-5 space-y-3">
      <div className="flex items-center justify-between text-xs font-mono text-zinc-400 pb-2 border-b border-white/10">
        <span>SMS PIPELINE RECOVERY</span>
        <span className="text-emerald-400">Instant &lt; 8s Dispatch</span>
      </div>

      <div className="space-y-2 max-w-md mx-auto">
        <div className="text-center py-1 text-[10px] font-mono text-rose-400 bg-rose-500/10 rounded-full">
          Missed Call from (508) 724-1102 (2 rings)
        </div>

        <div className="p-3 rounded-2xl rounded-tr-xs bg-[#65B5F5] text-black text-xs font-medium space-y-1 ml-auto max-w-[85%]">
          <div className="text-[9px] font-mono uppercase text-black/60">
            AUTO-SMS DISPATCHED IN 4 SECONDS
          </div>
          <p>
            &ldquo;Hey! Bryce here from Jidoka HVAC. Saw we just missed you while on a roof. How can I help you today?&rdquo;
          </p>
        </div>

        <div className="p-3 rounded-2xl rounded-tl-xs bg-white/10 text-white text-xs space-y-1 mr-auto max-w-[85%]">
          <div className="text-[9px] font-mono uppercase text-zinc-400">
            CUSTOMER (REPLIED IN 48 SECONDS)
          </div>
          <p>
            &ldquo;Looking for an estimate on a 3-ton heat pump replacement for our clinic.&rdquo;
          </p>
        </div>

        <div className="p-3 rounded-2xl rounded-tr-xs bg-[#65B5F5] text-black text-xs font-medium space-y-1 ml-auto max-w-[85%]">
          <p>
            &ldquo;Got it! Here is our instant pricing calculator and direct booking link: jidokallc.com/quote-hp. Locks in a 10% instant rebate.&rdquo;
          </p>
        </div>
      </div>
    </div>
  );
}

// -----------------------------------------------------------------------------
// Interactive Widget 4: Route-Aware Field Job Scheduler Simulator
// -----------------------------------------------------------------------------
function RouteSchedulerWidget() {
  return (
    <div className="bg-[#09111C] border border-[#1C2C3E] rounded-2xl p-5 space-y-4">
      <div className="flex items-center justify-between text-xs font-mono text-zinc-400 pb-2 border-b border-white/10">
        <span>ZONE-AWARE CLUSTER ENGINE</span>
        <span className="text-[#65B5F5]">22% Drive Time Saved</span>
      </div>

      <div className="grid grid-cols-2 gap-3 text-xs">
        <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1">
          <div className="text-[10px] font-mono text-zinc-400">TRADITIONAL ROUTE</div>
          <div className="text-xl font-bold font-mono text-rose-400">114 Miles</div>
          <div className="text-[10px] text-zinc-400">4.6 hrs windshield time / crew</div>
        </div>
        <div className="p-3 rounded-xl bg-[#65B5F5]/10 border border-[#65B5F5]/30 space-y-1">
          <div className="text-[10px] font-mono text-[#65B5F5]">JIDOKA CLUSTER ROUTE</div>
          <div className="text-xl font-bold font-mono text-emerald-400">51 Miles</div>
          <div className="text-[10px] text-zinc-300">2.1 hrs windshield time (-55%)</div>
        </div>
      </div>

      <div className="p-3 rounded-xl bg-black/40 border border-white/5 text-[11px] font-mono space-y-1.5 text-zinc-300">
        <div className="flex justify-between">
          <span>Crew Alpha: Worcester Central Cluster (3 jobs)</span>
          <span className="text-emerald-400">0 backtrack</span>
        </div>
        <div className="flex justify-between">
          <span>Crew Bravo: Shrewsbury / Westborough (4 jobs)</span>
          <span className="text-emerald-400">0 backtrack</span>
        </div>
      </div>
    </div>
  );
}

// -----------------------------------------------------------------------------
// Interactive Widget 5: Enterprise Multi-Agent & Extraction Pipelines
// -----------------------------------------------------------------------------
function EnterprisePipelineWidget({ system }: { system: SystemItem }) {
  return (
    <div className="bg-[#09111C] border border-[#1C2C3E] rounded-2xl p-5 space-y-3 font-mono text-xs">
      <div className="flex items-center justify-between pb-2 border-b border-white/10 text-zinc-400">
        <span>SYSTEM TELEMETRY · {system.id}</span>
        <span className="text-emerald-400">Status: HEALTHY (99.9% SLA)</span>
      </div>

      <div className="bg-black/60 rounded-xl p-4 space-y-2 text-[11px] text-zinc-300 overflow-x-auto">
        <div className="text-[#65B5F5]">
          {`// Real-time architecture stream`}
        </div>
        <div>
          {`> active_concurrency: 142 streams`}
        </div>
        <div>
          {`> average_latency: 380ms (Deterministic LLM + Voice)`}
        </div>
        <div>
          {`> extraction_accuracy: 99.8% across 54 schema fields`}
        </div>
        <div>
          {`> downstream_sync: PostgreSQL / SAP ERP / EHR Bridge [OK]`}
        </div>
      </div>

      <div className="p-3 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between text-[11px] text-zinc-300">
        <span>Air-gapped sensitive data handling</span>
        <span className="text-emerald-400 font-bold">SOC2 / HIPAA Compliant</span>
      </div>
    </div>
  );
}
