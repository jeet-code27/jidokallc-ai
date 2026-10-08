"use client";

import React, { useState } from "react";
import TopTrackBanner, { SiteTrack } from "@/components/TopTrackBanner";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AudienceToggleSection from "@/components/AudienceToggleSection";
import MarketplaceSection from "@/components/MarketplaceSection";
import ScrollVelocity from "@/components/ui/scroll-velocity";
import BrandPhilosophySection from "@/components/BrandPhilosophySection";
import RoiCalculatorSection from "@/components/RoiCalculatorSection";
import FounderSection from "@/components/FounderSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import SiteFooter from "@/components/SiteFooter";

export default function HomePage() {
  const [activeTrack, setActiveTrack] = useState<SiteTrack>("business");

  return (
    <div className="relative min-h-screen w-full bg-black text-black">
      {/* 1. Top 50-50 Business vs Enterprise Split Switcher Banner */}
      <TopTrackBanner
        activeTrack={activeTrack}
        onSelectTrack={setActiveTrack}
      />

      {/* 2. Floating Frosted Capsule Navbar with Official Jidoka Logo */}
      <Navbar />

      {/* 3. Hero Section with Dynamic Headline (Business vs Enterprise) & Mouse-Scrub Video */}
      <Hero activeTrack={activeTrack} />

      {/* 4. Interactive Solutions & System Catalog Section (Synced with Top Banner) */}
      <div id="solutions" className="relative z-10 w-full">
        <AudienceToggleSection
          activeTrack={activeTrack}
          onTrackChange={setActiveTrack}
        />
      </div>

      {/* 5. Dual Stacked Marquee Ribbon Section (#65B5F5 Blue + #0D0D0D Dark) */}
      <div className="relative z-10 w-full overflow-hidden shadow-md">
        {/* Strip 1: Brand Blue Ribbon (#65B5F5) */}
        <ScrollVelocity
          texts={[
            "CUSTOM AI AGENTS \u00A0\u00A0\u00A0/\u00A0\u00A0\u00A0 SCALING THE UNSCALABLE \u00A0\u00A0\u00A0/\u00A0\u00A0\u00A0 BUSINESS & ENTERPRISE ARCHITECTURE \u00A0\u00A0\u00A0/\u00A0\u00A0\u00A0 ZERO MANUAL DRAG \u00A0\u00A0\u00A0/\u00A0\u00A0\u00A0",
          ]}
          velocity={55}
          backgroundColor="#65B5F5"
          textColor="#000000"
          className="text-[14px] sm:text-[18px] md:text-[24px] font-bold tracking-wide uppercase px-4 sm:px-6"
          stripClassName="py-2 sm:py-2.5 md:py-3 border-y border-black/15 overflow-hidden select-none"
        />

        {/* Strip 2: Dark Editorial Ribbon (#0D0D0D) */}
        <ScrollVelocity
          texts={[
            "PIONEERS IN AI AUTOMATION \u00A0\u00A0\u00A0/\u00A0\u00A0\u00A0 25+ SYSTEMS SHIPPED \u00A0\u00A0\u00A0/\u00A0\u00A0\u00A0 24/7 VOICE AGENTS \u00A0\u00A0\u00A0/\u00A0\u00A0\u00A0 NATIONWIDE DEPLOYMENTS \u00A0\u00A0\u00A0/\u00A0\u00A0\u00A0",
          ]}
          velocity={-55}
          backgroundColor="#0D0D0D"
          textColor="#FFFFFF"
          className="text-[14px] sm:text-[18px] md:text-[24px] font-bold tracking-wide uppercase px-4 sm:px-6 text-white"
          stripClassName="py-2 sm:py-2.5 md:py-3 border-b border-black/20 overflow-hidden select-none"
        />
      </div>

      {/* 6. The Jidoka Marketplace (Do-It-Yourself Kits & Implementation Playbooks) */}
      <div id="marketplace" className="relative z-10 w-full">
        <MarketplaceSection />
      </div>

      {/* 7. Core Philosophy Showcase ("Jidoka means automation with a human touch") */}
      <div id="approach" className="relative z-10 w-full">
        <BrandPhilosophySection />
      </div>

      {/* 8. Interactive ROI Drain Calculator Section */}
      <div id="calculator" className="relative z-10 w-full">
        <RoiCalculatorSection />
      </div>

      {/* 9. Founder Section: Bryce Meizen + 3D Interactive ProfileCard */}
      <div id="founder" className="relative z-10 w-full">
        <FounderSection />
      </div>

      {/* 10. Client Testimonials Section (Bento Grid + Timeline Animation) */}
      <div id="results" className="relative z-10 w-full">
        <TestimonialsSection />
      </div>

      {/* 11. Modern Animated Brand Footer */}
      <SiteFooter />
    </div>
  );
}
