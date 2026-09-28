import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export const Navbar: React.FC = () => {
  const { usuario, estaAutenticado, tieneRol, logout } = useAuth();

  return (
    <nav style={{ display: 'flex', gap: '15px', padding: '10px 0', borderBottom: '1px solid #ccc' }}>
      <Link to="/libros">Catálogo</Link>
      {tieneRol('ADMIN') && <Link to="/libros/nuevo">Nuevo libro</Link>}
      
      <div style={{ marginLeft: 'auto' }}>
        {estaAutenticado && usuario ? (
          <span>
            Hola, <strong>{usuario.nombre}</strong> ·{' '}
            <button onClick={logout} style={{ cursor: 'pointer' }}>
              Salir
            </button>
          </span>
        ) : (
          <Link to="/login">Ingresar</Link>
        )}
      </div>
    </nav>
  );
};