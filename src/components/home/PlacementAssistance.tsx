import { FaArrowRight, FaPhone } from 'react-icons/fa';
import HomeSectionTitle from '../layout/HomeSectionTitle';
import { placementAssistanceData } from '@/data/homeData';

const PlacementAssistance = () => {
  const { sectionTitle, journeySteps, stats } = placementAssistanceData;

  return (
    <section className="h-placement-section">
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

        {/* Journey Timeline */}
        <div className="h-placement-journey">
          {journeySteps.map((step, index) => (
            <div key={index} className="h-placement-step-wrapper">
              <div className="h-placement-step">
                <div className="h-placement-step-number">{step.number}</div>
                <div className="h-placement-step-icon"><step.icon /></div>
                <h3 className="h-placement-step-title">{step.title}</h3>
                <p className="h-placement-step-description">{step.description}</p>
              </div>
              {index < journeySteps.length - 1 && (
                <div className="h-placement-arrow">
                  <FaArrowRight />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="h-placement-stats">
          {stats.map((stat, index) => (
            <div key={index} className="h-placement-stat-item">
              <div className="h-placement-stat-value">{stat.value}</div>
              <div className="h-placement-stat-label">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="h-placement-cta">
          <button className="h-placement-cta-btn h-placement-cta-btn--primary">
            Enroll Now <FaArrowRight />
          </button>
          <button className="h-placement-cta-btn h-placement-cta-btn--secondary">
            <FaPhone /> Speak to Career Counselor
          </button>
        </div>
      </div>
    </section>
  );
};

export default PlacementAssistance;
