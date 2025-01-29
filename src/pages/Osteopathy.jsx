import React from 'react';

const Osteopathy = () => {
    return (
        <div className="bg-white py-16 px-4">
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-semibold mb-6 text-teal-500">¿Qué es la Osteopatía?</h2>
                <p className="text-lg mb-8 text-gray-700">
                    La osteopatía es una medicina alternativa que se basa en la manipulación física de los tejidos, los huesos y los músculos del cuerpo. Ayuda a tratar una amplia variedad de dolencias y promueve la recuperación del bienestar.
                </p>
                
                {/* Imagen ilustrativa */}
                <img 
                    src="https://via.placeholder.com/600x400" 
                    alt="Tratamiento de Osteopatía"
                    className="mx-auto mb-8 rounded-lg shadow-lg"
                />
                
                {/* Beneficios de la osteopatía */}
                <div className="mb-12">
                    <h3 className="text-2xl font-semibold text-teal-500 mb-4">Beneficios de la Osteopatía</h3>
                    <ul className="list-disc text-left text-lg mx-auto max-w-lg text-gray-600">
                        <li>Alivio de dolores musculares y articulares.</li>
                        <li>Mejora de la circulación y la flexibilidad.</li>
                        <li>Reducción de la tensión y el estrés.</li>
                        <li>Recuperación post-quirúrgica más rápida.</li>
                        <li>Mejoría en la postura y el bienestar general.</li>
                    </ul>
                </div>

                {/* Testimonios de pacientes */}
                <div className="bg-teal-100 py-8 px-4 rounded-md shadow-md mb-8">
                    <h3 className="text-2xl font-semibold text-teal-500 mb-4">Testimonios</h3>
                    <p className="text-lg text-gray-700 italic mb-4">
                        "Gracias a la osteopatía, pude recuperar la movilidad de mi espalda después de un accidente. Los resultados fueron impresionantes." 
                    </p>
                    <p className="text-lg text-gray-700 italic">- Juan Pérez, Paciente</p>
                </div>

                {/* Llamada a la acción */}
                <div className="mt-8">
                    <p className="text-lg text-gray-600 mb-4">Si deseas saber más o programar una consulta, no dudes en ponerte en contacto con nosotros.</p>
                    <a 
                        href="/appointments" 
                        className="bg-teal-500 text-white py-2 px-6 rounded-md hover:bg-teal-600 transition-all"
                    >
                        Solicita tu turno
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Osteopathy;
