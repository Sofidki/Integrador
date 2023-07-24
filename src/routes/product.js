const path = require ('path');
const express = require ('express');
const multer = require ('multer');
const router = express.Router();
const controller = require ('../controllers/productController');

const storage = multer.diskStorage ({
    destination: (req, file, cb) => {
        cb (null, path.resolve(__dirname, '../../public/images'));
    },
    filename: (req, file, cb) => {
        cb (null, 'image- ${Date.now()}${path.extname(file.originalname)}');
    }
})

const upload = multer ({storage: storage});

router.get ('/listar', controller.listar);
router.get ('/detalle', controller.detalle);
router.post ('/crear', controller.crear);
router.post ('/crear',upload.single('image'));

module.exports= router;