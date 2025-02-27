import { dataProductos } from "../data/data.js"; 
import { producto } from "./itemProducto.js";  
import { mostrarMenu } from "./header/header.js";  

export function iniciarApp() {
    mostrarMenu(); 
    cargarProductos();
}

export function cargarProductos() {
    const contenedor = document.createElement("section");
    contenedor.classList.add("catalogo");
    document.body.appendChild(contenedor);
    
    dataProductos.forEach(productoInfo => {
        contenedor.appendChild(producto(productoInfo));
    });
}
