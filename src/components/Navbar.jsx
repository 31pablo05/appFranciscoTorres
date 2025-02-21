import React, { useState, useEffect, useCallback } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FiMenu, FiX, FiHome, FiUser, FiActivity, FiPhone } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 50);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const closeMenu = () => setMenuOpen(false);
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ease-in-out ${
        scrolled ? 'bg-black bg-opacity-80 shadow-lg' : 'bg-black bg-opacity-60'
      } backdrop-blur-sm text-white p-4 flex justify-between items-center`}
      role="navigation"
    >
      {/* Logo con efecto de escalado al hover */}
      <Link to="/" className="flex items-center gap-2" onClick={scrollToTop} aria-label="Inicio">
        <motion.img 
          src="assets/logo/logoFrancisco1.webp" 
          alt="Logo" 
          className="h-16 rounded-md"
          whileHover={{ scale: 1.2 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        />
      </Link>

      {/* Botón del menú hamburguesa */}
      <button
        className="md:hidden focus:outline-none"
        aria-label="Abrir menú"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-expanded={menuOpen ? 'true' : 'false'}
        aria-controls="navbar-menu"
      >
        {menuOpen ? (
          <FiX size={28} className="transition-transform transform hover:scale-110" />
        ) : (
          <FiMenu size={28} className="transition-transform transform hover:scale-110" />
        )}
      </button>

      {/* Menú de navegación */}
      <AnimatePresence>
        {(menuOpen || window.innerWidth >= 768) && (
          <motion.div
            key="navbar-menu"
            id="navbar-menu"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="md:flex md:space-x-8 md:w-auto absolute md:relative top-16 md:top-0 left-0 w-full md:w-auto bg-black bg-opacity-80 md:bg-transparent p-4 md:p-0 text-center shadow-lg md:shadow-none flex flex-col md:flex-row md:justify-end transition-all duration-300 ease-in-out"
          >
            <motion.div whileHover={{ scale: 1.05 }}>
              <NavLink
                to="/"
                onClick={() => {
                  closeMenu();
                  scrollToTop();
                }}
                className={({ isActive }) =>
                  "block md:inline-block py-2 transition-colors duration-300 " +
                  (isActive
                    ? "text-teal-400 border-b-2 border-teal-400"
                    : "text-white hover:text-teal-400")
                }
                aria-label="Inicio"
              >
                <div className="flex items-center gap-1">
                  <FiHome />
                  Inicio
                </div>
              </NavLink>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }}>
              <NavLink
                to="/about"
                onClick={() => {
                  closeMenu();
                  scrollToTop();
                }}
                className={({ isActive }) =>
                  "block md:inline-block py-2 transition-colors duration-300 " +
                  (isActive
                    ? "text-teal-400 border-b-2 border-teal-400"
                    : "text-white hover:text-teal-400")
                }
                aria-label="Quién Soy"
              >
                <div className="flex items-center gap-1">
                  <FiUser />
                  Quién Soy
                </div>
              </NavLink>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }}>
              <NavLink
                to="/osteopathy"
                onClick={() => {
                  closeMenu();
                  scrollToTop();
                }}
                className={({ isActive }) =>
                  "block md:inline-block py-2 transition-colors duration-300 " +
                  (isActive
                    ? "text-teal-400 border-b-2 border-teal-400"
                    : "text-white hover:text-teal-400")
                }
                aria-label="Osteopatía"
              >
                <div className="flex items-center gap-1">
                  <FiActivity />
                  Osteopatía
                </div>
              </NavLink>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }}>
              <NavLink
                to="/turnos-whatsapp"
                onClick={() => {
                  closeMenu();
                  scrollToTop();
                }}
                className={({ isActive }) =>
                  "block md:inline-block py-2 transition-colors duration-300 " +
                  (isActive
                    ? "text-teal-400 border-b-2 border-teal-400"
                    : "text-white hover:text-teal-400")
                }
                aria-label="Turnos por WhatsApp"
              >
                <div className="flex items-center gap-1">
                  <FiPhone />
                  Turnos por WhatsApp
                </div>
              </NavLink>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
