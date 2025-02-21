import React from 'react';
import { Link } from 'react-router-dom';

const Osteopathy = () => {
    return (
        <div className="bg-gradient-to-r from-blue-600 to-teal-500 py-24 px-6">
            <div className="max-w-3xl mx-auto text-center">
                {/* Título */}
                <h2 className="text-5xl font-extrabold mb-8 text-white leading-snug animate__animated animate__fadeInUp">
                    ¿Qué es la Osteopatía?
                </h2>

                {/* Primer bloque de texto e imagen */}
                <div className="flex flex-col md:flex-row items-center mb-12">
                    <div className="w-full md:w-1/2 pr-6 mb-6 md:mb-0">
                        <img
                            src="assets/webp/spine-model-standing-desk-unrecognizable-doctor.webp"
                            alt="Modelo de columna vertebral de un osteópata usando equipo de oficina"
                            className="w-full h-auto rounded-lg shadow-lg transition-transform transform hover:scale-105"
                        />
                        <img
                            src="assets/webp/ostepatia4.webp"
                            alt="Técnicas osteopáticas para tratamiento de columna"
                            className="mt-12 w-full h-auto rounded-lg shadow-lg transition-transform transform hover:scale-105"
                        />
                    </div>
                    <div className="w-full md:w-1/2 text-left text-lg text-gray-100 space-y-6">
                        <p className="mb-6 text-xl">
                            La <strong>osteopatía</strong> es una práctica terapéutica basada en la idea de que el cuerpo humano tiene una capacidad natural para curarse y mantenerse saludable. Los osteópatas se centran en el sistema musculoesquelético (huesos, músculos, articulaciones y tejidos conectivos) y en su relación con el sistema neurovegetativo, ya que ambos influyen en el equilibrio y bienestar general del organismo.
                        </p>
                        <img
                            src="assets/webp/ostepatia1.webp"
                            alt="Osteópata manipulando una columna vertebral de un paciente"
                            className="w-full h-auto rounded-lg shadow-lg mb-4 transition-transform transform hover:scale-105"
                        />
                        <p className="mb-6 text-xl">
                            La osteopatía utiliza una variedad de técnicas manuales, como masajes, manipulaciones articulares, estiramientos y ejercicios terapéuticos, para aliviar el dolor y mejorar el funcionamiento del cuerpo. En términos más simples, los osteópatas creen que muchas enfermedades y dolencias pueden estar relacionadas con partes del cuerpo que han perdido su capacidad de moverse correctamente. Al corregir estos desajustes, el cuerpo puede funcionar mejor y sanar de forma más eficaz.
                        </p>
                    </div>
                </div>

                {/* Segundo bloque de texto e imagen */}
                <div className="flex flex-col md:flex-row items-center mb-12 gap-8">
                    {/* Contenedor de imágenes */}
                    <div className="w-full md:w-1/2 flex flex-col gap-6">
                        <img
                            src="assets/webp/sistema-nervioso1.webp"
                            alt="Sistema nervioso 1"
                            className="w-full h-auto rounded-lg shadow-lg transition-transform transform hover:scale-105"
                        />
                        <img
                            src="assets/webp/sistema-nervioso2.webp"
                            alt="Sistema nervioso 2"
                            className="w-full h-auto rounded-lg shadow-lg transition-transform transform hover:scale-105"
                        />
                    </div>
                    {/* Contenedor del texto */}
                    <div className="w-full md:w-1/2 px-6 text-left space-y-4">
                        <h2 className="text-2xl font-semibold text-gray-100 mb-4">Principios Fundamentales de la Osteopatía</h2>
                        <p className="mb-4 text-lg text-gray-100">
                            <strong>El cuerpo es una unidad:</strong> Todos los sistemas están interconectados. El sistema musculoesquelético, el sistema nervioso y el sistema circulatorio trabajan en sinergia para mantener la homeostasis y la salud global.
                        </p>
                        <p className="mb-4 text-lg text-gray-100">
                            <strong>Capacidad de autorregulación y autocuración:</strong> El cuerpo posee mecanismos innatos de reparación y equilibrio. La osteopatía busca liberar restricciones y mejorar la movilidad para optimizar estos procesos fisiológicos.
                        </p>
                        <p className="mb-4 text-lg text-gray-100">
                            <strong>Relación entre estructura y función:</strong> Una alteración en la alineación articular, la tensión muscular o la movilidad fascial puede afectar el funcionamiento de órganos y sistemas, influyendo en el bienestar general.
                        </p>
                        <p className="font-semibold text-lg text-gray-200">
                            El tratamiento osteopático se basa en identificar el origen del trauma, que puede ser de origen físico, químico o emocional, restaurando así el equilibrio del cuerpo de manera integral.
                        </p>
                    </div>
                </div>

                {/* ¿Cómo se realiza el tratamiento osteopático? */}
                <h3 className="text-4xl font-semibold text-white mt-12 mb-6">¿Cómo se realiza el Tratamiento Osteopático?</h3>

                {/* Video de Osteopatía */}
                <div className="mb-8">
                    <p className="text-lg text-gray-100 mb-4">Mira este video donde explicamos las técnicas osteopáticas utilizadas para tratar diversas dolencias.</p>
                    <video
                        width="100%" 
                        height="400" 
                        controls
                        className="rounded-lg shadow-2xl transition-transform transform hover:scale-105"
                    >
                        <source src="assets/videos/franciscovid1.mp4" type="video/mp4" />
                        Tu navegador no soporta el formato de video.
                    </video>
                </div>

                {/* Beneficios de la osteopatía */}
                <div className="mb-12">
                    <h3 className="text-4xl font-semibold text-white mb-4">Beneficios de la Osteopatía</h3>
                    <ul className="list-disc text-left text-xl mx-auto max-w-2xl text-gray-100 space-y-2">
                        <li>Alivio eficaz de dolores musculares y articulares crónicos y agudos.</li>
                        <li>Mejora de la circulación sanguínea y la flexibilidad articular.</li>
                        <li>Reducción del estrés y la tensión muscular, contribuyendo al bienestar general.</li>
                        <li>Facilitación de una recuperación postquirúrgica más rápida y menos dolorosa.</li>
                        <li>Corrección de problemas posturales y mejora de la movilidad corporal.</li>
                        <li>Tratamiento específico para afecciones como la ciática, migrañas y dolores de cabeza.</li>
                        <li>Mejora de la coordinación y el equilibrio corporal, optimizando el rendimiento físico.</li>
                    </ul>
                </div>

                {/* Llamada a la acción */}
                <div className="mt-8">
                    <p className="text-lg text-gray-100 mb-4">Si estás interesado en un tratamiento osteopático personalizado, no dudes en ponerte en contacto con nosotros para más información.</p>
                    <Link 
                        to="/turnos-whatsapp" 
                        className="bg-teal-600 text-white py-2 px-6 rounded-full text-xl hover:bg-teal-700 transition duration-300"
                    >
                        Contáctanos
                    </Link>
                </div>

                {/* Scroll to top */}
                <div className="fixed bottom-4 right-4">
                    <button 
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
                        className="bg-teal-600 p-3 rounded-full shadow-lg hover:bg-teal-700 transition duration-300"
                        aria-label="Volver al principio"
                    >
                        <i className="fa fa-arrow-up text-white text-xl"></i>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Osteopathy;
