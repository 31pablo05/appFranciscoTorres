import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaInstagram, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, type: 'spring', stiffness: 80 }}
      className="relative overflow-hidden bg-gradient-to-br from-blue-800 via-blue-700 to-teal-700 text-white pt-14 pb-8 px-2 md:px-0 mt-20 shadow-2xl"
    >
      {/* Línea divisoria superior */}
      <div className="w-full h-1 bg-gradient-to-r from-blue-300 via-cyan-300 to-blue-400 opacity-70 mb-8" />
      {/* Glow decorativo animado */}
      <motion.div
        className="absolute -inset-8 bg-blue-400 opacity-20 blur-3xl pointer-events-none z-0 animate-pulse"
        aria-hidden="true"
      />
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row md:justify-between md:items-start gap-10 md:gap-0 px-4">
        {/* Redes sociales */}
        <div className="flex-1 md:flex-[1] flex flex-col items-center md:items-start justify-between gap-8 order-1 md:order-none md:pr-8">
          <div className="flex flex-col items-center md:items-start gap-4">
            <h3 className="text-2xl font-bold text-blue-100 tracking-wide mb-2">Redes Sociales</h3>
            <div className="flex gap-5 md:gap-6">
              <motion.a
                href="https://wa.me/5492945416969"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.18, boxShadow: '0 0 24px 4px #25d366' }}
                className="bg-white/10 border border-blue-200/30 rounded-full p-3 text-3xl md:text-4xl text-blue-100 hover:text-green-400 shadow-lg transition-all duration-300"
                aria-label="Enlace a WhatsApp"
              >
                <FaWhatsapp />
              </motion.a>
              <motion.a
                href="https://www.instagram.com/franciscotorresosteopatia?igsh=YzgzaW43aXg2NTB3&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.18, boxShadow: '0 0 24px 4px #e1306c' }}
                className="bg-white/10 border border-blue-200/30 rounded-full p-3 text-3xl md:text-4xl text-blue-100 hover:text-pink-400 shadow-lg transition-all duration-300"
                aria-label="Enlace a Instagram"
              >
                <FaInstagram />
              </motion.a>
              <motion.a
                href="https://www.facebook.com/francisco.torres.37"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.18, boxShadow: '0 0 24px 4px #1877f3' }}
                className="bg-white/10 border border-blue-200/30 rounded-full p-3 text-3xl md:text-4xl text-blue-100 hover:text-blue-400 shadow-lg transition-all duration-300"
                aria-label="Enlace a Facebook"
              >
                <FaFacebook />
              </motion.a>
              <motion.a
                href="mailto:franciscitbogado@gmail.com"
                whileHover={{ scale: 1.18, boxShadow: '0 0 24px 4px #38bdf8' }}
                className="bg-white/10 border border-blue-200/30 rounded-full p-3 text-3xl md:text-4xl text-blue-100 hover:text-cyan-300 shadow-lg transition-all duration-300"
                aria-label="Enlace al correo electrónico"
              >
                <FaEnvelope />
              </motion.a>
            </div>
          </div>
        </div>
        {/* Contacto */}
        <div className="backdrop-blur-xl bg-white/10 border border-blue-200/20 rounded-2xl shadow-xl p-6 flex-1 md:flex-[2] min-w-[260px] max-w-xl mb-8 md:mb-0 order-2 md:order-none md:ml-auto md:self-stretch flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <h3 className="text-2xl font-bold text-blue-100 tracking-wide m-0">Contacto</h3>
              <motion.img
                src="/assets/logo/logoFrancisco1.webp"
                alt="Logo Francisco Torres"
                className="w-8 h-8 object-contain rounded-md shadow border border-white/30 bg-white/10 cursor-pointer"
                whileHover={{ scale: 1.35, boxShadow: '0 0 32px 8px #38bdf8' }}
                transition={{ type: 'spring', stiffness: 300 }}
              />
            </div>
            <ul className="space-y-4 text-base md:text-lg">
              <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-blue-300 text-xl" />
                <a href="tel:+5492945416969" className="hover:text-blue-200 font-semibold transition-colors">+54 9 2945 41-6969</a>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-blue-300 text-xl" />
                <a href="mailto:franciscitbogado@gmail.com" className="hover:text-blue-200 font-semibold transition-colors">franciscitbogado@gmail.com</a>
              </li>
              <li className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-blue-300 text-xl" />
                <span className="text-blue-100">Jose de San Martín, Gdo Costa, Esquel - Chubut, Argentina.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Mensaje de desarrollo */}
      <div className="relative z-10 text-center mt-10 text-xs md:text-base text-blue-100/80">
        <p>
          &copy; {currentYear} Osteopatía Francisco Torres. Todos los derechos reservados. | Desarrollado por <a href="https://pablo-web-app.vercel.app/" target="_blank" rel="noopener noreferrer" className="font-semibold text-white underline hover:text-cyan-300 transition-colors">Pablo Proboste</a>
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
