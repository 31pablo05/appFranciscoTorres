// src/pages/Home.jsx
import React from 'react';
import WhatsAppButton from '../components/WhatsAppButton';

const Section = ({ title, children, className }) => (
    <section className={`py-16 px-4 text-center ${className}`}>
        <h2 className="text-3xl font-semibold text-teal-500">{title}</h2>
        <div className="mt-4 text-lg max-w-3xl mx-auto">{children}</div>
    </section>
);

const Home = () => {
    return (
        <div>
            {/* Hero Section */}
            <div className="pt-24 md:pt-32 px-4 text-center">
                <h1 className="text-3xl font-bold text-gray-800">Bienvenido a Osteopatía Francisco Torres</h1>
                <p className="mt-4 text-lg text-gray-600">Cuidamos de tu bienestar físico con terapias manuales.</p>
            </div>

            {/* Sobre el profesional */}
            <Section title="Sobre Francisco Torres" className="bg-gray-100">
                <p>
                    Francisco Torres es un osteópata profesional con más de 10 años de experiencia en el tratamiento de lesiones musculoesqueléticas. Su enfoque está basado en técnicas manuales que buscan restablecer el equilibrio corporal y aliviar dolores crónicos.
                </p>
            </Section>

            {/* CTA */}
            <Section title="¿Listo para mejorar tu bienestar físico?" className="bg-teal-100">
                <p>Agenda tu cita hoy mismo y comienza a sentirte mejor.</p>
                <button 
                    className="mt-6 bg-teal-500 text-white py-2 px-6 rounded-md hover:bg-teal-600 transition-all" 
                    aria-label="Agendar Cita"
                >
                    Agendar Cita
                </button>
            </Section>

            {/* Botón flotante de WhatsApp */}
            <WhatsAppButton />
        </div>
    );
}

export default Home;
