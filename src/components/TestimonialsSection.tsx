"use client";

import React from "react";
import TestimonialComponent from "@/components/ui/testimonial";

export default function TestimonialsSection() {
  return (
    <section id="results" className="relative w-full bg-[#FAF8F5] text-black py-20 sm:py-28 px-5 sm:px-8 md:px-10 border-t border-black/10 select-none">
      <div className="max-w-7xl mx-auto">
        <TestimonialComponent />
      </div>
    </section>
  );
}
