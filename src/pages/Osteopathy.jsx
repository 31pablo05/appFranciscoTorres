import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, type: 'spring', stiffness: 80 } },
};

const Osteopathy = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-700 via-teal-500 to-blue-800 px-2 sm:px-6 py-16">
      <div className="max-w-5xl mx-auto w-full flex flex-col gap-16">
        {/* Sección: ¿Qué es la Osteopatía? */}
        <motion.section
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="rounded-3xl bg-white/30 backdrop-blur-xl shadow-2xl p-8 md:p-14 flex flex-col items-center border border-blue-200/30 mt-24"
        >
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-teal-400 to-blue-700 drop-shadow-lg text-center"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            ¿Qué es la Osteopatía?
          </motion.h2>
          <motion.p
            className="text-xl text-gray-800 mb-10 max-w-3xl mx-auto"
            variants={fadeInUp}
          >
            La <strong>osteopatía</strong> es una práctica terapéutica basada en la idea de que el cuerpo humano tiene una capacidad natural para curarse y mantenerse saludable. Los osteópatas se centran en el sistema musculoesquelético (huesos, músculos, articulaciones y tejidos conectivos) y en su relación con el sistema neurovegetativo, ya que ambos influyen en el equilibrio y bienestar general del organismo.
          </motion.p>
          {/* Galería de imágenes animadas tipo card */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 w-full">
            {[{
              src: 'assets/webp/osteopathy2.webp',
              alt: 'Modelo de columna vertebral de un osteópata usando equipo de oficina'
            }, {
              src: 'assets/webp/spine-model-standing-desk-unrecognizable-doctor.webp',
              alt: 'Técnicas osteopáticas para tratamiento de columna'
            }, {
              src: 'assets/webp/osteopathy.webp',
              alt: 'Osteópata manipulando una columna vertebral de un paciente'
            }].map((img, i) => (
              <motion.div
                key={img.src}
                className="rounded-2xl overflow-hidden shadow-xl bg-white/60 border border-blue-200/40 hover:scale-[1.03] transition-transform duration-300 group flex items-center justify-center w-full h-64 md:h-72"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 + i * 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="max-w-full max-h-full h-full w-auto object-contain group-hover:scale-105 transition-transform duration-300 bg-white"
                  loading="lazy"
                  style={{ background: 'white' }}
                />
              </motion.div>
            ))}
          </div>
          <motion.p
            className="text-xl text-gray-800 max-w-3xl mx-auto"
            variants={fadeInUp}
          >
            La osteopatía utiliza una variedad de técnicas manuales, como masajes, manipulaciones articulares, estiramientos y ejercicios terapéuticos, para aliviar el dolor y mejorar el funcionamiento del cuerpo. En términos más simples, los osteópatas creen que muchas enfermedades y dolencias pueden estar relacionadas con partes del cuerpo que han perdido su capacidad de moverse correctamente. Al corregir estos desajustes, el cuerpo puede funcionar mejor y sanar de forma más eficaz.
          </motion.p>
        </motion.section>

        {/* Principios Fundamentales */}
        <motion.section
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center gap-10 rounded-3xl bg-white/30 backdrop-blur-xl shadow-2xl p-8 md:p-14 border border-blue-200/30"
        >
          <div className="w-full md:w-1/2 flex flex-col gap-6">
            {[{
              src: 'assets/webp/sistema-nervioso1.webp',
              alt: 'Sistema nervioso 1'
            }, {
              src: 'assets/webp/sistema-nervioso2.webp',
              alt: 'Sistema nervioso 2'
            }].map((img, i) => (
              <motion.div
                key={img.src}
                className="rounded-2xl overflow-hidden shadow-xl bg-white/60 border border-blue-200/40 hover:scale-[1.03] transition-transform duration-300 group flex items-center justify-center w-full aspect-[3/5] min-h-[320px] max-h-[480px]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 + i * 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300 bg-white"
                  loading="lazy"
                  style={{ background: 'white' }}
                />
              </motion.div>
            ))}
          </div>
          <div className="w-full md:w-1/2 px-0 md:px-6 text-left space-y-4">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-500 to-blue-900 drop-shadow-lg mb-4"
              variants={fadeInUp}
            >
              Principios Fundamentales de la Osteopatía
            </motion.h2>
            <motion.ul className="space-y-4 text-lg text-gray-800" variants={fadeInUp}>
              <li><strong>El cuerpo es una unidad:</strong> Todos los sistemas están interconectados. El sistema musculoesquelético, el sistema nervioso y el sistema circulatorio trabajan en sinergia para mantener la homeostasis y la salud global.</li>
              <li><strong>Capacidad de autorregulación y autocuración:</strong> El cuerpo posee mecanismos innatos de reparación y equilibrio. La osteopatía busca liberar restricciones y mejorar la movilidad para optimizar estos procesos fisiológicos.</li>
              <li><strong>Relación entre estructura y función:</strong> Una alteración en la alineación articular, la tensión muscular o la movilidad fascial puede afectar el funcionamiento de órganos y sistemas, influyendo en el bienestar general.</li>
              <li className="font-semibold text-blue-900">El tratamiento osteopático se basa en identificar el origen del trauma, que puede ser de origen físico, químico o emocional, restaurando así el equilibrio del cuerpo de manera integral.</li>
            </motion.ul>
          </div>
        </motion.section>

        {/* Sección: Tratamiento Osteopático (Video) */}
        <motion.section
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="rounded-3xl bg-white/30 backdrop-blur-xl shadow-2xl p-8 md:p-14 flex flex-col items-center border border-blue-200/30"
        >
          <motion.h3
            className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-teal-400 to-blue-700 drop-shadow-lg mb-6 text-center"
            variants={fadeInUp}
          >
            ¿Cómo se realiza el Tratamiento Osteopático?
          </motion.h3>
          <motion.div
            className="w-full max-w-md mx-auto aspect-[4/3] mb-6"
            variants={fadeInUp}
          >
            <video
              className="w-full h-full rounded-lg shadow-2xl transition-transform transform hover:scale-105 object-contain"
              controls
            >
              <source src="assets/videos/osteopatia6.webm" type="video/webm" />
              <source src="assets/videos/osteopatia6.mp4" type="video/mp4" />
              Tu navegador no soporta el formato de video.
            </video>
          </motion.div>
        </motion.section>

        {/* Sección: Beneficios de la Osteopatía */}
        <motion.section
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="rounded-3xl bg-white/30 backdrop-blur-xl shadow-2xl p-8 md:p-14 flex flex-col items-center border border-blue-200/30"
        >
          <motion.h3
            className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-teal-400 to-blue-700 drop-shadow-lg mb-4 text-center"
            variants={fadeInUp}
          >
            Beneficios de la Osteopatía
          </motion.h3>
          <motion.ul
            className="list-disc text-left text-xl mx-auto max-w-2xl text-gray-800 space-y-2"
            variants={fadeInUp}
          >
            <li>Alivio eficaz de dolores musculares y articulares crónicos y agudos.</li>
            <li>Mejora de la circulación sanguínea y la flexibilidad articular.</li>
            <li>Reducción del estrés y la tensión muscular, contribuyendo al bienestar general.</li>
            <li>Facilitación de una recuperación postquirúrgica más rápida y menos dolorosa.</li>
            <li>Corrección de problemas posturales y mejora de la movilidad corporal.</li>
            <li>Tratamiento específico para afecciones como la ciática, migrañas y dolores de cabeza.</li>
            <li>Mejora de la coordinación y el equilibrio corporal, optimizando el rendimiento físico.</li>
          </motion.ul>
        </motion.section>

        {/* Llamada a la acción */}
        <motion.section
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col items-center mt-8"
        >
          <motion.div
            className="w-full flex flex-col items-center bg-white rounded-2xl p-8 md:p-12 shadow-2xl border border-blue-200/40 mb-2 z-10 relative"
            variants={fadeInUp}
          >
            <p className="text-3xl md:text-5xl font-extrabold text-blue-800 text-center mb-6 leading-tight drop-shadow-xl">
              ¿Te gustaría un tratamiento osteopático personalizado?
              <br className="hidden md:block" />
              <span className="block text-teal-600 font-bold md:text-4xl text-2xl mt-2">¡Contactanos y resolvé tus dudas!</span>
            </p>
            <Link 
              to="/turnos-whatsapp" 
              className="bg-gradient-to-r from-teal-500 to-blue-700 text-white py-4 px-12 rounded-full text-2xl font-extrabold shadow-lg hover:bg-teal-700 hover:text-white transition duration-300 border-2 border-teal-300 mt-2 tracking-wide z-20"
              style={{ position: 'relative' }}
            >
              <span className="flex items-center gap-3 justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12c0 4.97 4.03 9 9 9 1.64 0 3.18-.44 4.5-1.2l4.13 1.13a1.13 1.13 0 0 0 1.39-1.39l-1.13-4.13A8.963 8.963 0 0 0 21.75 12c0-4.97-4.03-9-9-9s-9 4.03-9 9Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 11.25c-.41 0-.75.34-.75.75s.34.75.75.75.75-.34.75-.75-.34-.75-.75-.75ZM12 11.25c-.41 0-.75.34-.75.75s.34.75.75.75.75-.34.75-.75-.34-.75-.75-.75ZM8.25 11.25c-.41 0-.75.34-.75.75s.34.75.75.75.75-.34.75-.75-.34-.75-.75-.75Z" />
                </svg>
                <span>Contáctanos</span>
              </span>
            </Link>
          </motion.div>
        </motion.section>
      </div>
      {/* Flecha flotante eliminada para evitar superposición con el botón de WhatsApp */}
    </div>
  );
};

export default Osteopathy;
