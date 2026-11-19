import React from 'react';
import { workProcessSteps } from '@/data/siteConfig';

export function ProcessSection() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-4 reveal-on-scroll">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#F3F6F9] text-[#102C4E] text-xs font-bold uppercase tracking-wider hover-lift">
            Methodology
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#102C4E] tracking-tight">
            Our Work Process
          </h2>
          <div className="w-16 h-1 bg-[#F47B20] mx-auto rounded-full" />
          <p className="text-base text-slate-600 leading-relaxed">
            From initial site inspection to final technical reporting, our workflow guarantees
            reproducible data and complete standards compliance.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {workProcessSteps.map((step, index) => (
            <div
              key={step.step}
              className={`relative flex flex-col items-start group p-5 rounded-xl border border-transparent hover:border-slate-200 hover:bg-[#F3F6F9] hover-lift transition-all duration-300 reveal-on-scroll delay-${(index + 1) * 100}`}
            >
              {/* Step number badge */}
              <div className="w-14 h-14 rounded-xl bg-[#102C4E] text-[#F47B20] flex items-center justify-center font-extrabold text-xl shadow-md group-hover:bg-[#F47B20] group-hover:text-white group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 mb-5">
                {step.step}
              </div>

              <h3 className="text-lg font-bold text-[#102C4E] group-hover:text-[#F47B20] transition-colors mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
