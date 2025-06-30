import React from "react";
import { motion } from "framer-motion";
import { FaRunning, FaBrain, FaBone, FaHeartbeat, FaHandHoldingMedical, FaUtensils, FaChild, FaTeeth } from "react-icons/fa";

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

const itemVariants = {
	hidden: { opacity: 0, y: 40 },
	visible: (i) => ({
		opacity: 1,
		y: 0,
		transition: { delay: i * 0.12, duration: 0.7, type: "spring", stiffness: 60 }
	})
};

const AplicacionesOsteopatia = () => {
	return (
		<section className="rounded-3xl py-14 px-4 sm:px-6 bg-gradient-to-b from-[#1E3A8A] to-[#0F172A] shadow-2xl max-w-3xl md:max-w-4xl mx-auto my-0">
			<div className="max-w-4xl mx-auto text-center mb-8">
				<h3 className="text-3xl md:text-4xl font-extrabold text-white mb-2 tracking-tight drop-shadow-lg">
					Aplicaciones comunes de la Osteopatía
				</h3>
				<p className="text-blue-200 text-lg max-w-2xl mx-auto mb-4">
					Descubre cómo la osteopatía puede ayudarte en diferentes áreas de tu salud y bienestar.
				</p>
			</div>
			<motion.ul
				className="grid grid-cols-1 sm:grid-cols-2 gap-7 text-lg max-w-4xl mx-auto"
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.2 }}
			>
				{aplicaciones.map((item, index) => (
					<motion.li
						key={index}
						custom={index}
						variants={itemVariants}
						whileHover={{ scale: 1.07, boxShadow: "0 0 32px 0 #38bdf8" }}
						className="flex items-center gap-4 bg-gradient-to-br from-[#1E40AF] to-[#0F172A] p-7 rounded-2xl shadow-xl border border-[#3B82F6] text-white transition-transform duration-300 group relative overflow-hidden"
						tabIndex={0}
						aria-label={item.title}
					>
						<motion.div
							className="text-4xl text-[#60A5FA] drop-shadow-lg group-hover:text-blue-300 group-hover:scale-110 transition-all duration-300"
							whileHover={{ color: "#38bdf8", scale: 1.15, filter: "drop-shadow(0 0 16px #38bdf8)" }}
							transition={{ duration: 0.3 }}
							aria-hidden="true"
						>
							{item.icon}
						</motion.div>
						<div>
							<strong className="block text-xl font-semibold mb-1 text-white drop-shadow-sm">
								{item.title}
							</strong>
							<p className="text-blue-100 text-base leading-relaxed">
								{item.desc}
							</p>
						</div>
						{/* Glow animado decorativo */}
						<motion.div
							className="absolute -inset-2 bg-blue-400 opacity-10 blur-2xl pointer-events-none z-0 group-hover:opacity-20 transition-all duration-300"
							aria-hidden="true"
						/>
					</motion.li>
				))}
			</motion.ul>
		</section>
	);
};

export default AplicacionesOsteopatia;
