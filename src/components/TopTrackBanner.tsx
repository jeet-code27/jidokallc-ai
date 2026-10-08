"use client";

import React from "react";
import { Briefcase, Building2 } from "lucide-react";

export type SiteTrack = "business" | "enterprise";

interface TopTrackBannerProps {
  activeTrack: SiteTrack;
  onSelectTrack: (track: SiteTrack) => void;
}

export default function TopTrackBanner({
  activeTrack,
  onSelectTrack,
}: TopTrackBannerProps) {
  const isBusiness = activeTrack === "business";
  const isEnterprise = activeTrack === "enterprise";

  return (
    <div
      className="fixed top-0 inset-x-0 w-full z-50 h-11 sm:h-12 bg-[#06080F] border-b border-white/10 select-none shadow-md flex items-stretch text-white"
      role="region"
      aria-label="Audience Track Switcher"
    >
      {/* --------------------------------------------------------------------------
          LEFT 50%: BUSINESS
          -------------------------------------------------------------------------- */}
      <button
        type="button"
        onClick={() => onSelectTrack("business")}
        className={`w-1/2 flex items-center justify-center gap-1.5 sm:gap-2.5 px-2 sm:px-5 transition-colors duration-200 relative cursor-pointer ${
          isBusiness
            ? "bg-[#0B1524] text-white"
            : "bg-[#06080F] text-zinc-400 hover:text-white hover:bg-white/[0.03]"
        }`}
        aria-pressed={isBusiness}
      >
        {/* Crisp Solid Active Border (No blur) */}
        {isBusiness && (
          <div className="absolute bottom-0 inset-x-0 h-[2.5px] bg-[#65B5F5]" />
        )}

        <Briefcase
          className={`w-3.5 h-3.5 shrink-0 ${
            isBusiness ? "text-[#65B5F5]" : "text-zinc-500"
          }`}
        />

        {/* Clean, Sharp Typography (No uppercase, no blur, responsive label) */}
        <span
          className="text-[13px] sm:text-[14px] font-bold tracking-tight whitespace-nowrap antialiased"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          <span className="sm:hidden">Business</span>
          <span className="hidden sm:inline">Business Solutions</span>
        </span>

        {/* Desktop Tagline */}
        {isBusiness && (
          <span className="hidden lg:inline-block text-[11px] text-zinc-400 font-normal border-l border-white/10 pl-2.5 whitespace-nowrap">
            Build a business you love
          </span>
        )}
      </button>

      {/* Hairline Center Divider */}
      <div className="w-[1px] my-2 bg-white/15 shrink-0" />

      {/* --------------------------------------------------------------------------
          RIGHT 50%: ENTERPRISE
          -------------------------------------------------------------------------- */}
      <button
        type="button"
        onClick={() => onSelectTrack("enterprise")}
        className={`w-1/2 flex items-center justify-center gap-1.5 sm:gap-2.5 px-2 sm:px-5 transition-colors duration-200 relative cursor-pointer ${
          isEnterprise
            ? "bg-[#181436] text-white"
            : "bg-[#06080F] text-zinc-400 hover:text-white hover:bg-white/[0.03]"
        }`}
        aria-pressed={isEnterprise}
      >
        {/* Crisp Solid Active Border (No blur) */}
        {isEnterprise && (
          <div className="absolute bottom-0 inset-x-0 h-[2.5px] bg-[#818CF8]" />
        )}

        <Building2
          className={`w-3.5 h-3.5 shrink-0 ${
            isEnterprise ? "text-[#818CF8]" : "text-zinc-500"
          }`}
        />

        {/* Clean, Sharp Typography (No uppercase, no blur, responsive label) */}
        <span
          className="text-[13px] sm:text-[14px] font-bold tracking-tight whitespace-nowrap antialiased"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          <span className="sm:hidden">Enterprise</span>
          <span className="hidden sm:inline">Enterprise Fleet</span>
        </span>

        {/* Desktop Tagline */}
        {isEnterprise && (
          <span className="hidden lg:inline-block text-[11px] text-zinc-400 font-normal border-l border-white/10 pl-2.5 whitespace-nowrap">
            Mission-critical infrastructure
          </span>
        )}
      </button>
    </div>
  );
}
