import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { prisma } from '../prisma';

const JWT_SECRET = process.env.JWT_SECRET || 'secret_default_key';

export const authService = {
  registro: async (data: { email: string; password: string; nombre: string }) => {
    const passwordHash = await bcrypt.hash(data.password, 10);
    const usuario = await prisma.usuario.create({
      data: {
        email: data.email,
        passwordHash,
        nombre: data.nombre,
      },
    });

    const { passwordHash: _, ...usuarioSinHash } = usuario;
    return usuarioSinHash;
  },

  login: async (data: { email: string; password: string }) => {
    const usuario = await prisma.usuario.findUnique({
      where: { email: data.email },
    });

    if (!usuario) {
      return null;
    }

    const esValida = await bcrypt.compare(data.password, usuario.passwordHash);
    if (!esValida) {
      return null;
    }

    const token = jwt.sign(
      { id: usuario.id, email: usuario.email, rol: usuario.rol },
      JWT_SECRET,
      { expiresIn: '8h' }
    );

    return { token };
  },

  obtenerYo: async (id: number) => {
    const usuario = await prisma.usuario.findUnique({ where: { id } });
    if (!usuario) return null;

    const { passwordHash, ...usuarioSinHash } = usuario;
    return usuarioSinHash;
  },
};