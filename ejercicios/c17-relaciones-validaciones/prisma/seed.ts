import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.libro.deleteMany();
  await prisma.categoria.deleteMany();
  await prisma.autor.deleteMany();

  const cortazar = await prisma.autor.create({
    data: { nombre: 'Julio Cortázar', nacionalidad: 'Argentina' },
  });

  const borges = await prisma.autor.create({
    data: { nombre: 'Jorge Luis Borges', nacionalidad: 'Argentina' },
  });

  const ficcion = await prisma.categoria.create({
    data: { nombre: 'Ficción' },
  });

  const clasicos = await prisma.categoria.create({
    data: { nombre: 'Clásicos' },
  });

  await prisma.libro.create({
    data: {
      titulo: 'Rayuela',
      anio: 1963,
      autor: { connect: { id: cortazar.id } },
      categorias: { connect: [{ id: ficcion.id }, { id: clasicos.id }] },
    },
  });

  await prisma.libro.create({
    data: {
      titulo: 'Ficciones',
      anio: 1944,
      autor: { connect: { id: borges.id } },
      categorias: { connect: [{ id: ficcion.id }] },
    },
  });

  console.log('Seed ejecutado con éxito');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });