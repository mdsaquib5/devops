import { BsCheckCircleFill, BsLightbulbFill } from 'react-icons/bs';
import { FaUserCheck, FaBookOpen, FaChalkboardTeacher, FaBriefcase, FaFileContract, FaGithub } from 'react-icons/fa';
import { TrustSection } from '../../data/data';

interface TrustSectionCardProps {
    section: TrustSection;
    index: number;
}

const TrustSectionCard = ({ section, index }: TrustSectionCardProps) => {
    const getIcon = () => {
        const iconMap: Record<string, React.ReactNode> = {
            FaUserCheck: <FaUserCheck size={18} />,
            FaBookOpen: <FaBookOpen size={18} />,
            FaChalkboardTeacher: <FaChalkboardTeacher size={18} />,
            FaBriefcase: <FaBriefcase size={18} />,
            FaFileContract: <FaFileContract size={18} />,
            FaGithub: <FaGithub size={18} />,
        };
        return iconMap[section.icon] || null;
    };

    return (
        <div key={index} className={`ts-item${index % 2 !== 0 ? ' ts-item--right' : ''}`}>
            {/* Dot on line */}
            <div className="ts-dot" style={{ background: section.color, boxShadow: `0 0 16px ${section.color}50` }} />

            {/* Card */}
            <div className="ts-card">
                <div className="ts-card-header">
                    <span className="ts-card-icon" style={{ background: `${section.color}20`, color: section.color }}>
                        {getIcon()}
                    </span>
                    <h3 className="ts-card-title">{section.title}</h3>
                </div>
                <div className="ts-card-list">
                    {section.items.map((item, j) => (
                        <div key={j} className="ts-card-item">
                            <BsCheckCircleFill className="ts-item-icon" style={{ color: section.color }} />
                            <span>{item}</span>
                        </div>
                    ))}
                </div>
                {section.tip && (
                    <div className="ts-tip">
                        <BsLightbulbFill className="ts-tip-icon" />
                        <span>{section.tip}</span>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TrustSectionCard;
