import { Prisma } from '@prisma/client';
import { prisma } from '../prisma';

export type LibroConAutor = Prisma.LibroGetPayload<{
  include: { autor: true };
}>;

export type LibroCompleto = Prisma.LibroGetPayload<{
  include: { autor: true; categorias: true };
}>;

export const libroService = {
  getAll: (): Promise<LibroConAutor[]> =>
    prisma.libro.findMany({
      include: { autor: true },
    }),

  getById: (id: number): Promise<LibroCompleto | null> =>
    prisma.libro.findUnique({
      where: { id },
      include: { autor: true, categorias: true },
    }),

  create: (data: { titulo: string; anio: number; autorId: number; categoriaIds?: number[] }) => {
    const { categoriaIds, ...rest } = data;
    return prisma.libro.create({
      data: {
        ...rest,
        autor: { connect: { id: data.autorId } },
        ...(categoriaIds && {
          categorias: { connect: categoriaIds.map((id) => ({ id })) },
        }),
      },
      include: { autor: true, categorias: true },
    });
  },

  update: (id: number, data: { titulo?: string; anio?: number; autorId?: number; categoriaIds?: number[] }) => {
    const { categoriaIds, autorId, ...rest } = data;
    return prisma.libro.update({
      where: { id },
      data: {
        ...rest,
        ...(autorId && { autor: { connect: { id: autorId } } }),
        ...(categoriaIds && {
          categorias: { set: categoriaIds.map((id) => ({ id })) },
        }),
      },
      include: { autor: true, categorias: true },
    });
  },

  delete: async (id: number) => {
    await prisma.libro.delete({ where: { id } });
    return true;
  },
};