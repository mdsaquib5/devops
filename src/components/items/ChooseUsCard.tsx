import { BsCheckCircleFill } from 'react-icons/bs';
import { HiAcademicCap } from 'react-icons/hi';
import { FaLaptopCode, FaBriefcase, FaCalendarAlt, FaAws, FaGitAlt, FaLinux } from 'react-icons/fa';
import { SiDocker, SiKubernetes, SiTerraform, SiAnsible, SiJenkins, SiPrometheus } from 'react-icons/si';
import { MdLiveTv, MdCloudQueue, MdVideoLibrary } from 'react-icons/md';
import { ChooseUs } from '../../data/data';

interface ChooseUsCardProps {
    section: ChooseUs;
    index: number;
}

const ChooseUsCard = ({ section, index }: ChooseUsCardProps) => {
    const getIcon = () => {
        const iconMap: Record<string, React.ReactNode> = {
            HiAcademicCap: <HiAcademicCap size={22} />,
            FaLaptopCode: <FaLaptopCode size={20} />,
            FaBriefcase: <FaBriefcase size={18} />,
            FaCalendarAlt: <FaCalendarAlt size={18} />,
        };
        return iconMap[section.icon] || null;
    };

    const getBubbleIcon = (icon: string, size: number) => {
        const iconMap: Record<string, React.ReactNode> = {
            SiDocker: <SiDocker size={size} />,
            SiKubernetes: <SiKubernetes size={size} />,
            SiTerraform: <SiTerraform size={size} />,
            FaAws: <FaAws size={size} />,
            MdLiveTv: <MdLiveTv size={size} />,
            FaGitAlt: <FaGitAlt size={size} />,
            MdCloudQueue: <MdCloudQueue size={size} />,
            SiJenkins: <SiJenkins size={size} />,
            SiPrometheus: <SiPrometheus size={size} />,
            SiAnsible: <SiAnsible size={size} />,
            FaLinux: <FaLinux size={size} />,
            MdVideoLibrary: <MdVideoLibrary size={size} />,
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
                            <BsCheckCircleFill className="wc-check-icon" style={{ color: section.color }} />
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
