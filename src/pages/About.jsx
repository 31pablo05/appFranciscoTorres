import React from 'react';

const About = () => {
    return (
        <div className="bg-white py-16 px-4">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-semibold mb-6 text-teal-500">Quién Soy</h2>

                {/* Foto del profesional */}
                <div className="mb-8">
                    <img 
                        src="https://via.placeholder.com/200" 
                        alt="Francisco Torres - Osteópata" 
                        className="w-40 h-40 rounded-full mx-auto border-4 border-teal-500 shadow-lg"
                    />
                </div>

                {/* Descripción breve */}
                <p className="text-lg text-gray-700 mb-6">
                    Soy Francisco Torres, osteópata con más de 10 años de experiencia en el cuidado de la salud física y el bienestar integral. Mi misión es mejorar tu calidad de vida a través de tratamientos personalizados que se adapten a tus necesidades específicas.
                </p>

                {/* Experiencia y formación */}
                <div className="text-left mb-8">
                    <h3 className="text-2xl font-semibold text-teal-500 mb-4">Mi Experiencia y Formación</h3>
                    <ul className="list-disc ml-8 text-gray-600 text-lg">
                        <li>Licenciado en Osteopatía por la Universidad X</li>
                        <li>Más de 10 años de experiencia trabajando con pacientes de diversas edades</li>
                        <li>Formación continua en técnicas avanzadas de osteopatía y fisioterapia</li>
                        <li>Miembro activo de la Asociación Nacional de Osteopatía</li>
                    </ul>
                </div>

                {/* Certificaciones */}
                <div className="bg-teal-100 py-8 px-4 rounded-md shadow-md mb-8">
                    <h3 className="text-2xl font-semibold text-teal-500 mb-4">Certificaciones y Logros</h3>
                    <ul className="list-disc ml-8 text-gray-600 text-lg">
                        <li>Certificación en Osteopatía Avanzada, 2015</li>
                        <li>Diploma en Técnicas de Rehabilitación Postquirúrgica, 2017</li>
                        <li>Premio al Mejor Osteópata de la Región, 2020</li>
                    </ul>
                </div>

                {/* Enlaces a redes sociales */}
                <div className="mb-8">
                    <h3 className="text-2xl font-semibold text-teal-500 mb-4">Conéctate conmigo</h3>
                    <p className="text-lg text-gray-700 mb-4">Puedes encontrarme en mis redes sociales profesionales:</p>
                    <div className="flex justify-center space-x-6">
                        <a href="https://www.linkedin.com/in/francisco-torres" className="text-teal-500 hover:text-teal-600 transition-colors">
                            LinkedIn
                        </a>
                        <a href="https://twitter.com/francisco_torres" className="text-teal-500 hover:text-teal-600 transition-colors">
                            Twitter
                        </a>
                        <a href="https://www.instagram.com/francisco_torres" className="text-teal-500 hover:text-teal-600 transition-colors">
                            Instagram
                        </a>
                    </div>
                </div>

                {/* Llamada a la acción */}
                <div className="mt-8">
                    <p className="text-lg text-gray-600 mb-4">¿Tienes alguna pregunta o quieres agendar una consulta? Estoy aquí para ayudarte.</p>
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

export default About;
