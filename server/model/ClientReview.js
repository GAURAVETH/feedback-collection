const mongoose = require('mongoose');

const ClientUserSchema = new mongoose.Schema({
    clientname: {
        type: String,
        required: true
    },
    clientemail: {
        type: String,
        required: true,
        unique: true
    },
    clientrating: {
        type: Number,
        default: 0
    },
    clientfeedback: {
        type: String,
        required: true
    }
});

const ClientUserModel = mongoose.model("Clientreview", ClientUserSchema);

module.exports = ClientUserModel;
