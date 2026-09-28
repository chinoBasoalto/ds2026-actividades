import React from 'react';
import { Link } from 'react-router-dom';

export const SinPermiso: React.FC = () => {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>403 - Acceso Denegado</h2>
      <p>No tenés los permisos necesarios para acceder a esta sección.</p>
      <Link to="/libros">Volver al Catálogo</Link>
    </div>
  );
};