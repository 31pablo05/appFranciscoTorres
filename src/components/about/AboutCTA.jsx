import React from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaFacebookF, FaWhatsapp } from 'react-icons/fa';

const AboutCTA = () => (
  <>
    <motion.div
      className="mb-12 text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.4 }}
    >
      <h3 className="text-4xl font-bold text-white mb-6 text-center border-b-4 border-blue-600 pb-2">
        Conéctate conmigo
      </h3>
      <p className="text-lg text-gray-200 mb-4">Puedes encontrarme en mis redes sociales:</p>
      <div className="flex justify-center space-x-6">
        <motion.a
          href="https://www.instagram.com/franciscotorresosteopatia?igsh=YzgzaW43aXg2NTB3&utm_source=qr"
          aria-label="Instagram Francisco Torres"
          className="text-white hover:text-gray-300 transition-colors"
          whileHover={{ scale: 1.2, color: '#e1306c' }}
        >
          <FaInstagram className="text-4xl" />
        </motion.a>
        <motion.a
          href="https://www.facebook.com/francisco_torres"
          aria-label="Facebook Francisco Torres"
          className="text-white hover:text-gray-300 transition-colors"
          whileHover={{ scale: 1.2, color: '#1877f3' }}
        >
          <FaFacebookF className="text-4xl" />
        </motion.a>
        <motion.a
          href="/turnos-whatsapp"
          aria-label="WhatsApp Francisco Torres"
          className="text-white hover:text-gray-300 transition-colors"
          whileHover={{ scale: 1.2, color: '#25d366' }}
        >
          <FaWhatsapp className="text-4xl" />
        </motion.a>
      </div>
    </motion.div>
    <motion.div
      className="mt-12 text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.5 }}
    >
      <p className="text-lg text-gray-200 mb-4">¿Tienes alguna pregunta o quieres agendar una consulta? Estoy aquí para ayudarte.</p>
      <motion.a
        href="/turnos-whatsapp"
        className="bg-white text-blue-600 py-3 px-8 rounded-lg hover:bg-gray-200 transition-all transform hover:scale-105 font-semibold shadow-md inline-block animate-pulse"
        whileHover={{ scale: 1.12, boxShadow: '0 0 32px 8px #38bdf8' }}
      >
        Solicita tu turno
      </motion.a>
    </motion.div>
  </>
);

export default AboutCTA;
