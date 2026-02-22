'use client';

import { useState } from "react";
import SectionTitle from '../layout/SectionTitle';
import { careers } from '../../data/data';
import CareerCard from '../items/CareerCard';

type TabId = "all" | "resume" | "interview" | "job-search" | "post-offer";

const tabs: { id: TabId; label: string }[] = [
    { id: "all", label: "All Services" },
    { id: "resume", label: "Resume & Profile" },
    { id: "interview", label: "Interview Prep" },
    { id: "job-search", label: "Job Search" },
    { id: "post-offer", label: "Post-Offer" },
];

const Careers = () => {
    const [activeTab, setActiveTab] = useState<TabId>("all");
    const filtered = activeTab === "all" ? careers : careers.filter(c => c.category === activeTab);

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
                        {filtered.map((career, i) => (
                            <CareerCard 
                                key={career.id}
                                career={career}
                                index={i}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Careers;