'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, CheckCircle2, ExternalLink } from 'lucide-react';
import { reviewsData } from '@/data/siteConfig';

// Google Colorful G SVG Component
function GoogleIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.66v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.15z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.94H1.26v3.15C3.26 21.36 7.34 24 12 24z"
      />
      <path
        fill="#FBBC05"
        d="M5.28 14.26c-.25-.72-.38-1.49-.38-2.26s.13-1.54.38-2.26V6.59H1.26C.46 8.18 0 10.03 0 12s.46 3.82 1.26 5.41l4.02-3.15z"
      />
      <path
        fill="#EA4335"
        d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.34 0 3.26 2.64 1.26 6.59l4.02 3.15c.95-2.84 3.6-4.99 6.72-4.99z"
      />
    </svg>
  );
}

// Google 5-Star Rating Component
function GoogleStars() {
  return (
    <div className="flex items-center space-x-1" aria-label="5 out of 5 stars">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className="w-4 h-4 fill-[#FBBC04] text-[#FBBC04]"
          viewBox="0 0 24 24"
        >
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ))}
    </div>
  );
}

// Avatar color map for Google style avatars
const avatarColors = [
  'bg-blue-600',
  'bg-emerald-600',
  'bg-amber-600',
  'bg-purple-600',
  'bg-rose-600',
  'bg-teal-600',
  'bg-indigo-600',
  'bg-cyan-600',
];

const timeAgoList = [
  '2 weeks ago',
  '3 weeks ago',
  '1 month ago',
  '1 month ago',
  '2 months ago',
  '2 months ago',
  '3 months ago',
  '4 months ago',
];

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

  // Auto-advance every 2.5s when not paused
  useEffect(() => {
    if (isPaused) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) return;

    timerRef.current = setInterval(() => {
      nextSlide();
    }, 2500);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, totalSlides]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
    setIsPaused(true);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const diff = touchStart - e.changedTouches[0].clientX;
    if (diff > 50) nextSlide();
    else if (diff < -50) prevSlide();
    setTouchStart(null);
    setIsPaused(false);
  };

  const currentReview = reviewsData[currentIndex];
  const initial = currentReview.author.charAt(0);
  const avatarBg = avatarColors[currentIndex % avatarColors.length];

  return (
    <section className="py-16 sm:py-20 bg-white" id="google-reviews">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section with Google Rating Summary Badge */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F3F6F9] border border-slate-200 text-xs font-semibold text-slate-700 shadow-2xs hover-lift">
            <GoogleIcon className="w-4 h-4" />
            <span>Google Reviews & Verification</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#102C4E] tracking-tight">
            What Our Clients Say on Google
          </h2>
          <div className="w-16 h-1 bg-[#F47B20] mx-auto rounded-full" />

          {/* Google Summary Badge */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-sm">
            <div className="flex items-center gap-2 bg-[#F8FAFC] px-4 py-2 rounded-xl border border-slate-200 shadow-2xs">
              <GoogleIcon className="w-5 h-5" />
              <span className="font-extrabold text-lg text-[#102C4E]">5.0</span>
              <GoogleStars />
              <span className="text-xs text-slate-500 font-medium pl-1">
                Verified Reviews
              </span>
            </div>
            <a
              href="https://maps.google.com/?q=Shree+Geotech+Dombivli"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-[#102C4E] hover:text-[#F47B20] inline-flex items-center gap-1 transition-colors"
            >
              <span>View all on Google</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Carousel Container */}
        <div
          className="mt-12 max-w-3xl mx-auto relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Authentic Google Review Card */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 relative min-h-[290px] flex flex-col justify-between">
            {/* Top row: Google G Icon */}
            <div className="absolute top-6 right-6">
              <GoogleIcon className="w-6 h-6" />
            </div>

            <div>
              {/* Reviewer Profile */}
              <div className="flex items-center gap-3.5 pr-10">
                <div
                  className={`w-12 h-12 rounded-full ${avatarBg} text-white font-bold text-lg flex items-center justify-center shadow-xs shrink-0 select-none`}
                >
                  {initial}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-base text-slate-900 leading-tight">
                      {currentReview.author}
                    </h3>
                    {currentReview.status === 'verified' && (
                      <span
                        title="Verified Client"
                        className="inline-flex items-center text-blue-600"
                      >
                        <CheckCircle2 className="w-4 h-4 fill-blue-600 text-white" />
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-500 font-normal">
                    {currentReview.role} • {currentReview.location}
                  </p>
                </div>
              </div>

              {/* Rating Stars and Time Ago */}
              <div className="flex items-center gap-3 mt-3.5">
                <GoogleStars />
                <span className="text-xs text-slate-400">
                  {timeAgoList[currentIndex % timeAgoList.length]}
                </span>
                <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                  {currentReview.language}
                </span>
              </div>

              {/* Review Content */}
              <div className="mt-4">
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                  {currentReview.comment}
                </p>
              </div>
            </div>

            {/* Bottom Status / Tag */}
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span className="flex items-center gap-1.5 text-slate-600 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                Project: {currentReview.project}
              </span>
              <span className="text-slate-400 text-[11px]">
                Review {currentIndex + 1} of {totalSlides}
              </span>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-6 px-1">
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Previous Google Review"
              className="p-2.5 rounded-full bg-white border border-slate-200 text-slate-700 hover:text-[#F47B20] hover:border-[#F47B20] shadow-sm transition-all hover-lift focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F47B20] cursor-pointer"
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
                  aria-label={`Go to review ${idx + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    currentIndex === idx
                      ? 'w-7 bg-[#4285F4]'
                      : 'w-2 bg-slate-300 hover:bg-slate-400'
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next Google Review"
              className="p-2.5 rounded-full bg-white border border-slate-200 text-slate-700 hover:text-[#F47B20] hover:border-[#F47B20] shadow-sm transition-all hover-lift focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F47B20] cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
