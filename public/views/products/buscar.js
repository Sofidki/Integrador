const input = document.querySelector('#searchInput')
const userList = document.querySelector('#users')
const listado = document.querySelector('.producto');

window.addEventListener('DOMContentLoaded', async () => {
    const data = await loadUsers()
    console.log(data.data);
});


input.addEventListener('keyup', e => {
    const newUsers = users.filter(user => user.name.includes(input.value.tolowerCase()))
    renderUsers(newUsers)
})

async function loadUsers() {
    fetch ('http://localhost:3000/products/listar')
        .then(res => res.json())
        .then(data => {
            data.maps(loadUsers => {
                listado.innerHTML = `
                <div class="producto">
            <img class="producto-imagen" src="http://localhost:3000/images/${product.image}" alt="">
                <div class="producto-detalle">
                    <h3 class="producto-tituo">${product.name}</h3>
                    <p class="producto-precio">$${product.price}</p>
                    <button class="producto-agregar" id="">Agregar</button>
                </div>
            </div>
                `;
            })
        })
}




function renderUsers(users) {
    const itemsString = createUserItems (users)
    userList.innerHTML = itemsString
}