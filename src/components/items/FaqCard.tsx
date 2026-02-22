import { IoChevronDownOutline } from 'react-icons/io5';
import { FAQ } from '../../data/data';

interface FaqCardProps {
    faq: FAQ;
    index: number;
    isOpen: boolean;
    onToggle: () => void;
}

const FaqCard = ({ faq, index, isOpen, onToggle }: FaqCardProps) => {
    return (
        <div className={`fq-card${isOpen ? ' fq-card--open' : ''}`}>
            <button className="fq-question" onClick={onToggle}>
                <span className="fq-num">{String(index + 1).padStart(2, '0')}</span>
                <span className="fq-q-text">{faq.q}</span>
                <span className={`fq-chevron${isOpen ? ' fq-chevron--open' : ''}`}>
                    <IoChevronDownOutline size={18} />
                </span>
            </button>
            <div className={`fq-answer${isOpen ? ' fq-answer--visible' : ''}`}>
                <p>{faq.a}</p>
            </div>
        </div>
    );
};

export default FaqCard;
