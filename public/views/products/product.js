
const listado = document.querySelector('.producto');
const botonesCategorias = document.querySelectorAll('.boton-categorias');


fetch('http://localhost:3000/products/listar')
    .then(res => res.json())
    .then(data => {
        data.forEach(product => {
            listado.innerHTML += `
            <div class="producto">
            <img class="producto-imagen" src="http://localhost:3000/images/${product.image}" alt="">
                <div class="producto-detalle">
                    <h3 class="producto-tituo">${product.name}</h3>
                    <p class="producto-precio">$${product.price}</p>
                    <button class="producto-agregar" id="">Agregar</button>
                </div>
            </div>
            `;
            
        });
    })
    .catch(error => console.log('Hubo un error:' + error));





