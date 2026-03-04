'use client';

import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTopButton = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      
      setScrollProgress(Math.min(scrollPercent, 100));
      setIsVisible(scrollTop > 300);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="scroll-to-top-btn"
      aria-label="Scroll to top"
    >
      <div className="scroll-progress-ring">
        <svg className="progress-svg" width="60" height="60">
          <circle
            className="progress-bg"
            cx="30"
            cy="30"
            r="28"
            fill="none"
            stroke="var(--light)"
            strokeWidth="2"
          />
          <circle
            className="progress-bar"
            cx="30"
            cy="30"
            r="28"
            fill="none"
            stroke="var(--secondary)"
            strokeWidth="3"
            strokeDasharray={`${2 * Math.PI * 28}`}
            strokeDashoffset={`${2 * Math.PI * 28 * (1 - scrollProgress / 100)}`}
            strokeLinecap="round"
            transform="rotate(-90 30 30)"
          />
        </svg>
        <div className="scroll-icon">
          <FaArrowUp />
        </div>
      </div>
      <div className="scroll-percentage">
        {Math.round(scrollProgress)}%
      </div>
    </button>
  );
};

export default ScrollToTopButton;
