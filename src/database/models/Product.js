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
    category: {
        type: String,
        required: true
    },
    colors: {
        type: String,
        required: true
    },
    brand: String,
    image: String
},{
    timestamps: true,
    collection: 'products'
});

const Product = mongoose.model(`Product`, productoSchema);

module.exports = Product;