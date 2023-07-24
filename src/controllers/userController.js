const path = require('path');
const fs = require('fs');

//const ruta = path.resolve(__dirname, '');
//const  = fs.readFileSync(ruta, {encoding: 'utf-8'});
//let products = JSON.parse();

const controller = {
    crear: (req, res) => {
        let user = {};
        if (!req.body.name) {
            return res.json ({mgs: 'El campo name es requerido'})
        }

        user.id = user.length +1;
        user.name = req.body.name;
        user.price = req.body.price;
        user.description = req.body.description;
        user.image = req.body.image;

        user.push(user);

        //let userJson = JSON.stringifuser, null, 4);

        //fs.writeFileSync(ruta, )

        res.json ('Crear un usuario');
    },
    perfil: (req, res) => {
        res.json ('Perfil del usuario');
    },
    detalle: (req, res) => {
        res.json ('Detalle del Usuario')
    }
}

module.exports = controller;