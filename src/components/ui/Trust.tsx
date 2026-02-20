'use client';
import { BsCheckCircleFill, BsLightbulbFill } from 'react-icons/bs';
import { FaUserCheck, FaBookOpen, FaChalkboardTeacher, FaBriefcase, FaFileContract, FaGithub } from 'react-icons/fa';
import SectionTitle from '../layout/SectionTitle';

const trustSections = [
    {
        icon: <FaUserCheck size={18} />,
        title: 'Trusted by Real Learners',
        color: '#00c49a',
        items: [
            '4.5+ average student rating (with real reviews)',
            'Alumni working in startups, product companies and MNCs',
            'Verified student testimonials with LinkedIn profiles',
            'Real GitHub projects created during the course',
        ],
        tip: 'Link testimonials to student LinkedIn profiles for credibility.',
    },
    {
        icon: <FaBookOpen size={18} />,
        title: 'Industry-Relevant Curriculum',
        color: '#ff8800',
        items: [
            'Covers modern DevOps tools: Git, Docker, Kubernetes, Jenkins, Terraform, AWS',
            'Updated syllabus based on real company workflows',
            'Real project portfolio for interviews',
            'Cloud lab access for hands-on practice',
        ],
    },
    {
        icon: <FaChalkboardTeacher size={18} />,
        title: 'Mentor & Instructor Credibility',
        color: '#326CE5',
        items: [
            'Trainers with real industry DevOps experience',
            'Mentors who worked in product and cloud companies',
            'Weekly 1-to-1 doubt solving sessions',
            'Live code reviews and project feedback',
        ],
        tip: 'Add trainer LinkedIn profiles for trust.',
    },
    {
        icon: <FaBriefcase size={18} />,
        title: 'Career & Placement Proof',
        color: '#00c49a',
        items: [
            'Resume and LinkedIn optimization support',
            'Mock interviews with feedback reports',
            'Recruiter introductions during support period',
            'Alumni job stories with salary range and role',
        ],
        tip: 'Show anonymised offer letters or role screenshots for proof.',
    },
    {
        icon: <FaFileContract size={18} />,
        title: 'Transparent Course Policies',
        color: '#ff8800',
        items: [
            'Clear syllabus before enrollment',
            'Written placement support terms',
            'Clear fee plan with EMI options',
            'No hidden charges',
        ],
    },
    {
        icon: <FaGithub size={18} />,
        title: 'Real Project Proof',
        color: '#326CE5',
        items: [
            'CI/CD pipeline project',
            'Kubernetes deployment project',
            'Terraform cloud infrastructure project',
            'Monitoring dashboard project',
        ],
    },
];

const Trust = () => {
    return (
        <section className="ts-section">
            <div className="ts-glow ts-glow--1" />
            <div className="ts-glow ts-glow--2" />

            <div className="container">

                {/* Header */}
                <SectionTitle
                    title="Why Students"
                    highlight="Trust Our DevOps"
                    suffix="Course"
                    theme="light"
                />

                {/* Timeline */}
                <div className="ts-timeline">
                    {/* Vertical line */}
                    <div className="ts-line" />

                    {trustSections.map((sec, i) => (
                        <div key={i} className={`ts-item${i % 2 !== 0 ? ' ts-item--right' : ''}`}>
                            {/* Dot on the line */}
                            <div className="ts-dot" style={{ background: sec.color, boxShadow: `0 0 16px ${sec.color}50` }} />

                            {/* Card */}
                            <div className="ts-card">
                                <div className="ts-card-header">
                                    <span className="ts-card-icon" style={{ background: `${sec.color}20`, color: sec.color }}>
                                        {sec.icon}
                                    </span>
                                    <h3 className="ts-card-title">{sec.title}</h3>
                                </div>
                                <div className="ts-card-list">
                                    {sec.items.map((item, j) => (
                                        <div key={j} className="ts-card-item">
                                            <BsCheckCircleFill className="ts-item-icon" style={{ color: sec.color }} />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                                {sec.tip && (
                                    <div className="ts-tip">
                                        <BsLightbulbFill className="ts-tip-icon" />
                                        <span>{sec.tip}</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Trust;