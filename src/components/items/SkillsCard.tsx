import { FaTerminal, FaDocker, FaCloud, FaShieldAlt, FaBriefcase } from "react-icons/fa";
import { SiKubernetes } from "react-icons/si";
import { GoGear } from "react-icons/go";
import { VscGraph } from "react-icons/vsc";
import { Skill } from "../../data/data";

interface SkillsCardProps {
    skill: Skill;
}

const SkillsCard = ({ skill }: SkillsCardProps) => {
    const getIcon = () => {
        const iconMap: Record<string, React.ReactNode> = {
            GoGear: <GoGear size={14} />,
            FaTerminal: <FaTerminal size={14} />,
            FaDocker: <FaDocker size={14} />,
            FaCloud: <FaCloud size={14} />,
            VscGraph: <VscGraph size={14} />,
            FaShieldAlt: <FaShieldAlt size={14} />,
            SiKubernetes: <SiKubernetes size={14} />,
            FaBriefcase: <FaBriefcase size={14} />,
        };
        return iconMap[skill.icon] || null;
    };

    const getTabIcon = () => {
        const iconMap: Record<string, React.ReactNode> = {
            GoGear: <GoGear size={16} />,
            FaTerminal: <FaTerminal size={16} />,
            FaDocker: <FaDocker size={16} />,
            FaCloud: <FaCloud size={16} />,
            VscGraph: <VscGraph size={16} />,
            FaShieldAlt: <FaShieldAlt size={16} />,
            SiKubernetes: <SiKubernetes size={16} />,
            FaBriefcase: <FaBriefcase size={16} />,
        };
        return iconMap[skill.icon] || null;
    };

    return (
        <div className="sk-category-card" style={{ '--sk-accent': skill.color } as React.CSSProperties}>
            {/* Decorative floating icon */}
            <span className="sk-float-icon" style={{ color: skill.color }}>
                {getIcon()}
            </span>

            {/* Card header */}
            <div className="sk-cat-header">
                <span className="sk-cat-icon" style={{ background: skill.color, color: '#fff' }}>
                    {getIcon()}
                </span>
                <div className="sk-cat-info">
                    <h3 className="sk-cat-title">{skill.label}</h3>
                    <span className="sk-cat-count">{skill.skills?.length || 0} skills</span>
                </div>
            </div>

            {/* Skills as chips */}
            <div className="sk-chips">
                {skill.skills?.map((skillItem, i) => (
                    <span key={i} className="sk-chip">
                        {skillItem}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default SkillsCard;
