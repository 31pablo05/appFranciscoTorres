import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import FAQ from "../components/FAQ";
import Banner from "../components/Banner";
import AplicacionesOsteopatia from "../components/AplicacionesOsteopatia";


const Section = ({ title, children, className }) => (
    <section className={`py-12 px-6 ${className}`}>
        <h2 className="text-4xl md:text-5xl font-semibold text-blue-600 drop-shadow-md text-center md:text-left">
            {title}
        </h2>
        <div className="mt-6 text-xl leading-loose text-gray-700">{children}</div>
    </section>
);

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } }
};

const Home = () => {
    return (
        <div className="relative flex flex-col items-center">
            {/* Video de fondo con Parallax */}
            <video
    autoPlay
    loop
    muted
    preload="auto"
    className="fixed top-0 left-0 w-full h-full object-cover z-0"
>
    <source src="assets/videos/fondoosteopatia3.webm" type="video/webm" />
    Tu navegador no soporta video.
</video>


            <div className="relative z-10 flex flex-col items-center">
                {/* Hero Section con animación de fade-in y slide-up */}
                <motion.div 
                    initial="hidden" 
                    animate="visible" 
                    variants={fadeInUp}
                    className="pt-24 md:pt-32 px-4 flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto"
                >
                    {/* Imagen con efecto de zoom al hover */}
<motion.div
    className="w-full md:w-1/2 flex justify-center p-4 order-first md:order-none"
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.3 }}
    initial={{ opacity: 0 }}  // Iniciar con opacidad cero
    animate={{ opacity: 1 }}  // Gradualmente aumentar la opacidad
    // Ajuste para pantallas pequeñas
    whileInView={{ opacity: 1 }}  // Asegura que la imagen sea visible cuando se ve en la pantalla
>
    <img
        src="assets/webp/francisco1.webp"
        alt="Francisco Torres, osteópata profesional, con amplia experiencia en tratamientos de osteopatía y kinesiología"
        className="rounded-2xl shadow-xl w-full max-w-lg object-cover md:transition-all md:duration-300 md:hover:scale-105" 
    />
</motion.div>


<motion.div 
  className="text-center md:text-left w-full md:w-1/2 mb-6 p-5 rounded-lg bg-black bg-opacity-60 shadow-lg"
  initial={{ opacity: 0, y: 20 }}  
  animate={{ opacity: 1, y: 0 }}  
  transition={{ duration: 1, delay: 0.3 }}  
>
  <h1 className="text-3xl md:text-4xl font-bold leading-snug text-white">
    Lic. <span className="text-blue-400">Francisco Torres</span>
    <br />
    <span className="text-2xl md:text-3xl font-medium text-gray-300">
      Osteopatía & Kinesiología
    </span>
  </h1>

  <p className="mt-4 text-lg md:text-xl text-gray-300 leading-relaxed">
    "Más de <span className="font-semibold text-blue-400">10 años de experiencia</span> ayudando a recuperar movilidad y aliviar dolores con técnicas avanzadas en <span className="text-blue-400">osteopatía</span> y <span className="text-blue-400">kinesiología</span>."
  </p>
</motion.div>


                </motion.div>
                <AplicacionesOsteopatia />

                {/* Banner con horarios de atención */}
                <Banner />

                {/* Beneficios y Preguntas Frecuentes con Fade-In al hacer scroll */}
                <div className="flex flex-col md:flex-row max-w-6x1 w-full gap-6 md:gap-10 py-12 px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full md:w-1/2 bg-white p-8 shadow-lg rounded-2xl max-w-md mx-auto"
                    >
                        <Section title="Beneficios de la Osteopatía">
                            <ul className="text-xl font-semibold text-gray-800 list-disc list-inside space-y-4">
                                <li>Alivio del dolor muscular, articular y tensional</li>
                                <li>Mejora la movilidad y flexibilidad corporal</li>
                                <li>Optimiza la postura y corrige desequilibrios biomecánicos</li>
                                <li>Reduce el estrés y mejora la calidad del sueño</li>
                                <li>Favorece la circulación sanguínea y el drenaje linfático</li>
                                <li>Fortalece el sistema inmunológico y la recuperación física</li>
                                <li>Tratamiento natural, sin medicamentos ni efectos secundarios</li>
                            </ul>
                        </Section>
                    </motion.div>

                     {/* Nueva sección con la imagen de la columna vertebral */}
<motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className="w-full md:w-1/2 flex justify-center p-4 transform transition-all hover:scale-105 hover:shadow-2xl"
>
    <motion.img
        src="assets/webp/espalda-2.webp" // Asegúrate de tener la imagen en la carpeta correcta
        alt="Columna Vertebral"
        className="rounded-2xl shadow-xl w-full max-w-md object-cover border-4 border-transparent hover:border-blue-500 transition-all"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
    />
</motion.div>



                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full md:w-1/2 bg-gray-100 p-8 shadow-lg rounded-2xl max-w-md mx-auto"
                    >
                        <Section title="Preguntas Frecuentes">
                            <FAQ />
                        </Section>
                    </motion.div>
                </div>

                {/* CTA Mejorado con efecto pulsante */}
                <motion.div 
                    initial="hidden" 
                    animate="visible" 
                    variants={fadeInUp} 
                    className="bg-gradient-to-r from-blue-500 to-teal-500 text-center text-white rounded-2xl shadow-lg py-12 px-5 mb-12 "
                >
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 tracking-wide leading-tight">
                        Empieza hoy tu camino hacia el bienestar óptimo
                    </h2>
                    <p className="mb-8 text-lg sm:text-xl font-medium text-gray-100 opacity-90 max-w-4xl mx-auto">
                    "No te acostumbres al dolor. Con un enfoque personalizado y terapias avanzadas, te ayudamos a recuperar tu bienestar físico y a mejorar tu calidad de vida. Agenda tu cita hoy y siente la diferencia desde la primera sesión." </p>
                    <motion.Link
                        to="/turnos-whatsapp"
                        className="bg-white text-blue-600 py-4 px-8 rounded-lg shadow-xl text-lg font-medium"
                        whileHover={{ scale: 1.05 }}
                        animate={{ scale: [1, 1.1, 1], transition: { duration: 1.5, repeat: Infinity } }}
                    >
                        Agendar Cita
                    </motion.Link>
                </motion.div>
            </div>
        </div>
    );
};

export default Home;
