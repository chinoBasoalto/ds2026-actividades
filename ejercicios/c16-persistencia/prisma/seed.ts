import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.libro.deleteMany();
  await prisma.autor.deleteMany();

  await prisma.autor.createMany({
    data: [
      { nombre: 'Julio Cortázar', nacionalidad: 'Argentina' },
      { nombre: 'Jorge Luis Borges', nacionalidad: 'Argentina' },
    ],
  });

  await prisma.libro.createMany({
    data: [
      { titulo: 'Rayuela', autorId: 1, anio: 1963 },
      { titulo: 'Ficciones', autorId: 2, anio: 1944 },
    ],
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