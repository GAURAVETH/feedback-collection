const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: String,
    email: { type: String },
    ratings: { type: Number, default: 0 }, // Default value of 0
    feedback: String,
})


const UserModel = mongoose.model("user", UserSchema)

module.exports = UserModel