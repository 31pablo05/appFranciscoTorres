import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; // Importa el hook useNavigate de React Router

const WhatsAppButton = () => {
    const navigate = useNavigate(); // Hook para redirigir programáticamente

    const handleClick = () => {
        // Redirige a la página '/turnos-whatsapp'
        navigate('/turnos-whatsapp');
    };

    return (
        <button
            onClick={handleClick} // Llama a la función handleClick cuando se haga clic
            className="fixed bottom-6 right-4 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all transform hover:scale-110 hover:shadow-xl z-50"
            aria-label="Ir a Turnos WhatsApp"
        >
            <FaWhatsapp size={35} className="transition-all transform hover:scale-125" />
            <span className="sr-only">Ir a Turnos WhatsApp</span>
        </button>
    );
}

export default WhatsAppButton;
