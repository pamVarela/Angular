const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name : String,
    category: String,
    price: Number,
    quantity: Number,
    inventory: Number
});

module.exports = mongoose.model("Product", productSchema );