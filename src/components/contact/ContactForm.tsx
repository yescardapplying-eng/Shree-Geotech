'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { servicesData, siteConfig } from '@/data/siteConfig';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: servicesData[0].title,
    location: '',
    message: '',
    honeypot: '', // Spam filter
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    // Quick client-side check
    if (!formData.name.trim() || !formData.phone.trim() || !formData.location.trim()) {
      setStatus('error');
      setErrorMessage('Please fill in Name, Phone, and Project Location.');
      return;
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus('success');
        setFormData({
          name: '',
          phone: '',
          email: '',
          service: servicesData[0].title,
          location: '',
          message: '',
          honeypot: '',
        });
      } else {
        setStatus('error');
        setErrorMessage(result.error || 'Failed to submit enquiry. Please call us directly.');
      }
    } catch {
      setStatus('error');
      setErrorMessage('Network error occurred. Please try calling us at +91 92707 12338.');
    }
  };

  return (
    <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-md">
      <div className="mb-6 space-y-1">
        <h3 className="text-xl font-bold text-[#102C4E]">Request an Engineering Proposal</h3>
        <p className="text-xs sm:text-sm text-slate-500">
          Fill in your project details below to receive a geotechnical testing estimate.
        </p>
      </div>

      {status === 'success' && (
        <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-start gap-3">
          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
          <div className="text-sm">
            <p className="font-bold">Enquiry Received Successfully!</p>
            <p className="mt-0.5 text-xs text-emerald-700">
              Thank you for contacting Shree Geotech. Our engineering team will review your project
              scope and call you back shortly.
            </p>
          </div>
        </div>
      )}

      {status === 'error' && (
        <div className="mb-6 p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
          <div className="text-sm">
            <p className="font-bold">Submission Notice</p>
            <p className="mt-0.5 text-xs text-rose-700">{errorMessage}</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Hidden Honeypot Field */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="form-honeypot">Leave blank</label>
          <input
            id="form-honeypot"
            type="text"
            name="honeypot"
            value={formData.honeypot}
            onChange={handleChange}
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        {/* Full Name */}
        <div>
          <label htmlFor="name" className="block text-xs font-bold text-[#102C4E] uppercase mb-1">
            Full Name <span className="text-[#F47B20]">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. Rajesh Patil"
            className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-[#F47B20] focus:ring-2 focus:ring-[#F47B20]/20 text-sm text-[#102C4E] placeholder:text-slate-400 outline-none transition-colors"
          />
        </div>

        {/* Phone & Email Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="phone" className="block text-xs font-bold text-[#102C4E] uppercase mb-1">
              Phone Number <span className="text-[#F47B20]">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="e.g. 98200 12345"
              className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-[#F47B20] focus:ring-2 focus:ring-[#F47B20]/20 text-sm text-[#102C4E] placeholder:text-slate-400 outline-none transition-colors"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-xs font-bold text-[#102C4E] uppercase mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="e.g. rajesh@company.com"
              className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-[#F47B20] focus:ring-2 focus:ring-[#F47B20]/20 text-sm text-[#102C4E] placeholder:text-slate-400 outline-none transition-colors"
            />
          </div>
        </div>

        {/* Service Required & Project Location Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="service" className="block text-xs font-bold text-[#102C4E] uppercase mb-1">
              Service Required <span className="text-[#F47B20]">*</span>
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-[#F47B20] focus:ring-2 focus:ring-[#F47B20]/20 text-sm text-[#102C4E] bg-white outline-none transition-colors"
            >
              {servicesData.map((svc) => (
                <option key={svc.id} value={svc.title}>
                  {svc.title}
                </option>
              ))}
              <option value="Complete Soil Investigation Package">
                Complete Soil Investigation Package
              </option>
            </select>
          </div>

          <div>
            <label htmlFor="location" className="block text-xs font-bold text-[#102C4E] uppercase mb-1">
              Project Location <span className="text-[#F47B20]">*</span>
            </label>
            <input
              type="text"
              id="location"
              name="location"
              required
              value={formData.location}
              onChange={handleChange}
              placeholder="e.g. Kalyan West / Dombivli"
              className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-[#F47B20] focus:ring-2 focus:ring-[#F47B20]/20 text-sm text-[#102C4E] placeholder:text-slate-400 outline-none transition-colors"
            />
          </div>
        </div>

        {/* Message / Scope */}
        <div>
          <label htmlFor="message" className="block text-xs font-bold text-[#102C4E] uppercase mb-1">
            Project Scope / Specific Details
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            placeholder="Please mention plot size, number of proposed floors (e.g. G+12), required borehole count, or structural consultant guidelines..."
            className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-[#F47B20] focus:ring-2 focus:ring-[#F47B20]/20 text-sm text-[#102C4E] placeholder:text-slate-400 outline-none transition-colors"
          />
        </div>

        {/* Submit Button: Max two words label */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full py-3 px-6 rounded-lg font-bold text-sm text-white bg-[#F47B20] hover:bg-[#D9650D] shadow-sm hover:shadow transition-all duration-200 flex items-center justify-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F47B20] disabled:opacity-60 cursor-pointer"
          >
            {status === 'loading' ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Sending...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Send Enquiry</span>
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}

