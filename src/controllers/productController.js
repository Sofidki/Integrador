const Product = require('../database/models/Product');


const controller = {
    crear: async (req, res) => {
        try {
        let product = {
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        category: req.body.category,
        brand: req.body.brand,
        image: req.file.filename,
        colors: []
        }
        
        const productDatabase = await Product.create(product);
        res.status(201).json(productDatabase);
    
    } catch (error){
        if (console.error.name){
            return res.status(400).json({message: 'Falta campo name'})
        }
        res.status(500).json({message:'Server error'});
        }
    },
    update: async (res, req) => {
        const product = await Product.findByIdAndUpdate (req.params.id, req.body);
        return res.status(200).json(product);
    },
    listar: async (req, res) => {
        const products = await Product.find ({});
        res.status(200).json(products);
    },
    detalle: (req, res) => {
        res.json ('Detalle de productos')
    },
}

module.exports = controller;