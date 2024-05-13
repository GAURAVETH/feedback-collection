const mongoose = require('mongoose');

const AdminSchema = new mongoose.Schema({
    adminname: {
        type: String,
        required: true
    },
    adminemail: {
        type: String,
        required: true,
        unique: true,
    },
    adminpassword: {
        type: String,
        required: true
    }
});

const AdminModel = mongoose.model('Admin', AdminSchema);

module.exports = AdminModel;
