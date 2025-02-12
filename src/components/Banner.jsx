import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="bg-blue-500 text-white p-6 md:p-12 lg:p-16 rounded-3xl shadow-xl w-full mx-auto flex flex-col md:flex-row items-center justify-between">
      {/* Logo alineado a la izquierda */}
      <div className="flex items-center mb-6 md:mb-0">
        <img
          src="assets/logo/logoFrancisco1.webp" // Cambia esta ruta por la ubicación de tu logo
          alt="Logo"
          className="h-32 md:h-40 lg:h-48 w-auto mr-6 rounded-lg shadow-lg border-4 border-white transform transition-all hover:scale-105 hover:shadow-2xl"
        />
      </div>

      {/* Contenido del banner */}
      <div className="text-center md:text-left flex-1 mb-6 md:mb-0 md:ml-12 lg:ml-24">
        <h2 className="text-3xl md:text-6xl font-bold mb-4 md:mb-8">Horarios de Atención</h2>
        <p className="text-lg md:text-3xl">
          <span className="font-semibold text-x3">Lunes:</span> 10:30 a 17:00 hs en{" "}
          <span className="underline">ATM Odontología, Esquel</span>.
        </p>
        <p className="text-lg md:text-3xl mt-4">
          <span className="font-semibold text-x3">Martes a Viernes:</span> 16:00 a 20:00 hs en{" "}
          <span className="underline">Gobernador Costa</span>.
        </p>
      </div>

      {/* Botón de "Reservar Turno" */}
      <div className="flex justify-center md:justify-start mt-6 md:mt-0">
        <Link
          to="/turnos-whatsapp"
          className="bg-white text-blue-600 py-3 px-6 md:py-4 md:px-8 rounded-lg shadow-xl hover:bg-blue-600 hover:text-white transition-all transform hover:scale-105 text-lg font-medium"
          aria-label="Reservar Turno"
        >
          Reservar Turno
        </Link>
      </div>
    </div>
  );
};

export default Banner;
