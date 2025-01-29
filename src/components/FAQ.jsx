import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa'; // Importamos iconos de React Icons

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleQuestion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
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
        {
            question: "¿Cuántas sesiones necesito?",
            answer: "El número de sesiones depende de la condición del paciente y su evolución. Generalmente, se requieren entre 3 y 6 sesiones para notar mejoras."
        },
        {
            question: "¿Quién puede recibir osteopatía?",
            answer: "La osteopatía es apta para todas las edades, desde bebés hasta adultos mayores. Se adapta según las necesidades de cada paciente."
        },
    ];

    return (
        <div className="bg-gray-100 py-12 px-6">
            <div className="max-w-3xl mx-auto">
                {faqs.map((faq, index) => (
                    <div 
                        key={index} 
                        className="bg-white p-5 shadow-md rounded-lg mb-4 transition-all"
                    >
                        <div 
                            onClick={() => toggleQuestion(index)}
                            className="flex justify-between items-center cursor-pointer"
                        >
                            <h3 className="text-lg font-semibold text-gray-800">{faq.question}</h3>
                            <span className="text-teal-600 text-xl transition-transform duration-300">
                                {activeIndex === index ? <FaMinus /> : <FaPlus />}
                            </span>
                        </div>
                        <div 
                            className={`overflow-hidden transition-max-height duration-300 ${activeIndex === index ? "max-h-40 mt-2" : "max-h-0"}`}
                        >
                            <p className="text-gray-700 text-md">{faq.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FAQ;
