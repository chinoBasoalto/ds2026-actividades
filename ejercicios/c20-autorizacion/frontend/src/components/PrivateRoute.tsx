import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import type { Rol } from '../types';

interface PrivateRouteProps {
  rolRequerido?: Rol;
}

export const PrivateRoute: React.FC<PrivateRouteProps> = ({ rolRequerido }) => {
  const { usuario, cargando, estaAutenticado, tieneRol } = useAuth();

  if (cargando) {
    return <div style={{ padding: '20px' }}>Cargando sesión...</div>;
  }

  if (!estaAutenticado || !usuario) {
    return <Navigate to="/login" replace />;
  }

  if (rolRequerido && !tieneRol(rolRequerido)) {
    return <Navigate to="/sin-permiso" replace />;
  }

  return <Outlet />;
};