import React, { useState, useMemo, useEffect } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import es from 'date-fns/locale/es';
// Registrar el locale español para react-datepicker
registerLocale('es', es);
import 'react-datepicker/dist/react-datepicker.css';
import { motion } from 'framer-motion';
import { FiUser, FiPhone, FiMail, FiCalendar, FiClock, FiMapPin, FiCheckCircle } from 'react-icons/fi';

const TurnosOnlineWhatsapp = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [telefono, setTelefono] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState(null);
  const [hora, setHora] = useState('');
  const [localidad, setLocalidad] = useState('Esquel');
  const [mensajeConfirmacion, setMensajeConfirmacion] = useState('');
  const [errores, setErrores] = useState({});
  const [enviando, setEnviando] = useState(false);

  // Agregar estilos para DatePicker
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .react-datepicker-popper {
        z-index: 10000 !important;
      }
      .react-datepicker {
        z-index: 10000 !important;
      }
      .react-datepicker__triangle {
        display: none !important;
      }
      .react-datepicker__day--selected {
        background-color: rgb(6 182 212) !important;
        color: white !important;
      }
      .react-datepicker__day--keyboard-selected {
        background-color: rgb(6 182 212) !important;
        color: white !important;
      }
      .react-datepicker__day:hover {
        background-color: rgba(6, 182, 212, 0.3) !important;
      }
      .react-datepicker__header {
        background-color: rgb(17 24 39) !important;
        border-bottom: 1px solid rgba(6, 182, 212, 0.3) !important;
      }
      .react-datepicker__current-month,
      .react-datepicker__day-name {
        color: rgb(103 232 249) !important;
      }
      .react-datepicker__navigation--previous,
      .react-datepicker__navigation--next {
        border-color: rgb(103 232 249) !important;
      }
      .react-datepicker__day--disabled {
        color: rgb(75 85 99) !important;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const validarTelefono = (telefono) => /^[0-9]{10}$/.test(telefono);
  const validarEmail = (email) => /^[a-zA-Z0-9._%+-]+@[a-zAZ0-9.-]+\.[a-zA-Z]{2,}$/.test(email);

  const validarFechaHora = (fecha, hora, localidad) => {
    if (!fecha) return "Debe seleccionar una fecha válida.";
    const hoy = new Date();
    const fechaSeleccionada = new Date(fecha);
    const diaSeleccionado = fechaSeleccionada.getDay();

    if (diaSeleccionado === 6 || diaSeleccionado === 0) {
      return "No se pueden agendar turnos para sábados ni domingos.";
    }

    // Solo permitir turnos con al menos 1 día de anticipación
    const mañana = new Date(hoy);
    mañana.setDate(hoy.getDate() + 1);
    mañana.setHours(0,0,0,0);
    if (fechaSeleccionada < mañana) {
      return "Debe seleccionar una fecha con al menos un día de anticipación.";
    }

    if (localidad === 'Esquel' && diaSeleccionado !== 1) {
      return "Solo se pueden agendar turnos los lunes en Esquel.";
    }
    if (localidad === 'Gobernador Costa' && diaSeleccionado === 1) {
      return "No se pueden agendar turnos los lunes en Gobernador Costa.";
    }

    if (hora) {
      const [h, m] = hora.split(":").map(Number);
      const horaSeleccionada = h + m/60;
      if (localidad === 'Esquel' && (horaSeleccionada < 10.5 || horaSeleccionada > 17)) {
        return "El horario seleccionado no está disponible para los lunes en Esquel. Solo se permite de 10:30 a 17:00.";
      }
      if (localidad === 'Gobernador Costa' && (horaSeleccionada < 16 || horaSeleccionada > 20)) {
        return "El horario seleccionado no está disponible para los martes a viernes en Gobernador Costa. Solo se permite de 16:00 a 20:00.";
      }
    }
    return null;
  };

  const crearTurno = async (e) => {
    e.preventDefault();
    let erroresValidacion = {};

    if (!nombre || !apellido || !telefono || !email || !fecha || !hora || !localidad) {
      erroresValidacion = { ...erroresValidacion, campos: "Todos los campos son obligatorios." };
    }

    if (!validarTelefono(telefono)) {
      erroresValidacion = { ...erroresValidacion, telefono: "Por favor, ingrese un número de teléfono válido." };
    }

    if (!validarEmail(email)) {
      erroresValidacion = { ...erroresValidacion, email: "Por favor, ingrese un correo electrónico válido." };
    }

    const errorFechaHora = validarFechaHora(fecha, hora, localidad);
    if (errorFechaHora) {
      erroresValidacion = { ...erroresValidacion, fechaHora: errorFechaHora };
    }

    if (Object.keys(erroresValidacion).length > 0) {
      setErrores(erroresValidacion);
      return;
    }

    setEnviando(true);

    const fechaStr = fecha instanceof Date ? fecha.toLocaleDateString('es-AR') : fecha;
    const mensajeWhatsApp = `\n      ¡Hola! Quiero agendar un turno, estos son mis datos:\n      Nombre: ${nombre} ${apellido}\n      Teléfono: ${telefono}\n      Email: ${email}\n      Fecha del turno: ${fechaStr}\n      Hora del turno: ${hora}\n      Localidad: ${localidad}\n      ¡Gracias!\n    `;
    const mensajeCodificado = encodeURIComponent(mensajeWhatsApp);
    window.location.href = `https://wa.me/5492945416969?text=${mensajeCodificado}`;

    setMensajeConfirmacion('Tu solicitud de turno ha sido enviada a través de WhatsApp. ¡Pronto recibirás la confirmación!');
    setErrores({});
    setEnviando(false); // Reset para spinner
  };

  // Generar slots de hora válidos según la fecha y localidad seleccionada
  const horaSlots = useMemo(() => {
    if (!fecha) return [];
    const dia = fecha.getDay();
    let inicio = null, fin = null;
    if (localidad === 'Esquel' && dia === 1) {
      inicio = 10.5; fin = 17;
    } else if (localidad === 'Gobernador Costa' && dia >= 2 && dia <= 5) {
      inicio = 16; fin = 20;
    } else {
      return [];
    }
    const slots = [];
    for (let h = Math.floor(inicio); h < fin; h++) {
      for (let m of [0, 30]) {
        const t = h + m/60;
        if (t < inicio || t >= fin) continue;
        const hh = String(h).padStart(2, '0');
        const mm = String(m).padStart(2, '0');
        slots.push(`${hh}:${mm}`);
      }
    }
    // Agregar el último slot si termina justo en :00
    if (fin % 1 === 0) {
      slots.push(`${String(fin).padStart(2, '0')}:00`);
    }
    return slots;
  }, [fecha, localidad]);

  // Deshabilitar días no válidos en el calendario
  const isDayDisabled = (date) => {
    const day = date.getDay();
    if (localidad === 'Esquel') {
      return day !== 1; // Solo lunes
    } else if (localidad === 'Gobernador Costa') {
      return day === 1 || day === 6 || day === 0; // No lunes, sábado ni domingo
    }
    return false;
  };

  // Deshabilitar fechas pasadas y menos de 1 día de anticipación
  const minDate = useMemo(() => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    d.setHours(0,0,0,0);
    return d;
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-cyan-900 via-blue-600 to-purple-800 py-20 pt-32 px-2 relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-400/30 to-blue-500/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-purple-400/30 to-pink-500/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/2 left-1/4 w-40 h-40 bg-gradient-to-br from-teal-400/20 to-cyan-500/20 rounded-full blur-2xl"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, type: 'spring' }}
        className="w-full max-w-xl mx-auto rounded-3xl bg-white/10 backdrop-blur-xl shadow-2xl p-8 md:p-12 flex flex-col items-center border border-white/20 relative z-10"
      >
        {/* Header mejorado */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-center mb-8"
        >
          <motion.div
            animate={{
              boxShadow: [
                "0 0 20px rgba(20, 184, 166, 0.3)",
                "0 0 40px rgba(20, 184, 166, 0.6)",
                "0 0 20px rgba(20, 184, 166, 0.3)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-block p-4 rounded-full bg-gradient-to-r from-teal-400 to-cyan-400 mb-4"
          >
            <FiCheckCircle className="text-white text-5xl" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-white via-cyan-100 to-teal-200 bg-clip-text text-transparent text-center tracking-wide">
            Reservar Turno
          </h2>
          <p className="text-white/80 mt-2 text-lg font-medium">
            Agenda tu cita de manera rápida y sencilla
          </p>
        </motion.div>
        <form onSubmit={crearTurno} className="w-full flex flex-col gap-6">
          {/* Campos de nombre y apellido */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="relative group"
            >
              <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-400 text-xl z-10 transition-colors group-focus-within:text-teal-300" />
              <input
                type="text"
                placeholder="Nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                className={`w-full pl-12 pr-4 py-4 border-2 ${errores.nombre ? 'border-red-400 bg-red-50/10' : 'border-white/30 focus:border-cyan-400'} rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-400/50 text-lg bg-white/10 backdrop-blur-sm text-white placeholder-white/60 transition-all duration-300 hover:bg-white/15`}
                autoComplete="given-name"
              />
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400/10 to-teal-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="relative group"
            >
              <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-400 text-xl z-10 transition-colors group-focus-within:text-teal-300" />
              <input
                type="text"
                placeholder="Apellido"
                value={apellido}
                onChange={(e) => setApellido(e.target.value)}
                className={`w-full pl-12 pr-4 py-4 border-2 ${errores.apellido ? 'border-red-400 bg-red-50/10' : 'border-white/30 focus:border-cyan-400'} rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-400/50 text-lg bg-white/10 backdrop-blur-sm text-white placeholder-white/60 transition-all duration-300 hover:bg-white/15`}
                autoComplete="family-name"
              />
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400/10 to-teal-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          </div>

          {/* Campo de teléfono */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="relative group"
          >
            <FiPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-400 text-xl z-10 transition-colors group-focus-within:text-teal-300" />
            <input
              type="tel"
              placeholder="Teléfono (solo números)"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
              className={`w-full pl-12 pr-4 py-4 border-2 ${errores.telefono ? 'border-red-400 bg-red-50/10' : 'border-white/30 focus:border-cyan-400'} rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-400/50 text-lg bg-white/10 backdrop-blur-sm text-white placeholder-white/60 transition-all duration-300 hover:bg-white/15`}
              autoComplete="tel"
            />
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400/10 to-teal-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            {errores.telefono && (
              <motion.p 
                initial={{ opacity: 0, y: -10 }} 
                animate={{ opacity: 1, y: 0 }} 
                className="text-red-300 text-sm mt-2 ml-2 bg-red-500/20 backdrop-blur-sm px-3 py-1 rounded-lg"
              >
                {errores.telefono}
              </motion.p>
            )}
          </motion.div>

          {/* Campo de email */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="relative group"
          >
            <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-400 text-xl z-10 transition-colors group-focus-within:text-teal-300" />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full pl-12 pr-4 py-4 border-2 ${errores.email ? 'border-red-400 bg-red-50/10' : 'border-white/30 focus:border-cyan-400'} rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-400/50 text-lg bg-white/10 backdrop-blur-sm text-white placeholder-white/60 transition-all duration-300 hover:bg-white/15`}
              autoComplete="email"
            />
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400/10 to-teal-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            {errores.email && (
              <motion.p 
                initial={{ opacity: 0, y: -10 }} 
                animate={{ opacity: 1, y: 0 }} 
                className="text-red-300 text-sm mt-2 ml-2 bg-red-500/20 backdrop-blur-sm px-3 py-1 rounded-lg"
              >
                {errores.email}
              </motion.p>
            )}
          </motion.div>
          {/* Selector de localidad */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="relative group"
          >
            <FiMapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-400 text-xl z-10 transition-colors group-focus-within:text-teal-300" />
            <select
              value={localidad}
              onChange={e => { setLocalidad(e.target.value); setFecha(null); setHora(''); }}
              className="w-full pl-12 pr-10 py-4 border-2 border-white/30 focus:border-cyan-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-400/50 text-lg bg-white/10 backdrop-blur-sm text-white transition-all duration-300 hover:bg-white/15 cursor-pointer"
              style={{ 
                WebkitAppearance: 'none',
                MozAppearance: 'none',
                appearance: 'none'
              }}
            >
              <option value="Esquel" className="bg-gray-800 text-white">Esquel</option>
              <option value="Gobernador Costa" className="bg-gray-800 text-white">Gobernador Costa</option>
            </select>
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400/10 to-teal-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none z-20">
              <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </motion.div>

          {/* Grid para fecha y hora */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Selector de fecha */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="relative group"
            >
              <FiCalendar className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-400 text-xl z-20 transition-colors group-focus-within:text-teal-300" />
              <div className="w-full pl-12">
                <DatePicker
                  selected={fecha}
                  onChange={setFecha}
                  minDate={minDate}
                  filterDate={date => !isDayDisabled(date)}
                  dateFormat="dd/MM/yyyy"
                  placeholderText="Selecciona una fecha"
                  className="w-full pr-4 py-4 border-2 border-white/30 focus:border-cyan-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-400/50 text-lg bg-white/10 backdrop-blur-sm text-white placeholder-white/60 transition-all duration-300 hover:bg-white/15"
                  calendarClassName="!bg-gray-900/95 !backdrop-blur-xl !rounded-2xl !shadow-2xl !border !border-cyan-400/30 !text-white !z-[9999]"
                  popperClassName="!z-[9999]"
                  popperPlacement="bottom-start"
                  locale="es"
                  showPopperArrow={false}
                  weekDayClassName={() => 'capitalize !text-cyan-300'}
                  dayClassName={date => `!text-white hover:!bg-cyan-500/30 !rounded-lg transition-colors ${fecha && date.getTime() === fecha.getTime() ? '!bg-cyan-500 !text-white' : ''}`}
                />
              </div>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400/10 to-teal-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>

            {/* Selector de hora */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9 }}
              className="relative group"
            >
              <FiClock className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-400 text-xl z-10 transition-colors group-focus-within:text-teal-300" />
              <select
                id="hora"
                value={hora}
                onChange={e => setHora(e.target.value)}
                className={`w-full pl-12 pr-10 py-4 border-2 border-white/30 focus:border-cyan-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-400/50 text-lg bg-white/10 backdrop-blur-sm text-white transition-all duration-300 hover:bg-white/15 cursor-pointer ${horaSlots.length === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={horaSlots.length === 0}
                title="Selecciona una hora para el turno"
                style={{ 
                  WebkitAppearance: 'none',
                  MozAppearance: 'none',
                  appearance: 'none'
                }}
              >
                <option value="" className="bg-gray-800 text-white">Selecciona una hora</option>
                {horaSlots.map(hs => (
                  <option key={hs} value={hs} className="bg-gray-800 text-white">{hs}</option>
                ))}
              </select>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400/10 to-teal-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none z-20">
                <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </motion.div>
          </div>

          {/* Mensajes de error */}
          {errores.fechaHora && (
            <motion.p 
              initial={{ opacity: 0, y: -10 }} 
              animate={{ opacity: 1, y: 0 }} 
              className="text-red-300 text-sm ml-2 bg-red-500/20 backdrop-blur-sm px-4 py-2 rounded-lg border border-red-400/30"
            >
              {errores.fechaHora}
            </motion.p>
          )}
          {errores.campos && (
            <motion.p 
              initial={{ opacity: 0, y: -10 }} 
              animate={{ opacity: 1, y: 0 }} 
              className="text-red-300 text-sm ml-2 bg-red-500/20 backdrop-blur-sm px-4 py-2 rounded-lg border border-red-400/30"
            >
              {errores.campos}
            </motion.p>
          )}
          <motion.button
            type="submit"
            className="w-full p-4 bg-gradient-to-r from-cyan-500 via-teal-500 to-blue-500 text-white font-extrabold rounded-xl hover:from-cyan-600 hover:via-teal-600 hover:to-blue-600 transition-all duration-300 text-xl mt-6 flex items-center justify-center gap-3 shadow-lg hover:shadow-2xl hover:shadow-cyan-500/25 transform hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none group relative overflow-hidden z-0"
            whileTap={{ scale: 0.97 }}
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
            disabled={enviando}
          >
            {/* Efecto de brillo animado */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              initial={{ x: '-100%' }}
              animate={{ x: '100%' }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3,
                ease: "easeInOut"
              }}
            />
            
            {enviando ? (
              <motion.span 
                className="flex items-center gap-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <motion.svg 
                  className="animate-spin h-6 w-6 text-white" 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                >
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
                </motion.svg>
                Enviando solicitud...
              </motion.span>
            ) : (
              <motion.span 
                className="flex items-center gap-3 z-10 relative"
                whileHover={{ scale: 1.05 }}
              >
                <FiCheckCircle className="text-white text-2xl group-hover:animate-pulse" />
                Enviar por WhatsApp
              </motion.span>
            )}
          </motion.button>
        </form>
        
        {mensajeConfirmacion && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, y: 20 }} 
            animate={{ opacity: 1, scale: 1, y: 0 }} 
            transition={{ type: "spring", duration: 0.6 }}
            className="mt-8 flex flex-col items-center bg-gradient-to-r from-green-400/20 to-emerald-400/20 backdrop-blur-sm rounded-2xl p-6 border border-green-400/30"
          >
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{
                duration: 0.6,
                ease: "easeInOut"
              }}
            >
              <FiCheckCircle className="text-green-400 text-6xl mb-4" />
            </motion.div>
            <p className="text-lg text-green-100 font-semibold text-center leading-relaxed">
              {mensajeConfirmacion}
            </p>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default TurnosOnlineWhatsapp;
