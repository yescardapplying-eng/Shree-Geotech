import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | Shree Geotech',
  description: 'Privacy policy and data protection practices for Shree Geotech website visitors.',
  alternates: {
    canonical: 'https://shreegeotech.in/privacy-policy',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white py-16 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#102C4E]">Privacy Policy</h1>
          <p className="text-xs text-slate-500 mt-2">Last Updated: 2026</p>
        </div>

        <div className="prose prose-slate max-w-none text-sm sm:text-base leading-relaxed space-y-6 text-slate-700">
          <p>
            At <strong>Shree Geotech</strong>, accessible from https://shreegeotech.in, the privacy
            of our visitors and clients is of vital importance. This Privacy Policy document outlines
            the types of information that is collected and recorded by Shree Geotech and how we use
            it.
          </p>

          <h2 className="text-xl font-bold text-[#102C4E]">Information We Collect</h2>
          <p>
            When you contact us through our website enquiry form, request a geotechnical quotation,
            or contact us via telephone or WhatsApp, we may collect your name, phone number, email
            address, project location, and technical project scope details.
          </p>

          <h2 className="text-xl font-bold text-[#102C4E]">How We Use Your Information</h2>
          <p>
            We use the information collected strictly to communicate with you regarding your soil
            testing requirements, prepare accurate engineering quotations, coordinate site visits,
            and deliver geotechnical testing reports. We do not sell, rent, or trade your contact
            details to third-party marketing companies.
          </p>

          <h2 className="text-xl font-bold text-[#102C4E]">Security</h2>
          <p>
            We implement appropriate administrative and technical measures to protect the personal
            and project data submitted to us against unauthorized access or disclosure.
          </p>

          <h2 className="text-xl font-bold text-[#102C4E]">Contact Us</h2>
          <p>
            If you have questions regarding this Privacy Policy, please reach out to us at our
            registered address: 101 Bambam Bole Apartment, Near Hanuman Mandir, Sagaon, Dombivli East,
            Mumbai – 421204, Maharashtra, India, or call +91 92707 12338.
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
