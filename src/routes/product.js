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

router.get ('/listar', controller.listar);
router.get ('/detalle/:id', controller.detalle);
router.post ('/crear',upload.single('image'), controller.crear);
router.put ('/update/:id', controller.update);
router.delete ('/delete/:id', controller.delete);
router.get ('/buscar', controller.buscar);

module.exports= router;