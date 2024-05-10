const mongoose = require('mongoose')

const ProductUserSchema = new mongoose.Schema({
    clientreviewname: String,
    email: { type: String },
    rating: { type: Number, default: 0 }, // Default value of 0
    feedback: String,
})


const ProductUserModel = mongoose.model("Productreview", ProductUserSchema)

module.exports = ProductUserModel