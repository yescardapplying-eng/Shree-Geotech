import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, MapPin, Clock, ArrowRight, ShieldCheck } from 'lucide-react';
import { siteConfig, servicesData } from '@/data/siteConfig';

export function Footer() {
  return (
    <footer className="bg-[#102C4E] text-white border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Column 1: Brand & Bio */}
          <div className="space-y-4">
            <Link href="/" className="inline-block bg-white p-2 rounded-md">
              <div className="relative w-48 h-10">
                <Image
                  src={siteConfig.brandAssets.logo}
                  alt="Shree Geotech Logo"
                  fill
                  sizes="192px"
                  className="object-contain"
                />
              </div>
            </Link>
            <p className="text-slate-300 text-sm leading-relaxed">
              Specialized geotechnical investigation and soil testing services for construction,
              structural foundations, infrastructure projects, and architectural planning across the
              Mumbai Metropolitan Region.
            </p>
            <div className="pt-2 flex items-center space-x-2 text-xs text-[#F47B20]">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>Conforming to IS Standards & Soil Engineering Codes</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-base font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-[#F47B20] pl-2.5">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <Link
                  href="/"
                  className="hover:text-[#F47B20] transition-colors inline-flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-[#F47B20]" />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-[#F47B20] transition-colors inline-flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-[#F47B20]" />
                  <span>Our Services</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-[#F47B20] transition-colors inline-flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-[#F47B20]" />
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-[#F47B20] transition-colors inline-flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-[#F47B20]" />
                  <span>Contact Us</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="hover:text-[#F47B20] transition-colors inline-flex items-center gap-1.5 text-slate-400 text-xs pt-1"
                >
                  <ArrowRight className="w-3 h-3 text-slate-500" />
                  <span>Privacy Policy</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-and-conditions"
                  className="hover:text-[#F47B20] transition-colors inline-flex items-center gap-1.5 text-slate-400 text-xs"
                >
                  <ArrowRight className="w-3 h-3 text-slate-500" />
                  <span>Terms & Conditions</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Our Services */}
          <div>
            <h3 className="text-base font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-[#F47B20] pl-2.5">
              Our Services
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-300">
              {servicesData.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services#${service.slug}`}
                    className="hover:text-[#F47B20] transition-colors inline-flex items-start gap-1.5"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-[#F47B20] mt-0.5 shrink-0" />
                    <span>{service.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-4 pt-3 border-t border-white/10 text-xs text-slate-400">
              <p className="font-semibold text-white/90">Service Hubs:</p>
              <p className="mt-1 leading-relaxed">
                Dombivli, Kalyan, Thane, Navi Mumbai, Panvel, Mumbai, Ambernath, Ulhasnagar, Badlapur.
              </p>
            </div>
          </div>

          {/* Column 4: Contact Information */}
          <div className="space-y-4">
            <h3 className="text-base font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-[#F47B20] pl-2.5">
              Contact Info
            </h3>
            <div className="space-y-3 text-sm text-slate-300">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-[#F47B20] mt-1 shrink-0" />
                <span>{siteConfig.address.full}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-[#F47B20] shrink-0" />
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="hover:text-[#F47B20] transition-colors font-medium text-white"
                >
                  {siteConfig.phoneDisplay}
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-4 h-4 text-[#F47B20] mt-1 shrink-0" />
                <div className="text-xs space-y-0.5">
                  <p>Mon – Fri: 9:00 AM – 6:00 PM</p>
                  <p>Sat: 9:00 AM – 4:00 PM</p>
                  <p className="text-slate-400">Sun: Closed</p>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-4 py-2 rounded-sm text-xs font-semibold text-white bg-[#F47B20] hover:bg-[#D9650D] transition-colors"
              >
                Contact Now
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Noor Web Credit */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 Shree Geotech. All Rights Reserved.</p>
          <p>
            Designed by{' '}
            <a
              href="https://NoorWeb.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#F47B20] hover:underline font-medium hover:text-white transition-colors"
            >
              Noor Web
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

