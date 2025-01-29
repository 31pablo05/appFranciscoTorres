import React from "react";
import { Link } from "react-router-dom"; // Importa Link desde react-router-dom
import WhatsAppButton from "../components/WhatsAppButton";
import FAQ from "../components/FAQ"; // Importamos el componente FAQ

const Section = ({ title, children, className }) => (
    <section className={`py-16 px-6 ${className}`}>
        <h2 className="text-4xl md:text-5xl font-semibold text-teal-600 text-center md:text-left">{title}</h2>
        <div className="mt-6 text-lg leading-relaxed">{children}</div>
    </section>
);

const Home = () => {
    return (
        <div className="flex flex-col items-center">
            {/* Hero Section con imagen del profesional */}
            <div className="pt-24 md:pt-32 px-4 flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto">
                {/* Texto de presentación */}
                <div className="text-center md:text-left md:w-1/2">
                    <h1 className="text-5xl md:text-6xl font-bold text-gray-800 leading-tight">
                        Bienvenido a <span className="text-teal-600">Osteopatía Francisco Torres</span>
                    </h1>
                    <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                        Cuidamos de tu bienestar físico con terapias manuales especializadas.
                    </p>
                </div>

                {/* Imagen del profesional */}
                <div className="md:w-1/2 flex justify-center">
                    <img
                        src="/public/assets/profesional.webp"
                        alt="Francisco Torres, osteópata profesional"
                        className="rounded-lg shadow-lg w-full max-w-lg object-cover"
                    />
                </div>
            </div>

            {/* Beneficios y Preguntas Frecuentes en 2 columnas */}
            <div className="flex flex-col md:flex-row max-w-6xl w-full gap-10 py-16 px-6">
                {/* Beneficios del Tratamiento */}
                <div className="w-full md:w-1/2 bg-white p-8 shadow-md rounded-xl">
                    <Section title="Beneficios de la Osteopatía">
                        <ul className="text-lg text-gray-700 list-disc list-inside space-y-3">
                            <li>Alivio del dolor muscular y articular</li>
                            <li>Mejora la movilidad y flexibilidad</li>
                            <li>Favorece la postura y el equilibrio corporal</li>
                            <li>Reduce el estrés y mejora el bienestar general</li>
                            <li>Tratamiento natural sin medicamentos</li>
                        </ul>
                    </Section>
                </div>

                {/* Preguntas Frecuentes (FAQ) */}
                <div className="w-full md:w-1/2 bg-gray-100 p-8 shadow-md rounded-xl">
                    <Section title="Preguntas Frecuentes">
                        <FAQ />
                    </Section>
                </div>
            </div>

            {/* CTA */}
            <Section title="¿Listo para mejorar tu bienestar físico?" className="bg-teal-100 text-center">
                <p className="mb-6 text-xl text-gray-700">Agenda tu cita hoy mismo y comienza a sentirte mejor.</p>
                <Link 
                    to="/turnos-whatsapp" // Cambié la dirección de href a to y la ruta de la página
                    className="bg-teal-500 text-white py-4 px-8 rounded-lg shadow-lg hover:bg-teal-700 transition-all text-lg font-medium"
                    aria-label="Agendar cita vía WhatsApp"
                >
                    Agendar Cita
                </Link>
            </Section>

            {/* Botón flotante de WhatsApp */}
            <WhatsAppButton />
        </div>
    );
};

export default Home;
