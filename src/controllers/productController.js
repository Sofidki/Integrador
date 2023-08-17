const Product = require('../database/models/Product');
const fs = require ('fs');
const path = require ('path');


const controller = {
    crear: async (req, res, file) => {
        try {
        let product = {
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        category: req.body.category,
        brand: req.body.brand,
        image: file.filename,
        colors: req.body.colors,
        }
        
        const productDatabase = await Product.create(product);
        res.status(201).json(productDatabase);
    
    } catch (error){
        if (!req.body.name) {
            return re.json({mgs: 'El campo name es requerido'})
        } 
        res.status(500).json(error);
    }
    },
    update: async (req, res) => {
        const product = await Product.findByIdAndUpdate ({_id: req.params.id}, 
            {
                category: req.body.category,
                brand: req.body.brand,
                colors: req.body.colors,
                }
            );
        return res.status(200).json(product);
    },
    listar: async (req, res) => {
        const products = await Product.find ({});
        res.status(200).json(products);
    },
    detalle: async (req, res) => {
        try {
            const productList = await Product.findById({_id: req.params.id});
            if(!productList) {
            res.status(401).json({success: false});
        }
        res.send(productList);
        } catch (error) {
            console.log(error);
        }
    },
    delete: async (req,res) => {
        try {
            const productOne = await Product.findById({_id: req.params.id});
            fs.unlinkSync(path.resolve(__dirname,`../../public/images/${productOne.image}`));
            let product = await Product.deleteOne({_id: req.params.id});
            res.status(200).json(product);
        } catch (error) {
            res.status(500).json(error);
        };
    },
    buscar: async (req, res) => {
        try{
            const product = await Product.find(req.query.name);            
            res.status(404).json(product);
        } catch (error) {
            res.status(500).json(error);
        }
    }
}

module.exports = controller;