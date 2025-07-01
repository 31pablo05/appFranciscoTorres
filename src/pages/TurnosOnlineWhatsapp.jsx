import React, { useState, useMemo } from 'react';
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

  const horariosAtencion = {
    lunes: { inicio: '10:30', fin: '17:00' },
    martesViernes: { inicio: '16:00', fin: '20:00' },
  };

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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-700 via-teal-400 to-blue-900 py-16 px-2">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, type: 'spring' }}
        className="w-full max-w-xl mx-auto rounded-3xl bg-white/70 backdrop-blur-lg shadow-2xl p-8 md:p-12 flex flex-col items-center border border-blue-200/40"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-blue-800 text-center mb-8 tracking-wide drop-shadow-lg flex items-center gap-3">
          <FiCheckCircle className="text-teal-500 text-4xl" /> Reservar Turno
        </h2>
        <form onSubmit={crearTurno} className="w-full flex flex-col gap-6">
          {/* ...existing code... */}
          <div className="relative">
            <FiUser className="absolute left-3 top-1/2 -translate-y-1/2 text-teal-500 text-xl" />
            <input
              type="text"
              placeholder="Nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              className={`w-full pl-10 p-3 border ${errores.nombre ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-lg bg-white/80`}
              autoComplete="given-name"
            />
          </div>
          <div className="relative">
            <FiUser className="absolute left-3 top-1/2 -translate-y-1/2 text-teal-500 text-xl" />
            <input
              type="text"
              placeholder="Apellido"
              value={apellido}
              onChange={(e) => setApellido(e.target.value)}
              className={`w-full pl-10 p-3 border ${errores.apellido ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-lg bg-white/80`}
              autoComplete="family-name"
            />
          </div>
          <div className="relative">
            <FiPhone className="absolute left-3 top-1/2 -translate-y-1/2 text-teal-500 text-xl" />
            <input
              type="tel"
              placeholder="Teléfono (solo números)"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
              className={`w-full pl-10 p-3 border ${errores.telefono ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-lg bg-white/80`}
              autoComplete="tel"
            />
            {errores.telefono && <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-500 text-sm mt-1 ml-2">{errores.telefono}</motion.p>}
          </div>
          <div className="relative">
            <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-teal-500 text-xl" />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full pl-10 p-3 border ${errores.email ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-lg bg-white/80`}
              autoComplete="email"
            />
            {errores.email && <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-500 text-sm mt-1 ml-2">{errores.email}</motion.p>}
          </div>
          <div className="relative flex items-center">
            <FiCalendar className="absolute left-3 top-1/2 -translate-y-1/2 text-teal-500 text-xl z-10" />
            <div className="w-full pl-10">
              <DatePicker
                selected={fecha}
                onChange={setFecha}
                minDate={minDate}
                filterDate={date => !isDayDisabled(date)}
                dateFormat="dd/MM/yyyy"
                placeholderText="Selecciona una fecha"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-lg bg-white/80"
                calendarClassName="!bg-white !rounded-xl !shadow-lg !border !border-blue-200"
                popperPlacement="bottom"
                locale="es"
                showPopperArrow={false}
                weekDayClassName={() => 'capitalize'}
              />
            </div>
          </div>
          <div className="relative">
            <FiClock className="absolute left-3 top-1/2 -translate-y-1/2 text-teal-500 text-xl" />
            <select
              id="hora"
              value={hora}
              onChange={e => setHora(e.target.value)}
              className="w-full pl-10 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-lg bg-white/80"
              disabled={horaSlots.length === 0}
              title="Selecciona una hora para el turno"
            >
              <option value="">Selecciona una hora</option>
              {horaSlots.map(hs => (
                <option key={hs} value={hs}>{hs}</option>
              ))}
            </select>
          </div>
          <div className="relative">
            <FiMapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-teal-500 text-xl" />
            <select
              value={localidad}
              onChange={e => { setLocalidad(e.target.value); setFecha(null); setHora(''); }}
              className="w-full pl-10 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-lg bg-white/80"
            >
              <option value="Esquel">Esquel</option>
              <option value="Gobernador Costa">Gobernador Costa</option>
            </select>
          </div>
          {errores.fechaHora && <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-500 text-sm mt-1 ml-2">{errores.fechaHora}</motion.p>}
          {errores.campos && <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-500 text-sm mt-1 ml-2">{errores.campos}</motion.p>}
          <motion.button
            type="submit"
            className="w-full p-4 bg-gradient-to-r from-teal-500 to-blue-700 text-white font-extrabold rounded-xl hover:bg-teal-700 transition duration-300 text-xl mt-4 flex items-center justify-center gap-2 shadow-lg"
            whileTap={{ scale: 0.97 }}
            disabled={enviando}
          >
            {enviando ? (
              <span className="flex items-center gap-2"><svg className="animate-spin h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path></svg>Enviando...</span>
            ) : (
              <span className="flex items-center gap-2"><FiCheckCircle className="text-white text-2xl" />Enviar</span>
            )}
          </motion.button>
        </form>
        {mensajeConfirmacion && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mt-8 flex flex-col items-center">
            <FiCheckCircle className="text-green-500 text-5xl mb-2 animate-bounce" />
            <p className="text-lg text-teal-700 font-semibold text-center bg-white/80 rounded-lg px-4 py-2 shadow-md">{mensajeConfirmacion}</p>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default TurnosOnlineWhatsapp;
