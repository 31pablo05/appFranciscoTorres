// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Osteopathy from './pages/Osteopathy';
import WhatsAppButton from './components/WhatsAppButton';

import TurnosOnlineWhatsapp from './pages/TurnosOnlineWhatsapp';

const App = () => {
    return (
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
    );
};

export default App;
