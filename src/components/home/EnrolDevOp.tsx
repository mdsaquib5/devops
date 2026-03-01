import HomeSectionTitle from '../layout/HomeSectionTitle';
import { enrolDevOpData } from '@/data/homeData';

const EnrolDevOp = () => {
  const { sectionTitle, beginnerTrack, professionalTrack } = enrolDevOpData;

  return (
    <section className="h-enrol-section">
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

        {/* Cards Grid */}
        <div className="h-enrol-cards-grid">
          {/* Beginner Track Card */}
          <div className="h-enrol-card">
            <div className="h-enrol-card-header">
              <beginnerTrack.icon className="h-enrol-card-icon" />
              <h3 className="h-enrol-card-title">{beginnerTrack.title}</h3>
            </div>
            <ul className="h-enrol-card-list">
              {beginnerTrack.steps.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ul>
            <p className="h-enrol-card-footer">
              {beginnerTrack.description}
            </p>
          </div>

          {/* Professional Track Card */}
          <div className="h-enrol-card">
            <div className="h-enrol-card-header">
              <professionalTrack.icon className="h-enrol-card-icon" />
              <h3 className="h-enrol-card-title">{professionalTrack.title}</h3>
            </div>
            <ul className="h-enrol-card-list">
              {professionalTrack.steps.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ul>
            <p className="h-enrol-card-footer">
              {professionalTrack.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnrolDevOp;
