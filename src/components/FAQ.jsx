import React, { useState } from 'react';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null); // Estado para controlar qué pregunta está abierta

    const toggleQuestion = (index) => {
        setActiveIndex(activeIndex === index ? null : index); // Alternar la visibilidad de la respuesta
    };

    const faqs = [
        {
            question: "¿Qué es la osteopatía?",
            answer: "La osteopatía es una forma de medicina que se enfoca en el diagnóstico, tratamiento y prevención de enfermedades mediante técnicas manuales."
        },
        {
            question: "¿Es doloroso el tratamiento?",
            answer: "En general, los tratamientos de osteopatía son indoloros. Sin embargo, en algunas ocasiones puede haber molestias temporales."
        },
        // Agrega más preguntas aquí si es necesario
    ];

    return (
        <div className="bg-gray-50 py-8 px-4">
            <h2 className="text-3xl font-semibold text-center mb-6">Preguntas Frecuentes</h2>
            <div className="max-w-3xl mx-auto space-y-4">
                {faqs.map((faq, index) => (
                    <div key={index} className="bg-white p-4 shadow-md rounded">
                        <div 
                            onClick={() => toggleQuestion(index)}
                            className="flex justify-between items-center cursor-pointer"
                        >
                            <h3 className="text-xl font-semibold text-gray-800">{faq.question}</h3>
                            <span className={`text-2xl ${activeIndex === index ? 'rotate-180' : ''} transition-transform`}>
                                &#9660; {/* Triángulo hacia abajo */}
                            </span>
                        </div>
                        {activeIndex === index && (
                            <p className="text-gray-700 mt-2">{faq.answer}</p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FAQ;
