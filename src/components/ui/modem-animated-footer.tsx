"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

export interface FooterLink {
  label: string;
  href: string;
}

export interface SocialLink {
  icon: React.ReactNode;
  href: string;
  label: string;
}

export interface FooterProps {
  brandName?: string;
  brandDescription?: string;
  socialLinks?: SocialLink[];
  navLinks?: FooterLink[];
  creatorName?: string;
  creatorUrl?: string;
  brandIcon?: React.ReactNode;
  logoSrc?: string;
  iconSrc?: string;
  className?: string;
}

export const Footer: React.FC<FooterProps> = ({
  brandName = "JIDOKA",
  brandDescription = "Personalized AI agent & automation studio. Built one business at a time in Worcester, MA.",
  socialLinks = [],
  navLinks = [],
  creatorName,
  creatorUrl,
  brandIcon,
  logoSrc = "/jidoka-logo.webp",
  iconSrc = "/jidoka-icon.png",
  className,
}) => {
  return (
    <section className={cn("relative w-full mt-0 overflow-hidden bg-black text-white select-none", className)}>
      <footer className="border-t border-white/10 bg-[#07080c] relative pt-16 pb-12 overflow-hidden">
        {/* Ambient Top Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-[#65B5F5]/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl flex flex-col justify-between mx-auto min-h-[30rem] sm:min-h-[34rem] md:min-h-[38rem] relative p-4 py-8 z-10">
          <div className="flex flex-col mb-12 sm:mb-20 md:mb-0 w-full">
            <div className="w-full flex flex-col items-center">
              
              {/* Brand Logo & Description */}
              <div className="space-y-4 flex flex-col items-center flex-1 text-center">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono uppercase tracking-widest text-[#65B5F5]">
                  <span>WORCESTER, MA</span>
                  <span>·</span>
                  <span>EST. 2023</span>
                </div>

                {/* Top Logo Image (jidoka-logo.webp) */}
                <div className="flex items-center justify-center my-1">
                  <Image
                    src={logoSrc}
                    alt={`${brandName} Logo`}
                    width={180}
                    height={48}
                    className="h-10 sm:h-12 w-auto object-contain drop-shadow-md brightness-110"
                    priority
                  />
                </div>

                <p className="text-white/60 font-medium text-center w-full max-w-md sm:w-[460px] text-sm sm:text-base leading-relaxed px-4 sm:px-0">
                  {brandDescription}
                </p>
              </div>

              {/* Social / Contact Links */}
              {socialLinks.length > 0 && (
                <div className="flex mb-8 mt-6 gap-3 sm:gap-4">
                  {socialLinks.map((link, index) => (
                    <Link
                      key={index}
                      href={link.href}
                      className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#65B5F5]/40 text-white/70 hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-sm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="w-5 h-5 flex items-center justify-center">
                        {link.icon}
                      </div>
                      <span className="sr-only">{link.label}</span>
                    </Link>
                  ))}
                </div>
              )}

              {/* Navigation Links */}
              {navLinks.length > 0 && (
                <div className="flex flex-wrap justify-center gap-6 sm:gap-8 text-xs sm:text-sm font-mono tracking-wider uppercase text-white/70 max-w-full px-4">
                  {navLinks.map((link, index) => (
                    <Link
                      key={index}
                      className="hover:text-[#65B5F5] transition-colors duration-200"
                      href={link.href}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Bottom Copyright & Credits */}
          <div className="mt-16 md:mt-24 flex flex-col gap-3 md:gap-1 items-center justify-center md:flex-row md:items-center md:justify-between px-4 md:px-0 text-xs text-white/50 font-mono">
            <p className="text-center md:text-left">
              ©{new Date().getFullYear()} {brandName} LLC. ALL RIGHTS RESERVED.
            </p>
            {creatorName && creatorUrl && (
              <nav className="flex gap-4">
                <Link
                  href={creatorUrl}
                  target="_blank"
                  className="hover:text-white transition-colors duration-300"
                >
                  ENGINEERED BY {creatorName.toUpperCase()}
                </Link>
              </nav>
            )}
          </div>
        </div>

        {/* Large background watermark text */}
        <div 
          className="bg-gradient-to-b from-white/15 via-white/[0.04] to-transparent bg-clip-text text-transparent leading-none absolute left-1/2 -translate-x-1/2 bottom-40 md:bottom-28 font-black tracking-tighter pointer-events-none select-none text-center px-4"
          style={{
            fontSize: 'clamp(4rem, 16vw, 13rem)',
            maxWidth: '95vw',
            fontFamily: 'var(--font-heading)'
          }}
        >
          {brandName.toUpperCase()}
        </div>

        {/* Floating Bottom Logo Badge with jidoka-icon.png */}
        <div className="absolute hover:border-[#65B5F5]/60 transition-all duration-300 drop-shadow-[0_0px_25px_rgba(101,181,245,0.35)] bottom-24 md:bottom-20 backdrop-blur-md rounded-3xl bg-[#0e121a]/90 left-1/2 border border-white/20 flex items-center justify-center p-3 -translate-x-1/2 z-20 hover:scale-105">
          <div className="w-14 sm:w-16 md:w-20 h-14 sm:h-16 md:h-20 rounded-2xl flex items-center justify-center overflow-hidden relative shadow-lg bg-black/60 p-2 border border-white/10">
            {brandIcon || (
              <Image
                src={iconSrc}
                alt={`${brandName} Icon`}
                width={80}
                height={80}
                className="w-full h-full object-contain drop-shadow-md"
              />
            )}
          </div>
        </div>

        {/* Bottom Horizontal Glow Line */}
        <div className="absolute bottom-32 sm:bottom-30 backdrop-blur-sm h-[1px] bg-gradient-to-r from-transparent via-[#65B5F5]/50 to-transparent w-full left-1/2 -translate-x-1/2 z-10 pointer-events-none" />

        {/* Bottom Depth Shadow */}
        <div className="bg-gradient-to-t from-[#07080c] via-[#07080c]/80 blur-[1em] to-transparent absolute bottom-24 w-full h-20 pointer-events-none" />
      </footer>
    </section>
  );
};
