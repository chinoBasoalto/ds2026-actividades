import React, { useEffect, useState } from 'react';
import { apiFetch } from '../services/api';
import type { Libro } from '../types';

export const Catalogo: React.FC = () => {
  const [libros, setLibros] = useState<Libro[]>([]);
  const [cargando, setCargando] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const cargarLibros = async () => {
    try {
      setCargando(true);
      const data = await apiFetch<Libro[]>('/libros');
      setLibros(data);
    } catch (err: any) {
      setError(err.message || 'Error al cargar los libros');
    } finally {
      setCargando(false);
    }
  };

  useEffect(() => {
    cargarLibros();
  }, []);

  if (cargando) {
    return <div style={{ padding: '20px' }}>Cargando catálogo...</div>;
  }

  if (error) {
    return <div style={{ padding: '20px', color: 'red' }}>Error: {error}</div>;
  }

  return (
    <div style={{ padding: '20px 0' }}>
      <h2>Catálogo de Libros</h2>
      {libros.length === 0 ? (
        <p>No hay libros disponibles.</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {libros.map((libro) => (
            <li
              key={libro.id}
              style={{
                border: '1px solid #ddd',
                borderRadius: '8px',
                padding: '12px',
                marginBottom: '10px',
              }}
            >
              <h3>{libro.titulo} ({libro.anio})</h3>
              <p><strong>Autor:</strong> {libro.autor?.nombre || 'Desconocido'}</p>
              {libro.categorias && libro.categorias.length > 0 && (
                <p>
                  <strong>Categorías:</strong>{' '}
                  {libro.categorias.map((c) => c.nombre).join(', ')}
                </p>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};