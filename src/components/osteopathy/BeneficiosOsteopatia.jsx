import { motion } from "framer-motion";
import { FaCheckCircle, FaHeart, FaShieldAlt, FaBolt, FaLeaf, FaStar } from "react-icons/fa";

const beneficios = [
  {
    text: 'Alivio del dolor muscular, articular y tensional',
    icon: FaCheckCircle,
    color: 'from-emerald-400 to-teal-500'
  },
  {
    text: 'Mejora la movilidad y flexibilidad corporal',
    icon: FaBolt,
    color: 'from-blue-400 to-indigo-500'
  },
  {
    text: 'Optimiza la postura y corrige desequilibrios biomecánicos',
    icon: FaShieldAlt,
    color: 'from-purple-400 to-violet-500'
  },
  {
    text: 'Reduce el estrés y mejora la calidad del sueño',
    icon: FaHeart,
    color: 'from-pink-400 to-rose-500'
  },
  {
    text: 'Favorece la circulación sanguínea y el drenaje linfático',
    icon: FaLeaf,
    color: 'from-green-400 to-emerald-500'
  },
  {
    text: 'Fortalece el sistema inmunológico y la recuperación física',
    icon: FaStar,
    color: 'from-yellow-400 to-orange-500'
  }
];

const BeneficiosOsteopatia = () => {
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
    <section className="py-20 px-4 sm:px-6">
      <motion.div
        className="max-w-6xl mx-auto"
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
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            variants={fadeInUp}
          >
            Beneficios de la <span className="text-cyan-300">Osteopatía</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-blue-200 max-w-3xl mx-auto"
            variants={fadeInUp}
          >
            Descubre cómo la osteopatía puede transformar tu bienestar físico y mental
          </motion.p>
        </motion.div>

        {/* Grid de Beneficios */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {beneficios.map((beneficio) => (
            <motion.div
              key={beneficio.text}
              variants={fadeInUp}
              className="group"
            >
              <motion.div
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 h-full relative overflow-hidden"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 25px 50px rgba(0,0,0,0.2)"
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Glow effect on hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${beneficio.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />
                
                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    className={`w-12 h-12 rounded-full bg-gradient-to-br ${beneficio.color} flex items-center justify-center mb-4 shadow-lg`}
                    whileHover={{ 
                      scale: 1.1, 
                      rotate: [0, -5, 5, 0] 
                    }}
                    transition={{ duration: 0.4 }}
                  >
                    <beneficio.icon className="text-white text-xl" />
                  </motion.div>

                  {/* Text */}
                  <p className="text-white font-medium leading-relaxed text-lg">
                    {beneficio.text}
                  </p>

                  {/* Decorative element */}
                  <motion.div
                    className={`w-full h-1 bg-gradient-to-r ${beneficio.color} rounded-full mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          variants={fadeInUp}
        >
          <motion.div
            className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 max-w-2xl mx-auto"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              ¿Listo para experimentar estos beneficios?
            </h3>
            <p className="text-blue-200 mb-6">
              Agenda tu consulta y comienza tu camino hacia una mejor calidad de vida
            </p>
            <motion.a
              href="https://wa.me/5492945416969"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaCheckCircle className="text-xl" />
              Comenzar Tratamiento
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default BeneficiosOsteopatia;
