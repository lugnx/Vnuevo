import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NewUserPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'Administrador',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailDomain = '@vinaterix.com';
    const passwordRegex = /^(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

    if (!formData.email.endsWith(emailDomain)) {
      setError(`El correo debe terminar en ${emailDomain}`);
      return;
    }
    if (!passwordRegex.test(formData.password)) {
      setError('La contraseña debe tener al menos 8 caracteres y un carácter especial');
      return;
    }

    setError('');
    console.log('Usuario creado:', formData);
  };

  return (
    <div className="new-user-container">
      <Link to="/" className="back-button">
        <span className="back-icon">←</span> Regresar
      </Link>
      <h1 className="main-title">Crear nuevo usuario</h1>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit} className="user-form">
        <div className="form-group">
          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Correo</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="@vinaterix.com"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="role">Selecciona rol</label>
          <select
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            required
          >
            <option value="Administrador">Administrador</option>
            <option value="Contador">Contador</option>
            <option value="Almacenista">Almacenista</option>
            <option value="Proveedor">Proveedor</option>
          </select>
        </div>
        <button type="submit" className="save-button">
          Guardar
        </button>
      </form>
    </div>
  );
};

export default NewUserPage;
