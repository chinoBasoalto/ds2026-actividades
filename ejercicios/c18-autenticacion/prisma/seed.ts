import { PrismaClient, Rol } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  await prisma.libro.deleteMany();
  await prisma.categoria.deleteMany();
  await prisma.autor.deleteMany();
  await prisma.usuario.deleteMany();

  const passwordHash = await bcrypt.hash('12345678', 10);

  await prisma.usuario.createMany({
    data: [
      {
        nombre: 'Admin General',
        email: 'admin@libreria.com',
        passwordHash,
        rol: Rol.ADMIN,
      },
      {
        nombre: 'Cliente Prueba',
        email: 'cliente@libreria.com',
        passwordHash,
        rol: Rol.CLIENTE,
      },
    ],
  });

  const cortazar = await prisma.autor.create({
    data: { nombre: 'Julio Cortázar', nacionalidad: 'Argentina' },
  });

  const ficcion = await prisma.categoria.create({
    data: { nombre: 'Ficción' },
  });

  await prisma.libro.create({
    data: {
      titulo: 'Rayuela',
      anio: 1963,
      autor: { connect: { id: cortazar.id } },
      categorias: { connect: [{ id: ficcion.id }] },
    },
  });

  console.log('Seed ejecutado exitosamente');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });