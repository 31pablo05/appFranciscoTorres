import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaWhatsapp, FaCalendarAlt, FaHandHoldingMedical, FaHeart, FaCheckCircle } from "react-icons/fa";

const HomeCTA = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, type: 'spring', stiffness: 80 } }
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

  const features = [
    { icon: FaHandHoldingMedical, text: "Enfoque personalizado" },
    { icon: FaHeart, text: "Terapias avanzadas" },
    { icon: FaCheckCircle, text: "Resultados desde la primera sesión" }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 relative overflow-hidden">
      {/* Background with animated elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 via-teal-600/30 to-blue-800/50 backdrop-blur-sm" />
      
      {/* Floating orbs animation */}
      <motion.div
        className="absolute top-10 left-10 w-32 h-32 bg-cyan-400/20 rounded-full blur-xl"
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-48 h-48 bg-blue-400/20 rounded-full blur-2xl"
        animate={{
          y: [0, 15, 0],
          x: [0, -15, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="max-w-6xl mx-auto relative z-10"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Main Content */}
        <motion.div
          className="text-center mb-12"
          variants={fadeInUp}
        >
          <motion.h2
            className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight"
            variants={fadeInUp}
          >
            ¿Listo para comenzar tu{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300">
              recuperación?
            </span>
          </motion.h2>
          
          {/* Professional Quote */}
          <motion.div
            className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20 mb-12 relative overflow-hidden"
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            {/* Quote decoration */}
            <div className="absolute top-4 left-6 text-6xl text-cyan-300/30 font-serif">&ldquo;</div>
            <div className="absolute bottom-4 right-6 text-6xl text-cyan-300/30 font-serif rotate-180">&rdquo;</div>
            
            <motion.p
              className="text-xl md:text-2xl text-white font-medium leading-relaxed relative z-10 max-w-4xl mx-auto"
              variants={fadeInUp}
            >
              <span className="text-cyan-200 font-semibold">No te acostumbres al dolor.</span>{" "}
              Con un enfoque personalizado y terapias avanzadas, te ayudamos a recuperar tu bienestar físico y a mejorar tu calidad de vida.{" "}
              <span className="text-cyan-200 font-semibold">Agenda tu cita hoy y siente la diferencia desde la primera sesión.</span>
            </motion.p>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            className="grid md:grid-cols-3 gap-6 mb-12"
            variants={fadeInUp}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <feature.icon className="text-white text-xl" />
                </motion.div>
                <p className="text-blue-200 font-medium">{feature.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          variants={fadeInUp}
        >
          {/* WhatsApp Button */}
          <motion.a
            href="https://wa.me/5492945416969"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-full text-lg font-bold flex items-center gap-4 shadow-2xl overflow-hidden"
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0 25px 50px rgba(34, 197, 94, 0.4)" 
            }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Animated background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-500"
              initial={{ x: "-100%" }}
              whileHover={{ x: "0%" }}
              transition={{ duration: 0.3 }}
            />
            
            <FaWhatsapp className="text-2xl relative z-10" />
            <span className="relative z-10">Agendar por WhatsApp</span>
            
            {/* Shine effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            />
          </motion.a>

          {/* Secondary Button */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/osteopathy"
              className="group bg-white/10 backdrop-blur-md border-2 border-white/30 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-white/20 transition-all duration-300 flex items-center gap-3"
            >
              <FaCalendarAlt className="text-xl group-hover:rotate-12 transition-transform duration-300" />
              Conocer Tratamientos
            </Link>
          </motion.div>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          className="mt-12 text-center"
          variants={fadeInUp}
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-blue-200">
            <div className="flex items-center gap-2">
              <FaCheckCircle className="text-green-400" />
              <span className="text-sm">8+ años de experiencia</span>
            </div>
            <div className="flex items-center gap-2">
              <FaCheckCircle className="text-green-400" />
              <span className="text-sm">Tratamientos personalizados</span>
            </div>
            <div className="flex items-center gap-2">
              <FaCheckCircle className="text-green-400" />
              <span className="text-sm">Resultados comprobados</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HomeCTA;
