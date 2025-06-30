import React from "react";
import { motion } from "framer-motion";
import AplicacionesOsteopatia from "../components/home/AplicacionesOsteopatia";
import Banner from "../components/home/Banner";
import HeroSection from "../components/home/HeroSection";
import ExperienceHighlight from "../components/home/ExperienceHighlight";
import HomeCTA from "../components/home/HomeCTA";
import HomeGridSection from "../components/home/HomeGridSection";
import PropTypes from "prop-types";

// Fondo animado con ondas SVG aún más altas y envolventes
const AnimatedWavesBackground = () => (
  <div className="fixed inset-0 w-full h-full -z-10 overflow-hidden">
    {/* Gradiente base oscuro */}
    <div
      className="absolute inset-0 w-full h-full"
      style={{
        background:
          "linear-gradient(120deg, #1e293b 0%, #312e81 40%, #6366f1 100%)"
      }}
    />
    {/* Overlay lateral para difuminar bordes */}
    <div className="absolute inset-0 pointer-events-none" style={{
      background: "linear-gradient(90deg, #1e293b 0%, transparent 10%, transparent 90%, #6366f1 100%)",
      opacity: 0.55,
      zIndex: 2
    }} />
    {/* Ondas SVG animadas, cubriendo más alto y superpuestas */}
    <svg className="absolute left-0 w-full h-full" viewBox="0 0 1440 900" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ pointerEvents: 'none' }}>
      <defs>
        <linearGradient id="waveGradient1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#6366f1" stopOpacity="0.8" />
        </linearGradient>
        <linearGradient id="waveGradient2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#818cf8" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#312e81" stopOpacity="0.7" />
        </linearGradient>
        <linearGradient id="waveGradient3" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#6366f1" stopOpacity="0.5" />
        </linearGradient>
      </defs>
      {/* Onda más alta, cubre hasta 200px del top */}
      <path fill="url(#waveGradient3)" opacity="0.5">
        <animate attributeName="d" dur="18s" repeatCount="indefinite"
          values="M0,200 Q360,100 720,200 T1440,200 V900 H0Z;
                  M0,150 Q360,250 720,150 T1440,200 V900 H0Z;
                  M0,200 Q360,100 720,200 T1440,200 V900 H0Z" />
      </path>
      {/* Onda intermedia, cubre hasta 350px del top */}
      <path fill="url(#waveGradient1)" opacity="0.7">
        <animate attributeName="d" dur="14s" repeatCount="indefinite"
          values="M0,350 Q360,250 720,350 T1440,350 V900 H0Z;
                  M0,300 Q360,400 720,300 T1440,350 V900 H0Z;
                  M0,350 Q360,250 720,350 T1440,350 V900 H0Z" />
      </path>
      {/* Onda inferior, cubre hasta 600px del top */}
      <path fill="url(#waveGradient2)" opacity="0.8">
        <animate attributeName="d" dur="10s" repeatCount="indefinite"
          values="M0,600 Q360,650 720,600 T1440,600 V900 H0Z;
                  M0,600 Q360,700 720,600 T1440,600 V900 H0Z;
                  M0,600 Q360,650 720,600 T1440,600 V900 H0Z" />
      </path>
    </svg>
  </div>
);

const Section = ({ title, children, className }) => (
  <section className={`py-16 px-6 bg-gradient-to-br from-blue-50 to-white rounded-3xl shadow-xl mb-12 ${className}`}>
    <h2 className="text-4xl md:text-5xl font-semibold text-blue-700 drop-shadow-md text-center md:text-left mb-4">
      {title}
    </h2>
    <div className="mt-6 text-xl leading-loose text-gray-700">{children}</div>
  </section>
);

Section.propTypes = {
  title: PropTypes.node.isRequired,
  children: PropTypes.node,
  className: PropTypes.string
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } }
};

const Home = () => {
  return (
    <div className="relative flex flex-col items-center font-sans min-h-screen bg-transparent">
      {/* Fondo animado con ondas SVG azules y violetas */}
      <AnimatedWavesBackground />
      {/* Wrapper para contenido principal */}
      <div className="relative w-full flex flex-col items-center">
        <div className="relative z-10 flex flex-col items-center w-full">
          {/* Hero Section modularizado */}
          <HeroSection />
          {/* Experiencia destacada modularizada */}
          <ExperienceHighlight />
          {/* Aplicaciones de la osteopatía */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true }}
            className="w-full"
          >
            <AplicacionesOsteopatia />
          </motion.div>
          {/* Banner con horarios de atención */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full"
          >
            <Banner />
          </motion.div>
          {/* Separación extra en mobile entre Banner y Beneficios */}
          <div className="h-8 md:h-0" />
          {/* Grid de Beneficios, Imagen y FAQ modularizado */}
          <HomeGridSection />
          {/* Espacio extra antes del CTA */}
          <div className="h-10 md:h-16" />
          {/* CTA modularizado */}
          <HomeCTA />
        </div>
      </div>
      {/* Footer fuera del wrapper, siempre con su gradiente */}
      <div className="relative z-20 w-full">
        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default Home;
