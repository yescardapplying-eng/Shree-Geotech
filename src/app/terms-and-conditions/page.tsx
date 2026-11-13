import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Shree Geotech',
  description: 'Terms and conditions governing the use of Shree Geotech website and services.',
  alternates: {
    canonical: 'https://shreegeotech.in/terms-and-conditions',
  },
};

export default function TermsPage() {
  return (
    <div className="bg-white py-16 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#102C4E]">Terms & Conditions</h1>
          <p className="text-xs text-slate-500 mt-2">Last Updated: 2026</p>
        </div>

        <div className="prose prose-slate max-w-none text-sm sm:text-base leading-relaxed space-y-6 text-slate-700">
          <p>
            Welcome to <strong>Shree Geotech</strong>. By accessing or using our website located at
            https://shreegeotech.in, you agree to be bound by these Terms and Conditions.
          </p>

          <h2 className="text-xl font-bold text-[#102C4E]">Technical Information Disclaimer</h2>
          <p>
            The geotechnical descriptions, testing overviews, and technical parameters published on
            this website are intended for general engineering informational purposes. Specific site
            subsoil conditions, safe bearing capacity values, and foundation recommendations can only
            be determined following physical site borehole investigation, sampling, and laboratory
            testing under certified engineering supervision.
          </p>

          <h2 className="text-xl font-bold text-[#102C4E]">Service Quotations & Engagement</h2>
          <p>
            Any preliminary quotes provided through website enquiry forms or telephone inquiries are
            subject to formal written site feasibility confirmation, borehole depth confirmation,
            and mutual execution of a formal scope of work agreement.
          </p>

          <h2 className="text-xl font-bold text-[#102C4E]">Intellectual Property</h2>
          <p>
            All brand logos, text copy, graphic emblems, photography, and website content are the
            exclusive property of Shree Geotech or used under appropriate authorization.
            Unauthorized copying or reproduction without prior written permission is strictly
            prohibited.
          </p>

          <h2 className="text-xl font-bold text-[#102C4E]">Governing Jurisdiction</h2>
          <p>
            These terms shall be governed by and construed in accordance with the laws of India, and
            any legal proceedings shall be subject to the exclusive jurisdiction of the courts of
            Thane/Mumbai, Maharashtra.
          </p>
        </div>

        <div className="pt-6 border-t border-slate-200">
          <Link
            href="/"
            className="inline-flex items-center text-sm font-bold text-[#F47B20] hover:underline"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
