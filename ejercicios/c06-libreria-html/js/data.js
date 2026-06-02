// Esperamos a que el HTML cargue completamente
document.addEventListener('DOMContentLoaded', () => {
    const boton = document.getElementById('boton-buscar');
    const input = document.getElementById('input-busqueda');
    const contenedor = document.getElementById('contenedor-libros');
    const errorDiv = document.getElementById('error-busqueda');

    // Escuchamos el clic en el botón de buscar
    if (boton) {
        boton.addEventListener('click', async () => {
            const query = input.value.trim();

            if (query === "") {
                errorDiv.textContent = "Por favor, ingresá un nombre de libro.";
                return;
            }

            try {
                // Limpiamos errores y mostramos que está cargando
                errorDiv.textContent = "";
                contenedor.innerHTML = '<div class="text-center w-100"><div class="spinner-border text-primary" role="status"></div><p>Buscando...</p></div>';

                // Pedimos los datos a la API
                const respuesta = await fetch(`https://openlibrary.org/search.json?q=${encodeURIComponent(query)}`);
                const datos = await respuesta.json();
                
                // Agarramos solo los primeros 8 resultados
                const libros = datos.docs.slice(0, 8);
                contenedor.innerHTML = ""; // Limpiamos el cargando

                if (libros.length === 0) {
                    contenedor.innerHTML = '<p class="text-center w-100">No se encontraron libros con ese nombre.</p>';
                    return;
                }

                // Recorremos los libros y creamos el HTML de las tarjetas
                libros.forEach(libro => {
                    const titulo = libro.title;
                    const autor = libro.author_name ? libro.author_name[0] : "Autor desconocido";
                    const portadaId = libro.cover_i 
                        ? `https://covers.openlibrary.org/b/id/${libro.cover_i}-M.jpg` 
                        : 'https://via.placeholder.com/150x200?text=Sin+Imagen';

                    // Insertamos la card de Bootstrap en el contenedor
                    contenedor.innerHTML += `
                        <div class="col-12 col-md-4 col-lg-3">
                            <div class="card h-100 shadow-sm">
                                <img src="${portadaId}" class="card-img-top" alt="${titulo}" style="height: 250px; object-fit: cover;">
                                <div class="card-body text-center">
                                    <h5 class="card-title h6 text-truncate">${titulo}</h5>
                                    <p class="card-text small text-muted">${autor}</p>
                                    <a href="libro.html" class="btn btn-sm btn-outline-primary">Ver detalle</a>
                                </div>
                            </div>
                        </div>
                    `;
                });

            } catch (error) {
                errorDiv.textContent = "Hubo un problema al conectar con la biblioteca.";
                contenedor.innerHTML = "";
            }
        });
    }
});