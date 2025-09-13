import React from 'react';
import { FaTrophy, FaCertificate, FaAward, FaMedal, FaUniversity, FaEye, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const AboutCertifications = ({ openModal }) => {
  const certifications = [
    {
      title: "Certificación en Osteopatía",
      institution: "Escuela Osteopática de Madrid",
      year: "2023",
      type: "Especialización Principal",
      image: "assets/certificados/curso-kinésico-atm.webp",
      icon: FaUniversity,
      color: "from-amber-500 to-orange-500",
      location: "Madrid, España",
      description: "Formación integral en técnicas osteopáticas estructurales, viscerales y craneales"
    },
    {
      title: "Manejo Kinésico de ATM",
      institution: "Certificación Especializada",
      year: "2022",
      type: "Especialización Clínica",
      image: "assets/certificados/curso-kinésico-atm.webp",
      icon: FaCertificate,
      color: "from-emerald-500 to-teal-500",
      location: "Argentina",
      description: "Técnicas especializadas para trastornos de la articulación temporomandibular"
    },
    {
      title: "Rehabilitación Postquirúrgica",
      institution: "Diploma de Especialización",
      year: "2017",
      type: "Certificación Técnica",
      image: "assets/certificados/diploma-rehabilitacion-postquirurgica.webp",
      icon: FaMedal,
      color: "from-blue-500 to-indigo-500",
      location: "Argentina",
      description: "Técnicas avanzadas de rehabilitación en pacientes postoperatorios"
    },
    {
      title: "Rehabilitación Vestibular",
      institution: "Curso Anual de Posgrado",
      year: "2019",
      type: "Posgrado Anual",
      image: "assets/certificados/posgrado-rehabilitacion-cardiopulmonar.webp",
      icon: FaAward,
      color: "from-purple-500 to-pink-500",
      location: "Argentina",
      description: "Tratamiento integral de trastornos del equilibrio y vértigo"
    },
    {
      title: "Rehabilitación Cardiopulmonar",
      institution: "Fundación René Favaloro",
      year: "2018",
      type: "Posgrado Prestigioso",
      image: "assets/certificados/posgrado-rehabilitacion-cardiopulmonar.webp",
      icon: FaTrophy,
      color: "from-red-500 to-pink-500",
      location: "Buenos Aires",
      description: "Rehabilitación especializada en patologías cardiovasculares y respiratorias"
    },
    {
      title: "Reeducación Postural Global (RPG)",
      institution: "Posgrado Especializado",
      year: "2020",
      type: "Método RPG",
      image: "assets/certificados/posgrado-rehabilitacion-cardiopulmonar.webp",
      icon: FaCertificate,
      color: "from-cyan-500 to-blue-500",
      location: "Argentina",
      description: "Técnicas globales de corrección postural y biomecánica"
    },
    {
      title: "RPG Articular Cervicales",
      institution: "Curso Superior",
      year: "2021",
      type: "Especialización RPG",
      image: "assets/certificados/posgrado-rehabilitacion-cardiopulmonar.webp",
      icon: FaAward,
      color: "from-teal-500 to-green-500",
      location: "Argentina",
      description: "Tratamiento especializado de la columna cervical mediante RPG"
    }
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
            className="p-3 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl shadow-lg"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <FaTrophy className="text-white text-2xl" />
          </motion.div>
          <h3 className="text-3xl lg:text-4xl font-bold text-white">
            Certificaciones y{' '}
            <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
              Logros
            </span>
          </h3>
        </div>
        <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-400 mx-auto rounded-full"></div>
        <p className="text-white/70 text-lg max-w-2xl mx-auto">
          Formación continua y especializada que garantiza la excelencia en el tratamiento osteopático
        </p>
      </motion.div>

      {/* Grid de certificaciones */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            className="group relative bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 overflow-hidden hover:bg-white/15 transition-all duration-500 cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            whileHover={{ y: -8, scale: 1.02 }}
            onClick={() => openModal(cert.image)}
          >
            {/* Gradiente de fondo animado */}
            <motion.div
              className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
            />
            
            {/* Contenido de la tarjeta */}
            <div className="relative z-10 p-6 space-y-4">
              
              {/* Header con icono y tipo */}
              <div className="flex items-start justify-between">
                <motion.div
                  className={`p-3 bg-gradient-to-br ${cert.color} rounded-xl shadow-lg`}
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <cert.icon className="text-white text-xl" />
                </motion.div>
                
                <div className="text-right">
                  <span className={`px-3 py-1 bg-gradient-to-r ${cert.color} text-white rounded-full text-xs font-bold shadow-lg`}>
                    {cert.type}
                  </span>
                  <div className="flex items-center gap-1 mt-2 justify-end">
                    <FaCalendarAlt className="text-white/60 text-xs" />
                    <span className="text-white/80 text-sm font-medium">{cert.year}</span>
                  </div>
                </div>
              </div>

              {/* Título y descripción */}
              <div className="space-y-3">
                <h4 className="text-white font-bold text-lg leading-tight group-hover:text-amber-200 transition-colors duration-300">
                  {cert.title}
                </h4>
                
                <div className="space-y-2">
                  <p className="text-cyan-200 font-semibold text-sm">{cert.institution}</p>
                  <div className="flex items-center gap-2">
                    <FaMapMarkerAlt className="text-white/60 text-xs" />
                    <span className="text-white/70 text-xs">{cert.location}</span>
                  </div>
                </div>
                
                <p className="text-white/80 text-sm leading-relaxed line-clamp-3">
                  {cert.description}
                </p>
              </div>

              {/* Call to action */}
              <motion.div
                className="flex items-center justify-between pt-4 border-t border-white/20"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <span className="text-white/60 text-xs font-medium">Ver certificado</span>
                <motion.div
                  className="flex items-center gap-2 text-amber-400"
                  whileHover={{ scale: 1.1 }}
                >
                  <FaEye className="text-lg" />
                  <span className="text-sm font-semibold">Ampliar</span>
                </motion.div>
              </motion.div>

              {/* Efecto de brillo en hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -skew-x-12 translate-x-full group-hover:-translate-x-full"
                style={{ transition: 'transform 0.8s ease-in-out, opacity 0.3s ease-in-out' }}
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Estadísticas de credenciales */}
      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        {[
          { number: "7+", label: "Certificaciones", icon: FaCertificate },
          { number: "6+", label: "Años de Estudio", icon: FaCalendarAlt },
          { number: "3", label: "Países de Formación", icon: FaMapMarkerAlt },
          { number: "100%", label: "Actualización Continua", icon: FaTrophy }
        ].map((stat, index) => (
          <motion.div
            key={index}
            className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1 + index * 0.1 }}
            whileHover={{ y: -3 }}
          >
            <motion.div
              className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-3"
              whileHover={{ scale: 1.1, rotate: 10 }}
            >
              <stat.icon className="text-white text-xl" />
            </motion.div>
            <motion.div
              className="text-3xl font-bold text-white mb-1"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 1.2 + index * 0.1, type: 'spring', stiffness: 200 }}
            >
              {stat.number}
            </motion.div>
            <p className="text-white/70 text-sm font-medium">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default AboutCertifications;
