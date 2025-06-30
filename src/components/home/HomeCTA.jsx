import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } }
};

const HomeCTA = () => (
  <motion.div
    initial="hidden"
    animate="visible"
    variants={fadeInUp}
    whileHover={{ scale: 1.025, boxShadow: '0 0 64px 12px #38bdf8, 0 0 0 4px #fff3' }}
    transition={{ type: 'spring', stiffness: 220 }}
    className="relative overflow-hidden bg-gradient-to-r from-blue-500 via-teal-500 to-blue-400 text-center text-white rounded-3xl shadow-2xl py-14 px-4 sm:px-7 mb-16 mx-2 sm:mx-0 flex flex-col items-center group"
  >
    {/* Glow animado mejorado */}
    <motion.div
      className="absolute -inset-4 bg-gradient-to-br from-blue-400 via-teal-400 to-blue-400 opacity-40 blur-3xl animate-pulse z-0 pointer-events-none"
      aria-hidden="true"
      animate={{
        scale: [1, 1.08, 1],
        rotate: [0, 8, -8, 0],
        filter: [
          'blur(36px) brightness(1.1)',
          'blur(48px) brightness(1.2)',
          'blur(36px) brightness(1.1)'
        ]
      }}
      transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
    />
    {/* Destello animado en el borde */}
    <motion.div
      className="absolute inset-0 rounded-3xl border-4 border-transparent pointer-events-none z-10"
      initial={{ borderColor: 'rgba(56,189,248,0.0)' }}
      animate={{
        borderColor: [
          'rgba(56,189,248,0.0)',
          'rgba(56,189,248,0.5)',
          'rgba(56,189,248,0.0)'
        ]
      }}
      transition={{ duration: 2.5, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
      style={{ boxShadow: '0 0 32px 8px #38bdf8aa' }}
    />
    <div className="relative z-20 flex flex-col items-center">
      <motion.h2
        className="relative text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 tracking-wide leading-tight drop-shadow-lg bg-gradient-to-r from-blue-700 via-cyan-300 to-blue-900 bg-clip-text text-transparent animate-pulse"
        style={{ WebkitTextStroke: '1.5px #fff', textShadow: '0 2px 16px #2563eb55' }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, type: 'spring', stiffness: 120 }}
      >
        <span className="relative inline-block">
          Empieza hoy tu camino hacia el bienestar óptimo
          {/* Shine animado */}
          <span className="absolute left-0 top-0 w-full h-full pointer-events-none overflow-hidden rounded-2xl">
            <span className="block w-1/3 h-full bg-gradient-to-r from-transparent via-white/60 to-transparent blur-lg opacity-40 animate-[shine_2.5s_linear_infinite]" style={{filter:'blur(8px)'}}></span>
          </span>
        </span>
      </motion.h2>
      <motion.p
        className="mb-8 text-lg sm:text-xl font-medium text-gray-100 opacity-90 max-w-4xl mx-auto animate-fadeIn"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        &quot;No te acostumbres al dolor. Con un enfoque personalizado y terapias avanzadas, te ayudamos a recuperar tu bienestar físico y a mejorar tu calidad de vida. Agenda tu cita hoy y siente la diferencia desde la primera sesión.&quot;
      </motion.p>
      <motion.div
        whileHover={{ scale: 1.12, boxShadow: '0 0 32px 8px #38bdf8' }}
        className="inline-block"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4, type: 'spring', stiffness: 350 }}
      >
        <Link
          to="/turnos-whatsapp"
          className="bg-white text-blue-600 py-4 px-10 rounded-xl shadow-xl text-lg font-bold tracking-wide border-2 border-blue-200 hover:bg-blue-50 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300 animate-pulse"
        >
          Agendar Turno
        </Link>
      </motion.div>
    </div>
  </motion.div>
);

export default HomeCTA;
