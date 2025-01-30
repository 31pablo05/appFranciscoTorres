import React, { useState } from 'react';

const TurnosOnlineWhatsapp = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [telefono, setTelefono] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');
  const [mensajeConfirmacion, setMensajeConfirmacion] = useState('');
  const [errores, setErrores] = useState({});

  const validarTelefono = (telefono) => /^[0-9]{10}$/.test(telefono);
  const validarEmail = (email) => /^[a-zA-Z0-9._%+-]+@[a-zAZ0-9.-]+\.[a-zA-Z]{2,}$/.test(email);

  const crearTurno = (e) => {
    e.preventDefault();
    let erroresValidacion = {};

    // Validación de campos vacíos
    if (!nombre || !apellido || !telefono || !email || !fecha || !hora) {
      erroresValidacion = { ...erroresValidacion, campos: "Todos los campos son obligatorios." };
    }

    // Validación de teléfono
    if (!validarTelefono(telefono)) {
      erroresValidacion = { ...erroresValidacion, telefono: "Por favor, ingrese un número de teléfono válido." };
    }

    // Validación de correo electrónico
    if (!validarEmail(email)) {
      erroresValidacion = { ...erroresValidacion, email: "Por favor, ingrese un correo electrónico válido." };
    }

    if (Object.keys(erroresValidacion).length > 0) {
      setErrores(erroresValidacion);
      return;
    }

    const mensajeWhatsApp = `
      ¡Hola! Quiero agendar un turno con los siguientes datos:
      Nombre: ${nombre} ${apellido}
      Teléfono: ${telefono}
      Email: ${email}
      Fecha: ${fecha}
      Hora: ${hora}
      ¡Gracias!
    `;
    const mensajeCodificado = encodeURIComponent(mensajeWhatsApp);
    window.location.href = `https://wa.me/542804389134?text=${mensajeCodificado}`;

    setMensajeConfirmacion('Tu solicitud de turno ha sido enviada a través de WhatsApp. ¡Pronto recibirás la confirmación!');
    setErrores({}); // Limpiar errores al enviar exitosamente el formulario
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
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-lg"
          />
          {errores.campos && !nombre && <p className="text-red-500 text-sm mt-1">{errores.campos}</p>}
        </div>
        
        <div>
          <input 
            type="text" 
            placeholder="Apellido" 
            value={apellido}
            onChange={(e) => setApellido(e.target.value)} 
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-lg"
          />
          {errores.campos && !apellido && <p className="text-red-500 text-sm mt-1">{errores.campos}</p>}
        </div>

        <div>
          <input 
            type="tel" 
            placeholder="Teléfono" 
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)} 
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-lg"
          />
          {errores.telefono && <p className="text-red-500 text-sm mt-1">{errores.telefono}</p>}
        </div>

        <div>
          <input 
            type="email" 
            placeholder="Email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-lg"
          />
          {errores.email && <p className="text-red-500 text-sm mt-1">{errores.email}</p>}
        </div>

        <div>
          <input 
            type="date" 
            value={fecha}
            onChange={(e) => setFecha(e.target.value)} 
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-lg"
          />
        </div>

        <div>
          <input 
            type="time" 
            value={hora}
            onChange={(e) => setHora(e.target.value)} 
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-lg"
          />
        </div>

        <button type="submit" className="w-full p-3 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition duration-300 text-lg mt-4">
          Enviar
        </button>
      </form>

      {mensajeConfirmacion && (
        <div className="mt-6 text-teal-600 text-lg font-semibold text-center">{mensajeConfirmacion}</div>
      )}
    </div>
  );
};

export default TurnosOnlineWhatsapp;
