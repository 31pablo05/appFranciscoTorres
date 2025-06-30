import React from 'react';
import { FaTrophy } from 'react-icons/fa';
import { motion } from 'framer-motion';

const AboutCertifications = ({ openModal }) => (
  <motion.div
    className="bg-white p-8 rounded-xl shadow-xl mb-12 text-gray-900"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7, delay: 0.3 }}
  >
    <h3 className="text-3xl font-bold mb-4 flex items-center border-b-4 border-blue-600 pb-2">
      <FaTrophy className="mr-2 text-blue-600" /> Certificaciones y logros
    </h3>
    <ul className="list-none space-y-2 text-lg">
      <li onClick={() => openModal('assets/certificados/curso-kinésico-atm.webp')} className="cursor-pointer hover:text-blue-500 transition-all duration-300">
        <FaTrophy className="inline mr-2 text-yellow-500"/> C.O. Osteópata en escuela osteopatica de Madrid
      </li>
      <li onClick={() => openModal('assets/certificados/curso-kinésico-atm.webp')} className="cursor-pointer hover:text-blue-500 transition-all duration-300">
        <FaTrophy className="inline mr-2 text-yellow-500"/> Certificacion de manejo kinésico ATM
      </li>
      <li onClick={() => openModal('assets/certificados/diploma-rehabilitacion-postquirurgica.webp')} className="cursor-pointer hover:text-blue-500 transition-all duration-300">
        <FaTrophy className="inline mr-2 text-yellow-500"/> Diploma en Técnicas de Rehabilitación Postquirúrgica, 2017
      </li>
      <li onClick={() => openModal('assets/certificados/posgrado-rehabilitacion-cardiopulmonar.webp')} className="cursor-pointer hover:text-blue-500 transition-all duration-300">
        <FaTrophy className="inline mr-2 text-yellow-500"/> Curso anual de posgrado en rehabilitación vestíbular
      </li>
      <li onClick={() => openModal('assets/certificados/posgrado-rehabilitacion-cardiopulmonar.webp')} className="cursor-pointer hover:text-blue-500 transition-all duration-300">
        <FaTrophy className="inline mr-2 text-yellow-500"/> Posgrado de Rehabilitación Cardiopulmonar en la Fundación René Favaloro
      </li>
      <li onClick={() => openModal('assets/certificados/posgrado-rehabilitacion-cardiopulmonar.webp')} className="cursor-pointer hover:text-blue-500 transition-all duration-300">
        <FaTrophy className="inline mr-2 text-yellow-500"/> Posgrado en reeducación postural global
      </li>
      <li onClick={() => openModal('assets/certificados/posgrado-rehabilitacion-cardiopulmonar.webp')} className="cursor-pointer hover:text-blue-500 transition-all duration-300">
        <FaTrophy className="inline mr-2 text-yellow-500"/> Curso superior en RPG articular, cervicales
      </li>
    </ul>
  </motion.div>
);

export default AboutCertifications;
