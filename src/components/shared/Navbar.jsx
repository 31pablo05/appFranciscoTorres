import { useState, useEffect, useCallback } from 'react';
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
    hidden: { 
      opacity: 0, 
      y: -20,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.4,
        ease: "easeOut",
        staggerChildren: 0.1
      }
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  const navigationItems = [
    { to: '/', label: 'Inicio', icon: FiHome },
    { to: '/about', label: 'Quién Soy', icon: FiUser },
    { to: '/osteopathy', label: 'Osteopatía', icon: FiActivity },
    { to: '/turnos-whatsapp', label: 'Turnos', icon: FiPhone }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed w-full z-50 transition-all duration-500 ease-in-out ${
        scrolled 
          ? 'bg-slate-900/95 backdrop-blur-xl shadow-2xl border-b border-blue-500/20' 
          : 'bg-slate-900/80 backdrop-blur-md'
      } text-white`}
      role="navigation"
    >
      {/* Container principal con padding mejorado */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo con efectos mejorados */}
          <Link to="/" className="flex items-center gap-3 group" onClick={scrollToTop} aria-label="Inicio">
            <motion.div
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <motion.img 
                src="/assets/svg/Franciscologo.svg" 
                alt="Francisco Torres Osteopatía" 
                className="h-14 w-14 md:h-16 md:w-16 rounded-xl border-2 border-blue-400/50 group-hover:border-blue-400 transition-all duration-300 shadow-lg"
                whileHover={{ 
                  boxShadow: '0 0 30px 6px rgba(59, 130, 246, 0.5)',
                  rotate: [0, -5, 5, 0]
                }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              />
              {/* Efecto de glow animado */}
              <motion.div
                className="absolute inset-0 rounded-xl bg-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl -z-10"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
            
            {/* Texto del logo para desktop */}
            <motion.div 
              className="hidden sm:block"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-200 to-cyan-300 bg-clip-text text-transparent">
                Francisco Torres
              </h1>
              <p className="text-xs text-blue-200/80 tracking-wide">Osteopatía Profesional</p>
            </motion.div>
          </Link>

          {/* Navegación desktop */}
          <div className="hidden md:flex items-center space-x-1">
            {navigationItems.map((item, index) => (
              <motion.div
                key={item.to}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <NavLink
                  to={item.to}
                  onClick={scrollToTop}
                  className={({ isActive }) =>
                    `relative flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 group ${
                      isActive
                        ? 'text-cyan-300 bg-blue-600/20 shadow-lg'
                        : 'text-blue-100 hover:text-white hover:bg-blue-600/10'
                    }`
                  }
                  aria-label={item.label}
                >
                  {({ isActive }) => (
                    <>
                      <item.icon className={`w-4 h-4 transition-transform duration-300 group-hover:scale-110 ${isActive ? 'text-cyan-300' : ''}`} />
                      <span className="relative">
                        {item.label}
                        {isActive && (
                          <motion.div
                            layoutId="activeTab"
                            className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"
                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                          />
                        )}
                      </span>
                    </>
                  )}
                </NavLink>
              </motion.div>
            ))}
          </div>

          {/* Botón del menú móvil mejorado */}
          <motion.button
            className="md:hidden relative p-2 rounded-lg bg-blue-600/20 border border-blue-400/30 hover:bg-blue-600/30 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400/50"
            aria-label="Abrir menú"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen ? 'true' : 'false'}
            aria-controls="mobile-menu"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={menuOpen ? 'close' : 'menu'}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {menuOpen ? (
                  <FiX size={24} className="text-blue-200" />
                ) : (
                  <FiMenu size={24} className="text-blue-200" />
                )}
              </motion.div>
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Menú móvil mejorado */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            id="mobile-menu"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="md:hidden absolute top-full left-0 right-0 bg-slate-900/98 backdrop-blur-xl border-t border-blue-500/30 shadow-2xl"
          >
            {/* Fondo con gradiente sólido para mejor contraste */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/95 via-slate-800/98 to-slate-900/95 backdrop-blur-xl"></div>
            
            {/* Contenido del menú */}
            <div className="relative z-10 px-4 py-6 space-y-3">
              {navigationItems.map((item, index) => (
                <motion.div
                  key={item.to}
                  variants={itemVariants}
                  custom={index}
                >
                  <NavLink
                    to={item.to}
                    onClick={() => {
                      closeMenu();
                      scrollToTop();
                    }}
                    className={({ isActive }) =>
                      `flex items-center gap-3 px-4 py-4 rounded-xl text-base font-semibold transition-all duration-300 border ${
                        isActive
                          ? 'text-white bg-gradient-to-r from-cyan-500/30 to-blue-500/30 border-cyan-400/50 shadow-lg shadow-cyan-500/20'
                          : 'text-slate-100 hover:text-white bg-slate-800/60 hover:bg-gradient-to-r hover:from-blue-600/40 hover:to-indigo-600/40 border-slate-700/50 hover:border-blue-400/50'
                      }`
                    }
                    aria-label={item.label}
                  >
                    {({ isActive }) => (
                      <>
                        <div className={`p-2.5 rounded-lg transition-all duration-300 ${
                          isActive 
                            ? 'bg-cyan-400/30 shadow-lg shadow-cyan-500/30' 
                            : 'bg-slate-700/70 group-hover:bg-blue-600/30'
                        }`}>
                          <item.icon className={`w-5 h-5 transition-colors duration-300 ${
                            isActive ? 'text-cyan-200' : 'text-slate-200'
                          }`} />
                        </div>
                        <span className="flex-1 tracking-wide">{item.label}</span>
                        {isActive && (
                          <motion.div
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            className="w-3 h-3 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-full shadow-lg shadow-cyan-500/50"
                          />
                        )}
                      </>
                    )}
                  </NavLink>
                </motion.div>
              ))}
              
              {/* Información adicional en el menú móvil */}
              <motion.div
                variants={itemVariants}
                className="mt-6 pt-4 border-t border-slate-700/60"
              >
                <div className="px-4 py-4 bg-gradient-to-r from-emerald-600/20 to-blue-600/20 rounded-xl border border-emerald-400/30 shadow-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                    <p className="text-emerald-200 text-sm font-semibold">¿Necesitas ayuda?</p>
                  </div>
                  <p className="text-slate-200 text-xs font-medium">Contacta por WhatsApp para turnos</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
