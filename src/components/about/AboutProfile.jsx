import React from 'react';
import { motion } from 'framer-motion';

const AboutProfile = () => (
  <div className="flex flex-col md:flex-row items-center justify-center md:justify-between mb-12 mt-8 md:mt-0 w-full">
    <motion.div
      className="w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64 flex-shrink-0 mb-6 md:mb-0 relative overflow-visible rounded-xl ml-0 md:ml-0 z-10 flex items-center justify-center shadow-2xl border-4 border-blue-200/40 bg-white/30"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.3, type: 'spring', stiffness: 120 }}
      whileHover={{ scale: 1.04, boxShadow: '0 0 48px 8px #38bdf8' }}
    >
      <div className="relative w-full h-full flex items-center justify-center rounded-xl overflow-hidden">
        <img
          src="assets/webp/francisco1.webp"
          alt="Francisco Torres - Osteópata en consulta"
          className="w-full h-full object-cover rounded-xl transition-transform duration-500 ease-in-out hover:scale-110 hover:shadow-2xl"
          loading="lazy"
        />
        {/* Glow animado */}
        <div className="absolute inset-0 rounded-xl pointer-events-none animate-pulse bg-gradient-to-br from-blue-400/20 via-cyan-300/10 to-blue-400/20 blur-2xl" />
      </div>
    </motion.div>
    <motion.div
      className="w-full md:w-2/3 md:pl-10 flex flex-col items-center md:items-start text-center md:text-left"
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.4, type: 'spring', stiffness: 120 }}
    >
      <h2 className="text-4xl text-white font-bold mb-4 p-4 rounded-lg bg-black bg-opacity-30 shadow-lg border-2 border-blue-900 flex items-center gap-2">
        <motion.span
          className="inline-flex items-center text-4xl mr-2 wave"
          animate={{ rotate: [0, 20, -10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          👋
        </motion.span>
        Hola, soy Francisco Torres Osteópata.
      </h2>
      <motion.p
        className="text-2xl text-white font-medium leading-relaxed text-justify"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        "Mi pasión es acompañarte en el camino hacia un cuerpo más saludable. Como osteópata, mi compromiso es ayudarte a recuperar tu bienestar físico, aliviando el dolor y mejorando tu movilidad. Mi objetivo es proporcionarte las herramientas necesarias para que el bienestar sea una parte integral de tu vida, sin importar los desafíos que enfrentes."
      </motion.p>
    </motion.div>
  </div>
);

export default AboutProfile;
