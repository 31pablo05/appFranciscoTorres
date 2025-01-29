import React from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    {/* Información básica */}
                    <div className="text-center md:text-left mb-4 md:mb-0">
                        <p>&copy; 2025 Osteopatía Francisco Torres. Todos los derechos reservados.</p>
                        <p>Av. Ejemplo 123, Ciudad, País</p>
                        <p>Tel: (123) 456-7890</p>
                    </div>

                    {/* Enlaces importantes */}
                    <div className="flex justify-center mb-4 md:mb-0">
                        <a href="/contact" className="mx-4 hover:text-teal-400">Contacto</a>
                        <a href="/privacy-policy" className="mx-4 hover:text-teal-400">Política de Privacidad</a>
                    </div>

                    {/* Redes sociales */}
                    <div className="flex justify-center space-x-4">
                        <a href="https://wa.me/11234567890" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-teal-400">
                            <FaWhatsapp />
                        </a>
                        <a href="https://www.instagram.com/osteopatía" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-teal-400">
                            <FaInstagram />
                        </a>
                        <a href="https://www.facebook.com/osteopatía" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-teal-400">
                            <FaFacebook />
                        </a>
                        <a href="mailto:info@osteopatía.com" className="text-2xl hover:text-teal-400">
                            <FaEnvelope />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
