import { Request, Response, NextFunction } from 'express';
import { libroService } from '../services/libro.service';

export const libroController = {
  getAll: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const libros = await libroService.getAll();
      res.json(libros);
    } catch (e) { next(e); }
  },
  getById: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = Number(req.params.id);
      const libro = await libroService.getById(id);
      if (!libro) return res.status(404).json({ error: 'Libro no encontrado' });
      res.json(libro);
    } catch (e) { next(e); }
  },
  create: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const nuevo = await libroService.create(req.body);
      res.status(201).json(nuevo);
    } catch (e) { next(e); }
  },
  update: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = Number(req.params.id);
      const actualizado = await libroService.update(id, req.body);
      res.json(actualizado);
    } catch (e) { next(e); }
  },
  delete: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = Number(req.params.id);
      await libroService.delete(id);
      res.status(204).send();
    } catch (e) { next(e); }
  },
};