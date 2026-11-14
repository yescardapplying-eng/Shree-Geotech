'use client';

import React, { useEffect, useState } from 'react';

export function MouseFollower() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only run on non-touch desktop devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    let rafId: number;

    const onMouseMove = (e: MouseEvent) => {
      setIsVisible(true);
      rafId = requestAnimationFrame(() => {
        setPosition({ x: e.clientX, y: e.clientY });
      });
    };

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    const handleHoverCheck = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (
        target?.closest('button') ||
        target?.closest('a') ||
        target?.closest('input') ||
        target?.closest('select') ||
        target?.closest('textarea') ||
        target?.closest('[role="button"]')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mouseover', handleHoverCheck, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', handleHoverCheck);
      document.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer subtle glow ring */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-50 transition-transform duration-100 ease-out hidden md:block"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
        }}
      >
        <div
          className={`rounded-full border border-[#F47B20]/40 transition-all duration-300 ${
            isHovered
              ? 'w-12 h-12 bg-[#F47B20]/15 scale-125 border-[#F47B20]'
              : 'w-8 h-8 bg-transparent'
          }`}
        />
      </div>

      {/* Center pinpoint */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-50 transition-transform duration-75 ease-out hidden md:block"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
        }}
      >
        <div
          className={`w-2 h-2 rounded-full transition-all duration-200 ${
            isHovered ? 'bg-[#F47B20] scale-150' : 'bg-[#102C4E]'
          }`}
        />
      </div>
    </>
  );
}

