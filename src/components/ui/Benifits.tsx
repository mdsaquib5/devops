'use client';
import { HiLightBulb } from 'react-icons/hi';
import SectionTitle from '../layout/SectionTitle';
import { benefitsData } from '../../data/data';
import BenefitCard from '../items/BenefitCard';

const Benifits = () => {
    return (
        <section className="bf-section">
            <div className="bf-glow bf-glow--1" />
            <div className="bf-glow bf-glow--2" />

            <div className="container">

                {/* Header */}
                <SectionTitle
                    title="Benefits of"
                    highlight="Learning DevOps"
                    suffix="in India"
                    theme="dark"
                />

                {/* Progress steps */}
                <div className="bf-steps">
                    {/* Connecting line */}
                    <div className="bf-line" />

                    {benefitsData.map((benefit, i) => (
                        <BenefitCard 
                            key={i}
                            benefit={benefit}
                            index={i}
                        />
                    ))}
                </div>

                {/* Bottom callout */}
                <div className="bf-callout">
                    <HiLightBulb className="bf-callout-icon" />
                    <p>DevOps knowledge also improves teamwork between developers, testers, and operations teams. This leads to better software quality and less downtime.</p>
                </div>

            </div>
        </section>
    );
};

export default Benifits;