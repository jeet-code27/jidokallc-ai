"use client";

import React, { useState } from "react";
import { Sparkles, ArrowUpRight, Download, Check, Layers, Mail, BookOpen, Zap } from "lucide-react";
import { ScrollReveal, ScrollStagger } from "./ui/scroll-reveal";

interface MarketplaceItem {
  id: string;
  stepNumber: string;
  category: string;
  title: string;
  subtitle: string;
  description: string;
  tag: string;
  badge: string;
  features: string[];
  gradient: string;
}

const MARKETPLACE_ITEMS: MarketplaceItem[] = [
  {
    id: "kit-01",
    stepNumber: "01",
    category: "INBOX → STRUCTURED DATA",
    title: "Turn Emails into CRM Records",
    subtitle: "Extract. Review. Route.",
    description:
      "A guided workflow kit for extracting lead details, sentiment, and project scopes from incoming emails and automatically creating structured CRM deals.",
    tag: "WORKFLOW KIT",
    badge: "Do-It-Yourself (DIY)",
    features: [
      "Outlook & Gmail webhook setup",
      "Multi-field schema extraction prompts",
      "Human-in-the-loop review interface",
      "HubSpot, Pipedrive & GoHighLevel sync",
    ],
    gradient: "from-blue-500/10 via-[#65B5F5]/10 to-transparent",
  },
  {
    id: "kit-02",
    stepNumber: "02",
    category: "DOCUMENTS → VERIFIED ANSWERS",
    title: "Build an Internal AI Assistant",
    subtitle: "Give your knowledge a voice.",
    description:
      "A complete implementation playbook for an internal knowledge assistant that answers employee questions with direct source citations and zero hallucination risk.",
    tag: "IMPLEMENTATION PLAYBOOK",
    badge: "Do-It-Yourself (DIY)",
    features: [
      "Step-by-step vector embedding guide",
      "Strict citation & boundary guardrails",
      "PDF, Notion & Google Drive ingestion",
      "Access permissions & privacy rules",
    ],
    gradient: "from-purple-500/10 via-indigo-500/10 to-transparent",
  },
  {
    id: "kit-03",
    stepNumber: "03",
    category: "MEETINGS → REVIEWED TASKS",
    title: "Turn Meetings into Action",
    subtitle: "Follow through, faster.",
    description:
      "A battle-tested skill pack for drafting executive recaps, assigning action items to team members, and distributing automated follow-up drafts.",
    tag: "AI SKILL PACK",
    badge: "Do-It-Yourself (DIY)",
    features: [
      "Transcript extraction & cleaning prompts",
      "Owner & deadline classification logic",
      "Slack / Teams notification payload",
      "One-click approval before sending",
    ],
    gradient: "from-cyan-500/10 via-emerald-500/10 to-transparent",
  },
];

