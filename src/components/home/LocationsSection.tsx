import React from 'react';
import Link from 'next/link';
import { MapPin, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

export function LocationsSection() {
  return (
    <section className="py-16 sm:py-20 bg-[#F3F6F9]" id="service-locations">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-white text-[#102C4E] text-xs font-bold uppercase tracking-wider shadow-2xs">
            Regional Coverage
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#102C4E] tracking-tight">
            Our Primary Service Locations
          </h2>
          <div className="w-16 h-1 bg-[#F47B20] mx-auto rounded-full" />
          <p className="text-base text-slate-600 leading-relaxed">
            Headquartered in Dombivli East, Shree Geotech deploys mobilized drilling equipment and
            testing teams across key urban and industrial centers in the Mumbai Metropolitan Region.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {siteConfig.locations.map((loc) => (
            <div
              key={loc.name}
              className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-2xs hover:shadow-md hover:border-[#F47B20]/40 transition-all flex items-start gap-3.5"
            >
              <div className="w-10 h-10 rounded-lg bg-[#FFF4EC] text-[#F47B20] flex items-center justify-center shrink-0 mt-0.5">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-bold text-[#102C4E]">
                  Soil Testing in {loc.name}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">{loc.note}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Local Geological Brief (Natural Local SEO) */}
        <div className="mt-10 p-6 rounded-xl bg-white border border-slate-200 text-slate-600 text-sm leading-relaxed max-w-4xl mx-auto">
          <p className="font-semibold text-[#102C4E] mb-2">
            Local Geological Context Across Mumbai Metropolitan Region:
          </p>
          <p>
            The subsoil stratigraphy across Dombivli, Kalyan, Thane, and Mumbai ranges from deep
            soft marine clays near tidal creeks to weathered amygdaloidal and compact basalt rock
            formations inland. Foundation projects require site-specific in-situ SPT and Plate Load
            testing to accurately detect basalt weathering depths, safe bearing capacity variations,
            and aggressive sulfate groundwater conditions before laying foundation footings.
          </p>
          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
            <span className="text-xs text-slate-500">Need site investigation in your area?</span>
            <Link
              href="/contact"
              className="text-xs font-bold text-[#F47B20] hover:text-[#D9650D] inline-flex items-center gap-1"
            >
              <span>Contact Now</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
