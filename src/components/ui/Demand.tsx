import Link from "next/link";
import { TbTrendingUp } from "react-icons/tb";
import { MdWorkOutline } from "react-icons/md";
import { IoCashOutline } from "react-icons/io5";
import SectionTitle from '../layout/SectionTitle';

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
            <div className="dm-insight-card dm-insight--green">
              <div className="dm-insight-icon"><TbTrendingUp size={26} color="#004f44" /></div>
              <div>
                <h3 className="dm-insight-title">Market Growth</h3>
                <p className="dm-insight-text">
                  DevOps market projected to grow{" "}
                  <Link className="dm-link" href="/">~21% CAGR</Link>{" "}
                  — more automation, faster releases and higher hiring demand.
                </p>
              </div>
            </div>
            <div className="dm-insight-card dm-insight--orange">
              <div className="dm-insight-icon"><MdWorkOutline size={26} color="#ff8800" /></div>
              <div>
                <h3 className="dm-insight-title">Active Hiring</h3>
                <p className="dm-insight-text">
                  80k+ DevOps roles listed on LinkedIn across India — active hiring in Pune and nearby cities.{" "}
                  <Link className="dm-link" href="/">See live listing →</Link>
                </p>
              </div>
            </div>
            <div className="dm-insight-card dm-insight--teal">
              <div className="dm-insight-icon"><IoCashOutline size={26} color="#00c49a" /></div>
              <div>
                <h3 className="dm-insight-title">Salary Data</h3>
                <p className="dm-insight-text">
                  According to{" "}
                  <Link className="dm-link" href="/">Coursera</Link>,
                  Average DevOps pay in India ≈ ₹9.3 LPA; entry roles typically start ₹4–8 LPA (varies by experience).
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default Demand;
