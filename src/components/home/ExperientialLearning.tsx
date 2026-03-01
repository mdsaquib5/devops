import HomeSectionTitle from '../layout/HomeSectionTitle';
import { experientialLearningData } from '@/data/homeData';

const ExperientialLearning = () => {
  const { sectionTitle, quote, statementText, highlights } = experientialLearningData;

  return (
    <section className="h-exp-section">
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

        {/* Statement Card */}
        <div className="h-exp-statement-card">
          <div className="h-exp-quote">
            {quote}
          </div>

          <p className="h-exp-statement-text">
            {statementText}
          </p>

          <div className="h-exp-divider"></div>

          <div className="h-exp-highlights">
            {highlights.map((highlight, index) => (
              <div key={index} className="h-exp-highlight-item">
                {highlight}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperientialLearning;