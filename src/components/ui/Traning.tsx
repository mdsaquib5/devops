'use client';
import { BsCheckCircleFill } from "react-icons/bs";
import { FaUsers, FaBriefcase, FaClock, FaRupeeSign } from "react-icons/fa";
import { MdCastForEducation, MdWorkspacePremium } from "react-icons/md";
import { IoRocketSharp, IoBookSharp } from "react-icons/io5";
import { HiLightBulb } from "react-icons/hi";
import SectionTitle from '../layout/SectionTitle';

const phases = [
    {
        id: "01",
        icon: <IoRocketSharp size={22} />,
        label: "Overview",
        title: "Pune DevOps Training Program",
        color: "orange",
        content: (
            <div className="tp-overview">
                <p className="tp-intro">
                    Practical DevOps training with live labs, real projects, mentor support and career help — designed for working professionals and beginners.
                </p>
                <div className="tp-stat-row">
                    {[
                        { val: "6", unit: "Months", sub: "Program Length" },
                        { val: "25", unit: "Modules", sub: "Full Curriculum" },
                        { val: "Live", unit: "Classes", sub: "Instructor-Led" },
                        { val: "100%", unit: "Support", sub: "Placement Help" },
                    ].map((s, i) => (
                        <div key={i} className="tp-stat-chip">
                            <span className="tp-stat-val">{s.val} <em>{s.unit}</em></span>
                            <span className="tp-stat-sub">{s.sub}</span>
                        </div>
                    ))}
                </div>
            </div>
        ),
    },
    {
        id: "02",
        icon: <IoBookSharp size={18} />,
        label: "Curriculum",
        title: "What You Will Learn",
        color: "green",
        content: (
            <div className="tp-topics-grid">
                {[
                    "Core DevOps concepts and team workflows",
                    "Version control, build automation, CI/CD and pipeline practices",
                    "Containerisation with Docker and orchestration with Kubernetes",
                    "Infrastructure as Code (Terraform) and configuration automation (Ansible)",
                    "Cloud deployments (AWS basics) and monitoring with Prometheus / Grafana",
                    "End-to-end capstone projects you can show on GitHub",
                ].map((t, i) => (
                    <div key={i} className="tp-topic-item">
                        <BsCheckCircleFill className="tp-check" />
                        <span>{t}</span>
                    </div>
                ))}
            </div>
        ),
    },
    {
        id: "03",
        icon: <MdCastForEducation size={22} />,
        label: "Teaching",
        title: "How We Teach",
        color: "teal",
        content: (
            <div className="tp-methods-grid">
                {[
                    { icon: <HiLightBulb size={20} color="#004f44" />, title: "Live Instructor-Led Sessions", desc: "Small cohorts for focused attention and real interaction." },
                    { icon: <HiLightBulb size={20} color="#ff8800" />, title: "Hands-On Lab Work", desc: "Practice in cloud sandboxes that mirror real workplaces." },
                    { icon: <HiLightBulb size={20} color="#00a882" />, title: "Real-World Projects", desc: "Build projects that mirror actual workplace tasks." },
                    { icon: <HiLightBulb size={20} color="#004f44" />, title: "1:1 Mentor Support", desc: "Weekly mentor sessions and peer code reviews." },
                    { icon: <HiLightBulb size={20} color="#ff8800" />, title: "Recorded Lessons", desc: "Recordings and downloadable lab guides for revision." },
                ].map((m, i) => (
                    <div key={i} className="tp-method-row">
                        <span className="tp-method-icon">{m.icon}</span>
                        <div>
                            <div className="tp-method-title">{m.title}</div>
                            <div className="tp-method-desc">{m.desc}</div>
                        </div>
                    </div>
                ))}
            </div>
        ),
    },
    {
        id: "04",
        icon: <FaUsers size={18} />,
        label: "Eligibility",
        title: "Who This Course Is For",
        color: "orange",
        content: (
            <div>
                <div className="tp-profile-row">
                    {[
                        { tag: "Freshers", desc: "Just starting out — no experience needed." },
                        { tag: "Career Changers", desc: "Switching to tech from another field." },
                        { tag: "Working Professionals", desc: "Upskilling alongside your current job." },
                    ].map((p, i) => (
                        <div key={i} className="tp-profile-card">
                            <span className="tp-profile-tag">{p.tag}</span>
                            <p className="tp-profile-desc">{p.desc}</p>
                        </div>
                    ))}
                </div>
                <p className="tp-note">
                    <BsCheckCircleFill /> No strict prerequisites — basic Linux, web concepts or Java fundamentals are helpful but not required.
                </p>
            </div>
        ),
    },
    {
        id: "05",
        icon: <FaClock size={18} />,
        label: "Schedule",
        title: "Duration & Format",
        color: "green",
        content: (
            <div className="tp-duration-grid">
                <div className="tp-dur-card">
                    <div className="tp-dur-label">Program Length</div>
                    <div className="tp-dur-val">6 Months</div>
                    <div className="tp-dur-sub">Live classes + project & career track</div>
                </div>
                <div className="tp-dur-card">
                    <div className="tp-dur-label">Weekly Time</div>
                    <div className="tp-dur-val">6–10 hrs</div>
                    <div className="tp-dur-sub">Ideal for part-time learners</div>
                </div>
                <div className="tp-dur-card tp-dur-wide">
                    <div className="tp-dur-label">Batch Options</div>
                    <div className="tp-batch-row">
                        {["Weekday", "Weekend", "Self-Paced"].map((b, i) => (
                            <span key={i} className="tp-batch-chip">{b}</span>
                        ))}
                    </div>
                </div>
            </div>
        ),
    },
    {
        id: "06",
        icon: <FaBriefcase size={18} />,
        label: "Placement",
        title: "Career & Placement Support",
        color: "teal",
        content: (
            <div className="tp-career-list">
                {[
                    "Resume and LinkedIn review focused on DevOps projects.",
                    "Mock technical and HR interviews with written feedback.",
                    "Job search strategy, recruiter introductions and alumni network access.",
                    "Support provided for a defined placement window after course completion.",
                ].map((item, i) => (
                    <div key={i} className="tp-career-item">
                        <MdWorkspacePremium className="tp-career-icon" />
                        <span>{item}</span>
                    </div>
                ))}
            </div>
        ),
    },
    {
        id: "07",
        icon: <FaRupeeSign size={18} />,
        label: "Fees",
        title: "Fees & Financing",
        color: "orange",
        content: (
            <div>
                <div className="tp-fee-grid">
                    {[
                        { plan: "Full Payment", desc: "One-time upfront — best value.", tag: "Most Popular" },
                        { plan: "EMI Options", desc: "Split into easy monthly instalments.", tag: "Flexible" },
                        { plan: "Scholarship", desc: "Merit-based discounts may be available.", tag: "Apply Now" },
                    ].map((f, i) => (
                        <div key={i} className="tp-fee-card">
                            <div className="tp-fee-top">
                                <span className="tp-fee-plan">{f.plan}</span>
                                <span className="tp-fee-badge">{f.tag}</span>
                            </div>
                            <p className="tp-fee-desc">{f.desc}</p>
                        </div>
                    ))}
                </div>
                <div className="tp-cta-row">
                    <button className="tp-cta-btn tp-cta-primary">Apply Now</button>
                    <button className="tp-cta-btn tp-cta-outline">View Full Fee Table</button>
                </div>
            </div>
        ),
    },
];

const Traning = () => {
    return (
        <>
            <section className="tp-section">
                <div className="container">
                    <SectionTitle
                        title="Pune"
                        highlight="DevOps Training"
                        suffix="Program"
                        theme="dark"
                        description="Everything you need to know — curriculum, teaching, eligibility, duration, and career support."
                    />

                    <div className="tp-timeline">
                        <div className="tp-line" />
                        {phases.map((phase) => (
                            <div key={phase.id} className="tp-phase">
                                <div className="tp-left">
                                    <div className={`tp-circle tp-circle--${phase.color}`}>
                                        {phase.icon}
                                    </div>
                                    <span className="tp-phase-label">{phase.label}</span>
                                </div>
                                <div className="tp-card">
                                    <div className={`tp-card-accent tp-accent--${phase.color}`} />
                                    <div className="tp-card-inner">
                                        <div className="tp-card-head">
                                            <span className="tp-phase-id">{phase.id}</span>
                                            <h3 className="tp-card-title">{phase.title}</h3>
                                        </div>
                                        <div className="tp-card-body">
                                            {phase.content}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Traning;