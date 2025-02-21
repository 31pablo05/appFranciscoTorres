import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.6 }}
      className="mt-12 bg-blue-500 text-white p-6 md:p-12 lg:p-16 rounded-3xl shadow-xl w-full mx-auto flex flex-col md:flex-row items-center justify-between"
    >
      {/* Logo alineado a la izquierda */}
      <div className="flex items-center mb-6 md:mb-0">
        <motion.img
          src="assets/logo/logoFrancisco1.webp" // Cambia la ruta si es necesario
          alt="Logo"
          className="h-32 md:h-40 lg:h-48 w-auto mr-6 rounded-lg shadow-lg border-4 border-white transition-all"
          whileHover={{ scale: 1.1, rotate: 2 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        />
      </div>

      {/* Contenido del banner */}
      <div className="text-center md:text-left flex-1 mb-6 md:mb-0 md:ml-12 lg:ml-24">
        <motion.h2 
          className="text-3xl md:text-6xl font-bold mb-4 md:mb-8"
          whileHover={{ scale: 1.02 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          Horarios de Atención
        </motion.h2>
        <motion.p 
          className="text-lg md:text-3xl text-justify"
          whileHover={{ scale: 1.01 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <span className="font-semibold">Lunes:</span> 10:30 a 17:00 hs en{" "}
          <span className="underline">ATM Odontología, Esquel</span>.
        </motion.p>
        <motion.p 
          className="text-lg md:text-3xl text-justify mt-4"
          whileHover={{ scale: 1.01 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <span className="font-semibold">Martes a Viernes:</span> 16:00 a 20:00 hs en{" "}
          <span className="underline">Gobernador Costa</span>.
        </motion.p>
      </div>

      {/* Botón de "Reservar Turno" */}
      <div className="flex justify-center md:justify-start mt-6 md:mt-0">
        <motion.div whileHover={{ scale: 1.05 }}>
          <Link
            to="/turnos-whatsapp"
            className="bg-white text-blue-600 py-3 px-6 md:py-4 md:px-8 rounded-lg shadow-xl transition-all transform text-lg font-medium hover:bg-blue-600 hover:text-white"
            aria-label="Reservar Turno"
          >
            Reservar Turno
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Banner;
