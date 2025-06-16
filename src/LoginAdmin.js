import React, { useState } from 'react';
import axios from 'axios';

function LoginAdmin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://10.241.27.136:4000/login', {
        email,
        password,
      });
      if (res.data.rol === 'admin') {
        setMensaje(`Bienvenida, ${res.data.nombre}`);
      } else {
        setMensaje('Este usuario no es administrador');
      }
    } catch (err) {
      setMensaje('Correo o contraseña incorrectos');
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Inicio de Sesión - Administrador</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Correo"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button type="submit">Entrar</button>
      </form>
      <p>{mensaje}</p>
    </div>
  );
}

export default LoginAdmin;
