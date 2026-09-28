import express from 'express';
import libroRouter from './routes/libro.routes';
import autorRouter from './routes/autor.routes';
import authRouter from './routes/auth.routes';
import { errorHandler } from './middlewares/errorHandler';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ mensaje: 'API de la Librería corriendo correctamente 🚀' });
});
app.use('/api/auth', authRouter);
app.use('/api/libros', libroRouter);
app.use('/api/autores', autorRouter);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});