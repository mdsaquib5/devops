import Link from "next/link";
import { TbTrendingUp } from "react-icons/tb";
import { MdWorkOutline } from "react-icons/md";
import { IoCashOutline } from "react-icons/io5";
import { FiChevronRight } from "react-icons/fi";
import { Demand } from "../../data/data";

interface DmCardProps {
    demand: Demand;
}

const DmCard = ({ demand }: DmCardProps) => {
    const getIcon = () => {
        const iconMap: Record<string, React.ReactNode> = {
            TbTrendingUp: <TbTrendingUp size={26} color={demand.iconColor} />,
            MdWorkOutline: <MdWorkOutline size={26} color={demand.iconColor} />,
            IoCashOutline: <IoCashOutline size={26} color={demand.iconColor} />,
        };
        return iconMap[demand.iconName] || null;
    };

    return (
        <div className={`dm-insight-card dm-insight--${demand.accent}`}>
            <div className="dm-insight-icon">
                {getIcon()}
            </div>
            <div>
                <h3 className="dm-insight-title">{demand.title}</h3>
                <p className="dm-insight-text">
                    {demand.text}
                    {demand.linkText && demand.linkHref && (
                        <>
                            {" "}
                            <Link className="dm-link" href={demand.linkHref}>
                                {demand.linkText}
                            </Link>
                            {" "}
                            <FiChevronRight />
                        </>
                    )}
                </p>
            </div>
        </div>
    );
};

export default DmCard;
