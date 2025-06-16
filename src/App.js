import React, { useState } from 'react';
import './App.css';

function App() {
  const [usuario, setUsuario] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mensaje, setMensaje] = useState('');

  const manejarInicioSesion = async (e) => {
    e.preventDefault();
    try {
      const respuesta = await fetch('http://10.241.27.136:4000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      const data = await respuesta.json();
      if (respuesta.ok) {
        setMensaje(`Bienvenido/a ${data.usuario.nombre} como ${data.usuario.rol}`);
      } else {
        setMensaje(data.mensaje);
      }
    } catch (error) {
      console.error('Error al iniciar sesión', error);
      setMensaje('Error de conexión con el servidor');
    }
  };

  return (
    <div className="App">
      <h1>Bienvenido a Vinatería 🍷</h1>
      <h2>Selecciona tu usuario:</h2>
      <select onChange={(e) => setUsuario(e.target.value)} value={usuario}>
        <option value="">-- Selecciona un rol --</option>
        <option value="admin">Administrador</option>
        <option value="contador">Contador</option>
        <option value="proveedor">Proveedor</option>
        <option value="almacenista">Almacenista</option>
      </select>

      {usuario === 'admin' && (
        <form onSubmit={manejarInicioSesion}>
          <h3>Inicio de Sesión - Administrador</h3>
          <input
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <br />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <br />
          <button type="submit">Iniciar sesión</button>
        </form>
      )}
      <p>{mensaje}</p>
    </div>
  );
}

export default App;
