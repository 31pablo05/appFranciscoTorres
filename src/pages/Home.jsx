import React from "react";
import { Link } from "react-router-dom";
import WhatsAppButton from "../components/WhatsAppButton";
import FAQ from "../components/FAQ";

const Section = ({ title, children, className }) => (
    <section className={`py-12 px-6 ${className}`}>
        <h2 className="text-4xl md:text-5xl font-semibold text-blue-600 drop-shadow-md text-center md:text-left">
            {title}
        </h2>
        <div className="mt-6 text-xl leading-loose text-gray-700">{children}</div>
    </section>
);

const Home = () => {
    return (
        <div className="flex flex-col items-center">
            {/* Hero Section */}
            <div className="pt-24 md:pt-32 px-4 flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto">
                <div className="text-center md:text-left md:w-1/2">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight max-w-xl">
                        Excelencia en <span className="text-blue-600">Osteopatía y Kinesiología – Francisco Torres</span>
                    </h1>
                    <p className="mt-6 text-xl text-gray-700 leading-loose">
                        Recupera tu bienestar y calidad de vida con tratamientos especializados en osteopatía y kinesiología.
                        A través de un enfoque integral y terapias manuales avanzadas, ayudamos a reducir el dolor, mejorar la movilidad
                        y potenciar tu salud de manera natural.
                    </p>
                </div>

                {/* Imagen */}
                <div className="md:w-1/2 flex justify-center">
                    <img
                        src="/assets/webp/profesional.webp"
                        alt="Francisco Torres, osteópata profesional"
                        className="rounded-2xl shadow-xl w-full max-w-lg object-cover"
                    />
                </div>
            </div>

            {/* Beneficios y Preguntas Frecuentes */}
            <div className="flex flex-col md:flex-row max-w-6xl w-full gap-6 md:gap-10 py-12 px-6">
                <div className="w-full md:w-1/2 bg-white p-8 shadow-lg rounded-2xl max-w-md mx-auto">
                    <Section title="Beneficios de la Osteopatía">
                        <ul className="text-lg text-gray-700 list-disc list-inside space-y-3">
                            <li>Alivio del dolor muscular, articular y tensional</li>
                            <li>Mejora la movilidad y flexibilidad corporal</li>
                            <li>Optimiza la postura y corrige desequilibrios biomecánicos</li>
                            <li>Reduce el estrés y mejora la calidad del sueño</li>
                            <li>Favorece la circulación sanguínea y el drenaje linfático</li>
                            <li>Fortalece el sistema inmunológico y la recuperación física</li>
                            <li>Tratamiento natural, sin medicamentos ni efectos secundarios</li>
                        </ul>
                    </Section>
                </div>

                <div className="w-full md:w-1/2 bg-gray-100 p-8 shadow-lg rounded-2xl max-w-md mx-auto">
                    <Section title="Preguntas Frecuentes">
                        <FAQ />
                    </Section>
                </div>
            </div>

            {/* CTA Mejorado */}
            <Section title="Empieza hoy tu camino hacia el bienestar óptimo" className="bg-gradient-to-r from-blue-500 to-teal-500 text-center text-white rounded-2xl shadow-lg">
                <p className="mb-6 text-2xl font-semibold">
                    No dejes que el dolor limite tu vida. Con un enfoque personalizado y terapias avanzadas, podemos ayudarte
                    a recuperar tu equilibrio físico y mejorar tu calidad de vida. Agenda tu cita ahora y siente la diferencia
                    desde la primera sesión.
                </p>
                <Link 
                    to="/turnos-whatsapp"
                    className="bg-white text-blue-600 py-4 px-8 rounded-lg shadow-xl hover:scale-105 transition-all text-lg font-medium"
                    aria-label="Agendar cita vía WhatsApp"
                >
                    Agendar Cita
                </Link>
            </Section>

            {/* Botón de WhatsApp */}
            <WhatsAppButton />
        </div>
    );
};

export default Home;
