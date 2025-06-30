import React from "react";
import { motion } from "framer-motion";

const beneficios = [
  'Alivio del dolor muscular, articular y tensional',
  'Mejora la movilidad y flexibilidad corporal',
  'Optimiza la postura y corrige desequilibrios biomecánicos',
  'Reduce el estrés y mejora la calidad del sueño',
  'Favorece la circulación sanguínea y el drenaje linfático',
  'Fortalece el sistema inmunológico y la recuperación física',
  

];

const BeneficiosOsteopatia = () => (
  <section className="w-full max-w-xl mx-auto py-12 px-4 md:px-8 bg-white/90 rounded-3xl shadow-2xl border border-blue-100 flex flex-col items-center">
    <motion.h2
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="text-3xl md:text-4xl font-extrabold text-blue-700 mb-8 text-center drop-shadow-lg tracking-tight"
    >
      Beneficios de la Osteopatía
    </motion.h2>
    <ul className="w-full flex flex-col gap-6">
      {beneficios.map((beneficio, idx) => (
        <motion.li
          key={beneficio}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: idx * 0.10 }}
          className="relative bg-gradient-to-r from-blue-100 via-white to-teal-50 rounded-2xl shadow-md px-6 py-5 text-lg md:text-xl font-semibold text-blue-900 flex items-center gap-4 border-l-4 border-blue-400 hover:scale-[1.025] hover:shadow-xl transition-all duration-300 group"
          tabIndex={0}
          aria-label={beneficio}
        >
          <span className="inline-block w-3 h-3 rounded-full bg-blue-400 animate-pulse group-hover:bg-teal-400 transition-colors"></span>
          <span className="leading-relaxed drop-shadow-sm">
            {beneficio}
          </span>
        </motion.li>
      ))}
    </ul>
  </section>
);

export default BeneficiosOsteopatia;
