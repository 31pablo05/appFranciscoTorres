import React from 'react';
import { Link } from 'react-router-dom';

const Osteopathy = () => {
    return (
        <div className="bg-gradient-to-r from-blue-600 to-teal-500 py-24 px-6">
            <div className="max-w-3xl mx-auto text-center">
                {/* Título */}
                <h2 className="text-5xl font-extrabold mb-8 text-white animate__animated animate__fadeInUp leading-snug">
                    ¿Qué es la Osteopatía?
                </h2>

                {/* Primer bloque de texto e imagen */}
                <div className="flex flex-col md:flex-row items-center mb-12">
                    <div className="w-full md:w-1/2 pr-6 mb-6 md:mb-0">
                        <img
                            src="assets/webp/spine-model-standing-desk-unrecognizable-doctor.webp"
                            alt="Osteopatía"
                            className="w-full h-auto rounded-lg shadow-lg"
                        />
                    </div>
                    <div className="w-full md:w-1/2 text-left text-lg text-gray-200">
                        <p className="mb-6 text-xl">
                            La <strong>osteopatía</strong> es una práctica terapéutica que se basa en la idea de que el cuerpo humano tiene una capacidad natural para curarse y mantenerse saludable. Los osteópatas se centran en el sistema musculoesquelético (huesos, músculos, articulaciones y tejidos conectivos) y en cómo estos sistemas pueden afectar a la salud en general.
                        </p>
                        <img
                            src="assets/webp/ostepatia1.webp"
                            alt="Técnicas de osteopatía"
                            className="w-full h-auto rounded-lg shadow-lg mb-4"
                        />
                        <p className="mb-6 text-xl">
                            La osteopatía utiliza una variedad de técnicas manuales, como masajes, manipulaciones articulares, estiramientos y ejercicios terapéuticos, para aliviar el dolor y mejorar el funcionamiento del cuerpo. En términos más simples, los osteópatas creen que muchas enfermedades y dolencias pueden estar relacionadas con desajustes en el sistema musculoesquelético. Al corregir estos desajustes, el cuerpo puede funcionar mejor y sanar de forma más eficaz.
                        </p>
                    </div>
                </div>

                {/* Segundo bloque de texto e imagen */}
                <div className="flex flex-col md:flex-row-reverse items-center mb-12">
                    <div className="w-full md:w-1/2 pl-6 mb-6 md:mb-0">
                        <img
                            src="assets/webp/osteopatia2.webp"
                            alt="Técnicas de osteopatía"
                            className="w-full h-auto rounded-lg shadow-lg mb-4"
                        />
                        <img
                            src="assets/webp/osteopatia3.webp"
                            alt="Técnicas de osteopatía"
                            className="w-full h-auto rounded-lg shadow-lg"
                        />
                    </div>
                    <div className="w-full md:w-1/2 text-left text-lg text-gray-200">
                        <p className="mb-4 text-xl font-semibold">
                            El cuerpo es una unidad: Todos los sistemas del cuerpo están interconectados y afectan a la salud de manera general.
                        </p>
                        <p className="mb-4 text-xl font-semibold">
                            El cuerpo tiene capacidad de <strong>auto-regulación y auto-sanación</strong>: El cuerpo tiene su propio mecanismo de curación y los osteópatas ayudan a facilitarlo.
                        </p>
                        <p className="mb-4 text-xl font-semibold">
                            La estructura y la función están relacionadas: El estado físico de las partes del cuerpo, como los músculos y las articulaciones, puede influir en el funcionamiento de otros sistemas, como el sistema nervioso o el circulatorio.
                        </p>
                        <p className="mb-4 text-xl font-semibold">
                            El tratamiento debe considerar al paciente como un todo: Los osteópatas tratan no solo los síntomas, sino también las causas subyacentes de la dolencia, considerando la salud física, emocional y ambiental del paciente.
                        </p>
                    </div>
                </div>

                {/* Aplicaciones comunes de la osteopatía */}
                <h3 className="text-4xl font-semibold text-white mt-12 mb-6">Aplicaciones comunes de la Osteopatía</h3>
                <ul className="list-disc text-left text-xl mx-auto max-w-2xl text-gray-100">
                    <li><strong>Tratamiento de dolor musculoesquelético:</strong> Espalda, cuello, hombros, etc.</li>
                    <li><strong>Dolores articulares o de movimiento:</strong> Articulaciones de las extremidades.</li>
                    <li><strong>Dolores de cabeza y migrañas.</strong></li>
                    <li><strong>Trastornos digestivos:</strong> Como el estreñimiento.</li>
                    <li><strong>Lesiones deportivas.</strong></li>
                    <li><strong>Dolores posturales derivados de tensiones musculares.</strong></li>
                </ul>

                {/* ¿Cómo se realiza el tratamiento osteopático? */}
                <h3 className="text-4xl font-semibold text-white mt-12 mb-6">¿Cómo se realiza el Tratamiento Osteopático?</h3>
                <p className="text-lg text-gray-200 mb-8 px-4 leading-relaxed">
                    El tratamiento osteopático comienza con un diagnóstico físico detallado del paciente. Este incluye una revisión exhaustiva de la historia médica del paciente, así como un examen físico. Con base en esta evaluación, los osteópatas aplican una variedad de técnicas manuales diseñadas para mejorar la circulación, aliviar el dolor y promover el movimiento adecuado de los músculos y las articulaciones.
                </p>

                {/* Video de Osteopatía */}
                <div className="mb-8">
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
                    <ul className="list-disc text-left text-xl mx-auto max-w-2xl text-gray-100">
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
                    <p className="text-lg text-gray-200 mb-4">Para obtener más información o agendar una consulta, no dudes en ponerte en contacto con nosotros. Nuestro equipo estará encantado de atenderte.</p>
                    <Link 
                        to="/turnos-whatsapp" 
                        className="bg-blue-600 text-white py-3 px-8 rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105"
                    >
                        Solicita tu consulta
                    </Link>
                </div>
            </div>

            {/* Botón scroll to top */}
            <div className="fixed bottom-10 left-10">
                <button 
                    onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} 
                    className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-all transform hover:scale-110"
                >
                    ↑
                </button>
            </div>
        </div>
    );
}

export default Osteopathy;
