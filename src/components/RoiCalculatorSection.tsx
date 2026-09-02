"use client";

import React, { useState, useEffect } from "react";
import { useSpring } from "motion/react";
import { ScrollReveal } from "./ui/scroll-reveal";

export default function RoiCalculatorSection() {
  const [hours, setHours] = useState<number>(12);
  const [rate, setRate] = useState<number>(28);
  const [people, setPeople] = useState<number>(3);
  const [weeks, setWeeks] = useState<number>(52);

  // Raw calculations
  const totalAnnual = hours * rate * people * weeks;
  const monthlyCost = Math.round(totalAnnual / 12);
  const totalAnnualHours = hours * people * weeks;
  const annualWeeksSaved = Math.round(totalAnnualHours / 40);

  // Animated smooth spring count-up for annual drain
  const springValue = useSpring(totalAnnual, {
    stiffness: 120,
    damping: 24,
  });

  useEffect(() => {
    springValue.set(totalAnnual);
  }, [totalAnnual, springValue]);

  const [displayValue, setDisplayValue] = useState(totalAnnual);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      setDisplayValue(Math.round(latest));
    });
    return () => unsubscribe();
  }, [springValue]);

  return (
    <section id="calculator" className="relative w-full bg-[#FAF8F5] text-black py-20 sm:py-28 px-5 sm:px-8 md:px-10 border-t border-black/10 select-none overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* =========================================================================
            1. SECTION HEADER (WITH BRAND HIGHLIGHT STICKER)
            ========================================================================= */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-14 sm:mb-18 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/5 border border-black/10 text-[12px] sm:text-[13px] font-mono uppercase tracking-widest text-black/70">
            <span>DO THE MATH</span>
            <span>·</span>
            <span>ROI ESTIMATOR</span>
          </div>

          <h2
            className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-black leading-tight"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            What is{" "}
            <span className="relative inline-block mx-1.5 px-3.5 py-0.5 rounded-xl bg-[#65B5F5] text-black -rotate-1 shadow-sm font-extrabold border border-black/10">
              manual work
            </span>{" "}
            costing you right now?
          </h2>

          <p className="text-base sm:text-lg text-black/70 leading-relaxed max-w-2xl mx-auto">
            Rough numbers are fine. The point is to understand the true order of magnitude.
          </p>
        </ScrollReveal>

        {/* =========================================================================
            2. CALCULATOR GRID (SLIDERS LEFT, DYNAMIC RESULT CARD RIGHT)
            ========================================================================= */}
        <ScrollReveal delay={0.15}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* Left Column: Interactive Sliders (Glassmorphic Box with Ambient Glow) */}
          <div className="relative lg:col-span-7 bg-white/70 backdrop-blur-xl border border-white/80 rounded-3xl p-7 sm:p-10 shadow-[0_10px_30px_rgba(0,0,0,0.03),0_1px_3px_rgba(0,0,0,0.02)] ring-1 ring-black/[0.05] hover:shadow-[0_20px_45px_rgba(0,0,0,0.06)] hover:bg-white/85 hover:border-black/15 transition-all duration-300 flex flex-col justify-between space-y-8 group overflow-hidden">
            {/* Subtle top-right ambient reflection */}
            <div className="absolute -top-20 -right-20 w-44 h-44 bg-[#65B5F5]/10 rounded-full blur-3xl group-hover:bg-[#65B5F5]/25 transition-all duration-300 pointer-events-none" />

            <div className="relative z-10 space-y-7">
              {/* Slider 1: Hours per week */}
              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm sm:text-base font-semibold text-black">
                  <span>Hours per week on repetitive tasks</span>
                  <span className="font-mono text-base sm:text-lg font-bold px-3 py-1 bg-black/5 rounded-xl border border-black/10">
                    {hours} hrs/wk
                  </span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={40}
                  value={hours}
                  onChange={(e) => setHours(Number(e.target.value))}
                  className="w-full h-2.5 bg-black/10 rounded-lg appearance-none cursor-pointer accent-[#65B5F5]"
                />
                <div className="flex justify-between text-xs font-mono text-black/45">
                  <span>1 hr</span>
                  <span>20 hrs</span>
                  <span>40 hrs</span>
                </div>
              </div>

              {/* Slider 2: Hourly Rate */}
              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm sm:text-base font-semibold text-black">
                  <span>Hourly cost of the person doing it</span>
                  <span className="font-mono text-base sm:text-lg font-bold px-3 py-1 bg-black/5 rounded-xl border border-black/10">
                    ${rate} / hr
                  </span>
                </div>
                <input
                  type="range"
                  min={15}
                  max={150}
                  value={rate}
                  onChange={(e) => setRate(Number(e.target.value))}
                  className="w-full h-2.5 bg-black/10 rounded-lg appearance-none cursor-pointer accent-[#65B5F5]"
                />
                <div className="flex justify-between text-xs font-mono text-black/45">
                  <span>$15/hr</span>
                  <span>$80/hr</span>
                  <span>$150/hr</span>
                </div>
              </div>

              {/* Slider 3: People involved */}
              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm sm:text-base font-semibold text-black">
                  <span>How many team members do this work</span>
                  <span className="font-mono text-base sm:text-lg font-bold px-3 py-1 bg-black/5 rounded-xl border border-black/10">
                    {people} {people === 1 ? "person" : "people"}
                  </span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={50}
                  value={people}
                  onChange={(e) => setPeople(Number(e.target.value))}
                  className="w-full h-2.5 bg-black/10 rounded-lg appearance-none cursor-pointer accent-[#65B5F5]"
                />
                <div className="flex justify-between text-xs font-mono text-black/45">
                  <span>1 person</span>
                  <span>25 people</span>
                  <span>50 people</span>
                </div>
              </div>

              {/* Slider 4: Weeks worked */}
              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm sm:text-base font-semibold text-black">
                  <span>Weeks worked per year</span>
                  <span className="font-mono text-base sm:text-lg font-bold px-3 py-1 bg-black/5 rounded-xl border border-black/10">
                    {weeks} weeks
                  </span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={52}
                  value={weeks}
                  onChange={(e) => setWeeks(Number(e.target.value))}
                  className="w-full h-2.5 bg-black/10 rounded-lg appearance-none cursor-pointer accent-[#65B5F5]"
                />
                <div className="flex justify-between text-xs font-mono text-black/45">
                  <span>1 week</span>
                  <span>26 weeks</span>
                  <span>52 weeks (Full Year)</span>
                </div>
              </div>
            </div>

            <div className="relative z-10 text-xs font-mono text-black/50 pt-4 border-t border-black/5">
              Drag any slider to update calculations in real-time.
            </div>
          </div>

          {/* Right Column: High-Impact Result Card (Dark Glassmorphic Box) */}
          <div className="relative lg:col-span-5 bg-black/95 backdrop-blur-xl text-white rounded-3xl p-8 sm:p-10 flex flex-col justify-between shadow-[0_20px_45px_rgba(0,0,0,0.15)] ring-1 ring-white/10 hover:shadow-[0_25px_50px_rgba(0,0,0,0.25)] hover:-translate-y-1 transition-all duration-300 group overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute -top-20 -right-20 w-56 h-56 bg-[#65B5F5]/20 rounded-full blur-3xl group-hover:bg-[#65B5F5]/35 transition-all duration-300 pointer-events-none" />

            <div className="relative z-10 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-[11px] font-mono tracking-widest uppercase text-[#65B5F5]">
                <span>ESTIMATED ANNUAL DRAIN</span>
              </div>

              {/* Animated Big Number */}
              <div
                className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                ${displayValue.toLocaleString()}
              </div>

              {/* Dynamic Narrative Summary */}
              <p className="text-sm sm:text-base text-white/80 leading-relaxed font-normal">
                That is{" "}
                <span className="text-white font-bold underline decoration-[#65B5F5] underline-offset-4">
                  ${monthlyCost.toLocaleString()} every month
                </span>{" "}
                — roughly{" "}
                <span className="text-[#65B5F5] font-bold">
                  {annualWeeksSaved} full working weeks
                </span>{" "}
                of one person&apos;s time lost each year.
              </p>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-xs text-white/60 leading-relaxed backdrop-blur-md">
                A rough operational estimate, not a quote. It doesn&apos;t count error correction, customer churn, or unbooked revenue.
              </div>
            </div>

            {/* Action CTA */}
            <div className="relative z-10 pt-8 mt-8 border-t border-white/10">
              <a
                href="#contact"
                className="inline-flex items-center justify-center w-full py-4 px-6 rounded-full bg-[#65B5F5] text-black hover:bg-white hover:text-black font-bold text-base transition-all duration-200 shadow-md group cursor-pointer"
              >
                <span>See What We&apos;d Automate First</span>
                <span className="ml-2 group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </a>
            </div>
          </div>
        </div>
      </ScrollReveal>
      </div>
    </section>
  );
}
