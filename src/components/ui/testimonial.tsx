"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { TimelineContent } from "@/components/ui/timeline-animation";
import { Star, CheckCircle2 } from "lucide-react";
import { Variants } from "motion/react";

export default function TestimonialComponent() {
  const testimonialRef = useRef<HTMLDivElement>(null);

  const revealVariants: Variants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.1,
        duration: 0.55,
        ease: "easeOut",
      },
    }),
    hidden: {
      filter: "blur(8px)",
      y: 20,
      opacity: 0,
    },
  };

  return (
    <div className="w-full" ref={testimonialRef}>
      {/* =========================================================================
          1. HEADER (BRAND THEME)
          ========================================================================= */}
      <div className="max-w-3xl mx-auto text-center space-y-4 mb-12 sm:mb-16">
        <TimelineContent
          animationNum={0}
          customVariants={revealVariants}
          timelineRef={testimonialRef}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/5 border border-black/10 text-[12px] sm:text-[13px] font-mono uppercase tracking-widest text-black/70"
        >
          <span>PROVEN RESULTS</span>
          <span>·</span>
          <span>CLIENT FEEDBACK</span>
        </TimelineContent>

        <TimelineContent
          as="h2"
          animationNum={1}
          customVariants={revealVariants}
          timelineRef={testimonialRef}
          className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-black leading-tight"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Tested & Trusted By{" "}
          <span className="relative inline-block mx-1.5 px-3.5 py-0.5 rounded-xl bg-[#65B5F5] text-black -rotate-1 font-extrabold shadow-sm border border-black/10">
            Real Businesses
          </span>
        </TimelineContent>

        <TimelineContent
          as="p"
          animationNum={2}
          customVariants={revealVariants}
          timelineRef={testimonialRef}
          className="text-base sm:text-lg text-black/70 max-w-2xl mx-auto leading-relaxed"
        >
          Here is what happens when you eliminate manual operational drag and talk directly to the engineer who builds the system.
        </TimelineContent>
      </div>

      {/* =========================================================================
          2. BENTO TESTIMONIAL GRID (GLASSMORPHISM BOXES ACROSS ALL 3 COLUMNS)
          ========================================================================= */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6 w-full">
        
        {/* ==================== COLUMN 1 ==================== */}
        <div className="flex flex-col gap-5 sm:gap-6">
          {/* Card 1: Recreational Facility (Dark Glass Bento) */}
          <TimelineContent
            animationNum={3}
            customVariants={revealVariants}
            timelineRef={testimonialRef}
            className="flex-1 flex flex-col justify-between relative bg-black/95 backdrop-blur-xl text-white overflow-hidden rounded-3xl border border-white/10 p-7 sm:p-9 shadow-[0_20px_45px_rgba(0,0,0,0.15)] ring-1 ring-white/10 hover:shadow-[0_25px_50px_rgba(0,0,0,0.25)] hover:-translate-y-2 hover:border-white/20 transition-all duration-300 group min-h-[300px]"
          >
            {/* Ambient Reflection */}
            <div className="absolute -top-16 -right-16 w-40 h-40 bg-[#65B5F5]/20 rounded-full blur-3xl group-hover:bg-[#65B5F5]/35 transition-all duration-300 pointer-events-none" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

            <div className="relative z-10 space-y-3.5">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#65B5F5] font-semibold">
                  OPERATIONS · SYSTEM 23
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-mono px-3 py-1 rounded-full bg-[#65B5F5]/20 text-[#65B5F5] border border-[#65B5F5]/30">
                  <CheckCircle2 className="w-3 h-3" />
                  18 hrs saved
                </span>
              </div>

              <div className="flex items-center gap-1 text-[#65B5F5]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>

              <p className="text-sm sm:text-base text-white/90 leading-relaxed font-normal">
                &ldquo;Bryce replaced our paper timecards for 35 seasonal crew members in under 3 weeks. What used to take our Mondays is now completely automated with 0 paper forms.&rdquo;
              </p>
            </div>

            <div className="relative z-10 flex items-center justify-between pt-6 mt-4 border-t border-white/10">
              <div>
                <h3 className="font-bold text-base sm:text-lg text-white" style={{ fontFamily: "var(--font-heading)" }}>
                  Elena Vance
                </h3>
                <p className="text-xs text-white/60 font-mono">GM · Wachusett Recreation</p>
              </div>
              <div className="w-12 h-12 rounded-2xl overflow-hidden border border-white/20 relative shrink-0 shadow-md">
                <Image
                  src="/images/client_elena.jpg"
                  alt="Elena Vance"
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </div>
            </div>
          </TimelineContent>

          {/* Card 2: Sneaker Boutique (Brand Blue Glass Card) */}
          <TimelineContent
            animationNum={4}
            customVariants={revealVariants}
            timelineRef={testimonialRef}
            className="flex flex-col justify-between relative bg-[#65B5F5] backdrop-blur-xl text-black overflow-hidden rounded-3xl border border-white/40 p-7 sm:p-8 shadow-[0_10px_30px_rgba(101,181,245,0.25)] ring-1 ring-black/[0.05] hover:shadow-[0_20px_45px_rgba(101,181,245,0.35)] hover:-translate-y-2 hover:bg-[#5bb0f3] transition-all duration-300 group"
          >
            <div className="space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono uppercase tracking-wider text-black/75 font-bold">
                  RETAIL SYNC · SYSTEM 18
                </span>
                <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-black/10 text-black font-semibold">
                  8 hrs/wk saved
                </span>
              </div>
              <p className="text-sm sm:text-[15px] font-medium text-black leading-snug">
                &ldquo;Automated our entire Shopify supplier pricing sync across thousands of SKUs. 100% inventory accuracy without me staying up late.&rdquo;
              </p>
            </div>

            <div className="flex items-center justify-between pt-5 mt-3 border-t border-black/10">
              <div>
                <h3 className="font-bold text-base text-black" style={{ fontFamily: "var(--font-heading)" }}>
                  Marcus Thorne
                </h3>
                <p className="text-xs text-black/70 font-mono">Founder · SoleVault Worcester</p>
              </div>
              <div className="w-11 h-11 rounded-2xl overflow-hidden border border-black/20 relative shrink-0 shadow-sm">
                <Image
                  src="/images/client_marcus.jpg"
                  alt="Marcus Thorne"
                  fill
                  sizes="44px"
                  className="object-cover"
                />
              </div>
            </div>
          </TimelineContent>
        </div>

        {/* ==================== COLUMN 2 ==================== */}
        <div className="flex flex-col gap-5 sm:gap-6">
          {/* Card 3: Roofing Contractor (Frosted Glass Box with Ambient Glow) */}
          <TimelineContent
            animationNum={5}
            customVariants={revealVariants}
            timelineRef={testimonialRef}
            className="flex flex-col justify-between relative bg-white/70 backdrop-blur-xl border border-white/80 rounded-3xl p-7 sm:p-8 shadow-[0_10px_30px_rgba(0,0,0,0.03),0_1px_3px_rgba(0,0,0,0.02)] ring-1 ring-black/[0.05] hover:shadow-[0_25px_50px_rgba(0,0,0,0.08),0_2px_6px_rgba(0,0,0,0.04)] hover:bg-white/90 hover:border-black/15 hover:-translate-y-2 transition-all duration-300 group overflow-hidden"
          >
            {/* Ambient Reflection */}
            <div className="absolute -top-16 -right-16 w-36 h-36 bg-[#65B5F5]/10 rounded-full blur-2xl group-hover:bg-[#65B5F5]/25 transition-all duration-300 pointer-events-none" />

            <div className="relative z-10 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono tracking-wider text-black/50 uppercase">
                  VOICE AI DISPATCH · SYSTEM 01
                </span>
                <span className="inline-block text-[12px] font-semibold px-3 py-1 rounded-full bg-[#65B5F5]/15 text-black border border-[#65B5F5]/40 font-mono shadow-sm">
                  3x Faster Response
                </span>
              </div>
              <p className="text-sm sm:text-base text-black/75 leading-relaxed">
                &ldquo;Calls came in while our crews were on roofs. Jidoka&apos;s voice agent answers 24/7, qualifies the job scope, and books directly. Zero missed leads.&rdquo;
              </p>
            </div>

            <div className="relative z-10 flex items-center justify-between pt-5 mt-4 border-t border-black/5">
              <div>
                <h3 className="font-bold text-base text-black" style={{ fontFamily: "var(--font-heading)" }}>
                  Dave Callahan
                </h3>
                <p className="text-xs text-black/60 font-mono">Owner · Callahan Roofing</p>
              </div>
              <div className="w-11 h-11 rounded-2xl overflow-hidden border border-black/10 relative shrink-0 shadow-sm">
                <Image
                  src="/images/client_dave.jpg"
                  alt="Dave Callahan"
                  fill
                  sizes="44px"
                  className="object-cover"
                />
              </div>
            </div>
          </TimelineContent>

          {/* Card 4: PT Clinic (Frosted Glass Box with Ambient Glow) */}
          <TimelineContent
            animationNum={6}
            customVariants={revealVariants}
            timelineRef={testimonialRef}
            className="flex flex-col justify-between relative bg-white/70 backdrop-blur-xl border border-white/80 rounded-3xl p-7 sm:p-8 shadow-[0_10px_30px_rgba(0,0,0,0.03),0_1px_3px_rgba(0,0,0,0.02)] ring-1 ring-black/[0.05] hover:shadow-[0_25px_50px_rgba(0,0,0,0.08),0_2px_6px_rgba(0,0,0,0.04)] hover:bg-white/90 hover:border-black/15 hover:-translate-y-2 transition-all duration-300 group overflow-hidden"
          >
            {/* Ambient Reflection */}
            <div className="absolute -top-16 -right-16 w-36 h-36 bg-[#65B5F5]/10 rounded-full blur-2xl group-hover:bg-[#65B5F5]/25 transition-all duration-300 pointer-events-none" />

            <div className="relative z-10 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono tracking-wider text-black/50 uppercase">
                  CLINIC RECOVERY · SYSTEM 08
                </span>
                <span className="inline-block text-[12px] font-semibold px-3 py-1 rounded-full bg-black/5 text-black/70 border border-black/10 font-mono shadow-sm">
                  94% Recovery
                </span>
              </div>
              <p className="text-sm sm:text-base text-black/75 leading-relaxed">
                &ldquo;The reminder cascade and automatic same-day rescheduling recovered 14 empty slots in our first month. Patients love how fast it confirms.&rdquo;
              </p>
            </div>

            <div className="relative z-10 flex items-center justify-between pt-5 mt-4 border-t border-black/5">
              <div>
                <h3 className="font-bold text-base text-black" style={{ fontFamily: "var(--font-heading)" }}>
                  Dr. Sarah Lin
                </h3>
                <p className="text-xs text-black/60 font-mono">Director · Central Mass Health</p>
              </div>
              <div className="w-11 h-11 rounded-2xl overflow-hidden border border-black/10 relative shrink-0 shadow-sm">
                <Image
                  src="/images/client_elena.jpg"
                  alt="Dr. Sarah Lin"
                  fill
                  sizes="44px"
                  className="object-cover"
                />
              </div>
            </div>
          </TimelineContent>
        </div>

        {/* ==================== COLUMN 3 ==================== */}
        <div className="flex flex-col gap-5 sm:gap-6">
          {/* Card 5: Engineering Assurance (Light Blue Frosted Glass) */}
          <TimelineContent
            animationNum={7}
            customVariants={revealVariants}
            timelineRef={testimonialRef}
            className="flex flex-col justify-between relative bg-white/70 backdrop-blur-xl border border-white/80 rounded-3xl p-7 sm:p-8 shadow-[0_10px_30px_rgba(0,0,0,0.03),0_1px_3px_rgba(0,0,0,0.02)] ring-1 ring-black/[0.05] hover:shadow-[0_25px_50px_rgba(0,0,0,0.08),0_2px_6px_rgba(0,0,0,0.04)] hover:bg-white/90 hover:border-black/15 hover:-translate-y-2 transition-all duration-300 group overflow-hidden"
          >
            {/* Ambient Reflection */}
            <div className="absolute -top-16 -right-16 w-36 h-36 bg-[#65B5F5]/10 rounded-full blur-2xl group-hover:bg-[#65B5F5]/25 transition-all duration-300 pointer-events-none" />

            <div className="relative z-10 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono tracking-wider text-[#65B5F5] font-bold uppercase">
                  DIRECT ACCESS · DWY MODEL
                </span>
                <span className="inline-block text-[12px] font-semibold px-3 py-1 rounded-full bg-[#65B5F5]/15 text-black border border-[#65B5F5]/40 font-mono shadow-sm">
                  1-on-1 Build
                </span>
              </div>
              <p className="text-sm sm:text-base text-black/75 leading-relaxed">
                &ldquo;Direct access to the builder made all the difference. No agency telephone game. We got a custom pipeline running in 2 weeks flat.&rdquo;
              </p>
            </div>

            <div className="relative z-10 flex items-center justify-between pt-5 mt-4 border-t border-black/5">
              <div>
                <h3 className="font-bold text-base text-black" style={{ fontFamily: "var(--font-heading)" }}>
                  Kevin O&apos;Donnell
                </h3>
                <p className="text-xs text-black/60 font-mono">VP Ops · Apex Logistics</p>
              </div>
              <div className="w-11 h-11 rounded-2xl overflow-hidden border border-black/20 relative shrink-0 shadow-sm">
                <Image
                  src="/images/client_dave.jpg"
                  alt="Kevin O'Donnell"
                  fill
                  sizes="44px"
                  className="object-cover"
                />
              </div>
            </div>
          </TimelineContent>

          {/* Card 6: Founder Commitment Card (Dark Glass Bento with Glow) */}
          <TimelineContent
            animationNum={8}
            customVariants={revealVariants}
            timelineRef={testimonialRef}
            className="flex-1 flex flex-col justify-between relative bg-black/95 backdrop-blur-xl text-white overflow-hidden rounded-3xl border border-white/10 p-7 sm:p-9 shadow-[0_20px_45px_rgba(0,0,0,0.15)] ring-1 ring-white/10 hover:shadow-[0_25px_50px_rgba(0,0,0,0.25)] hover:-translate-y-2 hover:border-white/20 transition-all duration-300 group min-h-[260px]"
          >
            {/* Ambient Reflection */}
            <div className="absolute -top-16 -right-16 w-40 h-40 bg-[#65B5F5]/20 rounded-full blur-3xl group-hover:bg-[#65B5F5]/35 transition-all duration-300 pointer-events-none" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

            <div className="relative z-10 space-y-3.5">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#65B5F5] font-semibold">
                  FOUNDER COMMITMENT
                </span>
                <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-[#34d399]/15 text-[#34d399] border border-[#34d399]/30">
                  ● Direct Support
                </span>
              </div>
              <p className="text-sm sm:text-base text-white/90 leading-relaxed italic">
                &ldquo;We don&apos;t take on 100 clients at once. Every system is scoped, built, and supported directly by me until it works flawlessly.&rdquo;
              </p>
            </div>

            <div className="relative z-10 flex items-center justify-between pt-6 mt-4 border-t border-white/10">
              <div>
                <h3 className="font-bold text-base sm:text-lg text-white" style={{ fontFamily: "var(--font-heading)" }}>
                  Bryce Meizen
                </h3>
                <p className="text-xs text-[#65B5F5] font-mono">Founder & Lead Engineer · Jidoka</p>
              </div>
              <div className="w-12 h-12 rounded-2xl overflow-hidden border border-[#65B5F5]/40 relative shrink-0 shadow-md">
                <Image
                  src="/images/bryce_meizen.jpg"
                  alt="Bryce Meizen"
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </div>
            </div>
          </TimelineContent>
        </div>

      </div>
    </div>
  );
}
