import { Autor } from '../types/autor';

let autores: Autor[] = [
  { id: 1, nombre: "Julio Cortázar", nacionalidad: "Argentina" },
  { id: 2, nombre: "Jorge Luis Borges", nacionalidad: "Argentina" }
];

export const autorService = {
  getAll: () => autores,
  getById: (id: number) => autores.find(a => a.id === id),
  create: (data: Omit<Autor, 'id'>) => {
    const nuevoAutor: Autor = { id: Date.now(), ...data };
    autores.push(nuevoAutor);
    return nuevoAutor;
  },
  update: (id: number, data: Partial<Omit<Autor, 'id'>>) => {
    const index = autores.findIndex(a => a.id === id);
    if (index === -1) return null;
    autores[index] = { ...autores[index], ...data };
    return autores[index];
  },
  delete: (id: number) => {
    const index = autores.findIndex(a => a.id === id);
    if (index === -1) return false;
    autores.splice(index, 1);
    return true;
  }
};