'use client';

import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FAQItem } from '@/data/siteConfig';

interface AccordionProps {
  items: FAQItem[];
  idPrefix?: string;
}

export function Accordion({ items, idPrefix = 'faq' }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full divide-y divide-slate-200 border-y border-slate-200">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const headingId = `${idPrefix}-heading-${index}`;
        const panelId = `${idPrefix}-panel-${index}`;

        return (
          <div key={index} className="transition-colors">
            <h3>
              <button
                type="button"
                id={headingId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggleItem(index)}
                className="w-full py-5 px-3 sm:px-4 text-left flex items-center justify-between gap-4 font-semibold text-base sm:text-lg text-[#102C4E] hover:text-[#F47B20] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F47B20] focus-visible:ring-offset-2 transition-colors cursor-pointer group"
              >
                <span className="flex-1 pr-2">{item.question}</span>
                <span
                  className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isOpen
                      ? 'bg-[#F47B20] text-white rotate-180'
                      : 'bg-[#F3F6F9] text-[#102C4E] group-hover:bg-[#FFF4EC] group-hover:text-[#F47B20]'
                  }`}
                  aria-hidden="true"
                >
                  {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={headingId}
              hidden={!isOpen}
              className={`overflow-hidden transition-all duration-300 ${
                isOpen ? 'max-h-96 opacity-100 pb-5 px-3 sm:px-4' : 'max-h-0 opacity-0'
              }`}
            >
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
