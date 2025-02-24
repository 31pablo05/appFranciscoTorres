import React, { useState } from 'react';

const TurnosOnlineWhatsapp = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [telefono, setTelefono] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState('');
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
    const hoy = new Date();
    const fechaSeleccionada = new Date(fecha);
    const diaSeleccionado = fechaSeleccionada.getDay(); 

    if (diaSeleccionado === 5 || diaSeleccionado === 6) {
      return "No se pueden agendar turnos para sábados ni domingos.";
    }

    const mañana = new Date(hoy);
    mañana.setDate(hoy.getDate() + 1);

    if (fechaSeleccionada <= mañana) {
      return "Debe seleccionar una fecha con al menos un día de anticipación.";
    }

    if (localidad === 'Esquel' && diaSeleccionado !== 0) {
      return "Solo se pueden agendar turnos los lunes en Esquel.";
    }

    if (localidad === 'Gobernador Costa' && diaSeleccionado === 0) {
      return "No se pueden agendar turnos los lunes en Gobernador Costa.";
    }

    const horaSeleccionada = parseFloat(hora.replace(":", "."));

    if (localidad === 'Esquel' && (horaSeleccionada < 10.5 || horaSeleccionada > 17)) {
      return "El horario seleccionado no está disponible para los lunes en Esquel. Solo se permite de 10:30 a 17:00.";
    }

    if (localidad === 'Gobernador Costa' && (horaSeleccionada < 16 || horaSeleccionada > 20)) {
      return "El horario seleccionado no está disponible para los martes a viernes en Gobernador Costa. Solo se permite de 16:00 a 20:00.";
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

    const mensajeWhatsApp = `
      ¡Hola! Quiero agendar un turno, estos son mis datos:
      Nombre: ${nombre} ${apellido}
      Teléfono: ${telefono}
      Email: ${email}
      Fecha del turno: ${fecha}
      Hora del turno: ${hora}
      Localidad: ${localidad}
      ¡Gracias!
    `;
    const mensajeCodificado = encodeURIComponent(mensajeWhatsApp);
    window.location.href = `https://wa.me/5492945416969?text=${mensajeCodificado}`;

    setMensajeConfirmacion('Tu solicitud de turno ha sido enviada a través de WhatsApp. ¡Pronto recibirás la confirmación!');
    setErrores({});
    setEnviando(false); // Reset para spinner
  };

  return (
    <div className="flex flex-col items-center bg-gradient-to-r from-blue-500 to-teal-400 rounded-lg shadow-xl p-8 max-w-lg mx-auto mt-20 md:mt-24 lg:mt-28">
      <h2 className="text-3xl font-semibold text-white text-center mb-6 uppercase tracking-wider">Reservar Turno</h2>
      <form onSubmit={crearTurno} className="w-full flex flex-col gap-6">
        <div>
          <input
            type="text"
            placeholder="Nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className={`w-full p-3 border ${errores.nombre ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-lg`}
          />
        </div>

        <div>
          <input
            type="text"
            placeholder="Apellido"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
            className={`w-full p-3 border ${errores.apellido ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-lg`}
          />
        </div>

        <div>
          <input
            type="tel"
            placeholder="Teléfono"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            className={`w-full p-3 border ${errores.telefono ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-lg`}
          />
          {errores.telefono && <p className="text-red-500 text-sm mt-1">{errores.telefono}</p>}
        </div>

        <div>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`w-full p-3 border ${errores.email ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-lg`}
          />
          {errores.email && <p className="text-red-500 text-sm mt-1">{errores.email}</p>}
        </div>

        <div className="relative">
  <input
    id="fecha"
    type="date"
    value={fecha}
    onChange={(e) => setFecha(e.target.value)}
    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-lg"
    min={new Date().toISOString().split('T')[0]}
    title="Selecciona una fecha para el turno"
  />
  { !fecha && (
    <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400 md:hidden">
      Selecciona la fecha
    </span>
  )}
</div>

<div className="relative">
  <input
    id="hora"
    type="time"
    value={hora}
    onChange={(e) => setHora(e.target.value)}
    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-lg"
    title="Selecciona una hora para el turno"
  />
  { !hora && (
    <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400 md:hidden">
      Selecciona la hora
    </span>
  )}
</div>




        <div>
          <select
            value={localidad}
            onChange={(e) => setLocalidad(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-lg"
          >
            <option value="Esquel">Esquel</option>
            <option value="Gobernador Costa">Gobernador Costa</option>
          </select>
        </div>

        {errores.fechaHora && <p className="text-red-500 text-sm mt-1">{errores.fechaHora}</p>}

        <button type="submit" className="w-full p-3 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition duration-300 text-lg mt-4">
          {enviando ? 'Enviando...' : 'Enviar'}
        </button>
      </form>

      {mensajeConfirmacion && (
        <div className="mt-6 text-teal-600 text-center">
          <p>{mensajeConfirmacion}</p>
        </div>
      )}
    </div>
  );
};

export default TurnosOnlineWhatsapp;
