import React from 'react';
import { Accordion } from '@/components/common/Accordion';
import { homeFAQs } from '@/data/siteConfig';

export function FAQSection() {
  return (
    <section className="py-16 sm:py-20 bg-[#F3F6F9]" id="faqs">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-white text-[#102C4E] text-xs font-bold uppercase tracking-wider shadow-2xs">
            Frequently Asked Questions
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#102C4E] tracking-tight">
            Geotechnical Investigation FAQs
          </h2>
          <div className="w-16 h-1 bg-[#F47B20] mx-auto rounded-full" />
          <p className="text-base text-slate-600 leading-relaxed">
            Essential engineering answers regarding soil testing procedures, technical reports, and
            service coverage.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-4 sm:p-8 shadow-xs border border-slate-200">
          <Accordion items={homeFAQs} idPrefix="home-faq" />
        </div>
      </div>
    </section>
  );
}
