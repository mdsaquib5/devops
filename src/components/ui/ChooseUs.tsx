'use client';
import { BsCheckCircleFill } from 'react-icons/bs';
import { HiAcademicCap } from 'react-icons/hi';
import { FaLaptopCode, FaBriefcase, FaCalendarAlt, FaAws, FaGitAlt, FaLinux } from 'react-icons/fa';
import { SiDocker, SiKubernetes, SiTerraform, SiAnsible, SiJenkins, SiPrometheus } from 'react-icons/si';
import { MdLiveTv, MdCloudQueue, MdVideoLibrary } from 'react-icons/md';
import SectionTitle from '../layout/SectionTitle';

const sections = [
    {
        title: 'Real Industry Curriculum',
        icon: <HiAcademicCap size={22} />,
        color: '#004f44',
        items: [
            'Covers CI/CD, Docker, Kubernetes, Terraform, AWS, Linux, Ansible',
            'Includes DevOps automation, monitoring, and cloud deployment',
            'Updated syllabus based on real company projects',
        ],
        bubbles: [
            { icon: <SiDocker size={18} />, color: '#2496ED' },
            { icon: <SiKubernetes size={18} />, color: '#326CE5' },
            { icon: <SiTerraform size={16} />, color: '#7B42BC' },
            { icon: <FaAws size={18} />, color: '#FF9900' },
        ],
    },
    {
        title: 'Hands-On Learning',
        icon: <FaLaptopCode size={20} />,
        color: '#ff8800',
        items: [
            'Live instructor-led classes',
            '4+ real DevOps capstone projects',
            'Cloud lab access for practice',
            'GitHub portfolio building',
        ],
        bubbles: [
            { icon: <MdLiveTv size={18} />, color: '#004f44' },
            { icon: <FaGitAlt size={18} />, color: '#F05032' },
            { icon: <MdCloudQueue size={18} />, color: '#0db7ed' },
            { icon: <SiJenkins size={16} />, color: '#D24939' },
        ],
    },
    {
        title: 'Career & Placement Support',
        icon: <FaBriefcase size={18} />,
        color: '#00a882',
        items: [
            'Resume and LinkedIn optimization',
            'Mock technical and HR interviews',
            'Recruiter introductions and job alerts',
            'Guidance until placement support period ends',
        ],
        bubbles: [
            { icon: <SiAnsible size={18} />, color: '#EE0000' },
            { icon: <FaLinux size={18} />, color: '#333' },
            { icon: <SiPrometheus size={16} />, color: '#E6522C' },
        ],
    },
    {
        title: 'Flexible Learning Options',
        icon: <FaCalendarAlt size={18} />,
        color: '#004f44',
        items: [
            'Weekend and weekday batches',
            'Online live classes from anywhere',
            'Recorded sessions for revision',
        ],
        bubbles: [
            { icon: <MdVideoLibrary size={18} />, color: '#ff8800' },
            { icon: <MdLiveTv size={18} />, color: '#00a882' },
            { icon: <MdCloudQueue size={18} />, color: '#326CE5' },
        ],
    },
];

const ChooseUs = () => {
    return (
        <section className="wc-section">
            <div className="container">

                {/* Header */}
                <SectionTitle
                    title="Why Choose"
                    highlight="Our DevOps Course"
                    suffix="in Pune"
                    theme="light"
                    description="Our DevOps training is designed for beginners and working professionals who want practical, job-ready skills."
                />

                {/* Zigzag rows */}
                <div className="wc-rows">
                    {sections.map((sec, i) => (
                        <div key={i} className={`wc-row${i % 2 !== 0 ? ' wc-row--reverse' : ''}`}>
                            {/* Content side */}
                            <div className="wc-content">
                                <div className="wc-icon-wrap" style={{ background: `${sec.color}12`, color: sec.color }}>
                                    {sec.icon}
                                </div>
                                <h3 className="wc-title">{sec.title}</h3>
                                <div className="wc-checklist">
                                    {sec.items.map((item, j) => (
                                        <div key={j} className="wc-check-item">
                                            <BsCheckCircleFill className="wc-check-icon" style={{ color: sec.color }} />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Decorative bubbles side */}
                            <div className="wc-visual">
                                <div className="wc-bubbles">
                                    {sec.bubbles.map((b, k) => (
                                        <span key={k} className="wc-bubble" style={{ color: b.color }}>
                                            {b.icon}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default ChooseUs;