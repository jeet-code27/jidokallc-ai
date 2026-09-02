"use client";

import React from "react";
import { Cpu, ShieldAlert, Users, ArrowUpRight } from "lucide-react";
import { ScrollReveal, ScrollStagger } from "./ui/scroll-reveal";

export default function BrandPhilosophySection() {
  return (
    <section className="relative w-full bg-[#FAF8F5] text-black py-20 sm:py-28 px-5 sm:px-8 md:px-10 border-t border-black/10 select-none overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* =========================================================================
            1. HERO GLASSMORPHIC PHILOSOPHY CONTAINER
            ========================================================================= */}
        <ScrollReveal>
          <div className="relative bg-white/75 backdrop-blur-2xl border border-white/90 rounded-3xl p-8 sm:p-14 lg:p-16 shadow-[0_20px_50px_rgba(0,0,0,0.04),0_1px_3px_rgba(0,0,0,0.02)] ring-1 ring-black/[0.06] overflow-hidden group">
            
            {/* Ambient Top & Bottom Glowing Orbs */}
            <div className="absolute -top-24 -right-24 w-72 h-72 bg-[#65B5F5]/15 rounded-full blur-3xl group-hover:bg-[#65B5F5]/25 transition-all duration-500 pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl group-hover:bg-purple-500/15 transition-all duration-500 pointer-events-none" />

            {/* Header & Centerpiece Statement */}
            <div className="relative z-10 text-center max-w-4xl mx-auto space-y-6">
              {/* Signature Highlight Headline */}
              <h2
                className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-black leading-[1.25]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Jidoka means{" "}
                <span className="relative inline-block mx-1.5 sm:mx-2 px-4 sm:px-5 py-0.5 sm:py-1 rounded-2xl bg-[#65B5F5] text-black -rotate-2 font-extrabold shadow-sm border border-black/10">
                  automation with a human touch
                </span>
              </h2>

              <p className="text-base sm:text-xl text-black/75 max-w-2xl mx-auto leading-relaxed">
                Named after the lean manufacturing principle: machines handle the heavy repetitive drag, and stop the moment something looks wrong so human judgment can step in.
              </p>
            </div>

            {/* =========================================================================
                2. THREE-PILLAR EXPLANATION CARDS (STAGGERED REVEAL)
                ========================================================================= */}
            <ScrollStagger className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mt-12 sm:mt-16" staggerDelay={0.12}>
              
              {/* Pillar 1: Deterministic Machines */}
              <div className="relative bg-white/70 backdrop-blur-xl border border-white/80 rounded-2xl p-6 sm:p-8 shadow-[0_8px_24px_rgba(0,0,0,0.02)] ring-1 ring-black/[0.05] hover:shadow-[0_18px_38px_rgba(0,0,0,0.06)] hover:bg-white/90 hover:border-black/15 hover:-translate-y-1.5 transition-all duration-300 group/card overflow-hidden flex flex-col justify-between h-full">
                <div className="absolute -top-10 -right-10 w-24 h-24 bg-[#65B5F5]/10 rounded-full blur-xl group-hover/card:bg-[#65B5F5]/25 pointer-events-none" />

                <div className="relative z-10 space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-black/5 border border-black/10 flex items-center justify-center text-black">
                    <Cpu className="w-5 h-5 text-black" />
                  </div>
                  <span className="text-[11px] font-mono tracking-wider text-black/50 uppercase block">
                    PILLAR 01
                  </span>
                  <h3
                    className="text-xl sm:text-2xl font-bold text-black"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    Heavy Lifting by Code
                  </h3>
                  <p className="text-sm text-black/75 leading-relaxed">
                    Repetitive paperwork, after-hours dispatching, calendar booking, and multi-system syncing run 24/7 with zero operational friction.
                  </p>
                </div>

                <div className="relative z-10 pt-4 mt-4 border-t border-black/5 text-xs font-mono text-black/60">
                  ✓ 90% drag eliminated
                </div>
              </div>

              {/* Pillar 2: Intelligent Stops */}
              <div className="relative bg-white/70 backdrop-blur-xl border border-white/80 rounded-2xl p-6 sm:p-8 shadow-[0_8px_24px_rgba(0,0,0,0.02)] ring-1 ring-black/[0.05] hover:shadow-[0_18px_38px_rgba(0,0,0,0.06)] hover:bg-white/90 hover:border-black/15 hover:-translate-y-1.5 transition-all duration-300 group/card overflow-hidden flex flex-col justify-between h-full">
                <div className="absolute -top-10 -right-10 w-24 h-24 bg-[#65B5F5]/10 rounded-full blur-xl group-hover/card:bg-[#65B5F5]/25 pointer-events-none" />

                <div className="relative z-10 space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-[#65B5F5]/15 border border-[#65B5F5]/30 flex items-center justify-center text-black">
                    <ShieldAlert className="w-5 h-5 text-black" />
                  </div>
                  <span className="text-[11px] font-mono tracking-wider text-[#65B5F5] font-bold uppercase block">
                    PILLAR 02
                  </span>
                  <h3
                    className="text-xl sm:text-2xl font-bold text-black"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    Autonomous Safeguards
                  </h3>
                  <p className="text-sm text-black/75 leading-relaxed">
                    If an edge-case or non-standard customer request occurs, the system halts instantly and notifies your team rather than guessing or hallucinating.
                  </p>
                </div>

                <div className="relative z-10 pt-4 mt-4 border-t border-black/5 text-xs font-mono text-black/60">
                  ✓ Zero hallucinated mistakes
                </div>
              </div>

              {/* Pillar 3: Human Judgment */}
              <div className="relative bg-white/70 backdrop-blur-xl border border-white/80 rounded-2xl p-6 sm:p-8 shadow-[0_8px_24px_rgba(0,0,0,0.02)] ring-1 ring-black/[0.05] hover:shadow-[0_18px_38px_rgba(0,0,0,0.06)] hover:bg-white/90 hover:border-black/15 hover:-translate-y-1.5 transition-all duration-300 group/card overflow-hidden flex flex-col justify-between h-full">
                <div className="absolute -top-10 -right-10 w-24 h-24 bg-[#65B5F5]/10 rounded-full blur-xl group-hover/card:bg-[#65B5F5]/25 pointer-events-none" />

                <div className="relative z-10 space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-black/5 border border-black/10 flex items-center justify-center text-black">
                    <Users className="w-5 h-5 text-black" />
                  </div>
                  <span className="text-[11px] font-mono tracking-wider text-black/50 uppercase block">
                    PILLAR 03
                  </span>
                  <h3
                    className="text-xl sm:text-2xl font-bold text-black"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    Human in the Loop
                  </h3>
                  <p className="text-sm text-black/75 leading-relaxed">
                    You stay in full control. Technology amplifies your people instead of attempting to replace them with rigid, clumsy off-the-shelf bots.
                  </p>
                </div>

                <div className="relative z-10 pt-4 mt-4 border-t border-black/5 text-xs font-mono text-black/60">
                  ✓ You retain total control
                </div>
              </div>

            </ScrollStagger>

            {/* Bottom Callout Bar */}
            <div className="relative z-10 mt-10 pt-8 border-t border-black/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs sm:text-sm font-mono text-black/60 text-center sm:text-left">
                Built specifically for your exact operation · Zero template lock-in
              </p>
              <a
                href="#calculator"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-black hover:bg-black/85 text-white font-semibold text-xs sm:text-sm transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Calculate What You Can Save</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </a>
            </div>

          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
