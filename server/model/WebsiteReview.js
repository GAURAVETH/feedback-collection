const mongoose = require('mongoose');

const WebsiteUserSchema = new mongoose.Schema({
    websitename: {
        type: String,
        required: true
    },
    websiteemail: {
        type: String,
        required: true,
        unique: true
    },
    websiterating: {
        type: Number,
        default: 0
    },
    websitefeedback: {
        type: String,
        required: true
    }
});

const WebsiteUserModel = mongoose.model("websitereview", WebsiteUserSchema);

module.exports = WebsiteUserModel;
