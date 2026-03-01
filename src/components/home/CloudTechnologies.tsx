import { FaAws, FaCheck, FaArrowRight, FaMicrosoft } from 'react-icons/fa';
import HomeSectionTitle from '../layout/HomeSectionTitle';
import { cloudTechnologiesData } from '@/data/homeData';

const CloudTechnologies = () => {
  const { sectionTitle, awsFeatures, azureFeatures } = cloudTechnologiesData;

  return (
    <section className="h-ct-section">
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

        {/* Diagonal Split Container */}
        <div className="h-ct-split-container">
          {/* AWS Side */}
          <div className="h-ct-split-left">
            <div className="h-ct-platform-icon h-ct-aws-icon">
              <FaAws />
            </div>
            <h3 className="h-ct-platform-title">AWS DevOps Course</h3>
            <p className="h-ct-platform-text">
              Dive deep into Amazon Web Services. Our specialized AWS and DevOps course module teaches you how to
              provision, automate, manage, and secure AWS cloud environments efficiently.
            </p>
            <ul className="h-ct-feature-list">
              {awsFeatures.map((feature, index) => (
                <li key={index}>
                  <FaCheck /> {feature}
                </li>
              ))}
            </ul>
            <button className="h-ct-learn-btn h-ct-aws-btn">
              Learn AWS <FaArrowRight />
            </button>
          </div>

          {/* Diagonal Divider */}
          <div className="h-ct-diagonal-divider"></div>

          {/* Azure Side */}
          <div className="h-ct-split-right">
            <div className="h-ct-platform-icon h-ct-azure-icon">
              <FaMicrosoft />
            </div>
            <h3 className="h-ct-platform-title">Azure DevOps Course</h3>
            <p className="h-ct-platform-text">
              Expand your multi-cloud expertise by learning to deploy scalable applications using Microsoft&apos;s
              robust cloud ecosystem. Our Azure modules ensure you have the versatile skills that top tech companies
              are actively hiring for.
            </p>
            <ul className="h-ct-feature-list">
              {azureFeatures.map((feature, index) => (
                <li key={index}>
                  <FaCheck /> {feature}
                </li>
              ))}
            </ul>
            <button className="h-ct-learn-btn h-ct-azure-btn">
              Learn Azure <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CloudTechnologies;