import Image from 'next/image';
import { FaPlay, FaArrowUp } from 'react-icons/fa';
import { BsStarFill } from 'react-icons/bs';
import { Testimonial } from '../../data/data';

interface TestimonialCardProps {
    testimonial: Testimonial;
    index: number;
    onVideoClick: (videoId: string) => void;
}

const TestimonialCard = ({ testimonial, index, onVideoClick }: TestimonialCardProps) => {
    return (
        <div className="vt-card">
            {/* Thumbnail */}
            <div className="vt-thumb" onClick={() => onVideoClick(testimonial.videoId)}>
                <Image
                    src={`https://img.youtube.com/vi/${testimonial.videoId}/hqdefault.jpg`}
                    alt={testimonial.name}
                    width={480}
                    height={270}
                    className="vt-thumb-img"
                />
                <div className="vt-play-overlay">
                    <span className="vt-play-btn">
                        <FaPlay size={16} />
                    </span>
                </div>
            </div>

            {/* Info */}
            <div className="vt-info">
                {/* Stars */}
                <div className="vt-stars">
                    {Array.from({ length: testimonial.stars }).map((_, s) => (
                        <BsStarFill key={s} className="vt-star" />
                    ))}
                </div>

                {/* Review quote */}
                <p className="vt-quote">&ldquo;{testimonial.review}&rdquo;</p>

                {/* Name */}
                <h4 className="vt-name">{testimonial.name}</h4>

                {/* Career transition badge */}
                <div className="vt-career">
                    <div className="vt-career-row">
                        <span className="vt-career-label">Before</span>
                        <span className="vt-career-value">{testimonial.prevRole}</span>
                    </div>
                    <div className="vt-career-arrow">
                        <FaArrowUp size={12} />
                    </div>
                    <div className="vt-career-row">
                        <span className="vt-career-label">Now</span>
                        <span className="vt-career-value vt-career-value--highlight">{testimonial.currentRole}</span>
                    </div>
                    <div className="vt-salary">{testimonial.salary}</div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;
