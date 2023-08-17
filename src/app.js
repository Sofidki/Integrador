const path = require('path');
const express = require('express');
const app = express();
const products = require('./routes/product');
const user = require('./routes/user');  
const connectToDb = require ('./database/models/Connect');
const cors = require('cors')

/*Base de datos*/
connectToDb();


//Configuracion
app.use (express.static(path.resolve(__dirname, '../public')));
app.use (express.urlencoded({extended: false}));
app.use (express.json());
app.use (cors());

//Rutas
app.use ('/products', products);
app.use ('/user', user);

app.use (function (req, res, next) {
    return res.status(404) .json ({
        error: "Resource not found",
        message: "Error em el recurso encontrador"
    })
    });



app.listen(3000,() => console.log ('Server corriendo en puerto 3000'));