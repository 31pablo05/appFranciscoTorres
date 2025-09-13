import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaInstagram, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaClock, FaStethoscope } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      href: "https://wa.me/5492945416969",
      icon: FaWhatsapp,
      label: "WhatsApp",
      color: "hover:text-green-400",
      shadow: "0 0 30px 6px #25d366"
    },
    {
      href: "https://www.instagram.com/franciscotorresosteopatia?igsh=YzgzaW43aXg2NTB3&utm_source=qr",
      icon: FaInstagram,
      label: "Instagram",
      color: "hover:text-pink-400",
      shadow: "0 0 30px 6px #e1306c"
    },
    {
      href: "https://www.facebook.com/francisco.torres.37",
      icon: FaFacebook,
      label: "Facebook",
      color: "hover:text-blue-400",
      shadow: "0 0 30px 6px #1877f3"
    },
    {
      href: "mailto:franciscitbogado@gmail.com",
      icon: FaEnvelope,
      label: "Email",
      color: "hover:text-cyan-300",
      shadow: "0 0 30px 6px #38bdf8"
    }
  ];

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, type: 'spring', stiffness: 60 }}
      className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white pt-16 pb-6"
    >
      {/* Efectos de fondo animados */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header del footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <motion.img
              src="/assets/logo/logoFrancisco1.webp"
              alt="Logo Francisco Torres"
              className="w-12 h-12 object-contain rounded-xl shadow-lg border border-white/20 bg-white/10"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            />
            <div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-200 to-cyan-300 bg-clip-text text-transparent">
                Francisco Torres
              </h2>
              <p className="text-blue-200/80 text-sm tracking-wide">Osteopatía Profesional</p>
            </div>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full"></div>
        </motion.div>

        {/* Grid principal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-12">
          
          {/* Información de contacto */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-bold text-blue-100 mb-6 flex items-center gap-2">
              <FaPhoneAlt className="text-blue-300" />
              Contacto
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3 p-3 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
                <FaPhoneAlt className="text-blue-300 text-lg mt-1 flex-shrink-0" />
                <div>
                  <p className="text-blue-100/80 text-sm">Teléfono</p>
                  <a href="tel:+5492945416969" className="text-white font-semibold hover:text-blue-200 transition-colors">
                    +54 9 2945 41-6969
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-3 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
                <FaEnvelope className="text-blue-300 text-lg mt-1 flex-shrink-0" />
                <div>
                  <p className="text-blue-100/80 text-sm">Email</p>
                  <a href="mailto:franciscitbogado@gmail.com" className="text-white font-semibold hover:text-blue-200 transition-colors break-all">
                    franciscitbogado@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-3 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
                <FaMapMarkerAlt className="text-blue-300 text-lg mt-1 flex-shrink-0" />
                <div>
                  <p className="text-blue-100/80 text-sm">Ubicación</p>
                  <p className="text-white font-medium leading-relaxed">
                    Jose de San Martín<br />
                    Gdo Costa, Esquel<br />
                    Chubut, Argentina
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Redes sociales */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-bold text-blue-100 mb-6">Síguenos</h3>
            <div className="grid grid-cols-2 gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
                  whileHover={{ 
                    scale: 1.05, 
                    boxShadow: social.shadow,
                    y: -2
                  }}
                  className={`group relative bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 text-center transition-all duration-300 ${social.color} hover:bg-white/15`}
                  aria-label={`Enlace a ${social.label}`}
                >
                  <social.icon className="text-3xl mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                  <p className="text-sm font-medium text-blue-100 group-hover:text-white transition-colors">
                    {social.label}
                  </p>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Horarios y servicios */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-bold text-blue-100 mb-6">Información</h3>
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-gradient-to-br from-blue-600/20 to-indigo-600/20 backdrop-blur-sm border border-blue-300/20">
                <div className="flex items-center gap-2 mb-2">
                  <FaClock className="text-blue-300" />
                  <h4 className="font-semibold text-blue-100">Horarios de Atención</h4>
                </div>
                <p className="text-blue-100/90 text-sm leading-relaxed">
                  Lunes a Viernes: 9:00 - 18:00<br />
                  Sábados: 9:00 - 13:00<br />
                  <span className="text-blue-200 font-medium">Turnos por WhatsApp</span>
                </p>
              </div>
              
             
            </div>
          </motion.div>
        </div>

        {/* Separador */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="h-px bg-gradient-to-r from-transparent via-blue-300/50 to-transparent mb-8"
        />

        {/* Footer bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="text-center space-y-4"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-blue-100/80 text-sm">
            <span>&copy; {currentYear} Osteopatía Francisco Torres.</span>
            <span className="hidden sm:inline">•</span>
            <span>Todos los derechos reservados.</span>
          </div>
          
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/15 transition-all duration-300"
          >
            <span className="text-blue-100/80 text-sm">Desarrollado con</span>
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-red-400"
            >
              ♥
            </motion.span>
            <span className="text-blue-100/80 text-sm">por</span>
            <a 
              href="https://devcraftpablo.online/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="font-semibold text-white hover:text-cyan-300 transition-colors duration-300 underline decoration-2 underline-offset-2 hover:decoration-cyan-300"
            >
              Pablo Proboste
            </a>
          </motion.div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
