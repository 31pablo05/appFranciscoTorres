import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  const phoneNumber = '5492945416969'; // Número sin guiones ni espacios
  const message = "¡Hola! Quiero reservar un turno de osteopatía. Por favor, indícame la fecha y confirma si es para:\n• Esquel (ATM Odontología, lunes 10:30–17:00 hs)\n• Gobernador Costa (martes a viernes, 16:00–20:00 hs)";
  ;

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 p-4 bg-green-500 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-110 transition-all duration-300 ease-in-out focus:outline-none flex items-center justify-center animate-bounce"
      aria-label="Contactar por WhatsApp"
    >
      <FaWhatsapp className="text-white text-4xl" />
    </button>
  );
};

export default WhatsAppButton;
