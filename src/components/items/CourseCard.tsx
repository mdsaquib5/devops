import { FaBookmark } from "react-icons/fa";
import { Course } from "../../data/data";

interface CourseCardProps {
    course: Course;
    index: number;
}

const CourseCard = ({ course, index }: CourseCardProps) => {
    return (
        <div className="cr-card">
            <div className="cr-card-head">
                <div className="cr-meta">
                    <span className="cr-module-badge">
                        Module <strong>{String(index + 1).padStart(2, '0')}</strong> of 25
                    </span>
                    <span className="cr-tag">{course.title}</span>
                </div>
                <h3 className="cr-title">{course.title}</h3>
            </div>
            <div className="cr-topics">
                {course.content.map((item, i) => (
                    <div key={i} className="cr-chip">
                        <FaBookmark className="cr-chip-icon" />
                        <span>{item}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CourseCard;
