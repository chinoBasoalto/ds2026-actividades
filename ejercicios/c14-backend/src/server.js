const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Datos hardcodeados de los libros
const libros = [
  {
    id: 1,
    titulo: "Clean Code",
    autor: "Robert C. Martin",
    precio: 45000,
    genero: "Programación",
    descripcion: "Un manual fundamental para ingenieros de software.",
    imagen: "https://images-na.ssl-images-amazon.com/images/I/41xSh4314sL.jpg"
  },
  {
    id: 2,
    titulo: "Dune",
    autor: "Frank Herbert",
    precio: 32000,
    genero: "Ciencia Ficción",
    descripcion: "La obra cumbre de la ciencia ficción de todos los tiempos.",
    imagen: "https://images-na.ssl-images-amazon.com/images/I/41U6v00mEBL.jpg"
  },
  {
    id: 3,
    titulo: "El Psicoanalista",
    autor: "John Katzenbach",
    precio: 28500,
    genero: "Thriller",
    descripcion: "Un thriller psicológico brillante e hipnótico.",
    imagen: "https://images-na.ssl-images-amazon.com/images/I/51AEXq56SlL.jpg"
  }
];

// Ruta Principal (Raíz)
app.get('/', (req, res) => {
  res.send(`
    <html lang="es">
      <head>
        <meta charset="UTF-8">
        <title>Librería API - Clase 14</title>
        <style>
          body { font-family: Arial, sans-serif; background-color: #121212; color: #fff; padding: 40px; text-align: center; }
          .card { background: #1e1e1e; padding: 20px; border-radius: 10px; display: inline-block; text-align: left; max-width: 500px; }
          a { color: #0d6efd; text-decoration: none; font-weight: bold; }
          a:hover { text-decoration: underline; }
        </style>
      </head>
      <body>
        <div class="card">
          <h1>🚀 Backend de la Librería Corriendo</h1>
          <p>Servidor Node.js + Express funcionando correctamente en Docker.</p>
          <hr/>
          <p>👉 Para consultar el catálogo de libros hace clic acá: <a href="/libros">GET /libros</a></p>
        </div>
      </body>
    </html>
  `);
});

// Endpoint de la consigna GET /libros
app.get('/libros', (req, res) => {
  res.json(libros);
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor escuchando en http://0.0.0.0:${PORT}`);
});