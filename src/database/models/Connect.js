const mongoose = require ('mongoose');


module.exports = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/kriptonitagrow');
        console.log('Conectado a la db');
    } catch (error) {
        console.log(error);
    }
}