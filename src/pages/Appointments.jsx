import React from 'react';
import AppointmentForm from '../components/AppointmentForm';

const Appointments = () => {
    return (
        <div className="bg-gray-50 py-16 px-4">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-semibold mb-6 text-teal-500">Solicita tu Turno</h2>

                {/* Explicación breve */}
                <p className="text-lg mb-8 text-gray-600">
                    Si estás experimentando dolor o malestar físico, no esperes más para mejorar tu bienestar. En Osteopatía Francisco Torres, ofrecemos terapias manuales personalizadas que pueden ayudarte a sentirte mejor.
                </p>

                {/* Formulario de turno */}
                <AppointmentForm />

                {/* CTA adicional */}
                <section className="mt-16 bg-teal-100 py-8 px-4 rounded-md">
                    <h3 className="text-2xl font-semibold text-teal-500 mb-4">¿Tienes dudas?</h3>
                    <p className="text-lg mb-6">No dudes en contactarnos. Estamos aquí para ayudarte con cualquier consulta o información adicional que necesites sobre nuestros tratamientos.</p>
                    <button className="bg-teal-500 text-white py-2 px-6 rounded-md hover:bg-teal-600 transition-all">
                        Contáctanos
                    </button>
                </section>

                {/* Nota de contacto */}
                <div className="mt-12 text-sm text-gray-600">
                    <p>Si prefieres agendar tu cita por teléfono o tienes preguntas, también puedes llamarnos al <strong>(123) 456-7890</strong>.</p>
                </div>
            </div>
        </div>
    );
}

export default Appointments;
