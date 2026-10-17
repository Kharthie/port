import { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [cursorVariant, setCursorVariant] = useState<"default" | "hover" | "text" | "click">("default");
  const [isClicking, setIsClicking] = useState(false);

  // Exact hardware-level mouse coordinates (0 latency)
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Spring physics for the trailing outer aura / ring (fluid 120fps feel)
  const springConfig = { damping: 25, stiffness: 400, mass: 0.5 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Only activate for non-touch / pointer:fine devices
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      // Check if text input or editable
      if (
        target.tagName.toLowerCase() === "input" ||
        target.tagName.toLowerCase() === "textarea" ||
        target.isContentEditable
      ) {
        setCursorVariant("text");
        return;
      }

      // Check if clickable element
      if (
        target.tagName.toLowerCase() === "button" ||
        target.tagName.toLowerCase() === "a" ||
        target.getAttribute("role") === "button" ||
        target.closest("button") ||
        target.closest("a") ||
        target.closest("[role='button']") ||
        target.classList.contains("clickable") ||
        target.classList.contains("cursor-pointer")
      ) {
        setCursorVariant("hover");
        return;
      }

      setCursorVariant("default");
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mouseover", handleMouseOver, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY, isVisible]);

  if (!isVisible) return null;

  const getOuterScale = () => {
    if (isClicking) return 0.75;
    if (cursorVariant === "hover") return 1.5;
    if (cursorVariant === "text") return 0.6;
    return 1;
  };

  return (
    <div className="pointer-events-none fixed inset-0 z-[100] overflow-hidden transition-opacity duration-300">
      {/* 1. Trailing Outer Aura / Precision Target Ring */}
      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: getOuterScale(),
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ type: "spring", stiffness: 450, damping: 30 }}
        className="fixed top-0 left-0 w-9 h-9 rounded-full flex items-center justify-center pointer-events-none"
      >
        {cursorVariant === "text" ? (
          // Sleek vertical I-beam pill indicator for text inputs
          <div className="h-6 w-1 rounded-full bg-primary shadow-[0_0_8px_rgba(0,245,212,0.8)]" />
        ) : (
          <div
            className={`w-full h-full rounded-full transition-all duration-200 border ${
              cursorVariant === "hover"
                ? "border-primary bg-primary/15 backdrop-blur-[1px] shadow-[0_0_20px_rgba(0,245,212,0.35)] ring-2 ring-primary/20"
                : "border-primary/45 bg-primary/[0.04] shadow-[0_0_12px_rgba(0,245,212,0.15)]"
            }`}
          >
            {/* Subtle high-tech crosshair corner accents when hovering */}
            {cursorVariant === "hover" && (
              <>
                <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-1.5 h-0.5 bg-primary/80 rounded-full" />
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-0.5 bg-primary/80 rounded-full" />
                <span className="absolute top-1/2 -left-1 -translate-y-1/2 w-0.5 h-1.5 bg-primary/80 rounded-full" />
                <span className="absolute top-1/2 -right-1 -translate-y-1/2 w-0.5 h-1.5 bg-primary/80 rounded-full" />
              </>
            )}
          </div>
        )}
      </motion.div>

      {/* 2. Zero-Lag Razor-Sharp Precision Core Dot */}
      {cursorVariant !== "text" && (
        <motion.div
          style={{
            x: cursorX,
            y: cursorY,
            translateX: "-50%",
            translateY: "-50%",
          }}
          animate={{
            scale: isClicking ? 0.6 : cursorVariant === "hover" ? 0.8 : 1,
          }}
          transition={{ duration: 0.1 }}
          className="fixed top-0 left-0 w-2 h-2 rounded-full bg-primary pointer-events-none shadow-[0_0_8px_rgba(0,245,212,0.9)] ring-1 ring-white/60"
        />
      )}

      {/* 3. Subtle Ambient Light Halo trailing smoothly behind */}
      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          opacity: cursorVariant === "hover" ? 0.25 : 0.12,
          scale: cursorVariant === "hover" ? 1.3 : 1,
        }}
        transition={{ duration: 0.25 }}
        className="fixed top-0 left-0 w-24 h-24 rounded-full bg-gradient-to-r from-primary to-accent blur-xl pointer-events-none"
      />
    </div>
  );
}
