import { useEffect, useState } from 'react';
import { apiFetch } from './services/api';
import type { Libro, Usuario } from './types';
import { Login } from './components/Login';
import { AltaLibro } from './components/AltaLibro';

export function App() {
  const [libros, setLibros] = useState<Libro[]>([]);
  const [usuario, setUsuario] = useState<Usuario | null>(null);

  const cargarLibros = async () => {
    try {
      const data = await apiFetch<Libro[]>('/libros');
      setLibros(data);
    } catch (err) {
      console.error(err);
    }
  };

  const cargarUsuario = async () => {
    if (!localStorage.getItem('token')) return;
    try {
      const data = await apiFetch<Usuario>('/auth/yo');
      setUsuario(data);
    } catch {
      localStorage.removeItem('token');
      setUsuario(null);
    }
  };

  useEffect(() => {
    cargarLibros();
    cargarUsuario();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setUsuario(null);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Catálogo de Libros</h1>

      {usuario ? (
        <div>
          <p>Conectado como: <strong>{usuario.nombre}</strong> ({usuario.rol})</p>
          <button onClick={handleLogout}>Cerrar Sesión</button>
        </div>
      ) : (
        <Login onLoginSuccess={() => { cargarUsuario(); cargarLibros(); }} />
      )}

      <ul>
        {libros.map((l) => (
          <li key={l.id}>
            <strong>{l.titulo}</strong> ({l.anio}) - Autor: {l.autor?.nombre}
          </li>
        ))}
      </ul>

      <AltaLibro onLibroCreado={cargarLibros} />
    </div>
  );
}

export default App;