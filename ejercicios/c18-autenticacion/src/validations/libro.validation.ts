import { z } from 'zod';

export const createLibroSchema = z.object({
  titulo: z.string().min(1, 'El título es obligatorio'),
  anio: z.number().int().min(1000).max(new Date().getFullYear()),
  autorId: z.number().int().positive(),
  categoriaIds: z.array(z.number().int().positive()).optional(),
});

export const updateLibroSchema = createLibroSchema.partial();