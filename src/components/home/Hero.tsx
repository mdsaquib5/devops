'use client';

import { FaUsers, FaBriefcase, FaStar, FaTools, FaTrophy, FaMapMarkerAlt } from 'react-icons/fa';
import Link from 'next/link';

const Hero = () => {
  const cities = [
    { name: 'Mumbai', primary: true },
    { name: 'Bangalore', primary: false },
    { name: 'Delhi NCR', primary: false },
    { name: 'Hyderabad', primary: false },
    { name: 'Pune', primary: false },
    { name: 'Chennai', primary: false }
  ];

  const stats = [
    {
      icon: <FaUsers />,
      value: '100+',
      label: 'Students Placed'
    },
    {
      icon: <FaBriefcase />,
      value: '85%',
      label: 'Placement Rate'
    },
    {
      icon: <FaStar />,
      value: '4.9/5',
      label: 'Student Rating'
    },
    {
      icon: <FaTools />,
      value: '15+',
      label: 'DevOps Tools'
    }
  ];

  return (
    <section className="hero-section">
      <div className="container">
        {/* Badge */}
        <div className="hero-badge">
          <FaTrophy /> India&apos;s #1 DevOps Training Institute
        </div>

        {/* Guarantee */}
        <div className="hero-guarantee">
          100% Job Placement Guarantee
        </div>

        {/* Main Heading */}
        <h1 className="hero-heading">
          Transform Your IT Career with the<br />
          Best DevOps Course in India
        </h1>

        {/* Description */}
        <div className="hero-description">
          <p>
            Welcome to SwitchToDevOps, your ultimate destination for mastering automation,
            cloud infrastructure, and modern software delivery. Whether you are looking to
            upskill or transition into a high-paying tech role, our comprehensive DevOps
            online course is designed to make you industry-ready. Join thousands of learners
            across India and accelerate your career with practical, hands-on training led by
            industry experts.
          </p>
        </div>

        {/* City Buttons */}
        <div className="hero-cities">
          {cities.map((city, index) => (
            <Link href={city.name}
              key={index}
              className={`hero-city-btn ${city.primary ? 'primary' : ''}`}
            >
              <FaMapMarkerAlt /> {city.name} {city.primary && '(PRIMARY)'}
            </Link>
          ))}
        </div>

        {/* Stats Grid */}
        <div className="hero-stats">
          {stats.map((stat, index) => (
            <div key={index} className="hero-stat-card">
              <div className="hero-stat-icon">{stat.icon}</div>
              <div className="hero-stat-value">{stat.value}</div>
              <div className="hero-stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;