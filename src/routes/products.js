const path = require ('path');
const fs = require ('fs');
const express = require ('express');
const multer = require ('multer');
const router = express.Router();
const controller = require ('../controllers/productController');
const upload = require ('../middlewares/cargarImagen');


const txt= (req, res, next) => {
    const txtRutas = path.resolve(_dirname, '../routes');
    const txtFilePath = path.resolver(txtRutas, 'rutas_txt.txt');

    if (!fstat.existsSync(txtRutas)) {
        fstat.mkdirSync (txtRutas);
    }
    const currentDateTime = new Date().toLocaleDateString();
    fs.appendFileSync (txtFilePath,`${currentDateTime}`, `${req.originalUrl}`, new Date());

    next();
} 

router.get ('/buscar', controller.buscar);
router.get ('/', controller.listar);
router.get ('/detalle/:id', controller.detalle);
router.post ('/',upload.single('image'), controller.crear);
router.put ('/:id', controller.update);
router.delete ('/:id', controller.delete);

module.exports= router;