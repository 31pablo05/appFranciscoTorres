import React from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 md:space-x-6">
                    
                    {/* Información de contacto */}
                    <div className="text-left flex flex-col items-start space-y-2">
                        <p className="text-lg">Jose de San Martín, Chubut, Argentina.</p>
                        <p className="text-lg">Cel: <a href="tel:+1234567890" className="hover:text-teal-400 text-lg">+123 456 7890</a></p>
                        <p className="text-lg">Email: <a href="mailto:info@osteopatía.com" className="hover:text-teal-400 text-lg">info@osteopatía.com</a></p>
                    </div>

                    {/* Enlaces importantes */}
                    <div className="flex justify-center md:justify-start space-x-6">
                        <a href="/contact" className="hover:text-teal-400 text-lg" aria-label="Enlace a la página de contacto">Contacto</a>
                        <a href="/privacy-policy" className="hover:text-teal-400 text-lg" aria-label="Enlace a la política de privacidad">Política de Privacidad</a>
                    </div>

                    {/* Redes sociales */}
                    <div className="flex justify-end space-x-6 text-3xl md:text-4xl">
                        <a 
                            href="https://wa.me/11234567890" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="hover:text-teal-400"
                            aria-label="Enlace a WhatsApp"
                        >
                            <FaWhatsapp />
                        </a>
                        <a 
                            href="https://www.instagram.com/osteopatía" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="hover:text-teal-400"
                            aria-label="Enlace a Instagram"
                        >
                            <FaInstagram />
                        </a>
                        <a 
                            href="https://www.facebook.com/francisco.torres.37" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="hover:text-teal-400"
                            aria-label="Enlace a Facebook"
                        >
                            <FaFacebook />
                        </a>
                        <a 
                            href="mailto:info@osteopatía.com" 
                            className="hover:text-teal-400"
                            aria-label="Enlace al correo electrónico"
                        >
                            <FaEnvelope />
                        </a>
                    </div>
                </div>

                {/* Derechos reservados */}
                <div className="text-center mt-6 text-sm">
                    <p>&copy; 2025 Osteopatía Francisco Torres. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
