import React, { useState } from 'react';
import { apiFetch } from '../services/api';
import type { Libro } from '../types';

interface AltaLibroProps {
  onLibroCreado: () => void;
}

export const AltaLibro: React.FC<AltaLibroProps> = ({ onLibroCreado }) => {
  const [titulo, setTitulo] = useState('');
  const [anio, setAnio] = useState('');
  const [autorId, setAutorId] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [exito, setExito] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setExito(false);

    try {
      await apiFetch<Libro>('/libros', {
        method: 'POST',
        body: JSON.stringify({
          titulo,
          anio: Number(anio),
          autorId: Number(autorId),
        }),
      });
      setExito(true);
      setTitulo('');
      setAnio('');
      setAutorId('');
      onLibroCreado();
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
      <h3>Agregar Libro (Solo Admin)</h3>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {exito && <p style={{ color: 'green' }}>Libro creado con éxito!</p>}
      <input
        type="text"
        placeholder="Título"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
      />
      <input
        type="number"
        placeholder="Año"
        value={anio}
        onChange={(e) => setAnio(e.target.value)}
      />
      <input
        type="number"
        placeholder="ID Autor"
        value={autorId}
        onChange={(e) => setAutorId(e.target.value)}
      />
      <button type="submit">Guardar Libro</button>
    </form>
  );
};