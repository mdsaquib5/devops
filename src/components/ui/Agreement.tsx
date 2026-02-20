import { FiFileText, FiBriefcase, FiCreditCard } from "react-icons/fi";
import { BsLightningChargeFill, BsDownload } from "react-icons/bs";
import SectionTitle from "../layout/SectionTitle";

const cards = [
    {
        id: "01",
        icon: <FiFileText />,
        title: "Sign Agreement",
        items: [
            "Read simple placement terms",
            "Sign agreement online",
            "No payment before placement",
        ],
    },
    {
        id: "02",
        icon: <FiBriefcase />,
        title: "Get Placement Support",
        items: [
            "Resume and interview help",
            "Recruiter introductions",
            "Mock interviews with mentors",
        ],
    },
    {
        id: "03",
        icon: <FiCreditCard />,
        title: "Pay After Placement",
        items: [
            "Pay career service fee after job offer",
            "Easy EMI payment options",
            "Full support during notice period",
        ],
    },
];

const Agreement = () => {
    return (
        <>
            <section className="agreement-bg">
                <div className="agreement-bg-glow agreement-bg-glow--tl"></div>
                <div className="agreement-bg-glow agreement-bg-glow--br"></div>
                <div className="container">
                    <SectionTitle
                        title="Placement Support"
                        highlight="Agreement"
                        description="Simple, transparent, and built to support you all the
                            way to your first offer."
                    />

                    <div className="agreement-grid">
                        {cards.map((card) => (
                            <div key={card.id} className="agreement-card">
                                <span className="agreement-id">{card.id}</span>
                                <div className="agreement-icon">{card.icon}</div>
                                <h3 className="agreement-card-title">{card.title}</h3>
                                <ul className="agreement-list">
                                    {card.items.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </div>
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
