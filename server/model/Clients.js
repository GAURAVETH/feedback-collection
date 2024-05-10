 const mongoose = require('mongoose')

 const ClientsSchema = new mongoose.Schema({
    name:String,
    email:{ type: String, unique: true },
    password:String
 })

 const ClientsModel = mongoose.model("Clients-register", ClientsSchema)
 
 module.exports = ClientsModel