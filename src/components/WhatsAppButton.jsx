import React from 'react';
import { FaWhatsapp } from 'react-icons/fa'; // Usamos react-icons para obtener el ícono de WhatsApp

const WhatsAppButton = () => {
    const whatsappLink = "https://wa.me/1234567890"; // Asegúrate de usar el número correcto

    return (
        <a 
            href={whatsappLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all transform hover:scale-110 z-50"
            aria-label="Contactar por WhatsApp"
        >
            <FaWhatsapp size={30} />
            {/* Ícono de WhatsApp */}
            <span className="sr-only">Contactar por WhatsApp</span> {/* Texto accesible */}
        </a>
    );
}

export default WhatsAppButton;
