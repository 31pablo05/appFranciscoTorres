import React from 'react';
import { FaInstagram, FaFacebookF, FaWhatsapp, FaGraduationCap, FaBriefcase, FaTrophy } from 'react-icons/fa';

const About = () => {
    return (
        <div className="bg-gradient-to-r from-blue-600 to-teal-500 py-24 px-6">
                   <div className="max-w-6xl mx-auto">
                   <h2 className="text-5xl font-semibold mb-8 mt-12 text-blue-700 text-center hover:text-blue-900 transition-all duration-300">
  ¿Quién soy?
</h2>


                {/* Sección de imagen y descripción */}
                <div className="flex flex-col md:flex-row items-center justify-between mb-12">
                    <div className="flex-shrink-0 mb-6 md:mb-0 md:w-1/3 relative overflow-hidden rounded-xl shadow-lg">
                        <img 
                            src="assets/webp/francisco1.webp" 
                            alt="Francisco Torres - Osteópata en consulta" 
                            className="w-full h-full object-cover rounded-xl transition-transform duration-500 ease-in-out hover:scale-110 hover:shadow-2xl"
                            loading="lazy"
                        />
                    </div>
                    <div className="md:w-2/3 md:pl-10">
                        <p className="text-2xl text-blue-900 mb-6 font-medium leading-relaxed">
                            Soy Francisco Torres, osteópata comprometido con tu bienestar físico. A través de técnicas especializadas, me enfoco en brindarte un tratamiento personalizado que te ayude a aliviar el dolor, mejorar la movilidad y restaurar el equilibrio de tu cuerpo.
                        </p>
                    </div>
                </div>

                {/* Caja de Experiencia y formación */}
                <div className="bg-white p-8 rounded-xl shadow-lg mb-12">
                    <h3 className="text-3xl font-semibold text-blue-600 mb-4 flex items-center"><FaGraduationCap className="mr-2"/> Mi experiencia y formación</h3>
                    <ul className="list-none space-y-2 text-blue-800 text-lg">
                        <li><FaBriefcase className="inline mr-2 text-blue-500"/> Licenciatura en Kinesiología y Fisiatría en la Universidad de Mendoza</li>
                        <li><FaBriefcase className="inline mr-2 text-blue-500"/> Escuela de Osteopatía de Madrid</li>
                        <li><FaBriefcase className="inline mr-2 text-blue-500"/> Estudió en la Universidad de Mendoza</li>
                        <li><FaBriefcase className="inline mr-2 text-blue-500"/> Estudió en UIPTM</li>
                        <li><FaBriefcase className="inline mr-2 text-blue-500"/> Trabaja en la Cooperadora Hospital Roberto Gandini</li>
                        <li><FaBriefcase className="inline mr-2 text-blue-500"/> Trabaja en ATM Odontología</li>
                    </ul>
                </div>

                {/* Caja de Certificaciones */}
                <div className="bg-blue-50 py-8 px-6 rounded-xl shadow-xl mb-12">
                    <h3 className="text-3xl font-semibold text-blue-600 mb-4 flex items-center"><FaTrophy className="mr-2"/> Certificaciones y logros</h3>
                    <ul className="list-none space-y-2 text-blue-800 text-lg">
                        <li><FaTrophy className="inline mr-2 text-yellow-500"/> Certificación en Osteopatía Avanzada, 2015</li>
                        <li><FaTrophy className="inline mr-2 text-yellow-500"/> Diploma en Técnicas de Rehabilitación Postquirúrgica, 2017</li>
                        <li><FaTrophy className="inline mr-2 text-yellow-500"/> Premio al Mejor Osteópata de la Región, 2020</li>
                    </ul>
                </div>

                {/* Enlaces a redes sociales */}
                <div className="mb-12 text-center">
                    <h3 className="text-3xl font-semibold text-blue-600 mb-4">Conéctate conmigo</h3>
                    <p className="text-lg text-blue-900 mb-4">Puedes encontrarme en mis redes sociales:</p>
                    <div className="flex justify-center space-x-6">
                        <a href="https://www.instagram.com/francisco_torres" aria-label="Instagram Francisco Torres" className="text-blue-600 hover:text-blue-700 transition-colors">
                            <FaInstagram className="text-4xl" />
                        </a>
                        <a href="https://www.facebook.com/francisco_torres" aria-label="Facebook Francisco Torres" className="text-blue-600 hover:text-blue-700 transition-colors">
                            <FaFacebookF className="text-4xl" />
                        </a>
                        <a href="/turnos-whatsapp" aria-label="WhatsApp Francisco Torres" className="text-blue-600 hover:text-blue-700 transition-colors">
                            <FaWhatsapp className="text-4xl" />
                        </a>
                    </div>
                </div>

                {/* Llamada a la acción */}
                <div className="mt-12 text-center">
                    <p className="text-lg text-blue-900 mb-4">¿Tienes alguna pregunta o quieres agendar una consulta? Estoy aquí para ayudarte.</p>
                    <a 
                        href="/turnos-whatsapp"
                        className="bg-blue-600 text-white py-3 px-8 rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105"
                    >
                        Solicita tu turno
                    </a>
                </div>
            </div>
        </div>
    );
}

export default About;