export default function MarketplaceSection() {
  const [selectedItem, setSelectedItem] = useState<MarketplaceItem | null>(null);
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [email, setEmail] = useState("");

  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setEmailSubmitted(true);
    setTimeout(() => {
      setEmailSubmitted(false);
      setEmail("");
      setSelectedItem(null);
    }, 2800);
  };

  return (
    <section
      id="marketplace"
      className="relative w-full bg-[#FAF8F5] text-black py-20 sm:py-28 px-5 sm:px-8 md:px-10 border-t border-black/10 select-none overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* =========================================================================
            1. SECTION HEADER
            ========================================================================= */}
        <ScrollReveal className="flex flex-col items-center justify-center text-center mb-14 sm:mb-18 space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/5 border border-black/10 text-[12px] sm:text-[13px] font-mono uppercase tracking-widest text-black/70">
            <Sparkles className="w-3.5 h-3.5 text-[#65B5F5]" />
            <span>THE JIDOKA MARKETPLACE</span>
            <span>·</span>
            <span className="text-[#0969DA] font-semibold">COMING SOON</span>
          </div>

          <h2
            className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-black max-w-4xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Practical AI.{" "}
            <span className="relative inline-block mx-1.5 sm:mx-2 px-3.5 sm:px-4 py-0.5 sm:py-1 rounded-2xl bg-[#65B5F5] text-black -rotate-1 font-extrabold shadow-sm border border-black/10">
              Ready for Your Team
            </span>{" "}
            to Build.
          </h2>

          <p className="text-base sm:text-lg text-black/70 max-w-2xl leading-relaxed">
            Reusable workflows, downloadable AI skill packs, and implementation guides that turn frontier AI into measurable everyday leverage.
          </p>
        </ScrollReveal>

        {/* =========================================================================
            2. THREE MARKETPLACE CARDS
            ========================================================================= */}
        <ScrollStagger className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8" staggerDelay={0.12}>
          {MARKETPLACE_ITEMS.map((item) => (
            <div
              key={item.id}
              className="relative bg-white/75 backdrop-blur-xl border border-white/90 rounded-3xl p-7 sm:p-8 shadow-[0_10px_30px_rgba(0,0,0,0.03)] ring-1 ring-black/[0.05] hover:shadow-[0_25px_50px_rgba(0,0,0,0.08)] hover:bg-white/95 hover:border-black/15 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group overflow-hidden"
            >
              {/* Background Subtle Gradient Glow */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-40 group-hover:opacity-75 transition-opacity duration-300 pointer-events-none`}
              />

              <div className="relative z-10 space-y-4">
                {/* Header Tag & Step Number */}
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-black/55 font-semibold">
                    {item.stepNumber} · {item.tag}
                  </span>
                  <span className="inline-flex items-center text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-700 font-semibold border border-emerald-500/25">
                    {item.badge}
                  </span>
                </div>

                {/* Visual Accent Banner */}
                <div className="p-3.5 rounded-2xl bg-black/5 border border-black/5 space-y-1">
                  <div className="text-[10px] font-mono tracking-wider text-[#65B5F5] font-bold uppercase">
                    {item.category}
                  </div>
                  <div
                    className="text-base font-bold text-black"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    &ldquo;{item.subtitle}&rdquo;
                  </div>
                </div>

                {/* Title & Description */}
                <div>
                  <h3
                    className="text-xl sm:text-2xl font-bold text-black group-hover:text-[#0969DA] transition-colors"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-sm text-black/75 mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Feature Bullets */}
                <div className="pt-2 border-t border-black/5 space-y-2">
                  {item.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-black/70">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#65B5F5] shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="relative z-10 pt-6 mt-4 border-t border-black/10">
                <button
                  type="button"
                  onClick={() => setSelectedItem(item)}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-black hover:bg-black/85 text-white text-xs sm:text-sm font-semibold transition-all shadow-sm group-hover:shadow-md cursor-pointer"
                >
                  <span>Preview Kit & Get Access</span>
                  <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                </button>
              </div>
            </div>
          ))}
        </ScrollStagger>

        {/* =========================================================================
            3. BOTTOM BANNER
            ========================================================================= */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-[#09111C] border border-[#1C2C3E] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center sm:text-left">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#65B5F5] uppercase tracking-wider">
              <Zap className="w-3.5 h-3.5 text-[#65B5F5]" />
              <span>EARLY ACCESS WAITLIST</span>
            </div>
            <h4
              className="text-lg sm:text-2xl font-bold tracking-tight text-white"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Want our next workflow kit before public release?
            </h4>
            <p className="text-xs sm:text-sm text-zinc-400">
              Join 150+ operators receiving our verified SOPs, system prompts, and deployment blueprints.
            </p>
          </div>

          <form
            onSubmit={handleWaitlistSubmit}
            className="w-full sm:w-auto flex flex-col sm:flex-row items-center gap-2.5"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="w-full sm:w-64 px-4 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-zinc-400 text-xs sm:text-sm focus:outline-none focus:border-[#65B5F5]"
            />
            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#65B5F5] hover:bg-[#52A3E0] text-black font-semibold text-xs sm:text-sm transition-all whitespace-nowrap cursor-pointer shadow-md"
            >
              {emailSubmitted ? "✓ You're On The List!" : "Get Early Access"}
            </button>
          </form>
        </div>
      </div>

      {/* =========================================================================
          MODAL: KIT PREVIEW DIALOG
          ========================================================================= */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="bg-[#FAF8F5] text-black border border-black/15 rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl relative space-y-5 animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-black/10">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-[#0969DA] uppercase tracking-wider font-semibold">
                <span>{selectedItem.tag}</span>
                <span>·</span>
                <span>{selectedItem.badge}</span>
              </div>
              <button
                type="button"
                onClick={() => setSelectedItem(null)}
                className="w-8 h-8 rounded-full bg-black/5 hover:bg-black/10 flex items-center justify-center text-sm font-bold cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div>
              <h3
                className="text-2xl font-bold text-black"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {selectedItem.title}
              </h3>
              <p className="text-sm text-black/75 mt-2 leading-relaxed">
                {selectedItem.description}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-black/10 space-y-2">
              <span className="text-xs font-mono uppercase text-black/60 font-semibold block">
                Included in this kit:
              </span>
              {selectedItem.features.map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-black/80">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <form onSubmit={handleWaitlistSubmit} className="space-y-3">
                <label className="text-xs font-medium text-black/70 block">
                  Enter your email to receive this kit when it drops:
                </label>
                <div className="flex gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    required
                    className="flex-1 px-4 py-2.5 rounded-full bg-white border border-black/20 text-xs sm:text-sm focus:outline-none focus:border-[#65B5F5]"
                  />
                  <button
                    type="submit"
                    className="px-5 py-2.5 rounded-full bg-black text-white hover:bg-black/85 text-xs sm:text-sm font-semibold transition-all cursor-pointer"
                  >
                    {emailSubmitted ? "Saved!" : "Notify Me"}
                  </button>
                </div>
                {emailSubmitted && (
                  <p className="text-xs text-emerald-600 font-medium">
                    ✓ You&apos;re registered! We&apos;ll send the early access link.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
