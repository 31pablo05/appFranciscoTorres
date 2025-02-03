import React from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-10 z-20">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 md:space-x-6">
                    
                    {/* Información de contacto */}
                    <div className="text-left flex flex-col items-start space-y-4">
                        {/* Celular */}
                        <p className="text-lg flex items-center">
                            <FaPhoneAlt className="mr-2 text-blue-300" />
                            Cel: 
                            <a href="tel:+54 9 2945 41-6969" className="hover:text-blue-300 text-lg font-semibold">+54 9 2945 41-6969</a>
                        </p>

                        {/* Email */}
                        <p className="text-lg flex items-center">
                            <FaEnvelope className="mr-2 text-blue-300" />
                            Email: 
                            <a href="mailto:franciscitbogado@gmail.com" className="hover:text-blue-300 text-lg font-semibold">franciscitbogado@gmail.com</a>
                        </p>

                        {/* Dirección */}
                        <p className="text-lg flex items-center">
                            <FaMapMarkerAlt className="mr-2 text-blue-300" />
                            Jose de San Martín, Gdo Costa, Esquel - Chubut, Argentina.
                        </p>
                    </div>

                    {/* Redes sociales */}
                    <div className="flex justify-center md:justify-end space-x-8 text-4xl md:text-5xl">
                        <a 
                            href="https://wa.me/5492945416969" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="hover:text-blue-300 transition-transform transform hover:scale-110"
                            aria-label="Enlace a WhatsApp"
                        >
                            <FaWhatsapp />
                        </a>
                        <a 
                            href="https://www.instagram.com/osteopatía" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="hover:text-blue-300 transition-transform transform hover:scale-110"
                            aria-label="Enlace a Instagram"
                        >
                            <FaInstagram />
                        </a>
                        <a 
                            href="https://www.facebook.com/francisco.torres.37" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="hover:text-blue-300 transition-transform transform hover:scale-110"
                            aria-label="Enlace a Facebook"
                        >
                            <FaFacebook />
                        </a>
                        <a 
                            href="mailto:franciscitbogado@gmail.com" 
                            className="hover:text-blue-300 transition-transform transform hover:scale-110"
                            aria-label="Enlace al correo electrónico"
                        >
                            <FaEnvelope />
                        </a>
                    </div>
                </div>

                {/* Mensaje de desarrollo */}
                <div className="text-center mt-8 text-sm md:text-base">
                    <p>&copy; 2025 Osteopatía Francisco Torres. Todos los derechos reservados. | Desarrollado por <span className="font-semibold">Pablo Proboste</span></p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
