const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const ClientsModel = require("./model/Clients")
const ProductUserModel = require("./model/ProductReview")
const ClientUserModel = require("./model/ClientReview")
const WebsiteUserModel = require("./model/WebsiteReview")
const AdminModel = require("./model/Admin")


const app = express()
app.use(express.json())
app.use(cors())


mongoose.connect("mongodb://127.0.0.1:27017/feedback");

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
app.post("/adminlogin", (req, res) => {
    const {adminemail, adminpassword} = req.body;
    AdminModel.findOne({adminemail : adminemail})
    .then(user => {
        if(user) {
            if(user.adminpassword === adminpassword){
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

app.post("/adminsignup", (req, res) => {
    AdminModel.create(req.body)
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

// Get all clients
app.get("/clients", async (req, res) => {
    try {
        const clients = await ClientsModel.find();
        res.status(200).json(clients);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.delete("/clients/:id", async (req, res) => {
    const id = req.params.id;
    try {
        const deletedUser = await ClientsModel.findByIdAndDelete(id);
        if (!deletedUser) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({ message: "User deleted successfully" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


// Get all product reviews
app.get("/productReviews", async (req, res) => {
    try {
        const productReviews = await ProductUserModel.find();
        res.status(200).json(productReviews);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get all client reviews
app.get("/clientReviews", async (req, res) => {
    try {
        const clientReviews = await ClientUserModel.find();
        res.status(200).json(clientReviews);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get all website reviews
app.get("/websiteReviews", async (req, res) => {
    try {
        const websiteReviews = await WebsiteUserModel.find();
        res.status(200).json(websiteReviews);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.listen(3001, () => {
    console.log("server is running")
})