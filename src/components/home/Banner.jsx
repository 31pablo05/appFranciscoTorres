import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaClock, FaMapMarkerAlt, FaCalendarDay } from "react-icons/fa";

const Banner = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, type: 'spring', stiffness: 80 }}
      className="mt-14 bg-gradient-to-br from-blue-700 via-blue-500 to-teal-500 text-white p-8 md:p-14 lg:p-20 rounded-3xl shadow-2xl w-full max-w-4xl lg:max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between border-2 border-blue-300/30 relative overflow-hidden"
    >
      {/* Glow decorativo animado */}
      <motion.div
        className="absolute -inset-4 bg-blue-400 opacity-20 blur-2xl pointer-events-none z-0 animate-pulse"
        aria-hidden="true"
      />
      {/* Logo alineado a la izquierda con sombra animada */}
      <div className="flex items-center mb-8 md:mb-0 z-10">
        <motion.img
          src="assets/logo/logoFrancisco1.webp"
          alt="Logo"
          className="h-32 md:h-40 lg:h-48 w-auto mr-6 rounded-2xl shadow-xl border-4 border-white/80 transition-all bg-white/10"
          whileHover={{ scale: 1.12, rotate: 3, boxShadow: "0 0 32px 8px #38bdf8" }}
          animate={{ boxShadow: [
            "0 0 32px 0 #38bdf8",
            "0 0 48px 8px #38bdf8",
            "0 0 32px 0 #38bdf8"
          ] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        />
      </div>
      {/* Contenido del banner con animación stagger */}
      <motion.div
        className="text-center md:text-left flex-1 mb-8 md:mb-0 md:ml-12 lg:ml-24 z-10"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.18 } }
        }}
      >
        <motion.h2
          className="text-3xl md:text-6xl font-extrabold mb-4 md:mb-8 flex items-center gap-3 drop-shadow-lg"
          whileHover={{ scale: 1.03, color: '#fff' }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <FaClock className="text-blue-200 text-3xl md:text-5xl animate-pulse" aria-hidden="true" />
          Horarios de Atención
        </motion.h2>
        <motion.div
          className="flex flex-col gap-3 md:gap-5 my-4"
        >
          <motion.div
            className="bg-white/10 rounded-xl px-3 py-3 shadow-md border border-blue-200/30 flex flex-col md:flex-row md:items-center md:inline-flex gap-1 md:gap-4 w-fit max-w-full"
            whileHover={{ scale: 1.02, backgroundColor: '#fff', color: '#2563eb' }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <div className="flex items-center gap-2 mb-1 md:mb-0">
              <FaCalendarDay className="text-blue-400 text-xl md:text-3xl min-w-[1.5rem] min-h-[1.5rem] md:min-w-[1.75rem] md:min-h-[1.75rem]" aria-hidden="true" />
              <span className="font-semibold text-base md:text-xl">Lunes:</span>
              <span className="text-base md:text-xl">10:30 a 17:00 hs</span>
            </div>
            <div className="flex items-center gap-2 bg-blue-100/30 rounded px-2 py-1 mt-1 md:mt-0">
              <FaMapMarkerAlt className="text-blue-500 text-lg md:text-2xl" aria-hidden="true" />
              <span className="underline text-base md:text-lg">ATM Odontología, Esquel</span>
            </div>
          </motion.div>
          <motion.div
            className="bg-white/10 rounded-xl px-3 py-3 shadow-md border border-blue-200/30 flex flex-col md:flex-row md:items-center md:inline-flex gap-1 md:gap-4 w-fit max-w-full"
            whileHover={{ scale: 1.02, backgroundColor: '#fff', color: '#2563eb' }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <div className="flex items-center gap-2 mb-1 md:mb-0">
              <FaCalendarDay className="text-blue-400 text-xl md:text-3xl min-w-[1.5rem] min-h-[1.5rem] md:min-w-[1.75rem] md:min-h-[1.75rem]" aria-hidden="true" />
              <span className="font-semibold text-base md:text-xl">Martes a Viernes:</span>
              <span className="text-base md:text-xl">16:00 a 20:00 hs</span>
            </div>
            <div className="flex items-center gap-2 bg-blue-100/30 rounded px-2 py-1 mt-1 md:mt-0">
              <FaMapMarkerAlt className="text-blue-500 text-lg md:text-2xl" aria-hidden="true" />
              <span className="underline text-base md:text-lg">Gobernador Costa</span>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
      {/* Botón de "Reservar Turno" con tooltip */}
      <div className="flex justify-center md:justify-start mt-8 md:mt-12 md:ml-12 z-50 relative w-full md:w-auto">
        <motion.div
          whileHover={{ scale: 1.09, boxShadow: "0 0 32px 8px #38bdf8" }}
          transition={{ type: 'spring', stiffness: 350 }}
          className="inline-block"
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
        >
          <Link
            to="/turnos-whatsapp"
            className="bg-white text-blue-700 py-4 px-8 rounded-xl shadow-xl text-lg font-bold tracking-wide border-2 border-blue-200 hover:bg-blue-50 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300"
            aria-label="Reservar Turno"
          >
            Reservar Turno
          </Link>
          {showTooltip && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.3 }}
              className="fixed left-4 right-4 mx-auto bottom-20 md:static md:left-auto md:right-auto md:bottom-auto md:translate-x-0 md:mt-2 bg-blue-700 text-white text-base px-4 py-2 rounded-lg shadow-lg z-[9999] pointer-events-none w-auto max-w-xs md:w-auto md:max-w-none text-center"
              style={{ minWidth: '0', whiteSpace: 'normal', lineHeight: '1.3' }}
            >
              ¡Tu bienestar empieza<br/>con un turno!
            </motion.div>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Banner;
