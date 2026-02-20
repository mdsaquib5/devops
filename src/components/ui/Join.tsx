'use client';
import { FaUserGraduate, FaCode, FaServer, FaCloud, FaCogs } from 'react-icons/fa';
import { HiLightBulb } from 'react-icons/hi';
import SectionTitle from '../layout/SectionTitle';

const personas = [
    {
        icon: <FaUserGraduate size={22} />,
        title: 'Freshers',
        desc: 'Starting IT career with no prior experience',
        color: '#004f44',
    },
    {
        icon: <FaCode size={22} />,
        title: 'Developers',
        desc: 'Wanting to move into DevOps roles',
        color: '#ff8800',
    },
    {
        icon: <FaServer size={22} />,
        title: 'System Admins',
        desc: 'System admins and support engineers',
        color: '#00a882',
    },
    {
        icon: <FaCloud size={22} />,
        title: 'Cloud Engineers',
        desc: 'Cloud engineers and testers',
        color: '#326CE5',
    },
    {
        icon: <FaCogs size={22} />,
        title: 'Automation Enthusiasts',
        desc: 'Anyone interested in automation and cloud computing',
        color: '#ff8800',
    },
];

const Join = () => {
    return (
        <section className="wj-section">
            <div className="container">

                {/* Header */}
                <SectionTitle
                    title="Who Should"
                    highlight="Join This DevOps"
                    suffix="Course"
                    theme="light"
                />

                {/* Horizontal scroll cards */}
                <div className="wj-scroll-wrap">
                    <div className="wj-scroll">
                        {personas.map((p, i) => (
                            <div key={i} className="wj-card" style={{ '--wj-accent': p.color } as React.CSSProperties}>
                                <div className="wj-avatar" style={{ background: `${p.color}12`, color: p.color }}>
                                    {p.icon}
                                </div>
                                <h3 className="wj-card-title">{p.title}</h3>
                                <p className="wj-card-desc">{p.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Note */}
                <div className="wj-note">
                    <HiLightBulb className="wj-note-icon" />
                    <p>Basic Linux or programming knowledge helps, but beginners can also start with foundation modules.</p>
                </div>

            </div>
        </section>
    );
};

export default Join;