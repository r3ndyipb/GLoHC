'use client';

import React, { useState } from 'react';

export interface FAQItemData {
  q: string;
  a: string;
}

interface FAQAccordionProps {
  items: FAQItemData[];
  defaultOpenIndex?: number;
}

export default function FAQAccordion({ items, defaultOpenIndex = 0 }: FAQAccordionProps) {
  const [openIndices, setOpenIndices] = useState<number[]>([defaultOpenIndex]);

  const toggleIndex = (index: number) => {
    if (openIndices.includes(index)) {
      setOpenIndices(openIndices.filter((i) => i !== index));
    } else {
      setOpenIndices([...openIndices, index]);
    }
  };

  return (
    <div className="faq__list">
      {items.map((item, index) => {
        const isOpen = openIndices.includes(index);
        return (
          <div key={index} className={`faq__item ${isOpen ? 'open' : ''}`}>
            <button
              type="button"
              className="faq__q"
              onClick={() => toggleIndex(index)}
              style={{ width: '100%', textAlign: 'left', background: 'none', border: 'none', cursor: 'pointer' }}
            >
              <span>{item.q}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{
                  transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.25s ease',
                  flexShrink: 0,
                }}
              >
                <path d="m6 9 6 6 6-6"/>
              </svg>
            </button>
            <div className="faq__a">
              {item.a}
            </div>
          </div>
        );
      })}
    </div>
  );
}

