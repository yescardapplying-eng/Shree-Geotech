import React from 'react';
import { siteConfig } from '@/data/siteConfig';

export function GoogleMap() {
  return (
    <div className="w-full rounded-2xl overflow-hidden shadow-md border border-slate-200 bg-slate-100 relative">
      <div className="p-4 bg-white border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
        <div>
          <span className="font-bold text-[#102C4E]">Office Location:</span>{' '}
          <span className="text-slate-600">{siteConfig.address.full}</span>
        </div>
        <a
          href="https://maps.google.com/?q=Sagaon+Dombivli+East+Maharashtra+421204"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#F47B20] hover:underline font-bold whitespace-nowrap self-start sm:self-auto"
        >
          Open in Google Maps
        </a>
      </div>
      <div className="relative w-full h-[320px] sm:h-[400px]">
        <iframe
          title="Shree Geotech Office Location - Sagaon, Dombivli East, Mumbai"
          src={siteConfig.address.googleMapsEmbed}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full"
        />
      </div>
    </div>
  );
}

