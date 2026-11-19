import React from 'react';
import type { Metadata } from 'next';
import { ClientsDirectory } from '@/components/clients/ClientsDirectory';
import { Accordion } from '@/components/common/Accordion';
import { clientsFAQs, siteConfig } from '@/data/siteConfig';
import Link from 'next/link';
import { Award, ChevronRight, Phone, ArrowRight, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Valuable Clients & Engineering Partners | Shree Geotech',
  description:
    'Explore Shree Geotech’s portfolio of 23+ corporate clients across Maharashtra, National corridors, and International projects in Dubai and West Africa. Certified geotechnical testing and soil investigation.',
  alternates: {
    canonical: 'https://shreegeotech.in/clients/',
  },
  openGraph: {
    title: 'Our Valuable Clients & Engineering Partners | Shree Geotech',
    description:
      'Shree Geotech has conducted trusted geotechnical investigations for 23+ industrial conglomerates, EPC contractors, and structural consultants.',
    url: 'https://shreegeotech.in/clients/',
    siteName: 'Shree Geotech',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function ClientsPage() {
  return (
    <>
      {/* Page Hero Header */}
      <section className="relative bg-[#102C4E] text-white py-14 sm:py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#F47B20_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-xs sm:text-sm text-slate-300 mb-6 reveal-on-scroll">
            <Link href="/" className="hover:text-[#F47B20] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-[#F47B20] font-semibold">Our Clients</span>
          </nav>

          <div className="max-w-3xl space-y-4 reveal-on-scroll delay-100">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs sm:text-sm font-medium text-slate-200 backdrop-blur-xs">
              <Award className="w-4 h-4 text-[#F47B20]" />
              <span>Proven Industry Track Record</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Our Valuable Clients &amp; <br className="hidden sm:inline" />
              <span className="text-[#F47B20]">Engineering Partners</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed pt-1">
              Shree Geotech has delivered high-precision soil investigation, exploratory borehole core
              drilling, and in-situ foundation testing for 23+ premier corporations across Maharashtra,
              National infrastructure corridors, and overseas international project sites.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Directory of All 23 Clients with Search and Region Filtering */}
      <ClientsDirectory />

      {/* 3 Dedicated Clients FAQs Section */}
      <section className="py-16 sm:py-20 bg-[#F3F6F9] border-t border-slate-200" id="client-faqs">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-12 reveal-on-scroll">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-white text-[#F47B20] text-xs font-bold uppercase tracking-wider shadow-2xs">
              Client Engagement &amp; Compliance
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#102C4E] tracking-tight">
              Frequently Asked Questions
            </h2>
            <div className="w-16 h-1 bg-[#F47B20] mx-auto rounded-full" />
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Key engineering details regarding our corporate project execution, data non-disclosure,
              and pan-India mobilization.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-4 sm:p-8 shadow-xs border border-slate-200 reveal-on-scroll delay-150">
            <Accordion items={clientsFAQs} idPrefix="clients-faq" />
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#102C4E] text-white rounded-2xl p-8 sm:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-xl reveal-on-scroll">
            <div className="space-y-3 text-center lg:text-left max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#F47B20]">
                <ShieldCheck className="w-4 h-4" />
                <span>NABL &amp; IS Standards Geotechnical Investigation</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight">
                Partner with Shree Geotech for Your Next Engineering Project
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Connect with our senior geotechnical team in Dombivli, Mumbai. We provide rapid
                quotations, comprehensive borehole logging, and signed engineering recommendations.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto shrink-0">
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-bold text-sm text-white bg-[#F47B20] hover:bg-[#D9650D] shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2"
              >
                <span>WhatsApp Inquiry</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-bold text-sm text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all duration-200 flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#F47B20]" />
                <span>Call Directly</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
