import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => (
  <div className="w-full flex flex-col items-center relative pt-32 md:pt-44 pb-8">
    {/* Fondo oscuro solo para el h1 */}
    <div className="w-full max-w-lg flex flex-col items-center">
      <motion.div
        className="bg-black bg-opacity-60 rounded-3xl shadow-2xl backdrop-blur-md px-4 py-6 mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <h1 className="z-20 text-3xl md:text-5xl font-extrabold leading-snug text-white tracking-tight drop-shadow-lg text-center">
          Lic.{" "}
          <span className="text-blue-400">Francisco Torres</span>
          <br />
          <span className="text-2xl md:text-3xl font-medium text-white text-opacity-80">
            Osteopatía & Kinesiología
          </span>
        </h1>
      </motion.div>
      {/* Imagen debajo del título, separada */}
      <motion.div
        className="w-full flex justify-center z-10"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        whileInView={{ opacity: 1 }}
      >
        <img
          src="/assets/webp/frantransparente3.webp"
          alt="Francisco Torres, osteópata profesional, con amplia experiencia en tratamientos de osteopatía y kinesiología"
          className="rounded-3xl shadow-2xl w-full max-w-lg object-cover border-4 border-blue-100 md:transition-all md:duration-300 md:hover:scale-105"
        />
      </motion.div>
    </div>
  </div>
);

export default HeroSection;
