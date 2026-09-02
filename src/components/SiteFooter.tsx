"use client";

import React from "react";
import { Footer } from "@/components/ui/modem-animated-footer";
import { Phone, Mail } from "lucide-react";

export default function SiteFooter() {
  const socialLinks = [
    {
      icon: <Phone className="w-4 h-4 text-[#65B5F5]" />,
      href: "tel:5084987168",
      label: "Phone: (508) 498-7168",
    },
    {
      icon: <Mail className="w-4 h-4 text-[#65B5F5]" />,
      href: "mailto:inbox@jidokallc.com?subject=Coffee%20Chat%20Inquiry",
      label: "Email: inbox@jidokallc.com",
    },
    {
      icon: (
        <svg className="w-4 h-4 fill-current text-white/80 hover:text-[#65B5F5] transition-colors" viewBox="0 0 24 24">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.25c-.9 0-1.63.73-1.63 1.63s.73 1.63 1.63 1.63 1.63-.73 1.63-1.63-.73-1.63-1.63-1.63z" />
        </svg>
      ),
      href: "https://linkedin.com",
      label: "LinkedIn",
    },
    {
      icon: (
        <svg className="w-4 h-4 fill-current text-white/80 hover:text-[#65B5F5] transition-colors" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
      href: "https://x.com",
      label: "Twitter / X",
    },
  ];

  const navLinks = [
    { label: "Products", href: "#products" },
    { label: "Approach", href: "#approach" },
    { label: "ROI Estimator", href: "#calculator" },
    { label: "About Founder", href: "#about" },
    { label: "Results", href: "#results" },
    { label: "Book a Chat", href: "mailto:inbox@jidokallc.com?subject=Coffee%20Chat" },
  ];

  return (
    <Footer
      brandName="JIDOKA"
      brandDescription="Personalized AI agent & automation studio. Built one business at a time in Worcester, MA. Talk directly with the builder."
      socialLinks={socialLinks}
      navLinks={navLinks}
      creatorName="Bryce Meizen"
      creatorUrl="mailto:inbox@jidokallc.com"
    />
  );
}
