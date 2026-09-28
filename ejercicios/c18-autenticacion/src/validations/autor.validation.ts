import { z } from 'zod';

export const createAutorSchema = z.object({
  nombre: z.string().min(1, 'El nombre es obligatorio'),
  nacionalidad: z.string().min(1, 'La nacionalidad es obligatoria'),
});

export const updateAutorSchema = createAutorSchema.partial();