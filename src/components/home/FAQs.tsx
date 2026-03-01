'use client';

import { useState } from 'react';
import HomeSectionTitle from '../layout/HomeSectionTitle';
import { faqsData } from '@/data/homeData';

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { sectionTitle, faqs } = faqsData;

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="h-faq-section">
      <div className="container">
        {/* Heading */}
        <HomeSectionTitle
          title={sectionTitle.title}
          highlight={sectionTitle.highlight}
          suffix={sectionTitle.suffix}
          heading={sectionTitle.heading}
          description={sectionTitle.description}
          theme={sectionTitle.theme}
        />

        {/* FAQ Accordion */}
        <div className="h-faq-accordion">
          {faqs.map((faq, index) => (
            <div key={index} className={`h-faq-item ${openIndex === index ? 'h-faq-item--open' : ''}`}>
              <button
                className="h-faq-question-btn"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <span className="h-faq-icon">{openIndex === index ? '▼' : '▶'}</span>
                <h3 className="h-faq-question">{faq.question}</h3>
              </button>
              <div className="h-faq-answer-wrapper">
                <p className="h-faq-answer">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;