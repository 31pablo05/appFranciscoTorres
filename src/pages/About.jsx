import React, { useState } from 'react';
import { motion } from 'framer-motion';
import AboutProfile from '../components/about/AboutProfile';
import AboutExperience from '../components/about/AboutExperience';
import AboutCertifications from '../components/about/AboutCertifications';
import AboutCTA from '../components/about/AboutCTA';

const About = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const openModal = (image) => {
        setSelectedImage(image);
        setModalOpen(true);
    };
    const closeModal = () => {
        setModalOpen(false);
        setSelectedImage(null);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: 'spring', stiffness: 80 }}
            className="bg-gradient-to-r from-blue-600 to-teal-500 py-24 px-6"
        >
            <div className="max-w-6xl mx-auto text-white">
                <motion.h2
                    className="text-5xl font-semibold mb-12 mt-12 text-center bg-gradient-to-r from-blue-200 via-cyan-200 to-blue-400 bg-clip-text text-transparent drop-shadow-lg relative pt-8 md:pt-0 z-20 mb-16 pb-2"
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                >
                    ¿Quién soy?
                    <span className="absolute left-1/2 -bottom-3 w-32 h-0.5 bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 rounded-full opacity-70 animate-pulse -translate-x-1/2 z-0" />
                </motion.h2>
                <AboutProfile />
                <AboutExperience />
                <AboutCertifications openModal={openModal} />
                {/* Aquí puedes agregar el AboutSocial si lo modularizas */}
                <AboutCTA />
                {/* Modal para mostrar la imagen de la certificación */}
                {modalOpen && (
                    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
                        <div className="relative bg-white p-6 rounded-lg shadow-lg">
                            <button
                                onClick={closeModal}
                                className="absolute top-2 right-2 text-black text-3xl font-semibold"
                            >
                                ×
                            </button>
                            <img src={selectedImage} alt="Certificación" className="max-w-full max-h-[80vh] object-contain" />
                        </div>
                    </div>
                )}
            </div>
        </motion.div>
    );
}

export default About;
