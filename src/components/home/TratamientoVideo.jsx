import { motion } from "framer-motion";
import { FaPlay, FaVideo, FaHandHoldingMedical, FaCheckCircle } from "react-icons/fa";
import { useState } from "react";

const TratamientoVideo = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, type: 'spring', stiffness: 80 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const beneficios = [
    "Técnicas manuales suaves",
    "Tratamiento personalizado",
    "Mejora inmediata del dolor",
    "Enfoque integral del paciente"
  ];

  return (
    <section className="py-20 px-4 sm:px-6">
      <motion.div
        className="max-w-7xl mx-auto"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          variants={fadeInUp}
        >
          <motion.div
            className="flex items-center justify-center gap-3 mb-4"
            variants={fadeInUp}
          >
            <FaVideo className="text-cyan-300 text-3xl" />
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              ¿Cómo es el <span className="text-cyan-300">Tratamiento</span>?
            </h2>
          </motion.div>
          <motion.p 
            className="text-xl text-blue-200 max-w-3xl mx-auto"
            variants={fadeInUp}
          >
            Descubre de primera mano cómo realizamos nuestros tratamientos osteopáticos personalizados
          </motion.p>
        </motion.div>

        {/* Video y Contenido */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Video Section */}
          <motion.div
            variants={fadeInUp}
            className="relative"
          >
            <motion.div
              className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20 shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Video Container */}
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-blue-900 to-teal-800 shadow-xl">
                
                {/* Video Element */}
                <motion.video
                  className="w-full h-full object-cover"
                  controls
                  poster="/assets/webp/osteopathy.webp"
                  onLoadedData={() => setIsVideoLoaded(true)}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <source src="/assets/videos/osteopatia6.webm" type="video/webm" />
                  <source src="/assets/videos/osteopatia6.mp4" type="video/mp4" />
                  Tu navegador no soporta el formato de video.
                </motion.video>

                {/* Play Overlay (antes de cargar) */}
                {!isVideoLoaded && (
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: isVideoLoaded ? 0 : 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <motion.div
                      className="bg-white/20 backdrop-blur-md rounded-full p-6 border border-white/30"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaPlay className="text-white text-3xl ml-1" />
                    </motion.div>
                  </motion.div>
                )}

                {/* Decorative corners */}
                <div className="absolute top-4 left-4 w-6 h-6 border-l-2 border-t-2 border-cyan-300 rounded-tl-lg" />
                <div className="absolute top-4 right-4 w-6 h-6 border-r-2 border-t-2 border-cyan-300 rounded-tr-lg" />
                <div className="absolute bottom-4 left-4 w-6 h-6 border-l-2 border-b-2 border-cyan-300 rounded-bl-lg" />
                <div className="absolute bottom-4 right-4 w-6 h-6 border-r-2 border-b-2 border-cyan-300 rounded-br-lg" />
              </div>

              {/* Video Info */}
              <motion.div
                className="mt-6 text-center"
                variants={fadeInUp}
              >
                <div className="flex items-center justify-center gap-2 text-cyan-300 mb-2">
                  <FaHandHoldingMedical className="text-xl" />
                  <span className="font-semibold">Tratamiento Real</span>
                </div>
                <p className="text-blue-200 text-sm">
                  Video demostrativo de técnicas osteopáticas aplicadas
                </p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            variants={fadeInUp}
            className="space-y-8"
          >
            {/* Main Description */}
            <motion.div
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20"
              variants={fadeInUp}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Proceso de Tratamiento Osteopático
              </h3>
              <p className="text-blue-200 text-lg leading-relaxed mb-6">
                Cada sesión está cuidadosamente diseñada para abordar tus necesidades específicas. 
                Utilizamos técnicas manuales suaves y precisas que trabajan en armonía con los 
                mecanismos naturales de curación de tu cuerpo.
              </p>
              
              {/* Benefits List */}
              <div className="space-y-3">
                {beneficios.map((beneficio, index) => (
                  <motion.div
                    key={beneficio}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      className="w-6 h-6 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center"
                      whileHover={{ scale: 1.2 }}
                    >
                      <FaCheckCircle className="text-white text-sm" />
                    </motion.div>
                    <span className="text-blue-100 font-medium">{beneficio}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Call to Action */}
            <motion.div
              className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-md rounded-2xl p-6 border border-cyan-300/30"
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <h4 className="text-xl font-bold text-white mb-3">
                ¿Listo para experimentar estos beneficios?
              </h4>
              <p className="text-blue-200 mb-4">
                Agenda tu consulta y descubre cómo podemos ayudarte a mejorar tu calidad de vida
              </p>
              <motion.a
                href="https://wa.me/5492945416969"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaHandHoldingMedical className="text-xl" />
                Agendar Consulta
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default TratamientoVideo;