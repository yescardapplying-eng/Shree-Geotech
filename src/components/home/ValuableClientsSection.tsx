'use client';

import React from 'react';
import Link from 'next/link';
import { valuableClients } from '@/data/siteConfig';
import { MapPin, Globe, ArrowRight, Award } from 'lucide-react';

// Select 6 premier clients representing International, National, and Maharashtra projects
const featuredClientSrNos = [8, 9, 14, 7, 2, 12]; // Alamas (Dubai), Star Cement (Ghana), Gradient India (Chennai), AARVANSS (Ghaziabad), Bhavana Enterprises (Vapi/Maha), Ganesh Benzoplast (Mumbai)
const homepageClients = valuableClients.filter((c) => featuredClientSrNos.includes(c.srNo));

export function ValuableClientsSection() {
  return (
    <section className="py-16 sm:py-24 bg-[#F8FAFC] border-y border-slate-200" id="valuable-clients">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with On-Scroll Reveal */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12 sm:mb-16 reveal-on-scroll">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#102C4E]/10 text-[#102C4E] text-xs font-bold uppercase tracking-wider">
            <Award className="w-4 h-4 text-[#F47B20]" />
            <span>Proven Industry Track Record</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#102C4E] tracking-tight">
            Our Valuable Clients
          </h2>

          <div className="w-20 h-1 bg-[#F47B20] mx-auto rounded-full" />

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed pt-1">
            Shree Geotech is privileged to provide soil testing, rotary core drilling, and geotechnical
            investigation services to leading industrial conglomerates, structural consultants, and
            infrastructure builders across India and globally.
          </p>
        </div>

        {/* Highlight Stats Bar with Staggered On-Scroll Reveal */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-white p-4 sm:p-5 rounded-xl border border-slate-200 shadow-2xs text-center reveal-on-scroll delay-100 hover-lift">
            <p className="text-2xl sm:text-3xl font-extrabold text-[#102C4E]">23+</p>
            <p className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">Corporate Clients</p>
          </div>
          <div className="bg-white p-4 sm:p-5 rounded-xl border border-slate-200 shadow-2xs text-center reveal-on-scroll delay-150 hover-lift">
            <p className="text-2xl sm:text-3xl font-extrabold text-[#F47B20]">4</p>
            <p className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">Global Locations</p>
          </div>
          <div className="bg-white p-4 sm:p-5 rounded-xl border border-slate-200 shadow-2xs text-center reveal-on-scroll delay-200 hover-lift">
            <p className="text-2xl sm:text-3xl font-extrabold text-[#102C4E]">100%</p>
            <p className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">IS Code Adherence</p>
          </div>
          <div className="bg-white p-4 sm:p-5 rounded-xl border border-slate-200 shadow-2xs text-center reveal-on-scroll delay-250 hover-lift">
            <p className="text-2xl sm:text-3xl font-extrabold text-[#F47B20]">Zero</p>
            <p className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">Settlement Failures</p>
          </div>
        </div>

        {/* 6 Featured Client Cards (Maharashtra, National & International) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {homepageClients.map((client, idx) => (
            <div
              key={client.srNo}
              className={`bg-white rounded-xl p-5 sm:p-6 border border-slate-200 hover:border-[#F47B20] hover:shadow-lg transition-all duration-300 flex flex-col justify-between group reveal-on-scroll delay-${
                (idx + 1) * 100
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

              {/* Card Bottom: Sector */}
              <div className="mt-4 pt-3 border-t border-slate-100">
                <span className="text-[11px] font-semibold text-slate-500 block leading-tight">
                  Sector: <span className="text-[#102C4E] font-medium">{client.category}</span>
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Button Below the 6 Cards: Max 2 Words ("Our Clients") */}
        <div className="mt-10 sm:mt-12 text-center reveal-on-scroll delay-200">
          <Link
            href="/clients"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-bold text-sm sm:text-base text-white bg-[#102C4E] hover:bg-[#F47B20] shadow-md hover:shadow-xl transition-all duration-300 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F47B20]"
          >
            <span>Our Clients</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <p className="text-xs text-slate-500 mt-2 font-medium">
            Explore our complete directory of 23+ corporate engineering partners
          </p>
        </div>

        {/* Bottom Geotechnical Inquiry Bar */}
        <div className="mt-12 sm:mt-16 bg-[#102C4E] text-white rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md reveal-on-scroll delay-300">
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
              href="/clients"
              className="px-6 py-3 rounded-lg font-bold text-xs sm:text-sm text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-colors"
            >
              <span>Our Clients</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
