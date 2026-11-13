import React from 'react';
import {
  Award,
  Wrench,
  FileText,
  Building2,
  MapPin,
  ShieldCheck,
} from 'lucide-react';
import { whyChoosePoints } from '@/data/siteConfig';

const iconMap = {
  Award,
  Wrench,
  FileText,
  Building2,
  MapPin,
  ShieldCheck,
};

export function WhyChooseUs() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#F3F6F9] text-[#102C4E] text-xs font-bold uppercase tracking-wider">
            Our Advantages
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#102C4E] tracking-tight">
            Why Choose Shree Geotech?
          </h2>
          <div className="w-16 h-1 bg-[#F47B20] mx-auto rounded-full" />
          <p className="text-base text-slate-600 leading-relaxed">
            Delivering technical geotechnical data with engineering integrity, standardized
            procedures, and local geological expertise.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyChoosePoints.map((point, index) => {
            const IconComponent =
              iconMap[point.icon as keyof typeof iconMap] || ShieldCheck;

            return (
              <div
                key={index}
                className="p-6 rounded-xl border border-slate-200 bg-white hover:border-[#F47B20]/40 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg bg-[#F3F6F9] group-hover:bg-[#102C4E] text-[#102C4E] group-hover:text-[#F47B20] flex items-center justify-center transition-colors duration-300 mb-4">
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#102C4E] mb-2 group-hover:text-[#F47B20] transition-colors">
                  {point.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">{point.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
