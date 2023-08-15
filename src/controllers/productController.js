const { json } = require('express');
const Product = require('../database/models/Product');
const { login } = require('./userController');


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
        console.error(err.status,err.message);
        const status = err.status || 500;
        const message = err.message || 'Falta completar un campo';

        res.status(status).json({
            status: 'error',
            statusCode: status,
            message: message,
        });
    }
    },
    update: async (res, req) => {
        const product = await Product.findByIdAndUpdate (req.params.id, 
            {
                category: req.body.category,
                brand: req.body.brand,
                colors: []
                }
            );
        return res.status(200).json(product);
    },
    listar: async (req, res) => {
        const products = await Product.find ({});
        res.status(200).json(products);
    },
    detalle: async (req, res) => {
        const productList = await Product.findById({_id: req.params.id});

        if (!productList) {
            res.status(500).json({success: false})
        }
        res.send(productList);
    },
    delete: async (res,req) => {
        Product.findByIdAndRemove (req.params.id).then(product => {
            if (product) {
                return res.status(200).json({success:true, message: 'El producto fue borrado'})
            } else {
                return res.status(404).json({success: false, message: 'El producto no encontrado'})
            } 
        }) .catch (error => {
            return res.status(400).json({success:false, error:error})
        })
    },
    buscar: async (req, res) => {
        const product = await Product.find({name: req.quary.name})
        res.json(product)
    }
}

module.exports = controller;