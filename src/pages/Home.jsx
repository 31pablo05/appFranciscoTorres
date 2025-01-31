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
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight max-w-2xl">
  Lic. <span className="text-blue-600">Francisco Torres</span> 
  <br /> 
  <span className="text-3xl md:text-4xl font-semibold text-gray-800">
    Especialista en <span className="text-blue-600">Osteopatía</span> y <span className="text-blue-600">Kinesiología</span>
  </span>
</h1>

<p className="mt-6 text-xl md:text-2xl text-gray-700 leading-relaxed">
  "Recupera tu bienestar y mejora tu calidad de vida con tratamientos especializados en <span className="font-semibold text-blue-600">osteopatía</span> y <span className="font-semibold text-blue-600">kinesiología</span>. A través de un enfoque integral y técnicas avanzadas, aliviamos el dolor, optimizamos tu movilidad y promovemos tu salud de forma natural."
</p>

                </div>

                {/* Imagen */}
                <div className="md:w-1/2 flex justify-center p-4">
    <img
        src="/assets/webp/profesional.webp"
        alt="Francisco Torres, osteópata profesional, con amplia experiencia en tratamientos de osteopatía y kinesiología"
        className="rounded-2xl shadow-xl w-full max-w-lg object-cover transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
    />
</div>

            </div>

            {/* Beneficios y Preguntas Frecuentes */}
            <div className="flex flex-col md:flex-row max-w-6xl w-full gap-6 md:gap-10 py-12 px-6">
                <div className="w-full md:w-1/2 bg-white p-8 shadow-lg rounded-2xl max-w-md mx-auto">
                    <Section title="Beneficios de la Osteopatía">
                        <ul className="text-xl font-semibold text-gray-800 list-disc list-inside space-y-4">
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
<Section className="bg-gradient-to-r from-blue-500 to-teal-500 text-center text-white rounded-2xl shadow-lg py-12 px-6">
    <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 tracking-wide leading-tight">
        Empieza hoy tu camino hacia el bienestar óptimo
    </h2>
    <p className="mb-8 text-lg sm:text-xl font-medium text-gray-100 opacity-90 max-w-4xl mx-auto">
        "No permitas que el dolor limite tu vida. Con un enfoque personalizado y terapias avanzadas, te ayudamos a recuperar tu bienestar físico y mejorar tu calidad de vida. Agenda tu cita hoy y experimenta la diferencia desde la primera sesión."
    </p>
    <Link 
        to="/turnos-whatsapp"
        className="bg-white text-blue-600 py-4 px-8 rounded-lg shadow-xl hover:bg-blue-600 hover:text-white transition-all transform hover:scale-105 text-lg font-medium"
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
