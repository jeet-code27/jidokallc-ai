import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jidoka® — Adaptive Response Interface Agent",
  description: "Custom AI Agents & Intelligent Automation for Modern Businesses.",
};

import CursorFollower from "@/components/ui/cursor-follower";
import SmoothScroll from "@/components/SmoothScroll";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://db.onlinewebfonts.com" />
        <link
          href="https://db.onlinewebfonts.com/c/5ac3fe7c6abd2f62067f266d89671492?family=HelveticaNowDisplay-Medium"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://db.onlinewebfonts.com/c/1aa3377e489837a26d019bba501e779d?family=HelveticaNowDisplayW01-Rg"
          rel="stylesheet"
          type="text/css"
        />
      </head>
      <body className="min-h-full flex flex-col">
        <SmoothScroll>
          <CursorFollower />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}

