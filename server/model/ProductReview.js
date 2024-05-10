const mongoose = require('mongoose')

const ProductUserSchema = new mongoose.Schema({
    productname: String,
    productemail: { type: String },
    productrating: { type: Number, default: 0 }, // Default value of 0
    productfeedback: String,
});


const ProductUserModel = mongoose.model("Productreview", ProductUserSchema)

module.exports = ProductUserModel