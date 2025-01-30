import React, { useState } from 'react'; 
import emailjs from 'emailjs-com';

const TurnosOnlineEmail = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [telefono, setTelefono] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');
  const [obraSocial, setObraSocial] = useState('');
  const [mensajeConfirmacion, setMensajeConfirmacion] = useState('');
  const [errores, setErrores] = useState({});
  const [loading, setLoading] = useState(false);

  const validarTelefono = (telefono) => /^[0-9]{10}$/.test(telefono);
  const validarEmail = (email) => /^[a-zA-Z0-9._%+-]+@[a-zA0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
  const validarFecha = (fecha) => fecha !== '';
  const validarHora = (hora) => hora >= '09:00' && hora <= '18:00';
  const validarDiaDeLaSemana = (fecha) => {
    const dia = new Date(fecha).getDay();
    return dia >= 1 && dia <= 5; // Lunes a Viernes
  };

  const enviarSolicitud = (e) => {
    e.preventDefault();
    let erroresValidacion = {};

    if (!nombre || !apellido || !telefono || !email || !fecha || !hora) {
      erroresValidacion.campos = "Todos los campos son obligatorios.";
    }

    if (!validarTelefono(telefono)) {
      erroresValidacion.telefono = "Por favor, ingrese un número de teléfono válido (10 dígitos).";
    }

    if (!validarEmail(email)) {
      erroresValidacion.email = "Por favor, ingrese un correo electrónico válido.";
    }

    if (!validarFecha(fecha)) {
      erroresValidacion.fecha = "Por favor, ingrese una fecha válida.";
    }

    if (!validarHora(hora)) {
      erroresValidacion.hora = "La hora debe estar entre las 9:00 y las 18:00.";
    }

    if (!validarDiaDeLaSemana(fecha)) {
      erroresValidacion.fecha = "Los turnos solo se pueden reservar de lunes a viernes.";
    }

    if (Object.keys(erroresValidacion).length > 0) {
      setErrores(erroresValidacion);
      return;
    }

    setLoading(true);

    const templateParamsCliente = {
      nombre,
      apellido,
      telefono,
      email,
      fecha,
      hora,
      obraSocial,
      destinatarioCliente: email,
    };

    emailjs.send('service_607oegd', 'template_e3rjb7i', templateParamsCliente, '7XFY1wKOtBnkHIUkt')
      .then((response) => {
        const templateParamsNutricionista = {
          nombre,
          apellido,
          telefono,
          email,
          fecha,
          hora,
          obraSocial,
          destinatarioNutricionista: 'pabloproboste64@gmail.com',
        };

        emailjs.send('service_607oegd', 'template_vgnm6ne', templateParamsNutricionista, '7XFY1wKOtBnkHIUkt')
          .then(() => {
            setMensajeConfirmacion('Tu solicitud de turno ha sido enviada. Pronto recibirás un correo de confirmación.');
            setLoading(false);
            setNombre('');
            setApellido('');
            setTelefono('');
            setEmail('');
            setFecha('');
            setHora('');
            setObraSocial('');
            setErrores({});
          }, () => {
            setMensajeConfirmacion('Hubo un problema al enviar el correo al nutricionista. Inténtalo de nuevo más tarde.');
            setLoading(false);
          });
      }, () => {
        setMensajeConfirmacion('Hubo un problema al enviar tu solicitud. Inténtalo de nuevo más tarde.');
        setLoading(false);
      });
  };

  return (
    <div className="bg-gradient-to-r from-blue-500 to-teal-400 flex flex-col items-center rounded-lg shadow-xl p-8 max-w-lg mx-auto mt-20 md:mt-24 lg:mt-28">
      <h2 className="text-3xl font-semibold text-white text-center mb-6 uppercase tracking-wider">Reservar Turno</h2>
      {mensajeConfirmacion && <p className="text-teal-600 mb-4">{mensajeConfirmacion}</p>}
      <form onSubmit={enviarSolicitud} className="w-full flex flex-col gap-6 mb-32 mt-8">
        {/* Nombre */}
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

        {/* Apellido */}
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

        {/* Teléfono */}
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

        {/* Email */}
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

        {/* Fecha */}
        <div>
          <input 
            type="date" 
            value={fecha}
            onChange={(e) => setFecha(e.target.value)} 
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-lg"
          />
        </div>

        {/* Hora */}
        <div>
          <input 
            type="time" 
            value={hora}
            onChange={(e) => setHora(e.target.value)} 
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-lg"
          />
        </div>

        {/* Obra Social */}
        <div>
          <input 
            type="text" 
            placeholder="Obra Social" 
            value={obraSocial}
            onChange={(e) => setObraSocial(e.target.value)} 
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-lg"
          />
        </div>

        <button type="submit" className="w-full p-3 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition duration-300 text-lg mt-4">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default TurnosOnlineEmail;
