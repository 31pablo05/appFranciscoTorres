import { motion } from 'framer-motion';
import { FaInstagram, FaFacebookF, FaWhatsapp, FaCalendarCheck, FaUserMd, FaHeart, FaHandsHelping, FaComments } from 'react-icons/fa';

const AboutCTA = () => {
  const socialLinks = [
    {
      href: "https://www.instagram.com/franciscotorresosteopatia?igsh=YzgzaW43aXg2NTB3&utm_source=qr",
      icon: FaInstagram,
      label: "Instagram",
      color: "#e1306c",
      gradient: "from-pink-500 to-rose-500",
      description: "Sígueme para consejos de salud"
    },
    {
      href: "https://www.facebook.com/francisco_torres",
      icon: FaFacebookF,
      label: "Facebook",
      color: "#1877f3",
      gradient: "from-blue-500 to-indigo-500",
      description: "Únete a nuestra comunidad"
    },
    {
      href: "/turnos-whatsapp",
      icon: FaWhatsapp,
      label: "WhatsApp",
      color: "#25d366",
      gradient: "from-green-500 to-emerald-500",
      description: "Agenda tu consulta ahora"
    }
  ];

  const features = [
    {
      icon: FaCalendarCheck,
      title: "Agenda Flexible",
      description: "Horarios adaptados a tu rutina"
    },
    {
      icon: FaUserMd,
      title: "Atención Personalizada",
      description: "Tratamiento diseñado para ti"
    },
    {
      icon: FaHeart,
      title: "Compromiso Total",
      description: "Tu bienestar es mi prioridad"
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto space-y-16">
      
      {/* Sección principal de CTA */}
      <motion.div
        className="relative bg-gradient-to-br from-slate-900/80 to-blue-900/80 backdrop-blur-xl rounded-3xl border border-white/20 overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Efectos de fondo */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute top-1/4 right-1/4 w-64 h-64 bg-cyan-400/20 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl"
            animate={{ 
              scale: [1.2, 1, 1.2],
              opacity: [0.4, 0.7, 0.4]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="relative z-10 p-8 lg:p-12 text-center space-y-8">
          
          {/* Header emotivo */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <motion.div
                className="p-3 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full shadow-xl"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <FaHandsHelping className="text-white text-2xl" />
              </motion.div>
              <h3 className="text-3xl lg:text-4xl font-bold text-white">
                ¿Listo para{' '}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  sentirte mejor?
                </span>
              </h3>
            </div>
            
            <p className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
              Tu bienestar no puede esperar. Estoy aquí para ayudarte a recuperar tu salud y calidad de vida.
            </p>
          </motion.div>

          {/* Características destacadas */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="group p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <motion.div
                  className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: 5 }}
                >
                  <feature.icon className="text-white text-2xl" />
                </motion.div>
                <h4 className="text-white font-bold text-lg mb-2">{feature.title}</h4>
                <p className="text-white/80 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA principal */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <p className="text-lg text-white/90 mb-6">
              ¿Tienes alguna pregunta o quieres agendar una consulta?
            </p>
            
            <motion.a
              href="/turnos-whatsapp"
              className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-green-500/50 transition-all duration-300 overflow-hidden"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Efecto de brillo */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3 }}
              />
              
              <motion.div
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <FaWhatsapp className="text-2xl" />
              </motion.div>
              <span className="relative z-10">Agenda tu Consulta Ahora</span>
              <motion.div
                className="w-2 h-2 bg-white rounded-full"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.a>
            
            <p className="text-white/70 text-sm">
              <motion.span
                className="inline-block"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                📞
              </motion.span>
              {' '}Respuesta inmediata por WhatsApp
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Sección de redes sociales mejorada */}
      <motion.div
        className="space-y-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-3">
            <motion.div
              className="p-2 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg"
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <FaComments className="text-white text-xl" />
            </motion.div>
            <h4 className="text-2xl lg:text-3xl font-bold text-white">
              Mantente{' '}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Conectado
              </span>
            </h4>
          </div>
          <p className="text-white/80 text-lg">Sígueme en redes sociales para consejos de salud y bienestar</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-500 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 + index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              {/* Gradiente de fondo animado */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${social.gradient} opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity duration-500`}
              />
              
              <div className="relative z-10 space-y-4">
                <motion.div
                  className={`w-16 h-16 bg-gradient-to-br ${social.gradient} rounded-2xl flex items-center justify-center mx-auto shadow-xl group-hover:shadow-2xl transition-all duration-300`}
                  whileHover={{ scale: 1.1, rotate: 10 }}
                >
                  <social.icon className="text-white text-2xl" />
                </motion.div>
                
                <div>
                  <h5 className="text-white font-bold text-lg mb-2">{social.label}</h5>
                  <p className="text-white/80 text-sm">{social.description}</p>
                </div>
                
                <motion.div
                  className="flex items-center justify-center gap-2 text-white/70"
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="text-sm font-medium">Conectar</span>
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </motion.div>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* Footer motivacional */}
      <motion.div
        className="text-center p-8 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-2xl border border-cyan-400/30"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <motion.div
          className="flex items-center justify-center gap-2 mb-4"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-2xl">🌟</span>
          <p className="text-white font-semibold text-lg">
            &ldquo;Tu salud es mi compromiso, tu bienestar mi objetivo&rdquo;
          </p>
          <span className="text-2xl">🌟</span>
        </motion.div>
        <p className="text-cyan-200 text-sm italic">- Francisco Torres, Osteópata Profesional</p>
      </motion.div>
    </div>
  );
};

export default AboutCTA;
