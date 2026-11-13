import React from 'react';
import Link from 'next/link';
import { Compass, ArrowRight } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-white px-4 py-16">
      <div className="max-w-md mx-auto text-center space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-[#FFF4EC] text-[#F47B20] flex items-center justify-center mx-auto shadow-sm">
          <Compass className="w-8 h-8" />
        </div>
        <div className="space-y-2">
          <p className="text-xs font-bold uppercase tracking-widest text-[#F47B20]">404 Error</p>
          <h1 className="text-3xl font-extrabold text-[#102C4E]">Page Not Found</h1>
          <p className="text-sm text-slate-600 leading-relaxed">
            The page you are looking for may have been moved or does not exist. Please navigate back
            to our homepage or explore our geotechnical services.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <Link
            href="/"
            className="px-6 py-2.5 rounded-md font-bold text-sm text-white bg-[#F47B20] hover:bg-[#D9650D] transition-colors"
          >
            Home Page
          </Link>
          <Link
            href="/services"
            className="px-6 py-2.5 rounded-md font-bold text-sm text-[#102C4E] bg-[#F3F6F9] hover:bg-[#FFF4EC] hover:text-[#F47B20] border border-slate-200 transition-colors inline-flex items-center gap-1.5"
          >
            <span>Our Services</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}

