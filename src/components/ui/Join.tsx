'use client';
import { HiLightBulb } from 'react-icons/hi';
import SectionTitle from '../layout/SectionTitle';
import { personasData } from '../../data/data';
import PersonaCard from '../items/PersonaCard';

const Join = () => {
    return (
        <section className="wj-section">
            <div className="container">

                {/* Header */}
                <SectionTitle
                    title="Who Should"
                    highlight="Join This DevOps"
                    suffix="Course"
                    theme="light"
                />

                {/* Horizontal scroll cards */}
                <div className="wj-scroll-wrap">
                    <div className="wj-scroll">
                        {personasData.map((persona, i) => (
                            <PersonaCard 
                                key={i}
                                persona={persona}
                                index={i}
                            />
                        ))}
                    </div>
                </div>

                {/* Note */}
                <div className="wj-note">
                    <HiLightBulb className="wj-note-icon" />
                    <p>Basic Linux or programming knowledge helps, but beginners can also start with foundation modules.</p>
                </div>

            </div>
        </section>
    );
};

export default Join;