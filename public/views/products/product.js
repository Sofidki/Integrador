const Product = require("../../../src/database/models/Product");

const contenedorProductos = document.querySelector('#contenedor-producto');
const menu = document.querySelector('.menu');
const botonesCategorias = document.querySelector('.boton-categoria');

function cargarProductos() {
    Product.forEach(product => {
        
        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <div class="producto">
            <img class="producto-imagen" src="${producto.imagen}" alt="">
            <div class="produproductocto-detalle">
                <h3 class="producto-tituo">${producto.name}</h3>
                <p class="producto-precio">$${producto.price}</p>
                <button class="producto-agregar id="${producto.id}">Agregar</button>
            </div>`
    });
}

cargarProductos();

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {
        
        botonesCategorias.forEach(boton => boton.classList.renove("active"));
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "todos") {
            const productosBotones = product.filter(prodcuto => product.category === e.currentTarget.id);
            cargarProductos(productosBotones);
        }else {
            cargarProductos(producto);
        }
    });
})
