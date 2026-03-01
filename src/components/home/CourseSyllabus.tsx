import { FaDownload } from 'react-icons/fa';
import HomeSectionTitle from '../layout/HomeSectionTitle';
import { courseSyllabusData } from '@/data/homeData';

const CourseSyllabus = () => {
    const { sectionTitle, tools, durationPoints, durationText, feesText, roiText } = courseSyllabusData;

    return (
        <section className="h-syllabus-section">
            <div className="container">
                {/* Heading */}
                <HomeSectionTitle
                    title={sectionTitle.title}
                    highlight={sectionTitle.highlight}
                    suffix={sectionTitle.suffix}
                    heading={sectionTitle.heading}
                    description={sectionTitle.description}
                    theme={sectionTitle.theme}
                />

                {/* Syllabus Card */}
                <div className="h-syllabus-syllabus-card">
                    <div className="h-syllabus-tools-grid">
                        {tools.map((tool, index) => (
                            <div key={index} className="h-syllabus-tool-badge">
                                <span className="h-syllabus-tool-icon"><tool.icon /></span>
                                <span className="h-syllabus-tool-name">{tool.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Duration & Fees Grid */}
                <div className="h-syllabus-info-grid">
                    {/* Duration Card */}
                    <div className="h-syllabus-info-card">
                        <h3 className="h-syllabus-card-title">DevOps Course Duration</h3>
                        <p className="h-syllabus-card-text">
                            {durationText}
                        </p>
                        <ul className="h-syllabus-info-list">
                            {durationPoints.map((point, index) => (
                                <li key={index}>{point}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Fees Card */}
                    <div className="h-syllabus-info-card">
                        <h3 className="h-syllabus-card-title">DevOps Course Fees</h3>
                        <p className="h-syllabus-card-text">
                            {feesText}
                        </p>
                        <div className="h-syllabus-roi-text">
                            {roiText}
                        </div>
                    </div>
                </div>

                {/* CTA Button */}
                <div className="h-syllabus-cta">
                    <button className="h-syllabus-cta-btn">
                        <FaDownload /> Download Complete Course Details
                    </button>
                </div>
            </div>
        </section>
    );
};

export default CourseSyllabus;