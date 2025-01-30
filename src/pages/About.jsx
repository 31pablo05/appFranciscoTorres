import React from 'react';
import { FaInstagram, FaFacebookF, FaWhatsapp } from 'react-icons/fa'; // Importar los íconos

const About = () => {
    return (
        <div className="bg-white py-20 px-6 mt-24">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-5xl font-semibold mb-8 text-blue-700 text-center">Quién Soy</h2>

                {/* Sección de imagen y descripción */}
                <div className="flex flex-col md:flex-row items-center justify-between mb-12">
                    {/* Foto del profesional */}
                    <div className="flex-shrink-0 mb-6 md:mb-0 md:w-1/3">
                        <img 
                            src="/assets/webp/profesional2.webp" 
                            alt="Francisco Torres - Osteópata" 
                            className="w-full h-full object-cover rounded-xl shadow-lg"
                        />
                    </div>

                    {/* Descripción breve */}
                    <div className="md:w-2/3 md:pl-10">
                        <p className="text-2xl text-blue-900 mb-6">
                            Soy Francisco Torres, osteópata con más de 10 años de experiencia en el cuidado de la salud física y el bienestar integral. Mi misión es mejorar tu calidad de vida a través de tratamientos personalizados que se adapten a tus necesidades específicas.
                        </p>
                    </div>
                </div>

                {/* Experiencia y formación */}
                <div className="text-left mb-12">
                    <h3 className="text-3xl font-semibold text-blue-600 mb-4">Mi Experiencia y Formación</h3>
                    <ul className="list-disc ml-8 text-blue-800 text-lg">
                        <li>Licenciado en Osteopatía por la Universidad X</li>
                        <li>Más de 10 años de experiencia trabajando con pacientes de diversas edades</li>
                        <li>Formación continua en técnicas avanzadas de osteopatía y fisioterapia</li>
                        <li>Miembro activo de la Asociación Nacional de Osteopatía</li>
                    </ul>
                </div>

                {/* Certificaciones */}
                <div className="bg-blue-50 py-8 px-6 rounded-xl shadow-xl mb-12">
                    <h3 className="text-3xl font-semibold text-blue-600 mb-4">Certificaciones y Logros</h3>
                    <ul className="list-disc ml-8 text-blue-800 text-lg">
                        <li>Certificación en Osteopatía Avanzada, 2015</li>
                        <li>Diploma en Técnicas de Rehabilitación Postquirúrgica, 2017</li>
                        <li>Premio al Mejor Osteópata de la Región, 2020</li>
                    </ul>
                </div>

                {/* Enlaces a redes sociales */}
                <div className="mb-12 text-center">
                    <h3 className="text-3xl font-semibold text-blue-600 mb-4">Conéctate conmigo</h3>
                    <p className="text-lg text-blue-900 mb-4">Puedes encontrarme en mis redes sociales:</p>
                    <div className="flex justify-center space-x-6">
                        <a href="https://www.instagram.com/francisco_torres" className="text-blue-600 hover:text-blue-700 transition-colors">
                            <FaInstagram className="text-4xl" />
                        </a>
                        <a href="https://www.facebook.com/francisco_torres" className="text-blue-600 hover:text-blue-700 transition-colors">
                            <FaFacebookF className="text-4xl" />
                        </a>
                        <a href="https://wa.me/1234567890" className="text-blue-600 hover:text-blue-700 transition-colors">
                            <FaWhatsapp className="text-4xl" />
                        </a>
                    </div>
                </div>

                {/* Llamada a la acción */}
                <div className="mt-12 text-center">
                    <p className="text-lg text-blue-900 mb-4">¿Tienes alguna pregunta o quieres agendar una consulta? Estoy aquí para ayudarte.</p>
                    <a 
                        href="/appointments" 
                        className="bg-blue-600 text-white py-3 px-8 rounded-lg hover:bg-blue-700 transition-all"
                    >
                        Solicita tu turno
                    </a>
                </div>
            </div>
        </div>
    );
}

export default About;
