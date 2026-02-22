import React from 'react';
import { ChooseUs } from '../../data/data';
import { getIcon as getCentralizedIcon } from '../../utils/iconMap';

interface ChooseUsCardProps {
    section: ChooseUs;
    index: number;
}

const ChooseUsCard = ({ section, index }: ChooseUsCardProps) => {
    const getIcon = () => {
        const iconMap: Record<string, React.ReactNode> = {
            HiAcademicCap: getCentralizedIcon('HiAcademicCap', 22),
            FaLaptopCode: getCentralizedIcon('FaLaptopCode', 20),
            FaBriefcase: getCentralizedIcon('FaBriefcase', 18),
            FaCalendarAlt: getCentralizedIcon('FaCalendarAlt', 18),
        };
        return iconMap[section.icon] || null;
    };

    const getBubbleIcon = (icon: string, size: number) => {
        const iconMap: Record<string, React.ReactNode> = {
            SiDocker: getCentralizedIcon('SiDocker', size),
            SiKubernetes: getCentralizedIcon('SiKubernetes', size),
            SiTerraform: getCentralizedIcon('SiTerraform', size),
            FaAws: getCentralizedIcon('FaAws', size),
            FaGitAlt: getCentralizedIcon('FaGitAlt', size),
            MdLiveTv: getCentralizedIcon('MdLiveTv', size),
            MdCloudQueue: getCentralizedIcon('MdCloudQueue', size),
            SiJenkins: getCentralizedIcon('SiJenkins', size),
            SiPrometheus: getCentralizedIcon('SiPrometheus', size),
            SiAnsible: getCentralizedIcon('SiAnsible', size),
            FaLinux: getCentralizedIcon('FaLinux', size),
            MdVideoLibrary: getCentralizedIcon('MdVideoLibrary', size),
        };
        return iconMap[icon] || null;
    };

    return (
        <div key={index} className={`wc-row${index % 2 !== 0 ? ' wc-row--reverse' : ''}`}>
            {/* Content side */}
            <div className="wc-content">
                <div className="wc-icon-wrap" style={{ background: `${section.color}12`, color: section.color }}>
                    {getIcon()}
                </div>
                <h3 className="wc-title">{section.title}</h3>
                <div className="wc-checklist">
                    {section.items.map((item, j) => (
                        <div key={j} className="wc-check-item">
                            <span className="wc-check-icon" style={{ color: section.color }}>
                                {getCentralizedIcon('BsCheckCircleFill', 16)}
                            </span>
                            <span>{item}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Decorative bubbles side */}
            <div className="wc-visual">
                <div className="wc-bubbles">
                    {section.bubbles.map((bubble, k) => (
                        <span key={k} className="wc-bubble" style={{ color: bubble.color }}>
                            {getBubbleIcon(bubble.icon, 18)}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ChooseUsCard;
