'use client';

import { useState } from 'react';
import SectionTitle from '../layout/SectionTitle';
import { useContactForm } from '@/hooks/useContactForm';

const LeadGeneration = () => {
  const { formData, handleChange, handleSubmit, isSubmitting } = useContactForm();

  const stats = [
    { value: '3,00,000+', label: 'Professionals Trained' },
    { value: '100%', label: 'Placement Success' },
    { value: '100+', label: 'Countries Worldwide' },
    { value: '4.9 ★', label: 'Google Rating' },
  ];

  return (
    <section className="lg-section">
      <div className="container">
        <SectionTitle
          title="Drop Us a"
          highlight="Query"
          theme="light"
          description="Get in touch with our counselors and start your DevOps journey today"
        />
        <div className="lg-layout">
          {/* Left Stats */}
          <div className="lg-stats lg-stats-left">
            {stats.slice(0, 2).map((stat, i) => (
              <div className="lg-stat-card" key={i}>
                <span className="lg-stat-value">{stat.value}</span>
                <span className="lg-stat-label">{stat.label}</span>
              </div>
            ))}
          </div>

          {/* Center Form */}
          <form className="lg-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="lg-input"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="lg-input"
              required
            />
            <div className="lg-phone-row">
              <label htmlFor="lead-country-code" className="sr-only">Country Code</label>
              <select
                id="lead-country-code"
                name="countryCode"
                value={formData.countryCode}
                onChange={handleChange}
                className="lg-select lg-country-code"
              >
                <option value="+91">+91</option>
                <option value="+1">+1</option>
                <option value="+44">+44</option>
                <option value="+61">+61</option>
                <option value="+971">+971</option>
              </select>
              <label htmlFor="lead-phone" className="sr-only">Phone Number</label>
              <input
                id="lead-phone"
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="lg-input lg-phone-input"
                required
              />
            </div>
            <label htmlFor="lead-purpose" className="sr-only">Purpose</label>
            <select
              id="lead-purpose"
              name="purpose"
              value={formData.purpose}
              onChange={handleChange}
              className="lg-select"
              required
            >
              <option value="" disabled>Select Purpose</option>
              <option value="career">Career Transition</option>
              <option value="upskill">Upskilling</option>
              <option value="certification">Certification</option>
              <option value="corporate">Corporate Training</option>
            </select>
            <label className="lg-checkbox-label">
              <input
                type="checkbox"
                name="agreed"
                checked={formData.agreed}
                onChange={handleChange}
                className="lg-checkbox"
                required
              />
              I agree to the Terms &amp; Conditions
            </label>
            <button type="submit" className="lg-submit" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Submit Query'}
            </button>
          </form>

          {/* Right Stats */}
          <div className="lg-stats lg-stats-right">
            {stats.slice(2).map((stat, i) => (
              <div className="lg-stat-card" key={i}>
                <span className="lg-stat-value">{stat.value}</span>
                <span className="lg-stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadGeneration;