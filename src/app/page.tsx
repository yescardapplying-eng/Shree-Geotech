import React from 'react';
import type { Metadata } from 'next';
import { HeroSection } from '@/components/home/HeroSection';
import { IntroSection } from '@/components/home/IntroSection';
import { ServicesOverview } from '@/components/home/ServicesOverview';
import { WhyChooseUs } from '@/components/home/WhyChooseUs';
import { IndustriesSection } from '@/components/home/IndustriesSection';
import { ProcessSection } from '@/components/home/ProcessSection';
import { LocationsSection } from '@/components/home/LocationsSection';
import { ValuableClientsSection } from '@/components/home/ValuableClientsSection';
import { TestimonialCarousel } from '@/components/home/TestimonialCarousel';
import { FAQSection } from '@/components/home/FAQSection';
import { CTASection } from '@/components/home/CTASection';

export const metadata: Metadata = {
  title: 'Reliable Soil Testing & Geotechnical Investigation | Shree Geotech',
  description:
    'Shree Geotech provides professional soil testing, exploratory borehole drilling, Standard Penetration Test (SPT), and Plate Load SBC tests across Dombivli, Thane, Kalyan, and Mumbai.',
  alternates: {
    canonical: 'https://shreegeotech.in/',
  },
  openGraph: {
    title: 'Reliable Soil Testing & Geotechnical Investigation | Shree Geotech',
    description:
      'Accurate soil investigation, geotechnical testing and technical reporting for construction and infrastructure projects across Dombivli, Thane, Kalyan, and Mumbai.',
    url: 'https://shreegeotech.in/',
    siteName: 'Shree Geotech',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <IntroSection />
      <ServicesOverview />
      <WhyChooseUs />
      <IndustriesSection />
      <ProcessSection />
      <LocationsSection />
      <ValuableClientsSection />
      <TestimonialCarousel />
      <FAQSection />
      <CTASection />
    </>
  );
}
