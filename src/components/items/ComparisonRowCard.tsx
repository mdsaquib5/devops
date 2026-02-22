import { BsCheckCircleFill, BsXCircleFill} from 'react-icons/bs';
import { ComparisonRow } from '../../data/data';

interface ComparisonRowCardProps {
    row: ComparisonRow;
    index: number;
}

const ComparisonRowCard = ({ row, index }: ComparisonRowCardProps) => {
    return (
        <tr key={index} className={`ct-row${index % 2 === 0 ? ' ct-row--even' : ''}`}>
            <td className="ct-td ct-td--feature">{row.feature}</td>
            <td className="ct-td ct-td--ours">
                <BsCheckCircleFill className="ct-icon ct-icon--check" />
                <span>{row.ours}</span>
            </td>
            <td className="ct-td ct-td--others">
                <BsXCircleFill className="ct-icon ct-icon--cross" />
                <span>{row.others}</span>
            </td>
        </tr>
    );
};

export default ComparisonRowCard;