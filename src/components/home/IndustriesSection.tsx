import React from 'react';
import { Building2, Compass, HardHat, FileText, Factory, Wrench } from 'lucide-react';
import { industriesServed } from '@/data/siteConfig';

const iconMap = {
  Building2,
  Compass,
  HardHat,
  FileText,
  Factory,
  Wrench,
};

export function IndustriesSection() {
  return (
    <section className="py-16 sm:py-20 bg-[#F3F6F9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-white text-[#102C4E] text-xs font-bold uppercase tracking-wider shadow-2xs hover-lift">
            Sectors We Support
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#102C4E] tracking-tight">
            Industries We Serve
          </h2>
          <div className="w-16 h-1 bg-[#F47B20] mx-auto rounded-full" />
          <p className="text-base text-slate-600 leading-relaxed">
            Delivering specialized ground investigation solutions designed for developers,
            consultants, contractors, and public infrastructure planners.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industriesServed.map((ind, index) => {
            const IconComponent = iconMap[ind.icon as keyof typeof iconMap] || Building2;

            return (
              <div
                key={index}
                className="bg-white p-6 rounded-xl border border-slate-200/80 hover:border-[#102C4E] shadow-2xs hover-lift transition-all duration-300 group cursor-pointer"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#FFF4EC] text-[#F47B20] flex items-center justify-center shrink-0 group-hover:bg-[#102C4E] group-hover:text-white transition-all duration-300 group-hover:scale-110">
                    <IconComponent className="w-5 h-5 transition-transform duration-300" />
                  </div>
                  <h3 className="text-lg font-bold text-[#102C4E] group-hover:text-[#F47B20] transition-colors">
                    {ind.title}
                  </h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">{ind.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
