import React from 'react';
import { FaGraduationCap, FaBriefcase } from 'react-icons/fa';
import { motion } from 'framer-motion';

const AboutExperience = () => (
  <motion.div
    className="bg-white p-8 rounded-xl shadow-lg mb-12 text-gray-900"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7, delay: 0.2 }}
  >
    <h3 className="text-3xl font-bold mb-4 flex items-center border-b-4 border-blue-600 pb-2">
      <FaGraduationCap className="mr-2 text-blue-600" /> Mi experiencia y formación
    </h3>
    <ul className="list-none space-y-2 text-lg">
      <li><FaBriefcase className="inline mr-2 text-blue-500"/> Licenciatura en Kinesiología y Fisiatría en la Universidad de Mendoza</li>
      <li><FaBriefcase className="inline mr-2 text-blue-500"/> Escuela de Osteopatía de Madrid</li>
      <li><FaBriefcase className="inline mr-2 text-blue-500"/> Estudió en la Universidad de Mendoza</li>
      <li><FaBriefcase className="inline mr-2 text-blue-500"/> Estudió en UIPTM</li>
      <li><FaBriefcase className="inline mr-2 text-blue-500"/> Asociación Argentina de Kinesiología</li>
      <li><FaBriefcase className="inline mr-2 text-blue-500"/> SAINT-MONT France</li>
      <li><FaBriefcase className="inline mr-2 text-blue-500"/> Trabaja en Hospital rural Roberto Gandini</li>
      <li><FaBriefcase className="inline mr-2 text-blue-500"/> Trabaja en ATM Odontología</li>
      <li><FaBriefcase className="inline mr-2 text-blue-500"/> Trabajo en Quality Salud Esquel (2016-2020)</li>
    </ul>
  </motion.div>
);

export default AboutExperience;
