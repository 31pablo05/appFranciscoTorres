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
<div className="flex-shrink-0 mb-6 md:mb-0 md:w-1/3 relative overflow-hidden rounded-xl shadow-lg">
<img 
    src="/assets/webp/profesional2.webp" 
    alt="Francisco Torres - Osteópata" 
    className="w-full h-full object-cover rounded-xl transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:blur-sm transform hover:brightness-110"
/>

    <div className="absolute inset-0 bg-gradient-to-t from-black opacity-20 rounded-xl"></div>
</div>


                    {/* Descripción breve */}
                    <div className="md:w-2/3 md:pl-10">
                    <p className="text-2xl text-blue-900 mb-6 font-medium leading-relaxed">
    Soy Francisco Torres, osteópata comprometido con tu bienestar físico. A través de técnicas especializadas, me enfoco en brindarte un tratamiento personalizado que te ayude a aliviar el dolor, mejorar la movilidad y restaurar el equilibrio de tu cuerpo, permitiéndote llevar una vida más saludable y sin limitaciones.
</p>


                    </div>
                </div>

                {/* Experiencia y formación */}
                <div className="text-left mb-12">
                    <h3 className="text-3xl font-semibold text-blue-600 mb-4">Mi Experiencia y Formación</h3>
                    <ul className="list-disc ml-8 text-blue-800 text-lg">
                        <li>Licenciatura en Kinesiología y Fisiatría en Universidad de Mendoza</li>
                        <li>Escuela Osteopatía de Madrid</li>
                        <li>Estudió en la Universidad de Mendoza</li>
                        <li>Estudió en UIPTM</li>
                        <li>Trabaja en Cooperadora Hospital Roberto Gandini</li>
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
                        <a href="/turnos-whatsapp" className="text-blue-600 hover:text-blue-700 transition-colors">
                            <FaWhatsapp className="text-4xl" />
                        </a>
                    </div>
                </div>

                {/* Llamada a la acción */}
                <div className="mt-12 text-center">
                    <p className="text-lg text-blue-900 mb-4">¿Tienes alguna pregunta o quieres agendar una consulta? Estoy aquí para ayudarte.</p>
                    <a 
                        href="/turnos-whatsapp"
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
