"use client";

import React from "react";
import ProfileCard from "./ui/ProfileCard";
import { Phone, Sparkles, CheckCircle2, ArrowUpRight, MapPin } from "lucide-react";
import { ScrollReveal } from "./ui/scroll-reveal";

export default function FounderSection() {
  const handleContactClick = () => {
    window.location.href = "mailto:inbox@jidokallc.com?subject=Coffee%20Chat%20with%20Bryce";
  };

  return (
    <section id="about" className="relative w-full bg-[#FAF8F5] text-black py-20 sm:py-28 px-5 sm:px-8 md:px-10 border-t border-black/10 select-none overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* =========================================================================
            1. SECTION HEADER (MATCHING "SOFTWARE BUILT FOR YOUR SCALE" DESIGN)
            ========================================================================= */}
        <ScrollReveal className="flex flex-col items-center justify-center text-center mb-14 sm:mb-18 space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/5 border border-black/10 text-[12px] sm:text-[13px] font-mono uppercase tracking-widest text-black/70">
            <span>WHO YOU&apos;LL ACTUALLY TALK TO</span>
            <span>·</span>
            <span>WORCESTER, MA</span>
          </div>

          <h2
            className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-black max-w-4xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            The{" "}
            <span className="relative inline-block mx-1.5 sm:mx-2 px-3.5 sm:px-4 py-0.5 sm:py-1 rounded-2xl bg-[#65B5F5] text-black -rotate-2 font-extrabold shadow-sm border border-black/10">
              Expert Engineer
            </span>{" "}
            By Your Side
          </h2>

          <p className="text-base sm:text-lg text-black/70 max-w-2xl leading-relaxed">
            No sales reps or layers of junior account managers. You work directly with the engineer architecting and shipping your systems.
          </p>
        </ScrollReveal>

        {/* =========================================================================
            2. TWO-COLUMN FOUNDER GRID
            ========================================================================= */}
        <ScrollReveal delay={0.15}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* =========================================================================
              LEFT COLUMN: Editorial Copy & Proof Cards (Full Glassmorphic Effect)
              ========================================================================= */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* The Jidoka Philosophy Card (Glassmorphic Container with Ambient Glow) */}
            <div className="relative bg-white/70 backdrop-blur-xl border border-white/80 rounded-3xl p-7 sm:p-9 shadow-[0_10px_30px_rgba(0,0,0,0.03),0_1px_3px_rgba(0,0,0,0.02)] ring-1 ring-black/[0.05] hover:shadow-[0_25px_50px_rgba(0,0,0,0.08),0_2px_6px_rgba(0,0,0,0.04)] hover:bg-white/90 hover:border-black/15 transition-all duration-300 group overflow-hidden space-y-4">
              {/* Top-right ambient reflection */}
              <div className="absolute -top-16 -right-16 w-36 h-36 bg-[#65B5F5]/10 rounded-full blur-2xl group-hover:bg-[#65B5F5]/25 transition-all duration-300 pointer-events-none" />

              <div className="relative z-10 flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider text-[#65B5F5] font-semibold flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#65B5F5]" />
                  THE JIDOKA PRINCIPLE
                </span>
                <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-black/5 text-black/70 border border-black/10">
                  EST. 2023
                </span>
              </div>

              <blockquote
                className="relative z-10 text-lg sm:text-xl font-medium text-black leading-snug"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                &ldquo;I named the company after a manufacturing principle: machines handle the repetitive work, and stop the moment something requires human judgment. That&apos;s the whole idea here.&rdquo;
              </blockquote>

              <p className="relative z-10 text-sm sm:text-base text-black/75 leading-relaxed pt-1">
                You won&apos;t be handed off to account managers. You talk to me, I build the thing, and I don&apos;t ship it until it runs reliably in the way your business actually operates.
              </p>
            </div>

            {/* 3 Key Metric Proof Boxes (Glassmorphic Cards) */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              <div className="relative bg-white/70 backdrop-blur-xl border border-white/80 rounded-2xl p-4 sm:p-5 shadow-[0_10px_30px_rgba(0,0,0,0.03)] ring-1 ring-black/[0.05] hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:bg-white/90 hover:border-black/15 transition-all duration-300 group overflow-hidden">
                <div className="absolute -top-10 -right-10 w-24 h-24 bg-[#65B5F5]/10 rounded-full blur-xl group-hover:bg-[#65B5F5]/20 pointer-events-none" />
                <div
                  className="relative z-10 text-2xl sm:text-3xl font-bold text-black"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  25+
                </div>
                <div className="relative z-10 text-[11px] sm:text-xs font-mono uppercase tracking-wider text-black/60 mt-1">
                  Systems Shipped
                </div>
              </div>

              <div className="relative bg-white/70 backdrop-blur-xl border border-white/80 rounded-2xl p-4 sm:p-5 shadow-[0_10px_30px_rgba(0,0,0,0.03)] ring-1 ring-black/[0.05] hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:bg-white/90 hover:border-black/15 transition-all duration-300 group overflow-hidden">
                <div className="absolute -top-10 -right-10 w-24 h-24 bg-[#65B5F5]/10 rounded-full blur-xl group-hover:bg-[#65B5F5]/20 pointer-events-none" />
                <div
                  className="relative z-10 text-2xl sm:text-3xl font-bold text-[#65B5F5]"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  2–4 Wks
                </div>
                <div className="relative z-10 text-[11px] sm:text-xs font-mono uppercase tracking-wider text-black/60 mt-1">
                  Go-Live Speed
                </div>
              </div>

              <div className="relative bg-white/70 backdrop-blur-xl border border-white/80 rounded-2xl p-4 sm:p-5 shadow-[0_10px_30px_rgba(0,0,0,0.03)] ring-1 ring-black/[0.05] hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:bg-white/90 hover:border-black/15 transition-all duration-300 group overflow-hidden">
                <div className="absolute -top-10 -right-10 w-24 h-24 bg-[#65B5F5]/10 rounded-full blur-xl group-hover:bg-[#65B5F5]/20 pointer-events-none" />
                <div
                  className="relative z-10 text-2xl sm:text-3xl font-bold text-black"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  1-on-1
                </div>
                <div className="relative z-10 text-[11px] sm:text-xs font-mono uppercase tracking-wider text-black/60 mt-1">
                  Direct Engineering
                </div>
              </div>
            </div>

            {/* Action Buttons & Phone */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <a
                href="mailto:inbox@jidokallc.com?subject=Coffee%20Chat%20with%20Bryce"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-black hover:bg-black/85 text-white font-semibold text-sm transition-all shadow-[0_10px_25px_rgba(0,0,0,0.15)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.25)] hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Book a Free Coffee Chat</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </a>

              <a
                href="tel:5084987168"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-full bg-white/80 hover:bg-white border border-black/15 text-black font-mono text-xs tracking-wider transition-all shadow-sm cursor-pointer backdrop-blur-md"
              >
                <Phone className="w-3.5 h-3.5 text-black/70" />
                <span>(508) 498-7168</span>
                <span className="text-black/40 text-[11px] font-sans">(Bryce picks up)</span>
              </a>
            </div>

            {/* Assurance Badges */}
            <div className="flex flex-wrap items-center gap-5 pt-1 text-xs text-black/60 font-mono">
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#34d399]" />
                Zero Offshore Handoffs
              </span>
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#65B5F5]" />
                Worcester, MA (On-site & Remote)
              </span>
            </div>
          </div>

          {/* =========================================================================
              RIGHT COLUMN: 3D Interactive ProfileCard
              ========================================================================= */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="w-full flex justify-center">
              <ProfileCard
                name="Bryce Meizen"
                title="Founder & Lead AI Engineer"
                handle="brycemeizen"
                status="Active / Shipping"
                contactText="Contact Bryce"
                avatarUrl="/images/bryce_meizen.jpg"
                miniAvatarUrl="/images/bryce_meizen.jpg"
                showUserInfo={true}
                enableTilt={true}
                enableMobileTilt={false}
                behindGlowEnabled={true}
                behindGlowColor="rgba(101, 181, 245, 0.55)"
                behindGlowSize="45%"
                onContactClick={handleContactClick}
              />
            </div>
          </div>

        </div>
      </ScrollReveal>
      </div>
    </section>
  );
}
