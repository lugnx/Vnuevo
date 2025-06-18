import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="home-container">
      <h1 className="main-title">Control de Vinatería 🍷</h1>
      <h2 className="subtitle">Bienvenido, elige tu opción :)</h2>
      <div className="options-grid">
        <Link to="#" className="option-button">
          <span className="option-icon">🛠️</span>
          Administrador
        </Link>
        <Link to="#" className="option-button">
          <span className="option-icon">💸</span>
          Contador
        </Link>
        <Link to="#" className="option-button">
          <span className="option-icon">📦</span>
          Almacenista
        </Link>
        <Link to="#" className="option-button">
          <span className="option-icon">🚚</span>
          Proveedor
        </Link>
      </div>
      <Link to="/new-user" className="new-user-button">
        Nuevo usuario
      </Link>
    </div>
  );
};

export default HomePage;
