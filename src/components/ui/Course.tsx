'use client';
import { useState, useRef, useEffect } from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import SectionTitle from '../layout/SectionTitle';
import { courses } from '../../data/data';
import CourseCard from '../items/CourseCard';

const Course = () => {
    const [activeTab, setActiveTab] = useState(0);
    const stripRef = useRef<HTMLDivElement>(null);

    const goTo = (index: number) => {
        if (index < 0 || index >= courses.length) return;
        setActiveTab(index);
    };

    // Auto-scroll active pill into center of strip
    useEffect(() => {
        const strip = stripRef.current;
        if (!strip) return;
        const pill = strip.children[activeTab] as HTMLElement;
        if (!pill) return;
        strip.scrollTo({
            left: pill.offsetLeft - strip.offsetWidth / 2 + pill.offsetWidth / 2,
            behavior: 'smooth',
        });
    }, [activeTab]);

    const progress = Math.round(((activeTab + 1) / courses.length) * 100);

    return (
        <>
            <section className="cr-section">
                <div className="container">
                    <SectionTitle
                        title="DevOps Course"
                        highlight="Curriculum"
                        suffix="25 Modules"
                        theme="light"
                        description="Discover our featured courses, specially curated to help you gain in-demand skills"
                    />
                    <div className="cr-strip-wrapper">
                        <button
                            className="cr-arrow"
                            onClick={() => goTo(activeTab - 1)}
                            disabled={activeTab === 0}
                            aria-label="Previous module"
                        >
                            <IoChevronBack />
                        </button>
                        <div className="cr-strip" ref={stripRef}>
                            {courses.map((_, i) => (
                                <button
                                    key={i}
                                    className={`cr-pill${activeTab === i ? ' cr-pill--active' : ''}${i < activeTab ? ' cr-pill--done' : ''}`}
                                    onClick={() => goTo(i)}
                                    aria-label={`Module ${i + 1}`}
                                >
                                    Module {i + 1}
                                </button>
                            ))}
                        </div>
                        <button
                            className="cr-arrow"
                            onClick={() => goTo(activeTab + 1)}
                            disabled={activeTab === courses.length - 1}
                            aria-label="Next module"
                        >
                            <IoChevronForward />
                        </button>
                    </div>
                    <CourseCard 
                        key={activeTab}
                        course={courses[activeTab]}
                        index={activeTab}
                    />
                    <div className="cr-card-foot">
                        <div className="cr-progress-wrap">
                            <div className="cr-progress-bar">
                                <div className="cr-progress-fill" style={{ width: `${progress}%` }}></div>
                            </div>
                            <span className="cr-progress-label">{progress}% complete</span>
                        </div>
                        <div className="cr-nav-btns">
                            <button
                                className="cr-nav-btn"
                                onClick={() => goTo(activeTab - 1)}
                                disabled={activeTab === 0}
                            >
                                <IoChevronBack /> Prev
                            </button>
                            <button
                                className="cr-nav-btn cr-nav-btn--primary"
                                onClick={() => goTo(activeTab + 1)}
                                disabled={activeTab === courses.length - 1}
                            >
                                Next <IoChevronForward />
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Course;