import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AudienceToggleSection from "@/components/AudienceToggleSection";
import ScrollVelocity from "@/components/ui/scroll-velocity";
import BrandPhilosophySection from "@/components/BrandPhilosophySection";
import RoiCalculatorSection from "@/components/RoiCalculatorSection";
import FounderSection from "@/components/FounderSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import SiteFooter from "@/components/SiteFooter";

export default function HomePage() {
  return (
    <div className="relative min-h-screen w-full bg-black text-black">
      {/* 1. Top Fixed Frosted Capsule Navbar */}
      <Navbar />

      {/* 2. Hero Section with Interactive Mouse-Scrub Video */}
      <Hero />

      {/* 3. Interactive Enterprise vs Boutique Audience Toggle Section */}
      <div className="relative z-10 w-full">
        <AudienceToggleSection />
      </div>

      {/* 4. Dual Stacked Marquee Ribbon Section (#65B5F5 Blue + #0D0D0D Dark) */}
      <div className="relative z-10 w-full overflow-hidden shadow-md">
        {/* Strip 1: Brand Blue Ribbon (#65B5F5) */}
        <ScrollVelocity
          texts={[
            "CUSTOM AI AGENTS \u00A0\u00A0\u00A0/\u00A0\u00A0\u00A0 SCALING THE UNSCALABLE \u00A0\u00A0\u00A0/\u00A0\u00A0\u00A0 HIGHLEVEL AUTOMATION SYSTEMS \u00A0\u00A0\u00A0/\u00A0\u00A0\u00A0 ZERO MANUAL DRAG \u00A0\u00A0\u00A0/\u00A0\u00A0\u00A0",
          ]}
          velocity={55}
          backgroundColor="#65B5F5"
          textColor="#000000"
          className="text-[26px] sm:text-[40px] md:text-[50px] font-black tracking-normal uppercase px-6"
          stripClassName="py-4 sm:py-6 border-y border-black/20 overflow-hidden select-none"
        />

        {/* Strip 2: Dark Editorial Ribbon (#0D0D0D) */}
        <ScrollVelocity
          texts={[
            "PIONEERS IN AI AUTOMATION \u00A0\u00A0\u00A0/\u00A0\u00A0\u00A0 25+ SYSTEMS SHIPPED \u00A0\u00A0\u00A0/\u00A0\u00A0\u00A0 24/7 VOICE AGENTS \u00A0\u00A0\u00A0/\u00A0\u00A0\u00A0 TALK TO THE BUILDER \u00A0\u00A0\u00A0/\u00A0\u00A0\u00A0",
          ]}
          velocity={-55}
          backgroundColor="#0D0D0D"
          textColor="#FFFFFF"
          className="text-[26px] sm:text-[40px] md:text-[50px] font-black tracking-normal uppercase px-6 text-white"
          stripClassName="py-4 sm:py-6 border-b border-black/20 overflow-hidden select-none"
        />
      </div>

      {/* 5. Core Philosophy Showcase ("Jidoka means automation with a human touch") */}
      <div className="relative z-10 w-full">
        <BrandPhilosophySection />
      </div>

      {/* 6. Interactive ROI Drain Calculator Section */}
      <div className="relative z-10 w-full">
        <RoiCalculatorSection />
      </div>

      {/* 6. Founder Section: Bryce Meizen + 3D ProfileCard */}
      <div className="relative z-10 w-full">
        <FounderSection />
      </div>

      {/* 7. Client Testimonials Section (Bento Grid + Timeline Animation) */}
      <div className="relative z-10 w-full">
        <TestimonialsSection />
      </div>

      {/* 8. Modern Animated Brand Footer */}
      <SiteFooter />
    </div>
  );
}
