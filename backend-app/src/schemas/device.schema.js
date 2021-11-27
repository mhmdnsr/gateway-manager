const mongoose = require("mongoose");

const deviceSchema = new mongoose.Schema({
    _id: {
        required: true,
        unique: true,
        type: String,
        auto: true
    },
    uid: {
        required: true,
        type: Number
    },
    vendor: {
        required: true,
        type: String,
    },
    createdAt: {
        required: true,
        type: Date
    },
    status: {
        required: true,
        type: Number,
        default: false
    },
    _createdAt: {
        type: Date,
        required: false,
        default: new Date()
    },
    _updatedAt: {
        type: Date,
        required: false,
        default: undefined
    }
});

module.exports = deviceSchema;
