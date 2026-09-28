import { Request, Response, NextFunction } from 'express';
import { Prisma } from '@prisma/client';

export const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof Prisma.PrismaClientKnownRequestError) {
    if (err.code === 'P2025') {
      return res.status(404).json({ error: 'Recurso no encontrado' });
    }
    if (err.code === 'P2002') {
      return res.status(409).json({ error: 'Conflicto: ya existe un registro con ese valor único' });
    }
    if (err.code === 'P2003') {
      return res.status(400).json({ error: 'Error de clave foránea: el ID referenciado no existe' });
    }
  }
  console.error(err);
  res.status(500).json({ error: 'Error interno del servidor' });
};