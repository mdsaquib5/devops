'use client';
import SectionTitle from '../layout/SectionTitle';
import { trustData } from '../../data/data';
import TrustSectionCard from '../items/TrustSectionCard';

const Trust = () => {
    return (
        <section className="ts-section">
            <div className="ts-glow ts-glow--1" />
            <div className="ts-glow ts-glow--2" />

            <div className="container">

                {/* Header */}
                <SectionTitle
                    title="Why Students"
                    highlight="Trust Our DevOps"
                    suffix="Course"
                    theme="light"
                />

                {/* Timeline */}
                <div className="ts-timeline">
                    {/* Vertical line */}
                    <div className="ts-line" />

                    {trustData.map((section, i) => (
                        <TrustSectionCard 
                            key={i}
                            section={section}
                            index={i}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Trust;