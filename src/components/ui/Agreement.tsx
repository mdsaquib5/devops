import { BsLightningChargeFill, BsDownload } from "react-icons/bs";
import SectionTitle from '../layout/SectionTitle';
import { agreements } from '../../data/data';
import AgreementCard from '../items/AgreementCard';

const Agreement = () => {
    return (
        <>
            <section className="agreement-bg">
                <div className="agreement-bg-glow agreement-bg-glow--tl"></div>
                <div className="agreement-bg-glow agreement-bg-glow--br"></div>
                <div className="container">
                    <SectionTitle
                        title="Placement"
                        highlight="Support"
                        description="Simple, transparent, and built to support you all the
                            way to your first offer."
                    />

                    <div className="agreement-grid">
                        {agreements.map((agreement) => (
                            <AgreementCard 
                                key={agreement.id}
                                agreement={agreement}
                                index={agreements.indexOf(agreement)}
                            />
                        ))}
                    </div>

                    <div className="agreement-cta-wrap">
                        <div className="agreement-cta-box">
                            <div className="agreement-cta-btns">
                                <button className="btn primary-btn">
                                    Book a Career Call
                                </button>
                                <button className="btn secondary-btn">
                                    Download Career Plan <BsDownload />
                                </button>
                            </div>
                            <p className="agreement-microcopy">
                                <BsLightningChargeFill /> Free 15-minute career call — no obligation.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Agreement;
