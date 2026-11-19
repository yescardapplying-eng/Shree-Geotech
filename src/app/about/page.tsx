import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  ShieldCheck,
  Compass,
  FileCheck,
  MapPin,
  CheckCircle2,
  HardHat,
  Phone,
} from 'lucide-react';
import { aboutFAQs, siteConfig, industriesServed, workProcessSteps } from '@/data/siteConfig';
import { Accordion } from '@/components/common/Accordion';
import { ValuableClientsSection } from '@/components/home/ValuableClientsSection';

export const metadata: Metadata = {
  title: 'About Shree Geotech | Geotechnical Investigation & Soil Testing',
  description:
    'Learn about Shree Geotech: Technical geotechnical investigation, rotary core borehole drilling, and soil laboratory analysis in Dombivli, Thane, Kalyan, and Mumbai.',
  alternates: {
    canonical: 'https://shreegeotech.in/about',
  },
  openGraph: {
    title: 'About Shree Geotech | Geotechnical Investigation Specialists',
    description:
      'Engineered geotechnical investigation and soil testing services providing actionable subsurface strata parameters for construction and civil projects.',
    url: 'https://shreegeotech.in/about',
    siteName: 'Shree Geotech',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Banner */}
      <section className="bg-[#102C4E] text-white py-14 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#F47B20_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold text-slate-200">
            Professional Engineering Practice
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            About Shree Geotech
          </h1>
          <div className="w-16 h-1 bg-[#F47B20] mx-auto rounded-full" />
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            A technical geotechnical investigation and soil testing consultancy supporting
            sustainable foundation design across the Mumbai Metropolitan Region.
          </p>
        </div>
      </section>

      {/* Company Overview & Approach */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Image */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 aspect-4/3 sm:aspect-square bg-slate-100">
                <Image
                  src="/images/hero-soil-investigation.jpg"
                  alt="Shree Geotech engineering team on site"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 hidden sm:block p-4 rounded-xl bg-[#102C4E] text-white shadow-xl max-w-xs border-2 border-white">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-8 h-8 text-[#F47B20] shrink-0" />
                  <div>
                    <p className="text-xs font-bold leading-tight">Standards-Driven Testing</p>
                    <p className="text-[11px] text-slate-300">Conforming to Bureau of Indian Standards (IS)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#F47B20]">
                Technical Mission
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#102C4E] tracking-tight">
                Engineering Precision Beneath Every Foundation
              </h2>
              <div className="w-14 h-1 bg-[#F47B20] rounded-full" />

              <p className="text-base text-slate-700 leading-relaxed">
                Shree Geotech is an engineering-focused soil testing and geotechnical investigation
                organization operating out of Dombivli East, Maharashtra. We operate with a primary
                focus: delivering verified, empirical ground data that civil engineers, structural
                consultants, and builders can rely upon with complete technical certainty.
              </p>

              <p className="text-base text-slate-700 leading-relaxed">
                Subsurface geological variations across Maharashtra—ranging from soft marine clays,
                cohesive alluvial deposits, to stratified weathered and massive basalt rock—demand
                diligent sampling and standardized in-situ field testing. Our methodology combines
                calibrated drilling apparatus with standardized laboratory testing protocols to
                eliminate guesswork in foundation engineering.
              </p>

              {/* Guiding Technical Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-lg bg-[#F3F6F9] border border-slate-200">
                  <div className="flex items-center gap-2 text-[#102C4E] font-bold text-sm mb-1">
                    <Compass className="w-4 h-4 text-[#F47B20]" />
                    <span>Scientific Accuracy</span>
                  </div>
                  <p className="text-xs text-slate-600">
                    Precision instrumentation including calibrated hydraulic jacks, dial gauges, and
                    standardized core barrels.
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-[#F3F6F9] border border-slate-200">
                  <div className="flex items-center gap-2 text-[#102C4E] font-bold text-sm mb-1">
                    <FileCheck className="w-4 h-4 text-[#F47B20]" />
                    <span>Actionable Reports</span>
                  </div>
                  <p className="text-xs text-slate-600">
                    Tabulated bore logs, laboratory curves, and clear recommendations ready for
                    immediate structural computation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Supported */}
      <section className="py-16 bg-[#F3F6F9] border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#F47B20]">
              Who We Work With
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102C4E] tracking-tight">
              Sectors and Professionals We Support
            </h2>
            <div className="w-12 h-1 bg-[#F47B20] mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industriesServed.map((ind, i) => (
              <div key={i} className="bg-white p-5 rounded-xl border border-slate-200 shadow-2xs">
                <h3 className="font-bold text-[#102C4E] text-base mb-2">{ind.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Work Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#F47B20]">
              Operational Workflow
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102C4E] tracking-tight">
              Our Systematic Approach
            </h2>
            <div className="w-12 h-1 bg-[#F47B20] mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {workProcessSteps.map((step) => (
              <div
                key={step.step}
                className="p-5 rounded-xl bg-[#F3F6F9] border border-slate-200 flex flex-col justify-between"
              >
                <div>
                  <span className="text-2xl font-black text-[#F47B20] block mb-2">{step.step}</span>
                  <h3 className="text-base font-bold text-[#102C4E] mb-2">{step.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Valuable Clients & Engineering Partners */}
      <ValuableClientsSection />

      {/* Regional Service Focus */}
      <section className="py-16 bg-[#102C4E] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Serving Mumbai, Thane, Navi Mumbai & Surrounding Regions
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
            Operating from our headquarters in Dombivli East, our mobilized crews provide rapid
            deployment for exploratory drilling, SPT testing, and plate load tests across the entire
            region.
          </p>
          <div className="flex flex-wrap justify-center gap-2 pt-2">
            {siteConfig.locations.map((loc) => (
              <span
                key={loc.name}
                className="px-3 py-1 rounded-md bg-white/10 text-xs text-slate-200 border border-white/15"
              >
                {loc.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* About FAQs (Exactly 3 FAQs) */}
      <section className="py-16 bg-[#F3F6F9] border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#F47B20]">
              General Inquiries
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102C4E] tracking-tight">
              About Shree Geotech FAQs
            </h2>
            <div className="w-12 h-1 bg-[#F47B20] mx-auto rounded-full" />
          </div>

          <div className="bg-white rounded-xl p-4 sm:p-8 shadow-xs border border-slate-200">
            <Accordion items={aboutFAQs} idPrefix="about-faq" />
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-12 bg-white text-center border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <h3 className="text-2xl font-bold text-[#102C4E]">Speak With Our Engineering Team</h3>
          <p className="text-sm text-slate-600">
            Discuss your upcoming project site requirements or request an on-site feasibility
            consultation.
          </p>
          <div className="pt-2 flex justify-center gap-4">
            <Link
              href="/contact"
              className="px-6 py-2.5 rounded-md font-bold text-sm bg-[#F47B20] hover:bg-[#D9650D] text-white transition-colors"
            >
              Contact Now
            </Link>
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="px-6 py-2.5 rounded-md font-bold text-sm bg-[#102C4E] hover:bg-[#183C66] text-white inline-flex items-center gap-2 transition-colors"
            >
              <Phone className="w-4 h-4 text-[#F47B20]" />
              <span>Call Now</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

