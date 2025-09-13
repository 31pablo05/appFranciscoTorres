import { motion } from "framer-motion";
import { FaUserMd, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

const HeroSection = () => {
  // Animaciones
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, type: 'spring', stiffness: 80 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 pt-40">
      {/* Efectos de fondo */}
      <div className="absolute inset-0 bg-black/20" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-400/20 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <motion.div 
        className="relative z-10 max-w-7xl mx-auto"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {/* Layout para Desktop: Grid de 2 columnas */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-center">
          {/* Contenido Principal - Desktop */}
          <motion.div variants={fadeInUp} className="text-center lg:text-left">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
              variants={fadeInUp}
            >
              Lic. <span className="text-cyan-300">Francisco</span>
              <br />
              <span className="text-cyan-300">Torres</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-blue-100 mb-4 font-light"
              variants={fadeInUp}
            >
              Osteopatía & Kinesiología
            </motion.p>
            
            <motion.p 
              className="text-lg text-blue-200 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed"
              variants={fadeInUp}
            >
              Recupera tu bienestar con tratamientos personalizados. 
              Más de 10 años de experiencia ayudando a mejorar tu calidad de vida.
            </motion.p>

            {/* Botones de Acción - Desktop */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              variants={fadeInUp}
            >
              <motion.a
                href="https://wa.me/5492945416969"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold flex items-center justify-center gap-3 transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaWhatsapp className="text-xl" />
                Reservar Turno
              </motion.a>
              
              <motion.button
                className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/20 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/about" className="flex items-center justify-center gap-3">
                  <FaUserMd />
                  Conocer más
                </Link>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Imagen del Profesional - Desktop */}
          <motion.div 
            variants={fadeInUp}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              <motion.img
                src="/assets/webp/frantransparente3.webp"
                alt="Francisco Torres - Osteópata Profesional"
                className="w-full max-w-md rounded-3xl shadow-2xl border-4 border-white/20"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Badge flotante */}
              <motion.div
                className="absolute -top-4 -right-4 bg-cyan-400 text-blue-900 px-4 py-2 rounded-full font-bold text-sm shadow-lg"
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                +10 años experiencia
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Layout para Mobile: Columna vertical */}
        <div className="lg:hidden flex flex-col items-center text-center space-y-8">
          {/* Título - Mobile (Arriba) */}
          <motion.div variants={fadeInUp}>
            <motion.h1 
              className="text-4xl md:text-5xl font-bold text-white mb-2 leading-tight"
              variants={fadeInUp}
            >
              Lic. <span className="text-cyan-300">Francisco</span>
              <br />
              <span className="text-cyan-300">Torres</span>
            </motion.h1>
          </motion.div>

          {/* Imagen del Profesional - Mobile (Centro) */}
          <motion.div 
            variants={fadeInUp}
            className="relative flex justify-center"
          >
            <div className="relative">
              <motion.img
                src="/assets/webp/frantransparente3.webp"
                alt="Francisco Torres - Osteópata Profesional"
                className="w-full max-w-sm rounded-3xl shadow-2xl border-4 border-white/20"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Badge flotante */}
              <motion.div
                className="absolute -top-4 -right-4 bg-cyan-400 text-blue-900 px-3 py-2 rounded-full font-bold text-sm shadow-lg"
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                +10 años experiencia
              </motion.div>
            </div>
          </motion.div>

          {/* Contenido y Botones - Mobile (Abajo) */}
          <motion.div variants={fadeInUp} className="space-y-6">
            <motion.p 
              className="text-xl text-blue-100 mb-3 font-light"
              variants={fadeInUp}
            >
              Osteopatía & Kinesiología
            </motion.p>
            
            <motion.p 
              className="text-lg text-blue-200 mb-6 max-w-md mx-auto leading-relaxed"
              variants={fadeInUp}
            >
              Recupera tu bienestar con tratamientos personalizados. 
              Más de 8 años de experiencia ayudando a mejorar tu calidad de vida.
            </motion.p>

            {/* Botones de Acción - Mobile */}
            <motion.div 
              className="flex flex-col gap-4"
              variants={fadeInUp}
            >
              <motion.a
                href="https://wa.me/5492945416969"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold flex items-center justify-center gap-3 transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaWhatsapp className="text-xl" />
                Reservar Turno
              </motion.a>
              
              <motion.button
                className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/20 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/about" className="flex items-center justify-center gap-3">
                  <FaUserMd />
                  Conocer más
                </Link>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
