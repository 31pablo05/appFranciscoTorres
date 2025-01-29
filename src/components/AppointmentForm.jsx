import React, { useState } from 'react';

const AppointmentForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setError(''); // Limpiar cualquier error anterior
        setLoading(true); // Activar el indicador de carga

        // Validación básica de los campos
        if (!name || !email || !date) {
            setError('Por favor, complete todos los campos.');
            setLoading(false); // Desactivar el indicador de carga
            return;
        }

        if (!/\S+@\S+\.\S+/.test(email)) {
            setError('Por favor, ingrese un correo electrónico válido.');
            setLoading(false); // Desactivar el indicador de carga
            return;
        }

        // Aquí iría el código para enviar el formulario, por ejemplo, un POST a un servidor o un correo electrónico
        setTimeout(() => {
            alert("¡Tu turno ha sido enviado!");
            setName('');
            setEmail('');
            setDate('');
            setLoading(false); // Desactivar el indicador de carga
        }, 1500);
    }

    return (
        <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Solicitar un turno</h2>
            {error && <p className="text-red-500 text-sm mb-4">{error}</p>} {/* Mostrar el error si existe */}
            <form onSubmit={handleSubmit}>
                <label className="block mb-2">
                    Nombre:
                    <input 
                        type="text" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        className="w-full p-2 border border-gray-300 rounded"
                        placeholder="Ingresa tu nombre"
                    />
                </label>
                <label className="block mb-2">
                    Email:
                    <input 
                        type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        className="w-full p-2 border border-gray-300 rounded"
                        placeholder="Ingresa tu correo electrónico"
                    />
                </label>
                <label className="block mb-4">
                    Fecha:
                    <input 
                        type="date" 
                        value={date} 
                        onChange={(e) => setDate(e.target.value)} 
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </label>
                <button 
                    type="submit" 
                    className={`w-full py-2 rounded ${loading ? 'bg-gray-400' : 'bg-teal-500 hover:bg-teal-600 text-white'}`} 
                    disabled={loading} 
                >
                    {loading ? 'Enviando...' : 'Enviar'}
                </button>
            </form>
        </div>
    );
}

export default AppointmentForm;
