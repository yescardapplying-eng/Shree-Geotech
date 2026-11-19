'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, Clock, MapPin } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Our Services', href: '/services' },
    { name: 'About Us', href: '/about' },
    { name: 'Our Clients', href: '/clients' },
    { name: 'Contact Us', href: '/contact' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Top Bar for Phone, Locations, and Business Hours (Desktop) */}
      <div className="hidden lg:block bg-[#102C4E] text-white/90 text-xs py-2 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <MapPin className="w-3.5 h-3.5 text-[#F47B20]" />
              <span>Dombivli East, Mumbai | MMR Operations</span>
            </div>
            <div className="flex items-center space-x-2 text-white/80">
              <Clock className="w-3.5 h-3.5 text-[#F47B20]" />
              <span>Mon – Sat: 9:00 AM – 6:00 PM</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-white/70">Geotechnical Soil Testing Specialists</span>
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="flex items-center space-x-1.5 font-semibold text-[#F47B20] hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{siteConfig.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-40 bg-white transition-all duration-300 ${
          isScrolled ? 'shadow-md py-2.5' : 'shadow-xs py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="relative flex items-center shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F47B20] rounded-sm"
              aria-label="Shree Geotech Home"
            >
              <div className="relative w-48 sm:w-56 md:w-64 h-12 sm:h-14">
                <Image
                  src={siteConfig.brandAssets.logo}
                  alt="Shree Geotech - Geotechnical Engineering & Soil Testing Services"
                  fill
                  priority
                  sizes="(max-width: 640px) 192px, 256px"
                  className="object-contain object-left"
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`relative px-3.5 py-2 text-sm lg:text-base font-semibold transition-colors duration-200 rounded-md ${
                      active
                        ? 'text-[#F47B20]'
                        : 'text-[#102C4E] hover:text-[#F47B20] hover:bg-[#F3F6F9]'
                    }`}
                  >
                    {link.name}
                    {active && (
                      <span
                        className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-[#F47B20] rounded-full"
                        aria-hidden="true"
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTA Button */}
            <div className="hidden md:flex items-center space-x-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-md font-semibold text-sm text-white bg-[#F47B20] hover:bg-[#D9650D] shadow-sm hover:shadow transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F47B20] focus-visible:ring-offset-2 active:scale-98"
              >
                Contact Now
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex md:hidden items-center space-x-2">
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                aria-label="Call Shree Geotech"
                className="p-2 text-[#102C4E] hover:text-[#F47B20] rounded-md hover:bg-slate-100 transition-colors"
              >
                <Phone className="w-5 h-5 text-[#F47B20]" />
              </a>
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
                aria-controls="mobile-navigation"
                aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
                className="p-2 rounded-md text-[#102C4E] hover:text-[#F47B20] hover:bg-[#F3F6F9] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F47B20]"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <div
            id="mobile-navigation"
            className="md:hidden fixed inset-x-0 top-[65px] bottom-0 bg-white/95 backdrop-blur-md z-50 border-t border-slate-200 overflow-y-auto px-4 py-6 flex flex-col justify-between"
          >
            <div className="space-y-2">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 rounded-lg text-base font-semibold transition-colors ${
                      active
                        ? 'bg-[#FFF4EC] text-[#F47B20]'
                        : 'text-[#102C4E] hover:bg-[#F3F6F9]'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200 space-y-4">
              <div className="text-xs text-slate-500 space-y-1">
                <p className="font-semibold text-[#102C4E]">Office & Operations:</p>
                <p>{siteConfig.address.full}</p>
                <p className="pt-1 font-semibold text-[#102C4E]">Mon – Sat: 9:00 AM – 6:00 PM</p>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="flex items-center justify-center gap-2 py-3 px-3 rounded-md bg-[#102C4E] text-white font-semibold text-sm text-center shadow-xs"
                >
                  <Phone className="w-4 h-4 text-[#F47B20]" />
                  <span>Call Now</span>
                </a>
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center py-3 px-3 rounded-md bg-[#F47B20] text-white font-semibold text-sm text-center shadow-xs"
                >
                  Contact Now
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

