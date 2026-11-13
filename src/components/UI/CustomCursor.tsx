import React, { useEffect, useState } from "react";

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on non-touch devices with fine pointers
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement;
      const clickable =
        target.closest("button") ||
        target.closest("a") ||
        target.closest("input") ||
        target.closest("textarea") ||
        target.closest("[role='button']") ||
        target.tagName === "BUTTON" ||
        target.tagName === "A";

      setIsPointer(!!clickable);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    let frameId: number;
    const animateTrail = () => {
      setTrailingPos((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.18,
        y: prev.y + (position.y - prev.y) * 0.18
      }));
      frameId = requestAnimationFrame(animateTrail);
    };
    frameId = requestAnimationFrame(animateTrail);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      cancelAnimationFrame(frameId);
    };
  }, [position, isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Center sharp dot */}
      <div
        className="fixed pointer-events-none z-50 rounded-full transition-transform duration-75 ease-out"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${isPointer ? 1.5 : 1})`,
          width: "8px",
          height: "8px",
          backgroundColor: isPointer ? "#22D3EE" : "#8B5CF6",
          boxShadow: isPointer
            ? "0 0 12px #22D3EE, 0 0 20px #22D3EE"
            : "0 0 10px #8B5CF6"
        }}
      />
      {/* Outer ambient trailing ring */}
      <div
        className="fixed pointer-events-none z-50 rounded-full transition-all duration-150 ease-out"
        style={{
          left: `${trailingPos.x}px`,
          top: `${trailingPos.y}px`,
          transform: `translate(-50%, -50%) scale(${isPointer ? 1.4 : 1})`,
          width: isPointer ? "44px" : "32px",
          height: isPointer ? "44px" : "32px",
          border: `1.5px solid ${isPointer ? "rgba(34, 211, 238, 0.7)" : "rgba(139, 92, 246, 0.5)"}`,
          background: isPointer
            ? "rgba(34, 211, 238, 0.08)"
            : "rgba(139, 92, 246, 0.04)"
        }}
      />
    </>
  );
};
