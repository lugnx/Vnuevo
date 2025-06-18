import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import NewUserPage from './components/NewUserPage';
import './styles.css';

const App = () => {
  return (
    <Router basename="/Vnuevo">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/new-user" element={<NewUserPage />} />
      </Routes>
    </Router>
  );
};

export default App;
