import { z } from 'zod';

export const idParamSchema = z.object({
  id: z.string().regex(/^\d+$/, 'El ID debe ser un número entero').transform(Number),
});