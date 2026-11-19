import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  ShieldCheck,
  HardHat,
  Wrench,
  FileText,
  CheckCircle2,
  ArrowRight,
  Phone,
} from 'lucide-react';
import { servicesData, servicesFAQs, siteConfig } from '@/data/siteConfig';
import { Accordion } from '@/components/common/Accordion';

export const metadata: Metadata = {
  title: 'Geotechnical Soil Testing & Investigation Services | Shree Geotech',
  description:
    'Comprehensive soil testing services in Dombivli, Kalyan, Thane, and Mumbai: Soil Bearing Capacity (SBC) Plate Load test, Soil Boring core drilling, SPT test, and chemical analysis.',
  alternates: {
    canonical: 'https://shreegeotech.in/services',
  },
  openGraph: {
    title: 'Geotechnical Soil Testing & Investigation Services | Shree Geotech',
    description:
      'Explore our engineering soil testing capabilities: Plate Load SBC testing, core borehole drilling, SPT N-values, and soil laboratory analysis.',
    url: 'https://shreegeotech.in/services',
    siteName: 'Shree Geotech',
    locale: 'en_IN',
    type: 'website',
  },
};

const iconMap = {
  ShieldCheck,
  HardHat,
  Wrench,
  FileText,
};

export default function ServicesPage() {
  return (
    <div className="bg-white">
      {/* Page Header Banner */}
      <section className="bg-[#102C4E] text-white py-14 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#F47B20_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4 reveal-on-scroll">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold text-slate-200">
            Field & Laboratory Geotechnical Solutions
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Our Geotechnical Services
          </h1>
          <div className="w-16 h-1 bg-[#F47B20] mx-auto rounded-full" />
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Standardized in-situ testing and accredited laboratory soil investigation procedures
            conforming to Bureau of Indian Standards (IS Codes) for safe foundation design.
          </p>
        </div>
      </section>

      {/* Services Detailed List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 space-y-20">
        {servicesData.map((service, index) => {
          const IconComponent =
            iconMap[service.iconName as keyof typeof iconMap] || ShieldCheck;
          const isEven = index % 2 === 1;

          return (
            <article
              key={service.id}
              id={service.slug}
              className="scroll-mt-28 border-b border-slate-200 pb-16 last:border-b-0 last:pb-0 reveal-on-scroll delay-100"
            >
              <div
                className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center ${
                  isEven ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Left/Right Column: Image & Tech Specs Card with Normal Zoom Hover Animation */}
                <div
                  className={`lg:col-span-5 space-y-6 ${
                    isEven ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl border border-slate-200 bg-slate-100 aspect-4/3 sm:aspect-16/11 service-img-wrapper group cursor-pointer transition-all duration-500 hover:-translate-y-1.5">
                    <Image
                      src={service.image}
                      alt={`${service.title} - Geotechnical investigation by Shree Geotech`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#102C4E]/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  </div>

                  {/* Technical Parameters Box */}
                  <div className="bg-[#F3F6F9] rounded-xl p-5 border border-slate-200 space-y-3 shadow-2xs hover:shadow-md transition-shadow">
                    <h3 className="text-xs font-bold text-[#102C4E] uppercase tracking-wider">
                      Technical Parameters
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                      {service.technicalDetails.map((tech, tIdx) => (
                        <div
                          key={tIdx}
                          className="bg-white p-2.5 rounded border border-slate-200/80 hover-lift transition-all"
                        >
                          <p className="text-slate-500 font-medium">{tech.label}</p>
                          <p className="font-bold text-[#102C4E] mt-0.5">{tech.value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Content Column */}
                <div
                  className={`lg:col-span-7 space-y-5 ${
                    isEven ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#FFF4EC] text-[#F47B20] flex items-center justify-center shrink-0 shadow-2xs hover:rotate-6 transition-transform">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#F47B20]">
                      Service #{index + 1}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102C4E] tracking-tight">
                    {service.title}
                  </h2>

                  <p className="text-base text-slate-700 leading-relaxed font-normal">
                    {service.fullDesc}
                  </p>

                  {/* Purpose */}
                  <div className="bg-[#F8FAFC] p-4 rounded-lg border-l-4 border-[#F47B20] shadow-2xs">
                    <h3 className="text-sm font-bold text-[#102C4E] mb-1">Purpose of the Test:</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {service.purpose}
                    </p>
                  </div>

                  {/* Testing Process */}
                  <div className="space-y-2 pt-1">
                    <h3 className="text-sm font-bold text-[#102C4E]">
                      Testing Methodology & Steps:
                    </h3>
                    <ul className="space-y-1.5 text-xs sm:text-sm text-slate-600">
                      {service.testingProcess.map((step, sIdx) => (
                        <li key={sIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#F47B20] shrink-0 mt-0.5" />
                          <span>{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Applications & Benefits in 2 cols */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div className="p-3.5 bg-[#F3F6F9] rounded-lg border border-slate-200/80 hover-lift">
                      <h4 className="text-xs font-bold text-[#102C4E] uppercase mb-1.5">
                        Key Applications:
                      </h4>
                      <ul className="space-y-1 text-xs text-slate-600">
                        {service.applications.slice(0, 3).map((app, aIdx) => (
                          <li key={aIdx} className="flex items-start gap-1.5">
                            <span className="text-[#F47B20] font-bold">•</span>
                            <span>{app}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="p-3.5 bg-[#F3F6F9] rounded-lg border border-slate-200/80 hover-lift">
                      <h4 className="text-xs font-bold text-[#102C4E] uppercase mb-1.5">
                        Client Value:
                      </h4>
                      <ul className="space-y-1 text-xs text-slate-600">
                        {service.benefits.slice(0, 3).map((ben, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-1.5">
                            <span className="text-emerald-600 font-bold">✓</span>
                            <span>{ben}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* CTAs: Max two words */}
                  <div className="flex flex-wrap items-center gap-3 pt-3">
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center px-6 py-2.5 rounded-md font-bold text-xs sm:text-sm text-white bg-[#F47B20] hover:bg-[#D9650D] shadow-xs hover:shadow-md transition-all hover-lift active:scale-95"
                    >
                      Get Quote
                    </Link>
                    <a
                      href={`tel:${siteConfig.phoneRaw}`}
                      className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-md font-bold text-xs sm:text-sm text-[#102C4E] bg-[#F3F6F9] hover:bg-[#FFF4EC] hover:text-[#F47B20] border border-slate-200 transition-all hover-lift active:scale-95"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#F47B20]" />
                      <span>Call Now</span>
                    </a>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* Services FAQs (Exactly 3 FAQs as requested) */}
      <section className="py-16 bg-[#F3F6F9] border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 mb-10 reveal-on-scroll">
            <span className="text-xs font-bold uppercase tracking-wider text-[#F47B20]">
              Technical Inquiries
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102C4E] tracking-tight">
              Service Related FAQs
            </h2>
            <div className="w-12 h-1 bg-[#F47B20] mx-auto rounded-full" />
          </div>

          <div className="bg-white rounded-xl p-4 sm:p-8 shadow-xs border border-slate-200 reveal-on-scroll delay-150">
            <Accordion items={servicesFAQs} idPrefix="service-faq" />
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-12 bg-[#102C4E] text-white text-center reveal-on-scroll">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <h3 className="text-2xl font-bold">Require a Customized Soil Testing Proposal?</h3>
          <p className="text-sm text-slate-300">
            Share your plot dimensions, structural requirements, and location for a detailed
            engineering quotation.
          </p>
          <div className="pt-2 flex justify-center gap-4">
            <Link
              href="/contact"
              className="px-6 py-2.5 rounded-md font-bold text-sm bg-[#F47B20] hover:bg-[#D9650D] text-white transition-all hover-lift active:scale-95"
            >
              Contact Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
