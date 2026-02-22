import { Agreement } from "../../data/data";
import { FiFileText, FiBriefcase, FiCreditCard } from "react-icons/fi";

interface AgreementCardProps {
    agreement: Agreement;
    index: number;
}

const AgreementCard = ({ agreement, index }: AgreementCardProps) => {
    const getIcon = () => {
        const iconMap: Record<string, React.ReactNode> = {
            FiFileText: <FiFileText />,
            FiBriefcase: <FiBriefcase />,
            FiCreditCard: <FiCreditCard />,
        };
        return iconMap[agreement.icon] || null;
    };

    return (
        <div key={agreement.id} className="agreement-card">
            <span className="agreement-id">{agreement.id}</span>
            <div className="agreement-icon">{getIcon()}</div>
            <h3 className="agreement-card-title">{agreement.title}</h3>
            <ul className="agreement-list">
                {agreement.items.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default AgreementCard;
