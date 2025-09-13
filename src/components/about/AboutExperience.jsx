import React from 'react';
import { FaGraduationCap, FaBriefcase, FaUniversity, FaHospital, FaMapMarkerAlt, FaCalendarAlt, FaAward, FaStethoscope } from 'react-icons/fa';
import { motion } from 'framer-motion';

const AboutExperience = () => {
  const education = [
    {
      title: "Licenciatura en Kinesiología y Fisiatría",
      institution: "Universidad de Mendoza",
      type: "Grado Universitario",
      icon: FaUniversity,
      color: "from-blue-600 to-indigo-600",
      location: "Mendoza, Argentina"
    },
    {
      title: "Formación en Osteopatía",
      institution: "Escuela de Osteopatía de Madrid",
      type: "Especialización",
      icon: FaGraduationCap,
      color: "from-purple-600 to-pink-600",
      location: "Madrid, España"
    },
    {
      title: "Estudios Complementarios",
      institution: "UIPTM",
      type: "Formación Continua",
      icon: FaAward,
      color: "from-green-600 to-emerald-600",
      location: "Formación Especializada"
    },
    {
      title: "Formación Internacional",
      institution: "SAINT-MONT France",
      type: "Intercambio",
      icon: FaMapMarkerAlt,
      color: "from-orange-600 to-red-600",
      location: "Francia"
    }
  ];

  const experience = [
    {
      position: "Osteópata Clínico",
      company: "Hospital Rural Roberto Gandini",
      period: "Actualidad",
      type: "Sector Público",
      icon: FaHospital,
      color: "from-cyan-600 to-blue-600",
      description: "Atención integral en hospital rural"
    },
    {
      position: "Especialista en ATM",
      company: "ATM Odontología",
      period: "Actualidad",
      type: "Consulta Privada",
      icon: FaStethoscope,
      color: "from-teal-600 to-cyan-600",
      description: "Tratamiento especializado en ATM"
    },
    {
      position: "Kinesiólogo",
      company: "Quality Salud Esquel",
      period: "2016-2020",
      type: "Clínica Privada",
      icon: FaBriefcase,
      color: "from-indigo-600 to-purple-600",
      description: "4 años de experiencia clínica"
    }
  ];

  const certifications = [
    "Asociación Argentina de Kinesiología",
    "Registro Profesional Habilitante",
    "Formación en Osteopatía Estructural",
    "Especialización en Terapia Manual"
  ];

  return (
    <div className="w-full max-w-7xl mx-auto mb-16 space-y-12">
      
      {/* Header de la sección */}
      <motion.div
        className="text-center space-y-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center justify-center gap-3 mb-4">
          <motion.div
            className="p-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl shadow-lg"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <FaGraduationCap className="text-white text-2xl" />
          </motion.div>
          <h3 className="text-3xl lg:text-4xl font-bold text-white">
            Mi Trayectoria{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Profesional
            </span>
          </h3>
        </div>
        <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto rounded-full"></div>
      </motion.div>

      {/* Sección de Formación Académica */}
      <motion.div
        className="space-y-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="text-center mb-8">
          <h4 className="text-2xl font-bold text-cyan-200 mb-2">Formación Académica</h4>
          <p className="text-white/70">Sólida base educativa y especialización continua</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((item, index) => (
            <motion.div
              key={index}
              className="group relative p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              {/* Gradiente de fondo animado */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}
              />
              
              <div className="relative z-10">
                <div className="flex items-start gap-4">
                  <motion.div
                    className={`p-3 bg-gradient-to-br ${item.color} rounded-xl shadow-lg flex-shrink-0`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <item.icon className="text-white text-xl" />
                  </motion.div>
                  
                  <div className="flex-1 space-y-2">
                    <h5 className="text-white font-bold text-lg leading-tight">{item.title}</h5>
                    <p className="text-cyan-200 font-semibold">{item.institution}</p>
                    <div className="flex items-center gap-2 text-sm">
                      <span className={`px-2 py-1 bg-gradient-to-r ${item.color} text-white rounded-full text-xs font-medium`}>
                        {item.type}
                      </span>
                      <span className="text-white/70">{item.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Sección de Experiencia Profesional */}
      <motion.div
        className="space-y-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="text-center mb-8">
          <h4 className="text-2xl font-bold text-cyan-200 mb-2">Experiencia Profesional</h4>
          <p className="text-white/70">Trayectoria clínica en diversos ámbitos de la salud</p>
        </div>
        
        <div className="space-y-6">
          {experience.map((item, index) => (
            <motion.div
              key={index}
              className="group relative p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300"
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 + index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Gradiente de fondo */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}
              />
              
              <div className="relative z-10 flex items-center gap-6">
                <motion.div
                  className={`p-4 bg-gradient-to-br ${item.color} rounded-xl shadow-lg flex-shrink-0`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <item.icon className="text-white text-2xl" />
                </motion.div>
                
                <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-4 items-center">
                  <div>
                    <h5 className="text-white font-bold text-xl">{item.position}</h5>
                    <p className="text-cyan-200 font-semibold">{item.company}</p>
                  </div>
                  
                  <div className="text-center lg:text-left">
                    <div className="flex items-center gap-2 justify-center lg:justify-start">
                      <FaCalendarAlt className="text-cyan-400 text-sm" />
                      <span className="text-white/90 font-medium">{item.period}</span>
                    </div>
                    <span className={`inline-block px-3 py-1 bg-gradient-to-r ${item.color} text-white rounded-full text-xs font-medium mt-2`}>
                      {item.type}
                    </span>
                  </div>
                  
                  <div className="text-center lg:text-right">
                    <p className="text-white/80 text-sm italic">{item.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Sección de Certificaciones */}
      <motion.div
        className="text-center space-y-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <div>
          <h4 className="text-2xl font-bold text-cyan-200 mb-2">Certificaciones y Membresías</h4>
          <p className="text-white/70">Reconocimientos y validaciones profesionales</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className="group p-4 bg-gradient-to-br from-emerald-600/20 to-teal-600/20 backdrop-blur-sm rounded-xl border border-emerald-400/30 hover:bg-emerald-600/30 transition-all duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 + index * 0.1 }}
              whileHover={{ y: -3, scale: 1.05 }}
            >
              <div className="flex items-center justify-center mb-2">
                <FaAward className="text-emerald-400 text-2xl" />
              </div>
              <p className="text-white text-sm font-medium text-center leading-tight">{cert}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default AboutExperience;
