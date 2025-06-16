import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Inicio() {
  const [mostrarMenu, setMostrarMenu] = useState(false);
  const navigate = useNavigate();

  const handleSeleccion = (rol) => {
    if (rol === 'admin') {
      navigate('/login-admin');
    } else {
      alert('Próximamente disponible para: ' + rol);
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Bienvenido, Vinatería</h1>
      <button onClick={() => setMostrarMenu(!mostrarMenu)}>
        Selecciona tu usuario
      </button>
      {mostrarMenu && (
        <div style={{ marginTop: '20px' }}>
          <button onClick={() => handleSeleccion('admin')}>Administrador</button>
          <br />
          <button onClick={() => handleSeleccion('contador')}>Contador</button>
          <br />
          <button onClick={() => handleSeleccion('proveedor')}>Proveedor</button>
          <br />
          <button onClick={() => handleSeleccion('almacenista')}>Almacenista</button>
        </div>
      )}
    </div>
  );
}

export default Inicio;
