'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';

import { FaDocker, FaAws, FaGitAlt, FaGithub, FaJenkins } from 'react-icons/fa';
import { SiKubernetes, SiTerraform, SiAnsible, SiApachemaven, SiGrafana, SiPrometheus } from 'react-icons/si';
import { GiRadarSweep } from 'react-icons/gi';
import SectionTitle from '../layout/SectionTitle';

const toolsRow1 = [
  { name: 'Maven', icon: <SiApachemaven size={28} />, color: '#C71A36' },
  { name: 'Git', icon: <FaGitAlt size={28} />, color: '#F05032' },
  { name: 'Kubernetes', icon: <SiKubernetes size={28} />, color: '#326CE5' },
  { name: 'Docker', icon: <FaDocker size={28} />, color: '#2496ED' },
  { name: 'AWS', icon: <FaAws size={28} />, color: '#FF9900' },
  { name: 'Prometheus', icon: <SiPrometheus size={28} />, color: '#E6522C' },
];

const toolsRow2 = [
  { name: 'Ansible', icon: <SiAnsible size={28} />, color: '#EE0000' },
  { name: 'GitHub', icon: <FaGithub size={28} />, color: '#181717' },
  { name: 'Jenkins', icon: <FaJenkins size={28} />, color: '#D24939' },
  { name: 'Terraform', icon: <SiTerraform size={28} />, color: '#7B42BC' },
  { name: 'Nagios', icon: <GiRadarSweep size={28} />, color: '#242424' },
  { name: 'Grafana', icon: <SiGrafana size={28} />, color: '#F46800' },
];

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

const ToolCard = ({ tool }: { tool: { name: string; icon: React.ReactNode; color: string } }) => (
  <div className="tc-card">
    <span className="tc-card-icon" style={{ color: tool.color }}>
      {tool.icon}
    </span>
    <span className="tc-card-name">{tool.name}</span>
  </div>
);

const Tools = () => {
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
          description="Industry-standard tools you will master during the program"
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
              <ToolCard tool={tool} />
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
              <ToolCard tool={tool} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Tools;