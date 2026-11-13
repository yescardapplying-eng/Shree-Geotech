import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import { Phone, MapPin, Clock, MessageSquare, ShieldCheck } from 'lucide-react';
import { contactFAQs, siteConfig } from '@/data/siteConfig';
import { ContactForm } from '@/components/contact/ContactForm';
import { GoogleMap } from '@/components/contact/GoogleMap';
import { Accordion } from '@/components/common/Accordion';

export const metadata: Metadata = {
  title: 'Contact Shree Geotech | Soil Testing & Geotechnical Inquiries',
  description:
    'Get in touch with Shree Geotech for soil testing, SPT, borehole core drilling, and SBC testing in Dombivli, Kalyan, Thane, Navi Mumbai, and Mumbai. Call +91 92707 12338.',
  alternates: {
    canonical: 'https://shreegeotech.in/contact',
  },
  openGraph: {
    title: 'Contact Shree Geotech | Soil Testing & Geotechnical Inquiries',
    description:
      'Request a proposal or speak with our geotechnical engineering team for soil testing across Mumbai Metropolitan Region.',
    url: 'https://shreegeotech.in/contact',
    siteName: 'Shree Geotech',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function ContactPage() {
  return (
    <div className="bg-[#F3F6F9]">
      {/* Banner */}
      <section className="bg-[#102C4E] text-white py-14 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#F47B20_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold text-slate-200">
            Prompt Technical Support
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Contact Shree Geotech
          </h1>
          <div className="w-16 h-1 bg-[#F47B20] mx-auto rounded-full" />
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Reach out to our engineering office to discuss your site investigation, schedule
            drilling rig mobilization, or receive a formal testing proposal.
          </p>
        </div>
      </section>

      {/* Main 2-Column Contact Layout */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left Column: Contact Details */}
            <div className="lg:col-span-5 space-y-8">
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#F47B20]">
                    Direct Connection
                  </span>
                  <h2 className="text-2xl font-extrabold text-[#102C4E] mt-1">
                    Get In Touch With Us
                  </h2>
                </div>

                <div className="space-y-6 text-sm">
                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-lg bg-[#FFF4EC] text-[#F47B20] flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-medium">Business Contact Number</p>
                      <a
                        href={`tel:${siteConfig.phoneRaw}`}
                        className="text-base font-bold text-[#102C4E] hover:text-[#F47B20] transition-colors block mt-0.5"
                      >
                        {siteConfig.phoneDisplay}
                      </a>
                      <p className="text-[11px] text-slate-500 mt-0.5">Call for project estimates and queries</p>
                    </div>
                  </div>

                  {/* WhatsApp Quick Chat */}
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                      <div className="relative w-6 h-6">
                        <Image
                          src={siteConfig.brandAssets.whatsappIcon}
                          alt="WhatsApp"
                          fill
                          sizes="24px"
                          className="object-contain"
                        />
                      </div>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-medium">Instant WhatsApp Line</p>
                      <a
                        href={siteConfig.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-bold text-emerald-700 hover:underline block mt-0.5"
                      >
                        +91 92707 12338 (Click to Chat)
                      </a>
                      <p className="text-[11px] text-slate-500 mt-0.5">Send drawings and borehole requirements</p>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-lg bg-[#FFF4EC] text-[#F47B20] flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-medium">Registered Office</p>
                      <p className="font-semibold text-[#102C4E] mt-0.5 leading-snug">
                        {siteConfig.address.full}
                      </p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-lg bg-[#FFF4EC] text-[#F47B20] flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div className="w-full">
                      <p className="text-xs text-slate-500 font-medium mb-1">Operational Hours</p>
                      <div className="space-y-1 text-xs">
                        {siteConfig.hours.map((h, idx) => (
                          <div key={idx} className="flex justify-between py-0.5 border-b border-slate-100 last:border-b-0">
                            <span className="font-medium text-[#102C4E]">{h.days}:</span>
                            <span className="text-slate-600">{h.time}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-500">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Prompt site visit feasibility assessments across MMR</span>
                </div>
              </div>

              {/* Locations Quick List */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                <h3 className="text-sm font-bold text-[#102C4E] uppercase tracking-wider mb-3">
                  Key Service Areas
                </h3>
                <div className="flex flex-wrap gap-1.5 text-xs">
                  {siteConfig.locations.map((loc) => (
                    <span
                      key={loc.name}
                      className="px-2.5 py-1 rounded bg-[#F3F6F9] text-slate-700 font-medium border border-slate-200"
                    >
                      {loc.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Contact Enquiry Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>

          {/* Embedded Google Maps */}
          <div className="mt-16">
            <div className="text-center max-w-xl mx-auto mb-6">
              <h2 className="text-2xl font-bold text-[#102C4E]">Office & Operations Map</h2>
              <p className="text-xs text-slate-500 mt-1">
                Located in Sagaon, Dombivli East with rapid access to Thane and Mumbai
              </p>
            </div>
            <GoogleMap />
          </div>
        </div>
      </section>

      {/* Contact FAQs (Exactly 3 FAQs) */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#F47B20]">
              Inquiry Assistance
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102C4E] tracking-tight">
              Contact & Quotation FAQs
            </h2>
            <div className="w-12 h-1 bg-[#F47B20] mx-auto rounded-full" />
          </div>

          <div className="bg-[#F3F6F9] rounded-xl p-4 sm:p-8 shadow-xs border border-slate-200">
            <Accordion items={contactFAQs} idPrefix="contact-faq" />
          </div>
        </div>
      </section>
    </div>
  );
}

