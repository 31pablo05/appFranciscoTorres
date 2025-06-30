import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  const phoneNumber = '5492945416969'; // Número sin guiones ni espacios
  const message = "¡Hola! Quiero reservar un turno de osteopatía. Por favor, indícame la fecha y confirma si es para:\n• Esquel (ATM Odontología, lunes 10:30–17:00 hs)\n• Gobernador Costa (martes a viernes, 16:00–20:00 hs)";

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 p-4 bg-green-500/60 border-2 border-green-300/40 rounded-full shadow-xl hover:shadow-[0_0_40px_12px_rgba(34,197,94,0.35)] transform hover:scale-110 hover:rotate-2 transition-all duration-300 ease-in-out focus:outline-none flex items-center justify-center animate-pulse backdrop-blur-md"
      aria-label="Contactar por WhatsApp"
    >
      <FaWhatsapp className="text-white hover:text-green-100 text-4xl transition-colors duration-300" />
    </button>
  );
};

export default WhatsAppButton;
