import React from 'react';
import Link from 'next/link';
import { Phone, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

export function CTASection() {
  return (
    <section className="py-16 sm:py-20 bg-[#102C4E] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#F47B20_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
        <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-slate-300 text-xs font-semibold uppercase tracking-wider">
          Ready For Ground Investigation?
        </span>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          Planning a Construction Project?
        </h2>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Get in touch with Shree Geotech for professional soil testing and geotechnical
          investigation services.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-md font-bold text-sm sm:text-base text-white bg-[#F47B20] hover:bg-[#D9650D] shadow-lg hover:shadow-xl transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F47B20] active:scale-98"
          >
            Contact Now
          </Link>
          <a
            href={`tel:${siteConfig.phoneRaw}`}
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-md font-bold text-sm sm:text-base text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white active:scale-98"
          >
            <Phone className="w-4 h-4 text-[#F47B20]" />
            <span>Call Now</span>
          </a>
        </div>

        <p className="text-xs text-slate-400 pt-2">
          Direct Line: {siteConfig.phoneDisplay} | Dombivli • Kalyan • Thane • Navi Mumbai • Mumbai
        </p>
      </div>
    </section>
  );
}
