import { motion } from "framer-motion";
import { FaHandsHelping, FaAward, FaClock } from "react-icons/fa";
import HeroSection from "../components/home/HeroSection";
import Banner from "../components/home/Banner";
import AplicacionesOsteopatia from "../components/home/AplicacionesOsteopatia";
import TratamientoVideo from "../components/home/TratamientoVideo";
import HomeCTA from "../components/home/HomeCTA";

const Home = () => {
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

  const cardHover = {
    rest: { scale: 1, boxShadow: "0 4px 12px rgba(0,0,0,0.1)" },
    hover: { 
      scale: 1.05, 
      boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
      transition: { duration: 0.3 }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-700 to-teal-600 relative overflow-hidden">
      
      {/* HERO SECTION MODULARIZADO */}
      <HeroSection />

      {/* BANNER DE HORARIOS MODULARIZADO */}
      <Banner />

      {/* APLICACIONES OSTEOPATÍA MODULARIZADO */}
      <AplicacionesOsteopatia />

      {/* TRATAMIENTO VIDEO MODULARIZADO */}
      <TratamientoVideo />

      {/* SECCIÓN DE SERVICIOS DESTACADOS */}
      <section className="py-20 px-4 sm:px-6 bg-white/5 backdrop-blur-sm">
        <motion.div
          className="max-w-7xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              ¿Por qué elegir nuestros servicios?
            </h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Combinamos técnicas avanzadas con un enfoque personalizado para cada paciente
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: FaHandsHelping,
                title: "Tratamiento Personalizado",
                description: "Cada sesión está diseñada específicamente para tus necesidades y objetivos de recuperación."
              },
              {
                icon: FaAward,
                title: "Experiencia Comprobada",
                description: "Más de 8 años tratando pacientes con técnicas de osteopatía y kinesiología actualizadas."
              },
              {
                icon: FaClock,
                title: "Horarios Flexibles",
                description: "Adaptamos nuestros horarios para que puedas acceder al tratamiento cuando lo necesites."
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group"
              >
                <motion.div
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 text-center h-full"
                  variants={cardHover}
                  initial="rest"
                  whileHover="hover"
                >
                  <motion.div
                    className="w-16 h-16 bg-cyan-400 rounded-full flex items-center justify-center mx-auto mb-6"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <service.icon className="text-2xl text-blue-900" />
                  </motion.div>
                  
                  <h3 className="text-xl font-bold text-white mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="text-blue-200 leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CALL TO ACTION FINAL - COMPONENTE MODULARIZADO */}
      <HomeCTA />
    </div>
  );
};

export default Home;
