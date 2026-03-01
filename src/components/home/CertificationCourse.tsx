import { FaCertificate, FaArrowRight } from 'react-icons/fa';
import HomeSectionTitle from '../layout/HomeSectionTitle';
import { certificationCourseData } from '@/data/homeData';

const CertificationCourse = () => {
  const { sectionTitle, certifications } = certificationCourseData;

  return (
    <section className="h-cert-section">
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

        {/* Radial Grid Container */}
        <div className="h-cert-radial-container">
          {/* Central Certificate Badge */}
          <div className="h-cert-center-badge">
            <div className="h-cert-badge-glow"></div>
            <div className="h-cert-badge-icon">
              <FaCertificate />
            </div>
            <h3 className="h-cert-badge-text">DevOps<br />Certified</h3>
          </div>

          {/* Radial Certification Icons */}
          {certifications.map((cert, index) => (
            <div key={index} className={`h-cert-radial-item h-cert-radial-${cert.position}`}>
              <div className="h-cert-radial-icon">
                <cert.icon />
              </div>
              <span className="h-cert-radial-name">{cert.name}</span>
              <div className="h-cert-radial-line"></div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="h-cert-cta">
          <button className="h-cert-cta-btn">
            View All Certifications <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CertificationCourse;