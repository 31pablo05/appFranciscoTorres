import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaHandsHelping, FaStethoscope, FaQuoteLeft } from 'react-icons/fa';

const AboutProfile = () => {
  const highlights = [
    {
      icon: FaGraduationCap,
      title: "Formación Profesional",
      description: "Título habilitante en Osteopatía",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: FaHandsHelping,
      title: "Enfoque Integral",
      description: "Tratamiento personalizado",
      color: "from-cyan-500 to-teal-500"
    },
    {
      icon: FaStethoscope,
      title: "Experiencia Clínica",
      description: "Años de práctica especializada",
      color: "from-teal-500 to-emerald-500"
    }
  ];

  return (
    <div className="relative w-full max-w-7xl mx-auto mb-16">
      {/* Efectos de fondo */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-400/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Sección de imagen mejorada */}
        <motion.div
          className="flex justify-center lg:justify-start order-1 lg:order-1"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative group">
            {/* Container principal de la imagen */}
            <motion.div
              className="relative w-80 h-96 sm:w-96 sm:h-[28rem] overflow-hidden rounded-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              {/* Imagen principal */}
              <motion.img
                src="assets/webp/francisco1.webp"
                alt="Francisco Torres - Osteópata Profesional"
                className="w-full h-full object-cover object-top transition-all duration-700 group-hover:scale-110"
                loading="lazy"
                whileHover={{ filter: "brightness(1.1)" }}
              />
              
              {/* Overlay con gradiente */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent pointer-events-none" />
              
              
            </motion.div>

            {/* Efectos decorativos */}
            <motion.div
              className="absolute -inset-4 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
            
            {/* Puntos decorativos */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-br from-cyan-400/40 to-blue-500/40 rounded-full blur-2xl"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-blue-400/30 to-indigo-500/30 rounded-full blur-2xl"></div>
          </div>
        </motion.div>

        {/* Sección de contenido mejorada */}
        <motion.div
          className="space-y-8 order-2 lg:order-2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* Saludo principal */}
          <div className="space-y-4">
            <motion.div
              className="flex items-center gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <motion.span
                className="text-4xl"
                animate={{ rotate: [0, 15, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
              >
                👋
              </motion.span>
              <h2 className="text-2xl lg:text-3xl font-bold text-white">
                Hola, soy{' '}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Francisco Torres
                </span>
              </h2>
            </motion.div>
            
            <motion.p
              className="text-xl lg:text-2xl font-semibold text-cyan-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              Osteópata Profesional
            </motion.p>
          </div>

          {/* Cita profesional */}
          <motion.div
            className="relative p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            whileHover={{ scale: 1.02 }}
          >
            <FaQuoteLeft className="absolute top-4 left-4 text-cyan-400/60 text-2xl" />
            <blockquote className="text-white/90 text-lg leading-relaxed mt-4 italic">
              &ldquo;Mi pasión es acompañarte en el camino hacia un cuerpo más saludable. Como osteópata, mi compromiso es ayudarte a recuperar tu bienestar físico, aliviando el dolor y mejorando tu movilidad.&rdquo;
            </blockquote>
            <div className="mt-4 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"></div>
            <p className="text-cyan-200 text-sm mt-3 font-medium">
              Mi objetivo es proporcionarte las herramientas necesarias para que el bienestar sea una parte integral de tu vida.
            </p>
          </motion.div>

          {/* Highlights profesionales */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                className="group p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className="text-white text-xl" />
                </div>
                <h3 className="text-white font-semibold text-sm mb-1">{item.title}</h3>
                <p className="text-white/70 text-xs">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutProfile;
