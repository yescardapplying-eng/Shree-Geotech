'use client';

import React from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: 75 | 100 | 150 | 200 | 250 | 300 | 350 | 400 | 500 | 600 | 700;
  direction?: 'up' | 'left' | 'right' | 'scale';
}

export function ScrollReveal({
  children,
  className = '',
  delay,
  direction = 'up',
}: ScrollRevealProps) {
  const directionClass =
    direction === 'left'
      ? 'reveal-left'
      : direction === 'right'
      ? 'reveal-right'
      : direction === 'scale'
      ? 'reveal-scale'
      : '';

  const delayClass = delay ? `delay-${delay}` : '';

  return (
    <div className={`reveal-on-scroll ${directionClass} ${delayClass} ${className}`.trim()}>
      {children}
    </div>
  );
}
