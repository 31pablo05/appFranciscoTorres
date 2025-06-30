import React from "react";
import { motion } from "framer-motion";
import { FaMedal } from "react-icons/fa";

const ExperienceHighlight = () => (
  <motion.div
    className="inline-block text-center mb-10 px-8 py-7 rounded-3xl bg-gradient-to-br from-blue-800/90 to-blue-600/80 shadow-2xl mt-10 backdrop-blur-lg border border-white/30 ring-2 ring-blue-200/30 relative overflow-visible"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 0.4 }}
  >
    <motion.div
      className="absolute -top-6 left-1/2 -translate-x-1/2 z-0"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 0.13 }}
      transition={{ duration: 1.2, delay: 0.5, type: 'spring' }}
    >
      <FaMedal className="text-[80px] md:text-[100px] text-yellow-300 drop-shadow-xl" aria-hidden="true" />
    </motion.div>
    <p className="relative z-10 mt-2 text-lg md:text-2xl text-white text-opacity-95 leading-relaxed font-medium flex flex-col items-center gap-2">
      <motion.span
        className="inline-flex items-center gap-2 font-extrabold text-3xl md:text-4xl bg-gradient-to-r from-yellow-300 via-blue-400 to-blue-500 bg-clip-text text-transparent drop-shadow-lg tracking-tight"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: [1.2, 0.95, 1.1, 1], opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.7, type: 'spring', stiffness: 200 }}
      >
        <FaMedal className="text-2xl md:text-3xl text-yellow-300 animate-pulse" aria-hidden="true" />
        10 años de experiencia
      </motion.span>
      <span className="block text-base md:text-xl font-normal text-blue-100 mt-2 max-w-md md:max-w-lg mx-auto px-2 md:px-0" style={{lineHeight:'1.6'}}>
        Ayudando a recuperar movilidad y aliviar dolores con técnicas avanzadas en <span className="text-blue-200 font-semibold">osteopatía</span> y <span className="text-blue-200 font-semibold">kinesiología</span>.
      </span>
    </p>
  </motion.div>
);

export default ExperienceHighlight;
