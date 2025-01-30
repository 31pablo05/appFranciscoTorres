import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX, FiHome, FiUser, FiActivity, FiMail, FiPhone } from 'react-icons/fi';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const closeMenu = () => setMenuOpen(false);

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ease-in-out ${scrolled ? 'bg-turquesa-dark shadow-md' : 'bg-turquesa'} text-white p-4 flex justify-between items-center`}
        >
            {/* Logo del profesional */}
            <div className="flex items-center gap-4">
                <Link to="/" aria-label="Ir a la página principal">
                    <img
                        src="/assets/webp/1.webp"
                        alt="Logo del Profesional"
                        className="w-12 h-12 object-cover rounded-md shadow-md" // Reducir tamaño del logo
                    />
                </Link>
                <h1 className="text-lg font-semibold text-turquesa-dark md:text-2xl">Osteopatía y Kinesiología <br /> Francisco Torres</h1> {/* Reducir tamaño del título en móviles */}
            </div>

            {/* Botón del menú hamburguesa */}
            <button
                className="md:hidden"
                aria-label="Abrir menú"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>

            {/* Menú de navegación */}
            <div
                className={`md:flex md:space-x-6 md:w-auto md:flex-nowrap ${menuOpen ? 'block' : 'hidden'}
                    absolute md:relative top-16 md:top-0 left-0 w-full md:w-auto bg-turquesa md:bg-transparent p-4 md:p-0 text-center md:text-left shadow-lg md:shadow-none flex flex-col md:flex-row md:justify-end`}
            >
                <Link
                    to="/"
                    className="block md:inline-block py-2 flex items-center gap-2 transition-colors duration-300 hover:text-yellow-300"
                    onClick={closeMenu}
                >
                    <FiHome /> Inicio
                </Link>
                <Link
                    to="/about"
                    className="block md:inline-block py-2 flex items-center gap-2 transition-colors duration-300 hover:text-yellow-300"
                    onClick={closeMenu}
                >
                    <FiUser /> Quién Soy
                </Link>
                <Link
                    to="/osteopathy"
                    className="block md:inline-block py-2 flex items-center gap-2 transition-colors duration-300 hover:text-yellow-300"
                    onClick={closeMenu}
                >
                    <FiActivity /> Osteopatía
                </Link>
                <Link
                    to="/turnos-email"
                    className="block md:inline-block py-2 flex items-center gap-2 transition-colors duration-300 hover:text-yellow-300"
                    onClick={closeMenu}
                >
                    <FiMail /> Turnos por Email
                </Link>
                <Link
                    to="/turnos-whatsapp"
                    className="block md:inline-block py-2 flex items-center gap-2 transition-colors duration-300 hover:text-yellow-300"
                    onClick={closeMenu}
                >
                    <FiPhone /> Turnos por WhatsApp
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;
