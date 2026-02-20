import Link from 'next/link';
import { HiArrowRight } from 'react-icons/hi';

const Cta = () => {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-wrap">
          <div className="cta-text">
            <h2 className="cta-title">
              Start your DevOps journey today with real projects, expert mentors, and career support.
            </h2>
          </div>
          <div className="cta-action">
            <Link href="#contact" className="cta-btn">
              Get Started Now
              <HiArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;