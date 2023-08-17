const express = require ('express');
const router = express.Router();
const controller = require ('../controllers/userController');

router.post ('/login', controller.login);
router.get ('/perfil', controller.perfil);
router.post ('/registro', controller.registro);



module.exports= router;