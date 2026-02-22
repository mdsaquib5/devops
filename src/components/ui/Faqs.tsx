'use client';
import { useState } from 'react';
import SectionTitle from '../layout/SectionTitle';
import { faqs } from '../../data/data';
import FaqCard from '../items/FaqCard';

const Faqs = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggle = (i: number) => {
        setOpenIndex(openIndex === i ? null : i);
    };

    return (
        <section className="fq-section">
            <div className="container">

                {/* Header */}
                <SectionTitle
                    title="Frequently Asked"
                    highlight="Questions"
                    theme="light"
                    description="Everything you need to know about DevOps program, tools, career support and enrollment."
                />

                {/* Accordion cards */}
                <div className="fq-list">
                    {faqs.map((faq, i) => (
                        <FaqCard 
                            key={i}
                            faq={faq}
                            index={i}
                            isOpen={openIndex === i}
                            onToggle={() => toggle(i)}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Faqs;