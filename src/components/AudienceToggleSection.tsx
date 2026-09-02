"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

type AudienceTrack = "enterprise" | "boutique";

interface TrackContent {
  tag: string;
  headline: string;
  subheadline: string;
  stats: { label: string; value: string; desc: string }[];
  systems: {
    id: string;
    category: string;
    title: string;
    description: string;
    badge: string;
    highlight: string;
  }[];
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
      },
      {
        id: "ENT-02",
        category: "INTELLIGENT DOCUMENT PIPELINES",
        title: "Automated Document Intake & Extraction",
        description:
          "Extracts 50+ structured fields from invoices, medical records, and contracts overnight with automated validation and compliance seals.",
        badge: "100% Audit-Ready",
        highlight: "Eliminates weeks of manual data entry",
      },
      {
        id: "ENT-03",
        category: "DATA & ANALYTICS",
        title: "Real-Time Executive KPI Lakehouse",
        description:
          "Consolidates disparate data silos across branches, displaying live revenue attribution, pipeline health, and margin anomalies.",
        badge: "Full-Funnel View",
        highlight: "Single source of truth for leadership",
      },
      {
        id: "ENT-04",
        category: "VOICE AI AT SCALE",
        title: "Bilingual Medical & Dental Intake",
        description:
          "HIPAA-conscious voice intake agent with real-time Spanish/English switching, insurance verification, and calendar lock.",
        badge: "0 Hold Time",
        highlight: "Handles 100+ concurrent calls seamlessly",
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
      },
      {
        id: "SYS-02",
        category: "TEXT & FOLLOW-UP",
        title: "Missed Call Text Back",
        description:
          "The instant a call is missed, the caller gets a personalized text. Captures the lead immediately while they're still looking for help.",
        badge: "92% Recovery Rate",
        highlight: "Most customers reply in under 90 seconds",
      },
      {
        id: "SYS-03",
        category: "SCHEDULING",
        title: "Route-Aware Field Job Scheduler",
        description:
          "Automatically groups jobs by geographic zones and drive time rather than just availability, saving hours of gas and windshield time.",
        badge: "22% Less Drive Time",
        highlight: "Eliminates double bookings across crews",
      },
      {
        id: "SYS-04",
        category: "OPERATIONS",
        title: "Digital Timecards & Payroll Sync",
        description:
          "Replaced paper timecards for seasonal crews. Staff clock in via SMS or simple web link; payroll calculations generate automatically.",
        badge: "18 hrs saved/season",
        highlight: "Zero paper forms to transcribe on Mondays",
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
};

export default function AudienceToggleSection() {
  const [activeTrack, setActiveTrack] = useState<AudienceTrack>("boutique");
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
                <span className="inline-block text-xs font-mono font-semibold tracking-wider text-[#D93F1D] uppercase">
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

            {/* Systems Grid for Selected Track (3D Glassmorphic Cards) */}
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-black/60">
                    Pre-Built & Tailored Architectures
                  </span>
                  <h4
                    className="text-2xl sm:text-3xl font-bold text-black"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    Systems We Deploy For You
                  </h4>
                </div>
                <div className="text-sm font-mono text-black/60">
                  {activeTrack === "enterprise"
                    ? "Custom Sizing & API Integration"
                    : "Ready in 2 to 4 weeks"}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {content.systems.map((sys) => (
                  <div
                    key={sys.id}
                    className="relative bg-white/70 backdrop-blur-xl border border-white/80 rounded-2xl p-7 sm:p-9 flex flex-col justify-between shadow-[0_10px_30px_rgba(0,0,0,0.03),0_1px_3px_rgba(0,0,0,0.02)] ring-1 ring-black/[0.05] hover:-translate-y-2 hover:shadow-[0_25px_50px_rgba(0,0,0,0.08),0_2px_6px_rgba(0,0,0,0.04)] hover:bg-white/90 hover:border-black/15 transition-all duration-300 group overflow-hidden"
                  >
                    {/* Subtle top-right ambient reflection */}
                    <div className="absolute -top-16 -right-16 w-36 h-36 bg-[#65B5F5]/10 rounded-full blur-2xl group-hover:bg-[#65B5F5]/25 transition-all duration-300 pointer-events-none" />

                    <div className="relative z-10 space-y-4">
                      <div className="flex justify-between items-start gap-2">
                        <span className="text-[11px] font-mono tracking-wider text-black/50 uppercase">
                          {sys.category} · {sys.id}
                        </span>
                        <span className="inline-block text-[12px] font-semibold px-3 py-1 rounded-full bg-[#65B5F5]/15 text-black border border-[#65B5F5]/40 font-mono shadow-sm">
                          {sys.badge}
                        </span>
                      </div>
                      <h5
                        className="text-xl sm:text-2xl font-bold text-black group-hover:text-[#D93F1D] transition-colors"
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        {sys.title}
                      </h5>
                      <p className="text-sm sm:text-base text-black/75 leading-relaxed">
                        {sys.description}
                      </p>
                    </div>

                    <div className="relative z-10 mt-6 pt-4 border-t border-black/5 flex items-center justify-between text-xs text-black/60 font-medium">
                      <span>✓ {sys.highlight}</span>
                      <span className="text-black font-semibold group-hover:translate-x-1.5 transition-transform flex items-center gap-1">
                        Explore <span>→</span>
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Approach Tiers */}
            <div className="space-y-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-black/60">
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
                        ? "bg-black/95 backdrop-blur-xl text-white border border-black shadow-[0_20px_45px_rgba(0,0,0,0.15)]"
                        : "bg-white/70 backdrop-blur-xl text-black border border-white/80 shadow-[0_10px_30px_rgba(0,0,0,0.03)] ring-1 ring-black/[0.05] hover:bg-white/90 hover:shadow-[0_25px_50px_rgba(0,0,0,0.08)]"
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
                          <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-[#D93F1D] text-white font-bold">
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
                          app.isPopular ? "bg-white/10 text-white/90" : "bg-black/5 text-black/75"
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
                                app.isPopular ? "text-[#65B5F5]" : "text-[#D93F1D]"
                              }`}
                            >
                              ✓
                            </span>
                            <span className={app.isPopular ? "text-white/90" : "text-black/80"}>
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
                            ? "bg-[#65B5F5] text-black hover:bg-white hover:text-black font-semibold"
                            : "bg-black text-white hover:bg-black/80"
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
                  className="underline underline-offset-4 text-black hover:text-[#D93F1D] font-semibold"
                >
                  (508) 498-7168
                </a>{" "}
                — Bryce Meizen, Founder
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
