"use client";

import React, { useRef } from "react";
import { motion, useInView, Variants } from "motion/react";

export interface TimelineContentProps {
  as?: "div" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "article" | "section";
  animationNum?: number;
  customVariants?: Variants;
  timelineRef?: React.RefObject<HTMLDivElement | null>;
  className?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

const defaultVariants: Variants = {
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      delay: i * 0.12,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
  hidden: {
    filter: "blur(8px)",
    y: 24,
    opacity: 0,
  },
};

export function TimelineContent({
  as = "div",
  animationNum = 0,
  customVariants,
  timelineRef,
  className = "",
  children,
  style,
}: TimelineContentProps) {
  const localRef = useRef<HTMLDivElement>(null);
  const targetRef = timelineRef || localRef;
  const isInView = useInView(targetRef, { once: true, margin: "-50px" });

  const variants = customVariants || defaultVariants;
  const Tag = motion[as] as typeof motion.div;

  return (
    <Tag
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      custom={animationNum}
      variants={variants}
      className={className}
      style={style}
    >
      {children}
    </Tag>
  );
}
