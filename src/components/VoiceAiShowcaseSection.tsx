"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Check, ArrowRight, PhoneCall, Volume2, Play, Pause, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function VoiceAiShowcaseSection() {
  const [isPlayingDemo, setIsPlayingDemo] = useState(false);
  const [demoSeconds, setDemoSeconds] = useState(0);

  // Audio timer simulation
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlayingDemo) {
      timer = setInterval(() => {
        setDemoSeconds((prev) => (prev >= 24 ? 0 : prev + 1));
      }, 1000);
    } else {
      setDemoSeconds(0);
    }
    return () => clearInterval(timer);
  }, [isPlayingDemo]);

  return (
    <section className="relative w-full bg-[#FAF8F5] py-12 sm:py-16 md:py-20 px-3 sm:px-6 lg:px-8 xl:px-10 border-t border-black/10">
      <div className="w-full max-w-[1440px] 2xl:max-w-[1520px] mx-auto">
        {/* =========================================================================
            DESKTOP VIEW (Wide cinematic layout: Robot visual on left, text on right)
            ========================================================================= */}
        <div className="hidden lg:grid lg:grid-cols-12 relative min-h-[480px] xl:min-h-[520px] 2xl:min-h-[560px] overflow-hidden rounded-3xl border border-white/15 bg-[#060D17] shadow-[0_25px_60px_rgba(0,0,0,0.3)]">
          {/* Background Image: Contains Robot on chair with phone, speech bubble, and waveform */}
          <Image
            src="/images/voice-ai-receptionist-banners.png"
            alt="Meet Your Jidoka AI Voice Receptionist"
            fill
            priority
            className="object-cover object-left pointer-events-none select-none"
          />

          {/* Smooth horizontal gradient to guarantee maximum text contrast on the right */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#060D17]/30 to-[#060D17]/95 pointer-events-none" />

          {/* Left Column: Blank spacer with subtle pulsing waveform accent beside robot */}
          <div className="col-span-6 xl:col-span-7 relative flex items-end justify-center pb-8 xl:pb-12 pointer-events-none">
            <div className="hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-[#65B5F5]/30 text-[10px] font-mono text-[#65B5F5] shadow-lg shadow-[#65B5F5]/10 pointer-events-auto">
              <div className="flex items-center gap-0.5 h-3">
                <span className="w-0.5 h-2 bg-[#65B5F5] rounded-full animate-pulse" />
                <span className="w-0.5 h-3 bg-[#65B5F5] rounded-full animate-bounce" />
                <span className="w-0.5 h-2 bg-[#65B5F5] rounded-full animate-pulse" />
                <span className="w-0.5 h-3.5 bg-[#65B5F5] rounded-full animate-bounce" />
                <span className="w-0.5 h-1.5 bg-[#65B5F5] rounded-full animate-pulse" />
              </div>
              <span className="font-semibold tracking-wider">0.4s Voice Response · Live</span>
            </div>
          </div>

          {/* Right Column: HTML Text Content & CTA (No overlap with robot or speech bubble) */}
          <div className="col-span-6 xl:col-span-5 relative z-10 flex flex-col justify-center p-8 xl:p-12 space-y-5 text-white">
            {/* Tag Pill Row */}
            <div className="flex items-center justify-between gap-3 flex-wrap">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#65B5F5]/15 border border-[#65B5F5]/35 text-[11px] font-mono uppercase tracking-widest text-[#65B5F5] font-bold shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#65B5F5] animate-pulse" />
                VOICE AI IN ACTION
              </span>
            </div>

            {/* Headline */}
            <h2
              className="text-3xl xl:text-4xl 2xl:text-[42px] font-bold tracking-tight text-white leading-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Meet Your AI Receptionist
            </h2>

            {/* Concise Value Proposition */}
            <p className="text-sm xl:text-[15px] text-zinc-300 leading-relaxed font-normal">
              A friendly, professional voice agent that sounds natural, answers questions,
              and books appointments just like a real team member.
            </p>

            {/* 3 Value Checkmarks */}
            <ul className="space-y-2.5 pt-1 text-sm font-medium text-zinc-200">
              <li className="flex items-center gap-2.5">
                <span className="w-5 h-5 rounded-full bg-[#65B5F5]/20 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 text-[#65B5F5]" />
                </span>
                <span>Custom trained for your business</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-5 h-5 rounded-full bg-[#65B5F5]/20 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 text-[#65B5F5]" />
                </span>
                <span>Handles common questions</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-5 h-5 rounded-full bg-[#65B5F5]/20 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 text-[#65B5F5]" />
                </span>
                <span>Books directly into your calendar</span>
              </li>
            </ul>

            {/* Interactive Call Demo CTA Button */}
            <div className="pt-2">
              <button
                type="button"
                onClick={() => setIsPlayingDemo(true)}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-bold text-sm bg-[#65B5F5] text-black hover:bg-white hover:text-black transition-all duration-200 shadow-lg shadow-[#65B5F5]/25 cursor-pointer group"
              >
                <PhoneCall className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                <span>Hear a Real Call Demo</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* =========================================================================
            MOBILE & TABLET VIEW (Clean Stacking: Full Robot Image at Top, Text Below)
            Zero Overlap Guarantee: Image text and HTML text remain 100% separate.
            ========================================================================= */}
        <div className="block lg:hidden rounded-3xl border border-white/15 bg-[#060D17] shadow-[0_20px_50px_rgba(0,0,0,0.25)] overflow-hidden">
          {/* Top Half: Full Robot visual including chair, phone, bubble & wave */}
          <div className="relative w-full aspect-[16/9] sm:aspect-[2/1] overflow-hidden border-b border-white/10">
            <Image
              src="/images/voice-ai-receptionist-banners.png"
              alt="Meet Your Jidoka AI Voice Receptionist"
              fill
              priority
              className="object-cover object-left select-none"
            />
          </div>

          {/* Bottom Half: Clean HTML Content with comfortable padding */}
          <div className="p-6 sm:p-8 bg-gradient-to-b from-[#07111e] to-[#040812] space-y-5 text-white">
            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#65B5F5]/15 border border-[#65B5F5]/35 text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-[#65B5F5] font-bold shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#65B5F5] animate-pulse" />
                VOICE AI IN ACTION
              </span>
            </div>

            <h2
              className="text-2xl sm:text-3xl font-bold tracking-tight text-white leading-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Meet Your AI Receptionist
            </h2>

            <p className="text-sm text-zinc-300 leading-relaxed font-normal">
              A friendly, professional voice agent that sounds natural, answers questions,
              and books appointments just like a real team member.
            </p>

            {/* 3 Bullet Checks */}
            <ul className="space-y-2.5 pt-1 text-sm font-medium text-zinc-200">
              <li className="flex items-center gap-2.5">
                <span className="w-5 h-5 rounded-full bg-[#65B5F5]/20 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 text-[#65B5F5]" />
                </span>
                <span>Custom trained for your business</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-5 h-5 rounded-full bg-[#65B5F5]/20 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 text-[#65B5F5]" />
                </span>
                <span>Handles common questions</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-5 h-5 rounded-full bg-[#65B5F5]/20 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 text-[#65B5F5]" />
                </span>
                <span>Books directly into your calendar</span>
              </li>
            </ul>

            {/* CTA Button */}
            <div className="pt-2">
              <button
                type="button"
                onClick={() => setIsPlayingDemo(true)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-bold text-sm bg-[#65B5F5] text-black hover:bg-white hover:text-black transition-all duration-200 shadow-md shadow-[#65B5F5]/20 cursor-pointer group"
              >
                <PhoneCall className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                <span>Hear a Real Call Demo</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          INTERACTIVE REAL CALL DEMO MODAL (WHEN VISITOR CLICKS BUTTON)
          ========================================================================= */}
      <AnimatePresence>
        {isPlayingDemo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative bg-[#09111C] text-white border border-[#1C2C3E] rounded-3xl max-w-xl w-full shadow-2xl p-6 sm:p-8 space-y-6 ring-1 ring-white/10"
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-4 pb-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#65B5F5]/20 border border-[#65B5F5]/30 flex items-center justify-center text-[#65B5F5] shrink-0">
                    <PhoneCall className="w-6 h-6 animate-pulse" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-[11px] font-mono tracking-wider text-emerald-400 uppercase font-bold">
                        Live Call Playback
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      Inbound Emergency Estimate
                    </h3>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setIsPlayingDemo(false)}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white/80 hover:text-white transition-colors cursor-pointer"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Live Waveform Player Bar */}
              <div className="bg-[#0D1826] border border-[#1F334A] rounded-2xl p-4 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1 h-6">
                    <span className="w-1 h-3 bg-[#65B5F5] rounded-full animate-pulse" />
                    <span className="w-1 h-5 bg-[#65B5F5] rounded-full animate-bounce" />
                    <span className="w-1 h-7 bg-[#65B5F5] rounded-full animate-pulse" />
                    <span className="w-1 h-4 bg-[#65B5F5] rounded-full animate-bounce" />
                    <span className="w-1 h-6 bg-[#65B5F5] rounded-full animate-pulse" />
                  </div>
                  <div className="text-xs font-mono text-zinc-300">
                    00:{demoSeconds < 10 ? `0${demoSeconds}` : demoSeconds} / 00:24
                  </div>
                </div>

                <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-[#65B5F5]/15 text-[#65B5F5] border border-[#65B5F5]/30">
                  0.4s AI Latency
                </span>
              </div>

              {/* Call Transcript Preview */}
              <div className="space-y-2.5 text-xs font-mono">
                <div className="bg-white/5 p-3.5 rounded-xl border border-white/5 space-y-1">
                  <span className="text-zinc-400 font-bold">CUSTOMER (9:42 PM):</span>
                  <p className="text-zinc-200">
                    &ldquo;Hi, our walk-in cooler just shut down and temperature is spiking. Do you have a technician on-call tonight?&rdquo;
                  </p>
                </div>

                <div className="bg-[#65B5F5]/10 border border-[#65B5F5]/30 p-3.5 rounded-xl space-y-1">
                  <span className="text-[#65B5F5] font-bold">
                    JIDOKA VOICE AI (0.4s RESPONSE):
                  </span>
                  <p className="text-white">
                    &ldquo;I understand that&apos;s urgent for food safety. I can dispatch Dave from our on-call rotation to your facility tonight at 10:15 PM. Flat dispatch is $185. Would you like me to lock that in on Dave&apos;s calendar?&rdquo;
                  </p>
                </div>

                <div className="flex items-center justify-between text-[11px] text-emerald-400 pt-1 px-1">
                  <span>✓ Calendar Slot Locked: 10:15 PM</span>
                  <span>✓ SMS Confirmation Dispatched</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <a
                  href="#contact"
                  onClick={() => setIsPlayingDemo(false)}
                  className="w-full sm:flex-1 py-3 px-5 rounded-full font-bold text-xs bg-[#65B5F5] text-black hover:bg-white transition-all text-center flex items-center justify-center gap-1.5"
                >
                  <span>Build This For My Business</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
                <button
                  type="button"
                  onClick={() => setIsPlayingDemo(false)}
                  className="w-full sm:w-auto py-3 px-5 rounded-full font-semibold text-xs text-zinc-300 hover:text-white transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
