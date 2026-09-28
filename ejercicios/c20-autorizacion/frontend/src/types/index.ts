export type Rol = 'ADMIN' | 'CLIENTE';

export interface Autor {
  id: number;
  nombre: string;
  nacionalidad: string;
}

export interface Categoria {
  id: number;
  nombre: string;
}

export interface Libro {
  id: number;
  titulo: string;
  anio: number;
  autorId: number;
  autor: Autor;
  categorias?: Categoria[];
}

export interface Usuario {
  id: number;
  email: string;
  nombre: string;
  rol: Rol;
}

export interface LoginResponse {
  token: string;
}