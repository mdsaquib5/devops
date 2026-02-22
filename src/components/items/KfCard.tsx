import { FiArrowRight, FiChevronRight } from "react-icons/fi";
import { Feature } from "../../data/data";
import {
    FiCode, FiBriefcase, FiUsers, FiAward,
    FiServer, FiCalendar
} from "react-icons/fi";

interface KfCardProps {
    feature: Feature;
    index: number;
}

const iconMap: Record<string, React.ReactNode> = {
    FiCode: <FiCode />,
    FiBriefcase: <FiBriefcase />,
    FiUsers: <FiUsers />,
    FiAward: <FiAward />,
    FiServer: <FiServer />,
    FiCalendar: <FiCalendar />,
};

const KfCard = ({ feature, index }: KfCardProps) => {
    const getIcon = () => {
        return iconMap[feature.iconName as keyof typeof iconMap] || <FiCode />;
    };

    return (
        <div className={`kf-card kf-card--${feature.size} kf-card--${feature.accent}`}>
            <span className="kf-num">{feature.num}</span>

            <div className={`kf-icon kf-icon--${feature.accent}`}>
                {getIcon()}
            </div>

            <h3 className="kf-title">{feature.title}</h3>

            <ul className="kf-list">
                {feature.items.map((item, i) => (
                    <li key={i}>
                        <FiChevronRight />
                        {item}
                    </li>
                ))}
            </ul>

            {feature.chips && (
                <div className="kf-chips">
                    {feature.chips.map((chip, i) => (
                        <span key={i} className="kf-chip">{chip}</span>
                    ))}
                </div>
            )}

            {feature.cta && (
                <div className="kf-cta">
                    {feature.cta} <FiArrowRight />
                </div>
            )}
        </div>
    );
};

export default KfCard;