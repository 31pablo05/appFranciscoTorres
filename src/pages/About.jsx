import React, { useState } from 'react';
import { FaInstagram, FaFacebookF, FaWhatsapp, FaGraduationCap, FaBriefcase, FaTrophy } from 'react-icons/fa';

const About = () => {
    // Estado para manejar la visibilidad del modal y la imagen seleccionada
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    // Función para abrir el modal con la imagen seleccionada
    const openModal = (image) => {
        setSelectedImage(image);
        setModalOpen(true);
    };

    // Función para cerrar el modal
    const closeModal = () => {
        setModalOpen(false);
        setSelectedImage(null);
    };

    return (
        <div className="bg-gradient-to-r from-blue-600 to-teal-500 py-24 px-6">
            <div className="max-w-6xl mx-auto text-white">
                <h2 className="text-5xl font-semibold mb-8 mt-12 text-center hover:text-gray-300 transition-all duration-300">
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
                        <p className="text-2xl text-white mb-6 font-medium leading-relaxed">
                        "Mi nombre es Francisco Torres, y mi pasión es acompañarte en el camino hacia un cuerpo más saludable. Como osteópata, trabajo para que puedas sentirte mejor, sin dolor y con mayor libertad de movimiento. Mi objetivo es brindarte herramientas para que tu bienestar físico se convierta en una parte integral de tu vida diaria, sin importar los desafíos que enfrentes."                        </p>
                    </div>
                </div>

                {/* Caja de Experiencia y formación */}
                <div className="bg-white p-8 rounded-xl shadow-lg mb-12 text-gray-900">
                    <h3 className="text-3xl font-semibold mb-4 flex items-center"><FaGraduationCap className="mr-2 text-blue-600"/> Mi experiencia y formación</h3>
                    <ul className="list-none space-y-2 text-lg">
                        <li><FaBriefcase className="inline mr-2 text-blue-500"/> Licenciatura en Kinesiología y Fisiatría en la Universidad de Mendoza</li>
                        <li><FaBriefcase className="inline mr-2 text-blue-500"/> Escuela de Osteopatía de Madrid</li>
                        <li><FaBriefcase className="inline mr-2 text-blue-500"/> Estudió en la Universidad de Mendoza</li>
                        <li><FaBriefcase className="inline mr-2 text-blue-500"/> Estudió en UIPTM</li>
                        <li><FaBriefcase className="inline mr-2 text-blue-500"/> Asociación Argentina de Kinesiología</li>
                        <li><FaBriefcase className="inline mr-2 text-blue-500"/> SAINT-MONT France</li>
                        <li><FaBriefcase className="inline mr-2 text-blue-500"/> Trabaja en la Cooperadora Hospital Roberto Gandini</li>
                        <li><FaBriefcase className="inline mr-2 text-blue-500"/> Trabaja en ATM Odontología</li>
                        <li><FaBriefcase className="inline mr-2 text-blue-500"/> Trabajo en Quality Salud Esquel (2016-2020) </li>
                    </ul>
                </div>

                {/* Caja de Certificaciones */}
                <div className="bg-white p-8 rounded-xl shadow-xl mb-12 text-gray-900">
                    <h3 className="text-3xl font-semibold mb-4 flex items-center"><FaTrophy className="mr-2 text-blue-600"/> Certificaciones y logros</h3>
                    <ul className="list-none space-y-2 text-lg">
                        <li 
                            onClick={() => openModal('assets/certificados/curso-kinésico-atm.webp')} 
                            className="cursor-pointer hover:text-blue-500 transition-all duration-300"
                        >
                            <FaTrophy className="inline mr-2 text-yellow-500"/> "Certificacion de manejo kinésico ATM"
                        </li>
                        <li 
                            onClick={() => openModal('assets/certificados/diploma-rehabilitacion-postquirurgica.webp')} 
                            className="cursor-pointer hover:text-blue-500 transition-all duration-300"
                        >
                            <FaTrophy className="inline mr-2 text-yellow-500"/> Diploma en Técnicas de Rehabilitación Postquirúrgica, 2017
                        </li>
                        <li 
                            onClick={() => openModal('assets/certificados/posgrado-rehabilitacion-cardiopulmonar.webp')} 
                            className="cursor-pointer hover:text-blue-500 transition-all duration-300"
                        >
                            <FaTrophy className="inline mr-2 text-yellow-500"/> "Posgrado de Rehabilitación Cardiopulmonar en la Fundación René Favaloro"
                        </li>
                    </ul>
                </div>

                {/* Enlaces a redes sociales */}
                <div className="mb-12 text-center">
                <h3 className="text-4xl font-bold text-white mb-6 text-center border-b-4 border-blue-600 pb-2">
    Conéctate conmigo
</h3>

                    <p className="text-lg text-gray-200 mb-4">Puedes encontrarme en mis redes sociales:</p>
                    <div className="flex justify-center space-x-6">
                        <a href="https://www.instagram.com/francisco_torres" aria-label="Instagram Francisco Torres" className="text-white hover:text-gray-300 transition-colors">
                            <FaInstagram className="text-4xl" />
                        </a>
                        <a href="https://www.facebook.com/francisco_torres" aria-label="Facebook Francisco Torres" className="text-white hover:text-gray-300 transition-colors">
                            <FaFacebookF className="text-4xl" />
                        </a>
                        <a href="/turnos-whatsapp" aria-label="WhatsApp Francisco Torres" className="text-white hover:text-gray-300 transition-colors">
                            <FaWhatsapp className="text-4xl" />
                        </a>
                    </div>
                </div>

                {/* Llamada a la acción */}
                <div className="mt-12 text-center">
                    <p className="text-lg text-gray-200 mb-4">¿Tienes alguna pregunta o quieres agendar una consulta? Estoy aquí para ayudarte.</p>
                    <a 
                        href="/turnos-whatsapp"
                        className="bg-white text-blue-600 py-3 px-8 rounded-lg hover:bg-gray-200 transition-all transform hover:scale-105 font-semibold shadow-md"
                    >
                        Solicita tu turno
                    </a>
                </div>
            </div>

            {/* Modal para mostrar la imagen de la certificación */}
            {modalOpen && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
                    <div className="relative bg-white p-6 rounded-lg shadow-lg">
                        <button 
                            onClick={closeModal} 
                            className="absolute top-2 right-2 text-black text-3xl font-semibold"
                        >
                            ×
                        </button>
                        <img src={selectedImage} alt="Certificación" className="max-w-full max-h-[80vh] object-contain" />
                    </div>
                </div>
            )}
        </div>
    );
}

export default About;
