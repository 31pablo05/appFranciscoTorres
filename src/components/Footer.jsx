import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaInstagram, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-10 z-20"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 md:space-x-6">
          
          {/* Información de contacto */}
          <div className="text-left flex flex-col items-start space-y-4">
            {/* Celular */}
            <motion.p 
              className="text-lg flex items-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <FaPhoneAlt className="mr-2 text-blue-300" />
              Cel: 
              <a href="tel:+54 9 2945 41-6969" className="ml-1 hover:text-blue-300 text-lg font-semibold">
                +54 9 2945 41-6969
              </a>
            </motion.p>

            {/* Email */}
            <motion.p 
              className="text-lg flex items-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <FaEnvelope className="mr-2 text-blue-300" />
              Email: 
              <a href="mailto:franciscitbogado@gmail.com" className="ml-1 hover:text-blue-300 text-lg font-semibold">
                franciscitbogado@gmail.com
              </a>
            </motion.p>

            {/* Dirección */}
            <motion.p 
              className="text-lg flex items-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <FaMapMarkerAlt className="mr-2 text-blue-300" />
              Jose de San Martín, Gdo Costa, Esquel - Chubut, Argentina.
            </motion.p>
          </div>

          {/* Redes sociales */}
          <div className="flex justify-center md:justify-end space-x-8 text-4xl md:text-5xl">
            <motion.a 
              href="https://wa.me/5492945416969" 
              target="_blank" 
              rel="noopener noreferrer" 
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="hover:text-blue-300"
              aria-label="Enlace a WhatsApp"
            >
              <FaWhatsapp />
            </motion.a>
            <motion.a 
              href="https://www.instagram.com/franciscotorresosteopatia?igsh=YzgzaW43aXg2NTB3&utm_source=qr" 
              target="_blank" 
              rel="noopener noreferrer" 
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="hover:text-blue-300"
              aria-label="Enlace a Instagram"
            >
              <FaInstagram />
            </motion.a>
            <motion.a 
              href="https://www.facebook.com/francisco.torres.37" 
              target="_blank" 
              rel="noopener noreferrer" 
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="hover:text-blue-300"
              aria-label="Enlace a Facebook"
            >
              <FaFacebook />
            </motion.a>
            <motion.a 
              href="mailto:franciscitbogado@gmail.com" 
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="hover:text-blue-300"
              aria-label="Enlace al correo electrónico"
            >
              <FaEnvelope />
            </motion.a>
          </div>
        </div>

        {/* Mensaje de desarrollo */}
        <div className="text-center mt-8 text-sm md:text-base">
          <p>
            &copy; {currentYear} Osteopatía Francisco Torres. Todos los derechos reservados. | Desarrollado por <span className="font-semibold">Pablo Proboste</span>
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
