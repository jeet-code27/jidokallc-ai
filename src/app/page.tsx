"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";

// Custom typewriter hook
function useTypewriter(text: string, speed = 38, startDelay = 600) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let currentIndex = 0;
    let intervalId: ReturnType<typeof setInterval>;

    const timeoutId = setTimeout(() => {
      intervalId = setInterval(() => {
        if (currentIndex < text.length) {
          setDisplayed(text.slice(0, currentIndex + 1));
          currentIndex++;
        } else {
          setDone(true);
          clearInterval(intervalId);
        }
      }, speed);
    }, startDelay);

    return () => {
      clearTimeout(timeoutId);
      if (intervalId) clearInterval(intervalId);
    };
  }, [text, speed, startDelay]);

  return { displayed, done };
}

export default function HeroLandingPage() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const prevXRef = useRef<number | null>(null);
  const targetTimeRef = useRef<number>(0);
  const isSeekingRef = useRef<boolean>(false);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [pillsVisible, setPillsVisible] = useState(false);
  const [copied, setCopied] = useState(false);

  // Typewriter effect tailored for Jidoka LLC
  const introMessage =
    "Glad you stopped in. We build custom AI agents for how your business actually runs. Now, what are we automating?";
  const { displayed, done: typingDone } = useTypewriter(introMessage, 38, 600);

  // Reveal action pills after 400ms
  useEffect(() => {
    const timer = setTimeout(() => {
      setPillsVisible(true);
    }, 400);
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
    navigator.clipboard.writeText("inbox@jidokallc.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const navLinks = ["Products", "Approach", "Results", "About"];
  const pillActions = [
    "See our 25+ systems",
    "Voice AI & Receptionists",
    "Talk directly to builder",
    "How we work (DIY / DFY)",
  ];

  return (
    <div className="relative min-h-screen w-full overflow-hidden select-none bg-black text-black">
      {/* --------------------------------------------------------------------------
          1. BACKGROUND VIDEO (MOUSE-SCRUB CONTROLLED)
          -------------------------------------------------------------------------- */}
      <video
        ref={videoRef}
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260530_042513_df96a13b-6155-4f6e-8b93-c9dee66fba08.mp4"
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
          2. FIXED NAVBAR (Z-INDEX: 10)
          -------------------------------------------------------------------------- */}
      <nav
        className="fixed top-0 left-0 right-0 w-full px-5 sm:px-8 py-4 sm:py-5 flex justify-between items-center z-10"
        style={{ zIndex: 10 }}
      >
        {/* Left: Logo */}
        <div className="flex items-center gap-3">
          <span
            className="text-[21px] sm:text-[26px] tracking-tight text-black font-medium leading-none"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Jidoka®
          </span>
          <span
            className="text-[25px] sm:text-[30px] text-black select-none leading-none"
            style={{ letterSpacing: "-0.02em" }}
            aria-hidden="true"
          >
            ✳︎
          </span>
        </div>

        {/* Center: Desktop Nav Links (hidden below md) */}
        <div className="hidden md:flex items-center text-[23px] text-black font-normal">
          {navLinks.map((link, idx) => (
            <React.Fragment key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="hover:opacity-60 transition-opacity duration-200"
              >
                {link}
              </a>
              {idx < navLinks.length - 1 && <span className="mr-2">,</span>}
            </React.Fragment>
          ))}
        </div>

        {/* Right: Desktop CTA (hidden below md) */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="text-[23px] text-black underline underline-offset-2 hover:opacity-60 transition-opacity duration-200 font-normal"
          >
            Book a Coffee Chat
          </a>
        </div>

        {/* Mobile Hamburger Toggle (visible below md) */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-[5px] z-20 cursor-pointer focus:outline-none"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
        >
          <span
            className={`w-6 h-[2px] bg-black transition-all duration-300 transform ${
              mobileMenuOpen ? "rotate-45 translate-y-[7px]" : ""
            }`}
          />
          <span
            className={`w-6 h-[2px] bg-black transition-all duration-300 ${
              mobileMenuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`w-6 h-[2px] bg-black transition-all duration-300 transform ${
              mobileMenuOpen ? "-rotate-45 -translate-y-[7px]" : ""
            }`}
          />
        </button>
      </nav>

      {/* --------------------------------------------------------------------------
          3. MOBILE OVERLAY MENU (Z-INDEX: 9)
          -------------------------------------------------------------------------- */}
      <div
        className={`fixed inset-0 bg-white/95 backdrop-blur-sm flex flex-col justify-center px-8 gap-8 md:hidden transition-all duration-300 ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        style={{ zIndex: 9 }}
      >
        {navLinks.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            onClick={() => setMobileMenuOpen(false)}
            className="text-[32px] font-medium text-black hover:opacity-60 transition-opacity"
          >
            {link}
          </a>
        ))}
        <a
          href="#contact"
          onClick={() => setMobileMenuOpen(false)}
          className="text-[32px] font-medium text-black underline underline-offset-4 hover:opacity-60 transition-opacity"
        >
          Book a Coffee Chat
        </a>
      </div>

      {/* --------------------------------------------------------------------------
          4. HERO CONTENT SECTION (Z-INDEX: 1)
          -------------------------------------------------------------------------- */}
      <main
        className="relative min-h-screen w-full flex flex-col justify-end pb-12 md:justify-center md:pb-0 px-5 sm:px-8 md:px-10 overflow-hidden"
        style={{ zIndex: 1 }}
      >
        <div className="max-w-xl relative z-10 w-full">
          {/* 1. Intro label (Clear & Crisp) */}
          <div
            className="select-none mb-5 sm:mb-6 text-black/75 font-normal"
            style={{
              fontSize: "clamp(18px, 4vw, 26px)",
              lineHeight: 1.3,
            }}
          >
            Hey there, meet Jidoka,<br />
            Custom AI Agents &amp; Automation · Worcester, MA
          </div>

          {/* 2. Typewriter text */}
          <p
            className="text-black mb-5 sm:mb-6 font-normal"
            style={{
              fontSize: "clamp(18px, 4vw, 26px)",
              lineHeight: 1.35,
              fontWeight: 400,
              minHeight: "54px",
            }}
          >
            {displayed}
            {!typingDone && (
              <span className="inline-block w-[2px] h-[1.1em] bg-black align-middle ml-[2px] animate-blink" />
            )}
          </p>

          {/* 3. Action pill buttons */}
          <div
            className="flex flex-wrap gap-y-1 transition-all duration-400 ease-out"
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
                className="inline-flex items-center justify-center bg-white text-black border border-black/10 rounded-full text-[13px] sm:text-[15px] px-4 sm:px-5 py-[0.3em] mx-[0.2em] mb-[0.4em] whitespace-nowrap hover:bg-black hover:text-white transition-colors duration-200 cursor-pointer shadow-sm"
              >
                {action}
              </button>
            ))}

            {/* Outline pill button with copy email */}
            <button
              type="button"
              onClick={handleCopyEmail}
              className="inline-flex items-center justify-center text-white bg-transparent border border-white rounded-full text-[13px] sm:text-[15px] px-4 sm:px-5 py-[0.3em] mx-[0.2em] mb-[0.4em] whitespace-nowrap gap-2 sm:gap-3 hover:bg-white hover:text-black transition-colors duration-200 cursor-pointer group shadow-sm"
              title="Click to copy email address"
            >
              <span>
                Reach us:{" "}
                <span className="underline underline-offset-1">
                  inbox@jidokallc.com
                </span>
              </span>

              {/* 12x12 Copy Icon (Overlapping Rectangles) */}
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
      </main>
    </div>
  );
}


