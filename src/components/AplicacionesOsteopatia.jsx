import React from "react";

const AplicacionesOsteopatia = () => {
    return (
        <section className=" rounded-3xl py-12 px-6 bg-gradient-to-b from-[#1E3A8A] to-[#0F172A]">
            <div className="max-w-4xl mx-auto text-center">
                <h3 className="text-3xl md:text-4xl font-semibold text-white mb-8">
                    Aplicaciones comunes de la Osteopatía
                </h3>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-lg max-w-4xl mx-auto">
                {[
                    { title: "Dolor musculoesquelético", desc: "Espalda, cuello, hombros, etc." },
                    { title: "Dolores articulares", desc: "Articulaciones de las extremidades." },
                    { title: "Dolores de cabeza y migrañas", desc: "" },
                    { title: "Trastornos digestivos", desc: "Estreñimiento, dispepsia y colon irritable." },
                    { title: "Lesiones deportivas", desc: "" },
                    { title: "Dolores posturales", desc: "Derivados de tensiones musculares." },
                    { title: "Trastornos temporomandibulares", desc: "Problemas en la articulación de la mandíbula." },
                    { title: "Problemas circulatorios", desc: "Mala circulación en piernas y pies." }
                ].map((item, index) => (
                    <li key={index} className="bg-[#1E40AF] p-4 rounded-xl shadow-lg border border-[#3B82F6] text-white">
                        <strong>{item.title}:</strong> {item.desc}
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default AplicacionesOsteopatia;
