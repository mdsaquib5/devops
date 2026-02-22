'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';

import SectionTitle from '../layout/SectionTitle';
import { tools } from '../../data/data';
import ToolsCard from '../items/ToolsCard';

const commonConfig = {
  allowTouchMove: false,
  simulateTouch: false,
  slidesPerView: 2,
  spaceBetween: 16,
  loop: true,
  freeMode: true,
  speed: 10000,
  modules: [Autoplay, FreeMode],
  breakpoints: {
    1200: { slidesPerView: 5, spaceBetween: 20 },
    1024: { slidesPerView: 4, spaceBetween: 18 },
    768: { slidesPerView: 3, spaceBetween: 16 },
    480: { slidesPerView: 2.5, spaceBetween: 14 },
  },
};

const Tools = () => {
  const toolsRow1 = tools.slice(0, 6);
  const toolsRow2 = tools.slice(6, 12);
  const row1Data = [...toolsRow1, ...toolsRow1, ...toolsRow1];
  const row2Data = [...toolsRow2, ...toolsRow2, ...toolsRow2];

  return (
    <section className="tc-section">
      {/* Decorative blurs */}
      <div className="tc-glow tc-glow--1" />
      <div className="tc-glow tc-glow--2" />

      <div className="container">
        <SectionTitle
          title="Tools & Technologies"
          highlight="Covered"
          theme="dark"
          description="Industry-standard tools you will master during program"
        />
      </div>

      {/* Row 1 — slides LEFT */}
      <div className="tc-slider-row">
        <Swiper
          {...commonConfig}
          autoplay={{ delay: 0, disableOnInteraction: false }}
        >
          {row1Data.map((tool, i) => (
            <SwiperSlide key={`r1-${i}`}>
              <ToolsCard tool={tool} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Row 2 — slides RIGHT */}
      <div className="tc-slider-row">
        <Swiper
          {...commonConfig}
          autoplay={{ delay: 0, disableOnInteraction: false, reverseDirection: true }}
        >
          {row2Data.map((tool, i) => (
            <SwiperSlide key={`r2-${i}`}>
              <ToolsCard tool={tool} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Tools;