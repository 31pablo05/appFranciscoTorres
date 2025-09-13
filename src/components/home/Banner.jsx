import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaClock, FaMapMarkerAlt, FaCalendarDay, FaWhatsapp } from "react-icons/fa";

const Banner = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const scheduleData = [
    {
      id: 1,
      day: "Lunes",
      time: "10:30 - 17:00 hs",
      location: "ATM Odontología, Esquel",
      icon: "🏥"
    },
    {
      id: 2,
      day: "Martes a Viernes",
      time: "16:00 - 20:00 hs", 
      location: "Gobernador Costa",
      icon: "🏠"
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, type: 'spring', stiffness: 80 }}
        className="max-w-6xl mx-auto"
      >
        {/* Header Section */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-center justify-center gap-6 mb-6">
            {/* Logo */}
            <motion.img
              src="/assets/svg/Franciscologo.svg"
              alt="Francisco Torres Logo"
              className="w-16 h-16 md:w-20 md:h-20"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.1, 
                rotate: [0, -5, 5, 0],
                filter: "drop-shadow(0 0 20px rgba(34, 211, 238, 0.5))"
              }}
              transition={{ duration: 0.6 }}
            />
            
            <motion.div
              className="w-12 h-12 bg-cyan-400 rounded-full flex items-center justify-center"
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6 }}
            >
              <FaClock className="text-2xl text-blue-900" />
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Horarios de Atención
            </h2>
          </div>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">
            Encuentra el momento perfecto para tu consulta
          </p>
        </motion.div>

        {/* Schedule Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {scheduleData.map((schedule, index) => (
            <motion.div
              key={schedule.id}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              onHoverStart={() => setHoveredCard(schedule.id)}
              onHoverEnd={() => setHoveredCard(null)}
            >
              <motion.div
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 relative overflow-hidden h-full"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 25px 50px rgba(0,0,0,0.2)"
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Card glow effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  animate={{
                    background: hoveredCard === schedule.id 
                      ? ["linear-gradient(45deg, rgba(34,211,238,0.1) 0%, rgba(59,130,246,0.1) 100%)",
                         "linear-gradient(45deg, rgba(59,130,246,0.1) 0%, rgba(34,211,238,0.1) 100%)"]
                      : "linear-gradient(45deg, rgba(34,211,238,0.1) 0%, rgba(59,130,246,0.1) 100%)"
                  }}
                  transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                />
                
                <div className="relative z-10">
                  {/* Day and Icon */}
                  <div className="flex items-center gap-4 mb-4">
                    <motion.div
                      className="text-3xl"
                      animate={{ 
                        rotate: hoveredCard === schedule.id ? [0, 10, -10, 0] : 0 
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      {schedule.icon}
                    </motion.div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">
                        {schedule.day}
                      </h3>
                      <div className="flex items-center gap-2 text-cyan-300">
                        <FaCalendarDay className="text-lg" />
                        <span className="text-lg font-semibold">{schedule.time}</span>
                      </div>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-center gap-3 p-3 bg-white/10 rounded-lg border border-white/10">
                    <FaMapMarkerAlt className="text-cyan-400 text-xl" />
                    <span className="text-blue-100 font-medium">{schedule.location}</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <motion.div
            className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 max-w-2xl mx-auto"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              ¿Listo para agendar tu consulta?
            </h3>
            <p className="text-blue-200 mb-6 text-lg">
              Contactanos directamente para coordinar tu cita
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="https://wa.me/5492945416969"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold flex items-center justify-center gap-3 transition-all duration-300 shadow-lg"
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
                whileTap={{ scale: 0.95 }}
              >
                <FaWhatsapp className="text-xl" />
                WhatsApp
              </motion.a>
              
              <motion.button
                className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/20 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/turnos-whatsapp" className="flex items-center justify-center gap-3">
                  <FaCalendarDay />
                  Formulario Online
                </Link>
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Banner;
