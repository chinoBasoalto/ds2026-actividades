import express from 'express';
import libroRouter from './routes/libro.routes';
import autorRouter from './routes/autor.routes';
import { errorHandler } from './middlewares/errorHandler';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/api/libros', libroRouter);
app.use('/api/autores', autorRouter);

// El errorHandler SIEMPRE va al final
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});