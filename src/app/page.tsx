import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AudienceToggleSection from "@/components/AudienceToggleSection";
import ScrollVelocity from "@/components/ui/scroll-velocity";
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
            "CUSTOM AI AGENTS / SCALING THE UNSCALABLE / HIGHLEVEL AUTOMATION SYSTEMS / ZERO MANUAL DRAG /",
          ]}
          velocity={55}
          backgroundColor="#65B5F5"
          textColor="#000000"
          className="text-[26px] sm:text-[42px] md:text-[54px] font-black tracking-tight uppercase px-4"
          stripClassName="py-4 sm:py-6 border-y border-black/20 overflow-hidden select-none"
        />

        {/* Strip 2: Dark Editorial Ribbon (#0D0D0D) */}
        <ScrollVelocity
          texts={[
            "PIONEERS IN AI AUTOMATION / 25+ SYSTEMS SHIPPED / 24/7 VOICE AGENTS / TALK TO THE BUILDER /",
          ]}
          velocity={-55}
          backgroundColor="#0D0D0D"
          textColor="#FFFFFF"
          className="text-[26px] sm:text-[42px] md:text-[54px] font-black tracking-tight uppercase px-4 text-white"
          stripClassName="py-4 sm:py-6 border-b border-black/20 overflow-hidden select-none"
        />
      </div>

      {/* 5. Interactive ROI Drain Calculator Section */}
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
