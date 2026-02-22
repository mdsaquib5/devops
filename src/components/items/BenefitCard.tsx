import { FaRocket, FaBriefcase, FaChartLine, FaBuilding, FaUserTie } from 'react-icons/fa';
import { Benefit } from '../../data/data';

interface BenefitCardProps {
    benefit: Benefit;
    index: number;
}

const BenefitCard = ({ benefit, index }: BenefitCardProps) => {
    const getIcon = () => {
        const iconMap: Record<string, React.ReactNode> = {
            FaRocket: <FaRocket size={20} />,
            FaBriefcase: <FaBriefcase size={18} />,
            FaChartLine: <FaChartLine size={18} />,
            FaBuilding: <FaBuilding size={18} />,
            FaUserTie: <FaUserTie size={18} />,
        };
        return iconMap[benefit.icon] || null;
    };

    return (
        <div key={index} className="bf-step">
            <div className="bf-dot" style={{ background: benefit.color, boxShadow: `0 0 20px ${benefit.color}40` }}>
                <span className="bf-dot-icon">{getIcon()}</span>
            </div>
            <div className="bf-num">{String(index + 1).padStart(2, '0')}</div>
            <h3 className="bf-step-title">{benefit.title}</h3>
            <p className="bf-step-text">{benefit.text}</p>
        </div>
    );
};

export default BenefitCard;
