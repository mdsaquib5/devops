import Image from 'next/image';
import SectionTitle from '../layout/SectionTitle';
import { mentorsData } from '@/data/data';

const Mentors = () => {
    return (
        <section className="h-mentor-section">
            <div className="container">
                {/* Heading */}
                <SectionTitle
                    title="Meet Our"
                    highlight="Mentors"
                    description="Learn from industry experts who are passionate about sharing their knowledge and helping you succeed"
                    theme="light"
                />

                {/* Mentor Cards */}
                <div className="h-mentor-grid">
                    {mentorsData.map((mentor, index) => (
                        <div key={index} className="h-mentor-card">
                            {/* Photo */}
                            <div className="h-mentor-photo-wrapper">
                                <div className="h-mentor-photo-glow"></div>
                                <Image
                                    src={mentor.image}
                                    alt={mentor.name}
                                    width={140}
                                    height={140}
                                    className="h-mentor-photo"
                                />
                            </div>

                            {/* Info */}
                            <h3 className="h-mentor-name">{mentor.name}</h3>
                            <div className="h-mentor-divider"></div>
                            <p className="h-mentor-role">{mentor.role}</p>
                            <p className="h-mentor-company">{mentor.company} • {mentor.experience}</p>

                            {/* Description */}
                            <p className="h-mentor-description">{mentor.description}</p>

                            {/* Skills */}
                            <div className="h-mentor-skills">
                                {mentor.skills.map((skill, i) => (
                                    <span key={i} className="h-mentor-skill-tag">{skill}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Mentors;