import { Rol } from '@prisma/client';

export interface UsuarioPayload {
  id: number;
  email: string;
  rol: Rol;
}

declare global {
  namespace Express {
    interface Request {
      usuario?: UsuarioPayload;
    }
  }
}