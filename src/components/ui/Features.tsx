import SectionTitle from '../layout/SectionTitle';
import { features } from '../../data/data';
import KfCard from '../items/KfCard';

const Features = () => {
    return (
        <>
            <section className="kf-section">
                <div className="kf-bg-glow kf-bg-glow--tr" />
                <div className="kf-bg-glow kf-bg-glow--bl" />

                <div className="container">
                    <SectionTitle
                        title="Key"
                        highlight="Features"
                        theme="light"
                        description="What makes our DevOps course unique"
                    />

                    <div className="kf-grid">
                        {features.map((feature, index) => (
                            <KfCard 
                                key={feature.id}
                                feature={feature}
                                index={index}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Features;
