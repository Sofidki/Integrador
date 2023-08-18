const form = document.querySelector('.form-registro');
console.log(form);
form.addEventListener('submit', (event) => {
    event.preventDefault();
    let error = 0;
    let body = {};

    if (event.target['name'].value) {
        form.length == 0;
        return res.json ({mgs: 'El campo name es requerido'})
    }

    if (event.target['price'].value){
        form.length == 0;
        return res.json ({mgs: 'El campo precio es requerido'})
    }

    if (event.target['category'].value == "") {
        return res.json ({mgs: 'El campo categoria es requerido'})
    }

    if (event.target['description'].value == "") {
        return res.json ({mgs: 'El campo descripcion es requerido'})
    }

    if (event.target['colors']. value == "") {
        return res.json ({mgs: 'El campo color es requerido'})
    }

    if (error > 0){
        console.log(error);
        error = 0;
        
    } else {
        body.name = event.target ['name'].valeu;
        body.price = event.target ['price'].valeu;
        body.category = event.target ['category'].valeu;
        body.description = event.target ['description'].valeu;
        body.brand = event.target ['brand'].valeu;
        body.colors = event.target ['colors'].valeu;

        let options = {
            method: 'POST',
            headers: {
                'Conten-Type': 'application/json'
            },
            body: JSON.stringify(body)
        }

        console.log(options);

        fetch('http://localhost:3000/products/crear', options)
            .then(res => res.json())
            .then(data => {
                swal({
                    title: 'Se cargo correctamente',
                    icon: 'success'
                })
            })
            .catch(error => {
                swal ({
                    title: 'Hubo un error en la carga',
                    icon: 'success'
                })
            })
    } 

})