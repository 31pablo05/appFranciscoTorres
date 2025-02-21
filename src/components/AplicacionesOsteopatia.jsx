import React from "react";
import { FaRunning, FaBrain, FaBone, FaHeartbeat, FaHandHoldingMedical, FaDumbbell, FaUtensils, FaStethoscope, FaChild, FaTeeth } from "react-icons/fa";

const aplicaciones = [
    { title: "Dolor musculoesquelético", desc: "Tratamiento para molestias en espalda, cuello, hombros y extremidades mediante técnicas osteopáticas.", icon: <FaBone /> },
    { title: "Dolores articulares", desc: "Alivio de rigidez y dolor en articulaciones como rodillas, codos, muñecas y tobillos.", icon: <FaHandHoldingMedical /> },
    { title: "Dolores de cabeza y migrañas", desc: "Osteopatía craneal para reducir tensiones en la cabeza y cuello que pueden provocar cefaleas y migrañas.", icon: <FaBrain /> },
    { title: "Trastornos digestivos", desc: "Mejoras en la función digestiva a través de técnicas osteopáticas para aliviar estreñimiento, dispepsia y colon irritable.", icon: <FaUtensils /> },
    { title: "Lesiones deportivas", desc: "Rehabilitación y prevención de lesiones musculares, esguinces y tendinitis para optimizar el rendimiento físico.", icon: <FaRunning /> },
    { title: "Dolores posturales", desc: "Corrección de desequilibrios musculares y posturales derivados de tensiones prolongadas.", icon: <FaChild /> },
    { title: "Trastornos temporomandibulares", desc: "Alivio del dolor y la disfunción de la articulación temporomandibular mediante técnicas manuales específicas.", icon: <FaTeeth /> },
    { title: "Problemas circulatorios", desc: "Mejoras en la circulación sanguínea y linfática para reducir hinchazón y sensación de pesadez en piernas y pies.", icon: <FaHeartbeat /> }
  ];

const AplicacionesOsteopatia = () => {
  return (
    <section className="rounded-3xl py-12 px-6 bg-gradient-to-b from-[#1E3A8A] to-[#0F172A]">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-3xl md:text-4xl font-semibold text-white mb-8">
          Aplicaciones comunes de la Osteopatía
        </h3>
      </div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-lg max-w-4xl mx-auto">
        {aplicaciones.map((item, index) => (
          <li 
            key={index} 
            className="flex items-center gap-4 bg-[#1E40AF] p-6 rounded-xl shadow-lg border border-[#3B82F6] text-white transition-transform transform hover:scale-105 animate-fade-in"
          >
            <div className="text-3xl text-[#3B82F6]">{item.icon}</div>
            <div>
              <strong className="block text-xl">{item.title}</strong>
              <p className="text-gray-200">{item.desc}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default AplicacionesOsteopatia;
