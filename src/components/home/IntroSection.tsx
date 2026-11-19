import React from 'react';
import Link from 'next/link';
import { Compass, FileSpreadsheet, ShieldAlert, Award } from 'lucide-react';

export function IntroSection() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-4 reveal-on-scroll">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#F3F6F9] text-[#102C4E] text-xs font-bold uppercase tracking-wider">
            About Our Practice
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#102C4E] tracking-tight">
            Your Trusted Geotechnical Investigation Partner
          </h2>
          <div className="w-16 h-1 bg-[#F47B20] mx-auto rounded-full" />
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed pt-2">
            Every durable structure begins beneath the surface. Shree Geotech provides scientific
            subsurface soil investigation, exploratory borehole drilling, and soil laboratory
            testing services designed to inform safe and economical foundation design.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-xl bg-[#F3F6F9] border border-slate-200/80 hover:border-[#F47B20]/40 transition-colors reveal-on-scroll delay-100 hover-lift">
            <div className="w-12 h-12 rounded-lg bg-[#102C4E] text-[#F47B20] flex items-center justify-center mb-4">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#102C4E] mb-2">Ground Strata Understanding</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              We help builders, developers, and structural consultants accurately map subsoil
              profiles, bedrock depth, and water table levels before breaking ground on foundation
              excavation.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#F3F6F9] border border-slate-200/80 hover:border-[#F47B20]/40 transition-colors reveal-on-scroll delay-200 hover-lift">
            <div className="w-12 h-12 rounded-lg bg-[#102C4E] text-[#F47B20] flex items-center justify-center mb-4">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#102C4E] mb-2">Risk & Settlement Prevention</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Unidentified weak clay pockets, loose strata, or aggressive subsoil chemistry cause
              differential settlement and structural cracking. Our tests identify risks early in the
              planning stage.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#F3F6F9] border border-slate-200/80 hover:border-[#F47B20]/40 transition-colors reveal-on-scroll delay-300 hover-lift">
            <div className="w-12 h-12 rounded-lg bg-[#102C4E] text-[#F47B20] flex items-center justify-center mb-4">
              <FileSpreadsheet className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#102C4E] mb-2">Engineered Cost Optimization</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Clear soil bearing capacity (SBC) numbers allow structural engineers to design footings
              with precision—avoiding unnecessary foundation over-design and conserving concrete and
              rebar budgets.
            </p>
          </div>
        </div>

        <div className="mt-10 text-center reveal-on-scroll delay-200">
          <Link
            href="/about"
            className="inline-flex items-center justify-center px-6 py-3 rounded-md font-bold text-sm text-[#102C4E] bg-[#F3F6F9] hover:bg-[#FFF4EC] hover:text-[#F47B20] border border-slate-200 transition-colors"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}

