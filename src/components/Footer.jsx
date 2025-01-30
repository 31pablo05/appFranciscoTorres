import React from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 md:space-x-6">
                    
                    {/* Información de contacto */}
                    <div className="text-center md:text-left flex flex-col items-center md:items-start">
                        <p>&copy; 2025 Osteopatía Francisco Torres. Todos los derechos reservados.</p>
                        <p>Av. Ejemplo 123, Ciudad, País</p>
                        <p>Tel: <a href="tel:+1234567890" className="hover:text-teal-400">+123 456 7890</a></p>
                        <p>Email: <a href="mailto:info@osteopatía.com" className="hover:text-teal-400">info@osteopatía.com</a></p>
                    </div>

                    {/* Enlaces importantes */}
                    <div className="flex justify-center md:justify-start space-x-6">
                        <a href="/contact" className="hover:text-teal-400" aria-label="Enlace a la página de contacto">Contacto</a>
                        <a href="/privacy-policy" className="hover:text-teal-400" aria-label="Enlace a la política de privacidad">Política de Privacidad</a>
                    </div>

                    {/* Redes sociales */}
                    <div className="flex justify-center md:justify-start space-x-6 text-2xl">
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
                            href="https://www.facebook.com/osteopatía" 
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
            </div>
        </footer>
    );
}

export default Footer;
