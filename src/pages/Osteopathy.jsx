import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowUp } from 'react-icons/fi';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Osteopathy = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-teal-500 py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        
        {/* Sección: ¿Qué es la Osteopatía? */}
        <section>
          <motion.h2
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-5xl font-extrabold mb-8 text-white leading-snug"
          >
            ¿Qué es la Osteopatía?
          </motion.h2>
        </section>

        {/* Primer bloque de texto e imágenes */}
        <section className="flex flex-col md:flex-row items-center mb-12">
          <div className="w-full md:w-1/2 pr-6 mb-6 md:mb-0">
            <motion.img
              src="assets/webp/spine-model-standing-desk-unrecognizable-doctor.webp"
              alt="Modelo de columna vertebral de un osteópata usando equipo de oficina"
              className="w-full h-auto rounded-lg shadow-lg transition-transform transform hover:scale-105"
              loading="lazy"
              whileHover={{ scale: 1.05 }}
            />
            <motion.img
              src="assets/webp/ostepatia4.webp"
              alt="Técnicas osteopáticas para tratamiento de columna"
              className="mt-12 w-full h-auto rounded-lg shadow-lg transition-transform transform hover:scale-105"
              loading="lazy"
              whileHover={{ scale: 1.05 }}
            />
          </div>
          <div className="w-full md:w-1/2 text-left text-lg text-gray-100 space-y-6">
            <motion.p
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-6 text-xl"
            >
              La <strong>osteopatía</strong> es una práctica terapéutica basada en la idea de que el cuerpo humano tiene una capacidad natural para curarse y mantenerse saludable. Los osteópatas se centran en el sistema musculoesquelético (huesos, músculos, articulaciones y tejidos conectivos) y en su relación con el sistema neurovegetativo, ya que ambos influyen en el equilibrio y bienestar general del organismo.
            </motion.p>
            <motion.img
              src="assets/webp/ostepatia1.webp"
              alt="Osteópata manipulando una columna vertebral de un paciente"
              className="w-full h-auto rounded-lg shadow-lg mb-4 transition-transform transform hover:scale-105"
              loading="lazy"
              whileHover={{ scale: 1.05 }}
            />
            <motion.p
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-6 text-xl"
            >
              La osteopatía utiliza una variedad de técnicas manuales, como masajes, manipulaciones articulares, estiramientos y ejercicios terapéuticos, para aliviar el dolor y mejorar el funcionamiento del cuerpo. En términos más simples, los osteópatas creen que muchas enfermedades y dolencias pueden estar relacionadas con partes del cuerpo que han perdido su capacidad de moverse correctamente. Al corregir estos desajustes, el cuerpo puede funcionar mejor y sanar de forma más eficaz.
            </motion.p>
          </div>
        </section>

        {/* Segundo bloque de texto e imágenes */}
        <section className="flex flex-col md:flex-row items-center mb-12 gap-8">
          <div className="w-full md:w-1/2 flex flex-col gap-6">
            <motion.img
              src="assets/webp/sistema-nervioso1.webp"
              alt="Sistema nervioso 1"
              className="w-full h-auto rounded-lg shadow-lg transition-transform transform hover:scale-105"
              loading="lazy"
              whileHover={{ scale: 1.05 }}
            />
            <motion.img
              src="assets/webp/sistema-nervioso2.webp"
              alt="Sistema nervioso 2"
              className="w-full h-auto rounded-lg shadow-lg transition-transform transform hover:scale-105"
              loading="lazy"
              whileHover={{ scale: 1.05 }}
            />
          </div>
          <div className="w-full md:w-1/2 px-6 text-left space-y-4">
            <motion.h2
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-2xl font-semibold text-gray-100 mb-4"
            >
              Principios Fundamentales de la Osteopatía
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-4 text-lg text-gray-100"
            >
              <strong>El cuerpo es una unidad:</strong> Todos los sistemas están interconectados. El sistema musculoesquelético, el sistema nervioso y el sistema circulatorio trabajan en sinergia para mantener la homeostasis y la salud global.
            </motion.p>
            <motion.p
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-4 text-lg text-gray-100"
            >
              <strong>Capacidad de autorregulación y autocuración:</strong> El cuerpo posee mecanismos innatos de reparación y equilibrio. La osteopatía busca liberar restricciones y mejorar la movilidad para optimizar estos procesos fisiológicos.
            </motion.p>
            <motion.p
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-4 text-lg text-gray-100"
            >
              <strong>Relación entre estructura y función:</strong> Una alteración en la alineación articular, la tensión muscular o la movilidad fascial puede afectar el funcionamiento de órganos y sistemas, influyendo en el bienestar general.
            </motion.p>
            <motion.p
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="font-semibold text-lg text-gray-200"
            >
              El tratamiento osteopático se basa en identificar el origen del trauma, que puede ser de origen físico, químico o emocional, restaurando así el equilibrio del cuerpo de manera integral.
            </motion.p>
          </div>
        </section>

        {/* Sección: Tratamiento Osteopático (Video) */}
        <section>
          <motion.h3
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-4xl font-semibold text-white mt-12 mb-6"
          >
            ¿Cómo se realiza el Tratamiento Osteopático?
          </motion.h3>
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-8"
          >
            <p className="text-lg text-gray-100 mb-4">
              Mira este video donde explicamos las técnicas osteopáticas utilizadas para tratar diversas dolencias.
            </p>
            <div className="w-full max-w-md mx-auto aspect-[4/3]">
              <video
                className="w-full h-full rounded-lg shadow-2xl transition-transform transform hover:scale-105 object-contain"
                controls
              >
                <source src="assets/videos/osteopatia6.webm" type="video/webm" />
                <source src="assets/videos/osteopatia6.mp4" type="video/mp4" />
                Tu navegador no soporta el formato de video.
              </video>
            </div>
          </motion.div>
        </section>

        {/* Sección: Beneficios de la Osteopatía */}
        <section className="mb-12">
          <motion.h3
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-4xl font-semibold text-white mb-4"
          >
            Beneficios de la Osteopatía
          </motion.h3>
          <motion.ul
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="list-disc text-left text-xl mx-auto max-w-2xl text-gray-100 space-y-2"
          >
            <li>Alivio eficaz de dolores musculares y articulares crónicos y agudos.</li>
            <li>Mejora de la circulación sanguínea y la flexibilidad articular.</li>
            <li>Reducción del estrés y la tensión muscular, contribuyendo al bienestar general.</li>
            <li>Facilitación de una recuperación postquirúrgica más rápida y menos dolorosa.</li>
            <li>Corrección de problemas posturales y mejora de la movilidad corporal.</li>
            <li>Tratamiento específico para afecciones como la ciática, migrañas y dolores de cabeza.</li>
            <li>Mejora de la coordinación y el equilibrio corporal, optimizando el rendimiento físico.</li>
          </motion.ul>
        </section>

        {/* Llamada a la acción */}
        <section className="mt-8">
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-lg text-gray-100 mb-4"
          >
            Si estás interesado en un tratamiento osteopático personalizado, no dudes en ponerte en contacto con nosotros para más información.
          </motion.p>
          <motion.div whileHover={{ scale: 1.05 }}>
            <Link 
              to="/turnos-whatsapp" 
              className="bg-teal-600 text-white py-2 px-6 rounded-full text-xl hover:bg-teal-700 transition duration-300"
            >
              Contáctanos
            </Link>
          </motion.div>
        </section>

        {/* Botón "Scroll to Top" */}
        <motion.div 
          className="fixed bottom-4 right-4"
          whileHover={{ scale: 1.1 }}
        >
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
            className="bg-teal-600 p-3 rounded-full shadow-lg hover:bg-teal-700 transition duration-300"
            aria-label="Volver al principio"
          >
            <FiArrowUp className="text-white text-xl" />
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Osteopathy;
