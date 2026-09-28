import { Request, Response, NextFunction } from 'express';
import { authService } from '../services/auth.service';

export const authController = {
  registro: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const nuevoUsuario = await authService.registro(req.body);
      res.status(201).json(nuevoUsuario);
    } catch (e) {
      next(e);
    }
  },

  login: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const resultado = await authService.login(req.body);
      if (!resultado) {
        return res.status(401).json({ error: 'Credenciales inválidas' });
      }
      res.json(resultado);
    } catch (e) {
      next(e);
    }
  },

  yo: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const usuario = await authService.obtenerYo(req.usuario!.id);
      if (!usuario) {
        return res.status(404).json({ error: 'Usuario no encontrado' });
      }
      res.json(usuario);
    } catch (e) {
      next(e);
    }
  },
};