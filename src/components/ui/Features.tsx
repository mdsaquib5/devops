import {
    FiCode, FiBriefcase, FiUsers, FiAward,
    FiServer, FiCalendar, FiArrowRight, FiChevronRight
} from "react-icons/fi";
import SectionTitle from '../layout/SectionTitle';

type Accent = "green" | "orange";

interface Feature {
    id: number;
    num: string;
    size: "large" | "small";
    accent: Accent;
    icon: React.ReactNode;
    title: string;
    items: string[];
    chips?: string[];
    cta?: string;
}

const features: Feature[] = [
    {
        id: 1, num: "01", size: "large", accent: "green",
        icon: <FiCode />,
        title: "Curriculum & Projects",
        cta: "Explore Curriculum",
        chips: ["SRE", "CI/CD", "Cloud Automation"],
        items: [
            "GenAI labs for DevOps — automate scripts, build helpers and speed workflows.",
            "4+ real-world capstone projects you can deploy and add to GitHub.",
            "Role-based tracks so learners follow a job-specific path.",
            "Hands-on labs: Docker, Kubernetes, Jenkins, Terraform, Git.",
        ],
    },
    {
        id: 2, num: "02", size: "large", accent: "orange",
        icon: <FiBriefcase />,
        title: "Career & Placement Support",
        cta: "Explore Career Support",
        items: [
            "Dedicated career coach — resume, LinkedIn profile and interview strategy.",
            "Mock technical and HR interviews with feedback reports.",
            "Direct introductions to vetted hiring partners and recruitment teams.",
            "Outcome dashboard — anonymised alumni hiring trends and role types.",
        ],
    },
    {
        id: 3, num: "03", size: "small", accent: "green",
        icon: <FiUsers />,
        title: "Mentorship & Learning",
        items: [
            "Weekly 1:1 mentor sessions for doubt resolution and career advice.",
            "Small cohort sizes and live code reviews for real feedback.",
            "Recorded sessions and lab playbooks for revision anytime.",
        ],
    },
    {
        id: 4, num: "04", size: "small", accent: "orange",
        icon: <FiAward />,
        title: "Assessment & Certification",
        items: [
            "Project-based assessments with public GitHub demos.",
            "Industry-recognised completion certificate + internship opportunity.",
            "Mini-assessments and a final project grading rubric.",
        ],
    },
    {
        id: 5, num: "05", size: "small", accent: "green",
        icon: <FiServer />,
        title: "Infrastructure & Extras",
        items: [
            "Cloud sandbox access (AWS/Azure credits) for labs and projects.",
            "CI/CD sandbox with pipeline templates reusable in interviews.",
            "Optional advanced modules: Observability, Chaos Engineering, Security.",
        ],
    },
    {
        id: 6, num: "06", size: "small", accent: "orange",
        icon: <FiCalendar />,
        title: "Flexibility & Support",
        items: [
            "Weekend, weekday and self-paced batches for working learners.",
            "Lifetime access to course material and alumni community.",
            "6 months of dedicated active career support after completion.",
        ],
    },
];

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
                        {features.map(f => (
                            <div
                                key={f.id}
                                className={`kf-card kf-card--${f.size} kf-card--${f.accent}`}
                            >
                                <span className="kf-num">{f.num}</span>

                                <div className={`kf-icon kf-icon--${f.accent}`}>{f.icon}</div>

                                <h3 className="kf-title">{f.title}</h3>

                                <ul className="kf-list">
                                    {f.items.map((item, i) => (
                                        <li key={i}>
                                            <FiChevronRight />
                                            {item}
                                        </li>
                                    ))}
                                </ul>

                                {f.chips && (
                                    <div className="kf-chips">
                                        {f.chips.map(chip => (
                                            <span key={chip} className="kf-chip">{chip}</span>
                                        ))}
                                    </div>
                                )}

                                {f.cta && (
                                    <div className="kf-cta">
                                        {f.cta} <FiArrowRight />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Features;
