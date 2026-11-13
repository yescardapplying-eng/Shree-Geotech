import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ShieldCheck, HardHat, Wrench, FileText, ArrowRight } from 'lucide-react';
import { servicesData } from '@/data/siteConfig';

const iconMap = {
  ShieldCheck,
  HardHat,
  Wrench,
  FileText,
};

export function ServicesOverview() {
  return (
    <section className="py-16 sm:py-20 bg-[#F3F6F9]" id="services-overview">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-white text-[#F47B20] text-xs font-bold uppercase tracking-wider shadow-2xs">
            Technical Capabilities
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#102C4E] tracking-tight">
            Our Geotechnical Services
          </h2>
          <div className="w-16 h-1 bg-[#F47B20] mx-auto rounded-full" />
          <p className="text-base text-slate-600 leading-relaxed">
            Standardized in-situ testing and laboratory soil analysis tailored for civil structures,
            residential towers, industrial facilities, and public infrastructure projects.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service) => {
            const IconComponent =
              iconMap[service.iconName as keyof typeof iconMap] || ShieldCheck;

            return (
              <div
                key={service.id}
                className="group flex flex-col bg-white rounded-xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5"
              >
                {/* Image */}
                <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 w-10 h-10 rounded-lg bg-[#102C4E]/90 backdrop-blur-xs text-[#F47B20] flex items-center justify-center shadow-md">
                    <IconComponent className="w-5 h-5" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-[#102C4E] group-hover:text-[#F47B20] transition-colors leading-snug">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed">
                      {service.shortDesc}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      href={`/services#${service.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#102C4E] group-hover:text-[#F47B20] transition-colors"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                      href="/contact"
                      className="px-2.5 py-1 text-[11px] font-semibold rounded bg-[#FFF4EC] text-[#F47B20] hover:bg-[#F47B20] hover:text-white transition-colors"
                    >
                      Get Quote
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center justify-center px-7 py-3 rounded-md font-bold text-sm text-white bg-[#102C4E] hover:bg-[#183C66] shadow-sm transition-colors"
          >
            View Details
          </Link>
        </div>
      </div>
    </section>
  );
}

