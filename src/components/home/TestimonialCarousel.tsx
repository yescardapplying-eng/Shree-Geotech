'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star, AlertCircle, CheckCircle } from 'lucide-react';
import { reviewsData, ReviewItem } from '@/data/siteConfig';

export function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const totalSlides = reviewsData.length;
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  // Auto-advance every 2 seconds when not paused
  useEffect(() => {
    if (isPaused) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    // Check prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) return;

    timerRef.current = setInterval(() => {
      nextSlide();
    }, 2000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, totalSlides]);

  // Touch handlers for swipe support
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
    setIsPaused(true);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;

    if (diff > 50) {
      nextSlide();
    } else if (diff < -50) {
      prevSlide();
    }
    setTouchStart(null);
    setIsPaused(false);
  };

  return (
    <section className="py-16 sm:py-20 bg-white overflow-hidden" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#F3F6F9] text-[#102C4E] text-xs font-bold uppercase tracking-wider">
            Client Feedback
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#102C4E] tracking-tight">
            Client Reviews & Verification
          </h2>
          <div className="w-16 h-1 bg-[#F47B20] mx-auto rounded-full" />
          <p className="text-base text-slate-600 leading-relaxed">
            Direct feedback from project managers, structural engineers, developers, and civil
            contractors across the region.
          </p>
        </div>

        {/* Carousel Container */}
        <div
          className="mt-12 max-w-4xl mx-auto relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Main Card Viewport */}
          <div className="overflow-hidden rounded-2xl bg-[#F3F6F9] border border-slate-200 p-6 sm:p-10 shadow-sm min-h-[300px] flex flex-col justify-between relative">
            <div className="absolute top-6 right-6 text-slate-200">
              <Quote className="w-16 h-16 sm:w-20 sm:h-20" />
            </div>

            {/* Slide Content */}
            <div className="relative z-10 space-y-4">
              {/* Status & Language Badges */}
              <div className="flex flex-wrap items-center gap-2 text-xs">
                {reviewsData[currentIndex].status === 'verified' ? (
                  <span className="inline-flex items-center gap-1 font-semibold text-emerald-700 bg-emerald-100/80 px-2.5 py-0.5 rounded-full">
                    <CheckCircle className="w-3.5 h-3.5" />
                    Verified Project Review
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 font-semibold text-amber-700 bg-amber-100/80 px-2.5 py-0.5 rounded-full">
                    <AlertCircle className="w-3.5 h-3.5" />
                    Slot #{reviewsData[currentIndex].id} • Awaiting Client Sign-off
                  </span>
                )}
                <span className="text-slate-500 font-medium bg-white px-2 py-0.5 rounded border border-slate-200">
                  {reviewsData[currentIndex].language}
                </span>
                <span className="text-slate-500 font-medium">
                  {reviewsData[currentIndex].location}
                </span>
              </div>

              {/* Review Text */}
              <p className="text-base sm:text-lg text-slate-700 font-normal leading-relaxed italic pt-2">
                &ldquo;{reviewsData[currentIndex].comment}&rdquo;
              </p>
            </div>

            {/* Author Information */}
            <div className="pt-6 mt-6 border-t border-slate-200/80 flex items-center justify-between relative z-10">
              <div>
                <h4 className="font-bold text-[#102C4E] text-base">
                  {reviewsData[currentIndex].author}
                </h4>
                <p className="text-xs sm:text-sm text-slate-500">
                  {reviewsData[currentIndex].role} — {reviewsData[currentIndex].project}
                </p>
              </div>

              {/* Star Rating */}
              <div className="flex items-center space-x-1 text-[#F47B20]">
                {[...Array(reviewsData[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-6 px-2">
            {/* Prev Button */}
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Previous client testimonial"
              className="p-2.5 rounded-full bg-white border border-slate-200 text-[#102C4E] hover:bg-[#F47B20] hover:text-white hover:border-[#F47B20] shadow-xs transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F47B20]"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Pagination Dots */}
            <div className="flex items-center space-x-2">
              {reviewsData.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    currentIndex === idx
                      ? 'w-8 bg-[#F47B20]'
                      : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                  }`}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next client testimonial"
              className="p-2.5 rounded-full bg-white border border-slate-200 text-[#102C4E] hover:bg-[#F47B20] hover:text-white hover:border-[#F47B20] shadow-xs transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F47B20]"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

