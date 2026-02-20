'use client';

import { useState, useEffect, useRef } from 'react';
import { FiBriefcase, FiLifeBuoy } from "react-icons/fi";
import { IoCheckmarkCircle } from "react-icons/io5";
import { BsShieldCheck } from "react-icons/bs";
import SectionTitle from '../layout/SectionTitle';

const stats = [
    { value: 95, suffix: "%", label: "Placements" },
    { value: 5, suffix: " LPA", label: "Average CTC" },
    { value: 25, suffix: " LPA", label: "Highest CTC" },
    { value: 300, suffix: "+", label: "Hiring Partners" },
    { value: 82, suffix: "%", label: "Average Hike" },
];

const Services = () => {
    return (
        <>
            <section className="pf-section">
                <div className="pf-orb pf-orb--tl" />
                <div className="pf-orb pf-orb--br" />
                <div className="container">
                    <SectionTitle
                        title="Pay"
                        highlight="Career Services"
                        suffix="Fee"
                        theme="light"
                        description="Simple, transparent — you pay only after you land a job."
                    />
                    <div className="pf-grid">
                        <div className="pf-card pf-card--light">
                            <span className="pf-step-num">01</span>
                            <div className="pf-icon">
                                <FiBriefcase />
                            </div>
                            <div className="pf-card-body">
                                <h3 className="pf-card-title">Get Job Offer</h3>
                                <ul className="pf-list">
                                    <li><IoCheckmarkCircle /> Receive offer letter</li>
                                    <li><IoCheckmarkCircle /> Career team guides you</li>
                                </ul>
                            </div>
                        </div>
                        <div className="pf-card pf-card--featured">
                            <div className="pf-featured-tag">
                                <BsShieldCheck /> Pay After Joining
                            </div>
                            <span className="pf-step-num pf-step-num--ghost">02</span>
                            <h3 className="pf-card-title pf-card-title--featured">Pay Career Fee</h3>
                            <div className="pf-price-block">
                                <div className="pf-price">
                                    <sup>₹</sup>20,000
                                </div>
                                <p className="pf-price-note">paid only after you join</p>
                            </div>
                            <div className="pf-guarantee">
                                Easy EMI payment option
                            </div>
                        </div>
                        <div className="pf-card pf-card--light">
                            <span className="pf-step-num">03</span>
                            <div className="pf-icon">
                                <FiLifeBuoy />
                            </div>
                            <div className="pf-card-body">
                                <h3 className="pf-card-title">Ongoing Support</h3>
                                <ul className="pf-list">
                                    <li><IoCheckmarkCircle /> Help during notice period</li>
                                    <li><IoCheckmarkCircle /> Resume update for next role</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="pf-stats-bar">
                    {stats.map((s, i) => (
                        <div key={i} className="pf-stat">
                            <AnimatedCounter target={s.value} suffix={s.suffix} />
                            <span className="pf-stat-lbl">{s.label}</span>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

const AnimatedCounter = ({ target, suffix }: { target: number; suffix: string }) => {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated.current) {
                    hasAnimated.current = true;
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
                        setCount(Math.floor(current));
                    }, duration / steps);
                }
            },
            { threshold: 0.5 }
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [target]);

    return (
        <span className="pf-stat-val" ref={ref}>
            {count}{suffix}
        </span>
    );
};

export default Services;