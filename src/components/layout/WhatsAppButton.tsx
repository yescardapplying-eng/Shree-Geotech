'use client';

import React from 'react';
import Image from 'next/image';
import { siteConfig } from '@/data/siteConfig';

export function WhatsAppButton() {
  return (
    <div
      className="fixed bottom-24 sm:bottom-28 right-4 sm:right-10 z-30 flex items-center group pointer-events-auto"
      style={{ touchAction: 'manipulation' }}
    >
      {/* Tooltip / Label on Desktop Hover */}
      <span className="hidden md:inline-block mr-3 px-3 py-1.5 text-xs font-semibold bg-[#102C4E] text-white rounded-md shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
        Chat on WhatsApp
      </span>

      {/* Floating Action Button */}
      <a
        href={siteConfig.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Shree Geotech on WhatsApp regarding soil testing services"
        className="relative block w-14 h-14 sm:w-16 sm:h-16 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-500 animate-whatsapp-vibe"
      >
        <Image
          src={siteConfig.brandAssets.whatsappIcon}
          alt="WhatsApp - Shree Geotech"
          width={64}
          height={64}
          className="w-full h-full object-contain rounded-full drop-shadow-md select-none pointer-events-none"
          priority
        />
        {/* Subtle Online Pulse Indicator */}
        <span
          className="absolute top-0.5 right-0.5 w-3.5 h-3.5 bg-emerald-500 border-2 border-white rounded-full animate-ping opacity-75"
          aria-hidden="true"
        />
        <span
          className="absolute top-0.5 right-0.5 w-3.5 h-3.5 bg-emerald-500 border-2 border-white rounded-full"
          aria-hidden="true"
        />
      </a>
    </div>
  );
}

