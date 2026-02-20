'use client';
import { FaRocket, FaBriefcase, FaChartLine, FaBuilding, FaUserTie } from 'react-icons/fa';
import { HiLightBulb } from 'react-icons/hi';
import SectionTitle from '../layout/SectionTitle';

const benefits = [
    {
        icon: <FaRocket size={20} />,
        title: 'Faster Releases',
        text: 'Faster software releases using CI/CD pipelines',
        color: '#00c49a',
    },
    {
        icon: <FaBriefcase size={18} />,
        title: 'Better Jobs',
        text: 'Better job opportunities in cloud and automation roles',
        color: '#ff8800',
    },
    {
        icon: <FaChartLine size={18} />,
        title: 'Higher Salary',
        text: 'Higher salary growth compared to many IT roles',
        color: '#326CE5',
    },
    {
        icon: <FaBuilding size={18} />,
        title: 'High Demand',
        text: 'Skills in demand across startups, MNCs, and product companies',
        color: '#ff8800',
    },
    {
        icon: <FaUserTie size={18} />,
        title: 'Career Growth',
        text: 'Opportunity to move into DevOps engineer, cloud engineer, SRE or platform engineer roles',
        color: '#00c49a',
    },
];

const Benifits = () => {
    return (
        <section className="bf-section">
            <div className="bf-glow bf-glow--1" />
            <div className="bf-glow bf-glow--2" />

            <div className="container">

                {/* Header */}
                <SectionTitle
                    title="Benefits of"
                    highlight="Learning DevOps"
                    suffix="in India"
                    theme="dark"
                />

                {/* Progress steps */}
                <div className="bf-steps">
                    {/* Connecting line */}
                    <div className="bf-line" />

                    {benefits.map((b, i) => (
                        <div key={i} className="bf-step">
                            <div className="bf-dot" style={{ background: b.color, boxShadow: `0 0 20px ${b.color}40` }}>
                                <span className="bf-dot-icon">{b.icon}</span>
                            </div>
                            <div className="bf-num">{String(i + 1).padStart(2, '0')}</div>
                            <h3 className="bf-step-title">{b.title}</h3>
                            <p className="bf-step-text">{b.text}</p>
                        </div>
                    ))}
                </div>

                {/* Bottom callout */}
                <div className="bf-callout">
                    <HiLightBulb className="bf-callout-icon" />
                    <p>DevOps knowledge also improves teamwork between developers, testers, and operations teams. This leads to better software quality and less downtime.</p>
                </div>

            </div>
        </section>
    );
};

export default Benifits;