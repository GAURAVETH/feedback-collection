const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const ClientsModel = require("./model/Clients")
const ProductUserModel = require("./model/ProductRating")
const ClientUserModel = require("./model/ClientReview")
const WebsiteUserModel = require("./model/WebsiteReview")


const app = express()
app.use(express.json())
app.use(cors())


mongoose.connect("mongodb://127.0.0.1:27017/feedback-collection");

app.post("/login", (req, res) => {
    const {email, password} = req.body;
    ClientsModel.findOne({email : email})
    .then(user => {
        if(user) {
            if(user.password === password){
                res.json("Success")
            }else{
                res.json("The password is incorrect")
            }
        }else{
            res.json("No record existed")
        }
    })
})


// Register the user and save into the database
app.post("/register", (req, res) => {
    ClientsModel.create(req.body)
    .then(employees => res.json(employees))
    .catch(err => res.json(err))
})

// Save ProductReview into the Database
app.post("/ProductReview", (req, res) =>{
    ProductUserModel.create(req.body)
    .then(product => res.status(201).json(product))
    .catch(err => res.status(400).json(err))
})

// Save ClientReview into the Database
app.post("/ClientReview", (req, res) =>{
    ClientUserModel.create(req.body)
    .then(client => res.status(201).json(client))
    .catch(err => res.status(400).json(err))
})

// Save WebsiteReview into the Database
app.post("/WebsiteReview", (req, res) =>{
    WebsiteUserModel.create(req.body)
    .then(website => res.status(201).json(website))
    .catch(err => res.status(400).json(err))
})



app.listen(3001, () => {
    console.log("server is running")
})