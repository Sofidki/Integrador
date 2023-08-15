const User = require('../database/models/User');


const controller = {
    registro: async (req, res) => {
        try{
        let user = {
        name: req.body.name,
        password: req.body.password,
        email: req.body.email,
        }

        const userDatabase = await User.create(user);
        res.status(201).json(productDatabase);

        
    } catch (error) {
        if (!req.body.name) {
            return res.json ({mgs: 'El campo name es requerido'})
        }
        res.status(500).json({message:'Server error'});
        }
    },
    login: async (req, res) => {
        let user = await User.findOne ({email: req.body.email, password: req.body.password})
        if (!user) {
            return res.status(400).send ('Usuario o contraseña incorrecta')
        }
    },
    detalle: (req, res) => {
        res.json ('Detalle del Usuario')
    }
}

module.exports = controller;