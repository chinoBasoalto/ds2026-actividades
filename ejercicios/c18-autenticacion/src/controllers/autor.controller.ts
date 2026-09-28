import { Request, Response, NextFunction } from 'express';
import { autorService } from '../services/autor.service';

export const autorController = {
  getAll: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const autores = await autorService.getAll();
      res.json(autores);
    } catch (e) { next(e); }
  },
  getById: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = Number(req.params.id);
      const autor = await autorService.getById(id);
      if (!autor) return res.status(404).json({ error: 'Autor no encontrado' });
      res.json(autor);
    } catch (e) { next(e); }
  },
  create: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const nuevo = await autorService.create(req.body);
      res.status(201).json(nuevo);
    } catch (e) { next(e); }
  },
  update: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = Number(req.params.id);
      const actualizado = await autorService.update(id, req.body);
      res.json(actualizado);
    } catch (e) { next(e); }
  },
  delete: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = Number(req.params.id);
      await autorService.delete(id);
      res.status(204).send();
    } catch (e) { next(e); }
  },
};