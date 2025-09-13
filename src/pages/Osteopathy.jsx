import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaStethoscope, FaHandsHelping, FaHeart, FaLeaf, FaBrain, FaEye, FaCheck, FaQuoteLeft, FaUserMd, FaStar } from 'react-icons/fa';
import BeneficiosOsteopatia from '../components/osteopathy/BeneficiosOsteopatia';
import FAQ from '../components/osteopathy/FAQ';

const Osteopathy = () => {
  const principles = [
    {
      icon: FaHeart,
      title: "El cuerpo es una unidad",
      description: "Todos los sistemas están interconectados. El sistema musculoesquelético, nervioso y circulatorio trabajan en sinergia para mantener la homeostasis y la salud global.",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: FaLeaf,
      title: "Capacidad de autorregulación",
      description: "El cuerpo posee mecanismos innatos de reparación y equilibrio. La osteopatía libera restricciones para optimizar estos procesos fisiológicos.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: FaBrain,
      title: "Estructura y función",
      description: "Una alteración en la alineación articular o tensión muscular puede afectar el funcionamiento de órganos y sistemas, influyendo en el bienestar general.",
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: FaHandsHelping,
      title: "Tratamiento integral",
      description: "Identificamos el origen del trauma (físico, químico o emocional) para restaurar el equilibrio del cuerpo de manera holística.",
      color: "from-blue-500 to-cyan-500"
    }
  ];

  const techniques = [
    {
      title: "Manipulaciones Articulares",
      description: "Técnicas específicas para restaurar la movilidad articular",
      icon: "🦴"
    },
    {
      title: "Masajes Terapéuticos",
      description: "Relajación muscular y mejora de la circulación",
      icon: "👐"
    },
    {
      title: "Estiramientos Dirigidos",
      description: "Elongación controlada para mejorar la flexibilidad",
      icon: "🤸"
    },
    {
      title: "Ejercicios Terapéuticos",
      description: "Fortalecimiento y reeducación del movimiento",
      icon: "💪"
    }
  ];

  const conditions = [
    "Dolores de espalda y cuello",
    "Migrañas y cefaleas",
    "Lesiones deportivas",
    "Trastornos digestivos",
    "Problemas respiratorios",
    "Estrés y tensión muscular",
    "Trastornos del sueño",
    "Problemas posturales"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
      
      {/* Hero Section */}
      <motion.section
        className="relative pt-32 pb-20 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Efectos de fondo */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl"
            animate={{ 
              scale: [1.2, 1, 1.2],
              opacity: [0.4, 0.7, 0.4]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            className="flex items-center justify-center gap-4 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <motion.div
              className="p-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl shadow-2xl"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <FaStethoscope className="text-white text-3xl" />
            </motion.div>
            <h1 className="text-4xl lg:text-6xl font-bold">
              ¿Qué es la{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Osteopatía?
              </span>
            </h1>
          </motion.div>
          
          <motion.p
            className="text-xl lg:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Una práctica terapéutica integral que reconoce la capacidad natural del cuerpo para curarse y mantenerse saludable, 
            centrándose en la interconexión entre el sistema musculoesquelético y el bienestar general.
          </motion.p>

          <motion.div
            className="max-w-5xl mx-auto mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <div className="p-8 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
              <p className="text-lg text-blue-100 leading-relaxed mb-6">
                La <strong className="text-cyan-300">osteopatía</strong> es una práctica terapéutica basada en la idea de que el cuerpo humano tiene una capacidad natural para curarse y mantenerse saludable. Los osteópatas se centran en el sistema musculoesquelético (huesos, músculos, articulaciones y tejidos conectivos) y en su relación con el sistema neurovegetativo, ya que ambos influyen en el equilibrio y bienestar general del organismo.
              </p>
              <p className="text-lg text-blue-100 leading-relaxed">
                La osteopatía utiliza una variedad de técnicas manuales, como masajes, manipulaciones articulares, estiramientos y ejercicios terapéuticos, para aliviar el dolor y mejorar el funcionamiento del cuerpo. En términos más simples, los osteópatas creen que muchas enfermedades y dolencias pueden estar relacionadas con partes del cuerpo que han perdido su capacidad de moverse correctamente. Al corregir estos desajustes, el cuerpo puede funcionar mejor y sanar de forma más eficaz.
              </p>
            </div>
          </motion.div>

          {/* Estadísticas visuales */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            {[
              { number: "100%", label: "Natural", icon: FaLeaf },
              { number: "0", label: "Efectos Secundarios", icon: FaHeart },
              { number: "360°", label: "Enfoque Integral", icon: FaEye },
              { number: "∞", label: "Beneficios Duraderos", icon: FaStar }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <stat.icon className="text-cyan-400 text-2xl mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">{stat.number}</div>
                <div className="text-blue-200 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Galería Visual Mejorada */}
      <motion.section
        className="py-20 bg-gradient-to-r from-blue-800/20 to-cyan-800/20 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Visualiza la{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Osteopatía
              </span>
            </h2>
            <p className="text-blue-200 text-lg">Técnicas profesionales para tu bienestar integral</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                src: 'assets/webp/osteopathy2.webp',
                alt: 'Modelo de columna vertebral osteopático',
                title: "Análisis Estructural",
                description: "Evaluación detallada del sistema musculoesquelético"
              },
              {
                src: 'assets/webp/spine-model-standing-desk-unrecognizable-doctor.webp',
                alt: 'Técnicas osteopáticas para columna',
                title: "Técnicas Especializadas",
                description: "Tratamientos específicos para cada necesidad"
              },
              {
                src: 'assets/webp/osteopathy.webp',
                alt: 'Tratamiento osteopático de columna',
                title: "Terapia Manual",
                description: "Manipulaciones precisas y terapéuticas"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="group relative bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 overflow-hidden hover:bg-white/15 transition-all duration-500"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="aspect-w-16 aspect-h-12 overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-white font-bold text-xl mb-2">{item.title}</h3>
                  <p className="text-blue-200 text-sm">{item.description}</p>
                </div>
                
                {/* Overlay con gradiente */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Principios Fundamentales con Sistema Nervioso */}
      <motion.section
        className="py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Principios{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Fundamentales
              </span>
            </h2>
            <p className="text-blue-200 text-lg">Las bases científicas que sustentan la práctica osteopática</p>
          </motion.div>

          {/* Layout con imágenes del sistema nervioso y principios */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            
            {/* Columna izquierda: Imágenes del sistema nervioso */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold text-cyan-200 mb-6 text-center">Sistema Neurovegetativo</h3>
              
              {[
                {
                  src: 'assets/webp/sistema-nervioso1.webp',
                  alt: 'Sistema nervioso 1 - Anatomía neurológica'
                },
                {
                  src: 'assets/webp/sistema-nervioso2.webp',
                  alt: 'Sistema nervioso 2 - Conexiones neurales'
                }
              ].map((img, index) => (
                <motion.div
                  key={index}
                  className="group relative bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 overflow-hidden hover:bg-white/15 transition-all duration-500"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className="aspect-w-4 aspect-h-5 min-h-[320px] max-h-[480px] flex items-center justify-center p-4">
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-500 bg-white rounded-lg"
                      loading="lazy"
                    />
                  </div>
                  
                  {/* Overlay informativo */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <p className="text-white text-sm font-medium">
                      {index === 0 ? "Anatomía del sistema nervioso central y periférico" : "Interconexiones neurales y su impacto en la salud"}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Columna derecha: Principios fundamentales */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h3 className="text-2xl font-bold text-cyan-200 mb-6">Fundamentos Científicos</h3>
              
              {principles.map((principle, index) => (
                <motion.div
                  key={index}
                  className="group relative p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-500"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ y: -3 }}
                >
                  {/* Gradiente de fondo animado */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${principle.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}
                  />
                  
                  <div className="relative z-10">
                    <div className="flex items-start gap-4 mb-3">
                      <motion.div
                        className={`p-3 bg-gradient-to-br ${principle.color} rounded-xl shadow-lg flex-shrink-0`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <principle.icon className="text-white text-xl" />
                      </motion.div>
                      
                      <div>
                        <h4 className="text-white font-bold text-lg mb-2">{principle.title}</h4>
                        <p className="text-blue-200 text-sm leading-relaxed">{principle.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
              
              {/* Principio adicional destacado */}
              <motion.div
                className="p-6 bg-gradient-to-br from-amber-600/20 to-orange-600/20 backdrop-blur-sm rounded-2xl border border-amber-400/30"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.9 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-3 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl">
                    <FaStethoscope className="text-white text-xl" />
                  </div>
                  <h4 className="text-amber-200 font-bold text-lg">Enfoque Integral</h4>
                </div>
                <p className="text-amber-100 text-sm leading-relaxed font-medium">
                  <strong>El tratamiento osteopático se basa en identificar el origen del trauma, que puede ser de origen físico, químico o emocional, restaurando así el equilibrio del cuerpo de manera integral.</strong>
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Técnicas y Métodos */}
      <motion.section
        className="py-20 bg-gradient-to-r from-cyan-800/20 to-blue-800/20 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Técnicas{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Terapéuticas
              </span>
            </h2>
            <p className="text-blue-200 text-lg">Métodos especializados para tu recuperación</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {techniques.map((technique, index) => (
              <motion.div
                key={index}
                className="group text-center p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <motion.div
                  className="text-4xl mb-4"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {technique.icon}
                </motion.div>
                <h3 className="text-white font-bold text-lg mb-2">{technique.title}</h3>
                <p className="text-blue-200 text-sm">{technique.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Condiciones Tratadas */}
      <motion.section
        className="py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              ¿Qué condiciones{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                tratamos?
              </span>
            </h2>
            <p className="text-blue-200 text-lg">Amplio espectro de afecciones que pueden beneficiarse</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {conditions.map((condition, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-3 p-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 hover:bg-white/15 transition-all duration-300"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ x: 5 }}
              >
                <FaCheck className="text-green-400 text-lg flex-shrink-0" />
                <span className="text-white font-medium">{condition}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Testimonial */}
      <motion.section
        className="py-20 bg-gradient-to-r from-blue-800/20 to-indigo-800/20 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            className="relative p-8 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <FaQuoteLeft className="absolute top-4 left-4 text-cyan-400/60 text-3xl" />
            
            <motion.blockquote
              className="text-2xl lg:text-3xl text-white font-medium leading-relaxed mb-6 mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              &ldquo;La osteopatía no solo trata los síntomas, sino que busca las causas profundas del desequilibrio, 
              permitiendo una recuperación integral y duradera.&rdquo;
            </motion.blockquote>
            
            <motion.div
              className="flex items-center justify-center gap-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <FaUserMd className="text-cyan-400 text-xl" />
              <span className="text-cyan-200 font-semibold">Francisco Torres, Osteópata Profesional</span>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Componentes modulares existentes */}
      <BeneficiosOsteopatia />
      <FAQ />

      {/* CTA Final Rediseñado */}
      <motion.section
        className="py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            className="relative p-12 bg-gradient-to-br from-cyan-600/20 to-blue-600/20 backdrop-blur-xl rounded-3xl border border-cyan-400/30 overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Efectos de fondo */}
            <motion.div
              className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-400/20 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
            
            <div className="relative z-10 space-y-8">
              <motion.h2
                className="text-3xl lg:text-4xl font-bold text-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                ¿Listo para comenzar tu{' '}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  recuperación?
                </span>
              </motion.h2>
              
              <motion.p
                className="text-xl text-blue-100 leading-relaxed max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                Experimenta un tratamiento osteopático personalizado. Tu bienestar integral está a un mensaje de distancia.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                <Link 
                  to="/turnos-whatsapp" 
                  className="group inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-4 rounded-2xl text-xl font-bold shadow-2xl hover:shadow-green-500/50 transition-all duration-300 hover:scale-105"
                >
                  <motion.div
                    animate={{ rotate: [0, 15, -15, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    📱
                  </motion.div>
                  <span>Agenda tu Consulta</span>
                  <motion.div
                    className="w-2 h-2 bg-white rounded-full"
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </Link>
              </motion.div>
              
              <motion.p
                className="text-cyan-200 text-sm"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
              >
                ✨ Respuesta inmediata por WhatsApp • Consulta personalizada • Tratamiento profesional
              </motion.p>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Osteopathy;
