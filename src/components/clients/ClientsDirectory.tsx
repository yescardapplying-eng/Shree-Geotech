'use client';

import React, { useState } from 'react';
import { valuableClients, ClientItem } from '@/data/siteConfig';
import { Building2, MapPin, Globe, Search } from 'lucide-react';

export function ClientsDirectory() {
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
    <section className="py-12 sm:py-16 bg-white" id="clients-list">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Highlight Stats Bar with Staggered Delays */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          <div className="bg-[#F8FAFC] p-4 sm:p-5 rounded-xl border border-slate-200 text-center reveal-on-scroll delay-100 hover-lift">
            <p className="text-2xl sm:text-3xl font-extrabold text-[#102C4E]">23+</p>
            <p className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">Corporate Clients</p>
          </div>
          <div className="bg-[#F8FAFC] p-4 sm:p-5 rounded-xl border border-slate-200 text-center reveal-on-scroll delay-150 hover-lift">
            <p className="text-2xl sm:text-3xl font-extrabold text-[#F47B20]">4</p>
            <p className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">Global Locations</p>
          </div>
          <div className="bg-[#F8FAFC] p-4 sm:p-5 rounded-xl border border-slate-200 text-center reveal-on-scroll delay-200 hover-lift">
            <p className="text-2xl sm:text-3xl font-extrabold text-[#102C4E]">100%</p>
            <p className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">IS Code Adherence</p>
          </div>
          <div className="bg-[#F8FAFC] p-4 sm:p-5 rounded-xl border border-slate-200 text-center reveal-on-scroll delay-250 hover-lift">
            <p className="text-2xl sm:text-3xl font-extrabold text-[#F47B20]">Zero</p>
            <p className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">Settlement Failures</p>
          </div>
        </div>

        {/* Filter Tabs & Search Controls */}
        <div className="bg-[#F8FAFC] p-4 sm:p-6 rounded-2xl border border-slate-200 mb-8 flex flex-col md:flex-row items-center justify-between gap-4 reveal-on-scroll delay-200">
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
                    : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
                }`}
              >
                {region === 'All'
                  ? 'All Clients (23)'
                  : region === 'Maharashtra'
                  ? 'Maharashtra (14)'
                  : region === 'National'
                  ? 'National (6)'
                  : 'International (3)'}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by company, city or sector..."
              className="w-full pl-9 pr-4 py-2.5 rounded-lg border border-slate-200 bg-white text-xs sm:text-sm text-[#102C4E] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#F47B20] transition-all"
            />
          </div>
        </div>

        {/* Clients Count Indicator */}
        <div className="mb-6 flex items-center justify-between text-xs text-slate-500 font-medium px-1">
          <span>
            Showing <strong className="text-[#102C4E]">{filteredClients.length}</strong> of{' '}
            <strong className="text-[#102C4E]">{valuableClients.length}</strong> corporate engineering partners
          </span>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="text-[#F47B20] hover:underline cursor-pointer"
            >
              Clear search
            </button>
          )}
        </div>

        {/* Responsive Client Cards Grid (All 23 Clients) with On-Scroll Reveal */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {filteredClients.map((client: ClientItem, idx) => (
            <div
              key={client.srNo}
              className={`bg-white rounded-xl p-5 sm:p-6 border border-slate-200 hover:border-[#F47B20] hover:shadow-lg transition-all duration-300 flex flex-col justify-between group reveal-on-scroll delay-${
                ((idx % 6) + 1) * 100
              }`}
            >
              <div>
                {/* Top Badge: Serial Number & Region */}
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
                <h2 className="text-base sm:text-lg font-bold text-[#102C4E] group-hover:text-[#F47B20] transition-colors line-clamp-2 leading-snug">
                  {client.name}
                </h2>

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

              {/* Card Bottom: Sector */}
              <div className="mt-4 pt-3 border-t border-slate-100">
                <span className="text-[11px] font-semibold text-slate-500 block leading-tight">
                  Sector: <span className="text-[#102C4E] font-medium">{client.category}</span>
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Empty Search State */}
        {filteredClients.length === 0 && (
          <div className="text-center py-16 bg-[#F8FAFC] rounded-2xl border border-dashed border-slate-300 p-8 my-6">
            <Building2 className="w-12 h-12 text-slate-400 mx-auto mb-3" />
            <p className="text-base font-bold text-[#102C4E]">No clients matched &quot;{searchQuery}&quot;</p>
            <p className="text-xs text-slate-500 mt-1 max-w-md mx-auto">
              Please check your search spelling or switch the region filter to &quot;All Clients&quot;.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setSelectedRegion('All');
              }}
              className="mt-4 px-5 py-2 rounded-lg bg-[#102C4E] text-white text-xs font-bold hover:bg-[#F47B20] transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
