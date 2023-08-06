const mongoose = require ('mongoose');

const productoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: String,
    colors: [String]
});

const Product = mongoose.model(`Product`, productSchema);

module.exports = Product;