"use client";

import React, { useState, useEffect } from "react";

interface NavbarProps {
  navLinks?: string[];
  ctaText?: string;
  ctaHref?: string;
}

export default function Navbar({
  navLinks = ["Products", "Approach", "Results", "About"],
  ctaText = "Book a Coffee Chat",
  ctaHref = "#contact",
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* --------------------------------------------------------------------------
          FLOATING CURVED CAPSULE NAVBAR (Z-INDEX: 50)
          -------------------------------------------------------------------------- */}
      <header className="fixed top-3 sm:top-5 inset-x-0 mx-auto max-w-5xl px-3 sm:px-6 z-50 select-none">
        <nav
          className={`w-full rounded-full border px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between transition-all duration-300 ring-1 ring-black/[0.04] ${
            scrolled
              ? "bg-white/65 backdrop-blur-2xl border-white/60 shadow-xl shadow-black/10"
              : "bg-white/45 backdrop-blur-xl border-white/40 shadow-lg shadow-black/5"
          }`}
        >
          {/* Left: Logo */}
          <div className="flex items-center gap-2">
            <a
              href="/"
              className="text-[19px] sm:text-[22px] tracking-tight text-black font-semibold leading-none cursor-pointer hover:opacity-75 transition-opacity"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Jidoka®
            </a>
          </div>

          {/* Center: Desktop Nav Links (hidden below md) */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-[14px] sm:text-[15px] font-medium text-black/75 hover:text-black hover:bg-black/5 px-3.5 py-1.5 rounded-full transition-all duration-200"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Right: Desktop CTA + Phone */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:5084987168"
              className="text-[13px] font-mono text-black/70 hover:text-black transition-colors"
            >
              (508) 498-7168
            </a>
            <a
              href={ctaHref}
              className="inline-flex items-center justify-center bg-black text-white hover:bg-black/85 text-[13px] sm:text-[14px] font-medium px-4 sm:px-5 py-2 rounded-full transition-all duration-200 shadow-sm cursor-pointer"
            >
              {ctaText}
            </a>
          </div>

          {/* Mobile Hamburger Toggle (visible below md) */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-[5px] z-20 cursor-pointer focus:outline-none p-1 rounded-full hover:bg-black/5"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            <span
              className={`w-5 h-[2px] bg-black transition-all duration-300 transform ${
                mobileMenuOpen ? "rotate-45 translate-y-[7px]" : ""
              }`}
            />
            <span
              className={`w-5 h-[2px] bg-black transition-all duration-300 ${
                mobileMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`w-5 h-[2px] bg-black transition-all duration-300 transform ${
                mobileMenuOpen ? "-rotate-45 -translate-y-[7px]" : ""
              }`}
            />
          </button>
        </nav>
      </header>

      {/* --------------------------------------------------------------------------
          MOBILE OVERLAY DRAWER (Z-INDEX: 40)
          -------------------------------------------------------------------------- */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm md:hidden transition-opacity duration-300 z-40 ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileMenuOpen(false)}
      >
        <div
          className={`absolute top-20 inset-x-4 bg-white/80 backdrop-blur-2xl border border-white/60 rounded-3xl p-6 shadow-2xl shadow-black/10 flex flex-col gap-4 transition-all duration-300 transform ${
            mobileMenuOpen ? "translate-y-0 scale-100" : "-translate-y-4 scale-95"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setMobileMenuOpen(false)}
              className="text-[20px] font-semibold text-black hover:text-[#D93F1D] py-1 transition-colors"
            >
              {link}
            </a>
          ))}

          <div className="pt-4 border-t border-black/10 flex flex-col gap-3">
            <a
              href="tel:5084987168"
              className="text-sm font-mono text-black/70"
            >
              Phone: (508) 498-7168
            </a>
            <a
              href={ctaHref}
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center justify-center bg-black text-white py-3 rounded-full text-base font-semibold shadow-md"
            >
              {ctaText}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
