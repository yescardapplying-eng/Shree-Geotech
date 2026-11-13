import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ShieldCheck, HardHat, FileCheck, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

export function HeroSection() {
  return (
    <section className="relative bg-[#102C4E] text-white overflow-hidden">
      {/* Background Graphic Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#F47B20_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 lg:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Heading & Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            {/* Engineering Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs sm:text-sm font-medium text-slate-200 backdrop-blur-xs">
              <span className="w-2 h-2 rounded-full bg-[#F47B20]" />
              <span>Geotechnical Engineering & Soil Testing Services</span>
            </div>

            {/* Primary H1 */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Reliable Soil Testing & <br className="hidden sm:inline" />
              <span className="text-[#F47B20]">Geotechnical Investigation</span> Services
            </h1>

            {/* Supporting Description */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              Get accurate soil investigation, geotechnical testing and technical reporting for your
              construction and infrastructure projects across Dombivli, Kalyan, Thane, Navi Mumbai,
              and Mumbai.
            </p>

            {/* Feature Bullets */}
            <div className="grid grid-cols-2 gap-3 pt-2 text-xs sm:text-sm text-slate-200">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#F47B20] shrink-0" />
                <span>Plate Load & SBC Testing</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#F47B20] shrink-0" />
                <span>Deep Borehole Core Drilling</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#F47B20] shrink-0" />
                <span>In-Situ SPT N-Value Testing</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#F47B20] shrink-0" />
                <span>IS Standards Compliance</span>
              </div>
            </div>

            {/* Call To Actions: Max 2 words per button */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-md font-bold text-sm sm:text-base text-white bg-[#F47B20] hover:bg-[#D9650D] shadow-lg hover:shadow-xl transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F47B20] focus-visible:ring-offset-2 active:scale-98"
              >
                Contact Now
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-md font-bold text-sm sm:text-base text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white active:scale-98"
              >
                Our Services
              </Link>
            </div>

            {/* Quick Contact Line */}
            <div className="pt-2 text-xs text-slate-400">
              Direct Technical Line:{' '}
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="font-bold text-white hover:text-[#F47B20] transition-colors"
              >
                {siteConfig.phoneDisplay}
              </a>{' '}
              | Operating across MMR & Maharashtra
            </div>
          </div>

          {/* Right Column: Hero Image with Frame and Badges */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-xl overflow-hidden shadow-2xl border-2 border-white/10 bg-slate-800 aspect-4/3 sm:aspect-16/11">
              <Image
                src="/images/hero-soil-investigation.jpg"
                alt="Shree Geotech civil engineers inspecting soil strata samples beside a rotary drilling rig at a construction site in Mumbai region"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#102C4E]/80 via-transparent to-transparent pointer-events-none" />

              {/* Bottom Overlay Badge */}
              <div className="absolute bottom-3 left-3 right-3 p-3 bg-white/95 backdrop-blur-sm rounded-lg text-[#102C4E] flex items-center justify-between shadow-md">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-md bg-[#102C4E] text-[#F47B20] flex items-center justify-center">
                    <HardHat className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold leading-tight">Field Soil Investigation</p>
                    <p className="text-[11px] text-slate-500">Core Logging & Laboratory Analysis</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Verified Tests
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

