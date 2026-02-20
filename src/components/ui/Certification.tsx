'use client';
import { FaGitAlt, FaDocker, FaAws } from 'react-icons/fa';
import { SiKubernetes } from 'react-icons/si';
import { BsCheckCircleFill } from 'react-icons/bs';
import { HiLightBulb } from 'react-icons/hi';
import SectionTitle from '../layout/SectionTitle';

const toolCards = [
    { icon: <FaGitAlt size={24} />, label: 'Git & Jenkins', desc: 'Version control & CI/CD', color: '#F05032' },
    { icon: <FaDocker size={24} />, label: 'Docker', desc: 'Containers & images', color: '#2496ED' },
    { icon: <SiKubernetes size={24} />, label: 'Kubernetes', desc: 'Orchestration & scaling', color: '#326CE5' },
    { icon: <FaAws size={24} />, label: 'AWS Cloud', desc: 'Cloud deployments', color: '#FF9900' },
];

const checklist = [
    'Learn real-world DevOps tools like Git, Jenkins, Docker, Kubernetes, AWS and Terraform',
    'Build end-to-end CI/CD pipelines and cloud deployments',
    'Understand infrastructure as code, monitoring, logging and DevOps security',
    'Create real projects for GitHub portfolio and interviews',
    'Prepare for DevOps engineer, cloud engineer and SRE roles',
];

const Certification = () => {
    return (
        <section className="ab-section">
            {/* Decorative glows */}
            <div className="ab-glow ab-glow--1" />
            <div className="ab-glow ab-glow--2" />

            <div className="container">

                {/* Heading */}
                <SectionTitle
                    title="About"
                    highlight="DevOps Certification"
                    suffix="in Pune"
                    theme="dark"
                    headingClass="ab-heading"
                />

                {/* Paragraphs */}
                <div className="ab-content">
                    <p>
                        DevOps certification helps you learn how software development and IT operations work together.
                        You build skills in <strong>CI/CD pipelines</strong>, <strong>Docker</strong>, <strong>Kubernetes</strong>, <strong>Terraform</strong>, cloud computing, automation scripting, monitoring, and DevOps security.
                    </p>
                    <p>
                        Today, companies want faster software delivery, fewer bugs, and better system stability. DevOps engineers help achieve this using automation and cloud tools. That is why DevOps training is one of the <strong>most in-demand IT skills</strong> in India.
                    </p>
                </div>

                {/* Tool icon cards */}
                <div className="ab-tools-grid">
                    {toolCards.map((tool, i) => (
                        <div key={i} className="ab-tool-card">
                            <span className="ab-tool-icon" style={{ color: tool.color }}>
                                {tool.icon}
                            </span>
                            <span className="ab-tool-label">{tool.label}</span>
                            <span className="ab-tool-desc">{tool.desc}</span>
                        </div>
                    ))}
                </div>

                {/* Checklist */}
                <div className="ab-checklist-wrap">
                    <h3 className="ab-checklist-title">With a practical DevOps course, you will:</h3>
                    <div className="ab-checklist">
                        {checklist.map((item, i) => (
                            <div key={i} className="ab-check-item">
                                <BsCheckCircleFill className="ab-check-icon" />
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom callout */}
                <div className="ab-callout">
                    <HiLightBulb className="ab-callout-icon" />
                    <p>DevOps skills stay useful for many years because companies are moving to cloud, microservices, automation, and AI-driven infrastructure.</p>
                </div>

            </div>
        </section>
    );
};

export default Certification;