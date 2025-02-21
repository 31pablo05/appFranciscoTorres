import React from 'react';

const WhatsAppButton = () => {
  const phoneNumber = '1234567890'; // Reemplaza con tu número de teléfono de WhatsApp
  const message = '¡Hola! Me gustaría saber más sobre tus servicios.'; // Mensaje predefinido

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 p-3 bg-green-500 rounded-full shadow-lg hover:shadow-2xl transform hover:scale-110 transition-all duration-300 ease-in-out focus:outline-none flex items-center justify-center"
      aria-label="Contactar por WhatsApp"
    >
      <i className="fab fa-whatsapp text-white text-4xl"></i> {/* Ajusté el tamaño del ícono */}
    </button>
  );
};

export default WhatsAppButton;
