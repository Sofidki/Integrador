const express = require ('express');
const router = express.Router();
const controller = require ('../controllers/userController');

router.post ('/', controller.login);
router.get ('/', controller.perfil);
router.post ('/', controller.registro);



module.exports= router;