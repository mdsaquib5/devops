import { IoCheckmark } from "react-icons/io5";
import { Career } from "../../data/data";
import {
    FiFileText, FiTarget, FiLink2, FiCode, FiMic, FiLayout, FiMessageCircle, FiGlobe, FiSend, FiClipboard, FiDollarSign, FiCalendar
} from "react-icons/fi";

interface CareerCardProps {
    career: Career;
    index: number;
}

const CareerCard = ({ career, index }: CareerCardProps) => {
    const getIcon = () => {
        const iconMap: Record<string, React.ReactNode> = {
            FiFileText: <FiFileText />,
            FiTarget: <FiTarget />,
            FiLink2: <FiLink2 />,
            FiCodeIcon: <FiCode />,
            FiMic: <FiMic />,
            FiLayout: <FiLayout />,
            FiMessageCircle: <FiMessageCircle />,
            FiGlobe: <FiGlobe />,
            FiSend: <FiSend />,
            FiClipboard: <FiClipboard />,
            FiDollarSign: <FiDollarSign />,
            FiCalendarIcon: <FiCalendar />,
        };
        return iconMap[career.icon] || null;
    };

    return (
        <div key={career.id} className="ca-card" style={{ animationDelay: `${index * 55}ms` }}>
            {career.tag && <span className="ca-tag">{career.tag}</span>}
            <div className="ca-icon">{getIcon()}</div>
            <h3 className="ca-card-title">{career.title}</h3>
            <ul className="ca-list">
                {career.items.map((item, i) => (
                    <li key={i}><IoCheckmark />{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default CareerCard;
