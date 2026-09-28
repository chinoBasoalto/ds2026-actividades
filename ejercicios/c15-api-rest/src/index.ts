import express from 'express';
import libroRouter from './routes/libro.routes';
import autorRouter from './routes/autor.routes';

const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/api/libros', libroRouter);
app.use('/api/autores', autorRouter);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

app.get('/', (req, res) => {
  res.send('API REST de la Librería funcionando. Usá /api/libros o /api/autores');
});