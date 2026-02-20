'use client';

import { useState, useEffect, useRef } from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const Hero = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    countryCode: '+91',
    phone: '',
    purpose: '',
    agreed: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  const stats = [
    { value: 100, suffix: '+', label: 'Students Placed' },
    { value: 85, suffix: '%', label: 'Placement Rate' },
    { value: 4.9, suffix: '/5', label: 'Student Rating' },
    { value: 15, suffix: '+', label: 'DevOps Tools' },
  ];

  const bullets = [
    { bold: 'GenAI-powered labs—', text: 'accelerate automation tasks and learn AI-driven DevOps workflows.' },
    { bold: 'Project-based curriculum—', text: 'build 4+ deployable projects for your portfolio and GitHub.' },
    { bold: 'Placement assistance with 400+ hiring partners—', text: 'resume review, mock interviews, and job introductions.' },
    { bold: 'Learn from industry mentors—', text: 'live coaching from engineers with 10+ years\' experience.' },
    { bold: 'Cloud + CI/CD stack—', text: 'hands-on with Docker, Kubernetes, Jenkins, Terraform, AWS/Azure.' },
    { bold: 'Flexible schedules—', text: 'weekday, weekend and self-paced options to suit working professionals.' },
    { bold: 'Interview & career support—', text: 'system design practice, HR prep, and recruiter introductions.' },
  ];

  return (
    <section className="hr-section">
      {/* Glow blobs */}
      <div className="hr-glow hr-glow-1" />
      <div className="hr-glow hr-glow-2" />

      <div className="container">
        <div className="hr-content">
          {/* Left Content */}
          <div className="hr-left">
            <span className="hr-badge">● 100% Job Placement Guarantee</span>

            <h1 className="hr-heading">
              DevOps Course in Pune with{' '}
              <span className="hr-highlight-gold">GenAI</span> Integrated
              Curriculum &amp;{' '}
              <span className="hr-highlight-orange">Career Support</span>
            </h1>

            <h2 className="hr-subtitle">Master in Terraform</h2>

            <ul className="hr-bullets">
              {bullets.map((item, i) => (
                <li className="hr-bullet" key={i}>
                  <FaCheckCircle className="hr-bullet-icon" />
                  <span>
                    <strong>{item.bold}</strong> {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Form */}
          <div className="hr-form-wrapper">
            <form className="hr-form" onSubmit={handleSubmit}>
              <h3 className="hr-form-title">Get Started</h3>
              <p className="hr-form-sub">Fill the form below to get started</p>
              <div className="hr-form-divider" />

              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="hr-input"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="hr-input"
                required
              />
              <div className="hr-phone-row">
                <select
                  name="countryCode"
                  value={formData.countryCode}
                  onChange={handleChange}
                  className="hr-select hr-code"
                >
                  <option value="+91">+91</option>
                  <option value="+1">+1</option>
                  <option value="+44">+44</option>
                  <option value="+61">+61</option>
                  <option value="+971">+971</option>
                </select>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="hr-input hr-phone"
                  required
                />
              </div>
              <select
                name="purpose"
                value={formData.purpose}
                onChange={handleChange}
                className="hr-select"
                required
              >
                <option value="" disabled>Select Purpose</option>
                <option value="career">Career Transition</option>
                <option value="upskill">Upskilling</option>
                <option value="certification">Certification</option>
                <option value="corporate">Corporate Training</option>
              </select>

              <label className="hr-checkbox-label">
                <input
                  type="checkbox"
                  name="agreed"
                  checked={formData.agreed}
                  onChange={handleChange}
                  className="hr-checkbox"
                  required
                />
                By submitting this form, you agree to our Terms and Conditions
              </label>

              <button type="submit" className="hr-submit">Send</button>
            </form>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="hr-stats-bar">
          {stats.map((stat, i) => (
            <div className="hr-stat" key={i}>
              <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              <span className="hr-stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* Animated Counter Component */
const AnimatedCounter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const isDecimal = target % 1 !== 0;
          const duration = 2000;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              current = target;
              clearInterval(timer);
            }
            setCount(isDecimal ? parseFloat(current.toFixed(1)) : Math.floor(current));
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span className="hr-stat-value" ref={ref}>
      {count}{suffix}
    </span>
  );
};

export default Hero;