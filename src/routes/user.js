const express = require ('express');
const router = express.Router();
const controller = require ('../controllers/userController');

router.post ('/login', controller.login);
router.get ('/detalle', controller.detalle);
router.post ('/registro', controller.registro);



module.exports= router;