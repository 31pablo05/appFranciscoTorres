// src/App.jsx
import { Analytics } from "@vercel/analytics/react"
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Osteopathy from './pages/Osteopathy';
import WhatsAppButton from './components/WhatsAppButton';

import TurnosOnlineWhatsapp from './pages/TurnosOnlineWhatsapp';

const App = () => {
    return (
        <HelmetProvider>
            <Helmet>
                <title>Osteopatía Francisco Torres</title>
                <meta name="description" content="Centro de osteopatía y kinesiología. Atención profesional por Francisco Torres. Turnos online y consultas en [Ciudad]." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#ffffff" />
                <meta property="og:title" content="Osteopatía Francisco Torres" />
                <meta property="og:description" content="Centro de osteopatía y kinesiología. Atención profesional por Francisco Torres." />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="/public/assets/logo/logoFrancisco1.webp" />
                <meta property="og:url" content="https://tu-dominio.com" />
                <meta name="twitter:card" content="summary_large_image" />
            </Helmet>
            <Router>
                <div className="flex flex-col min-h-screen">
                    {/* Navbar siempre visible */}
                    <Navbar />

                    {/* Contenido de las páginas */}
                    <main className="flex-grow relative z-10">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/osteopathy" element={<Osteopathy />} />
                            <Route path="/turnos-whatsapp" element={<TurnosOnlineWhatsapp />} />
                        </Routes>
                    </main>
                    <WhatsAppButton />
                    {/* Footer siempre visible */}
                    <Footer />
                </div>
            </Router>
        </HelmetProvider>
    );
};

export default App;
