import SectionTitle from '../layout/SectionTitle';
import { demands } from '../../data/data';
import DmCard from '../items/DmCard';

const Demand = () => {
  return (
    <>
      <section className="dm-section">
        <div className="container">
          <SectionTitle
            title="Devops"
            highlight="Demand"
            suffix="2026"
            theme="dark"
            description="Practical career help to polish your profile, sharpen interviews, and connect you with hiring teams."
          />
          <div className="dm-insights-grid">
            {demands.map((demand) => (
              <DmCard 
                key={demand.id}
                demand={demand}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Demand;
