import { motion } from "framer-motion";
import { FaRunning, FaBrain, FaBone, FaHeartbeat, FaHandHoldingMedical, FaUtensils, FaChild, FaTeeth } from "react-icons/fa";

const aplicaciones = [
  { 
    title: "Dolor musculoesquelético", 
    desc: "Tratamiento para molestias en espalda, cuello, hombros y extremidades mediante técnicas osteopáticas.", 
    icon: <FaBone />,
    color: "from-emerald-400 to-teal-500"
  },
  { 
    title: "Dolores articulares", 
    desc: "Alivio de rigidez y dolor en articulaciones como rodillas, codos, muñecas y tobillos.", 
    icon: <FaHandHoldingMedical />,
    color: "from-blue-400 to-indigo-500"
  },
  { 
    title: "Dolores de cabeza y migrañas", 
    desc: "Osteopatía craneal para reducir tensiones en la cabeza y cuello que pueden provocar cefaleas y migrañas.", 
    icon: <FaBrain />,
    color: "from-purple-400 to-violet-500"
  },
  { 
    title: "Trastornos digestivos", 
    desc: "Mejoras en la función digestiva a través de técnicas osteopáticas para aliviar estreñimiento, dispepsia y colon irritable.", 
    icon: <FaUtensils />,
    color: "from-orange-400 to-red-500"
  },
  { 
    title: "Lesiones deportivas", 
    desc: "Rehabilitación y prevención de lesiones musculares, esguinces y tendinitis para optimizar el rendimiento físico.", 
    icon: <FaRunning />,
    color: "from-green-400 to-emerald-500"
  },
  { 
    title: "Dolores posturales", 
    desc: "Corrección de desequilibrios musculares y posturales derivados de tensiones prolongadas.", 
    icon: <FaChild />,
    color: "from-pink-400 to-rose-500"
  },
  { 
    title: "Trastornos temporomandibulares", 
    desc: "Alivio del dolor y la disfunción de la articulación temporomandibular mediante técnicas manuales específicas.", 
    icon: <FaTeeth />,
    color: "from-cyan-400 to-blue-500"
  },
  { 
    title: "Problemas circulatorios", 
    desc: "Mejoras en la circulación sanguínea y linfática para reducir hinchazón y sensación de pesadez en piernas y pies.", 
    icon: <FaHeartbeat />,
    color: "from-red-400 to-pink-500"
  }
];

const AplicacionesOsteopatia = () => {
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

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6">
      <motion.div
        className="max-w-7xl mx-auto"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Header */}
        <motion.div 
          className="text-center mb-12 sm:mb-16"
          variants={fadeInUp}
        >
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6"
            variants={fadeInUp}
          >
            Aplicaciones de la <span className="text-cyan-300">Osteopatía</span>
          </motion.h2>
          <motion.p 
            className="text-lg sm:text-xl text-blue-200 max-w-3xl mx-auto px-2"
            variants={fadeInUp}
          >
            Descubre cómo la osteopatía puede ayudarte en diferentes áreas de tu salud y bienestar
          </motion.p>
        </motion.div>

        {/* Grid de Aplicaciones */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {aplicaciones.map((aplicacion) => (
            <motion.div
              key={aplicacion.title}
              variants={fadeInUp}
              className="group"
            >
              <motion.div
                className="bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-6 border border-white/20 h-full relative overflow-hidden"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 25px 50px rgba(0,0,0,0.2)"
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Glow effect on hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${aplicacion.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />
                
                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${aplicacion.color} flex items-center justify-center mb-3 sm:mb-4 shadow-lg`}
                    whileHover={{ 
                      scale: 1.1, 
                      rotate: [0, -3, 3, 0] 
                    }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="text-white text-xl sm:text-2xl">
                      {aplicacion.icon}
                    </div>
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 leading-tight">
                    {aplicacion.title}
                  </h3>
                  
                  <p className="text-blue-200 leading-relaxed text-sm">
                    {aplicacion.desc}
                  </p>

                  {/* Decorative line */}
                  <motion.div
                    className={`w-full h-1 bg-gradient-to-r ${aplicacion.color} rounded-full mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-12 sm:mt-16"
          variants={fadeInUp}
        >
          <motion.div
            className="bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/20 max-w-3xl mx-auto"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
              ¿Sufres alguna de estas condiciones?
            </h3>
            <p className="text-blue-200 mb-6 text-base sm:text-lg px-2">
              La osteopatía puede ser la solución que estás buscando para mejorar tu calidad de vida
            </p>
            <motion.a
              href="https://wa.me/5492945416969"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaHandHoldingMedical className="text-lg sm:text-xl" />
              Consultar mi Caso
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AplicacionesOsteopatia;
