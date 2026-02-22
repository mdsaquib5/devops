'use client';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import SectionTitle from '../layout/SectionTitle';
import { testimonialsData } from '../../data/data';
import TestimonialCard from '../items/TestimonialCard';

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
                        {testimonialsData.map((testimonial, i) => (
                            <SwiperSlide key={i}>
                                <TestimonialCard 
                                    testimonial={testimonial}
                                    index={i}
                                    onVideoClick={setActiveVideo}
                                />
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