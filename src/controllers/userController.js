const User = require('../database/models/User');


const controller = {
    registro: async (req, res) => {
        try {
        let user = {
        name: req.body.name,
        password: req.body.password,
        email: req.body.email,
        }

        const userDatabase = await User.create(user);
        res.status(201).json(userDatabase);    
    
    } catch (error) {
        if (!req.body.name) {
            return res.json ({mgs: 'El campo name es requerido'})
        }
        res.status(500).json({message:'Server error'});
        }
    },
    login: async (req, res) => {
        try {
            let user = await User.find({email: req.query.email});
            if (!user) {
                return res.status(400).send ('Usuario o contraseña incorrecta')
            }
        res.send(user);
        } catch (error) {
            res.status(404).json(error);
        }
    },
    perfil: (req, res) => {
        res.json ('Perfil del Usuario')
    }
}

module.exports = controller;