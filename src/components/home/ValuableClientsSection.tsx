'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { valuableClients, ClientItem } from '@/data/siteConfig';
import { Building2, MapPin, Globe, ShieldCheck, ArrowRight, Search, Award } from 'lucide-react';

export function ValuableClientsSection() {
  const [selectedRegion, setSelectedRegion] = useState<'All' | 'Maharashtra' | 'National' | 'International'>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredClients = valuableClients.filter((client) => {
    const matchesRegion = selectedRegion === 'All' || client.region === selectedRegion;
    const matchesSearch =
      client.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      client.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      client.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesRegion && matchesSearch;
  });

  return (
    <section className="py-16 sm:py-24 bg-[#F8FAFC] border-y border-slate-200" id="valuable-clients">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#102C4E]/10 text-[#102C4E] text-xs font-bold uppercase tracking-wider">
            <Award className="w-4 h-4 text-[#F47B20]" />
            <span>Proven Industry Track Record</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#102C4E] tracking-tight">
            Our Valuable Clients &amp; Partners
          </h2>

          <div className="w-20 h-1 bg-[#F47B20] mx-auto rounded-full" />

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed pt-1">
            Shree Geotech is privileged to provide soil testing, rotary core drilling, and geotechnical
            investigation services to leading industrial conglomerates, structural consultants, and
            infrastructure builders across India and globally.
          </p>
        </div>

        {/* Highlight Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          <div className="bg-white p-4 sm:p-5 rounded-xl border border-slate-200 shadow-2xs text-center">
            <p className="text-2xl sm:text-3xl font-extrabold text-[#102C4E]">23+</p>
            <p className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">Corporate Clients</p>
          </div>
          <div className="bg-white p-4 sm:p-5 rounded-xl border border-slate-200 shadow-2xs text-center">
            <p className="text-2xl sm:text-3xl font-extrabold text-[#F47B20]">4</p>
            <p className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">Global Locations</p>
          </div>
          <div className="bg-white p-4 sm:p-5 rounded-xl border border-slate-200 shadow-2xs text-center">
            <p className="text-2xl sm:text-3xl font-extrabold text-[#102C4E]">100%</p>
            <p className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">IS Code Adherence</p>
          </div>
          <div className="bg-white p-4 sm:p-5 rounded-xl border border-slate-200 shadow-2xs text-center">
            <p className="text-2xl sm:text-3xl font-extrabold text-[#F47B20]">Zero</p>
            <p className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">Settlement Failures</p>
          </div>
        </div>

        {/* Filter Tabs & Search Controls */}
        <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200 shadow-xs mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Region Tabs */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {(['All', 'Maharashtra', 'National', 'International'] as const).map((region) => (
              <button
                key={region}
                type="button"
                onClick={() => setSelectedRegion(region)}
                className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  selectedRegion === region
                    ? 'bg-[#102C4E] text-white shadow-sm'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {region === 'All' ? 'All Clients (23)' : region}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search client or city..."
              className="w-full pl-9 pr-4 py-2 rounded-lg border border-slate-200 bg-slate-50 text-xs sm:text-sm text-[#102C4E] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#F47B20] focus:bg-white transition-all"
            />
          </div>
        </div>

        {/* Responsive Client Cards Grid (Mobile, Tablet, Desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredClients.map((client: ClientItem) => (
            <div
              key={client.srNo}
              className="bg-white rounded-xl p-5 sm:p-6 border border-slate-200 hover:border-[#F47B20] hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Card Top: Serial Number & Region Tag */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3">
                  <span className="text-xs font-black text-[#F47B20] bg-[#FFF4EC] px-2.5 py-1 rounded-md">
                    Sr. No {client.srNo < 10 ? `0${client.srNo}` : client.srNo}
                  </span>
                  <span
                    className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                      client.region === 'International'
                        ? 'bg-purple-50 text-purple-700 border border-purple-200'
                        : client.region === 'National'
                        ? 'bg-blue-50 text-blue-700 border border-blue-200'
                        : 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                    }`}
                  >
                    {client.region}
                  </span>
                </div>

                {/* Client Name */}
                <h3 className="text-base sm:text-lg font-bold text-[#102C4E] group-hover:text-[#F47B20] transition-colors line-clamp-2 leading-snug">
                  {client.name}
                </h3>

                {/* Location */}
                <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-2">
                  {client.region === 'International' ? (
                    <Globe className="w-3.5 h-3.5 text-[#F47B20] shrink-0" />
                  ) : (
                    <MapPin className="w-3.5 h-3.5 text-[#F47B20] shrink-0" />
                  )}
                  <span className="font-medium text-slate-700">{client.location}</span>
                </div>
              </div>

              {/* Card Bottom: Sector / Industry Classification */}
              <div className="mt-4 pt-3 border-t border-slate-100">
                <span className="text-[11px] font-semibold text-slate-500 block leading-tight">
                  Sector: <span className="text-[#102C4E]">{client.category}</span>
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Empty Search State */}
        {filteredClients.length === 0 && (
          <div className="text-center py-12 bg-white rounded-xl border border-dashed border-slate-300 p-6">
            <Building2 className="w-10 h-10 text-slate-400 mx-auto mb-2" />
            <p className="text-sm font-semibold text-[#102C4E]">No clients matched &quot;{searchQuery}&quot;</p>
            <p className="text-xs text-slate-500 mt-1">Try searching by city (e.g. Mumbai, Chennai, Dubai) or clear the search filter.</p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setSelectedRegion('All');
              }}
              className="mt-3 px-4 py-1.5 rounded-md bg-[#102C4E] text-white text-xs font-bold"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Bottom CTA Bar */}
        <div className="mt-12 sm:mt-16 bg-[#102C4E] text-white rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
          <div className="space-y-1.5 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold">Require Reliable Subsurface Soil Testing?</h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              Join our growing list of prestigious clients. Contact our geotechnical engineering office
              in Dombivli to discuss your project requirements.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://wa.me/919270712338?text=Hello%20Shree%20Geotech,%20we%20are%20looking%20for%20a%20geotechnical%20investigation%20proposal%20for%20our%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg font-bold text-xs sm:text-sm text-white bg-[#F47B20] hover:bg-[#D9650D] transition-colors flex items-center gap-2 shadow-sm"
            >
              <span>WhatsApp Inquiry</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/contact"
              className="px-6 py-3 rounded-lg font-bold text-xs sm:text-sm text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-colors"
            >
              <span>Contact Page</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
