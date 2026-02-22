import { FaUserGraduate, FaCode, FaServer, FaCloud, FaCogs } from 'react-icons/fa';
import { Persona } from '../../data/data';

interface PersonaCardProps {
    persona: Persona;
    index: number;
}

const PersonaCard = ({ persona, index }: PersonaCardProps) => {
    const getIcon = () => {
        const iconMap: Record<string, React.ReactNode> = {
            FaUserGraduate: <FaUserGraduate size={22} />,
            FaCode: <FaCode size={22} />,
            FaServer: <FaServer size={22} />,
            FaCloud: <FaCloud size={22} />,
            FaCogs: <FaCogs size={22} />,
        };
        return iconMap[persona.icon] || null;
    };

    return (
        <div key={index} className="wj-card" style={{ '--wj-accent': persona.color } as React.CSSProperties}>
            <div className="wj-avatar" style={{ background: `${persona.color}12`, color: persona.color }}>
                {getIcon()}
            </div>
            <h3 className="wj-card-title">{persona.title}</h3>
            <p className="wj-card-desc">{persona.desc}</p>
        </div>
    );
};

export default PersonaCard;
