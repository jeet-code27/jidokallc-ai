"use client";

import React, { useState, useEffect, useRef } from "react";

export const CursorFollower = () => {
  const mousePosition = useRef({ x: -100, y: -100 });
  const dotPosition = useRef({ x: -100, y: -100 });
  const borderDotPosition = useRef({ x: -100, y: -100 });

  const [renderPos, setRenderPos] = useState({
    dot: { x: -100, y: -100 },
    border: { x: -100, y: -100 },
  });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const DOT_SMOOTHNESS = 0.22;
  const BORDER_DOT_SMOOTHNESS = 0.12;

  useEffect(() => {
    // Only enable on fine pointer (desktop mouse), ignore touch devices
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      mousePosition.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    window.addEventListener("mousemove", handleMouseMove);

    // Attach listeners to interactive elements
    const updateInteractiveElements = () => {
      const interactiveElements = document.querySelectorAll(
        "a, button, input, textarea, select, [role='button'], [tabindex='0']"
      );
      interactiveElements.forEach((element) => {
        element.addEventListener("mouseenter", handleMouseEnter);
        element.addEventListener("mouseleave", handleMouseLeave);
      });
      return interactiveElements;
    };

    const interactiveElements = updateInteractiveElements();

    // Re-check periodically or on DOM mutations for dynamic elements
    const observer = new MutationObserver(() => {
      updateInteractiveElements();
    });
    observer.observe(document.body, { childList: true, subtree: true });

    let animationId: number;

    const lerp = (start: number, end: number, factor: number) => {
      return start + (end - start) * factor;
    };

    // Animation function for ultra-smooth movement
    const animate = () => {
      dotPosition.current.x = lerp(
        dotPosition.current.x,
        mousePosition.current.x,
        DOT_SMOOTHNESS
      );
      dotPosition.current.y = lerp(
        dotPosition.current.y,
        mousePosition.current.y,
        DOT_SMOOTHNESS
      );

      borderDotPosition.current.x = lerp(
        borderDotPosition.current.x,
        mousePosition.current.x,
        BORDER_DOT_SMOOTHNESS
      );
      borderDotPosition.current.y = lerp(
        borderDotPosition.current.y,
        mousePosition.current.y,
        BORDER_DOT_SMOOTHNESS
      );

      setRenderPos({
        dot: { x: dotPosition.current.x, y: dotPosition.current.y },
        border: {
          x: borderDotPosition.current.x,
          y: borderDotPosition.current.y,
        },
      });

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      interactiveElements.forEach((element) => {
        element.removeEventListener("mouseenter", handleMouseEnter);
        element.removeEventListener("mouseleave", handleMouseLeave);
      });
      observer.disconnect();
      cancelAnimationFrame(animationId);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden hidden md:block"
      aria-hidden="true"
    >
      {/* Center Solid Dot */}
      <div
        className="absolute rounded-full bg-black/90 pointer-events-none"
        style={{
          width: "7px",
          height: "7px",
          transform: "translate(-50%, -50%)",
          left: `${renderPos.dot.x}px`,
          top: `${renderPos.dot.y}px`,
          transition: "opacity 0.2s ease",
        }}
      />

      {/* Smooth Trailing Follower Ring */}
      <div
        className="absolute rounded-full border border-black/80 pointer-events-none"
        style={{
          width: isHovering ? "48px" : "28px",
          height: isHovering ? "48px" : "28px",
          transform: "translate(-50%, -50%)",
          left: `${renderPos.border.x}px`,
          top: `${renderPos.border.y}px`,
          backgroundColor: isHovering ? "rgba(0, 0, 0, 0.05)" : "transparent",
          backdropFilter: isHovering ? "blur(1px)" : "none",
          transition:
            "width 0.25s cubic-bezier(0.16, 1, 0.3, 1), height 0.25s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.25s ease, border-color 0.25s ease",
        }}
      />
    </div>
  );
};

// Export as default and named Component for 21st.dev compatibility
export const Component = CursorFollower;
export default CursorFollower;
