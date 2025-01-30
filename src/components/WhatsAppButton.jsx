import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
    const whatsappLink = "https://wa.me/1234567890"; // Asegúrate de usar el número correcto

    return (
        <a 
            href={whatsappLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="fixed top-36 right-4 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all transform hover:scale-110 hover:shadow-xl z-50"
            aria-label="Contactar por WhatsApp"
        >
            <FaWhatsapp size={35} className="transition-all transform hover:scale-125" />
            <span className="sr-only">Contactar por WhatsApp</span>
        </a>
    );
}

export default WhatsAppButton;
