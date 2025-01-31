import React, { useState, useEffect, useCallback } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FiMenu, FiX, FiHome, FiUser, FiActivity, FiMail, FiPhone } from 'react-icons/fi';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Optimización del scroll con throttle
    const handleScroll = useCallback(() => {
        if (window.scrollY > 50) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll]);

    const closeMenu = () => setMenuOpen(false);

    // Función para hacer scroll hacia arriba
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ease-in-out ${scrolled ? 'bg-blue-900 shadow-md' : 'bg-blue-700'} text-white p-4 flex justify-between items-center`}
            role="navigation"
        >
          

            {/* Botón del menú hamburguesa */}
            <button
                className="md:hidden"
                aria-label="Abrir menú"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-expanded={menuOpen ? 'true' : 'false'}
                aria-controls="navbar-menu"
            >
                {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>

            {/* Menú de navegación */}
            <div
                id="navbar-menu"
                className={`md:flex md:space-x-6 md:w-auto md:flex-nowrap ${menuOpen ? 'block' : 'hidden'}
                    absolute md:relative top-16 md:top-0 left-0 w-full md:w-auto bg-blue-700 bg-opacity-80 md:bg-transparent p-4 md:p-0 text-center md:text-left shadow-lg md:shadow-none flex flex-col md:flex-row md:justify-end transition-all duration-300 ease-in-out`}
            >
                <NavLink
                    to="/"
                    className="block md:inline-block py-2 flex items-center gap-2 transition-colors duration-300 hover:text-yellow-300"
                    onClick={() => { closeMenu(); scrollToTop(); }}
                    activeClassName="text-yellow-300"
                    aria-label="Ir a la página de inicio"
                >
                    <FiHome /> Inicio
                </NavLink>
                <NavLink
                    to="/about"
                    className="block md:inline-block py-2 flex items-center gap-2 transition-colors duration-300 hover:text-yellow-300"
                    onClick={() => { closeMenu(); scrollToTop(); }}
                    activeClassName="text-yellow-300"
                    aria-label="Ir a la sección Quién Soy"
                >
                    <FiUser /> Quién Soy
                </NavLink>
                <NavLink
                    to="/osteopathy"
                    className="block md:inline-block py-2 flex items-center gap-2 transition-colors duration-300 hover:text-yellow-300"
                    onClick={() => { closeMenu(); scrollToTop(); }}
                    activeClassName="text-yellow-300"
                    aria-label="Ir a la sección Osteopatía"
                >
                    <FiActivity /> Osteopatía
                </NavLink>
                <NavLink
                    to="/turnos-email"
                    className="block md:inline-block py-2 flex items-center gap-2 transition-colors duration-300 hover:text-yellow-300"
                    onClick={() => { closeMenu(); scrollToTop(); }}
                    activeClassName="text-yellow-300"
                    aria-label="Ir a la sección Turnos por Email"
                >
                    <FiMail /> Turnos por Email
                </NavLink>
                <NavLink
                    to="/turnos-whatsapp"
                    className="block md:inline-block py-2 flex items-center gap-2 transition-colors duration-300 hover:text-yellow-300"
                    onClick={() => { closeMenu(); scrollToTop(); }}
                    activeClassName="text-yellow-300"
                    aria-label="Ir a la sección Turnos por WhatsApp"
                >
                    <FiPhone /> Turnos por WhatsApp
                </NavLink>
            </div>
        </nav>
    );
};

export default Navbar;
