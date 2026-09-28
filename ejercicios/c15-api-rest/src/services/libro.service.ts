import { Libro } from '../types/libro';

let libros: Libro[] = [
  { id: 1, titulo: "Rayuela", autorId: 1, anio: 1963 },
  { id: 2, titulo: "Ficciones", autorId: 2, anio: 1944 }
];

export const libroService = {
  getAll: () => libros,
  getById: (id: number) => libros.find(l => l.id === id),
  create: (data: Omit<Libro, 'id'>) => {
    const nuevoLibro: Libro = { id: Date.now(), ...data };
    libros.push(nuevoLibro);
    return nuevoLibro;
  },
  update: (id: number, data: Partial<Omit<Libro, 'id'>>) => {
    const index = libros.findIndex(l => l.id === id);
    if (index === -1) return null;
    libros[index] = { ...libros[index], ...data };
    return libros[index];
  },
  delete: (id: number) => {
    const index = libros.findIndex(l => l.id === id);
    if (index === -1) return false;
    libros.splice(index, 1);
    return true;
  }
};