const path = require('path');
const fs = require('fs');

const ruta = path.resolve(__dirname, '../data/product.json');
const jsonProducts = fs.readFileSync(ruta, {encoding: 'utf-8'});
let products = JSON.parse(jsonProducts);




const controller = {
    crear: (req, res) => {
        let product = {};
        if (!req.body.name) {
            return res.json ({mgs: 'El campo name es requerido'})
        }

        product.id = product.length +1;
        product.name = req.body.name;
        product.price = req.body.price;
        product.description = req.body.description;
        product.image = req.body.image;

        product.push(product);

        let productsJson = JSON.stringify(product, null, 4);

        fs.writeFileSync(ruta, productsJson)

        res.json ('Crear un producto');
    },
    listar: (req, res) => {
        res.json (products);
    },
    detalle: (req, res) => {
        res.json ('Detalle de productos')
    }
}

module.exports = controller;