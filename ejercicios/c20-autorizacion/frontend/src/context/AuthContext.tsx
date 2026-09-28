import React, { createContext, useContext, useEffect, useState } from 'react';
import type { Rol, Usuario } from '../types';
import { apiFetch } from '../services/api';

interface AuthContextType {
  usuario: Usuario | null;
  cargando: boolean;
  login: (token: string) => Promise<void>;
  logout: () => void;
  estaAutenticado: boolean;
  tieneRol: (rol: Rol) => boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [usuario, setUsuario] = useState<Usuario | null>(null);
  const [cargando, setCargando] = useState<boolean>(true);

  const rehidratar = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      setCargando(false);
      return;
    }
    try {
      const data = await apiFetch<Usuario>('/auth/yo');
      setUsuario(data);
    } catch {
      localStorage.removeItem('token');
      setUsuario(null);
    } finally {
      setCargando(false);
    }
  };

  useEffect(() => {
    rehidratar();

    const handleUnauthorized = () => {
      logout();
    };

    window.addEventListener('auth:unauthorized', handleUnauthorized);
    return () => {
      window.removeEventListener('auth:unauthorized', handleUnauthorized);
    };
  }, []);

  const login = async (token: string) => {
    localStorage.setItem('token', token);
    setCargando(true);
    try {
      const data = await apiFetch<Usuario>('/auth/yo');
      setUsuario(data);
    } catch (e) {
      localStorage.removeItem('token');
      setUsuario(null);
      throw e;
    } finally {
      setCargando(false);
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUsuario(null);
  };

  const estaAutenticado = !!usuario;

  const tieneRol = (rol: Rol) => {
    return usuario?.rol === rol;
  };

  return (
    <AuthContext.Provider
      value={{
        usuario,
        cargando,
        login,
        logout,
        estaAutenticado,
        tieneRol,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth debe usarse dentro de un AuthProvider');
  }
  return context;
};