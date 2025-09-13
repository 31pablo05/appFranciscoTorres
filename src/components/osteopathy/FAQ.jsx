import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuestionCircle, FaChevronDown, FaUserMd, FaClock, FaHeart, FaUsers, FaStethoscope, FaShieldAlt, FaHandHoldingMedical } from 'react-icons/fa';

const faqs = [
  {
    question: '¿Qué es la osteopatía y cómo puede ayudarme?',
    answer: 'La osteopatía es una disciplina terapéutica que utiliza técnicas manuales suaves para tratar disfunciones del cuerpo. Te ayuda a aliviar dolores, mejorar la movilidad y promover tu bienestar integral de forma natural y sin medicamentos.',
    icon: <FaQuestionCircle />,
    color: 'from-blue-400 to-indigo-500'
  },
  {
    question: '¿El tratamiento es doloroso o invasivo?',
    answer: 'Para nada. Las técnicas osteopáticas son muy suaves y se adaptan completamente a tu comodidad. Puedes sentir una ligera relajación muscular después de la sesión, pero nunca dolor intenso. Tu bienestar es nuestra prioridad.',
    icon: <FaHeart />,
    color: 'from-pink-400 to-rose-500'
  },
  {
    question: '¿Cuánto tiempo necesito para ver resultados?',
    answer: 'Muchos pacientes notan mejoras desde la primera sesión. Generalmente, con 3 a 6 sesiones ya experimentarás cambios significativos. Cada persona es única, por eso personalizamos tu plan de tratamiento.',
    icon: <FaClock />,
    color: 'from-emerald-400 to-teal-500'
  },
  {
    question: '¿Quién puede beneficiarse de la osteopatía?',
    answer: 'Todos pueden beneficiarse: bebés con cólicos, niños con problemas posturales, adultos con estrés laboral, deportistas, embarazadas y personas mayores. Adaptamos cada tratamiento a la edad y necesidades específicas.',
    icon: <FaUsers />,
    color: 'from-purple-400 to-violet-500'
  },
  {
    question: '¿Para qué problemas está indicada la osteopatía?',
    answer: 'Tratamos dolores de espalda, cuello, cabeza y migrañas, lesiones deportivas, estrés, problemas digestivos, dolores menstruales, contracturas musculares, y muchas otras molestias que afectan tu calidad de vida.',
    icon: <FaStethoscope />,
    color: 'from-orange-400 to-red-500'
  },
  {
    question: '¿Necesito orden médica para consultar?',
    answer: 'No es necesario, puedes consultar directamente. Sin embargo, si tienes estudios médicos previos o diagnósticos, tráelos para que podamos brindarte el mejor tratamiento posible.',
    icon: <FaUserMd />,
    color: 'from-cyan-400 to-blue-500'
  },
  {
    question: '¿Es segura y compatible con otros tratamientos?',
    answer: 'Absolutamente segura. La osteopatía es un complemento ideal que puede combinarse perfectamente con otros tratamientos médicos, kinesiológicos o terapéuticos que estés realizando.',
    icon: <FaShieldAlt />,
    color: 'from-green-400 to-emerald-500'
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

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
        className="max-w-4xl mx-auto"
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
            Preguntas <span className="text-cyan-300">Frecuentes</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-blue-200 max-w-3xl mx-auto mb-8"
            variants={fadeInUp}
          >
            Resolvemos las dudas más comunes sobre nuestros tratamientos de osteopatía
          </motion.p>
          <motion.div
            className="flex items-center justify-center gap-3 text-cyan-300"
            variants={fadeInUp}
          >
            <FaHandHoldingMedical className="text-2xl" />
            <span className="text-lg font-medium">Información clara y transparente para ti</span>
          </motion.div>
        </motion.div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="group"
            >
              <motion.div
                className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 overflow-hidden"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.3 }}
              >
                {/* Question Button */}
                <button
                  className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-opacity-50"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  aria-expanded={openIndex === index}
                >
                  <div className="flex items-center gap-4">
                    {/* Icon */}
                    <motion.div
                      className={`w-12 h-12 rounded-full bg-gradient-to-br ${faq.color} flex items-center justify-center shadow-lg`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="text-white text-xl">
                        {faq.icon}
                      </div>
                    </motion.div>
                    
                    {/* Question */}
                    <span className="text-lg md:text-xl font-semibold text-white group-hover:text-cyan-300 transition-colors duration-300">
                      {faq.question}
                    </span>
                  </div>

                  {/* Chevron */}
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-cyan-300 text-xl"
                  >
                    <FaChevronDown />
                  </motion.div>
                </button>

                {/* Answer */}
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pl-20">
                        <motion.div
                          initial={{ y: -10, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.1 }}
                          className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10"
                        >
                          <p className="text-blue-200 leading-relaxed text-lg">
                            {faq.answer}
                          </p>
                        </motion.div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
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
            <div className="flex items-center justify-center gap-3 mb-4">
              <FaQuestionCircle className="text-cyan-300 text-2xl" />
              <h3 className="text-2xl font-bold text-white">
                ¿Tienes más preguntas?
              </h3>
            </div>
            <p className="text-blue-200 mb-6">
              Estamos aquí para aclarar todas tus dudas y ayudarte a tomar la mejor decisión para tu salud
            </p>
            <motion.a
              href="https://wa.me/5492945416969"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaHandHoldingMedical className="text-xl" />
              Consultar Ahora
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default FAQ;
