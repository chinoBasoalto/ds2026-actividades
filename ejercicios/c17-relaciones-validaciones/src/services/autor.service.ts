import { prisma } from '../prisma';

export const autorService = {
  getAll: () => prisma.autor.findMany({ include: { libros: true } }),
  getById: (id: number) => prisma.autor.findUnique({ where: { id }, include: { libros: true } }),
  create: (data: { nombre: string; nacionalidad: string }) => prisma.autor.create({ data }),
  update: (id: number, data: { nombre?: string; nacionalidad?: string }) =>
    prisma.autor.update({ where: { id }, data }),
  delete: async (id: number) => {
    await prisma.autor.delete({ where: { id } });
    return true;
  },
};