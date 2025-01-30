import React from 'react';
import { Link } from 'react-router-dom'; // Importamos Link para la navegación

const Osteopathy = () => {
    return (
        <div className="bg-gradient-to-r from-blue-600 to-teal-500 py-24 px-6">
            <div className="max-w-3xl mx-auto text-center">
                {/* Título */}
                <h2 className="text-4xl font-semibold mb-6 text-white animate__animated animate__fadeInUp">
                    ¿Qué es la Osteopatía?
                </h2>
                
                {/* Descripción breve */}
                <p className="text-lg text-gray-200 mb-8 px-4 leading-relaxed">
                    La osteopatía es una medicina alternativa que se basa en la manipulación física de los tejidos, los huesos y los músculos del cuerpo. Ayuda a tratar una amplia variedad de dolencias y promueve la recuperación del bienestar general. Se considera una forma de tratamiento holístico, ya que busca equilibrar el cuerpo y mejorar su funcionamiento global.
                </p>

                {/* Información adicional */}
                <p className="text-lg text-gray-200 mb-8 px-4 leading-relaxed">
                    A través de técnicas específicas de masaje, estiramiento y manipulación, los osteópatas pueden aliviar tensiones musculares, mejorar la circulación y restaurar el equilibrio entre el sistema musculoesquelético y los órganos internos. Este enfoque no solo alivia el dolor, sino que también promueve la salud general, ayudando al cuerpo a sanar de manera natural.
                </p>

                {/* Video de Osteopatía */}
                <div className="mb-8">
                    <iframe 
                        width="100%" 
                        height="400" 
                        src="https://www.youtube.com/embed/example-video-url" 
                        title="Tratamiento de Osteopatía" 
                        className="rounded-lg shadow-xl"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen
                    ></iframe>
                </div>

                {/* Beneficios de la osteopatía */}
                <div className="mb-12">
                    <h3 className="text-3xl font-semibold text-white mb-4">Beneficios de la Osteopatía</h3>
                    <ul className="list-disc text-left text-lg mx-auto max-w-2xl text-gray-100">
                        <li>Alivio de dolores musculares y articulares.</li>
                        <li>Mejora de la circulación y la flexibilidad.</li>
                        <li>Reducción de la tensión y el estrés.</li>
                        <li>Recuperación post-quirúrgica más rápida.</li>
                        <li>Mejoría en la postura y el bienestar general.</li>
                        <li>Tratamiento para dolores crónicos, como la ciática y las migrañas.</li>
                        <li>Mejora del equilibrio y la coordinación corporal.</li>
                    </ul>
                </div>

                {/* Llamada a la acción */}
                <div className="mt-8">
                    <p className="text-lg text-gray-200 mb-4">Si deseas saber más o programar una consulta, no dudes en ponerte en contacto con nosotros.</p>
                    {/* Usamos Link para redirigir a la página de turnos */}
                    <Link 
                        to="/turnos-whatsapp" 
                        className="bg-blue-600 text-white py-3 px-8 rounded-lg hover:bg-blue-700 transition-all"
                    >
                        Solicita tu turno
                    </Link>
                </div>
            </div>

            {/* Botón flotante de contacto */}
            <div className="fixed bottom-10 right-10">
                <Link to="/turnos-whatsapp" className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-all">
                    <i className="fas fa-phone-alt"></i> Contáctanos
                </Link>
            </div>

            {/* Botón scroll to top */}
            <div className="fixed bottom-10 left-10">
                <button 
                    onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} 
                    className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-all"
                >
                    ↑
                </button>
            </div>
        </div>
    );
}

export default Osteopathy;
