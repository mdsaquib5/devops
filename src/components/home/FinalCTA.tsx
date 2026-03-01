import { FaArrowRight } from 'react-icons/fa';
import { finalCTAData } from '@/data/homeData';

const FinalCTA = () => {
  const { title, cities, buttonText } = finalCTAData;

  return (
    <section className="h-cta-section">
      <div className="container">
        <div className="h-cta-content">
          <h2 className="h-cta-title">{title}</h2>

          <div className="h-cta-cities">
            Serving {cities.map((city, index) => (
              <span key={index}>
                {city}
                {index < cities.length - 1 && ' • '}
              </span>
            ))}
          </div>

          <button className="h-cta-btn">
            {buttonText} <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
