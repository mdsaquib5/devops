import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import HomeSectionTitle from '../layout/HomeSectionTitle';
import { devopsCourseData } from '@/data/homeData';

const DevopsCourse = () => {
  const { sectionTitle, journeySteps, bottomText } = devopsCourseData;

  return (
    <section className="h-dc-section">
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

        {/* Timeline Bar */}
        <div className="h-dc-timeline-bar">
          <span>START</span>
          <FaArrowRight />
          <span>LEARN</span>
          <FaArrowRight />
          <span>MASTER</span>
          <FaArrowRight />
          <span>SUCCEED</span>
        </div>

        {/* Journey Steps */}
        <div className="h-dc-journey">
          {journeySteps.map((step, index) => (
            <React.Fragment key={index}>
              <div className="h-dc-step">
                <div className="h-dc-step-number">{step.number}</div>
                <div className="h-dc-step-icon"><step.icon /></div>
                <h3 className="h-dc-step-title">{step.title}</h3>
                <p className="h-dc-step-description">{step.description}</p>
              </div>
              {index < journeySteps.length - 1 && (
                <div className="h-dc-arrow">
                  <FaArrowRight />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Bottom Text */}
        <div className="h-dc-bottom-text">
          {bottomText}
        </div>

        {/* CTA Button */}
        <div className="h-dc-cta">
          <button className="h-dc-cta-btn">
            Explore Curriculum <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default DevopsCourse;