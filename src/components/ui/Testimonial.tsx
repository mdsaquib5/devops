'use client';
import { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FaPlay, FaTimes, FaArrowUp, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { BsStarFill } from 'react-icons/bs';
import SectionTitle from '../layout/SectionTitle';

const testimonials = [
    {
        name: 'Rahul Sharma',
        review: 'This course completely changed my career. The hands-on projects and mentor support were outstanding.',
        videoId: 'dQw4w9WgXcQ',
        prevRole: 'QA Engineer',
        currentRole: 'DevOps Engineer',
        salary: '₹12 LPA',
        stars: 5,
    },
    {
        name: 'Priya Menon',
        review: 'Landed my dream job within 2 months of completing the course. Best investment I made.',
        videoId: 'dQw4w9WgXcQ',
        prevRole: 'Software Developer',
        currentRole: 'SRE Engineer',
        salary: '₹14 LPA',
        stars: 5,
    },
    {
        name: 'Amit Kulkarni',
        review: 'The CI/CD and Kubernetes modules were exceptional. Real projects made all the difference.',
        videoId: 'dQw4w9WgXcQ',
        prevRole: 'System Admin',
        currentRole: 'Cloud Engineer',
        salary: '₹10 LPA',
        stars: 5,
    },
    {
        name: 'Sneha Patil',
        review: 'From a fresher to a DevOps role in 4 months. The placement support was incredible.',
        videoId: 'dQw4w9WgXcQ',
        prevRole: 'Fresher (B.Tech)',
        currentRole: 'DevOps Engineer',
        salary: '₹8 LPA',
        stars: 5,
    },
    {
        name: 'Vikram Joshi',
        review: 'Excellent mentors who actually work in the industry. The 1-to-1 sessions were game changers.',
        videoId: 'dQw4w9WgXcQ',
        prevRole: 'IT Support',
        currentRole: 'Platform Engineer',
        salary: '₹11 LPA',
        stars: 4,
    },
];

const Testimonial = () => {
    const [activeVideo, setActiveVideo] = useState<string | null>(null);

    return (
        <section className="vt-section">
            <div className="vt-glow vt-glow--1" />
            <div className="vt-glow vt-glow--2" />

            <div className="container">

                {/* Header */}
                <SectionTitle
                    title="What"
                    highlight="Our Students"
                    suffix="Say"
                    theme="dark"
                    description="Real stories from real alumni — watch their journey"
                />

                {/* Swiper slider */}
                <div className="vt-slider-wrap">
                    {/* Custom nav buttons */}
                    <button className="vt-nav-btn vt-nav-prev">
                        <FaChevronLeft size={16} />
                    </button>
                    <button className="vt-nav-btn vt-nav-next">
                        <FaChevronRight size={16} />
                    </button>
                    <Swiper
                        modules={[Navigation, Pagination]}
                        navigation={{
                            prevEl: '.vt-nav-prev',
                            nextEl: '.vt-nav-next',
                        }}
                        pagination={{ clickable: true }}
                        spaceBetween={22}
                        slidesPerView={1.1}
                        breakpoints={{
                            480: { slidesPerView: 1.3 },
                            640: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                        className="vt-swiper"
                    >
                        {testimonials.map((t, i) => (
                            <SwiperSlide key={i}>
                                <div className="vt-card">
                                    {/* Thumbnail */}
                                    <div className="vt-thumb" onClick={() => setActiveVideo(t.videoId)}>
                                        <Image
                                            src={`https://img.youtube.com/vi/${t.videoId}/hqdefault.jpg`}
                                            alt={t.name}
                                            width={480}
                                            height={270}
                                            className="vt-thumb-img"
                                        />
                                        <div className="vt-play-overlay">
                                            <span className="vt-play-btn">
                                                <FaPlay size={16} />
                                            </span>
                                        </div>
                                    </div>

                                    {/* Info */}
                                    <div className="vt-info">
                                        {/* Stars */}
                                        <div className="vt-stars">
                                            {Array.from({ length: t.stars }).map((_, s) => (
                                                <BsStarFill key={s} className="vt-star" />
                                            ))}
                                        </div>

                                        {/* Review quote */}
                                        <p className="vt-quote">&ldquo;{t.review}&rdquo;</p>

                                        {/* Name */}
                                        <h4 className="vt-name">{t.name}</h4>

                                        {/* Career transition badge */}
                                        <div className="vt-career">
                                            <div className="vt-career-row">
                                                <span className="vt-career-label">Before</span>
                                                <span className="vt-career-value">{t.prevRole}</span>
                                            </div>
                                            <div className="vt-career-arrow">
                                                <FaArrowUp size={12} />
                                            </div>
                                            <div className="vt-career-row">
                                                <span className="vt-career-label">Now</span>
                                                <span className="vt-career-value vt-career-value--highlight">{t.currentRole}</span>
                                            </div>
                                            <div className="vt-salary">{t.salary}</div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

            </div>

            {/* YouTube popup modal */}
            {activeVideo && (
                <div className="vt-modal" onClick={() => setActiveVideo(null)}>
                    <div className="vt-modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="vt-modal-close" onClick={() => setActiveVideo(null)}>
                            <FaTimes size={18} />
                        </button>
                        <iframe
                            src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
                            title="Student Review"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="vt-modal-iframe"
                        />
                    </div>
                </div>
            )}
        </section>
    );
};

export default Testimonial;