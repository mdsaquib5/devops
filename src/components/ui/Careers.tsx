'use client';

import { useState } from "react";
import { IoCheckmark } from "react-icons/io5";
import {
    FiFileText, FiMic, FiGlobe, FiSend,
    FiClipboard, FiDollarSign, FiCalendar,
    FiCode, FiLink2, FiLayout, FiTarget, FiMessageCircle
} from "react-icons/fi";
import SectionTitle from '../layout/SectionTitle';

type TabId = "all" | "resume" | "interview" | "job-search" | "post-offer";

const tabs: { id: TabId; label: string }[] = [
    { id: "all", label: "All Services" },
    { id: "resume", label: "Resume & Profile" },
    { id: "interview", label: "Interview Prep" },
    { id: "job-search", label: "Job Search" },
    { id: "post-offer", label: "Post-Offer" },
];

const cards = [
    {
        id: 1, category: "resume" as const, icon: <FiFileText />, tag: "Popular",
        title: "Profile & Resume Review",
        items: ["Resume rewritten with DevOps keywords", "Highlight your real projects and tools", "ATS-friendly resume format", "Up to 3 review rounds with feedback"],
    },
    {
        id: 2, category: "resume" as const, icon: <FiTarget />,
        title: "ATS Resume Optimization",
        items: ["Keyword mapping for DevOps roles", "Beat automated screening systems", "Section-by-section scoring", "Optimized for top job boards"],
    },
    {
        id: 3, category: "resume" as const, icon: <FiLink2 />,
        title: "LinkedIn Profile Setup",
        items: ["Complete profile overhaul", "Headline & summary writing", "Skills & endorsements strategy", "Recruiter visibility boost"],
    },
    {
        id: 4, category: "resume" as const, icon: <FiCode />,
        title: "GitHub Portfolio Review",
        items: ["Project readme improvements", "Pinned repositories strategy", "Contribution graph review", "DevOps project showcasing"],
    },
    {
        id: 5, category: "interview" as const, icon: <FiMic />, tag: "Most Popular",
        title: "Mock Technical Interviews",
        items: ["Live 1:1 mock sessions", "DevOps-specific questions", "Instant feedback after each round", "Recorded for self-review"],
    },
    {
        id: 6, category: "interview" as const, icon: <FiLayout />,
        title: "System Design Practice",
        items: ["CI/CD pipeline design", "Cloud architecture scenarios", "Infrastructure review walkthroughs", "Whiteboard session with mentor"],
    },
    {
        id: 7, category: "interview" as const, icon: <FiMessageCircle />,
        title: "Behavioral Interview Coaching",
        items: ["STAR method training", "HR round preparation", "Common HR question bank", "Confidence-building practice"],
    },
    {
        id: 8, category: "job-search" as const, icon: <FiGlobe />,
        title: "Job Portal Setup",
        items: ["Naukri & LinkedIn optimization", "Indeed & AngelList profile", "Profile visibility settings", "Job alert configuration"],
    },
    {
        id: 9, category: "job-search" as const, icon: <FiSend />,
        title: "Recruiter Outreach Support",
        items: ["Cold outreach message templates", "Recruiter connection strategy", "Follow-up sequences", "Target company list building"],
    },
    {
        id: 10, category: "job-search" as const, icon: <FiClipboard />,
        title: "Application Tracking",
        items: ["Organized job tracker sheet", "Weekly application check-ins", "Pipeline review with mentor", "Rejection analysis & pivot"],
    },
    {
        id: 11, category: "post-offer" as const, icon: <FiFileText />, tag: "New",
        title: "Offer Letter Review",
        items: ["Compensation breakdown analysis", "Benefits & perks review", "Red flag identification", "Comparison with market data"],
    },
    {
        id: 12, category: "post-offer" as const, icon: <FiDollarSign />,
        title: "Salary Negotiation",
        items: ["Market salary benchmarking", "Negotiation script preparation", "Counter-offer strategy", "Total compensation coaching"],
    },
    {
        id: 13, category: "post-offer" as const, icon: <FiCalendar />,
        title: "Notice Period Guidance",
        items: ["Smooth resignation process", "Knowledge transfer planning", "Reference letter tips", "New job onboarding prep"],
    },
];

const Careers = () => {
    const [activeTab, setActiveTab] = useState<TabId>("all");
    const filtered = activeTab === "all" ? cards : cards.filter(c => c.category === activeTab);

    return (
        <>
            <section className="ca-section">
                <div className="container">
                    <SectionTitle
                        title="Career Track"
                        highlight="Job-Ready"
                        suffix="Support"
                        theme="light"
                        description="Practical career help to polish your profile, sharpen interviews, and connect you with hiring teams."
                    />
                    <div className="ca-tabs">
                        {tabs.map(tab => (
                            <button
                                key={tab.id}
                                className={`ca-tab${activeTab === tab.id ? " ca-tab--active" : ""}`}
                                onClick={() => setActiveTab(tab.id)}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                    <p className="ca-count">
                        Showing <strong>{filtered.length}</strong> service{filtered.length !== 1 ? "s" : ""}
                    </p>
                    <div key={activeTab} className="ca-grid">
                        {filtered.map((card, i) => (
                            <div key={card.id} className="ca-card" style={{ animationDelay: `${i * 55}ms` }}>
                                {card.tag && <span className="ca-tag">{card.tag}</span>}
                                <div className="ca-icon">{card.icon}</div>
                                <h3 className="ca-card-title">{card.title}</h3>
                                <ul className="ca-list">
                                    {card.items.map((item, j) => (
                                        <li key={j}><IoCheckmark />{item}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Careers;