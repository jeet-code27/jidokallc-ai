"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";

interface HeroProps {
  videoUrl?: string;
  headline?: string;
  subheadline?: string;
  introText?: string;
  pillActions?: string[];
  contactEmail?: string;
}

export default function Hero({
  videoUrl = "https://res.cloudinary.com/dnd8u5sll/video/upload/v1788950002/Untitled_design_pqfdk7.mp4",
  headline = "Automation with a human touch.",
  subheadline = "Custom AI Agents & Intelligent Systems · Worcester, MA",
  introText,
  pillActions = [
    "See our 25+ systems",
    "Voice AI & Receptionists",
  ],
  contactEmail = "inbox@jidokallc.com",
}: HeroProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const prevXRef = useRef<number | null>(null);
  const targetTimeRef = useRef<number>(0);
  const isSeekingRef = useRef<boolean>(false);

  const [pillsVisible, setPillsVisible] = useState(false);
  const [copied, setCopied] = useState(false);

  // Reveal action pills after 300ms
  useEffect(() => {
    const timer = setTimeout(() => {
      setPillsVisible(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  // Video seeking queue handler
  const handleSeeked = useCallback(() => {
    const video = videoRef.current;
    if (!video || !video.duration) {
      isSeekingRef.current = false;
      return;
    }

    if (Math.abs(video.currentTime - targetTimeRef.current) > 0.04) {
      video.currentTime = targetTimeRef.current;
    } else {
      isSeekingRef.current = false;
    }
  }, []);

  // Mouse scrub interaction
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (prevXRef.current === null) {
        prevXRef.current = e.clientX;
        return;
      }

      const delta = e.clientX - prevXRef.current;
      prevXRef.current = e.clientX;

      if (!video.duration || isNaN(video.duration)) return;

      const SENSITIVITY = 0.8;
      const timeOffset =
        (delta / window.innerWidth) * SENSITIVITY * video.duration;
      const newTarget = Math.max(
        0,
        Math.min(video.duration, targetTimeRef.current + timeOffset)
      );
      targetTimeRef.current = newTarget;

      if (!isSeekingRef.current) {
        isSeekingRef.current = true;
        video.currentTime = newTarget;
      }
    };

    const handleMouseLeave = () => {
      prevXRef.current = null;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length === 0) return;
      const touchX = e.touches[0].clientX;
      if (prevXRef.current === null) {
        prevXRef.current = touchX;
        return;
      }
      const delta = touchX - prevXRef.current;
      prevXRef.current = touchX;

      if (!video.duration || isNaN(video.duration)) return;

      const SENSITIVITY = 0.8;
      const timeOffset =
        (delta / window.innerWidth) * SENSITIVITY * video.duration;
      const newTarget = Math.max(
        0,
        Math.min(video.duration, targetTimeRef.current + timeOffset)
      );
      targetTimeRef.current = newTarget;

      if (!isSeekingRef.current) {
        isSeekingRef.current = true;
        video.currentTime = newTarget;
      }
    };

    const handleTouchEnd = () => {
      prevXRef.current = null;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  // Copy email to clipboard
  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(contactEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden select-none bg-black text-black">
      {/* --------------------------------------------------------------------------
          1. BACKGROUND VIDEO (MOUSE-SCRUB CONTROLLED)
          -------------------------------------------------------------------------- */}
      <video
        ref={videoRef}
        src={videoUrl}
        muted
        playsInline
        preload="auto"
        onSeeked={handleSeeked}
        className="fixed inset-0 w-full h-full object-cover pointer-events-none"
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 0,
          objectFit: "cover",
          objectPosition: "70% center",
        }}
      />

      {/* --------------------------------------------------------------------------
          2. HERO CONTENT SECTION (Z-INDEX: 1)
          -------------------------------------------------------------------------- */}
      <div
        className="relative min-h-screen min-h-[100dvh] w-full flex flex-col justify-between md:justify-center pt-24 pb-8 sm:pt-28 sm:pb-10 md:py-0 px-5 sm:px-8 md:px-10 overflow-hidden"
        style={{ zIndex: 1 }}
      >
        <div className="max-w-xl relative z-10 w-full flex flex-col justify-between md:justify-center flex-1 md:flex-initial">
          {/* 1. Brand Intro / Headline (At top on mobile, centered on desktop) */}
          <div className="pt-2 sm:pt-4 md:pt-0 mb-auto md:mb-8 select-none">
            {introText ? (
              <div
                className="text-black font-semibold"
                style={{
                  fontSize: "clamp(20px, 4.2vw, 30px)",
                  lineHeight: 1.3,
                }}
              >
                {introText.split("\n").map((line, idx) => (
                  <React.Fragment key={idx}>
                    {line}
                    {idx < introText.split("\n").length - 1 && <br />}
                  </React.Fragment>
                ))}
              </div>
            ) : (
              <>
                <h1
                  className="text-black font-bold tracking-tight"
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "clamp(22px, 4.2vw, 36px)",
                    lineHeight: 1.25,
                  }}
                >
                  {headline}
                </h1>
                <p
                  className="text-black/75 font-medium mt-2 sm:mt-3"
                  style={{
                    fontSize: "clamp(13px, 2.5vw, 16px)",
                    lineHeight: 1.4,
                  }}
                >
                  {subheadline}
                </p>
              </>
            )}
          </div>

          {/* 2. Action pill buttons (At bottom on mobile, right below text on desktop) */}
          <div
            className="flex flex-wrap gap-y-1.5 transition-all duration-400 ease-out mt-auto md:mt-0 pb-1 sm:pb-2 md:pb-0"
            style={{
              opacity: pillsVisible ? 1 : 0,
              transform: pillsVisible ? "translateY(0)" : "translateY(8px)",
              transition: "opacity 0.4s ease, transform 0.4s ease",
            }}
          >
            {pillActions.map((action) => (
              <button
                key={action}
                type="button"
                onClick={() => {
                  const target = document.getElementById("systems");
                  if (target) {
                    target.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="inline-flex items-center justify-center bg-white text-black border border-black/10 rounded-full text-[13px] sm:text-[15px] px-4 sm:px-5 py-[0.3em] mx-[0.2em] mb-[0.4em] whitespace-nowrap hover:bg-black hover:text-white transition-colors duration-200 cursor-pointer shadow-sm"
              >
                {action}
              </button>
            ))}

            {/* Outline pill button with copy email */}
            <button
              type="button"
              onClick={handleCopyEmail}
              className="inline-flex items-center justify-center text-white bg-black/20 md:bg-transparent backdrop-blur-xs md:backdrop-blur-none border border-white rounded-full text-[13px] sm:text-[15px] px-4 sm:px-5 py-[0.3em] mx-[0.2em] mb-[0.4em] whitespace-nowrap gap-2 sm:gap-3 hover:bg-white hover:text-black transition-colors duration-200 cursor-pointer group shadow-sm"
              title="Click to copy email address"
            >
              <span>
                Reach us:{" "}
                <span className="underline underline-offset-1">
                  {contactEmail}
                </span>
              </span>

              {/* Copy Icon */}
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform group-hover:scale-110 flex-shrink-0"
              >
                <rect width="13" height="13" x="9" y="9" rx="2" ry="2" />
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
              </svg>

              {copied && (
                <span className="text-[11px] font-semibold text-emerald-400 group-hover:text-emerald-700 ml-1">
                  Copied!
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
