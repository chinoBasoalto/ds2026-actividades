"use strict";
async function obtenerUsuarios() {
    // Agarramos los elementos del HTML
    const cartelCarga = document.getElementById('cargando');
    const cartelError = document.getElementById('error-msg');
    const listaUl = document.getElementById('lista-usuarios');
    try {
        // 1. Mostrar carga y limpiar errores previos
        if (cartelCarga)
            cartelCarga.style.display = 'block';
        if (cartelError)
            cartelError.textContent = '';
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!res.ok) {
            throw new Error("No se pudo conectar con el servidor");
        }
        const data = await res.json();
        // 2. Dibujar la lista en el HTML
        if (listaUl) {
            data.forEach(u => {
                const li = document.createElement('li');
                li.textContent = `${u.name} - ${u.email}`;
                listaUl.appendChild(li);
            });
        }
        return data;
    }
    catch (e) {
        // 3. Si hay error, lo mostramos en rojo
        if (cartelError) {
            cartelError.textContent = "Hubo un error al cargar los datos.";
        }
        return [];
    }
    finally {
        // 4. Pase lo que pase, ocultamos el "Cargando..."
        if (cartelCarga) {
            cartelCarga.style.display = 'none';
        }
    }
}
// Arrancar la funcion
obtenerUsuarios();
export {};
