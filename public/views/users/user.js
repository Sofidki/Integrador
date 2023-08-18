const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');

registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});

const user = document.getElementById("usuario");
const email = document.getElementById("email");
const pass = document.getElementById("password");
const button = document.getElementById("button");


button.addEventListener('click', (e) => {
    e.preventDefault();
    let regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    if (user.valeu == "") {
        return res.json ({mgs: 'El campo name es requerido'})
    }
    if (!regexEmail.test == email.valeu){
        return res.json ({mgs: 'El campo email es requerido'})
    }
    if (pass.valeu == "") {
        return res.json ({mgs: 'La contraseña no es valida'})
    } else {
        body.user = user.valeu;
        body.password = pass.valeu;
        body.email = email.valeu;

        let options = {
            method: 'POST',
            headers: {
                'Content-Type':'application/json'},
            body: JSON.stringify({
                user,
                pass,
                price,
            }),
        }
        console.log(options);

        fetch('http://localhost:3000/user/registro', options)
            .then(res => res.json())
            .then(data => {
                swal({
                    title: 'Se creo correctamente',
                    icon: 'success'
                })
            })
            .catch (error => {
                swal({
                    title: 'Hubo un error',
                    icon: 'error'
                })
            })
    }
})


