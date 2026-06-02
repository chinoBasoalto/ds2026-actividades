export interface LibroOL {
    title: string;
    author_name?: string[]; // La API devuelve un array de nombres
    first_publish_year?: number;
}

async function buscarLibros() {
    const input = document.getElementById('input-busqueda') as HTMLInputElement;
    const boton = document.getElementById('boton-buscar');
    const contenedor = document.getElementById('contenedor-libros');
    const errorDiv = document.getElementById('error-busqueda');

    if (!input || !boton || !contenedor || !errorDiv) return;

    boton.addEventListener('click', async () => {
        const query = input.value.trim();

        // Validación: input vacío
        if (query === "") {
            errorDiv.textContent = "Por favor, escribí algo para buscar.";
            contenedor.innerHTML = "";
            return;
        }

        try {
            errorDiv.textContent = "";
            contenedor.innerHTML = "Buscando...";

            const res = await fetch(`https://openlibrary.org/search.json?q=${encodeURIComponent(query)}`);
            const data = await res.json();
            
            // La API devuelve los resultados en 'docs'
            const libros: LibroOL[] = data.docs.slice(0, 10); // Solo los primeros 10

            contenedor.innerHTML = ""; // Limpiamos el "Buscando..."

            if (libros.length === 0) {
                contenedor.innerHTML = "No se encontraron libros.";
                return;
            }

            libros.forEach(libro => {
                const card = document.createElement('div');
                card.className = 'libro-card';

                // Manejo de campos opcionales
                const autor = libro.author_name ? libro.author_name[0] : "Autor desconocido";
                const año = libro.first_publish_year ? libro.first_publish_year : "Año no disponible";

                card.innerHTML = `
                    <h3>${libro.title}</h3>
                    <p><strong>Autor:</strong> ${autor}</p>
                    <p><strong>Año:</strong> ${año}</p>
                `;
                contenedor.appendChild(card);
            });

        } catch (e) {
            errorDiv.textContent = "Ocurrió un error con la API.";
            contenedor.innerHTML = "";
        }
    });
}

buscarLibros();
export {};