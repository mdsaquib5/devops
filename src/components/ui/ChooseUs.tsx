'use client';
import SectionTitle from '../layout/SectionTitle';
import { chooseUs } from '../../data/data';
import ChooseUsCard from '../items/ChooseUsCard';

const ChooseUs = () => {
    return (
        <section className="wc-section">
            <div className="container">

                {/* Header */}
                <SectionTitle
                    title="Why Choose"
                    highlight="Our DevOps Course"
                    suffix="in Pune"
                    theme="light"
                    description="Our DevOps training is designed for beginners and working professionals who want practical, job-ready skills."
                />

                {/* Zigzag rows */}
                <div className="wc-rows">
                    {chooseUs.map((section, i) => (
                        <ChooseUsCard 
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

export default ChooseUs;