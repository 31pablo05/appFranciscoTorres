import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlus, FaMinus } from 'react-icons/fa';

const faqs = [
	{
		question: '¿Qué es la osteopatía?',
		answer:
			'La osteopatía es una disciplina terapéutica que utiliza técnicas manuales para diagnosticar y tratar disfunciones del cuerpo, promoviendo el equilibrio y la salud integral.',
	},
	{
		question: '¿Es doloroso el tratamiento?',
		answer:
			'Generalmente no. Las técnicas son suaves y adaptadas a cada paciente. Puede haber molestias leves y pasajeras tras la sesión, pero no dolor intenso.',
	},
	{
		question: '¿Cuántas sesiones necesito?',
		answer:
			'Depende de cada caso. Muchas personas notan mejoras en 3 a 6 sesiones, pero el plan se adapta a la evolución y necesidades individuales.',
	},
	{
		question: '¿Quién puede recibir osteopatía?',
		answer:
			'La osteopatía es apta para todas las edades: bebés, niños, adultos, embarazadas y personas mayores. Siempre se personaliza el abordaje.',
	},
	{
		question: '¿En qué casos está indicada la osteopatía?',
		answer:
			'Dolores de espalda, cuello, cabeza, lesiones deportivas, estrés, problemas posturales, trastornos digestivos, entre otros.',
	},
	{
		question: '¿Necesito derivación médica?',
		answer:
			'No es indispensable, pero si tienes estudios previos o diagnóstico médico, es útil compartirlos para un mejor abordaje.',
	},
	{
		question: '¿La osteopatía reemplaza a la medicina tradicional?',
		answer:
			'No. Es un complemento que puede integrarse con otros tratamientos médicos y de salud.',
	},
];

const itemVariants = {
	closed: { opacity: 0.7, y: 20 },
	open: {
		opacity: 1,
		y: 0,
		transition: { type: 'spring', stiffness: 300, damping: 24 },
	},
};

const FAQ = () => {
	const [open, setOpen] = useState(null);

	return (
		<section className="w-full max-w-xl mx-auto py-12 px-4 md:px-8 bg-white/90 rounded-3xl shadow-2xl border border-blue-100 flex flex-col items-center">
			<motion.h2
				initial={{ opacity: 0, y: -30 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.7 }}
				className="text-3xl md:text-4xl font-extrabold text-blue-700 mb-8 text-center drop-shadow-lg tracking-tight"
			>
				Preguntas Frecuentes
			</motion.h2>
			<ul className="w-full flex flex-col gap-6">
				{faqs.map((faq, idx) => (
					<motion.li
						key={faq.question}
						layout
						initial="closed"
						animate={open === idx ? 'open' : 'closed'}
						variants={itemVariants}
						className={`rounded-2xl border border-blue-200/60 bg-gradient-to-br from-blue-50/80 to-teal-50/70 shadow-lg overflow-hidden transition-all duration-300 ${
							open === idx
								? 'ring-2 ring-blue-300 scale-[1.03] bg-white/100 shadow-2xl'
								: 'hover:scale-[1.01] hover:shadow-xl'
						}`}
					>
						<button
							className="w-full flex justify-between items-center px-6 py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 group transition-all duration-300"
							onClick={() => setOpen(open === idx ? null : idx)}
							aria-expanded={open === idx}
							aria-controls={`faq-panel-${idx}`}
						>
							<span className="text-lg md:text-xl font-bold text-blue-900 group-hover:text-teal-600 transition-colors flex-1 text-left tracking-tight">
								{faq.question}
							</span>
							<motion.span
								className="ml-4 text-2xl flex items-center justify-center rounded-full bg-blue-50 p-2 shadow group-hover:bg-teal-50 transition-colors border border-blue-100"
								animate={{ rotate: open === idx ? 180 : 0 }}
								transition={{ type: 'spring', stiffness: 300 }}
								aria-hidden="true"
							>
								{open === idx ? (
									<FaMinus className="text-teal-500" />
								) : (
									<FaPlus className="text-blue-400" />
								)}
							</motion.span>
						</button>
						<AnimatePresence initial={false}>
							{open === idx && (
								<motion.div
									id={`faq-panel-${idx}`}
									key="content"
									initial={{ height: 0, opacity: 0 }}
									animate={{ height: 'auto', opacity: 1 }}
									exit={{ height: 0, opacity: 0 }}
									transition={{ duration: 0.35, ease: 'easeInOut' }}
									className="px-6 pb-5 text-blue-900 text-md md:text-lg leading-relaxed bg-gradient-to-br from-blue-50/60 to-white/80 border-t border-blue-100"
								>
									{faq.answer}
								</motion.div>
							)}
						</AnimatePresence>
					</motion.li>
				))}
			</ul>
		</section>
	);
};

export default FAQ;
