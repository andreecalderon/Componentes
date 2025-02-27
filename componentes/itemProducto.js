import { eliminarProducto, resaltarProducto } from './funcionesPruducto.js';

export function producto(data) {
    const div = document.createElement('div');
    div.classList.add('producto');
    div.innerHTML = `
        <div class="imagen"></div>
        <p>${data.nombre}</p>
        <p>Q ${data.precio}</p>
        <button class="resaltar">Resaltar</button>
        <button class="eliminar">Eliminar</button>
    `;
    
    div.querySelector('.resaltar').addEventListener('click', () => resaltarProducto(div));
    div.querySelector('.eliminar').addEventListener('click', () => eliminarProducto(div));
    
    return div;
}